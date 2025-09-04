(function(){
'use strict';
var cljs$cst$9064$dangerous_html = new $APP.cljs.core.Keyword(null, "dangerous-html", "dangerous-html", 250954837), cljs$cst$9413$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_loop_tpl = new $APP.cljs.core.Symbol("sci.configs.hoplon.hoplon", "loop-tpl", "sci.configs.hoplon.hoplon/loop-tpl", 1342466297, null), cljs$cst$9259$hoplon_DOT_core_SLASH_track = new $APP.cljs.core.Symbol("hoplon.core", "track", "hoplon.core/track", 621141641, null), cljs$cst$9279$hoplon_DOT_core_SLASH_menuitem = new $APP.cljs.core.Symbol("hoplon.core", 
"menuitem", "hoplon.core/menuitem", 1169242669, null), cljs$cst$9088$hoplon_DOT_core_SLASH_add_initfn_BANG_ = new $APP.cljs.core.Symbol("hoplon.core", "add-initfn!", "hoplon.core/add-initfn!", 1336801363, null), cljs$cst$9151$IHoplonAttribute = new $APP.cljs.core.Symbol(null, "IHoplonAttribute", "IHoplonAttribute", 1863510856, null), cljs$cst$9150$colgroup = new $APP.cljs.core.Symbol(null, "colgroup", "colgroup", -2003317124, null), cljs$cst$9251$hoplon_DOT_core_SLASH_pre = new $APP.cljs.core.Symbol("hoplon.core", 
"pre", "hoplon.core/pre", 947680313, null), cljs$cst$9167$native_node_QMARK_ = new $APP.cljs.core.Symbol(null, "native-node?", "native-node?", -537790681, null), cljs$cst$9260$hoplon_DOT_core_SLASH_strong = new $APP.cljs.core.Symbol("hoplon.core", "strong", "hoplon.core/strong", -1175892550, null), cljs$cst$9194$html_var = new $APP.cljs.core.Symbol(null, "html-var", "html-var", 897308651, null), cljs$cst$9199$cite = new $APP.cljs.core.Symbol(null, "cite", "cite", -744995773, null), cljs$cst$9339$hoplon_DOT_core_SLASH_append_child_BANG_ = 
new $APP.cljs.core.Symbol("hoplon.core", "append-child!", "hoplon.core/append-child!", 491550174, null), cljs$cst$9337$hoplon_DOT_core_SLASH_header = new $APP.cljs.core.Symbol("hoplon.core", "header", "hoplon.core/header", -1592302450, null), cljs$cst$9103$_hoplon_kids = new $APP.cljs.core.Symbol(null, "-hoplon-kids", "-hoplon-kids", -1688115025, null), cljs$cst$9125$ruby = new $APP.cljs.core.Symbol(null, "ruby", "ruby", -653698108, null), cljs$cst$9419$consequent = new $APP.cljs.core.Symbol(null, 
"consequent", "consequent", 1875046170, null), cljs$cst$9216$replace_child_BANG_ = new $APP.cljs.core.Symbol(null, "replace-child!", "replace-child!", 1429236716, null), cljs$cst$9384$hoplon_DOT_core_SLASH_shadow = new $APP.cljs.core.Symbol("hoplon.core", "shadow", "hoplon.core/shadow", -840643655, null), cljs$cst$9213$___GT_ = new $APP.cljs.core.Symbol(null, "--\x3e", "--\x3e", -682358595, null), cljs$cst$9370$hoplon_DOT_core_SLASH_html = new $APP.cljs.core.Symbol("hoplon.core", "html", "hoplon.core/html", 
-296734915, null), cljs$cst$9318$hoplon_DOT_core_SLASH__LT__BANG___ = new $APP.cljs.core.Symbol("hoplon.core", "\x3c!--", "hoplon.core/\x3c!--", -187891589, null), cljs$cst$9046$hoplon_DOT_core_SLASH_default = new $APP.cljs.core.Keyword("hoplon.core", "default", "hoplon.core/default", -778824365), cljs$cst$9162$on_BANG_ = new $APP.cljs.core.Symbol(null, "on!", "on!", -1979401336, null), cljs$cst$9177$multicol = new $APP.cljs.core.Symbol(null, "multicol", "multicol", 321222387, null), cljs$cst$9254$hoplon_DOT_core_SLASH_$comment = 
new $APP.cljs.core.Symbol("hoplon.core", "$comment", "hoplon.core/$comment", -841459469, null), cljs$cst$9058$hoplon_DOT_core_SLASH____GT_ = new $APP.cljs.core.Keyword("hoplon.core", "--\x3e", "hoplon.core/--\x3e", 1031510657), cljs$cst$9127$details = new $APP.cljs.core.Symbol(null, "details", "details", -697640358, null), cljs$cst$9134$invoke_BANG_ = new $APP.cljs.core.Symbol(null, "invoke!", "invoke!", 1616739712, null), cljs$cst$9178$blockquote = new $APP.cljs.core.Symbol(null, "blockquote", "blockquote", 
2012795717, null), cljs$cst$9315$hoplon_DOT_core_SLASH_head = new $APP.cljs.core.Symbol("hoplon.core", "head", "hoplon.core/head", -69306317, null), cljs$cst$9312$hoplon_DOT_core_SLASH_native_node_QMARK_ = new $APP.cljs.core.Symbol("hoplon.core", "native-node?", "hoplon.core/native-node?", 669110002, null), cljs$cst$9197$hoplon_DOT_core_SLASH_IHoplonAttribute = new $APP.cljs.core.Symbol("hoplon.core", "IHoplonAttribute", "hoplon.core/IHoplonAttribute", 1461891875, null), cljs$cst$9427$with_dom = 
new $APP.cljs.core.Symbol(null, "with-dom", "with-dom", -1749339684, null), cljs$cst$9358$hoplon_DOT_core_SLASH__elem_BANG_ = new $APP.cljs.core.Symbol("hoplon.core", "-elem!", "hoplon.core/-elem!", 530920125, null), cljs$cst$9342$hoplon_DOT_core_SLASH___GT_hoplon = new $APP.cljs.core.Symbol("hoplon.core", "-\x3ehoplon", "hoplon.core/-\x3ehoplon", 479429442, null), cljs$cst$9192$elem_BANG_ = new $APP.cljs.core.Symbol(null, "elem!", "elem!", 695506448, null), cljs$cst$9071$item__112268__auto__ = new $APP.cljs.core.Symbol(null, 
"item__112268__auto__", "item__112268__auto__", -101370495, null), cljs$cst$9368$hoplon_DOT_core_SLASH____GT_ = new $APP.cljs.core.Symbol("hoplon.core", "--\x3e", "hoplon.core/--\x3e", -1622925112, null), cljs$cst$9089$_DOT_createTextNode = new $APP.cljs.core.Symbol(null, ".createTextNode", ".createTextNode", -80955965, null), cljs$cst$9207$ns_dispatcher = new $APP.cljs.core.Symbol(null, "ns-dispatcher", "ns-dispatcher", 1133123206, null), cljs$cst$9258$hoplon_DOT_core_SLASH_meter = new $APP.cljs.core.Symbol("hoplon.core", 
"meter", "hoplon.core/meter", 512298723, null), cljs$cst$9068$hoplon_DOT_core_SLASH_elem = new $APP.cljs.core.Symbol("hoplon.core", "elem", "hoplon.core/elem", -27771848, null), cljs$cst$9183$title = new $APP.cljs.core.Symbol(null, "title", "title", -2017930186, null), cljs$cst$9050$hoplon_SLASH_reset = new $APP.cljs.core.Keyword("hoplon", "reset", "hoplon/reset", 1677297148), cljs$cst$9219$hoplonify_BANG_ = new $APP.cljs.core.Symbol(null, "hoplonify!", "hoplonify!", -1486893872, null), cljs$cst$9304$hoplon_DOT_core_SLASH_on_BANG_ = 
new $APP.cljs.core.Symbol("hoplon.core", "on!", "hoplon.core/on!", 1916068661, null), cljs$cst$9269$hoplon_DOT_core_SLASH_select = new $APP.cljs.core.Symbol("hoplon.core", "select", "hoplon.core/select", 2116250185, null), cljs$cst$9432$with_interval = new $APP.cljs.core.Symbol(null, "with-interval", "with-interval", 1943237149, null), cljs$cst$9310$hoplon_DOT_core_SLASH_form = new $APP.cljs.core.Symbol("hoplon.core", "form", "hoplon.core/form", 940271613, null), cljs$cst$9335$hoplon_DOT_core_SLASH__replace_child_BANG_ = 
new $APP.cljs.core.Symbol("hoplon.core", "-replace-child!", "hoplon.core/-replace-child!", 759947266, null), cljs$cst$9307$hoplon_DOT_core_SLASH_noscript = new $APP.cljs.core.Symbol("hoplon.core", "noscript", "hoplon.core/noscript", 2144731467, null), cljs$cst$9060$smart_class = new $APP.cljs.core.Keyword(null, "smart-class", "smart-class", 1727953435), cljs$cst$9092$_DOT__nodeValue = new $APP.cljs.core.Symbol(null, ".-nodeValue", ".-nodeValue", 1324575544, null), cljs$cst$9357$hoplon_DOT_core_SLASH_add_children_BANG_ = 
new $APP.cljs.core.Symbol("hoplon.core", "add-children!", "hoplon.core/add-children!", 1252070452, null), cljs$cst$9108$meter = new $APP.cljs.core.Symbol(null, "meter", "meter", 1452889916, null), cljs$cst$9052$attr_SLASH_default = new $APP.cljs.core.Keyword("attr", "default", "attr/default", -1990847735), cljs$cst$9073$con__112287__auto__ = new $APP.cljs.core.Symbol(null, "con__112287__auto__", "con__112287__auto__", 688050551, null), cljs$cst$9341$hoplon_DOT_core_SLASH_keygen = new $APP.cljs.core.Symbol("hoplon.core", 
"keygen", "hoplon.core/keygen", 128283967, null), cljs$cst$9429$with_timeout = new $APP.cljs.core.Symbol(null, "with-timeout", "with-timeout", 795197966, null), cljs$cst$9209$_value = new $APP.cljs.core.Symbol(null, "_value", "_value", -1358560717, null), cljs$cst$9182$area = new $APP.cljs.core.Symbol(null, "area", "area", 2112538783, null), cljs$cst$9080$tpl__112304__auto__ = new $APP.cljs.core.Symbol(null, "tpl__112304__auto__", "tpl__112304__auto__", -1161747921, null), cljs$cst$9422$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_when_tpl = 
new $APP.cljs.core.Symbol("sci.configs.hoplon.hoplon", "when-tpl", "sci.configs.hoplon.hoplon/when-tpl", 2053757036, null), cljs$cst$9344$hoplon_DOT_core_SLASH_elem_BANG_ = new $APP.cljs.core.Symbol("hoplon.core", "elem!", "hoplon.core/elem!", -788234547, null), cljs$cst$9115$_append_child_BANG_ = new $APP.cljs.core.Symbol(null, "-append-child!", "-append-child!", 533351997, null), cljs$cst$9381$hoplon_DOT_core_SLASH__append_child_BANG_ = new $APP.cljs.core.Symbol("hoplon.core", "-append-child!", 
"hoplon.core/-append-child!", -941987870, null), cljs$cst$9093$hoplon_DOT_core = new $APP.cljs.core.Symbol(null, "hoplon.core", "hoplon.core", -481580437, null), cljs$cst$9057$css_SLASH_default = new $APP.cljs.core.Keyword("css", "default", "css/default", -1988445445), cljs$cst$9119$_set_styles_BANG_ = new $APP.cljs.core.Keyword(null, "-set-styles!", "-set-styles!", 350209983), cljs$cst$9387$hoplon_DOT_core_SLASH_samp = new $APP.cljs.core.Symbol("hoplon.core", "samp", "hoplon.core/samp", 1946074530, 
null), cljs$cst$9373$hoplon_DOT_core_SLASH_nav = new $APP.cljs.core.Symbol("hoplon.core", "nav", "hoplon.core/nav", 1419493265, null), cljs$cst$9371$hoplon_DOT_core_SLASH_replace_child_BANG_ = new $APP.cljs.core.Symbol("hoplon.core", "replace-child!", "hoplon.core/replace-child!", -1660944377, null), cljs$cst$9081$tpl__112311__auto__ = new $APP.cljs.core.Symbol(null, "tpl__112311__auto__", "tpl__112311__auto__", 440051844, null), cljs$cst$9142$items = new $APP.cljs.core.Symbol(null, "items", "items", 
-1622480831, null), cljs$cst$9129$set_attributes_BANG_ = new $APP.cljs.core.Symbol(null, "set-attributes!", "set-attributes!", 99467073, null), cljs$cst$9250$hoplon_DOT_core_SLASH_main = new $APP.cljs.core.Symbol("hoplon.core", "main", "hoplon.core/main", -1415752737, null), cljs$cst$9221$figure = new $APP.cljs.core.Symbol(null, "figure", "figure", 1079137448, null), cljs$cst$9364$hoplon_DOT_core_SLASH_button = new $APP.cljs.core.Symbol("hoplon.core", "button", "hoplon.core/button", 1894400891, null), 
cljs$cst$9130$abbr = new $APP.cljs.core.Symbol(null, "abbr", "abbr", -565843885, null), cljs$cst$9319$hoplon_DOT_core_SLASH_base = new $APP.cljs.core.Symbol("hoplon.core", "base", "hoplon.core/base", -1262255626, null), cljs$cst$9369$hoplon_DOT_core_SLASH_mark = new $APP.cljs.core.Symbol("hoplon.core", "mark", "hoplon.core/mark", -2081377669, null), cljs$cst$9102$datalist = new $APP.cljs.core.Symbol(null, "datalist", "datalist", 405488053, null), cljs$cst$9223$menu = new $APP.cljs.core.Symbol(null, 
"menu", "menu", 1992786725, null), cljs$cst$9154$progress = new $APP.cljs.core.Symbol(null, "progress", "progress", 1884855074, null), cljs$cst$9152$_attribute_BANG_ = new $APP.cljs.core.Symbol(null, "-attribute!", "-attribute!", -1535025260, null), cljs$cst$9233$iframe = new $APP.cljs.core.Symbol(null, "iframe", "iframe", -1770013743, null), cljs$cst$9386$hoplon_DOT_core_SLASH_kw_dispatcher = new $APP.cljs.core.Symbol("hoplon.core", "kw-dispatcher", "hoplon.core/kw-dispatcher", -1491491289, null), 
cljs$cst$9236$output = new $APP.cljs.core.Symbol(null, "output", "output", 534662484, null), cljs$cst$9332$hoplon_DOT_core_SLASH_title = new $APP.cljs.core.Symbol("hoplon.core", "title", "hoplon.core/title", -813088871, null), cljs$cst$9044$hoplon_SLASH_kids = new $APP.cljs.core.Keyword("hoplon", "kids", "hoplon/kids", -1935039787), cljs$cst$9172$_LT__BANG___ = new $APP.cljs.core.Symbol(null, "\x3c!--", "\x3c!--", 1021130772, null), cljs$cst$9401$hoplon_DOT_core_SLASH__do_BANG_ = new $APP.cljs.core.Symbol("hoplon.core", 
"-do!", "hoplon.core/-do!", -218341060, null), cljs$cst$9215$html = new $APP.cljs.core.Symbol(null, "html", "html", 641734630, null), cljs$cst$9249$hoplon_DOT_core_SLASH_article = new $APP.cljs.core.Symbol("hoplon.core", "article", "hoplon.core/article", 1481399269, null), cljs$cst$9272$hoplon_DOT_core_SLASH_del = new $APP.cljs.core.Symbol("hoplon.core", "del", "hoplon.core/del", 1547545852, null), cljs$cst$9161$template = new $APP.cljs.core.Symbol(null, "template", "template", 938125843, null), 
cljs$cst$9376$hoplon_DOT_core_SLASH_body = new $APP.cljs.core.Symbol("hoplon.core", "body", "hoplon.core/body", 529844441, null), cljs$cst$9168$_node = new $APP.cljs.core.Symbol(null, "-node", "-node", -643594349, null), cljs$cst$9326$hoplon_DOT_core_SLASH_div = new $APP.cljs.core.Symbol("hoplon.core", "div", "hoplon.core/div", 1761334764, null), cljs$cst$9173$parse_args = new $APP.cljs.core.Symbol(null, "parse-args", "parse-args", -726421751, null), cljs$cst$9333$hoplon_DOT_core_SLASH_dfn = new $APP.cljs.core.Symbol("hoplon.core", 
"dfn", "hoplon.core/dfn", 136554587, null), cljs$cst$9241$small = new $APP.cljs.core.Symbol(null, "small", "small", -520957065, null), cljs$cst$9338$hoplon_DOT_core_SLASH_source = new $APP.cljs.core.Symbol("hoplon.core", "source", "hoplon.core/source", -1879363953, null), cljs$cst$9431$msec = new $APP.cljs.core.Symbol(null, "msec", "msec", -1372914914, null), cljs$cst$9350$hoplon_DOT_core_SLASH__attribute_BANG_ = new $APP.cljs.core.Symbol("hoplon.core", "-attribute!", "hoplon.core/-attribute!", -1666107807, 
null), cljs$cst$9421$when_tpl = new $APP.cljs.core.Symbol(null, "when-tpl", "when-tpl", 761622032, null), cljs$cst$9346$hoplon_DOT_core_SLASH_tbody = new $APP.cljs.core.Symbol("hoplon.core", "tbody", "hoplon.core/tbody", 350818428, null), cljs$cst$9204$add_children_BANG_ = new $APP.cljs.core.Symbol(null, "add-children!", "add-children!", -2102268967, null), cljs$cst$9231$video = new $APP.cljs.core.Symbol(null, "video", "video", 1797419657, null), cljs$cst$9282$hoplon_DOT_core_SLASH_html_object = 
new $APP.cljs.core.Symbol("hoplon.core", "html-object", "hoplon.core/html-object", 1606047375, null), cljs$cst$9101$main = new $APP.cljs.core.Symbol(null, "main", "main", -477271134, null), cljs$cst$9393$hoplon_DOT_core_SLASH_span = new $APP.cljs.core.Symbol("hoplon.core", "span", "hoplon.core/span", -318984013, null), cljs$cst$9091$t__112338__auto__ = new $APP.cljs.core.Symbol(null, "t__112338__auto__", "t__112338__auto__", -1781098786, null), cljs$cst$9128$kbd = new $APP.cljs.core.Symbol(null, 
"kbd", "kbd", 1956688402, null), cljs$cst$9214$mark = new $APP.cljs.core.Symbol(null, "mark", "mark", 1266715182, null), cljs$cst$9265$hoplon_DOT_core_SLASH_details = new $APP.cljs.core.Symbol("hoplon.core", "details", "hoplon.core/details", -296144377, null), cljs$cst$9122$_remove_child_BANG_ = new $APP.cljs.core.Keyword(null, "-remove-child!", "-remove-child!", -1878776376), cljs$cst$9299$hoplon_DOT_core_SLASH_prerendering_QMARK_ = new $APP.cljs.core.Symbol("hoplon.core", "prerendering?", "hoplon.core/prerendering?", 
838432616, null), cljs$cst$9274$hoplon_DOT_core_SLASH_col = new $APP.cljs.core.Symbol("hoplon.core", "col", "hoplon.core/col", 886004812, null), cljs$cst$9362$hoplon_DOT_core_SLASH_style = new $APP.cljs.core.Symbol("hoplon.core", "style", "hoplon.core/style", -1939967198, null), cljs$cst$9225$$text = new $APP.cljs.core.Symbol(null, "$text", "$text", 657032417, null), cljs$cst$9095$elem = new $APP.cljs.core.Symbol(null, "elem", "elem", -2035804713, null), cljs$cst$9145$attribute_QMARK_ = new $APP.cljs.core.Symbol(null, 
"attribute?", "attribute?", -450296259, null), cljs$cst$9353$hoplon_DOT_core_SLASH_audio = new $APP.cljs.core.Symbol("hoplon.core", "audio", "hoplon.core/audio", 113647031, null), cljs$cst$9261$hoplon_DOT_core_SLASH__insert_before_BANG_ = new $APP.cljs.core.Symbol("hoplon.core", "-insert-before!", "hoplon.core/-insert-before!", 1742873079, null), cljs$cst$9359$hoplon_DOT_core_SLASH_ns_dispatcher = new $APP.cljs.core.Symbol("hoplon.core", "ns-dispatcher", "hoplon.core/ns-dispatcher", -1952788631, 
null), cljs$cst$9175$when_dom = new $APP.cljs.core.Symbol(null, "when-dom", "when-dom", -644299077, null), cljs$cst$9336$hoplon_DOT_core_SLASH_hgroup = new $APP.cljs.core.Symbol("hoplon.core", "hgroup", "hoplon.core/hgroup", 1562809047, null), cljs$cst$9156$legend = new $APP.cljs.core.Symbol(null, "legend", "legend", 613339282, null), cljs$cst$9438$scittle_DOT_hoplon_SLASH_hoplon = new $APP.cljs.core.Keyword("scittle.hoplon", "hoplon", "scittle.hoplon/hoplon", 1824274275), cljs$cst$9340$hoplon_DOT_core_SLASH_do_watch = 
new $APP.cljs.core.Symbol("hoplon.core", "do-watch", "hoplon.core/do-watch", 1761231253, null), cljs$cst$9077$p__112290__auto__ = new $APP.cljs.core.Symbol(null, "p__112290__auto__", "p__112290__auto__", 2084714652, null), cljs$cst$9287$hoplon_DOT_core_SLASH_attribute_QMARK_ = new $APP.cljs.core.Symbol("hoplon.core", "attribute?", "hoplon.core/attribute?", -1657176094, null), cljs$cst$9280$hoplon_DOT_core_SLASH_sup = new $APP.cljs.core.Symbol("hoplon.core", "sup", "hoplon.core/sup", 537427686, null), 
cljs$cst$9285$hoplon_DOT_core_SLASH_sub = new $APP.cljs.core.Symbol("hoplon.core", "sub", "hoplon.core/sub", -1393807279, null), cljs$cst$9418$predicate = new $APP.cljs.core.Symbol(null, "predicate", "predicate", -101970333, null), cljs$cst$9239$node_QMARK_ = new $APP.cljs.core.Symbol(null, "node?", "node?", -946740002, null), cljs$cst$9111$figcaption = new $APP.cljs.core.Symbol(null, "figcaption", "figcaption", -149590520, null), cljs$cst$9146$element_QMARK_ = new $APP.cljs.core.Symbol(null, "element?", 
"element?", -134836339, null), cljs$cst$9298$hoplon_DOT_core_SLASH_spliced = new $APP.cljs.core.Symbol("hoplon.core", "spliced", "hoplon.core/spliced", 518662665, null), cljs$cst$9355$hoplon_DOT_core_SLASH_bdo = new $APP.cljs.core.Symbol("hoplon.core", "bdo", "hoplon.core/bdo", -1429086154, null), cljs$cst$9222$textarea = new $APP.cljs.core.Symbol(null, "textarea", "textarea", 990155703, null), cljs$cst$9349$hoplon_DOT_core_SLASH_param = new $APP.cljs.core.Symbol("hoplon.core", "param", "hoplon.core/param", 
31376377, null), cljs$cst$9290$hoplon_DOT_core_SLASH_bdi = new $APP.cljs.core.Symbol("hoplon.core", "bdi", "hoplon.core/bdi", 1526527940, null), cljs$cst$9180$picture = new $APP.cljs.core.Symbol(null, "picture", "picture", 718588123, null), cljs$cst$9132$optgroup = new $APP.cljs.core.Symbol(null, "optgroup", "optgroup", -916153551, null), cljs$cst$9351$hoplon_DOT_core_SLASH_input = new $APP.cljs.core.Symbol("hoplon.core", "input", "hoplon.core/input", 1256884653, null), cljs$cst$9079$hoplon_DOT_core_SLASH_if_tpl = 
new $APP.cljs.core.Symbol("hoplon.core", "if-tpl", "hoplon.core/if-tpl", -1375191948, null), cljs$cst$9229$samp = new $APP.cljs.core.Symbol(null, "samp", "samp", -1148294633, null), cljs$cst$9135$add_initfn_BANG_ = new $APP.cljs.core.Symbol(null, "add-initfn!", "add-initfn!", -2017619924, null), cljs$cst$9218$nav = new $APP.cljs.core.Symbol(null, "nav", "nav", -1934895292, null), cljs$cst$9305$hoplon_DOT_core_SLASH_link = new $APP.cljs.core.Symbol("hoplon.core", "link", "hoplon.core/link", 809886416, 
null), cljs$cst$9076$tpl__112289__auto__ = new $APP.cljs.core.Symbol(null, "tpl__112289__auto__", "tpl__112289__auto__", 1022199275, null), cljs$cst$9284$hoplon_DOT_core_SLASH_data = new $APP.cljs.core.Symbol("hoplon.core", "data", "hoplon.core/data", 723156445, null), cljs$cst$9410$safe_deref = new $APP.cljs.core.Symbol(null, "safe-deref", "safe-deref", 803105294, null), cljs$cst$9382$hoplon_DOT_core_SLASH_$text = new $APP.cljs.core.Symbol("hoplon.core", "$text", "hoplon.core/$text", 2136593178, 
null), cljs$cst$9316$hoplon_DOT_core_SLASH_rtc = new $APP.cljs.core.Symbol("hoplon.core", "rtc", "hoplon.core/rtc", -1945431043, null), cljs$cst$9097$set_styles_BANG_ = new $APP.cljs.core.Symbol(null, "set-styles!", "set-styles!", -425912460, null), cljs$cst$9415$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_for_tpl = new $APP.cljs.core.Symbol("sci.configs.hoplon.hoplon", "for-tpl", "sci.configs.hoplon.hoplon/for-tpl", 1678133176, null), cljs$cst$9123$_replace_child_BANG_ = new $APP.cljs.core.Keyword(null, 
"-replace-child!", "-replace-child!", 59879958), cljs$cst$9301$hoplon_DOT_core_SLASH_address = new $APP.cljs.core.Symbol("hoplon.core", "address", "hoplon.core/address", -885922238, null), cljs$cst$9311$hoplon_DOT_core_SLASH_canvas = new $APP.cljs.core.Symbol("hoplon.core", "canvas", "hoplon.core/canvas", 780175555, null), cljs$cst$9400$hoplon_DOT_core_SLASH_small = new $APP.cljs.core.Symbol("hoplon.core", "small", "hoplon.core/small", 417465548, null), cljs$cst$9226$html_time = new $APP.cljs.core.Symbol(null, 
"html-time", "html-time", -1232516755, null), cljs$cst$9206$_elem_BANG_ = new $APP.cljs.core.Symbol(null, "-elem!", "-elem!", 666196326, null), cljs$cst$9074$cljs_DOT_core_SLASH_delay = new $APP.cljs.core.Symbol("cljs.core", "delay", "cljs.core/delay", -406049125, null), cljs$cst$9196$param = new $APP.cljs.core.Symbol(null, "param", "param", -640803946, null), cljs$cst$9343$hoplon_DOT_core_SLASH_footer = new $APP.cljs.core.Symbol("hoplon.core", "footer", "hoplon.core/footer", 160994926, null), cljs$cst$9363$hoplon_DOT_core_SLASH_i = 
new $APP.cljs.core.Symbol("hoplon.core", "i", "hoplon.core/i", 1466919115, null), cljs$cst$9360$hoplon_DOT_core_SLASH_a = new $APP.cljs.core.Symbol("hoplon.core", "a", "hoplon.core/a", 992468272, null), cljs$cst$9317$hoplon_DOT_core_SLASH_b = new $APP.cljs.core.Symbol("hoplon.core", "b", "hoplon.core/b", -233734078, null), cljs$cst$9324$hoplon_DOT_core_SLASH_multicol = new $APP.cljs.core.Symbol("hoplon.core", "multicol", "hoplon.core/multicol", -346775896, null), cljs$cst$9243$hoplon_DOT_core_SLASH_u = 
new $APP.cljs.core.Symbol("hoplon.core", "u", "hoplon.core/u", 1422382579, null), cljs$cst$9266$hoplon_DOT_core_SLASH_q = new $APP.cljs.core.Symbol("hoplon.core", "q", "hoplon.core/q", 1120530563, null), cljs$cst$9361$hoplon_DOT_core_SLASH_s = new $APP.cljs.core.Symbol("hoplon.core", "s", "hoplon.core/s", 520544672, null), cljs$cst$9309$hoplon_DOT_core_SLASH_p = new $APP.cljs.core.Symbol("hoplon.core", "p", "hoplon.core/p", -1294400911, null), cljs$cst$9211$_node = new $APP.cljs.core.Keyword(null, 
"-node", "-node", 2010841420), cljs$cst$9398$hoplon_DOT_core_SLASH_node_QMARK_ = new $APP.cljs.core.Symbol("hoplon.core", "node?", "hoplon.core/node?", -1618867071, null), cljs$cst$9155$html_meta = new $APP.cljs.core.Symbol(null, "html-meta", "html-meta", 1269458748, null), cljs$cst$9126$option = new $APP.cljs.core.Symbol(null, "option", "option", 1705663799, null), cljs$cst$9200$audio = new $APP.cljs.core.Symbol(null, "audio", "audio", -835308448, null), cljs$cst$9120$_hoplon_kids = new $APP.cljs.core.Keyword(null, 
"-hoplon-kids", "-hoplon-kids", 966320744), cljs$cst$9380$hoplon_DOT_core_SLASH_dialog = new $APP.cljs.core.Symbol("hoplon.core", "dialog", "hoplon.core/dialog", -298682347, null), cljs$cst$9121$_append_child_BANG_ = new $APP.cljs.core.Keyword(null, "-append-child!", "-append-child!", -1107179530), cljs$cst$9328$hoplon_DOT_core_SLASH_hl_BANG_ = new $APP.cljs.core.Symbol("hoplon.core", "hl!", "hoplon.core/hl!", 1508357418, null), cljs$cst$9063$html = new $APP.cljs.core.Keyword(null, "html", "html", 
-998796897), cljs$cst$9141$loop_tpl_STAR_ = new $APP.cljs.core.Symbol(null, "loop-tpl*", "loop-tpl*", 606682168, null), cljs$cst$9407$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_defelem = new $APP.cljs.core.Symbol("sci.configs.hoplon.hoplon", "defelem", "sci.configs.hoplon.hoplon/defelem", -2076784422, null), cljs$cst$9158$prerendering_QMARK_ = new $APP.cljs.core.Symbol(null, "prerendering?", "prerendering?", -909549645, null), cljs$cst$9100$article = new $APP.cljs.core.Symbol(null, "article", "article", 
1618846482, null), cljs$cst$9416$if_tpl = new $APP.cljs.core.Symbol(null, "if-tpl", "if-tpl", -403172327, null), cljs$cst$9164$noscript = new $APP.cljs.core.Symbol(null, "noscript", "noscript", 935754238, null), cljs$cst$9313$hoplon_DOT_core_SLASH__node = new $APP.cljs.core.Symbol("hoplon.core", "-node", "hoplon.core/-node", -510632348, null), cljs$cst$9396$hoplon_DOT_core_SLASH_embed = new $APP.cljs.core.Symbol("hoplon.core", "embed", "hoplon.core/embed", 695605333, null), cljs$cst$9347$hoplon_DOT_core_SLASH_html_var = 
new $APP.cljs.core.Symbol("hoplon.core", "html-var", "hoplon.core/html-var", 2104201030, null), cljs$cst$9137$menuitem = new $APP.cljs.core.Symbol(null, "menuitem", "menuitem", -1650388416, null), cljs$cst$9391$hoplon_DOT_core_SLASH_iframe = new $APP.cljs.core.Symbol("hoplon.core", "iframe", "hoplon.core/iframe", 1315947404, null), cljs$cst$9078$hoplon_DOT_core_SLASH_safe_deref = new $APP.cljs.core.Symbol("hoplon.core", "safe-deref", "hoplon.core/safe-deref", 2009989541, null), cljs$cst$9090$js_SLASH_document = 
new $APP.cljs.core.Symbol("js", "document", "js/document", 311343521, null), cljs$cst$9389$hoplon_DOT_core_SLASH_video = new $APP.cljs.core.Symbol("hoplon.core", "video", "hoplon.core/video", -1556763804, null), cljs$cst$9210$IHoplonNode = new $APP.cljs.core.Symbol(null, "IHoplonNode", "IHoplonNode", -317325247, null), cljs$cst$9045$hoplon_SLASH_invoke = new $APP.cljs.core.Keyword("hoplon", "invoke", "hoplon/invoke", -64736247), cljs$cst$9408$defattr = new $APP.cljs.core.Symbol(null, "defattr", "defattr", 
-1106230050, null), cljs$cst$9252$hoplon_DOT_core_SLASH_datalist = new $APP.cljs.core.Symbol("hoplon.core", "datalist", "hoplon.core/datalist", -790939200, null), cljs$cst$9325$hoplon_DOT_core_SLASH_code = new $APP.cljs.core.Symbol("hoplon.core", "code", "hoplon.core/code", 944064386, null), cljs$cst$9423$cond_tpl = new $APP.cljs.core.Symbol(null, "cond-tpl", "cond-tpl", -76803141, null), cljs$cst$9227$shadow = new $APP.cljs.core.Symbol(null, "shadow", "shadow", -1781203966, null), cljs$cst$9246$hoplon_DOT_core_SLASH_set_styles_BANG_ = 
new $APP.cljs.core.Symbol("hoplon.core", "set-styles!", "hoplon.core/set-styles!", 781020353, null), cljs$cst$9306$hoplon_DOT_core_SLASH_native_QMARK_ = new $APP.cljs.core.Symbol("hoplon.core", "native?", "hoplon.core/native?", 670386280, null), cljs$cst$9242$_do_BANG_ = new $APP.cljs.core.Symbol(null, "-do!", "-do!", 973867495, null), cljs$cst$9107$aside = new $APP.cljs.core.Symbol(null, "aside", "aside", -1240038232, null), cljs$cst$9105$$comment = new $APP.cljs.core.Symbol(null, "$comment", "$comment", 
-2048364378, null), cljs$cst$9181$caption = new $APP.cljs.core.Symbol(null, "caption", "caption", 785147625, null), cljs$cst$9082$expr__112312__auto__ = new $APP.cljs.core.Symbol(null, "expr__112312__auto__", "expr__112312__auto__", 253837601, null), cljs$cst$9149$add_attributes_BANG_ = new $APP.cljs.core.Symbol(null, "add-attributes!", "add-attributes!", -204241331, null), cljs$cst$9099$html_map = new $APP.cljs.core.Symbol(null, "html-map", "html-map", -1836865747, null), cljs$cst$9205$kids = new $APP.cljs.core.Symbol(null, 
"kids", "kids", -1497764998, null), cljs$cst$9208$_elem = new $APP.cljs.core.Symbol(null, "_elem", "_elem", -620373759, null), cljs$cst$9174$remove_child_BANG_ = new $APP.cljs.core.Symbol(null, "remove-child!", "remove-child!", -734455662, null), cljs$cst$9238$wbr = new $APP.cljs.core.Symbol(null, "wbr", "wbr", 1869193327, null), cljs$cst$9067$hoplon_DOT_core_SLASH_parse_args = new $APP.cljs.core.Symbol("hoplon.core", "parse-args", "hoplon.core/parse-args", -1398519838, null), cljs$cst$9070$hoplon_DOT_core_SLASH_loop_tpl_STAR_ = 
new $APP.cljs.core.Symbol("hoplon.core", "loop-tpl*", "hoplon.core/loop-tpl*", -63367277, null), cljs$cst$9281$hoplon_DOT_core_SLASH__set_attributes_BANG_ = new $APP.cljs.core.Symbol("hoplon.core", "-set-attributes!", "hoplon.core/-set-attributes!", 688763011, null), cljs$cst$9056$css = new $APP.cljs.core.Keyword(null, "css", "css", 1135045163), cljs$cst$9098$li = new $APP.cljs.core.Symbol(null, "li", "li", -1930876848, null), cljs$cst$9109$strong = new $APP.cljs.core.Symbol(null, "strong", "strong", 
1910060527, null), cljs$cst$9212$img = new $APP.cljs.core.Symbol(null, "img", "img", -1211748411, null), cljs$cst$9159$ol = new $APP.cljs.core.Symbol(null, "ol", "ol", -1721911718, null), cljs$cst$9165$ins = new $APP.cljs.core.Symbol(null, "ins", "ins", 618547957, null), cljs$cst$9395$hoplon_DOT_core_SLASH_output = new $APP.cljs.core.Symbol("hoplon.core", "output", "hoplon.core/output", 667821499, null), cljs$cst$9234$rp = new $APP.cljs.core.Symbol(null, "rp", "rp", -647737686, null), cljs$cst$9201$rt = 
new $APP.cljs.core.Symbol(null, "rt", "rt", -2030955077, null), cljs$cst$9397$hoplon_DOT_core_SLASH_wbr = new $APP.cljs.core.Symbol("hoplon.core", "wbr", "hoplon.core/wbr", -1218869104, null), cljs$cst$9232$td = new $APP.cljs.core.Symbol(null, "td", "td", -1174502416, null), cljs$cst$9244$hoplon_DOT_core_SLASH__on_BANG_ = new $APP.cljs.core.Symbol("hoplon.core", "-on!", "hoplon.core/-on!", -229293767, null), cljs$cst$9117$_replace_child_BANG_ = new $APP.cljs.core.Symbol(null, "-replace-child!", "-replace-child!", 
1700411485, null), cljs$cst$9436$with_init_BANG_ = new $APP.cljs.core.Symbol(null, "with-init!", "with-init!", 1754976157, null), cljs$cst$9112$IHoplonElement = new $APP.cljs.core.Symbol(null, "IHoplonElement", "IHoplonElement", -8223249, null), cljs$cst$9059$class_SLASH_default = new $APP.cljs.core.Keyword("class", "default", "class/default", -1877073008), cljs$cst$9113$_set_attributes_BANG_ = new $APP.cljs.core.Symbol(null, "-set-attributes!", "-set-attributes!", -786601866, null), cljs$cst$9385$hoplon_DOT_core_SLASH_script = 
new $APP.cljs.core.Symbol("hoplon.core", "script", "hoplon.core/script", -333962501, null), cljs$cst$9190$__GT_hoplon = new $APP.cljs.core.Symbol(null, "-\x3ehoplon", "-\x3ehoplon", -995337225, null), cljs$cst$9437$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_with_init_BANG_ = new $APP.cljs.core.Symbol("sci.configs.hoplon.hoplon", "with-init!", "sci.configs.hoplon.hoplon/with-init!", 966735921, null), cljs$cst$9147$br = new $APP.cljs.core.Symbol(null, "br", "br", -1720330977, null), cljs$cst$9217$dd = 
new $APP.cljs.core.Symbol(null, "dd", "dd", 300093898, null), cljs$cst$9096$dl = new $APP.cljs.core.Symbol(null, "dl", "dl", -499620186, null), cljs$cst$9066$args__112225__auto__ = new $APP.cljs.core.Symbol(null, "args__112225__auto__", "args__112225__auto__", 1440250683, null), cljs$cst$9203$noframes = new $APP.cljs.core.Symbol(null, "noframes", "noframes", 28390654, null), cljs$cst$9322$hoplon_DOT_core_SLASH_insert_before_BANG_ = new $APP.cljs.core.Symbol("hoplon.core", "insert-before!", "hoplon.core/insert-before!", 
2071232976, null), cljs$cst$9235$em = new $APP.cljs.core.Symbol(null, "em", "em", -1946622734, null), cljs$cst$9220$h3 = new $APP.cljs.core.Symbol(null, "h3", "h3", -586824606, null), cljs$cst$9133$h4 = new $APP.cljs.core.Symbol(null, "h4", "h4", -649572776, null), cljs$cst$9136$h5 = new $APP.cljs.core.Symbol(null, "h5", "h5", -188625098, null), cljs$cst$9240$h6 = new $APP.cljs.core.Symbol(null, "h6", "h6", -2097141989, null), cljs$cst$9170$h2 = new $APP.cljs.core.Symbol(null, "h2", "h2", 1267868799, 
null), cljs$cst$9176$insert_before_BANG_ = new $APP.cljs.core.Symbol(null, "insert-before!", "insert-before!", 862235055, null), cljs$cst$9193$hr = new $APP.cljs.core.Symbol(null, "hr", "hr", -1276695702, null), cljs$cst$9086$_DOT_requestAnimationFrame = new $APP.cljs.core.Symbol(null, ".requestAnimationFrame", ".requestAnimationFrame", 2047710980, null), cljs$cst$9054$svg_SLASH_default = new $APP.cljs.core.Keyword("svg", "default", "svg/default", -1988479332), cljs$cst$9072$item__112282__auto__ = 
new $APP.cljs.core.Symbol(null, "item__112282__auto__", "item__112282__auto__", 2043509556, null), cljs$cst$9417$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_if_tpl = new $APP.cljs.core.Symbol("sci.configs.hoplon.hoplon", "if-tpl", "sci.configs.hoplon.hoplon/if-tpl", -1325072795, null), cljs$cst$9237$embed = new $APP.cljs.core.Symbol(null, "embed", "embed", 285618178, null), cljs$cst$9420$alternative = new $APP.cljs.core.Symbol(null, "alternative", "alternative", 1692197835, null), cljs$cst$9104$hoplon_DOT_core_SLASH_IHoplonElement = 
new $APP.cljs.core.Symbol("hoplon.core", "IHoplonElement", "hoplon.core/IHoplonElement", -944607942, null), cljs$cst$9257$hoplon_DOT_core_SLASH_aside = new $APP.cljs.core.Symbol("hoplon.core", "aside", "hoplon.core/aside", -35214123, null), cljs$cst$9323$hoplon_DOT_core_SLASH__remove_child_BANG_ = new $APP.cljs.core.Symbol("hoplon.core", "-remove-child!", "hoplon.core/-remove-child!", 165475760, null), cljs$cst$9230$fieldset = new $APP.cljs.core.Symbol(null, "fieldset", "fieldset", -309239289, null), 
cljs$cst$9110$_insert_before_BANG_ = new $APP.cljs.core.Symbol(null, "-insert-before!", "-insert-before!", -1074640480, null), cljs$cst$9291$hoplon_DOT_core_SLASH__set_styles_BANG_ = new $APP.cljs.core.Symbol("hoplon.core", "-set-styles!", "hoplon.core/-set-styles!", 1052255827, null), cljs$cst$9106$normalize_class = new $APP.cljs.core.Symbol(null, "normalize-class", "normalize-class", -706116721, null), cljs$cst$9116$_remove_child_BANG_ = new $APP.cljs.core.Symbol(null, "-remove-child!", "-remove-child!", 
-238244849, null), cljs$cst$9069$hoplon_DOT_core_SLASH_do_BANG_ = new $APP.cljs.core.Symbol("hoplon.core", "do!", "hoplon.core/do!", -668683461, null), cljs$cst$9179$hl_BANG_ = new $APP.cljs.core.Symbol(null, "hl!", "hl!", 33025393, null), cljs$cst$9188$do_watch = new $APP.cljs.core.Symbol(null, "do-watch", "do-watch", -1326601730, null), cljs$cst$9043$hoplon_SLASH_attr = new $APP.cljs.core.Keyword("hoplon", "attr", "hoplon/attr", -2083099247), cljs$cst$9374$hoplon_DOT_core_SLASH_hoplonify_BANG_ = 
new $APP.cljs.core.Symbol("hoplon.core", "hoplonify!", "hoplon.core/hoplonify!", -5266265, null), cljs$cst$9434$with_animation_frame = new $APP.cljs.core.Symbol(null, "with-animation-frame", "with-animation-frame", -178097415, null), cljs$cst$9187$append_child_BANG_ = new $APP.cljs.core.Symbol(null, "append-child!", "append-child!", 626789641, null), cljs$cst$9352$hoplon_DOT_core_SLASH_cite = new $APP.cljs.core.Symbol("hoplon.core", "cite", "hoplon.core/cite", 461873144, null), cljs$cst$9330$hoplon_DOT_core_SLASH_caption = 
new $APP.cljs.core.Symbol("hoplon.core", "caption", "hoplon.core/caption", -421282028, null), cljs$cst$9189$keygen = new $APP.cljs.core.Symbol(null, "keygen", "keygen", 1068838274, null), cljs$cst$9409$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_defattr = new $APP.cljs.core.Symbol("sci.configs.hoplon.hoplon", "defattr", "sci.configs.hoplon.hoplon/defattr", -315676038, null), cljs$cst$9143$tpl = new $APP.cljs.core.Symbol(null, "tpl", "tpl", -1752362158, null), cljs$cst$9320$hoplon_DOT_core_SLASH_remove_child_BANG_ = 
new $APP.cljs.core.Symbol("hoplon.core", "remove-child!", "hoplon.core/remove-child!", -1943342775, null), cljs$cst$9062$select = new $APP.cljs.core.Keyword(null, "select", "select", 1147833503), cljs$cst$9083$cljs_DOT_core_SLASH_case = new $APP.cljs.core.Symbol("cljs.core", "case", "cljs.core/case", -1674122212, null), cljs$cst$9140$sub = new $APP.cljs.core.Symbol(null, "sub", "sub", -453228498, null), cljs$cst$9138$sup = new $APP.cljs.core.Symbol(null, "sup", "sup", -398960819, null), cljs$cst$9406$defelem = 
new $APP.cljs.core.Symbol(null, "defelem", "defelem", 2000233334, null), cljs$cst$9402$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_text = new $APP.cljs.core.Symbol("sci.configs.hoplon.hoplon", "text", "sci.configs.hoplon.hoplon/text", 940249658, null), cljs$cst$9256$hoplon_DOT_core_SLASH_summary = new $APP.cljs.core.Symbol("hoplon.core", "summary", "hoplon.core/summary", -1335224734, null), cljs$cst$9084$hoplon_DOT_core_SLASH_when_dom = new $APP.cljs.core.Symbol("hoplon.core", "when-dom", "hoplon.core/when-dom", 
-1853415732, null), cljs$cst$9296$hoplon_DOT_core_SLASH_html_meta = new $APP.cljs.core.Symbol("hoplon.core", "html-meta", "hoplon.core/html-meta", 60432009, null), cljs$cst$9302$hoplon_DOT_core_SLASH_label = new $APP.cljs.core.Symbol("hoplon.core", "label", "hoplon.core/label", -1336243162, null), cljs$cst$9348$hoplon_DOT_core_SLASH_timeout = new $APP.cljs.core.Symbol("hoplon.core", "timeout", "hoplon.core/timeout", 922409356, null), cljs$cst$9124$_insert_before_BANG_ = new $APP.cljs.core.Keyword(null, 
"-insert-before!", "-insert-before!", 1579795289), cljs$cst$9277$hoplon_DOT_core_SLASH_invoke_BANG_ = new $APP.cljs.core.Symbol("hoplon.core", "invoke!", "hoplon.core/invoke!", 1504548155, null), cljs$cst$9388$hoplon_DOT_core_SLASH_fieldset = new $APP.cljs.core.Symbol("hoplon.core", "fieldset", "hoplon.core/fieldset", -1516156334, null), cljs$cst$9367$hoplon_DOT_core_SLASH_ul = new $APP.cljs.core.Symbol("hoplon.core", "ul", "hoplon.core/ul", -649568615, null), cljs$cst$9148$bdi = new $APP.cljs.core.Symbol(null, 
"bdi", "bdi", 317505641, null), cljs$cst$9202$bdo = new $APP.cljs.core.Symbol(null, "bdo", "bdo", -490616675, null), cljs$cst$9366$hoplon_DOT_core_SLASH_th = new $APP.cljs.core.Symbol("hoplon.core", "th", "hoplon.core/th", -1716295002, null), cljs$cst$9321$hoplon_DOT_core_SLASH_tr = new $APP.cljs.core.Symbol("hoplon.core", "tr", "hoplon.core/tr", 887937034, null), cljs$cst$9426$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_case_tpl = new $APP.cljs.core.Symbol("sci.configs.hoplon.hoplon", "case-tpl", 
"sci.configs.hoplon.hoplon/case-tpl", -1358256863, null), cljs$cst$9390$hoplon_DOT_core_SLASH_td = new $APP.cljs.core.Symbol("hoplon.core", "td", "hoplon.core/td", -504468665, null), cljs$cst$9392$hoplon_DOT_core_SLASH_rp = new $APP.cljs.core.Symbol("hoplon.core", "rp", "hoplon.core/rp", 278173399, null), cljs$cst$9354$hoplon_DOT_core_SLASH_rt = new $APP.cljs.core.Symbol("hoplon.core", "rt", "hoplon.core/rt", 1591930316, null), cljs$cst$9228$kw_dispatcher = new $APP.cljs.core.Symbol(null, "kw-dispatcher", 
"kw-dispatcher", -1626747270, null), cljs$cst$9300$hoplon_DOT_core_SLASH_ol = new $APP.cljs.core.Symbol("hoplon.core", "ol", "hoplon.core/ol", -1049768441, null), cljs$cst$9163$native_QMARK_ = new $APP.cljs.core.Symbol(null, "native?", "native?", -276459341, null), cljs$cst$9294$hoplon_DOT_core_SLASH_table = new $APP.cljs.core.Symbol("hoplon.core", "table", "hoplon.core/table", 149733990, null), cljs$cst$9267$hoplon_DOT_core_SLASH_kbd = new $APP.cljs.core.Symbol("hoplon.core", "kbd", "hoplon.core/kbd", 
-1934562689, null), cljs$cst$9356$hoplon_DOT_core_SLASH_noframes = new $APP.cljs.core.Symbol("hoplon.core", "noframes", "hoplon.core/noframes", -914285419, null), cljs$cst$9394$hoplon_DOT_core_SLASH_em = new $APP.cljs.core.Symbol("hoplon.core", "em", "hoplon.core/em", -739713873, null), cljs$cst$9171$rtc = new $APP.cljs.core.Symbol(null, "rtc", "rtc", 1411087248, null), cljs$cst$9245$hoplon_DOT_core_SLASH_dl = new $APP.cljs.core.Symbol("hoplon.core", "dl", "hoplon.core/dl", 975736573, null), cljs$cst$9430$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_with_timeout = 
new $APP.cljs.core.Symbol("sci.configs.hoplon.hoplon", "with-timeout", "sci.configs.hoplon.hoplon/with-timeout", -26845278, null), cljs$cst$9276$hoplon_DOT_core_SLASH_dt = new $APP.cljs.core.Symbol("hoplon.core", "dt", "hoplon.core/dt", -2084349781, null), cljs$cst$9372$hoplon_DOT_core_SLASH_dd = new $APP.cljs.core.Symbol("hoplon.core", "dd", "hoplon.core/dd", 1509116327, null), cljs$cst$9289$hoplon_DOT_core_SLASH_br = new $APP.cljs.core.Symbol("hoplon.core", "br", "hoplon.core/br", 1365622250, null), 
cljs$cst$9048$hoplon_SLASH_singleton = new $APP.cljs.core.Keyword("hoplon", "singleton", "hoplon/singleton", -774957504), cljs$cst$9047$hoplon_SLASH_default = new $APP.cljs.core.Keyword("hoplon", "default", "hoplon/default", -1041025382), cljs$cst$9377$hoplon_DOT_core_SLASH_figure = new $APP.cljs.core.Symbol("hoplon.core", "figure", "hoplon.core/figure", -1985840125, null), cljs$cst$9329$hoplon_DOT_core_SLASH_picture = new $APP.cljs.core.Symbol("hoplon.core", "picture", "hoplon.core/picture", 1657057388, 
null), cljs$cst$9247$hoplon_DOT_core_SLASH_li = new $APP.cljs.core.Symbol("hoplon.core", "li", "hoplon.core/li", -721862645, null), cljs$cst$9053$html_SLASH_default = new $APP.cljs.core.Keyword("html", "default", "html/default", -1991555757), cljs$cst$9051$hoplon_DOT_core_SLASH_attr = new $APP.cljs.core.Keyword("hoplon.core", "attr", "hoplon.core/attr", -1808833588), cljs$cst$9166$canvas = new $APP.cljs.core.Symbol(null, "canvas", "canvas", -158285962, null), cljs$cst$9345$hoplon_DOT_core_SLASH_hr = 
new $APP.cljs.core.Symbol("hoplon.core", "hr", "hoplon.core/hr", -99138755, null), cljs$cst$9295$hoplon_DOT_core_SLASH_progress = new $APP.cljs.core.Symbol("hoplon.core", "progress", "hoplon.core/progress", 946385759, null), cljs$cst$9153$_attribute_BANG_ = new $APP.cljs.core.Keyword(null, "-attribute!", "-attribute!", 1119410509), cljs$cst$9185$tfoot = new $APP.cljs.core.Symbol(null, "tfoot", "tfoot", 938931637, null), cljs$cst$9075$alt__112288__auto__ = new $APP.cljs.core.Symbol(null, "alt__112288__auto__", 
"alt__112288__auto__", 1589410420, null), cljs$cst$9085$js_SLASH_setTimeout = new $APP.cljs.core.Symbol("js", "setTimeout", "js/setTimeout", -574009236, null), cljs$cst$9286$hoplon_DOT_core_SLASH_h1 = new $APP.cljs.core.Symbol("hoplon.core", "h1", "hoplon.core/h1", 944273882, null), cljs$cst$9314$hoplon_DOT_core_SLASH_h2 = new $APP.cljs.core.Symbol("hoplon.core", "h2", "hoplon.core/h2", -1281209312, null), cljs$cst$9278$hoplon_DOT_core_SLASH_h5 = new $APP.cljs.core.Symbol("hoplon.core", "h5", "hoplon.core/h5", 
1018295939, null), cljs$cst$9399$hoplon_DOT_core_SLASH_h6 = new $APP.cljs.core.Symbol("hoplon.core", "h6", "hoplon.core/h6", -617586746, null), cljs$cst$9375$hoplon_DOT_core_SLASH_h3 = new $APP.cljs.core.Symbol("hoplon.core", "h3", "hoplon.core/h3", 359931033, null), cljs$cst$9275$hoplon_DOT_core_SLASH_h4 = new $APP.cljs.core.Symbol("hoplon.core", "h4", "hoplon.core/h4", -1854380365, null), cljs$cst$9264$hoplon_DOT_core_SLASH_option = new $APP.cljs.core.Symbol("hoplon.core", "option", "hoplon.core/option", 
767199896, null), cljs$cst$9404$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_elem = new $APP.cljs.core.Symbol("sci.configs.hoplon.hoplon", "elem", "sci.configs.hoplon.hoplon/elem", -140182997, null), cljs$cst$9273$hoplon_DOT_core_SLASH_optgroup = new $APP.cljs.core.Symbol("hoplon.core", "optgroup", "hoplon.core/optgroup", 24408710, null), cljs$cst$9414$for_tpl = new $APP.cljs.core.Symbol(null, "for-tpl", "for-tpl", -1224495652, null), cljs$cst$9262$hoplon_DOT_core_SLASH_figcaption = new $APP.cljs.core.Symbol("hoplon.core", 
"figcaption", "hoplon.core/figcaption", -1088076065, null), cljs$cst$9433$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_with_interval = new $APP.cljs.core.Symbol("sci.configs.hoplon.hoplon", "with-interval", "sci.configs.hoplon.hoplon/with-interval", -1596002431, null), cljs$cst$9412$loop_tpl = new $APP.cljs.core.Symbol(null, "loop-tpl", "loop-tpl", 1627439645, null), cljs$cst$9114$_set_styles_BANG_ = new $APP.cljs.core.Symbol(null, "-set-styles!", "-set-styles!", 1990741510, null), cljs$cst$9139$html_object = 
new $APP.cljs.core.Symbol(null, "html-object", "html-object", -1750438190, null), cljs$cst$9297$hoplon_DOT_core_SLASH_legend = new $APP.cljs.core.Symbol("hoplon.core", "legend", "hoplon.core/legend", -587298993, null), cljs$cst$9224$dialog = new $APP.cljs.core.Symbol(null, "dialog", "dialog", -1239285634, null), cljs$cst$9061$toggle = new $APP.cljs.core.Keyword(null, "toggle", "toggle", 1291842030), cljs$cst$9292$hoplon_DOT_core_SLASH_add_attributes_BANG_ = new $APP.cljs.core.Symbol("hoplon.core", 
"add-attributes!", "hoplon.core/add-attributes!", 723779096, null), cljs$cst$9378$hoplon_DOT_core_SLASH_textarea = new $APP.cljs.core.Symbol("hoplon.core", "textarea", "hoplon.core/textarea", -485164276, null), cljs$cst$9331$hoplon_DOT_core_SLASH_area = new $APP.cljs.core.Symbol("hoplon.core", "area", "hoplon.core/area", 1171857770, null), cljs$cst$9411$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_safe_deref = new $APP.cljs.core.Symbol("sci.configs.hoplon.hoplon", "safe-deref", "sci.configs.hoplon.hoplon/safe-deref", 
2128267186, null), cljs$cst$9428$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_with_dom = new $APP.cljs.core.Symbol("sci.configs.hoplon.hoplon", "with-dom", "sci.configs.hoplon.hoplon/with-dom", 1622716224, null), cljs$cst$9160$address = new $APP.cljs.core.Symbol(null, "address", "address", -2094936343, null), cljs$cst$9255$hoplon_DOT_core_SLASH_normalize_class = new $APP.cljs.core.Symbol("hoplon.core", "normalize-class", "hoplon.core/normalize-class", -1646691548, null), cljs$cst$9308$hoplon_DOT_core_SLASH_ins = 
new $APP.cljs.core.Symbol("hoplon.core", "ins", "hoplon.core/ins", 483299930, null), cljs$cst$9263$hoplon_DOT_core_SLASH_ruby = new $APP.cljs.core.Symbol("hoplon.core", "ruby", "hoplon.core/ruby", 286830623, null), cljs$cst$9403$sci_DOT_configs_DOT_hoplon_DOT_hoplon = new $APP.cljs.core.Symbol(null, "sci.configs.hoplon.hoplon", "sci.configs.hoplon.hoplon", -1963557604, null), cljs$cst$9248$hoplon_DOT_core_SLASH_html_map = new $APP.cljs.core.Symbol("hoplon.core", "html-map", "hoplon.core/html-map", 
-896315656, null), cljs$cst$9118$_set_attributes_BANG_ = new $APP.cljs.core.Keyword(null, "-set-attributes!", "-set-attributes!", 1867833903), cljs$cst$9435$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_with_animation_frame = new $APP.cljs.core.Symbol("sci.configs.hoplon.hoplon", "with-animation-frame", "sci.configs.hoplon.hoplon/with-animation-frame", -1536763835, null), cljs$cst$9186$hgroup = new $APP.cljs.core.Symbol(null, "hgroup", "hgroup", -1525585280, null), cljs$cst$9365$hoplon_DOT_core_SLASH_img = 
new $APP.cljs.core.Symbol("hoplon.core", "img", "hoplon.core/img", 1876317726, null), cljs$cst$9379$hoplon_DOT_core_SLASH_menu = new $APP.cljs.core.Symbol("hoplon.core", "menu", "hoplon.core/menu", 1322740592, null), cljs$cst$9131$del = new $APP.cljs.core.Symbol(null, "del", "del", -2079460185, null), cljs$cst$9184$dfn = new $APP.cljs.core.Symbol(null, "dfn", "dfn", 1882439694, null), cljs$cst$9271$hoplon_DOT_core_SLASH_thead = new $APP.cljs.core.Symbol("hoplon.core", "thead", "hoplon.core/thead", 
141768636, null), cljs$cst$9424$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_cond_tpl = new $APP.cljs.core.Symbol("sci.configs.hoplon.hoplon", "cond-tpl", "sci.configs.hoplon.hoplon/cond-tpl", -932665081, null), cljs$cst$9327$hoplon_DOT_core_SLASH_blockquote = new $APP.cljs.core.Symbol("hoplon.core", "blockquote", "hoplon.core/blockquote", -1077376240, null), cljs$cst$9268$hoplon_DOT_core_SLASH_set_attributes_BANG_ = new $APP.cljs.core.Symbol("hoplon.core", "set-attributes!", "hoplon.core/set-attributes!", 
-845313796, null), cljs$cst$9425$case_tpl = new $APP.cljs.core.Symbol(null, "case-tpl", "case-tpl", -570091331, null), cljs$cst$9288$hoplon_DOT_core_SLASH_element_QMARK_ = new $APP.cljs.core.Symbol("hoplon.core", "element?", "hoplon.core/element?", -1887013070, null), cljs$cst$9253$hoplon_DOT_core_SLASH__hoplon_kids = new $APP.cljs.core.Symbol("hoplon.core", "-hoplon-kids", "hoplon.core/-hoplon-kids", 1399914692, null), cljs$cst$9191$footer = new $APP.cljs.core.Symbol(null, "footer", "footer", -1047990379, 
null), cljs$cst$9065$scroll_to = new $APP.cljs.core.Keyword(null, "scroll-to", "scroll-to", -34957602), cljs$cst$9055$hoplon_DOT_core_SLASH_css = new $APP.cljs.core.Keyword("hoplon.core", "css", "hoplon.core/css", 1001854360), cljs$cst$9293$hoplon_DOT_core_SLASH_colgroup = new $APP.cljs.core.Symbol("hoplon.core", "colgroup", "hoplon.core/colgroup", -815290845, null), cljs$cst$9334$hoplon_DOT_core_SLASH_tfoot = new $APP.cljs.core.Symbol("hoplon.core", "tfoot", "hoplon.core/tfoot", -284766976, null), 
cljs$cst$9157$spliced = new $APP.cljs.core.Symbol(null, "spliced", "spliced", 1452933714, null), cljs$cst$9303$hoplon_DOT_core_SLASH_template = new $APP.cljs.core.Symbol("hoplon.core", "template", "hoplon.core/template", 2147123912, null), cljs$cst$9383$hoplon_DOT_core_SLASH_html_time = new $APP.cljs.core.Symbol("hoplon.core", "html-time", "hoplon.core/html-time", 1857720710, null), cljs$cst$9049$hoplon_SLASH_static = new $APP.cljs.core.Keyword("hoplon", "static", "hoplon/static", -2111118711), cljs$cst$9283$hoplon_DOT_core_SLASH_section = 
new $APP.cljs.core.Symbol("hoplon.core", "section", "hoplon.core/section", 907330092, null), cljs$cst$9094$_on_BANG_ = new $APP.cljs.core.Symbol(null, "-on!", "-on!", 900033004, null), cljs$cst$9087$js_SLASH_window = new $APP.cljs.core.Symbol("js", "window", "js/window", -1929916804, null), cljs$cst$9270$hoplon_DOT_core_SLASH_abbr = new $APP.cljs.core.Symbol("hoplon.core", "abbr", "hoplon.core/abbr", -1502232562, null), cljs$cst$9169$hoplon_DOT_core_SLASH_IHoplonNode = new $APP.cljs.core.Symbol("hoplon.core", 
"IHoplonNode", "hoplon.core/IHoplonNode", 623257644, null);
var hoplon = {core:{}};
$APP.cljs.core.enable_console_print_BANG_();
hoplon.core.child_vec = function($this$$jscomp$1629_x$$) {
  $this$$jscomp$1629_x$$ = $this$$jscomp$1629_x$$.childNodes;
  for (var $l__5614__auto__$$ = $this$$jscomp$1629_x$$.length, $i$$ = 0, $G__111961_ret$$ = $APP.cljs.core.PersistentVector.EMPTY;;) {
    if ($i$$ < $l__5614__auto__$$) {
      var $G__111960$$ = $i$$ + 1;
      $G__111961_ret$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__111961_ret$$, $this$$jscomp$1629_x$$.item($i$$));
      $i$$ = $G__111960$$;
    } else {
      return $G__111961_ret$$;
    }
  }
};
hoplon.core.vflatten = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = function($x$$) {
  return $APP.cljs.core.persistent_BANG_(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.transient$($APP.cljs.core.PersistentVector.EMPTY), $x$$));
};
hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = function($acc$$, $x$$) {
  return $APP.cljs.core.sequential_QMARK_($x$$) ? $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hoplon.core.vflatten, $acc$$, $x$$) : $APP.cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2($acc$$, $x$$);
};
hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;
hoplon.core.remove_nil = function($nodes$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($p1__111673_SHARP_$$, $p2__111672_SHARP_$$) {
    return $APP.cljs.core.truth_($p2__111672_SHARP_$$) ? $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($p1__111673_SHARP_$$, $p2__111672_SHARP_$$) : $p1__111673_SHARP_$$;
  }, $APP.cljs.core.PersistentVector.EMPTY, $nodes$$);
};
hoplon.core.compact_kids = function($kids$$) {
  return $APP.cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node, hoplon.core.remove_nil(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1($kids$$)));
};
hoplon.core.set_dom_children_BANG_ = function($elem$$, $new_QMARK__new_kids$$) {
  var $G__111680__$1_first__111700_new_kids__$1_nks__$1$$ = hoplon.core.compact_kids($new_QMARK__new_kids$$);
  $new_QMARK__new_kids$$ = $APP.cljs.core.set($G__111680__$1_first__111700_new_kids__$1_nks__$1$$);
  var $G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$ = $APP.cljs.core.seq($G__111680__$1_first__111700_new_kids__$1_nks__$1$$);
  $APP.cljs.core.first($G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$);
  $APP.cljs.core.next($G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$);
  $G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$ = hoplon.core.child_vec($elem$$);
  var $G__111681__$1_first__111703_old_kid__$1_seq__111686$$ = $APP.cljs.core.seq($G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$);
  $APP.cljs.core.first($G__111681__$1_first__111703_old_kid__$1_seq__111686$$);
  $APP.cljs.core.next($G__111681__$1_first__111703_old_kid__$1_seq__111686$$);
  for ($G__111681__$1_first__111703_old_kid__$1_seq__111686$$ = $G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$;;) {
    $G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$ = $APP.cljs.core.seq($G__111680__$1_first__111700_new_kids__$1_nks__$1$$);
    $G__111680__$1_first__111700_new_kids__$1_nks__$1$$ = $APP.cljs.core.first($G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$);
    var $oks__$1_seq__111699__$1_seq__111702_seq__111702__$1$$ = $APP.cljs.core.next($G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$);
    $G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$ = $G__111680__$1_first__111700_new_kids__$1_nks__$1$$;
    $G__111680__$1_first__111700_new_kids__$1_nks__$1$$ = $oks__$1_seq__111699__$1_seq__111702_seq__111702__$1$$;
    var $old_kids__$1_vec__111701$$ = $G__111681__$1_first__111703_old_kid__$1_seq__111686$$;
    $oks__$1_seq__111699__$1_seq__111702_seq__111702__$1$$ = $APP.cljs.core.seq($old_kids__$1_vec__111701$$);
    $G__111681__$1_first__111703_old_kid__$1_seq__111686$$ = $APP.cljs.core.first($oks__$1_seq__111699__$1_seq__111702_seq__111702__$1$$);
    $oks__$1_seq__111699__$1_seq__111702_seq__111702__$1$$ = $APP.cljs.core.next($oks__$1_seq__111699__$1_seq__111702_seq__111702__$1$$);
    var $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.truth_;
    var $JSCompiler_inline_result$jscomp$3495_or__5025__auto__$$ = $G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$;
    $JSCompiler_inline_result$jscomp$3495_or__5025__auto__$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$3495_or__5025__auto__$$) ? $JSCompiler_inline_result$jscomp$3495_or__5025__auto__$$ : $G__111681__$1_first__111703_old_kid__$1_seq__111686$$;
    if ($JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_inline_result$jscomp$3495_or__5025__auto__$$)) {
      $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$, $G__111681__$1_first__111703_old_kid__$1_seq__111686$$) ? $G__111681__$1_first__111703_old_kid__$1_seq__111686$$ = $G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$ = $oks__$1_seq__111699__$1_seq__111702_seq__111702__$1$$ : $APP.cljs.core.not($G__111681__$1_first__111703_old_kid__$1_seq__111686$$) ? ($elem$$.appendChild($G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$), 
      $G__111681__$1_first__111703_old_kid__$1_seq__111686$$ = $G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$ = $oks__$1_seq__111699__$1_seq__111702_seq__111702__$1$$) : $APP.cljs.core.not($G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$) ? ($APP.cljs.core.truth_($new_QMARK__new_kids$$.cljs$core$IFn$_invoke$arity$1 ? $new_QMARK__new_kids$$.cljs$core$IFn$_invoke$arity$1($G__111681__$1_first__111703_old_kid__$1_seq__111686$$) : 
      $new_QMARK__new_kids$$.call(null, $G__111681__$1_first__111703_old_kid__$1_seq__111686$$)) || $elem$$.removeChild($G__111681__$1_first__111703_old_kid__$1_seq__111686$$), $G__111681__$1_first__111703_old_kid__$1_seq__111686$$ = $G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$ = $oks__$1_seq__111699__$1_seq__111702_seq__111702__$1$$) : ($elem$$.insertBefore($G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$, $G__111681__$1_first__111703_old_kid__$1_seq__111686$$), 
      $G__111681__$1_first__111703_old_kid__$1_seq__111686$$ = $G__111681_G__111964_G__111966_G__111968_G__111970_new_kid__$1_seq__111683_seq__111699$$ = $old_kids__$1_vec__111701$$);
    } else {
      return null;
    }
  }
};
hoplon.core._do_BANG_ = function($elem$$, $this$$$, $value$$) {
  return hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3($elem$$, $this$$$, $value$$) : hoplon.core.do_BANG_.call(null, $elem$$, $this$$$, $value$$);
};
hoplon.core._on_BANG_ = function($elem$$, $this$$$, $value$$) {
  return hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3($elem$$, $this$$$, $value$$) : hoplon.core.on_BANG_.call(null, $elem$$, $this$$$, $value$$);
};
hoplon.core._elem_BANG_ = function($elem$$, $this$$$, $value$$) {
  return hoplon.core.elem_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.elem_BANG_.cljs$core$IFn$_invoke$arity$3($elem$$, $this$$$, $value$$) : hoplon.core.elem_BANG_.call(null, $elem$$, $this$$$, $value$$);
};
hoplon.core.prerendering_QMARK_ = (new URLSearchParams(window.location.search)).get("prerendering");
hoplon.core.do_watch = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = function($ref$$, $f$$) {
  return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3($ref$$, null, $f$$);
};
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = function($ref$$, $init$$, $f$$) {
  var $k$$ = $APP.cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(), $G__111707_111973$$ = $APP.cljs.core.deref($ref$$);
  $f$$.cljs$core$IFn$_invoke$arity$2 ? $f$$.cljs$core$IFn$_invoke$arity$2($init$$, $G__111707_111973$$) : $f$$.call(null, $init$$, $G__111707_111973$$);
  $APP.cljs.core.add_watch($ref$$, $k$$, function($_$$, $___$1$$, $old$$, $new$$$) {
    return $f$$.cljs$core$IFn$_invoke$arity$2 ? $f$$.cljs$core$IFn$_invoke$arity$2($old$$, $new$$$) : $f$$.call(null, $old$$, $new$$$);
  });
  return $k$$;
};
hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
hoplon.core.normalize_class = function($kvs$jscomp$22_p1__111708_SHARP_$$) {
  if ($APP.cljs.core.map_QMARK_($kvs$jscomp$22_p1__111708_SHARP_$$)) {
    return $kvs$jscomp$22_p1__111708_SHARP_$$;
  }
  $kvs$jscomp$22_p1__111708_SHARP_$$ = typeof $kvs$jscomp$22_p1__111708_SHARP_$$ === "string" ? $kvs$jscomp$22_p1__111708_SHARP_$$.split(/\s+/) : $APP.cljs.core.seq($kvs$jscomp$22_p1__111708_SHARP_$$);
  return $APP.cljs.core.zipmap($kvs$jscomp$22_p1__111708_SHARP_$$, $APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(!0));
};
hoplon.core.timeout = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = function($f$$) {
  return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2($f$$, 0);
};
hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = function($f$$, $t$$) {
  return window.setTimeout($f$$, $t$$);
};
hoplon.core.timeout.cljs$lang$maxFixedArity = 2;
hoplon.core.when_dom = function($this$$$, $f$$) {
  if ($this$$$ instanceof Element) {
    var $temp__5827__auto__$$ = $this$$$._hoplonWhenDom;
    return $temp__5827__auto__$$ == null ? ($this$$$._hoplonWhenDom = [$f$$], setTimeout(function() {
      return function $hoplon$core$when_dom_$_doit$$() {
        if ($APP.cljs.core.not(document.documentElement.contains($this$$$))) {
          return setTimeout(function() {
            return $hoplon$core$when_dom_$_doit$$();
          }, 20);
        }
        for (var $c__5548__auto___111986_f_111991__$1_seq__111711_111975_temp__5825__auto___111984$$ = $APP.cljs.core.seq($this$$$._hoplonWhenDom), $G__111988_chunk__111712_111976_seq__111711_111985__$1$$ = null, $G__111989_count__111713_111977$$ = 0, $G__111987_i__111714_111978$$ = 0;;) {
          if ($G__111987_i__111714_111978$$ < $G__111989_count__111713_111977$$) {
            var $f_111979__$1$$ = $G__111988_chunk__111712_111976_seq__111711_111985__$1$$.cljs$core$IIndexed$_nth$arity$2(null, $G__111987_i__111714_111978$$);
            $f_111979__$1$$.cljs$core$IFn$_invoke$arity$0 ? $f_111979__$1$$.cljs$core$IFn$_invoke$arity$0() : $f_111979__$1$$.call(null);
            $G__111987_i__111714_111978$$ += 1;
          } else {
            if ($c__5548__auto___111986_f_111991__$1_seq__111711_111975_temp__5825__auto___111984$$ = $APP.cljs.core.seq($c__5548__auto___111986_f_111991__$1_seq__111711_111975_temp__5825__auto___111984$$)) {
              $G__111988_chunk__111712_111976_seq__111711_111985__$1$$ = $c__5548__auto___111986_f_111991__$1_seq__111711_111975_temp__5825__auto___111984$$, $APP.cljs.core.chunked_seq_QMARK_($G__111988_chunk__111712_111976_seq__111711_111985__$1$$) ? ($c__5548__auto___111986_f_111991__$1_seq__111711_111975_temp__5825__auto___111984$$ = $APP.cljs.core.chunk_first($G__111988_chunk__111712_111976_seq__111711_111985__$1$$), $G__111987_i__111714_111978$$ = $APP.cljs.core.chunk_rest($G__111988_chunk__111712_111976_seq__111711_111985__$1$$), 
              $G__111988_chunk__111712_111976_seq__111711_111985__$1$$ = $c__5548__auto___111986_f_111991__$1_seq__111711_111975_temp__5825__auto___111984$$, $G__111989_count__111713_111977$$ = $APP.cljs.core.count($c__5548__auto___111986_f_111991__$1_seq__111711_111975_temp__5825__auto___111984$$), $c__5548__auto___111986_f_111991__$1_seq__111711_111975_temp__5825__auto___111984$$ = $G__111987_i__111714_111978$$) : ($c__5548__auto___111986_f_111991__$1_seq__111711_111975_temp__5825__auto___111984$$ = 
              $APP.cljs.core.first($G__111988_chunk__111712_111976_seq__111711_111985__$1$$), $c__5548__auto___111986_f_111991__$1_seq__111711_111975_temp__5825__auto___111984$$.cljs$core$IFn$_invoke$arity$0 ? $c__5548__auto___111986_f_111991__$1_seq__111711_111975_temp__5825__auto___111984$$.cljs$core$IFn$_invoke$arity$0() : $c__5548__auto___111986_f_111991__$1_seq__111711_111975_temp__5825__auto___111984$$.call(null), $c__5548__auto___111986_f_111991__$1_seq__111711_111975_temp__5825__auto___111984$$ = 
              $APP.cljs.core.next($G__111988_chunk__111712_111976_seq__111711_111985__$1$$), $G__111988_chunk__111712_111976_seq__111711_111985__$1$$ = null, $G__111989_count__111713_111977$$ = 0), $G__111987_i__111714_111978$$ = 0;
            } else {
              break;
            }
          }
        }
        return $this$$$._hoplonWhenDom = null;
      }();
    }, 0)) : $temp__5827__auto__$$.push($f$$);
  }
  return setTimeout(function() {
    return $f$$.cljs$core$IFn$_invoke$arity$0 ? $f$$.cljs$core$IFn$_invoke$arity$0() : $f$$.call(null);
  }, 0);
};
hoplon.core.add_initfn_BANG_ = function($f$$) {
  var $f_SINGLEQUOTE_$$ = function() {
    return setTimeout(function() {
      return $f$$.cljs$core$IFn$_invoke$arity$0 ? $f$$.cljs$core$IFn$_invoke$arity$0() : $f$$.call(null);
    }, 0);
  };
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("complete", document.readyState) ? $f_SINGLEQUOTE_$$() : window.addEventListener("load", $f_SINGLEQUOTE_$$);
};
hoplon.core.parse_args = function($args$$) {
  for (var $attr$$ = $APP.cljs.core.transient$($APP.cljs.core.PersistentArrayMap.EMPTY), $kids$$ = $APP.cljs.core.transient$($APP.cljs.core.PersistentVector.EMPTY), $seq__111722$$ = $APP.cljs.core.seq($args$$), $first__111723$$ = $APP.cljs.core.first($seq__111722$$), $seq__111722__$1$$ = $APP.cljs.core.next($seq__111722$$), $G__112003_G__112006_G__112012_G__112015_G__112018_G__112021_attr__$1$$ = $attr$$, $G__112004_G__112007_G__112013_G__112016_G__112019_G__112022_kids__$1$$ = $kids$$, $G__111720__$1$$ = 
  $args$$;;) {
    var $attr__$2$$ = $G__112003_G__112006_G__112012_G__112015_G__112018_G__112021_attr__$1$$, $G__112005_G__112008_G__112014_G__112017_G__112020_G__112023_kids__$2$$ = $G__112004_G__112007_G__112013_G__112016_G__112019_G__112022_kids__$1$$, $vec__111727$$ = $G__111720__$1$$, $seq__111728$$ = $APP.cljs.core.seq($vec__111727$$), $first__111729$$ = $APP.cljs.core.first($seq__111728$$), $seq__111728__$1$$ = $APP.cljs.core.next($seq__111728$$), $arg__$1$$ = $first__111729$$, $args__$2$$ = $seq__111728__$1$$;
    if ($APP.cljs.core.not(function() {
      var $or__5025__auto__$$ = $arg__$1$$;
      return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $args__$2$$;
    }())) {
      return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.persistent_BANG_($attr__$2$$), $APP.cljs.core.persistent_BANG_($G__112005_G__112008_G__112014_G__112017_G__112020_G__112023_kids__$2$$)], null);
    }
    $APP.cljs.core.map_QMARK_($arg__$1$$) ? ($G__112003_G__112006_G__112012_G__112015_G__112018_G__112021_attr__$1$$ = $APP.cljs.core.reduce_kv($APP.cljs.core.assoc_BANG_, $attr__$2$$, $arg__$1$$), $G__112004_G__112007_G__112013_G__112016_G__112019_G__112022_kids__$1$$ = $G__112005_G__112008_G__112014_G__112017_G__112020_G__112023_kids__$2$$, $G__111720__$1$$ = $G__112005_G__112008_G__112014_G__112017_G__112020_G__112023_kids__$2$$ = $args__$2$$) : $APP.cljs.core.set_QMARK_($arg__$1$$) ? ($G__112003_G__112006_G__112012_G__112015_G__112018_G__112021_attr__$1$$ = 
    $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($attr__$1$$, $kids__$1$$, $G__111720__$1$$, $attr__$2$$, $kids__$2$$, $vec__111727$$, $seq__111728$$, $first__111729$$, $seq__111728__$1$$, $arg__$1$$, $args__$2$$, $attr$$, $kids$$, $G__111720$$, $vec__111721$$, $seq__111722$$, $first__111723$$, $seq__111722__$1$$, $arg$$, $args__$1$$) {
      return function($p1__111715_SHARP_$$, $p2__111716_SHARP_$$) {
        return $APP.cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3($p1__111715_SHARP_$$, $p2__111716_SHARP_$$, !0);
      };
    }($G__112003_G__112006_G__112012_G__112015_G__112018_G__112021_attr__$1$$, $G__112004_G__112007_G__112013_G__112016_G__112019_G__112022_kids__$1$$, $G__111720__$1$$, $attr__$2$$, $G__112005_G__112008_G__112014_G__112017_G__112020_G__112023_kids__$2$$, $vec__111727$$, $seq__111728$$, $first__111729$$, $seq__111728__$1$$, $arg__$1$$, $args__$2$$, $attr$$, $kids$$, $args$$, $args$$, $seq__111722$$, $first__111723$$, $seq__111722__$1$$, $first__111723$$, $seq__111722__$1$$), $attr__$2$$, $arg__$1$$), 
    $G__112004_G__112007_G__112013_G__112016_G__112019_G__112022_kids__$1$$ = $G__112005_G__112008_G__112014_G__112017_G__112020_G__112023_kids__$2$$, $G__111720__$1$$ = $G__112005_G__112008_G__112014_G__112017_G__112020_G__112023_kids__$2$$ = $args__$2$$) : $APP.cljs.core.truth_(hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1($arg__$1$$) : hoplon.core.attribute_QMARK_.call(null, $arg__$1$$)) ? ($G__112003_G__112006_G__112012_G__112015_G__112018_G__112021_attr__$1$$ = 
    $APP.cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3($attr__$2$$, $arg__$1$$, $APP.cljs.core.first($args__$2$$)), $G__112004_G__112007_G__112013_G__112016_G__112019_G__112022_kids__$1$$ = $G__112005_G__112008_G__112014_G__112017_G__112020_G__112023_kids__$2$$, $G__111720__$1$$ = $G__112005_G__112008_G__112014_G__112017_G__112020_G__112023_kids__$2$$ = $APP.cljs.core.rest($args__$2$$)) : $APP.cljs.core.seq_QMARK_($arg__$1$$) ? ($G__112003_G__112006_G__112012_G__112015_G__112018_G__112021_attr__$1$$ = 
    $attr__$2$$, $G__112004_G__112007_G__112013_G__112016_G__112019_G__112022_kids__$1$$ = $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.conj_BANG_, $G__112005_G__112008_G__112014_G__112017_G__112020_G__112023_kids__$2$$, hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1($arg__$1$$)), $G__111720__$1$$ = $G__112005_G__112008_G__112014_G__112017_G__112020_G__112023_kids__$2$$ = $args__$2$$) : $APP.cljs.core.vector_QMARK_($arg__$1$$) ? ($G__112003_G__112006_G__112012_G__112015_G__112018_G__112021_attr__$1$$ = 
    $attr__$2$$, $G__112004_G__112007_G__112013_G__112016_G__112019_G__112022_kids__$1$$ = $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.conj_BANG_, $G__112005_G__112008_G__112014_G__112017_G__112020_G__112023_kids__$2$$, hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1($arg__$1$$)), $G__111720__$1$$ = $G__112005_G__112008_G__112014_G__112017_G__112020_G__112023_kids__$2$$ = $args__$2$$) : ($G__112003_G__112006_G__112012_G__112015_G__112018_G__112021_attr__$1$$ = $attr__$2$$, 
    $G__112004_G__112007_G__112013_G__112016_G__112019_G__112022_kids__$1$$ = $APP.cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2($G__112005_G__112008_G__112014_G__112017_G__112020_G__112023_kids__$2$$, $arg__$1$$), $G__111720__$1$$ = $G__112005_G__112008_G__112014_G__112017_G__112020_G__112023_kids__$2$$ = $args__$2$$);
  }
};
hoplon.core.kw_dispatcher = function($_elem$$, $key$$, $_value$$) {
  return $key$$;
};
hoplon.core.ns_dispatcher = function($_elem$jscomp$1_temp__5823__auto__$$, $key$$, $_value$$) {
  $_elem$jscomp$1_temp__5823__auto__$$ = $APP.cljs.core.namespace($key$$);
  return $APP.cljs.core.truth_($_elem$jscomp$1_temp__5823__auto__$$) ? $APP.cljs.core.keyword.cljs$core$IFn$_invoke$arity$2($_elem$jscomp$1_temp__5823__auto__$$, "default") : $key$$;
};
hoplon.core.IHoplonNode = function() {
};
var hoplon$core$IHoplonNode$_node$dyn_112027 = function($this$$$) {
  var $m__5372__auto__$jscomp$896_m__5374__auto__$$ = hoplon.core._node[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$896_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$896_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$896_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$896_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$896_m__5374__auto__$$ = hoplon.core._node._;
  if ($m__5372__auto__$jscomp$896_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$896_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$896_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$896_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("IHoplonNode.-node", $this$$$);
};
hoplon.core._node = function($this$$$) {
  return $this$$$ != null && $this$$$.hoplon$core$IHoplonNode$_node$arity$1 != null ? $this$$$.hoplon$core$IHoplonNode$_node$arity$1($this$$$) : hoplon$core$IHoplonNode$_node$dyn_112027($this$$$);
};
hoplon.core.node_QMARK_ = function($this$$$) {
  return $this$$$ != null ? $APP.cljs.core.PROTOCOL_SENTINEL === $this$$$.hoplon$core$IHoplonNode$ ? !0 : $this$$$.cljs$lang$protocol_mask$partition$ ? !1 : $APP.cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonNode, $this$$$) : $APP.cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonNode, $this$$$);
};
hoplon.core.IHoplonNode.string = !0;
hoplon.core._node.string = function($this$$$) {
  return hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1($this$$$) : hoplon.core.$text.call(null, $this$$$);
};
hoplon.core.IHoplonNode.number = !0;
hoplon.core._node.number = function($G__111731_this$$$) {
  $G__111731_this$$$ = $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($G__111731_this$$$);
  return hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1($G__111731_this$$$) : hoplon.core.$text.call(null, $G__111731_this$$$);
};
hoplon.core.__GT_node = function($x$$) {
  return hoplon.core.node_QMARK_($x$$) ? hoplon.core._node($x$$) : $x$$;
};
hoplon.core.IHoplonAttribute = function() {
};
var hoplon$core$IHoplonAttribute$_attribute_BANG_$dyn_112031 = function($this$$$, $elem$$, $value$$) {
  var $m__5372__auto__$jscomp$897_m__5374__auto__$$ = hoplon.core._attribute_BANG_[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$897_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$897_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$897_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $elem$$, $value$$) : $m__5372__auto__$jscomp$897_m__5374__auto__$$.call(null, $this$$$, $elem$$, $value$$);
  }
  $m__5372__auto__$jscomp$897_m__5374__auto__$$ = hoplon.core._attribute_BANG_._;
  if ($m__5372__auto__$jscomp$897_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$897_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$897_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $elem$$, $value$$) : $m__5372__auto__$jscomp$897_m__5374__auto__$$.call(null, $this$$$, $elem$$, $value$$);
  }
  throw $APP.cljs.core.missing_protocol("IHoplonAttribute.-attribute!", $this$$$);
};
hoplon.core._attribute_BANG_ = function($this$$$, $elem$$, $value$$) {
  return $this$$$ != null && $this$$$.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3 != null ? $this$$$.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3($this$$$, $elem$$, $value$$) : hoplon$core$IHoplonAttribute$_attribute_BANG_$dyn_112031($this$$$, $elem$$, $value$$);
};
hoplon.core.attribute_QMARK_ = function($this$$$) {
  return $this$$$ != null ? $APP.cljs.core.PROTOCOL_SENTINEL === $this$$$.hoplon$core$IHoplonAttribute$ ? !0 : $this$$$.cljs$lang$protocol_mask$partition$ ? !1 : $APP.cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute, $this$$$) : $APP.cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute, $this$$$);
};
$APP.cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$ = $APP.cljs.core.PROTOCOL_SENTINEL;
$APP.cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3 = function($this$$$, $elem$$, $value$$) {
  return hoplon.core._elem_BANG_($elem$$, this, $value$$);
};
hoplon.core.IHoplonElement = function() {
};
var hoplon$core$IHoplonElement$_set_attributes_BANG_$dyn_112038 = function($this$$$, $kvs$$) {
  var $m__5372__auto__$jscomp$898_m__5374__auto__$$ = hoplon.core._set_attributes_BANG_[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$898_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$898_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$898_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $kvs$$) : $m__5372__auto__$jscomp$898_m__5374__auto__$$.call(null, $this$$$, $kvs$$);
  }
  $m__5372__auto__$jscomp$898_m__5374__auto__$$ = hoplon.core._set_attributes_BANG_._;
  if ($m__5372__auto__$jscomp$898_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$898_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$898_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $kvs$$) : $m__5372__auto__$jscomp$898_m__5374__auto__$$.call(null, $this$$$, $kvs$$);
  }
  throw $APP.cljs.core.missing_protocol("IHoplonElement.-set-attributes!", $this$$$);
};
hoplon.core._set_attributes_BANG_ = function($this$$$, $kvs$$) {
  return $this$$$ != null && $this$$$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 != null ? $this$$$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2($this$$$, $kvs$$) : hoplon$core$IHoplonElement$_set_attributes_BANG_$dyn_112038($this$$$, $kvs$$);
};
var hoplon$core$IHoplonElement$_set_styles_BANG_$dyn_112039 = function($this$$$, $kvs$$) {
  var $m__5372__auto__$jscomp$899_m__5374__auto__$$ = hoplon.core._set_styles_BANG_[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$899_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$899_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$899_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $kvs$$) : $m__5372__auto__$jscomp$899_m__5374__auto__$$.call(null, $this$$$, $kvs$$);
  }
  $m__5372__auto__$jscomp$899_m__5374__auto__$$ = hoplon.core._set_styles_BANG_._;
  if ($m__5372__auto__$jscomp$899_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$899_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$899_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $kvs$$) : $m__5372__auto__$jscomp$899_m__5374__auto__$$.call(null, $this$$$, $kvs$$);
  }
  throw $APP.cljs.core.missing_protocol("IHoplonElement.-set-styles!", $this$$$);
};
hoplon.core._set_styles_BANG_ = function($this$$$, $kvs$$) {
  return $this$$$ != null && $this$$$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 != null ? $this$$$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2($this$$$, $kvs$$) : hoplon$core$IHoplonElement$_set_styles_BANG_$dyn_112039($this$$$, $kvs$$);
};
var hoplon$core$IHoplonElement$_hoplon_kids$dyn_112049 = function($this$$$) {
  var $m__5372__auto__$jscomp$900_m__5374__auto__$$ = hoplon.core._hoplon_kids[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$900_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$900_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$900_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$900_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$900_m__5374__auto__$$ = hoplon.core._hoplon_kids._;
  if ($m__5372__auto__$jscomp$900_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$900_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$900_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$900_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("IHoplonElement.-hoplon-kids", $this$$$);
};
hoplon.core._hoplon_kids = function($this$$$) {
  return $this$$$ != null && $this$$$.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 != null ? $this$$$.hoplon$core$IHoplonElement$_hoplon_kids$arity$1($this$$$) : hoplon$core$IHoplonElement$_hoplon_kids$dyn_112049($this$$$);
};
var hoplon$core$IHoplonElement$_append_child_BANG_$dyn_112050 = function($this$$$, $child$$) {
  var $m__5372__auto__$jscomp$901_m__5374__auto__$$ = hoplon.core._append_child_BANG_[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$901_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$901_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$901_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $child$$) : $m__5372__auto__$jscomp$901_m__5374__auto__$$.call(null, $this$$$, $child$$);
  }
  $m__5372__auto__$jscomp$901_m__5374__auto__$$ = hoplon.core._append_child_BANG_._;
  if ($m__5372__auto__$jscomp$901_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$901_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$901_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $child$$) : $m__5372__auto__$jscomp$901_m__5374__auto__$$.call(null, $this$$$, $child$$);
  }
  throw $APP.cljs.core.missing_protocol("IHoplonElement.-append-child!", $this$$$);
};
hoplon.core._append_child_BANG_ = function($this$$$, $child$$) {
  return $this$$$ != null && $this$$$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 != null ? $this$$$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2($this$$$, $child$$) : hoplon$core$IHoplonElement$_append_child_BANG_$dyn_112050($this$$$, $child$$);
};
var hoplon$core$IHoplonElement$_remove_child_BANG_$dyn_112054 = function($this$$$, $child$$) {
  var $m__5372__auto__$jscomp$902_m__5374__auto__$$ = hoplon.core._remove_child_BANG_[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$902_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$902_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$902_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $child$$) : $m__5372__auto__$jscomp$902_m__5374__auto__$$.call(null, $this$$$, $child$$);
  }
  $m__5372__auto__$jscomp$902_m__5374__auto__$$ = hoplon.core._remove_child_BANG_._;
  if ($m__5372__auto__$jscomp$902_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$902_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$902_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $child$$) : $m__5372__auto__$jscomp$902_m__5374__auto__$$.call(null, $this$$$, $child$$);
  }
  throw $APP.cljs.core.missing_protocol("IHoplonElement.-remove-child!", $this$$$);
};
hoplon.core._remove_child_BANG_ = function($this$$$, $child$$) {
  return $this$$$ != null && $this$$$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 != null ? $this$$$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2($this$$$, $child$$) : hoplon$core$IHoplonElement$_remove_child_BANG_$dyn_112054($this$$$, $child$$);
};
var hoplon$core$IHoplonElement$_replace_child_BANG_$dyn_112058 = function($this$$$, $new$$$, $existing$$) {
  var $m__5372__auto__$jscomp$903_m__5374__auto__$$ = hoplon.core._replace_child_BANG_[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$903_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$903_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$903_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $new$$$, $existing$$) : $m__5372__auto__$jscomp$903_m__5374__auto__$$.call(null, $this$$$, $new$$$, $existing$$);
  }
  $m__5372__auto__$jscomp$903_m__5374__auto__$$ = hoplon.core._replace_child_BANG_._;
  if ($m__5372__auto__$jscomp$903_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$903_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$903_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $new$$$, $existing$$) : $m__5372__auto__$jscomp$903_m__5374__auto__$$.call(null, $this$$$, $new$$$, $existing$$);
  }
  throw $APP.cljs.core.missing_protocol("IHoplonElement.-replace-child!", $this$$$);
};
hoplon.core._replace_child_BANG_ = function($this$$$, $new$$$, $existing$$) {
  return $this$$$ != null && $this$$$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 != null ? $this$$$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3($this$$$, $new$$$, $existing$$) : hoplon$core$IHoplonElement$_replace_child_BANG_$dyn_112058($this$$$, $new$$$, $existing$$);
};
var hoplon$core$IHoplonElement$_insert_before_BANG_$dyn_112062 = function($this$$$, $new$$$, $existing$$) {
  var $m__5372__auto__$jscomp$904_m__5374__auto__$$ = hoplon.core._insert_before_BANG_[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$904_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$904_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$904_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $new$$$, $existing$$) : $m__5372__auto__$jscomp$904_m__5374__auto__$$.call(null, $this$$$, $new$$$, $existing$$);
  }
  $m__5372__auto__$jscomp$904_m__5374__auto__$$ = hoplon.core._insert_before_BANG_._;
  if ($m__5372__auto__$jscomp$904_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$904_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$904_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $new$$$, $existing$$) : $m__5372__auto__$jscomp$904_m__5374__auto__$$.call(null, $this$$$, $new$$$, $existing$$);
  }
  throw $APP.cljs.core.missing_protocol("IHoplonElement.-insert-before!", $this$$$);
};
hoplon.core._insert_before_BANG_ = function($this$$$, $new$$$, $existing$$) {
  return $this$$$ != null && $this$$$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 != null ? $this$$$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3($this$$$, $new$$$, $existing$$) : hoplon$core$IHoplonElement$_insert_before_BANG_$dyn_112062($this$$$, $new$$$, $existing$$);
};
hoplon.core.element_QMARK_ = function($this$$$) {
  var $and__5023__auto__$$ = $this$$$ instanceof Element;
  return $and__5023__auto__$$ ? $this$$$ != null ? $APP.cljs.core.PROTOCOL_SENTINEL === $this$$$.hoplon$core$IHoplonElement$ ? !0 : $this$$$.cljs$lang$protocol_mask$partition$ ? !1 : $APP.cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonElement, $this$$$) : $APP.cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonElement, $this$$$) : $and__5023__auto__$$;
};
hoplon.core.native_QMARK_ = function($elem$$) {
  return $elem$$ instanceof Element && !hoplon.core.element_QMARK_($elem$$);
};
hoplon.core.native_node_QMARK_ = function($node$$) {
  return $node$$ instanceof Node && !hoplon.core.element_QMARK_($node$$);
};
hoplon.core.hoplonify_BANG_ = function($elem$$) {
  $elem$$.cljs$core$IPrintWithWriter$ = $APP.cljs.core.PROTOCOL_SENTINEL;
  $elem$$.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this$$$, $writer$$, $_opts$$) {
    return $APP.cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic($writer$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#\x3cHoplonElement: ", this.tagName, "\x3e"], 0));
  };
  $elem$$.cljs$core$ILookup$ = $APP.cljs.core.PROTOCOL_SENTINEL;
  $elem$$.cljs$core$ILookup$_lookup$arity$2 = function($obj111771_this$$$, $k$$) {
    if (hoplon.core.attribute_QMARK_($k$$)) {
      return this.getAttribute($APP.cljs.core.name($k$$));
    }
    $obj111771_this$$$ = this != null ? this.children : void 0;
    if ($obj111771_this$$$ != null) {
      return $obj111771_this$$$[$APP.applied_science.js_interop.impl.wrap_key($k$$)];
    }
  };
  $elem$$.cljs$core$ILookup$_lookup$arity$3 = function($or__5025__auto__$jscomp$1290_this$$$, $k$$, $not_found$$) {
    $or__5025__auto__$jscomp$1290_this$$$ = $APP.cljs.core._lookup(this, $k$$);
    return $APP.cljs.core.truth_($or__5025__auto__$jscomp$1290_this$$$) ? $or__5025__auto__$jscomp$1290_this$$$ : $not_found$$;
  };
  $elem$$.hoplon$core$IHoplonElement$ = $APP.cljs.core.PROTOCOL_SENTINEL;
  $elem$$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = function($G__112068_seq__111775_seq__111775__$1_temp__5825__auto__$jscomp$1102_this$$$, $G__112069_chunk__111777_k_112072__$1_kvs$$) {
    $G__112068_seq__111775_seq__111775__$1_temp__5825__auto__$jscomp$1102_this$$$ = $APP.cljs.core.seq($G__112069_chunk__111777_k_112072__$1_kvs$$);
    $G__112069_chunk__111777_k_112072__$1_kvs$$ = null;
    for (var $count__111778$$ = 0, $i__111779$$ = 0;;) {
      if ($i__111779$$ < $count__111778$$) {
        var $v$$ = $G__112069_chunk__111777_k_112072__$1_kvs$$.cljs$core$IIndexed$_nth$arity$2(null, $i__111779$$), $G__112070_c__5548__auto__$jscomp$89_k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$$, 0, null);
        $v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$$, 1, null);
        $G__112070_c__5548__auto__$jscomp$89_k$$ = $APP.cljs.core.name($G__112070_c__5548__auto__$jscomp$89_k$$);
        $APP.cljs.core.not($v$$) ? this.removeAttribute($G__112070_c__5548__auto__$jscomp$89_k$$) : this.setAttribute($G__112070_c__5548__auto__$jscomp$89_k$$, $v$$ === !0 ? $G__112070_c__5548__auto__$jscomp$89_k$$ : $v$$);
        $i__111779$$ += 1;
      } else {
        if ($G__112068_seq__111775_seq__111775__$1_temp__5825__auto__$jscomp$1102_this$$$ = $APP.cljs.core.seq($G__112068_seq__111775_seq__111775__$1_temp__5825__auto__$jscomp$1102_this$$$)) {
          $APP.cljs.core.chunked_seq_QMARK_($G__112068_seq__111775_seq__111775__$1_temp__5825__auto__$jscomp$1102_this$$$) ? ($G__112070_c__5548__auto__$jscomp$89_k$$ = $APP.cljs.core.chunk_first($G__112068_seq__111775_seq__111775__$1_temp__5825__auto__$jscomp$1102_this$$$), $G__112068_seq__111775_seq__111775__$1_temp__5825__auto__$jscomp$1102_this$$$ = $APP.cljs.core.chunk_rest($G__112068_seq__111775_seq__111775__$1_temp__5825__auto__$jscomp$1102_this$$$), $G__112069_chunk__111777_k_112072__$1_kvs$$ = 
          $G__112070_c__5548__auto__$jscomp$89_k$$, $count__111778$$ = $G__112070_c__5548__auto__$jscomp$89_k$$ = $APP.cljs.core.count($G__112070_c__5548__auto__$jscomp$89_k$$)) : ($G__112069_chunk__111777_k_112072__$1_kvs$$ = $APP.cljs.core.first($G__112068_seq__111775_seq__111775__$1_temp__5825__auto__$jscomp$1102_this$$$), $G__112070_c__5548__auto__$jscomp$89_k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__112069_chunk__111777_k_112072__$1_kvs$$, 0, null), $v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__112069_chunk__111777_k_112072__$1_kvs$$, 
          1, null), $G__112069_chunk__111777_k_112072__$1_kvs$$ = $APP.cljs.core.name($G__112070_c__5548__auto__$jscomp$89_k$$), $APP.cljs.core.not($v$$) ? this.removeAttribute($G__112069_chunk__111777_k_112072__$1_kvs$$) : this.setAttribute($G__112069_chunk__111777_k_112072__$1_kvs$$, $v$$ === !0 ? $G__112069_chunk__111777_k_112072__$1_kvs$$ : $v$$), $G__112068_seq__111775_seq__111775__$1_temp__5825__auto__$jscomp$1102_this$$$ = $APP.cljs.core.next($G__112068_seq__111775_seq__111775__$1_temp__5825__auto__$jscomp$1102_this$$$), 
          $G__112069_chunk__111777_k_112072__$1_kvs$$ = null, $count__111778$$ = 0), $i__111779$$ = 0;
        } else {
          return null;
        }
      }
    }
  };
  $elem$$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = function($G__112085_seq__111796_seq__111796__$1_temp__5825__auto__$jscomp$1103_this$$$, $G__112086_k$jscomp$1068_kvs$$) {
    $G__112085_seq__111796_seq__111796__$1_temp__5825__auto__$jscomp$1103_this$$$ = $APP.cljs.core.seq($G__112086_k$jscomp$1068_kvs$$);
    for (var $c__5548__auto__$$ = null, $G__112087_count__111798$$ = 0, $i__111799$$ = 0;;) {
      if ($i__111799$$ < $G__112087_count__111798$$) {
        var $v$$ = $c__5548__auto__$$.cljs$core$IIndexed$_nth$arity$2(null, $i__111799$$);
        $G__112086_k$jscomp$1068_kvs$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$$, 0, null);
        $v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$$, 1, null);
        var $obj111835_112078__$1$$ = this != null ? this : {};
        (function() {
          var $child111836_new_child__39429__auto__$$ = $obj111835_112078__$1$$.style;
          if ($child111836_new_child__39429__auto__$$ != null) {
            return $child111836_new_child__39429__auto__$$;
          }
          $child111836_new_child__39429__auto__$$ = {};
          return $obj111835_112078__$1$$.style = $child111836_new_child__39429__auto__$$;
        })()[$APP.cljs.core.name($G__112086_k$jscomp$1068_kvs$$)] = $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($v$$);
        $i__111799$$ += 1;
      } else {
        if ($G__112085_seq__111796_seq__111796__$1_temp__5825__auto__$jscomp$1103_this$$$ = $APP.cljs.core.seq($G__112085_seq__111796_seq__111796__$1_temp__5825__auto__$jscomp$1103_this$$$)) {
          if ($APP.cljs.core.chunked_seq_QMARK_($G__112085_seq__111796_seq__111796__$1_temp__5825__auto__$jscomp$1103_this$$$)) {
            $c__5548__auto__$$ = $APP.cljs.core.chunk_first($G__112085_seq__111796_seq__111796__$1_temp__5825__auto__$jscomp$1103_this$$$), $G__112085_seq__111796_seq__111796__$1_temp__5825__auto__$jscomp$1103_this$$$ = $APP.cljs.core.chunk_rest($G__112085_seq__111796_seq__111796__$1_temp__5825__auto__$jscomp$1103_this$$$), $G__112086_k$jscomp$1068_kvs$$ = $c__5548__auto__$$, $G__112087_count__111798$$ = $APP.cljs.core.count($c__5548__auto__$$), $c__5548__auto__$$ = $G__112086_k$jscomp$1068_kvs$$;
          } else {
            $c__5548__auto__$$ = $APP.cljs.core.first($G__112085_seq__111796_seq__111796__$1_temp__5825__auto__$jscomp$1103_this$$$);
            $G__112086_k$jscomp$1068_kvs$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c__5548__auto__$$, 0, null);
            $v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c__5548__auto__$$, 1, null);
            var $obj111849_112090__$1$$ = this != null ? this : {};
            (function() {
              var $child111850_new_child__39429__auto__$$ = $obj111849_112090__$1$$.style;
              if ($child111850_new_child__39429__auto__$$ != null) {
                return $child111850_new_child__39429__auto__$$;
              }
              $child111850_new_child__39429__auto__$$ = {};
              return $obj111849_112090__$1$$.style = $child111850_new_child__39429__auto__$$;
            })()[$APP.cljs.core.name($G__112086_k$jscomp$1068_kvs$$)] = $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($v$$);
            $G__112085_seq__111796_seq__111796__$1_temp__5825__auto__$jscomp$1103_this$$$ = $APP.cljs.core.next($G__112085_seq__111796_seq__111796__$1_temp__5825__auto__$jscomp$1103_this$$$);
            $c__5548__auto__$$ = null;
            $G__112087_count__111798$$ = 0;
          }
          $i__111799$$ = 0;
        } else {
          return null;
        }
      }
    }
  };
  $elem$$.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 = function($kids$jscomp$3_temp__5823__auto__$jscomp$459_this$$$) {
    var $this$__$1$$ = this;
    $kids$jscomp$3_temp__5823__auto__$jscomp$459_this$$$ = $this$__$1$$.hoplonKids;
    if ($APP.cljs.core.truth_($kids$jscomp$3_temp__5823__auto__$jscomp$459_this$$$)) {
      return $kids$jscomp$3_temp__5823__auto__$jscomp$459_this$$$;
    }
    $kids$jscomp$3_temp__5823__auto__$jscomp$459_this$$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec($this$__$1$$));
    $this$__$1$$.hoplonKids = $kids$jscomp$3_temp__5823__auto__$jscomp$459_this$$$;
    hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2($kids$jscomp$3_temp__5823__auto__$jscomp$459_this$$$, function($p1__111762_SHARP_$$, $p2__111761_SHARP_$$) {
      return hoplon.core.set_dom_children_BANG_($this$__$1$$, $p2__111761_SHARP_$$);
    });
    return $kids$jscomp$3_temp__5823__auto__$jscomp$459_this$$$;
  };
  $elem$$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = function($this$$$, $child$$) {
    var $kids_112097$$ = hoplon.core._hoplon_kids(this), $i_112098$$ = $APP.cljs.core.count($APP.cljs.core.deref($kids_112097$$));
    $APP.cljs.core.truth_($APP.javelin.core.cell_QMARK_($child$$)) ? hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2($child$$, function($p1__111764_SHARP_$$, $p2__111763_SHARP_$$) {
      return $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4($kids_112097$$, $APP.cljs.core.assoc, $i_112098$$, $p2__111763_SHARP_$$);
    }) : $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4($kids_112097$$, $APP.cljs.core.assoc, $i_112098$$, $child$$);
    return $child$$;
  };
  $elem$$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = function($kids_112099_this$$$, $child$$) {
    $kids_112099_this$$$ = hoplon.core._hoplon_kids(this);
    var $before_count_112100$$ = $APP.cljs.core.count($APP.cljs.core.deref($kids_112099_this$$$));
    $APP.cljs.core.truth_($APP.javelin.core.cell_QMARK_($child$$)) ? $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2($kids_112099_this$$$, function($p1__111765_SHARP_$$) {
      return $APP.cljs.core.vec($APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._EQ_, $APP.cljs.core.deref($child$$)), $p1__111765_SHARP_$$));
    }) : $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2($kids_112099_this$$$, function($p1__111766_SHARP_$$) {
      return $APP.cljs.core.vec($APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._EQ_, $child$$), $p1__111766_SHARP_$$));
    });
    if (!$APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count($APP.cljs.core.deref($kids_112099_this$$$)), $before_count_112100$$ - 1)) {
      throw Error("Attempted to remove a node that is not a child of parent.");
    }
    return $child$$;
  };
  $elem$$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = function($this$$$, $new$$$, $existing$$) {
    $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this), function($p1__111767_SHARP_$$) {
      return $APP.cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(function($el$$) {
        return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($el$$, $existing$$) ? $new$$$ : $el$$;
      }, $p1__111767_SHARP_$$);
    });
    return $existing$$;
  };
  $elem$$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = function($this$$$, $new$$$, $existing$$) {
    $APP.cljs.core.not($existing$$) ? $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hoplon.core._hoplon_kids(this), $APP.cljs.core.conj, $new$$$) : $APP.cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2($new$$$, $existing$$) && $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this), function($p1__111768_SHARP_$$) {
      return $APP.cljs.core.vec($APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(function($el$$) {
        return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($el$$, $existing$$) ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$new$$$, $el$$], null) : new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$el$$], null);
      }, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$p1__111768_SHARP_$$], 0)));
    });
    return $new$$$;
  };
  return $elem$$;
};
hoplon.core.__GT_hoplon = function($elem$$) {
  hoplon.core.element_QMARK_($elem$$) || hoplon.core.hoplonify_BANG_($elem$$);
  return $elem$$;
};
hoplon.core.set_attributes_BANG_ = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var $args_arr__5774__auto__$jscomp$147_argseq__5775__auto__$$ = [], $len__5749__auto___112106$$ = arguments.length, $i__5750__auto___112107$$ = 0;;) {
        if ($i__5750__auto___112107$$ < $len__5749__auto___112106$$) {
          $args_arr__5774__auto__$jscomp$147_argseq__5775__auto__$$.push(arguments[$i__5750__auto___112107$$]), $i__5750__auto___112107$$ += 1;
        } else {
          break;
        }
      }
      $args_arr__5774__auto__$jscomp$147_argseq__5775__auto__$$ = 3 < $args_arr__5774__auto__$jscomp$147_argseq__5775__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args_arr__5774__auto__$jscomp$147_argseq__5775__auto__$$.slice(3), 0, null) : null;
      return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args_arr__5774__auto__$jscomp$147_argseq__5775__auto__$$);
  }
};
hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = function($this$$$, $kvs$$) {
  return hoplon.core._set_attributes_BANG_(hoplon.core.__GT_hoplon($this$$$), $kvs$$);
};
hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = function($this$$$, $k$$, $v$$, $kvs$$) {
  return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2($this$$$, $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$4($APP.cljs.core.hash_map, $k$$, $v$$, $kvs$$));
};
hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = function($G__111869_seq111867$$) {
  var $G__111868$$ = $APP.cljs.core.first($G__111869_seq111867$$), $G__111870_seq111867__$1$$ = $APP.cljs.core.next($G__111869_seq111867$$);
  $G__111869_seq111867$$ = $APP.cljs.core.first($G__111870_seq111867__$1$$);
  var $seq111867__$2_seq111867__$3$$ = $APP.cljs.core.next($G__111870_seq111867__$1$$);
  $G__111870_seq111867__$1$$ = $APP.cljs.core.first($seq111867__$2_seq111867__$3$$);
  $seq111867__$2_seq111867__$3$$ = $APP.cljs.core.next($seq111867__$2_seq111867__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__111868$$, $G__111869_seq111867$$, $G__111870_seq111867__$1$$, $seq111867__$2_seq111867__$3$$);
};
hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = 3;
hoplon.core.set_styles_BANG_ = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var $args_arr__5774__auto__$jscomp$148_argseq__5775__auto__$$ = [], $len__5749__auto___112122$$ = arguments.length, $i__5750__auto___112123$$ = 0;;) {
        if ($i__5750__auto___112123$$ < $len__5749__auto___112122$$) {
          $args_arr__5774__auto__$jscomp$148_argseq__5775__auto__$$.push(arguments[$i__5750__auto___112123$$]), $i__5750__auto___112123$$ += 1;
        } else {
          break;
        }
      }
      $args_arr__5774__auto__$jscomp$148_argseq__5775__auto__$$ = 3 < $args_arr__5774__auto__$jscomp$148_argseq__5775__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args_arr__5774__auto__$jscomp$148_argseq__5775__auto__$$.slice(3), 0, null) : null;
      return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args_arr__5774__auto__$jscomp$148_argseq__5775__auto__$$);
  }
};
hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = function($this$$$, $kvs$$) {
  return hoplon.core._set_styles_BANG_(hoplon.core.__GT_hoplon($this$$$), $kvs$$);
};
hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = function($this$$$, $k$$, $v$$, $kvs$$) {
  return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2($this$$$, $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$4($APP.cljs.core.hash_map, $k$$, $v$$, $kvs$$));
};
hoplon.core.set_styles_BANG_.cljs$lang$applyTo = function($G__111875_seq111873$$) {
  var $G__111874$$ = $APP.cljs.core.first($G__111875_seq111873$$), $G__111876_seq111873__$1$$ = $APP.cljs.core.next($G__111875_seq111873$$);
  $G__111875_seq111873$$ = $APP.cljs.core.first($G__111876_seq111873__$1$$);
  var $seq111873__$2_seq111873__$3$$ = $APP.cljs.core.next($G__111876_seq111873__$1$$);
  $G__111876_seq111873__$1$$ = $APP.cljs.core.first($seq111873__$2_seq111873__$3$$);
  $seq111873__$2_seq111873__$3$$ = $APP.cljs.core.next($seq111873__$2_seq111873__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__111874$$, $G__111875_seq111873$$, $G__111876_seq111873__$1$$, $seq111873__$2_seq111873__$3$$);
};
hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = 3;
hoplon.core.append_child_BANG_ = function($this$$$, $child$$) {
  return hoplon.core._append_child_BANG_(hoplon.core.__GT_hoplon($this$$$), $child$$);
};
hoplon.core.remove_child_BANG_ = function($this$$$, $child$$) {
  return hoplon.core._remove_child_BANG_(hoplon.core.__GT_hoplon($this$$$), $child$$);
};
hoplon.core.replace_child_BANG_ = function($this$$$, $new$$$, $existing$$) {
  return hoplon.core._replace_child_BANG_(hoplon.core.__GT_hoplon($this$$$), $new$$$, $existing$$);
};
hoplon.core.insert_before_BANG_ = function($this$$$, $new$$$, $existing$$) {
  return hoplon.core._insert_before_BANG_(hoplon.core.__GT_hoplon($this$$$), $new$$$, $existing$$);
};
hoplon.core.add_attributes_BANG_ = function($this$$$, $attr$$) {
  return hoplon.core._elem_BANG_($this$$$, cljs$cst$9043$hoplon_SLASH_attr, $attr$$);
};
hoplon.core.add_children_BANG_ = function($this$$$, $kids$$) {
  return hoplon.core._elem_BANG_($this$$$, cljs$cst$9044$hoplon_SLASH_kids, $kids$$);
};
hoplon.core.invoke_BANG_ = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$518_argseq__5756__auto__$$ = [], $len__5749__auto___112139$$ = arguments.length, $i__5750__auto___112140$$ = 0;;) {
    if ($i__5750__auto___112140$$ < $len__5749__auto___112139$$) {
      $args__5755__auto__$jscomp$518_argseq__5756__auto__$$.push(arguments[$i__5750__auto___112140$$]), $i__5750__auto___112140$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$518_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$518_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$518_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$518_argseq__5756__auto__$$);
};
hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = function($this$$$, $args$$) {
  return hoplon.core._elem_BANG_($this$$$, cljs$cst$9045$hoplon_SLASH_invoke, $args$$);
};
hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = 1;
hoplon.core.invoke_BANG_.cljs$lang$applyTo = function($seq111882_seq111882__$1$$) {
  var $G__111883$$ = $APP.cljs.core.first($seq111882_seq111882__$1$$);
  $seq111882_seq111882__$1$$ = $APP.cljs.core.next($seq111882_seq111882__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__111883$$, $seq111882_seq111882__$1$$);
};
hoplon.core.elem_BANG_ = function() {
  var $method_table__5622__auto__$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY), $prefer_table__5623__auto__$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY), $method_cache__5624__auto__$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY), $cached_hierarchy__5625__auto__$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY), 
  $JSCompiler_temp_const$jscomp$3499_hierarchy__5626__auto__$$ = $APP.cljs.core.get, $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$3499_hierarchy__5626__auto__$$.cljs$core$IFn$_invoke$arity$3, $JSCompiler_temp_const$jscomp$0$$ = new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$205$default, cljs$cst$9046$hoplon_DOT_core_SLASH_default], null);
  var $JSCompiler_inline_result$jscomp$3500_fexpr__111884$$ = $APP.cljs.core.get_global_hierarchy;
  $JSCompiler_inline_result$jscomp$3500_fexpr__111884$$ = $JSCompiler_inline_result$jscomp$3500_fexpr__111884$$.cljs$core$IFn$_invoke$arity$0 ? $JSCompiler_inline_result$jscomp$3500_fexpr__111884$$.cljs$core$IFn$_invoke$arity$0() : $JSCompiler_inline_result$jscomp$3500_fexpr__111884$$.call(null);
  $JSCompiler_temp_const$jscomp$3499_hierarchy__5626__auto__$$ = $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$3499_hierarchy__5626__auto__$$, $JSCompiler_temp_const$jscomp$0$$, $APP.cljs$cst$204$hierarchy, $JSCompiler_inline_result$jscomp$3500_fexpr__111884$$);
  return new $APP.cljs.core.MultiFn($APP.cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core", "elem!"), hoplon.core.ns_dispatcher, cljs$cst$9046$hoplon_DOT_core_SLASH_default, $JSCompiler_temp_const$jscomp$3499_hierarchy__5626__auto__$$, $method_table__5622__auto__$$, $prefer_table__5623__auto__$$, $method_cache__5624__auto__$$, $cached_hierarchy__5625__auto__$$);
}();
hoplon.core.elem_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9046$hoplon_DOT_core_SLASH_default, function($elem$$, $key$$, $value$$) {
  return $APP.cljs.core.truth_($APP.javelin.core.cell_QMARK_($value$$)) ? hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2($value$$, function($p1__111886_SHARP_$$, $p2__111885_SHARP_$$) {
    return hoplon.core._do_BANG_($elem$$, $key$$, $p2__111885_SHARP_$$);
  }) : $APP.cljs.core.fn_QMARK_($value$$) ? hoplon.core._on_BANG_($elem$$, $key$$, $value$$) : hoplon.core._do_BANG_($elem$$, $key$$, $value$$);
});
hoplon.core.hl_BANG_ = function() {
  var $method_table__5622__auto__$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY), $prefer_table__5623__auto__$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY), $method_cache__5624__auto__$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY), $cached_hierarchy__5625__auto__$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY), 
  $JSCompiler_temp_const$jscomp$3503_hierarchy__5626__auto__$$ = $APP.cljs.core.get, $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$3503_hierarchy__5626__auto__$$.cljs$core$IFn$_invoke$arity$3, $JSCompiler_temp_const$jscomp$0$$ = $APP.cljs.core.PersistentArrayMap.EMPTY;
  var $JSCompiler_inline_result$jscomp$3504_fexpr__111887$$ = $APP.cljs.core.get_global_hierarchy;
  $JSCompiler_inline_result$jscomp$3504_fexpr__111887$$ = $JSCompiler_inline_result$jscomp$3504_fexpr__111887$$.cljs$core$IFn$_invoke$arity$0 ? $JSCompiler_inline_result$jscomp$3504_fexpr__111887$$.cljs$core$IFn$_invoke$arity$0() : $JSCompiler_inline_result$jscomp$3504_fexpr__111887$$.call(null);
  $JSCompiler_temp_const$jscomp$3503_hierarchy__5626__auto__$$ = $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$3503_hierarchy__5626__auto__$$, $JSCompiler_temp_const$jscomp$0$$, $APP.cljs$cst$204$hierarchy, $JSCompiler_inline_result$jscomp$3504_fexpr__111887$$);
  return new $APP.cljs.core.MultiFn($APP.cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core", "hl!"), hoplon.core.kw_dispatcher, $APP.cljs$cst$205$default, $JSCompiler_temp_const$jscomp$3503_hierarchy__5626__auto__$$, $method_table__5622__auto__$$, $prefer_table__5623__auto__$$, $method_cache__5624__auto__$$, $cached_hierarchy__5625__auto__$$);
}();
hoplon.core.elem_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9047$hoplon_SLASH_default, function($elem$$, $key$$, $args$$) {
  return hoplon.core.hl_BANG_.cljs$core$IFn$_invoke$arity$3($elem$$, $key$$, $args$$);
});
hoplon.core.hl_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9048$hoplon_SLASH_singleton, function($G__111891_elem$$, $_key_attr$$, $args$jscomp$527_kids$$) {
  $args$jscomp$527_kids$$ = hoplon.core.parse_args($args$jscomp$527_kids$$);
  $_key_attr$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($args$jscomp$527_kids$$, 0, null);
  $args$jscomp$527_kids$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($args$jscomp$527_kids$$, 1, null);
  if ($APP.cljs.core.truth_(cljs$cst$9049$hoplon_SLASH_static.cljs$core$IFn$_invoke$arity$1($_key_attr$$))) {
    return $G__111891_elem$$;
  }
  $G__111891_elem$$ = hoplon.core.__GT_hoplon($G__111891_elem$$);
  hoplon.core.hl_BANG_.cljs$core$IFn$_invoke$arity$3($G__111891_elem$$, cljs$cst$9050$hoplon_SLASH_reset, null);
  hoplon.core.hl_BANG_.cljs$core$IFn$_invoke$arity$3($G__111891_elem$$, cljs$cst$9043$hoplon_SLASH_attr, $_key_attr$$);
  hoplon.core.hl_BANG_.cljs$core$IFn$_invoke$arity$3($G__111891_elem$$, cljs$cst$9044$hoplon_SLASH_kids, $args$jscomp$527_kids$$);
  return $G__111891_elem$$;
});
hoplon.core.hl_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9050$hoplon_SLASH_reset, function($elem$$, $_key$$, $val$$) {
  $_key$$ = hoplon.core._hoplon_kids($elem$$);
  $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("HTML", $elem$$.tagName) || $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2($_key$$, $APP.cljs.core.empty);
  for (var $c__5548__auto___112154_seq__111892_112143_temp__5825__auto___112152_w_112159$$ = $APP.cljs.core.seq($APP.cljs.core.keys($_key$$.watches)), $G__112156_chunk__111893_112144_seq__111892_112153__$1$$ = null, $G__112157_count__111894_112145$$ = 0, $G__112155_i__111895_112146$$ = 0;;) {
    if ($G__112155_i__111895_112146$$ < $G__112157_count__111894_112145$$) {
      var $w_112147$$ = $G__112156_chunk__111893_112144_seq__111892_112153__$1$$.cljs$core$IIndexed$_nth$arity$2(null, $G__112155_i__111895_112146$$);
      $APP.cljs.core.remove_watch($_key$$, $w_112147$$);
      $G__112155_i__111895_112146$$ += 1;
    } else {
      if ($c__5548__auto___112154_seq__111892_112143_temp__5825__auto___112152_w_112159$$ = $APP.cljs.core.seq($c__5548__auto___112154_seq__111892_112143_temp__5825__auto___112152_w_112159$$)) {
        $G__112156_chunk__111893_112144_seq__111892_112153__$1$$ = $c__5548__auto___112154_seq__111892_112143_temp__5825__auto___112152_w_112159$$, $APP.cljs.core.chunked_seq_QMARK_($G__112156_chunk__111893_112144_seq__111892_112153__$1$$) ? ($c__5548__auto___112154_seq__111892_112143_temp__5825__auto___112152_w_112159$$ = $APP.cljs.core.chunk_first($G__112156_chunk__111893_112144_seq__111892_112153__$1$$), $G__112155_i__111895_112146$$ = $APP.cljs.core.chunk_rest($G__112156_chunk__111893_112144_seq__111892_112153__$1$$), 
        $G__112156_chunk__111893_112144_seq__111892_112153__$1$$ = $c__5548__auto___112154_seq__111892_112143_temp__5825__auto___112152_w_112159$$, $G__112157_count__111894_112145$$ = $APP.cljs.core.count($c__5548__auto___112154_seq__111892_112143_temp__5825__auto___112152_w_112159$$), $c__5548__auto___112154_seq__111892_112143_temp__5825__auto___112152_w_112159$$ = $G__112155_i__111895_112146$$) : ($c__5548__auto___112154_seq__111892_112143_temp__5825__auto___112152_w_112159$$ = $APP.cljs.core.first($G__112156_chunk__111893_112144_seq__111892_112153__$1$$), 
        $APP.cljs.core.remove_watch($_key$$, $c__5548__auto___112154_seq__111892_112143_temp__5825__auto___112152_w_112159$$), $c__5548__auto___112154_seq__111892_112143_temp__5825__auto___112152_w_112159$$ = $APP.cljs.core.next($G__112156_chunk__111893_112144_seq__111892_112153__$1$$), $G__112156_chunk__111893_112144_seq__111892_112153__$1$$ = null, $G__112157_count__111894_112145$$ = 0), $G__112155_i__111895_112146$$ = 0;
      } else {
        break;
      }
    }
  }
  $elem$$.hoplonKids = $val$$;
  return $elem$$;
});
hoplon.core.hl_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9045$hoplon_SLASH_invoke, function($G__111899_elem$$, $_key$jscomp$2_attr$$, $args$jscomp$528_kids$$) {
  $args$jscomp$528_kids$$ = hoplon.core.parse_args($args$jscomp$528_kids$$);
  $_key$jscomp$2_attr$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($args$jscomp$528_kids$$, 0, null);
  $args$jscomp$528_kids$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($args$jscomp$528_kids$$, 1, null);
  if ($APP.cljs.core.truth_(cljs$cst$9049$hoplon_SLASH_static.cljs$core$IFn$_invoke$arity$1($_key$jscomp$2_attr$$))) {
    return $G__111899_elem$$;
  }
  $G__111899_elem$$ = hoplon.core.__GT_hoplon($G__111899_elem$$);
  hoplon.core.hl_BANG_.cljs$core$IFn$_invoke$arity$3($G__111899_elem$$, cljs$cst$9043$hoplon_SLASH_attr, $_key$jscomp$2_attr$$);
  hoplon.core.hl_BANG_.cljs$core$IFn$_invoke$arity$3($G__111899_elem$$, cljs$cst$9044$hoplon_SLASH_kids, $args$jscomp$528_kids$$);
  return $G__111899_elem$$;
});
hoplon.core.hl_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9043$hoplon_SLASH_attr, function($elem$$, $_key$$, $attr$$) {
  $APP.cljs.core.reduce_kv(function($p1__111901_SHARP_$$, $p2__111900_SHARP_$$, $p3__111902_SHARP_$$) {
    hoplon.core._attribute_BANG_($p2__111900_SHARP_$$, $p1__111901_SHARP_$$, $p3__111902_SHARP_$$);
    return $p1__111901_SHARP_$$;
  }, $elem$$, $attr$$);
  return $elem$$;
});
hoplon.core.hl_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9044$hoplon_SLASH_kids, function($elem$$, $G__112178__key$$, $G__112179_chunk__111904_112165_kids$$) {
  $G__112178__key$$ = $APP.cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1($G__112179_chunk__111904_112165_kids$$));
  $G__112179_chunk__111904_112165_kids$$ = null;
  for (var $G__112180_c__5548__auto___112177_count__111905_112166$$ = 0, $i__111906_112167$$ = 0;;) {
    if ($i__111906_112167$$ < $G__112180_c__5548__auto___112177_count__111905_112166$$) {
      var $temp__5825__auto___112169_x_112168$$ = $G__112179_chunk__111904_112165_kids$$.cljs$core$IIndexed$_nth$arity$2(null, $i__111906_112167$$);
      $temp__5825__auto___112169_x_112168$$ = hoplon.core.__GT_node($temp__5825__auto___112169_x_112168$$);
      $APP.cljs.core.truth_($temp__5825__auto___112169_x_112168$$) && hoplon.core._append_child_BANG_($elem$$, $temp__5825__auto___112169_x_112168$$);
      $i__111906_112167$$ += 1;
    } else {
      if ($G__112178__key$$ = $APP.cljs.core.seq($G__112178__key$$)) {
        $APP.cljs.core.chunked_seq_QMARK_($G__112178__key$$) ? ($G__112180_c__5548__auto___112177_count__111905_112166$$ = $APP.cljs.core.chunk_first($G__112178__key$$), $G__112178__key$$ = $APP.cljs.core.chunk_rest($G__112178__key$$), $G__112179_chunk__111904_112165_kids$$ = $G__112180_c__5548__auto___112177_count__111905_112166$$, $G__112180_c__5548__auto___112177_count__111905_112166$$ = $APP.cljs.core.count($G__112180_c__5548__auto___112177_count__111905_112166$$)) : ($G__112179_chunk__111904_112165_kids$$ = 
        $APP.cljs.core.first($G__112178__key$$), $G__112179_chunk__111904_112165_kids$$ = hoplon.core.__GT_node($G__112179_chunk__111904_112165_kids$$), $APP.cljs.core.truth_($G__112179_chunk__111904_112165_kids$$) && hoplon.core._append_child_BANG_($elem$$, $G__112179_chunk__111904_112165_kids$$), $G__112178__key$$ = $APP.cljs.core.next($G__112178__key$$), $G__112179_chunk__111904_112165_kids$$ = null, $G__112180_c__5548__auto___112177_count__111905_112166$$ = 0), $i__111906_112167$$ = 0;
      } else {
        break;
      }
    }
  }
  return $elem$$;
});
hoplon.core.do_BANG_ = function() {
  var $method_table__5622__auto__$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY), $prefer_table__5623__auto__$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY), $method_cache__5624__auto__$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY), $cached_hierarchy__5625__auto__$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY), 
  $JSCompiler_temp_const$jscomp$3507_hierarchy__5626__auto__$$ = $APP.cljs.core.get, $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$3507_hierarchy__5626__auto__$$.cljs$core$IFn$_invoke$arity$3, $JSCompiler_temp_const$jscomp$0$$ = new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$205$default, cljs$cst$9046$hoplon_DOT_core_SLASH_default], null);
  var $JSCompiler_inline_result$jscomp$3508_fexpr__111907$$ = $APP.cljs.core.get_global_hierarchy;
  $JSCompiler_inline_result$jscomp$3508_fexpr__111907$$ = $JSCompiler_inline_result$jscomp$3508_fexpr__111907$$.cljs$core$IFn$_invoke$arity$0 ? $JSCompiler_inline_result$jscomp$3508_fexpr__111907$$.cljs$core$IFn$_invoke$arity$0() : $JSCompiler_inline_result$jscomp$3508_fexpr__111907$$.call(null);
  $JSCompiler_temp_const$jscomp$3507_hierarchy__5626__auto__$$ = $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$3507_hierarchy__5626__auto__$$, $JSCompiler_temp_const$jscomp$0$$, $APP.cljs$cst$204$hierarchy, $JSCompiler_inline_result$jscomp$3508_fexpr__111907$$);
  return new $APP.cljs.core.MultiFn($APP.cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core", "do!"), hoplon.core.ns_dispatcher, cljs$cst$9046$hoplon_DOT_core_SLASH_default, $JSCompiler_temp_const$jscomp$3507_hierarchy__5626__auto__$$, $method_table__5622__auto__$$, $prefer_table__5623__auto__$$, $method_cache__5624__auto__$$, $cached_hierarchy__5625__auto__$$);
}();
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9046$hoplon_DOT_core_SLASH_default, function($elem$$, $k$$, $v$$) {
  return hoplon.core.set_attributes_BANG_($elem$$, $k$$, $v$$);
});
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9051$hoplon_DOT_core_SLASH_attr, function($elem$$, $_key$$, $kvs$$) {
  return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2($elem$$, $kvs$$);
});
$APP.cljs.core.derive.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$3020$attr, cljs$cst$9051$hoplon_DOT_core_SLASH_attr);
$APP.cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs$cst$9052$attr_SLASH_default, cljs$cst$9051$hoplon_DOT_core_SLASH_attr);
$APP.cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs$cst$9053$html_SLASH_default, cljs$cst$9051$hoplon_DOT_core_SLASH_attr);
$APP.cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs$cst$9054$svg_SLASH_default, cljs$cst$9051$hoplon_DOT_core_SLASH_attr);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9055$hoplon_DOT_core_SLASH_css, function($elem$$, $_$$, $kvs$$) {
  return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2($elem$$, $kvs$$);
});
$APP.cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs$cst$9056$css, cljs$cst$9055$hoplon_DOT_core_SLASH_css);
$APP.cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs$cst$9057$css_SLASH_default, cljs$cst$9055$hoplon_DOT_core_SLASH_css);
hoplon.core.on_BANG_ = function() {
  var $method_table__5622__auto__$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY), $prefer_table__5623__auto__$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY), $method_cache__5624__auto__$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY), $cached_hierarchy__5625__auto__$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY), 
  $JSCompiler_temp_const$jscomp$3511_hierarchy__5626__auto__$$ = $APP.cljs.core.get, $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$3511_hierarchy__5626__auto__$$.cljs$core$IFn$_invoke$arity$3, $JSCompiler_temp_const$jscomp$0$$ = new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$205$default, cljs$cst$9046$hoplon_DOT_core_SLASH_default], null);
  var $JSCompiler_inline_result$jscomp$3512_fexpr__111908$$ = $APP.cljs.core.get_global_hierarchy;
  $JSCompiler_inline_result$jscomp$3512_fexpr__111908$$ = $JSCompiler_inline_result$jscomp$3512_fexpr__111908$$.cljs$core$IFn$_invoke$arity$0 ? $JSCompiler_inline_result$jscomp$3512_fexpr__111908$$.cljs$core$IFn$_invoke$arity$0() : $JSCompiler_inline_result$jscomp$3512_fexpr__111908$$.call(null);
  $JSCompiler_temp_const$jscomp$3511_hierarchy__5626__auto__$$ = $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$3511_hierarchy__5626__auto__$$, $JSCompiler_temp_const$jscomp$0$$, $APP.cljs$cst$204$hierarchy, $JSCompiler_inline_result$jscomp$3512_fexpr__111908$$);
  return new $APP.cljs.core.MultiFn($APP.cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core", "on!"), hoplon.core.ns_dispatcher, cljs$cst$9046$hoplon_DOT_core_SLASH_default, $JSCompiler_temp_const$jscomp$3511_hierarchy__5626__auto__$$, $method_table__5622__auto__$$, $prefer_table__5623__auto__$$, $method_cache__5624__auto__$$, $cached_hierarchy__5625__auto__$$);
}();
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9046$hoplon_DOT_core_SLASH_default, function($elem$$, $event$$, $callback$$) {
  return $elem$$.addEventListener($APP.cljs.core.name($event$$), $callback$$);
});
Element.prototype.cljs$core$IPrintWithWriter$ = $APP.cljs.core.PROTOCOL_SENTINEL;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this$$$, $writer$$, $_opts$$) {
  return $APP.cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic($writer$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#\x3cElement: ", this.tagName, "\x3e"], 0));
};
Element.prototype.cljs$core$IFn$ = $APP.cljs.core.PROTOCOL_SENTINEL;
Element.prototype.call = function($unused__11804__auto__$$) {
  switch(arguments.length - 1) {
    case 0:
      return this.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return this.cljs$core$IFn$_invoke$arity$1(arguments[1]);
    case 2:
      return this.cljs$core$IFn$_invoke$arity$2(arguments[1], arguments[2]);
    case 3:
      return this.cljs$core$IFn$_invoke$arity$3(arguments[1], arguments[2], arguments[3]);
    case 4:
      return this.cljs$core$IFn$_invoke$arity$4(arguments[1], arguments[2], arguments[3], arguments[4]);
    case 5:
      return this.cljs$core$IFn$_invoke$arity$5(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 6:
      return this.cljs$core$IFn$_invoke$arity$6(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    case 7:
      return this.cljs$core$IFn$_invoke$arity$7(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]);
    case 8:
      return this.cljs$core$IFn$_invoke$arity$8(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]);
    case 9:
      return this.cljs$core$IFn$_invoke$arity$9(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]);
    case 10:
      return this.cljs$core$IFn$_invoke$arity$10(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10]);
    case 11:
      return this.cljs$core$IFn$_invoke$arity$11(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11]);
    case 12:
      return this.cljs$core$IFn$_invoke$arity$12(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12]);
    case 13:
      return this.cljs$core$IFn$_invoke$arity$13(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13]);
    case 14:
      return this.cljs$core$IFn$_invoke$arity$14(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14]);
    case 15:
      return this.cljs$core$IFn$_invoke$arity$15(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15]);
    case 16:
      return this.cljs$core$IFn$_invoke$arity$16(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16]);
    case 17:
      return this.cljs$core$IFn$_invoke$arity$17(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17]);
    case 18:
      return this.cljs$core$IFn$_invoke$arity$18(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18]);
    case 19:
      return this.cljs$core$IFn$_invoke$arity$19(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18], arguments[19]);
    case 20:
      return this.cljs$core$IFn$_invoke$arity$20(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18], arguments[19], arguments[20]);
    case 21:
      return this.cljs$core$IFn$_invoke$arity$21(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18], arguments[19], arguments[20], arguments[21]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length - 1)].join(""));
  }
};
Element.prototype.apply = function($self__$$, $args111909$$) {
  return this.call.apply(this, [this].concat($APP.cljs.core.aclone($args111909$$)));
};
Element.prototype.cljs$core$IFn$_invoke$arity$0 = function() {
  return hoplon.core.invoke_BANG_(this);
};
Element.prototype.cljs$core$IFn$_invoke$arity$1 = function($a$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$2 = function($a$$, $b$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$3 = function($a$$, $b$$, $c$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$4 = function($a$$, $b$$, $c$$, $d$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$5 = function($a$$, $b$$, $c$$, $d$$, $e$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$6 = function($a$$, $b$$, $c$$, $d$$, $e$$, $f$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$7 = function($a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$8 = function($a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$9 = function($a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$10 = function($a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$11 = function($a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$12 = function($a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$13 = function($a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$14 = function($a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$15 = function($a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$16 = function($a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$, $p$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$, $p$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$17 = function($a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$, $p$$, $q$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$, $p$$, $q$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$18 = function($a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$, $p$$, $q$$, $r$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$, $p$$, $q$$, $r$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$19 = function($a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$, $p$$, $q$$, $r$$, $s$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$, $p$$, $q$$, $r$$, $s$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$20 = function($a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$, $p$$, $q$$, $r$$, $s$$, $t$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$, $p$$, $q$$, $r$$, $s$$, $t$$], 0));
};
Element.prototype.cljs$core$IFn$_invoke$arity$21 = function($a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$, $p$$, $q$$, $r$$, $s$$, $t$$, $rest$$) {
  return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$, $p$$, $q$$, $r$$, $s$$, $t$$, $rest$$], 0));
};
hoplon.core.mksingleton = function($tag$$) {
  return function() {
    var $G__112190__delegate$$ = function($args$$) {
      var $elem$jscomp$34_obj111911$jscomp$inline_9034_temp__5823__auto__$$ = document;
      $elem$jscomp$34_obj111911$jscomp$inline_9034_temp__5823__auto__$$ = $elem$jscomp$34_obj111911$jscomp$inline_9034_temp__5823__auto__$$ != null ? $elem$jscomp$34_obj111911$jscomp$inline_9034_temp__5823__auto__$$[$APP.applied_science.js_interop.impl.wrap_key($tag$$)] : void 0;
      if ($APP.cljs.core.truth_($elem$jscomp$34_obj111911$jscomp$inline_9034_temp__5823__auto__$$)) {
        return hoplon.core._elem_BANG_($elem$jscomp$34_obj111911$jscomp$inline_9034_temp__5823__auto__$$, cljs$cst$9048$hoplon_SLASH_singleton, $args$$);
      }
      $elem$jscomp$34_obj111911$jscomp$inline_9034_temp__5823__auto__$$ = document.createElement($tag$$);
      var $obj111912_112191$$ = document;
      ($obj111912_112191$$ != null ? $obj111912_112191$$ : {})[$APP.applied_science.js_interop.impl.wrap_key($tag$$)] = $elem$jscomp$34_obj111911$jscomp$inline_9034_temp__5823__auto__$$;
      hoplon.core._elem_BANG_($elem$jscomp$34_obj111911$jscomp$inline_9034_temp__5823__auto__$$, cljs$cst$9045$hoplon_SLASH_invoke, $args$$);
      return $elem$jscomp$34_obj111911$jscomp$inline_9034_temp__5823__auto__$$;
    }, $G__112190$$ = function($var_args$$) {
      var $G__112193__i_args$$ = null;
      if (arguments.length > 0) {
        $G__112193__i_args$$ = 0;
        for (var $G__112193__a$$ = Array(arguments.length - 0); $G__112193__i_args$$ < $G__112193__a$$.length;) {
          $G__112193__a$$[$G__112193__i_args$$] = arguments[$G__112193__i_args$$ + 0], ++$G__112193__i_args$$;
        }
        $G__112193__i_args$$ = new $APP.cljs.core.IndexedSeq($G__112193__a$$, 0, null);
      }
      return $G__112190__delegate$$.call(this, $G__112193__i_args$$);
    };
    $G__112190$$.cljs$lang$maxFixedArity = 0;
    $G__112190$$.cljs$lang$applyTo = function($arglist__112194_args$$) {
      $arglist__112194_args$$ = $APP.cljs.core.seq($arglist__112194_args$$);
      return $G__112190__delegate$$($arglist__112194_args$$);
    };
    $G__112190$$.cljs$core$IFn$_invoke$arity$variadic = $G__112190__delegate$$;
    return $G__112190$$;
  }();
};
hoplon.core.mkelem = function($tag$$) {
  return function() {
    var $G__112195__delegate$$ = function($args$$) {
      var $elem$$ = document.createElement($tag$$);
      hoplon.core._elem_BANG_($elem$$, cljs$cst$9045$hoplon_SLASH_invoke, $args$$);
      return $elem$$;
    }, $G__112195$$ = function($var_args$$) {
      var $G__112196__i_args$$ = null;
      if (arguments.length > 0) {
        $G__112196__i_args$$ = 0;
        for (var $G__112196__a$$ = Array(arguments.length - 0); $G__112196__i_args$$ < $G__112196__a$$.length;) {
          $G__112196__a$$[$G__112196__i_args$$] = arguments[$G__112196__i_args$$ + 0], ++$G__112196__i_args$$;
        }
        $G__112196__i_args$$ = new $APP.cljs.core.IndexedSeq($G__112196__a$$, 0, null);
      }
      return $G__112195__delegate$$.call(this, $G__112196__i_args$$);
    };
    $G__112195$$.cljs$lang$maxFixedArity = 0;
    $G__112195$$.cljs$lang$applyTo = function($arglist__112197_args$$) {
      $arglist__112197_args$$ = $APP.cljs.core.seq($arglist__112197_args$$);
      return $G__112195__delegate$$($arglist__112197_args$$);
    };
    $G__112195$$.cljs$core$IFn$_invoke$arity$variadic = $G__112195__delegate$$;
    return $G__112195$$;
  }();
};
hoplon.core.html = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$519_argseq__5756__auto__$$ = [], $len__5749__auto___112198$$ = arguments.length, $i__5750__auto___112199$$ = 0;;) {
    if ($i__5750__auto___112199$$ < $len__5749__auto___112198$$) {
      $args__5755__auto__$jscomp$519_argseq__5756__auto__$$.push(arguments[$i__5750__auto___112199$$]), $i__5750__auto___112199$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$519_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$519_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$519_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$519_argseq__5756__auto__$$);
};
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = function($args$$) {
  return hoplon.core.mksingleton("documentElement")($APP.cljs.core.first(hoplon.core.parse_args($args$$)));
};
hoplon.core.html.cljs$lang$maxFixedArity = 0;
hoplon.core.html.cljs$lang$applyTo = function($seq111916$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq111916$$));
};
hoplon.core.head = hoplon.core.mksingleton("head");
hoplon.core.body = hoplon.core.mksingleton("body");
hoplon.core.a = hoplon.core.mkelem("a");
hoplon.core.abbr = hoplon.core.mkelem("abbr");
hoplon.core.address = hoplon.core.mkelem("address");
hoplon.core.area = hoplon.core.mkelem("area");
hoplon.core.article = hoplon.core.mkelem("article");
hoplon.core.aside = hoplon.core.mkelem("aside");
hoplon.core.audio = hoplon.core.mkelem("audio");
hoplon.core.b = hoplon.core.mkelem("b");
hoplon.core.base = hoplon.core.mkelem("base");
hoplon.core.bdi = hoplon.core.mkelem("bdi");
hoplon.core.bdo = hoplon.core.mkelem("bdo");
hoplon.core.blockquote = hoplon.core.mkelem("blockquote");
hoplon.core.br = hoplon.core.mkelem("br");
hoplon.core.button = hoplon.core.mkelem("button");
hoplon.core.canvas = hoplon.core.mkelem("canvas");
hoplon.core.caption = hoplon.core.mkelem("caption");
hoplon.core.cite = hoplon.core.mkelem("cite");
hoplon.core.code = hoplon.core.mkelem("code");
hoplon.core.col = hoplon.core.mkelem("col");
hoplon.core.colgroup = hoplon.core.mkelem("colgroup");
hoplon.core.data = hoplon.core.mkelem("data");
hoplon.core.datalist = hoplon.core.mkelem("datalist");
hoplon.core.dd = hoplon.core.mkelem("dd");
hoplon.core.del = hoplon.core.mkelem("del");
hoplon.core.details = hoplon.core.mkelem("details");
hoplon.core.dfn = hoplon.core.mkelem("dfn");
hoplon.core.dialog = hoplon.core.mkelem("dialog");
hoplon.core.div = hoplon.core.mkelem("div");
hoplon.core.dl = hoplon.core.mkelem("dl");
hoplon.core.dt = hoplon.core.mkelem("dt");
hoplon.core.em = hoplon.core.mkelem("em");
hoplon.core.embed = hoplon.core.mkelem("embed");
hoplon.core.fieldset = hoplon.core.mkelem("fieldset");
hoplon.core.figcaption = hoplon.core.mkelem("figcaption");
hoplon.core.figure = hoplon.core.mkelem("figure");
hoplon.core.footer = hoplon.core.mkelem("footer");
hoplon.core.form = hoplon.core.mkelem("form");
hoplon.core.h1 = hoplon.core.mkelem("h1");
hoplon.core.h2 = hoplon.core.mkelem("h2");
hoplon.core.h3 = hoplon.core.mkelem("h3");
hoplon.core.h4 = hoplon.core.mkelem("h4");
hoplon.core.h5 = hoplon.core.mkelem("h5");
hoplon.core.h6 = hoplon.core.mkelem("h6");
hoplon.core.header = hoplon.core.mkelem("header");
hoplon.core.hgroup = hoplon.core.mkelem("hgroup");
hoplon.core.hr = hoplon.core.mkelem("hr");
hoplon.core.i = hoplon.core.mkelem("i");
hoplon.core.iframe = hoplon.core.mkelem("iframe");
hoplon.core.img = hoplon.core.mkelem("img");
hoplon.core.input = hoplon.core.mkelem("input");
hoplon.core.ins = hoplon.core.mkelem("ins");
hoplon.core.kbd = hoplon.core.mkelem("kbd");
hoplon.core.keygen = hoplon.core.mkelem("keygen");
hoplon.core.label = hoplon.core.mkelem("label");
hoplon.core.legend = hoplon.core.mkelem("legend");
hoplon.core.li = hoplon.core.mkelem("li");
hoplon.core.link = hoplon.core.mkelem("link");
hoplon.core.main = hoplon.core.mkelem("main");
hoplon.core.html_map = hoplon.core.mkelem("map");
hoplon.core.mark = hoplon.core.mkelem("mark");
hoplon.core.menu = hoplon.core.mkelem("menu");
hoplon.core.menuitem = hoplon.core.mkelem("menuitem");
hoplon.core.html_meta = hoplon.core.mkelem("meta");
hoplon.core.meter = hoplon.core.mkelem("meter");
hoplon.core.multicol = hoplon.core.mkelem("multicol");
hoplon.core.nav = hoplon.core.mkelem("nav");
hoplon.core.noframes = hoplon.core.mkelem("noframes");
hoplon.core.noscript = hoplon.core.mkelem("noscript");
hoplon.core.html_object = hoplon.core.mkelem("object");
hoplon.core.ol = hoplon.core.mkelem("ol");
hoplon.core.optgroup = hoplon.core.mkelem("optgroup");
hoplon.core.option = hoplon.core.mkelem("option");
hoplon.core.output = hoplon.core.mkelem("output");
hoplon.core.p = hoplon.core.mkelem("p");
hoplon.core.param = hoplon.core.mkelem("param");
hoplon.core.picture = hoplon.core.mkelem("picture");
hoplon.core.pre = hoplon.core.mkelem("pre");
hoplon.core.progress = hoplon.core.mkelem("progress");
hoplon.core.q = hoplon.core.mkelem("q");
hoplon.core.rp = hoplon.core.mkelem("rp");
hoplon.core.rt = hoplon.core.mkelem("rt");
hoplon.core.rtc = hoplon.core.mkelem("rtc");
hoplon.core.ruby = hoplon.core.mkelem("ruby");
hoplon.core.s = hoplon.core.mkelem("s");
hoplon.core.samp = hoplon.core.mkelem("samp");
hoplon.core.script = hoplon.core.mkelem("script");
hoplon.core.section = hoplon.core.mkelem("section");
hoplon.core.select = hoplon.core.mkelem("select");
hoplon.core.shadow = hoplon.core.mkelem("shadow");
hoplon.core.small = hoplon.core.mkelem("small");
hoplon.core.source = hoplon.core.mkelem("source");
hoplon.core.span = hoplon.core.mkelem("span");
hoplon.core.strong = hoplon.core.mkelem("strong");
hoplon.core.style = hoplon.core.mkelem("style");
hoplon.core.sub = hoplon.core.mkelem("sub");
hoplon.core.summary = hoplon.core.mkelem("summary");
hoplon.core.sup = hoplon.core.mkelem("sup");
hoplon.core.table = hoplon.core.mkelem("table");
hoplon.core.tbody = hoplon.core.mkelem("tbody");
hoplon.core.td = hoplon.core.mkelem("td");
hoplon.core.template = hoplon.core.mkelem("template");
hoplon.core.textarea = hoplon.core.mkelem("textarea");
hoplon.core.tfoot = hoplon.core.mkelem("tfoot");
hoplon.core.th = hoplon.core.mkelem("th");
hoplon.core.thead = hoplon.core.mkelem("thead");
hoplon.core.html_time = hoplon.core.mkelem("time");
hoplon.core.title = hoplon.core.mkelem("title");
hoplon.core.tr = hoplon.core.mkelem("tr");
hoplon.core.track = hoplon.core.mkelem("track");
hoplon.core.u = hoplon.core.mkelem("u");
hoplon.core.ul = hoplon.core.mkelem("ul");
hoplon.core.html_var = hoplon.core.mkelem("var");
hoplon.core.video = hoplon.core.mkelem("video");
hoplon.core.wbr = hoplon.core.mkelem("wbr");
hoplon.core.spliced = $APP.cljs.core.vector;
hoplon.core.$text = function($p1__111917_SHARP_$$) {
  return document.createTextNode($p1__111917_SHARP_$$);
};
hoplon.core.$comment = function($p1__111918_SHARP_$$) {
  return document.createComment($p1__111918_SHARP_$$);
};
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs$cst$9058$hoplon_DOT_core_SLASH____GT_;
hoplon.core.loop_tpl_STAR_ = function($items$$, $tpl$$) {
  var $els$$ = $APP.javelin.core.cell.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentVector.EMPTY), $itemsv$$ = function() {
    var $fexpr__111921$$ = $APP.javelin.core.formula.cljs$core$IFn$_invoke$arity$1(function($G__111920$$, $G__111919$$) {
      return $G__111919$$.cljs$core$IFn$_invoke$arity$1 ? $G__111919$$.cljs$core$IFn$_invoke$arity$1($G__111920$$) : $G__111919$$.call(null, $G__111920$$);
    });
    return $fexpr__111921$$.cljs$core$IFn$_invoke$arity$2 ? $fexpr__111921$$.cljs$core$IFn$_invoke$arity$2($items$$, $APP.cljs.core.vec) : $fexpr__111921$$.call(null, $items$$, $APP.cljs.core.vec);
  }(), $items_count$$ = function() {
    var $fexpr__111924$$ = $APP.javelin.core.formula.cljs$core$IFn$_invoke$arity$1(function($G__111923$$, $G__111922$$) {
      return $G__111922$$.cljs$core$IFn$_invoke$arity$1 ? $G__111922$$.cljs$core$IFn$_invoke$arity$1($G__111923$$) : $G__111922$$.call(null, $G__111923$$);
    });
    return $fexpr__111924$$.cljs$core$IFn$_invoke$arity$2 ? $fexpr__111924$$.cljs$core$IFn$_invoke$arity$2($items$$, $APP.cljs.core.count) : $fexpr__111924$$.call(null, $items$$, $APP.cljs.core.count);
  }();
  hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2($items_count$$, function($G__112216__$$, $G__112217_n$$) {
    if ($APP.cljs.core.count($APP.cljs.core.deref($els$$)) < $G__112217_n$$) {
      for (var $seq__111925$$ = $APP.cljs.core.seq($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count($APP.cljs.core.deref($els$$)), $G__112217_n$$)), $chunk__111926$$ = null, $count__111927$$ = 0, $i__111928$$ = 0;;) {
        if ($i__111928$$ < $count__111927$$) {
          var $i$$ = $chunk__111926$$.cljs$core$IIndexed$_nth$arity$2(null, $i__111928$$);
          $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4($els$$, $APP.cljs.core.assoc, $i$$, function() {
            var $G__111939$$ = function() {
              var $fexpr__111943$$ = $APP.javelin.core.formula.cljs$core$IFn$_invoke$arity$1(function($seq__111925$$, $chunk__111926$$, $count__111927$$, $i__111928$$, $i$$, $els$$, $itemsv$$, $items_count$$) {
                return function($G__111942$$, $G__111941$$, $G__111940$$) {
                  return $G__111940$$.cljs$core$IFn$_invoke$arity$3 ? $G__111940$$.cljs$core$IFn$_invoke$arity$3($G__111941$$, $G__111942$$, null) : $G__111940$$.call(null, $G__111941$$, $G__111942$$, null);
                };
              }($seq__111925$$, $chunk__111926$$, $count__111927$$, $i__111928$$, $i$$, $els$$, $itemsv$$, $items_count$$));
              return $fexpr__111943$$.cljs$core$IFn$_invoke$arity$3 ? $fexpr__111943$$.cljs$core$IFn$_invoke$arity$3($i$$, $itemsv$$, $APP.cljs.core.get) : $fexpr__111943$$.call(null, $i$$, $itemsv$$, $APP.cljs.core.get);
            }();
            return $tpl$$.cljs$core$IFn$_invoke$arity$1 ? $tpl$$.cljs$core$IFn$_invoke$arity$1($G__111939$$) : $tpl$$.call(null, $G__111939$$);
          }());
          $i__111928$$ += 1;
        } else {
          var $temp__5825__auto__$$ = $APP.cljs.core.seq($seq__111925$$);
          if ($temp__5825__auto__$$) {
            var $seq__111925__$1$$ = $temp__5825__auto__$$;
            if ($APP.cljs.core.chunked_seq_QMARK_($seq__111925__$1$$)) {
              var $G__112218_c__5548__auto__$$ = $APP.cljs.core.chunk_first($seq__111925__$1$$);
              $G__112216__$$ = $APP.cljs.core.chunk_rest($seq__111925__$1$$);
              $G__112217_n$$ = $G__112218_c__5548__auto__$$;
              $G__112218_c__5548__auto__$$ = $APP.cljs.core.count($G__112218_c__5548__auto__$$);
              $seq__111925$$ = $G__112216__$$;
              $chunk__111926$$ = $G__112217_n$$;
              $count__111927$$ = $G__112218_c__5548__auto__$$;
            } else {
              $i$$ = $APP.cljs.core.first($seq__111925__$1$$), $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4($els$$, $APP.cljs.core.assoc, $i$$, function() {
                var $G__111944$$ = function() {
                  var $fexpr__111948$$ = $APP.javelin.core.formula.cljs$core$IFn$_invoke$arity$1(function($seq__111925$$, $chunk__111926$$, $count__111927$$, $i__111928$$, $i$$, $seq__111925__$1$$, $temp__5825__auto__$$, $els$$, $itemsv$$, $items_count$$) {
                    return function($G__111947$$, $G__111946$$, $G__111945$$) {
                      return $G__111945$$.cljs$core$IFn$_invoke$arity$3 ? $G__111945$$.cljs$core$IFn$_invoke$arity$3($G__111946$$, $G__111947$$, null) : $G__111945$$.call(null, $G__111946$$, $G__111947$$, null);
                    };
                  }($seq__111925$$, $chunk__111926$$, $count__111927$$, $i__111928$$, $i$$, $seq__111925__$1$$, $temp__5825__auto__$$, $els$$, $itemsv$$, $items_count$$));
                  return $fexpr__111948$$.cljs$core$IFn$_invoke$arity$3 ? $fexpr__111948$$.cljs$core$IFn$_invoke$arity$3($i$$, $itemsv$$, $APP.cljs.core.get) : $fexpr__111948$$.call(null, $i$$, $itemsv$$, $APP.cljs.core.get);
                }();
                return $tpl$$.cljs$core$IFn$_invoke$arity$1 ? $tpl$$.cljs$core$IFn$_invoke$arity$1($G__111944$$) : $tpl$$.call(null, $G__111944$$);
              }()), $seq__111925$$ = $APP.cljs.core.next($seq__111925__$1$$), $chunk__111926$$ = null, $count__111927$$ = 0;
            }
            $i__111928$$ = 0;
          } else {
            return null;
          }
        }
      }
    } else {
      return null;
    }
  });
  var $fexpr__111956$$ = $APP.javelin.core.formula.cljs$core$IFn$_invoke$arity$1(function($G__111950$$, $G__111949$$, $G__111952_y__5114__auto__$$, $G__111951_G__111959$$) {
    $G__111952_y__5114__auto__$$ = $G__111952_y__5114__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $G__111952_y__5114__auto__$$.cljs$core$IFn$_invoke$arity$1($G__111950$$) : $G__111952_y__5114__auto__$$.call(null, $G__111950$$);
    $G__111951_G__111959$$ = $G__111951_G__111959$$ < $G__111952_y__5114__auto__$$ ? $G__111951_G__111959$$ : $G__111952_y__5114__auto__$$;
    return $G__111949$$.cljs$core$IFn$_invoke$arity$3 ? $G__111949$$.cljs$core$IFn$_invoke$arity$3($G__111950$$, 0, $G__111951_G__111959$$) : $G__111949$$.call(null, $G__111950$$, 0, $G__111951_G__111959$$);
  });
  return $fexpr__111956$$.cljs$core$IFn$_invoke$arity$4 ? $fexpr__111956$$.cljs$core$IFn$_invoke$arity$4($els$$, $APP.cljs.core.subvec, $APP.cljs.core.count, $items_count$$) : $fexpr__111956$$.call(null, $els$$, $APP.cljs.core.subvec, $APP.cljs.core.count, $items_count$$);
};
hoplon.dom = {};
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, $APP.cljs$cst$1429$value, function($elem$$, $_$$, $v$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 2, ["checkbox", null, "radio", null], null), null), $elem$$.type) ? $elem$$.checked = $v$$ : $elem$$.value = $v$$;
});
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, $APP.cljs$cst$450$class, function($elem$$, $G__112109__$jscomp$2886_seq__111996_seq__111996__$1_temp__5825__auto__$$, $G__112110_c$jscomp$752_kvs$$) {
  $G__112109__$jscomp$2886_seq__111996_seq__111996__$1_temp__5825__auto__$$ = $APP.cljs.core.seq(hoplon.core.normalize_class($G__112110_c$jscomp$752_kvs$$));
  for (var $c__5548__auto__$$ = null, $G__112111_count__111998$$ = 0, $i__111999$$ = 0;;) {
    if ($i__111999$$ < $G__112111_count__111998$$) {
      var $add_QMARK_$$ = $c__5548__auto__$$.cljs$core$IIndexed$_nth$arity$2(null, $i__111999$$);
      $G__112110_c$jscomp$752_kvs$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($add_QMARK_$$, 0, null);
      $add_QMARK_$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($add_QMARK_$$, 1, null);
      $APP.cljs.core.truth_($add_QMARK_$$) ? $elem$$.classList.add($APP.cljs.core.name($G__112110_c$jscomp$752_kvs$$)) : $elem$$.classList.remove($APP.cljs.core.name($G__112110_c$jscomp$752_kvs$$));
      $i__111999$$ += 1;
    } else {
      if ($G__112109__$jscomp$2886_seq__111996_seq__111996__$1_temp__5825__auto__$$ = $APP.cljs.core.seq($G__112109__$jscomp$2886_seq__111996_seq__111996__$1_temp__5825__auto__$$)) {
        $APP.cljs.core.chunked_seq_QMARK_($G__112109__$jscomp$2886_seq__111996_seq__111996__$1_temp__5825__auto__$$) ? ($c__5548__auto__$$ = $APP.cljs.core.chunk_first($G__112109__$jscomp$2886_seq__111996_seq__111996__$1_temp__5825__auto__$$), $G__112109__$jscomp$2886_seq__111996_seq__111996__$1_temp__5825__auto__$$ = $APP.cljs.core.chunk_rest($G__112109__$jscomp$2886_seq__111996_seq__111996__$1_temp__5825__auto__$$), $G__112110_c$jscomp$752_kvs$$ = $c__5548__auto__$$, $G__112111_count__111998$$ = 
        $APP.cljs.core.count($c__5548__auto__$$), $c__5548__auto__$$ = $G__112110_c$jscomp$752_kvs$$) : ($c__5548__auto__$$ = $APP.cljs.core.first($G__112109__$jscomp$2886_seq__111996_seq__111996__$1_temp__5825__auto__$$), $G__112110_c$jscomp$752_kvs$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c__5548__auto__$$, 0, null), $add_QMARK_$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c__5548__auto__$$, 1, null), $APP.cljs.core.truth_($add_QMARK_$$) ? $elem$$.classList.add($APP.cljs.core.name($G__112110_c$jscomp$752_kvs$$)) : 
        $elem$$.classList.remove($APP.cljs.core.name($G__112110_c$jscomp$752_kvs$$)), $G__112109__$jscomp$2886_seq__111996_seq__111996__$1_temp__5825__auto__$$ = $APP.cljs.core.next($G__112109__$jscomp$2886_seq__111996_seq__111996__$1_temp__5825__auto__$$), $c__5548__auto__$$ = null, $G__112111_count__111998$$ = 0), $i__111999$$ = 0;
      } else {
        return null;
      }
    }
  }
});
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9059$class_SLASH_default, function($elem$$, $_$$, $kvs$$) {
  return hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3($elem$$, $APP.cljs$cst$450$class, $kvs$$);
});
hoplon.dom.set_attributes_BANG_ = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return hoplon.dom.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var $args_arr__5774__auto__$jscomp$149_argseq__5775__auto__$$ = [], $len__5749__auto___112118$$ = arguments.length, $i__5750__auto___112119$$ = 0;;) {
        if ($i__5750__auto___112119$$ < $len__5749__auto___112118$$) {
          $args_arr__5774__auto__$jscomp$149_argseq__5775__auto__$$.push(arguments[$i__5750__auto___112119$$]), $i__5750__auto___112119$$ += 1;
        } else {
          break;
        }
      }
      $args_arr__5774__auto__$jscomp$149_argseq__5775__auto__$$ = 3 < $args_arr__5774__auto__$jscomp$149_argseq__5775__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args_arr__5774__auto__$jscomp$149_argseq__5775__auto__$$.slice(3), 0, null) : null;
      return hoplon.dom.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args_arr__5774__auto__$jscomp$149_argseq__5775__auto__$$);
  }
};
hoplon.dom.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = function($elem$$, $G__112130_kvs$jscomp$37_seq__112040_seq__112040__$1_temp__5825__auto__$$) {
  $G__112130_kvs$jscomp$37_seq__112040_seq__112040__$1_temp__5825__auto__$$ = $APP.cljs.core.seq($G__112130_kvs$jscomp$37_seq__112040_seq__112040__$1_temp__5825__auto__$$);
  for (var $G__112131_chunk__112042_k_112134__$1_vec__112059$$ = null, $count__112043$$ = 0, $i__112044$$ = 0;;) {
    if ($i__112044$$ < $count__112043$$) {
      var $v$$ = $G__112131_chunk__112042_k_112134__$1_vec__112059$$.cljs$core$IIndexed$_nth$arity$2(null, $i__112044$$), $G__112132_c__5548__auto__$jscomp$93_k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$$, 0, null);
      $v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$$, 1, null);
      $G__112132_c__5548__auto__$jscomp$93_k$$ = $APP.cljs.core.name($G__112132_c__5548__auto__$jscomp$93_k$$);
      $APP.cljs.core.not($v$$) ? $elem$$.removeAttribute($G__112132_c__5548__auto__$jscomp$93_k$$) : $elem$$.setAttribute($G__112132_c__5548__auto__$jscomp$93_k$$, $v$$ === !0 ? $G__112132_c__5548__auto__$jscomp$93_k$$ : $v$$);
      $i__112044$$ += 1;
    } else {
      if ($G__112130_kvs$jscomp$37_seq__112040_seq__112040__$1_temp__5825__auto__$$ = $APP.cljs.core.seq($G__112130_kvs$jscomp$37_seq__112040_seq__112040__$1_temp__5825__auto__$$)) {
        $APP.cljs.core.chunked_seq_QMARK_($G__112130_kvs$jscomp$37_seq__112040_seq__112040__$1_temp__5825__auto__$$) ? ($G__112132_c__5548__auto__$jscomp$93_k$$ = $APP.cljs.core.chunk_first($G__112130_kvs$jscomp$37_seq__112040_seq__112040__$1_temp__5825__auto__$$), $G__112130_kvs$jscomp$37_seq__112040_seq__112040__$1_temp__5825__auto__$$ = $APP.cljs.core.chunk_rest($G__112130_kvs$jscomp$37_seq__112040_seq__112040__$1_temp__5825__auto__$$), $G__112131_chunk__112042_k_112134__$1_vec__112059$$ = $G__112132_c__5548__auto__$jscomp$93_k$$, 
        $count__112043$$ = $G__112132_c__5548__auto__$jscomp$93_k$$ = $APP.cljs.core.count($G__112132_c__5548__auto__$jscomp$93_k$$)) : ($G__112131_chunk__112042_k_112134__$1_vec__112059$$ = $APP.cljs.core.first($G__112130_kvs$jscomp$37_seq__112040_seq__112040__$1_temp__5825__auto__$$), $G__112132_c__5548__auto__$jscomp$93_k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__112131_chunk__112042_k_112134__$1_vec__112059$$, 0, null), $v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__112131_chunk__112042_k_112134__$1_vec__112059$$, 
        1, null), $G__112131_chunk__112042_k_112134__$1_vec__112059$$ = $APP.cljs.core.name($G__112132_c__5548__auto__$jscomp$93_k$$), $APP.cljs.core.not($v$$) ? $elem$$.removeAttribute($G__112131_chunk__112042_k_112134__$1_vec__112059$$) : $elem$$.setAttribute($G__112131_chunk__112042_k_112134__$1_vec__112059$$, $v$$ === !0 ? $G__112131_chunk__112042_k_112134__$1_vec__112059$$ : $v$$), $G__112130_kvs$jscomp$37_seq__112040_seq__112040__$1_temp__5825__auto__$$ = $APP.cljs.core.next($G__112130_kvs$jscomp$37_seq__112040_seq__112040__$1_temp__5825__auto__$$), 
        $G__112131_chunk__112042_k_112134__$1_vec__112059$$ = null, $count__112043$$ = 0), $i__112044$$ = 0;
      } else {
        return null;
      }
    }
  }
};
hoplon.dom.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = function($elem$$, $k$$, $v$$, $kvs$$) {
  return hoplon.dom.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2($elem$$, $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$4($APP.cljs.core.hash_map, $k$$, $v$$, $kvs$$));
};
hoplon.dom.set_attributes_BANG_.cljs$lang$applyTo = function($G__112035_seq112033$$) {
  var $G__112034$$ = $APP.cljs.core.first($G__112035_seq112033$$), $G__112036_seq112033__$1$$ = $APP.cljs.core.next($G__112035_seq112033$$);
  $G__112035_seq112033$$ = $APP.cljs.core.first($G__112036_seq112033__$1$$);
  var $seq112033__$2_seq112033__$3$$ = $APP.cljs.core.next($G__112036_seq112033__$1$$);
  $G__112036_seq112033__$1$$ = $APP.cljs.core.first($seq112033__$2_seq112033__$3$$);
  $seq112033__$2_seq112033__$3$$ = $APP.cljs.core.next($seq112033__$2_seq112033__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__112034$$, $G__112035_seq112033$$, $G__112036_seq112033__$1$$, $seq112033__$2_seq112033__$3$$);
};
hoplon.dom.set_attributes_BANG_.cljs$lang$maxFixedArity = 3;
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9054$svg_SLASH_default, function($elem$$, $key$$, $val$$) {
  return hoplon.dom.set_attributes_BANG_($elem$$, $key$$, $val$$);
});
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9060$smart_class, function($elem$$, $_$$, $kvs$jscomp$39_old_class_list_or__5025__auto__$$) {
  if ($APP.cljs.core.map_QMARK_($kvs$jscomp$39_old_class_list_or__5025__auto__$$)) {
    return hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3($elem$$, $APP.cljs$cst$450$class, $kvs$jscomp$39_old_class_list_or__5025__auto__$$);
  }
  $_$$ = typeof $kvs$jscomp$39_old_class_list_or__5025__auto__$$ === "string" ? $kvs$jscomp$39_old_class_list_or__5025__auto__$$.split(/\s+/) : $APP.cljs.core.clj__GT_js($APP.cljs.core.mapv.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.name, $kvs$jscomp$39_old_class_list_or__5025__auto__$$));
  $kvs$jscomp$39_old_class_list_or__5025__auto__$$ = $elem$$.hoplon_smart_class;
  $kvs$jscomp$39_old_class_list_or__5025__auto__$$ = $APP.cljs.core.truth_($kvs$jscomp$39_old_class_list_or__5025__auto__$$) ? $kvs$jscomp$39_old_class_list_or__5025__auto__$$ : $APP.cljs.core.PersistentHashSet.EMPTY;
  var $classes_to_remove$$ = $APP.clojure.set.difference.cljs$core$IFn$_invoke$arity$2($kvs$jscomp$39_old_class_list_or__5025__auto__$$, $APP.cljs.core.set($_$$));
  $elem$$.hoplon_smart_class = $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($kvs$jscomp$39_old_class_list_or__5025__auto__$$, $_$$);
  $elem$$.classList.add.apply($elem$$.classList, $_$$);
  return $APP.cljs.core.empty_QMARK_($classes_to_remove$$) ? null : $elem$$.classList.remove.apply($elem$$.classList, $APP.cljs.core.clj__GT_js($APP.cljs.core.vec($classes_to_remove$$)));
});
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9061$toggle, function($elem$$, $_$$, $v$$) {
  return $elem$$.style.display = $APP.cljs.core.truth_($v$$) ? "" : "none";
});
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, $APP.cljs$cst$3427$focus, function($elem$$, $_$$, $v$$) {
  return setTimeout(function() {
    return $APP.cljs.core.truth_($v$$) ? $elem$$.focus() : $elem$$.blur();
  }, 0);
});
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9062$select, function($elem$$, $_$$, $v$$) {
  return $APP.cljs.core.truth_($v$$) ? $elem$$.select() : window.getSelection().removeAllRanges();
});
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, $APP.cljs$cst$1999$text, function($elem$$, $_$$, $v$$) {
  return $elem$$.textContent = $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($v$$);
});
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9063$html, function($elem$$, $_$$, $v$$) {
  return $elem$$.replaceChildren($v$$);
});
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9064$dangerous_html, function($elem$$, $_$$, $v$$) {
  return typeof $v$$ === "string" ? $elem$$.innerHTML = $v$$ : $elem$$.replaceChildren($v$$);
});
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9065$scroll_to, function($elem$$, $_$$, $v$$) {
  return $APP.cljs.core.truth_($v$$) ? $elem$$.scrollIntoView({behavior:"smooth"}) : null;
});
Event.prototype.cljs$core$IDeref$ = $APP.cljs.core.PROTOCOL_SENTINEL;
Event.prototype.cljs$core$IDeref$_deref$arity$1 = function($this$$$) {
  return this.target.value;
};
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs$cst$9046$hoplon_DOT_core_SLASH_default, function($elem$$, $event$$, $callback$$) {
  return $elem$$.addEventListener($APP.cljs.core.name($event$$), $callback$$);
});
$APP.sci.configs.hoplon.hoplon = {};
$APP.sci.configs.hoplon.hoplon.Exception = Error;
$APP.sci.configs.hoplon.hoplon.silent_read = function($s$$) {
  try {
    var $r$$ = $APP.edamame.core.source_reader($s$$), $vec__112202$$ = $APP.edamame.core.parse_next_PLUS_string.cljs$core$IFn$_invoke$arity$1($r$$), $v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__112202$$, 0, null), $vs$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__112202$$, 1, null), $remainder$$ = $APP.cljs.core.subs.cljs$core$IFn$_invoke$arity$2($s$$, $APP.clojure.string.index_of.cljs$core$IFn$_invoke$arity$2($s$$, $vs$$) + $APP.cljs.core.count($vs$$));
    return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$v$$, $remainder$$], null);
  } catch ($e112201$$) {
    if ($e112201$$ instanceof $APP.sci.configs.hoplon.hoplon.Exception) {
      return console.error($e112201$$);
    }
    throw $e112201$$;
  }
};
$APP.sci.configs.hoplon.hoplon.terpol8_STAR_ = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return $APP.sci.configs.hoplon.hoplon.terpol8_STAR_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 1:
      return $APP.sci.configs.hoplon.hoplon.terpol8_STAR_.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
