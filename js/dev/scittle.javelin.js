(function(){
'use strict';
var cljs$cst$8995$cljs_DOT_core_SLASH_IReset, cljs$cst$9023$cell_EQ_, cljs$cst$8991$cell_QMARK_, cljs$cst$9031$defc_EQ_, cljs$cst$9040$cell_doseq, cljs$cst$8966$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_dosync_STAR_, cljs$cst$8953$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_h, cljs$cst$8949$constant, cljs$cst$8985$constant_QMARK_, cljs$cst$8970$item__111642__auto__, cljs$cst$9009$javelin_DOT_core_SLASH_set_cell_BANG_, cljs$cst$9002$javelin_DOT_core_SLASH_lens, cljs$cst$9019$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_dosync, 
cljs$cst$8997$destroy_cell_BANG_, cljs$cst$9032$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_defc_EQ_, cljs$cst$9024$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_cell_EQ_, cljs$cst$8956$c__111458__auto__, cljs$cst$8976$callback__111664__auto__, cljs$cst$9028$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_cell_let_1, cljs$cst$9029$cell_let, cljs$cst$8998$keep_watches_QMARK_, cljs$cst$8990$cell, cljs$cst$9035$formula_of, cljs$cst$9027$cell_let_1, cljs$cst$8988$cell_map, cljs$cst$8962$javelin_DOT_core_SLASH_cell_map, 
cljs$cst$8946$rank, cljs$cst$8950$numwatches, cljs$cst$9022$resource, cljs$cst$9011$javelin_DOT_core_SLASH___GT_Cell, cljs$cst$9010$javelin_DOT_core_SLASH_cell_QMARK_, cljs$cst$8999$dosync_STAR_, cljs$cst$8969$cljs_DOT_core_SLASH_for, cljs$cst$9039$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_formulet, cljs$cst$8983$Cell, cljs$cst$9037$deps, cljs$cst$8959$javelin_DOT_core_SLASH_set_cell_BANG__EQ_, cljs$cst$9006$javelin_DOT_core_SLASH_lift, cljs$cst$8981$formula_QMARK_, cljs$cst$9036$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_formula_of, 
cljs$cst$9021$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_with_let, cljs$cst$9015$javelin_DOT_core_SLASH_input_QMARK_, cljs$cst$9041$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_cell_doseq, cljs$cst$8996$cljs_DOT_core_SLASH_ISwap, cljs$cst$8971$ret__111661__auto__, cljs$cst$8951$javelin_DOT_core_SLASH_none, cljs$cst$9038$formulet, cljs$cst$8958$_DOT__update, cljs$cst$9012$javelin_DOT_core_SLASH_destroy_cell_BANG_, cljs$cst$8994$cljs_DOT_core_SLASH_IWatchable, cljs$cst$9007$javelin_DOT_core_SLASH_constant_QMARK_, 
cljs$cst$9013$javelin_DOT_core_SLASH_dosync_STAR_, cljs$cst$8986$alts_BANG_, cljs$cst$8992$cell_doseq_STAR_, cljs$cst$8972$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_cell, cljs$cst$9034$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_set_cell_BANG__EQ_, cljs$cst$8982$formula, cljs$cst$9016$foo, cljs$cst$9030$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_cell_let, cljs$cst$9025$defc, cljs$cst$8961$javelin_DOT_core_SLASH_cell, cljs$cst$8993$__GT_Cell, cljs$cst$8964$javelin_DOT_core_SLASH_cell_let_1, 
cljs$cst$9004$javelin_DOT_core_SLASH_formula_QMARK_, cljs$cst$9005$javelin_DOT_core_SLASH_Cell, cljs$cst$8984$lift, cljs$cst$8977$set_formula_BANG_, cljs$cst$8978$updatefn, cljs$cst$9018$dosync, cljs$cst$8989$set_cell_BANG_, cljs$cst$9001$input_QMARK_, cljs$cst$8974$cljs_DOT_core_SLASH_reset_BANG_, cljs$cst$8975$setter__111663__auto__, cljs$cst$9020$sci_DOT_configs_DOT_hoplon_DOT_javelin, cljs$cst$8947$sinks, cljs$cst$8960$javelin_DOT_core_SLASH_set_formula_BANG_, cljs$cst$9014$javelin_DOT_core_SLASH_deref_STAR_, 
cljs$cst$9017$bar, cljs$cst$9033$set_cell_BANG__EQ_, cljs$cst$8948$thunk, cljs$cst$9026$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_defc, cljs$cst$8979$lens, cljs$cst$8968$item__111639__auto__, cljs$cst$9000$deref_STAR_, cljs$cst$8952$javelin_DOT_core, cljs$cst$9008$javelin_DOT_core_SLASH_alts_BANG_, cljs$cst$9042$scittle_DOT_javelin_SLASH_javelin, cljs$cst$8980$lens_QMARK_, cljs$cst$9003$javelin_DOT_core_SLASH_lens_QMARK_, cljs$cst$8967$javelin_DOT_core_SLASH_cell_doseq_STAR_;
cljs$cst$8995$cljs_DOT_core_SLASH_IReset = new $APP.cljs.core.Symbol("cljs.core", "IReset", "cljs.core/IReset", -1478584309, null);
cljs$cst$9023$cell_EQ_ = new $APP.cljs.core.Symbol(null, "cell\x3d", "cell\x3d", 1747247109, null);
cljs$cst$8991$cell_QMARK_ = new $APP.cljs.core.Symbol(null, "cell?", "cell?", -1714515962, null);
cljs$cst$9031$defc_EQ_ = new $APP.cljs.core.Symbol(null, "defc\x3d", "defc\x3d", 561895827, null);
cljs$cst$9040$cell_doseq = new $APP.cljs.core.Symbol(null, "cell-doseq", "cell-doseq", 1972399407, null);
cljs$cst$8966$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_dosync_STAR_ = new $APP.cljs.core.Symbol("sci.configs.hoplon.javelin", "dosync*", "sci.configs.hoplon.javelin/dosync*", 960816078, null);
$APP.cljs$cst$8954$javelin_DOT_core_SLASH_formula = new $APP.cljs.core.Symbol("javelin.core", "formula", "javelin.core/formula", 360759737, null);
cljs$cst$8953$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_h = new $APP.cljs.core.Keyword("sci.configs.hoplon.javelin", "h", "sci.configs.hoplon.javelin/h", 1590953761);
$APP.cljs$cst$8955$javelin_DOT_core_SLASH_with_let = new $APP.cljs.core.Symbol("javelin.core", "with-let", "javelin.core/with-let", -1430245746, null);
cljs$cst$8949$constant = new $APP.cljs.core.Symbol(null, "constant", "constant", 1260922224, null);
cljs$cst$8985$constant_QMARK_ = new $APP.cljs.core.Symbol(null, "constant?", "constant?", 1756965709, null);
cljs$cst$8970$item__111642__auto__ = new $APP.cljs.core.Symbol(null, "item__111642__auto__", "item__111642__auto__", 348435782, null);
cljs$cst$9009$javelin_DOT_core_SLASH_set_cell_BANG_ = new $APP.cljs.core.Symbol("javelin.core", "set-cell!", "javelin.core/set-cell!", -1818735883, null);
cljs$cst$9002$javelin_DOT_core_SLASH_lens = new $APP.cljs.core.Symbol("javelin.core", "lens", "javelin.core/lens", -60197558, null);
cljs$cst$9019$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_dosync = new $APP.cljs.core.Symbol("sci.configs.hoplon.javelin", "dosync", "sci.configs.hoplon.javelin/dosync", -1963203662, null);
cljs$cst$8997$destroy_cell_BANG_ = new $APP.cljs.core.Symbol(null, "destroy-cell!", "destroy-cell!", -1668103066, null);
cljs$cst$9032$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_defc_EQ_ = new $APP.cljs.core.Symbol("sci.configs.hoplon.javelin", "defc\x3d", "sci.configs.hoplon.javelin/defc\x3d", -2085754688, null);
cljs$cst$9024$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_cell_EQ_ = new $APP.cljs.core.Symbol("sci.configs.hoplon.javelin", "cell\x3d", "sci.configs.hoplon.javelin/cell\x3d", -1881869996, null);
cljs$cst$8956$c__111458__auto__ = new $APP.cljs.core.Symbol(null, "c__111458__auto__", "c__111458__auto__", -1913306107, null);
cljs$cst$8976$callback__111664__auto__ = new $APP.cljs.core.Symbol(null, "callback__111664__auto__", "callback__111664__auto__", 629659044, null);
cljs$cst$9028$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_cell_let_1 = new $APP.cljs.core.Symbol("sci.configs.hoplon.javelin", "cell-let-1", "sci.configs.hoplon.javelin/cell-let-1", -1419030109, null);
cljs$cst$9029$cell_let = new $APP.cljs.core.Symbol(null, "cell-let", "cell-let", 1760937693, null);
cljs$cst$8998$keep_watches_QMARK_ = new $APP.cljs.core.Symbol(null, "keep-watches?", "keep-watches?", 1434000213, null);
cljs$cst$8990$cell = new $APP.cljs.core.Symbol(null, "cell", "cell", -1890190685, null);
$APP.cljs$cst$8965$javelin_DOT_core_SLASH_cell_let = new $APP.cljs.core.Symbol("javelin.core", "cell-let", "javelin.core/cell-let", 1906090463, null);
cljs$cst$9035$formula_of = new $APP.cljs.core.Symbol(null, "formula-of", "formula-of", 125010619, null);
cljs$cst$9027$cell_let_1 = new $APP.cljs.core.Symbol(null, "cell-let-1", "cell-let-1", 238772466, null);
cljs$cst$8988$cell_map = new $APP.cljs.core.Symbol(null, "cell-map", "cell-map", -519069699, null);
cljs$cst$8962$javelin_DOT_core_SLASH_cell_map = new $APP.cljs.core.Symbol("javelin.core", "cell-map", "javelin.core/cell-map", -295619841, null);
cljs$cst$8946$rank = new $APP.cljs.core.Symbol(null, "rank", "rank", -66196975, null);
cljs$cst$8950$numwatches = new $APP.cljs.core.Symbol(null, "numwatches", "numwatches", 2058987374, null);
cljs$cst$9022$resource = new $APP.cljs.core.Symbol(null, "resource", "resource", 1892430363, null);
cljs$cst$9011$javelin_DOT_core_SLASH___GT_Cell = new $APP.cljs.core.Symbol("javelin.core", "-\x3eCell", "javelin.core/-\x3eCell", -1899359988, null);
cljs$cst$9010$javelin_DOT_core_SLASH_cell_QMARK_ = new $APP.cljs.core.Symbol("javelin.core", "cell?", "javelin.core/cell?", -1563069696, null);
$APP.cljs$cst$8957$javelin_DOT_core_SLASH_cell_EQ_ = new $APP.cljs.core.Symbol("javelin.core", "cell\x3d", "javelin.core/cell\x3d", 1664959239, null);
cljs$cst$8999$dosync_STAR_ = new $APP.cljs.core.Symbol(null, "dosync*", "dosync*", -1636503363, null);
cljs$cst$8969$cljs_DOT_core_SLASH_for = new $APP.cljs.core.Symbol("cljs.core", "for", "cljs.core/for", -89947499, null);
cljs$cst$9039$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_formulet = new $APP.cljs.core.Symbol("sci.configs.hoplon.javelin", "formulet", "sci.configs.hoplon.javelin/formulet", 250074878, null);
cljs$cst$8983$Cell = new $APP.cljs.core.Symbol(null, "Cell", "Cell", 1694176314, null);
cljs$cst$9037$deps = new $APP.cljs.core.Symbol(null, "deps", "deps", -771075450, null);
cljs$cst$8959$javelin_DOT_core_SLASH_set_cell_BANG__EQ_ = new $APP.cljs.core.Symbol("javelin.core", "set-cell!\x3d", "javelin.core/set-cell!\x3d", -2127309625, null);
cljs$cst$9006$javelin_DOT_core_SLASH_lift = new $APP.cljs.core.Symbol("javelin.core", "lift", "javelin.core/lift", -1655883756, null);
cljs$cst$8981$formula_QMARK_ = new $APP.cljs.core.Symbol(null, "formula?", "formula?", -1583432172, null);
cljs$cst$9036$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_formula_of = new $APP.cljs.core.Symbol("sci.configs.hoplon.javelin", "formula-of", "sci.configs.hoplon.javelin/formula-of", -364661814, null);
cljs$cst$9021$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_with_let = new $APP.cljs.core.Symbol("sci.configs.hoplon.javelin", "with-let", "sci.configs.hoplon.javelin/with-let", 517558481, null);
cljs$cst$9015$javelin_DOT_core_SLASH_input_QMARK_ = new $APP.cljs.core.Symbol("javelin.core", "input?", "javelin.core/input?", -306170452, null);
cljs$cst$9041$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_cell_doseq = new $APP.cljs.core.Symbol("sci.configs.hoplon.javelin", "cell-doseq", "sci.configs.hoplon.javelin/cell-doseq", 373333598, null);
cljs$cst$8996$cljs_DOT_core_SLASH_ISwap = new $APP.cljs.core.Symbol("cljs.core", "ISwap", "cljs.core/ISwap", -190928468, null);
cljs$cst$8971$ret__111661__auto__ = new $APP.cljs.core.Symbol(null, "ret__111661__auto__", "ret__111661__auto__", 547502646, null);
cljs$cst$8951$javelin_DOT_core_SLASH_none = new $APP.cljs.core.Keyword("javelin.core", "none", "javelin.core/none", 1150337088);
cljs$cst$9038$formulet = new $APP.cljs.core.Symbol(null, "formulet", "formulet", -216554065, null);
cljs$cst$8958$_DOT__update = new $APP.cljs.core.Symbol(null, ".-update", ".-update", 1268289682, null);
cljs$cst$9012$javelin_DOT_core_SLASH_destroy_cell_BANG_ = new $APP.cljs.core.Symbol("javelin.core", "destroy-cell!", "javelin.core/destroy-cell!", -1752668316, null);
cljs$cst$8994$cljs_DOT_core_SLASH_IWatchable = new $APP.cljs.core.Symbol("cljs.core", "IWatchable", "cljs.core/IWatchable", -1531379261, null);
cljs$cst$9007$javelin_DOT_core_SLASH_constant_QMARK_ = new $APP.cljs.core.Symbol("javelin.core", "constant?", "javelin.core/constant?", 1369475151, null);
cljs$cst$9013$javelin_DOT_core_SLASH_dosync_STAR_ = new $APP.cljs.core.Symbol("javelin.core", "dosync*", "javelin.core/dosync*", -1788629569, null);
cljs$cst$8986$alts_BANG_ = new $APP.cljs.core.Symbol(null, "alts!", "alts!", 104119866, null);
$APP.cljs$cst$8973$js_SLASH_setInterval = new $APP.cljs.core.Symbol("js", "setInterval", "js/setInterval", 2090002939, null);
cljs$cst$8992$cell_doseq_STAR_ = new $APP.cljs.core.Symbol(null, "cell-doseq*", "cell-doseq*", 1917821935, null);
cljs$cst$8972$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_cell = new $APP.cljs.core.Symbol("sci.configs.hoplon.javelin", "cell", "sci.configs.hoplon.javelin/cell", -362419246, null);
cljs$cst$9034$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_set_cell_BANG__EQ_ = new $APP.cljs.core.Symbol("sci.configs.hoplon.javelin", "set-cell!\x3d", "sci.configs.hoplon.javelin/set-cell!\x3d", 1859815190, null);
cljs$cst$8982$formula = new $APP.cljs.core.Symbol(null, "formula", "formula", 580806335, null);
cljs$cst$9016$foo = new $APP.cljs.core.Symbol(null, "foo", "foo", -1385541733, null);
cljs$cst$9030$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_cell_let = new $APP.cljs.core.Symbol("sci.configs.hoplon.javelin", "cell-let", "sci.configs.hoplon.javelin/cell-let", -2054817940, null);
cljs$cst$9025$defc = new $APP.cljs.core.Symbol(null, "defc", "defc", -1111689649, null);
cljs$cst$8961$javelin_DOT_core_SLASH_cell = new $APP.cljs.core.Symbol("javelin.core", "cell", "javelin.core/cell", -1773511263, null);
cljs$cst$8993$__GT_Cell = new $APP.cljs.core.Symbol(null, "-\x3eCell", "-\x3eCell", -1209682942, null);
cljs$cst$8964$javelin_DOT_core_SLASH_cell_let_1 = new $APP.cljs.core.Symbol("javelin.core", "cell-let-1", "javelin.core/cell-let-1", 386008048, null);
cljs$cst$9004$javelin_DOT_core_SLASH_formula_QMARK_ = new $APP.cljs.core.Symbol("javelin.core", "formula?", "javelin.core/formula?", -1199220470, null);
cljs$cst$9005$javelin_DOT_core_SLASH_Cell = new $APP.cljs.core.Symbol("javelin.core", "Cell", "javelin.core/Cell", 2144368952, null);
cljs$cst$8984$lift = new $APP.cljs.core.Symbol(null, "lift", "lift", -1750803734, null);
cljs$cst$8977$set_formula_BANG_ = new $APP.cljs.core.Symbol(null, "set-formula!", "set-formula!", 548458029, null);
cljs$cst$8978$updatefn = new $APP.cljs.core.Symbol(null, "updatefn", "updatefn", -2058610680, null);
cljs$cst$9018$dosync = new $APP.cljs.core.Symbol(null, "dosync", "dosync", 336328035, null);
cljs$cst$8989$set_cell_BANG_ = new $APP.cljs.core.Symbol(null, "set-cell!", "set-cell!", -1938905101, null);
cljs$cst$9001$input_QMARK_ = new $APP.cljs.core.Symbol(null, "input?", "input?", -152311646, null);
cljs$cst$8974$cljs_DOT_core_SLASH_reset_BANG_ = new $APP.cljs.core.Symbol("cljs.core", "reset!", "cljs.core/reset!", 657404621, null);
cljs$cst$8975$setter__111663__auto__ = new $APP.cljs.core.Symbol(null, "setter__111663__auto__", "setter__111663__auto__", 1550169871, null);
cljs$cst$9020$sci_DOT_configs_DOT_hoplon_DOT_javelin = new $APP.cljs.core.Symbol(null, "sci.configs.hoplon.javelin", "sci.configs.hoplon.javelin", 2099549778, null);
cljs$cst$8947$sinks = new $APP.cljs.core.Symbol(null, "sinks", "sinks", -1243609492, null);
cljs$cst$8960$javelin_DOT_core_SLASH_set_formula_BANG_ = new $APP.cljs.core.Symbol("javelin.core", "set-formula!", "javelin.core/set-formula!", 965634351, null);
cljs$cst$9014$javelin_DOT_core_SLASH_deref_STAR_ = new $APP.cljs.core.Symbol("javelin.core", "deref*", "javelin.core/deref*", 1447291123, null);
cljs$cst$9017$bar = new $APP.cljs.core.Symbol(null, "bar", "bar", 254284943, null);
cljs$cst$9033$set_cell_BANG__EQ_ = new $APP.cljs.core.Symbol(null, "set-cell!\x3d", "set-cell!\x3d", -2012575291, null);
cljs$cst$8948$thunk = new $APP.cljs.core.Symbol(null, "thunk", "thunk", 74255732, null);
cljs$cst$9026$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_defc = new $APP.cljs.core.Symbol("sci.configs.hoplon.javelin", "defc", "sci.configs.hoplon.javelin/defc", 1533855632, null);
cljs$cst$8979$lens = new $APP.cljs.core.Symbol(null, "lens", "lens", -984575916, null);
cljs$cst$8968$item__111639__auto__ = new $APP.cljs.core.Symbol(null, "item__111639__auto__", "item__111639__auto__", 242104860, null);
cljs$cst$9000$deref_STAR_ = new $APP.cljs.core.Symbol(null, "deref*", "deref*", 548228593, null);
cljs$cst$8952$javelin_DOT_core = new $APP.cljs.core.Symbol(null, "javelin.core", "javelin.core", 1164167622, null);
cljs$cst$9008$javelin_DOT_core_SLASH_alts_BANG_ = new $APP.cljs.core.Symbol("javelin.core", "alts!", "javelin.core/alts!", 219028260, null);
cljs$cst$9042$scittle_DOT_javelin_SLASH_javelin = new $APP.cljs.core.Keyword("scittle.javelin", "javelin", "scittle.javelin/javelin", 737041287);
cljs$cst$8980$lens_QMARK_ = new $APP.cljs.core.Symbol(null, "lens?", "lens?", 1968859788, null);
cljs$cst$9003$javelin_DOT_core_SLASH_lens_QMARK_ = new $APP.cljs.core.Symbol("javelin.core", "lens?", "javelin.core/lens?", -1975449714, null);
cljs$cst$8967$javelin_DOT_core_SLASH_cell_doseq_STAR_ = new $APP.cljs.core.Symbol("javelin.core", "cell-doseq*", "javelin.core/cell-doseq*", 2107983085, null);
$APP.javelin = {core:{}};
$APP.javelin.core.goog$module$goog$array = $APP.goog.array;
$APP.javelin.core._STAR_tx_STAR_ = null;
$APP.javelin.core.last_rank = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0);
$APP.javelin.core.propagate_STAR_ = function($pri_map$$) {
  for (;;) {
    var $next$jscomp$21_sinks_111194_temp__5825__auto__$$ = $pri_map$$.shift();
    if ($APP.cljs.core.truth_($next$jscomp$21_sinks_111194_temp__5825__auto__$$)) {
      var $n__5616__auto___111195_old$$ = $next$jscomp$21_sinks_111194_temp__5825__auto__$$.prev;
      var $f$jscomp$inline_8984_i_111196_new$$jscomp$36_temp__5823__auto__$$ = $next$jscomp$21_sinks_111194_temp__5825__auto__$$.thunk;
      $f$jscomp$inline_8984_i_111196_new$$jscomp$36_temp__5823__auto__$$ = $APP.cljs.core.truth_($f$jscomp$inline_8984_i_111196_new$$jscomp$36_temp__5823__auto__$$) ? $f$jscomp$inline_8984_i_111196_new$$jscomp$36_temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$0 ? $f$jscomp$inline_8984_i_111196_new$$jscomp$36_temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$0() : $f$jscomp$inline_8984_i_111196_new$$jscomp$36_temp__5823__auto__$$.call(null) : $next$jscomp$21_sinks_111194_temp__5825__auto__$$.state;
      if ($APP.cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2($f$jscomp$inline_8984_i_111196_new$$jscomp$36_temp__5823__auto__$$, $n__5616__auto___111195_old$$)) {
        for ($next$jscomp$21_sinks_111194_temp__5825__auto__$$.prev = $f$jscomp$inline_8984_i_111196_new$$jscomp$36_temp__5823__auto__$$, $APP.cljs.core._notify_watches($next$jscomp$21_sinks_111194_temp__5825__auto__$$, $n__5616__auto___111195_old$$, $f$jscomp$inline_8984_i_111196_new$$jscomp$36_temp__5823__auto__$$), $next$jscomp$21_sinks_111194_temp__5825__auto__$$ = $next$jscomp$21_sinks_111194_temp__5825__auto__$$.sinks, $n__5616__auto___111195_old$$ = $next$jscomp$21_sinks_111194_temp__5825__auto__$$.length, 
        $f$jscomp$inline_8984_i_111196_new$$jscomp$36_temp__5823__auto__$$ = 0;;) {
          if ($f$jscomp$inline_8984_i_111196_new$$jscomp$36_temp__5823__auto__$$ < $n__5616__auto___111195_old$$) {
            $APP.javelin.core.goog$module$goog$array.binaryInsert($pri_map$$, $next$jscomp$21_sinks_111194_temp__5825__auto__$$[$f$jscomp$inline_8984_i_111196_new$$jscomp$36_temp__5823__auto__$$], $APP.javelin.core.cmp_rank), $f$jscomp$inline_8984_i_111196_new$$jscomp$36_temp__5823__auto__$$ += 1;
          } else {
            break;
          }
        }
      }
    } else {
      return null;
    }
  }
};
$APP.javelin.core.deref_STAR_ = function($x$$) {
  return $APP.cljs.core.truth_($APP.javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? $APP.javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1($x$$) : $APP.javelin.core.cell_QMARK_.call(null, $x$$)) ? $APP.cljs.core.deref($x$$) : $x$$;
};
$APP.javelin.core.next_rank = function() {
  return $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2($APP.javelin.core.last_rank, $APP.cljs.core.inc);
};
$APP.javelin.core.cmp_rank = function($a$jscomp$1516_a__$1$$, $b$jscomp$1137_b__$1$$) {
  $a$jscomp$1516_a__$1$$ = $a$jscomp$1516_a__$1$$.rank;
  $b$jscomp$1137_b__$1$$ = $b$jscomp$1137_b__$1$$.rank;
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($a$jscomp$1516_a__$1$$, $b$jscomp$1137_b__$1$$) ? 0 : $a$jscomp$1516_a__$1$$ - $b$jscomp$1137_b__$1$$;
};
$APP.javelin.core.add_sync_BANG_ = function($c$$) {
  return $APP.javelin.core.goog$module$goog$array.binaryInsert($APP.javelin.core._STAR_tx_STAR_, $c$$, $APP.javelin.core.cmp_rank);
};
$APP.javelin.core.safe_nth = function($c$$, $i$$) {
  try {
    return $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$2($c$$, $i$$);
  } catch ($e111131$$) {
    if ($e111131$$ instanceof Error) {
      return null;
    }
    throw $e111131$$;
  }
};
$APP.javelin.core.propagate_BANG_ = function($c$$) {
  $APP.cljs.core.truth_($APP.javelin.core._STAR_tx_STAR_) ? $APP.javelin.core.add_sync_BANG_($c$$) : $APP.javelin.core.propagate_STAR_([$c$$]);
  return $c$$;
};
$APP.javelin.core.destroy_cell_BANG_ = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return $APP.javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return $APP.javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
$APP.javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$1 = function($this$$$) {
  return $APP.javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2($this$$$, null);
};
$APP.javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2 = function($this$$$, $keep_watches_QMARK__n__5616__auto__$$) {
  var $srcs$$ = $this$$$.sources;
  $this$$$.sources = [];
  $this$$$.update = null;
  $this$$$.thunk = null;
  $APP.cljs.core.truth_($keep_watches_QMARK__n__5616__auto__$$) || ($this$$$.watches = $APP.cljs.core.PersistentArrayMap.EMPTY, $this$$$.numwatches = 0);
  $keep_watches_QMARK__n__5616__auto__$$ = $srcs$$.length;
  for (var $i$$ = 0;;) {
    if ($i$$ < $keep_watches_QMARK__n__5616__auto__$$) {
      var $temp__5825__auto___111200$$ = function() {
        var $G__111137$$ = $srcs$$[$i$$];
        return $APP.javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? $APP.javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1($G__111137$$) : $APP.javelin.core.cell_QMARK_.call(null, $G__111137$$);
      }();
      if ($APP.cljs.core.truth_($temp__5825__auto___111200$$)) {
        var $c_111201$$ = $temp__5825__auto___111200$$;
        $APP.javelin.core.goog$module$goog$array.removeIf($c_111201$$.sinks, function($i$$, $c_111201$$, $temp__5825__auto___111200$$, $n__5616__auto__$$, $srcs$$) {
          return function($p1__111134_SHARP_$$) {
            return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($p1__111134_SHARP_$$, $this$$$);
          };
        }($i$$, $c_111201$$, $temp__5825__auto___111200$$, $keep_watches_QMARK__n__5616__auto__$$, $srcs$$));
      }
      $i$$ += 1;
    } else {
      return null;
    }
  }
};
$APP.javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = 2;
$APP.javelin.core.set_formula_BANG__STAR_ = function($this$$$, $f$$, $i_111204_sources$$, $updatefn$$) {
  if ($APP.cljs.core.truth_($f$$)) {
    $this$$$.constant = !0;
    $i_111204_sources$$.push($f$$);
    $this$$$.sources = $i_111204_sources$$;
    $f$$ = $this$$$.sources.length;
    for ($i_111204_sources$$ = 0;;) {
      if ($i_111204_sources$$ < $f$$) {
        var $source_111205$$ = $this$$$.sources[$i_111204_sources$$];
        if ($APP.cljs.core.truth_($APP.javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? $APP.javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1($source_111205$$) : $APP.javelin.core.cell_QMARK_.call(null, $source_111205$$)) && ($APP.cljs.core.truth_(function() {
          var $and__5023__auto__$$ = $this$$$.constant;
          return $APP.cljs.core.truth_($and__5023__auto__$$) ? $APP.cljs.core.not($source_111205$$.constant) : $and__5023__auto__$$;
        }()) && ($this$$$.constant = !1), $source_111205$$.sinks.push($this$$$), $source_111205$$.rank > $this$$$.rank)) {
          for (var $q_111206$$ = [$source_111205$$];;) {
            var $dep_111208_temp__5825__auto___111207$$ = $q_111206$$.shift();
            if ($APP.cljs.core.truth_($dep_111208_temp__5825__auto___111207$$)) {
              $dep_111208_temp__5825__auto___111207$$.rank = $APP.javelin.core.next_rank(), $q_111206$$ = $q_111206$$.concat($dep_111208_temp__5825__auto___111207$$.sinks);
            } else {
              break;
            }
          }
        }
        $i_111204_sources$$ += 1;
      } else {
        break;
      }
    }
    $this$$$.thunk = function() {
      for (var $argv$$ = $this$$$.sources.slice(), $f__$1$$ = $APP.javelin.core.deref_STAR_($argv$$.pop()), $n__5616__auto___111211$$ = $argv$$.length, $i_111212$$ = 0;;) {
        if ($i_111212$$ < $n__5616__auto___111211$$) {
          $argv$$[$i_111212$$] = $APP.javelin.core.deref_STAR_($argv$$[$i_111212$$]), $i_111212$$ += 1;
        } else {
          break;
        }
      }
      return $this$$$.state = $f__$1$$.apply(null, $argv$$);
    };
    $this$$$.update = $updatefn$$;
  }
  return $APP.javelin.core.propagate_BANG_($this$$$);
};
$APP.javelin.core.set_formula_BANG_ = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return $APP.javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return $APP.javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return $APP.javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return $APP.javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
$APP.javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$1 = function($this$$$) {
  $APP.javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2($this$$$, !0);
  return $APP.javelin.core.set_formula_BANG__STAR_($this$$$, null, null, null);
};
$APP.javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$2 = function($this$$$, $f$$) {
  $APP.javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2($this$$$, !0);
  return $APP.javelin.core.set_formula_BANG__STAR_($this$$$, $f$$, [], null);
};
$APP.javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$3 = function($this$$$, $f$$, $sources$$) {
  $APP.javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2($this$$$, !0);
  return $APP.javelin.core.set_formula_BANG__STAR_($this$$$, $f$$, $APP.cljs.core.into_array.cljs$core$IFn$_invoke$arity$1($sources$$), null);
};
$APP.javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$4 = function($this$$$, $f$$, $sources$$, $updatefn$$) {
  $APP.javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2($this$$$, !0);
  return $APP.javelin.core.set_formula_BANG__STAR_($this$$$, $f$$, $APP.cljs.core.into_array.cljs$core$IFn$_invoke$arity$1($sources$$), $updatefn$$);
};
$APP.javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = 4;
$APP.javelin.core.Cell = function($meta$$, $state$$, $rank$$, $prev$$, $sources$$, $sinks$$, $thunk$$, $watches$$, $update$$, $constant$$, $numwatches$$) {
  this.meta = $meta$$;
  this.state = $state$$;
  this.rank = $rank$$;
  this.prev = $prev$$;
  this.sources = $sources$$;
  this.sinks = $sinks$$;
  this.thunk = $thunk$$;
  this.watches = $watches$$;
  this.update = $update$$;
  this.constant = $constant$$;
  this.numwatches = $numwatches$$;
  this.cljs$lang$protocol_mask$partition0$ = 2147909632;
  this.cljs$lang$protocol_mask$partition1$ = 98306;
};
$APP.javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this$$$, $w$$, $_$$) {
  return $APP.cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic($w$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object [javelin.core.Cell ", $APP.cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this.state], 0)), "]"], 0));
};
$APP.javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this$$$, $meta__$1$$) {
  return new $APP.javelin.core.Cell($meta__$1$$, this.state, this.rank, this.prev, this.sources, this.sinks, this.thunk, this.watches, this.update, this.constant, this.numwatches);
};
$APP.javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = function($this$$$) {
  return this.meta;
};
$APP.javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = function($this$$$) {
  return this.state;
};
$APP.javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = function($fexpr__111141_111215_this$$$, $x$$) {
  if ($APP.cljs.core.truth_($APP.javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? $APP.javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(this) : $APP.javelin.core.lens_QMARK_.call(null, this))) {
    $fexpr__111141_111215_this$$$ = this.update, $fexpr__111141_111215_this$$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__111141_111215_this$$$.cljs$core$IFn$_invoke$arity$1($x$$) : $fexpr__111141_111215_this$$$.call(null, $x$$);
  } else {
    if ($APP.cljs.core.truth_($APP.javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? $APP.javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1(this) : $APP.javelin.core.input_QMARK_.call(null, this))) {
      this.state = $x$$, $APP.javelin.core.propagate_BANG_(this);
    } else {
      throw Error("can't swap! or reset! formula cell");
    }
  }
  return this.state;
};
$APP.javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = function($JSCompiler_temp_const$jscomp$3461_this$$$, $JSCompiler_inline_result$jscomp$3462_f$$) {
  $JSCompiler_temp_const$jscomp$3461_this$$$ = $APP.cljs.core;
  var $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$3461_this$$$.reset_BANG_, $G__111142$$ = this.state;
  $JSCompiler_inline_result$jscomp$3462_f$$ = $JSCompiler_inline_result$jscomp$3462_f$$.cljs$core$IFn$_invoke$arity$1 ? $JSCompiler_inline_result$jscomp$3462_f$$.cljs$core$IFn$_invoke$arity$1($G__111142$$) : $JSCompiler_inline_result$jscomp$3462_f$$.call(null, $G__111142$$);
  return $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$3461_this$$$, this, $JSCompiler_inline_result$jscomp$3462_f$$);
};
$APP.javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = function($JSCompiler_temp_const$jscomp$3464_this$$$, $JSCompiler_inline_result$jscomp$3465_f$$, $a$$) {
  $JSCompiler_temp_const$jscomp$3464_this$$$ = $APP.cljs.core;
  var $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$3464_this$$$.reset_BANG_, $G__111143$$ = this.state;
  $JSCompiler_inline_result$jscomp$3465_f$$ = $JSCompiler_inline_result$jscomp$3465_f$$.cljs$core$IFn$_invoke$arity$2 ? $JSCompiler_inline_result$jscomp$3465_f$$.cljs$core$IFn$_invoke$arity$2($G__111143$$, $a$$) : $JSCompiler_inline_result$jscomp$3465_f$$.call(null, $G__111143$$, $a$$);
  return $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$3464_this$$$, this, $JSCompiler_inline_result$jscomp$3465_f$$);
};
$APP.javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = function($JSCompiler_temp_const$jscomp$3467_this$$$, $JSCompiler_inline_result$jscomp$3468_f$$, $a$$, $b$$) {
  $JSCompiler_temp_const$jscomp$3467_this$$$ = $APP.cljs.core;
  var $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$3467_this$$$.reset_BANG_, $G__111145$$ = this.state;
  $JSCompiler_inline_result$jscomp$3468_f$$ = $JSCompiler_inline_result$jscomp$3468_f$$.cljs$core$IFn$_invoke$arity$3 ? $JSCompiler_inline_result$jscomp$3468_f$$.cljs$core$IFn$_invoke$arity$3($G__111145$$, $a$$, $b$$) : $JSCompiler_inline_result$jscomp$3468_f$$.call(null, $G__111145$$, $a$$, $b$$);
  return $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$3467_this$$$, this, $JSCompiler_inline_result$jscomp$3468_f$$);
};
$APP.javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = function($this$$$, $f$$, $a$$, $b$$, $xs$$) {
  return $APP.cljs.core.reset_BANG_(this, $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$5($f$$, this.state, $a$$, $b$$, $xs$$));
};
$APP.javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = function($G__111226_seq__111148_seq__111148__$1_temp__5825__auto__$jscomp$1100_this$$$, $o$$, $n$$) {
  if (0 < this.numwatches) {
    $G__111226_seq__111148_seq__111148__$1_temp__5825__auto__$jscomp$1100_this$$$ = $APP.cljs.core.seq(this.watches);
    for (var $c__5548__auto__$$ = null, $G__111228_count__111150$$ = 0, $i__111151$$ = 0;;) {
      if ($i__111151$$ < $G__111228_count__111150$$) {
        var $f$$ = $c__5548__auto__$$.cljs$core$IIndexed$_nth$arity$2(null, $i__111151$$), $G__111227_key$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($f$$, 0, null);
        $f$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($f$$, 1, null);
        $f$$.cljs$core$IFn$_invoke$arity$4 ? $f$$.cljs$core$IFn$_invoke$arity$4($G__111227_key$$, this, $o$$, $n$$) : $f$$.call(null, $G__111227_key$$, this, $o$$, $n$$);
        $i__111151$$ += 1;
      } else {
        if ($G__111226_seq__111148_seq__111148__$1_temp__5825__auto__$jscomp$1100_this$$$ = $APP.cljs.core.seq($G__111226_seq__111148_seq__111148__$1_temp__5825__auto__$jscomp$1100_this$$$)) {
          $APP.cljs.core.chunked_seq_QMARK_($G__111226_seq__111148_seq__111148__$1_temp__5825__auto__$jscomp$1100_this$$$) ? ($c__5548__auto__$$ = $APP.cljs.core.chunk_first($G__111226_seq__111148_seq__111148__$1_temp__5825__auto__$jscomp$1100_this$$$), $G__111226_seq__111148_seq__111148__$1_temp__5825__auto__$jscomp$1100_this$$$ = $APP.cljs.core.chunk_rest($G__111226_seq__111148_seq__111148__$1_temp__5825__auto__$jscomp$1100_this$$$), $G__111227_key$$ = $c__5548__auto__$$, $G__111228_count__111150$$ = 
          $APP.cljs.core.count($c__5548__auto__$$), $c__5548__auto__$$ = $G__111227_key$$) : ($c__5548__auto__$$ = $APP.cljs.core.first($G__111226_seq__111148_seq__111148__$1_temp__5825__auto__$jscomp$1100_this$$$), $G__111227_key$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c__5548__auto__$$, 0, null), $f$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c__5548__auto__$$, 1, null), $f$$.cljs$core$IFn$_invoke$arity$4 ? $f$$.cljs$core$IFn$_invoke$arity$4($G__111227_key$$, this, $o$$, 
          $n$$) : $f$$.call(null, $G__111227_key$$, this, $o$$, $n$$), $G__111226_seq__111148_seq__111148__$1_temp__5825__auto__$jscomp$1100_this$$$ = $APP.cljs.core.next($G__111226_seq__111148_seq__111148__$1_temp__5825__auto__$jscomp$1100_this$$$), $c__5548__auto__$$ = null, $G__111228_count__111150$$ = 0), $i__111151$$ = 0;
        } else {
          return null;
        }
      }
    }
  } else {
    return null;
  }
};
$APP.javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = function($this$$$, $k$$, $f$$) {
  $APP.cljs.core.contains_QMARK_(this.watches, $k$$) || (this.numwatches += 1);
  return this.watches = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.watches, $k$$, $f$$);
};
$APP.javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = function($this$$$, $k$$) {
  return $APP.cljs.core.contains_QMARK_(this.watches, $k$$) ? (--this.numwatches, this.watches = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.watches, $k$$)) : null;
};
$APP.javelin.core.Cell.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 11, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$20$meta, $APP.cljs$cst$44$state, cljs$cst$8946$rank, $APP.cljs$cst$49$prev, $APP.cljs$cst$4619$sources, cljs$cst$8947$sinks, cljs$cst$8948$thunk, $APP.cljs$cst$46$watches, $APP.cljs$cst$1192$update, cljs$cst$8949$constant, cljs$cst$8950$numwatches], null);
};
$APP.javelin.core.Cell.cljs$lang$type = !0;
$APP.javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";
$APP.javelin.core.Cell.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "javelin.core/Cell");
};
$APP.javelin.core.__GT_Cell = function($meta$$, $state$$, $rank$$, $prev$$, $sources$$, $sinks$$, $thunk$$, $watches$$, $update$$, $constant$$, $numwatches$$) {
  return new $APP.javelin.core.Cell($meta$$, $state$$, $rank$$, $prev$$, $sources$$, $sinks$$, $thunk$$, $watches$$, $update$$, $constant$$, $numwatches$$);
};
$APP.javelin.core.cell_QMARK_ = function($c$$) {
  return $c$$ instanceof $APP.javelin.core.Cell ? $c$$ : null;
};
$APP.javelin.core.formula_QMARK_ = function($c$$) {
  var $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.truth_;
  var $JSCompiler_inline_result$jscomp$3471_and__5023__auto__$$ = $APP.javelin.core.cell_QMARK_($c$$);
  $JSCompiler_inline_result$jscomp$3471_and__5023__auto__$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$3471_and__5023__auto__$$) ? $c$$.thunk : $JSCompiler_inline_result$jscomp$3471_and__5023__auto__$$;
  return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_inline_result$jscomp$3471_and__5023__auto__$$) ? $c$$ : null;
};
$APP.javelin.core.lens_QMARK_ = function($c$$) {
  var $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.truth_;
  var $JSCompiler_inline_result$jscomp$3474_and__5023__auto__$$ = $APP.javelin.core.cell_QMARK_($c$$);
  $JSCompiler_inline_result$jscomp$3474_and__5023__auto__$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$3474_and__5023__auto__$$) ? $c$$.update : $JSCompiler_inline_result$jscomp$3474_and__5023__auto__$$;
  return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_inline_result$jscomp$3474_and__5023__auto__$$) ? $c$$ : null;
};
$APP.javelin.core.input_QMARK_ = function($c$$) {
  var $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.truth_;
  var $JSCompiler_inline_result$jscomp$3477_and__5023__auto__$$ = $APP.javelin.core.cell_QMARK_($c$$);
  $JSCompiler_inline_result$jscomp$3477_and__5023__auto__$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$3477_and__5023__auto__$$) ? $APP.cljs.core.not($APP.javelin.core.formula_QMARK_($c$$)) : $JSCompiler_inline_result$jscomp$3477_and__5023__auto__$$;
  return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_inline_result$jscomp$3477_and__5023__auto__$$) ? $c$$ : null;
};
$APP.javelin.core.constant_QMARK_ = function($c$$) {
  var $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.truth_;
  var $JSCompiler_inline_result$jscomp$3480_and__5023__auto__$$ = $APP.javelin.core.cell_QMARK_($c$$);
  $JSCompiler_inline_result$jscomp$3480_and__5023__auto__$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$3480_and__5023__auto__$$) ? $c$$.constant : $JSCompiler_inline_result$jscomp$3480_and__5023__auto__$$;
  return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_inline_result$jscomp$3480_and__5023__auto__$$) ? $c$$ : null;
};
$APP.javelin.core.set_cell_BANG_ = function($c$$, $x$$) {
  $c$$.state = $x$$;
  return $APP.javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$1($c$$);
};
$APP.javelin.core.formula = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return $APP.javelin.core.formula.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return $APP.javelin.core.formula.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
$APP.javelin.core.formula.cljs$core$IFn$_invoke$arity$1 = function($f$$) {
  return $APP.javelin.core.formula.cljs$core$IFn$_invoke$arity$2($f$$, null);
};
$APP.javelin.core.formula.cljs$core$IFn$_invoke$arity$2 = function($f$$, $updatefn$$) {
  return function() {
    return $APP.javelin.core.set_formula_BANG__STAR_($APP.javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? $APP.javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs$cst$8951$javelin_DOT_core_SLASH_none) : $APP.javelin.core.cell.call(null, cljs$cst$8951$javelin_DOT_core_SLASH_none), $f$$, Array.prototype.slice.call(arguments), $updatefn$$);
  };
};
$APP.javelin.core.formula.cljs$lang$maxFixedArity = 2;
$APP.javelin.core.lens = function($c$$, $f$$) {
  return $APP.javelin.core.formula.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.identity, $f$$)($c$$);
};
$APP.javelin.core.cell = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return $APP.javelin.core.cell.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      for (var $args_arr__5774__auto__$jscomp$144_argseq__5775__auto__$$ = [], $len__5749__auto___111245$$ = arguments.length, $i__5750__auto___111246$$ = 0;;) {
        if ($i__5750__auto___111246$$ < $len__5749__auto___111245$$) {
          $args_arr__5774__auto__$jscomp$144_argseq__5775__auto__$$.push(arguments[$i__5750__auto___111246$$]), $i__5750__auto___111246$$ += 1;
        } else {
          break;
        }
      }
      $args_arr__5774__auto__$jscomp$144_argseq__5775__auto__$$ = 1 < $args_arr__5774__auto__$jscomp$144_argseq__5775__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args_arr__5774__auto__$jscomp$144_argseq__5775__auto__$$.slice(1), 0, null) : null;
      return $APP.javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args_arr__5774__auto__$jscomp$144_argseq__5775__auto__$$);
  }
};
$APP.javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = function($x$$) {
  return new $APP.javelin.core.Cell(null, $x$$, $APP.javelin.core.next_rank(), $x$$, [], [], null, $APP.cljs.core.PersistentArrayMap.EMPTY, null, !1, 0);
};
$APP.javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = function($x$$, $map__111171__$1_meta$$) {
  $map__111171__$1_meta$$ = $APP.cljs.core.__destructure_map($map__111171__$1_meta$$);
  $map__111171__$1_meta$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__111171__$1_meta$$, $APP.cljs$cst$2$meta);
  return new $APP.javelin.core.Cell($map__111171__$1_meta$$, $x$$, $APP.javelin.core.next_rank(), $x$$, [], [], null, $APP.cljs.core.PersistentArrayMap.EMPTY, null, !1, 0);
};
$APP.javelin.core.cell.cljs$lang$applyTo = function($seq111167_seq111167__$1$$) {
  var $G__111168$$ = $APP.cljs.core.first($seq111167_seq111167__$1$$);
  $seq111167_seq111167__$1$$ = $APP.cljs.core.next($seq111167_seq111167__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__111168$$, $seq111167_seq111167__$1$$);
};
$APP.javelin.core.cell.cljs$lang$maxFixedArity = 1;
$APP.javelin.core.lift = $APP.javelin.core.formula;
$APP.javelin.core.dosync_STAR_ = function($thunk$$) {
  if ($APP.cljs.core.truth_($APP.javelin.core._STAR_tx_STAR_)) {
    return $thunk$$.cljs$core$IFn$_invoke$arity$0 ? $thunk$$.cljs$core$IFn$_invoke$arity$0() : $thunk$$.call(null);
  }
  var $_STAR_tx_STAR__orig_val__111172$$ = $APP.javelin.core._STAR_tx_STAR_;
  $APP.javelin.core._STAR_tx_STAR_ = [];
  try {
    $thunk$$.cljs$core$IFn$_invoke$arity$0 ? $thunk$$.cljs$core$IFn$_invoke$arity$0() : $thunk$$.call(null);
    var $tx$$ = $APP.javelin.core._STAR_tx_STAR_, $_STAR_tx_STAR__orig_val__111174$$ = $APP.javelin.core._STAR_tx_STAR_;
    $APP.javelin.core._STAR_tx_STAR_ = null;
    try {
      return $APP.javelin.core.propagate_STAR_($tx$$);
    } finally {
      $APP.javelin.core._STAR_tx_STAR_ = $_STAR_tx_STAR__orig_val__111174$$;
    }
  } finally {
    $APP.javelin.core._STAR_tx_STAR_ = $_STAR_tx_STAR__orig_val__111172$$;
  }
};
$APP.javelin.core.alts_BANG_ = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$510_argseq__5756__auto__$$ = [], $len__5749__auto___111253$$ = arguments.length, $i__5750__auto___111254$$ = 0;;) {
    if ($i__5750__auto___111254$$ < $len__5749__auto___111253$$) {
      $args__5755__auto__$jscomp$510_argseq__5756__auto__$$.push(arguments[$i__5750__auto___111254$$]), $i__5750__auto___111254$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$510_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$510_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$510_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return $APP.javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$510_argseq__5756__auto__$$);
};
$APP.javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = function($cells$$) {
  var $olds$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count($cells$$), cljs$cst$8951$javelin_DOT_core_SLASH_none)), $tag_neq$$ = function($p1__111176_SHARP_$$, $p2__111177_SHARP_$$) {
    return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2($p1__111176_SHARP_$$, $p2__111177_SHARP_$$), $p2__111177_SHARP_$$], null);
  }, $proc$$ = function() {
    var $G__111260__delegate$$ = function($rest__111180_SHARP_$$) {
      var $news_p1__111179_SHARP_$$ = $APP.cljs.core.deref($olds$$);
      $news_p1__111179_SHARP_$$ = $APP.cljs.core.distinct.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.second, $APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.first, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$3($tag_neq$$, $news_p1__111179_SHARP_$$, $rest__111180_SHARP_$$))));
      $APP.cljs.core.reset_BANG_($olds$$, $rest__111180_SHARP_$$);
      return $news_p1__111179_SHARP_$$;
    }, $G__111260$$ = function($var_args$$) {
      var $G__111261__i_rest__111180_SHARP_$$ = null;
      if (arguments.length > 0) {
        $G__111261__i_rest__111180_SHARP_$$ = 0;
        for (var $G__111261__a$$ = Array(arguments.length - 0); $G__111261__i_rest__111180_SHARP_$$ < $G__111261__a$$.length;) {
          $G__111261__a$$[$G__111261__i_rest__111180_SHARP_$$] = arguments[$G__111261__i_rest__111180_SHARP_$$ + 0], ++$G__111261__i_rest__111180_SHARP_$$;
        }
        $G__111261__i_rest__111180_SHARP_$$ = new $APP.cljs.core.IndexedSeq($G__111261__a$$, 0, null);
      }
      return $G__111260__delegate$$.call(this, $G__111261__i_rest__111180_SHARP_$$);
    };
    $G__111260$$.cljs$lang$maxFixedArity = 0;
    $G__111260$$.cljs$lang$applyTo = function($arglist__111262_rest__111180_SHARP_$$) {
      $arglist__111262_rest__111180_SHARP_$$ = $APP.cljs.core.seq($arglist__111262_rest__111180_SHARP_$$);
      return $G__111260__delegate$$($arglist__111262_rest__111180_SHARP_$$);
    };
    $G__111260$$.cljs$core$IFn$_invoke$arity$variadic = $G__111260__delegate$$;
    return $G__111260$$;
  }();
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.javelin.core.formula.cljs$core$IFn$_invoke$arity$1($proc$$), $cells$$);
};
$APP.javelin.core.alts_BANG_.cljs$lang$maxFixedArity = 0;
$APP.javelin.core.alts_BANG_.cljs$lang$applyTo = function($seq111181$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq111181$$));
};
$APP.javelin.core.cell_map = function($f$$, $c$$) {
  var $cseq$$ = function() {
    var $fexpr__111183$$ = $APP.javelin.core.formula.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq);
    return $fexpr__111183$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__111183$$.cljs$core$IFn$_invoke$arity$1($c$$) : $fexpr__111183$$.call(null, $c$$);
  }();
  return $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__111182_SHARP_$$) {
    var $fexpr__111184$$ = $APP.javelin.core.formula.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.comp.cljs$core$IFn$_invoke$arity$2($f$$, $APP.javelin.core.safe_nth));
    return $fexpr__111184$$.cljs$core$IFn$_invoke$arity$2 ? $fexpr__111184$$.cljs$core$IFn$_invoke$arity$2($cseq$$, $p1__111182_SHARP_$$) : $fexpr__111184$$.call(null, $cseq$$, $p1__111182_SHARP_$$);
  }, $APP.cljs.core.range.cljs$core$IFn$_invoke$arity$2(0, $APP.cljs.core.count($APP.cljs.core.deref($cseq$$))));
};
$APP.javelin.core.cell_doseq_STAR_ = function($c$$, $f$$) {
  var $pool_size$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0), $fexpr__111189$$ = $APP.javelin.core.formula.cljs$core$IFn$_invoke$arity$1(function($cnt$jscomp$58_items$$) {
    $cnt$jscomp$58_items$$ = $APP.cljs.core.count($cnt$jscomp$58_items$$);
    if ($APP.cljs.core.deref($pool_size$$) < $cnt$jscomp$58_items$$) {
      for (var $n__5616__auto___111263$$ = $cnt$jscomp$58_items$$ - $APP.cljs.core.deref($pool_size$$), $i_111264$$ = 0;;) {
        if ($i_111264$$ < $n__5616__auto___111263$$) {
          var $G__111190_111267_G__111192$$ = $c$$;
          var $G__111193$$ = $i_111264$$ + $APP.cljs.core.deref($pool_size$$), $fexpr__111191$$ = $APP.javelin.core.formula.cljs$core$IFn$_invoke$arity$1($APP.javelin.core.safe_nth);
          $G__111190_111267_G__111192$$ = $fexpr__111191$$.cljs$core$IFn$_invoke$arity$2 ? $fexpr__111191$$.cljs$core$IFn$_invoke$arity$2($G__111190_111267_G__111192$$, $G__111193$$) : $fexpr__111191$$.call(null, $G__111190_111267_G__111192$$, $G__111193$$);
          $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($G__111190_111267_G__111192$$) : $f$$.call(null, $G__111190_111267_G__111192$$);
          $i_111264$$ += 1;
        } else {
          break;
        }
      }
      return $APP.cljs.core.reset_BANG_($pool_size$$, $cnt$jscomp$58_items$$);
    }
    return null;
  });
  return $fexpr__111189$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__111189$$.cljs$core$IFn$_invoke$arity$1($c$$) : $fexpr__111189$$.call(null, $c$$);
};
$APP.sci.configs.hoplon = {};
$APP.sci.configs.hoplon.javelin = {};
$APP.sci.configs.hoplon.javelin.Exception = Error;
$APP.sci.configs.hoplon.javelin.jns = $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$8952$javelin_DOT_core, null);
$APP.sci.configs.hoplon.javelin.destructure_STAR_ = new $APP.cljs.core.Delay(function() {
  return $APP.sci.core.eval_string_STAR_($APP.sci.ctx_store.get_ctx(), "destructure");
}, null);
$APP.sci.configs.hoplon.javelin.extract_syms = function($JSCompiler_inline_result$jscomp$3486_bindings$$) {
  var $JSCompiler_temp_const$$ = $APP.cljs.core.map, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.cljs$core$IFn$_invoke$arity$2, $JSCompiler_temp_const$jscomp$1$$ = $APP.cljs.core.first, $JSCompiler_temp_const$jscomp$2$$ = $APP.cljs.core.partition, $JSCompiler_temp_const$jscomp$3$$ = $JSCompiler_temp_const$jscomp$2$$.cljs$core$IFn$_invoke$arity$2, $fexpr__111291$$ = $APP.cljs.core.deref($APP.sci.configs.hoplon.javelin.destructure_STAR_);
  $JSCompiler_inline_result$jscomp$3486_bindings$$ = $fexpr__111291$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__111291$$.cljs$core$IFn$_invoke$arity$1($JSCompiler_inline_result$jscomp$3486_bindings$$) : $fexpr__111291$$.call(null, $JSCompiler_inline_result$jscomp$3486_bindings$$);
  return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_temp_const$jscomp$1$$, $JSCompiler_temp_const$jscomp$3$$.call($JSCompiler_temp_const$jscomp$2$$, 2, $JSCompiler_inline_result$jscomp$3486_bindings$$));
};
$APP.sci.configs.hoplon.javelin.extract_syms_without_autogen = function($bindings$$) {
  var $syms1$$ = $APP.cljs.core.set($APP.sci.configs.hoplon.javelin.extract_syms($bindings$$));
  $bindings$$ = $APP.cljs.core.set($APP.sci.configs.hoplon.javelin.extract_syms($bindings$$));
  return $APP.cljs.core.seq($APP.clojure.set.intersection.cljs$core$IFn$_invoke$arity$2($syms1$$, $bindings$$));
};
$APP.sci.configs.hoplon.javelin.bind_syms = function($form$$) {
  return $APP.sci.configs.hoplon.javelin.extract_syms_without_autogen(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$form$$, null], null));
};
$APP.sci.configs.hoplon.javelin.sci_macroexpand_1 = new $APP.cljs.core.Delay(function() {
  return $APP.sci.core.eval_string_STAR_($APP.sci.ctx_store.get_ctx(), "macroexpand-1");
}, null);
$APP.sci.configs.hoplon.javelin.macroexpand_1_STAR_ = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return $APP.sci.configs.hoplon.javelin.macroexpand_1_STAR_.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return $APP.sci.configs.hoplon.javelin.macroexpand_1_STAR_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
$APP.sci.configs.hoplon.javelin.macroexpand_1_STAR_.cljs$core$IFn$_invoke$arity$1 = function($expr$$) {
  return $APP.sci.configs.hoplon.javelin.macroexpand_1_STAR_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $expr$$);
};
$APP.sci.configs.hoplon.javelin.macroexpand_1_STAR_.cljs$core$IFn$_invoke$arity$2 = function($_env$$, $expr$$) {
  $_env$$ = $APP.cljs.core.deref($APP.sci.configs.hoplon.javelin.sci_macroexpand_1);
  return $_env$$.cljs$core$IFn$_invoke$arity$1 ? $_env$$.cljs$core$IFn$_invoke$arity$1($expr$$) : $_env$$.call(null, $expr$$);
};
$APP.sci.configs.hoplon.javelin.macroexpand_1_STAR_.cljs$lang$maxFixedArity = 2;
$APP.sci.configs.hoplon.javelin.macroexpand_STAR_ = function($env$$, $form$$) {
  if ($APP.cljs.core.seq_QMARK_($form$$)) {
    var $ex$$ = $APP.sci.configs.hoplon.javelin.macroexpand_1_STAR_.cljs$core$IFn$_invoke$arity$2($env$$, $form$$);
    return $ex$$ === $form$$ ? $form$$ : $APP.sci.configs.hoplon.javelin.macroexpand_STAR_.cljs$core$IFn$_invoke$arity$2 ? $APP.sci.configs.hoplon.javelin.macroexpand_STAR_.cljs$core$IFn$_invoke$arity$2($env$$, $ex$$) : $APP.sci.configs.hoplon.javelin.macroexpand_STAR_.call(null, $env$$, $ex$$);
  }
  return $form$$;
};
$APP.sci.configs.hoplon.javelin.macroexpand_all_STAR_ = function($env$$, $form$$) {
  return $APP.clojure.walk.prewalk($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2($APP.sci.configs.hoplon.javelin.macroexpand_STAR_, $env$$), $form$$);
};
$APP.sci.configs.hoplon.javelin.macroexpand_all = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $form$$) {
  return $APP.sci.configs.hoplon.javelin.macroexpand_all_STAR_($_AMPERSAND_env$$, $form$$);
};
$APP.sci.configs.hoplon.javelin.mx = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $form$$) {
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$1278$cljs_DOT_core_SLASH_println, null, 1, null), new $APP.cljs.core.List(null, function() {
    var $sb__5670__auto__$$ = new $APP.goog.string.StringBuffer(), $_STAR_print_newline_STAR__orig_val__111295_111734$$ = $APP.cljs.core._STAR_print_newline_STAR_, $_STAR_print_fn_STAR__orig_val__111296_111735$$ = $APP.cljs.core._STAR_print_fn_STAR_;
    $APP.cljs.core._STAR_print_newline_STAR_ = !0;
    $APP.cljs.core._STAR_print_fn_STAR_ = function($x__5671__auto__$$) {
      return $sb__5670__auto__$$.append($x__5671__auto__$$);
    };
    try {
      $APP.cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic($APP.sci.configs.hoplon.javelin.macroexpand_all_STAR_($_AMPERSAND_env$$, $form$$), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$346$dispatch, $APP.cljs.pprint.code_dispatch], 0));
    } finally {
      $APP.cljs.core._STAR_print_fn_STAR_ = $_STAR_print_fn_STAR__orig_val__111296_111735$$, $APP.cljs.core._STAR_print_newline_STAR_ = $_STAR_print_newline_STAR__orig_val__111295_111734$$;
    }
    return $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($sb__5670__auto__$$);
  }(), null, 1, null))));
};
$APP.sci.configs.hoplon.javelin.mx2 = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $form$$) {
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$1278$cljs_DOT_core_SLASH_println, null, 1, null), new $APP.cljs.core.List(null, function() {
    var $sb__5670__auto__$$ = new $APP.goog.string.StringBuffer(), $_STAR_print_newline_STAR__orig_val__111299_111738$$ = $APP.cljs.core._STAR_print_newline_STAR_, $_STAR_print_fn_STAR__orig_val__111300_111739$$ = $APP.cljs.core._STAR_print_fn_STAR_;
    $APP.cljs.core._STAR_print_newline_STAR_ = !0;
    $APP.cljs.core._STAR_print_fn_STAR_ = function($x__5671__auto__$$) {
      return $sb__5670__auto__$$.append($x__5671__auto__$$);
    };
    try {
      $APP.cljs.pprint.write($APP.sci.configs.hoplon.javelin.macroexpand_all_STAR_($_AMPERSAND_env$$, $form$$));
    } finally {
      $APP.cljs.core._STAR_print_fn_STAR_ = $_STAR_print_fn_STAR__orig_val__111300_111739$$, $APP.cljs.core._STAR_print_newline_STAR_ = $_STAR_print_newline_STAR__orig_val__111299_111738$$;
    }
    return $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($sb__5670__auto__$$);
  }(), null, 1, null))));
};
$APP.sci.configs.hoplon.javelin._STAR_env_STAR_ = null;
$APP.sci.configs.hoplon.javelin._STAR_hoist_STAR_ = null;
$APP.sci.configs.hoplon.javelin._STAR_pass_STAR_ = null;
var to_list_111742 = function($p1__111303_SHARP_$$) {
  return $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.List.EMPTY, $APP.cljs.core.reverse($p1__111303_SHARP_$$));
}, special_111743 = new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 22, [$APP.cljs$cst$148$_AMPERSAND_, "null", $APP.cljs$cst$149$case_STAR_, "null", $APP.cljs$cst$150$defrecord_STAR_, "null", $APP.cljs$cst$151$try, "null", $APP.cljs$cst$152$ns_STAR_, "null", $APP.cljs$cst$154$loop_STAR_, "null", $APP.cljs$cst$155$do, "null", $APP.cljs$cst$156$letfn_STAR_, "null", $APP.cljs$cst$157$if, "null", $APP.cljs$cst$158$new, "null", $APP.cljs$cst$6$ns, "null", $APP.cljs$cst$159$deftype_STAR_, 
"null", $APP.cljs$cst$160$let_STAR_, "null", $APP.cljs$cst$161$js_STAR_, "null", $APP.cljs$cst$162$fn_STAR_, "null", $APP.cljs$cst$163$recur, "null", $APP.cljs$cst$164$set_BANG_, "null", $APP.cljs$cst$165$_DOT_, "null", $APP.cljs$cst$166$var, "null", $APP.cljs$cst$167$quote, "null", $APP.cljs$cst$169$throw, "null", $APP.cljs$cst$170$def, "null"], null), null), special_QMARK__111744 = function($p1__111304_SHARP_$$) {
  return $APP.cljs.core.contains_QMARK_(special_111743, $p1__111304_SHARP_$$);
}, unsupp_QMARK__STAR__111745 = function($p1__111305_SHARP_$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$150$defrecord_STAR_, "null", $APP.cljs$cst$6$ns, "null", $APP.cljs$cst$159$deftype_STAR_, "null", $APP.cljs$cst$170$def, "null"], null), null), $p1__111305_SHARP_$$);
}, core_QMARK__111746 = function($p1__111306_SHARP_$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, ["js", null, "clojure.core", null, "cljs.core", null], null), null), $APP.cljs.core.namespace($p1__111306_SHARP_$$));
}, empty_QMARK__STAR__111747 = function($p1__111307_SHARP_$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(0, $APP.cljs.core.count($p1__111307_SHARP_$$));
}, dot_QMARK__111748 = function($p1__111308_SHARP_$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$165$_DOT_, $APP.cljs.core.first($p1__111308_SHARP_$$));
}, try_QMARK__111749 = function($p1__111309_SHARP_$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$151$try, $APP.cljs.core.first($p1__111309_SHARP_$$));
}, _catch_QMARK__111750 = function($p1__111310_SHARP_$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$168$catch, $APP.cljs.core.first($p1__111310_SHARP_$$));
}, finally_QMARK__111751 = function($p1__111311_SHARP_$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$153$finally, $APP.cljs.core.first($p1__111311_SHARP_$$));
}, binding1_QMARK__111752 = function($p1__111312_SHARP_$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$154$loop_STAR_, "null", $APP.cljs$cst$160$let_STAR_, "null"], null), null), $APP.cljs.core.first($p1__111312_SHARP_$$));
}, binding2_QMARK__111753 = function($p1__111313_SHARP_$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$156$letfn_STAR_, $APP.cljs.core.first($p1__111313_SHARP_$$));
}, binding3_QMARK__111754 = function($p1__111314_SHARP_$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$162$fn_STAR_, $APP.cljs.core.first($p1__111314_SHARP_$$));
}, catch_QMARK__111755 = function($p1__111315_SHARP_$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$168$catch, $APP.cljs.core.first($p1__111315_SHARP_$$));
}, quoted_QMARK__111756 = function($p1__111316_SHARP_$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$167$quote, $APP.cljs.core.first($p1__111316_SHARP_$$));
}, unwrap1_QMARK__111757 = function($p1__111317_SHARP_$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$234$clojure_DOT_core_SLASH_unquote, $APP.cljs.core.first($p1__111317_SHARP_$$));
}, unwrap2_QMARK__111758 = function($p1__111318_SHARP_$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$233$clojure_DOT_core_SLASH_unquote_splicing, $APP.cljs.core.first($p1__111318_SHARP_$$));
}, err1_111759 = function($p1__111319_SHARP_$$) {
  return $APP.clojure.string.replace("formula expansion contains unsupported %s form", "%s", $p1__111319_SHARP_$$);
};
$APP.sci.configs.hoplon.javelin.unsupp_QMARK_ = function($op$jscomp$143_x$$, $local$$) {
  $op$jscomp$143_x$$ = $APP.cljs.core.first($op$jscomp$143_x$$);
  return $APP.cljs.core.not($APP.sci.configs.hoplon.javelin._STAR_env_STAR_.call(null, $op$jscomp$143_x$$)) && $APP.cljs.core.not($local$$.cljs$core$IFn$_invoke$arity$1 ? $local$$.cljs$core$IFn$_invoke$arity$1($op$jscomp$143_x$$) : $local$$.call(null, $op$jscomp$143_x$$)) && unsupp_QMARK__STAR__111745($op$jscomp$143_x$$);
};
$APP.sci.configs.hoplon.javelin.hoist_QMARK_ = function($x$$, $JSCompiler_inline_result$jscomp$3489_local$jscomp$19_or__5025__auto__$$) {
  var $JSCompiler_temp_const$jscomp$3488_and__5023__auto__$jscomp$582_or__5025__auto__$$ = $APP.cljs.core, $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$3488_and__5023__auto__$jscomp$582_or__5025__auto__$$.not;
  $JSCompiler_inline_result$jscomp$3489_local$jscomp$19_or__5025__auto__$$ = $JSCompiler_inline_result$jscomp$3489_local$jscomp$19_or__5025__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $JSCompiler_inline_result$jscomp$3489_local$jscomp$19_or__5025__auto__$$.cljs$core$IFn$_invoke$arity$1($x$$) : $JSCompiler_inline_result$jscomp$3489_local$jscomp$19_or__5025__auto__$$.call(null, $x$$);
  $JSCompiler_inline_result$jscomp$3489_local$jscomp$19_or__5025__auto__$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$3489_local$jscomp$19_or__5025__auto__$$) ? $JSCompiler_inline_result$jscomp$3489_local$jscomp$19_or__5025__auto__$$ : core_QMARK__111746($x$$);
  return ($JSCompiler_temp_const$jscomp$3488_and__5023__auto__$jscomp$582_or__5025__auto__$$ = $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$3488_and__5023__auto__$jscomp$582_or__5025__auto__$$, $JSCompiler_inline_result$jscomp$3489_local$jscomp$19_or__5025__auto__$$)) ? ($JSCompiler_temp_const$jscomp$3488_and__5023__auto__$jscomp$582_or__5025__auto__$$ = $APP.sci.configs.hoplon.javelin._STAR_env_STAR_.call(null, $x$$), $APP.cljs.core.truth_($JSCompiler_temp_const$jscomp$3488_and__5023__auto__$jscomp$582_or__5025__auto__$$) ? 
  $JSCompiler_temp_const$jscomp$3488_and__5023__auto__$jscomp$582_or__5025__auto__$$ : !special_QMARK__111744($x$$)) : $JSCompiler_temp_const$jscomp$3488_and__5023__auto__$jscomp$582_or__5025__auto__$$;
};
$APP.sci.configs.hoplon.javelin.walk_sym = function($x$$, $h$jscomp$350_local$$) {
  if ($APP.cljs.core.not($APP.sci.configs.hoplon.javelin.hoist_QMARK_($x$$, $h$jscomp$350_local$$))) {
    return $x$$;
  }
  $h$jscomp$350_local$$ = function() {
    var $fexpr__111337$$ = $APP.cljs.core.deref($APP.sci.configs.hoplon.javelin._STAR_hoist_STAR_);
    return $fexpr__111337$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__111337$$.cljs$core$IFn$_invoke$arity$1($x$$) : $fexpr__111337$$.call(null, $x$$);
  }();
  $APP.cljs.core.truth_($h$jscomp$350_local$$) || $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3($APP.sci.configs.hoplon.javelin._STAR_hoist_STAR_, $APP.cljs.core.conj, $APP.cljs.core.with_meta($x$$, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$8953$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_h, $APP.cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()], null)));
  return cljs$cst$8953$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_h.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.meta(function() {
    var $fexpr__111338$$ = $APP.cljs.core.deref($APP.sci.configs.hoplon.javelin._STAR_hoist_STAR_);
    return $fexpr__111338$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__111338$$.cljs$core$IFn$_invoke$arity$1($x$$) : $fexpr__111338$$.call(null, $x$$);
  }()));
};
$APP.sci.configs.hoplon.javelin.walk_map = function($x$$, $local$$) {
  return $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.empty($x$$), $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__111320_SHARP_$$) {
    return $APP.cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(function($x__$1$$) {
      return $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2 ? $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2($x__$1$$, $local$$) : $APP.sci.configs.hoplon.javelin.walk.call(null, $x__$1$$, $local$$);
    }, $p1__111320_SHARP_$$);
  }, $x$$));
};
$APP.sci.configs.hoplon.javelin.walk_seq = function($x$$, $local$$) {
  return $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.empty($x$$), $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__111321_SHARP_$$) {
    return $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2 ? $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2($p1__111321_SHARP_$$, $local$$) : $APP.sci.configs.hoplon.javelin.walk.call(null, $p1__111321_SHARP_$$, $local$$);
  }, $x$$));
};
$APP.sci.configs.hoplon.javelin.walk_bind1 = function($first__111342_p__111339$$, $bindings__$1$jscomp$10_local$$) {
  var $first__111342__$1_seq__111341$$ = $APP.cljs.core.seq($first__111342_p__111339$$);
  $first__111342_p__111339$$ = $APP.cljs.core.first($first__111342__$1_seq__111341$$);
  var $seq__111341__$1_seq__111341__$2$$ = $APP.cljs.core.next($first__111342__$1_seq__111341$$);
  $first__111342__$1_seq__111341$$ = $APP.cljs.core.first($seq__111341__$1_seq__111341__$2$$);
  $seq__111341__$1_seq__111341__$2$$ = $APP.cljs.core.next($seq__111341__$1_seq__111341__$2$$);
  var $local__$1$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($bindings__$1$jscomp$10_local$$);
  $bindings__$1$jscomp$10_local$$ = $APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(function($JSCompiler_temp_const$jscomp$3491_p__111343_x$$) {
    var $k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_temp_const$jscomp$3491_p__111343_x$$, 0, null), $JSCompiler_inline_result$jscomp$3492_v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_temp_const$jscomp$3491_p__111343_x$$, 1, null);
    $JSCompiler_temp_const$jscomp$3491_p__111343_x$$ = $APP.cljs.core.PersistentVector;
    var $JSCompiler_temp_const$$ = $APP.cljs.core.PersistentVector.EMPTY_NODE, $G__111348$$ = $APP.cljs.core.deref($local__$1$$);
    $JSCompiler_inline_result$jscomp$3492_v$$ = $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2 ? $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2($JSCompiler_inline_result$jscomp$3492_v$$, $G__111348$$) : $APP.sci.configs.hoplon.javelin.walk.call(null, $JSCompiler_inline_result$jscomp$3492_v$$, $G__111348$$);
    $JSCompiler_temp_const$jscomp$3491_p__111343_x$$ = new $JSCompiler_temp_const$jscomp$3491_p__111343_x$$(null, 2, 5, $JSCompiler_temp_const$$, [$k$$, $JSCompiler_inline_result$jscomp$3492_v$$], null);
    $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3($local__$1$$, $APP.cljs.core.conj, $k$$);
    return $JSCompiler_temp_const$jscomp$3491_p__111343_x$$;
  }, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2, $first__111342__$1_seq__111341$$)], 0));
  return to_list_111742($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $first__111342_p__111339$$, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1($bindings__$1$jscomp$10_local$$)))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__111322_SHARP_$$) {
    var $G__111350$$ = $APP.cljs.core.deref($local__$1$$);
    return $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2 ? $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2($p1__111322_SHARP_$$, $G__111350$$) : $APP.sci.configs.hoplon.javelin.walk.call(null, $p1__111322_SHARP_$$, $G__111350$$);
  }, $seq__111341__$1_seq__111341__$2$$)], 0)))));
};
$APP.sci.configs.hoplon.javelin.walk_catch = function($first__111354_p__111351$$, $local$$) {
  var $first__111354__$1_seq__111353$$ = $APP.cljs.core.seq($first__111354_p__111351$$);
  $first__111354_p__111351$$ = $APP.cljs.core.first($first__111354__$1_seq__111353$$);
  var $seq__111353__$1_seq__111353__$2_seq__111353__$3$$ = $APP.cljs.core.next($first__111354__$1_seq__111353$$);
  $first__111354__$1_seq__111353$$ = $APP.cljs.core.first($seq__111353__$1_seq__111353__$2_seq__111353__$3$$);
  $seq__111353__$1_seq__111353__$2_seq__111353__$3$$ = $APP.cljs.core.next($seq__111353__$1_seq__111353__$2_seq__111353__$3$$);
  var $first__111354__$2$$ = $APP.cljs.core.first($seq__111353__$1_seq__111353__$2_seq__111353__$3$$);
  $seq__111353__$1_seq__111353__$2_seq__111353__$3$$ = $APP.cljs.core.next($seq__111353__$1_seq__111353__$2_seq__111353__$3$$);
  return to_list_111742($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $first__111354_p__111351$$, null, 1, null), new $APP.cljs.core.List(null, $first__111354__$1_seq__111353$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $first__111354__$2$$, null, 1, null), $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__111323_SHARP_$$) {
    var $G__111356$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($local$$, $first__111354__$2$$);
    return $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2 ? $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2($p1__111323_SHARP_$$, $G__111356$$) : $APP.sci.configs.hoplon.javelin.walk.call(null, $p1__111323_SHARP_$$, $G__111356$$);
  }, $seq__111353__$1_seq__111353__$2_seq__111353__$3$$)], 0)))));
};
$APP.sci.configs.hoplon.javelin.walk_finally = function($first__111360_p__111357$$, $local$$) {
  var $body$$ = $APP.cljs.core.seq($first__111360_p__111357$$);
  $first__111360_p__111357$$ = $APP.cljs.core.first($body$$);
  $body$$ = $APP.cljs.core.next($body$$);
  return to_list_111742($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $first__111360_p__111357$$, null, 1, null), $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__111324_SHARP_$$) {
    return $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2 ? $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2($p1__111324_SHARP_$$, $local$$) : $APP.sci.configs.hoplon.javelin.walk.call(null, $p1__111324_SHARP_$$, $local$$);
  }, $body$$)))));
};
$APP.sci.configs.hoplon.javelin.walk_try = function($first__111366_p__111363$$, $local$$) {
  var $body$$ = $APP.cljs.core.seq($first__111366_p__111363$$);
  $first__111366_p__111363$$ = $APP.cljs.core.first($body$$);
  $body$$ = $APP.cljs.core.next($body$$);
  return to_list_111742($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $first__111366_p__111363$$, null, 1, null), $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__111325_SHARP_$$) {
    var $fexpr__111369$$ = $APP.cljs.core.seq_QMARK_($p1__111325_SHARP_$$) ? catch_QMARK__111755($p1__111325_SHARP_$$) ? $APP.sci.configs.hoplon.javelin.walk_catch : finally_QMARK__111751($p1__111325_SHARP_$$) ? $APP.sci.configs.hoplon.javelin.walk_finally : $APP.sci.configs.hoplon.javelin.walk : $APP.sci.configs.hoplon.javelin.walk;
    return $fexpr__111369$$.cljs$core$IFn$_invoke$arity$2 ? $fexpr__111369$$.cljs$core$IFn$_invoke$arity$2($p1__111325_SHARP_$$, $local$$) : $fexpr__111369$$.call(null, $p1__111325_SHARP_$$, $local$$);
  }, $body$$)))));
};
$APP.sci.configs.hoplon.javelin.walk_bind2 = function($first__111375_p__111372$$, $bindings__$1$jscomp$11_local$$) {
  var $first__111375__$1_seq__111374$$ = $APP.cljs.core.seq($first__111375_p__111372$$);
  $first__111375_p__111372$$ = $APP.cljs.core.first($first__111375__$1_seq__111374$$);
  var $seq__111374__$1_seq__111374__$2$$ = $APP.cljs.core.next($first__111375__$1_seq__111374$$);
  $first__111375__$1_seq__111374$$ = $APP.cljs.core.first($seq__111374__$1_seq__111374__$2$$);
  $seq__111374__$1_seq__111374__$2$$ = $APP.cljs.core.next($seq__111374__$1_seq__111374__$2$$);
  var $local__$1$$ = $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.conj, $bindings__$1$jscomp$11_local$$, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.first, $APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2, $first__111375__$1_seq__111374$$)));
  $bindings__$1$jscomp$11_local$$ = $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$3(function($p1__111326_SHARP_$$, $p2__111327_SHARP_$$) {
    return $p1__111326_SHARP_$$.cljs$core$IFn$_invoke$arity$1 ? $p1__111326_SHARP_$$.cljs$core$IFn$_invoke$arity$1($p2__111327_SHARP_$$) : $p1__111326_SHARP_$$.call(null, $p2__111327_SHARP_$$);
  }, $APP.cljs.core.cycle(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.identity, function($p1__111328_SHARP_$$) {
    return $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2 ? $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2($p1__111328_SHARP_$$, $local__$1$$) : $APP.sci.configs.hoplon.javelin.walk.call(null, $p1__111328_SHARP_$$, $local__$1$$);
  }], null)), $first__111375__$1_seq__111374$$);
  return to_list_111742($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $first__111375_p__111372$$, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1($bindings__$1$jscomp$11_local$$)))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__111329_SHARP_$$) {
    return $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2 ? $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2($p1__111329_SHARP_$$, $local__$1$$) : $APP.sci.configs.hoplon.javelin.walk.call(null, $p1__111329_SHARP_$$, $local__$1$$);
  }, $seq__111374__$1_seq__111374__$2$$)], 0)))));
};
$APP.sci.configs.hoplon.javelin.walk_bind3 = function($first__111381_p__111377$$, $arities__$3_local$$) {
  var $fname$$ = $APP.cljs.core.seq($first__111381_p__111377$$);
  $first__111381_p__111377$$ = $APP.cljs.core.first($fname$$);
  var $arities__$1$$ = $APP.cljs.core.next($fname$$);
  $fname$$ = $APP.cljs.core.first($arities__$1$$) instanceof $APP.cljs.core.Symbol ? new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.first($arities__$1$$)], null) : null;
  $arities__$1$$ = $APP.cljs.core.truth_($fname$$) ? $APP.cljs.core.rest($arities__$1$$) : $arities__$1$$;
  $arities__$1$$ = $APP.cljs.core.vector_QMARK_($APP.cljs.core.first($arities__$1$$)) ? new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$arities__$1$$], null) : $arities__$1$$;
  var $local__$1$$ = $APP.cljs.core.truth_($fname$$) ? $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($arities__$3_local$$, $APP.cljs.core.first($fname$$)) : $arities__$3_local$$;
  $arities__$3_local$$ = $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($first__111389_p__111386$$) {
    var $seq__111388_seq__111388__$1$$ = $APP.cljs.core.seq($first__111389_p__111386$$);
    $first__111389_p__111386$$ = $APP.cljs.core.first($seq__111388_seq__111388__$1$$);
    $seq__111388_seq__111388__$1$$ = $APP.cljs.core.next($seq__111388_seq__111388__$1$$);
    var $local__$2$$ = $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($local__$1$$, $APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2(function($p1__111330_SHARP_$$) {
      return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$148$_AMPERSAND_, $p1__111330_SHARP_$$);
    }, $first__111389_p__111386$$));
    return to_list_111742($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1($first__111389_p__111386$$)))), null, 1, null), $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__111331_SHARP_$$) {
      return $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2 ? $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2($p1__111331_SHARP_$$, $local__$2$$) : $APP.sci.configs.hoplon.javelin.walk.call(null, $p1__111331_SHARP_$$, $local__$2$$);
    }, $seq__111388_seq__111388__$1$$)))));
  }, $arities__$1$$);
  return to_list_111742($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $first__111381_p__111377$$, null, 1, null), $fname$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$arities__$3_local$$], 0)))));
};
$APP.sci.configs.hoplon.javelin.walk_passthru = function($x$$, $local$jscomp$29_s$$) {
  $local$jscomp$29_s$$ = $APP.cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
  $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4($APP.sci.configs.hoplon.javelin._STAR_pass_STAR_, $APP.cljs.core.assoc, $local$jscomp$29_s$$, $x$$);
  return $local$jscomp$29_s$$;
};
$APP.sci.configs.hoplon.javelin.walk_dot = function($first__111400_p__111397$$, $local$$) {
  var $first__111400__$2_seq__111399_seq__111399__$1$$ = $APP.cljs.core.seq($first__111400_p__111397$$);
  $first__111400_p__111397$$ = $APP.cljs.core.first($first__111400__$2_seq__111399_seq__111399__$1$$);
  $first__111400__$2_seq__111399_seq__111399__$1$$ = $APP.cljs.core.next($first__111400__$2_seq__111399_seq__111399__$1$$);
  var $first__111400__$1_obj__$1$$ = $APP.cljs.core.first($first__111400__$2_seq__111399_seq__111399__$1$$), $more__$1$$ = $APP.cljs.core.next($first__111400__$2_seq__111399_seq__111399__$1$$);
  $first__111400__$2_seq__111399_seq__111399__$1$$ = $APP.cljs.core.first($more__$1$$);
  $more__$1$$ = $APP.cljs.core.next($more__$1$$);
  $first__111400__$1_obj__$1$$ = $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2 ? $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2($first__111400__$1_obj__$1$$, $local$$) : $APP.sci.configs.hoplon.javelin.walk.call(null, $first__111400__$1_obj__$1$$, $local$$);
  $more__$1$$ = $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__111332_SHARP_$$) {
    return $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2 ? $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2($p1__111332_SHARP_$$, $local$$) : $APP.sci.configs.hoplon.javelin.walk.call(null, $p1__111332_SHARP_$$, $local$$);
  }, $more__$1$$);
  var $walk_meth$$ = function($m$$) {
    return new $APP.cljs.core.List(null, $APP.cljs.core.first($m$$), new $APP.cljs.core.List(null, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__111333_SHARP_$$) {
      return $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2 ? $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2($p1__111333_SHARP_$$, $local$$) : $APP.sci.configs.hoplon.javelin.walk.call(null, $p1__111333_SHARP_$$, $local$$);
    }, $APP.cljs.core.rest($m$$)), null, 1, null), 2, null);
  };
  return to_list_111742($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $first__111400_p__111397$$, null, 1, null), new $APP.cljs.core.List(null, $first__111400__$1_obj__$1$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.seq_QMARK_($first__111400__$2_seq__111399_seq__111399__$1$$) ? new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$walk_meth$$($first__111400__$2_seq__111399_seq__111399__$1$$)], null) : $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $first__111400__$2_seq__111399_seq__111399__$1$$, null, 1, null), $more__$1$$))))], 0)))));
};
$APP.sci.configs.hoplon.javelin.walk_list = function($x$$, $local$$) {
  if (empty_QMARK__STAR__111747($x$$)) {
    return $x$$;
  }
  if (dot_QMARK__111748($x$$)) {
    return $APP.sci.configs.hoplon.javelin.walk_dot($x$$, $local$$);
  }
  if (try_QMARK__111749($x$$)) {
    return $APP.sci.configs.hoplon.javelin.walk_try($x$$, $local$$);
  }
  if (binding1_QMARK__111752($x$$)) {
    return $APP.sci.configs.hoplon.javelin.walk_bind1($x$$, $local$$);
  }
  if (binding2_QMARK__111753($x$$)) {
    return $APP.sci.configs.hoplon.javelin.walk_bind2($x$$, $local$$);
  }
  if (binding3_QMARK__111754($x$$)) {
    return $APP.sci.configs.hoplon.javelin.walk_bind3($x$$, $local$$);
  }
  if (quoted_QMARK__111756($x$$)) {
    return $APP.sci.configs.hoplon.javelin.walk_passthru($x$$, $local$$);
  }
  if (unwrap1_QMARK__111757($x$$)) {
    return $APP.sci.configs.hoplon.javelin.walk_passthru($APP.cljs.core.second($x$$), $local$$);
  }
  if (unwrap2_QMARK__111758($x$$)) {
    return $APP.sci.configs.hoplon.javelin.walk_passthru(new $APP.cljs.core.List(null, $APP.cljs$cst$348$deref, new $APP.cljs.core.List(null, $APP.cljs.core.second($x$$), null, 1, null), 2, null), $local$$);
  }
  if ($APP.sci.configs.hoplon.javelin.unsupp_QMARK_($x$$, $local$$)) {
    throw new $APP.sci.configs.hoplon.javelin.Exception(err1_111759($APP.cljs.core.first($x$$)));
  }
  return to_list_111742($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__111335_SHARP_$$) {
    return $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2 ? $APP.sci.configs.hoplon.javelin.walk.cljs$core$IFn$_invoke$arity$2($p1__111335_SHARP_$$, $local$$) : $APP.sci.configs.hoplon.javelin.walk.call(null, $p1__111335_SHARP_$$, $local$$);
  }, $x$$));
};
$APP.sci.configs.hoplon.javelin.walk = function($x$$, $local$$) {
  return $x$$ instanceof $APP.cljs.core.Symbol ? $APP.sci.configs.hoplon.javelin.walk_sym($x$$, $local$$) : $APP.cljs.core.map_QMARK_($x$$) ? $APP.sci.configs.hoplon.javelin.walk_map($x$$, $local$$) : $APP.cljs.core.set_QMARK_($x$$) ? $APP.sci.configs.hoplon.javelin.walk_seq($x$$, $local$$) : $APP.cljs.core.vector_QMARK_($x$$) ? $APP.sci.configs.hoplon.javelin.walk_seq($x$$, $local$$) : $APP.cljs.core.seq_QMARK_($x$$) ? $APP.sci.configs.hoplon.javelin.walk_list($x$$, $local$$) : $x$$;
};
$APP.sci.configs.hoplon.javelin.hoist = function($x$$, $env$$) {
  var $_STAR_env_STAR__orig_val__111413$$ = $APP.sci.configs.hoplon.javelin._STAR_env_STAR_, $_STAR_hoist_STAR__orig_val__111414$$ = $APP.sci.configs.hoplon.javelin._STAR_hoist_STAR_, $_STAR_pass_STAR__orig_val__111415$$ = $APP.sci.configs.hoplon.javelin._STAR_pass_STAR_, $_STAR_hoist_STAR__temp_val__111417$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentHashSet.EMPTY), $_STAR_pass_STAR__temp_val__111418$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY);
  $APP.sci.configs.hoplon.javelin._STAR_env_STAR_ = $env$$;
  $APP.sci.configs.hoplon.javelin._STAR_hoist_STAR_ = $_STAR_hoist_STAR__temp_val__111417$$;
  $APP.sci.configs.hoplon.javelin._STAR_pass_STAR_ = $_STAR_pass_STAR__temp_val__111418$$;
  try {
    var $body$$ = $APP.sci.configs.hoplon.javelin.walk($APP.sci.configs.hoplon.javelin.macroexpand_all_STAR_($env$$, $x$$), $APP.cljs.core.PersistentHashSet.EMPTY), $vec__111419$$ = $APP.cljs.core.empty_QMARK_($APP.cljs.core.deref($APP.sci.configs.hoplon.javelin._STAR_pass_STAR_)) ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.PersistentVector.EMPTY, $APP.cljs.core.PersistentVector.EMPTY], null) : $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.map, 
    $APP.cljs.core.vector, $APP.cljs.core.deref($APP.sci.configs.hoplon.javelin._STAR_pass_STAR_)), $params$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__111419$$, 0, null), $args$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__111419$$, 1, null), $params__$1$$ = $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($params$$, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__111336_SHARP_$$) {
      return cljs$cst$8953$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_h.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.meta($p1__111336_SHARP_$$));
    }, $APP.cljs.core.deref($APP.sci.configs.hoplon.javelin._STAR_hoist_STAR_))), $args__$1$$ = $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($args$$, $APP.cljs.core.deref($APP.sci.configs.hoplon.javelin._STAR_hoist_STAR_));
    return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.List(null, $APP.cljs$cst$28$fn, new $APP.cljs.core.List(null, $params__$1$$, new $APP.cljs.core.List(null, $body$$, null, 1, null), 2, null), 3, null), $args__$1$$], null);
  } finally {
    $APP.sci.configs.hoplon.javelin._STAR_pass_STAR_ = $_STAR_pass_STAR__orig_val__111415$$, $APP.sci.configs.hoplon.javelin._STAR_hoist_STAR_ = $_STAR_hoist_STAR__orig_val__111414$$, $APP.sci.configs.hoplon.javelin._STAR_env_STAR_ = $_STAR_env_STAR__orig_val__111413$$;
  }
};
$APP.sci.configs.hoplon.javelin.cell_STAR_ = function($f$jscomp$1409_x$$, $args$jscomp$522_env$$) {
  $args$jscomp$522_env$$ = $APP.sci.configs.hoplon.javelin.hoist($f$jscomp$1409_x$$, $args$jscomp$522_env$$);
  $f$jscomp$1409_x$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($args$jscomp$522_env$$, 0, null);
  $args$jscomp$522_env$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($args$jscomp$522_env$$, 1, null);
  return to_list_111742($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$8954$javelin_DOT_core_SLASH_formula, null, 1, null), new $APP.cljs.core.List(null, $f$jscomp$1409_x$$, null, 1, null)))), null, 1, null), $args$jscomp$522_env$$))));
};
$APP.sci.configs.hoplon.javelin.with_let = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$511_argseq__5756__auto__$$ = [], $len__5749__auto___111772$$ = arguments.length, $i__5750__auto___111773$$ = 0;;) {
    if ($i__5750__auto___111773$$ < $len__5749__auto___111772$$) {
      $args__5755__auto__$jscomp$511_argseq__5756__auto__$$.push(arguments[$i__5750__auto___111773$$]), $i__5750__auto___111773$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$511_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$511_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$511_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return $APP.sci.configs.hoplon.javelin.with_let.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$511_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.javelin.with_let.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$jscomp$43_binding$$, $_AMPERSAND_env$$, $p__111447_resource$$, $body$$) {
  $_AMPERSAND_form$jscomp$43_binding$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__111447_resource$$, 0, null);
  $p__111447_resource$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__111447_resource$$, 1, null);
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$412$cljs_DOT_core_SLASH_let, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $_AMPERSAND_form$jscomp$43_binding$$, null, 1, null), new $APP.cljs.core.List(null, 
  $p__111447_resource$$, null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$body$$, new $APP.cljs.core.List(null, $_AMPERSAND_form$jscomp$43_binding$$, null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.javelin.with_let.cljs$lang$maxFixedArity = 3;
$APP.sci.configs.hoplon.javelin.with_let.cljs$lang$applyTo = function($G__111438_seq111436$$) {
  var $G__111437$$ = $APP.cljs.core.first($G__111438_seq111436$$), $G__111439_seq111436__$1$$ = $APP.cljs.core.next($G__111438_seq111436$$);
  $G__111438_seq111436$$ = $APP.cljs.core.first($G__111439_seq111436__$1$$);
  var $seq111436__$2_seq111436__$3$$ = $APP.cljs.core.next($G__111439_seq111436__$1$$);
  $G__111439_seq111436__$1$$ = $APP.cljs.core.first($seq111436__$2_seq111436__$3$$);
  $seq111436__$2_seq111436__$3$$ = $APP.cljs.core.next($seq111436__$2_seq111436__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__111437$$, $G__111438_seq111436$$, $G__111439_seq111436__$1$$, $seq111436__$2_seq111436__$3$$);
};
$APP.sci.configs.hoplon.javelin.cell_EQ_ = function($var_args$$) {
  switch(arguments.length) {
    case 3:
      return $APP.sci.configs.hoplon.javelin.cell_EQ_.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return $APP.sci.configs.hoplon.javelin.cell_EQ_.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
$APP.sci.configs.hoplon.javelin.cell_EQ_.cljs$core$IFn$_invoke$arity$3 = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $expr$$) {
  return $APP.sci.configs.hoplon.javelin.cell_STAR_($expr$$, $_AMPERSAND_env$$);
};
$APP.sci.configs.hoplon.javelin.cell_EQ_.cljs$core$IFn$_invoke$arity$4 = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $expr$$, $f$$) {
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$8955$javelin_DOT_core_SLASH_with_let, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, cljs$cst$8956$c__111458__auto__, null, 1, null), new $APP.cljs.core.List(null, 
  $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$8957$javelin_DOT_core_SLASH_cell_EQ_, null, 1, null), new $APP.cljs.core.List(null, $expr$$, null, 1, null)))), null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$164$set_BANG_, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, cljs$cst$8958$_DOT__update, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$8956$c__111458__auto__, null, 1, null)))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $f$$, null, 1, null)], 0)))), null, 1, null)], 
  0))));
};
$APP.sci.configs.hoplon.javelin.cell_EQ_.cljs$lang$maxFixedArity = 4;
$APP.sci.configs.hoplon.javelin.set_cell_BANG__EQ_ = function($var_args$$) {
  switch(arguments.length) {
    case 4:
      return $APP.sci.configs.hoplon.javelin.set_cell_BANG__EQ_.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return $APP.sci.configs.hoplon.javelin.set_cell_BANG__EQ_.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
$APP.sci.configs.hoplon.javelin.set_cell_BANG__EQ_.cljs$core$IFn$_invoke$arity$4 = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $c$$, $expr$$) {
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$8959$javelin_DOT_core_SLASH_set_cell_BANG__EQ_, null, 1, null), new $APP.cljs.core.List(null, $c$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $expr$$, null, 1, null), new $APP.cljs.core.List(null, null, null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.javelin.set_cell_BANG__EQ_.cljs$core$IFn$_invoke$arity$5 = function($_AMPERSAND_form$jscomp$47_f$$, $_AMPERSAND_env$jscomp$43_args$$, $c$$, $expr$$, $updatefn$$) {
  $_AMPERSAND_env$jscomp$43_args$$ = $APP.sci.configs.hoplon.javelin.hoist($expr$$, $_AMPERSAND_env$jscomp$43_args$$);
  $_AMPERSAND_form$jscomp$47_f$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($_AMPERSAND_env$jscomp$43_args$$, 0, null);
  $_AMPERSAND_env$jscomp$43_args$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($_AMPERSAND_env$jscomp$43_args$$, 1, null);
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$8960$javelin_DOT_core_SLASH_set_formula_BANG_, null, 1, null), new $APP.cljs.core.List(null, $c$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $_AMPERSAND_form$jscomp$47_f$$, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1($_AMPERSAND_env$jscomp$43_args$$)))), 
  null, 1, null), new $APP.cljs.core.List(null, $updatefn$$, null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.javelin.set_cell_BANG__EQ_.cljs$lang$maxFixedArity = 5;
$APP.sci.configs.hoplon.javelin.defc = function($var_args$$) {
  switch(arguments.length) {
    case 4:
      return $APP.sci.configs.hoplon.javelin.defc.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return $APP.sci.configs.hoplon.javelin.defc.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
$APP.sci.configs.hoplon.javelin.defc.cljs$core$IFn$_invoke$arity$4 = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $sym$$, $expr$$) {
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$170$def, null, 1, null), new $APP.cljs.core.List(null, $sym$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, 
  cljs$cst$8961$javelin_DOT_core_SLASH_cell, null, 1, null), new $APP.cljs.core.List(null, $expr$$, null, 1, null)))), null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.javelin.defc.cljs$core$IFn$_invoke$arity$5 = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $sym$$, $doc$$, $expr$$) {
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$170$def, null, 1, null), new $APP.cljs.core.List(null, $sym$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $doc$$, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, 
  cljs$cst$8961$javelin_DOT_core_SLASH_cell, null, 1, null), new $APP.cljs.core.List(null, $expr$$, null, 1, null)))), null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.javelin.defc.cljs$lang$maxFixedArity = 5;
