;; Generate by ChatGPT and is meant to help with splitting a cljc file into two seperate parts cljs and clj, see `split-source`

(ns scittle-kitchen.cljc
  "Resolve reader conditionals by patching original source, not printing forms."
  (:require 
   [clojure.string :as str]
   [rewrite-clj.node :as n]
   [rewrite-clj.parser :as p]))

(defn- fail [message node]
  (throw (ex-info message (select-keys (meta node) [:row :col]))))

(defn- code-children [node]
  (remove n/whitespace-or-comment? (n/children node)))

(defn- conditional-kind [node]
  (when (= :reader-macro (n/tag node))
    ({"?" :normal "?@" :splice}
     (some-> node code-children first n/string))))

(defn- branch [node features]
  (let [body (second (code-children node))]
    (when-not (= :list (some-> body n/tag))
      (fail "Reader conditional body must be a list" node))
    (let [forms (code-children body)]
      (when (some #(= :uneval (n/tag %)) forms)
        (fail "Discard directly in conditional body is unsupported" node))
      (when (odd? (count forms))
        (fail "Reader conditional requires feature/form pairs" node))
      (doseq [[feature _] (partition 2 forms)]
        (let [text (n/string feature)]
          (when-not (and (n/keyword-node? feature)
                         (not (str/starts-with? text "::")))
            (fail "Conditional features must be explicit keywords" feature))
          (when (#{":else" ":none"} text)
            (fail "Reserved reader conditional feature" feature))))
      (first (filter (comp features n/string first) (partition 2 forms))))))

(defn- source-span-fn [source]
  ;; Count original line lengths so CRLF and CR offsets survive parser normalization.
  (let [starts (vec (reductions + 0
                               (map count (re-seq #"[^\r\n]*(?:\r\n|\r|\n)" source))))
        offset (fn [row col] (+ (starts (dec row)) (dec col)))]
    (fn [node]
      (let [{:keys [row col end-row end-col]} (meta node)]
        [(offset row col) (offset end-row end-col)]))))

(defn- whitespace? [c]
  (or (nil? c) (= c \,) (Character/isWhitespace ^char c)))

(defn- separate [source start end text]
  ;; The removed '#' may have separated adjacent tokens. Preserve that boundary.
  (let [space? (fn [outside inside delimiters]
                 (not (or (whitespace? outside) (whitespace? inside)
                          (delimiters outside))))]
    (if (empty? text)
      " "
      (str (when (space? (get source (dec start)) (first text) #{\( \[ \{}) " ")
           text
           (when (space? (get source end) (last text) #{\) \] \}}) " ")))))

(defn- patch [source start end edits]
  ;; Traversal supplies disjoint edits in source order.
  (let [[cursor parts]
        (reduce (fn [[cursor parts] [a b text]]
                  [b (conj parts (subs source cursor a) text)])
                [start []] edits)]
    (apply str (conj parts (subs source cursor end)))))

(defn- specializer [source]
  (let [root (p/parse-string-all source)
        span (source-span-fn source)]
    (fn [features]
      (when-not (and (set? features) (every? keyword? features))
        (throw (ex-info "Features must be a set of keywords" {:features features})))
      (let [features (conj (set (map str features)) ":default")]
        (letfn [(render [start end nodes parent]
                  (patch source start end (mapcat #(edits % parent) nodes)))
                (edits [node parent]
                  (if-let [kind (conditional-kind node)]
                    [(edit node parent kind)]
                    (when (n/inner? node)
                      (mapcat #(edits % (n/tag node)) (n/children node)))))
                (edit [node parent kind]
                  (when (and (= kind :splice)
                             (not (#{:list :vector :map :set :fn} parent)))
                    (fail "Splicing conditional must be directly inside a collection" node))
                  (let [[start end] (span node)
                        [feature selected] (branch node features)]
                    [start end
                     (if-not selected
                       " "
                       (let [[a b] (span selected)
                             [_ feature-end] (span feature)
                             gap (subs source feature-end a)
                             ;; Retain comments between the selected keyword and form.
                             prefix (when (str/includes? gap ";") gap)
                             text (if (= kind :splice)
                                    (do
                                      (when-not (#{:list :vector} (n/tag selected))
                                        (fail "Splice branch must be a literal list or vector" selected))
                                      (render (inc a) (dec b) (n/children selected) (n/tag selected)))
                                    (render a b [selected] parent))]
                         (separate source start end (str prefix text))))]))]
          (render 0 (count source) [root] nil))))))

(defn split-source
  "Parse once; return {:clj source-string :cljs source-string}."
  [source]
  (let [emit (specializer source)]
    {:clj (emit #{:clj}) :cljs (emit #{:cljs})}))