$APP.sci.configs.hoplon.hoplon.terpol8_STAR_.cljs$core$IFn$_invoke$arity$2 = function($s$$, $atom_QMARK_$$) {
  return new $APP.cljs.core.LazySeq(null, function() {
    var $rest$jscomp$37_temp__5823__auto__$$ = $APP.sci.configs.hoplon.hoplon.silent_read($APP.cljs.core.subs.cljs$core$IFn$_invoke$arity$2($s$$, $APP.cljs.core.truth_($atom_QMARK_$$) ? 2 : 1));
    if ($APP.cljs.core.truth_($rest$jscomp$37_temp__5823__auto__$$)) {
      var $form$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($rest$jscomp$37_temp__5823__auto__$$, 0, null);
      $rest$jscomp$37_temp__5823__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($rest$jscomp$37_temp__5823__auto__$$, 1, null);
      return $APP.cljs.core.cons($form$$, $APP.sci.configs.hoplon.hoplon.terpol8_STAR_.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.truth_($atom_QMARK_$$) ? $APP.cljs.core.subs.cljs$core$IFn$_invoke$arity$2($rest$jscomp$37_temp__5823__auto__$$, 1) : $rest$jscomp$37_temp__5823__auto__$$));
    }
    return $APP.cljs.core.cons($APP.cljs.core.subs.cljs$core$IFn$_invoke$arity$3($s$$, 0, 2), $APP.sci.configs.hoplon.hoplon.terpol8_STAR_.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.subs.cljs$core$IFn$_invoke$arity$2($s$$, 2)));
  }, null, null);
};
$APP.sci.configs.hoplon.hoplon.terpol8_STAR_.cljs$core$IFn$_invoke$arity$1 = function($s$$) {
  var $temp__5823__auto__$$ = $APP.cljs.core.first($APP.cljs.core.sort.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2(function($p1__112206_SHARP_$$) {
    return -1 === $p1__112206_SHARP_$$;
  }, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__112205_SHARP_$$) {
    return $s$$.indexOf($p1__112205_SHARP_$$);
  }, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["~{", "~("], null)))));
  return $APP.cljs.core.truth_($temp__5823__auto__$$) ? new $APP.cljs.core.LazySeq(null, function() {
    return $APP.cljs.core.cons($APP.cljs.core.subs.cljs$core$IFn$_invoke$arity$3($s$$, 0, $temp__5823__auto__$$), $APP.sci.configs.hoplon.hoplon.terpol8_STAR_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.subs.cljs$core$IFn$_invoke$arity$2($s$$, $temp__5823__auto__$$), $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{", $s$$.charAt($temp__5823__auto__$$ + 1))));
  }, null, null) : new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$s$$], null);
};
$APP.sci.configs.hoplon.hoplon.terpol8_STAR_.cljs$lang$maxFixedArity = 2;
$APP.sci.configs.hoplon.hoplon.terpol8 = function($s$$) {
  var $parts$$ = $APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2(function($p1__112224_SHARP_$$) {
    return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("", $p1__112224_SHARP_$$);
  }, $APP.sci.configs.hoplon.hoplon.terpol8_STAR_.cljs$core$IFn$_invoke$arity$1($s$$));
  return $APP.cljs.core.every_QMARK_($APP.cljs.core.string_QMARK_, $parts$$) ? $s$$ : $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$488$cljs_DOT_core_SLASH_str, null, 1, null), $parts$$)));
};
$APP.sci.configs.hoplon.hoplon.elem = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$520_argseq__5756__auto__$$ = [], $len__5749__auto___112354$$ = arguments.length, $i__5750__auto___112355$$ = 0;;) {
    if ($i__5750__auto___112355$$ < $len__5749__auto___112354$$) {
      $args__5755__auto__$jscomp$520_argseq__5756__auto__$$.push(arguments[$i__5750__auto___112355$$]), $i__5750__auto___112355$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$520_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$520_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$520_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return $APP.sci.configs.hoplon.hoplon.elem.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$520_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.hoplon.elem.cljs$core$IFn$_invoke$arity$variadic = function($JSCompiler_inline_result$jscomp$3524__AMPERSAND_form$$, $_AMPERSAND_env$$, $bind$$, $JSCompiler_temp_const$jscomp$3523_body$$) {
  $JSCompiler_inline_result$jscomp$3524__AMPERSAND_form$$ = $APP.cljs.core.map_QMARK_($APP.cljs.core.first($JSCompiler_temp_const$jscomp$3523_body$$)) ? $JSCompiler_temp_const$jscomp$3523_body$$ : $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$jscomp$3523_body$$, null);
  $_AMPERSAND_env$$ = $APP.cljs.core.seq($JSCompiler_inline_result$jscomp$3524__AMPERSAND_form$$);
  $JSCompiler_inline_result$jscomp$3524__AMPERSAND_form$$ = $APP.cljs.core.first($_AMPERSAND_env$$);
  $_AMPERSAND_env$$ = $APP.cljs.core.next($_AMPERSAND_env$$);
  $JSCompiler_temp_const$jscomp$3523_body$$ = $APP.cljs.core.sequence;
  var $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$3523_body$$.cljs$core$IFn$_invoke$arity$1, $JSCompiler_temp_const$jscomp$0$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$1$$ = $JSCompiler_temp_const$jscomp$0$$.seq, $JSCompiler_temp_const$jscomp$2$$ = $APP.cljs.core.concat, $JSCompiler_temp_const$jscomp$3$$ = $JSCompiler_temp_const$jscomp$2$$.cljs$core$IFn$_invoke$arity$variadic, $JSCompiler_temp_const$jscomp$4$$ = new $APP.cljs.core.List(null, $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, 
  null, 1, null), $JSCompiler_temp_const$jscomp$5$$ = new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$148$_AMPERSAND_, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$9066$args__112225__auto__, null, 1, null))))), null, 1, null), $JSCompiler_temp_const$jscomp$6$$ = $APP.cljs.core.prim_seq, $JSCompiler_temp_const$jscomp$7$$ = 
  $JSCompiler_temp_const$jscomp$6$$.cljs$core$IFn$_invoke$arity$2, $JSCompiler_temp_const$jscomp$8$$ = $APP.cljs.core.List;
  $JSCompiler_inline_result$jscomp$3524__AMPERSAND_form$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$3524__AMPERSAND_form$$) ? $JSCompiler_inline_result$jscomp$3524__AMPERSAND_form$$ : $APP.cljs.core.PersistentArrayMap.EMPTY;
  return $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$3523_body$$, $JSCompiler_temp_const$jscomp$1$$.call($JSCompiler_temp_const$jscomp$0$$, $JSCompiler_temp_const$jscomp$3$$.call($JSCompiler_temp_const$jscomp$2$$, $JSCompiler_temp_const$jscomp$4$$, $JSCompiler_temp_const$jscomp$5$$, $JSCompiler_temp_const$jscomp$7$$.call($JSCompiler_temp_const$jscomp$6$$, [new $JSCompiler_temp_const$jscomp$8$$(null, $JSCompiler_inline_result$jscomp$3524__AMPERSAND_form$$, null, 1, null), new $APP.cljs.core.List(null, 
  $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$412$cljs_DOT_core_SLASH_let, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $bind$$, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, 
  cljs$cst$9067$hoplon_DOT_core_SLASH_parse_args, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$9066$args__112225__auto__, null, 1, null)))), null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$_AMPERSAND_env$$], 0)))), null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.hoplon.elem.cljs$lang$maxFixedArity = 3;