$APP.sci.configs.hoplon.javelin.defc_EQ_ = function($var_args$$) {
  switch(arguments.length) {
    case 4:
      return $APP.sci.configs.hoplon.javelin.defc_EQ_.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      for (var $args_arr__5774__auto__$jscomp$145_argseq__5775__auto__$$ = [], $len__5749__auto___111805$$ = arguments.length, $i__5750__auto___111806$$ = 0;;) {
        if ($i__5750__auto___111806$$ < $len__5749__auto___111805$$) {
          $args_arr__5774__auto__$jscomp$145_argseq__5775__auto__$$.push(arguments[$i__5750__auto___111806$$]), $i__5750__auto___111806$$ += 1;
        } else {
          break;
        }
      }
      $args_arr__5774__auto__$jscomp$145_argseq__5775__auto__$$ = 4 < $args_arr__5774__auto__$jscomp$145_argseq__5775__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args_arr__5774__auto__$jscomp$145_argseq__5775__auto__$$.slice(4), 0, null) : null;
      return $APP.sci.configs.hoplon.javelin.defc_EQ_.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], arguments[3], $args_arr__5774__auto__$jscomp$145_argseq__5775__auto__$$);
  }
};
$APP.sci.configs.hoplon.javelin.defc_EQ_.cljs$core$IFn$_invoke$arity$4 = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $sym$$, $expr$$) {
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$170$def, null, 1, null), new $APP.cljs.core.List(null, $sym$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$8957$javelin_DOT_core_SLASH_cell_EQ_, null, 1, null), new $APP.cljs.core.List(null, $expr$$, null, 1, null)))), null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.javelin.defc_EQ_.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$jscomp$51_expr$jscomp$145_expr__$1$$, $_AMPERSAND_env$jscomp$47_f$jscomp$1412_f__$1$jscomp$60_temp__5825__auto__$$, $sym$$, $doc$$, $doc_QMARK__p__111536$$) {
  $_AMPERSAND_form$jscomp$51_expr$jscomp$145_expr__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($doc_QMARK__p__111536$$, 0, null);
  $_AMPERSAND_env$jscomp$47_f$jscomp$1412_f__$1$jscomp$60_temp__5825__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($doc_QMARK__p__111536$$, 1, null);
  $doc_QMARK__p__111536$$ = typeof $doc$$ === "string";
  $_AMPERSAND_env$jscomp$47_f$jscomp$1412_f__$1$jscomp$60_temp__5825__auto__$$ = $doc_QMARK__p__111536$$ ? $_AMPERSAND_env$jscomp$47_f$jscomp$1412_f__$1$jscomp$60_temp__5825__auto__$$ : $_AMPERSAND_form$jscomp$51_expr$jscomp$145_expr__$1$$;
  $_AMPERSAND_env$jscomp$47_f$jscomp$1412_f__$1$jscomp$60_temp__5825__auto__$$ = $APP.cljs.core.truth_($_AMPERSAND_env$jscomp$47_f$jscomp$1412_f__$1$jscomp$60_temp__5825__auto__$$) ? new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$_AMPERSAND_env$jscomp$47_f$jscomp$1412_f__$1$jscomp$60_temp__5825__auto__$$], null) : null;
  $_AMPERSAND_form$jscomp$51_expr$jscomp$145_expr__$1$$ = $doc_QMARK__p__111536$$ ? $_AMPERSAND_form$jscomp$51_expr$jscomp$145_expr__$1$$ : $doc$$;
  $doc$$ = $doc_QMARK__p__111536$$ ? new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$doc$$], null) : null;
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$170$def, null, 1, null), new $APP.cljs.core.List(null, $sym$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$doc$$, new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$8957$javelin_DOT_core_SLASH_cell_EQ_, null, 1, null), new $APP.cljs.core.List(null, $_AMPERSAND_form$jscomp$51_expr$jscomp$145_expr__$1$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$_AMPERSAND_env$jscomp$47_f$jscomp$1412_f__$1$jscomp$60_temp__5825__auto__$$], 0)))), null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.javelin.defc_EQ_.cljs$lang$applyTo = function($G__111516_seq111514$$) {
  var $G__111515$$ = $APP.cljs.core.first($G__111516_seq111514$$), $G__111517_seq111514__$1$$ = $APP.cljs.core.next($G__111516_seq111514$$);
  $G__111516_seq111514$$ = $APP.cljs.core.first($G__111517_seq111514__$1$$);
  var $G__111518_seq111514__$2$$ = $APP.cljs.core.next($G__111517_seq111514__$1$$);
  $G__111517_seq111514__$1$$ = $APP.cljs.core.first($G__111518_seq111514__$2$$);
  var $seq111514__$3_seq111514__$4$$ = $APP.cljs.core.next($G__111518_seq111514__$2$$);
  $G__111518_seq111514__$2$$ = $APP.cljs.core.first($seq111514__$3_seq111514__$4$$);
  $seq111514__$3_seq111514__$4$$ = $APP.cljs.core.next($seq111514__$3_seq111514__$4$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__111515$$, $G__111516_seq111514$$, $G__111517_seq111514__$1$$, $G__111518_seq111514__$2$$, $seq111514__$3_seq111514__$4$$);
};
$APP.sci.configs.hoplon.javelin.defc_EQ_.cljs$lang$maxFixedArity = 4;
$APP.sci.configs.hoplon.javelin.formula_of = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$512_argseq__5756__auto__$$ = [], $len__5749__auto___111815$$ = arguments.length, $i__5750__auto___111816$$ = 0;;) {
    if ($i__5750__auto___111816$$ < $len__5749__auto___111815$$) {
      $args__5755__auto__$jscomp$512_argseq__5756__auto__$$.push(arguments[$i__5750__auto___111816$$]), $i__5750__auto___111816$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$512_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$512_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$512_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return $APP.sci.configs.hoplon.javelin.formula_of.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$512_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.javelin.formula_of.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $deps$$, $body$$) {
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$8954$javelin_DOT_core_SLASH_formula, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1($deps$$)))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$body$$], 0)))), null, 1, null)))), null, 1, null), $deps$$)));
};
$APP.sci.configs.hoplon.javelin.formula_of.cljs$lang$maxFixedArity = 3;
$APP.sci.configs.hoplon.javelin.formula_of.cljs$lang$applyTo = function($G__111552_seq111550$$) {
  var $G__111551$$ = $APP.cljs.core.first($G__111552_seq111550$$), $G__111553_seq111550__$1$$ = $APP.cljs.core.next($G__111552_seq111550$$);
  $G__111552_seq111550$$ = $APP.cljs.core.first($G__111553_seq111550__$1$$);
  var $seq111550__$2_seq111550__$3$$ = $APP.cljs.core.next($G__111553_seq111550__$1$$);
  $G__111553_seq111550__$1$$ = $APP.cljs.core.first($seq111550__$2_seq111550__$3$$);
  $seq111550__$2_seq111550__$3$$ = $APP.cljs.core.next($seq111550__$2_seq111550__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__111551$$, $G__111552_seq111550$$, $G__111553_seq111550__$1$$, $seq111550__$2_seq111550__$3$$);
};
$APP.sci.configs.hoplon.javelin.formulet = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$513_argseq__5756__auto__$$ = [], $len__5749__auto___111829$$ = arguments.length, $i__5750__auto___111830$$ = 0;;) {
    if ($i__5750__auto___111830$$ < $len__5749__auto___111829$$) {
      $args__5755__auto__$jscomp$513_argseq__5756__auto__$$.push(arguments[$i__5750__auto___111830$$]), $i__5750__auto___111830$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$513_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$513_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$513_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return $APP.sci.configs.hoplon.javelin.formulet.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$513_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.javelin.formulet.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $bindings$$, $body$$) {
  $_AMPERSAND_form$$ = $APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2, $bindings$$);
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$8954$javelin_DOT_core_SLASH_formula, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.first, $_AMPERSAND_form$$))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$body$$], 0)))), null, 1, null)))), null, 1, null), $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.second, 
  $_AMPERSAND_form$$))));
};
$APP.sci.configs.hoplon.javelin.formulet.cljs$lang$maxFixedArity = 3;
$APP.sci.configs.hoplon.javelin.formulet.cljs$lang$applyTo = function($G__111570_seq111568$$) {
  var $G__111569$$ = $APP.cljs.core.first($G__111570_seq111568$$), $G__111571_seq111568__$1$$ = $APP.cljs.core.next($G__111570_seq111568$$);
  $G__111570_seq111568$$ = $APP.cljs.core.first($G__111571_seq111568__$1$$);
  var $seq111568__$2_seq111568__$3$$ = $APP.cljs.core.next($G__111571_seq111568__$1$$);
  $G__111571_seq111568__$1$$ = $APP.cljs.core.first($seq111568__$2_seq111568__$3$$);
  $seq111568__$2_seq111568__$3$$ = $APP.cljs.core.next($seq111568__$2_seq111568__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__111569$$, $G__111570_seq111568$$, $G__111571_seq111568__$1$$, $seq111568__$2_seq111568__$3$$);
};
$APP.sci.configs.hoplon.javelin.cell_let_1 = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$514_argseq__5756__auto__$$ = [], $len__5749__auto___111843$$ = arguments.length, $i__5750__auto___111844$$ = 0;;) {
    if ($i__5750__auto___111844$$ < $len__5749__auto___111843$$) {
      $args__5755__auto__$jscomp$514_argseq__5756__auto__$$.push(arguments[$i__5750__auto___111844$$]), $i__5750__auto___111844$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$514_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$514_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$514_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return $APP.sci.configs.hoplon.javelin.cell_let_1.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$514_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.javelin.cell_let_1.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$jscomp$54_bindings$$, $_AMPERSAND_env$jscomp$50_c$$, $p__111592_syms$$, $body$$) {
  $_AMPERSAND_form$jscomp$54_bindings$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__111592_syms$$, 0, null);
  $_AMPERSAND_env$jscomp$50_c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__111592_syms$$, 1, null);
  $p__111592_syms$$ = $APP.sci.configs.hoplon.javelin.bind_syms($_AMPERSAND_form$jscomp$54_bindings$$);
  $_AMPERSAND_form$jscomp$54_bindings$$ = $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$8954$javelin_DOT_core_SLASH_formula, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.List(null, $_AMPERSAND_form$jscomp$54_bindings$$, null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1($p__111592_syms$$)))), 
  null, 1, null)], 0)))), null, 1, null)))), null, 1, null), new $APP.cljs.core.List(null, $_AMPERSAND_env$jscomp$50_c$$, null, 1, null))));
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$412$cljs_DOT_core_SLASH_let, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1($p__111592_syms$$)))), 
  null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$8962$javelin_DOT_core_SLASH_cell_map, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs$cst$8963$cljs_DOT_core_SLASH_identity, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $_AMPERSAND_form$jscomp$54_bindings$$, null, 1, 
  null)], 0)))), null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$body$$], 0))));
};
$APP.sci.configs.hoplon.javelin.cell_let_1.cljs$lang$maxFixedArity = 3;
$APP.sci.configs.hoplon.javelin.cell_let_1.cljs$lang$applyTo = function($G__111587_seq111585$$) {
  var $G__111586$$ = $APP.cljs.core.first($G__111587_seq111585$$), $G__111588_seq111585__$1$$ = $APP.cljs.core.next($G__111587_seq111585$$);
  $G__111587_seq111585$$ = $APP.cljs.core.first($G__111588_seq111585__$1$$);
  var $seq111585__$2_seq111585__$3$$ = $APP.cljs.core.next($G__111588_seq111585__$1$$);
  $G__111588_seq111585__$1$$ = $APP.cljs.core.first($seq111585__$2_seq111585__$3$$);
  $seq111585__$2_seq111585__$3$$ = $APP.cljs.core.next($seq111585__$2_seq111585__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__111586$$, $G__111587_seq111585$$, $G__111588_seq111585__$1$$, $seq111585__$2_seq111585__$3$$);
};
$APP.sci.configs.hoplon.javelin.cell_let = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$515_argseq__5756__auto__$$ = [], $len__5749__auto___111857$$ = arguments.length, $i__5750__auto___111858$$ = 0;;) {
    if ($i__5750__auto___111858$$ < $len__5749__auto___111857$$) {
      $args__5755__auto__$jscomp$515_argseq__5756__auto__$$.push(arguments[$i__5750__auto___111858$$]), $i__5750__auto___111858$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$515_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$515_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$515_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return $APP.sci.configs.hoplon.javelin.cell_let.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$515_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.javelin.cell_let.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $p__111616_seq__111619__$1_seq__111619__$2$$, $body$$) {
  $_AMPERSAND_env$$ = $APP.cljs.core.seq($p__111616_seq__111619__$1_seq__111619__$2$$);
  $_AMPERSAND_form$$ = $APP.cljs.core.first($_AMPERSAND_env$$);
  $p__111616_seq__111619__$1_seq__111619__$2$$ = $APP.cljs.core.next($_AMPERSAND_env$$);
  $_AMPERSAND_env$$ = $APP.cljs.core.first($p__111616_seq__111619__$1_seq__111619__$2$$);
  $p__111616_seq__111619__$1_seq__111619__$2$$ = $APP.cljs.core.next($p__111616_seq__111619__$1_seq__111619__$2$$);
  return $APP.cljs.core.not($APP.cljs.core.seq($p__111616_seq__111619__$1_seq__111619__$2$$)) ? $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$8964$javelin_DOT_core_SLASH_cell_let_1, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, 
  $_AMPERSAND_form$$, null, 1, null), new $APP.cljs.core.List(null, $_AMPERSAND_env$$, null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$body$$], 0)))) : $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$8964$javelin_DOT_core_SLASH_cell_let_1, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, 
  $_AMPERSAND_form$$, null, 1, null), new $APP.cljs.core.List(null, $_AMPERSAND_env$$, null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$8965$javelin_DOT_core_SLASH_cell_let, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($p__111616_seq__111619__$1_seq__111619__$2$$), 
  null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$body$$], 0)))), null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.javelin.cell_let.cljs$lang$maxFixedArity = 3;
