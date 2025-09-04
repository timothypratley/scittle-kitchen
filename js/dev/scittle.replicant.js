(function(){
'use strict';
var cljs$cst$5397$replicant_DOT_string_SLASH_create_renderer = new $APP.cljs.core.Symbol("replicant.string", "create-renderer", "replicant.string/create-renderer", 95615515, null), cljs$cst$5380$meta75968 = new $APP.cljs.core.Symbol(null, "meta75968", "meta75968", 558339338, null), cljs$cst$5383$meta75971 = new $APP.cljs.core.Symbol(null, "meta75971", "meta75971", -1778205175, null), cljs$cst$5415$remove_reporter = new $APP.cljs.core.Symbol(null, "remove-reporter", "remove-reporter", -1262921475, 
null), cljs$cst$5403$replicant_DOT_alias_SLASH_aliasfn = new $APP.cljs.core.Symbol("replicant.alias", "aliasfn", "replicant.alias/aliasfn", 636525104, null), cljs$cst$5407$register_BANG_ = new $APP.cljs.core.Symbol(null, "register!", "register!", -892183553, null), cljs$cst$5406$replicant_DOT_alias_SLASH_register_BANG_ = new $APP.cljs.core.Symbol("replicant.alias", "register!", "replicant.alias/register!", 1762236575, null), cljs$cst$5394$replicant_DOT_dom_SLASH_set_dispatch_BANG_ = new $APP.cljs.core.Symbol("replicant.dom", 
"set-dispatch!", "replicant.dom/set-dispatch!", -64860732, null), cljs$cst$5400$args__76138__auto__ = new $APP.cljs.core.Symbol(null, "args__76138__auto__", "args__76138__auto__", 1688215466, null), cljs$cst$5412$sci_DOT_configs_DOT_cjohansen_DOT_replicant_SLASH_defalias = new $APP.cljs.core.Symbol("sci.configs.cjohansen.replicant", "defalias", "sci.configs.cjohansen.replicant/defalias", -1511997196, null), cljs$cst$5405$alias__76153__auto__ = new $APP.cljs.core.Symbol(null, "alias__76153__auto__", 
"alias__76153__auto__", -1065061099, null), cljs$cst$5401$res__76139__auto__ = new $APP.cljs.core.Symbol(null, "res__76139__auto__", "res__76139__auto__", 5856246, null), cljs$cst$5393$set_dispatch_BANG_ = new $APP.cljs.core.Symbol(null, "set-dispatch!", "set-dispatch!", -1205273102, null), cljs$cst$5387$replicant_DOT_dom_SLASH_render = new $APP.cljs.core.Symbol("replicant.dom", "render", "replicant.dom/render", -1043516497, null), cljs$cst$5418$scittle_DOT_replicant_SLASH_replicant = new $APP.cljs.core.Keyword("scittle.replicant", 
"replicant", "scittle.replicant/replicant", -779535470), cljs$cst$5398$replicant_DOT_string_SLASH_render = new $APP.cljs.core.Symbol("replicant.string", "render", "replicant.string/render", 1514026526, null), cljs$cst$5411$defalias = new $APP.cljs.core.Symbol(null, "defalias", "defalias", -573865365, null), cljs$cst$5413$add_reporter = new $APP.cljs.core.Symbol(null, "add-reporter", "add-reporter", -1701615391, null), cljs$cst$5392$replicant_DOT_dom_SLASH_unmount = new $APP.cljs.core.Symbol("replicant.dom", 
"unmount", "replicant.dom/unmount", 998747708, null), cljs$cst$5395$replicant_DOT_string = new $APP.cljs.core.Symbol(null, "replicant.string", "replicant.string", 1546948263, null), cljs$cst$5404$f__76152__auto__ = new $APP.cljs.core.Symbol(null, "f__76152__auto__", "f__76152__auto__", 1254274772, null), cljs$cst$5414$replicant_DOT_assert_SLASH_add_reporter = new $APP.cljs.core.Symbol("replicant.assert", "add-reporter", "replicant.assert/add-reporter", 843910703, null), cljs$cst$5399$replicant_DOT_alias = 
new $APP.cljs.core.Symbol(null, "replicant.alias", "replicant.alias", -268441279, null), cljs$cst$5409$sci_DOT_configs_DOT_cjohansen_DOT_replicant_SLASH_aliasfn = new $APP.cljs.core.Symbol("sci.configs.cjohansen.replicant", "aliasfn", "sci.configs.cjohansen.replicant/aliasfn", -842885755, null), cljs$cst$5396$create_renderer = new $APP.cljs.core.Symbol(null, "create-renderer", "create-renderer", 1558017944, null), cljs$cst$5390$alias_data = new $APP.cljs.core.Symbol(null, "alias-data", "alias-data", 
-910571839, null), cljs$cst$5388$el = new $APP.cljs.core.Symbol(null, "el", "el", 22330409, null), cljs$cst$5402$replicant_SLASH_context = new $APP.cljs.core.Keyword("replicant", "context", "replicant/context", -909059467), cljs$cst$5416$replicant_DOT_assert_SLASH_remove_reporter = new $APP.cljs.core.Symbol("replicant.assert", "remove-reporter", "replicant.assert/remove-reporter", 479133235, null), cljs$cst$5381$rendering_QMARK_ = new $APP.cljs.core.Keyword(null, "rendering?", "rendering?", -1124117844), 
cljs$cst$5408$aliasfn = new $APP.cljs.core.Symbol(null, "aliasfn", "aliasfn", 1169676048, null), cljs$cst$5389$aliases = new $APP.cljs.core.Symbol(null, "aliases", "aliases", -1307561055, null), cljs$cst$5410$sci_DOT_configs_DOT_cjohansen_DOT_replicant = new $APP.cljs.core.Symbol(null, "sci.configs.cjohansen.replicant", "sci.configs.cjohansen.replicant", 133518971, null), cljs$cst$5379$el = new $APP.cljs.core.Keyword(null, "el", "el", -1618201118), cljs$cst$5417$replicant_DOT_assert = new $APP.cljs.core.Symbol(null, 
"replicant.assert", "replicant.assert", 1917973338, null), cljs$cst$5384$available = new $APP.cljs.core.Keyword(null, "available", "available", -1470697127), cljs$cst$5382$queued = new $APP.cljs.core.Keyword(null, "queued", "queued", 1701634607), cljs$cst$5386$replicant_DOT_dom = new $APP.cljs.core.Symbol(null, "replicant.dom", "replicant.dom", 1645689663, null), cljs$cst$5391$unmount = new $APP.cljs.core.Symbol(null, "unmount", "unmount", -138551806, null);
$APP.replicant.env = {};
$APP.replicant.transition = {};
$APP.replicant.transition.get_transition_stats = function($str$jscomp$87_transition_duration_s_y__5111__auto__$$) {
  $str$jscomp$87_transition_duration_s_y__5111__auto__$$ = $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($str$jscomp$87_transition_duration_s_y__5111__auto__$$);
  for (var $G__75961_n$$ = 0, $duration$jscomp$1_x__5110__auto__$$ = 0;;) {
    var $G__75962_s$$ = $str$jscomp$87_transition_duration_s_y__5111__auto__$$.indexOf("s"), $ms$$ = $str$jscomp$87_transition_duration_s_y__5111__auto__$$.indexOf("ms"), $G__75960_comma$$ = $str$jscomp$87_transition_duration_s_y__5111__auto__$$.indexOf(",");
    if ($G__75962_s$$ < 0 && $ms$$ < 0) {
      return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__75961_n$$, $APP.cljs.core.unchecked_int($duration$jscomp$1_x__5110__auto__$$)], null);
    }
    $G__75960_comma$$ = $G__75960_comma$$ < 0 ? "" : $str$jscomp$87_transition_duration_s_y__5111__auto__$$.substring($G__75960_comma$$ + 1).trimLeft();
    $G__75961_n$$ += 1;
    $str$jscomp$87_transition_duration_s_y__5111__auto__$$ = $G__75962_s$$ < $ms$$ || $ms$$ < 0 ? 1000 * $APP.cljs.core.parse_double($str$jscomp$87_transition_duration_s_y__5111__auto__$$.substring(0, $G__75962_s$$)) : $APP.cljs.core.parse_long($str$jscomp$87_transition_duration_s_y__5111__auto__$$.substring(0, $ms$$));
    $G__75962_s$$ = $duration$jscomp$1_x__5110__auto__$$ > $str$jscomp$87_transition_duration_s_y__5111__auto__$$ ? $duration$jscomp$1_x__5110__auto__$$ : $str$jscomp$87_transition_duration_s_y__5111__auto__$$;
    $str$jscomp$87_transition_duration_s_y__5111__auto__$$ = $G__75960_comma$$;
    $duration$jscomp$1_x__5110__auto__$$ = $G__75962_s$$;
  }
};
$APP.replicant.dom = {};
$APP.replicant.dom.remove_listener = function($el$$, $event$$, $opt$$) {
  var $G__75963__$1$jscomp$inline_7227_temp__5825__auto__$$ = $el$$ == null ? null : $el$$.replicantHandlers;
  $G__75963__$1$jscomp$inline_7227_temp__5825__auto__$$ = $G__75963__$1$jscomp$inline_7227_temp__5825__auto__$$ == null ? null : $G__75963__$1$jscomp$inline_7227_temp__5825__auto__$$[$event$$];
  return $APP.cljs.core.truth_($G__75963__$1$jscomp$inline_7227_temp__5825__auto__$$) ? $el$$.removeEventListener($event$$, $G__75963__$1$jscomp$inline_7227_temp__5825__auto__$$, $APP.cljs.core.clj__GT_js($opt$$)) : null;
};
$APP.replicant.dom.on_next_frame = function($f$$) {
  return requestAnimationFrame(function() {
    return requestAnimationFrame($f$$);
  });
};
$APP.replicant.dom._on_transition_end = function($el$$, $f$$) {
  var $callback$$ = $APP.replicant.transition.get_transition_stats(window.getComputedStyle($el$$).getPropertyValue("transition-duration")), $n$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($callback$$, 0, null), $dur$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($callback$$, 1, null);
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($n$$, 0)) {
    return $f$$.cljs$core$IFn$_invoke$arity$0 ? $f$$.cljs$core$IFn$_invoke$arity$0() : $f$$.call(null);
  }
  var $complete$$ = $APP.cljs.core.volatile_BANG_(0), $timer$$ = $APP.cljs.core.volatile_BANG_(null), $started$$ = new Date();
  $callback$$ = function() {
    var $replicant$dom$_on_transition_end_$_listener__delegate$$ = function($_args_cn$$) {
      $_args_cn$$ = $complete$$.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, $complete$$.cljs$core$IDeref$_deref$arity$1(null) + 1);
      return $n$$ <= $_args_cn$$ || $dur$$ < new Date() - $started$$ ? ($el$$.removeEventListener("transitionend", $replicant$dom$_on_transition_end_$_listener$$), clearTimeout($APP.cljs.core.deref($timer$$)), $f$$.cljs$core$IFn$_invoke$arity$0 ? $f$$.cljs$core$IFn$_invoke$arity$0() : $f$$.call(null)) : null;
    }, $replicant$dom$_on_transition_end_$_listener$$ = function($var_args$$) {
      var $G__76041__i__args$$ = null;
      if (arguments.length > 0) {
        $G__76041__i__args$$ = 0;
        for (var $G__76041__a$$ = Array(arguments.length - 0); $G__76041__i__args$$ < $G__76041__a$$.length;) {
          $G__76041__a$$[$G__76041__i__args$$] = arguments[$G__76041__i__args$$ + 0], ++$G__76041__i__args$$;
        }
        $G__76041__i__args$$ = new $APP.cljs.core.IndexedSeq($G__76041__a$$, 0, null);
      }
      return $replicant$dom$_on_transition_end_$_listener__delegate$$.call(this, $G__76041__i__args$$);
    };
    $replicant$dom$_on_transition_end_$_listener$$.cljs$lang$maxFixedArity = 0;
    $replicant$dom$_on_transition_end_$_listener$$.cljs$lang$applyTo = function($_args$$) {
      $_args$$ = $APP.cljs.core.seq($_args$$);
      return $replicant$dom$_on_transition_end_$_listener__delegate$$($_args$$);
    };
    $replicant$dom$_on_transition_end_$_listener$$.cljs$core$IFn$_invoke$arity$variadic = $replicant$dom$_on_transition_end_$_listener__delegate$$;
    return $replicant$dom$_on_transition_end_$_listener$$;
  }();
  $el$$.addEventListener("transitionend", $callback$$);
  return $APP.cljs.core.vreset_BANG_($timer$$, setTimeout($callback$$, $dur$$ + 200));
};
$APP.replicant.dom.memories = new WeakMap();
$APP.replicant.dom.t_replicant$dom75967 = function($meta75968$$) {
  this.meta75968 = $meta75968$$;
  this.cljs$lang$protocol_mask$partition0$ = 393216;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
$APP.replicant.dom.t_replicant$dom75967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($_75969$$, $meta75968__$1$$) {
  return new $APP.replicant.dom.t_replicant$dom75967($meta75968__$1$$);
};
$APP.replicant.dom.t_replicant$dom75967.prototype.cljs$core$IMeta$_meta$arity$1 = function($_75969$$) {
  return this.meta75968;
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$ = $APP.cljs.core.PROTOCOL_SENTINEL;
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$remove_attribute$arity$3 = function($this$$$, $el$$, $attr$$) {
  $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("innerHTML", $attr$$) ? $el$$.innerHTML = "" : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("value", $attr$$) ? $el$$.value = null : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default-value", $attr$$) ? $el$$.removeAttribute("value") : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("selected", $attr$$) ? $el$$.selected = null : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default-selected", $attr$$) ? $el$$.removeAttribute("selected") : 
  $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checked", $attr$$) ? $el$$.checked = null : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default-checked", $attr$$) ? $el$$.removeAttribute("checked") : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("disabled", $attr$$) ? $el$$.disabled = null : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("readonly", $attr$$) ? $el$$.readonly = null : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("required", $attr$$) ? $el$$.required = null : 
  $el$$.removeAttribute($attr$$);
  return this;
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$remove_all_children$arity$2 = function($this$$$, $el$$) {
  $el$$.textContent = "";
  return this;
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$remove_child$arity$3 = function($this$$$, $el$$, $child_node$$) {
  $el$$.removeChild($child_node$$);
  return this;
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$insert_before$arity$4 = function($this$$$, $el$$, $child_node$$, $reference_node$$) {
  $el$$.insertBefore($child_node$$, $reference_node$$);
  return this;
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$append_child$arity$3 = function($this$$$, $el$$, $child_node$$) {
  $el$$.appendChild($child_node$$);
  return this;
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$remove_event_handler$arity$4 = function($event_76047__$1_this$$$, $el$$, $event$$, $opt$$) {
  $event_76047__$1_this$$$ = $APP.cljs.core.name($event$$);
  $APP.replicant.dom.remove_listener($el$$, $event_76047__$1_this$$$, $opt$$);
  $el$$.replicantHandlers[$event_76047__$1_this$$$] = null;
  return this;
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$remove_class$arity$3 = function($this$$$, $el$$, $cn$$) {
  $el$$.classList.remove($cn$$);
  return this;
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$set_event_handler$arity$5 = function($event_76048__$1_this$$$, $el$$, $event$$, $handler$$, $opt$$) {
  $APP.cljs.core.truth_($el$$.replicantHandlers) || ($el$$.replicantHandlers = {});
  $event_76048__$1_this$$$ = $APP.cljs.core.name($event$$);
  $APP.replicant.dom.remove_listener($el$$, $event_76048__$1_this$$$, $opt$$);
  $el$$.replicantHandlers[$event_76048__$1_this$$$] = $handler$$;
  $el$$.addEventListener($event_76048__$1_this$$$, $handler$$, $APP.cljs.core.clj__GT_js($opt$$));
  return this;
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$replace_child$arity$4 = function($this$$$, $el$$, $insert_child$$, $replace_child$$) {
  $el$$.replaceChild($insert_child$$, $replace_child$$);
  return this;
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$on_transition_end$arity$3 = function($this$$$, $el$$, $f$$) {
  $APP.replicant.dom._on_transition_end($el$$, $f$$);
  return this;
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$remove_style$arity$3 = function($this$$$, $el$$, $style$$) {
  $el$$.style.removeProperty($APP.cljs.core.name($style$$));
  return this;
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$set_attribute$arity$5 = function($e__36696__auto___76052_this$$$, $el$$, $attr$$, $v$$, $opt$$) {
  try {
    $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("innerHTML", $attr$$) ? $el$$.innerHTML = $v$$ : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("value", $attr$$) ? $el$$.value = $v$$ : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default-value", $attr$$) ? $el$$.setAttribute("value", $v$$) : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("selected", $attr$$) ? $el$$.selected = $v$$ : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default-selected", $attr$$) ? $el$$.setAttribute("selected", 
    $v$$) : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checked", $attr$$) ? $el$$.checked = $v$$ : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default-checked", $attr$$) ? $el$$.setAttribute("checked", $v$$) : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("disabled", $attr$$) ? $el$$.disabled = $v$$ : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("readonly", $attr$$) ? $el$$.readonly = $v$$ : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("required", $attr$$) ? $el$$.required = 
    $v$$ : $APP.cljs.core.truth_($APP.cljs$cst$176$ns.cljs$core$IFn$_invoke$arity$1($opt$$)) ? $el$$.setAttributeNS($APP.cljs$cst$176$ns.cljs$core$IFn$_invoke$arity$1($opt$$), $attr$$, $v$$) : $el$$.setAttribute($attr$$, $v$$);
  } catch ($e75973$$) {
    $e__36696__auto___76052_this$$$ = $e75973$$, console.log("Threw exception while setting attribute"), $el$$ = new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$5379$el, $el$$, $APP.cljs$cst$3020$attr, $attr$$, $APP.cljs$cst$1438$v, $v$$], null), $APP.cljs.core.truth_($el$$) && $APP.cljs.core.run_BANG_(function($p__75974_v__36672__auto__$$) {
      var $k__36671__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__75974_v__36672__auto__$$, 0, null);
      $p__75974_v__36672__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__75974_v__36672__auto__$$, 1, null);
      return console.log($APP.cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$k__36671__auto__$$], 0)), $APP.cljs.core.coll_QMARK_($p__75974_v__36672__auto__$$) || $p__75974_v__36672__auto__$$ instanceof $APP.cljs.core.Keyword ? $APP.cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$p__75974_v__36672__auto__$$], 0)) : $p__75974_v__36672__auto__$$);
    }, $el$$), console.error($e__36696__auto___76052_this$$$);
  }
  return this;
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$create_text_node$arity$2 = function($_this$$, $text$$) {
  return document.createTextNode($text$$);
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$set_style$arity$4 = function($this$$$, $el$$, $style$$, $v$$) {
  $el$$.style.setProperty($APP.cljs.core.name($style$$), $v$$);
  return this;
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$next_frame$arity$2 = function($_this$$, $f$$) {
  return $APP.replicant.dom.on_next_frame($f$$);
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$add_class$arity$3 = function($this$$$, $el$$, $cn$$) {
  $el$$.classList.add($cn$$);
  return this;
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$get_child$arity$3 = function($_this$$, $el$$, $idx$$) {
  return $el$$.childNodes[$idx$$];
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IRender$create_element$arity$3 = function($_this$jscomp$17_temp__5823__auto__$$, $tag_name$$, $options$$) {
  $_this$jscomp$17_temp__5823__auto__$$ = $APP.cljs$cst$176$ns.cljs$core$IFn$_invoke$arity$1($options$$);
  return $APP.cljs.core.truth_($_this$jscomp$17_temp__5823__auto__$$) ? document.createElementNS($_this$jscomp$17_temp__5823__auto__$$, $tag_name$$) : document.createElement($tag_name$$);
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IMemory$ = $APP.cljs.core.PROTOCOL_SENTINEL;
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IMemory$remember$arity$3 = function($_this$$, $node$$, $memory$$) {
  return $APP.replicant.dom.memories.set($node$$, $memory$$);
};
$APP.replicant.dom.t_replicant$dom75967.prototype.replicant$protocols$IMemory$recall$arity$2 = function($_this$$, $node$$) {
  return $APP.replicant.dom.memories.get($node$$);
};
$APP.replicant.dom.t_replicant$dom75967.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5380$meta75968], null);
};
$APP.replicant.dom.t_replicant$dom75967.cljs$lang$type = !0;
$APP.replicant.dom.t_replicant$dom75967.cljs$lang$ctorStr = "replicant.dom/t_replicant$dom75967";
$APP.replicant.dom.t_replicant$dom75967.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "replicant.dom/t_replicant$dom75967");
};
$APP.replicant.dom.__GT_t_replicant$dom75967 = function($meta75968$$) {
  return new $APP.replicant.dom.t_replicant$dom75967($meta75968$$);
};
$APP.replicant.dom.create_renderer = function() {
  return new $APP.replicant.dom.t_replicant$dom75967($APP.cljs.core.PersistentArrayMap.EMPTY);
};
$APP.replicant.dom.state = $APP.cljs.core.volatile_BANG_($APP.cljs.core.PersistentArrayMap.EMPTY);
$APP.replicant.dom.render = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$299_argseq__5756__auto__$$ = [], $len__5749__auto___76074$$ = arguments.length, $i__5750__auto___76075$$ = 0;;) {
    if ($i__5750__auto___76075$$ < $len__5749__auto___76074$$) {
      $args__5755__auto__$jscomp$299_argseq__5756__auto__$$.push(arguments[$i__5750__auto___76075$$]), $i__5750__auto___76075$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$299_argseq__5756__auto__$$ = 2 < $args__5755__auto__$jscomp$299_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$299_argseq__5756__auto__$$.slice(2), 0, null) : null;
  return $APP.replicant.dom.render.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args__5755__auto__$jscomp$299_argseq__5756__auto__$$);
};
$APP.goog.exportSymbol("replicant.dom.render", $APP.replicant.dom.render);
$APP.replicant.dom.render.cljs$core$IFn$_invoke$arity$variadic = function($el$$, $hiccup$$, $alias_data$$) {
  $alias_data$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($alias_data$$, 0, null);
  $alias_data$$ = $APP.cljs.core.__destructure_map($alias_data$$);
  var $aliases$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($alias_data$$, $APP.cljs$cst$264$aliases);
  $alias_data$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($alias_data$$, $APP.cljs$cst$1755$alias_data);
  var $map__76015_76091_renderer_76093_rendering_QMARK__76082$$ = $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.deref($APP.replicant.dom.state), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$el$$, cljs$cst$5381$rendering_QMARK_], null));
  $APP.cljs.core.contains_QMARK_($APP.cljs.core.deref($APP.replicant.dom.state), $el$$) || ($el$$.innerHTML = "", $APP.replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($APP.replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null), $el$$, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$1760$renderer, $APP.replicant.dom.create_renderer(), $APP.cljs$cst$1761$unmounts, $APP.cljs.core.volatile_BANG_($APP.cljs.core.PersistentHashSet.EMPTY), 
  cljs$cst$5381$rendering_QMARK_, !0], null))));
  if ($APP.cljs.core.truth_($map__76015_76091_renderer_76093_rendering_QMARK__76082$$)) {
    $APP.replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, $APP.cljs.core.assoc_in($APP.replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$el$$, cljs$cst$5382$queued], null), $hiccup$$));
  } else {
    $APP.replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, $APP.cljs.core.assoc_in($APP.replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$el$$, cljs$cst$5381$rendering_QMARK_], null), !0));
    $map__76015_76091_renderer_76093_rendering_QMARK__76082$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.deref($APP.replicant.dom.state), $el$$);
    var $map__76015_76092__$1_unmounts_76095$$ = $APP.cljs.core.__destructure_map($map__76015_76091_renderer_76093_rendering_QMARK__76082$$);
    $map__76015_76091_renderer_76093_rendering_QMARK__76082$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76015_76092__$1_unmounts_76095$$, $APP.cljs$cst$1760$renderer);
    var $current_76094$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76015_76092__$1_unmounts_76095$$, $APP.cljs$cst$262$current);
    $map__76015_76092__$1_unmounts_76095$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__76015_76092__$1_unmounts_76095$$, $APP.cljs$cst$1761$unmounts);
    $aliases$$ = $APP.cljs.core.truth_($aliases$$) ? $aliases$$ : $APP.replicant.alias.get_registered_aliases();
    $hiccup$$ = ($APP.cljs.core.truth_($alias_data$$), $hiccup$$);
    $hiccup$$ = $APP.replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic($map__76015_76091_renderer_76093_rendering_QMARK__76082$$, $el$$, $hiccup$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$current_76094$$, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$1761$unmounts, $map__76015_76092__$1_unmounts_76095$$, $APP.cljs$cst$264$aliases, $aliases$$, $APP.cljs$cst$1755$alias_data, $alias_data$$], null)], 0));
    $hiccup$$ = $APP.cljs.core.__destructure_map($hiccup$$);
    $hiccup$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($hiccup$$, $APP.cljs$cst$1766$vdom);
    $APP.replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, $APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4($APP.replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null), $el$$, $APP.cljs.core.merge, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$262$current, $hiccup$$, cljs$cst$5381$rendering_QMARK_, !1], null)));
    var $temp__5825__auto___76103$$ = cljs$cst$5382$queued.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.deref($APP.replicant.dom.state), $el$$));
    $APP.cljs.core.truth_($temp__5825__auto___76103$$) && (requestAnimationFrame(function() {
      return $APP.replicant.dom.render($el$$, $temp__5825__auto___76103$$);
    }), $APP.replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, $APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4($APP.replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null), $el$$, $APP.cljs.core.dissoc, cljs$cst$5382$queued)));
  }
  return $el$$;
};
$APP.replicant.dom.render.cljs$lang$maxFixedArity = 2;
$APP.replicant.dom.render.cljs$lang$applyTo = function($G__76003_seq76001$$) {
  var $G__76002$$ = $APP.cljs.core.first($G__76003_seq76001$$), $seq76001__$1_seq76001__$2$$ = $APP.cljs.core.next($G__76003_seq76001$$);
  $G__76003_seq76001$$ = $APP.cljs.core.first($seq76001__$1_seq76001__$2$$);
  $seq76001__$1_seq76001__$2$$ = $APP.cljs.core.next($seq76001__$1_seq76001__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__76002$$, $G__76003_seq76001$$, $seq76001__$1_seq76001__$2$$);
};
$APP.replicant.dom.unmount = function($el$$) {
  if ($APP.cljs.core.truth_($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.deref($APP.replicant.dom.state), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$el$$, cljs$cst$5381$rendering_QMARK_], null)))) {
    return requestAnimationFrame(function() {
      return $APP.replicant.dom.unmount.cljs$core$IFn$_invoke$arity$1 ? $APP.replicant.dom.unmount.cljs$core$IFn$_invoke$arity$1($el$$) : $APP.replicant.dom.unmount.call(null, $el$$);
    });
  }
  $APP.replicant.dom.render($el$$, null);
  $APP.replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null), $el$$));
  return null;
};
$APP.goog.exportSymbol("replicant.dom.unmount", $APP.replicant.dom.unmount);
$APP.replicant.dom.set_dispatch_BANG_ = function($f$$) {
  return $APP.replicant.core._STAR_dispatch_STAR_ = $f$$;
};
$APP.goog.exportSymbol("replicant.dom.set_dispatch_BANG_", $APP.replicant.dom.set_dispatch_BANG_);
$APP.replicant.string = {};
$APP.replicant.string.IStringifier = function() {
};
var replicant$string$IStringifier$append$dyn_76051 = function($this$$$, $s$$) {
  var $m__5372__auto__$jscomp$792_m__5374__auto__$$ = $APP.replicant.string.append[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$792_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$792_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$792_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $s$$) : $m__5372__auto__$jscomp$792_m__5374__auto__$$.call(null, $this$$$, $s$$);
  }
  $m__5372__auto__$jscomp$792_m__5374__auto__$$ = $APP.replicant.string.append._;
  if ($m__5372__auto__$jscomp$792_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$792_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$792_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $s$$) : $m__5372__auto__$jscomp$792_m__5374__auto__$$.call(null, $this$$$, $s$$);
  }
  throw $APP.cljs.core.missing_protocol("IStringifier.append", $this$$$);
};
$APP.replicant.string.append = function($this$$$, $s$$) {
  return $this$$$ != null && $this$$$.replicant$string$IStringifier$append$arity$2 != null ? $this$$$.replicant$string$IStringifier$append$arity$2($this$$$, $s$$) : replicant$string$IStringifier$append$dyn_76051($this$$$, $s$$);
};
var replicant$string$IStringifier$to_string$dyn_76053 = function($this$$$) {
  var $m__5372__auto__$jscomp$793_m__5374__auto__$$ = $APP.replicant.string.to_string[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$793_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$793_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$793_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$793_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$793_m__5374__auto__$$ = $APP.replicant.string.to_string._;
  if ($m__5372__auto__$jscomp$793_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$793_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$793_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$793_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("IStringifier.to-string", $this$$$);
};
$APP.replicant.string.to_string = function($this$$$) {
  return $this$$$ != null && $this$$$.replicant$string$IStringifier$to_string$arity$1 != null ? $this$$$.replicant$string$IStringifier$to_string$arity$1($this$$$) : replicant$string$IStringifier$to_string$dyn_76053($this$$$);
};
$APP.replicant.string.t_replicant$string75970 = function($sb$$, $meta75971$$) {
  this.sb = $sb$$;
  this.meta75971 = $meta75971$$;
  this.cljs$lang$protocol_mask$partition0$ = 393216;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
$APP.replicant.string.t_replicant$string75970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($_75972$$, $meta75971__$1$$) {
  return new $APP.replicant.string.t_replicant$string75970(this.sb, $meta75971__$1$$);
};
$APP.replicant.string.t_replicant$string75970.prototype.cljs$core$IMeta$_meta$arity$1 = function($_75972$$) {
  return this.meta75971;
};
$APP.replicant.string.t_replicant$string75970.prototype.replicant$string$IStringifier$ = $APP.cljs.core.PROTOCOL_SENTINEL;
$APP.replicant.string.t_replicant$string75970.prototype.replicant$string$IStringifier$append$arity$2 = function($_$$, $s$$) {
  return this.sb.push($s$$);
};
$APP.replicant.string.t_replicant$string75970.prototype.replicant$string$IStringifier$to_string$arity$1 = function($_$$) {
  return this.sb.join("");
};
$APP.replicant.string.t_replicant$string75970.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$5$sb, cljs$cst$5383$meta75971], null);
};
$APP.replicant.string.t_replicant$string75970.cljs$lang$type = !0;
$APP.replicant.string.t_replicant$string75970.cljs$lang$ctorStr = "replicant.string/t_replicant$string75970";
$APP.replicant.string.t_replicant$string75970.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "replicant.string/t_replicant$string75970");
};
$APP.replicant.string.__GT_t_replicant$string75970 = function($sb$$, $meta75971$$) {
  return new $APP.replicant.string.t_replicant$string75970($sb$$, $meta75971$$);
};
$APP.replicant.string.create_renderer = function() {
  return new $APP.replicant.string.t_replicant$string75970([], $APP.cljs.core.PersistentArrayMap.EMPTY);
};
$APP.replicant.string.self_closing_QMARK_ = new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 15, ["track", null, "br", null, "img", null, "area", null, "base", null, "hr", null, "col", null, "param", null, "input", null, "link", null, "source", null, "audio", null, "meta", null, "wbr", null, "embed", null], null), null);
$APP.replicant.string.str_join = function($stringifier$$, $sep$$, $c__5548__auto___76068_seq__75981_76057_temp__5825__auto___76066_x_76073_xs$$) {
  var $G__75980_76056_G__76070_chunk__75982_76058_seq__75981_76067__$1$$ = $APP.cljs.core.first($c__5548__auto___76068_seq__75981_76057_temp__5825__auto___76066_x_76073_xs$$);
  $G__75980_76056_G__76070_chunk__75982_76058_seq__75981_76067__$1$$ != null && $APP.replicant.string.append($stringifier$$, $G__75980_76056_G__76070_chunk__75982_76058_seq__75981_76067__$1$$);
  $c__5548__auto___76068_seq__75981_76057_temp__5825__auto___76066_x_76073_xs$$ = $APP.cljs.core.seq($APP.cljs.core.rest($c__5548__auto___76068_seq__75981_76057_temp__5825__auto___76066_x_76073_xs$$));
  $G__75980_76056_G__76070_chunk__75982_76058_seq__75981_76067__$1$$ = null;
  for (var $G__76071_count__75983_76059$$ = 0, $G__76069_i__75984_76060$$ = 0;;) {
    if ($G__76069_i__75984_76060$$ < $G__76071_count__75983_76059$$) {
      var $x_76061$$ = $G__75980_76056_G__76070_chunk__75982_76058_seq__75981_76067__$1$$.cljs$core$IIndexed$_nth$arity$2(null, $G__76069_i__75984_76060$$);
      $APP.cljs.core.truth_($x_76061$$) && ($APP.replicant.string.append($stringifier$$, $sep$$), $APP.replicant.string.append($stringifier$$, $x_76061$$));
      $G__76069_i__75984_76060$$ += 1;
    } else {
      if ($c__5548__auto___76068_seq__75981_76057_temp__5825__auto___76066_x_76073_xs$$ = $APP.cljs.core.seq($c__5548__auto___76068_seq__75981_76057_temp__5825__auto___76066_x_76073_xs$$)) {
        $G__75980_76056_G__76070_chunk__75982_76058_seq__75981_76067__$1$$ = $c__5548__auto___76068_seq__75981_76057_temp__5825__auto___76066_x_76073_xs$$, $APP.cljs.core.chunked_seq_QMARK_($G__75980_76056_G__76070_chunk__75982_76058_seq__75981_76067__$1$$) ? ($c__5548__auto___76068_seq__75981_76057_temp__5825__auto___76066_x_76073_xs$$ = $APP.cljs.core.chunk_first($G__75980_76056_G__76070_chunk__75982_76058_seq__75981_76067__$1$$), $G__76069_i__75984_76060$$ = $APP.cljs.core.chunk_rest($G__75980_76056_G__76070_chunk__75982_76058_seq__75981_76067__$1$$), 
        $G__75980_76056_G__76070_chunk__75982_76058_seq__75981_76067__$1$$ = $c__5548__auto___76068_seq__75981_76057_temp__5825__auto___76066_x_76073_xs$$, $G__76071_count__75983_76059$$ = $APP.cljs.core.count($c__5548__auto___76068_seq__75981_76057_temp__5825__auto___76066_x_76073_xs$$), $c__5548__auto___76068_seq__75981_76057_temp__5825__auto___76066_x_76073_xs$$ = $G__76069_i__75984_76060$$) : ($c__5548__auto___76068_seq__75981_76057_temp__5825__auto___76066_x_76073_xs$$ = $APP.cljs.core.first($G__75980_76056_G__76070_chunk__75982_76058_seq__75981_76067__$1$$), 
        $APP.cljs.core.truth_($c__5548__auto___76068_seq__75981_76057_temp__5825__auto___76066_x_76073_xs$$) && ($APP.replicant.string.append($stringifier$$, $sep$$), $APP.replicant.string.append($stringifier$$, $c__5548__auto___76068_seq__75981_76057_temp__5825__auto___76066_x_76073_xs$$)), $c__5548__auto___76068_seq__75981_76057_temp__5825__auto___76066_x_76073_xs$$ = $APP.cljs.core.next($G__75980_76056_G__76070_chunk__75982_76058_seq__75981_76067__$1$$), $G__75980_76056_G__76070_chunk__75982_76058_seq__75981_76067__$1$$ = 
        null, $G__76071_count__75983_76059$$ = 0), $G__76069_i__75984_76060$$ = 0;
      } else {
        break;
      }
    }
  }
  return $stringifier$$;
};
$APP.replicant.string.render_attrs = function($stringifier$$, $attrs$$) {
  return $APP.cljs.core.reduce_kv(function($_$$, $k$$, $v$$) {
    if ($APP.cljs.core.truth_(function() {
      var $JSCompiler_temp_const$jscomp$1767_and__5023__auto__$$ = $APP.cljs.core, $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$1767_and__5023__auto__$$.not;
      var $JSCompiler_inline_result$jscomp$1768_fexpr__75989$$ = new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1729$innerHTML, null, $APP.cljs$cst$1752$on, null], null), null);
      $JSCompiler_inline_result$jscomp$1768_fexpr__75989$$ = $JSCompiler_inline_result$jscomp$1768_fexpr__75989$$.cljs$core$IFn$_invoke$arity$1 ? $JSCompiler_inline_result$jscomp$1768_fexpr__75989$$.cljs$core$IFn$_invoke$arity$1($k$$) : $JSCompiler_inline_result$jscomp$1768_fexpr__75989$$.call(null, $k$$);
      return ($JSCompiler_temp_const$jscomp$1767_and__5023__auto__$$ = $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$1767_and__5023__auto__$$, $JSCompiler_inline_result$jscomp$1768_fexpr__75989$$)) ? $APP.cljs.core.truth_($v$$) ? $APP.cljs.core.namespace($k$$) == null : $v$$ : $JSCompiler_temp_const$jscomp$1767_and__5023__auto__$$;
    }())) {
      switch($_$$ = $v$$ instanceof $APP.cljs.core.Keyword ? $APP.cljs.core.name($v$$) : $v$$, $APP.replicant.string.append($stringifier$$, " "), $k$$ instanceof $APP.cljs.core.Keyword ? $k$$.fqn : null) {
        case "classes":
          $APP.replicant.string.append($stringifier$$, 'class\x3d"');
          $APP.replicant.string.str_join($stringifier$$, " ", $_$$);
          $APP.replicant.string.append($stringifier$$, '"');
          break;
        case "style":
          $APP.replicant.string.append($stringifier$$, 'style\x3d"');
          $APP.replicant.string.str_join($stringifier$$, " ", $APP.cljs.core.keep.cljs$core$IFn$_invoke$arity$2(function($p__75994_temp__5825__auto__$jscomp$986_val$$) {
            var $prop$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__75994_temp__5825__auto__$jscomp$986_val$$, 0, null);
            $p__75994_temp__5825__auto__$jscomp$986_val$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__75994_temp__5825__auto__$jscomp$986_val$$, 1, null);
            $p__75994_temp__5825__auto__$jscomp$986_val$$ = $APP.replicant.core.get_style_val($prop$$, $p__75994_temp__5825__auto__$jscomp$986_val$$);
            return $APP.cljs.core.truth_($p__75994_temp__5825__auto__$jscomp$986_val$$) ? [$APP.cljs.core.name($prop$$), ": ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($p__75994_temp__5825__auto__$jscomp$986_val$$), ";"].join("") : null;
          }, $_$$));
          $APP.replicant.string.append($stringifier$$, '"');
          break;
        default:
          typeof $_$$ === "number" || typeof $_$$ === "string" && 0 < $APP.cljs.core.count($_$$) ? ($APP.replicant.string.append($stringifier$$, $APP.cljs.core.name($k$$)), $APP.replicant.string.append($stringifier$$, '\x3d"'), $APP.replicant.string.append($stringifier$$, $_$$), $APP.replicant.string.append($stringifier$$, '"')) : $APP.replicant.string.append($stringifier$$, $APP.cljs.core.name($k$$));
      }
    }
    return null;
  }, null, $attrs$$);
};
$APP.replicant.string.escape_html = function($text$$) {
  return $APP.clojure.string.replace($APP.clojure.string.replace($APP.clojure.string.replace($APP.clojure.string.replace($APP.clojure.string.replace($text$$, "\x26", "\x26amp;"), "\x3c", "\x26lt;"), "\x3e", "\x26gt;"), '"', "\x26quot;"), "'", "\x26apos;");
};
$APP.replicant.string.get_expanded_headers = function($opt$jscomp$138_or__5025__auto__$$, $headers$$) {
  if ($APP.cljs.core.qualified_keyword_QMARK_($headers$$[0]) && $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$264$aliases.cljs$core$IFn$_invoke$arity$1($opt$jscomp$138_or__5025__auto__$$), $headers$$[0]) == null) {
    throw $APP.cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Tried to expand undefined alias ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($headers$$[0])].join(""), new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$2380$missing, $headers$$[0], cljs$cst$5384$available, $APP.cljs$cst$264$aliases.cljs$core$IFn$_invoke$arity$1($opt$jscomp$138_or__5025__auto__$$)], null));
  }
  var $temp__5825__auto__$$ = $APP.replicant.core.get_alias_headers($opt$jscomp$138_or__5025__auto__$$, $headers$$);
  $opt$jscomp$138_or__5025__auto__$$ = $APP.cljs.core.truth_($temp__5825__auto__$$) ? $APP.replicant.string.get_expanded_headers.cljs$core$IFn$_invoke$arity$2 ? $APP.replicant.string.get_expanded_headers.cljs$core$IFn$_invoke$arity$2($opt$jscomp$138_or__5025__auto__$$, $temp__5825__auto__$$) : $APP.replicant.string.get_expanded_headers.call(null, $opt$jscomp$138_or__5025__auto__$$, $temp__5825__auto__$$) : null;
  return $APP.cljs.core.truth_($opt$jscomp$138_or__5025__auto__$$) ? $opt$jscomp$138_or__5025__auto__$$ : $headers$$;
};
$APP.replicant.string.render_node = function($stringifier$$, $headers$jscomp$32_headers__$1$$, $indent_s$$) {
  $indent_s$$ = $APP.cljs.core.__destructure_map($indent_s$$);
  var $depth$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($indent_s$$, $APP.cljs$cst$5385$depth), $indent$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($indent_s$$, $APP.cljs$cst$1540$indent), $aliases$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($indent_s$$, $APP.cljs$cst$264$aliases), $alias_data$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($indent_s$$, $APP.cljs$cst$1755$alias_data), $indent_QMARK__newline$$ = $indent$$ > 0;
  $indent_s$$ = $indent_QMARK__newline$$ ? $APP.clojure.string.join.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2($depth$$ * $indent$$, " ")) : "";
  $indent_QMARK__newline$$ = $indent_QMARK__newline$$ ? "\n" : "";
  $headers$jscomp$32_headers__$1$$ = $APP.replicant.string.get_expanded_headers(new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$264$aliases, $aliases$$, $APP.cljs$cst$1755$alias_data, $alias_data$$], null), $headers$jscomp$32_headers__$1$$);
  var $tag_name$jscomp$8_temp__5823__auto__$$ = $headers$jscomp$32_headers__$1$$[8];
  if ($APP.cljs.core.truth_($tag_name$jscomp$8_temp__5823__auto__$$)) {
    $APP.replicant.string.append($stringifier$$, $indent_s$$), $APP.replicant.string.append($stringifier$$, $APP.replicant.string.escape_html($tag_name$jscomp$8_temp__5823__auto__$$)), $APP.replicant.string.append($stringifier$$, $indent_QMARK__newline$$);
  } else {
    $tag_name$jscomp$8_temp__5823__auto__$$ = $headers$jscomp$32_headers__$1$$[0];
    var $attrs$$ = $APP.replicant.core.get_attrs($headers$jscomp$32_headers__$1$$), $ns_string$$ = $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("svg", $tag_name$jscomp$8_temp__5823__auto__$$) && $APP.cljs.core.not($APP.cljs$cst$5027$xmlns.cljs$core$IFn$_invoke$arity$1($attrs$$)) ? ' xmlns\x3d"http://www.w3.org/2000/svg"' : "";
    $APP.replicant.string.append($stringifier$$, $indent_s$$);
    $APP.replicant.string.append($stringifier$$, "\x3c");
    $APP.replicant.string.append($stringifier$$, $tag_name$jscomp$8_temp__5823__auto__$$);
    $APP.replicant.string.append($stringifier$$, $ns_string$$);
    $APP.replicant.string.render_attrs($stringifier$$, $attrs$$);
    $APP.replicant.string.append($stringifier$$, "\x3e");
    $APP.replicant.string.append($stringifier$$, $indent_QMARK__newline$$);
    $APP.cljs.core.truth_($APP.cljs$cst$1729$innerHTML.cljs$core$IFn$_invoke$arity$1($attrs$$)) ? $APP.replicant.string.append($stringifier$$, $APP.cljs$cst$1729$innerHTML.cljs$core$IFn$_invoke$arity$1($attrs$$)) : $APP.cljs.core.run_BANG_(function($child$$) {
      if ($APP.cljs.core.truth_($child$$)) {
        var $G__76026$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$5385$depth, $depth$$ + 1, $APP.cljs$cst$1540$indent, $indent$$, $APP.cljs$cst$264$aliases, $aliases$$, $APP.cljs$cst$1755$alias_data, $alias_data$$], null);
        return $APP.replicant.string.render_node.cljs$core$IFn$_invoke$arity$3 ? $APP.replicant.string.render_node.cljs$core$IFn$_invoke$arity$3($stringifier$$, $child$$, $G__76026$$) : $APP.replicant.string.render_node.call(null, $stringifier$$, $child$$, $G__76026$$);
      }
      return null;
    }, $APP.replicant.core.get_children($headers$jscomp$32_headers__$1$$, $headers$jscomp$32_headers__$1$$[6]));
    $APP.cljs.core.truth_($APP.replicant.string.self_closing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? $APP.replicant.string.self_closing_QMARK_.cljs$core$IFn$_invoke$arity$1($tag_name$jscomp$8_temp__5823__auto__$$) : $APP.replicant.string.self_closing_QMARK_.call(null, $tag_name$jscomp$8_temp__5823__auto__$$)) || ($APP.replicant.string.append($stringifier$$, $indent_s$$), $APP.replicant.string.append($stringifier$$, "\x3c/"), $APP.replicant.string.append($stringifier$$, $tag_name$jscomp$8_temp__5823__auto__$$), 
    $APP.replicant.string.append($stringifier$$, "\x3e"), $APP.replicant.string.append($stringifier$$, $indent_QMARK__newline$$));
  }
  return $stringifier$$;
};
$APP.replicant.string.render = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$300_argseq__5756__auto__$$ = [], $len__5749__auto___76112$$ = arguments.length, $i__5750__auto___76113$$ = 0;;) {
    if ($i__5750__auto___76113$$ < $len__5749__auto___76112$$) {
      $args__5755__auto__$jscomp$300_argseq__5756__auto__$$.push(arguments[$i__5750__auto___76113$$]), $i__5750__auto___76113$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$300_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$300_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$300_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return $APP.replicant.string.render.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$300_argseq__5756__auto__$$);
};
$APP.replicant.string.render.cljs$core$IFn$_invoke$arity$variadic = function($c__5548__auto___76126_hiccup$$, $aliases$jscomp$11_map__76034_opt$$) {
  $aliases$jscomp$11_map__76034_opt$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($aliases$jscomp$11_map__76034_opt$$, 0, null);
  var $G__76128_chunk__76036_76116_indent$$ = $APP.cljs.core.__destructure_map($aliases$jscomp$11_map__76034_opt$$);
  $aliases$jscomp$11_map__76034_opt$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($G__76128_chunk__76036_76116_indent$$, $APP.cljs$cst$264$aliases);
  var $alias_data$jscomp$4_stringifier$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($G__76128_chunk__76036_76116_indent$$, $APP.cljs$cst$1755$alias_data);
  $G__76128_chunk__76036_76116_indent$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($G__76128_chunk__76036_76116_indent$$, $APP.cljs$cst$1540$indent);
  $aliases$jscomp$11_map__76034_opt$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$1540$indent, $APP.cljs.core.truth_($G__76128_chunk__76036_76116_indent$$) ? $G__76128_chunk__76036_76116_indent$$ : 0, $APP.cljs$cst$5385$depth, 0, $APP.cljs$cst$264$aliases, $APP.cljs.core.truth_($aliases$jscomp$11_map__76034_opt$$) ? $aliases$jscomp$11_map__76034_opt$$ : $APP.replicant.alias.get_registered_aliases(), $APP.cljs$cst$1755$alias_data, $alias_data$jscomp$4_stringifier$$], null);
  if ($APP.replicant.hiccup.hiccup_QMARK_($c__5548__auto___76126_hiccup$$)) {
    return $alias_data$jscomp$4_stringifier$$ = $APP.replicant.string.create_renderer(), $APP.replicant.string.render_node($alias_data$jscomp$4_stringifier$$, $APP.replicant.core.get_hiccup_headers(null, $c__5548__auto___76126_hiccup$$), $aliases$jscomp$11_map__76034_opt$$), $alias_data$jscomp$4_stringifier$$.replicant$string$IStringifier$to_string$arity$1(null);
  }
  if ($APP.cljs.core.list_QMARK_($c__5548__auto___76126_hiccup$$)) {
    $alias_data$jscomp$4_stringifier$$ = $APP.replicant.string.create_renderer();
    $c__5548__auto___76126_hiccup$$ = $APP.cljs.core.seq($c__5548__auto___76126_hiccup$$);
    $G__76128_chunk__76036_76116_indent$$ = null;
    for (var $G__76129_count__76037_76117$$ = 0, $G__76127_i__76038_76118$$ = 0;;) {
      if ($G__76127_i__76038_76118$$ < $G__76129_count__76037_76117$$) {
        var $hiccup_node_76119$$ = $G__76128_chunk__76036_76116_indent$$.cljs$core$IIndexed$_nth$arity$2(null, $G__76127_i__76038_76118$$);
        $APP.replicant.string.render_node($alias_data$jscomp$4_stringifier$$, $APP.replicant.core.get_hiccup_headers(null, $hiccup_node_76119$$), $aliases$jscomp$11_map__76034_opt$$);
        $G__76127_i__76038_76118$$ += 1;
      } else {
        if ($c__5548__auto___76126_hiccup$$ = $APP.cljs.core.seq($c__5548__auto___76126_hiccup$$)) {
          $G__76128_chunk__76036_76116_indent$$ = $c__5548__auto___76126_hiccup$$, $APP.cljs.core.chunked_seq_QMARK_($G__76128_chunk__76036_76116_indent$$) ? ($c__5548__auto___76126_hiccup$$ = $APP.cljs.core.chunk_first($G__76128_chunk__76036_76116_indent$$), $G__76127_i__76038_76118$$ = $APP.cljs.core.chunk_rest($G__76128_chunk__76036_76116_indent$$), $G__76128_chunk__76036_76116_indent$$ = $c__5548__auto___76126_hiccup$$, $G__76129_count__76037_76117$$ = $APP.cljs.core.count($c__5548__auto___76126_hiccup$$), 
          $c__5548__auto___76126_hiccup$$ = $G__76127_i__76038_76118$$) : ($c__5548__auto___76126_hiccup$$ = $APP.cljs.core.first($G__76128_chunk__76036_76116_indent$$), $APP.replicant.string.render_node($alias_data$jscomp$4_stringifier$$, $APP.replicant.core.get_hiccup_headers(null, $c__5548__auto___76126_hiccup$$), $aliases$jscomp$11_map__76034_opt$$), $c__5548__auto___76126_hiccup$$ = $APP.cljs.core.next($G__76128_chunk__76036_76116_indent$$), $G__76128_chunk__76036_76116_indent$$ = null, $G__76129_count__76037_76117$$ = 
          0), $G__76127_i__76038_76118$$ = 0;
        } else {
          break;
        }
      }
    }
    return $alias_data$jscomp$4_stringifier$$.replicant$string$IStringifier$to_string$arity$1(null);
  }
  return $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($c__5548__auto___76126_hiccup$$);
};
$APP.replicant.string.render.cljs$lang$maxFixedArity = 1;
$APP.replicant.string.render.cljs$lang$applyTo = function($seq76028_seq76028__$1$$) {
  var $G__76029$$ = $APP.cljs.core.first($seq76028_seq76028__$1$$);
  $seq76028_seq76028__$1$$ = $APP.cljs.core.next($seq76028_seq76028__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__76029$$, $seq76028_seq76028__$1$$);
};
$APP.sci.configs.cjohansen = {};
$APP.sci.configs.cjohansen.replicant = {};
$APP.sci.configs.cjohansen.replicant.rdns = $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$5386$replicant_DOT_dom, null);
$APP.sci.configs.cjohansen.replicant.replicant_dom_namespace = new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$5375$render, function() {
  var $new_m__32782__auto__$jscomp$50_ns__32777__auto__$$ = $APP.sci.configs.cjohansen.replicant.rdns, $name__32781__auto__$jscomp$50_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.replicant.dom.render;
  }, cljs$cst$5387$replicant_DOT_dom_SLASH_render, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$5057$export, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$5386$replicant_DOT_dom, $APP.cljs$cst$5375$render, "replicant/dom.cljs", 22, new $APP.cljs.core.PersistentArrayMap(null, 
  6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs.core.with_meta(cljs$cst$5388$el, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$253$js], null)), $APP.cljs$cst$5089$hiccup, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5389$aliases, cljs$cst$5390$alias_data], null)], null)], null))], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$5388$el, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, 
  $APP.cljs$cst$253$js], null)), $APP.cljs$cst$5089$hiccup, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5389$aliases, cljs$cst$5390$alias_data], null)], null)], null)], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 
  !0, 1, 207, 207, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$5388$el, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$253$js], null)), $APP.cljs$cst$5089$hiccup, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5389$aliases, cljs$cst$5390$alias_data], null)], null)], null)], null)), "Render `hiccup` in DOM element `el`. Replaces any pre-existing content not\n  created by this function. Subsequent calls with the same `el` will update the\n  rendered DOM by comparing `hiccup` to the previous `hiccup`. `hiccup` can be\n  either a single hiccup node, or a list of multiple nodes.", $APP.cljs.core.truth_($APP.replicant.dom.render) ? $APP.replicant.dom.render.cljs$lang$test : 
  null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$50_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$50_var__32778__auto__$$);
  $name__32781__auto__$jscomp$50_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$50_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$50_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$50_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$50_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$50_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$50_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$50_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$50_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$50_ns__32777__auto__$$);
}(), cljs$cst$5391$unmount, function() {
  var $new_m__32782__auto__$jscomp$51_ns__32777__auto__$$ = $APP.sci.configs.cjohansen.replicant.rdns, $name__32781__auto__$jscomp$51_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.replicant.dom.unmount;
  }, cljs$cst$5392$replicant_DOT_dom_SLASH_unmount, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$5057$export, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$5386$replicant_DOT_dom, cljs$cst$5391$unmount, "replicant/dom.cljs", 23, !0, 1, 240, 240, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$5388$el, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$253$js], null))], null)), "Unmounts elements in `el`, and clears internal state.", $APP.cljs.core.truth_($APP.replicant.dom.unmount) ? $APP.replicant.dom.unmount.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$51_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$51_var__32778__auto__$$);
  $name__32781__auto__$jscomp$51_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$51_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$51_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$51_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$51_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$51_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$51_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$51_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$51_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$51_ns__32777__auto__$$);
}(), cljs$cst$5393$set_dispatch_BANG_, function() {
  var $new_m__32782__auto__$jscomp$52_ns__32777__auto__$$ = $APP.sci.configs.cjohansen.replicant.rdns, $name__32781__auto__$jscomp$52_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.replicant.dom.set_dispatch_BANG_;
  }, cljs$cst$5394$replicant_DOT_dom_SLASH_set_dispatch_BANG_, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$5057$export, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$5386$replicant_DOT_dom, cljs$cst$5393$set_dispatch_BANG_, "replicant/dom.cljs", 29, !0, 1, 250, 250, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f], null)), "Register a global dispatch function for event handlers and life-cycle hooks\n  that are not functions. See data-driven event handlers and life-cycle hooks in\n  the user guide for details.", $APP.cljs.core.truth_($APP.replicant.dom.set_dispatch_BANG_) ? $APP.replicant.dom.set_dispatch_BANG_.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$52_var__32778__auto__$$), $m__32780__auto__$$ = 
  $APP.cljs.core.meta($name__32781__auto__$jscomp$52_var__32778__auto__$$);
  $name__32781__auto__$jscomp$52_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$52_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$52_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$52_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$52_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$52_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$52_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$52_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$52_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$52_ns__32777__auto__$$);
}()], null);
$APP.sci.configs.cjohansen.replicant.rsns = $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$5395$replicant_DOT_string, null);
$APP.sci.configs.cjohansen.replicant.replicant_string_namespace = new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5396$create_renderer, function() {
  var $new_m__32782__auto__$jscomp$53_ns__32777__auto__$$ = $APP.sci.configs.cjohansen.replicant.rsns, $name__32781__auto__$jscomp$53_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.replicant.string.create_renderer;
  }, cljs$cst$5397$replicant_DOT_string_SLASH_create_renderer, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$5395$replicant_DOT_string, cljs$cst$5396$create_renderer, "replicant/string.cljc", 22, 1, 12, 12, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY), 
  null, $APP.cljs.core.truth_($APP.replicant.string.create_renderer) ? $APP.replicant.string.create_renderer.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$53_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$53_var__32778__auto__$$);
  $name__32781__auto__$jscomp$53_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$53_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$53_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$53_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$53_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$53_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$53_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$53_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$53_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$53_ns__32777__auto__$$);
}(), $APP.cljs$cst$5375$render, function() {
  var $new_m__32782__auto__$jscomp$54_ns__32777__auto__$$ = $APP.sci.configs.cjohansen.replicant.rsns, $name__32781__auto__$jscomp$54_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.replicant.string.render;
  }, cljs$cst$5398$replicant_DOT_string_SLASH_render, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$5395$replicant_DOT_string, $APP.cljs$cst$5375$render, "replicant/string.cljc", 13, new $APP.cljs.core.PersistentArrayMap(null, 
  6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$5089$hiccup, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5389$aliases, cljs$cst$5390$alias_data, $APP.cljs$cst$1549$indent], null)], null)], null))], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$5089$hiccup, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, 
  [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5389$aliases, cljs$cst$5390$alias_data, $APP.cljs$cst$1549$indent], null)], null)], null)], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 154, 154, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$5089$hiccup, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5389$aliases, cljs$cst$5390$alias_data, $APP.cljs$cst$1549$indent], null)], null)], null)], null)), "Render `hiccup` to a string of HTML. `hiccup` can be either a single hiccup\n  node or a list of multiple nodes.", $APP.cljs.core.truth_($APP.replicant.string.render) ? $APP.replicant.string.render.cljs$lang$test : 
  null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$54_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$54_var__32778__auto__$$);
  $name__32781__auto__$jscomp$54_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$54_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$54_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$54_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$54_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$54_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$54_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$54_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$54_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$54_ns__32777__auto__$$);
}()], null);
$APP.sci.configs.cjohansen.replicant.rans = $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$5399$replicant_DOT_alias, null);
$APP.sci.configs.cjohansen.replicant.aliasfn = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$301_argseq__5756__auto__$$ = [], $len__5749__auto___76173$$ = arguments.length, $i__5750__auto___76174$$ = 0;;) {
    if ($i__5750__auto___76174$$ < $len__5749__auto___76173$$) {
      $args__5755__auto__$jscomp$301_argseq__5756__auto__$$.push(arguments[$i__5750__auto___76174$$]), $i__5750__auto___76174$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$301_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$301_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$301_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return $APP.sci.configs.cjohansen.replicant.aliasfn.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$301_argseq__5756__auto__$$);
};
$APP.sci.configs.cjohansen.replicant.aliasfn.cljs$core$IFn$_invoke$arity$variadic = function($_$jscomp$2101_attr_map__$1$$, $___$1$$, $alias$$, $forms$$) {
  $_$jscomp$2101_attr_map__$1$$ = typeof $APP.cljs.core.first($forms$$) === "string" ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.first($forms$$), $APP.cljs.core.next($forms$$)], null) : new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["", $forms$$], null);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($_$jscomp$2101_attr_map__$1$$, 0, null);
  $_$jscomp$2101_attr_map__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($_$jscomp$2101_attr_map__$1$$, 1, null);
  $___$1$$ = $APP.cljs.core.seq($_$jscomp$2101_attr_map__$1$$);
  $_$jscomp$2101_attr_map__$1$$ = $APP.cljs.core.first($___$1$$);
  $___$1$$ = $APP.cljs.core.next($___$1$$);
  $forms$$ = $APP.cljs.core.count($_$jscomp$2101_attr_map__$1$$);
  $_$jscomp$2101_attr_map__$1$$ = $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(0, $forms$$) ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$312$_, $APP.cljs$cst$312$_], null) : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1, $forms$$) ? $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($_$jscomp$2101_attr_map__$1$$, $APP.cljs$cst$312$_) : $_$jscomp$2101_attr_map__$1$$;
  return $APP.cljs.core.truth_($APP.replicant.assert.assert_QMARK_()) ? $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$236$cljs_DOT_core_SLASH_with_meta, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, 
  null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$148$_AMPERSAND_, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$5400$args__76138__auto__, null, 1, null))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$412$cljs_DOT_core_SLASH_let, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $_$jscomp$2101_attr_map__$1$$, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$5400$args__76138__auto__, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, cljs$cst$5401$res__76139__auto__, 
  null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$155$do, null, 1, null), $___$1$$))), null, 1, null)], 0))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$462$cljs_DOT_core_SLASH_cond__GT_, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$5401$res__76139__auto__, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$1873$cljs_DOT_core_SLASH_vector_QMARK_, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$5401$res__76139__auto__, 
  null, 1, null)))), null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$236$cljs_DOT_core_SLASH_with_meta, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.array_map, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, 
  cljs$cst$5402$replicant_SLASH_context, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.array_map, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$1677$alias, null, 1, null), new $APP.cljs.core.List(null, $alias$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, 
  $APP.cljs$cst$142$data, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$729$cljs_DOT_core_SLASH_first, null, 1, null), new $APP.cljs.core.List(null, cljs$cst$5400$args__76138__auto__, null, 1, null)))), null, 1, null)], 0))))), null, 1, null))))), null, 1, null)))), null, 1, null)], 0)))), null, 1, null)], 0)))), null, 1, null)], 
  0)))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.array_map, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$4967$replicant_SLASH_alias, null, 1, null), new $APP.cljs.core.List(null, $alias$$, null, 1, null))))), null, 1, null)], 0)))) : $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, 
  $APP.cljs$cst$236$cljs_DOT_core_SLASH_with_meta, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$432$cljs_DOT_core_SLASH_fn, null, 1, null), new $APP.cljs.core.List(null, $_$jscomp$2101_attr_map__$1$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$___$1$$], 0)))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, 
  $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.array_map, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.List(null, $APP.cljs$cst$4967$replicant_SLASH_alias, null, 1, null), new $APP.cljs.core.List(null, $alias$$, null, 1, null))))), null, 1, null)], 0))));
};
$APP.sci.configs.cjohansen.replicant.aliasfn.cljs$lang$maxFixedArity = 3;
$APP.sci.configs.cjohansen.replicant.aliasfn.cljs$lang$applyTo = function($G__76142_seq76140$$) {
  var $G__76141$$ = $APP.cljs.core.first($G__76142_seq76140$$), $G__76143_seq76140__$1$$ = $APP.cljs.core.next($G__76142_seq76140$$);
  $G__76142_seq76140$$ = $APP.cljs.core.first($G__76143_seq76140__$1$$);
  var $seq76140__$2_seq76140__$3$$ = $APP.cljs.core.next($G__76143_seq76140__$1$$);
  $G__76143_seq76140__$1$$ = $APP.cljs.core.first($seq76140__$2_seq76140__$3$$);
  $seq76140__$2_seq76140__$3$$ = $APP.cljs.core.next($seq76140__$2_seq76140__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__76141$$, $G__76142_seq76140$$, $G__76143_seq76140__$1$$, $seq76140__$2_seq76140__$3$$);
};
$APP.sci.configs.cjohansen.replicant.defalias = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$302_argseq__5756__auto__$$ = [], $len__5749__auto___76191$$ = arguments.length, $i__5750__auto___76192$$ = 0;;) {
    if ($i__5750__auto___76192$$ < $len__5749__auto___76191$$) {
      $args__5755__auto__$jscomp$302_argseq__5756__auto__$$.push(arguments[$i__5750__auto___76192$$]), $i__5750__auto___76192$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$302_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$302_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$302_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return $APP.sci.configs.cjohansen.replicant.defalias.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$302_argseq__5756__auto__$$);
};
$APP.sci.configs.cjohansen.replicant.defalias.cljs$core$IFn$_invoke$arity$variadic = function($_$$, $___$1$$, $alias$$, $alias_f_forms$$) {
  $_$$ = $APP.cljs.core.keyword.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.deref($APP.sci.core.ns), $APP.cljs.core.name($alias$$));
  $alias_f_forms$$ = $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$5403$replicant_DOT_alias_SLASH_aliasfn, null, 1, null), new $APP.cljs.core.List(null, $_$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$alias_f_forms$$], 0))));
  return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$412$cljs_DOT_core_SLASH_let, null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$5404$f__76152__auto__, null, 1, null), new $APP.cljs.core.List(null, 
  $alias_f_forms$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, cljs$cst$5405$alias__76153__auto__, null, 1, null), new $APP.cljs.core.List(null, $_$$, null, 1, null)], 0))))), null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, cljs$cst$5406$replicant_DOT_alias_SLASH_register_BANG_, 
  null, 1, null), new $APP.cljs.core.List(null, cljs$cst$5405$alias__76153__auto__, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, cljs$cst$5404$f__76152__auto__, null, 1, null)], 0)))), null, 1, null), new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new $APP.cljs.core.List(null, $APP.cljs$cst$170$def, null, 1, null), new $APP.cljs.core.List(null, 
  $alias$$, null, 1, null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.List(null, cljs$cst$5405$alias__76153__auto__, null, 1, null)], 0)))), null, 1, null)], 0))));
};
$APP.sci.configs.cjohansen.replicant.defalias.cljs$lang$maxFixedArity = 3;
$APP.sci.configs.cjohansen.replicant.defalias.cljs$lang$applyTo = function($G__76156_seq76154$$) {
  var $G__76155$$ = $APP.cljs.core.first($G__76156_seq76154$$), $G__76157_seq76154__$1$$ = $APP.cljs.core.next($G__76156_seq76154$$);
  $G__76156_seq76154$$ = $APP.cljs.core.first($G__76157_seq76154__$1$$);
  var $seq76154__$2_seq76154__$3$$ = $APP.cljs.core.next($G__76157_seq76154__$1$$);
  $G__76157_seq76154__$1$$ = $APP.cljs.core.first($seq76154__$2_seq76154__$3$$);
  $seq76154__$2_seq76154__$3$$ = $APP.cljs.core.next($seq76154__$2_seq76154__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__76155$$, $G__76156_seq76154$$, $G__76157_seq76154__$1$$, $seq76154__$2_seq76154__$3$$);
};
$APP.sci.configs.cjohansen.replicant.replicant_alias_namespace = new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$5407$register_BANG_, function() {
  var $new_m__32782__auto__$jscomp$55_ns__32777__auto__$$ = $APP.sci.configs.cjohansen.replicant.rsns, $name__32781__auto__$jscomp$55_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.replicant.alias.register_BANG_;
  }, cljs$cst$5406$replicant_DOT_alias_SLASH_register_BANG_, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$5399$replicant_DOT_alias, cljs$cst$5407$register_BANG_, "replicant/alias.cljc", 16, 1, 47, 47, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1485$k, $APP.cljs$cst$52$f], null)), "Register an alias. Associates the alias key `k` with the function `f`:\n\n   ```clj\n   (replicant.alias/register! :ui/a custom-link)\n   ```", $APP.cljs.core.truth_($APP.replicant.alias.register_BANG_) ? $APP.replicant.alias.register_BANG_.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$55_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$55_var__32778__auto__$$);
  $name__32781__auto__$jscomp$55_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$55_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$55_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$55_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$55_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$55_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$55_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$55_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$55_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$55_ns__32777__auto__$$);
}(), cljs$cst$5408$aliasfn, function() {
  var $new_m__32782__auto__$jscomp$56_ns__32777__auto__$$ = $APP.sci.configs.cjohansen.replicant.rsns, $name__32781__auto__$jscomp$56_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.cjohansen.replicant.aliasfn;
  }, cljs$cst$5409$sci_DOT_configs_DOT_cjohansen_DOT_replicant_SLASH_aliasfn, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$5410$sci_DOT_configs_DOT_cjohansen_DOT_replicant, cljs$cst$5408$aliasfn, 
  !0, "sci/configs/cjohansen/replicant.cljs", 26, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$312$_, $APP.cljs$cst$312$_, $APP.cljs$cst$920$alias, $APP.cljs$cst$1238$forms)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$312$_, $APP.cljs$cst$312$_, $APP.cljs$cst$920$alias, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1238$forms], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 23, 23, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$312$_, $APP.cljs$cst$312$_, $APP.cljs$cst$920$alias, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1238$forms], 
  null)), "Define a function to use as an alias function. Creates a function that wraps\n  returned hiccup with debugging meta data when Replicant asserts are\n  enabled (e.g. during development). When asserts are not enabled (default for\n  production builds), creates a regular function with no added overhead.\n \n  `aliasfn` is most commonly used through `defalias`", $APP.cljs.core.truth_($APP.sci.configs.cjohansen.replicant.aliasfn) ? $APP.sci.configs.cjohansen.replicant.aliasfn.cljs$lang$test : 
  null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$56_var__32778__auto__$$), $m__32780__auto__$$ = $APP.cljs.core.meta($name__32781__auto__$jscomp$56_var__32778__auto__$$);
  $name__32781__auto__$jscomp$56_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$56_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$56_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$56_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$56_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$56_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$56_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$56_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$56_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$56_ns__32777__auto__$$);
}(), cljs$cst$5411$defalias, function() {
  var $new_m__32782__auto__$jscomp$57_ns__32777__auto__$$ = $APP.sci.configs.cjohansen.replicant.rsns, $name__32781__auto__$jscomp$57_var__32778__auto__$$ = new $APP.cljs.core.Var(function() {
    return $APP.sci.configs.cjohansen.replicant.defalias;
  }, cljs$cst$5412$sci_DOT_configs_DOT_cjohansen_DOT_replicant_SLASH_defalias, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$385$sci_SLASH_macro, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$1377$top_fn, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [cljs$cst$5410$sci_DOT_configs_DOT_cjohansen_DOT_replicant, cljs$cst$5411$defalias, 
  !0, "sci/configs/cjohansen/replicant.cljs", 27, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$312$_, $APP.cljs$cst$312$_, $APP.cljs$cst$920$alias, $APP.cljs$cst$1238$forms)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$312$_, $APP.cljs$cst$312$_, $APP.cljs$cst$920$alias, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1238$forms], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), 1, 59, 59, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$312$_, $APP.cljs$cst$312$_, $APP.cljs$cst$920$alias, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1238$forms], 
  null)), "Creates a function to render `alias` (a namespaced keyword), and registers\n  it in the global registry. See `aliasfn` for details about the created function.\n  The global registry is available through `replicant.alias/get-registered-aliases`.", $APP.cljs.core.truth_($APP.sci.configs.cjohansen.replicant.defalias) ? $APP.sci.configs.cjohansen.replicant.defalias.cljs$lang$test : null])), $val__32779__auto__$$ = $APP.cljs.core.deref($name__32781__auto__$jscomp$57_var__32778__auto__$$), $m__32780__auto__$$ = 
  $APP.cljs.core.meta($name__32781__auto__$jscomp$57_var__32778__auto__$$);
  $name__32781__auto__$jscomp$57_var__32778__auto__$$ = $APP.cljs.core.truth_(null) ? null : $APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  $new_m__32782__auto__$jscomp$57_ns__32777__auto__$$ = new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$176$ns, $new_m__32782__auto__$jscomp$57_ns__32777__auto__$$, $APP.cljs$cst$272$name, $name__32781__auto__$jscomp$57_var__32778__auto__$$, $APP.cljs$cst$273$arglists, $APP.cljs$cst$273$arglists.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$), $APP.cljs$cst$256$doc, $APP.cljs$cst$256$doc.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)], null);
  return $APP.cljs.core.truth_($APP.cljs$cst$383$dynamic.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$)) ? $APP.sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$57_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$57_ns__32777__auto__$$) : $APP.cljs.core.truth_(function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$384$macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cljs$cst$385$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1($m__32780__auto__$$);
  }()) ? $APP.sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$57_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$57_ns__32777__auto__$$) : $APP.sci.core.new_var.cljs$core$IFn$_invoke$arity$3($name__32781__auto__$jscomp$57_var__32778__auto__$$, $val__32779__auto__$$, $new_m__32782__auto__$jscomp$57_ns__32777__auto__$$);
}()], null);
$APP.sci.configs.cjohansen.replicant.replicant_assert_namespace = $APP.sci.core._copy_ns(new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs.core.with_meta(cljs$cst$5413$add_reporter, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$5057$export, !0, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1485$k, $APP.cljs$cst$52$f], null))), 
$APP.cljs$cst$256$doc, "Add assert error exporter. `k` is a keyword, `f` is a function that will be\n  called with an assert error, a map of\n  `{:title :message :hiccup :fname :alias :data}`."], null)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5414$replicant_DOT_assert_SLASH_add_reporter, $APP.cljs$cst$108$val, $APP.replicant.assert.add_reporter, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1485$k, $APP.cljs$cst$52$f], null)), $APP.cljs$cst$256$doc, "Add assert error exporter. `k` is a keyword, `f` is a function that will be\n  called with an assert error, a map of\n  `{:title :message :hiccup :fname :alias :data}`."], null)], null), $APP.cljs.core.with_meta(cljs$cst$5415$remove_reporter, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$5057$export, !0, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1485$k], null))), $APP.cljs$cst$256$doc, "Remove a previously added reporter, using the same `k` that was used to\n  register it. To remove the default reporter, use `:replicant.assert/default`\n  as `k`."], null)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5416$replicant_DOT_assert_SLASH_remove_reporter, $APP.cljs$cst$108$val, $APP.replicant.assert.remove_reporter, 
$APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1485$k], null)), $APP.cljs$cst$256$doc, "Remove a previously added reporter, using the same `k` that was used to\n  register it. To remove the default reporter, use `:replicant.assert/default`\n  as `k`."], null)], null)], null), $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$5417$replicant_DOT_assert, 
null));
$APP.sci.configs.cjohansen.replicant.namespaces = new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5386$replicant_DOT_dom, $APP.sci.configs.cjohansen.replicant.replicant_dom_namespace, cljs$cst$5395$replicant_DOT_string, $APP.sci.configs.cjohansen.replicant.replicant_string_namespace, cljs$cst$5399$replicant_DOT_alias, $APP.sci.configs.cjohansen.replicant.replicant_alias_namespace, cljs$cst$5417$replicant_DOT_assert, $APP.sci.configs.cjohansen.replicant.replicant_assert_namespace], null);
$APP.sci.configs.cjohansen.replicant.config = new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$398$namespaces, $APP.sci.configs.cjohansen.replicant.namespaces], null);
$APP.scittle.replicant = {};
$APP.scittle.core.register_plugin_BANG_(cljs$cst$5418$scittle_DOT_replicant_SLASH_replicant, $APP.sci.configs.cjohansen.replicant.config);

}).call(this);