$APP.sci.configs.hoplon.hoplon.elem.cljs$lang$applyTo = function($G__112228_seq112226$$) {
  var $G__112227$$ = $APP.cljs.core.first($G__112228_seq112226$$), $G__112229_seq112226__$1$$ = $APP.cljs.core.next($G__112228_seq112226$$);
  $G__112228_seq112226$$ = $APP.cljs.core.first($G__112229_seq112226__$1$$);
  var $seq112226__$2_seq112226__$3$$ = $APP.cljs.core.next($G__112229_seq112226__$1$$);
  $G__112229_seq112226__$1$$ = $APP.cljs.core.first($seq112226__$2_seq112226__$3$$);
  $seq112226__$2_seq112226__$3$$ = $APP.cljs.core.next($seq112226__$2_seq112226__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__112227$$, $G__112228_seq112226$$, $G__112229_seq112226__$1$$, $seq112226__$2_seq112226__$3$$);
};
$APP.sci.configs.hoplon.hoplon.sci_macroexpand_1 = new $APP.cljs.core.Delay(function() {
  return $APP.sci.core.eval_string_STAR_($APP.sci.ctx_store.get_ctx(), "macroexpand-1");
}, null);
$APP.sci.configs.hoplon.hoplon.macroexpand_1_STAR_ = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return $APP.sci.configs.hoplon.hoplon.macroexpand_1_STAR_.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return $APP.sci.configs.hoplon.hoplon.macroexpand_1_STAR_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
$APP.sci.configs.hoplon.hoplon.macroexpand_1_STAR_.cljs$core$IFn$_invoke$arity$1 = function($expr$$) {
  return $APP.sci.configs.hoplon.hoplon.macroexpand_1_STAR_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $expr$$);
};
$APP.sci.configs.hoplon.hoplon.macroexpand_1_STAR_.cljs$core$IFn$_invoke$arity$2 = function($_env$$, $expr$$) {
  $_env$$ = $APP.cljs.core.deref($APP.sci.configs.hoplon.hoplon.sci_macroexpand_1);
  return $_env$$.cljs$core$IFn$_invoke$arity$1 ? $_env$$.cljs$core$IFn$_invoke$arity$1($expr$$) : $_env$$.call(null, $expr$$);
};
$APP.sci.configs.hoplon.hoplon.macroexpand_1_STAR_.cljs$lang$maxFixedArity = 2;
$APP.sci.configs.hoplon.hoplon.defelem = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$521_argseq__5756__auto__$$ = [], $len__5749__auto___112358$$ = arguments.length, $i__5750__auto___112359$$ = 0;;) {
    if ($i__5750__auto___112359$$ < $len__5749__auto___112358$$) {
      $args__5755__auto__$jscomp$521_argseq__5756__auto__$$.push(arguments[$i__5750__auto___112359$$]), $i__5750__auto___112359$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$521_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$521_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$521_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return $APP.sci.configs.hoplon.hoplon.defelem.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$521_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.hoplon.defelem.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$jscomp$61_name__$1$$, $_AMPERSAND_env$jscomp$57_fdecl$$, $name$$, $forms$$) {
  $_AMPERSAND_env$jscomp$57_fdecl$$ = $APP.sci.configs.hoplon.hoplon.macroexpand_1_STAR_.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$445$cljs_DOT_core_SLASH_defn, null, 1, null), new $APP.cljs.core.List(null, $name$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$forms$$], 0)))));
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($_AMPERSAND_env$jscomp$57_fdecl$$, 0, null);
  $_AMPERSAND_form$jscomp$61_name__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($_AMPERSAND_env$jscomp$57_fdecl$$, 1, null);
  $_AMPERSAND_env$jscomp$57_fdecl$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($_AMPERSAND_env$jscomp$57_fdecl$$, 2, null);
  $_AMPERSAND_env$jscomp$57_fdecl$$ = $APP.cljs.core.seq($_AMPERSAND_env$jscomp$57_fdecl$$);
  $APP.cljs.core.first($_AMPERSAND_env$jscomp$57_fdecl$$);
  $_AMPERSAND_env$jscomp$57_fdecl$$ = $APP.cljs.core.next($_AMPERSAND_env$jscomp$57_fdecl$$);
  $_AMPERSAND_env$jscomp$57_fdecl$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($_AMPERSAND_env$jscomp$57_fdecl$$, 0, null);
  $_AMPERSAND_env$jscomp$57_fdecl$$ = typeof $APP.cljs.core.first($_AMPERSAND_env$jscomp$57_fdecl$$) === "string" ? $_AMPERSAND_env$jscomp$57_fdecl$$ : $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($_AMPERSAND_env$jscomp$57_fdecl$$, null);
  $_AMPERSAND_env$jscomp$57_fdecl$$ = $APP.cljs.core.seq($_AMPERSAND_env$jscomp$57_fdecl$$);
  $APP.cljs.core.first($_AMPERSAND_env$jscomp$57_fdecl$$);
  $_AMPERSAND_env$jscomp$57_fdecl$$ = $APP.cljs.core.next($_AMPERSAND_env$jscomp$57_fdecl$$);
  $name$$ = $APP.cljs.core.seq($_AMPERSAND_env$jscomp$57_fdecl$$);
  $_AMPERSAND_env$jscomp$57_fdecl$$ = $APP.cljs.core.first($name$$);
  $name$$ = $APP.cljs.core.next($name$$);
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$170$def, null, 1, null), new $APP.cljs.core.List(null, $_AMPERSAND_form$jscomp$61_name__$1$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  cljs$cst$9068$hoplon_DOT_core_SLASH_elem, null, 1, null), new $APP.cljs.core.List(null, $_AMPERSAND_env$jscomp$57_fdecl$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$name$$], 0)))), null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.hoplon.defelem.cljs$lang$maxFixedArity = 3;
$APP.sci.configs.hoplon.hoplon.defelem.cljs$lang$applyTo = function($G__112238_seq112236$$) {
  var $G__112237$$ = $APP.cljs.core.first($G__112238_seq112236$$), $G__112239_seq112236__$1$$ = $APP.cljs.core.next($G__112238_seq112236$$);
  $G__112238_seq112236$$ = $APP.cljs.core.first($G__112239_seq112236__$1$$);
  var $seq112236__$2_seq112236__$3$$ = $APP.cljs.core.next($G__112239_seq112236__$1$$);
  $G__112239_seq112236__$1$$ = $APP.cljs.core.first($seq112236__$2_seq112236__$3$$);
  $seq112236__$2_seq112236__$3$$ = $APP.cljs.core.next($seq112236__$2_seq112236__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__112237$$, $G__112238_seq112236$$, $G__112239_seq112236__$1$$, $seq112236__$2_seq112236__$3$$);
};
$APP.sci.configs.hoplon.hoplon.defattr = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$522_argseq__5756__auto__$$ = [], $len__5749__auto___112361$$ = arguments.length, $i__5750__auto___112362$$ = 0;;) {
    if ($i__5750__auto___112362$$ < $len__5749__auto___112361$$) {
      $args__5755__auto__$jscomp$522_argseq__5756__auto__$$.push(arguments[$i__5750__auto___112362$$]), $i__5750__auto___112362$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$522_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$522_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$522_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return $APP.sci.configs.hoplon.hoplon.defattr.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$522_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.hoplon.defattr.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $name$$, $forms$$) {
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$438$cljs_DOT_core_SLASH_defmethod, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$9069$hoplon_DOT_core_SLASH_do_BANG_, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $name$$, null, 1, null), $forms$$], 0))));
};
$APP.sci.configs.hoplon.hoplon.defattr.cljs$lang$maxFixedArity = 3;
$APP.sci.configs.hoplon.hoplon.defattr.cljs$lang$applyTo = function($G__112257_seq112255$$) {
  var $G__112256$$ = $APP.cljs.core.first($G__112257_seq112255$$), $G__112258_seq112255__$1$$ = $APP.cljs.core.next($G__112257_seq112255$$);
  $G__112257_seq112255$$ = $APP.cljs.core.first($G__112258_seq112255__$1$$);
  var $seq112255__$2_seq112255__$3$$ = $APP.cljs.core.next($G__112258_seq112255__$1$$);
  $G__112258_seq112255__$1$$ = $APP.cljs.core.first($seq112255__$2_seq112255__$3$$);
  $seq112255__$2_seq112255__$3$$ = $APP.cljs.core.next($seq112255__$2_seq112255__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__112256$$, $G__112257_seq112255$$, $G__112258_seq112255__$1$$, $seq112255__$2_seq112255__$3$$);
};
$APP.sci.configs.hoplon.hoplon.safe_deref = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $expr$$) {
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$803$cljs_DOT_core_SLASH_deref, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$826$cljs_DOT_core_SLASH_or, null, 1, null), new $APP.cljs.core.List(null, 
  $expr$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$454$cljs_DOT_core_SLASH_atom, null, 1, null), new $APP.cljs.core.List(null, null, null, 1, null)))), null, 1, null)], 0)))), null, 1, null))));
};
$APP.sci.configs.hoplon.hoplon.parse_e = function($first__112264_p__112261$$) {
  var $seq__112263_seq__112263__$1$$ = $APP.cljs.core.seq($first__112264_p__112261$$);
  $first__112264_p__112261$$ = $APP.cljs.core.first($seq__112263_seq__112263__$1$$);
  $seq__112263_seq__112263__$1$$ = $APP.cljs.core.next($seq__112263_seq__112263__$1$$);
  var $seq__112266_seq__112266__$1$$ = $APP.cljs.core.seq($seq__112263_seq__112263__$1$$), $first__112267$$ = $APP.cljs.core.first($seq__112266_seq__112266__$1$$);
  $seq__112266_seq__112266__$1$$ = $APP.cljs.core.next($seq__112266_seq__112266__$1$$);
  var $kw1_QMARK_$$ = $APP.cljs.core.comp.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.keyword_QMARK_, $APP.cljs.core.first);
  return $APP.cljs.core.map_QMARK_($first__112267$$) ? new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$first__112264_p__112261$$, $first__112267$$, $seq__112266_seq__112266__$1$$], null) : $first__112267$$ instanceof $APP.cljs.core.Keyword ? new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$first__112264_p__112261$$, $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.vec, 
  $APP.cljs.core.take_while.cljs$core$IFn$_invoke$arity$2($kw1_QMARK_$$, $APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2, $seq__112263_seq__112263__$1$$)))), $APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.identity, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2($kw1_QMARK_$$, $APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$4(2, 2, $APP.cljs.core.PersistentVector.EMPTY, $seq__112263_seq__112263__$1$$))], 
  0))], null) : new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$first__112264_p__112261$$, null, $seq__112263_seq__112263__$1$$], null);
};
$APP.sci.configs.hoplon.hoplon.loop_tpl = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$523_argseq__5756__auto__$$ = [], $len__5749__auto___112364$$ = arguments.length, $i__5750__auto___112365$$ = 0;;) {
    if ($i__5750__auto___112365$$ < $len__5749__auto___112364$$) {
      $args__5755__auto__$jscomp$523_argseq__5756__auto__$$.push(arguments[$i__5750__auto___112365$$]), $i__5750__auto___112365$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$523_argseq__5756__auto__$$ = 2 < $args__5755__auto__$jscomp$523_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$523_argseq__5756__auto__$$.slice(2), 0, null) : null;
  return $APP.sci.configs.hoplon.hoplon.loop_tpl.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args__5755__auto__$jscomp$523_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.hoplon.loop_tpl.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$jscomp$64_body$$, $_AMPERSAND_env$jscomp$60_bindings$$, $args$jscomp$537_items$$) {
  $_AMPERSAND_form$jscomp$64_body$$ = $APP.sci.configs.hoplon.hoplon.parse_e($APP.cljs.core.cons($APP.cljs$cst$312$_, $args$jscomp$537_items$$));
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($_AMPERSAND_form$jscomp$64_body$$, 0, null);
  $_AMPERSAND_env$jscomp$60_bindings$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($_AMPERSAND_form$jscomp$64_body$$, 1, null);
  $_AMPERSAND_env$jscomp$60_bindings$$ = $APP.cljs.core.__destructure_map($_AMPERSAND_env$jscomp$60_bindings$$);
  $args$jscomp$537_items$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($_AMPERSAND_env$jscomp$60_bindings$$, $APP.cljs$cst$394$bindings);
  $_AMPERSAND_env$jscomp$60_bindings$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($args$jscomp$537_items$$, 0, null);
  $args$jscomp$537_items$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($args$jscomp$537_items$$, 1, null);
  $_AMPERSAND_form$jscomp$64_body$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($_AMPERSAND_form$jscomp$64_body$$, 2, null);
  $_AMPERSAND_form$jscomp$64_body$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($_AMPERSAND_form$jscomp$64_body$$, 0, null);
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$9070$hoplon_DOT_core_SLASH_loop_tpl_STAR_, null, 1, null), new $APP.cljs.core.List(null, $args$jscomp$537_items$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.List(null, cljs$cst$9071$item__112268__auto__, null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$8965$javelin_DOT_core_SLASH_cell_let, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $_AMPERSAND_env$jscomp$60_bindings$$, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$9071$item__112268__auto__, null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, 
  $_AMPERSAND_form$jscomp$64_body$$, null, 1, null)], 0)))), null, 1, null)], 0)))), null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.hoplon.loop_tpl.cljs$lang$maxFixedArity = 2;