$APP.sci.configs.hoplon.javelin.cell_let.cljs$lang$applyTo = function($G__111610_seq111608$$) {
  var $G__111609$$ = $APP.cljs.core.first($G__111610_seq111608$$), $G__111611_seq111608__$1$$ = $APP.cljs.core.next($G__111610_seq111608$$);
  $G__111610_seq111608$$ = $APP.cljs.core.first($G__111611_seq111608__$1$$);
  var $seq111608__$2_seq111608__$3$$ = $APP.cljs.core.next($G__111611_seq111608__$1$$);
  $G__111611_seq111608__$1$$ = $APP.cljs.core.first($seq111608__$2_seq111608__$3$$);
  $seq111608__$2_seq111608__$3$$ = $APP.cljs.core.next($seq111608__$2_seq111608__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__111609$$, $G__111610_seq111608$$, $G__111611_seq111608__$1$$, $seq111608__$2_seq111608__$3$$);
};
$APP.sci.configs.hoplon.javelin.dosync = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$516_argseq__5756__auto__$$ = [], $len__5749__auto___111860$$ = arguments.length, $i__5750__auto___111861$$ = 0;;) {
    if ($i__5750__auto___111861$$ < $len__5749__auto___111860$$) {
      $args__5755__auto__$jscomp$516_argseq__5756__auto__$$.push(arguments[$i__5750__auto___111861$$]), $i__5750__auto___111861$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$516_argseq__5756__auto__$$ = 2 < $args__5755__auto__$jscomp$516_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$516_argseq__5756__auto__$$.slice(2), 0, null) : null;
  return $APP.sci.configs.hoplon.javelin.dosync.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args__5755__auto__$jscomp$516_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.javelin.dosync.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $body$$) {
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, cljs$cst$8966$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_dosync_STAR_, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, null, 1, null), 
  new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$body$$], 0)))), null, 1, null))));
};
$APP.sci.configs.hoplon.javelin.dosync.cljs$lang$maxFixedArity = 2;
$APP.sci.configs.hoplon.javelin.dosync.cljs$lang$applyTo = function($G__111632_seq111630$$) {
  var $G__111631$$ = $APP.cljs.core.first($G__111632_seq111630$$), $seq111630__$1_seq111630__$2$$ = $APP.cljs.core.next($G__111632_seq111630$$);
  $G__111632_seq111630$$ = $APP.cljs.core.first($seq111630__$1_seq111630__$2$$);
  $seq111630__$1_seq111630__$2$$ = $APP.cljs.core.next($seq111630__$1_seq111630__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__111631$$, $G__111632_seq111630$$, $seq111630__$1_seq111630__$2$$);
};
$APP.sci.configs.hoplon.javelin.cell_doseq = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$517_argseq__5756__auto__$$ = [], $len__5749__auto___111863$$ = arguments.length, $i__5750__auto___111864$$ = 0;;) {
    if ($i__5750__auto___111864$$ < $len__5749__auto___111863$$) {
      $args__5755__auto__$jscomp$517_argseq__5756__auto__$$.push(arguments[$i__5750__auto___111864$$]), $i__5750__auto___111864$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$517_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$517_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$517_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return $APP.sci.configs.hoplon.javelin.cell_doseq.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$517_argseq__5756__auto__$$);
};
$APP.sci.configs.hoplon.javelin.cell_doseq.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$jscomp$57_lets$$, $_AMPERSAND_env$$, $bindings$jscomp$263_pairs$jscomp$27_syms$$, $body$$) {
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(2, $APP.cljs.core.count($bindings$jscomp$263_pairs$jscomp$27_syms$$))) {
    return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$8967$javelin_DOT_core_SLASH_cell_doseq_STAR_, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, 
    $APP.cljs$cst$8954$javelin_DOT_core_SLASH_formula, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs$cst$720$cljs_DOT_core_SLASH_seq, null, 1, null)))), null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.second($bindings$jscomp$263_pairs$jscomp$27_syms$$), null, 1, null)))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
    $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.List(null, cljs$cst$8968$item__111639__auto__, null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
    $APP.cljs$cst$8965$javelin_DOT_core_SLASH_cell_let, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs.core.first($bindings$jscomp$263_pairs$jscomp$27_syms$$), null, 1, null), new $APP.cljs.core.List(null, cljs$cst$8968$item__111639__auto__, null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$body$$], 
    0)))), null, 1, null)], 0)))), null, 1, null)], 0))));
  }
  $bindings$jscomp$263_pairs$jscomp$27_syms$$ = $APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2, $bindings$jscomp$263_pairs$jscomp$27_syms$$);
  $_AMPERSAND_form$jscomp$57_lets$$ = $APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.second, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.comp.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._EQ_, $APP.cljs$cst$714$let), $APP.cljs.core.first), $bindings$jscomp$263_pairs$jscomp$27_syms$$)], 0));
  $_AMPERSAND_env$$ = $APP.cljs.core.take_while.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.complement($APP.cljs.core.comp.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.keyword_QMARK_, $APP.cljs.core.first)), $bindings$jscomp$263_pairs$jscomp$27_syms$$);
  var $mods_STAR_$$ = $APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.identity, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.complement($APP.cljs.core.comp.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.keyword_QMARK_, $APP.cljs.core.first)), $bindings$jscomp$263_pairs$jscomp$27_syms$$)], 0));
  $bindings$jscomp$263_pairs$jscomp$27_syms$$ = $APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.comp.cljs$core$IFn$_invoke$arity$2($APP.sci.configs.hoplon.javelin.bind_syms, $APP.cljs.core.first), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$_AMPERSAND_env$$], 0));
  var $exprs$$ = $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.second, $_AMPERSAND_env$$), $gens$$ = $APP.cljs.core.take.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count($exprs$$), $APP.cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.gensym));
  $_AMPERSAND_env$$ = $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.interleave.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.first, $_AMPERSAND_env$$), $gens$$), $mods_STAR_$$);
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$8967$javelin_DOT_core_SLASH_cell_doseq_STAR_, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$8954$javelin_DOT_core_SLASH_formula, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1($gens$$)))), 
  null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$8969$cljs_DOT_core_SLASH_for, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1($_AMPERSAND_env$$)))), 
  null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1($bindings$jscomp$263_pairs$jscomp$27_syms$$)))), null, 1, null)], 0)))), null, 1, null)], 0)))), null, 1, null)))), null, 1, null), $exprs$$))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.List(null, cljs$cst$8970$item__111642__auto__, null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$8965$javelin_DOT_core_SLASH_cell_let, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1($bindings$jscomp$263_pairs$jscomp$27_syms$$)))), null, 1, null), new $APP.cljs.core.List(null, 
  cljs$cst$8970$item__111642__auto__, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$_AMPERSAND_form$jscomp$57_lets$$], 0))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$body$$], 0)))), null, 1, null)], 0)))), null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.javelin.cell_doseq.cljs$lang$maxFixedArity = 3;
