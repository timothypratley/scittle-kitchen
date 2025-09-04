(function(){
'use strict';
var cljs$cst$5439$completions = new $APP.cljs.core.Keyword(null, "completions", "completions", -190930179), cljs$cst$5441$sci_DOT_nrepl_DOT_info_SLASH_success = new $APP.cljs.core.Keyword("sci.nrepl.info", "success", "sci.nrepl.info/success", -493835426), cljs$cst$5436$resolved__76211__auto__ = new $APP.cljs.core.Symbol(null, "resolved__76211__auto__", "resolved__76211__auto__", -936128367, null), cljs$cst$5450$load_file = new $APP.cljs.core.Keyword(null, "load-file", "load-file", -424586670), cljs$cst$5437$unqualified = 
new $APP.cljs.core.Keyword(null, "unqualified", "unqualified", -98904653), cljs$cst$5451$clone = new $APP.cljs.core.Keyword(null, "clone", "clone", 711747572), cljs$cst$5454$complete = new $APP.cljs.core.Keyword(null, "complete", "complete", -500388775), cljs$cst$5452$lookup = new $APP.cljs.core.Keyword(null, "lookup", "lookup", 1225356838), cljs$cst$5444$arglists_str = new $APP.cljs.core.Keyword(null, "arglists-str", "arglists-str", 1439431437), cljs$cst$5453$describe = new $APP.cljs.core.Keyword(null, 
"describe", "describe", 1369790582), cljs$cst$5449$ops = new $APP.cljs.core.Keyword(null, "ops", "ops", 1237330063), cljs$cst$5447$sci_DOT_nrepl_DOT_server_SLASH_error = new $APP.cljs.core.Keyword("sci.nrepl.server", "error", "sci.nrepl.server/error", 855827645), cljs$cst$5448$versions = new $APP.cljs.core.Keyword(null, "versions", "versions", 536521978), cljs$cst$5438$qualified = new $APP.cljs.core.Keyword(null, "qualified", "qualified", -2065109343), cljs$cst$5446$sci_DOT_nrepl_DOT_server_SLASH_success = 
new $APP.cljs.core.Keyword("sci.nrepl.server", "success", "sci.nrepl.server/success", -67357591), cljs$cst$5443$eldoc = new $APP.cljs.core.Keyword(null, "eldoc", "eldoc", -1321421900), cljs$cst$5445$send_fn = new $APP.cljs.core.Keyword(null, "send-fn", "send-fn", 351002041), cljs$cst$5442$sci_DOT_nrepl_DOT_info_SLASH_error = new $APP.cljs.core.Keyword("sci.nrepl.info", "error", "sci.nrepl.info/error", 1267042764);
$APP.sci.nrepl = {};
$APP.sci.nrepl.completions = {};
$APP.sci.nrepl.completions.goog$module$goog$object = $APP.goog.object;
$APP.sci.nrepl.completions.format = function($fmt_str$$, $x$$) {
  return $APP.clojure.string.replace($fmt_str$$, "%s", $x$$);
};
$APP.sci.nrepl.completions.fully_qualified_syms = function($ctx$$, $ns_sym$jscomp$16_sym_expr_sym_strs_syms$$) {
  $ns_sym$jscomp$16_sym_expr_sym_strs_syms$$ = $APP.sci.core.eval_string_STAR_($ctx$$, $APP.sci.nrepl.completions.format("(keys (ns-map '%s))", $ns_sym$jscomp$16_sym_expr_sym_strs_syms$$));
  $ns_sym$jscomp$16_sym_expr_sym_strs_syms$$ = $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__76208_SHARP_$$) {
    return ["`", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($p1__76208_SHARP_$$)].join("");
  }, $ns_sym$jscomp$16_sym_expr_sym_strs_syms$$);
  $ns_sym$jscomp$16_sym_expr_sym_strs_syms$$ = ["[", $APP.clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ", $ns_sym$jscomp$16_sym_expr_sym_strs_syms$$), "]"].join("");
  $ctx$$ = $APP.sci.core.eval_string_STAR_($ctx$$, $ns_sym$jscomp$16_sym_expr_sym_strs_syms$$);
  return $APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2(function($p1__76209_SHARP_$$) {
    return $APP.clojure.string.starts_with_QMARK_($APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($p1__76209_SHARP_$$), "nbb.internal");
  }, $ctx$$);
};
$APP.sci.nrepl.completions.ns_imports__GT_completions = function($ctx$jscomp$275_props$jscomp$6_temp__5825__auto__$$, $query_ns$$, $query$$) {
  $query$$ = $APP.clojure.string.split.cljs$core$IFn$_invoke$arity$2($query$$, /\//);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($query$$, 0, null);
  var $name_part$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($query$$, 1, null), $resolved$$ = $APP.sci.core.eval_string_STAR_($ctx$jscomp$275_props$jscomp$6_temp__5825__auto__$$, $APP.cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$412$cljs_DOT_core_SLASH_let, 
  null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, cljs$cst$5436$resolved__76211__auto__, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$1280$cljs_DOT_core_SLASH_resolve, 
  null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$167$quote, null, 1, null), new $APP.cljs.core.List(null, $query_ns$$, null, 1, null)))), null, 1, null)))), null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$781$cljs_DOT_core_SLASH_when_not, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$1281$cljs_DOT_core_SLASH_var_QMARK_, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$5436$resolved__76211__auto__, null, 1, null)))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, 
  cljs$cst$5436$resolved__76211__auto__, null, 1, null)], 0)))), null, 1, null)], 0))))], 0)));
  if ($APP.cljs.core.truth_($resolved$$) && ($ctx$jscomp$275_props$jscomp$6_temp__5825__auto__$$ = $APP.cljs.core.truth_($name_part$$) ? function() {
    var $ends_with_dot_QMARK__fields__$1$$ = $APP.clojure.string.ends_with_QMARK_($name_part$$, "."), $JSCompiler_temp_const$jscomp$1801_fields$$ = $APP.clojure.string.split.cljs$core$IFn$_invoke$arity$2($name_part$$, /\./);
    $ends_with_dot_QMARK__fields__$1$$ = $ends_with_dot_QMARK__fields__$1$$ ? $JSCompiler_temp_const$jscomp$1801_fields$$ : $APP.cljs.core.butlast($JSCompiler_temp_const$jscomp$1801_fields$$);
    $JSCompiler_temp_const$jscomp$1801_fields$$ = $APP.cljs.core.PersistentVector;
    var $JSCompiler_temp_const$$ = $APP.cljs.core.PersistentVector.EMPTY_NODE, $JSCompiler_temp_const$jscomp$0$$ = $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($query_ns$$);
    var $JSCompiler_temp$$ = $APP.cljs.core.seq($ends_with_dot_QMARK__fields__$1$$) ? [$APP.clojure.string.join.cljs$core$IFn$_invoke$arity$2(".", $ends_with_dot_QMARK__fields__$1$$), "."].join("") : null;
    return new $JSCompiler_temp_const$jscomp$1801_fields$$(null, 2, 5, $JSCompiler_temp_const$$, [[$JSCompiler_temp_const$jscomp$0$$, "/", $JSCompiler_temp$$].join(""), $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.sci.nrepl.completions.goog$module$goog$object.getValueByKeys, $resolved$$, $ends_with_dot_QMARK__fields__$1$$)], null);
  }() : new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [[$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($query_ns$$), "/"].join(""), $resolved$$], null), $APP.cljs.core.truth_($ctx$jscomp$275_props$jscomp$6_temp__5825__auto__$$))) {
    var $prefix$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($ctx$jscomp$275_props$jscomp$6_temp__5825__auto__$$, 0, null), $imported$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($ctx$jscomp$275_props$jscomp$6_temp__5825__auto__$$, 1, null);
    $ctx$jscomp$275_props$jscomp$6_temp__5825__auto__$$ = function() {
      for (var $obj$$ = $imported$$, $G__76266_props$$ = $APP.cljs.core.PersistentVector.EMPTY;;) {
        if ($APP.cljs.core.truth_($obj$$)) {
          var $G__76265$$ = Object.getPrototypeOf($obj$$);
          $G__76266_props$$ = $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($G__76266_props$$, Object.getOwnPropertyNames($obj$$));
          $obj$$ = $G__76265$$;
        } else {
          return $G__76266_props$$;
        }
      }
    }();
    return $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($k$$) {
      return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [null, [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($prefix$$), $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($k$$)].join("")], null);
    }, $ctx$jscomp$275_props$jscomp$6_temp__5825__auto__$$);
  }
  return null;
};
$APP.sci.nrepl.completions.match = function($_alias__GT_ns_sym_ns$$, $ns__GT_alias_or__5025__auto____$1$$, $pat$jscomp$1_query$$, $JSCompiler_temp_const$jscomp$1804_or__5025__auto__$$) {
  $_alias__GT_ns_sym_ns$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_temp_const$jscomp$1804_or__5025__auto__$$, 0, null);
  var $sym_name$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_temp_const$jscomp$1804_or__5025__auto__$$, 1, null), $JSCompiler_inline_result$jscomp$1805_and__5023__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_temp_const$jscomp$1804_or__5025__auto__$$, 2, null);
  $pat$jscomp$1_query$$ = $APP.cljs.core.re_pattern($pat$jscomp$1_query$$);
  $JSCompiler_temp_const$jscomp$1804_or__5025__auto__$$ = $APP.cljs.core;
  var $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$1804_or__5025__auto__$$.truth_;
  $JSCompiler_inline_result$jscomp$1805_and__5023__auto__$$ = ($JSCompiler_inline_result$jscomp$1805_and__5023__auto__$$ = $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs$cst$5437$unqualified, $JSCompiler_inline_result$jscomp$1805_and__5023__auto__$$)) ? $APP.cljs.core.re_find($pat$jscomp$1_query$$, $sym_name$$) : $JSCompiler_inline_result$jscomp$1805_and__5023__auto__$$;
  $JSCompiler_temp_const$jscomp$1804_or__5025__auto__$$ = $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$1804_or__5025__auto__$$, $JSCompiler_inline_result$jscomp$1805_and__5023__auto__$$) ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$_alias__GT_ns_sym_ns$$, $sym_name$$], null) : null;
  return $APP.cljs.core.truth_($JSCompiler_temp_const$jscomp$1804_or__5025__auto__$$) ? $JSCompiler_temp_const$jscomp$1804_or__5025__auto__$$ : $APP.cljs.core.truth_($_alias__GT_ns_sym_ns$$) ? ($ns__GT_alias_or__5025__auto____$1$$ = $APP.cljs.core.truth_($APP.cljs.core.re_find($pat$jscomp$1_query$$, [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($ns__GT_alias_or__5025__auto____$1$$, $APP.cljs.core.symbol.cljs$core$IFn$_invoke$arity$1($_alias__GT_ns_sym_ns$$))), 
  "/", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($sym_name$$)].join(""))) ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$_alias__GT_ns_sym_ns$$, [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($ns__GT_alias_or__5025__auto____$1$$, $APP.cljs.core.symbol.cljs$core$IFn$_invoke$arity$1($_alias__GT_ns_sym_ns$$))), "/", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($sym_name$$)].join("")], null) : 
  null, $APP.cljs.core.truth_($ns__GT_alias_or__5025__auto____$1$$) ? $ns__GT_alias_or__5025__auto____$1$$ : $APP.cljs.core.truth_($APP.cljs.core.re_find($pat$jscomp$1_query$$, [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($_alias__GT_ns_sym_ns$$), "/", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($sym_name$$)].join(""))) ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$_alias__GT_ns_sym_ns$$, [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($_alias__GT_ns_sym_ns$$), 
  "/", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($sym_name$$)].join("")], null) : null) : null;
};
$APP.sci.nrepl.completions.completions = function($ns_str$$) {
  var $map__76247__$1$$ = $APP.cljs.core.__destructure_map($ns_str$$);
  $ns_str$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76247__$1$$, $APP.cljs$cst$176$ns);
  var $ctx$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76247__$1$$, $APP.cljs$cst$588$ctx);
  try {
    var $sci_ns$$ = $APP.cljs.core.truth_($ns_str$$) ? $APP.sci.core.find_ns($ctx$$, $APP.cljs.core.symbol.cljs$core$IFn$_invoke$arity$1($ns_str$$)) : null, $bm__32790__auto__$$ = $APP.cljs.core.PersistentArrayMap.createAsIfByAssoc([$APP.sci.core.ns, $APP.cljs.core.truth_($sci_ns$$) ? $sci_ns$$ : $APP.cljs.core.deref($APP.sci.core.ns)]);
    $APP.sci.impl.vars.push_thread_bindings($bm__32790__auto__$$);
    try {
      var $temp__5823__auto__$$ = function() {
        var $or__5025__auto__$$ = $APP.cljs$cst$219$symbol.cljs$core$IFn$_invoke$arity$1($map__76247__$1$$);
        return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$1543$prefix.cljs$core$IFn$_invoke$arity$1($map__76247__$1$$);
      }();
      if ($APP.cljs.core.truth_($temp__5823__auto__$$)) {
        var $has_namespace_QMARK_$$ = $APP.clojure.string.includes_QMARK_($temp__5823__auto__$$, "/"), $query_ns$$ = $has_namespace_QMARK_$$ ? function() {
          var $G__76253_G__76253__$1$$ = $APP.clojure.string.split.cljs$core$IFn$_invoke$arity$2($temp__5823__auto__$$, /\//);
          $G__76253_G__76253__$1$$ = $G__76253_G__76253__$1$$ == null ? null : $APP.cljs.core.first($G__76253_G__76253__$1$$);
          return $G__76253_G__76253__$1$$ == null ? null : $APP.cljs.core.symbol.cljs$core$IFn$_invoke$arity$1($G__76253_G__76253__$1$$);
        }() : null, $from_current_ns$$ = $APP.sci.nrepl.completions.fully_qualified_syms($ctx$$, $APP.sci.core.eval_string_STAR_($ctx$$, "(ns-name *ns*)")), $from_current_ns__$1$$ = $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($sym$$) {
          return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.namespace($sym$$), $APP.cljs.core.name($sym$$), cljs$cst$5437$unqualified], null);
        }, $from_current_ns$$), $alias__GT_ns$$ = $APP.sci.core.eval_string_STAR_($ctx$$, "(let [m (ns-aliases *ns*)] (zipmap (keys m) (map ns-name (vals m))))"), $ns__GT_alias$$ = $APP.cljs.core.zipmap($APP.cljs.core.vals($alias__GT_ns$$), $APP.cljs.core.keys($alias__GT_ns$$)), $from_aliased_nss$$ = $APP.cljs.core.doall.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(function($alias$jscomp$11_syms$$) {
          var $ns$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($alias__GT_ns$$, $alias$jscomp$11_syms$$);
          $alias$jscomp$11_syms$$ = $APP.sci.core.eval_string_STAR_($ctx$$, $APP.sci.nrepl.completions.format("(keys (ns-publics '%s))", $ns$$));
          return $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($sym$$) {
            return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($ns$$), $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($sym$$), cljs$cst$5438$qualified], null);
          }, $alias$jscomp$11_syms$$);
        }, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.keys($alias__GT_ns$$)], 0))), $all_namespaces$$ = $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($ns$$) {
          return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($ns$$), null, cljs$cst$5438$qualified], null);
        }, $APP.sci.core.eval_string_STAR_($ctx$$, "(all-ns)")), $from_imports$$ = $has_namespace_QMARK_$$ ? $APP.sci.nrepl.completions.ns_imports__GT_completions($ctx$$, $query_ns$$, $temp__5823__auto__$$) : null, $fully_qualified_names$$ = $APP.cljs.core.truth_($from_imports$$) ? null : $has_namespace_QMARK_$$ ? function() {
          var $ns$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($alias__GT_ns$$, $query_ns$$, $query_ns$$), $syms$$ = $APP.sci.core.eval_string_STAR_($ctx$$, $APP.sci.nrepl.completions.format("(and (find-ns '%s)\n                                                                                         (keys (ns-publics '%s)))", $ns$$));
          return $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($sym$$) {
            return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($ns$$), $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($sym$$), cljs$cst$5438$qualified], null);
          }, $syms$$);
        }() : null, $svs$$ = $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic($from_current_ns__$1$$, $from_aliased_nss$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$all_namespaces$$, $fully_qualified_names$$], 0)), $completions$$ = $APP.cljs.core.keep.cljs$core$IFn$_invoke$arity$2(function($entry$$) {
          return $APP.sci.nrepl.completions.match($alias__GT_ns$$, $ns__GT_alias$$, $temp__5823__auto__$$, $entry$$);
        }, $svs$$), $completions__$1$$ = $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($completions$$, $from_imports$$), $completions__$2$$ = $APP.cljs.core.vec($APP.cljs.core.distinct.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($G__76264_name$$) {
          var $namespace$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__76264_name$$, 0, null);
          $G__76264_name$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__76264_name$$, 1, null);
          $G__76264_name$$ = new $APP.cljs.core.PersistentArrayMap(null, 1, ["candidate", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($G__76264_name$$)], null);
          return $APP.cljs.core.truth_($namespace$$) ? $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__76264_name$$, "ns", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($namespace$$)) : $G__76264_name$$;
        }, $completions__$1$$)));
        return new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5439$completions, $completions__$2$$, $APP.cljs$cst$109$status, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["done"], null)], null);
      }
      return new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$109$status, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["done"], null)], null);
    } finally {
      $APP.sci.impl.vars.pop_thread_bindings();
    }
  } catch ($e76248$$) {
    return console.error("ERROR", $e76248$$), new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5439$completions, $APP.cljs.core.PersistentVector.EMPTY, $APP.cljs$cst$109$status, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["done"], null)], null);
  }
};
$APP.sci.nrepl.info = {};
$APP.sci.nrepl.info.format_1 = function($fmt_str$$, $x$$) {
  return $APP.clojure.string.replace_first($fmt_str$$, "%s", $x$$);
};
$APP.sci.nrepl.info.info = function($G__76231__$2_code$jscomp$19_file$jscomp$12_ns_str$$) {
  var $ctx$jscomp$277_doc$$ = $APP.cljs.core.__destructure_map($G__76231__$2_code$jscomp$19_file$jscomp$12_ns_str$$);
  $G__76231__$2_code$jscomp$19_file$jscomp$12_ns_str$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($ctx$jscomp$277_doc$$, $APP.cljs$cst$176$ns);
  var $G__76231_G__76231__$1_kind$jscomp$26_sym$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($ctx$jscomp$277_doc$$, $APP.cljs$cst$242$sym);
  $ctx$jscomp$277_doc$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($ctx$jscomp$277_doc$$, $APP.cljs$cst$588$ctx);
  if ($APP.cljs.core.not($G__76231_G__76231__$1_kind$jscomp$26_sym$$)) {
    return new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$109$status, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["no-eldoc", "done"], null), $APP.cljs$cst$5440$err, "Message should contain a `sym`"], null);
  }
  $G__76231__$2_code$jscomp$19_file$jscomp$12_ns_str$$ = $APP.sci.nrepl.info.format_1($APP.sci.nrepl.info.format_1("(when-let [the-var (ns-resolve '%s '%s)]\n               (meta the-var))", $G__76231__$2_code$jscomp$19_file$jscomp$12_ns_str$$), $G__76231_G__76231__$1_kind$jscomp$26_sym$$);
  try {
    var $line$$ = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5441$sci_DOT_nrepl_DOT_info_SLASH_success, $APP.sci.core.eval_string_STAR_($ctx$jscomp$277_doc$$, $G__76231__$2_code$jscomp$19_file$jscomp$12_ns_str$$)], null);
  } catch ($e76223$$) {
    $line$$ = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5442$sci_DOT_nrepl_DOT_info_SLASH_error, $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($e76223$$)], null);
  }
  $G__76231_G__76231__$1_kind$jscomp$26_sym$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($line$$, 0, null);
  var $val$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($line$$, 1, null), $arglists$$ = $APP.cljs.core.__destructure_map($val$$);
  $ctx$jscomp$277_doc$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($arglists$$, $APP.cljs$cst$256$doc);
  $G__76231__$2_code$jscomp$19_file$jscomp$12_ns_str$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($arglists$$, $APP.cljs$cst$208$file);
  $line$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($arglists$$, $APP.cljs$cst$209$line);
  var $name$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($arglists$$, $APP.cljs$cst$272$name);
  $arglists$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($arglists$$, $APP.cljs$cst$273$arglists);
  return $APP.cljs.core.truth_($APP.cljs.core.truth_($name$$) ? $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($G__76231_G__76231__$1_kind$jscomp$26_sym$$, cljs$cst$5441$sci_DOT_nrepl_DOT_info_SLASH_success) : $name$$) ? ($G__76231_G__76231__$1_kind$jscomp$26_sym$$ = new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$176$ns, function() {
    var $G__76232__$1$$ = $val$$ == null ? null : $APP.cljs$cst$176$ns.cljs$core$IFn$_invoke$arity$1($val$$);
    return $G__76232__$1$$ == null ? null : $APP.cljs.core.ns_name($G__76232__$1$$);
  }(), $APP.cljs$cst$273$arglists, $APP.cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$arglists$$], 0)), cljs$cst$5443$eldoc, $APP.cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(function($p1__76216_SHARP_$$) {
    return $APP.cljs.core.mapv.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.str, $p1__76216_SHARP_$$);
  }, $arglists$$), cljs$cst$5444$arglists_str, $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.array, $arglists$$).join("\n"), $APP.cljs$cst$109$status, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["done"], null), $APP.cljs$cst$272$name, $name$$], null), $G__76231_G__76231__$1_kind$jscomp$26_sym$$ = $APP.cljs.core.truth_($ctx$jscomp$277_doc$$) ? $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__76231_G__76231__$1_kind$jscomp$26_sym$$, 
  $APP.cljs$cst$256$doc, $ctx$jscomp$277_doc$$) : $G__76231_G__76231__$1_kind$jscomp$26_sym$$, $G__76231__$2_code$jscomp$19_file$jscomp$12_ns_str$$ = $APP.cljs.core.truth_($G__76231__$2_code$jscomp$19_file$jscomp$12_ns_str$$) ? $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__76231_G__76231__$1_kind$jscomp$26_sym$$, $APP.cljs$cst$208$file, $G__76231__$2_code$jscomp$19_file$jscomp$12_ns_str$$) : $G__76231_G__76231__$1_kind$jscomp$26_sym$$, $APP.cljs.core.truth_($line$$) ? $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__76231__$2_code$jscomp$19_file$jscomp$12_ns_str$$, 
  $APP.cljs$cst$209$line, $line$$) : $G__76231__$2_code$jscomp$19_file$jscomp$12_ns_str$$) : new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$109$status, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["done", "no-eldoc"], null)], null);
};
$APP.sci.nrepl.server = {};
$APP.sci.nrepl.server._BANG_last_ns = $APP.cljs.core.volatile_BANG_($APP.cljs.core.deref($APP.sci.core.ns));
$APP.sci.nrepl.server.eval_string = function($res$jscomp$67_s$$) {
  var $bm__32790__auto__$$ = $APP.cljs.core.PersistentArrayMap.createAsIfByAssoc([$APP.sci.core.ns, $APP.cljs.core.deref($APP.sci.nrepl.server._BANG_last_ns)]);
  $APP.sci.impl.vars.push_thread_bindings($bm__32790__auto__$$);
  try {
    var $rdr$$ = $APP.sci.core.reader($res$jscomp$67_s$$);
    for ($res$jscomp$67_s$$ = null;;) {
      var $form$$ = $APP.sci.core.parse_next.cljs$core$IFn$_invoke$arity$2($APP.sci.ctx_store.get_ctx(), $rdr$$);
      if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$1348$sci_DOT_core_SLASH_eof, $form$$)) {
        return $APP.cljs.core.vreset_BANG_($APP.sci.nrepl.server._BANG_last_ns, $APP.cljs.core.deref($APP.sci.core.ns)), $res$jscomp$67_s$$;
      }
      $res$jscomp$67_s$$ = $APP.sci.core.eval_form($APP.sci.ctx_store.get_ctx(), $form$$);
    }
  } finally {
    $APP.sci.impl.vars.pop_thread_bindings();
  }
};
$APP.sci.nrepl.server.nrepl_websocket = function() {
  return window.ws_nrepl;
};
$APP.sci.nrepl.server.nrepl_reply = function($id$$, $map__76281__$1_p__76279$$) {
  var $map__76280__$1_send_fn$$ = $APP.cljs.core.__destructure_map($id$$);
  $id$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76280__$1_send_fn$$, $APP.cljs$cst$396$id);
  var $session$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76280__$1_send_fn$$, $APP.cljs$cst$3170$session);
  $map__76280__$1_send_fn$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76280__$1_send_fn$$, cljs$cst$5445$send_fn);
  $map__76281__$1_p__76279$$ = $APP.cljs.core.__destructure_map($map__76281__$1_p__76279$$);
  var $ns__$1$jscomp$10_or__5025__auto__$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76281__$1_p__76279$$, $APP.cljs$cst$176$ns);
  $ns__$1$jscomp$10_or__5025__auto__$$ = $APP.cljs.core.truth_($ns__$1$jscomp$10_or__5025__auto__$$) ? $ns__$1$jscomp$10_or__5025__auto__$$ : $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.deref($APP.sci.nrepl.server._BANG_last_ns));
  $id$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic($map__76281__$1_p__76279$$, $APP.cljs$cst$396$id, $id$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$3170$session, $session$$, $APP.cljs$cst$176$ns, $ns__$1$jscomp$10_or__5025__auto__$$], 0)), $APP.cljs$cst$588$ctx);
  return $APP.cljs.core.truth_($map__76280__$1_send_fn$$) ? $map__76280__$1_send_fn$$.cljs$core$IFn$_invoke$arity$1 ? $map__76280__$1_send_fn$$.cljs$core$IFn$_invoke$arity$1($id$$) : $map__76280__$1_send_fn$$.call(null, $id$$) : $APP.sci.nrepl.server.nrepl_websocket().send($APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($id$$));
};
$APP.sci.nrepl.server.handle_nrepl_eval = function($map__76286__$1_p__76285$$) {
  $map__76286__$1_p__76285$$ = $APP.cljs.core.__destructure_map($map__76286__$1_p__76285$$);
  var $G__76291__$1_code$jscomp$20_kind$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76286__$1_p__76285$$, $APP.cljs$cst$4963$code);
  try {
    var $val$$ = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5446$sci_DOT_nrepl_DOT_server_SLASH_success, $APP.sci.nrepl.server.eval_string($G__76291__$1_code$jscomp$20_kind$$)], null);
  } catch ($e76290$$) {
    $val$$ = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5447$sci_DOT_nrepl_DOT_server_SLASH_error, $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($e76290$$)], null);
  }
  $G__76291__$1_code$jscomp$20_kind$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($val$$, 0, null);
  $val$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($val$$, 1, null);
  $G__76291__$1_code$jscomp$20_kind$$ = $G__76291__$1_code$jscomp$20_kind$$ instanceof $APP.cljs.core.Keyword ? $G__76291__$1_code$jscomp$20_kind$$.fqn : null;
  switch($G__76291__$1_code$jscomp$20_kind$$) {
    case "sci.nrepl.server/success":
      return $APP.sci.nrepl.server.nrepl_reply($map__76286__$1_p__76285$$, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1429$value, $APP.cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$val$$], 0))], null)), $APP.sci.nrepl.server.nrepl_reply($map__76286__$1_p__76285$$, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$109$status, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
      ["done"], null)], null));
    case "sci.nrepl.server/error":
      return $APP.sci.nrepl.server.nrepl_reply($map__76286__$1_p__76285$$, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$5440$err, $APP.cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$val$$], 0))], null)), $APP.sci.nrepl.server.nrepl_reply($map__76286__$1_p__76285$$, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$611$ex, $APP.cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$val$$], 
      0)), $APP.cljs$cst$109$status, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["error", "done"], null)], null));
    default:
      throw Error(["No matching clause: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($G__76291__$1_code$jscomp$20_kind$$)].join(""));
  }
};
$APP.sci.nrepl.server.handle_nrepl_info = function($msg$$) {
  var $info$$ = $APP.sci.nrepl.info.info($APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($msg$$, $APP.cljs$cst$588$ctx, $APP.sci.ctx_store.get_ctx()));
  return $APP.sci.nrepl.server.nrepl_reply($msg$$, $info$$);
};
$APP.sci.nrepl.server.handle_describe = function($msg$$) {
  return $APP.sci.nrepl.server.nrepl_reply($msg$$, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$5448$versions, new $APP.cljs.core.PersistentArrayMap(null, 1, ["sci-nrepl", new $APP.cljs.core.PersistentArrayMap(null, 3, "major 0 minor 0 incremental 1".split(" "), null)], null), cljs$cst$5449$ops, $APP.cljs.core.zipmap($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.name, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.keys($APP.sci.nrepl.server.ops), 
  new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5450$load_file, null, cljs$cst$5451$clone, null], null), null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 1, ["close", null], null), null)], 0))), $APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY)), $APP.cljs$cst$109$status, new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["done"], null)], null));
};
$APP.sci.nrepl.server.ops = new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$603$eval, $APP.sci.nrepl.server.handle_nrepl_eval, $APP.cljs$cst$2224$info, $APP.sci.nrepl.server.handle_nrepl_info, cljs$cst$5443$eldoc, $APP.sci.nrepl.server.handle_nrepl_info, cljs$cst$5452$lookup, $APP.sci.nrepl.server.handle_nrepl_info, cljs$cst$5453$describe, $APP.sci.nrepl.server.handle_describe, cljs$cst$5454$complete, function($msg$$) {
  var $completions$$ = $APP.sci.nrepl.completions.completions($APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($msg$$, $APP.cljs$cst$588$ctx, $APP.sci.ctx_store.get_ctx()));
  return $APP.sci.nrepl.server.nrepl_reply($msg$$, $completions$$);
}], null);
$APP.sci.nrepl.server.handle_nrepl_message = function($msg$$) {
  var $G__76292$jscomp$inline_7280_temp__5823__auto__$$ = $APP.cljs$cst$2297$op.cljs$core$IFn$_invoke$arity$1($msg$$);
  $G__76292$jscomp$inline_7280_temp__5823__auto__$$ = $APP.sci.nrepl.server.ops.cljs$core$IFn$_invoke$arity$1 ? $APP.sci.nrepl.server.ops.cljs$core$IFn$_invoke$arity$1($G__76292$jscomp$inline_7280_temp__5823__auto__$$) : $APP.sci.nrepl.server.ops.call(null, $G__76292$jscomp$inline_7280_temp__5823__auto__$$);
  return $APP.cljs.core.truth_($G__76292$jscomp$inline_7280_temp__5823__auto__$$) ? $G__76292$jscomp$inline_7280_temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $G__76292$jscomp$inline_7280_temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1($msg$$) : $G__76292$jscomp$inline_7280_temp__5823__auto__$$.call(null, $msg$$) : $APP.sci.nrepl.server.nrepl_reply($msg$$, $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$msg$$, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$109$status, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["error", "done"], null), $APP.cljs$cst$5440$err, "unknown-op"], null)], 0)));
};
$APP.scittle.nrepl = {};
$APP.scittle.nrepl.ws_url = function($host$$, $port$$, $path$$) {
  return ["ws://", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($host$$), ":", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($port$$), "/", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($path$$)].join("");
};
var temp__5825__auto___76295 = window.SCITTLE_NREPL_WEBSOCKET_PORT;
if ($APP.cljs.core.truth_(temp__5825__auto___76295)) {
  var ws_port_76296 = temp__5825__auto___76295;
  window.ws_nrepl = new WebSocket($APP.scittle.nrepl.ws_url(window.location.hostname, ws_port_76296, "_nrepl"));
}
var temp__5825__auto___76297 = $APP.sci.nrepl.server.nrepl_websocket();
if ($APP.cljs.core.truth_(temp__5825__auto___76297)) {
  var ws_76298 = temp__5825__auto___76297;
  ws_76298.onmessage = function($event$$) {
    return $APP.sci.nrepl.server.handle_nrepl_message($APP.clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1($event$$.data));
  };
  ws_76298.onerror = function($event$$) {
    return console.log($event$$);
  };
}
;
}).call(this);