$APP.sci.configs.hoplon.hoplon.loop_tpl.cljs$lang$applyTo = function($G__112271_seq112269$$) {
  var $G__112270$$ = $APP.cljs.core.first($G__112271_seq112269$$), $seq112269__$1_seq112269__$2$$ = $APP.cljs.core.next($G__112271_seq112269$$);
  $G__112271_seq112269$$ = $APP.cljs.core.first($seq112269__$1_seq112269__$2$$);
  $seq112269__$1_seq112269__$2$$ = $APP.cljs.core.next($seq112269__$1_seq112269__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__112270$$, $G__112271_seq112269$$, $seq112269__$1_seq112269__$2$$);
};
$APP.sci.configs.hoplon.hoplon.for_tpl = function($_AMPERSAND_form$jscomp$65_bindings$$, $_AMPERSAND_env$$, $items$$, $body$$) {
  $_AMPERSAND_form$jscomp$65_bindings$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($items$$, 0, null);
  $items$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($items$$, 1, null);
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$9070$hoplon_DOT_core_SLASH_loop_tpl_STAR_, null, 1, null), new $APP.cljs.core.List(null, $items$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.List(null, cljs$cst$9072$item__112282__auto__, null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$8965$javelin_DOT_core_SLASH_cell_let, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $_AMPERSAND_form$jscomp$65_bindings$$, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$9072$item__112282__auto__, null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, 
  $body$$, null, 1, null)], 0)))), null, 1, null)], 0)))), null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.hoplon.if_tpl = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$524_argseq__5756__auto__$$ = [], $len__5749__auto___112367$$ = arguments.length, $i__5750__auto___112368$$ = 0;;) {
    if ($i__5750__auto___112368$$ < $len__5749__auto___112367$$) {
      $args__5755__auto__$jscomp$524_argseq__5756__auto__$$.push(arguments[$i__5750__auto___112368$$]), $i__5750__auto___112368$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$524_argseq__5756__auto__$$ = 4 < $args__5755__auto__$jscomp$524_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$524_argseq__5756__auto__$$.slice(4), 0, null) : null;
  return $APP.sci.configs.hoplon.hoplon.if_tpl.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], arguments[3], $args__5755__auto__$jscomp$524_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.hoplon.if_tpl.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $predicate$$, $consequent$$, $p__112296$$) {
  $_AMPERSAND_form$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__112296$$, 0, null);
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$412$cljs_DOT_core_SLASH_let, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$9073$con__112287__auto__, null, 1, null), new $APP.cljs.core.List(null, 
  $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, cljs$cst$9074$cljs_DOT_core_SLASH_delay, null, 1, null), new $APP.cljs.core.List(null, $consequent$$, null, 1, null)))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, cljs$cst$9075$alt__112288__auto__, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, 
  cljs$cst$9074$cljs_DOT_core_SLASH_delay, null, 1, null), new $APP.cljs.core.List(null, $_AMPERSAND_form$$, null, 1, null)))), null, 1, null), new $APP.cljs.core.List(null, cljs$cst$9076$tpl__112289__auto__, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, null, 1, null), new $APP.cljs.core.List(null, 
  $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.List(null, cljs$cst$9077$p__112290__auto__, null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, cljs$cst$9078$hoplon_DOT_core_SLASH_safe_deref, 
  null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$157$if, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$9077$p__112290__auto__, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, cljs$cst$9073$con__112287__auto__, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$9075$alt__112288__auto__, 
  null, 1, null)], 0)))), null, 1, null)))), null, 1, null)], 0)))), null, 1, null)], 0))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$8954$javelin_DOT_core_SLASH_formula, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$9076$tpl__112289__auto__, null, 1, null)))), null, 1, null), new $APP.cljs.core.List(null, $predicate$$, null, 1, null)))), null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.hoplon.if_tpl.cljs$lang$maxFixedArity = 4;