$APP.sci.configs.hoplon.javelin.cell_doseq.cljs$lang$applyTo = function($G__111647_seq111645$$) {
  var $G__111646$$ = $APP.cljs.core.first($G__111647_seq111645$$), $G__111648_seq111645__$1$$ = $APP.cljs.core.next($G__111647_seq111645$$);
  $G__111647_seq111645$$ = $APP.cljs.core.first($G__111648_seq111645__$1$$);
  var $seq111645__$2_seq111645__$3$$ = $APP.cljs.core.next($G__111648_seq111645__$1$$);
  $G__111648_seq111645__$1$$ = $APP.cljs.core.first($seq111645__$2_seq111645__$3$$);
  $seq111645__$2_seq111645__$3$$ = $APP.cljs.core.next($seq111645__$2_seq111645__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__111646$$, $G__111647_seq111645$$, $G__111648_seq111645__$1$$, $seq111645__$2_seq111645__$3$$);
};
$APP.sci.configs.hoplon.javelin.prop_cell = function($var_args$$) {
  switch(arguments.length) {
    case 3:
      return $APP.sci.configs.hoplon.javelin.prop_cell.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      for (var $args_arr__5774__auto__$jscomp$146_argseq__5775__auto__$$ = [], $len__5749__auto___111879$$ = arguments.length, $i__5750__auto___111880$$ = 0;;) {
        if ($i__5750__auto___111880$$ < $len__5749__auto___111879$$) {
          $args_arr__5774__auto__$jscomp$146_argseq__5775__auto__$$.push(arguments[$i__5750__auto___111880$$]), $i__5750__auto___111880$$ += 1;
        } else {
          break;
        }
      }
      $args_arr__5774__auto__$jscomp$146_argseq__5775__auto__$$ = 4 < $args_arr__5774__auto__$jscomp$146_argseq__5775__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args_arr__5774__auto__$jscomp$146_argseq__5775__auto__$$.slice(4), 0, null) : null;
      return $APP.sci.configs.hoplon.javelin.prop_cell.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], arguments[3], $args_arr__5774__auto__$jscomp$146_argseq__5775__auto__$$);
  }
};
$APP.sci.configs.hoplon.javelin.prop_cell.cljs$core$IFn$_invoke$arity$3 = function($_AMPERSAND_form$$, $_AMPERSAND_env$$, $prop$$) {
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$412$cljs_DOT_core_SLASH_let, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, cljs$cst$8971$ret__111661__auto__, null, 1, null), new $APP.cljs.core.List(null, 
  $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, cljs$cst$8972$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_cell, null, 1, null), new $APP.cljs.core.List(null, $prop$$, null, 1, null)))), null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$8973$js_SLASH_setInterval, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$162$fn_STAR_, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, 
  $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$8974$cljs_DOT_core_SLASH_reset_BANG_, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$8971$ret__111661__auto__, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $prop$$, null, 1, null)], 0)))), null, 1, null)], 0)))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, 
  100, null, 1, null)], 0)))), null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$8957$javelin_DOT_core_SLASH_cell_EQ_, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$8971$ret__111661__auto__, null, 1, null)))), null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.javelin.prop_cell.cljs$core$IFn$_invoke$arity$variadic = function($_AMPERSAND_form$jscomp$59_callback$$, $_AMPERSAND_env$$, $prop$$, $setter$$, $p__111688$$) {
  $_AMPERSAND_form$jscomp$59_callback$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__111688$$, 0, null);
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$412$cljs_DOT_core_SLASH_let, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$8975$setter__111663__auto__, null, 1, null), new $APP.cljs.core.List(null, 
  $setter$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, cljs$cst$8976$callback__111664__auto__, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$826$cljs_DOT_core_SLASH_or, null, 1, null), new $APP.cljs.core.List(null, $_AMPERSAND_form$jscomp$59_callback$$, null, 1, null), 
  $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs$cst$8963$cljs_DOT_core_SLASH_identity, null, 1, null)], 0)))), null, 1, null)], 0))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$8957$javelin_DOT_core_SLASH_cell_EQ_, null, 1, 
  null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$164$set_BANG_, null, 1, null), new $APP.cljs.core.List(null, $prop$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, cljs$cst$8975$setter__111663__auto__, null, 1, null)], 0)))), null, 1, null)))), null, 1, null), new $APP.cljs.core.List(null, 
  $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$8973$js_SLASH_setInterval, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$162$fn_STAR_, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))), 
  null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$730$cljs_DOT_core_SLASH_when, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$486$cljs_DOT_core_SLASH_not_EQ_, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$803$cljs_DOT_core_SLASH_deref, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$8975$setter__111663__auto__, null, 1, null)))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $prop$$, 
  null, 1, null)], 0)))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, cljs$cst$8976$callback__111664__auto__, null, 1, null), new $APP.cljs.core.List(null, $prop$$, null, 1, null)))), null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$164$set_BANG_, null, 1, null), new $APP.cljs.core.List(null, $prop$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$803$cljs_DOT_core_SLASH_deref, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$8975$setter__111663__auto__, null, 1, null)))), null, 1, null)], 
  0)))), null, 1, null)], 0)))), null, 1, null)], 0)))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, 100, null, 1, null)], 0)))), null, 1, null), new $APP.cljs.core.List(null, cljs$cst$8975$setter__111663__auto__, null, 1, null)], 0))));
};
$APP.sci.configs.hoplon.javelin.prop_cell.cljs$lang$applyTo = function($G__111668_seq111666$$) {
  var $G__111667$$ = $APP.cljs.core.first($G__111668_seq111666$$), $G__111669_seq111666__$1$$ = $APP.cljs.core.next($G__111668_seq111666$$);
  $G__111668_seq111666$$ = $APP.cljs.core.first($G__111669_seq111666__$1$$);
  var $G__111670_seq111666__$2$$ = $APP.cljs.core.next($G__111669_seq111666__$1$$);
  $G__111669_seq111666__$1$$ = $APP.cljs.core.first($G__111670_seq111666__$2$$);
  var $seq111666__$3_seq111666__$4$$ = $APP.cljs.core.next($G__111670_seq111666__$2$$);
  $G__111670_seq111666__$2$$ = $APP.cljs.core.first($seq111666__$3_seq111666__$4$$);
  $seq111666__$3_seq111666__$4$$ = $APP.cljs.core.next($seq111666__$3_seq111666__$4$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__111667$$, $G__111668_seq111666$$, $G__111669_seq111666__$1$$, $G__111670_seq111666__$2$$, $seq111666__$3_seq111666__$4$$);
};
$APP.sci.configs.hoplon.javelin.prop_cell.cljs$lang$maxFixedArity = 4;
$APP.sci.configs.hoplon.javelin.javelin_core_ns = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic($APP.sci.core._copy_ns($APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs.core.with_meta(cljs$cst$8977$set_formula_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null), 
new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$52$f], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$52$f, $APP.cljs$cst$4619$sources], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$52$f, $APP.cljs$cst$4619$sources, cljs$cst$8978$updatefn], 
null))), $APP.cljs$cst$256$doc, "Given a Cell and optional formula function f and the cells f depends on,\n  sources, updates the formula for this cell in place. If f and/or sources\n  is not spcified they are set to nil.", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 4, $APP.cljs$cst$1379$max_fixed_arity, 4, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$52$f], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$52$f, $APP.cljs$cst$4619$sources], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2673$this, $APP.cljs$cst$52$f, $APP.cljs$cst$4619$sources, cljs$cst$8978$updatefn], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$52$f], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2673$this, $APP.cljs$cst$52$f, $APP.cljs$cst$4619$sources], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$52$f, $APP.cljs$cst$4619$sources, cljs$cst$8978$updatefn], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null, null, null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$8979$lens, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2230$c, $APP.cljs$cst$52$f], null))), $APP.cljs$cst$256$doc, "Returns a new lens whose value is the same as c's with update function f.\n  This is equivalent to ((formula identity f) c)."], null)), $APP.cljs.core.with_meta(cljs$cst$8980$lens_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$774$declared, !0], null)), $APP.cljs.core.with_meta(cljs$cst$8981$formula_QMARK_, 
new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2230$c], null))), $APP.cljs$cst$256$doc, "Returns c if c is a formula cell, nil otherwise."], null)), $APP.cljs.core.with_meta(cljs$cst$8982$formula, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f, cljs$cst$8978$updatefn], null))), $APP.cljs$cst$256$doc, "Returns a function that returns a formula cell with f as its formula, and\n  if updatefn is provided the returned cell is a lens.\n\n  See also: the javelin.core/cell\x3d macro.\n\n      (def x (cell 100))\n      (def y (cell 200))\n\n      (def z1 (cell\x3d (+ x y)))\n      (def z2 ((formula +) x y))\n\n  The formula cells z1 and z2 are equivalent.", 
$APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$52$f, cljs$cst$8978$updatefn], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f, cljs$cst$8978$updatefn], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$8983$Cell, 
new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$774$declared, !0], null)), $APP.cljs.core.with_meta(cljs$cst$8984$lift, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$5882$deprecated, !0], null)), $APP.cljs.core.with_meta(cljs$cst$8985$constant_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2230$c], null))), $APP.cljs$cst$256$doc, "Returns c if c is a constant formula cell, nil otherwise."], null)), $APP.cljs.core.with_meta(cljs$cst$8986$alts_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$8987$cells], null))), $APP.cljs$cst$256$doc, 
"Given a number of cells, returns a formula cell whose value is a seq of\n  values from cells that changed in the last update. Note that multiple cells\n  may update atomically, which is why the formula's value is a seq.\n\n  Consider:\n\n      (def a (cell {:x 1 :y 2}))\n      (def x (cell\x3d (:x a)))\n      (def y (cell\x3d (:y a)))\n      (def z (alts! x y))\n\n  then,\n\n      (deref z) ;\x3d\x3e (1 2)\n\n      (swap! a assoc :x 42)\n      (deref z) ;\x3d\x3e (42)\n\n      (reset! a {:x 10 :y 20})\n      (deref z) ;\x3d\x3e (10 20)\n  ", 
$APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 0, $APP.cljs$cst$1379$max_fixed_arity, 0, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$8987$cells)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$8987$cells], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$8988$cell_map, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f, $APP.cljs$cst$2230$c], null))), $APP.cljs$cst$256$doc, 
"Given a function f and a cell c that contains a seqable collection of items,\n  returns a seq of formula cells such that the ith formula cell is equivalent\n  to (cell\x3d (f (nth c i)))."], null)), $APP.cljs.core.with_meta(cljs$cst$8989$set_cell_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2230$c, 
$APP.cljs$cst$1237$x], null))), $APP.cljs$cst$256$doc, "Converts c to an input cell in place, setting its contents to x. It's okay\n  if c was already an input cell. Changes will be propagated to any cells that\n  depend on c."], null)), $APP.cljs.core.with_meta(cljs$cst$8990$cell, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$774$declared, !0], null)), $APP.cljs.core.with_meta(cljs$cst$8991$cell_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$774$declared, !0], 
null)), $APP.cljs.core.with_meta(cljs$cst$8992$cell_doseq_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2230$c, $APP.cljs$cst$52$f], null))), $APP.cljs$cst$256$doc, "Given a function f and a cell c that contains a seqable collection of items,\n  calls f for side effects once for each item in c, passing one argument: a\n  formula cell equivalent to (cell\x3d (nth c i)) for the ith item in c. Whenever\n  c grows beyond its previous maximum size f is called as above for each item\n  beyond the maximum size. Nothing happens when c shrinks.\n\n  See also: the javelin.core/cell-doseq macro.\n\n  Consider:\n\n      (def things (cell [:a :b :c]))\n      (cell-doseq*\n        things\n        (fn doit [x]\n          (prn :creating @x)\n          (add-watch x nil #(prn :updating %3 %4))))\n\n      ;; the following is printed:\n\n      :creating :a\n      :creating :b\n      :creating :c\n\n  Shrink things by removing the last item:\n\n      (swap! things pop)\n\n      ;; the following is printed (because the 3rd item in things is now nil,\n      ;; since things only contains 2 items) -- note that the doit function is\n      ;; not called (or we would see a :creating message):\n\n      :updating :c nil\n\n  Grow things such that it is one item larger than it ever was:\n\n      (swap! things into [:u :v])\n\n      ;; the following is printed (because things now has 4 items, so the 3rd\n      ;; item is now :u and the max size increases by one with the new item :v):\n\n      :updating nil :u\n      :creating :v\n\n  A weird imagination is most useful to gain full advantage of all the features."], 
null)), $APP.cljs.core.with_meta(cljs$cst$8993$__GT_Cell, new $APP.cljs.core.PersistentArrayMap(null, 5, [$APP.cljs$cst$3758$protocols, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 7, [cljs$cst$8994$cljs_DOT_core_SLASH_IWatchable, "null", cljs$cst$8995$cljs_DOT_core_SLASH_IReset, "null", cljs$cst$8996$cljs_DOT_core_SLASH_ISwap, "null", $APP.cljs$cst$3785$cljs_DOT_core_SLASH_IMeta, "null", $APP.cljs$cst$4052$cljs_DOT_core_SLASH_IDeref, "null", $APP.cljs$cst$3793$cljs_DOT_core_SLASH_IPrintWithWriter, 
"null", $APP.cljs$cst$3800$cljs_DOT_core_SLASH_IWithMeta, "null"], null), null), $APP.cljs$cst$2139$factory, $APP.cljs$cst$2145$positional, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 11, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$20$meta, $APP.cljs$cst$44$state, cljs$cst$8946$rank, $APP.cljs$cst$49$prev, $APP.cljs$cst$4619$sources, cljs$cst$8947$sinks, cljs$cst$8948$thunk, $APP.cljs$cst$46$watches, 
$APP.cljs$cst$1192$update, cljs$cst$8949$constant, cljs$cst$8950$numwatches], null))), $APP.cljs$cst$3805$skip_protocol_flag, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 7, [cljs$cst$8994$cljs_DOT_core_SLASH_IWatchable, "null", cljs$cst$8995$cljs_DOT_core_SLASH_IReset, "null", cljs$cst$8996$cljs_DOT_core_SLASH_ISwap, "null", $APP.cljs$cst$3785$cljs_DOT_core_SLASH_IMeta, "null", $APP.cljs$cst$4052$cljs_DOT_core_SLASH_IDeref, "null", $APP.cljs$cst$3793$cljs_DOT_core_SLASH_IPrintWithWriter, 
"null", $APP.cljs$cst$3800$cljs_DOT_core_SLASH_IWithMeta, "null"], null), null), $APP.cljs$cst$256$doc, "Positional factory function for javelin.core/Cell."], null)), $APP.cljs.core.with_meta(cljs$cst$8997$destroy_cell_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null), new $APP.cljs.core.PersistentVector(null, 
2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, cljs$cst$8998$keep_watches_QMARK_], null))), $APP.cljs$cst$256$doc, "Unlinks this Cell from the cell graph and resets all internal state. Watches\n  are preserved when keep-watches? is true, otherwise they are all removed.", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, 
new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, cljs$cst$8998$keep_watches_QMARK_], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2673$this], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, cljs$cst$8998$keep_watches_QMARK_], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$8999$dosync_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$8948$thunk], null))), $APP.cljs$cst$256$doc, "Calls the thunk with no arguments within a transaction. Propagation of\n  updates to formula cells is deferred until the transaction is complete.\n  Input cells *will* update during the transaction. Transactions may be\n  nested.\n\n  See also: the javelin.core/dosync macro."], null)), $APP.cljs.core.with_meta(cljs$cst$9000$deref_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
$APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x], null))), $APP.cljs$cst$256$doc, "If x is a Cell dereferences x and returns the value, otherwise returns x."], null)), $APP.cljs.core.with_meta(cljs$cst$9001$input_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$774$declared, !0], null))], [new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
cljs$cst$8960$javelin_DOT_core_SLASH_set_formula_BANG_, $APP.cljs$cst$108$val, $APP.javelin.core.set_formula_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$52$f], null), 
new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$52$f, $APP.cljs$cst$4619$sources], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, $APP.cljs$cst$52$f, $APP.cljs$cst$4619$sources, cljs$cst$8978$updatefn], null)), $APP.cljs$cst$256$doc, "Given a Cell and optional formula function f and the cells f depends on,\n  sources, updates the formula for this cell in place. If f and/or sources\n  is not spcified they are set to nil."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9002$javelin_DOT_core_SLASH_lens, $APP.cljs$cst$108$val, $APP.javelin.core.lens, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2230$c, $APP.cljs$cst$52$f], null)), $APP.cljs$cst$256$doc, "Returns a new lens whose value is the same as c's with update function f.\n  This is equivalent to ((formula identity f) c)."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9003$javelin_DOT_core_SLASH_lens_QMARK_, $APP.cljs$cst$108$val, $APP.javelin.core.lens_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2230$c], null)), $APP.cljs$cst$256$doc, "Returns c if c is a lens, nil otherwise."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9004$javelin_DOT_core_SLASH_formula_QMARK_, $APP.cljs$cst$108$val, $APP.javelin.core.formula_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2230$c], null)), $APP.cljs$cst$256$doc, "Returns c if c is a formula cell, nil otherwise."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, $APP.cljs$cst$8954$javelin_DOT_core_SLASH_formula, $APP.cljs$cst$108$val, $APP.javelin.core.formula, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$52$f, cljs$cst$8978$updatefn], null)), $APP.cljs$cst$256$doc, "Returns a function that returns a formula cell with f as its formula, and\n  if updatefn is provided the returned cell is a lens.\n\n  See also: the javelin.core/cell\x3d macro.\n\n      (def x (cell 100))\n      (def y (cell 200))\n\n      (def z1 (cell\x3d (+ x y)))\n      (def z2 ((formula +) x y))\n\n  The formula cells z1 and z2 are equivalent."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
cljs$cst$9005$javelin_DOT_core_SLASH_Cell, $APP.cljs$cst$108$val, $APP.javelin.core.Cell, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9006$javelin_DOT_core_SLASH_lift, $APP.cljs$cst$108$val, $APP.javelin.core.lift, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9007$javelin_DOT_core_SLASH_constant_QMARK_, 
$APP.cljs$cst$108$val, $APP.javelin.core.constant_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2230$c], null)), $APP.cljs$cst$256$doc, "Returns c if c is a constant formula cell, nil otherwise."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9008$javelin_DOT_core_SLASH_alts_BANG_, 
$APP.cljs$cst$108$val, $APP.javelin.core.alts_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$8987$cells], null)), $APP.cljs$cst$256$doc, "Given a number of cells, returns a formula cell whose value is a seq of\n  values from cells that changed in the last update. Note that multiple cells\n  may update atomically, which is why the formula's value is a seq.\n\n  Consider:\n\n      (def a (cell {:x 1 :y 2}))\n      (def x (cell\x3d (:x a)))\n      (def y (cell\x3d (:y a)))\n      (def z (alts! x y))\n\n  then,\n\n      (deref z) ;\x3d\x3e (1 2)\n\n      (swap! a assoc :x 42)\n      (deref z) ;\x3d\x3e (42)\n\n      (reset! a {:x 10 :y 20})\n      (deref z) ;\x3d\x3e (10 20)\n  "], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$8962$javelin_DOT_core_SLASH_cell_map, $APP.cljs$cst$108$val, $APP.javelin.core.cell_map, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f, $APP.cljs$cst$2230$c], null)), $APP.cljs$cst$256$doc, "Given a function f and a cell c that contains a seqable collection of items,\n  returns a seq of formula cells such that the ith formula cell is equivalent\n  to (cell\x3d (f (nth c i)))."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9009$javelin_DOT_core_SLASH_set_cell_BANG_, $APP.cljs$cst$108$val, $APP.javelin.core.set_cell_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2230$c, $APP.cljs$cst$1237$x], null)), $APP.cljs$cst$256$doc, "Converts c to an input cell in place, setting its contents to x. It's okay\n  if c was already an input cell. Changes will be propagated to any cells that\n  depend on c."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$8961$javelin_DOT_core_SLASH_cell, $APP.cljs$cst$108$val, $APP.javelin.core.cell, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$1237$x, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$20$meta], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns a new input cell containing value x. The :meta option can be used\n  to create the cell with the given metadata map."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
cljs$cst$9010$javelin_DOT_core_SLASH_cell_QMARK_, $APP.cljs$cst$108$val, $APP.javelin.core.cell_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2230$c], null)), $APP.cljs$cst$256$doc, "Returns c if c is a Cell, nil otherwise."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
cljs$cst$8967$javelin_DOT_core_SLASH_cell_doseq_STAR_, $APP.cljs$cst$108$val, $APP.javelin.core.cell_doseq_STAR_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2230$c, $APP.cljs$cst$52$f], null)), $APP.cljs$cst$256$doc, "Given a function f and a cell c that contains a seqable collection of items,\n  calls f for side effects once for each item in c, passing one argument: a\n  formula cell equivalent to (cell\x3d (nth c i)) for the ith item in c. Whenever\n  c grows beyond its previous maximum size f is called as above for each item\n  beyond the maximum size. Nothing happens when c shrinks.\n\n  See also: the javelin.core/cell-doseq macro.\n\n  Consider:\n\n      (def things (cell [:a :b :c]))\n      (cell-doseq*\n        things\n        (fn doit [x]\n          (prn :creating @x)\n          (add-watch x nil #(prn :updating %3 %4))))\n\n      ;; the following is printed:\n\n      :creating :a\n      :creating :b\n      :creating :c\n\n  Shrink things by removing the last item:\n\n      (swap! things pop)\n\n      ;; the following is printed (because the 3rd item in things is now nil,\n      ;; since things only contains 2 items) -- note that the doit function is\n      ;; not called (or we would see a :creating message):\n\n      :updating :c nil\n\n  Grow things such that it is one item larger than it ever was:\n\n      (swap! things into [:u :v])\n\n      ;; the following is printed (because things now has 4 items, so the 3rd\n      ;; item is now :u and the max size increases by one with the new item :v):\n\n      :updating nil :u\n      :creating :v\n\n  A weird imagination is most useful to gain full advantage of all the features."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9011$javelin_DOT_core_SLASH___GT_Cell, $APP.cljs$cst$108$val, $APP.javelin.core.__GT_Cell, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 11, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$20$meta, $APP.cljs$cst$44$state, cljs$cst$8946$rank, $APP.cljs$cst$49$prev, $APP.cljs$cst$4619$sources, 
cljs$cst$8947$sinks, cljs$cst$8948$thunk, $APP.cljs$cst$46$watches, $APP.cljs$cst$1192$update, cljs$cst$8949$constant, cljs$cst$8950$numwatches], null)), $APP.cljs$cst$256$doc, "Positional factory function for javelin.core/Cell."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9012$javelin_DOT_core_SLASH_destroy_cell_BANG_, $APP.cljs$cst$108$val, $APP.javelin.core.destroy_cell_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this, cljs$cst$8998$keep_watches_QMARK_], null)), $APP.cljs$cst$256$doc, "Unlinks this Cell from the cell graph and resets all internal state. Watches\n  are preserved when keep-watches? is true, otherwise they are all removed."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9013$javelin_DOT_core_SLASH_dosync_STAR_, $APP.cljs$cst$108$val, $APP.javelin.core.dosync_STAR_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$8948$thunk], null)), $APP.cljs$cst$256$doc, "Calls the thunk with no arguments within a transaction. Propagation of\n  updates to formula cells is deferred until the transaction is complete.\n  Input cells *will* update during the transaction. Transactions may be\n  nested.\n\n  See also: the javelin.core/dosync macro."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9014$javelin_DOT_core_SLASH_deref_STAR_, $APP.cljs$cst$108$val, $APP.javelin.core.deref_STAR_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x], null)), $APP.cljs$cst$256$doc, "If x is a Cell dereferences x and returns the value, otherwise returns x."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9015$javelin_DOT_core_SLASH_input_QMARK_, $APP.cljs$cst$108$val, $APP.javelin.core.input_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2230$c], null)), $APP.cljs$cst$256$doc, "Returns c if c is an input cell, nil otherwise."], 
null)], null)]), $APP.sci.configs.hoplon.javelin.jns), cljs$cst$9016$foo, cljs$cst$9017$bar, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$9018$dosync, function() {
  var $new_m__32782__auto__$jscomp$88_ns__32777__auto__$$ = $APP.sci.configs.hoplon.javelin.jns, $name__32781__auto__$jscomp$88_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.javelin.dosync;
  }, cljs$cst$9019$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_dosync, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9020$sci_DOT_configs_DOT_hoplon_DOT_javelin, cljs$cst$9018$dosync, 
  !0, "sci/configs/hoplon/javelin.cljs", 19, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$597$body)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 325, 325, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], 
  null)), "Evaluates the body within a Javelin transaction. Propagation of updates\n  to formula cells is deferred until the transaction is complete. Input\n  cells *will* update during the transaction. Transactions may be nested.", $APP.cljs.core.truth_($APP.sci.configs.hoplon.javelin.dosync) ? $APP.sci.configs.hoplon.javelin.dosync.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$88_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$88_var__32778__auto__$$);
  $name__32781__auto__$jscomp$88_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$88_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$88_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$88_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$88_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$88_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$88_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$88_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$88_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$88_ns__32777__auto__$$);
}(), $APP.cljs$cst$5722$with_let, function() {
  var $new_m__32782__auto__$jscomp$89_ns__32777__auto__$$ = $APP.sci.configs.hoplon.javelin.jns, $name__32781__auto__$jscomp$89_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.javelin.with_let;
  }, cljs$cst$9021$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_with_let, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9020$sci_DOT_configs_DOT_hoplon_DOT_javelin, $APP.cljs$cst$5722$with_let, 
  !0, "sci/configs/hoplon/javelin.cljs", 21, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$1183$binding, cljs$cst$9022$resource], null), $APP.cljs$cst$597$body)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1183$binding, cljs$cst$9022$resource], null), $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], 
  null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 219, 219, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1183$binding, cljs$cst$9022$resource], null), $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), "Binds resource to binding and evaluates body.  Then, returns\n  resource.  It's a cross between doto and with-open.", 
  $APP.cljs.core.truth_($APP.sci.configs.hoplon.javelin.with_let) ? $APP.sci.configs.hoplon.javelin.with_let.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$89_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$89_var__32778__auto__$$);
  $name__32781__auto__$jscomp$89_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$89_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$89_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$89_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$89_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$89_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$89_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$89_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$89_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$89_ns__32777__auto__$$);
}(), cljs$cst$9023$cell_EQ_, function() {
  var $new_m__32782__auto__$jscomp$90_ns__32777__auto__$$ = $APP.sci.configs.hoplon.javelin.jns, $name__32781__auto__$jscomp$90_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.javelin.cell_EQ_;
  }, cljs$cst$9024$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_cell_EQ_, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9020$sci_DOT_configs_DOT_hoplon_DOT_javelin, cljs$cst$9023$cell_EQ_, 
  !0, "sci/configs/hoplon/javelin.cljs", 18, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 4, $APP.cljs$cst$1379$max_fixed_arity, 4, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$1245$expr], 
  null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$1245$expr, $APP.cljs$cst$52$f], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$1245$expr], null), new $APP.cljs.core.PersistentVector(null, 
  4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$1245$expr, $APP.cljs$cst$52$f], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), 1, 225, 225, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$1245$expr], null), new $APP.cljs.core.PersistentVector(null, 
  4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$1245$expr, $APP.cljs$cst$52$f], null)), null, $APP.cljs.core.truth_($APP.sci.configs.hoplon.javelin.cell_EQ_) ? $APP.sci.configs.hoplon.javelin.cell_EQ_.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$90_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$90_var__32778__auto__$$);
  $name__32781__auto__$jscomp$90_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$90_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$90_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$90_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$90_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$90_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$90_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$90_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$90_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$90_ns__32777__auto__$$);
}(), cljs$cst$9025$defc, function() {
  var $new_m__32782__auto__$jscomp$91_ns__32777__auto__$$ = $APP.sci.configs.hoplon.javelin.jns, $name__32781__auto__$jscomp$91_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.javelin.defc;
  }, cljs$cst$9026$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_defc, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9020$sci_DOT_configs_DOT_hoplon_DOT_javelin, cljs$cst$9025$defc, 
  !0, "sci/configs/hoplon/javelin.cljs", 17, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 5, $APP.cljs$cst$1379$max_fixed_arity, 5, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$13$sym, 
  $APP.cljs$cst$1245$expr], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$13$sym, $APP.cljs$cst$1291$doc, $APP.cljs$cst$1245$expr], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$13$sym, 
  $APP.cljs$cst$1245$expr], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$13$sym, $APP.cljs$cst$1291$doc, $APP.cljs$cst$1245$expr], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), 1, 239, 239, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, 
  $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$13$sym, $APP.cljs$cst$1245$expr], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$13$sym, $APP.cljs$cst$1291$doc, $APP.cljs$cst$1245$expr], null)), null, $APP.cljs.core.truth_($APP.sci.configs.hoplon.javelin.defc) ? $APP.sci.configs.hoplon.javelin.defc.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$91_var__32778__auto__$$), 
  $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$91_var__32778__auto__$$);
  $name__32781__auto__$jscomp$91_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$91_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$91_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$91_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$91_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$91_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$91_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$91_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$91_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$91_ns__32777__auto__$$);
}(), cljs$cst$9027$cell_let_1, function() {
  var $new_m__32782__auto__$jscomp$92_ns__32777__auto__$$ = $APP.sci.configs.hoplon.javelin.jns, $name__32781__auto__$jscomp$92_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.javelin.cell_let_1;
  }, cljs$cst$9028$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_cell_let_1, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$271$private, $APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [!0, cljs$cst$9020$sci_DOT_configs_DOT_hoplon_DOT_javelin, 
  cljs$cst$9027$cell_let_1, !0, "sci/configs/hoplon/javelin.cljs", 33, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$375$bindings, $APP.cljs$cst$2230$c], null), $APP.cljs$cst$597$body)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$375$bindings, $APP.cljs$cst$2230$c], null), $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], 
  null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 313, 313, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$375$bindings, $APP.cljs$cst$2230$c], null), $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), null, $APP.cljs.core.truth_($APP.sci.configs.hoplon.javelin.cell_let_1) ? 
  $APP.sci.configs.hoplon.javelin.cell_let_1.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$92_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$92_var__32778__auto__$$);
  $name__32781__auto__$jscomp$92_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$92_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$92_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$92_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$92_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$92_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$92_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$92_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$92_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$92_ns__32777__auto__$$);
}(), cljs$cst$9029$cell_let, function() {
  var $new_m__32782__auto__$jscomp$93_ns__32777__auto__$$ = $APP.sci.configs.hoplon.javelin.jns, $name__32781__auto__$jscomp$93_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.javelin.cell_let;
  }, cljs$cst$9030$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_cell_let, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9020$sci_DOT_configs_DOT_hoplon_DOT_javelin, cljs$cst$9029$cell_let, 
  !0, "sci/configs/hoplon/javelin.cljs", 21, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$375$bindings, $APP.cljs$cst$2230$c, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$33$more], null), $APP.cljs$cst$597$body)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$375$bindings, $APP.cljs$cst$2230$c, 
  $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$33$more], null), $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 318, 318, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$375$bindings, 
  $APP.cljs$cst$2230$c, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$33$more], null), $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), null, $APP.cljs.core.truth_($APP.sci.configs.hoplon.javelin.cell_let) ? $APP.sci.configs.hoplon.javelin.cell_let.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$93_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$93_var__32778__auto__$$);
  $name__32781__auto__$jscomp$93_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$93_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$93_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$93_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$93_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$93_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$93_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$93_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$93_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$93_ns__32777__auto__$$);
}(), cljs$cst$9031$defc_EQ_, function() {
  var $new_m__32782__auto__$jscomp$94_ns__32777__auto__$$ = $APP.sci.configs.hoplon.javelin.jns, $name__32781__auto__$jscomp$94_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.javelin.defc_EQ_;
  }, cljs$cst$9032$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_defc_EQ_, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9020$sci_DOT_configs_DOT_hoplon_DOT_javelin, cljs$cst$9031$defc_EQ_, 
  !0, "sci/configs/hoplon/javelin.cljs", 18, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 4, $APP.cljs$cst$1379$max_fixed_arity, 4, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$13$sym, 
  $APP.cljs$cst$1245$expr], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$13$sym, $APP.cljs$cst$1245$expr], null), new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$13$sym, $APP.cljs$cst$1291$doc, 
  $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1245$expr, $APP.cljs$cst$52$f], null)], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), 1, 243, 243, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$13$sym, $APP.cljs$cst$1245$expr], 
  null), new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$13$sym, $APP.cljs$cst$1291$doc, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1245$expr, $APP.cljs$cst$52$f], null)], null)), null, $APP.cljs.core.truth_($APP.sci.configs.hoplon.javelin.defc_EQ_) ? $APP.sci.configs.hoplon.javelin.defc_EQ_.cljs$lang$test : 
  null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$94_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$94_var__32778__auto__$$);
  $name__32781__auto__$jscomp$94_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$94_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$94_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$94_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$94_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$94_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$94_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$94_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$94_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$94_ns__32777__auto__$$);
}(), cljs$cst$9033$set_cell_BANG__EQ_, function() {
  var $new_m__32782__auto__$jscomp$95_ns__32777__auto__$$ = $APP.sci.configs.hoplon.javelin.jns, $name__32781__auto__$jscomp$95_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.javelin.set_cell_BANG__EQ_;
  }, cljs$cst$9034$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_set_cell_BANG__EQ_, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9020$sci_DOT_configs_DOT_hoplon_DOT_javelin, cljs$cst$9033$set_cell_BANG__EQ_, 
  !0, "sci/configs/hoplon/javelin.cljs", 23, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 5, $APP.cljs$cst$1379$max_fixed_arity, 5, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$2230$c, 
  $APP.cljs$cst$1245$expr], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$2230$c, $APP.cljs$cst$1245$expr, cljs$cst$8978$updatefn], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$2230$c, 
  $APP.cljs$cst$1245$expr], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$2230$c, $APP.cljs$cst$1245$expr, cljs$cst$8978$updatefn], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), 1, 232, 232, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, 
  $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$2230$c, $APP.cljs$cst$1245$expr], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$2230$c, $APP.cljs$cst$1245$expr, cljs$cst$8978$updatefn], null)), null, $APP.cljs.core.truth_($APP.sci.configs.hoplon.javelin.set_cell_BANG__EQ_) ? $APP.sci.configs.hoplon.javelin.set_cell_BANG__EQ_.cljs$lang$test : null])), $val__32779__auto__$$ = 
  $APP.cljs.core.deref($name__32781__auto__$jscomp$95_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$95_var__32778__auto__$$);
  $name__32781__auto__$jscomp$95_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$95_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$95_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$95_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$95_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$95_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$95_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$95_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$95_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$95_ns__32777__auto__$$);
}(), cljs$cst$9035$formula_of, function() {
  var $new_m__32782__auto__$jscomp$96_ns__32777__auto__$$ = $APP.sci.configs.hoplon.javelin.jns, $name__32781__auto__$jscomp$96_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.javelin.formula_of;
  }, cljs$cst$9036$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_formula_of, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9020$sci_DOT_configs_DOT_hoplon_DOT_javelin, cljs$cst$9035$formula_of, 
  !0, "sci/configs/hoplon/javelin.cljs", 23, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, cljs$cst$9037$deps, $APP.cljs$cst$597$body)], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, cljs$cst$9037$deps, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 252, 252, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, 
  cljs$cst$9037$deps, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), "ALPHA: this macro may change.\n\n  Given a vector of dependencies and one or more body expressions, emits a\n  form that will produce a formula cell. The dependencies must be names that\n  will be re-bound to their values within the body. No code walking is done.\n  The value of the formula cell is computed by evaluating the body expressions\n  whenever any of the dependencies change.\n\n  Note: the dependencies need not be cells.\n\n  E.g.\n      (def x 100)\n      (def y (cell 200))\n      (def z (cell\x3d (inc y)))\n\n      (def c (formula-of [x y z] (+ x y z)))\n\n      (deref c) ;\x3d\x3e 501\n\n      (swap! y inc)\n      (deref c) ;\x3d\x3e 503\n  ", 
  $APP.cljs.core.truth_($APP.sci.configs.hoplon.javelin.formula_of) ? $APP.sci.configs.hoplon.javelin.formula_of.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$96_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$96_var__32778__auto__$$);
  $name__32781__auto__$jscomp$96_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$96_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$96_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$96_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$96_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$96_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$96_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$96_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$96_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$96_ns__32777__auto__$$);
}(), cljs$cst$9038$formulet, function() {
  var $new_m__32782__auto__$jscomp$97_ns__32777__auto__$$ = $APP.sci.configs.hoplon.javelin.jns, $name__32781__auto__$jscomp$97_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.javelin.formulet;
  }, cljs$cst$9039$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_formulet, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9020$sci_DOT_configs_DOT_hoplon_DOT_javelin, cljs$cst$9038$formulet, 
  !0, "sci/configs/hoplon/javelin.cljs", 21, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$375$bindings, $APP.cljs$cst$597$body)], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$375$bindings, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 280, 280, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, 
  $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$375$bindings, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), "ALPHA: this macro may change.\n\n  Given a vector of binding-form/dependency pairs and one or more body\n  expressions, emits a form that will produce a formula cell. Each binding\n  form is bound to the value of the corresponding dependency within the body.\n  No code walking is done. The value of the formula cell is computed by\n  evaluating the body expressions whenever any of the dependencies change.\n\n  Note: the depdendency expressions are evaluated only once, when the formula\n  cell is created, and they need not evaluate to javelin cells.\n\n  E.g.\n      (def a (cell 42))\n      (def b (cell {:x 100 :y 200}))\n\n      (def c (formulet [v (cell\x3d (inc a))\n                        w (+ 1 2)\n                        {:keys [x y]} b]\n                (+ v w x y)))\n\n      (deref c) ;\x3d\x3e 346\n\n      (swap! a inc)\n      (deref c) ;\x3d\x3e 347\n  ", 
  $APP.cljs.core.truth_($APP.sci.configs.hoplon.javelin.formulet) ? $APP.sci.configs.hoplon.javelin.formulet.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$97_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$97_var__32778__auto__$$);
  $name__32781__auto__$jscomp$97_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$97_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$97_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$97_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$97_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$97_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$97_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$97_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$97_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$97_ns__32777__auto__$$);
}(), cljs$cst$9040$cell_doseq, function() {
  var $new_m__32782__auto__$jscomp$98_ns__32777__auto__$$ = $APP.sci.configs.hoplon.javelin.jns, $name__32781__auto__$jscomp$98_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.hoplon.javelin.cell_doseq;
  }, cljs$cst$9041$sci_DOT_configs_DOT_hoplon_DOT_javelin_SLASH_cell_doseq, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$9020$sci_DOT_configs_DOT_hoplon_DOT_javelin, cljs$cst$9040$cell_doseq, 
  !0, "sci/configs/hoplon/javelin.cljs", 23, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$375$bindings, $APP.cljs$cst$597$body)], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$375$bindings, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 332, 332, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$563$_AMPERSAND_form, 
  $APP.cljs$cst$566$_AMPERSAND_env, $APP.cljs$cst$375$bindings, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$597$body], null)), "Takes a vector of binding-form/collection-cell pairs and one or more body\n  expressions, similar to clojure.core/doseq. Iterating over the collection\n  cells produces a sequence of items that may grow, shrink, or update over\n  time. Whenever this sequence grows the body expressions are evaluated (for\n  side effects) exactly once for each new location in the sequence. Bindings\n  are bound to cells that refer to the item at that location.\n\n  Consider:\n\n      (def things (cell [{:x :a} {:x :b} {:x :c}]))\n\n      (cell-doseq [{:keys [x]} things]\n        (prn :creating @x)\n        (add-watch x nil #(prn :updating %3 %4)))\n\n      ;; the following is printed -- note that x is a cell:\n\n      :creating :a\n      :creating :b\n      :creating :c\n\n  Shrink things by removing the last item:\n\n      (swap! things pop)\n\n      ;; the following is printed (because the 3rd item in things is now nil,\n      ;; since things only contains 2 items) -- note that the doit function is\n      ;; not called (or we would see a :creating message):\n\n      :updating :c nil\n\n  Grow things such that it is one item larger than it ever was:\n\n      (swap! things into [{:x :u} {:x :v}])\n\n      ;; the following is printed (because things now has 4 items, so the 3rd\n      ;; item is now {:x :u} and the max size increases by one with the new\n      ;; item {:x :v}):\n\n      :updating nil :u\n      :creating :v\n\n  A weird imagination is most useful to gain full advantage of all the features.", 
  $APP.cljs.core.truth_($APP.sci.configs.hoplon.javelin.cell_doseq) ? $APP.sci.configs.hoplon.javelin.cell_doseq.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$98_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$98_var__32778__auto__$$);
  $name__32781__auto__$jscomp$98_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$98_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$98_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$98_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$98_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$98_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$98_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$98_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$98_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$98_ns__32777__auto__$$);
}()], 0));
$APP.sci.configs.hoplon.javelin.config = new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$398$namespaces, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$8952$javelin_DOT_core, $APP.sci.configs.hoplon.javelin.javelin_core_ns], null)], null);
$APP.scittle.javelin = {};
$APP.scittle.javelin.init = function() {
  return $APP.scittle.core.register_plugin_BANG_(cljs$cst$9042$scittle_DOT_javelin_SLASH_javelin, $APP.sci.configs.hoplon.javelin.config);
};
$APP.scittle.javelin.init();

}).call(this);