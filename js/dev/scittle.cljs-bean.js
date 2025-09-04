(function(){
'use strict';
var cljs$cst$5422$__arr = new $APP.cljs.core.Symbol(null, "__arr", "__arr", 2056204649, null), cljs$cst$5434$bean_QMARK_ = new $APP.cljs.core.Symbol(null, "bean?", "bean?", 2057456095, null), cljs$cst$5425$recursive = new $APP.cljs.core.Keyword(null, "recursive", "recursive", 718885872), cljs$cst$5423$prop__GT_key = new $APP.cljs.core.Keyword(null, "prop-\x3ekey", "prop-\x3ekey", -1297715246), cljs$cst$5431$cljs_bean_DOT_core_SLASH_bean = new $APP.cljs.core.Symbol("cljs-bean.core", "bean", "cljs-bean.core/bean", 
444589162, null), cljs$cst$5421$__cnt = new $APP.cljs.core.Symbol(null, "__cnt", "__cnt", 1833584904, null), cljs$cst$5427$cljs_bean_DOT_core = new $APP.cljs.core.Symbol(null, "cljs-bean.core", "cljs-bean.core", -1757839487, null), cljs$cst$5419$prop__GT_key = new $APP.cljs.core.Symbol(null, "prop-\x3ekey", "prop-\x3ekey", 342816281, null), cljs$cst$5428$__GT_clj = new $APP.cljs.core.Symbol(null, "-\x3eclj", "-\x3eclj", -1549422014, null), cljs$cst$5430$cljs_bean_DOT_core_SLASH_object = new $APP.cljs.core.Symbol("cljs-bean.core", 
"object", "cljs-bean.core/object", 1153194626, null), cljs$cst$5433$cljs_bean_DOT_core_SLASH___GT_js = new $APP.cljs.core.Symbol("cljs-bean.core", "-\x3ejs", "cljs-bean.core/-\x3ejs", 272545438, null), cljs$cst$5424$key__GT_prop = new $APP.cljs.core.Keyword(null, "key-\x3eprop", "key-\x3eprop", -1028452531), cljs$cst$5426$scittle_DOT_cljs_bean_SLASH_cljs_bean = new $APP.cljs.core.Keyword("scittle.cljs-bean", "cljs-bean", "scittle.cljs-bean/cljs-bean", -1077580568), cljs$cst$5435$cljs_bean_DOT_core_SLASH_bean_QMARK_ = 
new $APP.cljs.core.Symbol("cljs-bean.core", "bean?", "cljs-bean.core/bean?", -413971875, null), cljs$cst$5420$key__GT_prop = new $APP.cljs.core.Symbol(null, "key-\x3eprop", "key-\x3eprop", 612078996, null), cljs$cst$5429$cljs_bean_DOT_core_SLASH___GT_clj = new $APP.cljs.core.Symbol("cljs-bean.core", "-\x3eclj", "cljs-bean.core/-\x3eclj", 649375936, null), cljs$cst$5432$__GT_js = new $APP.cljs.core.Symbol(null, "-\x3ejs", "-\x3ejs", -1825590244, null);
var cljs_bean = {from:{}};
cljs_bean.from.cljs = {};
cljs_bean.from.cljs.core = {};
cljs_bean.from.cljs.core._indexOf = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$2 = function($coll$$, $x$$) {
  return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3($coll$$, $x$$, 0);
};
cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3 = function($coll$$, $x$$, $JSCompiler_temp$jscomp$1769_JSCompiler_temp$jscomp$1770_idx$jscomp$238_start$jscomp$246_y__5111__auto__$$) {
  var $len$$ = $APP.cljs.core.count($coll$$);
  if ($JSCompiler_temp$jscomp$1769_JSCompiler_temp$jscomp$1770_idx$jscomp$238_start$jscomp$246_y__5111__auto__$$ >= $len$$) {
    return -1;
  }
  !($JSCompiler_temp$jscomp$1769_JSCompiler_temp$jscomp$1770_idx$jscomp$238_start$jscomp$246_y__5111__auto__$$ > 0) && $JSCompiler_temp$jscomp$1769_JSCompiler_temp$jscomp$1770_idx$jscomp$238_start$jscomp$246_y__5111__auto__$$ < 0 && ($JSCompiler_temp$jscomp$1769_JSCompiler_temp$jscomp$1770_idx$jscomp$238_start$jscomp$246_y__5111__auto__$$ += $len$$, $JSCompiler_temp$jscomp$1769_JSCompiler_temp$jscomp$1770_idx$jscomp$238_start$jscomp$246_y__5111__auto__$$ = 0 > $JSCompiler_temp$jscomp$1769_JSCompiler_temp$jscomp$1770_idx$jscomp$238_start$jscomp$246_y__5111__auto__$$ ? 
  0 : $JSCompiler_temp$jscomp$1769_JSCompiler_temp$jscomp$1770_idx$jscomp$238_start$jscomp$246_y__5111__auto__$$);
  for (;;) {
    if ($JSCompiler_temp$jscomp$1769_JSCompiler_temp$jscomp$1770_idx$jscomp$238_start$jscomp$246_y__5111__auto__$$ < $len$$) {
      if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$2($coll$$, $JSCompiler_temp$jscomp$1769_JSCompiler_temp$jscomp$1770_idx$jscomp$238_start$jscomp$246_y__5111__auto__$$), $x$$)) {
        return $JSCompiler_temp$jscomp$1769_JSCompiler_temp$jscomp$1770_idx$jscomp$238_start$jscomp$246_y__5111__auto__$$;
      }
      $JSCompiler_temp$jscomp$1769_JSCompiler_temp$jscomp$1770_idx$jscomp$238_start$jscomp$246_y__5111__auto__$$ += 1;
    } else {
      return -1;
    }
  }
};
cljs_bean.from.cljs.core._indexOf.cljs$lang$maxFixedArity = 3;
cljs_bean.from.cljs.core._lastIndexOf = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$2 = function($coll$$, $x$$) {
  return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3($coll$$, $x$$, $APP.cljs.core.count($coll$$));
};
cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3 = function($coll$$, $x$$, $JSCompiler_temp$jscomp$1771_idx$jscomp$239_start$$) {
  var $len$jscomp$106_x__5113__auto__$$ = $APP.cljs.core.count($coll$$);
  if ($len$jscomp$106_x__5113__auto__$$ === 0) {
    return -1;
  }
  $JSCompiler_temp$jscomp$1771_idx$jscomp$239_start$$ > 0 ? (--$len$jscomp$106_x__5113__auto__$$, $JSCompiler_temp$jscomp$1771_idx$jscomp$239_start$$ = $len$jscomp$106_x__5113__auto__$$ < $JSCompiler_temp$jscomp$1771_idx$jscomp$239_start$$ ? $len$jscomp$106_x__5113__auto__$$ : $JSCompiler_temp$jscomp$1771_idx$jscomp$239_start$$) : $JSCompiler_temp$jscomp$1771_idx$jscomp$239_start$$ = $JSCompiler_temp$jscomp$1771_idx$jscomp$239_start$$ < 0 ? $len$jscomp$106_x__5113__auto__$$ + $JSCompiler_temp$jscomp$1771_idx$jscomp$239_start$$ : 
  $JSCompiler_temp$jscomp$1771_idx$jscomp$239_start$$;
  for (;;) {
    if ($JSCompiler_temp$jscomp$1771_idx$jscomp$239_start$$ >= 0) {
      if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$2($coll$$, $JSCompiler_temp$jscomp$1771_idx$jscomp$239_start$$), $x$$)) {
        return $JSCompiler_temp$jscomp$1771_idx$jscomp$239_start$$;
      }
      --$JSCompiler_temp$jscomp$1771_idx$jscomp$239_start$$;
    } else {
      return -1;
    }
  }
};
cljs_bean.from.cljs.core._lastIndexOf.cljs$lang$maxFixedArity = 3;
cljs_bean.from.cljs.core.compare_indexed = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 4:
      return cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2 = function($xs$$, $ys$$) {
  var $xl$$ = $APP.cljs.core.count($xs$$), $yl$$ = $APP.cljs.core.count($ys$$);
  return $xl$$ < $yl$$ ? -1 : $xl$$ > $yl$$ ? 1 : $xl$$ === 0 ? 0 : cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$4($xs$$, $ys$$, $xl$$, 0);
};
cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$4 = function($xs$$, $ys$$, $len$$, $n$$) {
  for (;;) {
    var $d$$ = $APP.cljs.core.compare($APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$2($xs$$, $n$$), $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$2($ys$$, $n$$));
    if ($d$$ === 0 && $n$$ + 1 < $len$$) {
      $n$$ += 1;
    } else {
      return $d$$;
    }
  }
};
cljs_bean.from.cljs.core.compare_indexed.cljs$lang$maxFixedArity = 4;
cljs_bean.from.cljs.core.equiv_sequential = function($G__76182$jscomp$inline_9877_JSCompiler_temp$jscomp$9357_JSCompiler_temp$jscomp$9358_x$jscomp$1348_xs$$, $G__76183$jscomp$inline_9878_y$jscomp$466_ys$$) {
  var $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.boolean$;
  if ($APP.cljs.core.sequential_QMARK_($G__76183$jscomp$inline_9878_y$jscomp$466_ys$$)) {
    if ($APP.cljs.core.counted_QMARK_($G__76182$jscomp$inline_9877_JSCompiler_temp$jscomp$9357_JSCompiler_temp$jscomp$9358_x$jscomp$1348_xs$$) && $APP.cljs.core.counted_QMARK_($G__76183$jscomp$inline_9878_y$jscomp$466_ys$$) && $APP.cljs.core.count($G__76182$jscomp$inline_9877_JSCompiler_temp$jscomp$9357_JSCompiler_temp$jscomp$9358_x$jscomp$1348_xs$$) !== $APP.cljs.core.count($G__76183$jscomp$inline_9878_y$jscomp$466_ys$$)) {
      $G__76182$jscomp$inline_9877_JSCompiler_temp$jscomp$9357_JSCompiler_temp$jscomp$9358_x$jscomp$1348_xs$$ = !1;
    } else {
      a: {
        $G__76182$jscomp$inline_9877_JSCompiler_temp$jscomp$9357_JSCompiler_temp$jscomp$9358_x$jscomp$1348_xs$$ = $APP.cljs.core.seq($G__76182$jscomp$inline_9877_JSCompiler_temp$jscomp$9357_JSCompiler_temp$jscomp$9358_x$jscomp$1348_xs$$);
        for ($G__76183$jscomp$inline_9878_y$jscomp$466_ys$$ = $APP.cljs.core.seq($G__76183$jscomp$inline_9878_y$jscomp$466_ys$$);;) {
          if ($G__76182$jscomp$inline_9877_JSCompiler_temp$jscomp$9357_JSCompiler_temp$jscomp$9358_x$jscomp$1348_xs$$ == null) {
            $G__76182$jscomp$inline_9877_JSCompiler_temp$jscomp$9357_JSCompiler_temp$jscomp$9358_x$jscomp$1348_xs$$ = $G__76183$jscomp$inline_9878_y$jscomp$466_ys$$ == null;
            break a;
          }
          if ($G__76183$jscomp$inline_9878_y$jscomp$466_ys$$ != null && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.first($G__76182$jscomp$inline_9877_JSCompiler_temp$jscomp$9357_JSCompiler_temp$jscomp$9358_x$jscomp$1348_xs$$), $APP.cljs.core.first($G__76183$jscomp$inline_9878_y$jscomp$466_ys$$))) {
            $G__76182$jscomp$inline_9877_JSCompiler_temp$jscomp$9357_JSCompiler_temp$jscomp$9358_x$jscomp$1348_xs$$ = $APP.cljs.core.next($G__76182$jscomp$inline_9877_JSCompiler_temp$jscomp$9357_JSCompiler_temp$jscomp$9358_x$jscomp$1348_xs$$), $G__76183$jscomp$inline_9878_y$jscomp$466_ys$$ = $APP.cljs.core.next($G__76183$jscomp$inline_9878_y$jscomp$466_ys$$);
          } else {
            $G__76182$jscomp$inline_9877_JSCompiler_temp$jscomp$9357_JSCompiler_temp$jscomp$9358_x$jscomp$1348_xs$$ = !1;
            break a;
          }
        }
        $G__76182$jscomp$inline_9877_JSCompiler_temp$jscomp$9357_JSCompiler_temp$jscomp$9358_x$jscomp$1348_xs$$ = void 0;
      }
    }
  } else {
    $G__76182$jscomp$inline_9877_JSCompiler_temp$jscomp$9357_JSCompiler_temp$jscomp$9358_x$jscomp$1348_xs$$ = null;
  }
  return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $G__76182$jscomp$inline_9877_JSCompiler_temp$jscomp$9357_JSCompiler_temp$jscomp$9358_x$jscomp$1348_xs$$);
};
cljs_bean.from.cljs.core.ci_reduce = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2 = function($cicoll$$, $f$$) {
  var $cnt$$ = $cicoll$$.cljs$core$ICounted$_count$arity$1(null);
  if ($cnt$$ === 0) {
    return $f$$.cljs$core$IFn$_invoke$arity$0 ? $f$$.cljs$core$IFn$_invoke$arity$0() : $f$$.call(null);
  }
  for (var $G__76164$jscomp$inline_7240_nval$jscomp$6_val$$ = $cicoll$$.cljs$core$IIndexed$_nth$arity$2(null, 0), $G__76186_n$$ = 1;;) {
    if ($G__76186_n$$ < $cnt$$) {
      var $G__76165$$ = $cicoll$$.cljs$core$IIndexed$_nth$arity$2(null, $G__76186_n$$);
      $G__76164$jscomp$inline_7240_nval$jscomp$6_val$$ = $f$$.cljs$core$IFn$_invoke$arity$2 ? $f$$.cljs$core$IFn$_invoke$arity$2($G__76164$jscomp$inline_7240_nval$jscomp$6_val$$, $G__76165$$) : $f$$.call(null, $G__76164$jscomp$inline_7240_nval$jscomp$6_val$$, $G__76165$$);
      if ($APP.cljs.core.reduced_QMARK_($G__76164$jscomp$inline_7240_nval$jscomp$6_val$$)) {
        return $APP.cljs.core.deref($G__76164$jscomp$inline_7240_nval$jscomp$6_val$$);
      }
      $G__76186_n$$ += 1;
    } else {
      return $G__76164$jscomp$inline_7240_nval$jscomp$6_val$$;
    }
  }
};
cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3 = function($cicoll$$, $f$$, $G__76188_n$jscomp$421_val$$) {
  var $cnt$$ = $cicoll$$.cljs$core$ICounted$_count$arity$1(null), $G__76166$jscomp$inline_7243_nval$jscomp$7_val__$1$$ = $G__76188_n$jscomp$421_val$$;
  for ($G__76188_n$jscomp$421_val$$ = 0;;) {
    if ($G__76188_n$jscomp$421_val$$ < $cnt$$) {
      var $G__76167$$ = $cicoll$$.cljs$core$IIndexed$_nth$arity$2(null, $G__76188_n$jscomp$421_val$$);
      $G__76166$jscomp$inline_7243_nval$jscomp$7_val__$1$$ = $f$$.cljs$core$IFn$_invoke$arity$2 ? $f$$.cljs$core$IFn$_invoke$arity$2($G__76166$jscomp$inline_7243_nval$jscomp$7_val__$1$$, $G__76167$$) : $f$$.call(null, $G__76166$jscomp$inline_7243_nval$jscomp$7_val__$1$$, $G__76167$$);
      if ($APP.cljs.core.reduced_QMARK_($G__76166$jscomp$inline_7243_nval$jscomp$7_val__$1$$)) {
        return $APP.cljs.core.deref($G__76166$jscomp$inline_7243_nval$jscomp$7_val__$1$$);
      }
      $G__76188_n$jscomp$421_val$$ += 1;
    } else {
      return $G__76166$jscomp$inline_7243_nval$jscomp$7_val__$1$$;
    }
  }
};
cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$4 = function($cicoll$$, $f$$, $G__76168$jscomp$inline_7246_nval$jscomp$8_val$jscomp$155_val__$1$$, $G__76190_idx$jscomp$240_n$$) {
  for (var $cnt$$ = $cicoll$$.cljs$core$ICounted$_count$arity$1(null);;) {
    if ($G__76190_idx$jscomp$240_n$$ < $cnt$$) {
      var $G__76169$$ = $cicoll$$.cljs$core$IIndexed$_nth$arity$2(null, $G__76190_idx$jscomp$240_n$$);
      $G__76168$jscomp$inline_7246_nval$jscomp$8_val$jscomp$155_val__$1$$ = $f$$.cljs$core$IFn$_invoke$arity$2 ? $f$$.cljs$core$IFn$_invoke$arity$2($G__76168$jscomp$inline_7246_nval$jscomp$8_val$jscomp$155_val__$1$$, $G__76169$$) : $f$$.call(null, $G__76168$jscomp$inline_7246_nval$jscomp$8_val$jscomp$155_val__$1$$, $G__76169$$);
      if ($APP.cljs.core.reduced_QMARK_($G__76168$jscomp$inline_7246_nval$jscomp$8_val$jscomp$155_val__$1$$)) {
        return $APP.cljs.core.deref($G__76168$jscomp$inline_7246_nval$jscomp$8_val$jscomp$155_val__$1$$);
      }
      $G__76190_idx$jscomp$240_n$$ += 1;
    } else {
      return $G__76168$jscomp$inline_7246_nval$jscomp$8_val$jscomp$155_val__$1$$;
    }
  }
};
cljs_bean.from.cljs.core.ci_reduce.cljs$lang$maxFixedArity = 4;
cljs_bean.from.cljs.core.TransientArrayMap_conj_BANG_ = function($G__76195_tcoll$jscomp$59_tcoll__$1$$, $G__76194_es$jscomp$17_o$$, $e$jscomp$389_editable_QMARK_$jscomp$2_temp__5823__auto__$$) {
  if ($APP.cljs.core.truth_($e$jscomp$389_editable_QMARK_$jscomp$2_temp__5823__auto__$$)) {
    if ($APP.cljs.core.map_entry_QMARK_($G__76194_es$jscomp$17_o$$)) {
      return $G__76195_tcoll$jscomp$59_tcoll__$1$$.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null, $APP.cljs.core.key($G__76194_es$jscomp$17_o$$), $APP.cljs.core.val($G__76194_es$jscomp$17_o$$));
    }
    if ($APP.cljs.core.vector_QMARK_($G__76194_es$jscomp$17_o$$)) {
      return $G__76195_tcoll$jscomp$59_tcoll__$1$$.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null, $G__76194_es$jscomp$17_o$$.cljs$core$IFn$_invoke$arity$1 ? $G__76194_es$jscomp$17_o$$.cljs$core$IFn$_invoke$arity$1(0) : $G__76194_es$jscomp$17_o$$.call(null, 0), $G__76194_es$jscomp$17_o$$.cljs$core$IFn$_invoke$arity$1 ? $G__76194_es$jscomp$17_o$$.cljs$core$IFn$_invoke$arity$1(1) : $G__76194_es$jscomp$17_o$$.call(null, 1));
    }
    for ($G__76194_es$jscomp$17_o$$ = $APP.cljs.core.seq($G__76194_es$jscomp$17_o$$);;) {
      if ($e$jscomp$389_editable_QMARK_$jscomp$2_temp__5823__auto__$$ = $APP.cljs.core.first($G__76194_es$jscomp$17_o$$), $APP.cljs.core.truth_($e$jscomp$389_editable_QMARK_$jscomp$2_temp__5823__auto__$$)) {
        $G__76194_es$jscomp$17_o$$ = $APP.cljs.core.next($G__76194_es$jscomp$17_o$$), $G__76195_tcoll$jscomp$59_tcoll__$1$$ = $APP.cljs.core._assoc_BANG_($G__76195_tcoll$jscomp$59_tcoll__$1$$, $APP.cljs.core.key($e$jscomp$389_editable_QMARK_$jscomp$2_temp__5823__auto__$$), $APP.cljs.core.val($e$jscomp$389_editable_QMARK_$jscomp$2_temp__5823__auto__$$));
      } else {
        return $G__76195_tcoll$jscomp$59_tcoll__$1$$;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
cljs_bean.from.cljs.core.PersistentArrayMap_conj = function($G__76196_coll$jscomp$954_ret$$, $G__76197_entry$jscomp$30_es$$) {
  if ($APP.cljs.core.vector_QMARK_($G__76197_entry$jscomp$30_es$$)) {
    return $G__76196_coll$jscomp$954_ret$$.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($G__76197_entry$jscomp$30_es$$, 0), $APP.cljs.core._nth($G__76197_entry$jscomp$30_es$$, 1));
  }
  for ($G__76197_entry$jscomp$30_es$$ = $APP.cljs.core.seq($G__76197_entry$jscomp$30_es$$);;) {
    if ($G__76197_entry$jscomp$30_es$$ == null) {
      return $G__76196_coll$jscomp$954_ret$$;
    }
    var $e$$ = $APP.cljs.core.first($G__76197_entry$jscomp$30_es$$);
    if ($APP.cljs.core.vector_QMARK_($e$$)) {
      $G__76196_coll$jscomp$954_ret$$ = $APP.cljs.core._assoc($G__76196_coll$jscomp$954_ret$$, $APP.cljs.core._nth($e$$, 0), $APP.cljs.core._nth($e$$, 1)), $G__76197_entry$jscomp$30_es$$ = $APP.cljs.core.next($G__76197_entry$jscomp$30_es$$);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
cljs_bean.from.cljs.core.TransientVector_assoc_BANG_ = function($tcoll$$, $key$$, $val$$, $type_name$$) {
  if (typeof $key$$ === "number") {
    return $tcoll$$.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(null, $key$$, $val$$);
  }
  throw Error([$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($type_name$$), "'s key for assoc! must be a number."].join(""));
};
cljs_bean.from.cljs.core.PersistentVector_equiv = function($coll$jscomp$955_me_iter$$, $other$jscomp$162_you_iter$$, $type$jscomp$294_x$$, $cnt$jscomp$49_y$$) {
  if ($other$jscomp$162_you_iter$$ instanceof $type$jscomp$294_x$$) {
    if ($cnt$jscomp$49_y$$ === $APP.cljs.core.count($other$jscomp$162_you_iter$$)) {
      for ($coll$jscomp$955_me_iter$$ = $coll$jscomp$955_me_iter$$.cljs$core$IIterable$_iterator$arity$1(null), $other$jscomp$162_you_iter$$ = $APP.cljs.core._iterator($other$jscomp$162_you_iter$$);;) {
        if ($coll$jscomp$955_me_iter$$.hasNext()) {
          if ($type$jscomp$294_x$$ = $coll$jscomp$955_me_iter$$.next(), $cnt$jscomp$49_y$$ = $other$jscomp$162_you_iter$$.next(), $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($type$jscomp$294_x$$, $cnt$jscomp$49_y$$)) {
            continue;
          } else {
            return !1;
          }
        } else {
          return !0;
        }
        break;
      }
    } else {
      return !1;
    }
  } else {
    return cljs_bean.from.cljs.core.equiv_sequential($coll$jscomp$955_me_iter$$, $other$jscomp$162_you_iter$$);
  }
};
cljs_bean.from.cljs.core.PersistentVector_lookup = function($coll$$, $k$$, $not_found$$) {
  return typeof $k$$ === "number" ? $coll$$.cljs$core$IIndexed$_nth$arity$3(null, $k$$, $not_found$$) : $not_found$$;
};
cljs_bean.from.cljs.core.PersistentVector_assoc = function($coll$$, $k$$, $v$$) {
  if (typeof $k$$ === "number") {
    return $coll$$.cljs$core$IVector$_assoc_n$arity$3(null, $k$$, $v$$);
  }
  throw Error("Vector's key for assoc must be a number.");
};
cljs_bean.from.cljs.core.PersistentVector_contains_key_QMARK_ = function($coll$$, $k$$, $cnt$$) {
  return $APP.cljs.core.integer_QMARK_($k$$) ? 0 <= $k$$ && $k$$ < $cnt$$ : !1;
};
cljs_bean.core = {};
cljs_bean.core.goog$module$goog$object = $APP.goog.object;
cljs_bean.core.lookup_sentinel = {};
cljs_bean.core.primitive_QMARK_ = function($x$$) {
  return typeof $x$$ === "number" || typeof $x$$ === "string" || $APP.cljs.core.boolean_QMARK_($x$$) || $x$$ == null;
};
cljs_bean.core.__GT_val = function($x$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$) {
  var $temp__5827__auto__$$ = $transform$$ != null ? $transform$$.cljs$core$IFn$_invoke$arity$1 ? $transform$$.cljs$core$IFn$_invoke$arity$1($x$$) : $transform$$.call(null, $x$$) : null;
  return $temp__5827__auto__$$ == null ? cljs_bean.core.primitive_QMARK_($x$$) ? $x$$ : $APP.cljs.core.object_QMARK_($x$$) ? new cljs_bean.core.Bean(null, $x$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$, !0, null, null, null) : $APP.cljs.core.array_QMARK_($x$$) ? new cljs_bean.core.ArrayVector(null, $prop__GT_key$$, $key__GT_prop$$, $transform$$, $x$$, null) : $x$$ : $temp__5827__auto__$$;
};
cljs_bean.core.unwrap = function($x$$) {
  return cljs_bean.core.primitive_QMARK_($x$$) ? $x$$ : $x$$ instanceof cljs_bean.core.Bean ? $x$$.obj : $x$$ instanceof cljs_bean.core.ArrayVector ? $x$$.arr : $x$$;
};
cljs_bean.core.empty_map = $APP.cljs.core.PersistentArrayMap.EMPTY;
cljs_bean.core.snapshot = function($x$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$, $recursive_QMARK_$$) {
  var $result$$ = $APP.cljs.core.volatile_BANG_($APP.cljs.core.transient$(cljs_bean.core.empty_map));
  cljs_bean.core.goog$module$goog$object.forEach($x$$, function($JSCompiler_inline_result$jscomp$1778_v$$, $JSCompiler_temp_const$jscomp$1772_k$$, $JSCompiler_temp_const$jscomp$1776__$$) {
    $JSCompiler_temp_const$jscomp$1776__$$ = $result$$.cljs$core$IVolatile$_vreset_BANG_$arity$2;
    var $JSCompiler_temp_const$$ = $APP.cljs.core.assoc_BANG_, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.cljs$core$IFn$_invoke$arity$3, $JSCompiler_temp_const$jscomp$1$$ = $result$$.cljs$core$IDeref$_deref$arity$1(null);
    $JSCompiler_temp_const$jscomp$1772_k$$ = $prop__GT_key$$.cljs$core$IFn$_invoke$arity$1 ? $prop__GT_key$$.cljs$core$IFn$_invoke$arity$1($JSCompiler_temp_const$jscomp$1772_k$$) : $prop__GT_key$$.call(null, $JSCompiler_temp_const$jscomp$1772_k$$);
    $JSCompiler_inline_result$jscomp$1778_v$$ = $APP.cljs.core.truth_($recursive_QMARK_$$) ? cljs_bean.core.__GT_val($JSCompiler_inline_result$jscomp$1778_v$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$) : $JSCompiler_inline_result$jscomp$1778_v$$;
    return $JSCompiler_temp_const$jscomp$1776__$$.call($result$$, null, $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_temp_const$jscomp$1$$, $JSCompiler_temp_const$jscomp$1772_k$$, $JSCompiler_inline_result$jscomp$1778_v$$));
  });
  return $APP.cljs.core.persistent_BANG_($APP.cljs.core.deref($result$$));
};
cljs_bean.core.snapshot_arr = function($JSCompiler_inline_result$jscomp$9361_arr$$) {
  var $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.vec;
  a: {
    for (var $l__5611__auto__$$ = $JSCompiler_inline_result$jscomp$9361_arr$$.length, $ret$$ = $APP.cljs.core.aclone($JSCompiler_inline_result$jscomp$9361_arr$$), $idx$$ = 0;;) {
      if ($idx$$ < $l__5611__auto__$$) {
        var $JSCompiler_temp_const$jscomp$1$$ = $idx$$;
        var $G__76199$jscomp$inline_9885_JSCompiler_inline_result$$ = $JSCompiler_inline_result$jscomp$9361_arr$$[$idx$$];
        $G__76199$jscomp$inline_9885_JSCompiler_inline_result$$ = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1 ? cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1($G__76199$jscomp$inline_9885_JSCompiler_inline_result$$) : cljs_bean.core.__GT_clj.call(null, $G__76199$jscomp$inline_9885_JSCompiler_inline_result$$);
        $ret$$[$JSCompiler_temp_const$jscomp$1$$] = $G__76199$jscomp$inline_9885_JSCompiler_inline_result$$;
        $idx$$ += 1;
      } else {
        $JSCompiler_inline_result$jscomp$9361_arr$$ = $ret$$;
        break a;
      }
    }
    $JSCompiler_inline_result$jscomp$9361_arr$$ = void 0;
  }
  return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_inline_result$jscomp$9361_arr$$);
};
cljs_bean.core.indexed_entry = function($G__76200$jscomp$inline_7253_obj$$, $JSCompiler_inline_result$jscomp$1783_prop__GT_key$$, $key__GT_prop$$, $transform$$, $recursive_QMARK_$$, $JSCompiler_temp_const$jscomp$1782_arr$$, $JSCompiler_temp_const$jscomp$1781_i$$) {
  var $prop$$ = $JSCompiler_temp_const$jscomp$1782_arr$$[$JSCompiler_temp_const$jscomp$1781_i$$];
  $JSCompiler_temp_const$jscomp$1782_arr$$ = $APP.cljs.core.MapEntry;
  $JSCompiler_temp_const$jscomp$1781_i$$ = $JSCompiler_inline_result$jscomp$1783_prop__GT_key$$.cljs$core$IFn$_invoke$arity$1 ? $JSCompiler_inline_result$jscomp$1783_prop__GT_key$$.cljs$core$IFn$_invoke$arity$1($prop$$) : $JSCompiler_inline_result$jscomp$1783_prop__GT_key$$.call(null, $prop$$);
  $G__76200$jscomp$inline_7253_obj$$ = $G__76200$jscomp$inline_7253_obj$$[$prop$$];
  $JSCompiler_inline_result$jscomp$1783_prop__GT_key$$ = $recursive_QMARK_$$ ? cljs_bean.core.__GT_val($G__76200$jscomp$inline_7253_obj$$, $JSCompiler_inline_result$jscomp$1783_prop__GT_key$$, $key__GT_prop$$, $transform$$) : $G__76200$jscomp$inline_7253_obj$$;
  return new $JSCompiler_temp_const$jscomp$1782_arr$$($JSCompiler_temp_const$jscomp$1781_i$$, $JSCompiler_inline_result$jscomp$1783_prop__GT_key$$, null);
};
cljs_bean.core.compatible_key_QMARK_ = function($k$$, $prop__GT_key$$) {
  return $k$$ instanceof $APP.cljs.core.Keyword && $prop__GT_key$$ === $APP.cljs.core.keyword || typeof $k$$ === "string" && $prop__GT_key$$ === $APP.cljs.core.identity;
};
cljs_bean.core.compatible_value_QMARK_ = function($JSCompiler_inline_result$jscomp$1788_v$$, $recursive_QMARK_$$) {
  var $JSCompiler_temp$jscomp$1784_JSCompiler_temp$jscomp$1785_JSCompiler_temp_const$$;
  if (!($JSCompiler_temp$jscomp$1784_JSCompiler_temp$jscomp$1785_JSCompiler_temp_const$$ = cljs_bean.core.primitive_QMARK_($JSCompiler_inline_result$jscomp$1788_v$$)) && ($JSCompiler_temp$jscomp$1784_JSCompiler_temp$jscomp$1785_JSCompiler_temp_const$$ = !($APP.cljs.core.map_QMARK_($JSCompiler_inline_result$jscomp$1788_v$$) && !($JSCompiler_inline_result$jscomp$1788_v$$ instanceof cljs_bean.core.Bean) || $APP.cljs.core.vector_QMARK_($JSCompiler_inline_result$jscomp$1788_v$$) && !($JSCompiler_inline_result$jscomp$1788_v$$ instanceof 
  cljs_bean.core.ArrayVector)))) {
    $JSCompiler_temp$jscomp$1784_JSCompiler_temp$jscomp$1785_JSCompiler_temp_const$$ = $APP.cljs.core;
    var $JSCompiler_temp_const$$ = $JSCompiler_temp$jscomp$1784_JSCompiler_temp$jscomp$1785_JSCompiler_temp_const$$.not;
    $JSCompiler_inline_result$jscomp$1788_v$$ = $APP.cljs.core.truth_($recursive_QMARK_$$) ? $APP.cljs.core.object_QMARK_($JSCompiler_inline_result$jscomp$1788_v$$) || $APP.cljs.core.array_QMARK_($JSCompiler_inline_result$jscomp$1788_v$$) : $recursive_QMARK_$$;
    $JSCompiler_temp$jscomp$1784_JSCompiler_temp$jscomp$1785_JSCompiler_temp_const$$ = $JSCompiler_temp_const$$.call($JSCompiler_temp$jscomp$1784_JSCompiler_temp$jscomp$1785_JSCompiler_temp_const$$, $JSCompiler_inline_result$jscomp$1788_v$$);
  }
  return $JSCompiler_temp$jscomp$1784_JSCompiler_temp$jscomp$1785_JSCompiler_temp_const$$;
};
cljs_bean.core.snapshot_QMARK_ = function($k$$, $v$$, $prop__GT_key$$, $recursive_QMARK_$$) {
  return !(cljs_bean.core.compatible_key_QMARK_($k$$, $prop__GT_key$$) && cljs_bean.core.compatible_value_QMARK_($v$$, $recursive_QMARK_$$));
};
cljs_bean.core.TransientBean = function($editable_QMARK_$$, $obj$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$, $recursive_QMARK_$$, $__cnt$$) {
  this.editable_QMARK_ = $editable_QMARK_$$;
  this.obj = $obj$$;
  this.prop__GT_key = $prop__GT_key$$;
  this.key__GT_prop = $key__GT_prop$$;
  this.transform = $transform$$;
  this.recursive_QMARK_ = $recursive_QMARK_$$;
  this.__cnt = $__cnt$$;
  this.cljs$lang$protocol_mask$partition0$ = 259;
  this.cljs$lang$protocol_mask$partition1$ = 56;
};
cljs_bean.core.TransientBean.prototype.cljs$core$ILookup$_lookup$arity$2 = function($G__76202__$$, $k$$) {
  if (this.editable_QMARK_) {
    return $G__76202__$$ = this.obj[this.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? this.key__GT_prop.cljs$core$IFn$_invoke$arity$1($k$$) : this.key__GT_prop.call(null, $k$$)], this.recursive_QMARK_ ? cljs_bean.core.__GT_val($G__76202__$$, this.prop__GT_key, this.key__GT_prop, this.transform) : $G__76202__$$;
  }
  throw Error("lookup after persistent!");
};
cljs_bean.core.TransientBean.prototype.cljs$core$ILookup$_lookup$arity$3 = function($_$jscomp$2105_ret$$, $k$$, $not_found$$) {
  if (this.editable_QMARK_) {
    return $_$jscomp$2105_ret$$ = cljs_bean.core.goog$module$goog$object.get(this.obj, this.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? this.key__GT_prop.cljs$core$IFn$_invoke$arity$1($k$$) : this.key__GT_prop.call(null, $k$$), $not_found$$), this.recursive_QMARK_ && $_$jscomp$2105_ret$$ !== $not_found$$ ? cljs_bean.core.__GT_val($_$jscomp$2105_ret$$, this.prop__GT_key, this.key__GT_prop, this.transform) : $_$jscomp$2105_ret$$;
  }
  throw Error("lookup after persistent!");
};
cljs_bean.core.TransientBean.prototype.cljs$core$ICounted$_count$arity$1 = function($_$$) {
  return this.__cnt == null ? this.__cnt = $APP.cljs.core.count($APP.cljs.core.js_keys(this.obj)) : this.__cnt;
};
cljs_bean.core.TransientBean.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = function($tcoll$$, $o$$) {
  return cljs_bean.from.cljs.core.TransientArrayMap_conj_BANG_(this, $o$$, this.editable_QMARK_);
};
cljs_bean.core.TransientBean.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = function($tcoll$$) {
  if (this.editable_QMARK_) {
    return this.editable_QMARK_ = !1, new cljs_bean.core.Bean(null, this.obj, this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_, null, this.__cnt, null);
  }
  throw Error("persistent! called twice");
};
cljs_bean.core.TransientBean.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = function($JSCompiler_temp_const$jscomp$1790_tcoll$$, $JSCompiler_temp_const$jscomp$1789_k$$, $JSCompiler_inline_result$jscomp$1791_v$$) {
  if (this.editable_QMARK_) {
    if (cljs_bean.core.snapshot_QMARK_($JSCompiler_temp_const$jscomp$1789_k$$, $JSCompiler_inline_result$jscomp$1791_v$$, this.prop__GT_key, this.recursive_QMARK_)) {
      return $APP.cljs.core._assoc_BANG_($APP.cljs.core.transient$(cljs_bean.core.snapshot(this.obj, this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_)), $JSCompiler_temp_const$jscomp$1789_k$$, $JSCompiler_inline_result$jscomp$1791_v$$);
    }
    $JSCompiler_temp_const$jscomp$1790_tcoll$$ = this.obj;
    $JSCompiler_temp_const$jscomp$1789_k$$ = this.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? this.key__GT_prop.cljs$core$IFn$_invoke$arity$1($JSCompiler_temp_const$jscomp$1789_k$$) : this.key__GT_prop.call(null, $JSCompiler_temp_const$jscomp$1789_k$$);
    $JSCompiler_inline_result$jscomp$1791_v$$ = this.recursive_QMARK_ ? cljs_bean.core.unwrap($JSCompiler_inline_result$jscomp$1791_v$$) : $JSCompiler_inline_result$jscomp$1791_v$$;
    $JSCompiler_temp_const$jscomp$1790_tcoll$$[$JSCompiler_temp_const$jscomp$1789_k$$] = $JSCompiler_inline_result$jscomp$1791_v$$;
    this.__cnt = null;
    return this;
  }
  throw Error("assoc! after persistent!");
};
cljs_bean.core.TransientBean.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = function($tcoll$$, $k$$) {
  if (this.editable_QMARK_) {
    return delete this.obj[this.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? this.key__GT_prop.cljs$core$IFn$_invoke$arity$1($k$$) : this.key__GT_prop.call(null, $k$$)], this.__cnt = null, this;
  }
  throw Error("dissoc! after persistent!");
};
cljs_bean.core.TransientBean.prototype.call = function($unused__11804__auto__$$) {
  switch(arguments.length - 1) {
    case 1:
      return this.cljs$core$IFn$_invoke$arity$1(arguments[1]);
    case 2:
      return this.cljs$core$IFn$_invoke$arity$2(arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length - 1)].join(""));
  }
};
cljs_bean.core.TransientBean.prototype.apply = function($self__$$, $args76201$$) {
  return this.call.apply(this, [this].concat($APP.cljs.core.aclone($args76201$$)));
};
cljs_bean.core.TransientBean.prototype.cljs$core$IFn$_invoke$arity$1 = function($G__76206_k$$) {
  if (this.editable_QMARK_) {
    return $G__76206_k$$ = this.obj[this.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? this.key__GT_prop.cljs$core$IFn$_invoke$arity$1($G__76206_k$$) : this.key__GT_prop.call(null, $G__76206_k$$)], this.recursive_QMARK_ ? cljs_bean.core.__GT_val($G__76206_k$$, this.prop__GT_key, this.key__GT_prop, this.transform) : $G__76206_k$$;
  }
  throw Error("lookup after persistent!");
};
cljs_bean.core.TransientBean.prototype.cljs$core$IFn$_invoke$arity$2 = function($k$jscomp$677_ret$$, $not_found$$) {
  if (this.editable_QMARK_) {
    return $k$jscomp$677_ret$$ = cljs_bean.core.goog$module$goog$object.get(this.obj, this.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? this.key__GT_prop.cljs$core$IFn$_invoke$arity$1($k$jscomp$677_ret$$) : this.key__GT_prop.call(null, $k$jscomp$677_ret$$), $not_found$$), this.recursive_QMARK_ && $k$jscomp$677_ret$$ !== $not_found$$ ? cljs_bean.core.__GT_val($k$jscomp$677_ret$$, this.prop__GT_key, this.key__GT_prop, this.transform) : $k$jscomp$677_ret$$;
  }
  throw Error("lookup after persistent!");
};
cljs_bean.core.TransientBean.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 7, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta($APP.cljs$cst$77$editable_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$79$boolean, $APP.cljs$cst$10$mutable, !0], null)), $APP.cljs$cst$177$obj, cljs$cst$5419$prop__GT_key, cljs$cst$5420$key__GT_prop, $APP.cljs$cst$2153$transform, $APP.cljs.core.with_meta($APP.cljs$cst$4545$recursive_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$79$boolean], null)), $APP.cljs.core.with_meta(cljs$cst$5421$__cnt, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$10$mutable, !0], null))], null);
};
cljs_bean.core.TransientBean.cljs$lang$type = !0;
cljs_bean.core.TransientBean.cljs$lang$ctorStr = "cljs-bean.core/TransientBean";
cljs_bean.core.TransientBean.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "cljs-bean.core/TransientBean");
};
cljs_bean.core.__GT_TransientBean = function($editable_QMARK_$$, $obj$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$, $recursive_QMARK_$$, $__cnt$$) {
  return new cljs_bean.core.TransientBean($editable_QMARK_$$, $obj$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$, $recursive_QMARK_$$, $__cnt$$);
};
cljs_bean.core.BeanIterator = function($obj$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$, $recursive_QMARK_$$, $arr$$, $i$$, $cnt$$) {
  this.obj = $obj$$;
  this.prop__GT_key = $prop__GT_key$$;
  this.key__GT_prop = $key__GT_prop$$;
  this.transform = $transform$$;
  this.recursive_QMARK_ = $recursive_QMARK_$$;
  this.arr = $arr$$;
  this.i = $i$$;
  this.cnt = $cnt$$;
};
cljs_bean.core.BeanIterator.prototype.hasNext = function() {
  return this.i < this.cnt;
};
cljs_bean.core.BeanIterator.prototype.next = function() {
  var $ret$$ = cljs_bean.core.indexed_entry(this.obj, this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_, this.arr, this.i);
  this.i += 1;
  return $ret$$;
};
cljs_bean.core.BeanIterator.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 8, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$177$obj, cljs$cst$5419$prop__GT_key, cljs$cst$5420$key__GT_prop, $APP.cljs$cst$2153$transform, $APP.cljs.core.with_meta($APP.cljs$cst$4545$recursive_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$79$boolean], null)), $APP.cljs$cst$18$arr, $APP.cljs.core.with_meta($APP.cljs$cst$19$i, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$10$mutable, 
  !0], null)), $APP.cljs$cst$59$cnt], null);
};
cljs_bean.core.BeanIterator.cljs$lang$type = !0;
cljs_bean.core.BeanIterator.cljs$lang$ctorStr = "cljs-bean.core/BeanIterator";
cljs_bean.core.BeanIterator.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "cljs-bean.core/BeanIterator");
};
cljs_bean.core.__GT_BeanIterator = function($obj$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$, $recursive_QMARK_$$, $arr$$, $i$$, $cnt$$) {
  return new cljs_bean.core.BeanIterator($obj$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$, $recursive_QMARK_$$, $arr$$, $i$$, $cnt$$);
};
cljs_bean.core.BeanSeq = function($obj$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$, $recursive_QMARK_$$, $arr$$, $i$$, $meta$$) {
  this.obj = $obj$$;
  this.prop__GT_key = $prop__GT_key$$;
  this.key__GT_prop = $key__GT_prop$$;
  this.transform = $transform$$;
  this.recursive_QMARK_ = $recursive_QMARK_$$;
  this.arr = $arr$$;
  this.i = $i$$;
  this.meta = $meta$$;
  this.cljs$lang$protocol_mask$partition0$ = 2179858686;
  this.cljs$lang$protocol_mask$partition1$ = 8192;
};
cljs_bean.core.BeanSeq.prototype.toString = function() {
  return $APP.cljs.core.pr_str_STAR_(this);
};
cljs_bean.core.BeanSeq.prototype.equiv = function($other$$) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, $other$$);
};
cljs_bean.core.BeanSeq.prototype.indexOf = function() {
  var $G__76317$$ = null, $G__76317__1$$ = function($x$$) {
    return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, $x$$, 0);
  }, $G__76317__2$$ = function($x$$, $start$$) {
    return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, $x$$, $start$$);
  };
  $G__76317$$ = function($x$$, $start$$) {
    switch(arguments.length) {
      case 1:
        return $G__76317__1$$.call(this, $x$$);
      case 2:
        return $G__76317__2$$.call(this, $x$$, $start$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__76317$$.cljs$core$IFn$_invoke$arity$1 = $G__76317__1$$;
  $G__76317$$.cljs$core$IFn$_invoke$arity$2 = $G__76317__2$$;
  return $G__76317$$;
}();
cljs_bean.core.BeanSeq.prototype.lastIndexOf = function() {
  var $G__76318$$ = null, $G__76318__1$$ = function($x$$) {
    return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, $x$$, $APP.cljs.core.count(this));
  }, $G__76318__2$$ = function($x$$, $start$$) {
    return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, $x$$, $start$$);
  };
  $G__76318$$ = function($x$$, $start$$) {
    switch(arguments.length) {
      case 1:
        return $G__76318__1$$.call(this, $x$$);
      case 2:
        return $G__76318__2$$.call(this, $x$$, $start$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__76318$$.cljs$core$IFn$_invoke$arity$1 = $G__76318__1$$;
  $G__76318$$.cljs$core$IFn$_invoke$arity$2 = $G__76318__2$$;
  return $G__76318$$;
}();
cljs_bean.core.BeanSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = function($_$jscomp$2111_i__$1$$, $n$$) {
  $_$jscomp$2111_i__$1$$ = $n$$ + this.i;
  if (0 <= $_$jscomp$2111_i__$1$$ && $_$jscomp$2111_i__$1$$ < this.arr.length) {
    return cljs_bean.core.indexed_entry(this.obj, this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_, this.arr, $_$jscomp$2111_i__$1$$);
  }
  throw Error("Index out of bounds");
};
cljs_bean.core.BeanSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = function($_$jscomp$2112_i__$1$$, $n$$, $not_found$$) {
  $_$jscomp$2112_i__$1$$ = $n$$ + this.i;
  return 0 <= $_$jscomp$2112_i__$1$$ && $_$jscomp$2112_i__$1$$ < this.arr.length ? cljs_bean.core.indexed_entry(this.obj, this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_, this.arr, $_$jscomp$2112_i__$1$$) : $not_found$$;
};
cljs_bean.core.BeanSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($coll$$, $writer$$, $opts$$) {
  return $APP.cljs.core.pr_sequential_writer($writer$$, $APP.cljs.core.pr_writer, "(", " ", ")", $opts$$, this);
};
cljs_bean.core.BeanSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function($_$$) {
  return this.meta;
};
cljs_bean.core.BeanSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = function($_$$) {
  return new cljs_bean.core.BeanSeq(this.obj, this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_, this.arr, this.i, this.meta);
};
cljs_bean.core.BeanSeq.prototype.cljs$core$INext$_next$arity$1 = function($_$$) {
  return this.i + 1 < this.arr.length ? new cljs_bean.core.BeanSeq(this.obj, this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_, this.arr, this.i + 1, null) : null;
};
cljs_bean.core.BeanSeq.prototype.cljs$core$ICounted$_count$arity$1 = function($_$jscomp$2116_y__5111__auto__$$) {
  $_$jscomp$2116_y__5111__auto__$$ = this.arr.length - this.i;
  return 0 > $_$jscomp$2116_y__5111__auto__$$ ? 0 : $_$jscomp$2116_y__5111__auto__$$;
};
cljs_bean.core.BeanSeq.prototype.cljs$core$IHash$_hash$arity$1 = function($coll$$) {
  return $APP.cljs.core.hash_ordered_coll(this);
};
cljs_bean.core.BeanSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($coll$$, $other$$) {
  return cljs_bean.from.cljs.core.equiv_sequential(this, $other$$);
};
cljs_bean.core.BeanSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function($_$$) {
  return $APP.cljs.core.List.EMPTY;
};
cljs_bean.core.BeanSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = function($coll$$, $f$$) {
  return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(this, $f$$);
};
cljs_bean.core.BeanSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = function($coll$$, $f$$, $start$$) {
  return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(this, $f$$, $start$$);
};
cljs_bean.core.BeanSeq.prototype.cljs$core$ISeq$_first$arity$1 = function($_$$) {
  return cljs_bean.core.indexed_entry(this.obj, this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_, this.arr, this.i);
};
cljs_bean.core.BeanSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function($_$$) {
  return this.i + 1 < this.arr.length ? new cljs_bean.core.BeanSeq(this.obj, this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_, this.arr, this.i + 1, null) : $APP.cljs.core.List.EMPTY;
};
cljs_bean.core.BeanSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return this;
};
cljs_bean.core.BeanSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($coll$$, $new_meta$$) {
  return $new_meta$$ === this.meta ? this : new cljs_bean.core.BeanSeq(this.obj, this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_, this.arr, this.i, $new_meta$$);
};
cljs_bean.core.BeanSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function($coll$$, $o$$) {
  return $APP.cljs.core.cons($o$$, this);
};
cljs_bean.core.BeanSeq.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 8, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$177$obj, cljs$cst$5419$prop__GT_key, cljs$cst$5420$key__GT_prop, $APP.cljs$cst$2153$transform, $APP.cljs.core.with_meta($APP.cljs$cst$4545$recursive_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$79$boolean], null)), $APP.cljs$cst$18$arr, $APP.cljs$cst$19$i, $APP.cljs$cst$20$meta], null);
};
cljs_bean.core.BeanSeq.cljs$lang$type = !0;
cljs_bean.core.BeanSeq.cljs$lang$ctorStr = "cljs-bean.core/BeanSeq";
cljs_bean.core.BeanSeq.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "cljs-bean.core/BeanSeq");
};
cljs_bean.core.__GT_BeanSeq = function($obj$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$, $recursive_QMARK_$$, $arr$$, $i$$, $meta$$) {
  return new cljs_bean.core.BeanSeq($obj$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$, $recursive_QMARK_$$, $arr$$, $i$$, $meta$$);
};
cljs_bean.core.Bean = function($meta$$, $obj$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$, $recursive_QMARK_$$, $__arr$$, $__cnt$$, $__hash$$) {
  this.meta = $meta$$;
  this.obj = $obj$$;
  this.prop__GT_key = $prop__GT_key$$;
  this.key__GT_prop = $key__GT_prop$$;
  this.transform = $transform$$;
  this.recursive_QMARK_ = $recursive_QMARK_$$;
  this.__arr = $__arr$$;
  this.__cnt = $__cnt$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2164131599;
  this.cljs$lang$protocol_mask$partition1$ = 139268;
};
cljs_bean.core.Bean.prototype.cljs$core$IFind$ = $APP.cljs.core.PROTOCOL_SENTINEL;
cljs_bean.core.Bean.prototype.cljs$core$IFind$_find$arity$2 = function($JSCompiler_temp_const$jscomp$1792__$$, $k$$) {
  var $JSCompiler_inline_result$jscomp$1793_v$$ = cljs_bean.core.goog$module$goog$object.get(this.obj, this.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? this.key__GT_prop.cljs$core$IFn$_invoke$arity$1($k$$) : this.key__GT_prop.call(null, $k$$), cljs_bean.core.lookup_sentinel);
  if ($JSCompiler_inline_result$jscomp$1793_v$$ === cljs_bean.core.lookup_sentinel) {
    return null;
  }
  $JSCompiler_temp_const$jscomp$1792__$$ = $APP.cljs.core.MapEntry;
  $JSCompiler_inline_result$jscomp$1793_v$$ = this.recursive_QMARK_ ? cljs_bean.core.__GT_val($JSCompiler_inline_result$jscomp$1793_v$$, this.prop__GT_key, this.key__GT_prop, this.transform) : $JSCompiler_inline_result$jscomp$1793_v$$;
  return new $JSCompiler_temp_const$jscomp$1792__$$($k$$, $JSCompiler_inline_result$jscomp$1793_v$$, null);
};
cljs_bean.core.Bean.prototype.toString = function() {
  return $APP.cljs.core.pr_str_STAR_(this);
};
cljs_bean.core.Bean.prototype.equiv = function($other$$) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, $other$$);
};
cljs_bean.core.Bean.prototype.keys = function() {
  return $APP.cljs.core.es6_iterator($APP.cljs.core.keys(this));
};
cljs_bean.core.Bean.prototype.entries = function() {
  return $APP.cljs.core.es6_entries_iterator($APP.cljs.core.seq(this));
};
cljs_bean.core.Bean.prototype.values = function() {
  return $APP.cljs.core.es6_iterator($APP.cljs.core.vals(this));
};
cljs_bean.core.Bean.prototype.has = function($k$$) {
  return $APP.cljs.core.contains_QMARK_(this, $k$$);
};
cljs_bean.core.Bean.prototype.get = function($k$$, $not_found$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k$$, $not_found$$);
};
cljs_bean.core.Bean.prototype.forEach = function($f$$) {
  for (var $G__76323_seq__76227_seq__76227__$1_temp__5825__auto__$$ = $APP.cljs.core.seq(this), $c__5548__auto__$$ = null, $G__76325_count__76229$$ = 0, $i__76230$$ = 0;;) {
    if ($i__76230$$ < $G__76325_count__76229$$) {
      var $v$$ = $c__5548__auto__$$.cljs$core$IIndexed$_nth$arity$2(null, $i__76230$$), $G__76324_k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$$, 0, null);
      $v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$$, 1, null);
      $f$$.cljs$core$IFn$_invoke$arity$2 ? $f$$.cljs$core$IFn$_invoke$arity$2($v$$, $G__76324_k$$) : $f$$.call(null, $v$$, $G__76324_k$$);
      $i__76230$$ += 1;
    } else {
      if ($G__76323_seq__76227_seq__76227__$1_temp__5825__auto__$$ = $APP.cljs.core.seq($G__76323_seq__76227_seq__76227__$1_temp__5825__auto__$$)) {
        $APP.cljs.core.chunked_seq_QMARK_($G__76323_seq__76227_seq__76227__$1_temp__5825__auto__$$) ? ($c__5548__auto__$$ = $APP.cljs.core.chunk_first($G__76323_seq__76227_seq__76227__$1_temp__5825__auto__$$), $G__76323_seq__76227_seq__76227__$1_temp__5825__auto__$$ = $APP.cljs.core.chunk_rest($G__76323_seq__76227_seq__76227__$1_temp__5825__auto__$$), $G__76324_k$$ = $c__5548__auto__$$, $G__76325_count__76229$$ = $APP.cljs.core.count($c__5548__auto__$$), $c__5548__auto__$$ = $G__76324_k$$) : ($c__5548__auto__$$ = 
        $APP.cljs.core.first($G__76323_seq__76227_seq__76227__$1_temp__5825__auto__$$), $G__76324_k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c__5548__auto__$$, 0, null), $v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c__5548__auto__$$, 1, null), $f$$.cljs$core$IFn$_invoke$arity$2 ? $f$$.cljs$core$IFn$_invoke$arity$2($v$$, $G__76324_k$$) : $f$$.call(null, $v$$, $G__76324_k$$), $G__76323_seq__76227_seq__76227__$1_temp__5825__auto__$$ = $APP.cljs.core.next($G__76323_seq__76227_seq__76227__$1_temp__5825__auto__$$), 
        $c__5548__auto__$$ = null, $G__76325_count__76229$$ = 0), $i__76230$$ = 0;
      } else {
        return null;
      }
    }
  }
};
cljs_bean.core.Bean.prototype.cljs$core$ILookup$_lookup$arity$2 = function($G__76252__$$, $k$$) {
  $G__76252__$$ = this.obj[this.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? this.key__GT_prop.cljs$core$IFn$_invoke$arity$1($k$$) : this.key__GT_prop.call(null, $k$$)];
  return this.recursive_QMARK_ ? cljs_bean.core.__GT_val($G__76252__$$, this.prop__GT_key, this.key__GT_prop, this.transform) : $G__76252__$$;
};
cljs_bean.core.Bean.prototype.cljs$core$ILookup$_lookup$arity$3 = function($_$jscomp$2122_ret$$, $k$$, $not_found$$) {
  $_$jscomp$2122_ret$$ = cljs_bean.core.goog$module$goog$object.get(this.obj, this.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? this.key__GT_prop.cljs$core$IFn$_invoke$arity$1($k$$) : this.key__GT_prop.call(null, $k$$), $not_found$$);
  return this.recursive_QMARK_ && $_$jscomp$2122_ret$$ !== $not_found$$ ? cljs_bean.core.__GT_val($_$jscomp$2122_ret$$, this.prop__GT_key, this.key__GT_prop, this.transform) : $_$jscomp$2122_ret$$;
};
cljs_bean.core.Bean.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($_$jscomp$2123_x$$, $f$$, $init$$) {
  var $self__$$ = this;
  try {
    var $result$$ = $APP.cljs.core.volatile_BANG_($init$$);
    cljs_bean.core.goog$module$goog$object.forEach($self__$$.obj, function($G__76258$jscomp$inline_9889_JSCompiler_inline_result$jscomp$9364_v$$, $G__76257$jscomp$inline_9888_k$$, $JSCompiler_temp_const$jscomp$9362____$2$jscomp$42_r$$) {
      $JSCompiler_temp_const$jscomp$9362____$2$jscomp$42_r$$ = $result$$.cljs$core$IVolatile$_vreset_BANG_$arity$2;
      var $G__76256$$ = $result$$.cljs$core$IDeref$_deref$arity$1(null);
      $G__76257$jscomp$inline_9888_k$$ = $self__$$.prop__GT_key.cljs$core$IFn$_invoke$arity$1 ? $self__$$.prop__GT_key.cljs$core$IFn$_invoke$arity$1($G__76257$jscomp$inline_9888_k$$) : $self__$$.prop__GT_key.call(null, $G__76257$jscomp$inline_9888_k$$);
      $G__76258$jscomp$inline_9889_JSCompiler_inline_result$jscomp$9364_v$$ = $self__$$.recursive_QMARK_ ? cljs_bean.core.__GT_val($G__76258$jscomp$inline_9889_JSCompiler_inline_result$jscomp$9364_v$$, $self__$$.prop__GT_key, $self__$$.key__GT_prop, $self__$$.transform) : $G__76258$jscomp$inline_9889_JSCompiler_inline_result$jscomp$9364_v$$;
      $G__76258$jscomp$inline_9889_JSCompiler_inline_result$jscomp$9364_v$$ = $f$$.cljs$core$IFn$_invoke$arity$3 ? $f$$.cljs$core$IFn$_invoke$arity$3($G__76256$$, $G__76257$jscomp$inline_9888_k$$, $G__76258$jscomp$inline_9889_JSCompiler_inline_result$jscomp$9364_v$$) : $f$$.call(null, $G__76256$$, $G__76257$jscomp$inline_9888_k$$, $G__76258$jscomp$inline_9889_JSCompiler_inline_result$jscomp$9364_v$$);
      $JSCompiler_temp_const$jscomp$9362____$2$jscomp$42_r$$ = $JSCompiler_temp_const$jscomp$9362____$2$jscomp$42_r$$.call($result$$, null, $G__76258$jscomp$inline_9889_JSCompiler_inline_result$jscomp$9364_v$$);
      if ($APP.cljs.core.reduced_QMARK_($JSCompiler_temp_const$jscomp$9362____$2$jscomp$42_r$$)) {
        throw $JSCompiler_temp_const$jscomp$9362____$2$jscomp$42_r$$;
      }
      return null;
    });
    return $APP.cljs.core.deref($result$$);
  } catch ($e76255$$) {
    $_$jscomp$2123_x$$ = $e76255$$;
    if ($APP.cljs.core.reduced_QMARK_($_$jscomp$2123_x$$)) {
      return $APP.cljs.core.deref($_$jscomp$2123_x$$);
    }
    throw $_$jscomp$2123_x$$;
  }
};
cljs_bean.core.Bean.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($coll$$, $writer$$, $opts$$) {
  return $APP.cljs.core.print_map(this, $APP.cljs.core.pr_writer, $writer$$, $opts$$);
};
cljs_bean.core.Bean.prototype.cljs$core$IIterable$_iterator$arity$1 = function($coll$$) {
  this.__arr == null && (this.__arr = $APP.cljs.core.js_keys(this.obj));
  return new cljs_bean.core.BeanIterator(this.obj, this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_, this.__arr, 0, this.cljs$core$ICounted$_count$arity$1(null));
};
cljs_bean.core.Bean.prototype.cljs$core$IMeta$_meta$arity$1 = function($_$$) {
  return this.meta;
};
cljs_bean.core.Bean.prototype.cljs$core$ICloneable$_clone$arity$1 = function($_$$) {
  return new cljs_bean.core.Bean(this.meta, this.obj, this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_, this.__arr, this.__cnt, this.__hash);
};
cljs_bean.core.Bean.prototype.cljs$core$ICounted$_count$arity$1 = function($_$$) {
  return this.__cnt == null ? (this.__arr == null && (this.__arr = $APP.cljs.core.js_keys(this.obj)), this.__cnt = this.__arr.length) : this.__cnt;
};
cljs_bean.core.Bean.prototype.cljs$core$IHash$_hash$arity$1 = function($coll$jscomp$980_h__5134__auto__$jscomp$198_h__5134__auto____$1$$) {
  $coll$jscomp$980_h__5134__auto__$jscomp$198_h__5134__auto____$1$$ = this.__hash;
  return $coll$jscomp$980_h__5134__auto__$jscomp$198_h__5134__auto____$1$$ != null ? $coll$jscomp$980_h__5134__auto__$jscomp$198_h__5134__auto____$1$$ : this.__hash = $coll$jscomp$980_h__5134__auto__$jscomp$198_h__5134__auto____$1$$ = $APP.cljs.core.hash_unordered_coll(this);
};
cljs_bean.core.Bean.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($coll$$, $other$$) {
  return $APP.cljs.core.equiv_map(this, $other$$);
};
cljs_bean.core.Bean.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function($_$$) {
  return new cljs_bean.core.TransientBean(!0, cljs_bean.core.goog$module$goog$object.clone(this.obj), this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_, this.__cnt);
};
cljs_bean.core.Bean.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function($_$$) {
  return new cljs_bean.core.Bean(this.meta, {}, this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_, [], 0, null);
};
cljs_bean.core.Bean.prototype.cljs$core$IReduce$_reduce$arity$2 = function($coll$$, $f$$) {
  return $APP.cljs.core._reduce(this.cljs$core$ISeqable$_seq$arity$1(null), $f$$);
};
cljs_bean.core.Bean.prototype.cljs$core$IReduce$_reduce$arity$3 = function($coll$$, $f$$, $start$$) {
  return this.cljs$core$IKVReduce$_kv_reduce$arity$3(null, function($r$$, $G__76268_k$$, $v$$) {
    $G__76268_k$$ = new $APP.cljs.core.MapEntry($G__76268_k$$, $v$$, null);
    return $f$$.cljs$core$IFn$_invoke$arity$2 ? $f$$.cljs$core$IFn$_invoke$arity$2($r$$, $G__76268_k$$) : $f$$.call(null, $r$$, $G__76268_k$$);
  }, $start$$);
};
cljs_bean.core.Bean.prototype.cljs$core$IMap$_dissoc$arity$2 = function($JSCompiler_temp_const$jscomp$1795__$$, $k$$) {
  $JSCompiler_temp_const$jscomp$1795__$$ = cljs_bean.core.Bean;
  var $JSCompiler_temp_const$$ = this.meta, $G__76269$$ = cljs_bean.core.goog$module$goog$object.clone(this.obj);
  delete $G__76269$$[this.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? this.key__GT_prop.cljs$core$IFn$_invoke$arity$1($k$$) : this.key__GT_prop.call(null, $k$$)];
  return new $JSCompiler_temp_const$jscomp$1795__$$($JSCompiler_temp_const$$, $G__76269$$, this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_, null, null, null);
};
cljs_bean.core.Bean.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($JSCompiler_temp_const$jscomp$9367__$$, $JSCompiler_temp_const$jscomp$inline_9893_k$$, $JSCompiler_inline_result$jscomp$inline_9894_JSCompiler_temp$jscomp$9365_v$$) {
  if (cljs_bean.core.snapshot_QMARK_($JSCompiler_temp_const$jscomp$inline_9893_k$$, $JSCompiler_inline_result$jscomp$inline_9894_JSCompiler_temp$jscomp$9365_v$$, this.prop__GT_key, this.recursive_QMARK_)) {
    $JSCompiler_inline_result$jscomp$inline_9894_JSCompiler_temp$jscomp$9365_v$$ = $APP.cljs.core._assoc($APP.cljs.core.with_meta(cljs_bean.core.snapshot(this.obj, this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_), this.meta), $JSCompiler_temp_const$jscomp$inline_9893_k$$, $JSCompiler_inline_result$jscomp$inline_9894_JSCompiler_temp$jscomp$9365_v$$);
  } else {
    $JSCompiler_temp_const$jscomp$9367__$$ = cljs_bean.core.Bean;
    var $JSCompiler_temp_const$$ = this.meta, $G__76270$$ = cljs_bean.core.goog$module$goog$object.clone(this.obj);
    $JSCompiler_temp_const$jscomp$inline_9893_k$$ = this.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? this.key__GT_prop.cljs$core$IFn$_invoke$arity$1($JSCompiler_temp_const$jscomp$inline_9893_k$$) : this.key__GT_prop.call(null, $JSCompiler_temp_const$jscomp$inline_9893_k$$);
    $JSCompiler_inline_result$jscomp$inline_9894_JSCompiler_temp$jscomp$9365_v$$ = this.recursive_QMARK_ ? cljs_bean.core.unwrap($JSCompiler_inline_result$jscomp$inline_9894_JSCompiler_temp$jscomp$9365_v$$) : $JSCompiler_inline_result$jscomp$inline_9894_JSCompiler_temp$jscomp$9365_v$$;
    $G__76270$$[$JSCompiler_temp_const$jscomp$inline_9893_k$$] = $JSCompiler_inline_result$jscomp$inline_9894_JSCompiler_temp$jscomp$9365_v$$;
    $JSCompiler_inline_result$jscomp$inline_9894_JSCompiler_temp$jscomp$9365_v$$ = new $JSCompiler_temp_const$jscomp$9367__$$($JSCompiler_temp_const$$, $G__76270$$, this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_, null, null, null);
  }
  return $JSCompiler_inline_result$jscomp$inline_9894_JSCompiler_temp$jscomp$9365_v$$;
};
cljs_bean.core.Bean.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($coll$$, $k$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k$$, cljs_bean.core.lookup_sentinel) !== cljs_bean.core.lookup_sentinel;
};
cljs_bean.core.Bean.prototype.cljs$core$ISeqable$_seq$arity$1 = function($_$$) {
  this.__arr == null && (this.__arr = $APP.cljs.core.js_keys(this.obj));
  return this.__arr.length > 0 ? new cljs_bean.core.BeanSeq(this.obj, this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_, this.__arr, 0, null) : null;
};
cljs_bean.core.Bean.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($coll$$, $new_meta$$) {
  return $new_meta$$ === this.meta ? this : new cljs_bean.core.Bean($new_meta$$, this.obj, this.prop__GT_key, this.key__GT_prop, this.transform, this.recursive_QMARK_, this.__arr, this.__cnt, this.__hash);
};
cljs_bean.core.Bean.prototype.cljs$core$ICollection$_conj$arity$2 = function($coll$$, $entry$$) {
  return cljs_bean.from.cljs.core.PersistentArrayMap_conj(this, $entry$$);
};
cljs_bean.core.Bean.prototype.call = function($unused__11804__auto__$$) {
  switch(arguments.length - 1) {
    case 1:
      return this.cljs$core$IFn$_invoke$arity$1(arguments[1]);
    case 2:
      return this.cljs$core$IFn$_invoke$arity$2(arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length - 1)].join(""));
  }
};
cljs_bean.core.Bean.prototype.apply = function($self__$$, $args76210$$) {
  return this.call.apply(this, [this].concat($APP.cljs.core.aclone($args76210$$)));
};
cljs_bean.core.Bean.prototype.cljs$core$IFn$_invoke$arity$1 = function($G__76273_k$$) {
  $G__76273_k$$ = this.obj[this.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? this.key__GT_prop.cljs$core$IFn$_invoke$arity$1($G__76273_k$$) : this.key__GT_prop.call(null, $G__76273_k$$)];
  return this.recursive_QMARK_ ? cljs_bean.core.__GT_val($G__76273_k$$, this.prop__GT_key, this.key__GT_prop, this.transform) : $G__76273_k$$;
};
cljs_bean.core.Bean.prototype.cljs$core$IFn$_invoke$arity$2 = function($k$jscomp$690_ret$$, $not_found$$) {
  $k$jscomp$690_ret$$ = cljs_bean.core.goog$module$goog$object.get(this.obj, this.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? this.key__GT_prop.cljs$core$IFn$_invoke$arity$1($k$jscomp$690_ret$$) : this.key__GT_prop.call(null, $k$jscomp$690_ret$$), $not_found$$);
  return this.recursive_QMARK_ && $k$jscomp$690_ret$$ !== $not_found$$ ? cljs_bean.core.__GT_val($k$jscomp$690_ret$$, this.prop__GT_key, this.key__GT_prop, this.transform) : $k$jscomp$690_ret$$;
};
cljs_bean.core.Bean.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 9, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$20$meta, $APP.cljs$cst$177$obj, cljs$cst$5419$prop__GT_key, cljs$cst$5420$key__GT_prop, $APP.cljs$cst$2153$transform, $APP.cljs.core.with_meta($APP.cljs$cst$4545$recursive_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$79$boolean], null)), $APP.cljs.core.with_meta(cljs$cst$5422$__arr, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$10$mutable, 
  !0], null)), $APP.cljs.core.with_meta(cljs$cst$5421$__cnt, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$10$mutable, !0], null)), $APP.cljs.core.with_meta($APP.cljs$cst$26$__hash, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$10$mutable, !0], null))], null);
};
cljs_bean.core.Bean.cljs$lang$type = !0;
cljs_bean.core.Bean.cljs$lang$ctorStr = "cljs-bean.core/Bean";
cljs_bean.core.Bean.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "cljs-bean.core/Bean");
};
cljs_bean.core.__GT_Bean = function($meta$$, $obj$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$, $recursive_QMARK_$$, $__arr$$, $__cnt$$, $__hash$$) {
  return new cljs_bean.core.Bean($meta$$, $obj$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$, $recursive_QMARK_$$, $__arr$$, $__cnt$$, $__hash$$);
};
cljs_bean.core.TransientArrayVector = function($editable_QMARK_$$, $arr$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$) {
  this.editable_QMARK_ = $editable_QMARK_$$;
  this.arr = $arr$$;
  this.prop__GT_key = $prop__GT_key$$;
  this.key__GT_prop = $key__GT_prop$$;
  this.transform = $transform$$;
  this.cljs$lang$protocol_mask$partition1$ = 88;
  this.cljs$lang$protocol_mask$partition0$ = 275;
};
cljs_bean.core.TransientArrayVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = function($tcoll$$, $o$$) {
  if (this.editable_QMARK_) {
    return cljs_bean.core.compatible_value_QMARK_($o$$, !0) ? (this.arr.push(cljs_bean.core.unwrap($o$$)), this) : $APP.cljs.core._conj_BANG_($APP.cljs.core.transient$(cljs_bean.core.snapshot_arr(this.arr)), $o$$);
  }
  throw Error("conj! after persistent!");
};
cljs_bean.core.TransientArrayVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = function($_$$) {
  if (this.editable_QMARK_) {
    return this.editable_QMARK_ = !1, new cljs_bean.core.ArrayVector(null, this.prop__GT_key, this.key__GT_prop, this.transform, this.arr, null);
  }
  throw Error("persistent! called twice");
};
cljs_bean.core.TransientArrayVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = function($tcoll$$, $key$$, $val$$) {
  return cljs_bean.from.cljs.core.TransientVector_assoc_BANG_(this, $key$$, $val$$, "TransientArrayVector");
};
cljs_bean.core.TransientArrayVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = function($tcoll$$, $n$$, $val$$) {
  if (this.editable_QMARK_) {
    if (cljs_bean.core.compatible_value_QMARK_($val$$, !0)) {
      if (0 <= $n$$ && $n$$ < this.arr.length) {
        return this.arr[$n$$] = cljs_bean.core.unwrap($val$$), this;
      }
      if ($n$$ === this.arr.length) {
        return this.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null, $val$$);
      }
      throw Error(["Index ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($n$$), " out of bounds for TransientArrayVector of length", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.arr.length)].join(""));
    }
    return $APP.cljs.core._assoc_n_BANG_($APP.cljs.core.transient$(cljs_bean.core.snapshot_arr(this.arr)), $n$$, $val$$);
  }
  throw Error("assoc! after persistent!");
};
cljs_bean.core.TransientArrayVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = function($tcoll$$) {
  if (this.editable_QMARK_) {
    if (this.arr.length === 0) {
      throw Error("Can't pop empty vector");
    }
    this.arr = this.arr.slice(0, this.arr.length - 1);
    return this;
  }
  throw Error("pop! after persistent!");
};
cljs_bean.core.TransientArrayVector.prototype.cljs$core$ICounted$_count$arity$1 = function($_$$) {
  if (this.editable_QMARK_) {
    return this.arr.length;
  }
  throw Error("count after persistent!");
};
cljs_bean.core.TransientArrayVector.prototype.cljs$core$IIndexed$_nth$arity$2 = function($_$$, $n$$) {
  if (this.editable_QMARK_) {
    return cljs_bean.core.__GT_val(this.arr[$n$$], this.prop__GT_key, this.key__GT_prop, this.transform);
  }
  throw Error("nth after persistent!");
};
cljs_bean.core.TransientArrayVector.prototype.cljs$core$IIndexed$_nth$arity$3 = function($coll$$, $n$$, $not_found$$) {
  return 0 <= $n$$ && $n$$ < this.arr.length ? this.cljs$core$IIndexed$_nth$arity$2(null, $n$$) : $not_found$$;
};
cljs_bean.core.TransientArrayVector.prototype.cljs$core$ILookup$_lookup$arity$2 = function($coll$$, $k$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k$$, null);
};
cljs_bean.core.TransientArrayVector.prototype.cljs$core$ILookup$_lookup$arity$3 = function($coll$$, $k$$, $not_found$$) {
  return typeof $k$$ === "number" ? this.cljs$core$IIndexed$_nth$arity$3(null, $k$$, $not_found$$) : $not_found$$;
};
cljs_bean.core.TransientArrayVector.prototype.call = function($unused__11804__auto__$$) {
  switch(arguments.length - 1) {
    case 1:
      return this.cljs$core$IFn$_invoke$arity$1(arguments[1]);
    case 2:
      return this.cljs$core$IFn$_invoke$arity$2(arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length - 1)].join(""));
  }
};
cljs_bean.core.TransientArrayVector.prototype.apply = function($self__$$, $args76275$$) {
  return this.call.apply(this, [this].concat($APP.cljs.core.aclone($args76275$$)));
};
cljs_bean.core.TransientArrayVector.prototype.cljs$core$IFn$_invoke$arity$1 = function($k$$) {
  return this.cljs$core$ILookup$_lookup$arity$2(null, $k$$);
};
cljs_bean.core.TransientArrayVector.prototype.cljs$core$IFn$_invoke$arity$2 = function($k$$, $not_found$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k$$, $not_found$$);
};
cljs_bean.core.TransientArrayVector.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta($APP.cljs$cst$77$editable_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$79$boolean, $APP.cljs$cst$10$mutable, !0], null)), $APP.cljs.core.with_meta($APP.cljs$cst$18$arr, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$10$mutable, !0], null)), cljs$cst$5419$prop__GT_key, cljs$cst$5420$key__GT_prop, $APP.cljs$cst$2153$transform], 
  null);
};
cljs_bean.core.TransientArrayVector.cljs$lang$type = !0;
cljs_bean.core.TransientArrayVector.cljs$lang$ctorStr = "cljs-bean.core/TransientArrayVector";
cljs_bean.core.TransientArrayVector.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "cljs-bean.core/TransientArrayVector");
};
cljs_bean.core.__GT_TransientArrayVector = function($editable_QMARK_$$, $arr$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$) {
  return new cljs_bean.core.TransientArrayVector($editable_QMARK_$$, $arr$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$);
};
cljs_bean.core.ArrayVectorIterator = function($prop__GT_key$$, $key__GT_prop$$, $transform$$, $arr$$, $i$$, $cnt$$) {
  this.prop__GT_key = $prop__GT_key$$;
  this.key__GT_prop = $key__GT_prop$$;
  this.transform = $transform$$;
  this.arr = $arr$$;
  this.i = $i$$;
  this.cnt = $cnt$$;
};
cljs_bean.core.ArrayVectorIterator.prototype.hasNext = function() {
  return this.i < this.cnt;
};
cljs_bean.core.ArrayVectorIterator.prototype.next = function() {
  var $ret$$ = cljs_bean.core.__GT_val(this.arr[this.i], this.prop__GT_key, this.key__GT_prop, this.transform);
  this.i += 1;
  return $ret$$;
};
cljs_bean.core.ArrayVectorIterator.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5419$prop__GT_key, cljs$cst$5420$key__GT_prop, $APP.cljs$cst$2153$transform, $APP.cljs$cst$18$arr, $APP.cljs.core.with_meta($APP.cljs$cst$19$i, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$10$mutable, !0], null)), $APP.cljs$cst$59$cnt], null);
};
cljs_bean.core.ArrayVectorIterator.cljs$lang$type = !0;
cljs_bean.core.ArrayVectorIterator.cljs$lang$ctorStr = "cljs-bean.core/ArrayVectorIterator";
cljs_bean.core.ArrayVectorIterator.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "cljs-bean.core/ArrayVectorIterator");
};
cljs_bean.core.__GT_ArrayVectorIterator = function($prop__GT_key$$, $key__GT_prop$$, $transform$$, $arr$$, $i$$, $cnt$$) {
  return new cljs_bean.core.ArrayVectorIterator($prop__GT_key$$, $key__GT_prop$$, $transform$$, $arr$$, $i$$, $cnt$$);
};
cljs_bean.core.ArrayVectorSeq = function($prop__GT_key$$, $key__GT_prop$$, $transform$$, $arr$$, $i$$, $meta$$) {
  this.prop__GT_key = $prop__GT_key$$;
  this.key__GT_prop = $key__GT_prop$$;
  this.transform = $transform$$;
  this.arr = $arr$$;
  this.i = $i$$;
  this.meta = $meta$$;
  this.cljs$lang$protocol_mask$partition0$ = 2179858686;
  this.cljs$lang$protocol_mask$partition1$ = 8192;
};
cljs_bean.core.ArrayVectorSeq.prototype.toString = function() {
  return $APP.cljs.core.pr_str_STAR_(this);
};
cljs_bean.core.ArrayVectorSeq.prototype.equiv = function($other$$) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, $other$$);
};
cljs_bean.core.ArrayVectorSeq.prototype.indexOf = function() {
  var $G__76334$$ = null, $G__76334__1$$ = function($x$$) {
    return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, $x$$, 0);
  }, $G__76334__2$$ = function($x$$, $start$$) {
    return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, $x$$, $start$$);
  };
  $G__76334$$ = function($x$$, $start$$) {
    switch(arguments.length) {
      case 1:
        return $G__76334__1$$.call(this, $x$$);
      case 2:
        return $G__76334__2$$.call(this, $x$$, $start$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__76334$$.cljs$core$IFn$_invoke$arity$1 = $G__76334__1$$;
  $G__76334$$.cljs$core$IFn$_invoke$arity$2 = $G__76334__2$$;
  return $G__76334$$;
}();
cljs_bean.core.ArrayVectorSeq.prototype.lastIndexOf = function() {
  var $G__76338$$ = null, $G__76338__1$$ = function($x$$) {
    return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, $x$$, $APP.cljs.core.count(this));
  }, $G__76338__2$$ = function($x$$, $start$$) {
    return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, $x$$, $start$$);
  };
  $G__76338$$ = function($x$$, $start$$) {
    switch(arguments.length) {
      case 1:
        return $G__76338__1$$.call(this, $x$$);
      case 2:
        return $G__76338__2$$.call(this, $x$$, $start$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__76338$$.cljs$core$IFn$_invoke$arity$1 = $G__76338__1$$;
  $G__76338$$.cljs$core$IFn$_invoke$arity$2 = $G__76338__2$$;
  return $G__76338$$;
}();
cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = function($_$jscomp$2139_i__$1$$, $n$$) {
  $_$jscomp$2139_i__$1$$ = $n$$ + this.i;
  if (0 <= $_$jscomp$2139_i__$1$$ && $_$jscomp$2139_i__$1$$ < this.arr.length) {
    return cljs_bean.core.__GT_val(this.arr[$_$jscomp$2139_i__$1$$], this.prop__GT_key, this.key__GT_prop, this.transform);
  }
  throw Error("Index out of bounds");
};
cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = function($_$jscomp$2140_i__$1$$, $n$$, $not_found$$) {
  $_$jscomp$2140_i__$1$$ = $n$$ + this.i;
  return 0 <= $_$jscomp$2140_i__$1$$ && $_$jscomp$2140_i__$1$$ < this.arr.length ? cljs_bean.core.__GT_val(this.arr[$_$jscomp$2140_i__$1$$], this.prop__GT_key, this.key__GT_prop, this.transform) : $not_found$$;
};
cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($coll$$, $writer$$, $opts$$) {
  return $APP.cljs.core.pr_sequential_writer($writer$$, $APP.cljs.core.pr_writer, "(", " ", ")", $opts$$, this);
};
cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function($_$$) {
  return this.meta;
};
cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = function($_$$) {
  return new cljs_bean.core.ArrayVectorSeq(this.prop__GT_key, this.key__GT_prop, this.transform, this.arr, this.i, this.meta);
};
cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$INext$_next$arity$1 = function($_$$) {
  return this.i + 1 < this.arr.length ? new cljs_bean.core.ArrayVectorSeq(this.prop__GT_key, this.key__GT_prop, this.transform, this.arr, this.i + 1, null) : null;
};
cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$ICounted$_count$arity$1 = function($_$jscomp$2144_y__5111__auto__$$) {
  $_$jscomp$2144_y__5111__auto__$$ = this.arr.length - this.i;
  return 0 > $_$jscomp$2144_y__5111__auto__$$ ? 0 : $_$jscomp$2144_y__5111__auto__$$;
};
cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IHash$_hash$arity$1 = function($coll$$) {
  return $APP.cljs.core.hash_ordered_coll(this);
};
cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($coll$$, $other$$) {
  return cljs_bean.from.cljs.core.equiv_sequential(this, $other$$);
};
cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function($_$$) {
  return $APP.cljs.core.List.EMPTY;
};
cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = function($coll$$, $f$$) {
  return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(this, $f$$);
};
cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = function($coll$$, $f$$, $start$$) {
  return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(this, $f$$, $start$$);
};
cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$ISeq$_first$arity$1 = function($_$$) {
  return cljs_bean.core.__GT_val(this.arr[this.i], this.prop__GT_key, this.key__GT_prop, this.transform);
};
cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function($_$$) {
  return this.i + 1 < this.arr.length ? new cljs_bean.core.ArrayVectorSeq(this.prop__GT_key, this.key__GT_prop, this.transform, this.arr, this.i + 1, null) : $APP.cljs.core.List.EMPTY;
};
cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return this;
};
cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($coll$$, $new_meta$$) {
  return $new_meta$$ === this.meta ? this : new cljs_bean.core.ArrayVectorSeq(this.prop__GT_key, this.key__GT_prop, this.transform, this.arr, this.i, $new_meta$$);
};
cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function($coll$$, $o$$) {
  return $APP.cljs.core.cons($o$$, this);
};
cljs_bean.core.ArrayVectorSeq.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5419$prop__GT_key, cljs$cst$5420$key__GT_prop, $APP.cljs$cst$2153$transform, $APP.cljs$cst$18$arr, $APP.cljs$cst$19$i, $APP.cljs$cst$20$meta], null);
};
cljs_bean.core.ArrayVectorSeq.cljs$lang$type = !0;
cljs_bean.core.ArrayVectorSeq.cljs$lang$ctorStr = "cljs-bean.core/ArrayVectorSeq";
cljs_bean.core.ArrayVectorSeq.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "cljs-bean.core/ArrayVectorSeq");
};
cljs_bean.core.__GT_ArrayVectorSeq = function($prop__GT_key$$, $key__GT_prop$$, $transform$$, $arr$$, $i$$, $meta$$) {
  return new cljs_bean.core.ArrayVectorSeq($prop__GT_key$$, $key__GT_prop$$, $transform$$, $arr$$, $i$$, $meta$$);
};
cljs_bean.core.ArrayVector = function($meta$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$, $arr$$, $__hash$$) {
  this.meta = $meta$$;
  this.prop__GT_key = $prop__GT_key$$;
  this.key__GT_prop = $key__GT_prop$$;
  this.transform = $transform$$;
  this.arr = $arr$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2315150111;
  this.cljs$lang$protocol_mask$partition1$ = 141316;
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IFind$ = $APP.cljs.core.PROTOCOL_SENTINEL;
cljs_bean.core.ArrayVector.prototype.cljs$core$IFind$_find$arity$2 = function($coll$$, $n$$) {
  return 0 <= $n$$ && $n$$ < this.arr.length ? new $APP.cljs.core.MapEntry($n$$, cljs_bean.core.__GT_val(this.arr[$n$$], this.prop__GT_key, this.key__GT_prop, this.transform), null) : null;
};
cljs_bean.core.ArrayVector.prototype.toString = function() {
  return $APP.cljs.core.pr_str_STAR_(this);
};
cljs_bean.core.ArrayVector.prototype.equiv = function($other$$) {
  return this.cljs$core$IEquiv$_equiv$arity$2(null, $other$$);
};
cljs_bean.core.ArrayVector.prototype.indexOf = function() {
  var $G__76343$$ = null, $G__76343__1$$ = function($x$$) {
    return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, $x$$, 0);
  }, $G__76343__2$$ = function($x$$, $start$$) {
    return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(this, $x$$, $start$$);
  };
  $G__76343$$ = function($x$$, $start$$) {
    switch(arguments.length) {
      case 1:
        return $G__76343__1$$.call(this, $x$$);
      case 2:
        return $G__76343__2$$.call(this, $x$$, $start$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__76343$$.cljs$core$IFn$_invoke$arity$1 = $G__76343__1$$;
  $G__76343$$.cljs$core$IFn$_invoke$arity$2 = $G__76343__2$$;
  return $G__76343$$;
}();
cljs_bean.core.ArrayVector.prototype.lastIndexOf = function() {
  var $G__76344$$ = null, $G__76344__1$$ = function($x$$) {
    return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$2(this, $x$$);
  }, $G__76344__2$$ = function($x$$, $start$$) {
    return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(this, $x$$, $start$$);
  };
  $G__76344$$ = function($x$$, $start$$) {
    switch(arguments.length) {
      case 1:
        return $G__76344__1$$.call(this, $x$$);
      case 2:
        return $G__76344__2$$.call(this, $x$$, $start$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__76344$$.cljs$core$IFn$_invoke$arity$1 = $G__76344__1$$;
  $G__76344$$.cljs$core$IFn$_invoke$arity$2 = $G__76344__2$$;
  return $G__76344$$;
}();
cljs_bean.core.ArrayVector.prototype.cljs$core$ILookup$_lookup$arity$2 = function($coll$$, $k$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k$$, null);
};
cljs_bean.core.ArrayVector.prototype.cljs$core$ILookup$_lookup$arity$3 = function($coll$$, $k$$, $not_found$$) {
  return cljs_bean.from.cljs.core.PersistentVector_lookup(this, $k$$, $not_found$$);
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($i$jscomp$520_v$$, $f$$, $init$jscomp$68_len$$) {
  $i$jscomp$520_v$$ = 0;
  for (var $G__76282$jscomp$inline_9900_G__76346$jscomp$inline_9903_init__$1$jscomp$12_init__$2$jscomp$inline_9898_init__$3$$ = $init$jscomp$68_len$$;;) {
    if ($i$jscomp$520_v$$ < this.arr.length) {
      $init$jscomp$68_len$$ = this.arr.length;
      var $G__76348_init__$2$jscomp$10_j$$;
      a: {
        for ($G__76348_init__$2$jscomp$10_j$$ = 0;;) {
          if ($G__76348_init__$2$jscomp$10_j$$ < $init$jscomp$68_len$$) {
            var $G__76283$$ = $G__76348_init__$2$jscomp$10_j$$ + $i$jscomp$520_v$$, $G__76284$$ = cljs_bean.core.__GT_val(this.arr[$G__76348_init__$2$jscomp$10_j$$], this.prop__GT_key, this.key__GT_prop, this.transform);
            $G__76282$jscomp$inline_9900_G__76346$jscomp$inline_9903_init__$1$jscomp$12_init__$2$jscomp$inline_9898_init__$3$$ = $f$$.cljs$core$IFn$_invoke$arity$3 ? $f$$.cljs$core$IFn$_invoke$arity$3($G__76282$jscomp$inline_9900_G__76346$jscomp$inline_9903_init__$1$jscomp$12_init__$2$jscomp$inline_9898_init__$3$$, $G__76283$$, $G__76284$$) : $f$$.call(null, $G__76282$jscomp$inline_9900_G__76346$jscomp$inline_9903_init__$1$jscomp$12_init__$2$jscomp$inline_9898_init__$3$$, $G__76283$$, $G__76284$$);
            if ($APP.cljs.core.reduced_QMARK_($G__76282$jscomp$inline_9900_G__76346$jscomp$inline_9903_init__$1$jscomp$12_init__$2$jscomp$inline_9898_init__$3$$)) {
              $G__76348_init__$2$jscomp$10_j$$ = $G__76282$jscomp$inline_9900_G__76346$jscomp$inline_9903_init__$1$jscomp$12_init__$2$jscomp$inline_9898_init__$3$$;
              break a;
            }
            $G__76348_init__$2$jscomp$10_j$$ += 1;
          } else {
            $G__76348_init__$2$jscomp$10_j$$ = $G__76282$jscomp$inline_9900_G__76346$jscomp$inline_9903_init__$1$jscomp$12_init__$2$jscomp$inline_9898_init__$3$$;
            break a;
          }
        }
        $G__76348_init__$2$jscomp$10_j$$ = void 0;
      }
      if ($APP.cljs.core.reduced_QMARK_($G__76348_init__$2$jscomp$10_j$$)) {
        return $APP.cljs.core.deref($G__76348_init__$2$jscomp$10_j$$);
      }
      $i$jscomp$520_v$$ += $init$jscomp$68_len$$;
      $G__76282$jscomp$inline_9900_G__76346$jscomp$inline_9903_init__$1$jscomp$12_init__$2$jscomp$inline_9898_init__$3$$ = $G__76348_init__$2$jscomp$10_j$$;
    } else {
      return $G__76282$jscomp$inline_9900_G__76346$jscomp$inline_9903_init__$1$jscomp$12_init__$2$jscomp$inline_9898_init__$3$$;
    }
  }
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IIndexed$_nth$arity$2 = function($coll$$, $n$$) {
  if (0 <= $n$$ && $n$$ < this.arr.length) {
    return cljs_bean.core.__GT_val(this.arr[$n$$], this.prop__GT_key, this.key__GT_prop, this.transform);
  }
  throw Error(["No item ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($n$$), " in vector of length ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.arr.length)].join(""));
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IIndexed$_nth$arity$3 = function($coll$$, $n$$, $not_found$$) {
  return 0 <= $n$$ && $n$$ < this.arr.length ? cljs_bean.core.__GT_val(this.arr[$n$$], this.prop__GT_key, this.key__GT_prop, this.transform) : $not_found$$;
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($coll$$, $writer$$, $opts$$) {
  return $APP.cljs.core.pr_sequential_writer($writer$$, $APP.cljs.core.pr_writer, "[", " ", "]", $opts$$, this);
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = function($coll$jscomp$1015_new_arr$$, $n$$, $val$$) {
  if (0 <= $n$$ && $n$$ < this.arr.length) {
    return cljs_bean.core.compatible_value_QMARK_($val$$, !0) ? ($coll$jscomp$1015_new_arr$$ = $APP.cljs.core.aclone(this.arr), $coll$jscomp$1015_new_arr$$[$n$$] = cljs_bean.core.unwrap($val$$), new cljs_bean.core.ArrayVector(this.meta, this.prop__GT_key, this.key__GT_prop, this.transform, $coll$jscomp$1015_new_arr$$, null)) : $APP.cljs.core._assoc_n(cljs_bean.core.snapshot_arr(this.arr), $n$$, $val$$);
  }
  if ($n$$ === this.arr.length) {
    return this.cljs$core$ICollection$_conj$arity$2(null, $val$$);
  }
  throw Error(["Index ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($n$$), " out of bounds  [0,", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.arr.length), "]"].join(""));
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IIterable$_iterator$arity$1 = function($_$$) {
  return new cljs_bean.core.ArrayVectorIterator(this.prop__GT_key, this.key__GT_prop, this.transform, this.arr, 0, this.arr.length);
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IMeta$_meta$arity$1 = function($coll$$) {
  return this.meta;
};
cljs_bean.core.ArrayVector.prototype.cljs$core$ICloneable$_clone$arity$1 = function($_$$) {
  return new cljs_bean.core.ArrayVector(this.meta, this.prop__GT_key, this.key__GT_prop, this.transform, this.arr, this.__hash);
};
cljs_bean.core.ArrayVector.prototype.cljs$core$ICounted$_count$arity$1 = function($coll$$) {
  return this.arr.length;
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IStack$_peek$arity$1 = function($coll$$) {
  return this.arr.length > 0 ? this.cljs$core$IIndexed$_nth$arity$2(null, this.arr.length - 1) : null;
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IStack$_pop$arity$1 = function($coll$jscomp$1019_new_arr$$) {
  if (this.arr.length === 0) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.arr.length) {
    return this.cljs$core$IEmptyableCollection$_empty$arity$1(null);
  }
  $coll$jscomp$1019_new_arr$$ = $APP.cljs.core.aclone(this.arr);
  return new cljs_bean.core.ArrayVector(this.meta, this.prop__GT_key, this.key__GT_prop, this.transform, $coll$jscomp$1019_new_arr$$.slice(0, $coll$jscomp$1019_new_arr$$.length - 1), null);
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IReversible$_rseq$arity$1 = function($coll$$) {
  return this.arr.length > 0 ? new $APP.cljs.core.RSeq(this, this.arr.length - 1, null) : null;
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IHash$_hash$arity$1 = function($coll$jscomp$1021_h__5134__auto__$jscomp$199_h__5134__auto____$1$$) {
  $coll$jscomp$1021_h__5134__auto__$jscomp$199_h__5134__auto____$1$$ = this.__hash;
  return $coll$jscomp$1021_h__5134__auto__$jscomp$199_h__5134__auto____$1$$ != null ? $coll$jscomp$1021_h__5134__auto__$jscomp$199_h__5134__auto____$1$$ : this.__hash = $coll$jscomp$1021_h__5134__auto__$jscomp$199_h__5134__auto____$1$$ = $APP.cljs.core.hash_ordered_coll(this);
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($coll$$, $other$$) {
  return cljs_bean.from.cljs.core.PersistentVector_equiv(this, $other$$, cljs_bean.core.ArrayVector, this.arr.length);
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function($coll$$) {
  return new cljs_bean.core.TransientArrayVector(!0, $APP.cljs.core.aclone(this.arr), this.prop__GT_key, this.key__GT_prop, this.transform);
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function($coll$$) {
  return new cljs_bean.core.ArrayVector(this.meta, this.prop__GT_key, this.key__GT_prop, this.transform, [], null);
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IReduce$_reduce$arity$2 = function($v$$, $f$$) {
  return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(this, $f$$);
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IReduce$_reduce$arity$3 = function($v$$, $f$$, $init$$) {
  return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(this, $f$$, $init$$);
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($coll$$, $k$$, $v$$) {
  return cljs_bean.from.cljs.core.PersistentVector_assoc(this, $k$$, $v$$);
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($coll$$, $k$$) {
  return cljs_bean.from.cljs.core.PersistentVector_contains_key_QMARK_(this, $k$$, this.arr.length);
};
cljs_bean.core.ArrayVector.prototype.cljs$core$ISeqable$_seq$arity$1 = function($coll$$) {
  return this.arr.length > 0 ? new cljs_bean.core.ArrayVectorSeq(this.prop__GT_key, this.key__GT_prop, this.transform, this.arr, 0, null) : null;
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($coll$$, $new_meta$$) {
  return $new_meta$$ === this.meta ? this : new cljs_bean.core.ArrayVector($new_meta$$, this.prop__GT_key, this.key__GT_prop, this.transform, this.arr, this.__hash);
};
cljs_bean.core.ArrayVector.prototype.cljs$core$ICollection$_conj$arity$2 = function($_$jscomp$2150_new_arr$$, $o$$) {
  return cljs_bean.core.compatible_value_QMARK_($o$$, !0) ? ($_$jscomp$2150_new_arr$$ = $APP.cljs.core.aclone(this.arr), $_$jscomp$2150_new_arr$$[$_$jscomp$2150_new_arr$$.length] = cljs_bean.core.unwrap($o$$), new cljs_bean.core.ArrayVector(this.meta, this.prop__GT_key, this.key__GT_prop, this.transform, $_$jscomp$2150_new_arr$$, null)) : $APP.cljs.core._conj(cljs_bean.core.snapshot_arr(this.arr), $o$$);
};
cljs_bean.core.ArrayVector.prototype.call = function($unused__11804__auto__$$) {
  switch(arguments.length - 1) {
    case 1:
      return this.cljs$core$IFn$_invoke$arity$1(arguments[1]);
    case 2:
      return this.cljs$core$IFn$_invoke$arity$2(arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length - 1)].join(""));
  }
};
cljs_bean.core.ArrayVector.prototype.apply = function($self__$$, $args76277$$) {
  return this.call.apply(this, [this].concat($APP.cljs.core.aclone($args76277$$)));
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IFn$_invoke$arity$1 = function($k$$) {
  return this.cljs$core$IIndexed$_nth$arity$2(null, $k$$);
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IFn$_invoke$arity$2 = function($k$$, $not_found$$) {
  return this.cljs$core$IIndexed$_nth$arity$3(null, $k$$, $not_found$$);
};
cljs_bean.core.ArrayVector.prototype.cljs$core$IComparable$_compare$arity$2 = function($x$$, $y$$) {
  if ($APP.cljs.core.vector_QMARK_($y$$)) {
    return cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(this, $y$$);
  }
  throw Error(["Cannot compare ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(this), " to ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($y$$)].join(""));
};
cljs_bean.core.ArrayVector.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$20$meta, cljs$cst$5419$prop__GT_key, cljs$cst$5420$key__GT_prop, $APP.cljs$cst$2153$transform, $APP.cljs$cst$18$arr, $APP.cljs.core.with_meta($APP.cljs$cst$26$__hash, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$10$mutable, !0], null))], null);
};
cljs_bean.core.ArrayVector.cljs$lang$type = !0;
cljs_bean.core.ArrayVector.cljs$lang$ctorStr = "cljs-bean.core/ArrayVector";
cljs_bean.core.ArrayVector.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "cljs-bean.core/ArrayVector");
};
cljs_bean.core.__GT_ArrayVector = function($meta$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$, $arr$$, $__hash$$) {
  return new cljs_bean.core.ArrayVector($meta$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$, $arr$$, $__hash$$);
};
cljs_bean.core.default_key__GT_prop = function($x$$) {
  return $x$$ instanceof $APP.cljs.core.Keyword ? $x$$.fqn : null;
};
cljs_bean.core.bean = function($var_args$$) {
  switch(arguments.length) {
    case 0:
      return cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      for (var $args_arr__5774__auto__$jscomp$93_argseq__5775__auto__$$ = [], $len__5749__auto___76353$$ = arguments.length, $i__5750__auto___76354$$ = 0;;) {
        if ($i__5750__auto___76354$$ < $len__5749__auto___76353$$) {
          $args_arr__5774__auto__$jscomp$93_argseq__5775__auto__$$.push(arguments[$i__5750__auto___76354$$]), $i__5750__auto___76354$$ += 1;
        } else {
          break;
        }
      }
      $args_arr__5774__auto__$jscomp$93_argseq__5775__auto__$$ = 1 < $args_arr__5774__auto__$jscomp$93_argseq__5775__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args_arr__5774__auto__$jscomp$93_argseq__5775__auto__$$.slice(1), 0, null) : null;
      return cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args_arr__5774__auto__$jscomp$93_argseq__5775__auto__$$);
  }
};
cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$0 = function() {
  return new cljs_bean.core.Bean(null, {}, $APP.cljs.core.keyword, cljs_bean.core.default_key__GT_prop, null, !1, [], 0, null);
};
cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$1 = function($x$$) {
  return new cljs_bean.core.Bean(null, $x$$, $APP.cljs.core.keyword, cljs_bean.core.default_key__GT_prop, null, !1, null, null, null);
};
cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$variadic = function($x$$, $keywordize_keys$jscomp$1_opts$$) {
  var $map__76304__$1_recursive$$ = $APP.cljs.core.__destructure_map($keywordize_keys$jscomp$1_opts$$);
  $keywordize_keys$jscomp$1_opts$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76304__$1_recursive$$, $APP.cljs$cst$127$keywordize_keys);
  var $prop__GT_key$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76304__$1_recursive$$, cljs$cst$5423$prop__GT_key), $key__GT_prop$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76304__$1_recursive$$, cljs$cst$5424$key__GT_prop), $transform$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76304__$1_recursive$$, $APP.cljs$cst$3368$transform);
  $map__76304__$1_recursive$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76304__$1_recursive$$, cljs$cst$5425$recursive);
  return $keywordize_keys$jscomp$1_opts$$ === !1 ? new cljs_bean.core.Bean(null, $x$$, $APP.cljs.core.identity, $APP.cljs.core.identity, $transform$$, $APP.cljs.core.boolean$($map__76304__$1_recursive$$), null, null, null) : $prop__GT_key$$ != null && $key__GT_prop$$ != null ? new cljs_bean.core.Bean(null, $x$$, $prop__GT_key$$, $key__GT_prop$$, $transform$$, $APP.cljs.core.boolean$($map__76304__$1_recursive$$), null, null, null) : new cljs_bean.core.Bean(null, $x$$, $APP.cljs.core.keyword, cljs_bean.core.default_key__GT_prop, 
  $transform$$, $APP.cljs.core.boolean$($map__76304__$1_recursive$$), null, null, null);
};
cljs_bean.core.bean.cljs$lang$applyTo = function($seq76301_seq76301__$1$$) {
  var $G__76302$$ = $APP.cljs.core.first($seq76301_seq76301__$1$$);
  $seq76301_seq76301__$1$$ = $APP.cljs.core.next($seq76301_seq76301__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__76302$$, $seq76301_seq76301__$1$$);
};
cljs_bean.core.bean.cljs$lang$maxFixedArity = 1;
cljs_bean.core.bean_QMARK_ = function($x$$) {
  return $x$$ instanceof cljs_bean.core.Bean;
};
cljs_bean.core.object = function($b$$) {
  return $b$$.obj;
};
cljs_bean.core.__GT_clj = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      for (var $args_arr__5774__auto__$jscomp$94_argseq__5775__auto__$$ = [], $len__5749__auto___76357$$ = arguments.length, $i__5750__auto___76358$$ = 0;;) {
        if ($i__5750__auto___76358$$ < $len__5749__auto___76357$$) {
          $args_arr__5774__auto__$jscomp$94_argseq__5775__auto__$$.push(arguments[$i__5750__auto___76358$$]), $i__5750__auto___76358$$ += 1;
        } else {
          break;
        }
      }
      $args_arr__5774__auto__$jscomp$94_argseq__5775__auto__$$ = 1 < $args_arr__5774__auto__$jscomp$94_argseq__5775__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args_arr__5774__auto__$jscomp$94_argseq__5775__auto__$$.slice(1), 0, null) : null;
      return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args_arr__5774__auto__$jscomp$94_argseq__5775__auto__$$);
  }
};
cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1 = function($x$$) {
  return cljs_bean.core.__GT_val($x$$, $APP.cljs.core.keyword, cljs_bean.core.default_key__GT_prop, null);
};
cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$variadic = function($x$$, $keywordize_keys$jscomp$2_opts$$) {
  var $map__76309__$1_transform$$ = $APP.cljs.core.__destructure_map($keywordize_keys$jscomp$2_opts$$);
  $keywordize_keys$jscomp$2_opts$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76309__$1_transform$$, $APP.cljs$cst$127$keywordize_keys);
  var $prop__GT_key$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76309__$1_transform$$, cljs$cst$5423$prop__GT_key), $key__GT_prop$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76309__$1_transform$$, cljs$cst$5424$key__GT_prop);
  $map__76309__$1_transform$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76309__$1_transform$$, $APP.cljs$cst$3368$transform);
  return $keywordize_keys$jscomp$2_opts$$ === !1 ? cljs_bean.core.__GT_val($x$$, $APP.cljs.core.identity, $APP.cljs.core.identity, $map__76309__$1_transform$$) : $prop__GT_key$$ != null && $key__GT_prop$$ != null ? cljs_bean.core.__GT_val($x$$, $prop__GT_key$$, $key__GT_prop$$, $map__76309__$1_transform$$) : cljs_bean.core.__GT_val($x$$, $APP.cljs.core.keyword, cljs_bean.core.default_key__GT_prop, $map__76309__$1_transform$$);
};
cljs_bean.core.__GT_clj.cljs$lang$applyTo = function($seq76306_seq76306__$1$$) {
  var $G__76307$$ = $APP.cljs.core.first($seq76306_seq76306__$1$$);
  $seq76306_seq76306__$1$$ = $APP.cljs.core.next($seq76306_seq76306__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__76307$$, $seq76306_seq76306__$1$$);
};
cljs_bean.core.__GT_clj.cljs$lang$maxFixedArity = 1;
cljs_bean.core.__GT_js = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      for (var $args_arr__5774__auto__$jscomp$95_argseq__5775__auto__$$ = [], $len__5749__auto___76361$$ = arguments.length, $i__5750__auto___76362$$ = 0;;) {
        if ($i__5750__auto___76362$$ < $len__5749__auto___76361$$) {
          $args_arr__5774__auto__$jscomp$95_argseq__5775__auto__$$.push(arguments[$i__5750__auto___76362$$]), $i__5750__auto___76362$$ += 1;
        } else {
          break;
        }
      }
      $args_arr__5774__auto__$jscomp$95_argseq__5775__auto__$$ = 1 < $args_arr__5774__auto__$jscomp$95_argseq__5775__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args_arr__5774__auto__$jscomp$95_argseq__5775__auto__$$.slice(1), 0, null) : null;
      return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args_arr__5774__auto__$jscomp$95_argseq__5775__auto__$$);
  }
};
cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1 = function($x$$) {
  return $x$$ instanceof cljs_bean.core.Bean ? $x$$.obj : $x$$ instanceof cljs_bean.core.ArrayVector ? $x$$.arr : $APP.cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic($x$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$126$keyword_fn, cljs_bean.core.default_key__GT_prop], 0));
};
cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$variadic = function($x$$, $key__GT_prop$jscomp$21_map__76314__$1_opts$$) {
  if ($x$$ instanceof cljs_bean.core.Bean) {
    return $x$$.obj;
  }
  if ($x$$ instanceof cljs_bean.core.ArrayVector) {
    return $x$$.arr;
  }
  $key__GT_prop$jscomp$21_map__76314__$1_opts$$ = $APP.cljs.core.__destructure_map($key__GT_prop$jscomp$21_map__76314__$1_opts$$);
  $key__GT_prop$jscomp$21_map__76314__$1_opts$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($key__GT_prop$jscomp$21_map__76314__$1_opts$$, cljs$cst$5424$key__GT_prop, cljs_bean.core.default_key__GT_prop);
  return $APP.cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic($x$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$126$keyword_fn, $key__GT_prop$jscomp$21_map__76314__$1_opts$$], 0));
};
cljs_bean.core.__GT_js.cljs$lang$applyTo = function($seq76311_seq76311__$1$$) {
  var $G__76312$$ = $APP.cljs.core.first($seq76311_seq76311__$1$$);
  $seq76311_seq76311__$1$$ = $APP.cljs.core.next($seq76311_seq76311__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__76312$$, $seq76311_seq76311__$1$$);
};
cljs_bean.core.__GT_js.cljs$lang$maxFixedArity = 1;
cljs_bean.core.set_empty_colls_BANG_ = function() {
  $APP.cljs.core.PersistentArrayMap.EMPTY = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1({});
  $APP.cljs.core.PersistentVector.EMPTY = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1([]);
  return null;
};
$APP.scittle.cljs_bean = {};
$APP.scittle.cljs_bean.init = function() {
  return $APP.scittle.core.register_plugin_BANG_(cljs$cst$5426$scittle_DOT_cljs_bean_SLASH_cljs_bean, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$398$namespaces, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5427$cljs_bean_DOT_core, $APP.sci.core._copy_ns(new $APP.cljs.core.PersistentArrayMap(null, 5, [$APP.cljs.core.with_meta(cljs$cst$5428$__GT_clj, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$774$declared, !0], null)), new $APP.cljs.core.PersistentArrayMap(null, 
  3, [$APP.cljs$cst$272$name, cljs$cst$5429$cljs_bean_DOT_core_SLASH___GT_clj, $APP.cljs$cst$108$val, cljs_bean.core.__GT_clj, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x, $APP.cljs$cst$148$_AMPERSAND_, 
  $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$256$doc, "Recursively converts JavaScript values to ClojureScript.\n\n  JavaScript objects are converted to beans with keywords for keys.\n\n  JavaScript arrays are converted to read-only implementations of the vector\n  abstraction, backed by the supplied array.\n\n  By default, -\x3eclj produces values that keywordize the keys. Supply\n  :keywordize-keys false to suppress this behavior. You can alternatively\n  supply :prop-\x3ekey and :key-\x3eprop with functions that control the mapping\n  between properties and keys.\n\n  Supply :transform and a function of one argument to transform values being\n  converted from JavaScript to ClojureScript. This function should return nil\n  if no conversion is to be performed, thus allowing default logic to be applied."], 
  null)], null), $APP.cljs.core.with_meta($APP.cljs$cst$506$object, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$253$js, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2229$b], null))), $APP.cljs$cst$256$doc, "Takes a bean and returns a JavaScript object."], null)), new $APP.cljs.core.PersistentArrayMap(null, 
  3, [$APP.cljs$cst$272$name, cljs$cst$5430$cljs_bean_DOT_core_SLASH_object, $APP.cljs$cst$108$val, cljs_bean.core.object, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2229$b], null)), $APP.cljs$cst$256$doc, "Takes a bean and returns a JavaScript object."], null)], null), $APP.cljs.core.with_meta($APP.cljs$cst$2283$bean, 
  new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null))), $APP.cljs$cst$256$doc, 
  "Takes a JavaScript object and returns a read-only implementation of the map\n  abstraction backed by the object.\n\n  By default, bean produces beans that keywordize the keys. Supply\n  :keywordize-keys false to suppress this behavior. You can alternatively\n  supply :prop-\x3ekey and :key-\x3eprop with functions that control the mapping\n  between properties and keys.\n\n  Supply :recursive true to create a bean which recursively converts\n  JavaScript object values to beans and JavaScript arrays into vectors.\n\n  Supply :transform and a function of one argument to transform values being\n  converted from JavaScript to ClojureScript. This function should return nil\n  if no conversion is to be performed, thus allowing default logic to be applied.\n\n  Calling (bean) produces an empty bean.", 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.PersistentVector.EMPTY, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x], null)], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null, null)], null)], null)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
  cljs$cst$5431$cljs_bean_DOT_core_SLASH_bean, $APP.cljs$cst$108$val, cljs_bean.core.bean, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x, $APP.cljs$cst$148$_AMPERSAND_, 
  $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$256$doc, "Takes a JavaScript object and returns a read-only implementation of the map\n  abstraction backed by the object.\n\n  By default, bean produces beans that keywordize the keys. Supply\n  :keywordize-keys false to suppress this behavior. You can alternatively\n  supply :prop-\x3ekey and :key-\x3eprop with functions that control the mapping\n  between properties and keys.\n\n  Supply :recursive true to create a bean which recursively converts\n  JavaScript object values to beans and JavaScript arrays into vectors.\n\n  Supply :transform and a function of one argument to transform values being\n  converted from JavaScript to ClojureScript. This function should return nil\n  if no conversion is to be performed, thus allowing default logic to be applied.\n\n  Calling (bean) produces an empty bean."], 
  null)], null), $APP.cljs.core.with_meta(cljs$cst$5432$__GT_js, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null))), 
  $APP.cljs$cst$256$doc, "Recursively converts ClojureScript values to JavaScript.\n\n  Where possible, directly returns the backing objects and arrays for values\n  produced using -\x3eclj and bean.\n\n  Otherwise delegates to clj-\x3ejs to perform the conversion, converting keyword\n  keys using their qualified names. You can alternatively supply :key-\x3eprop with\n  a function that controls the mapping from keys to properties.", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 
  6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$1237$x], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5433$cljs_bean_DOT_core_SLASH___GT_js, $APP.cljs$cst$108$val, cljs_bean.core.__GT_js, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$256$doc, "Recursively converts ClojureScript values to JavaScript.\n\n  Where possible, directly returns the backing objects and arrays for values\n  produced using -\x3eclj and bean.\n\n  Otherwise delegates to clj-\x3ejs to perform the conversion, converting keyword\n  keys using their qualified names. You can alternatively supply :key-\x3eprop with\n  a function that controls the mapping from keys to properties."], 
  null)], null), $APP.cljs.core.with_meta(cljs$cst$5434$bean_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x], null))), $APP.cljs$cst$256$doc, "Returns true if x is a bean."], null)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5435$cljs_bean_DOT_core_SLASH_bean_QMARK_, 
  $APP.cljs$cst$108$val, cljs_bean.core.bean_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x], null)), $APP.cljs$cst$256$doc, "Returns true if x is a bean."], null)], null)], null), $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$5427$cljs_bean_DOT_core, null))], null)], null));
};
$APP.scittle.cljs_bean.init();

}).call(this);