$APP.sci.configs.hoplon.hoplon.if_tpl.cljs$lang$applyTo = function($G__112293_seq112291$$) {
  var $G__112292$$ = $APP.cljs.core.first($G__112293_seq112291$$), $G__112294_seq112291__$1$$ = $APP.cljs.core.next($G__112293_seq112291$$);
  $G__112293_seq112291$$ = $APP.cljs.core.first($G__112294_seq112291__$1$$);
  var $G__112295_seq112291__$2$$ = $APP.cljs.core.next($G__112294_seq112291__$1$$);
  $G__112294_seq112291__$1$$ = $APP.cljs.core.first($G__112295_seq112291__$2$$);
  var $seq112291__$3_seq112291__$4$$ = $APP.cljs.core.next($G__112295_seq112291__$2$$);
  $G__112295_seq112291__$2$$ = $APP.cljs.core.first($seq112291__$3_seq112291__$4$$);
  $seq112291__$3_seq112291__$4$$ = $APP.cljs.core.next($seq112291__$3_seq112291__$4$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__112292$$, $G__112293_seq112291$$, $G__112294_seq112291__$1$$, $G__112295_seq112291__$2$$, $seq112291__$3_seq112291__$4$$);
};
$APP.sci.configs.hoplon.hoplon.when_tpl = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$525_argseq__5756__auto__$$ = [], $len__5749__auto___112370$$ = arguments.length, $i__5750__auto___112371$$ = 0;;) {
    if ($i__5750__auto___112371$$ < $len__5749__auto___112370$$) {
      $args__5755__auto__$jscomp$525_argseq__5756__auto__$$.push(arguments[$i__5750__auto___112371$$]), $i__5750__auto___112371$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$525_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$525_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$525_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return $APP.sci.configs.hoplon.hoplon.when_tpl.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$525_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.hoplon.when_tpl.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $predicate$$, $body$$) {
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$9079$hoplon_DOT_core_SLASH_if_tpl, null, 1, null), new $APP.cljs.core.List(null, $predicate$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$155$do, null, 1, null), $body$$))), null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.hoplon.when_tpl.cljs$lang$maxFixedArity = 3;
$APP.sci.configs.hoplon.hoplon.when_tpl.cljs$lang$applyTo = function($G__112302_seq112300$$) {
  var $G__112301$$ = $APP.cljs.core.first($G__112302_seq112300$$), $G__112303_seq112300__$1$$ = $APP.cljs.core.next($G__112302_seq112300$$);
  $G__112302_seq112300$$ = $APP.cljs.core.first($G__112303_seq112300__$1$$);
  var $seq112300__$2_seq112300__$3$$ = $APP.cljs.core.next($G__112303_seq112300__$1$$);
  $G__112303_seq112300__$1$$ = $APP.cljs.core.first($seq112300__$2_seq112300__$3$$);
  $seq112300__$2_seq112300__$3$$ = $APP.cljs.core.next($seq112300__$2_seq112300__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__112301$$, $G__112302_seq112300$$, $G__112303_seq112300__$1$$, $seq112300__$2_seq112300__$3$$);
};
$APP.sci.configs.hoplon.hoplon.cond_tpl = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$526_argseq__5756__auto__$$ = [], $len__5749__auto___112373$$ = arguments.length, $i__5750__auto___112374$$ = 0;;) {
    if ($i__5750__auto___112374$$ < $len__5749__auto___112373$$) {
      $args__5755__auto__$jscomp$526_argseq__5756__auto__$$.push(arguments[$i__5750__auto___112374$$]), $i__5750__auto___112374$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$526_argseq__5756__auto__$$ = 2 < $args__5755__auto__$jscomp$526_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$526_argseq__5756__auto__$$.slice(2), 0, null) : null;
  return $APP.sci.configs.hoplon.hoplon.cond_tpl.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args__5755__auto__$jscomp$526_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.hoplon.cond_tpl.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$jscomp$68_conds$$, $_AMPERSAND_env$$, $clauses$jscomp$38_syms1$$) {
  $_AMPERSAND_env$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.map, $APP.cljs.core.vector, $APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2, $clauses$jscomp$38_syms1$$));
  $_AMPERSAND_form$jscomp$68_conds$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($_AMPERSAND_env$$, 0, null);
  $_AMPERSAND_env$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($_AMPERSAND_env$$, 1, null);
  $clauses$jscomp$38_syms1$$ = $APP.cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count($_AMPERSAND_form$jscomp$68_conds$$), $APP.cljs.core.gensym);
  var $syms2$$ = $APP.cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count($_AMPERSAND_form$jscomp$68_conds$$), $APP.cljs.core.gensym);
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$412$cljs_DOT_core_SLASH_let, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.interleave.cljs$core$IFn$_invoke$arity$2($clauses$jscomp$38_syms1$$, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($x$$) {
    return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, cljs$cst$9074$cljs_DOT_core_SLASH_delay, null, 1, null), new $APP.cljs.core.List(null, $x$$, null, 1, null))));
  }, $_AMPERSAND_env$$)), new $APP.cljs.core.List(null, cljs$cst$9080$tpl__112304__auto__, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1($syms2$$)))), 
  null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, cljs$cst$9078$hoplon_DOT_core_SLASH_safe_deref, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$6162$cljs_DOT_core_SLASH_cond, null, 1, null), $APP.cljs.core.interleave.cljs$core$IFn$_invoke$arity$2($syms2$$, $clauses$jscomp$38_syms1$$)))), null, 1, null)))), null, 1, null)], 0)))), null, 1, null)], 0))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$8954$javelin_DOT_core_SLASH_formula, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$9080$tpl__112304__auto__, null, 1, null)))), null, 1, null), $_AMPERSAND_form$jscomp$68_conds$$))), null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.hoplon.cond_tpl.cljs$lang$maxFixedArity = 2;
$APP.sci.configs.hoplon.hoplon.cond_tpl.cljs$lang$applyTo = function($G__112307_seq112305$$) {
  var $G__112306$$ = $APP.cljs.core.first($G__112307_seq112305$$), $seq112305__$1_seq112305__$2$$ = $APP.cljs.core.next($G__112307_seq112305$$);
  $G__112307_seq112305$$ = $APP.cljs.core.first($seq112305__$1_seq112305__$2$$);
  $seq112305__$1_seq112305__$2$$ = $APP.cljs.core.next($seq112305__$1_seq112305__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__112306$$, $G__112307_seq112305$$, $seq112305__$1_seq112305__$2$$);
};
$APP.sci.configs.hoplon.hoplon.case_tpl = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$527_argseq__5756__auto__$$ = [], $len__5749__auto___112376$$ = arguments.length, $i__5750__auto___112377$$ = 0;;) {
    if ($i__5750__auto___112377$$ < $len__5749__auto___112376$$) {
      $args__5755__auto__$jscomp$527_argseq__5756__auto__$$.push(arguments[$i__5750__auto___112377$$]), $i__5750__auto___112377$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$527_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$527_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$527_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return $APP.sci.configs.hoplon.hoplon.case_tpl.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$527_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.hoplon.case_tpl.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$jscomp$69_cases$$, $_AMPERSAND_env$jscomp$65_tpls$$, $expr$$, $clauses$jscomp$39_default$$$) {
  $_AMPERSAND_env$jscomp$65_tpls$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.map, $APP.cljs.core.vector, $APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2, $clauses$jscomp$39_default$$$));
  $_AMPERSAND_form$jscomp$69_cases$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($_AMPERSAND_env$jscomp$65_tpls$$, 0, null);
  $_AMPERSAND_env$jscomp$65_tpls$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($_AMPERSAND_env$jscomp$65_tpls$$, 1, null);
  $clauses$jscomp$39_default$$$ = $APP.cljs.core.odd_QMARK_($APP.cljs.core.count($clauses$jscomp$39_default$$$)) ? $APP.cljs.core.last($clauses$jscomp$39_default$$$) : null;
  var $syms$$ = $APP.cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count($_AMPERSAND_form$jscomp$69_cases$$) + 1, $APP.cljs.core.gensym);
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$412$cljs_DOT_core_SLASH_let, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.interleave.cljs$core$IFn$_invoke$arity$2($syms$$, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($x$$) {
    return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, cljs$cst$9074$cljs_DOT_core_SLASH_delay, null, 1, null), new $APP.cljs.core.List(null, $x$$, null, 1, null))));
  }, $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($_AMPERSAND_env$jscomp$65_tpls$$, $clauses$jscomp$39_default$$$))), new $APP.cljs.core.List(null, cljs$cst$9081$tpl__112311__auto__, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, null, 1, 
  null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.List(null, cljs$cst$9082$expr__112312__auto__, null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, 
  cljs$cst$9078$hoplon_DOT_core_SLASH_safe_deref, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$9083$cljs_DOT_core_SLASH_case, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$9082$expr__112312__auto__, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.interleave.cljs$core$IFn$_invoke$arity$2($_AMPERSAND_form$jscomp$69_cases$$, 
  $syms$$), new $APP.cljs.core.List(null, $APP.cljs.core.last($syms$$), null, 1, null)], 0)))), null, 1, null)))), null, 1, null)], 0)))), null, 1, null)], 0))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$8954$javelin_DOT_core_SLASH_formula, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$9081$tpl__112311__auto__, null, 1, null)))), null, 1, null), new $APP.cljs.core.List(null, $expr$$, null, 1, null)))), null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.hoplon.case_tpl.cljs$lang$maxFixedArity = 3;
$APP.sci.configs.hoplon.hoplon.case_tpl.cljs$lang$applyTo = function($G__112315_seq112313$$) {
  var $G__112314$$ = $APP.cljs.core.first($G__112315_seq112313$$), $G__112316_seq112313__$1$$ = $APP.cljs.core.next($G__112315_seq112313$$);
  $G__112315_seq112313$$ = $APP.cljs.core.first($G__112316_seq112313__$1$$);
  var $seq112313__$2_seq112313__$3$$ = $APP.cljs.core.next($G__112316_seq112313__$1$$);
  $G__112316_seq112313__$1$$ = $APP.cljs.core.first($seq112313__$2_seq112313__$3$$);
  $seq112313__$2_seq112313__$3$$ = $APP.cljs.core.next($seq112313__$2_seq112313__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__112314$$, $G__112315_seq112313$$, $G__112316_seq112313__$1$$, $seq112313__$2_seq112313__$3$$);
};
$APP.sci.configs.hoplon.hoplon.with_dom = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$528_argseq__5756__auto__$$ = [], $len__5749__auto___112379$$ = arguments.length, $i__5750__auto___112380$$ = 0;;) {
    if ($i__5750__auto___112380$$ < $len__5749__auto___112379$$) {
      $args__5755__auto__$jscomp$528_argseq__5756__auto__$$.push(arguments[$i__5750__auto___112380$$]), $i__5750__auto___112380$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$528_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$528_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$528_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return $APP.sci.configs.hoplon.hoplon.with_dom.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$528_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.hoplon.with_dom.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $elem$$, $body$$) {
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$9084$hoplon_DOT_core_SLASH_when_dom, null, 1, null), new $APP.cljs.core.List(null, $elem$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$body$$], 0)))), null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.hoplon.with_dom.cljs$lang$maxFixedArity = 3;
$APP.sci.configs.hoplon.hoplon.with_dom.cljs$lang$applyTo = function($G__112322_seq112320$$) {
  var $G__112321$$ = $APP.cljs.core.first($G__112322_seq112320$$), $G__112323_seq112320__$1$$ = $APP.cljs.core.next($G__112322_seq112320$$);
  $G__112322_seq112320$$ = $APP.cljs.core.first($G__112323_seq112320__$1$$);
  var $seq112320__$2_seq112320__$3$$ = $APP.cljs.core.next($G__112323_seq112320__$1$$);
  $G__112323_seq112320__$1$$ = $APP.cljs.core.first($seq112320__$2_seq112320__$3$$);
  $seq112320__$2_seq112320__$3$$ = $APP.cljs.core.next($seq112320__$2_seq112320__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__112321$$, $G__112322_seq112320$$, $G__112323_seq112320__$1$$, $seq112320__$2_seq112320__$3$$);
};
$APP.sci.configs.hoplon.hoplon.with_timeout = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$529_argseq__5756__auto__$$ = [], $len__5749__auto___112382$$ = arguments.length, $i__5750__auto___112383$$ = 0;;) {
    if ($i__5750__auto___112383$$ < $len__5749__auto___112382$$) {
      $args__5755__auto__$jscomp$529_argseq__5756__auto__$$.push(arguments[$i__5750__auto___112383$$]), $i__5750__auto___112383$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$529_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$529_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$529_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return $APP.sci.configs.hoplon.hoplon.with_timeout.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$529_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.hoplon.with_timeout.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $msec$$, $body$$) {
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$9085$js_SLASH_setTimeout, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, null, 1, null), new $APP.cljs.core.List(null, 
  $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$body$$], 0)))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $msec$$, null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.hoplon.with_timeout.cljs$lang$maxFixedArity = 3;
$APP.sci.configs.hoplon.hoplon.with_timeout.cljs$lang$applyTo = function($G__112326_seq112324$$) {
  var $G__112325$$ = $APP.cljs.core.first($G__112326_seq112324$$), $G__112327_seq112324__$1$$ = $APP.cljs.core.next($G__112326_seq112324$$);
  $G__112326_seq112324$$ = $APP.cljs.core.first($G__112327_seq112324__$1$$);
  var $seq112324__$2_seq112324__$3$$ = $APP.cljs.core.next($G__112327_seq112324__$1$$);
  $G__112327_seq112324__$1$$ = $APP.cljs.core.first($seq112324__$2_seq112324__$3$$);
  $seq112324__$2_seq112324__$3$$ = $APP.cljs.core.next($seq112324__$2_seq112324__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__112325$$, $G__112326_seq112324$$, $G__112327_seq112324__$1$$, $seq112324__$2_seq112324__$3$$);
};
$APP.sci.configs.hoplon.hoplon.with_interval = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$530_argseq__5756__auto__$$ = [], $len__5749__auto___112385$$ = arguments.length, $i__5750__auto___112386$$ = 0;;) {
    if ($i__5750__auto___112386$$ < $len__5749__auto___112385$$) {
      $args__5755__auto__$jscomp$530_argseq__5756__auto__$$.push(arguments[$i__5750__auto___112386$$]), $i__5750__auto___112386$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$530_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$530_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$530_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return $APP.sci.configs.hoplon.hoplon.with_interval.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$530_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.hoplon.with_interval.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $msec$$, $body$$) {
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$8973$js_SLASH_setInterval, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, null, 1, null), new $APP.cljs.core.List(null, 
  $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$body$$], 0)))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $msec$$, null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.hoplon.with_interval.cljs$lang$maxFixedArity = 3;
$APP.sci.configs.hoplon.hoplon.with_interval.cljs$lang$applyTo = function($G__112330_seq112328$$) {
  var $G__112329$$ = $APP.cljs.core.first($G__112330_seq112328$$), $G__112331_seq112328__$1$$ = $APP.cljs.core.next($G__112330_seq112328$$);
  $G__112330_seq112328$$ = $APP.cljs.core.first($G__112331_seq112328__$1$$);
  var $seq112328__$2_seq112328__$3$$ = $APP.cljs.core.next($G__112331_seq112328__$1$$);
  $G__112331_seq112328__$1$$ = $APP.cljs.core.first($seq112328__$2_seq112328__$3$$);
  $seq112328__$2_seq112328__$3$$ = $APP.cljs.core.next($seq112328__$2_seq112328__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__112329$$, $G__112330_seq112328$$, $G__112331_seq112328__$1$$, $seq112328__$2_seq112328__$3$$);
};
$APP.sci.configs.hoplon.hoplon.with_animation_frame = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$531_argseq__5756__auto__$$ = [], $len__5749__auto___112389$$ = arguments.length, $i__5750__auto___112390$$ = 0;;) {
    if ($i__5750__auto___112390$$ < $len__5749__auto___112389$$) {
      $args__5755__auto__$jscomp$531_argseq__5756__auto__$$.push(arguments[$i__5750__auto___112390$$]), $i__5750__auto___112390$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$531_argseq__5756__auto__$$ = 2 < $args__5755__auto__$jscomp$531_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$531_argseq__5756__auto__$$.slice(2), 0, null) : null;
  return $APP.sci.configs.hoplon.hoplon.with_animation_frame.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args__5755__auto__$jscomp$531_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.hoplon.with_animation_frame.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $body$$) {
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$9086$_DOT_requestAnimationFrame, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$9087$js_SLASH_window, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$body$$], 0)))), null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.hoplon.with_animation_frame.cljs$lang$maxFixedArity = 2;
$APP.sci.configs.hoplon.hoplon.with_animation_frame.cljs$lang$applyTo = function($G__112334_seq112332$$) {
  var $G__112333$$ = $APP.cljs.core.first($G__112334_seq112332$$), $seq112332__$1_seq112332__$2$$ = $APP.cljs.core.next($G__112334_seq112332$$);
  $G__112334_seq112332$$ = $APP.cljs.core.first($seq112332__$1_seq112332__$2$$);
  $seq112332__$1_seq112332__$2$$ = $APP.cljs.core.next($seq112332__$1_seq112332__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__112333$$, $G__112334_seq112332$$, $seq112332__$1_seq112332__$2$$);
};
$APP.sci.configs.hoplon.hoplon.with_init_BANG_ = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$532_argseq__5756__auto__$$ = [], $len__5749__auto___112393$$ = arguments.length, $i__5750__auto___112394$$ = 0;;) {
    if ($i__5750__auto___112394$$ < $len__5749__auto___112393$$) {
      $args__5755__auto__$jscomp$532_argseq__5756__auto__$$.push(arguments[$i__5750__auto___112394$$]), $i__5750__auto___112394$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$532_argseq__5756__auto__$$ = 2 < $args__5755__auto__$jscomp$532_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$532_argseq__5756__auto__$$.slice(2), 0, null) : null;
  return $APP.sci.configs.hoplon.hoplon.with_init_BANG_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args__5755__auto__$jscomp$532_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.hoplon.with_init_BANG_.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $body$$) {
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, cljs$cst$9088$hoplon_DOT_core_SLASH_add_initfn_BANG_, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, null, 1, null), new $APP.cljs.core.List(null, 
  $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$body$$], 0)))), null, 1, null))));
};
$APP.sci.configs.hoplon.hoplon.with_init_BANG_.cljs$lang$maxFixedArity = 2;
$APP.sci.configs.hoplon.hoplon.with_init_BANG_.cljs$lang$applyTo = function($G__112337_seq112335$$) {
  var $G__112336$$ = $APP.cljs.core.first($G__112337_seq112335$$), $seq112335__$1_seq112335__$2$$ = $APP.cljs.core.next($G__112337_seq112335$$);
  $G__112337_seq112335$$ = $APP.cljs.core.first($seq112335__$1_seq112335__$2$$);
  $seq112335__$1_seq112335__$2$$ = $APP.cljs.core.next($seq112335__$1_seq112335__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__112336$$, $G__112337_seq112335$$, $seq112335__$1_seq112335__$2$$);
};
$APP.sci.configs.hoplon.hoplon.text = function($_AMPERSAND_form$jscomp$75_i$$, $_AMPERSAND_env$$, $form$$) {
  $_AMPERSAND_form$jscomp$75_i$$ = typeof $form$$ !== "string" ? $form$$ : $APP.sci.configs.hoplon.hoplon.terpol8($form$$);
  return typeof $_AMPERSAND_form$jscomp$75_i$$ === "string" ? $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$9089$_DOT_createTextNode, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$9090$js_SLASH_document, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $_AMPERSAND_form$jscomp$75_i$$, null, 1, null)], 0)))) : $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$8955$javelin_DOT_core_SLASH_with_let, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, cljs$cst$9091$t__112338__auto__, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  cljs$cst$9089$_DOT_createTextNode, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$9090$js_SLASH_document, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, "", null, 1, null)], 0)))), null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$8957$javelin_DOT_core_SLASH_cell_EQ_, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$164$set_BANG_, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, cljs$cst$9092$_DOT__nodeValue, 
  null, 1, null), new $APP.cljs.core.List(null, cljs$cst$9091$t__112338__auto__, null, 1, null)))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $_AMPERSAND_form$jscomp$75_i$$, null, 1, null)], 0)))), null, 1, null)))), null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.hoplon.hns = $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$9093$hoplon_DOT_core, null);
$APP.sci.configs.hoplon.hoplon.hoplon_core_namespace = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic($APP.sci.core._copy_ns($APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$4200$u, $APP.cljs.core.with_meta(cljs$cst$9094$_on_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9095$elem, 
$APP.cljs$cst$2673$this, $APP.cljs$cst$15$value], null)))], null)), cljs$cst$9096$dl, $APP.cljs.core.with_meta(cljs$cst$9097$set_styles_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$2441$kvs], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2673$this, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$2441$kvs], null))), $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2673$this, $APP.cljs$cst$2441$kvs], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$2441$kvs], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$2441$kvs], null)), $APP.cljs$cst$1381$arglists_meta, 
$APP.cljs.core.list(null, null)], null)], null)), cljs$cst$9098$li, cljs$cst$9099$html_map, cljs$cst$9100$article, cljs$cst$9101$main, $APP.cljs$cst$1412$pre, cljs$cst$9102$datalist, $APP.cljs.core.with_meta(cljs$cst$9103$_hoplon_kids, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$9104$hoplon_DOT_core_SLASH_IHoplonElement, $APP.cljs$cst$256$doc, "Returns the hoplon managed kids atom, or creates it if missing.", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null)))], null)), cljs$cst$9105$$comment, $APP.cljs.core.with_meta(cljs$cst$9106$normalize_class, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2441$kvs], null))), 
$APP.cljs$cst$256$doc, "Class normalization for attribute providers. Converts from strings and\n  sequences to hashmaps."], null)), $APP.cljs$cst$4948$summary, cljs$cst$9107$aside, cljs$cst$9108$meter, $APP.cljs$cst$5721$track, cljs$cst$9109$strong, $APP.cljs.core.with_meta(cljs$cst$9110$_insert_before_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$9104$hoplon_DOT_core_SLASH_IHoplonElement, $APP.cljs$cst$256$doc, "Inserts `existing` before `new` in `this` for the case of `this` being a managed element.", 
$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$158$new, $APP.cljs$cst$2383$existing], null)))], null)), cljs$cst$9111$figcaption, $APP.cljs.core.with_meta(cljs$cst$9112$IHoplonElement, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2776$protocol_symbol, !0, $APP.cljs$cst$2777$protocol_info, new $APP.cljs.core.PersistentArrayMap(null, 
1, [$APP.cljs$cst$463$methods, new $APP.cljs.core.PersistentArrayMap(null, 7, [$APP.cljs.core.with_meta(cljs$cst$9113$_set_attributes_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Sets attributes on a managed element using native functionality."], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$2441$kvs], 
null)], null), $APP.cljs.core.with_meta(cljs$cst$9114$_set_styles_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Sets styles on a managed element using native functionality."], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$2441$kvs], null)], null), $APP.cljs.core.with_meta(cljs$cst$9103$_hoplon_kids, 
new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Returns the hoplon managed kids atom, or creates it if missing."], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null)], null), $APP.cljs.core.with_meta(cljs$cst$9115$_append_child_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, 
"Appends `child` to `this` for the case of `this` being a managed element."], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$5747$child], null)], null), $APP.cljs.core.with_meta(cljs$cst$9116$_remove_child_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Removes `child` from `this` for the case of `this` being a managed element."], 
null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$5747$child], null)], null), $APP.cljs.core.with_meta(cljs$cst$9117$_replace_child_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Replaces `existing` with `new` in `this` for the case of `this` being a managed element."], null)), new $APP.cljs.core.PersistentVector(null, 
1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$158$new, $APP.cljs$cst$2383$existing], null)], null), $APP.cljs.core.with_meta(cljs$cst$9110$_insert_before_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Inserts `existing` before `new` in `this` for the case of `this` being a managed element."], null)), new $APP.cljs.core.PersistentVector(null, 
1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$158$new, $APP.cljs$cst$2383$existing], null)], null)], null)], null), $APP.cljs$cst$465$sigs, new $APP.cljs.core.PersistentArrayMap(null, 7, [cljs$cst$9118$_set_attributes_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9113$_set_attributes_BANG_, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$2441$kvs], null)), $APP.cljs$cst$256$doc, "Sets attributes on a managed element using native functionality."], null), cljs$cst$9119$_set_styles_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9114$_set_styles_BANG_, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, 
$APP.cljs$cst$2441$kvs], null)), $APP.cljs$cst$256$doc, "Sets styles on a managed element using native functionality."], null), cljs$cst$9120$_hoplon_kids, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9103$_hoplon_kids, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null)), $APP.cljs$cst$256$doc, "Returns the hoplon managed kids atom, or creates it if missing."], 
null), cljs$cst$9121$_append_child_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9115$_append_child_BANG_, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$5747$child], null)), $APP.cljs$cst$256$doc, "Appends `child` to `this` for the case of `this` being a managed element."], null), cljs$cst$9122$_remove_child_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$272$name, cljs$cst$9116$_remove_child_BANG_, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$5747$child], null)), $APP.cljs$cst$256$doc, "Removes `child` from `this` for the case of `this` being a managed element."], null), cljs$cst$9123$_replace_child_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9117$_replace_child_BANG_, 
$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$158$new, $APP.cljs$cst$2383$existing], null)), $APP.cljs$cst$256$doc, "Replaces `existing` with `new` in `this` for the case of `this` being a managed element."], null), cljs$cst$9124$_insert_before_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9110$_insert_before_BANG_, $APP.cljs$cst$273$arglists, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$158$new, $APP.cljs$cst$2383$existing], null)), $APP.cljs$cst$256$doc, "Inserts `existing` before `new` in `this` for the case of `this` being a managed element."], null)], null), $APP.cljs$cst$2789$jsdoc, $APP.cljs.core.list("@interface")], null)), cljs$cst$9125$ruby, cljs$cst$9126$option, cljs$cst$9127$details, $APP.cljs$cst$2523$q, cljs$cst$9128$kbd, 
$APP.cljs.core.with_meta(cljs$cst$9129$set_attributes_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$2441$kvs], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v, 
$APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$2441$kvs], null))), $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$2441$kvs], 
null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$2441$kvs], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$2441$kvs], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], 
null)], null)), $APP.cljs$cst$1329$select, cljs$cst$9130$abbr, $APP.cljs$cst$5233$thead, cljs$cst$9131$del, cljs$cst$9132$optgroup, $APP.cljs$cst$318$col, cljs$cst$9133$h4, $APP.cljs$cst$7928$dt, $APP.cljs.core.with_meta(cljs$cst$9134$invoke_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, 
$APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null))), $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2673$this, $APP.cljs$cst$1246$args)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$9135$add_initfn_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$52$f], null))), $APP.cljs$cst$256$doc, "Executes a function once the window load event is fired.\n\n   Or, if the page has already loaded, executes the function immediately."], null)), cljs$cst$9136$h5, cljs$cst$9137$menuitem, cljs$cst$9138$sup, $APP.cljs.core.with_meta(cljs$cst$9113$_set_attributes_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$9104$hoplon_DOT_core_SLASH_IHoplonElement, $APP.cljs$cst$256$doc, "Sets attributes on a managed element using native functionality.", 
$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$2441$kvs], null)))], null)), cljs$cst$9139$html_object, $APP.cljs$cst$1547$section, $APP.cljs$cst$380$data, cljs$cst$9140$sub, $APP.cljs.core.with_meta(cljs$cst$9141$loop_tpl_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9142$items, cljs$cst$9143$tpl], null))), $APP.cljs$cst$256$doc, "Given a cell items containing a seqable collection, constructs a cell that\n  works like a fill vector. The template `tpl` is a function of one argument: the\n  formula cell containing the ith item in items. The tpl function is called\n  once (and only once) for each index in items. When the items collection\n  shrinks the DOM element created by the template is not destroyed--it is only\n  removed from the DOM and cached. When the items collection grows again those\n  cached elements will be reinserted into the DOM at their original index."], 
null)), $APP.cljs$cst$9144$h1, $APP.cljs.core.with_meta(cljs$cst$9145$attribute_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$774$declared, !0], null)), $APP.cljs.core.with_meta(cljs$cst$9146$element_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null))), 
$APP.cljs$cst$256$doc, "Returns true if elem is a managed element. Managed elements have\n  their children managed by Hoplon and implement the IHoplonElement protocol."], null)), cljs$cst$9147$br, cljs$cst$9148$bdi, $APP.cljs.core.with_meta(cljs$cst$9114$_set_styles_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$9104$hoplon_DOT_core_SLASH_IHoplonElement, $APP.cljs$cst$256$doc, "Sets styles on a managed element using native functionality.", $APP.cljs$cst$273$arglists, 
$APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$2441$kvs], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$9149$add_attributes_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2673$this, $APP.cljs$cst$3012$attr], null)))], null)), cljs$cst$9150$colgroup, $APP.cljs.core.with_meta(cljs$cst$9151$IHoplonAttribute, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2776$protocol_symbol, !0, $APP.cljs$cst$2777$protocol_info, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$463$methods, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs.core.with_meta(cljs$cst$9152$_attribute_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, 
null], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, cljs$cst$9095$elem, $APP.cljs$cst$15$value], null)], null)], null)], null), $APP.cljs$cst$465$sigs, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$9153$_attribute_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9152$_attribute_BANG_, 
$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, cljs$cst$9095$elem, $APP.cljs$cst$15$value], null)), $APP.cljs$cst$256$doc, null], null)], null), $APP.cljs$cst$2789$jsdoc, $APP.cljs.core.list("@interface")], null)), $APP.cljs$cst$5239$table, cljs$cst$9154$progress, cljs$cst$9155$html_meta, cljs$cst$9156$legend, cljs$cst$9157$spliced, cljs$cst$9158$prerendering_QMARK_, cljs$cst$9159$ol, 
cljs$cst$9160$address, $APP.cljs$cst$3037$label, cljs$cst$9161$template, $APP.cljs.core.with_meta(cljs$cst$9162$on_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$774$declared, !0], null)), $APP.cljs$cst$5245$link, $APP.cljs.core.with_meta(cljs$cst$9163$native_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[cljs$cst$9095$elem], null))), $APP.cljs$cst$256$doc, "Returns true if elem is a native element. Native elements' children\n  are not managed by Hoplon, and have not been extended with IHoplonElement."], null)), cljs$cst$9164$noscript, cljs$cst$9165$ins, $APP.cljs$cst$1253$p, $APP.cljs$cst$175$form, cljs$cst$9166$canvas, $APP.cljs.core.with_meta(cljs$cst$9167$native_node_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$64$node], null))), $APP.cljs$cst$256$doc, "Returns true if node is any native node. Same as native? but allows for nodes\n that are not elements."], null)), $APP.cljs.core.with_meta(cljs$cst$9168$_node, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$9169$hoplon_DOT_core_SLASH_IHoplonNode, $APP.cljs$cst$256$doc, null, $APP.cljs$cst$273$arglists, 
$APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null)))], null)), cljs$cst$9170$h2, $APP.cljs$cst$5571$head, cljs$cst$9171$rtc, $APP.cljs$cst$2229$b, cljs$cst$9172$_LT__BANG___, $APP.cljs$cst$56$base, $APP.cljs.core.with_meta(cljs$cst$9173$parse_args, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1246$args], null))), $APP.cljs$cst$256$doc, "Parses a sequence of element arguments into attributes and children."], null)), $APP.cljs.core.with_meta(cljs$cst$9174$remove_child_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2673$this, $APP.cljs$cst$5747$child], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$9175$when_dom, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$52$f], null))), $APP.cljs$cst$256$doc, "Executes a function once an element has been attached to the DOM."], 
null)), $APP.cljs$cst$5253$tr, $APP.cljs.core.with_meta(cljs$cst$9176$insert_before_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$158$new, $APP.cljs$cst$2383$existing], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$9116$_remove_child_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$466$protocol, cljs$cst$9104$hoplon_DOT_core_SLASH_IHoplonElement, $APP.cljs$cst$256$doc, "Removes `child` from `this` for the case of `this` being a managed element.", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$5747$child], null)))], null)), cljs$cst$9177$multicol, $APP.cljs$cst$5254$code, $APP.cljs$cst$4245$div, 
cljs$cst$9178$blockquote, cljs$cst$9179$hl_BANG_, cljs$cst$9180$picture, cljs$cst$9181$caption, cljs$cst$9182$area, cljs$cst$9183$title, cljs$cst$9184$dfn, cljs$cst$9185$tfoot, $APP.cljs.core.with_meta(cljs$cst$9117$_replace_child_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$9104$hoplon_DOT_core_SLASH_IHoplonElement, $APP.cljs$cst$256$doc, "Replaces `existing` with `new` in `this` for the case of `this` being a managed element.", $APP.cljs$cst$273$arglists, 
$APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$158$new, $APP.cljs$cst$2383$existing], null)))], null)), cljs$cst$9186$hgroup, $APP.cljs$cst$8798$header, $APP.cljs$cst$358$source, $APP.cljs.core.with_meta(cljs$cst$9187$append_child_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$5747$child], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$9188$do_watch, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$4881$ref, $APP.cljs$cst$52$f], 
null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$4881$ref, $APP.cljs$cst$1263$init, $APP.cljs$cst$52$f], null))), $APP.cljs$cst$256$doc, "Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher\n  f is a function of two arguments: the previous and next values. If init is\n  not provided the default (nil) will be used.", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, 
!1, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$4881$ref, $APP.cljs$cst$52$f], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$4881$ref, $APP.cljs$cst$1263$init, $APP.cljs$cst$52$f], 
null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$4881$ref, $APP.cljs$cst$52$f], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$4881$ref, $APP.cljs$cst$1263$init, $APP.cljs$cst$52$f], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), cljs$cst$9189$keygen, $APP.cljs.core.with_meta(cljs$cst$9190$__GT_hoplon, 
new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9095$elem], null)))], null)), cljs$cst$9191$footer, $APP.cljs.core.with_meta(cljs$cst$9192$elem_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$774$declared, !0], null)), cljs$cst$9193$hr, $APP.cljs$cst$5259$tbody, cljs$cst$9194$html_var, 
$APP.cljs.core.with_meta($APP.cljs$cst$9195$timeout, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f, $APP.cljs$cst$1235$t], null))), $APP.cljs$cst$256$doc, "Executes a fuction after a delay, if no delay is passed, 0 is used as a default.", 
$APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$52$f, $APP.cljs$cst$1235$t], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f, $APP.cljs$cst$1235$t], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), cljs$cst$9196$param, $APP.cljs.core.with_meta(cljs$cst$9152$_attribute_BANG_, 
new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$9197$hoplon_DOT_core_SLASH_IHoplonAttribute, $APP.cljs$cst$256$doc, null, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, cljs$cst$9095$elem, $APP.cljs$cst$15$value], null)))], null)), $APP.cljs$cst$5261$input, $APP.cljs.core.with_meta($APP.cljs$cst$9198$do_BANG_, 
new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$774$declared, !0], null)), cljs$cst$9199$cite, cljs$cst$9200$audio, cljs$cst$9201$rt, cljs$cst$9202$bdo, cljs$cst$9203$noframes, $APP.cljs.core.with_meta(cljs$cst$9204$add_children_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, 
cljs$cst$9205$kids], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$9206$_elem_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9095$elem, $APP.cljs$cst$2673$this, $APP.cljs$cst$15$value], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$9207$ns_dispatcher, new $APP.cljs.core.PersistentArrayMap(null, 
2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9208$_elem, $APP.cljs$cst$76$key, cljs$cst$9209$_value], null))), $APP.cljs$cst$256$doc, "A multi-method dispatch function.\n\n   Will dispatch against three arguments:\n\n     * `elem`  - the target DOM Element containing the attribute\n     * `key`   - the attribute keyword\n     * `value` - the attribute value\n\n   The ns-dispatcher will attempt to dispatch agains the key namespace or key.\n\n   ex. when key is `:namespace/key` will dispatch on `:namespace/default` otherwise `:namespace/key`"], 
null)), $APP.cljs$cst$1255$a, $APP.cljs$cst$14$s, $APP.cljs$cst$5377$style, $APP.cljs$cst$19$i, $APP.cljs.core.with_meta(cljs$cst$9210$IHoplonNode, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2776$protocol_symbol, !0, $APP.cljs$cst$2777$protocol_info, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$463$methods, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs.core.with_meta(cljs$cst$9168$_node, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, 
null], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null)], null)], null)], null), $APP.cljs$cst$465$sigs, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$9211$_node, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9168$_node, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null)), $APP.cljs$cst$256$doc, null], null)], null), $APP.cljs$cst$2789$jsdoc, $APP.cljs.core.list("@interface")], null)), $APP.cljs$cst$5263$button, cljs$cst$9212$img, $APP.cljs$cst$5264$th, $APP.cljs$cst$5265$ul, cljs$cst$9213$___GT_, cljs$cst$9214$mark, $APP.cljs.core.with_meta(cljs$cst$9215$html, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null))), $APP.cljs$cst$256$doc, "Updates and returns the document's `html` element in place.", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 0, $APP.cljs$cst$1379$max_fixed_arity, 0, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs.core.list($APP.cljs$cst$1246$args)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$9216$replace_child_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$158$new, $APP.cljs$cst$2383$existing], null)))], null)), cljs$cst$9217$dd, cljs$cst$9218$nav, $APP.cljs.core.with_meta(cljs$cst$9219$hoplonify_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[cljs$cst$9095$elem], null)))], null)), cljs$cst$9220$h3, $APP.cljs$cst$597$body, cljs$cst$9221$figure, cljs$cst$9222$textarea, cljs$cst$9223$menu, cljs$cst$9224$dialog, $APP.cljs.core.with_meta(cljs$cst$9115$_append_child_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$9104$hoplon_DOT_core_SLASH_IHoplonElement, $APP.cljs$cst$256$doc, "Appends `child` to `this` for the case of `this` being a managed element.", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$5747$child], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$9225$$text, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$774$declared, !0], null)), cljs$cst$9226$html_time, cljs$cst$9227$shadow, $APP.cljs$cst$4748$script, $APP.cljs.core.with_meta(cljs$cst$9228$kw_dispatcher, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
$APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9208$_elem, $APP.cljs$cst$76$key, cljs$cst$9209$_value], null))), $APP.cljs$cst$256$doc, "A multi-method dispatch function.\n\n   Will dispatch against three arguments:\n\n     * `elem`  - the target DOM Element containing the attribute\n     * `key`   - the attribute keyword\n     * `value` - the attribute value\n\n   The kw-dispatcher will attempt to dispatch agains the key argument.\n\n   ex. when key is `:namespace/key` will dispatch on `:namespace/key`"], 
null)), cljs$cst$9229$samp, cljs$cst$9230$fieldset, cljs$cst$9231$video, cljs$cst$9232$td, cljs$cst$9233$iframe, cljs$cst$9234$rp, $APP.cljs$cst$2155$span, cljs$cst$9235$em, cljs$cst$9236$output, cljs$cst$9237$embed, cljs$cst$9238$wbr, $APP.cljs.core.with_meta(cljs$cst$9239$node_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2673$this], null)))], null)), cljs$cst$9240$h6, cljs$cst$9241$small, $APP.cljs.core.with_meta(cljs$cst$9242$_do_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9095$elem, $APP.cljs$cst$2673$this, $APP.cljs$cst$15$value], null)))], null))], [new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$272$name, cljs$cst$9243$hoplon_DOT_core_SLASH_u, $APP.cljs$cst$108$val, hoplon.core.u, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9244$hoplon_DOT_core_SLASH__on_BANG_, $APP.cljs$cst$108$val, hoplon.core._on_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9095$elem, $APP.cljs$cst$2673$this, $APP.cljs$cst$15$value], null))], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9245$hoplon_DOT_core_SLASH_dl, $APP.cljs$cst$108$val, hoplon.core.dl, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9246$hoplon_DOT_core_SLASH_set_styles_BANG_, $APP.cljs$cst$108$val, 
hoplon.core.set_styles_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$2441$kvs], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$2441$kvs], 
null))], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9247$hoplon_DOT_core_SLASH_li, $APP.cljs$cst$108$val, hoplon.core.li, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9248$hoplon_DOT_core_SLASH_html_map, $APP.cljs$cst$108$val, hoplon.core.html_map, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$272$name, cljs$cst$9249$hoplon_DOT_core_SLASH_article, $APP.cljs$cst$108$val, hoplon.core.article, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9250$hoplon_DOT_core_SLASH_main, $APP.cljs$cst$108$val, hoplon.core.main, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9251$hoplon_DOT_core_SLASH_pre, 
$APP.cljs$cst$108$val, hoplon.core.pre, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9252$hoplon_DOT_core_SLASH_datalist, $APP.cljs$cst$108$val, hoplon.core.datalist, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9253$hoplon_DOT_core_SLASH__hoplon_kids, $APP.cljs$cst$108$val, hoplon.core._hoplon_kids, 
$APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null)), $APP.cljs$cst$256$doc, "Returns the hoplon managed kids atom, or creates it if missing."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9254$hoplon_DOT_core_SLASH_$comment, $APP.cljs$cst$108$val, hoplon.core.$comment, 
$APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9255$hoplon_DOT_core_SLASH_normalize_class, $APP.cljs$cst$108$val, hoplon.core.normalize_class, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2441$kvs], null)), $APP.cljs$cst$256$doc, 
"Class normalization for attribute providers. Converts from strings and\n  sequences to hashmaps."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9256$hoplon_DOT_core_SLASH_summary, $APP.cljs$cst$108$val, hoplon.core.summary, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9257$hoplon_DOT_core_SLASH_aside, $APP.cljs$cst$108$val, hoplon.core.aside, 
$APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9258$hoplon_DOT_core_SLASH_meter, $APP.cljs$cst$108$val, hoplon.core.meter, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9259$hoplon_DOT_core_SLASH_track, $APP.cljs$cst$108$val, hoplon.core.track, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], 
null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9260$hoplon_DOT_core_SLASH_strong, $APP.cljs$cst$108$val, hoplon.core.strong, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9261$hoplon_DOT_core_SLASH__insert_before_BANG_, $APP.cljs$cst$108$val, hoplon.core._insert_before_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$158$new, $APP.cljs$cst$2383$existing], null)), $APP.cljs$cst$256$doc, "Inserts `existing` before `new` in `this` for the case of `this` being a managed element."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9262$hoplon_DOT_core_SLASH_figcaption, $APP.cljs$cst$108$val, hoplon.core.figcaption, $APP.cljs$cst$2$meta, 
$APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9104$hoplon_DOT_core_SLASH_IHoplonElement, $APP.cljs$cst$108$val, hoplon.core.IHoplonElement, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9263$hoplon_DOT_core_SLASH_ruby, $APP.cljs$cst$108$val, hoplon.core.ruby, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], 
null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9264$hoplon_DOT_core_SLASH_option, $APP.cljs$cst$108$val, hoplon.core.option, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9265$hoplon_DOT_core_SLASH_details, $APP.cljs$cst$108$val, hoplon.core.details, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$272$name, cljs$cst$9266$hoplon_DOT_core_SLASH_q, $APP.cljs$cst$108$val, hoplon.core.q, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9267$hoplon_DOT_core_SLASH_kbd, $APP.cljs$cst$108$val, hoplon.core.kbd, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9268$hoplon_DOT_core_SLASH_set_attributes_BANG_, 
$APP.cljs$cst$108$val, hoplon.core.set_attributes_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$2441$kvs], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v, $APP.cljs$cst$148$_AMPERSAND_, 
$APP.cljs$cst$2441$kvs], null))], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9269$hoplon_DOT_core_SLASH_select, $APP.cljs$cst$108$val, hoplon.core.select, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9270$hoplon_DOT_core_SLASH_abbr, $APP.cljs$cst$108$val, hoplon.core.abbr, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), 
new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9271$hoplon_DOT_core_SLASH_thead, $APP.cljs$cst$108$val, hoplon.core.thead, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9272$hoplon_DOT_core_SLASH_del, $APP.cljs$cst$108$val, hoplon.core.del, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
cljs$cst$9273$hoplon_DOT_core_SLASH_optgroup, $APP.cljs$cst$108$val, hoplon.core.optgroup, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9274$hoplon_DOT_core_SLASH_col, $APP.cljs$cst$108$val, hoplon.core.col, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9275$hoplon_DOT_core_SLASH_h4, $APP.cljs$cst$108$val, 
hoplon.core.h4, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9276$hoplon_DOT_core_SLASH_dt, $APP.cljs$cst$108$val, hoplon.core.dt, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9277$hoplon_DOT_core_SLASH_invoke_BANG_, $APP.cljs$cst$108$val, hoplon.core.invoke_BANG_, $APP.cljs$cst$2$meta, 
new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null))], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9088$hoplon_DOT_core_SLASH_add_initfn_BANG_, $APP.cljs$cst$108$val, hoplon.core.add_initfn_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f], null)), $APP.cljs$cst$256$doc, "Executes a function once the window load event is fired.\n\n   Or, if the page has already loaded, executes the function immediately."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9278$hoplon_DOT_core_SLASH_h5, $APP.cljs$cst$108$val, hoplon.core.h5, 
$APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9279$hoplon_DOT_core_SLASH_menuitem, $APP.cljs$cst$108$val, hoplon.core.menuitem, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9280$hoplon_DOT_core_SLASH_sup, $APP.cljs$cst$108$val, hoplon.core.sup, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], 
null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9281$hoplon_DOT_core_SLASH__set_attributes_BANG_, $APP.cljs$cst$108$val, hoplon.core._set_attributes_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$2441$kvs], null)), $APP.cljs$cst$256$doc, "Sets attributes on a managed element using native functionality."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9282$hoplon_DOT_core_SLASH_html_object, $APP.cljs$cst$108$val, hoplon.core.html_object, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9283$hoplon_DOT_core_SLASH_section, $APP.cljs$cst$108$val, hoplon.core.section, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$272$name, cljs$cst$9284$hoplon_DOT_core_SLASH_data, $APP.cljs$cst$108$val, hoplon.core.data, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9285$hoplon_DOT_core_SLASH_sub, $APP.cljs$cst$108$val, hoplon.core.sub, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9070$hoplon_DOT_core_SLASH_loop_tpl_STAR_, 
$APP.cljs$cst$108$val, hoplon.core.loop_tpl_STAR_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9142$items, cljs$cst$9143$tpl], null)), $APP.cljs$cst$256$doc, "Given a cell items containing a seqable collection, constructs a cell that\n  works like a fill vector. The template `tpl` is a function of one argument: the\n  formula cell containing the ith item in items. The tpl function is called\n  once (and only once) for each index in items. When the items collection\n  shrinks the DOM element created by the template is not destroyed--it is only\n  removed from the DOM and cached. When the items collection grows again those\n  cached elements will be reinserted into the DOM at their original index."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9286$hoplon_DOT_core_SLASH_h1, $APP.cljs$cst$108$val, hoplon.core.h1, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9287$hoplon_DOT_core_SLASH_attribute_QMARK_, $APP.cljs$cst$108$val, hoplon.core.attribute_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null))], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9288$hoplon_DOT_core_SLASH_element_QMARK_, $APP.cljs$cst$108$val, hoplon.core.element_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 
5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null)), $APP.cljs$cst$256$doc, "Returns true if elem is a managed element. Managed elements have\n  their children managed by Hoplon and implement the IHoplonElement protocol."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9289$hoplon_DOT_core_SLASH_br, $APP.cljs$cst$108$val, hoplon.core.br, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$272$name, cljs$cst$9290$hoplon_DOT_core_SLASH_bdi, $APP.cljs$cst$108$val, hoplon.core.bdi, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9291$hoplon_DOT_core_SLASH__set_styles_BANG_, $APP.cljs$cst$108$val, hoplon.core._set_styles_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$2441$kvs], null)), $APP.cljs$cst$256$doc, "Sets styles on a managed element using native functionality."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9292$hoplon_DOT_core_SLASH_add_attributes_BANG_, $APP.cljs$cst$108$val, hoplon.core.add_attributes_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$3012$attr], null))], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9293$hoplon_DOT_core_SLASH_colgroup, $APP.cljs$cst$108$val, hoplon.core.colgroup, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9197$hoplon_DOT_core_SLASH_IHoplonAttribute, $APP.cljs$cst$108$val, 
hoplon.core.IHoplonAttribute, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9294$hoplon_DOT_core_SLASH_table, $APP.cljs$cst$108$val, hoplon.core.table, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9295$hoplon_DOT_core_SLASH_progress, $APP.cljs$cst$108$val, hoplon.core.progress, $APP.cljs$cst$2$meta, 
$APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9296$hoplon_DOT_core_SLASH_html_meta, $APP.cljs$cst$108$val, hoplon.core.html_meta, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9297$hoplon_DOT_core_SLASH_legend, $APP.cljs$cst$108$val, hoplon.core.legend, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], 
null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9298$hoplon_DOT_core_SLASH_spliced, $APP.cljs$cst$108$val, hoplon.core.spliced, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9299$hoplon_DOT_core_SLASH_prerendering_QMARK_, $APP.cljs$cst$108$val, hoplon.core.prerendering_QMARK_, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$272$name, cljs$cst$9300$hoplon_DOT_core_SLASH_ol, $APP.cljs$cst$108$val, hoplon.core.ol, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9301$hoplon_DOT_core_SLASH_address, $APP.cljs$cst$108$val, hoplon.core.address, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9302$hoplon_DOT_core_SLASH_label, 
$APP.cljs$cst$108$val, hoplon.core.label, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9303$hoplon_DOT_core_SLASH_template, $APP.cljs$cst$108$val, hoplon.core.template, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9304$hoplon_DOT_core_SLASH_on_BANG_, $APP.cljs$cst$108$val, hoplon.core.on_BANG_, 
$APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9305$hoplon_DOT_core_SLASH_link, $APP.cljs$cst$108$val, hoplon.core.link, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9306$hoplon_DOT_core_SLASH_native_QMARK_, $APP.cljs$cst$108$val, hoplon.core.native_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9095$elem], null)), $APP.cljs$cst$256$doc, "Returns true if elem is a native element. Native elements' children\n  are not managed by Hoplon, and have not been extended with IHoplonElement."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9307$hoplon_DOT_core_SLASH_noscript, $APP.cljs$cst$108$val, 
hoplon.core.noscript, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9308$hoplon_DOT_core_SLASH_ins, $APP.cljs$cst$108$val, hoplon.core.ins, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9309$hoplon_DOT_core_SLASH_p, $APP.cljs$cst$108$val, hoplon.core.p, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], 
null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9310$hoplon_DOT_core_SLASH_form, $APP.cljs$cst$108$val, hoplon.core.form, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9311$hoplon_DOT_core_SLASH_canvas, $APP.cljs$cst$108$val, hoplon.core.canvas, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$272$name, cljs$cst$9312$hoplon_DOT_core_SLASH_native_node_QMARK_, $APP.cljs$cst$108$val, hoplon.core.native_node_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$64$node], null)), $APP.cljs$cst$256$doc, "Returns true if node is any native node. Same as native? but allows for nodes\n that are not elements."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9313$hoplon_DOT_core_SLASH__node, $APP.cljs$cst$108$val, hoplon.core._node, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null)), $APP.cljs$cst$256$doc, null], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$272$name, cljs$cst$9314$hoplon_DOT_core_SLASH_h2, $APP.cljs$cst$108$val, hoplon.core.h2, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9315$hoplon_DOT_core_SLASH_head, $APP.cljs$cst$108$val, hoplon.core.head, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9316$hoplon_DOT_core_SLASH_rtc, 
$APP.cljs$cst$108$val, hoplon.core.rtc, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9317$hoplon_DOT_core_SLASH_b, $APP.cljs$cst$108$val, hoplon.core.b, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9318$hoplon_DOT_core_SLASH__LT__BANG___, $APP.cljs$cst$108$val, hoplon.core._LT__BANG___, 
$APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9319$hoplon_DOT_core_SLASH_base, $APP.cljs$cst$108$val, hoplon.core.base, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9067$hoplon_DOT_core_SLASH_parse_args, $APP.cljs$cst$108$val, hoplon.core.parse_args, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1246$args], null)), $APP.cljs$cst$256$doc, "Parses a sequence of element arguments into attributes and children."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9320$hoplon_DOT_core_SLASH_remove_child_BANG_, $APP.cljs$cst$108$val, hoplon.core.remove_child_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$5747$child], null))], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9084$hoplon_DOT_core_SLASH_when_dom, $APP.cljs$cst$108$val, hoplon.core.when_dom, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$52$f], null)), $APP.cljs$cst$256$doc, "Executes a function once an element has been attached to the DOM."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9321$hoplon_DOT_core_SLASH_tr, $APP.cljs$cst$108$val, hoplon.core.tr, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
cljs$cst$9322$hoplon_DOT_core_SLASH_insert_before_BANG_, $APP.cljs$cst$108$val, hoplon.core.insert_before_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$158$new, $APP.cljs$cst$2383$existing], null))], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9323$hoplon_DOT_core_SLASH__remove_child_BANG_, 
$APP.cljs$cst$108$val, hoplon.core._remove_child_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$5747$child], null)), $APP.cljs$cst$256$doc, "Removes `child` from `this` for the case of `this` being a managed element."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
cljs$cst$9324$hoplon_DOT_core_SLASH_multicol, $APP.cljs$cst$108$val, hoplon.core.multicol, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9325$hoplon_DOT_core_SLASH_code, $APP.cljs$cst$108$val, hoplon.core.code, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9326$hoplon_DOT_core_SLASH_div, 
$APP.cljs$cst$108$val, hoplon.core.div, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9327$hoplon_DOT_core_SLASH_blockquote, $APP.cljs$cst$108$val, hoplon.core.blockquote, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9328$hoplon_DOT_core_SLASH_hl_BANG_, $APP.cljs$cst$108$val, hoplon.core.hl_BANG_, 
$APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9329$hoplon_DOT_core_SLASH_picture, $APP.cljs$cst$108$val, hoplon.core.picture, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9330$hoplon_DOT_core_SLASH_caption, $APP.cljs$cst$108$val, hoplon.core.caption, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], 
null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9331$hoplon_DOT_core_SLASH_area, $APP.cljs$cst$108$val, hoplon.core.area, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9332$hoplon_DOT_core_SLASH_title, $APP.cljs$cst$108$val, hoplon.core.title, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$272$name, cljs$cst$9333$hoplon_DOT_core_SLASH_dfn, $APP.cljs$cst$108$val, hoplon.core.dfn, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9334$hoplon_DOT_core_SLASH_tfoot, $APP.cljs$cst$108$val, hoplon.core.tfoot, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9335$hoplon_DOT_core_SLASH__replace_child_BANG_, 
$APP.cljs$cst$108$val, hoplon.core._replace_child_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$158$new, $APP.cljs$cst$2383$existing], null)), $APP.cljs$cst$256$doc, "Replaces `existing` with `new` in `this` for the case of `this` being a managed element."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$272$name, cljs$cst$9336$hoplon_DOT_core_SLASH_hgroup, $APP.cljs$cst$108$val, hoplon.core.hgroup, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9337$hoplon_DOT_core_SLASH_header, $APP.cljs$cst$108$val, hoplon.core.header, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9338$hoplon_DOT_core_SLASH_source, 
$APP.cljs$cst$108$val, hoplon.core.source, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9339$hoplon_DOT_core_SLASH_append_child_BANG_, $APP.cljs$cst$108$val, hoplon.core.append_child_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2673$this, $APP.cljs$cst$5747$child], null))], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9340$hoplon_DOT_core_SLASH_do_watch, $APP.cljs$cst$108$val, hoplon.core.do_watch, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$4881$ref, $APP.cljs$cst$52$f], null), 
new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$4881$ref, $APP.cljs$cst$1263$init, $APP.cljs$cst$52$f], null)), $APP.cljs$cst$256$doc, "Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher\n  f is a function of two arguments: the previous and next values. If init is\n  not provided the default (nil) will be used."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9341$hoplon_DOT_core_SLASH_keygen, 
$APP.cljs$cst$108$val, hoplon.core.keygen, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9342$hoplon_DOT_core_SLASH___GT_hoplon, $APP.cljs$cst$108$val, hoplon.core.__GT_hoplon, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9095$elem], 
null))], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9343$hoplon_DOT_core_SLASH_footer, $APP.cljs$cst$108$val, hoplon.core.footer, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9344$hoplon_DOT_core_SLASH_elem_BANG_, $APP.cljs$cst$108$val, hoplon.core.elem_BANG_, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$272$name, cljs$cst$9345$hoplon_DOT_core_SLASH_hr, $APP.cljs$cst$108$val, hoplon.core.hr, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9346$hoplon_DOT_core_SLASH_tbody, $APP.cljs$cst$108$val, hoplon.core.tbody, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9347$hoplon_DOT_core_SLASH_html_var, 
$APP.cljs$cst$108$val, hoplon.core.html_var, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9348$hoplon_DOT_core_SLASH_timeout, $APP.cljs$cst$108$val, hoplon.core.timeout, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f], 
null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f, $APP.cljs$cst$1235$t], null)), $APP.cljs$cst$256$doc, "Executes a fuction after a delay, if no delay is passed, 0 is used as a default."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9349$hoplon_DOT_core_SLASH_param, $APP.cljs$cst$108$val, hoplon.core.param, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), 
new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9350$hoplon_DOT_core_SLASH__attribute_BANG_, $APP.cljs$cst$108$val, hoplon.core._attribute_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, cljs$cst$9095$elem, $APP.cljs$cst$15$value], null)), $APP.cljs$cst$256$doc, null], null)], 
null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9351$hoplon_DOT_core_SLASH_input, $APP.cljs$cst$108$val, hoplon.core.input, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9069$hoplon_DOT_core_SLASH_do_BANG_, $APP.cljs$cst$108$val, hoplon.core.do_BANG_, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$272$name, cljs$cst$9352$hoplon_DOT_core_SLASH_cite, $APP.cljs$cst$108$val, hoplon.core.cite, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9353$hoplon_DOT_core_SLASH_audio, $APP.cljs$cst$108$val, hoplon.core.audio, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9354$hoplon_DOT_core_SLASH_rt, 
$APP.cljs$cst$108$val, hoplon.core.rt, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9355$hoplon_DOT_core_SLASH_bdo, $APP.cljs$cst$108$val, hoplon.core.bdo, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9356$hoplon_DOT_core_SLASH_noframes, $APP.cljs$cst$108$val, hoplon.core.noframes, $APP.cljs$cst$2$meta, 
$APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9357$hoplon_DOT_core_SLASH_add_children_BANG_, $APP.cljs$cst$108$val, hoplon.core.add_children_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, cljs$cst$9205$kids], null))], null)], 
null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9358$hoplon_DOT_core_SLASH__elem_BANG_, $APP.cljs$cst$108$val, hoplon.core._elem_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9095$elem, $APP.cljs$cst$2673$this, $APP.cljs$cst$15$value], null))], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$272$name, cljs$cst$9359$hoplon_DOT_core_SLASH_ns_dispatcher, $APP.cljs$cst$108$val, hoplon.core.ns_dispatcher, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9208$_elem, $APP.cljs$cst$76$key, cljs$cst$9209$_value], null)), $APP.cljs$cst$256$doc, "A multi-method dispatch function.\n\n   Will dispatch against three arguments:\n\n     * `elem`  - the target DOM Element containing the attribute\n     * `key`   - the attribute keyword\n     * `value` - the attribute value\n\n   The ns-dispatcher will attempt to dispatch agains the key namespace or key.\n\n   ex. when key is `:namespace/key` will dispatch on `:namespace/default` otherwise `:namespace/key`"], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9360$hoplon_DOT_core_SLASH_a, $APP.cljs$cst$108$val, hoplon.core.a, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9361$hoplon_DOT_core_SLASH_s, $APP.cljs$cst$108$val, hoplon.core.s, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, 
[$APP.cljs$cst$272$name, cljs$cst$9362$hoplon_DOT_core_SLASH_style, $APP.cljs$cst$108$val, hoplon.core.style, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9363$hoplon_DOT_core_SLASH_i, $APP.cljs$cst$108$val, hoplon.core.i, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9169$hoplon_DOT_core_SLASH_IHoplonNode, 
$APP.cljs$cst$108$val, hoplon.core.IHoplonNode, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9364$hoplon_DOT_core_SLASH_button, $APP.cljs$cst$108$val, hoplon.core.button, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9365$hoplon_DOT_core_SLASH_img, $APP.cljs$cst$108$val, hoplon.core.img, 
$APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9366$hoplon_DOT_core_SLASH_th, $APP.cljs$cst$108$val, hoplon.core.th, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9367$hoplon_DOT_core_SLASH_ul, $APP.cljs$cst$108$val, hoplon.core.ul, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], 
null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9368$hoplon_DOT_core_SLASH____GT_, $APP.cljs$cst$108$val, hoplon.core.___GT_, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9369$hoplon_DOT_core_SLASH_mark, $APP.cljs$cst$108$val, hoplon.core.mark, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$272$name, cljs$cst$9370$hoplon_DOT_core_SLASH_html, $APP.cljs$cst$108$val, hoplon.core.html, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null)), $APP.cljs$cst$256$doc, "Updates and returns the document's `html` element in place."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$272$name, cljs$cst$9371$hoplon_DOT_core_SLASH_replace_child_BANG_, $APP.cljs$cst$108$val, hoplon.core.replace_child_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$158$new, $APP.cljs$cst$2383$existing], null))], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, 
[$APP.cljs$cst$272$name, cljs$cst$9372$hoplon_DOT_core_SLASH_dd, $APP.cljs$cst$108$val, hoplon.core.dd, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9373$hoplon_DOT_core_SLASH_nav, $APP.cljs$cst$108$val, hoplon.core.nav, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9374$hoplon_DOT_core_SLASH_hoplonify_BANG_, 
$APP.cljs$cst$108$val, hoplon.core.hoplonify_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9095$elem], null))], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9375$hoplon_DOT_core_SLASH_h3, $APP.cljs$cst$108$val, hoplon.core.h3, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], 
null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9376$hoplon_DOT_core_SLASH_body, $APP.cljs$cst$108$val, hoplon.core.body, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9377$hoplon_DOT_core_SLASH_figure, $APP.cljs$cst$108$val, hoplon.core.figure, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$272$name, cljs$cst$9378$hoplon_DOT_core_SLASH_textarea, $APP.cljs$cst$108$val, hoplon.core.textarea, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9379$hoplon_DOT_core_SLASH_menu, $APP.cljs$cst$108$val, hoplon.core.menu, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9380$hoplon_DOT_core_SLASH_dialog, 
$APP.cljs$cst$108$val, hoplon.core.dialog, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9381$hoplon_DOT_core_SLASH__append_child_BANG_, $APP.cljs$cst$108$val, hoplon.core._append_child_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2673$this, $APP.cljs$cst$5747$child], null)), $APP.cljs$cst$256$doc, "Appends `child` to `this` for the case of `this` being a managed element."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9382$hoplon_DOT_core_SLASH_$text, $APP.cljs$cst$108$val, hoplon.core.$text, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9383$hoplon_DOT_core_SLASH_html_time, 
$APP.cljs$cst$108$val, hoplon.core.html_time, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9384$hoplon_DOT_core_SLASH_shadow, $APP.cljs$cst$108$val, hoplon.core.shadow, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9385$hoplon_DOT_core_SLASH_script, $APP.cljs$cst$108$val, hoplon.core.script, 
$APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9386$hoplon_DOT_core_SLASH_kw_dispatcher, $APP.cljs$cst$108$val, hoplon.core.kw_dispatcher, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9208$_elem, $APP.cljs$cst$76$key, cljs$cst$9209$_value], 
null)), $APP.cljs$cst$256$doc, "A multi-method dispatch function.\n\n   Will dispatch against three arguments:\n\n     * `elem`  - the target DOM Element containing the attribute\n     * `key`   - the attribute keyword\n     * `value` - the attribute value\n\n   The kw-dispatcher will attempt to dispatch agains the key argument.\n\n   ex. when key is `:namespace/key` will dispatch on `:namespace/key`"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9387$hoplon_DOT_core_SLASH_samp, 
$APP.cljs$cst$108$val, hoplon.core.samp, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9388$hoplon_DOT_core_SLASH_fieldset, $APP.cljs$cst$108$val, hoplon.core.fieldset, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9389$hoplon_DOT_core_SLASH_video, $APP.cljs$cst$108$val, hoplon.core.video, 
$APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9390$hoplon_DOT_core_SLASH_td, $APP.cljs$cst$108$val, hoplon.core.td, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9391$hoplon_DOT_core_SLASH_iframe, $APP.cljs$cst$108$val, hoplon.core.iframe, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], 
null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9392$hoplon_DOT_core_SLASH_rp, $APP.cljs$cst$108$val, hoplon.core.rp, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9393$hoplon_DOT_core_SLASH_span, $APP.cljs$cst$108$val, hoplon.core.span, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, 
[$APP.cljs$cst$272$name, cljs$cst$9394$hoplon_DOT_core_SLASH_em, $APP.cljs$cst$108$val, hoplon.core.em, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9395$hoplon_DOT_core_SLASH_output, $APP.cljs$cst$108$val, hoplon.core.output, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9396$hoplon_DOT_core_SLASH_embed, 
$APP.cljs$cst$108$val, hoplon.core.embed, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9397$hoplon_DOT_core_SLASH_wbr, $APP.cljs$cst$108$val, hoplon.core.wbr, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9398$hoplon_DOT_core_SLASH_node_QMARK_, $APP.cljs$cst$108$val, hoplon.core.node_QMARK_, 
$APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null))], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9399$hoplon_DOT_core_SLASH_h6, $APP.cljs$cst$108$val, hoplon.core.h6, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$272$name, cljs$cst$9400$hoplon_DOT_core_SLASH_small, $APP.cljs$cst$108$val, hoplon.core.small, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9401$hoplon_DOT_core_SLASH__do_BANG_, $APP.cljs$cst$108$val, hoplon.core._do_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9095$elem, $APP.cljs$cst$2673$this, $APP.cljs$cst$15$value], null))], null)], null)]), $APP.sci.configs.hoplon.hoplon.hns), $APP.cljs$cst$2028$text, function() {
  var $new_m__32782__auto__$jscomp$99_ns__32777__auto__$$ = $APP.sci.configs.hoplon.hoplon.hns, $name__32781__auto__$jscomp$99_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.hoplon.text;
  }, cljs$cst$9402$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_text, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9403$sci_DOT_configs_DOT_hoplon_DOT_hoplon, $APP.cljs$cst$2028$text, !0, "sci/configs/hoplon/hoplon.cljs", 
  17, 1, 208, 208, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$175$form], null)), "Creates a DOM Text node and binds its text content to a formula created via\n  string interpolation, so the Text node updates with the formula.", $APP.cljs.core.truth_($APP.sci.configs.hoplon.hoplon.text) ? $APP.sci.configs.hoplon.hoplon.text.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$99_var__32778__auto__$$), 
  $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$99_var__32778__auto__$$);
  $name__32781__auto__$jscomp$99_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$99_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$99_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$99_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$99_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$99_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$99_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$99_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$99_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$99_ns__32777__auto__$$);
}(), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$9095$elem, function() {
  var $new_m__32782__auto__$jscomp$100_ns__32777__auto__$$ = $APP.sci.configs.hoplon.hoplon.hns, $name__32781__auto__$jscomp$100_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.hoplon.elem;
  }, cljs$cst$9404$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_elem, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9403$sci_DOT_configs_DOT_hoplon_DOT_hoplon, cljs$cst$9095$elem, 
  !0, "sci/configs/hoplon/hoplon.cljs", 17, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$9405$bind, $APP.cljs$cst$597$body)], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$9405$bind, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 52, 52, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, 
  $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$9405$bind, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), "Create an anonymous custom element.", $APP.cljs.core.truth_($APP.sci.configs.hoplon.hoplon.elem) ? $APP.sci.configs.hoplon.hoplon.elem.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$100_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$100_var__32778__auto__$$);
  $name__32781__auto__$jscomp$100_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$100_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$100_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$100_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$100_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$100_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$100_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$100_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$100_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$100_ns__32777__auto__$$);
}(), cljs$cst$9406$defelem, function() {
  var $new_m__32782__auto__$jscomp$101_ns__32777__auto__$$ = $APP.sci.configs.hoplon.hoplon.hns, $name__32781__auto__$jscomp$101_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.hoplon.defelem;
  }, cljs$cst$9407$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_defelem, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9403$sci_DOT_configs_DOT_hoplon_DOT_hoplon, cljs$cst$9406$defelem, 
  !0, "sci/configs/hoplon/hoplon.cljs", 20, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$7$name, $APP.cljs$cst$1238$forms)], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$7$name, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1238$forms], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 63, 63, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, 
  $APP.cljs$cst$7$name, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1238$forms], null)), "Defines an element function.\n\n  An element function creates a DOM Element (parent) given two arguments:\n\n    * `attrs` - a number of key-value pairs for attributes and their values\n    * `kids` - a sequence of DOM Elements to be appended/used inside\n\n  The returned DOM Element is itself a function which can accept more\n  attributes and child elements.", $APP.cljs.core.truth_($APP.sci.configs.hoplon.hoplon.defelem) ? 
  $APP.sci.configs.hoplon.hoplon.defelem.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$101_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$101_var__32778__auto__$$);
  $name__32781__auto__$jscomp$101_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$101_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$101_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$101_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$101_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$101_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$101_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$101_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$101_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$101_ns__32777__auto__$$);
}(), cljs$cst$9408$defattr, function() {
  var $new_m__32782__auto__$jscomp$102_ns__32777__auto__$$ = $APP.sci.configs.hoplon.hoplon.hns, $name__32781__auto__$jscomp$102_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.hoplon.defattr;
  }, cljs$cst$9409$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_defattr, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9403$sci_DOT_configs_DOT_hoplon_DOT_hoplon, cljs$cst$9408$defattr, 
  !0, "sci/configs/hoplon/hoplon.cljs", 20, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$7$name, $APP.cljs$cst$1238$forms)], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$7$name, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1238$forms], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 78, 78, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, 
  $APP.cljs$cst$7$name, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1238$forms], null)), "Defines an attribute function.\n\n  An element attribute is a function given three arguments:\n\n    * `elem` - the target DOM Element containing the attribute\n    * `key` - the attribute keyword or symbol\n    * `value` - the attribute value\n\n  The attribute function is called whenever the value argument changes.", $APP.cljs.core.truth_($APP.sci.configs.hoplon.hoplon.defattr) ? $APP.sci.configs.hoplon.hoplon.defattr.cljs$lang$test : 
  null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$102_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$102_var__32778__auto__$$);
  $name__32781__auto__$jscomp$102_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$102_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$102_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$102_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$102_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$102_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$102_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$102_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$102_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$102_ns__32777__auto__$$);
}(), cljs$cst$9410$safe_deref, function() {
  var $new_m__32782__auto__$jscomp$103_ns__32777__auto__$$ = $APP.sci.configs.hoplon.hoplon.hns, $name__32781__auto__$jscomp$103_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.hoplon.safe_deref;
  }, cljs$cst$9411$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_safe_deref, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$271$private, $APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [!0, cljs$cst$9403$sci_DOT_configs_DOT_hoplon_DOT_hoplon, cljs$cst$9410$safe_deref, 
  !0, "sci/configs/hoplon/hoplon.cljs", 33, 1, 91, 91, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1245$expr], null)), null, $APP.cljs.core.truth_($APP.sci.configs.hoplon.hoplon.safe_deref) ? $APP.sci.configs.hoplon.hoplon.safe_deref.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$103_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$103_var__32778__auto__$$);
  $name__32781__auto__$jscomp$103_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$103_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$103_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$103_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$103_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$103_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$103_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$103_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$103_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$103_ns__32777__auto__$$);
}(), cljs$cst$9412$loop_tpl, function() {
  var $new_m__32782__auto__$jscomp$104_ns__32777__auto__$$ = $APP.sci.configs.hoplon.hoplon.hns, $name__32781__auto__$jscomp$104_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.hoplon.loop_tpl;
  }, cljs$cst$9413$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_loop_tpl, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9403$sci_DOT_configs_DOT_hoplon_DOT_hoplon, cljs$cst$9412$loop_tpl, 
  !0, "sci/configs/hoplon/hoplon.cljs", 21, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$1246$args)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 101, 101, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], 
  null)), "Template. Works identically to `for-tpl`, only expects a `:bindings`\n  attribute to accomodate the HTML HLisp representation:\n\n    (loop-tpl :bindings [x xs] ...)\n  ", $APP.cljs.core.truth_($APP.sci.configs.hoplon.hoplon.loop_tpl) ? $APP.sci.configs.hoplon.hoplon.loop_tpl.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$104_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$104_var__32778__auto__$$);
  $name__32781__auto__$jscomp$104_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$104_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$104_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$104_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$104_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$104_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$104_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$104_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$104_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$104_ns__32777__auto__$$);
}(), cljs$cst$9414$for_tpl, function() {
  var $new_m__32782__auto__$jscomp$105_ns__32777__auto__$$ = $APP.sci.configs.hoplon.hoplon.hns, $name__32781__auto__$jscomp$105_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.hoplon.for_tpl;
  }, cljs$cst$9415$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_for_tpl, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9403$sci_DOT_configs_DOT_hoplon_DOT_hoplon, cljs$cst$9414$for_tpl, !0, "sci/configs/hoplon/hoplon.cljs", 
  20, 1, 112, 112, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$375$bindings, cljs$cst$9142$items], null), $APP.cljs$cst$597$body], null)), "Template. Accepts a cell-binding and returns a cell containing a sequence of\n  elements:\n\n    (for-tpl [x xs] (span x))\n  ", $APP.cljs.core.truth_($APP.sci.configs.hoplon.hoplon.for_tpl) ? 
  $APP.sci.configs.hoplon.hoplon.for_tpl.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$105_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$105_var__32778__auto__$$);
  $name__32781__auto__$jscomp$105_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$105_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$105_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$105_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$105_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$105_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$105_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$105_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$105_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$105_ns__32777__auto__$$);
}(), cljs$cst$9416$if_tpl, function() {
  var $new_m__32782__auto__$jscomp$106_ns__32777__auto__$$ = $APP.sci.configs.hoplon.hoplon.hns, $name__32781__auto__$jscomp$106_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.hoplon.if_tpl;
  }, cljs$cst$9417$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_if_tpl, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9403$sci_DOT_configs_DOT_hoplon_DOT_hoplon, cljs$cst$9416$if_tpl, 
  !0, "sci/configs/hoplon/hoplon.cljs", 19, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 4, $APP.cljs$cst$1379$max_fixed_arity, 4, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, cljs$cst$9418$predicate, cljs$cst$9419$consequent, new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9420$alternative], null))], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, cljs$cst$9418$predicate, cljs$cst$9419$consequent, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9420$alternative], 
  null)], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 121, 121, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, cljs$cst$9418$predicate, cljs$cst$9419$consequent, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9420$alternative], null)], null)), 
  'Template. Accepts a `predicate` cell and returns a cell containing either\n  the element produced by `consequent` or `alternative`, depending on the value\n  of the predicate:\n\n    (if-tpl predicate (span "True") (span "False"))\n  ', $APP.cljs.core.truth_($APP.sci.configs.hoplon.hoplon.if_tpl) ? $APP.sci.configs.hoplon.hoplon.if_tpl.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$106_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$106_var__32778__auto__$$);
  $name__32781__auto__$jscomp$106_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$106_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$106_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$106_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$106_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$106_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$106_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$106_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$106_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$106_ns__32777__auto__$$);
}(), cljs$cst$9421$when_tpl, function() {
  var $new_m__32782__auto__$jscomp$107_ns__32777__auto__$$ = $APP.sci.configs.hoplon.hoplon.hns, $name__32781__auto__$jscomp$107_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.hoplon.when_tpl;
  }, cljs$cst$9422$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_when_tpl, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9403$sci_DOT_configs_DOT_hoplon_DOT_hoplon, cljs$cst$9421$when_tpl, 
  !0, "sci/configs/hoplon/hoplon.cljs", 21, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, cljs$cst$9418$predicate, $APP.cljs$cst$597$body)], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, cljs$cst$9418$predicate, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 134, 134, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, 
  $APP.cljs$cst$566$_AMPERSAND_env, cljs$cst$9418$predicate, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), 'Template. Accepts a `predicate` cell and returns a cell containing either\n  the element produced by `consequent` or nothing, depending on the value of\n  the predicate:\n\n    (when-tpl predicate (span "Value"))\n  ', $APP.cljs.core.truth_($APP.sci.configs.hoplon.hoplon.when_tpl) ? $APP.sci.configs.hoplon.hoplon.when_tpl.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$107_var__32778__auto__$$), 
  $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$107_var__32778__auto__$$);
  $name__32781__auto__$jscomp$107_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$107_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$107_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$107_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$107_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$107_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$107_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$107_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$107_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$107_ns__32777__auto__$$);
}(), cljs$cst$9423$cond_tpl, function() {
  var $new_m__32782__auto__$jscomp$108_ns__32777__auto__$$ = $APP.sci.configs.hoplon.hoplon.hns, $name__32781__auto__$jscomp$108_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.hoplon.cond_tpl;
  }, cljs$cst$9424$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_cond_tpl, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9403$sci_DOT_configs_DOT_hoplon_DOT_hoplon, cljs$cst$9423$cond_tpl, 
  !0, "sci/configs/hoplon/hoplon.cljs", 21, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$1243$clauses)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1243$clauses], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 144, 144, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1243$clauses], 
  null)), 'Template. Accepts a number of `clauses` cell-template pairs and returns a\n  cell with the value produced by the matching clause:\n\n    (cond-tpl\n      clause-a (span "A")\n      clause-b (span "B")\n      :else    (span "Default"))\n  ', $APP.cljs.core.truth_($APP.sci.configs.hoplon.hoplon.cond_tpl) ? $APP.sci.configs.hoplon.hoplon.cond_tpl.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$108_var__32778__auto__$$), $m__32780__auto__$$ = 
  $APP.cljs.core.meta($name__32781__auto__$jscomp$108_var__32778__auto__$$);
  $name__32781__auto__$jscomp$108_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$108_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$108_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$108_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$108_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$108_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$108_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$108_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$108_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$108_ns__32777__auto__$$);
}(), cljs$cst$9425$case_tpl, function() {
  var $new_m__32782__auto__$jscomp$109_ns__32777__auto__$$ = $APP.sci.configs.hoplon.hoplon.hns, $name__32781__auto__$jscomp$109_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.hoplon.case_tpl;
  }, cljs$cst$9426$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_case_tpl, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9403$sci_DOT_configs_DOT_hoplon_DOT_hoplon, cljs$cst$9425$case_tpl, 
  !0, "sci/configs/hoplon/hoplon.cljs", 21, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$1245$expr, $APP.cljs$cst$1243$clauses)], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$1245$expr, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1243$clauses], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 162, 162, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, 
  $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$1245$expr, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1243$clauses], null)), 'Template. Accepts an `expr` cell and a number of `clauses` and returns a\n  cell with the value produced by the matching clause:\n\n    (case-tpl expr\n      :a (span "A")\n      :b (span "B")\n      (span "Default"))\n\n  ', $APP.cljs.core.truth_($APP.sci.configs.hoplon.hoplon.case_tpl) ? $APP.sci.configs.hoplon.hoplon.case_tpl.cljs$lang$test : null])), $val__32779__auto__$$ = 
  $APP.cljs.core.deref($name__32781__auto__$jscomp$109_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$109_var__32778__auto__$$);
  $name__32781__auto__$jscomp$109_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$109_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$109_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$109_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$109_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$109_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$109_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$109_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$109_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$109_ns__32777__auto__$$);
}(), cljs$cst$9427$with_dom, function() {
  var $new_m__32782__auto__$jscomp$110_ns__32777__auto__$$ = $APP.sci.configs.hoplon.hoplon.hns, $name__32781__auto__$jscomp$110_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.hoplon.with_dom;
  }, cljs$cst$9428$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_with_dom, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9403$sci_DOT_configs_DOT_hoplon_DOT_hoplon, cljs$cst$9427$with_dom, 
  !0, "sci/configs/hoplon/hoplon.cljs", 21, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, cljs$cst$9095$elem, $APP.cljs$cst$597$body)], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, cljs$cst$9095$elem, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 181, 181, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, 
  cljs$cst$9095$elem, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), "Evaluates the body after elem has been inserted into the DOM.", $APP.cljs.core.truth_($APP.sci.configs.hoplon.hoplon.with_dom) ? $APP.sci.configs.hoplon.hoplon.with_dom.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$110_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$110_var__32778__auto__$$);
  $name__32781__auto__$jscomp$110_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$110_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$110_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$110_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$110_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$110_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$110_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$110_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$110_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$110_ns__32777__auto__$$);
}(), cljs$cst$9429$with_timeout, function() {
  var $new_m__32782__auto__$jscomp$111_ns__32777__auto__$$ = $APP.sci.configs.hoplon.hoplon.hns, $name__32781__auto__$jscomp$111_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.hoplon.with_timeout;
  }, cljs$cst$9430$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_with_timeout, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9403$sci_DOT_configs_DOT_hoplon_DOT_hoplon, cljs$cst$9429$with_timeout, 
  !0, "sci/configs/hoplon/hoplon.cljs", 25, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, cljs$cst$9431$msec, $APP.cljs$cst$597$body)], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, cljs$cst$9431$msec, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 186, 186, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, 
  cljs$cst$9431$msec, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), "Evaluates the body after msec milliseconds, asynchronously. Returns the\n  timeout ID which can be used to cancel the operation (see js/clearTimeout).", $APP.cljs.core.truth_($APP.sci.configs.hoplon.hoplon.with_timeout) ? $APP.sci.configs.hoplon.hoplon.with_timeout.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$111_var__32778__auto__$$), $m__32780__auto__$$ = 
  $APP.cljs.core.meta($name__32781__auto__$jscomp$111_var__32778__auto__$$);
  $name__32781__auto__$jscomp$111_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$111_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$111_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$111_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$111_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$111_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$111_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$111_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$111_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$111_ns__32777__auto__$$);
}(), cljs$cst$9432$with_interval, function() {
  var $new_m__32782__auto__$jscomp$112_ns__32777__auto__$$ = $APP.sci.configs.hoplon.hoplon.hns, $name__32781__auto__$jscomp$112_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.hoplon.with_interval;
  }, cljs$cst$9433$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_with_interval, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9403$sci_DOT_configs_DOT_hoplon_DOT_hoplon, cljs$cst$9432$with_interval, 
  !0, "sci/configs/hoplon/hoplon.cljs", 26, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, cljs$cst$9431$msec, $APP.cljs$cst$597$body)], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, cljs$cst$9431$msec, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 192, 192, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, 
  cljs$cst$9431$msec, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), "Evaluates the body every msec milliseconds, asynchronously. Returns the\n  interval ID which can be used to cancel the operation (see js/clearInterval).", $APP.cljs.core.truth_($APP.sci.configs.hoplon.hoplon.with_interval) ? $APP.sci.configs.hoplon.hoplon.with_interval.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$112_var__32778__auto__$$), $m__32780__auto__$$ = 
  $APP.cljs.core.meta($name__32781__auto__$jscomp$112_var__32778__auto__$$);
  $name__32781__auto__$jscomp$112_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$112_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$112_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$112_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$112_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$112_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$112_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$112_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$112_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$112_ns__32777__auto__$$);
}(), cljs$cst$9434$with_animation_frame, function() {
  var $new_m__32782__auto__$jscomp$113_ns__32777__auto__$$ = $APP.sci.configs.hoplon.hoplon.hns, $name__32781__auto__$jscomp$113_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.hoplon.with_animation_frame;
  }, cljs$cst$9435$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_with_animation_frame, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9403$sci_DOT_configs_DOT_hoplon_DOT_hoplon, cljs$cst$9434$with_animation_frame, 
  !0, "sci/configs/hoplon/hoplon.cljs", 33, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$597$body)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 198, 198, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], 
  null)), "Evaluates the body before the next browser repaint as requestAnimationFrame.", $APP.cljs.core.truth_($APP.sci.configs.hoplon.hoplon.with_animation_frame) ? $APP.sci.configs.hoplon.hoplon.with_animation_frame.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$113_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$113_var__32778__auto__$$);
  $name__32781__auto__$jscomp$113_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$113_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$113_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$113_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$113_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$113_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$113_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$113_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$113_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$113_ns__32777__auto__$$);
}(), cljs$cst$9436$with_init_BANG_, function() {
  var $new_m__32782__auto__$jscomp$114_ns__32777__auto__$$ = $APP.sci.configs.hoplon.hoplon.hns, $name__32781__auto__$jscomp$114_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.hoplon.with_init_BANG_;
  }, cljs$cst$9437$sci_DOT_configs_DOT_hoplon_DOT_hoplon_SLASH_with_init_BANG_, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9403$sci_DOT_configs_DOT_hoplon_DOT_hoplon, cljs$cst$9436$with_init_BANG_, 
  !0, "sci/configs/hoplon/hoplon.cljs", 23, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$597$body)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 203, 203, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], 
  null)), "Evaluates the body after Hoplon has completed constructing the page.", $APP.cljs.core.truth_($APP.sci.configs.hoplon.hoplon.with_init_BANG_) ? $APP.sci.configs.hoplon.hoplon.with_init_BANG_.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$114_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$114_var__32778__auto__$$);
  $name__32781__auto__$jscomp$114_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$114_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$114_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$114_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$114_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$114_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$114_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$114_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$114_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$114_ns__32777__auto__$$);
}()], 0));
$APP.sci.configs.hoplon.hoplon.config = new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$398$namespaces, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$9093$hoplon_DOT_core, $APP.sci.configs.hoplon.hoplon.hoplon_core_namespace], null)], null);
$APP.scittle.hoplon = {};
$APP.scittle.hoplon.init = function() {
  return $APP.scittle.core.register_plugin_BANG_(cljs$cst$9438$scittle_DOT_hoplon_SLASH_hoplon, $APP.sci.configs.hoplon.hoplon.config);
};
$APP.scittle.hoplon.init();

}).call(this);