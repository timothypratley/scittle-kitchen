(function(){
'use strict';
var cljs$cst$5908$re_frame_DOT_core_SLASH_unwrap = new $APP.cljs.core.Symbol("re-frame.core", "unwrap", "re-frame.core/unwrap", -1498080569, null), cljs$cst$5833$do_fx = new $APP.cljs.core.Keyword(null, "do-fx", "do-fx", 1194163050), cljs$cst$5912$re_frame_DOT_core_SLASH_clear_event = new $APP.cljs.core.Symbol("re-frame.core", "clear-event", "re-frame.core/clear-event", 1624271650, null), cljs$cst$5839$re_frame_DOT_std_interceptors_SLASH_not_found = new $APP.cljs.core.Keyword("re-frame.std-interceptors", 
"not-found", "re-frame.std-interceptors/not-found", -1614827865), cljs$cst$5920$re_frame_DOT_core_SLASH_console = new $APP.cljs.core.Symbol("re-frame.core", "console", "re-frame.core/console", 1914748698, null), cljs$cst$5875$interceptor = new $APP.cljs.core.Symbol(null, "interceptor", "interceptor", -1526696693, null), cljs$cst$5910$re_frame_DOT_core_SLASH_enqueue = new $APP.cljs.core.Symbol("re-frame.core", "enqueue", "re-frame.core/enqueue", -170225827, null), cljs$cst$5943$app_db = new $APP.cljs.core.Symbol(null, 
"app-db", "app-db", -1788829467, null), cljs$cst$5848$on_changes = new $APP.cljs.core.Keyword(null, "on-changes", "on-changes", 1345912602), cljs$cst$5827$fsm_state = new $APP.cljs.core.Keyword(null, "fsm-state", "fsm-state", 1656310533), cljs$cst$5925$re_frame_DOT_core_SLASH_set_loggers_BANG_ = new $APP.cljs.core.Symbol("re-frame.core", "set-loggers!", "re-frame.core/set-loggers!", 886929143, null), cljs$cst$5838$deregister_event_handler = new $APP.cljs.core.Keyword(null, "deregister-event-handler", 
"deregister-event-handler", -1096518994), cljs$cst$5840$unwrap = new $APP.cljs.core.Keyword(null, "unwrap", "unwrap", -1399175462), cljs$cst$5802$original_event = new $APP.cljs.core.Keyword(null, "original-event", "original-event", 2121330403), cljs$cst$5905$re_frame_DOT_core_SLASH_dispatch_sync = new $APP.cljs.core.Symbol("re-frame.core", "dispatch-sync", "re-frame.core/dispatch-sync", -1113172660, null), cljs$cst$5902$inject_cofx = new $APP.cljs.core.Symbol(null, "inject-cofx", "inject-cofx", -1494968627, 
null), cljs$cst$5821$re_frame_DOT_router_SLASH_fsm_trigger = new $APP.cljs.core.Keyword("re-frame.router", "fsm-trigger", "re-frame.router/fsm-trigger", 1379787274), cljs$cst$5808$reaction = new $APP.cljs.core.Keyword(null, "reaction", "reaction", 490869788), cljs$cst$5794$cofx = new $APP.cljs.core.Keyword(null, "cofx", "cofx", 2013202907), cljs$cst$5869$clear_fx = new $APP.cljs.core.Symbol(null, "clear-fx", "clear-fx", 1936947081, null), cljs$cst$5895$__GT_interceptor = new $APP.cljs.core.Symbol(null, 
"-\x3einterceptor", "-\x3einterceptor", -390826100, null), cljs$cst$5864$get_coeffect = new $APP.cljs.core.Symbol(null, "get-coeffect", "get-coeffect", 1018510098, null), cljs$cst$5851$re_frame_DOT_db = new $APP.cljs.core.Symbol(null, "re-frame.db", "re-frame.db", 983930750, null), cljs$cst$5886$on_changes = new $APP.cljs.core.Symbol(null, "on-changes", "on-changes", -1308523167, null), cljs$cst$5862$interceptors = new $APP.cljs.core.Symbol(null, "interceptors", "interceptors", 93748576, null), cljs$cst$5801$coeffects = 
new $APP.cljs.core.Keyword(null, "coeffects", "coeffects", 497912985), cljs$cst$5849$inject_global_interceptors = new $APP.cljs.core.Keyword(null, "inject-global-interceptors", "inject-global-interceptors", -2144129737), cljs$cst$5897$make_restore_fn = new $APP.cljs.core.Symbol(null, "make-restore-fn", "make-restore-fn", -439197753, null), cljs$cst$5859$unwrap = new $APP.cljs.core.Symbol(null, "unwrap", "unwrap", 241356065, null), cljs$cst$5816$yield = new $APP.cljs.core.Keyword(null, "yield", "yield", 
177875009), cljs$cst$5883$set_loggers_BANG_ = new $APP.cljs.core.Symbol(null, "set-loggers!", "set-loggers!", -1947820787, null), cljs$cst$5881$register_handler = new $APP.cljs.core.Symbol(null, "register-handler", "register-handler", -2025780993, null), cljs$cst$5825$paused = new $APP.cljs.core.Keyword(null, "paused", "paused", -1710376127), cljs$cst$5879$reg_cofx = new $APP.cljs.core.Symbol(null, "reg-cofx", "reg-cofx", 91685178, null), cljs$cst$5907$re_frame_DOT_core_SLASH_dispatch = new $APP.cljs.core.Symbol("re-frame.core", 
"dispatch", "re-frame.core/dispatch", 1765071110, null), cljs$cst$5791$loaded_QMARK_ = new $APP.cljs.core.Keyword(null, "loaded?", "loaded?", -1108015206), cljs$cst$5789$log = new $APP.cljs.core.Keyword(null, "log", "log", -1595516004), cljs$cst$5924$re_frame_DOT_core_SLASH_register_handler = new $APP.cljs.core.Symbol("re-frame.core", "register-handler", "re-frame.core/register-handler", 772396373, null), cljs$cst$5813$_LT__ = new $APP.cljs.core.Keyword(null, "\x3c-", "\x3c-", 760412998), cljs$cst$5810$cached_QMARK_ = 
new $APP.cljs.core.Keyword(null, "cached?", "cached?", 86081880), cljs$cst$5832$post_event_callback_fns = new $APP.cljs.core.Symbol(null, "post-event-callback-fns", "post-event-callback-fns", -297038335, null), cljs$cst$5916$re_frame_DOT_core_SLASH_add_post_event_callback = new $APP.cljs.core.Symbol("re-frame.core", "add-post-event-callback", "re-frame.core/add-post-event-callback", -441107040, null), cljs$cst$5854$handler_fn = new $APP.cljs.core.Symbol(null, "handler-fn", "handler-fn", 841143797, 
null), cljs$cst$5868$dynv = new $APP.cljs.core.Symbol(null, "dynv", "dynv", -405952138, null), cljs$cst$5812$input_signals = new $APP.cljs.core.Keyword(null, "input-signals", "input-signals", 563633497), cljs$cst$5889$clear_subscription_cache_BANG_ = new $APP.cljs.core.Symbol(null, "clear-subscription-cache!", "clear-subscription-cache!", 1196020095, null), cljs$cst$5834$event_SLASH_do_fx = new $APP.cljs.core.Keyword("event", "do-fx", "event/do-fx", 1357330452), cljs$cst$5944$re_frame_DOT_db_SLASH_app_db = 
new $APP.cljs.core.Symbol("re-frame.db", "app-db", "re-frame.db/app-db", 1918166498, null), cljs$cst$5878$clear_cofx = new $APP.cljs.core.Symbol(null, "clear-cofx", "clear-cofx", 1267145204, null), cljs$cst$5798$after = new $APP.cljs.core.Keyword(null, "after", "after", 594996914), cljs$cst$5899$debug = new $APP.cljs.core.Symbol(null, "debug", "debug", 32358931, null), cljs$cst$5803$app_db_before = new $APP.cljs.core.Keyword(null, "app-db-before", "app-db-before", -1442902645), cljs$cst$5815$flush_dom = 
new $APP.cljs.core.Keyword(null, "flush-dom", "flush-dom", -933676816), cljs$cst$5903$remove_post_event_callback = new $APP.cljs.core.Symbol(null, "remove-post-event-callback", "remove-post-event-callback", -909482234, null), cljs$cst$5914$re_frame_DOT_core_SLASH_clear_fx = new $APP.cljs.core.Symbol("re-frame.core", "clear-fx", "re-frame.core/clear-fx", -894786861, null), cljs$cst$5856$dispatch_sync = new $APP.cljs.core.Symbol(null, "dispatch-sync", "dispatch-sync", -990037526, null), cljs$cst$5877$level = 
new $APP.cljs.core.Symbol(null, "level", "level", -1363938217, null), cljs$cst$5900$assoc_coeffect = new $APP.cljs.core.Symbol(null, "assoc-coeffect", "assoc-coeffect", 891917445, null), cljs$cst$5811$dyn_v = new $APP.cljs.core.Keyword(null, "dyn-v", "dyn-v", 949994592), cljs$cst$5928$re_frame_DOT_core_SLASH_clear_subscription_cache_BANG_ = new $APP.cljs.core.Symbol("re-frame.core", "clear-subscription-cache!", "re-frame.core/clear-subscription-cache!", -8362855, null), cljs$cst$5937$re_frame_DOT_core_SLASH_purge_event_queue = 
new $APP.cljs.core.Symbol("re-frame.core", "purge-event-queue", "re-frame.core/purge-event-queue", 1051371119, null), cljs$cst$5894$trim_v = new $APP.cljs.core.Symbol(null, "trim-v", "trim-v", 365592887, null), cljs$cst$5831$fsm_state = new $APP.cljs.core.Symbol(null, "fsm-state", "fsm-state", -998125236, null), cljs$cst$5863$enqueue = new $APP.cljs.core.Symbol(null, "enqueue", "enqueue", 1377000435, null), cljs$cst$5913$re_frame_DOT_core_SLASH_subscribe = new $APP.cljs.core.Symbol("re-frame.core", 
"subscribe", "re-frame.core/subscribe", -774932115, null), cljs$cst$5904$re_frame_DOT_core_SLASH_reg_sub_raw = new $APP.cljs.core.Symbol("re-frame.core", "reg-sub-raw", "re-frame.core/reg-sub-raw", -1992472244, null), cljs$cst$5874$reg_global_interceptor = new $APP.cljs.core.Symbol(null, "reg-global-interceptor", "reg-global-interceptor", 2060591173, null), cljs$cst$5866$clear_event = new $APP.cljs.core.Symbol(null, "clear-event", "clear-event", -1884567988, null), cljs$cst$5800$unnamed = new $APP.cljs.core.Keyword(null, 
"unnamed", "unnamed", -26044928), cljs$cst$5792$global_interceptors = new $APP.cljs.core.Keyword(null, "global-interceptors", "global-interceptors", -1995759472), cljs$cst$5829$current_state = new $APP.cljs.core.Keyword(null, "current-state", "current-state", 1048284452), cljs$cst$5847$enrich = new $APP.cljs.core.Keyword(null, "enrich", "enrich", -2108921925), cljs$cst$5927$re_frame_DOT_core_SLASH_on_changes = new $APP.cljs.core.Symbol("re-frame.core", "on-changes", "re-frame.core/on-changes", 1765357575, 
null), cljs$cst$5823$scheduled = new $APP.cljs.core.Keyword(null, "scheduled", "scheduled", 553898551), cljs$cst$5891$register_sub = new $APP.cljs.core.Symbol(null, "register-sub", "register-sub", 2032582885, null), cljs$cst$5918$re_frame_DOT_core_SLASH_enrich = new $APP.cljs.core.Symbol("re-frame.core", "enrich", "re-frame.core/enrich", -1956662808, null), cljs$cst$5797$child_of = new $APP.cljs.core.Keyword(null, "child-of", "child-of", -903376662), cljs$cst$5824$running = new $APP.cljs.core.Keyword(null, 
"running", "running", 1554969103), cljs$cst$5921$re_frame_DOT_core_SLASH_clear_cofx = new $APP.cljs.core.Symbol("re-frame.core", "clear-cofx", "re-frame.core/clear-cofx", 583971922, null), cljs$cst$5872$reg_fx = new $APP.cljs.core.Symbol(null, "reg-fx", "reg-fx", -87443115, null), cljs$cst$5807$query_v = new $APP.cljs.core.Keyword(null, "query-v", "query-v", -1514170131), cljs$cst$5887$out_path = new $APP.cljs.core.Symbol(null, "out-path", "out-path", -923103991, null), cljs$cst$5799$before = new $APP.cljs.core.Keyword(null, 
"before", "before", -1633692388), cljs$cst$5915$re_frame_DOT_core_SLASH_reg_event_ctx = new $APP.cljs.core.Symbol("re-frame.core", "reg-event-ctx", "re-frame.core/reg-event-ctx", 15437106, null), cljs$cst$5922$re_frame_DOT_core_SLASH_reg_cofx = new $APP.cljs.core.Symbol("re-frame.core", "reg-cofx", "re-frame.core/reg-cofx", -1104161380, null), cljs$cst$5917$re_frame_DOT_core_SLASH_reg_fx = new $APP.cljs.core.Symbol("re-frame.core", "reg-fx", "re-frame.core/reg-fx", 1560429967, null), cljs$cst$5844$fx_handler = 
new $APP.cljs.core.Keyword(null, "fx-handler", "fx-handler", -549783097), cljs$cst$5893$clear_sub = new $APP.cljs.core.Symbol(null, "clear-sub", "clear-sub", -1368681160, null), cljs$cst$5898$purge_event_queue = new $APP.cljs.core.Symbol(null, "purge-event-queue", "purge-event-queue", -1780102203, null), cljs$cst$5809$sub_SLASH_create = new $APP.cljs.core.Keyword("sub", "create", "sub/create", -1301317560), cljs$cst$5888$in_paths = new $APP.cljs.core.Symbol(null, "in-paths", "in-paths", -1809668720, 
null), cljs$cst$5938$re_frame_DOT_core_SLASH_debug = new $APP.cljs.core.Symbol("re-frame.core", "debug", "re-frame.core/debug", 1759164285, null), cljs$cst$5901$reg_event_db = new $APP.cljs.core.Symbol(null, "reg-event-db", "reg-event-db", 1898199338, null), cljs$cst$5855$api_docs_SLASH_heading = new $APP.cljs.core.Keyword("api-docs", "heading", "api-docs/heading", 2007966345), cljs$cst$5860$reg_event_fx = new $APP.cljs.core.Symbol(null, "reg-event-fx", "reg-event-fx", 350713021, null), cljs$cst$5932$re_frame_DOT_core_SLASH_clear_global_interceptor = 
new $APP.cljs.core.Symbol("re-frame.core", "clear-global-interceptor", "re-frame.core/clear-global-interceptor", 166960890, null), cljs$cst$5940$re_frame_DOT_core_SLASH_reg_event_db = new $APP.cljs.core.Symbol("re-frame.core", "reg-event-db", "re-frame.core/reg-event-db", 418153612, null), cljs$cst$5909$re_frame_DOT_core_SLASH_reg_event_fx = new $APP.cljs.core.Symbol("re-frame.core", "reg-event-fx", "re-frame.core/reg-event-fx", -63037421, null), cljs$cst$5880$after = new $APP.cljs.core.Symbol(null, 
"after", "after", -2059438855, null), cljs$cst$5820$run_queue = new $APP.cljs.core.Keyword(null, "run-queue", "run-queue", -1701798027), cljs$cst$5843$event_SLASH_handler = new $APP.cljs.core.Keyword("event", "handler", "event/handler", -295903150), cljs$cst$5819$add_event = new $APP.cljs.core.Keyword(null, "add-event", "add-event", 938429088), cljs$cst$5939$re_frame_DOT_core_SLASH_assoc_coeffect = new $APP.cljs.core.Symbol("re-frame.core", "assoc-coeffect", "re-frame.core/assoc-coeffect", -832544285, 
null), cljs$cst$5822$idle = new $APP.cljs.core.Keyword(null, "idle", "idle", -2007156861), cljs$cst$5936$re_frame_DOT_core_SLASH_make_restore_fn = new $APP.cljs.core.Symbol("re-frame.core", "make-restore-fn", "re-frame.core/make-restore-fn", -1130647527, null), cljs$cst$5790$groupEnd = new $APP.cljs.core.Keyword(null, "groupEnd", "groupEnd", -337721382), cljs$cst$5945$scittle_DOT_re_frame_SLASH_re_frame = new $APP.cljs.core.Keyword("scittle.re-frame", "re-frame", "scittle.re-frame/re-frame", 1536840200), 
cljs$cst$5837$dispatch_n = new $APP.cljs.core.Keyword(null, "dispatch-n", "dispatch-n", -504469236), cljs$cst$5861$handler = new $APP.cljs.core.Symbol(null, "handler", "handler", 1444934915, null), cljs$cst$5906$re_frame_DOT_core_SLASH_reg_sub = new $APP.cljs.core.Symbol("re-frame.core", "reg-sub", "re-frame.core/reg-sub", -1693960551, null), cljs$cst$5867$subscribe = new $APP.cljs.core.Symbol(null, "subscribe", "subscribe", 2056785283, null), cljs$cst$5814$sub_SLASH_run = new $APP.cljs.core.Keyword("sub", 
"run", "sub/run", -1821315581), cljs$cst$5793$sub = new $APP.cljs.core.Keyword(null, "sub", "sub", -2093760025), cljs$cst$5885$assoc_effect = new $APP.cljs.core.Symbol(null, "assoc-effect", "assoc-effect", 300107315, null), cljs$cst$5852$reg_sub_raw = new $APP.cljs.core.Symbol(null, "reg-sub-raw", "reg-sub-raw", 784637666, null), cljs$cst$5929$re_frame_DOT_core_SLASH_get_effect = new $APP.cljs.core.Symbol("re-frame.core", "get-effect", "re-frame.core/get-effect", -1346481552, null), cljs$cst$5870$reg_event_ctx = 
new $APP.cljs.core.Symbol(null, "reg-event-ctx", "reg-event-ctx", 1495496276, null), cljs$cst$5806$sub_SLASH_dispose = new $APP.cljs.core.Keyword("sub", "dispose", "sub/dispose", 365440536), cljs$cst$5858$reg_sub = new $APP.cljs.core.Symbol(null, "reg-sub", "reg-sub", 852548167, null), cljs$cst$5926$re_frame_DOT_core_SLASH_assoc_effect = new $APP.cljs.core.Symbol("re-frame.core", "assoc-effect", "re-frame.core/assoc-effect", -114683447, null), cljs$cst$5933$re_frame_DOT_core_SLASH_clear_sub = new $APP.cljs.core.Symbol("re-frame.core", 
"clear-sub", "re-frame.core/clear-sub", 395526338, null), cljs$cst$5830$new_state = new $APP.cljs.core.Keyword(null, "new-state", "new-state", -490349212), cljs$cst$5850$re_frame_DOT_core = new $APP.cljs.core.Symbol(null, "re-frame.core", "re-frame.core", -1549073474, null), cljs$cst$5911$re_frame_DOT_core_SLASH_get_coeffect = new $APP.cljs.core.Symbol("re-frame.core", "get-coeffect", "re-frame.core/get-coeffect", 1741350824, null), cljs$cst$5890$get_effect = new $APP.cljs.core.Symbol(null, "get-effect", 
"get-effect", 116827434, null), cljs$cst$5804$app_db_after = new $APP.cljs.core.Keyword(null, "app-db-after", "app-db-after", 1477492964), cljs$cst$5934$re_frame_DOT_core_SLASH_trim_v = new $APP.cljs.core.Symbol("re-frame.core", "trim-v", "re-frame.core/trim-v", -1158424979, null), cljs$cst$5795$fx = new $APP.cljs.core.Keyword(null, "fx", "fx", -1237829572), cljs$cst$5841$trim_v = new $APP.cljs.core.Keyword(null, "trim-v", "trim-v", -1274938640), cljs$cst$5818$pause = new $APP.cljs.core.Keyword(null, 
"pause", "pause", -2095325672), cljs$cst$5923$re_frame_DOT_core_SLASH_after = new $APP.cljs.core.Symbol("re-frame.core", "after", "re-frame.core/after", 705151839, null), cljs$cst$5805$duration = new $APP.cljs.core.Keyword(null, "duration", "duration", 1444101068), cljs$cst$5845$ctx_handler = new $APP.cljs.core.Keyword(null, "ctx-handler", "ctx-handler", -1777672230), cljs$cst$5796$op_type = new $APP.cljs.core.Keyword(null, "op-type", "op-type", -1636141668), cljs$cst$5942$re_frame_DOT_core_SLASH_remove_post_event_callback = 
new $APP.cljs.core.Symbol("re-frame.core", "remove-post-event-callback", "re-frame.core/remove-post-event-callback", -1601893792, null), cljs$cst$5931$re_frame_DOT_core_SLASH_path = new $APP.cljs.core.Symbol("re-frame.core", "path", "re-frame.core/path", -3666115, null), cljs$cst$5930$re_frame_DOT_core_SLASH_register_sub = new $APP.cljs.core.Symbol("re-frame.core", "register-sub", "re-frame.core/register-sub", -772926397, null), cljs$cst$5871$add_post_event_callback = new $APP.cljs.core.Symbol(null, 
"add-post-event-callback", "add-post-event-callback", 182608154, null), cljs$cst$5836$dispatch_later = new $APP.cljs.core.Keyword(null, "dispatch-later", "dispatch-later", 291951390), cljs$cst$5842$db_handler = new $APP.cljs.core.Keyword(null, "db-handler", "db-handler", 579530098), cljs$cst$5846$re_frame_path_SLASH_db_store = new $APP.cljs.core.Keyword("re-frame-path", "db-store", "re-frame-path/db-store", 655758490), cljs$cst$5828$trigger = new $APP.cljs.core.Keyword(null, "trigger", "trigger", 
103466139), cljs$cst$5884$new_loggers = new $APP.cljs.core.Symbol(null, "new-loggers", "new-loggers", -1268568509, null), cljs$cst$5935$re_frame_DOT_core_SLASH___GT_interceptor = new $APP.cljs.core.Symbol("re-frame.core", "-\x3einterceptor", "re-frame.core/-\x3einterceptor", 6499190, null), cljs$cst$5826$resume = new $APP.cljs.core.Keyword(null, "resume", "resume", -118572261), cljs$cst$5919$re_frame_DOT_core_SLASH_reg_global_interceptor = new $APP.cljs.core.Symbol("re-frame.core", "reg-global-interceptor", 
"re-frame.core/reg-global-interceptor", -2081719141, null), cljs$cst$5892$clear_global_interceptor = new $APP.cljs.core.Symbol(null, "clear-global-interceptor", "clear-global-interceptor", -1607850608, null), cljs$cst$5817$finish_run = new $APP.cljs.core.Keyword(null, "finish-run", "finish-run", 753148477), cljs$cst$5941$re_frame_DOT_core_SLASH_inject_cofx = new $APP.cljs.core.Symbol("re-frame.core", "inject-cofx", "re-frame.core/inject-cofx", 506211767, null), cljs$cst$5873$enrich = new $APP.cljs.core.Symbol(null, 
"enrich", "enrich", -468390398, null), cljs$cst$5896$before = new $APP.cljs.core.Symbol(null, "before", "before", 6839139, null);
var re_frame = {interop:{}};
re_frame.interop.on_load = function($listener$$) {
  try {
    return $APP.goog.events.listen(self, "load", $listener$$);
  } catch ($e78036$$) {
    return null;
  }
};
re_frame.interop.next_tick = $APP.goog.async.nextTick;
re_frame.interop.empty_queue = $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentQueue.EMPTY, $APP.cljs.core.PersistentVector.EMPTY);
re_frame.interop.after_render = $APP.reagent.core.after_render;
re_frame.interop.debug_enabled_QMARK_ = $APP.goog.DEBUG;
re_frame.interop.ratom = function($x$$) {
  return $APP.reagent.core.atom.cljs$core$IFn$_invoke$arity$1($x$$);
};
re_frame.interop.ratom_QMARK_ = function($x$$) {
  return $x$$ != null ? $APP.cljs.core.PROTOCOL_SENTINEL === $x$$.reagent$ratom$IReactiveAtom$ ? !0 : $x$$.cljs$lang$protocol_mask$partition$ ? !1 : $APP.cljs.core.native_satisfies_QMARK_($APP.reagent.ratom.IReactiveAtom, $x$$) : $APP.cljs.core.native_satisfies_QMARK_($APP.reagent.ratom.IReactiveAtom, $x$$);
};
re_frame.interop.deref_QMARK_ = function($x$$) {
  return $x$$ != null ? $x$$.cljs$lang$protocol_mask$partition0$ & 32768 || $APP.cljs.core.PROTOCOL_SENTINEL === $x$$.cljs$core$IDeref$ ? !0 : $x$$.cljs$lang$protocol_mask$partition0$ ? !1 : $APP.cljs.core.native_satisfies_QMARK_($APP.cljs.core.IDeref, $x$$) : $APP.cljs.core.native_satisfies_QMARK_($APP.cljs.core.IDeref, $x$$);
};
re_frame.interop.make_reaction = function($f$$) {
  return $APP.reagent.ratom.make_reaction($f$$);
};
re_frame.interop.add_on_dispose_BANG_ = function($a_ratom$$, $f$$) {
  return $APP.reagent.ratom.add_on_dispose_BANG_($a_ratom$$, $f$$);
};
re_frame.interop.dispose_BANG_ = function($a_ratom$$) {
  return $APP.reagent.ratom.dispose_BANG_($a_ratom$$);
};
re_frame.interop.set_timeout_BANG_ = function($f$$, $ms$$) {
  return setTimeout($f$$, $ms$$);
};
re_frame.interop.now = function() {
  return typeof performance !== "undefined" && typeof performance !== "undefined" && typeof performance.now !== "undefined" ? performance.now() : Date.now();
};
re_frame.interop.reagent_id = function($JSCompiler_temp$$) {
  if ($JSCompiler_temp$$ != null && $APP.cljs.core.PROTOCOL_SENTINEL === $JSCompiler_temp$$.reagent$ratom$IReactiveAtom$) {
    var $pred__78072$$ = $APP.cljs.core.instance_QMARK_;
    $JSCompiler_temp$$ = [$APP.cljs.core.truth_($pred__78072$$.cljs$core$IFn$_invoke$arity$2 ? $pred__78072$$.cljs$core$IFn$_invoke$arity$2($APP.reagent.ratom.RAtom, $JSCompiler_temp$$) : $pred__78072$$.call(null, $APP.reagent.ratom.RAtom, $JSCompiler_temp$$)) ? "ra" : $APP.cljs.core.truth_($pred__78072$$.cljs$core$IFn$_invoke$arity$2 ? $pred__78072$$.cljs$core$IFn$_invoke$arity$2($APP.reagent.ratom.RCursor, $JSCompiler_temp$$) : $pred__78072$$.call(null, $APP.reagent.ratom.RCursor, $JSCompiler_temp$$)) ? 
    "rc" : $APP.cljs.core.truth_($pred__78072$$.cljs$core$IFn$_invoke$arity$2 ? $pred__78072$$.cljs$core$IFn$_invoke$arity$2($APP.reagent.ratom.Reaction, $JSCompiler_temp$$) : $pred__78072$$.call(null, $APP.reagent.ratom.Reaction, $JSCompiler_temp$$)) ? "rx" : $APP.cljs.core.truth_($pred__78072$$.cljs$core$IFn$_invoke$arity$2 ? $pred__78072$$.cljs$core$IFn$_invoke$arity$2($APP.reagent.ratom.Track, $JSCompiler_temp$$) : $pred__78072$$.call(null, $APP.reagent.ratom.Track, $JSCompiler_temp$$)) ? "tr" : 
    "other", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.hash($JSCompiler_temp$$))].join("");
  } else {
    $JSCompiler_temp$$ = null;
  }
  return $JSCompiler_temp$$;
};
re_frame.interop.reactive_QMARK_ = function() {
  return $APP.reagent.ratom.reactive_QMARK_();
};
re_frame.db = {};
re_frame.db.app_db = re_frame.interop.ratom($APP.cljs.core.PersistentArrayMap.EMPTY);
re_frame.loggers = {};
re_frame.loggers.loggers = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 6, [cljs$cst$5789$log, console.log.bind(console), $APP.cljs$cst$2225$warn, console.warn.bind(console), $APP.cljs$cst$1404$error, console.error.bind(console), $APP.cljs$cst$2223$debug, console.debug.bind(console), $APP.cljs$cst$2088$group, $APP.cljs.core.truth_(console.group) ? console.group.bind(console) : console.log.bind(console), cljs$cst$5790$groupEnd, $APP.cljs.core.truth_(console.groupEnd) ? 
console.groupEnd.bind(console) : function() {
  return $APP.cljs.core.List.EMPTY;
}], null));
re_frame.loggers.console = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$338_argseq__5756__auto__$$ = [], $len__5749__auto___78082$$ = arguments.length, $i__5750__auto___78083$$ = 0;;) {
    if ($i__5750__auto___78083$$ < $len__5749__auto___78082$$) {
      $args__5755__auto__$jscomp$338_argseq__5756__auto__$$.push(arguments[$i__5750__auto___78083$$]), $i__5750__auto___78083$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$338_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$338_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$338_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$338_argseq__5756__auto__$$);
};
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic = function($JSCompiler_inline_result$jscomp$1944_level$$, $args$$) {
  var $JSCompiler_temp_const$$ = $APP.cljs.core.apply, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.cljs$core$IFn$_invoke$arity$2, $G__78081$$ = $APP.cljs.core.deref(re_frame.loggers.loggers);
  $JSCompiler_inline_result$jscomp$1944_level$$ = $JSCompiler_inline_result$jscomp$1944_level$$.cljs$core$IFn$_invoke$arity$1 ? $JSCompiler_inline_result$jscomp$1944_level$$.cljs$core$IFn$_invoke$arity$1($G__78081$$) : $JSCompiler_inline_result$jscomp$1944_level$$.call(null, $G__78081$$);
  return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_inline_result$jscomp$1944_level$$, $args$$);
};
re_frame.loggers.console.cljs$lang$maxFixedArity = 1;
re_frame.loggers.console.cljs$lang$applyTo = function($seq78079_seq78079__$1$$) {
  var $G__78080$$ = $APP.cljs.core.first($seq78079_seq78079__$1$$);
  $seq78079_seq78079__$1$$ = $APP.cljs.core.next($seq78079_seq78079__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__78080$$, $seq78079_seq78079__$1$$);
};
re_frame.loggers.set_loggers_BANG_ = function($new_loggers$$) {
  return $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.loggers.loggers, $APP.cljs.core.merge, $new_loggers$$);
};
re_frame.loggers.get_loggers = function() {
  return $APP.cljs.core.deref(re_frame.loggers.loggers);
};
re_frame.utils = {};
re_frame.utils.dissoc_in = function($m$$, $first__78088_p__78085$$) {
  var $newmap_seq__78087_seq__78087__$1$$ = $APP.cljs.core.seq($first__78088_p__78085$$);
  $first__78088_p__78085$$ = $APP.cljs.core.first($newmap_seq__78087_seq__78087__$1$$);
  if ($newmap_seq__78087_seq__78087__$1$$ = $APP.cljs.core.next($newmap_seq__78087_seq__78087__$1$$)) {
    var $temp__5823__auto__$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($m$$, $first__78088_p__78085$$);
    return $APP.cljs.core.truth_($temp__5823__auto__$$) ? ($newmap_seq__78087_seq__78087__$1$$ = re_frame.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? re_frame.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2($temp__5823__auto__$$, $newmap_seq__78087_seq__78087__$1$$) : re_frame.utils.dissoc_in.call(null, $temp__5823__auto__$$, $newmap_seq__78087_seq__78087__$1$$), $APP.cljs.core.seq($newmap_seq__78087_seq__78087__$1$$) ? $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($m$$, $first__78088_p__78085$$, 
    $newmap_seq__78087_seq__78087__$1$$) : $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($m$$, $first__78088_p__78085$$)) : $m$$;
  }
  return $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($m$$, $first__78088_p__78085$$);
};
re_frame.utils.first_in_vector = function($v$$) {
  return $APP.cljs.core.vector_QMARK_($v$$) ? $APP.cljs.core.first($v$$) : re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: expected a vector, but got:", $v$$], 0));
};
re_frame.utils.apply_kw = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$339_argseq__5756__auto__$$ = [], $len__5749__auto___78091$$ = arguments.length, $i__5750__auto___78092$$ = 0;;) {
    if ($i__5750__auto___78092$$ < $len__5749__auto___78091$$) {
      $args__5755__auto__$jscomp$339_argseq__5756__auto__$$.push(arguments[$i__5750__auto___78092$$]), $i__5750__auto___78092$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$339_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$339_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$339_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$339_argseq__5756__auto__$$);
};
re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic = function($f$$, $args$$) {
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($f$$, $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.concat, $APP.cljs.core.butlast($args$$), $APP.cljs.core.last($args$$)));
};
re_frame.utils.apply_kw.cljs$lang$maxFixedArity = 1;
re_frame.utils.apply_kw.cljs$lang$applyTo = function($seq78089_seq78089__$1$$) {
  var $G__78090$$ = $APP.cljs.core.first($seq78089_seq78089__$1$$);
  $seq78089_seq78089__$1$$ = $APP.cljs.core.next($seq78089_seq78089__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__78090$$, $seq78089_seq78089__$1$$);
};
re_frame.settings = {};
re_frame.settings.defaults = new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5791$loaded_QMARK_, !1, cljs$cst$5792$global_interceptors, re_frame.interop.empty_queue], null);
re_frame.settings.store = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1(re_frame.settings.defaults);
re_frame.interop.on_load(function() {
  return $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.settings.store, function($m$$) {
    return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($m$$, cljs$cst$5791$loaded_QMARK_, !0);
  });
});
re_frame.settings.loaded_QMARK_ = function() {
  return cljs$cst$5791$loaded_QMARK_.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.deref(re_frame.settings.store));
};
re_frame.settings._replace_global_interceptor = function($global_interceptors$$, $interceptor$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret$$, $existing_interceptor$$) {
    return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$396$id.cljs$core$IFn$_invoke$arity$1($interceptor$$), $APP.cljs$cst$396$id.cljs$core$IFn$_invoke$arity$1($existing_interceptor$$)) ? (re_frame.interop.debug_enabled_QMARK_ && $APP.cljs.core.not(re_frame.settings.loaded_QMARK_()) && re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: replacing duplicate global interceptor id: ", 
    $APP.cljs$cst$396$id.cljs$core$IFn$_invoke$arity$1($interceptor$$)], 0)), $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($ret$$, $interceptor$$)) : $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($ret$$, $existing_interceptor$$);
  }, re_frame.interop.empty_queue, $global_interceptors$$);
};
re_frame.settings.reg_global_interceptor = function($p__78094$$) {
  var $map__78095__$1$$ = $APP.cljs.core.__destructure_map($p__78094$$), $id$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__78095__$1$$, $APP.cljs$cst$396$id);
  return $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.settings.store, $APP.cljs.core.update, cljs$cst$5792$global_interceptors, function($global_interceptors$$) {
    var $ids$$ = $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$396$id, $global_interceptors$$);
    return $APP.cljs.core.truth_($APP.cljs.core.some($APP.cljs.core.PersistentHashSet.createAsIfByAssoc([$id$$]), $ids$$)) ? re_frame.settings._replace_global_interceptor($global_interceptors$$, $map__78095__$1$$) : $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($global_interceptors$$, $map__78095__$1$$);
  });
};
re_frame.settings.get_global_interceptors = function() {
  return cljs$cst$5792$global_interceptors.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.deref(re_frame.settings.store));
};
re_frame.settings.clear_global_interceptors = function($var_args$$) {
  switch(arguments.length) {
    case 0:
      return re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$0 = function() {
  return $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.settings.store, $APP.cljs.core.assoc, cljs$cst$5792$global_interceptors, re_frame.interop.empty_queue);
};
re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$1 = function($id$$) {
  return $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.settings.store, $APP.cljs.core.update, cljs$cst$5792$global_interceptors, function($global_interceptors$$) {
    return $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2(re_frame.interop.empty_queue, $APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2(function($p1__78096_SHARP_$$) {
      return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($id$$, $APP.cljs$cst$396$id.cljs$core$IFn$_invoke$arity$1($p1__78096_SHARP_$$));
    }, $global_interceptors$$));
  });
};
re_frame.settings.clear_global_interceptors.cljs$lang$maxFixedArity = 1;
re_frame.registrar = {};
re_frame.registrar.kinds = new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5793$sub, null, $APP.cljs$cst$1735$event, null, cljs$cst$5794$cofx, null, cljs$cst$5795$fx, null], null), null);
re_frame.registrar.kind__GT_id__GT_handler = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY);
re_frame.registrar.get_handler = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$1 = function($kind$$) {
  return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler), $kind$$);
};
re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2 = function($kind$$, $id$$) {
  return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler), $kind$$), $id$$);
};
re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3 = function($kind$$, $id$$, $JSCompiler_inline_result$jscomp$1947_required_QMARK_$$) {
  var $handler$$ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2($kind$$, $id$$);
  if (re_frame.interop.debug_enabled_QMARK_) {
    var $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.truth_;
    $JSCompiler_inline_result$jscomp$1947_required_QMARK_$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$1947_required_QMARK_$$) ? $handler$$ == null : $JSCompiler_inline_result$jscomp$1947_required_QMARK_$$;
    $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_inline_result$jscomp$1947_required_QMARK_$$) && re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($kind$$), "handler registered for:", $id$$], 0));
  }
  return $handler$$;
};
re_frame.registrar.get_handler.cljs$lang$maxFixedArity = 3;
re_frame.registrar.register_handler = function($kind$$, $id$$, $handler_fn$$) {
  if (re_frame.interop.debug_enabled_QMARK_) {
    var $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.truth_;
    var $JSCompiler_inline_result$jscomp$1950_and__5023__auto__$$ = ($JSCompiler_inline_result$jscomp$1950_and__5023__auto__$$ = $APP.cljs.core.not(re_frame.settings.loaded_QMARK_())) ? re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3($kind$$, $id$$, !1) : $JSCompiler_inline_result$jscomp$1950_and__5023__auto__$$;
    $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_inline_result$jscomp$1950_and__5023__auto__$$) && re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: overwriting", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($kind$$), "handler for:", $id$$], 0));
  }
  $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.registrar.kind__GT_id__GT_handler, $APP.cljs.core.assoc_in, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$kind$$, $id$$], null), $handler_fn$$);
  return $handler_fn$$;
};
re_frame.registrar.clear_handlers = function($var_args$$) {
  switch(arguments.length) {
    case 0:
      return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$0 = function() {
  return $APP.cljs.core.reset_BANG_(re_frame.registrar.kind__GT_id__GT_handler, $APP.cljs.core.PersistentArrayMap.EMPTY);
};
re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1 = function($kind$$) {
  return $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.registrar.kind__GT_id__GT_handler, $APP.cljs.core.dissoc, $kind$$);
};
re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2 = function($kind$$, $id$$) {
  return $APP.cljs.core.truth_(re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2($kind$$, $id$$)) ? $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame.registrar.kind__GT_id__GT_handler, $APP.cljs.core.update_in, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$kind$$], null), $APP.cljs.core.dissoc, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$id$$], 0)) : re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, 
  $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: can't clear", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($kind$$), "handler for", [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($id$$), ". Handler not found."].join("")], 0));
};
re_frame.registrar.clear_handlers.cljs$lang$maxFixedArity = 2;
re_frame.trace = {};
re_frame.trace.id = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0);
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = function() {
  return $APP.cljs.core.reset_BANG_(re_frame.trace.id, 0);
};
re_frame.trace.trace_enabled_QMARK_ = !1;
re_frame.trace.is_trace_enabled_QMARK_ = function() {
  return re_frame.trace.trace_enabled_QMARK_;
};
re_frame.trace.trace_cbs = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY);
re_frame.trace.traces = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentVector.EMPTY);
re_frame.trace.next_delivery = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0);
re_frame.trace.register_trace_cb = function($key$$, $f$$) {
  return re_frame.trace.trace_enabled_QMARK_ ? $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs, $APP.cljs.core.assoc, $key$$, $f$$) : re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(['Tracing is not enabled. Please set {"re_frame.trace.trace_enabled_QMARK_" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.'], 0));
};
re_frame.trace.remove_trace_cb = function($key$$) {
  $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs, $APP.cljs.core.dissoc, $key$$);
  return null;
};
re_frame.trace.next_id = function() {
  return $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id, $APP.cljs.core.inc);
};
re_frame.trace.start_trace = function($operation$$) {
  var $JSCompiler_temp_const$$ = $APP.cljs.core.__destructure_map($operation$$);
  $operation$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$$, $APP.cljs$cst$4512$operation);
  var $op_type$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$$, cljs$cst$5796$op_type), $tags$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$$, $APP.cljs$cst$2121$tags), $JSCompiler_inline_result$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$$, cljs$cst$5797$child_of);
  $JSCompiler_temp_const$$ = $APP.cljs.core.PersistentArrayMap;
  var $JSCompiler_temp_const$jscomp$0$$ = re_frame.trace.next_id();
  $JSCompiler_inline_result$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$$) ? $JSCompiler_inline_result$$ : $APP.cljs$cst$396$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
  return new $JSCompiler_temp_const$$(null, 6, [$APP.cljs$cst$396$id, $JSCompiler_temp_const$jscomp$0$$, $APP.cljs$cst$4512$operation, $operation$$, cljs$cst$5796$op_type, $op_type$$, $APP.cljs$cst$2121$tags, $tags$$, cljs$cst$5797$child_of, $JSCompiler_inline_result$$, $APP.cljs$cst$1574$start, re_frame.interop.now()], null);
};
re_frame.trace.debounce_time = 50;
re_frame.trace.debounce = function($f$$, $interval$$) {
  return $APP.goog.functions.debounce($f$$, $interval$$);
};
re_frame.trace.schedule_debounce = re_frame.trace.debounce(function() {
  for (var $G__78660_seq__78617_78644_seq__78617_78658__$1_temp__5825__auto___78657$$ = $APP.cljs.core.seq($APP.cljs.core.deref(re_frame.trace.trace_cbs)), $G__78661_chunk__78618_78645_k_78665$$ = null, $G__78662_c__5548__auto___78659_cb_78666_count__78619_78646_e_78668_vec__78636_78664$$ = 0, $i__78620_78647$$ = 0;;) {
    if ($i__78620_78647$$ < $G__78662_c__5548__auto___78659_cb_78666_count__78619_78646_e_78668_vec__78636_78664$$) {
      var $cb_78650_e_78652_vec__78631_78648$$ = $G__78661_chunk__78618_78645_k_78665$$.cljs$core$IIndexed$_nth$arity$2(null, $i__78620_78647$$), $k_78649$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($cb_78650_e_78652_vec__78631_78648$$, 0, null);
      $cb_78650_e_78652_vec__78631_78648$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($cb_78650_e_78652_vec__78631_78648$$, 1, null);
      try {
        var $G__78635_78651$$ = $APP.cljs.core.deref(re_frame.trace.traces);
        $cb_78650_e_78652_vec__78631_78648$$.cljs$core$IFn$_invoke$arity$1 ? $cb_78650_e_78652_vec__78631_78648$$.cljs$core$IFn$_invoke$arity$1($G__78635_78651$$) : $cb_78650_e_78652_vec__78631_78648$$.call(null, $G__78635_78651$$);
      } catch ($e78634$$) {
        $cb_78650_e_78652_vec__78631_78648$$ = $e78634$$, re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb", $k_78649$$, "while storing", $APP.cljs.core.deref(re_frame.trace.traces), $cb_78650_e_78652_vec__78631_78648$$], 0));
      }
      $i__78620_78647$$ += 1;
    } else {
      if ($G__78660_seq__78617_78644_seq__78617_78658__$1_temp__5825__auto___78657$$ = $APP.cljs.core.seq($G__78660_seq__78617_78644_seq__78617_78658__$1_temp__5825__auto___78657$$)) {
        if ($APP.cljs.core.chunked_seq_QMARK_($G__78660_seq__78617_78644_seq__78617_78658__$1_temp__5825__auto___78657$$)) {
          $G__78662_c__5548__auto___78659_cb_78666_count__78619_78646_e_78668_vec__78636_78664$$ = $APP.cljs.core.chunk_first($G__78660_seq__78617_78644_seq__78617_78658__$1_temp__5825__auto___78657$$), $G__78660_seq__78617_78644_seq__78617_78658__$1_temp__5825__auto___78657$$ = $APP.cljs.core.chunk_rest($G__78660_seq__78617_78644_seq__78617_78658__$1_temp__5825__auto___78657$$), $G__78661_chunk__78618_78645_k_78665$$ = $G__78662_c__5548__auto___78659_cb_78666_count__78619_78646_e_78668_vec__78636_78664$$, 
          $G__78662_c__5548__auto___78659_cb_78666_count__78619_78646_e_78668_vec__78636_78664$$ = $APP.cljs.core.count($G__78662_c__5548__auto___78659_cb_78666_count__78619_78646_e_78668_vec__78636_78664$$);
        } else {
          $G__78662_c__5548__auto___78659_cb_78666_count__78619_78646_e_78668_vec__78636_78664$$ = $APP.cljs.core.first($G__78660_seq__78617_78644_seq__78617_78658__$1_temp__5825__auto___78657$$);
          $G__78661_chunk__78618_78645_k_78665$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__78662_c__5548__auto___78659_cb_78666_count__78619_78646_e_78668_vec__78636_78664$$, 0, null);
          $G__78662_c__5548__auto___78659_cb_78666_count__78619_78646_e_78668_vec__78636_78664$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__78662_c__5548__auto___78659_cb_78666_count__78619_78646_e_78668_vec__78636_78664$$, 1, null);
          try {
            var $G__78640_78667$$ = $APP.cljs.core.deref(re_frame.trace.traces);
            $G__78662_c__5548__auto___78659_cb_78666_count__78619_78646_e_78668_vec__78636_78664$$.cljs$core$IFn$_invoke$arity$1 ? $G__78662_c__5548__auto___78659_cb_78666_count__78619_78646_e_78668_vec__78636_78664$$.cljs$core$IFn$_invoke$arity$1($G__78640_78667$$) : $G__78662_c__5548__auto___78659_cb_78666_count__78619_78646_e_78668_vec__78636_78664$$.call(null, $G__78640_78667$$);
          } catch ($e78639$$) {
            $G__78662_c__5548__auto___78659_cb_78666_count__78619_78646_e_78668_vec__78636_78664$$ = $e78639$$, re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb", $G__78661_chunk__78618_78645_k_78665$$, "while storing", $APP.cljs.core.deref(re_frame.trace.traces), $G__78662_c__5548__auto___78659_cb_78666_count__78619_78646_e_78668_vec__78636_78664$$], 0));
          }
          $G__78660_seq__78617_78644_seq__78617_78658__$1_temp__5825__auto___78657$$ = $APP.cljs.core.next($G__78660_seq__78617_78644_seq__78617_78658__$1_temp__5825__auto___78657$$);
          $G__78661_chunk__78618_78645_k_78665$$ = null;
          $G__78662_c__5548__auto___78659_cb_78666_count__78619_78646_e_78668_vec__78636_78664$$ = 0;
        }
        $i__78620_78647$$ = 0;
      } else {
        break;
      }
    }
  }
  return $APP.cljs.core.reset_BANG_(re_frame.trace.traces, $APP.cljs.core.PersistentVector.EMPTY);
}, re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = function($now$$) {
  return $APP.cljs.core.deref(re_frame.trace.next_delivery) - 25 < $now$$ ? (re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null), $APP.cljs.core.reset_BANG_(re_frame.trace.next_delivery, $now$$ + re_frame.trace.debounce_time)) : null;
};
re_frame.interceptor = {};
re_frame.interceptor.mandatory_interceptor_keys = new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$5798$after, null, $APP.cljs$cst$396$id, null, cljs$cst$5799$before, null], null), null);
re_frame.interceptor.interceptor_QMARK_ = function($m$$) {
  return $APP.cljs.core.map_QMARK_($m$$) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.mandatory_interceptor_keys, $APP.cljs.core.set($APP.cljs.core.keys($m$$)));
};
re_frame.interceptor.__GT_interceptor = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$340_argseq__5756__auto__$$ = [], $len__5749__auto___78728$$ = arguments.length, $i__5750__auto___78729$$ = 0;;) {
    if ($i__5750__auto___78729$$ < $len__5749__auto___78728$$) {
      $args__5755__auto__$jscomp$340_argseq__5756__auto__$$.push(arguments[$i__5750__auto___78729$$]), $i__5750__auto___78729$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$340_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$340_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$340_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$340_argseq__5756__auto__$$);
};
re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = function($before$$) {
  var $JSCompiler_temp_const$$ = $APP.cljs.core.__destructure_map($before$$), $JSCompiler_inline_result$jscomp$1955_id$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$$, $APP.cljs$cst$396$id);
  $before$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$$, cljs$cst$5799$before);
  var $after$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$$, cljs$cst$5798$after);
  if (re_frame.interop.debug_enabled_QMARK_) {
    var $temp__5823__auto___78731$$ = $APP.cljs.core.seq($APP.clojure.set.difference.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.set($APP.cljs.core.keys($JSCompiler_temp_const$$)), re_frame.interceptor.mandatory_interceptor_keys));
    $temp__5823__auto___78731$$ && re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: -\x3einterceptor", $JSCompiler_temp_const$$, "has unknown keys:", $temp__5823__auto___78731$$], 0));
  }
  $JSCompiler_temp_const$$ = $APP.cljs.core.PersistentArrayMap;
  $JSCompiler_inline_result$jscomp$1955_id$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$1955_id$$) ? $JSCompiler_inline_result$jscomp$1955_id$$ : cljs$cst$5800$unnamed;
  return new $JSCompiler_temp_const$$(null, 3, [$APP.cljs$cst$396$id, $JSCompiler_inline_result$jscomp$1955_id$$, cljs$cst$5799$before, $before$$, cljs$cst$5798$after, $after$$], null);
};
re_frame.interceptor.__GT_interceptor.cljs$lang$maxFixedArity = 0;
re_frame.interceptor.__GT_interceptor.cljs$lang$applyTo = function($seq78673$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq78673$$));
};
re_frame.interceptor.get_effect = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1 = function($context$$) {
  return $APP.cljs$cst$4926$effects.cljs$core$IFn$_invoke$arity$1($context$$);
};
re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2 = function($context$$, $key$$) {
  return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($context$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$4926$effects, $key$$], null));
};
re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3 = function($context$$, $key$$, $not_found$$) {
  return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$3($context$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$4926$effects, $key$$], null), $not_found$$);
};
re_frame.interceptor.get_effect.cljs$lang$maxFixedArity = 3;
re_frame.interceptor.assoc_effect = function($context$$, $key$$, $value$$) {
  return $APP.cljs.core.assoc_in($context$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$4926$effects, $key$$], null), $value$$);
};
re_frame.interceptor.update_effect = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$341_argseq__5756__auto__$$ = [], $len__5749__auto___78742$$ = arguments.length, $i__5750__auto___78743$$ = 0;;) {
    if ($i__5750__auto___78743$$ < $len__5749__auto___78742$$) {
      $args__5755__auto__$jscomp$341_argseq__5756__auto__$$.push(arguments[$i__5750__auto___78743$$]), $i__5750__auto___78743$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$341_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$341_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$341_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return re_frame.interceptor.update_effect.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$341_argseq__5756__auto__$$);
};
re_frame.interceptor.update_effect.cljs$core$IFn$_invoke$arity$variadic = function($context$$, $key$$, $f$$, $args$$) {
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$5($APP.cljs.core.update_in, $context$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$4926$effects, $key$$], null), $f$$, $args$$);
};
re_frame.interceptor.update_effect.cljs$lang$maxFixedArity = 3;
re_frame.interceptor.update_effect.cljs$lang$applyTo = function($G__78693_seq78691$$) {
  var $G__78692$$ = $APP.cljs.core.first($G__78693_seq78691$$), $G__78694_seq78691__$1$$ = $APP.cljs.core.next($G__78693_seq78691$$);
  $G__78693_seq78691$$ = $APP.cljs.core.first($G__78694_seq78691__$1$$);
  var $seq78691__$2_seq78691__$3$$ = $APP.cljs.core.next($G__78694_seq78691__$1$$);
  $G__78694_seq78691__$1$$ = $APP.cljs.core.first($seq78691__$2_seq78691__$3$$);
  $seq78691__$2_seq78691__$3$$ = $APP.cljs.core.next($seq78691__$2_seq78691__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__78692$$, $G__78693_seq78691$$, $G__78694_seq78691__$1$$, $seq78691__$2_seq78691__$3$$);
};
re_frame.interceptor.get_coeffect = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1 = function($context$$) {
  return cljs$cst$5801$coeffects.cljs$core$IFn$_invoke$arity$1($context$$);
};
re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2 = function($context$$, $key$$) {
  return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($context$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5801$coeffects, $key$$], null));
};
re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3 = function($context$$, $key$$, $not_found$$) {
  return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$3($context$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5801$coeffects, $key$$], null), $not_found$$);
};
re_frame.interceptor.get_coeffect.cljs$lang$maxFixedArity = 3;
re_frame.interceptor.assoc_coeffect = function($context$$, $key$$, $value$$) {
  return $APP.cljs.core.assoc_in($context$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5801$coeffects, $key$$], null), $value$$);
};
re_frame.interceptor.update_coeffect = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$342_argseq__5756__auto__$$ = [], $len__5749__auto___78746$$ = arguments.length, $i__5750__auto___78747$$ = 0;;) {
    if ($i__5750__auto___78747$$ < $len__5749__auto___78746$$) {
      $args__5755__auto__$jscomp$342_argseq__5756__auto__$$.push(arguments[$i__5750__auto___78747$$]), $i__5750__auto___78747$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$342_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$342_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$342_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$342_argseq__5756__auto__$$);
};
re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic = function($context$$, $key$$, $f$$, $args$$) {
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$5($APP.cljs.core.update_in, $context$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5801$coeffects, $key$$], null), $f$$, $args$$);
};
re_frame.interceptor.update_coeffect.cljs$lang$maxFixedArity = 3;
re_frame.interceptor.update_coeffect.cljs$lang$applyTo = function($G__78710_seq78708$$) {
  var $G__78709$$ = $APP.cljs.core.first($G__78710_seq78708$$), $G__78711_seq78708__$1$$ = $APP.cljs.core.next($G__78710_seq78708$$);
  $G__78710_seq78708$$ = $APP.cljs.core.first($G__78711_seq78708__$1$$);
  var $seq78708__$2_seq78708__$3$$ = $APP.cljs.core.next($G__78711_seq78708__$1$$);
  $G__78711_seq78708__$1$$ = $APP.cljs.core.first($seq78708__$2_seq78708__$3$$);
  $seq78708__$2_seq78708__$3$$ = $APP.cljs.core.next($seq78708__$2_seq78708__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__78709$$, $G__78710_seq78708$$, $G__78711_seq78708__$1$$, $seq78708__$2_seq78708__$3$$);
};
re_frame.interceptor.invoke_interceptor_fn = function($context$$, $interceptor$jscomp$4_temp__5823__auto__$$, $direction$$) {
  $interceptor$jscomp$4_temp__5823__auto__$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($interceptor$jscomp$4_temp__5823__auto__$$, $direction$$);
  return $APP.cljs.core.truth_($interceptor$jscomp$4_temp__5823__auto__$$) ? $interceptor$jscomp$4_temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $interceptor$jscomp$4_temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1($context$$) : $interceptor$jscomp$4_temp__5823__auto__$$.call(null, $context$$) : $context$$;
};
re_frame.interceptor.invoke_interceptors = function($context$jscomp$75_context__$1$$, $direction$$) {
  for (;;) {
    var $queue$$ = $APP.cljs$cst$1664$queue.cljs$core$IFn$_invoke$arity$1($context$jscomp$75_context__$1$$);
    if ($APP.cljs.core.empty_QMARK_($queue$$)) {
      return $context$jscomp$75_context__$1$$;
    }
    var $interceptor$$ = $APP.cljs.core.peek($queue$$), $stack$$ = $APP.cljs$cst$374$stack.cljs$core$IFn$_invoke$arity$1($context$jscomp$75_context__$1$$);
    $context$jscomp$75_context__$1$$ = re_frame.interceptor.invoke_interceptor_fn($APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic($context$jscomp$75_context__$1$$, $APP.cljs$cst$1664$queue, $APP.cljs.core.pop($queue$$), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$374$stack, $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($stack$$, $interceptor$$)], 0)), $interceptor$$, $direction$$);
  }
};
re_frame.interceptor.enqueue = function($context$$, $interceptors$$) {
  return $APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4($context$$, $APP.cljs$cst$1664$queue, $APP.cljs.core.fnil.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.into, re_frame.interop.empty_queue), $interceptors$$);
};
re_frame.interceptor.context = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2 = function($event$$, $interceptors$$) {
  return re_frame.interceptor.enqueue(re_frame.interceptor.assoc_coeffect(re_frame.interceptor.assoc_coeffect($APP.cljs.core.PersistentArrayMap.EMPTY, $APP.cljs$cst$1735$event, $event$$), cljs$cst$5802$original_event, $event$$), $interceptors$$);
};
re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$3 = function($event$$, $interceptors$$, $db$$) {
  return re_frame.interceptor.assoc_coeffect(re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2($event$$, $interceptors$$), $APP.cljs$cst$2457$db, $db$$);
};
re_frame.interceptor.context.cljs$lang$maxFixedArity = 3;
re_frame.interceptor.change_direction = function($context$$) {
  return re_frame.interceptor.enqueue($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($context$$, $APP.cljs$cst$1664$queue), $APP.cljs$cst$374$stack.cljs$core$IFn$_invoke$arity$1($context$$));
};
re_frame.interceptor.execute = function($event_v$$, $interceptors$$) {
  if (re_frame.trace.is_trace_enabled_QMARK_()) {
    var $new_trace__78597__auto___78759$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2640$interceptors, 
    $interceptors$$], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2640$interceptors, $interceptors$$], null)], null), $APP.cljs$cst$2121$tags)], 0));
    re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78759$$;
  }
  return re_frame.interceptor.invoke_interceptors(re_frame.interceptor.change_direction(re_frame.interceptor.invoke_interceptors(re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2($event_v$$, $interceptors$$), cljs$cst$5799$before)), cljs$cst$5798$after);
};
re_frame.events = {};
re_frame.events.kind = $APP.cljs$cst$1735$event;
re_frame.events.flatten_and_remove_nils = function($id$$, $chain$jscomp$2_interceptors$$) {
  if (re_frame.interop.debug_enabled_QMARK_) {
    $APP.cljs.core.coll_QMARK_($chain$jscomp$2_interceptors$$) || re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering", $id$$, ", expected a collection of interceptors, got:", $chain$jscomp$2_interceptors$$], 0));
    $chain$jscomp$2_interceptors$$ = $APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.nil_QMARK_, $APP.cljs.core.flatten($chain$jscomp$2_interceptors$$));
    $APP.cljs.core.empty_QMARK_($chain$jscomp$2_interceptors$$) && re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering", $id$$, ", given an empty interceptor chain"], 0));
    var $temp__5825__auto___78775$$ = $APP.cljs.core.first($APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.interceptor_QMARK_, $chain$jscomp$2_interceptors$$));
    $APP.cljs.core.truth_($temp__5825__auto___78775$$) && ($APP.cljs.core.fn_QMARK_($temp__5825__auto___78775$$) ? re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering", $id$$, ", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:", $temp__5825__auto___78775$$], 0)) : re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, 
    $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering", $id$$, ", expected interceptors, but got:", $temp__5825__auto___78775$$], 0)));
    return $chain$jscomp$2_interceptors$$;
  }
  return $APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.nil_QMARK_, $APP.cljs.core.flatten($chain$jscomp$2_interceptors$$));
};
re_frame.events.register = function($id$$, $interceptors$$) {
  return re_frame.registrar.register_handler(re_frame.events.kind, $id$$, re_frame.events.flatten_and_remove_nils($id$$, $interceptors$$));
};
re_frame.events._STAR_handling_STAR_ = null;
re_frame.events.handle = function($event_v$$) {
  var $event_id$$ = re_frame.utils.first_in_vector($event_v$$), $temp__5823__auto__$$ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.events.kind, $event_id$$, !0);
  if ($APP.cljs.core.truth_($temp__5823__auto__$$)) {
    if ($APP.cljs.core.truth_(re_frame.events._STAR_handling_STAR_)) {
      return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: while handling", re_frame.events._STAR_handling_STAR_, ", dispatch-sync was called for", $event_v$$, ". You can't call dispatch-sync within an event handler."], 0));
    }
    var $_STAR_handling_STAR__orig_val__78760$$ = re_frame.events._STAR_handling_STAR_;
    re_frame.events._STAR_handling_STAR_ = $event_v$$;
    try {
      if (re_frame.trace.is_trace_enabled_QMARK_()) {
        var $_STAR_current_trace_STAR__orig_val__78762$$ = re_frame.trace._STAR_current_trace_STAR_, $_STAR_current_trace_STAR__temp_val__78763$$ = re_frame.trace.start_trace(new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$4512$operation, $event_id$$, cljs$cst$5796$op_type, re_frame.events.kind, $APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1735$event, $event_v$$], null)], null));
        re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__temp_val__78763$$;
        try {
          try {
            if (re_frame.trace.is_trace_enabled_QMARK_()) {
              var $new_trace__78597__auto___78781$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5803$app_db_before, 
              $APP.cljs.core.deref(re_frame.db.app_db)], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5803$app_db_before, $APP.cljs.core.deref(re_frame.db.app_db)], null)], null), $APP.cljs$cst$2121$tags)], 0));
              re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78781$$;
            }
            re_frame.interceptor.execute($event_v$$, $temp__5823__auto__$$);
            if (re_frame.trace.is_trace_enabled_QMARK_()) {
              var $new_trace__78597__auto___78782$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5804$app_db_after, 
              $APP.cljs.core.deref(re_frame.db.app_db)], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5804$app_db_after, $APP.cljs.core.deref(re_frame.db.app_db)], null)], null), $APP.cljs$cst$2121$tags)], 0));
              re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78782$$;
            }
            return null;
          } finally {
            if (re_frame.trace.is_trace_enabled_QMARK_()) {
              var $end__78595__auto___78783$$ = re_frame.interop.now(), $duration__78596__auto___78784$$ = $end__78595__auto___78783$$ - $APP.cljs$cst$1574$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
              $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces, $APP.cljs.core.conj, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_, cljs$cst$5805$duration, $duration__78596__auto___78784$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$1575$end, re_frame.interop.now()], 0)));
              re_frame.trace.run_tracing_callbacks_BANG_($end__78595__auto___78783$$);
            }
          }
        } finally {
          re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__orig_val__78762$$;
        }
      } else {
        if (re_frame.trace.is_trace_enabled_QMARK_()) {
          var $new_trace__78597__auto___78785$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5803$app_db_before, 
          $APP.cljs.core.deref(re_frame.db.app_db)], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5803$app_db_before, $APP.cljs.core.deref(re_frame.db.app_db)], null)], null), $APP.cljs$cst$2121$tags)], 0));
          re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78785$$;
        }
        re_frame.interceptor.execute($event_v$$, $temp__5823__auto__$$);
        if (re_frame.trace.is_trace_enabled_QMARK_()) {
          var $new_trace__78597__auto___78786$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5804$app_db_after, 
          $APP.cljs.core.deref(re_frame.db.app_db)], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5804$app_db_after, $APP.cljs.core.deref(re_frame.db.app_db)], null)], null), $APP.cljs$cst$2121$tags)], 0));
          re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78786$$;
        }
        return null;
      }
    } finally {
      re_frame.events._STAR_handling_STAR_ = $_STAR_handling_STAR__orig_val__78760$$;
    }
  } else {
    return null;
  }
};
re_frame.subs = {};
re_frame.subs.kind = cljs$cst$5793$sub;
re_frame.subs.query__GT_reaction = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY);
re_frame.subs.clear_subscription_cache_BANG_ = function() {
  for (var $G__78801_seq__78678_78787_seq__78678_78799__$1_temp__5825__auto___78798$$ = $APP.cljs.core.seq($APP.cljs.core.deref(re_frame.subs.query__GT_reaction)), $G__78802_chunk__78679_78788_rxn_78807_vec__78695_78805$$ = null, $G__78803_c__5548__auto___78800_count__78680_78789$$ = 0, $i__78681_78790$$ = 0;;) {
    if ($i__78681_78790$$ < $G__78803_c__5548__auto___78800_count__78680_78789$$) {
      var $rxn_78793_vec__78688_78791$$ = $G__78802_chunk__78679_78788_rxn_78807_vec__78695_78805$$.cljs$core$IIndexed$_nth$arity$2(null, $i__78681_78790$$);
      $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($rxn_78793_vec__78688_78791$$, 0, null);
      $rxn_78793_vec__78688_78791$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($rxn_78793_vec__78688_78791$$, 1, null);
      re_frame.interop.dispose_BANG_($rxn_78793_vec__78688_78791$$);
      $i__78681_78790$$ += 1;
    } else {
      if ($G__78801_seq__78678_78787_seq__78678_78799__$1_temp__5825__auto___78798$$ = $APP.cljs.core.seq($G__78801_seq__78678_78787_seq__78678_78799__$1_temp__5825__auto___78798$$)) {
        $APP.cljs.core.chunked_seq_QMARK_($G__78801_seq__78678_78787_seq__78678_78799__$1_temp__5825__auto___78798$$) ? ($G__78803_c__5548__auto___78800_count__78680_78789$$ = $APP.cljs.core.chunk_first($G__78801_seq__78678_78787_seq__78678_78799__$1_temp__5825__auto___78798$$), $G__78801_seq__78678_78787_seq__78678_78799__$1_temp__5825__auto___78798$$ = $APP.cljs.core.chunk_rest($G__78801_seq__78678_78787_seq__78678_78799__$1_temp__5825__auto___78798$$), $G__78802_chunk__78679_78788_rxn_78807_vec__78695_78805$$ = 
        $G__78803_c__5548__auto___78800_count__78680_78789$$, $G__78803_c__5548__auto___78800_count__78680_78789$$ = $APP.cljs.core.count($G__78803_c__5548__auto___78800_count__78680_78789$$)) : ($G__78802_chunk__78679_78788_rxn_78807_vec__78695_78805$$ = $APP.cljs.core.first($G__78801_seq__78678_78787_seq__78678_78799__$1_temp__5825__auto___78798$$), $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__78802_chunk__78679_78788_rxn_78807_vec__78695_78805$$, 0, null), $G__78802_chunk__78679_78788_rxn_78807_vec__78695_78805$$ = 
        $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__78802_chunk__78679_78788_rxn_78807_vec__78695_78805$$, 1, null), re_frame.interop.dispose_BANG_($G__78802_chunk__78679_78788_rxn_78807_vec__78695_78805$$), $G__78801_seq__78678_78787_seq__78678_78799__$1_temp__5825__auto___78798$$ = $APP.cljs.core.next($G__78801_seq__78678_78787_seq__78678_78799__$1_temp__5825__auto___78798$$), $G__78802_chunk__78679_78788_rxn_78807_vec__78695_78805$$ = null, $G__78803_c__5548__auto___78800_count__78680_78789$$ = 
        0), $i__78681_78790$$ = 0;
      } else {
        break;
      }
    }
  }
  return $APP.cljs.core.truth_($APP.cljs.core.not_empty($APP.cljs.core.deref(re_frame.subs.query__GT_reaction))) ? re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: The subscription cache isn't empty after being cleared"], 0)) : null;
};
re_frame.subs.clear_all_handlers_BANG_ = function() {
  re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind);
  return re_frame.subs.clear_subscription_cache_BANG_();
};
re_frame.subs.cache_and_return = function($query_v$$, $dynv_new_trace__78597__auto___78814$$, $r$$) {
  var $cache_key$$ = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$query_v$$, $dynv_new_trace__78597__auto___78814$$], null);
  re_frame.interop.add_on_dispose_BANG_($r$$, function() {
    if (re_frame.trace.is_trace_enabled_QMARK_()) {
      var $_STAR_current_trace_STAR__orig_val__78698$$ = re_frame.trace._STAR_current_trace_STAR_, $_STAR_current_trace_STAR__temp_val__78699$$ = re_frame.trace.start_trace(new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$4512$operation, re_frame.utils.first_in_vector($query_v$$), cljs$cst$5796$op_type, cljs$cst$5806$sub_SLASH_dispose, $APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5807$query_v, $query_v$$, cljs$cst$5808$reaction, re_frame.interop.reagent_id($r$$)], 
      null)], null));
      re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__temp_val__78699$$;
      try {
        try {
          return $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.subs.query__GT_reaction, function($query_cache$$) {
            return $APP.cljs.core.contains_QMARK_($query_cache$$, $cache_key$$) && $r$$ === $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($query_cache$$, $cache_key$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($query_cache$$, $cache_key$$) : $query_cache$$;
          });
        } finally {
          if (re_frame.trace.is_trace_enabled_QMARK_()) {
            var $end__78595__auto___78812$$ = re_frame.interop.now(), $duration__78596__auto___78813$$ = $end__78595__auto___78812$$ - $APP.cljs$cst$1574$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
            $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces, $APP.cljs.core.conj, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_, cljs$cst$5805$duration, $duration__78596__auto___78813$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$1575$end, re_frame.interop.now()], 0)));
            re_frame.trace.run_tracing_callbacks_BANG_($end__78595__auto___78812$$);
          }
        }
      } finally {
        re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__orig_val__78698$$;
      }
    } else {
      return $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.subs.query__GT_reaction, function($query_cache$$) {
        return $APP.cljs.core.contains_QMARK_($query_cache$$, $cache_key$$) && $r$$ === $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($query_cache$$, $cache_key$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($query_cache$$, $cache_key$$) : $query_cache$$;
      });
    }
  });
  $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.subs.query__GT_reaction, function($query_cache$$) {
    re_frame.interop.debug_enabled_QMARK_ && $APP.cljs.core.contains_QMARK_($query_cache$$, $cache_key$$) && re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: Adding a new subscription to the cache while there is an existing subscription in the cache", $cache_key$$], 0));
    return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($query_cache$$, $cache_key$$, $r$$);
  });
  re_frame.trace.is_trace_enabled_QMARK_() && ($dynv_new_trace__78597__auto___78814$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 
  1, [cljs$cst$5808$reaction, re_frame.interop.reagent_id($r$$)], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5808$reaction, re_frame.interop.reagent_id($r$$)], null)], null), $APP.cljs$cst$2121$tags)], 0)), re_frame.trace._STAR_current_trace_STAR_ = $dynv_new_trace__78597__auto___78814$$);
  return $r$$;
};
re_frame.subs.cache_lookup = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = function($query_v$$) {
  return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2($query_v$$, $APP.cljs.core.PersistentVector.EMPTY);
};
re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = function($query_v$$, $dyn_v$$) {
  return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.deref(re_frame.subs.query__GT_reaction), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$query_v$$, $dyn_v$$], null));
};
re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;
re_frame.subs.warn_when_not_reactive = function() {
  return re_frame.interop.debug_enabled_QMARK_ && !re_frame.interop.reactive_QMARK_() ? re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: Subscribe was called outside of a reactive context.\n", "See: https://day8.github.io/re-frame/FAQs/UseASubscriptionInAJsEvent/\n", "https://day8.github.io/re-frame/FAQs/UseASubscriptionInAnEventHandler/"], 0)) : null;
};
re_frame.subs.subscribe = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = function($new_trace__78597__auto___78822_new_trace__78597__auto___78824_query$$) {
  re_frame.subs.warn_when_not_reactive();
  if (re_frame.trace.is_trace_enabled_QMARK_()) {
    var $_STAR_current_trace_STAR__orig_val__78706_new_trace__78597__auto___78823$$ = re_frame.trace._STAR_current_trace_STAR_, $_STAR_current_trace_STAR__temp_val__78707$$ = re_frame.trace.start_trace(new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$4512$operation, re_frame.utils.first_in_vector($new_trace__78597__auto___78822_new_trace__78597__auto___78824_query$$), cljs$cst$5796$op_type, cljs$cst$5809$sub_SLASH_create, $APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 
    1, [cljs$cst$5807$query_v, $new_trace__78597__auto___78822_new_trace__78597__auto___78824_query$$], null)], null));
    re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__temp_val__78707$$;
    try {
      try {
        var $temp__5823__auto__$$ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1($new_trace__78597__auto___78822_new_trace__78597__auto___78824_query$$);
        if ($APP.cljs.core.truth_($temp__5823__auto__$$)) {
          var $cached$$ = $temp__5823__auto__$$;
          if (re_frame.trace.is_trace_enabled_QMARK_()) {
            var $new_trace__78597__auto___78817$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5810$cached_QMARK_, 
            !0, cljs$cst$5808$reaction, re_frame.interop.reagent_id($cached$$)], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5810$cached_QMARK_, !0, cljs$cst$5808$reaction, re_frame.interop.reagent_id($cached$$)], null)], null), $APP.cljs$cst$2121$tags)], 0));
            re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78817$$;
          }
          return $cached$$;
        }
        $cached$$ = re_frame.utils.first_in_vector($new_trace__78597__auto___78822_new_trace__78597__auto___78824_query$$);
        var $handler_fn$$ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind, $cached$$);
        if (re_frame.trace.is_trace_enabled_QMARK_()) {
          var $new_trace__78597__auto___78818$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5810$cached_QMARK_, 
          !1], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5810$cached_QMARK_, !1], null)], null), $APP.cljs$cst$2121$tags)], 0));
          re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78818$$;
        }
        if ($handler_fn$$ == null) {
          if (re_frame.trace.is_trace_enabled_QMARK_()) {
            var $new_trace__78597__auto___78819$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1404$error, !0], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 
            1, [$APP.cljs$cst$1404$error, !0], null), $APP.cljs$cst$2121$tags)], 0));
            re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78819$$;
          }
          return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($cached$$), ". Returning a nil subscription."].join("")], 0));
        }
        return re_frame.subs.cache_and_return($new_trace__78597__auto___78822_new_trace__78597__auto___78824_query$$, $APP.cljs.core.PersistentVector.EMPTY, $handler_fn$$.cljs$core$IFn$_invoke$arity$2 ? $handler_fn$$.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db, $new_trace__78597__auto___78822_new_trace__78597__auto___78824_query$$) : $handler_fn$$.call(null, re_frame.db.app_db, $new_trace__78597__auto___78822_new_trace__78597__auto___78824_query$$));
      } finally {
        if (re_frame.trace.is_trace_enabled_QMARK_()) {
          var $end__78595__auto___78820$$ = re_frame.interop.now(), $duration__78596__auto___78821$$ = $end__78595__auto___78820$$ - $APP.cljs$cst$1574$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
          $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces, $APP.cljs.core.conj, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_, cljs$cst$5805$duration, $duration__78596__auto___78821$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$1575$end, re_frame.interop.now()], 0)));
          re_frame.trace.run_tracing_callbacks_BANG_($end__78595__auto___78820$$);
        }
      }
    } finally {
      re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__orig_val__78706_new_trace__78597__auto___78823$$;
    }
  } else {
    $temp__5823__auto__$$ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1($new_trace__78597__auto___78822_new_trace__78597__auto___78824_query$$);
    if ($APP.cljs.core.truth_($temp__5823__auto__$$)) {
      return $cached$$ = $temp__5823__auto__$$, re_frame.trace.is_trace_enabled_QMARK_() && ($new_trace__78597__auto___78822_new_trace__78597__auto___78824_query$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 
      1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5810$cached_QMARK_, !0, cljs$cst$5808$reaction, re_frame.interop.reagent_id($cached$$)], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5810$cached_QMARK_, !0, cljs$cst$5808$reaction, re_frame.interop.reagent_id($cached$$)], null)], null), $APP.cljs$cst$2121$tags)], 
      0)), re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78822_new_trace__78597__auto___78824_query$$), $cached$$;
    }
    $cached$$ = re_frame.utils.first_in_vector($new_trace__78597__auto___78822_new_trace__78597__auto___78824_query$$);
    $handler_fn$$ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind, $cached$$);
    re_frame.trace.is_trace_enabled_QMARK_() && ($_STAR_current_trace_STAR__orig_val__78706_new_trace__78597__auto___78823$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, 
    new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5810$cached_QMARK_, !1], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5810$cached_QMARK_, !1], null)], null), $APP.cljs$cst$2121$tags)], 0)), re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__orig_val__78706_new_trace__78597__auto___78823$$);
    return $handler_fn$$ == null ? (re_frame.trace.is_trace_enabled_QMARK_() && ($new_trace__78597__auto___78822_new_trace__78597__auto___78824_query$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 
    1, [$APP.cljs$cst$1404$error, !0], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1404$error, !0], null), $APP.cljs$cst$2121$tags)], 0)), re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78822_new_trace__78597__auto___78824_query$$), re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: ", 
    $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($cached$$), ". Returning a nil subscription."].join("")], 0))) : re_frame.subs.cache_and_return($new_trace__78597__auto___78822_new_trace__78597__auto___78824_query$$, $APP.cljs.core.PersistentVector.EMPTY, $handler_fn$$.cljs$core$IFn$_invoke$arity$2 ? $handler_fn$$.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db, $new_trace__78597__auto___78822_new_trace__78597__auto___78824_query$$) : $handler_fn$$.call(null, re_frame.db.app_db, $new_trace__78597__auto___78822_new_trace__78597__auto___78824_query$$));
  }
};
re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = function($query$$, $dynv$$) {
  re_frame.subs.warn_when_not_reactive();
  if (re_frame.trace.is_trace_enabled_QMARK_()) {
    var $_STAR_current_trace_STAR__orig_val__78712_new_trace__78597__auto___78832_new_trace__78597__auto___78833_new_trace__78597__auto___78836_temp__5825__auto___78834$$ = re_frame.trace._STAR_current_trace_STAR_, $_STAR_current_trace_STAR__temp_val__78713$$ = re_frame.trace.start_trace(new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$4512$operation, re_frame.utils.first_in_vector($query$$), cljs$cst$5796$op_type, cljs$cst$5809$sub_SLASH_create, $APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 
    2, [cljs$cst$5807$query_v, $query$$, cljs$cst$5811$dyn_v, $dynv$$], null)], null));
    re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__temp_val__78713$$;
    try {
      try {
        var $temp__5823__auto__$$ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2($query$$, $dynv$$);
        if ($APP.cljs.core.truth_($temp__5823__auto__$$)) {
          var $cached$jscomp$5_query_id$$ = $temp__5823__auto__$$;
          if (re_frame.trace.is_trace_enabled_QMARK_()) {
            var $new_trace__78597__auto___78825$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5810$cached_QMARK_, 
            !0, cljs$cst$5808$reaction, re_frame.interop.reagent_id($cached$jscomp$5_query_id$$)], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5810$cached_QMARK_, !0, cljs$cst$5808$reaction, re_frame.interop.reagent_id($cached$jscomp$5_query_id$$)], null)], null), $APP.cljs$cst$2121$tags)], 0));
            re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78825$$;
          }
          return $cached$jscomp$5_query_id$$;
        }
        $cached$jscomp$5_query_id$$ = re_frame.utils.first_in_vector($query$$);
        var $handler_fn$$ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind, $cached$jscomp$5_query_id$$);
        if (re_frame.trace.is_trace_enabled_QMARK_()) {
          var $new_trace__78597__auto___78826$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5810$cached_QMARK_, 
          !1], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5810$cached_QMARK_, !1], null)], null), $APP.cljs$cst$2121$tags)], 0));
          re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78826$$;
        }
        if (re_frame.interop.debug_enabled_QMARK_) {
          var $temp__5825__auto___78827$$ = $APP.cljs.core.not_empty($APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_, $dynv$$));
          $APP.cljs.core.truth_($temp__5825__auto___78827$$) && re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:", $temp__5825__auto___78827$$], 0));
        }
        if ($handler_fn$$ == null) {
          if (re_frame.trace.is_trace_enabled_QMARK_()) {
            var $new_trace__78597__auto___78829$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1404$error, !0], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 
            1, [$APP.cljs$cst$1404$error, !0], null), $APP.cljs$cst$2121$tags)], 0));
            re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78829$$;
          }
          return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($cached$jscomp$5_query_id$$), ". Returning a nil subscription."].join("")], 0));
        }
        var $dyn_vals$$ = re_frame.interop.make_reaction(function() {
          return $APP.cljs.core.mapv.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.deref, $dynv$$);
        }), $sub$$ = re_frame.interop.make_reaction(function() {
          var $G__78714$$ = re_frame.db.app_db, $G__78716$$ = $APP.cljs.core.deref($dyn_vals$$);
          return $handler_fn$$.cljs$core$IFn$_invoke$arity$3 ? $handler_fn$$.cljs$core$IFn$_invoke$arity$3($G__78714$$, $query$$, $G__78716$$) : $handler_fn$$.call(null, $G__78714$$, $query$$, $G__78716$$);
        });
        return re_frame.subs.cache_and_return($query$$, $dynv$$, re_frame.interop.make_reaction(function() {
          return $APP.cljs.core.deref($APP.cljs.core.deref($sub$$));
        }));
      } finally {
        if (re_frame.trace.is_trace_enabled_QMARK_()) {
          var $end__78595__auto___78830$$ = re_frame.interop.now(), $duration__78596__auto___78831$$ = $end__78595__auto___78830$$ - $APP.cljs$cst$1574$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
          $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces, $APP.cljs.core.conj, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_, cljs$cst$5805$duration, $duration__78596__auto___78831$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$1575$end, re_frame.interop.now()], 0)));
          re_frame.trace.run_tracing_callbacks_BANG_($end__78595__auto___78830$$);
        }
      }
    } finally {
      re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__orig_val__78712_new_trace__78597__auto___78832_new_trace__78597__auto___78833_new_trace__78597__auto___78836_temp__5825__auto___78834$$;
    }
  } else {
    $temp__5823__auto__$$ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2($query$$, $dynv$$);
    if ($APP.cljs.core.truth_($temp__5823__auto__$$)) {
      return $cached$jscomp$5_query_id$$ = $temp__5823__auto__$$, re_frame.trace.is_trace_enabled_QMARK_() && ($_STAR_current_trace_STAR__orig_val__78712_new_trace__78597__auto___78832_new_trace__78597__auto___78833_new_trace__78597__auto___78836_temp__5825__auto___78834$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, 
      $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5810$cached_QMARK_, !0, cljs$cst$5808$reaction, re_frame.interop.reagent_id($cached$jscomp$5_query_id$$)], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 
      2, [cljs$cst$5810$cached_QMARK_, !0, cljs$cst$5808$reaction, re_frame.interop.reagent_id($cached$jscomp$5_query_id$$)], null)], null), $APP.cljs$cst$2121$tags)], 0)), re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__orig_val__78712_new_trace__78597__auto___78832_new_trace__78597__auto___78833_new_trace__78597__auto___78836_temp__5825__auto___78834$$), $cached$jscomp$5_query_id$$;
    }
    $cached$jscomp$5_query_id$$ = re_frame.utils.first_in_vector($query$$);
    $handler_fn$$ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind, $cached$jscomp$5_query_id$$);
    re_frame.trace.is_trace_enabled_QMARK_() && ($_STAR_current_trace_STAR__orig_val__78712_new_trace__78597__auto___78832_new_trace__78597__auto___78833_new_trace__78597__auto___78836_temp__5825__auto___78834$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 
    1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5810$cached_QMARK_, !1], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5810$cached_QMARK_, !1], null)], null), $APP.cljs$cst$2121$tags)], 0)), re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__orig_val__78712_new_trace__78597__auto___78832_new_trace__78597__auto___78833_new_trace__78597__auto___78836_temp__5825__auto___78834$$);
    re_frame.interop.debug_enabled_QMARK_ && ($_STAR_current_trace_STAR__orig_val__78712_new_trace__78597__auto___78832_new_trace__78597__auto___78833_new_trace__78597__auto___78836_temp__5825__auto___78834$$ = $APP.cljs.core.not_empty($APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_, $dynv$$)), $APP.cljs.core.truth_($_STAR_current_trace_STAR__orig_val__78712_new_trace__78597__auto___78832_new_trace__78597__auto___78833_new_trace__78597__auto___78836_temp__5825__auto___78834$$) && 
    re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:", $_STAR_current_trace_STAR__orig_val__78712_new_trace__78597__auto___78832_new_trace__78597__auto___78833_new_trace__78597__auto___78836_temp__5825__auto___78834$$], 0)));
    if ($handler_fn$$ == null) {
      return re_frame.trace.is_trace_enabled_QMARK_() && ($_STAR_current_trace_STAR__orig_val__78712_new_trace__78597__auto___78832_new_trace__78597__auto___78833_new_trace__78597__auto___78836_temp__5825__auto___78834$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 
      1, [$APP.cljs$cst$1404$error, !0], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1404$error, !0], null), $APP.cljs$cst$2121$tags)], 0)), re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__orig_val__78712_new_trace__78597__auto___78832_new_trace__78597__auto___78833_new_trace__78597__auto___78836_temp__5825__auto___78834$$), re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, 
      $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($cached$jscomp$5_query_id$$), ". Returning a nil subscription."].join("")], 0));
    }
    $dyn_vals$$ = re_frame.interop.make_reaction(function() {
      return $APP.cljs.core.mapv.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.deref, $dynv$$);
    });
    $sub$$ = re_frame.interop.make_reaction(function() {
      var $G__78717$$ = re_frame.db.app_db, $G__78719$$ = $APP.cljs.core.deref($dyn_vals$$);
      return $handler_fn$$.cljs$core$IFn$_invoke$arity$3 ? $handler_fn$$.cljs$core$IFn$_invoke$arity$3($G__78717$$, $query$$, $G__78719$$) : $handler_fn$$.call(null, $G__78717$$, $query$$, $G__78719$$);
    });
    return re_frame.subs.cache_and_return($query$$, $dynv$$, re_frame.interop.make_reaction(function() {
      return $APP.cljs.core.deref($APP.cljs.core.deref($sub$$));
    }));
  }
};
re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;
re_frame.subs.map_vals = function($f$$, $m$$) {
  return $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.empty($m$$), $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$1(function($p__78721_v$$) {
    var $k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__78721_v$$, 0, null);
    $p__78721_v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__78721_v$$, 1, null);
    return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$k$$, $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($p__78721_v$$) : $f$$.call(null, $p__78721_v$$)], null);
  }), $m$$);
};
re_frame.subs.map_signals = function($f$$, $signals$$) {
  return $APP.cljs.core.sequential_QMARK_($signals$$) ? $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($f$$, $signals$$) : $APP.cljs.core.map_QMARK_($signals$$) ? re_frame.subs.map_vals($f$$, $signals$$) : re_frame.interop.deref_QMARK_($signals$$) ? $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($signals$$) : $f$$.call(null, $signals$$) : $APP.cljs.core.List.EMPTY;
};
re_frame.subs.to_seq = function($x$$) {
  return $APP.cljs.core.sequential_QMARK_($x$$) ? $x$$ : new $APP.cljs.core.List(null, $x$$, null, 1, null);
};
re_frame.subs.deref_input_signals = function($new_trace__78597__auto___78837_signals$$, $query_id$$) {
  var $dereffed_signals$$ = re_frame.subs.map_signals($APP.cljs.core.deref, $new_trace__78597__auto___78837_signals$$);
  $APP.cljs.core.sequential_QMARK_($new_trace__78597__auto___78837_signals$$) ? $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.deref, $new_trace__78597__auto___78837_signals$$) : $APP.cljs.core.map_QMARK_($new_trace__78597__auto___78837_signals$$) ? re_frame.subs.map_vals($APP.cljs.core.deref, $new_trace__78597__auto___78837_signals$$) : re_frame.interop.deref_QMARK_($new_trace__78597__auto___78837_signals$$) ? $APP.cljs.core.deref($new_trace__78597__auto___78837_signals$$) : re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, 
  $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in the reg-sub for", $query_id$$, ", the input-signals function returns:", $new_trace__78597__auto___78837_signals$$], 0));
  re_frame.trace.is_trace_enabled_QMARK_() && ($new_trace__78597__auto___78837_signals$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 
  1, [cljs$cst$5812$input_signals, $APP.cljs.core.doall.cljs$core$IFn$_invoke$arity$1(re_frame.subs.to_seq(re_frame.subs.map_signals(re_frame.interop.reagent_id, $new_trace__78597__auto___78837_signals$$)))], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5812$input_signals, $APP.cljs.core.doall.cljs$core$IFn$_invoke$arity$1(re_frame.subs.to_seq(re_frame.subs.map_signals(re_frame.interop.reagent_id, 
  $new_trace__78597__auto___78837_signals$$)))], null)], null), $APP.cljs$cst$2121$tags)], 0)), re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78837_signals$$);
  return $dereffed_signals$$;
};
re_frame.subs.reg_sub = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$343_argseq__5756__auto__$$ = [], $len__5749__auto___78838$$ = arguments.length, $i__5750__auto___78839$$ = 0;;) {
    if ($i__5750__auto___78839$$ < $len__5749__auto___78838$$) {
      $args__5755__auto__$jscomp$343_argseq__5756__auto__$$.push(arguments[$i__5750__auto___78839$$]), $i__5750__auto___78839$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$343_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$343_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$343_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$343_argseq__5756__auto__$$);
};
re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = function($query_id$$, $args$$) {
  var $err_header$$ = ["re-frame: reg-sub for ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($query_id$$), ", "].join(""), $vec__78732$$ = function() {
    var $args__$1$$ = $APP.cljs.core.take_last(2, $args$$), $op$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($args__$1$$, 0, null), $f$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($args__$1$$, 1, null);
    if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1, $APP.cljs.core.count($args__$1$$)) || $APP.cljs.core.fn_QMARK_($op$$) || $APP.cljs.core.vector_QMARK_($op$$)) {
      return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.butlast($args$$), $APP.cljs.core.last($args$$)], null);
    }
    $args__$1$$ = $APP.cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(2, $args$$);
    switch($op$$ instanceof $APP.cljs.core.Keyword ? $op$$.fqn : null) {
      case "-\x3e":
        return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$args__$1$$, function($db$$, $_$$) {
          return $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($db$$) : $f$$.call(null, $db$$);
        }], null);
      case "\x3d\x3e":
        return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$args__$1$$, function($db$$, $p__78749_seq__78751_seq__78751__$1$$) {
          $p__78749_seq__78751_seq__78751__$1$$ = $APP.cljs.core.seq($p__78749_seq__78751_seq__78751__$1$$);
          $APP.cljs.core.first($p__78749_seq__78751_seq__78751__$1$$);
          $p__78749_seq__78751_seq__78751__$1$$ = $APP.cljs.core.next($p__78749_seq__78751_seq__78751__$1$$);
          return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($f$$, $db$$, $p__78749_seq__78751_seq__78751__$1$$);
        }], null);
      default:
        return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$err_header$$, "expected :-\x3e or :\x3d\x3e as second to last argument, got:", $op$$], 0));
    }
  }(), $input_args$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__78732$$, 0, null), $computation_fn$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__78732$$, 1, null), $inputs_fn$$ = function() {
    switch($APP.cljs.core.count($input_args$$)) {
      case 0:
        return function() {
          var $G__78843$$ = null, $G__78843__1$$ = function($_$$) {
            return re_frame.db.app_db;
          };
          $G__78843$$ = function($_$$, $___$1$$) {
            switch(arguments.length) {
              case 1:
                return $G__78843__1$$.call(this, $_$$);
              case 2:
                return re_frame.db.app_db;
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          $G__78843$$.cljs$core$IFn$_invoke$arity$1 = $G__78843__1$$;
          $G__78843$$.cljs$core$IFn$_invoke$arity$2 = function($_$$, $___$1$$) {
            return re_frame.db.app_db;
          };
          return $G__78843$$;
        }();
      case 1:
        var $f$jscomp$791_marker$jscomp$1_pairs$$ = $APP.cljs.core.first($input_args$$);
        $APP.cljs.core.fn_QMARK_($f$jscomp$791_marker$jscomp$1_pairs$$) || re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$err_header$$, "2nd argument expected to be an inputs function, got:", $f$jscomp$791_marker$jscomp$1_pairs$$], 0));
        return $f$jscomp$791_marker$jscomp$1_pairs$$;
      case 2:
        $f$jscomp$791_marker$jscomp$1_pairs$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($input_args$$, 0, null);
        var $vec$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($input_args$$, 1, null);
        $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs$cst$5813$_LT__, $f$jscomp$791_marker$jscomp$1_pairs$$) || re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$err_header$$, "expected :\x3c-, got:", $f$jscomp$791_marker$jscomp$1_pairs$$], 0));
        return function() {
          var $re_frame$subs$inp_fn$$ = null, $re_frame$subs$inp_fn__1$$ = function($_$$) {
            return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1($vec$$);
          }, $re_frame$subs$inp_fn__2$$ = function($_$$, $___$1$$) {
            return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1($vec$$);
          };
          $re_frame$subs$inp_fn$$ = function($_$$, $___$1$$) {
            switch(arguments.length) {
              case 1:
                return $re_frame$subs$inp_fn__1$$.call(this, $_$$);
              case 2:
                return $re_frame$subs$inp_fn__2$$.call(this, $_$$, $___$1$$);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          $re_frame$subs$inp_fn$$.cljs$core$IFn$_invoke$arity$1 = $re_frame$subs$inp_fn__1$$;
          $re_frame$subs$inp_fn$$.cljs$core$IFn$_invoke$arity$2 = $re_frame$subs$inp_fn__2$$;
          return $re_frame$subs$inp_fn$$;
        }();
      default:
        $f$jscomp$791_marker$jscomp$1_pairs$$ = $APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2, $input_args$$);
        var $markers$$ = $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.first, $f$jscomp$791_marker$jscomp$1_pairs$$), $vecs$$ = $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.second, $f$jscomp$791_marker$jscomp$1_pairs$$);
        $APP.cljs.core.every_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5813$_LT__, null], null), null), $markers$$) && $APP.cljs.core.every_QMARK_($APP.cljs.core.vector_QMARK_, $vecs$$) || re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$err_header$$, "expected pairs of :\x3c- and vectors, got:", $f$jscomp$791_marker$jscomp$1_pairs$$], 0));
        return function() {
          var $re_frame$subs$inp_fn$$ = null, $re_frame$subs$inp_fn__1$$ = function($_$$) {
            return $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe, $vecs$$);
          }, $re_frame$subs$inp_fn__2$$ = function($_$$, $___$1$$) {
            return $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe, $vecs$$);
          };
          $re_frame$subs$inp_fn$$ = function($_$$, $___$1$$) {
            switch(arguments.length) {
              case 1:
                return $re_frame$subs$inp_fn__1$$.call(this, $_$$);
              case 2:
                return $re_frame$subs$inp_fn__2$$.call(this, $_$$, $___$1$$);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          $re_frame$subs$inp_fn$$.cljs$core$IFn$_invoke$arity$1 = $re_frame$subs$inp_fn__1$$;
          $re_frame$subs$inp_fn$$.cljs$core$IFn$_invoke$arity$2 = $re_frame$subs$inp_fn__2$$;
          return $re_frame$subs$inp_fn$$;
        }();
    }
  }();
  return re_frame.registrar.register_handler(re_frame.subs.kind, $query_id$$, function() {
    var $re_frame$subs$subs_handler_fn$$ = null, $re_frame$subs$subs_handler_fn__2$$ = function($db$jscomp$252_reaction$$, $query_vec$$) {
      var $subscriptions$$ = $inputs_fn$$.cljs$core$IFn$_invoke$arity$2 ? $inputs_fn$$.cljs$core$IFn$_invoke$arity$2($query_vec$$, null) : $inputs_fn$$.call(null, $query_vec$$, null), $reaction_id$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
      $db$jscomp$252_reaction$$ = re_frame.interop.make_reaction(function() {
        if (re_frame.trace.is_trace_enabled_QMARK_()) {
          var $_STAR_current_trace_STAR__orig_val__78764_new_trace__78597__auto___78847$$ = re_frame.trace._STAR_current_trace_STAR_, $_STAR_current_trace_STAR__temp_val__78765$$ = re_frame.trace.start_trace(new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$4512$operation, re_frame.utils.first_in_vector($query_vec$$), cljs$cst$5796$op_type, cljs$cst$5814$sub_SLASH_run, $APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5807$query_v, $query_vec$$, cljs$cst$5808$reaction, 
          $APP.cljs.core.deref($reaction_id$$)], null)], null));
          re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__temp_val__78765$$;
          try {
            try {
              var $subscription$$ = function() {
                var $G__78766$$ = re_frame.subs.deref_input_signals($subscriptions$$, $query_id$$);
                return $computation_fn$$.cljs$core$IFn$_invoke$arity$2 ? $computation_fn$$.cljs$core$IFn$_invoke$arity$2($G__78766$$, $query_vec$$) : $computation_fn$$.call(null, $G__78766$$, $query_vec$$);
              }();
              if (re_frame.trace.is_trace_enabled_QMARK_()) {
                var $new_trace__78597__auto___78844$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1429$value, 
                $subscription$$], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1429$value, $subscription$$], null)], null), $APP.cljs$cst$2121$tags)], 0));
                re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78844$$;
              }
              return $subscription$$;
            } finally {
              if (re_frame.trace.is_trace_enabled_QMARK_()) {
                var $end__78595__auto___78845$$ = re_frame.interop.now(), $duration__78596__auto___78846$$ = $end__78595__auto___78845$$ - $APP.cljs$cst$1574$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
                $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces, $APP.cljs.core.conj, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_, cljs$cst$5805$duration, $duration__78596__auto___78846$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$1575$end, re_frame.interop.now()], 0)));
                re_frame.trace.run_tracing_callbacks_BANG_($end__78595__auto___78845$$);
              }
            }
          } finally {
            re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__orig_val__78764_new_trace__78597__auto___78847$$;
          }
        } else {
          return $subscription$$ = function() {
            var $G__78768$$ = re_frame.subs.deref_input_signals($subscriptions$$, $query_id$$);
            return $computation_fn$$.cljs$core$IFn$_invoke$arity$2 ? $computation_fn$$.cljs$core$IFn$_invoke$arity$2($G__78768$$, $query_vec$$) : $computation_fn$$.call(null, $G__78768$$, $query_vec$$);
          }(), re_frame.trace.is_trace_enabled_QMARK_() && ($_STAR_current_trace_STAR__orig_val__78764_new_trace__78597__auto___78847$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, 
          new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1429$value, $subscription$$], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1429$value, $subscription$$], null)], null), $APP.cljs$cst$2121$tags)], 0)), re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__orig_val__78764_new_trace__78597__auto___78847$$), 
          $subscription$$;
        }
      });
      $APP.cljs.core.reset_BANG_($reaction_id$$, re_frame.interop.reagent_id($db$jscomp$252_reaction$$));
      return $db$jscomp$252_reaction$$;
    }, $re_frame$subs$subs_handler_fn__3$$ = function($db$jscomp$253_reaction$$, $query_vec$$, $dyn_vec$$) {
      var $subscriptions$$ = $inputs_fn$$.cljs$core$IFn$_invoke$arity$2 ? $inputs_fn$$.cljs$core$IFn$_invoke$arity$2($query_vec$$, $dyn_vec$$) : $inputs_fn$$.call(null, $query_vec$$, $dyn_vec$$), $reaction_id$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
      $db$jscomp$253_reaction$$ = re_frame.interop.make_reaction(function() {
        if (re_frame.trace.is_trace_enabled_QMARK_()) {
          var $_STAR_current_trace_STAR__orig_val__78770_new_trace__78597__auto___78851$$ = re_frame.trace._STAR_current_trace_STAR_, $_STAR_current_trace_STAR__temp_val__78771$$ = re_frame.trace.start_trace(new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$4512$operation, re_frame.utils.first_in_vector($query_vec$$), cljs$cst$5796$op_type, cljs$cst$5814$sub_SLASH_run, $APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$5807$query_v, $query_vec$$, cljs$cst$5811$dyn_v, 
          $dyn_vec$$, cljs$cst$5808$reaction, $APP.cljs.core.deref($reaction_id$$)], null)], null));
          re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__temp_val__78771$$;
          try {
            try {
              var $subscription$$ = function() {
                var $G__78772$$ = re_frame.subs.deref_input_signals($subscriptions$$, $query_id$$);
                return $computation_fn$$.cljs$core$IFn$_invoke$arity$3 ? $computation_fn$$.cljs$core$IFn$_invoke$arity$3($G__78772$$, $query_vec$$, $dyn_vec$$) : $computation_fn$$.call(null, $G__78772$$, $query_vec$$, $dyn_vec$$);
              }();
              if (re_frame.trace.is_trace_enabled_QMARK_()) {
                var $new_trace__78597__auto___78848$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1429$value, 
                $subscription$$], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1429$value, $subscription$$], null)], null), $APP.cljs$cst$2121$tags)], 0));
                re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78848$$;
              }
              return $subscription$$;
            } finally {
              if (re_frame.trace.is_trace_enabled_QMARK_()) {
                var $end__78595__auto___78849$$ = re_frame.interop.now(), $duration__78596__auto___78850$$ = $end__78595__auto___78849$$ - $APP.cljs$cst$1574$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
                $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces, $APP.cljs.core.conj, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_, cljs$cst$5805$duration, $duration__78596__auto___78850$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$1575$end, re_frame.interop.now()], 0)));
                re_frame.trace.run_tracing_callbacks_BANG_($end__78595__auto___78849$$);
              }
            }
          } finally {
            re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__orig_val__78770_new_trace__78597__auto___78851$$;
          }
        } else {
          return $subscription$$ = function() {
            var $G__78777$$ = re_frame.subs.deref_input_signals($subscriptions$$, $query_id$$);
            return $computation_fn$$.cljs$core$IFn$_invoke$arity$3 ? $computation_fn$$.cljs$core$IFn$_invoke$arity$3($G__78777$$, $query_vec$$, $dyn_vec$$) : $computation_fn$$.call(null, $G__78777$$, $query_vec$$, $dyn_vec$$);
          }(), re_frame.trace.is_trace_enabled_QMARK_() && ($_STAR_current_trace_STAR__orig_val__78770_new_trace__78597__auto___78851$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, 
          new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1429$value, $subscription$$], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1429$value, $subscription$$], null)], null), $APP.cljs$cst$2121$tags)], 0)), re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__orig_val__78770_new_trace__78597__auto___78851$$), 
          $subscription$$;
        }
      });
      $APP.cljs.core.reset_BANG_($reaction_id$$, re_frame.interop.reagent_id($db$jscomp$253_reaction$$));
      return $db$jscomp$253_reaction$$;
    };
    $re_frame$subs$subs_handler_fn$$ = function($db$$, $query_vec$$, $dyn_vec$$) {
      switch(arguments.length) {
        case 2:
          return $re_frame$subs$subs_handler_fn__2$$.call(this, $db$$, $query_vec$$);
        case 3:
          return $re_frame$subs$subs_handler_fn__3$$.call(this, $db$$, $query_vec$$, $dyn_vec$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $re_frame$subs$subs_handler_fn$$.cljs$core$IFn$_invoke$arity$2 = $re_frame$subs$subs_handler_fn__2$$;
    $re_frame$subs$subs_handler_fn$$.cljs$core$IFn$_invoke$arity$3 = $re_frame$subs$subs_handler_fn__3$$;
    return $re_frame$subs$subs_handler_fn$$;
  }());
};
re_frame.subs.reg_sub.cljs$lang$maxFixedArity = 1;
re_frame.subs.reg_sub.cljs$lang$applyTo = function($seq78726_seq78726__$1$$) {
  var $G__78727$$ = $APP.cljs.core.first($seq78726_seq78726__$1$$);
  $seq78726_seq78726__$1$$ = $APP.cljs.core.next($seq78726_seq78726__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__78727$$, $seq78726_seq78726__$1$$);
};
re_frame.router = {};
re_frame.router.later_fns = new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5815$flush_dom, function($f$$) {
  var $G__78780$$ = function() {
    return re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1($f$$) : re_frame.interop.next_tick.call(null, $f$$);
  };
  return re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1($G__78780$$) : re_frame.interop.after_render.call(null, $G__78780$$);
}, cljs$cst$5816$yield, re_frame.interop.next_tick], null);
re_frame.router.IEventQueue = function() {
};
var re_frame$router$IEventQueue$push$dyn_78884 = function($this$$$, $event$$) {
  var $m__5372__auto__$jscomp$842_m__5374__auto__$$ = re_frame.router.push[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$842_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$842_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$842_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $event$$) : $m__5372__auto__$jscomp$842_m__5374__auto__$$.call(null, $this$$$, $event$$);
  }
  $m__5372__auto__$jscomp$842_m__5374__auto__$$ = re_frame.router.push._;
  if ($m__5372__auto__$jscomp$842_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$842_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$842_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $event$$) : $m__5372__auto__$jscomp$842_m__5374__auto__$$.call(null, $this$$$, $event$$);
  }
  throw $APP.cljs.core.missing_protocol("IEventQueue.push", $this$$$);
};
re_frame.router.push = function($this$$$, $event$$) {
  return $this$$$ != null && $this$$$.re_frame$router$IEventQueue$push$arity$2 != null ? $this$$$.re_frame$router$IEventQueue$push$arity$2($this$$$, $event$$) : re_frame$router$IEventQueue$push$dyn_78884($this$$$, $event$$);
};
var re_frame$router$IEventQueue$add_post_event_callback$dyn_78887 = function($this$$$, $id$$, $callback_fn$$) {
  var $m__5372__auto__$jscomp$843_m__5374__auto__$$ = re_frame.router.add_post_event_callback[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$843_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$843_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$843_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $id$$, $callback_fn$$) : $m__5372__auto__$jscomp$843_m__5374__auto__$$.call(null, $this$$$, $id$$, $callback_fn$$);
  }
  $m__5372__auto__$jscomp$843_m__5374__auto__$$ = re_frame.router.add_post_event_callback._;
  if ($m__5372__auto__$jscomp$843_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$843_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$843_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $id$$, $callback_fn$$) : $m__5372__auto__$jscomp$843_m__5374__auto__$$.call(null, $this$$$, $id$$, $callback_fn$$);
  }
  throw $APP.cljs.core.missing_protocol("IEventQueue.add-post-event-callback", $this$$$);
};
re_frame.router.add_post_event_callback = function($this$$$, $id$$, $callback_fn$$) {
  return $this$$$ != null && $this$$$.re_frame$router$IEventQueue$add_post_event_callback$arity$3 != null ? $this$$$.re_frame$router$IEventQueue$add_post_event_callback$arity$3($this$$$, $id$$, $callback_fn$$) : re_frame$router$IEventQueue$add_post_event_callback$dyn_78887($this$$$, $id$$, $callback_fn$$);
};
var re_frame$router$IEventQueue$remove_post_event_callback$dyn_78888 = function($this$$$, $id$$) {
  var $m__5372__auto__$jscomp$844_m__5374__auto__$$ = re_frame.router.remove_post_event_callback[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$844_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$844_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$844_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $id$$) : $m__5372__auto__$jscomp$844_m__5374__auto__$$.call(null, $this$$$, $id$$);
  }
  $m__5372__auto__$jscomp$844_m__5374__auto__$$ = re_frame.router.remove_post_event_callback._;
  if ($m__5372__auto__$jscomp$844_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$844_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$844_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $id$$) : $m__5372__auto__$jscomp$844_m__5374__auto__$$.call(null, $this$$$, $id$$);
  }
  throw $APP.cljs.core.missing_protocol("IEventQueue.remove-post-event-callback", $this$$$);
};
re_frame.router.remove_post_event_callback = function($this$$$, $id$$) {
  return $this$$$ != null && $this$$$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 != null ? $this$$$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2($this$$$, $id$$) : re_frame$router$IEventQueue$remove_post_event_callback$dyn_78888($this$$$, $id$$);
};
var re_frame$router$IEventQueue$purge$dyn_78890 = function($this$$$) {
  var $m__5372__auto__$jscomp$845_m__5374__auto__$$ = re_frame.router.purge[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$845_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$845_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$845_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$845_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$845_m__5374__auto__$$ = re_frame.router.purge._;
  if ($m__5372__auto__$jscomp$845_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$845_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$845_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$845_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("IEventQueue.purge", $this$$$);
};
re_frame.router.purge = function($this$$$) {
  return $this$$$ != null && $this$$$.re_frame$router$IEventQueue$purge$arity$1 != null ? $this$$$.re_frame$router$IEventQueue$purge$arity$1($this$$$) : re_frame$router$IEventQueue$purge$dyn_78890($this$$$);
};
var re_frame$router$IEventQueue$_fsm_trigger$dyn_78906 = function($this$$$, $trigger$$, $arg$$) {
  var $m__5372__auto__$jscomp$846_m__5374__auto__$$ = re_frame.router._fsm_trigger[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$846_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$846_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$846_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $trigger$$, $arg$$) : $m__5372__auto__$jscomp$846_m__5374__auto__$$.call(null, $this$$$, $trigger$$, $arg$$);
  }
  $m__5372__auto__$jscomp$846_m__5374__auto__$$ = re_frame.router._fsm_trigger._;
  if ($m__5372__auto__$jscomp$846_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$846_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$846_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $trigger$$, $arg$$) : $m__5372__auto__$jscomp$846_m__5374__auto__$$.call(null, $this$$$, $trigger$$, $arg$$);
  }
  throw $APP.cljs.core.missing_protocol("IEventQueue.-fsm-trigger", $this$$$);
};
re_frame.router._fsm_trigger = function($this$$$, $trigger$$, $arg$$) {
  return $this$$$ != null && $this$$$.re_frame$router$IEventQueue$_fsm_trigger$arity$3 != null ? $this$$$.re_frame$router$IEventQueue$_fsm_trigger$arity$3($this$$$, $trigger$$, $arg$$) : re_frame$router$IEventQueue$_fsm_trigger$dyn_78906($this$$$, $trigger$$, $arg$$);
};
var re_frame$router$IEventQueue$_add_event$dyn_78907 = function($this$$$, $event$$) {
  var $m__5372__auto__$jscomp$847_m__5374__auto__$$ = re_frame.router._add_event[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$847_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$847_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$847_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $event$$) : $m__5372__auto__$jscomp$847_m__5374__auto__$$.call(null, $this$$$, $event$$);
  }
  $m__5372__auto__$jscomp$847_m__5374__auto__$$ = re_frame.router._add_event._;
  if ($m__5372__auto__$jscomp$847_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$847_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$847_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $event$$) : $m__5372__auto__$jscomp$847_m__5374__auto__$$.call(null, $this$$$, $event$$);
  }
  throw $APP.cljs.core.missing_protocol("IEventQueue.-add-event", $this$$$);
};
re_frame.router._add_event = function($this$$$, $event$$) {
  return $this$$$ != null && $this$$$.re_frame$router$IEventQueue$_add_event$arity$2 != null ? $this$$$.re_frame$router$IEventQueue$_add_event$arity$2($this$$$, $event$$) : re_frame$router$IEventQueue$_add_event$dyn_78907($this$$$, $event$$);
};
var re_frame$router$IEventQueue$_process_1st_event_in_queue$dyn_78908 = function($this$$$) {
  var $m__5372__auto__$jscomp$848_m__5374__auto__$$ = re_frame.router._process_1st_event_in_queue[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$848_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$848_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$848_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$848_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$848_m__5374__auto__$$ = re_frame.router._process_1st_event_in_queue._;
  if ($m__5372__auto__$jscomp$848_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$848_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$848_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$848_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("IEventQueue.-process-1st-event-in-queue", $this$$$);
};
re_frame.router._process_1st_event_in_queue = function($this$$$) {
  return $this$$$ != null && $this$$$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 != null ? $this$$$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1($this$$$) : re_frame$router$IEventQueue$_process_1st_event_in_queue$dyn_78908($this$$$);
};
var re_frame$router$IEventQueue$_run_next_tick$dyn_78909 = function($this$$$) {
  var $m__5372__auto__$jscomp$849_m__5374__auto__$$ = re_frame.router._run_next_tick[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$849_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$849_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$849_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$849_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$849_m__5374__auto__$$ = re_frame.router._run_next_tick._;
  if ($m__5372__auto__$jscomp$849_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$849_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$849_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$849_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("IEventQueue.-run-next-tick", $this$$$);
};
re_frame.router._run_next_tick = function($this$$$) {
  return $this$$$ != null && $this$$$.re_frame$router$IEventQueue$_run_next_tick$arity$1 != null ? $this$$$.re_frame$router$IEventQueue$_run_next_tick$arity$1($this$$$) : re_frame$router$IEventQueue$_run_next_tick$dyn_78909($this$$$);
};
var re_frame$router$IEventQueue$_run_queue$dyn_78910 = function($this$$$) {
  var $m__5372__auto__$jscomp$850_m__5374__auto__$$ = re_frame.router._run_queue[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$850_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$850_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$850_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$850_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$850_m__5374__auto__$$ = re_frame.router._run_queue._;
  if ($m__5372__auto__$jscomp$850_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$850_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$850_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$850_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("IEventQueue.-run-queue", $this$$$);
};
re_frame.router._run_queue = function($this$$$) {
  return $this$$$ != null && $this$$$.re_frame$router$IEventQueue$_run_queue$arity$1 != null ? $this$$$.re_frame$router$IEventQueue$_run_queue$arity$1($this$$$) : re_frame$router$IEventQueue$_run_queue$dyn_78910($this$$$);
};
var re_frame$router$IEventQueue$_exception$dyn_78924 = function($this$$$, $ex$$) {
  var $m__5372__auto__$jscomp$851_m__5374__auto__$$ = re_frame.router._exception[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$851_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$851_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$851_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $ex$$) : $m__5372__auto__$jscomp$851_m__5374__auto__$$.call(null, $this$$$, $ex$$);
  }
  $m__5372__auto__$jscomp$851_m__5374__auto__$$ = re_frame.router._exception._;
  if ($m__5372__auto__$jscomp$851_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$851_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$851_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $ex$$) : $m__5372__auto__$jscomp$851_m__5374__auto__$$.call(null, $this$$$, $ex$$);
  }
  throw $APP.cljs.core.missing_protocol("IEventQueue.-exception", $this$$$);
};
re_frame.router._exception = function($this$$$, $ex$$) {
  return $this$$$ != null && $this$$$.re_frame$router$IEventQueue$_exception$arity$2 != null ? $this$$$.re_frame$router$IEventQueue$_exception$arity$2($this$$$, $ex$$) : re_frame$router$IEventQueue$_exception$dyn_78924($this$$$, $ex$$);
};
var re_frame$router$IEventQueue$_pause$dyn_78925 = function($this$$$, $later_fn$$) {
  var $m__5372__auto__$jscomp$852_m__5374__auto__$$ = re_frame.router._pause[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$852_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$852_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$852_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $later_fn$$) : $m__5372__auto__$jscomp$852_m__5374__auto__$$.call(null, $this$$$, $later_fn$$);
  }
  $m__5372__auto__$jscomp$852_m__5374__auto__$$ = re_frame.router._pause._;
  if ($m__5372__auto__$jscomp$852_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$852_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$852_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $later_fn$$) : $m__5372__auto__$jscomp$852_m__5374__auto__$$.call(null, $this$$$, $later_fn$$);
  }
  throw $APP.cljs.core.missing_protocol("IEventQueue.-pause", $this$$$);
};
re_frame.router._pause = function($this$$$, $later_fn$$) {
  return $this$$$ != null && $this$$$.re_frame$router$IEventQueue$_pause$arity$2 != null ? $this$$$.re_frame$router$IEventQueue$_pause$arity$2($this$$$, $later_fn$$) : re_frame$router$IEventQueue$_pause$dyn_78925($this$$$, $later_fn$$);
};
var re_frame$router$IEventQueue$_resume$dyn_78926 = function($this$$$) {
  var $m__5372__auto__$jscomp$853_m__5374__auto__$$ = re_frame.router._resume[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$853_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$853_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$853_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$853_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$853_m__5374__auto__$$ = re_frame.router._resume._;
  if ($m__5372__auto__$jscomp$853_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$853_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$853_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$853_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("IEventQueue.-resume", $this$$$);
};
re_frame.router._resume = function($this$$$) {
  return $this$$$ != null && $this$$$.re_frame$router$IEventQueue$_resume$arity$1 != null ? $this$$$.re_frame$router$IEventQueue$_resume$arity$1($this$$$) : re_frame$router$IEventQueue$_resume$dyn_78926($this$$$);
};
var re_frame$router$IEventQueue$_call_post_event_callbacks$dyn_78931 = function($this$$$, $event$$) {
  var $m__5372__auto__$jscomp$854_m__5374__auto__$$ = re_frame.router._call_post_event_callbacks[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$854_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$854_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$854_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $event$$) : $m__5372__auto__$jscomp$854_m__5374__auto__$$.call(null, $this$$$, $event$$);
  }
  $m__5372__auto__$jscomp$854_m__5374__auto__$$ = re_frame.router._call_post_event_callbacks._;
  if ($m__5372__auto__$jscomp$854_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$854_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$854_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $event$$) : $m__5372__auto__$jscomp$854_m__5374__auto__$$.call(null, $this$$$, $event$$);
  }
  throw $APP.cljs.core.missing_protocol("IEventQueue.-call-post-event-callbacks", $this$$$);
};
re_frame.router._call_post_event_callbacks = function($this$$$, $event$$) {
  return $this$$$ != null && $this$$$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 != null ? $this$$$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2($this$$$, $event$$) : re_frame$router$IEventQueue$_call_post_event_callbacks$dyn_78931($this$$$, $event$$);
};
re_frame.router.EventQueue = function($fsm_state$$, $queue$$, $post_event_callback_fns$$) {
  this.fsm_state = $fsm_state$$;
  this.queue = $queue$$;
  this.post_event_callback_fns = $post_event_callback_fns$$;
};
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$ = $APP.cljs.core.PROTOCOL_SENTINEL;
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_queue$arity$1 = function($n$jscomp$489_this$$$) {
  for ($n$jscomp$489_this$$$ = $APP.cljs.core.count(this.queue);;) {
    if ($n$jscomp$489_this$$$ === 0) {
      return this.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null, cljs$cst$5817$finish_run, null);
    }
    var $temp__5823__auto__$$ = $APP.cljs.core.some(re_frame.router.later_fns, $APP.cljs.core.keys($APP.cljs.core.meta($APP.cljs.core.peek(this.queue))));
    if ($APP.cljs.core.truth_($temp__5823__auto__$$)) {
      return this.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null, cljs$cst$5818$pause, $temp__5823__auto__$$);
    }
    this.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(null);
    --$n$jscomp$489_this$$$;
  }
};
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 = function($_$$, $id$$) {
  return $APP.cljs.core.contains_QMARK_(this.post_event_callback_fns, $id$$) ? this.post_event_callback_fns = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.post_event_callback_fns, $id$$) : re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: could not remove post event call back with id:", $id$$], 0));
};
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_add_event$arity$2 = function($_$$, $event$$) {
  return this.queue = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2(this.queue, $event$$);
};
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_resume$arity$1 = function($this$$$) {
  this.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(null);
  return this.re_frame$router$IEventQueue$_run_queue$arity$1(null);
};
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$push$arity$2 = function($this$$$, $event$$) {
  return this.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null, cljs$cst$5819$add_event, $event$$);
};
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_next_tick$arity$1 = function($G__78852_this$$$) {
  var $this$__$1$$ = this;
  $G__78852_this$$$ = function() {
    return $this$__$1$$.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null, cljs$cst$5820$run_queue, null);
  };
  return re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1($G__78852_this$$$) : re_frame.interop.next_tick.call(null, $G__78852_this$$$);
};
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_fsm_trigger$arity$3 = function($_STAR_current_trace_STAR__orig_val__78855_this$$$, $trigger$$, $arg$$) {
  var $self__$$ = this, $this$__$1$$ = this;
  if (re_frame.trace.is_trace_enabled_QMARK_()) {
    $_STAR_current_trace_STAR__orig_val__78855_this$$$ = re_frame.trace._STAR_current_trace_STAR_;
    var $_STAR_current_trace_STAR__temp_val__78856$$ = re_frame.trace.start_trace(new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5796$op_type, cljs$cst$5821$re_frame_DOT_router_SLASH_fsm_trigger], null));
    re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__temp_val__78856$$;
    try {
      try {
        var $new_trace__78597__auto___78969_vec__78857$$ = function() {
          var $G__78860$$ = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$self__$$.fsm_state, $trigger$$], null);
          if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5822$idle, cljs$cst$5819$add_event], null), $G__78860$$)) {
            return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5823$scheduled, function() {
              $this$__$1$$.re_frame$router$IEventQueue$_add_event$arity$2(null, $arg$$);
              return $this$__$1$$.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
            }], null);
          }
          if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5824$running, $APP.cljs$cst$2628$exception], null), $G__78860$$)) {
            return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5822$idle, function() {
              return $this$__$1$$.re_frame$router$IEventQueue$_exception$arity$2(null, $arg$$);
            }], null);
          }
          if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5824$running, cljs$cst$5817$finish_run], null), $G__78860$$)) {
            return $APP.cljs.core.empty_QMARK_($self__$$.queue) ? new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5822$idle], null) : new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5823$scheduled, function() {
              return $this$__$1$$.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
            }], null);
          }
          if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5824$running, cljs$cst$5818$pause], null), $G__78860$$)) {
            return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5825$paused, function() {
              return $this$__$1$$.re_frame$router$IEventQueue$_pause$arity$2(null, $arg$$);
            }], null);
          }
          if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5825$paused, cljs$cst$5826$resume], null), $G__78860$$)) {
            return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5824$running, function() {
              return $this$__$1$$.re_frame$router$IEventQueue$_resume$arity$1(null);
            }], null);
          }
          if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5823$scheduled, cljs$cst$5820$run_queue], null), $G__78860$$)) {
            return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5824$running, function() {
              return $this$__$1$$.re_frame$router$IEventQueue$_run_queue$arity$1(null);
            }], null);
          }
          if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5825$paused, cljs$cst$5819$add_event], null), $G__78860$$)) {
            return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5825$paused, function() {
              return $this$__$1$$.re_frame$router$IEventQueue$_add_event$arity$2(null, $arg$$);
            }], null);
          }
          if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5824$running, cljs$cst$5819$add_event], null), $G__78860$$)) {
            return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5824$running, function() {
              return $this$__$1$$.re_frame$router$IEventQueue$_add_event$arity$2(null, $arg$$);
            }], null);
          }
          if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5823$scheduled, cljs$cst$5819$add_event], null), $G__78860$$)) {
            return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5823$scheduled, function() {
              return $this$__$1$$.re_frame$router$IEventQueue$_add_event$arity$2(null, $arg$$);
            }], null);
          }
          throw $APP.cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["re-frame: router state transition not found. ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($self__$$.fsm_state), " ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($trigger$$)].join(""), new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5827$fsm_state, $self__$$.fsm_state, cljs$cst$5828$trigger, $trigger$$], null));
        }(), $new_fsm_state$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($new_trace__78597__auto___78969_vec__78857$$, 0, null), $action_fn_vec__78861$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($new_trace__78597__auto___78969_vec__78857$$, 1, null);
        if (re_frame.trace.is_trace_enabled_QMARK_()) {
          var $new_trace__78597__auto___78961$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$4512$operation, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
          [$self__$$.fsm_state, $trigger$$], null), $APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5829$current_state, $self__$$.fsm_state, cljs$cst$5830$new_state, $new_fsm_state$$], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$4512$operation, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$self__$$.fsm_state, $trigger$$], null), $APP.cljs$cst$2121$tags, 
          new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5829$current_state, $self__$$.fsm_state, cljs$cst$5830$new_state, $new_fsm_state$$], null)], null), $APP.cljs$cst$2121$tags)], 0));
          re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78961$$;
        }
        $self__$$.fsm_state = $new_fsm_state$$;
        return $APP.cljs.core.truth_($action_fn_vec__78861$$) ? $action_fn_vec__78861$$.cljs$core$IFn$_invoke$arity$0 ? $action_fn_vec__78861$$.cljs$core$IFn$_invoke$arity$0() : $action_fn_vec__78861$$.call(null) : null;
      } finally {
        if (re_frame.trace.is_trace_enabled_QMARK_()) {
          var $end__78595__auto___78967$$ = re_frame.interop.now(), $duration__78596__auto___78968$$ = $end__78595__auto___78967$$ - $APP.cljs$cst$1574$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
          $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces, $APP.cljs.core.conj, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_, cljs$cst$5805$duration, $duration__78596__auto___78968$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$1575$end, re_frame.interop.now()], 0)));
          re_frame.trace.run_tracing_callbacks_BANG_($end__78595__auto___78967$$);
        }
      }
    } finally {
      re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__orig_val__78855_this$$$;
    }
  } else {
    return $action_fn_vec__78861$$ = function() {
      var $G__78864$$ = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$self__$$.fsm_state, $trigger$$], null);
      if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5822$idle, cljs$cst$5819$add_event], null), $G__78864$$)) {
        return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5823$scheduled, function() {
          $this$__$1$$.re_frame$router$IEventQueue$_add_event$arity$2(null, $arg$$);
          return $this$__$1$$.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
        }], null);
      }
      if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5824$running, $APP.cljs$cst$2628$exception], null), $G__78864$$)) {
        return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5822$idle, function() {
          return $this$__$1$$.re_frame$router$IEventQueue$_exception$arity$2(null, $arg$$);
        }], null);
      }
      if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5824$running, cljs$cst$5817$finish_run], null), $G__78864$$)) {
        return $APP.cljs.core.empty_QMARK_($self__$$.queue) ? new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5822$idle], null) : new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5823$scheduled, function() {
          return $this$__$1$$.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
        }], null);
      }
      if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5824$running, cljs$cst$5818$pause], null), $G__78864$$)) {
        return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5825$paused, function() {
          return $this$__$1$$.re_frame$router$IEventQueue$_pause$arity$2(null, $arg$$);
        }], null);
      }
      if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5825$paused, cljs$cst$5826$resume], null), $G__78864$$)) {
        return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5824$running, function() {
          return $this$__$1$$.re_frame$router$IEventQueue$_resume$arity$1(null);
        }], null);
      }
      if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5823$scheduled, cljs$cst$5820$run_queue], null), $G__78864$$)) {
        return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5824$running, function() {
          return $this$__$1$$.re_frame$router$IEventQueue$_run_queue$arity$1(null);
        }], null);
      }
      if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5825$paused, cljs$cst$5819$add_event], null), $G__78864$$)) {
        return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5825$paused, function() {
          return $this$__$1$$.re_frame$router$IEventQueue$_add_event$arity$2(null, $arg$$);
        }], null);
      }
      if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5824$running, cljs$cst$5819$add_event], null), $G__78864$$)) {
        return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5824$running, function() {
          return $this$__$1$$.re_frame$router$IEventQueue$_add_event$arity$2(null, $arg$$);
        }], null);
      }
      if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5823$scheduled, cljs$cst$5819$add_event], null), $G__78864$$)) {
        return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5823$scheduled, function() {
          return $this$__$1$$.re_frame$router$IEventQueue$_add_event$arity$2(null, $arg$$);
        }], null);
      }
      throw $APP.cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["re-frame: router state transition not found. ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($self__$$.fsm_state), " ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($trigger$$)].join(""), new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5827$fsm_state, $self__$$.fsm_state, cljs$cst$5828$trigger, $trigger$$], null));
    }(), $new_fsm_state$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($action_fn_vec__78861$$, 0, null), $action_fn_vec__78861$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($action_fn_vec__78861$$, 1, null), re_frame.trace.is_trace_enabled_QMARK_() && ($new_trace__78597__auto___78969_vec__78857$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, 
    $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$4512$operation, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$self__$$.fsm_state, $trigger$$], null), $APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5829$current_state, $self__$$.fsm_state, cljs$cst$5830$new_state, $new_fsm_state$$], null)], null))), 
    $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$4512$operation, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$self__$$.fsm_state, $trigger$$], null), $APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5829$current_state, $self__$$.fsm_state, cljs$cst$5830$new_state, $new_fsm_state$$], null)], null), $APP.cljs$cst$2121$tags)], 0)), re_frame.trace._STAR_current_trace_STAR_ = 
    $new_trace__78597__auto___78969_vec__78857$$), $self__$$.fsm_state = $new_fsm_state$$, $APP.cljs.core.truth_($action_fn_vec__78861$$) ? $action_fn_vec__78861$$.cljs$core$IFn$_invoke$arity$0 ? $action_fn_vec__78861$$.cljs$core$IFn$_invoke$arity$0() : $action_fn_vec__78861$$.call(null) : null;
  }
};
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_pause$arity$2 = function($G__78866_this$$$, $later_fn$$) {
  var $this$__$1$$ = this;
  $G__78866_this$$$ = function() {
    return $this$__$1$$.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null, cljs$cst$5826$resume, null);
  };
  return $later_fn$$.cljs$core$IFn$_invoke$arity$1 ? $later_fn$$.cljs$core$IFn$_invoke$arity$1($G__78866_this$$$) : $later_fn$$.call(null, $G__78866_this$$$);
};
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$add_post_event_callback$arity$3 = function($_$$, $id$$, $callback_fn$$) {
  $APP.cljs.core.contains_QMARK_(this.post_event_callback_fns, $id$$) && re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: overwriting existing post event call back with id:", $id$$], 0));
  return this.post_event_callback_fns = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.post_event_callback_fns, $id$$, $callback_fn$$);
};
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 = function($event_v$jscomp$2_this$$$) {
  $event_v$jscomp$2_this$$$ = $APP.cljs.core.peek(this.queue);
  try {
    return re_frame.events.handle($event_v$jscomp$2_this$$$), this.queue = $APP.cljs.core.pop(this.queue), this.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(null, $event_v$jscomp$2_this$$$);
  } catch ($e78867$$) {
    return this.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null, $APP.cljs$cst$2628$exception, $e78867$$);
  }
};
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 = function($_$jscomp$2207_c__5548__auto__$jscomp$66_seq__78868_temp__5825__auto__$$, $event_v$$) {
  $_$jscomp$2207_c__5548__auto__$jscomp$66_seq__78868_temp__5825__auto__$$ = $APP.cljs.core.seq($APP.cljs.core.vals(this.post_event_callback_fns));
  for (var $G__78983_chunk__78869_seq__78868__$1$$ = null, $G__78982_count__78870$$ = 0, $i__78871$$ = 0;;) {
    if ($i__78871$$ < $G__78982_count__78870$$) {
      var $G__78984_callback$$ = $G__78983_chunk__78869_seq__78868__$1$$.cljs$core$IIndexed$_nth$arity$2(null, $i__78871$$);
      $G__78984_callback$$.cljs$core$IFn$_invoke$arity$2 ? $G__78984_callback$$.cljs$core$IFn$_invoke$arity$2($event_v$$, this.queue) : $G__78984_callback$$.call(null, $event_v$$, this.queue);
      $i__78871$$ += 1;
    } else {
      if ($_$jscomp$2207_c__5548__auto__$jscomp$66_seq__78868_temp__5825__auto__$$ = $APP.cljs.core.seq($_$jscomp$2207_c__5548__auto__$jscomp$66_seq__78868_temp__5825__auto__$$)) {
        $G__78983_chunk__78869_seq__78868__$1$$ = $_$jscomp$2207_c__5548__auto__$jscomp$66_seq__78868_temp__5825__auto__$$, $APP.cljs.core.chunked_seq_QMARK_($G__78983_chunk__78869_seq__78868__$1$$) ? ($_$jscomp$2207_c__5548__auto__$jscomp$66_seq__78868_temp__5825__auto__$$ = $APP.cljs.core.chunk_first($G__78983_chunk__78869_seq__78868__$1$$), $G__78982_count__78870$$ = $APP.cljs.core.chunk_rest($G__78983_chunk__78869_seq__78868__$1$$), $G__78983_chunk__78869_seq__78868__$1$$ = $_$jscomp$2207_c__5548__auto__$jscomp$66_seq__78868_temp__5825__auto__$$, 
        $G__78984_callback$$ = $APP.cljs.core.count($_$jscomp$2207_c__5548__auto__$jscomp$66_seq__78868_temp__5825__auto__$$), $_$jscomp$2207_c__5548__auto__$jscomp$66_seq__78868_temp__5825__auto__$$ = $G__78982_count__78870$$, $G__78982_count__78870$$ = $G__78984_callback$$) : ($G__78984_callback$$ = $APP.cljs.core.first($G__78983_chunk__78869_seq__78868__$1$$), $G__78984_callback$$.cljs$core$IFn$_invoke$arity$2 ? $G__78984_callback$$.cljs$core$IFn$_invoke$arity$2($event_v$$, this.queue) : $G__78984_callback$$.call(null, 
        $event_v$$, this.queue), $_$jscomp$2207_c__5548__auto__$jscomp$66_seq__78868_temp__5825__auto__$$ = $APP.cljs.core.next($G__78983_chunk__78869_seq__78868__$1$$), $G__78983_chunk__78869_seq__78868__$1$$ = null, $G__78982_count__78870$$ = 0), $i__78871$$ = 0;
      } else {
        return null;
      }
    }
  }
};
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$purge$arity$1 = function($_$$) {
  return this.queue = re_frame.interop.empty_queue;
};
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_exception$arity$2 = function($this$$$, $ex$$) {
  this.re_frame$router$IEventQueue$purge$arity$1(null);
  throw $ex$$;
};
re_frame.router.EventQueue.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$5831$fsm_state, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$10$mutable, !0], null)), $APP.cljs.core.with_meta($APP.cljs$cst$252$queue, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$10$mutable, !0], null)), $APP.cljs.core.with_meta(cljs$cst$5832$post_event_callback_fns, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$10$mutable, 
  !0], null))], null);
};
re_frame.router.EventQueue.cljs$lang$type = !0;
re_frame.router.EventQueue.cljs$lang$ctorStr = "re-frame.router/EventQueue";
re_frame.router.EventQueue.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "re-frame.router/EventQueue");
};
re_frame.router.__GT_EventQueue = function($fsm_state$$, $queue$$, $post_event_callback_fns$$) {
  return new re_frame.router.EventQueue($fsm_state$$, $queue$$, $post_event_callback_fns$$);
};
re_frame.router.event_queue = re_frame.router.__GT_EventQueue(cljs$cst$5822$idle, re_frame.interop.empty_queue, $APP.cljs.core.PersistentArrayMap.EMPTY);
re_frame.router.dispatch = function($event$$) {
  if ($event$$ == null) {
    throw $APP.cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2('re-frame: you called "dispatch" without an event vector.', $APP.cljs.core.PersistentArrayMap.EMPTY);
  }
  re_frame.router.event_queue.re_frame$router$IEventQueue$push$arity$2(null, $event$$);
  return null;
};
re_frame.router.dispatch_sync = function($event_v$$) {
  re_frame.events.handle($event_v$$);
  re_frame.router.event_queue.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(null, $event_v$$);
  return null;
};
re_frame.fx = {};
re_frame.fx.kind = cljs$cst$5795$fx;
re_frame.fx.reg_fx = function($id$$, $handler$$) {
  return re_frame.registrar.register_handler(re_frame.fx.kind, $id$$, $handler$$);
};
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$396$id, cljs$cst$5833$do_fx, cljs$cst$5798$after, function($context$$) {
  if (re_frame.trace.is_trace_enabled_QMARK_()) {
    var $G__79040__STAR_current_trace_STAR__orig_val__78878_chunk__78934_seq__78933__$1$$ = re_frame.trace._STAR_current_trace_STAR_, $_STAR_current_trace_STAR__temp_val__78879_i__78896$$ = re_frame.trace.start_trace(new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5796$op_type, cljs$cst$5834$event_SLASH_do_fx], null));
    re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__temp_val__78879_i__78896$$;
    try {
      try {
        var $G__79020_effect_fn_79014_effects$$ = $APP.cljs$cst$4926$effects.cljs$core$IFn$_invoke$arity$1($context$$), $chunk__78894_effects_without_db$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($G__79020_effect_fn_79014_effects$$, $APP.cljs$cst$2457$db), $effect_fn_79024_temp__5825__auto___79010$$ = $APP.cljs$cst$2457$db.cljs$core$IFn$_invoke$arity$1($G__79020_effect_fn_79014_effects$$);
        if ($APP.cljs.core.truth_($effect_fn_79024_temp__5825__auto___79010$$)) {
          var $fexpr__78892_79012$$ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind, $APP.cljs$cst$2457$db, !1);
          $fexpr__78892_79012$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__78892_79012$$.cljs$core$IFn$_invoke$arity$1($effect_fn_79024_temp__5825__auto___79010$$) : $fexpr__78892_79012$$.call(null, $effect_fn_79024_temp__5825__auto___79010$$);
        }
        var $count__78935_seq__78893$$ = $APP.cljs.core.seq($chunk__78894_effects_without_db$$);
        $chunk__78894_effects_without_db$$ = null;
        for ($_STAR_current_trace_STAR__temp_val__78879_i__78896$$ = $context$$ = 0;;) {
          if ($_STAR_current_trace_STAR__temp_val__78879_i__78896$$ < $context$$) {
            var $i__78936_vec__78912$$ = $chunk__78894_effects_without_db$$.cljs$core$IIndexed$_nth$arity$2(null, $_STAR_current_trace_STAR__temp_val__78879_i__78896$$), $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($i__78936_vec__78912$$, 0, null), $G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($i__78936_vec__78912$$, 1, null), $temp__5823__auto___79013_temp__5823__auto___79034$$ = 
            re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind, $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$, !1);
            $APP.cljs.core.truth_($temp__5823__auto___79013_temp__5823__auto___79034$$) ? ($G__79020_effect_fn_79014_effects$$ = $temp__5823__auto___79013_temp__5823__auto___79034$$, $G__79020_effect_fn_79014_effects$$.cljs$core$IFn$_invoke$arity$1 ? $G__79020_effect_fn_79014_effects$$.cljs$core$IFn$_invoke$arity$1($G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$) : $G__79020_effect_fn_79014_effects$$.call(null, $G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$)) : 
            re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:", $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$, ". Ignoring."], 0));
            $_STAR_current_trace_STAR__temp_val__78879_i__78896$$ += 1;
          } else {
            var $temp__5825__auto__$$ = $APP.cljs.core.seq($count__78935_seq__78893$$);
            if ($temp__5825__auto__$$) {
              $G__79020_effect_fn_79014_effects$$ = $temp__5825__auto__$$;
              if ($APP.cljs.core.chunked_seq_QMARK_($G__79020_effect_fn_79014_effects$$)) {
                var $c__5548__auto__$$ = $APP.cljs.core.chunk_first($G__79020_effect_fn_79014_effects$$), $G__79019$$ = $APP.cljs.core.chunk_rest($G__79020_effect_fn_79014_effects$$);
                $G__79020_effect_fn_79014_effects$$ = $c__5548__auto__$$;
                var $G__79021$$ = $APP.cljs.core.count($c__5548__auto__$$);
                $count__78935_seq__78893$$ = $G__79019$$;
                $chunk__78894_effects_without_db$$ = $G__79020_effect_fn_79014_effects$$;
                $context$$ = $G__79021$$;
              } else {
                var $vec__78919$$ = $APP.cljs.core.first($G__79020_effect_fn_79014_effects$$);
                $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__78919$$, 0, null);
                $G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__78919$$, 1, null);
                var $temp__5823__auto___79023$$ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind, $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$, !1);
                $APP.cljs.core.truth_($temp__5823__auto___79023$$) ? ($effect_fn_79024_temp__5825__auto___79010$$ = $temp__5823__auto___79023$$, $effect_fn_79024_temp__5825__auto___79010$$.cljs$core$IFn$_invoke$arity$1 ? $effect_fn_79024_temp__5825__auto___79010$$.cljs$core$IFn$_invoke$arity$1($G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$) : $effect_fn_79024_temp__5825__auto___79010$$.call(null, $G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$)) : re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, 
                $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:", $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$, ". Ignoring."], 0));
                $count__78935_seq__78893$$ = $APP.cljs.core.next($G__79020_effect_fn_79014_effects$$);
                $chunk__78894_effects_without_db$$ = null;
                $context$$ = 0;
              }
              $_STAR_current_trace_STAR__temp_val__78879_i__78896$$ = 0;
            } else {
              return null;
            }
          }
        }
      } finally {
        if (re_frame.trace.is_trace_enabled_QMARK_()) {
          var $end__78595__auto___79029$$ = re_frame.interop.now(), $duration__78596__auto___79030$$ = $end__78595__auto___79029$$ - $APP.cljs$cst$1574$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
          $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces, $APP.cljs.core.conj, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_, cljs$cst$5805$duration, $duration__78596__auto___79030$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$1575$end, re_frame.interop.now()], 0)));
          re_frame.trace.run_tracing_callbacks_BANG_($end__78595__auto___79029$$);
        }
      }
    } finally {
      re_frame.trace._STAR_current_trace_STAR_ = $G__79040__STAR_current_trace_STAR__orig_val__78878_chunk__78934_seq__78933__$1$$;
    }
  } else {
    for ($G__79020_effect_fn_79014_effects$$ = $APP.cljs$cst$4926$effects.cljs$core$IFn$_invoke$arity$1($context$$), $chunk__78894_effects_without_db$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($G__79020_effect_fn_79014_effects$$, $APP.cljs$cst$2457$db), $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$ = $APP.cljs$cst$2457$db.cljs$core$IFn$_invoke$arity$1($G__79020_effect_fn_79014_effects$$), $APP.cljs.core.truth_($G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$) && 
    ($G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind, $APP.cljs$cst$2457$db, !1), $G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$.cljs$core$IFn$_invoke$arity$1 ? $G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$.cljs$core$IFn$_invoke$arity$1($G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$) : $G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$.call(null, 
    $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$)), $c__5548__auto__$$ = $APP.cljs.core.seq($chunk__78894_effects_without_db$$), $G__79040__STAR_current_trace_STAR__orig_val__78878_chunk__78934_seq__78933__$1$$ = null, $i__78936_vec__78912$$ = $count__78935_seq__78893$$ = 0;;) {
      if ($i__78936_vec__78912$$ < $count__78935_seq__78893$$) {
        $G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$ = $G__79040__STAR_current_trace_STAR__orig_val__78878_chunk__78934_seq__78933__$1$$.cljs$core$IIndexed$_nth$arity$2(null, $i__78936_vec__78912$$), $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$, 0, null), $G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$, 
        1, null), $temp__5823__auto___79013_temp__5823__auto___79034$$ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind, $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$, !1), $APP.cljs.core.truth_($temp__5823__auto___79013_temp__5823__auto___79034$$) ? ($G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$ = $temp__5823__auto___79013_temp__5823__auto___79034$$, $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$.cljs$core$IFn$_invoke$arity$1 ? 
        $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$.cljs$core$IFn$_invoke$arity$1($G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$) : $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$.call(null, $G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$)) : re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:", 
        $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$, ". Ignoring."], 0)), $i__78936_vec__78912$$ += 1;
      } else {
        if ($temp__5825__auto__$$ = $APP.cljs.core.seq($c__5548__auto__$$)) {
          $G__79040__STAR_current_trace_STAR__orig_val__78878_chunk__78934_seq__78933__$1$$ = $temp__5825__auto__$$, $APP.cljs.core.chunked_seq_QMARK_($G__79040__STAR_current_trace_STAR__orig_val__78878_chunk__78934_seq__78933__$1$$) ? ($c__5548__auto__$$ = $APP.cljs.core.chunk_first($G__79040__STAR_current_trace_STAR__orig_val__78878_chunk__78934_seq__78933__$1$$), $G__79040__STAR_current_trace_STAR__orig_val__78878_chunk__78934_seq__78933__$1$$ = $APP.cljs.core.chunk_rest($G__79040__STAR_current_trace_STAR__orig_val__78878_chunk__78934_seq__78933__$1$$), 
          $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$ = $c__5548__auto__$$, $G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$ = $APP.cljs.core.count($c__5548__auto__$$), $c__5548__auto__$$ = $G__79040__STAR_current_trace_STAR__orig_val__78878_chunk__78934_seq__78933__$1$$, $G__79040__STAR_current_trace_STAR__orig_val__78878_chunk__78934_seq__78933__$1$$ = $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$, $count__78935_seq__78893$$ = 
          $G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$) : ($G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$ = $APP.cljs.core.first($G__79040__STAR_current_trace_STAR__orig_val__78878_chunk__78934_seq__78933__$1$$), $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$, 0, null), $G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$ = 
          $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$, 1, null), $c__5548__auto__$$ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind, $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$, !1), $APP.cljs.core.truth_($c__5548__auto__$$) ? ($G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$ = $c__5548__auto__$$, $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$.cljs$core$IFn$_invoke$arity$1 ? 
          $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$.cljs$core$IFn$_invoke$arity$1($G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$) : $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$.call(null, $G__79042_effect_value_fexpr__78922_79033_vec__78948_vec__78962$$)) : re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:", 
          $G__79041_effect_fn_79035_effect_fn_79045_effect_key_temp__5825__auto___79031$$, ". Ignoring."], 0)), $c__5548__auto__$$ = $APP.cljs.core.next($G__79040__STAR_current_trace_STAR__orig_val__78878_chunk__78934_seq__78933__$1$$), $G__79040__STAR_current_trace_STAR__orig_val__78878_chunk__78934_seq__78933__$1$$ = null, $count__78935_seq__78893$$ = 0), $i__78936_vec__78912$$ = 0;
        } else {
          return null;
        }
      }
    }
  }
}], 0));
re_frame.fx.dispatch_later = function($map__78966__$1_p__78965$$) {
  $map__78966__$1_p__78965$$ = $APP.cljs.core.__destructure_map($map__78966__$1_p__78965$$);
  var $ms$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__78966__$1_p__78965$$, $APP.cljs$cst$5835$ms), $dispatch$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__78966__$1_p__78965$$, $APP.cljs$cst$346$dispatch);
  return $APP.cljs.core.empty_QMARK_($dispatch$$) || typeof $ms$$ !== "number" ? re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:", $map__78966__$1_p__78965$$], 0)) : re_frame.interop.set_timeout_BANG_(function() {
    return re_frame.router.dispatch($dispatch$$);
  }, $ms$$);
};
re_frame.fx.reg_fx(cljs$cst$5836$dispatch_later, function($c__5548__auto__$jscomp$68_seq__78970_temp__5825__auto__$jscomp$1003_value$$) {
  if ($APP.cljs.core.map_QMARK_($c__5548__auto__$jscomp$68_seq__78970_temp__5825__auto__$jscomp$1003_value$$)) {
    return re_frame.fx.dispatch_later($c__5548__auto__$jscomp$68_seq__78970_temp__5825__auto__$jscomp$1003_value$$);
  }
  $c__5548__auto__$jscomp$68_seq__78970_temp__5825__auto__$jscomp$1003_value$$ = $APP.cljs.core.seq($APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.nil_QMARK_, $c__5548__auto__$jscomp$68_seq__78970_temp__5825__auto__$jscomp$1003_value$$));
  for (var $G__79055_chunk__78971_seq__78970__$1$$ = null, $G__79054_count__78972$$ = 0, $i__78973$$ = 0;;) {
    if ($i__78973$$ < $G__79054_count__78972$$) {
      var $G__79056_effect$$ = $G__79055_chunk__78971_seq__78970__$1$$.cljs$core$IIndexed$_nth$arity$2(null, $i__78973$$);
      re_frame.fx.dispatch_later($G__79056_effect$$);
      $i__78973$$ += 1;
    } else {
      if ($c__5548__auto__$jscomp$68_seq__78970_temp__5825__auto__$jscomp$1003_value$$ = $APP.cljs.core.seq($c__5548__auto__$jscomp$68_seq__78970_temp__5825__auto__$jscomp$1003_value$$)) {
        $G__79055_chunk__78971_seq__78970__$1$$ = $c__5548__auto__$jscomp$68_seq__78970_temp__5825__auto__$jscomp$1003_value$$, $APP.cljs.core.chunked_seq_QMARK_($G__79055_chunk__78971_seq__78970__$1$$) ? ($c__5548__auto__$jscomp$68_seq__78970_temp__5825__auto__$jscomp$1003_value$$ = $APP.cljs.core.chunk_first($G__79055_chunk__78971_seq__78970__$1$$), $G__79054_count__78972$$ = $APP.cljs.core.chunk_rest($G__79055_chunk__78971_seq__78970__$1$$), $G__79055_chunk__78971_seq__78970__$1$$ = $c__5548__auto__$jscomp$68_seq__78970_temp__5825__auto__$jscomp$1003_value$$, 
        $G__79056_effect$$ = $APP.cljs.core.count($c__5548__auto__$jscomp$68_seq__78970_temp__5825__auto__$jscomp$1003_value$$), $c__5548__auto__$jscomp$68_seq__78970_temp__5825__auto__$jscomp$1003_value$$ = $G__79054_count__78972$$, $G__79054_count__78972$$ = $G__79056_effect$$) : ($G__79056_effect$$ = $APP.cljs.core.first($G__79055_chunk__78971_seq__78970__$1$$), re_frame.fx.dispatch_later($G__79056_effect$$), $c__5548__auto__$jscomp$68_seq__78970_temp__5825__auto__$jscomp$1003_value$$ = $APP.cljs.core.next($G__79055_chunk__78971_seq__78970__$1$$), 
        $G__79055_chunk__78971_seq__78970__$1$$ = null, $G__79054_count__78972$$ = 0), $i__78973$$ = 0;
      } else {
        return null;
      }
    }
  }
});
re_frame.fx.reg_fx(cljs$cst$5795$fx, function($G__79068_seq__78974_seq__78974__$1_seq_of_effects_temp__5825__auto__$$) {
  if ($APP.cljs.core.sequential_QMARK_($G__79068_seq__78974_seq__78974__$1_seq_of_effects_temp__5825__auto__$$)) {
    $G__79068_seq__78974_seq__78974__$1_seq_of_effects_temp__5825__auto__$$ = $APP.cljs.core.seq($APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.nil_QMARK_, $G__79068_seq__78974_seq__78974__$1_seq_of_effects_temp__5825__auto__$$));
    for (var $chunk__78975_temp__5823__auto___79072$$ = null, $count__78976$$ = 0, $i__78977$$ = 0;;) {
      if ($i__78977$$ < $count__78976$$) {
        var $G__79070_c__5548__auto__$jscomp$69_effect_value$$ = $chunk__78975_temp__5823__auto___79072$$.cljs$core$IIndexed$_nth$arity$2(null, $i__78977$$), $G__79069_effect_fn_79063_effect_fn_79073_effect_key$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__79070_c__5548__auto__$jscomp$69_effect_value$$, 0, null);
        $G__79070_c__5548__auto__$jscomp$69_effect_value$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__79070_c__5548__auto__$jscomp$69_effect_value$$, 1, null);
        $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$2457$db, $G__79069_effect_fn_79063_effect_fn_79073_effect_key$$) && re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(['re-frame: ":fx" effect should not contain a :db effect'], 0));
        var $temp__5823__auto___79062$$ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind, $G__79069_effect_fn_79063_effect_fn_79073_effect_key$$, !1);
        $APP.cljs.core.truth_($temp__5823__auto___79062$$) ? ($G__79069_effect_fn_79063_effect_fn_79073_effect_key$$ = $temp__5823__auto___79062$$, $G__79069_effect_fn_79063_effect_fn_79073_effect_key$$.cljs$core$IFn$_invoke$arity$1 ? $G__79069_effect_fn_79063_effect_fn_79073_effect_key$$.cljs$core$IFn$_invoke$arity$1($G__79070_c__5548__auto__$jscomp$69_effect_value$$) : $G__79069_effect_fn_79063_effect_fn_79073_effect_key$$.call(null, $G__79070_c__5548__auto__$jscomp$69_effect_value$$)) : re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, 
        $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(['re-frame: in ":fx" effect found ', $G__79069_effect_fn_79063_effect_fn_79073_effect_key$$, " which has no associated handler. Ignoring."], 0));
        $i__78977$$ += 1;
      } else {
        if ($G__79068_seq__78974_seq__78974__$1_seq_of_effects_temp__5825__auto__$$ = $APP.cljs.core.seq($G__79068_seq__78974_seq__78974__$1_seq_of_effects_temp__5825__auto__$$)) {
          $APP.cljs.core.chunked_seq_QMARK_($G__79068_seq__78974_seq__78974__$1_seq_of_effects_temp__5825__auto__$$) ? ($G__79070_c__5548__auto__$jscomp$69_effect_value$$ = $APP.cljs.core.chunk_first($G__79068_seq__78974_seq__78974__$1_seq_of_effects_temp__5825__auto__$$), $G__79068_seq__78974_seq__78974__$1_seq_of_effects_temp__5825__auto__$$ = $APP.cljs.core.chunk_rest($G__79068_seq__78974_seq__78974__$1_seq_of_effects_temp__5825__auto__$$), $G__79069_effect_fn_79063_effect_fn_79073_effect_key$$ = 
          $G__79070_c__5548__auto__$jscomp$69_effect_value$$, $G__79070_c__5548__auto__$jscomp$69_effect_value$$ = $APP.cljs.core.count($G__79070_c__5548__auto__$jscomp$69_effect_value$$), $chunk__78975_temp__5823__auto___79072$$ = $G__79069_effect_fn_79063_effect_fn_79073_effect_key$$, $count__78976$$ = $G__79070_c__5548__auto__$jscomp$69_effect_value$$) : ($G__79070_c__5548__auto__$jscomp$69_effect_value$$ = $APP.cljs.core.first($G__79068_seq__78974_seq__78974__$1_seq_of_effects_temp__5825__auto__$$), 
          $G__79069_effect_fn_79063_effect_fn_79073_effect_key$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__79070_c__5548__auto__$jscomp$69_effect_value$$, 0, null), $G__79070_c__5548__auto__$jscomp$69_effect_value$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__79070_c__5548__auto__$jscomp$69_effect_value$$, 1, null), $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$2457$db, $G__79069_effect_fn_79063_effect_fn_79073_effect_key$$) && re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, 
          $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(['re-frame: ":fx" effect should not contain a :db effect'], 0)), $chunk__78975_temp__5823__auto___79072$$ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind, $G__79069_effect_fn_79063_effect_fn_79073_effect_key$$, !1), $APP.cljs.core.truth_($chunk__78975_temp__5823__auto___79072$$) ? ($G__79069_effect_fn_79063_effect_fn_79073_effect_key$$ = $chunk__78975_temp__5823__auto___79072$$, $G__79069_effect_fn_79063_effect_fn_79073_effect_key$$.cljs$core$IFn$_invoke$arity$1 ? 
          $G__79069_effect_fn_79063_effect_fn_79073_effect_key$$.cljs$core$IFn$_invoke$arity$1($G__79070_c__5548__auto__$jscomp$69_effect_value$$) : $G__79069_effect_fn_79063_effect_fn_79073_effect_key$$.call(null, $G__79070_c__5548__auto__$jscomp$69_effect_value$$)) : re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(['re-frame: in ":fx" effect found ', $G__79069_effect_fn_79063_effect_fn_79073_effect_key$$, 
          " which has no associated handler. Ignoring."], 0)), $G__79068_seq__78974_seq__78974__$1_seq_of_effects_temp__5825__auto__$$ = $APP.cljs.core.next($G__79068_seq__78974_seq__78974__$1_seq_of_effects_temp__5825__auto__$$), $chunk__78975_temp__5823__auto___79072$$ = null, $count__78976$$ = 0), $i__78977$$ = 0;
        } else {
          return null;
        }
      }
    }
  } else {
    return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(['re-frame: ":fx" effect expects a seq, but was given ', $APP.cljs.core.type($G__79068_seq__78974_seq__78974__$1_seq_of_effects_temp__5825__auto__$$)], 0));
  }
});
re_frame.fx.reg_fx($APP.cljs$cst$346$dispatch, function($value$$) {
  return $APP.cljs.core.vector_QMARK_($value$$) ? re_frame.router.dispatch($value$$) : re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:", $value$$], 0));
});
re_frame.fx.reg_fx(cljs$cst$5837$dispatch_n, function($c__5548__auto__$jscomp$70_seq__79002_temp__5825__auto__$jscomp$1005_value$$) {
  if ($APP.cljs.core.sequential_QMARK_($c__5548__auto__$jscomp$70_seq__79002_temp__5825__auto__$jscomp$1005_value$$)) {
    $c__5548__auto__$jscomp$70_seq__79002_temp__5825__auto__$jscomp$1005_value$$ = $APP.cljs.core.seq($APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.nil_QMARK_, $c__5548__auto__$jscomp$70_seq__79002_temp__5825__auto__$jscomp$1005_value$$));
    for (var $G__79083_chunk__79003_seq__79002__$1$$ = null, $G__79082_count__79004$$ = 0, $i__79005$$ = 0;;) {
      if ($i__79005$$ < $G__79082_count__79004$$) {
        var $G__79084_event$$ = $G__79083_chunk__79003_seq__79002__$1$$.cljs$core$IIndexed$_nth$arity$2(null, $i__79005$$);
        re_frame.router.dispatch($G__79084_event$$);
        $i__79005$$ += 1;
      } else {
        if ($c__5548__auto__$jscomp$70_seq__79002_temp__5825__auto__$jscomp$1005_value$$ = $APP.cljs.core.seq($c__5548__auto__$jscomp$70_seq__79002_temp__5825__auto__$jscomp$1005_value$$)) {
          $G__79083_chunk__79003_seq__79002__$1$$ = $c__5548__auto__$jscomp$70_seq__79002_temp__5825__auto__$jscomp$1005_value$$, $APP.cljs.core.chunked_seq_QMARK_($G__79083_chunk__79003_seq__79002__$1$$) ? ($c__5548__auto__$jscomp$70_seq__79002_temp__5825__auto__$jscomp$1005_value$$ = $APP.cljs.core.chunk_first($G__79083_chunk__79003_seq__79002__$1$$), $G__79082_count__79004$$ = $APP.cljs.core.chunk_rest($G__79083_chunk__79003_seq__79002__$1$$), $G__79083_chunk__79003_seq__79002__$1$$ = $c__5548__auto__$jscomp$70_seq__79002_temp__5825__auto__$jscomp$1005_value$$, 
          $G__79084_event$$ = $APP.cljs.core.count($c__5548__auto__$jscomp$70_seq__79002_temp__5825__auto__$jscomp$1005_value$$), $c__5548__auto__$jscomp$70_seq__79002_temp__5825__auto__$jscomp$1005_value$$ = $G__79082_count__79004$$, $G__79082_count__79004$$ = $G__79084_event$$) : ($G__79084_event$$ = $APP.cljs.core.first($G__79083_chunk__79003_seq__79002__$1$$), re_frame.router.dispatch($G__79084_event$$), $c__5548__auto__$jscomp$70_seq__79002_temp__5825__auto__$jscomp$1005_value$$ = $APP.cljs.core.next($G__79083_chunk__79003_seq__79002__$1$$), 
          $G__79083_chunk__79003_seq__79002__$1$$ = null, $G__79082_count__79004$$ = 0), $i__79005$$ = 0;
        } else {
          return null;
        }
      }
    }
  } else {
    return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:", $c__5548__auto__$jscomp$70_seq__79002_temp__5825__auto__$jscomp$1005_value$$], 0));
  }
});
re_frame.fx.reg_fx(cljs$cst$5838$deregister_event_handler, function($c__5548__auto__$jscomp$71_seq__79006_temp__5825__auto__$jscomp$1006_value$$) {
  var $clear_event$$ = $APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers, re_frame.events.kind);
  if ($APP.cljs.core.sequential_QMARK_($c__5548__auto__$jscomp$71_seq__79006_temp__5825__auto__$jscomp$1006_value$$)) {
    $c__5548__auto__$jscomp$71_seq__79006_temp__5825__auto__$jscomp$1006_value$$ = $APP.cljs.core.seq($c__5548__auto__$jscomp$71_seq__79006_temp__5825__auto__$jscomp$1006_value$$);
    for (var $G__79095_chunk__79007_seq__79006__$1$$ = null, $G__79094_count__79008$$ = 0, $i__79009$$ = 0;;) {
      if ($i__79009$$ < $G__79094_count__79008$$) {
        var $G__79096_event$$ = $G__79095_chunk__79007_seq__79006__$1$$.cljs$core$IIndexed$_nth$arity$2(null, $i__79009$$);
        $clear_event$$($G__79096_event$$);
        $i__79009$$ += 1;
      } else {
        if ($c__5548__auto__$jscomp$71_seq__79006_temp__5825__auto__$jscomp$1006_value$$ = $APP.cljs.core.seq($c__5548__auto__$jscomp$71_seq__79006_temp__5825__auto__$jscomp$1006_value$$)) {
          $G__79095_chunk__79007_seq__79006__$1$$ = $c__5548__auto__$jscomp$71_seq__79006_temp__5825__auto__$jscomp$1006_value$$, $APP.cljs.core.chunked_seq_QMARK_($G__79095_chunk__79007_seq__79006__$1$$) ? ($c__5548__auto__$jscomp$71_seq__79006_temp__5825__auto__$jscomp$1006_value$$ = $APP.cljs.core.chunk_first($G__79095_chunk__79007_seq__79006__$1$$), $G__79094_count__79008$$ = $APP.cljs.core.chunk_rest($G__79095_chunk__79007_seq__79006__$1$$), $G__79095_chunk__79007_seq__79006__$1$$ = $c__5548__auto__$jscomp$71_seq__79006_temp__5825__auto__$jscomp$1006_value$$, 
          $G__79096_event$$ = $APP.cljs.core.count($c__5548__auto__$jscomp$71_seq__79006_temp__5825__auto__$jscomp$1006_value$$), $c__5548__auto__$jscomp$71_seq__79006_temp__5825__auto__$jscomp$1006_value$$ = $G__79094_count__79008$$, $G__79094_count__79008$$ = $G__79096_event$$) : ($G__79096_event$$ = $APP.cljs.core.first($G__79095_chunk__79007_seq__79006__$1$$), $clear_event$$($G__79096_event$$), $c__5548__auto__$jscomp$71_seq__79006_temp__5825__auto__$jscomp$1006_value$$ = $APP.cljs.core.next($G__79095_chunk__79007_seq__79006__$1$$), 
          $G__79095_chunk__79007_seq__79006__$1$$ = null, $G__79094_count__79008$$ = 0), $i__79009$$ = 0;
        } else {
          return null;
        }
      }
    }
  } else {
    return $clear_event$$($c__5548__auto__$jscomp$71_seq__79006_temp__5825__auto__$jscomp$1006_value$$);
  }
});
re_frame.fx.reg_fx($APP.cljs$cst$2457$db, function($value$$) {
  return $APP.cljs.core.deref(re_frame.db.app_db) !== $value$$ ? $APP.cljs.core.reset_BANG_(re_frame.db.app_db, $value$$) : null;
});
re_frame.cofx = {};
re_frame.cofx.kind = cljs$cst$5794$cofx;
re_frame.cofx.reg_cofx = function($id$$, $handler$$) {
  return re_frame.registrar.register_handler(re_frame.cofx.kind, $id$$, $handler$$);
};
re_frame.cofx.inject_cofx = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1 = function($id$$) {
  return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$396$id, cljs$cst$5801$coeffects, cljs$cst$5799$before, function($context$$) {
    var $temp__5823__auto__$$ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.cofx.kind, $id$$);
    return $APP.cljs.core.truth_($temp__5823__auto__$$) ? $APP.cljs.core.update.cljs$core$IFn$_invoke$arity$3($context$$, cljs$cst$5801$coeffects, $temp__5823__auto__$$) : re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No cofx handler registered for", $id$$], 0));
  }], 0));
};
re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2 = function($id$$, $value$$) {
  return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$396$id, cljs$cst$5801$coeffects, cljs$cst$5799$before, function($context$$) {
    var $temp__5823__auto__$$ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.cofx.kind, $id$$);
    return $APP.cljs.core.truth_($temp__5823__auto__$$) ? $APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4($context$$, cljs$cst$5801$coeffects, $temp__5823__auto__$$, $value$$) : re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No cofx handler registered for", $id$$], 0));
  }], 0));
};
re_frame.cofx.inject_cofx.cljs$lang$maxFixedArity = 2;
re_frame.cofx.reg_cofx($APP.cljs$cst$2457$db, function($coeffects$$) {
  return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($coeffects$$, $APP.cljs$cst$2457$db, $APP.cljs.core.deref(re_frame.db.app_db));
});
re_frame.cofx.inject_db = re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1($APP.cljs$cst$2457$db);
re_frame.std_interceptors = {};
re_frame.std_interceptors.debug = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$396$id, $APP.cljs$cst$2223$debug, cljs$cst$5799$before, function($context$$) {
  re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs$cst$5789$log, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Handling re-frame event:", re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2($context$$, $APP.cljs$cst$1735$event)], 0));
  return $context$$;
}, cljs$cst$5798$after, function($context$$) {
  var $event$$ = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2($context$$, $APP.cljs$cst$1735$event), $only_before_78928_orig_db$$ = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2($context$$, $APP.cljs$cst$2457$db), $new_db_only_after_78929_vec__78872_78927$$ = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3($context$$, $APP.cljs$cst$2457$db, cljs$cst$5839$re_frame_DOT_std_interceptors_SLASH_not_found);
  $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($new_db_only_after_78929_vec__78872_78927$$, cljs$cst$5839$re_frame_DOT_std_interceptors_SLASH_not_found) ? re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs$cst$5789$log, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No app-db changes in:", $event$$], 0)) : ($new_db_only_after_78929_vec__78872_78927$$ = $APP.clojure.data.diff($only_before_78928_orig_db$$, $new_db_only_after_78929_vec__78872_78927$$), $only_before_78928_orig_db$$ = 
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($new_db_only_after_78929_vec__78872_78927$$, 0, null), $new_db_only_after_78929_vec__78872_78927$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($new_db_only_after_78929_vec__78872_78927$$, 1, null), $only_before_78928_orig_db$$ != null || $new_db_only_after_78929_vec__78872_78927$$ != null ? (re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2088$group, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["db clojure.data/diff for:", 
  $event$$], 0)), re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs$cst$5789$log, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["only before:", $only_before_78928_orig_db$$], 0)), re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs$cst$5789$log, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["only after :", $new_db_only_after_78929_vec__78872_78927$$], 0)), re_frame.loggers.console(cljs$cst$5790$groupEnd)) : re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs$cst$5789$log, 
  $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No app-db changes resulted from:", $event$$], 0)));
  return $context$$;
}], 0));
re_frame.std_interceptors.unwrap = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$396$id, cljs$cst$5840$unwrap, cljs$cst$5799$before, function($context$$) {
  var $vec__78875$$ = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2($context$$, $APP.cljs$cst$1735$event);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__78875$$, 0, null);
  var $payload$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__78875$$, 1, null);
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(2, $APP.cljs.core.count($vec__78875$$)) && $APP.cljs.core.map_QMARK_($payload$$)) {
    return re_frame.interceptor.assoc_coeffect($context$$, $APP.cljs$cst$1735$event, $payload$$);
  }
  re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(['re-frame: "unwrap" interceptor requires event to be a 2-vector of [event-id payload-map]. Got ', $vec__78875$$], 0));
  return $context$$;
}, cljs$cst$5798$after, function($context$$) {
  return re_frame.interceptor.assoc_coeffect($context$$, $APP.cljs$cst$1735$event, re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2($context$$, cljs$cst$5802$original_event));
}], 0));
re_frame.std_interceptors.trim_v = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$396$id, cljs$cst$5841$trim_v, cljs$cst$5799$before, function($context$$) {
  if ($APP.cljs.core.vector_QMARK_(re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2($context$$, $APP.cljs$cst$1735$event))) {
    return re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic($context$$, $APP.cljs$cst$1735$event, $APP.cljs.core.subvec, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([1], 0));
  }
  re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(['re-frame: "trim-v" interceptor expected event to be a vector. Got a ', $APP.cljs.core.type(re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2($context$$, $APP.cljs$cst$1735$event))], 0));
  return $context$$;
}, cljs$cst$5798$after, function($context$$) {
  return re_frame.interceptor.assoc_coeffect($context$$, $APP.cljs$cst$1735$event, re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2($context$$, cljs$cst$5802$original_event));
}], 0));
re_frame.std_interceptors.db_handler__GT_interceptor = function($handler_fn$$) {
  return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$396$id, cljs$cst$5842$db_handler, cljs$cst$5799$before, function($context$$) {
    var $new_context$$ = re_frame.trace.is_trace_enabled_QMARK_() ? function() {
      var $_STAR_current_trace_STAR__orig_val__78880$$ = re_frame.trace._STAR_current_trace_STAR_, $_STAR_current_trace_STAR__temp_val__78881$$ = re_frame.trace.start_trace(new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5796$op_type, cljs$cst$5843$event_SLASH_handler, $APP.cljs$cst$4512$operation, re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2($context$$, cljs$cst$5802$original_event)], null));
      re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__temp_val__78881$$;
      try {
        try {
          var $map__78882$$ = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1($context$$), $map__78882__$1$$ = $APP.cljs.core.__destructure_map($map__78882$$), $db$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__78882__$1$$, $APP.cljs$cst$2457$db), $event$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__78882__$1$$, $APP.cljs$cst$1735$event);
          return re_frame.interceptor.assoc_effect($context$$, $APP.cljs$cst$2457$db, $handler_fn$$.cljs$core$IFn$_invoke$arity$2 ? $handler_fn$$.cljs$core$IFn$_invoke$arity$2($db$$, $event$$) : $handler_fn$$.call(null, $db$$, $event$$));
        } finally {
          if (re_frame.trace.is_trace_enabled_QMARK_()) {
            var $end__78595__auto___78937$$ = re_frame.interop.now(), $duration__78596__auto___78938$$ = $end__78595__auto___78937$$ - $APP.cljs$cst$1574$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
            $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces, $APP.cljs.core.conj, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_, cljs$cst$5805$duration, $duration__78596__auto___78938$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$1575$end, re_frame.interop.now()], 0)));
            re_frame.trace.run_tracing_callbacks_BANG_($end__78595__auto___78937$$);
          }
        }
      } finally {
        re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__orig_val__78880$$;
      }
    }() : function() {
      var $db$$ = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1($context$$), $event$$ = $APP.cljs.core.__destructure_map($db$$);
      $db$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($event$$, $APP.cljs$cst$2457$db);
      $event$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($event$$, $APP.cljs$cst$1735$event);
      return re_frame.interceptor.assoc_effect($context$$, $APP.cljs$cst$2457$db, $handler_fn$$.cljs$core$IFn$_invoke$arity$2 ? $handler_fn$$.cljs$core$IFn$_invoke$arity$2($db$$, $event$$) : $handler_fn$$.call(null, $db$$, $event$$));
    }();
    if (re_frame.trace.is_trace_enabled_QMARK_()) {
      var $new_trace__78597__auto___78942$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$4926$effects, 
      re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1($new_context$$), cljs$cst$5801$coeffects, re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1($context$$)], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$4926$effects, re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1($new_context$$), cljs$cst$5801$coeffects, 
      re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1($context$$)], null)], null), $APP.cljs$cst$2121$tags)], 0));
      re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78942$$;
    }
    return $new_context$$;
  }], 0));
};
re_frame.std_interceptors.fx_handler__GT_interceptor = function($handler_fn$$) {
  return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$396$id, cljs$cst$5844$fx_handler, cljs$cst$5799$before, function($context$$) {
    var $new_context$$ = re_frame.trace.is_trace_enabled_QMARK_() ? function() {
      var $_STAR_current_trace_STAR__orig_val__78885$$ = re_frame.trace._STAR_current_trace_STAR_, $_STAR_current_trace_STAR__temp_val__78886$$ = re_frame.trace.start_trace(new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5796$op_type, cljs$cst$5843$event_SLASH_handler, $APP.cljs$cst$4512$operation, re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2($context$$, cljs$cst$5802$original_event)], null));
      re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__temp_val__78886$$;
      try {
        try {
          var $map__78889$$ = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1($context$$), $map__78889__$1$$ = $APP.cljs.core.__destructure_map($map__78889$$), $event$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__78889__$1$$, $APP.cljs$cst$1735$event);
          return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($context$$, $APP.cljs$cst$4926$effects, $handler_fn$$.cljs$core$IFn$_invoke$arity$2 ? $handler_fn$$.cljs$core$IFn$_invoke$arity$2($map__78889__$1$$, $event$$) : $handler_fn$$.call(null, $map__78889__$1$$, $event$$));
        } finally {
          if (re_frame.trace.is_trace_enabled_QMARK_()) {
            var $end__78595__auto___78946$$ = re_frame.interop.now(), $duration__78596__auto___78947$$ = $end__78595__auto___78946$$ - $APP.cljs$cst$1574$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
            $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces, $APP.cljs.core.conj, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_, cljs$cst$5805$duration, $duration__78596__auto___78947$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$1575$end, re_frame.interop.now()], 0)));
            re_frame.trace.run_tracing_callbacks_BANG_($end__78595__auto___78946$$);
          }
        }
      } finally {
        re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__orig_val__78885$$;
      }
    }() : function() {
      var $map__78891_map__78891__$1$$ = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1($context$$);
      $map__78891_map__78891__$1$$ = $APP.cljs.core.__destructure_map($map__78891_map__78891__$1$$);
      var $event$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__78891_map__78891__$1$$, $APP.cljs$cst$1735$event);
      return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($context$$, $APP.cljs$cst$4926$effects, $handler_fn$$.cljs$core$IFn$_invoke$arity$2 ? $handler_fn$$.cljs$core$IFn$_invoke$arity$2($map__78891_map__78891__$1$$, $event$$) : $handler_fn$$.call(null, $map__78891_map__78891__$1$$, $event$$));
    }();
    if (re_frame.trace.is_trace_enabled_QMARK_()) {
      var $new_trace__78597__auto___78951$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$4926$effects, 
      re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1($new_context$$), cljs$cst$5801$coeffects, re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1($context$$)], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$4926$effects, re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1($new_context$$), cljs$cst$5801$coeffects, 
      re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1($context$$)], null)], null), $APP.cljs$cst$2121$tags)], 0));
      re_frame.trace._STAR_current_trace_STAR_ = $new_trace__78597__auto___78951$$;
    }
    return $new_context$$;
  }], 0));
};
re_frame.std_interceptors.ctx_handler__GT_interceptor = function($handler_fn$$) {
  return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$396$id, cljs$cst$5845$ctx_handler, cljs$cst$5799$before, function($context$$) {
    if (re_frame.trace.is_trace_enabled_QMARK_()) {
      a: {
        var $_STAR_current_trace_STAR__orig_val__78900$$ = re_frame.trace._STAR_current_trace_STAR_, $_STAR_current_trace_STAR__temp_val__78901$$ = re_frame.trace.start_trace(new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5796$op_type, cljs$cst$5843$event_SLASH_handler, $APP.cljs$cst$4512$operation, re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2($context$$, cljs$cst$5802$original_event)], null));
        re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__temp_val__78901$$;
        try {
          try {
            var $JSCompiler_temp$jscomp$1956_new_context$$ = $handler_fn$$.cljs$core$IFn$_invoke$arity$1 ? $handler_fn$$.cljs$core$IFn$_invoke$arity$1($context$$) : $handler_fn$$.call(null, $context$$);
            break a;
          } finally {
            if (re_frame.trace.is_trace_enabled_QMARK_()) {
              var $end__78595__auto___78952$$ = re_frame.interop.now(), $duration__78596__auto___78953$$ = $end__78595__auto___78952$$ - $APP.cljs$cst$1574$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
              $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces, $APP.cljs.core.conj, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_, cljs$cst$5805$duration, $duration__78596__auto___78953$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$1575$end, re_frame.interop.now()], 0)));
              re_frame.trace.run_tracing_callbacks_BANG_($end__78595__auto___78952$$);
            }
          }
        } finally {
          re_frame.trace._STAR_current_trace_STAR_ = $_STAR_current_trace_STAR__orig_val__78900$$;
        }
        $JSCompiler_temp$jscomp$1956_new_context$$ = void 0;
      }
    } else {
      $JSCompiler_temp$jscomp$1956_new_context$$ = $handler_fn$$.cljs$core$IFn$_invoke$arity$1 ? $handler_fn$$.cljs$core$IFn$_invoke$arity$1($context$$) : $handler_fn$$.call(null, $context$$);
    }
    re_frame.trace.is_trace_enabled_QMARK_() && ($context$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_, $APP.cljs$cst$2121$tags, $APP.cljs.core.merge, $APP.cljs$cst$2121$tags.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$4926$effects, 
    re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1($JSCompiler_temp$jscomp$1956_new_context$$), cljs$cst$5801$coeffects, re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1($context$$)], null)], null))), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2121$tags, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$4926$effects, re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1($JSCompiler_temp$jscomp$1956_new_context$$), 
    cljs$cst$5801$coeffects, re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1($context$$)], null)], null), $APP.cljs$cst$2121$tags)], 0)), re_frame.trace._STAR_current_trace_STAR_ = $context$$);
    return $JSCompiler_temp$jscomp$1956_new_context$$;
  }], 0));
};
re_frame.std_interceptors.path = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$344_argseq__5756__auto__$$ = [], $len__5749__auto___78955$$ = arguments.length, $i__5750__auto___78956$$ = 0;;) {
    if ($i__5750__auto___78956$$ < $len__5749__auto___78955$$) {
      $args__5755__auto__$jscomp$344_argseq__5756__auto__$$.push(arguments[$i__5750__auto___78956$$]), $i__5750__auto___78956$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$344_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$344_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$344_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$344_argseq__5756__auto__$$);
};
re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic = function($args$$) {
  var $path$$ = $APP.cljs.core.flatten($args$$), $db_store_key$$ = cljs$cst$5846$re_frame_path_SLASH_db_store;
  $APP.cljs.core.empty_QMARK_($path$$) && re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$1404$error, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(['re-frame: "path" interceptor given no params'], 0));
  return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$396$id, $APP.cljs$cst$573$path, cljs$cst$5799$before, function($context$$) {
    var $original_db$$ = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2($context$$, $APP.cljs$cst$2457$db);
    return re_frame.interceptor.assoc_coeffect($APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4($context$$, $db_store_key$$, $APP.cljs.core.conj, $original_db$$), $APP.cljs$cst$2457$db, $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($original_db$$, $path$$));
  }, cljs$cst$5798$after, function($context$jscomp$91_db$$) {
    var $context_SINGLEQUOTE_$$ = $db_store_key$$.cljs$core$IFn$_invoke$arity$1($context$jscomp$91_db$$), $original_db$$ = $APP.cljs.core.peek($context_SINGLEQUOTE_$$);
    $context_SINGLEQUOTE_$$ = $APP.cljs.core.pop($context_SINGLEQUOTE_$$);
    $context_SINGLEQUOTE_$$ = re_frame.interceptor.assoc_coeffect($APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($context$jscomp$91_db$$, $db_store_key$$, $context_SINGLEQUOTE_$$), $APP.cljs$cst$2457$db, $original_db$$);
    $context$jscomp$91_db$$ = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3($context$jscomp$91_db$$, $APP.cljs$cst$2457$db, cljs$cst$5839$re_frame_DOT_std_interceptors_SLASH_not_found);
    return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($context$jscomp$91_db$$, cljs$cst$5839$re_frame_DOT_std_interceptors_SLASH_not_found) ? $context_SINGLEQUOTE_$$ : re_frame.interceptor.assoc_effect($context_SINGLEQUOTE_$$, $APP.cljs$cst$2457$db, $APP.cljs.core.assoc_in($original_db$$, $path$$, $context$jscomp$91_db$$));
  }], 0));
};
re_frame.std_interceptors.path.cljs$lang$maxFixedArity = 0;
re_frame.std_interceptors.path.cljs$lang$applyTo = function($seq78905$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq78905$$));
};
re_frame.std_interceptors.enrich = function($f$$) {
  return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$396$id, cljs$cst$5847$enrich, cljs$cst$5798$after, function($context$$) {
    var $JSCompiler_temp_const$jscomp$1958_event$$ = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2($context$$, $APP.cljs$cst$1735$event), $JSCompiler_inline_result$$ = $APP.cljs.core.contains_QMARK_(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1($context$$), $APP.cljs$cst$2457$db) ? re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2($context$$, $APP.cljs$cst$2457$db) : re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2($context$$, $APP.cljs$cst$2457$db), 
    $new_db$$ = $f$$.cljs$core$IFn$_invoke$arity$2 ? $f$$.cljs$core$IFn$_invoke$arity$2($JSCompiler_inline_result$$, $JSCompiler_temp_const$jscomp$1958_event$$) : $f$$.call(null, $JSCompiler_inline_result$$, $JSCompiler_temp_const$jscomp$1958_event$$);
    $JSCompiler_temp_const$jscomp$1958_event$$ = re_frame.interceptor;
    var $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$1958_event$$.assoc_effect;
    $JSCompiler_inline_result$$ = $APP.cljs.core.truth_($new_db$$) ? $new_db$$ : $JSCompiler_inline_result$$;
    return $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$1958_event$$, $context$$, $APP.cljs$cst$2457$db, $JSCompiler_inline_result$$);
  }], 0));
};
re_frame.std_interceptors.after = function($f$$) {
  return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$396$id, cljs$cst$5798$after, cljs$cst$5798$after, function($context$$) {
    var $db$$ = $APP.cljs.core.contains_QMARK_(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1($context$$), $APP.cljs$cst$2457$db) ? re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2($context$$, $APP.cljs$cst$2457$db) : re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2($context$$, $APP.cljs$cst$2457$db), $event$$ = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2($context$$, $APP.cljs$cst$1735$event);
    $f$$.cljs$core$IFn$_invoke$arity$2 ? $f$$.cljs$core$IFn$_invoke$arity$2($db$$, $event$$) : $f$$.call(null, $db$$, $event$$);
    return $context$$;
  }], 0));
};
re_frame.std_interceptors.on_changes = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$345_argseq__5756__auto__$$ = [], $len__5749__auto___78958$$ = arguments.length, $i__5750__auto___78959$$ = 0;;) {
    if ($i__5750__auto___78959$$ < $len__5749__auto___78958$$) {
      $args__5755__auto__$jscomp$345_argseq__5756__auto__$$.push(arguments[$i__5750__auto___78959$$]), $i__5750__auto___78959$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$345_argseq__5756__auto__$$ = 2 < $args__5755__auto__$jscomp$345_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$345_argseq__5756__auto__$$.slice(2), 0, null) : null;
  return re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args__5755__auto__$jscomp$345_argseq__5756__auto__$$);
};
re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic = function($f$$, $out_path$$, $in_paths$$) {
  return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$396$id, cljs$cst$5848$on_changes, cljs$cst$5798$after, function($context$$) {
    var $new_db$$ = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2($context$$, $APP.cljs$cst$2457$db), $old_db$$ = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2($context$$, $APP.cljs$cst$2457$db), $new_ins$$ = $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__78911_SHARP_$$) {
      return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($new_db$$, $p1__78911_SHARP_$$);
    }, $in_paths$$), $old_ins$$ = $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__78915_SHARP_$$) {
      return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($old_db$$, $p1__78915_SHARP_$$);
    }, $in_paths$$), $changed_ins_QMARK_$$ = function() {
      var $and__5023__auto__$$ = $APP.cljs.core.contains_QMARK_(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1($context$$), $APP.cljs$cst$2457$db);
      return $and__5023__auto__$$ ? $APP.cljs.core.some($APP.cljs.core.false_QMARK_, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.identical_QMARK_, $new_ins$$, $old_ins$$)) : $and__5023__auto__$$;
    }();
    return $APP.cljs.core.truth_($changed_ins_QMARK_$$) ? re_frame.interceptor.assoc_effect($context$$, $APP.cljs$cst$2457$db, $APP.cljs.core.assoc_in($new_db$$, $out_path$$, $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($f$$, $new_ins$$))) : $context$$;
  }], 0));
};
re_frame.std_interceptors.on_changes.cljs$lang$maxFixedArity = 2;
re_frame.std_interceptors.on_changes.cljs$lang$applyTo = function($G__78918_seq78916$$) {
  var $G__78917$$ = $APP.cljs.core.first($G__78918_seq78916$$), $seq78916__$1_seq78916__$2$$ = $APP.cljs.core.next($G__78918_seq78916$$);
  $G__78918_seq78916$$ = $APP.cljs.core.first($seq78916__$1_seq78916__$2$$);
  $seq78916__$1_seq78916__$2$$ = $APP.cljs.core.next($seq78916__$1_seq78916__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__78917$$, $G__78918_seq78916$$, $seq78916__$1_seq78916__$2$$);
};
re_frame.std_interceptors.inject_global_interceptors = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$396$id, cljs$cst$5849$inject_global_interceptors, cljs$cst$5799$before, function($context$$) {
  return $APP.cljs.core.update.cljs$core$IFn$_invoke$arity$3($context$$, $APP.cljs$cst$1664$queue, function($p1__78923_SHARP_$$) {
    return $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2(re_frame.settings.get_global_interceptors(), $p1__78923_SHARP_$$);
  });
}], 0));
re_frame.core = {};
re_frame.core.dispatch = function($event$$) {
  return re_frame.router.dispatch($event$$);
};
re_frame.core.dispatch_sync = function($event$$) {
  return re_frame.router.dispatch_sync($event$$);
};
re_frame.core.reg_event_db = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = function($id$$, $handler$$) {
  return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3($id$$, null, $handler$$);
};
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = function($id$$, $interceptors$$, $handler$$) {
  return re_frame.events.register($id$$, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db, re_frame.fx.do_fx, re_frame.std_interceptors.inject_global_interceptors, $interceptors$$, re_frame.std_interceptors.db_handler__GT_interceptor($handler$$)], null));
};
re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;
re_frame.core.reg_event_fx = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = function($id$$, $handler$$) {
  return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3($id$$, null, $handler$$);
};
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = function($id$$, $interceptors$$, $handler$$) {
  return re_frame.events.register($id$$, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db, re_frame.fx.do_fx, re_frame.std_interceptors.inject_global_interceptors, $interceptors$$, re_frame.std_interceptors.fx_handler__GT_interceptor($handler$$)], null));
};
re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;
re_frame.core.reg_event_ctx = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = function($id$$, $handler$$) {
  return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3($id$$, null, $handler$$);
};
re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = function($id$$, $interceptors$$, $handler$$) {
  return re_frame.events.register($id$$, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db, re_frame.fx.do_fx, re_frame.std_interceptors.inject_global_interceptors, $interceptors$$, re_frame.std_interceptors.ctx_handler__GT_interceptor($handler$$)], null));
};
re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;
re_frame.core.clear_event = function($var_args$$) {
  switch(arguments.length) {
    case 0:
      return re_frame.core.clear_event.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return re_frame.core.clear_event.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.core.clear_event.cljs$core$IFn$_invoke$arity$0 = function() {
  return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.events.kind);
};
re_frame.core.clear_event.cljs$core$IFn$_invoke$arity$1 = function($id$$) {
  return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2(re_frame.events.kind, $id$$);
};
re_frame.core.clear_event.cljs$lang$maxFixedArity = 1;
re_frame.core.reg_sub = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$346_argseq__5756__auto__$$ = [], $len__5749__auto___79191$$ = arguments.length, $i__5750__auto___79192$$ = 0;;) {
    if ($i__5750__auto___79192$$ < $len__5749__auto___79191$$) {
      $args__5755__auto__$jscomp$346_argseq__5756__auto__$$.push(arguments[$i__5750__auto___79192$$]), $i__5750__auto___79192$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$346_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$346_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$346_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$346_argseq__5756__auto__$$);
};
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic = function($query_id$$, $args$$) {
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.subs.reg_sub, $query_id$$, $args$$);
};
re_frame.core.reg_sub.cljs$lang$maxFixedArity = 1;
re_frame.core.reg_sub.cljs$lang$applyTo = function($seq79110_seq79110__$1$$) {
  var $G__79111$$ = $APP.cljs.core.first($seq79110_seq79110__$1$$);
  $seq79110_seq79110__$1$$ = $APP.cljs.core.next($seq79110_seq79110__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__79111$$, $seq79110_seq79110__$1$$);
};
re_frame.core.subscribe = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 = function($query$$) {
  return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1($query$$);
};
re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$2 = function($query$$, $dynv$$) {
  return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2($query$$, $dynv$$);
};
re_frame.core.subscribe.cljs$lang$maxFixedArity = 2;
re_frame.core.clear_sub = function($var_args$$) {
  switch(arguments.length) {
    case 0:
      return re_frame.core.clear_sub.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return re_frame.core.clear_sub.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.core.clear_sub.cljs$core$IFn$_invoke$arity$0 = function() {
  return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind);
};
re_frame.core.clear_sub.cljs$core$IFn$_invoke$arity$1 = function($query_id$$) {
  return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind, $query_id$$);
};
re_frame.core.clear_sub.cljs$lang$maxFixedArity = 1;
re_frame.core.reg_sub_raw = function($query_id$$, $handler_fn$$) {
  return re_frame.registrar.register_handler(re_frame.subs.kind, $query_id$$, $handler_fn$$);
};
re_frame.core.clear_subscription_cache_BANG_ = function() {
  return re_frame.subs.clear_subscription_cache_BANG_();
};
re_frame.core.reg_fx = function($id$$, $handler$$) {
  return re_frame.fx.reg_fx($id$$, $handler$$);
};
re_frame.core.clear_fx = function($var_args$$) {
  switch(arguments.length) {
    case 0:
      return re_frame.core.clear_fx.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return re_frame.core.clear_fx.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.core.clear_fx.cljs$core$IFn$_invoke$arity$0 = function() {
  return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind);
};
re_frame.core.clear_fx.cljs$core$IFn$_invoke$arity$1 = function($id$$) {
  return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2(re_frame.fx.kind, $id$$);
};
re_frame.core.clear_fx.cljs$lang$maxFixedArity = 1;
re_frame.core.reg_cofx = function($id$$, $handler$$) {
  return re_frame.cofx.reg_cofx($id$$, $handler$$);
};
re_frame.core.inject_cofx = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 = function($id$$) {
  return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1($id$$);
};
re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2 = function($id$$, $value$$) {
  return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2($id$$, $value$$);
};
re_frame.core.inject_cofx.cljs$lang$maxFixedArity = 2;
re_frame.core.clear_cofx = function($var_args$$) {
  switch(arguments.length) {
    case 0:
      return re_frame.core.clear_cofx.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return re_frame.core.clear_cofx.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.core.clear_cofx.cljs$core$IFn$_invoke$arity$0 = function() {
  return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.cofx.kind);
};
re_frame.core.clear_cofx.cljs$core$IFn$_invoke$arity$1 = function($id$$) {
  return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2(re_frame.cofx.kind, $id$$);
};
re_frame.core.clear_cofx.cljs$lang$maxFixedArity = 1;
re_frame.core.debug = re_frame.std_interceptors.debug;
re_frame.core.path = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$347_argseq__5756__auto__$$ = [], $len__5749__auto___79228$$ = arguments.length, $i__5750__auto___79229$$ = 0;;) {
    if ($i__5750__auto___79229$$ < $len__5749__auto___79228$$) {
      $args__5755__auto__$jscomp$347_argseq__5756__auto__$$.push(arguments[$i__5750__auto___79229$$]), $i__5750__auto___79229$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$347_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$347_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$347_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$347_argseq__5756__auto__$$);
};
re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic = function($args$$) {
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.std_interceptors.path, $args$$);
};
re_frame.core.path.cljs$lang$maxFixedArity = 0;
re_frame.core.path.cljs$lang$applyTo = function($seq79122$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq79122$$));
};
re_frame.core.enrich = function($f$$) {
  return re_frame.std_interceptors.enrich($f$$);
};
re_frame.core.unwrap = re_frame.std_interceptors.unwrap;
re_frame.core.trim_v = re_frame.std_interceptors.trim_v;
re_frame.core.after = function($f$$) {
  return re_frame.std_interceptors.after($f$$);
};
re_frame.core.on_changes = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$348_argseq__5756__auto__$$ = [], $len__5749__auto___79246$$ = arguments.length, $i__5750__auto___79247$$ = 0;;) {
    if ($i__5750__auto___79247$$ < $len__5749__auto___79246$$) {
      $args__5755__auto__$jscomp$348_argseq__5756__auto__$$.push(arguments[$i__5750__auto___79247$$]), $i__5750__auto___79247$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$348_argseq__5756__auto__$$ = 2 < $args__5755__auto__$jscomp$348_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$348_argseq__5756__auto__$$.slice(2), 0, null) : null;
  return re_frame.core.on_changes.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args__5755__auto__$jscomp$348_argseq__5756__auto__$$);
};
re_frame.core.on_changes.cljs$core$IFn$_invoke$arity$variadic = function($f$$, $out_path$$, $in_paths$$) {
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$4(re_frame.std_interceptors.on_changes, $f$$, $out_path$$, $in_paths$$);
};
re_frame.core.on_changes.cljs$lang$maxFixedArity = 2;
re_frame.core.on_changes.cljs$lang$applyTo = function($G__79125_seq79123$$) {
  var $G__79124$$ = $APP.cljs.core.first($G__79125_seq79123$$), $seq79123__$1_seq79123__$2$$ = $APP.cljs.core.next($G__79125_seq79123$$);
  $G__79125_seq79123$$ = $APP.cljs.core.first($seq79123__$1_seq79123__$2$$);
  $seq79123__$1_seq79123__$2$$ = $APP.cljs.core.next($seq79123__$1_seq79123__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__79124$$, $G__79125_seq79123$$, $seq79123__$1_seq79123__$2$$);
};
re_frame.core.reg_global_interceptor = function($interceptor$$) {
  return re_frame.settings.reg_global_interceptor($interceptor$$);
};
re_frame.core.clear_global_interceptor = function($var_args$$) {
  switch(arguments.length) {
    case 0:
      return re_frame.core.clear_global_interceptor.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return re_frame.core.clear_global_interceptor.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.core.clear_global_interceptor.cljs$core$IFn$_invoke$arity$0 = function() {
  return re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$0();
};
re_frame.core.clear_global_interceptor.cljs$core$IFn$_invoke$arity$1 = function($id$$) {
  return re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$1($id$$);
};
re_frame.core.clear_global_interceptor.cljs$lang$maxFixedArity = 1;
re_frame.core.__GT_interceptor = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$349_argseq__5756__auto__$$ = [], $len__5749__auto___79267$$ = arguments.length, $i__5750__auto___79268$$ = 0;;) {
    if ($i__5750__auto___79268$$ < $len__5749__auto___79267$$) {
      $args__5755__auto__$jscomp$349_argseq__5756__auto__$$.push(arguments[$i__5750__auto___79268$$]), $i__5750__auto___79268$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$349_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$349_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$349_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$349_argseq__5756__auto__$$);
};
re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = function($map__79138__$1_p__79137$$) {
  $map__79138__$1_p__79137$$ = $APP.cljs.core.__destructure_map($map__79138__$1_p__79137$$);
  $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__79138__$1_p__79137$$, $APP.cljs$cst$396$id);
  $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__79138__$1_p__79137$$, cljs$cst$5799$before);
  $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__79138__$1_p__79137$$, cljs$cst$5798$after);
  return re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic(re_frame.interceptor.__GT_interceptor, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$map__79138__$1_p__79137$$], 0));
};
re_frame.core.__GT_interceptor.cljs$lang$maxFixedArity = 0;
re_frame.core.__GT_interceptor.cljs$lang$applyTo = function($seq79135$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq79135$$));
};
re_frame.core.get_coeffect = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$1 = function($context$$) {
  return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1($context$$);
};
re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2 = function($context$$, $key$$) {
  return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2($context$$, $key$$);
};
re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$3 = function($context$$, $key$$, $not_found$$) {
  return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3($context$$, $key$$, $not_found$$);
};
re_frame.core.get_coeffect.cljs$lang$maxFixedArity = 3;
re_frame.core.assoc_coeffect = function($context$$, $key$$, $value$$) {
  return re_frame.interceptor.assoc_coeffect($context$$, $key$$, $value$$);
};
re_frame.core.get_effect = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$1 = function($context$$) {
  return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1($context$$);
};
re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$2 = function($context$$, $key$$) {
  return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2($context$$, $key$$);
};
re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$3 = function($context$$, $key$$, $not_found$$) {
  return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3($context$$, $key$$, $not_found$$);
};
re_frame.core.get_effect.cljs$lang$maxFixedArity = 3;
re_frame.core.assoc_effect = function($context$$, $key$$, $value$$) {
  return re_frame.interceptor.assoc_effect($context$$, $key$$, $value$$);
};
re_frame.core.enqueue = function($context$$, $interceptors$$) {
  return re_frame.interceptor.enqueue($context$$, $interceptors$$);
};
re_frame.core.set_loggers_BANG_ = function($new_loggers$$) {
  return re_frame.loggers.set_loggers_BANG_($new_loggers$$);
};
re_frame.core.console = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$350_argseq__5756__auto__$$ = [], $len__5749__auto___79277$$ = arguments.length, $i__5750__auto___79280$$ = 0;;) {
    if ($i__5750__auto___79280$$ < $len__5749__auto___79277$$) {
      $args__5755__auto__$jscomp$350_argseq__5756__auto__$$.push(arguments[$i__5750__auto___79280$$]), $i__5750__auto___79280$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$350_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$350_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$350_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$350_argseq__5756__auto__$$);
};
re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic = function($level$$, $args$$) {
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.loggers.console, $level$$, $args$$);
};
re_frame.core.console.cljs$lang$maxFixedArity = 1;
re_frame.core.console.cljs$lang$applyTo = function($seq79151_seq79151__$1$$) {
  var $G__79152$$ = $APP.cljs.core.first($seq79151_seq79151__$1$$);
  $seq79151_seq79151__$1$$ = $APP.cljs.core.next($seq79151_seq79151__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__79152$$, $seq79151_seq79151__$1$$);
};
re_frame.core.make_restore_fn = function() {
  var $handlers$$ = $APP.cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler), $app_db$$ = $APP.cljs.core.deref(re_frame.db.app_db), $subs_cache$$ = $APP.cljs.core.deref(re_frame.subs.query__GT_reaction);
  return function() {
    var $c__5548__auto___79304_original_subs_79288_seq__79157_79290_sub_79309_temp__5825__auto___79302$$ = $APP.cljs.core.set($APP.cljs.core.vals($subs_cache$$)), $G__79306_chunk__79158_79292_current_subs_79289_seq__79157_79303__$1$$ = $APP.cljs.core.set($APP.cljs.core.vals($APP.cljs.core.deref(re_frame.subs.query__GT_reaction)));
    $c__5548__auto___79304_original_subs_79288_seq__79157_79290_sub_79309_temp__5825__auto___79302$$ = $APP.cljs.core.seq($APP.clojure.set.difference.cljs$core$IFn$_invoke$arity$2($G__79306_chunk__79158_79292_current_subs_79289_seq__79157_79303__$1$$, $c__5548__auto___79304_original_subs_79288_seq__79157_79290_sub_79309_temp__5825__auto___79302$$));
    $G__79306_chunk__79158_79292_current_subs_79289_seq__79157_79303__$1$$ = null;
    for (var $G__79307_count__79159_79293$$ = 0, $G__79305_i__79160_79294$$ = 0;;) {
      if ($G__79305_i__79160_79294$$ < $G__79307_count__79159_79293$$) {
        var $sub_79297$$ = $G__79306_chunk__79158_79292_current_subs_79289_seq__79157_79303__$1$$.cljs$core$IIndexed$_nth$arity$2(null, $G__79305_i__79160_79294$$);
        re_frame.interop.dispose_BANG_($sub_79297$$);
        $G__79305_i__79160_79294$$ += 1;
      } else {
        if ($c__5548__auto___79304_original_subs_79288_seq__79157_79290_sub_79309_temp__5825__auto___79302$$ = $APP.cljs.core.seq($c__5548__auto___79304_original_subs_79288_seq__79157_79290_sub_79309_temp__5825__auto___79302$$)) {
          $G__79306_chunk__79158_79292_current_subs_79289_seq__79157_79303__$1$$ = $c__5548__auto___79304_original_subs_79288_seq__79157_79290_sub_79309_temp__5825__auto___79302$$, $APP.cljs.core.chunked_seq_QMARK_($G__79306_chunk__79158_79292_current_subs_79289_seq__79157_79303__$1$$) ? ($c__5548__auto___79304_original_subs_79288_seq__79157_79290_sub_79309_temp__5825__auto___79302$$ = $APP.cljs.core.chunk_first($G__79306_chunk__79158_79292_current_subs_79289_seq__79157_79303__$1$$), $G__79305_i__79160_79294$$ = 
          $APP.cljs.core.chunk_rest($G__79306_chunk__79158_79292_current_subs_79289_seq__79157_79303__$1$$), $G__79306_chunk__79158_79292_current_subs_79289_seq__79157_79303__$1$$ = $c__5548__auto___79304_original_subs_79288_seq__79157_79290_sub_79309_temp__5825__auto___79302$$, $G__79307_count__79159_79293$$ = $APP.cljs.core.count($c__5548__auto___79304_original_subs_79288_seq__79157_79290_sub_79309_temp__5825__auto___79302$$), $c__5548__auto___79304_original_subs_79288_seq__79157_79290_sub_79309_temp__5825__auto___79302$$ = 
          $G__79305_i__79160_79294$$) : ($c__5548__auto___79304_original_subs_79288_seq__79157_79290_sub_79309_temp__5825__auto___79302$$ = $APP.cljs.core.first($G__79306_chunk__79158_79292_current_subs_79289_seq__79157_79303__$1$$), re_frame.interop.dispose_BANG_($c__5548__auto___79304_original_subs_79288_seq__79157_79290_sub_79309_temp__5825__auto___79302$$), $c__5548__auto___79304_original_subs_79288_seq__79157_79290_sub_79309_temp__5825__auto___79302$$ = $APP.cljs.core.next($G__79306_chunk__79158_79292_current_subs_79289_seq__79157_79303__$1$$), 
          $G__79306_chunk__79158_79292_current_subs_79289_seq__79157_79303__$1$$ = null, $G__79307_count__79159_79293$$ = 0), $G__79305_i__79160_79294$$ = 0;
        } else {
          break;
        }
      }
    }
    $APP.cljs.core.reset_BANG_(re_frame.registrar.kind__GT_id__GT_handler, $handlers$$);
    $APP.cljs.core.reset_BANG_(re_frame.db.app_db, $app_db$$);
    return null;
  };
};
re_frame.core.purge_event_queue = function() {
  return re_frame.router.event_queue.re_frame$router$IEventQueue$purge$arity$1(null);
};
re_frame.core.add_post_event_callback = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = function($f$$) {
  return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2($f$$, $f$$);
};
re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = function($id$$, $f$$) {
  return re_frame.router.event_queue.re_frame$router$IEventQueue$add_post_event_callback$arity$3(null, $id$$, $f$$);
};
re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;
re_frame.core.remove_post_event_callback = function($id$$) {
  return re_frame.router.event_queue.re_frame$router$IEventQueue$remove_post_event_callback$arity$2(null, $id$$);
};
re_frame.core.register_handler = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$351_argseq__5756__auto__$$ = [], $len__5749__auto___79324$$ = arguments.length, $i__5750__auto___79325$$ = 0;;) {
    if ($i__5750__auto___79325$$ < $len__5749__auto___79324$$) {
      $args__5755__auto__$jscomp$351_argseq__5756__auto__$$.push(arguments[$i__5750__auto___79325$$]), $i__5750__auto___79325$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$351_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$351_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$351_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$351_argseq__5756__auto__$$);
};
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = function($args$$) {
  re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(['re-frame: "register-handler" has been renamed "reg-event-db" (look for registration of ', $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.first($args$$)), ")"], 0));
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_event_db, $args$$);
};
re_frame.core.register_handler.cljs$lang$maxFixedArity = 0;
re_frame.core.register_handler.cljs$lang$applyTo = function($seq79169$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq79169$$));
};
re_frame.core.register_sub = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$352_argseq__5756__auto__$$ = [], $len__5749__auto___79330$$ = arguments.length, $i__5750__auto___79331$$ = 0;;) {
    if ($i__5750__auto___79331$$ < $len__5749__auto___79330$$) {
      $args__5755__auto__$jscomp$352_argseq__5756__auto__$$.push(arguments[$i__5750__auto___79331$$]), $i__5750__auto___79331$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$352_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$352_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$352_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$352_argseq__5756__auto__$$);
};
re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = function($args$$) {
  re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic($APP.cljs$cst$2225$warn, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(['re-frame: "register-sub" is used to register the event ', $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.first($args$$)), ' but it is a deprecated part of the API. Please use "reg-sub-raw" instead.'], 0));
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_sub_raw, $args$$);
};
re_frame.core.register_sub.cljs$lang$maxFixedArity = 0;
re_frame.core.register_sub.cljs$lang$applyTo = function($seq79170$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq79170$$));
};
$APP.sci.configs.re_frame = {};
$APP.sci.configs.re_frame.re_frame = {};
$APP.sci.configs.re_frame.re_frame.rfns = $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$5850$re_frame_DOT_core, null);
$APP.sci.configs.re_frame.re_frame.rfdbns = $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$5851$re_frame_DOT_db, null);
$APP.sci.configs.re_frame.re_frame.re_frame_namespace = $APP.sci.core._copy_ns($APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs.core.with_meta(cljs$cst$5852$reg_sub_raw, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$5853$query_id, cljs$cst$5854$handler_fn], null))), $APP.cljs$cst$256$doc, 'This is a low level, advanced function.  You should probably be\n  using `reg-sub` instead.\n\n  Some explanation is available in the docs at\n  \x3ca href\x3d"http://day8.github.io/re-frame/flow-mechanics/" target\x3d"_blank"\x3ehttp://day8.github.io/re-frame/flow-mechanics/\x3c/a\x3e', 
cljs$cst$5855$api_docs_SLASH_heading, "Subscriptions"], null)), $APP.cljs.core.with_meta(cljs$cst$5856$dispatch_sync, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$5857$event], null))), $APP.cljs$cst$256$doc, "Synchronously (immediately) process `event`. It does **not** queue\n  the event for handling later as `dispatch` does.\n\n  `event` is a vector and the first element is typically a keyword\n  which identifies the kind of event.\n\n  It is an error to use `dispatch-sync` within an event handler because\n  you can't immediately process an new event when one is already\n  part way through being processed.\n\n  Generally, avoid using this function, and instead, use `dispatch`.\n  Only use it in the narrow set of cases where any delay in\n  processing is a problem:\n\n    1. the `:on-change` handler of a text field where we are expecting fast typing\n    2. when initialising your app - see 'main' in examples/todomvc/src/core.cljs\n    3. in a unit test where immediate, synchronous processing is useful\n\n  Usage:\n\n      #!clj\n      (dispatch-sync [:sing :falsetto \"piano accordion\"])\n  ", 
cljs$cst$5855$api_docs_SLASH_heading, "Dispatching Events"], null)), $APP.cljs.core.with_meta(cljs$cst$5858$reg_sub, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5855$api_docs_SLASH_heading, "Subscriptions", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs.core.list($APP.cljs$cst$5853$query_id, $APP.cljs$cst$1246$args)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$5853$query_id, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$5853$query_id, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null))), $APP.cljs$cst$256$doc, "A call to `reg-sub` associates a `query-id` WITH two functions.\n\n  The two functions provide 'a mechanism' for creating a node\n  in the Signal Graph. When a node of type `query-id` is needed,\n  the two functions can be used to create it.\n\n  The three arguments are:\n\n    - `query-id` - typically a namespaced keyword (later used in subscribe)\n    - optionally, an `input signals` function which returns the input data\n      flows required by this kind of node.\n    - a `computation function` which computes the value (output) of the\n      node (from the input data flows)\n\n  Later, during app execution, a call to `(subscribe [:sub-id 3 :blue])`,\n  will trigger the need for a new `:sub-id` Signal Graph node (matching the\n  query `[:sub-id 3 :blue]`). And, to create that node the two functions\n  associated with `:sub-id` will be looked up and used.\n\n  Just to be clear: calling `reg-sub` does not immediately create a node.\n  It only registers 'a mechanism' (the two functions) by which nodes\n  can be created later, when a node is bought into existence by the\n  use of `subscribe` in a `View Function`.\n\n  `reg-sub` arguments are:\n\n    - a `query-id` (typically a namespaced keyword)\n    - a function which returns the inputs required by this kind of node (can be supplied  in one of three ways)\n    - a function which computes the value of this kind of node (can be supplied in one of three ways)\n\n  The `computation function` is always the last argument supplied and has three ways to be called.\n  Two of these methods are syntactic sugar to provide easier access to functional abstractions around your data.\n\n  1. A function that will accept two parameters, the `input-values` and `query-vector`. This is the\n     standard way to provide a `computation-function`\n\n          #!clj\n          (reg-sub\n            :query-id\n            (fn [input-values query-vector]\n              (:foo input-values)))\n\n  2. A single sugary tuple of `:-\x3e` and a 1-arity `computation-function`:\n\n          #!clj\n          (reg-sub\n            :query-id\n            :-\x3e computation-fn)\n\n      This sugary variation allows you to pass a function that will expect only one parameter,\n      namely the `input-values` and entirely omit the `query-vector`. A typical `computation-function`\n      expects two parameters which can cause unfortunate results when attempting to use\n      clojure standard library functions, or other functions, in a functional manner.\n\n      For example, a significant number of subscriptions exist only to get a value\n      from the `input-values`. As shown below, this subscription will simply retrieve\n      the value associated with the `:foo` key in our db:\n\n          #!clj\n          (reg-sub\n            :query-id\n            (fn [db _]    ;; :\x3c---- trivial boilerplate we might want to skip over\n              (:foo db)))\n\n      This is slightly more boilerplate than we might like to do,\n      as we can use a keyword directly as a function, and we might like to do this:\n\n          #!clj\n          (reg-sub\n            :query-id\n            :foo)  ;; :\x3c---- This could be dangerous. If `:foo` is not in db, we get the `query-vector` instead of `nil`.\n\n      By using `:-\x3e` our function would not contain the `query-vector`, and any\n      missing keys would be represented as such:\n\n          #!clj\n          (reg-sub\n            :query-id\n            :-\x3e :foo)\n\n      This form allows us to ignore the `query-vector` if our `computation-function`\n      has no need for it, and be safe from any accidents. Any 1-arity function can be provided,\n      and for more complicated use cases, `partial`, `comp`, and anonymous functions can still be used.\n\n  3. A single sugary tuple of `:\x3d\x3e` and a multi-arity `computation-function`\n\n          #!clj\n          (reg-sub\n            :query-id\n            :\x3d\x3e computation-fn)\n\n      The `query-vector` can be broken into two components `[query-id \x26 optional-values]`, and\n      some subscriptions require the `optional-values` for extra work within the subscription.\n      To use them in variation #1, we need to destructure our `computation-function` parameters\n      in order to use them.\n\n          #!clj\n          (reg-sub\n            :query-id\n            (fn [db [_ foo]]\n              [db foo]))\n\n      Again we are writing boilerplate just to reach our values, and we might prefer to\n      have direction access through a parameter vector like `[input-values optional-values]`\n      instead, so we might be able to use a multi-arity function directly as our `computation-function`.\n      A rewrite of the above sub using this sugary syntax would look like this:\n\n          #!clj\n          (reg-sub\n            :query-id\n            :\x3d\x3e vector)  ;; :\x3c---- Could also be `(fn [db foo] [db foo])`\n\n  The `computation function` is expected to take two arguments:\n\n    - `input-values` - the values which flow into this node (how is it wired into the graph?)\n    - `query-vector` - the vector given to `subscribe`\n\n  and it returns a computed value (which then becomes the output of the node)\n\n  When `computation function` is called, the 2nd `query-vector` argument will be that\n  vector supplied to the `subscribe`. So, if the call was `(subscribe [:sub-id 3 :blue])`,\n  then the `query-vector` supplied to the computation function will be `[:sub-id 3 :blue]`.\n\n  The argument(s) supplied to `reg-sub` between `query-id` and the `computation-function`\n  can vary in 3 ways, but whatever is there defines the `input signals` part\n  of `the mechanism`, specifying what input values \"flow into\" the\n  `computation function` (as the 1st argument) when it is called.\n\n  So, `reg-sub` can be called in one of three ways, because there are three ways\n  to define the input signals part. But note, the 2nd method, in which a\n  `signals function` is explicitly supplied, is the most canonical and\n  instructive. The other two are really just sugary variations.\n\n  **First variation** - no input signal function given:\n\n      #!clj\n      (reg-sub\n        :query-id\n        a-computation-fn)   ;; has signature:  (fn [db query-vec]  ... ret-value)\n\n     In the absence of an explicit `signals function`, the node's input signal defaults to `app-db`\n     and, as a result, the value within `app-db` (a map) is\n     given as the 1st argument when `a-computation-fn` is called.\n\n\n  **Second variation** - a signal function is explicitly supplied:\n\n      #!clj\n      (reg-sub\n        :query-id\n        signal-fn     ;; \x3c-- here\n        computation-fn)\n\n  This is the most canonical and instructive of the three variations.\n\n  When a node is created from the template, the `signal function` will be called and it\n  is expected to return the input signal(s) as either a singleton, if there is only\n  one, or a sequence if there are many, or a map with the signals as the values.\n\n  The current values of the returned signals will be supplied as the 1st argument to\n  the `a-computation-fn` when it is called - and subject to what this `signal-fn` returns,\n  this value will be either a singleton, sequence or map of them (paralleling\n  the structure returned by the `signal function`).\n\n  This example `signal function` returns a 2-vector of input signals.\n\n      #!clj\n      (fn [query-vec dynamic-vec]\n         [(subscribe [:a-sub])\n          (subscribe [:b-sub])])\n\n  The associated computation function must be written\n  to expect a 2-vector of values for its first argument:\n\n      #!clj\n      (fn [[a b] query-vec]     ;; 1st argument is a seq of two values\n        ....)\n\n  If, on the other hand, the signal function was simpler and returned a singleton, like this:\n\n      #!clj\n      (fn [query-vec dynamic-vec]\n        (subscribe [:a-sub]))      ;; \x3c-- returning a singleton\n\n  then the associated computation function must be written to expect a single value\n  as the 1st argument:\n\n      #!clj\n      (fn [a query-vec]       ;; 1st argument is a single value\n         ...)\n\n  Further Note: variation #1 above, in which an `input-fn` was not supplied, like this:\n\n      #!clj\n      (reg-sub\n        :query-id\n        a-computation-fn)   ;; has signature:  (fn [db query-vec]  ... ret-value)\n\n  is the equivalent of using this\n  2nd variation and explicitly supplying a `signal-fn` which returns `app-db`:\n\n      #!clj\n      (reg-sub\n        :query-id\n        (fn [_ _]  re-frame/app-db)   ;; \x3c--- explicit signal-fn\n        a-computation-fn)             ;; has signature:  (fn [db query-vec]  ... ret-value)\n\n  **Third variation** - syntax Sugar\n\n      #!clj\n      (reg-sub\n        :a-b-sub\n        :\x3c- [:a-sub]\n        :\x3c- [:b-sub]\n        (fn [[a b] query-vec]    ;; 1st argument is a seq of two values\n          {:a a :b b}))\n\n  This 3rd variation is just syntactic sugar for the 2nd.  Instead of providing an\n  `signals-fn` you provide one or more pairs of `:\x3c-` and a subscription vector.\n\n  If you supply only one pair a singleton will be supplied to the computation function,\n  as if you had supplied a `signal-fn` returning only a single value:\n\n      #!clj\n      (reg-sub\n        :a-sub\n        :\x3c- [:a-sub]\n        (fn [a query-vec]      ;; only one pair, so 1st argument is a single value\n          ...))\n\n  Syntactic sugar for both the `signal-fn` and `computation-fn` can be used together\n  and the direction of arrows shows the flow of data and functions. The example from\n  directly above is reproduced here:\n\n      #!clj\n      (reg-sub\n        :a-b-sub\n        :\x3c- [:a-sub]\n        :\x3c- [:b-sub]\n        :-\x3e (partial zipmap [:a :b]))\n\n  For further understanding, read the tutorials, and look at the detailed comments in\n  /examples/todomvc/src/subs.cljs.\n\n  See also: `subscribe`\n  "], 
null)), $APP.cljs.core.with_meta($APP.cljs$cst$347$dispatch, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$5857$event], null))), $APP.cljs$cst$256$doc, "Queue `event` for processing (handling).\n\n  `event` is a vector and the first element is typically a keyword\n  which identifies the kind of event.\n\n  The event will be added to a FIFO processing queue, so event\n  handling does not happen immediately. It will happen 'very soon'\n  but not now. And if the queue already contains events, they\n  will be processed first.\n\n  Usage:\n\n      #!clj\n      (dispatch [:order \"pizza\" {:supreme 2 :meatlovers 1 :veg 1}])\n  ", 
cljs$cst$5855$api_docs_SLASH_heading, "Dispatching Events"], null)), $APP.cljs.core.with_meta(cljs$cst$5859$unwrap, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5855$api_docs_SLASH_heading, "Interceptors"], null)), $APP.cljs.core.with_meta(cljs$cst$5860$reg_event_fx, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5855$api_docs_SLASH_heading, "Event Handlers", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 
3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5861$handler], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5862$interceptors, cljs$cst$5861$handler], null)], null), $APP.cljs$cst$273$arglists, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5861$handler], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5862$interceptors, cljs$cst$5861$handler], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5861$handler], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5862$interceptors, cljs$cst$5861$handler], null))), $APP.cljs$cst$256$doc, "Register the given event `handler` (function) for the given `id`. Optionally, provide\n  an `interceptors` chain:\n\n    - `id` is typically a namespaced keyword  (but can be anything)\n    - `handler` is a function: (coeffects-map event-vector) -\x3e effects-map\n    - `interceptors` is a collection of interceptors. Will be flattened and nils removed.\n\n\n  Example Usage:\n\n      #!clj\n      (reg-event-fx\n        :event-id\n        (fn [cofx event]\n          {:db (assoc (:db cofx) :some-key (get event 2))}))   ;; return a map of effects\n\n\n  Or perhaps:\n\n      #!clj\n      (reg-event-fx\n        :namespaced/id           ;; \x3c-- namespaced keywords are often used\n        [one two three]          ;; \x3c-- a seq of interceptors\n        (fn [{:keys [db] :as cofx} [_ arg1 arg2]] ;; destructure both arguments\n          {:db (assoc db :some-key arg1)          ;; return a map of effects\n           :fx [[:dispatch [:some-event arg2]]]}))\n  "], 
null)), $APP.cljs.core.with_meta(cljs$cst$5863$enqueue, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, cljs$cst$5862$interceptors], null))), $APP.cljs$cst$256$doc, "A utility function, used when writing an interceptor's `:before` function.\n\n  Adds the given collection of `interceptors` to those already in `context's`\n  execution `:queue`. It returns the updated `context`.\n\n  So, it provides a way for one interceptor to add more interceptors to the\n  currently executing interceptor chain.\n  ", 
cljs$cst$5855$api_docs_SLASH_heading, "Writing Interceptors"], null)), $APP.cljs.core.with_meta(cljs$cst$5864$get_coeffect, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5855$api_docs_SLASH_heading, "Writing Interceptors", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 3, 
5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key, $APP.cljs$cst$5865$not_found], 
null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key, $APP.cljs$cst$5865$not_found], 
null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key], null), new $APP.cljs.core.PersistentVector(null, 
3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key, $APP.cljs$cst$5865$not_found], null))), $APP.cljs$cst$256$doc, "A utility function, typically used when writing an interceptor's `:before` function.\n\n   When called with one argument, it returns the `:coeffects` map from within that `context`.\n\n   When called with two or three arguments, behaves like `clojure.core/get` and\n   returns the value mapped to `key` in the `:coeffects` map within `context`, `not-found` or\n   `nil` if `key` is not present."], 
null)), $APP.cljs.core.with_meta(cljs$cst$5866$clear_event, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5855$api_docs_SLASH_heading, "Event Handlers", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.PersistentVector.EMPTY, 
new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY, 
new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null))), $APP.cljs$cst$256$doc, "Unregisters event handlers (presumably registered previously via the use of `reg-event-db` or `reg-event-fx`).\n\n  When called with no args, it will unregister all currently registered event handlers.\n\n  When given one arg, assumed to be the `id` of a previously registered\n  event handler, it will unregister the associated handler. Will produce a warning to\n  console if it finds no matching registration."], 
null)), $APP.cljs.core.with_meta(cljs$cst$5867$subscribe, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5855$api_docs_SLASH_heading, "Subscriptions", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 
1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2411$query], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2411$query, cljs$cst$5868$dynv], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2411$query], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2411$query, cljs$cst$5868$dynv], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2411$query], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2411$query, cljs$cst$5868$dynv], null))), $APP.cljs$cst$256$doc, 
'Given a `query` vector, returns a Reagent `reaction` which will, over\n  time, reactively deliver a stream of values. So, in FRP-ish terms,\n  it returns a `Signal`.\n\n  To obtain the current value from the Signal, it must be dereferenced:\n\n      #!clj\n      (let [signal (subscribe [:items])\n            value  (deref signal)]     ;; could be written as @signal\n        ...)\n\n   which is typically written tersely as simple:\n\n      #!clj\n      (let [items  @(subscribe [:items])]\n        ...)\n\n\n  `query` is a vector of at least one element. The first element is the\n  `query-id`, typically a namespaced keyword. The rest of the vector\'s\n  elements are optional, additional values which parameterise the query\n  performed.\n\n  `dynv` is an optional 3rd argument, which is a vector of further input\n  signals (atoms, reactions, etc), NOT values. This argument exists for\n  historical reasons and is borderline deprecated these days.\n\n  **Example Usage**:\n\n      #!clj\n      (subscribe [:items])\n      (subscribe [:items "blue" :small])\n      (subscribe [:items {:colour "blue"  :size :small}])\n\n  Note: for any given call to `subscribe` there must have been a previous call\n  to `reg-sub`, registering the query handler (functions) associated with\n  `query-id`.\n\n  **Hint**\n\n  When used in a view function BE SURE to `deref` the returned value.\n  In fact, to avoid any mistakes, some prefer to define:\n\n      #!clj\n      (def \x3csub  (comp deref re-frame.core/subscribe))\n\n  And then, within their views, they call  `(\x3csub [:items :small])` rather\n  than using `subscribe` directly.\n\n  **De-duplication**\n\n  Two, or more, concurrent subscriptions for the same query will\n  source reactive updates from the one executing handler.\n\n  See also: `reg-sub`\n  '], 
null)), $APP.cljs.core.with_meta(cljs$cst$5869$clear_fx, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5855$api_docs_SLASH_heading, "Effect Handlers", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.PersistentVector.EMPTY, 
new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY, 
new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null))), $APP.cljs$cst$256$doc, "Unregisters effect handlers (presumably registered previously via the use of `reg-fx`).\n\n  When called with no args, it will unregister all currently registered effect handlers.\n\n  When given one arg, assumed to be the `id` of a previously registered\n  effect handler, it will unregister the associated handler. Will produce a warning to\n  console if it finds no matching registration.\n  "], 
null)), $APP.cljs.core.with_meta(cljs$cst$5870$reg_event_ctx, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5855$api_docs_SLASH_heading, "Event Handlers", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 
2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5861$handler], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5862$interceptors, cljs$cst$5861$handler], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5861$handler], null), new $APP.cljs.core.PersistentVector(null, 
3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5862$interceptors, cljs$cst$5861$handler], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5861$handler], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$1850$id, cljs$cst$5862$interceptors, cljs$cst$5861$handler], null))), $APP.cljs$cst$256$doc, "Register the given event `handler` (function) for the given `id`. Optionally, provide\n  an `interceptors` chain:\n\n    - `id` is typically a namespaced keyword  (but can be anything)\n    - `handler` is a function: context-map -\x3e context-map\n\n  You can explore what is provided in `context` [here](https://day8.github.io/re-frame/Interceptors/#what-is-context).\n\n  Example Usage:\n\n      #!clj\n      (reg-event-ctx\n        :event-id\n        (fn [{:keys [coeffects] :as context}]\n          (let [initial  {:db     (:db coeffects)\n                          :event  (:event coeffects)\n                          :fx     []}\n                result   (-\x3e initial\n                             function1\n                             function2\n                             function3)\n                effects  (select-keys result [:db :fx])]\n             (assoc context :effects effects))))\n  "], 
null)), $APP.cljs.core.with_meta(cljs$cst$5871$add_post_event_callback, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5855$api_docs_SLASH_heading, "Miscellaneous", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 
1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, $APP.cljs$cst$52$f], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, 
$APP.cljs$cst$52$f], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, $APP.cljs$cst$52$f], null))), $APP.cljs$cst$256$doc, "Registers the given function `f` to be called after each event is processed.\n\n   `f` will be called with two arguments:\n\n    - `event`: a vector. The event just processed.\n    - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.\n\n   This facility is useful in advanced cases like:\n\n     - you are implementing a complex bootstrap pipeline\n     - you want to create your own handling infrastructure, with perhaps multiple\n       handlers for the one event, etc.  Hook in here.\n     - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.\n\n  `id` is typically a keyword. If it supplied when an `f` is added, it can be\n  subsequently be used to identify it for removal. See `remove-post-event-callback`.\n  "], 
null)), $APP.cljs.core.with_meta(cljs$cst$5872$reg_fx, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5861$handler], null))), $APP.cljs$cst$256$doc, "Register the given effect `handler` for the given `id`:\n\n    - `id` is keyword, often namespaced.\n    - `handler` is a side-effecting function which takes a single argument and whose return\n      value is ignored.\n\n  To use, first, associate `:effect2` with a handler:\n\n      #!clj\n      (reg-fx\n         :effect2\n         (fn [value]\n            ... do something side-effect-y))\n\n  Then, later, if an event handler were to return this effects map:\n\n      #!clj\n      {:effect2  [1 2]}\n\n  then the `handler` `fn` we registered previously, using `reg-fx`, will be\n  called with an argument of `[1 2]`.\n  ", 
cljs$cst$5855$api_docs_SLASH_heading, "Effect Handlers"], null)), $APP.cljs.core.with_meta(cljs$cst$5873$enrich, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f], null))), $APP.cljs$cst$256$doc, 'Returns an interceptor which will run the given function `f` in the `:after`\n  position.\n\n  `f` is called with two arguments: `db` and `event`, and is expected to\n  return a modified `db`.\n\n  Unlike the `after` interceptor which is only about side effects, `enrich`\n  expects `f` to process and alter the given `db` coeffect in some useful way,\n  contributing to the derived data, flowing vibe.\n\n  If `f` returns `nil`, the `db` value passed to `f` will be returned instead.\n\n  #### Example Use:\n\n  Imagine that todomvc needed to do duplicate detection - if any two todos had\n  the same text, then highlight their background, and report them via a warning\n  at the bottom of the panel.\n\n  Almost any user action (edit text, add new todo, remove a todo) requires a\n  complete reassessment of duplication errors and warnings. E.g. that edit\n  just made might have introduced a new duplicate, or removed one. Same with\n  any todo removal. So we need to re-calculate warnings after any CRUD events\n  associated with the todos list.\n\n  Unless we are careful, we might end up coding subtly different checks\n  for each kind of CRUD operation.  The duplicates check made after\n  \'delete todo\' event might be subtly different to that done after an\n  editing operation. Nice and efficient, but fiddly. A bug generator\n  approach.\n\n  So, instead, we create an `f` which recalculates ALL warnings from scratch\n  every time there is ANY change. It will inspect all the todos, and\n  reset ALL FLAGS every time (overwriting what was there previously)\n  and fully recalculate the list of duplicates (displayed at the bottom?).\n\n  \x3ca href\x3d"https://twitter.com/nathanmarz/status/879722740776939520" target\x3d"_blank"\x3ehttps://twitter.com/nathanmarz/status/879722740776939520\x3c/a\x3e\n\n  By applying `f` in an `:enrich` interceptor, after every CRUD event,\n  we keep the handlers simple and yet we ensure this important step\n  (of getting warnings right) is not missed on any change.\n\n  We can test `f` easily - it is a pure function - independently of\n  any CRUD operation.\n\n  This brings huge simplicity at the expense of some re-computation\n  each time. This may be a very satisfactory trade-off in many cases.\n\n  #### Returning nil\n\n  In some cases, it\'s useful to apply a change to specific situations that can\n  be determined at runtime instead of when defining the handler with an\n  `:enrich` interceptor. Instead of forcing you to return the `db` from every\n  non-applicable branch, you can return `nil` to use the given `db` value:\n\n      #!clj\n      (def set-last-update\n        (core/enrich\n          (fn [{db :db} [_ {user :user}]]\n            (when (active-user? user)  ;; \x3c- Only perform an update if user is active\n              ...))))\n  ', 
cljs$cst$5855$api_docs_SLASH_heading, "Interceptors"], null)), $APP.cljs.core.with_meta(cljs$cst$5874$reg_global_interceptor, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5875$interceptor], null))), $APP.cljs$cst$256$doc, "Registers the given `interceptor` as a global interceptor. Global interceptors are\n   included in the processing chain of every event.\n\n   When you register an event handler, you have the option of supplying an\n   interceptor chain. Any global interceptors you register are effectively\n   prepending to this chain.\n\n   Global interceptors are run in the order that they are registered.", 
cljs$cst$5855$api_docs_SLASH_heading, "Global Interceptors"], null)), $APP.cljs.core.with_meta($APP.cljs$cst$5876$console, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5855$api_docs_SLASH_heading, "Logging", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs.core.list(cljs$cst$5877$level, $APP.cljs$cst$1246$args)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5877$level, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5877$level, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null))), $APP.cljs$cst$256$doc, 'A utility logging function which is used internally within re-frame to produce\n  warnings and other output. It can also be used by libraries which\n  extend re-frame, such as effect handlers.\n\n  By default, it will output the given `args` to `js/console` at the given log `level`.\n  However, an application using re-frame can redirect `console` output via `set-loggers!`.\n\n  `level` can be one of `:log`, `:error`, `:warn`, `:debug`, `:group` or `:groupEnd`.\n\n  Example usage:\n\n      #!clj\n      (console :error "Sure enough it happened:" a-var "and" another)\n      (console :warn "Possible breach of containment wall at:" dt)\n  '], 
null)), $APP.cljs.core.with_meta(cljs$cst$5878$clear_cofx, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5855$api_docs_SLASH_heading, "Coeffects", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.PersistentVector.EMPTY, 
new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY, 
new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null))), $APP.cljs$cst$256$doc, "Unregisters coeffect handlers (presumably registered previously via the use of `reg-cofx`).\n\n  When called with no args, it will unregister all currently registered coeffect handlers.\n\n  When given one arg, assumed to be the `id` of a previously registered\n  coeffect handler, it will unregister the associated handler. Will produce a warning to\n  console if it finds no matching registration."], 
null)), $APP.cljs.core.with_meta(cljs$cst$5879$reg_cofx, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5861$handler], null))), $APP.cljs$cst$256$doc, "Register the given coeffect `handler` for the given `id`, for later use\n  within `inject-cofx`:\n\n    - `id` is keyword, often namespaced.\n    - `handler` is a function which takes either one or two arguments, the first of which is\n       always `coeffects` and which returns an updated `coeffects`.\n\n  See also: `inject-cofx`\n  ", 
cljs$cst$5855$api_docs_SLASH_heading, "Coeffects"], null)), $APP.cljs.core.with_meta(cljs$cst$5880$after, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f], null))), $APP.cljs$cst$256$doc, "Returns an interceptor which runs the given function `f` in the `:after`\n  position, presumably for side effects.\n\n  `f` is called with two arguments: the `:effects` value for `:db`\n  (or the `:coeffect` value of `:db` if no `:db` effect is returned) and the event.\n  Its return value is ignored, so `f` can only side-effect.\n\n  An example of use can be seen in the re-frame github repo in `/examples/todomvc/events.cljs`:\n\n     - `f` runs schema validation (reporting any errors found).\n     - `f` writes to localstorage.", 
cljs$cst$5855$api_docs_SLASH_heading, "Interceptors"], null)), $APP.cljs.core.with_meta(cljs$cst$5881$register_handler, new $APP.cljs.core.PersistentArrayMap(null, 5, [cljs$cst$5855$api_docs_SLASH_heading, "Deprecated", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 0, $APP.cljs$cst$1379$max_fixed_arity, 0, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs.core.list($APP.cljs$cst$1246$args)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), $APP.cljs$cst$5882$deprecated, "0.8.0", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null))), $APP.cljs$cst$256$doc, "Deprecated. Use `reg-event-db` instead."], null)), $APP.cljs.core.with_meta(cljs$cst$5883$set_loggers_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5884$new_loggers], 
null))), $APP.cljs$cst$256$doc, "re-frame outputs warnings and errors via the API function `console`\n   which, by default, delegates to `js/console`'s default implementation for\n  `log`, `error`, `warn`, `debug`, `group` and `groupEnd`. But, using this function,\n   you can override that behaviour with your own functions.\n\n  The argument `new-loggers` should be a map containing a subset of they keys\n  for the standard `loggers`, namely  `:log` `:error` `:warn` `:debug` `:group`\n  or `:groupEnd`.\n\n  Example Usage:\n\n      #!clj\n      (defn my-logger      ;; my alternative logging function\n        [\x26 args]\n        (post-it-somewhere (apply str args)))\n\n      ;; now install my alternative loggers\n      (re-frame.core/set-loggers!  {:warn my-logger :log my-logger})\n   ", 
cljs$cst$5855$api_docs_SLASH_heading, "Logging"], null)), $APP.cljs.core.with_meta(cljs$cst$5885$assoc_effect, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key, $APP.cljs$cst$15$value], null))), $APP.cljs$cst$256$doc, "A utility function, typically used when writing an interceptor's `:after` function.\n\n   Adds or updates a key/value pair in the `:effects` map within `context`. ", 
cljs$cst$5855$api_docs_SLASH_heading, "Writing Interceptors"], null)), $APP.cljs.core.with_meta(cljs$cst$5886$on_changes, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5855$api_docs_SLASH_heading, "Interceptors", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs.core.list($APP.cljs$cst$52$f, cljs$cst$5887$out_path, cljs$cst$5888$in_paths)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f, cljs$cst$5887$out_path, $APP.cljs$cst$148$_AMPERSAND_, cljs$cst$5888$in_paths], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f, cljs$cst$5887$out_path, $APP.cljs$cst$148$_AMPERSAND_, cljs$cst$5888$in_paths], null))), $APP.cljs$cst$256$doc, "Returns an interceptor which will observe N paths within `db`, and if any of them\n  test not `identical?` to their previous value  (as a result of a event handler\n  being run), then it will run `f` to compute a new value, which is then assoc-ed\n  into the given `out-path` within `db`.\n\n  Example Usage:\n\n      #!clj\n      (defn my-f\n        [a-val b-val]\n        ... some computation on a and b in here)\n\n      ;; use it\n      (def my-interceptor (on-changes my-f [:c] [:a] [:b]))\n\n      (reg-event-db\n        :event-id\n        [... my-interceptor ...]  ;; \x3c-- ultimately used here\n        (fn [db v]\n           ...))\n\n\n  If you put this interceptor on handlers which might change paths `:a` or `:b`,\n  it will:\n\n    - call `f` each time the value at path `[:a]` or `[:b]` changes\n    - call `f` with the values extracted from `[:a]` `[:b]`\n    - assoc the return value from `f` into the path  `[:c]`\n  "], 
null)), $APP.cljs.core.with_meta(cljs$cst$5889$clear_subscription_cache_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY)), $APP.cljs$cst$256$doc, "Removes all subscriptions from the cache.\n\n  This function can be used at development time or test time. Useful when hot reloading\n  namespaces containing subscription handlers. Also call it after a React/render exception,\n  because React components won't have been cleaned up properly. And this, in turn, means\n  the subscriptions within those components won't have been cleaned up correctly. So this\n  forces the issue.\n  ", 
cljs$cst$5855$api_docs_SLASH_heading, "Subscriptions"], null)), $APP.cljs.core.with_meta(cljs$cst$5890$get_effect, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5855$api_docs_SLASH_heading, "Writing Interceptors", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key, $APP.cljs$cst$5865$not_found], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key, $APP.cljs$cst$5865$not_found], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null, null)], null), 
$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key, 
$APP.cljs$cst$5865$not_found], null))), $APP.cljs$cst$256$doc, "A utility function, used when writing interceptors, typically within an `:after` function.\n\n   When called with one argument, returns the `:effects` map from the `context`.\n\n   When called with two or three arguments, behaves like `clojure.core/get` and\n   returns the value mapped to `key` in the effects map, `not-found` or\n   `nil` if `key` is not present."], null)), $APP.cljs.core.with_meta(cljs$cst$5891$register_sub, new $APP.cljs.core.PersistentArrayMap(null, 
5, [cljs$cst$5855$api_docs_SLASH_heading, "Deprecated", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 0, $APP.cljs$cst$1379$max_fixed_arity, 0, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$1246$args)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), $APP.cljs$cst$5882$deprecated, "0.8.0", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null))), $APP.cljs$cst$256$doc, "Deprecated. Use `reg-sub-raw` instead."], 
null)), $APP.cljs.core.with_meta($APP.cljs$cst$2325$path, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5855$api_docs_SLASH_heading, "Interceptors", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 0, $APP.cljs$cst$1379$max_fixed_arity, 0, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$1246$args)], 
null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], 
null))), $APP.cljs$cst$256$doc, "Returns an interceptor which acts somewhat like `clojure.core/update-in`, in the sense that\n  the event handler is given a specific part of `app-db` to change, not all of `app-db`.\n\n  The interceptor has both a `:before` and `:after` functions. The `:before` replaces\n  the `:db` key within coeffects with a sub-path within `app-db`. The `:after` reverses the process,\n  and it grafts the handler's return value back into db, at the right path.\n\n  Examples:\n\n      #!clj\n      (path :some :path)\n      (path [:some :path])\n      (path [:some :path] :to :here)\n      (path [:some :path] [:to] :here)\n\n  Example Use:\n\n      #!clj\n      (reg-event-db\n        :event-id\n        (path [:a :b])  ;; \x3c-- used here, in interceptor chain\n        (fn [b v]       ;; 1st arg is not db. Is the value from path [:a :b] within db\n          ... new-b))   ;; returns a new value for that path (not the entire db)\n\n  Notes:\n\n    1. `path` may appear more than once in an interceptor chain. Progressive narrowing.\n    2. if `:effects` contains no `:db` effect, can't graft a value back in.\n  "], 
null)), $APP.cljs.core.with_meta(cljs$cst$5892$clear_global_interceptor, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5855$api_docs_SLASH_heading, "Global Interceptors", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.PersistentVector.EMPTY, 
new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY, 
new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null))), $APP.cljs$cst$256$doc, "Unregisters global interceptors (presumably registered previously via the use of `reg-global-interceptor`).\n\n  When called with no args, it will unregister all currently registered global interceptors.\n\n  When given one arg, assumed to be the `id` of a previously registered\n  global interceptors, it will unregister the associated interceptor. Will produce a warning to\n  console if it finds no matching registration."], 
null)), $APP.cljs.core.with_meta(cljs$cst$5893$clear_sub, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5855$api_docs_SLASH_heading, "Subscriptions", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.PersistentVector.EMPTY, 
new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$5853$query_id], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$5853$query_id], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
$APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$5853$query_id], null))), $APP.cljs$cst$256$doc, "Unregisters subscription handlers (presumably registered previously via the use of `reg-sub`).\n\n  When called with no args, it will unregister all currently registered subscription handlers.\n\n  When given one arg, assumed to be the `id` of a previously registered\n  subscription handler, it will unregister the associated handler. Will produce a warning to\n  console if it finds no matching registration.\n\n  NOTE: Depending on the usecase, it may be necessary to call `clear-subscription-cache!` afterwards"], 
null)), $APP.cljs.core.with_meta(cljs$cst$5894$trim_v, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5855$api_docs_SLASH_heading, "Interceptors"], null)), $APP.cljs.core.with_meta(cljs$cst$5895$__GT_interceptor, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5855$api_docs_SLASH_heading, "Writing Interceptors", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 0, $APP.cljs$cst$1379$max_fixed_arity, 
0, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list(new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$265$as, $APP.cljs$cst$1370$m, $APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5896$before, cljs$cst$5880$after], null)], null))], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$265$as, $APP.cljs$cst$1370$m, $APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5896$before, cljs$cst$5880$after], null)], null)], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$265$as, $APP.cljs$cst$1370$m, $APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5896$before, cljs$cst$5880$after], null)], null)], null))), $APP.cljs$cst$256$doc, "A utility function for creating interceptors.\n\n  Accepts three optional, named arguments:\n\n     - `:id` - an id for the interceptor (decorative only)\n     - `:before` - the interceptor's before function\n     - `:after`  - the interceptor's after function\n\n  Example use:\n\n      #!clj\n      (def my-interceptor\n        (-\x3einterceptor\n         :id     :my-interceptor\n         :before (fn [context]\n                   ... modifies and returns `context`)\n         :after  (fn [context]\n                   ... modifies and returns `context`)))\n\n  Notes:\n\n    - `:before` functions modify and return their `context` argument. Sometimes they\n      only side effect, in which case, they'll perform the side effect and return\n      `context` unchanged.\n    - `:before` functions often modify the `:coeffects` map within `context` and,\n      if they do, then they should use the utility functions `get-coeffect` and\n      `assoc-coeffect`.\n    - `:after` functions modify and return their `context` argument. Sometimes they\n      only side effect, in which case, they'll perform the side effect and return\n      `context` unchanged.\n    - `:after` functions often modify the `:effects` map within `context` and,\n      if they do, then they should use the utility functions `get-effect`\n      and `assoc-effect`"], 
null)), $APP.cljs.core.with_meta(cljs$cst$5897$make_restore_fn, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY)), $APP.cljs$cst$256$doc, "This is a utility function, typically used in testing.\n\n  It checkpoints the current state of re-frame and returns a function which, when\n  later called, will restore re-frame to the checkpointed state.\n\n  The checkpoint includes `app-db`, all registered handlers and all subscriptions.\n  ", 
cljs$cst$5855$api_docs_SLASH_heading, "Miscellaneous"], null)), $APP.cljs.core.with_meta(cljs$cst$5898$purge_event_queue, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY)), $APP.cljs$cst$256$doc, "Removes all events currently queued for processing", cljs$cst$5855$api_docs_SLASH_heading, "Miscellaneous"], null)), $APP.cljs.core.with_meta(cljs$cst$5899$debug, new $APP.cljs.core.PersistentArrayMap(null, 
1, [cljs$cst$5855$api_docs_SLASH_heading, "Interceptors"], null)), $APP.cljs.core.with_meta(cljs$cst$5900$assoc_coeffect, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key, $APP.cljs$cst$15$value], null))), $APP.cljs$cst$256$doc, "A utility function, typically used when writing an interceptor's `:before` function.\n\n   Adds or updates a key/value pair in the `:coeffects` map within `context`. ", 
cljs$cst$5855$api_docs_SLASH_heading, "Writing Interceptors"], null)), $APP.cljs.core.with_meta(cljs$cst$5901$reg_event_db, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5855$api_docs_SLASH_heading, "Event Handlers", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5861$handler], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5862$interceptors, cljs$cst$5861$handler], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5861$handler], 
null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5862$interceptors, cljs$cst$5861$handler], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5861$handler], null), new $APP.cljs.core.PersistentVector(null, 
3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5862$interceptors, cljs$cst$5861$handler], null))), $APP.cljs$cst$256$doc, "Register the given event `handler` (function) for the given `id`. Optionally, provide\n  an `interceptors` chain:\n\n    - `id` is typically a namespaced keyword  (but can be anything)\n    - `handler` is a function: (db event) -\x3e db\n    - `interceptors` is a collection of interceptors. Will be flattened and nils removed.\n\n  Example Usage:\n\n      #!clj\n      (reg-event-db\n        :token\n        (fn [db event]\n          (assoc db :some-key (get event 2)))  ;; return updated db\n\n  Or perhaps:\n\n      #!clj\n      (reg-event-db\n        :namespaced/id           ;; \x3c-- namespaced keywords are often used\n        [one two three]          ;; \x3c-- a seq of interceptors\n        (fn [db [_ arg1 arg2]]   ;; \x3c-- event vector is destructured\n          (-\x3e db\n            (dissoc arg1)\n            (update :key + arg2))))   ;; return updated db\n  "], 
null)), $APP.cljs.core.with_meta(cljs$cst$5902$inject_cofx, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$5855$api_docs_SLASH_heading, "Coeffects", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 
1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, $APP.cljs$cst$15$value], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$1850$id, $APP.cljs$cst$15$value], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, $APP.cljs$cst$15$value], null))), $APP.cljs$cst$256$doc, 
"Given an `id`, and an optional, arbitrary `value`, returns an interceptor\n  whose `:before` adds to the `:coeffects` (map) by calling a pre-registered\n  'coeffect handler' identified by the `id`.\n\n  The previous association of a `coeffect handler` with an `id` will have\n  happened via a call to `re-frame.core/reg-cofx` - generally on program startup.\n\n  Within the created interceptor, this 'looked up' `coeffect handler` will\n  be called (within the `:before`) with two arguments:\n\n  - the current value of `:coeffects`\n  - optionally, the originally supplied arbitrary `value`\n\n  This `coeffect handler` is expected to modify and return its first, `coeffects` argument.\n\n  **Example of `inject-cofx` and `reg-cofx` working together**\n\n\n  First - Early in app startup, you register a `coeffect handler` for `:datetime`:\n\n      #!clj\n      (re-frame.core/reg-cofx\n        :datetime                        ;; usage  (inject-cofx :datetime)\n        (fn coeffect-handler\n          [coeffect]\n          (assoc coeffect :now (js/Date.))))   ;; modify and return first arg\n\n  Second - Later, add an interceptor to an -fx event handler, using `inject-cofx`:\n\n      #!clj\n      (re-frame.core/reg-event-fx            ;; when registering an event handler\n        :event-id\n        [ ... (inject-cofx :datetime) ... ]  ;; \x3c-- create an injecting interceptor\n        (fn event-handler\n          [coeffect event]\n            ;;... in here can access (:now coeffect) to obtain current datetime ...\n          )))\n\n  **Background**\n\n  `coeffects` are the input resources required by an event handler\n  to perform its job. The two most obvious ones are `db` and `event`.\n  But sometimes an event handler might need other resources.\n\n  Perhaps an event handler needs a random number or a GUID or the current\n  datetime. Perhaps it needs access to a DataScript database connection.\n\n  If an event handler directly accesses these resources, it stops being\n  pure and, consequently, it becomes harder to test, etc. So we don't\n  want that.\n\n  Instead, the interceptor created by this function is a way to 'inject'\n  'necessary resources' into the `:coeffects` (map) subsequently given\n  to the event handler at call time.\n\n  See also `reg-cofx`\n  "], 
null)), $APP.cljs.core.with_meta(cljs$cst$5903$remove_post_event_callback, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null))), $APP.cljs$cst$256$doc, "Unregisters a post event callback function, identified by `id`.\n\n  Such a function must have been previously registered via `add-post-event-callback`", 
cljs$cst$5855$api_docs_SLASH_heading, "Miscellaneous"], null))], [new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5904$re_frame_DOT_core_SLASH_reg_sub_raw, $APP.cljs$cst$108$val, re_frame.core.reg_sub_raw, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$5853$query_id, cljs$cst$5854$handler_fn], 
null)), $APP.cljs$cst$256$doc, 'This is a low level, advanced function.  You should probably be\n  using `reg-sub` instead.\n\n  Some explanation is available in the docs at\n  \x3ca href\x3d"http://day8.github.io/re-frame/flow-mechanics/" target\x3d"_blank"\x3ehttp://day8.github.io/re-frame/flow-mechanics/\x3c/a\x3e'], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5905$re_frame_DOT_core_SLASH_dispatch_sync, $APP.cljs$cst$108$val, re_frame.core.dispatch_sync, 
$APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$5857$event], null)), $APP.cljs$cst$256$doc, "Synchronously (immediately) process `event`. It does **not** queue\n  the event for handling later as `dispatch` does.\n\n  `event` is a vector and the first element is typically a keyword\n  which identifies the kind of event.\n\n  It is an error to use `dispatch-sync` within an event handler because\n  you can't immediately process an new event when one is already\n  part way through being processed.\n\n  Generally, avoid using this function, and instead, use `dispatch`.\n  Only use it in the narrow set of cases where any delay in\n  processing is a problem:\n\n    1. the `:on-change` handler of a text field where we are expecting fast typing\n    2. when initialising your app - see 'main' in examples/todomvc/src/core.cljs\n    3. in a unit test where immediate, synchronous processing is useful\n\n  Usage:\n\n      #!clj\n      (dispatch-sync [:sing :falsetto \"piano accordion\"])\n  "], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5906$re_frame_DOT_core_SLASH_reg_sub, $APP.cljs$cst$108$val, re_frame.core.reg_sub, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$5853$query_id, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null)), $APP.cljs$cst$256$doc, 
"A call to `reg-sub` associates a `query-id` WITH two functions.\n\n  The two functions provide 'a mechanism' for creating a node\n  in the Signal Graph. When a node of type `query-id` is needed,\n  the two functions can be used to create it.\n\n  The three arguments are:\n\n    - `query-id` - typically a namespaced keyword (later used in subscribe)\n    - optionally, an `input signals` function which returns the input data\n      flows required by this kind of node.\n    - a `computation function` which computes the value (output) of the\n      node (from the input data flows)\n\n  Later, during app execution, a call to `(subscribe [:sub-id 3 :blue])`,\n  will trigger the need for a new `:sub-id` Signal Graph node (matching the\n  query `[:sub-id 3 :blue]`). And, to create that node the two functions\n  associated with `:sub-id` will be looked up and used.\n\n  Just to be clear: calling `reg-sub` does not immediately create a node.\n  It only registers 'a mechanism' (the two functions) by which nodes\n  can be created later, when a node is bought into existence by the\n  use of `subscribe` in a `View Function`.\n\n  `reg-sub` arguments are:\n\n    - a `query-id` (typically a namespaced keyword)\n    - a function which returns the inputs required by this kind of node (can be supplied  in one of three ways)\n    - a function which computes the value of this kind of node (can be supplied in one of three ways)\n\n  The `computation function` is always the last argument supplied and has three ways to be called.\n  Two of these methods are syntactic sugar to provide easier access to functional abstractions around your data.\n\n  1. A function that will accept two parameters, the `input-values` and `query-vector`. This is the\n     standard way to provide a `computation-function`\n\n          #!clj\n          (reg-sub\n            :query-id\n            (fn [input-values query-vector]\n              (:foo input-values)))\n\n  2. A single sugary tuple of `:-\x3e` and a 1-arity `computation-function`:\n\n          #!clj\n          (reg-sub\n            :query-id\n            :-\x3e computation-fn)\n\n      This sugary variation allows you to pass a function that will expect only one parameter,\n      namely the `input-values` and entirely omit the `query-vector`. A typical `computation-function`\n      expects two parameters which can cause unfortunate results when attempting to use\n      clojure standard library functions, or other functions, in a functional manner.\n\n      For example, a significant number of subscriptions exist only to get a value\n      from the `input-values`. As shown below, this subscription will simply retrieve\n      the value associated with the `:foo` key in our db:\n\n          #!clj\n          (reg-sub\n            :query-id\n            (fn [db _]    ;; :\x3c---- trivial boilerplate we might want to skip over\n              (:foo db)))\n\n      This is slightly more boilerplate than we might like to do,\n      as we can use a keyword directly as a function, and we might like to do this:\n\n          #!clj\n          (reg-sub\n            :query-id\n            :foo)  ;; :\x3c---- This could be dangerous. If `:foo` is not in db, we get the `query-vector` instead of `nil`.\n\n      By using `:-\x3e` our function would not contain the `query-vector`, and any\n      missing keys would be represented as such:\n\n          #!clj\n          (reg-sub\n            :query-id\n            :-\x3e :foo)\n\n      This form allows us to ignore the `query-vector` if our `computation-function`\n      has no need for it, and be safe from any accidents. Any 1-arity function can be provided,\n      and for more complicated use cases, `partial`, `comp`, and anonymous functions can still be used.\n\n  3. A single sugary tuple of `:\x3d\x3e` and a multi-arity `computation-function`\n\n          #!clj\n          (reg-sub\n            :query-id\n            :\x3d\x3e computation-fn)\n\n      The `query-vector` can be broken into two components `[query-id \x26 optional-values]`, and\n      some subscriptions require the `optional-values` for extra work within the subscription.\n      To use them in variation #1, we need to destructure our `computation-function` parameters\n      in order to use them.\n\n          #!clj\n          (reg-sub\n            :query-id\n            (fn [db [_ foo]]\n              [db foo]))\n\n      Again we are writing boilerplate just to reach our values, and we might prefer to\n      have direction access through a parameter vector like `[input-values optional-values]`\n      instead, so we might be able to use a multi-arity function directly as our `computation-function`.\n      A rewrite of the above sub using this sugary syntax would look like this:\n\n          #!clj\n          (reg-sub\n            :query-id\n            :\x3d\x3e vector)  ;; :\x3c---- Could also be `(fn [db foo] [db foo])`\n\n  The `computation function` is expected to take two arguments:\n\n    - `input-values` - the values which flow into this node (how is it wired into the graph?)\n    - `query-vector` - the vector given to `subscribe`\n\n  and it returns a computed value (which then becomes the output of the node)\n\n  When `computation function` is called, the 2nd `query-vector` argument will be that\n  vector supplied to the `subscribe`. So, if the call was `(subscribe [:sub-id 3 :blue])`,\n  then the `query-vector` supplied to the computation function will be `[:sub-id 3 :blue]`.\n\n  The argument(s) supplied to `reg-sub` between `query-id` and the `computation-function`\n  can vary in 3 ways, but whatever is there defines the `input signals` part\n  of `the mechanism`, specifying what input values \"flow into\" the\n  `computation function` (as the 1st argument) when it is called.\n\n  So, `reg-sub` can be called in one of three ways, because there are three ways\n  to define the input signals part. But note, the 2nd method, in which a\n  `signals function` is explicitly supplied, is the most canonical and\n  instructive. The other two are really just sugary variations.\n\n  **First variation** - no input signal function given:\n\n      #!clj\n      (reg-sub\n        :query-id\n        a-computation-fn)   ;; has signature:  (fn [db query-vec]  ... ret-value)\n\n     In the absence of an explicit `signals function`, the node's input signal defaults to `app-db`\n     and, as a result, the value within `app-db` (a map) is\n     given as the 1st argument when `a-computation-fn` is called.\n\n\n  **Second variation** - a signal function is explicitly supplied:\n\n      #!clj\n      (reg-sub\n        :query-id\n        signal-fn     ;; \x3c-- here\n        computation-fn)\n\n  This is the most canonical and instructive of the three variations.\n\n  When a node is created from the template, the `signal function` will be called and it\n  is expected to return the input signal(s) as either a singleton, if there is only\n  one, or a sequence if there are many, or a map with the signals as the values.\n\n  The current values of the returned signals will be supplied as the 1st argument to\n  the `a-computation-fn` when it is called - and subject to what this `signal-fn` returns,\n  this value will be either a singleton, sequence or map of them (paralleling\n  the structure returned by the `signal function`).\n\n  This example `signal function` returns a 2-vector of input signals.\n\n      #!clj\n      (fn [query-vec dynamic-vec]\n         [(subscribe [:a-sub])\n          (subscribe [:b-sub])])\n\n  The associated computation function must be written\n  to expect a 2-vector of values for its first argument:\n\n      #!clj\n      (fn [[a b] query-vec]     ;; 1st argument is a seq of two values\n        ....)\n\n  If, on the other hand, the signal function was simpler and returned a singleton, like this:\n\n      #!clj\n      (fn [query-vec dynamic-vec]\n        (subscribe [:a-sub]))      ;; \x3c-- returning a singleton\n\n  then the associated computation function must be written to expect a single value\n  as the 1st argument:\n\n      #!clj\n      (fn [a query-vec]       ;; 1st argument is a single value\n         ...)\n\n  Further Note: variation #1 above, in which an `input-fn` was not supplied, like this:\n\n      #!clj\n      (reg-sub\n        :query-id\n        a-computation-fn)   ;; has signature:  (fn [db query-vec]  ... ret-value)\n\n  is the equivalent of using this\n  2nd variation and explicitly supplying a `signal-fn` which returns `app-db`:\n\n      #!clj\n      (reg-sub\n        :query-id\n        (fn [_ _]  re-frame/app-db)   ;; \x3c--- explicit signal-fn\n        a-computation-fn)             ;; has signature:  (fn [db query-vec]  ... ret-value)\n\n  **Third variation** - syntax Sugar\n\n      #!clj\n      (reg-sub\n        :a-b-sub\n        :\x3c- [:a-sub]\n        :\x3c- [:b-sub]\n        (fn [[a b] query-vec]    ;; 1st argument is a seq of two values\n          {:a a :b b}))\n\n  This 3rd variation is just syntactic sugar for the 2nd.  Instead of providing an\n  `signals-fn` you provide one or more pairs of `:\x3c-` and a subscription vector.\n\n  If you supply only one pair a singleton will be supplied to the computation function,\n  as if you had supplied a `signal-fn` returning only a single value:\n\n      #!clj\n      (reg-sub\n        :a-sub\n        :\x3c- [:a-sub]\n        (fn [a query-vec]      ;; only one pair, so 1st argument is a single value\n          ...))\n\n  Syntactic sugar for both the `signal-fn` and `computation-fn` can be used together\n  and the direction of arrows shows the flow of data and functions. The example from\n  directly above is reproduced here:\n\n      #!clj\n      (reg-sub\n        :a-b-sub\n        :\x3c- [:a-sub]\n        :\x3c- [:b-sub]\n        :-\x3e (partial zipmap [:a :b]))\n\n  For further understanding, read the tutorials, and look at the detailed comments in\n  /examples/todomvc/src/subs.cljs.\n\n  See also: `subscribe`\n  "], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5907$re_frame_DOT_core_SLASH_dispatch, $APP.cljs$cst$108$val, re_frame.core.dispatch, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$5857$event], null)), $APP.cljs$cst$256$doc, "Queue `event` for processing (handling).\n\n  `event` is a vector and the first element is typically a keyword\n  which identifies the kind of event.\n\n  The event will be added to a FIFO processing queue, so event\n  handling does not happen immediately. It will happen 'very soon'\n  but not now. And if the queue already contains events, they\n  will be processed first.\n\n  Usage:\n\n      #!clj\n      (dispatch [:order \"pizza\" {:supreme 2 :meatlovers 1 :veg 1}])\n  "], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5908$re_frame_DOT_core_SLASH_unwrap, $APP.cljs$cst$108$val, re_frame.core.unwrap, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5909$re_frame_DOT_core_SLASH_reg_event_fx, $APP.cljs$cst$108$val, re_frame.core.reg_event_fx, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5861$handler], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5862$interceptors, cljs$cst$5861$handler], null)), $APP.cljs$cst$256$doc, "Register the given event `handler` (function) for the given `id`. Optionally, provide\n  an `interceptors` chain:\n\n    - `id` is typically a namespaced keyword  (but can be anything)\n    - `handler` is a function: (coeffects-map event-vector) -\x3e effects-map\n    - `interceptors` is a collection of interceptors. Will be flattened and nils removed.\n\n\n  Example Usage:\n\n      #!clj\n      (reg-event-fx\n        :event-id\n        (fn [cofx event]\n          {:db (assoc (:db cofx) :some-key (get event 2))}))   ;; return a map of effects\n\n\n  Or perhaps:\n\n      #!clj\n      (reg-event-fx\n        :namespaced/id           ;; \x3c-- namespaced keywords are often used\n        [one two three]          ;; \x3c-- a seq of interceptors\n        (fn [{:keys [db] :as cofx} [_ arg1 arg2]] ;; destructure both arguments\n          {:db (assoc db :some-key arg1)          ;; return a map of effects\n           :fx [[:dispatch [:some-event arg2]]]}))\n  "], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5910$re_frame_DOT_core_SLASH_enqueue, $APP.cljs$cst$108$val, re_frame.core.enqueue, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, cljs$cst$5862$interceptors], null)), $APP.cljs$cst$256$doc, "A utility function, used when writing an interceptor's `:before` function.\n\n  Adds the given collection of `interceptors` to those already in `context's`\n  execution `:queue`. It returns the updated `context`.\n\n  So, it provides a way for one interceptor to add more interceptors to the\n  currently executing interceptor chain.\n  "], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5911$re_frame_DOT_core_SLASH_get_coeffect, $APP.cljs$cst$108$val, re_frame.core.get_coeffect, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key, $APP.cljs$cst$5865$not_found], null)), $APP.cljs$cst$256$doc, "A utility function, typically used when writing an interceptor's `:before` function.\n\n   When called with one argument, it returns the `:coeffects` map from within that `context`.\n\n   When called with two or three arguments, behaves like `clojure.core/get` and\n   returns the value mapped to `key` in the `:coeffects` map within `context`, `not-found` or\n   `nil` if `key` is not present."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5912$re_frame_DOT_core_SLASH_clear_event, $APP.cljs$cst$108$val, re_frame.core.clear_event, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null)), $APP.cljs$cst$256$doc, "Unregisters event handlers (presumably registered previously via the use of `reg-event-db` or `reg-event-fx`).\n\n  When called with no args, it will unregister all currently registered event handlers.\n\n  When given one arg, assumed to be the `id` of a previously registered\n  event handler, it will unregister the associated handler. Will produce a warning to\n  console if it finds no matching registration."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5913$re_frame_DOT_core_SLASH_subscribe, $APP.cljs$cst$108$val, re_frame.core.subscribe, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2411$query], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2411$query, cljs$cst$5868$dynv], null)), $APP.cljs$cst$256$doc, 'Given a `query` vector, returns a Reagent `reaction` which will, over\n  time, reactively deliver a stream of values. So, in FRP-ish terms,\n  it returns a `Signal`.\n\n  To obtain the current value from the Signal, it must be dereferenced:\n\n      #!clj\n      (let [signal (subscribe [:items])\n            value  (deref signal)]     ;; could be written as @signal\n        ...)\n\n   which is typically written tersely as simple:\n\n      #!clj\n      (let [items  @(subscribe [:items])]\n        ...)\n\n\n  `query` is a vector of at least one element. The first element is the\n  `query-id`, typically a namespaced keyword. The rest of the vector\'s\n  elements are optional, additional values which parameterise the query\n  performed.\n\n  `dynv` is an optional 3rd argument, which is a vector of further input\n  signals (atoms, reactions, etc), NOT values. This argument exists for\n  historical reasons and is borderline deprecated these days.\n\n  **Example Usage**:\n\n      #!clj\n      (subscribe [:items])\n      (subscribe [:items "blue" :small])\n      (subscribe [:items {:colour "blue"  :size :small}])\n\n  Note: for any given call to `subscribe` there must have been a previous call\n  to `reg-sub`, registering the query handler (functions) associated with\n  `query-id`.\n\n  **Hint**\n\n  When used in a view function BE SURE to `deref` the returned value.\n  In fact, to avoid any mistakes, some prefer to define:\n\n      #!clj\n      (def \x3csub  (comp deref re-frame.core/subscribe))\n\n  And then, within their views, they call  `(\x3csub [:items :small])` rather\n  than using `subscribe` directly.\n\n  **De-duplication**\n\n  Two, or more, concurrent subscriptions for the same query will\n  source reactive updates from the one executing handler.\n\n  See also: `reg-sub`\n  '], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5914$re_frame_DOT_core_SLASH_clear_fx, $APP.cljs$cst$108$val, re_frame.core.clear_fx, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null)), $APP.cljs$cst$256$doc, "Unregisters effect handlers (presumably registered previously via the use of `reg-fx`).\n\n  When called with no args, it will unregister all currently registered effect handlers.\n\n  When given one arg, assumed to be the `id` of a previously registered\n  effect handler, it will unregister the associated handler. Will produce a warning to\n  console if it finds no matching registration.\n  "], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5915$re_frame_DOT_core_SLASH_reg_event_ctx, $APP.cljs$cst$108$val, re_frame.core.reg_event_ctx, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5861$handler], null), new $APP.cljs.core.PersistentVector(null, 3, 
5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5862$interceptors, cljs$cst$5861$handler], null)), $APP.cljs$cst$256$doc, "Register the given event `handler` (function) for the given `id`. Optionally, provide\n  an `interceptors` chain:\n\n    - `id` is typically a namespaced keyword  (but can be anything)\n    - `handler` is a function: context-map -\x3e context-map\n\n  You can explore what is provided in `context` [here](https://day8.github.io/re-frame/Interceptors/#what-is-context).\n\n  Example Usage:\n\n      #!clj\n      (reg-event-ctx\n        :event-id\n        (fn [{:keys [coeffects] :as context}]\n          (let [initial  {:db     (:db coeffects)\n                          :event  (:event coeffects)\n                          :fx     []}\n                result   (-\x3e initial\n                             function1\n                             function2\n                             function3)\n                effects  (select-keys result [:db :fx])]\n             (assoc context :effects effects))))\n  "], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5916$re_frame_DOT_core_SLASH_add_post_event_callback, $APP.cljs$cst$108$val, re_frame.core.add_post_event_callback, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$1850$id, $APP.cljs$cst$52$f], null)), $APP.cljs$cst$256$doc, "Registers the given function `f` to be called after each event is processed.\n\n   `f` will be called with two arguments:\n\n    - `event`: a vector. The event just processed.\n    - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.\n\n   This facility is useful in advanced cases like:\n\n     - you are implementing a complex bootstrap pipeline\n     - you want to create your own handling infrastructure, with perhaps multiple\n       handlers for the one event, etc.  Hook in here.\n     - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.\n\n  `id` is typically a keyword. If it supplied when an `f` is added, it can be\n  subsequently be used to identify it for removal. See `remove-post-event-callback`.\n  "], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5917$re_frame_DOT_core_SLASH_reg_fx, $APP.cljs$cst$108$val, re_frame.core.reg_fx, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5861$handler], null)), $APP.cljs$cst$256$doc, "Register the given effect `handler` for the given `id`:\n\n    - `id` is keyword, often namespaced.\n    - `handler` is a side-effecting function which takes a single argument and whose return\n      value is ignored.\n\n  To use, first, associate `:effect2` with a handler:\n\n      #!clj\n      (reg-fx\n         :effect2\n         (fn [value]\n            ... do something side-effect-y))\n\n  Then, later, if an event handler were to return this effects map:\n\n      #!clj\n      {:effect2  [1 2]}\n\n  then the `handler` `fn` we registered previously, using `reg-fx`, will be\n  called with an argument of `[1 2]`.\n  "], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5918$re_frame_DOT_core_SLASH_enrich, $APP.cljs$cst$108$val, re_frame.core.enrich, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f], null)), $APP.cljs$cst$256$doc, 'Returns an interceptor which will run the given function `f` in the `:after`\n  position.\n\n  `f` is called with two arguments: `db` and `event`, and is expected to\n  return a modified `db`.\n\n  Unlike the `after` interceptor which is only about side effects, `enrich`\n  expects `f` to process and alter the given `db` coeffect in some useful way,\n  contributing to the derived data, flowing vibe.\n\n  If `f` returns `nil`, the `db` value passed to `f` will be returned instead.\n\n  #### Example Use:\n\n  Imagine that todomvc needed to do duplicate detection - if any two todos had\n  the same text, then highlight their background, and report them via a warning\n  at the bottom of the panel.\n\n  Almost any user action (edit text, add new todo, remove a todo) requires a\n  complete reassessment of duplication errors and warnings. E.g. that edit\n  just made might have introduced a new duplicate, or removed one. Same with\n  any todo removal. So we need to re-calculate warnings after any CRUD events\n  associated with the todos list.\n\n  Unless we are careful, we might end up coding subtly different checks\n  for each kind of CRUD operation.  The duplicates check made after\n  \'delete todo\' event might be subtly different to that done after an\n  editing operation. Nice and efficient, but fiddly. A bug generator\n  approach.\n\n  So, instead, we create an `f` which recalculates ALL warnings from scratch\n  every time there is ANY change. It will inspect all the todos, and\n  reset ALL FLAGS every time (overwriting what was there previously)\n  and fully recalculate the list of duplicates (displayed at the bottom?).\n\n  \x3ca href\x3d"https://twitter.com/nathanmarz/status/879722740776939520" target\x3d"_blank"\x3ehttps://twitter.com/nathanmarz/status/879722740776939520\x3c/a\x3e\n\n  By applying `f` in an `:enrich` interceptor, after every CRUD event,\n  we keep the handlers simple and yet we ensure this important step\n  (of getting warnings right) is not missed on any change.\n\n  We can test `f` easily - it is a pure function - independently of\n  any CRUD operation.\n\n  This brings huge simplicity at the expense of some re-computation\n  each time. This may be a very satisfactory trade-off in many cases.\n\n  #### Returning nil\n\n  In some cases, it\'s useful to apply a change to specific situations that can\n  be determined at runtime instead of when defining the handler with an\n  `:enrich` interceptor. Instead of forcing you to return the `db` from every\n  non-applicable branch, you can return `nil` to use the given `db` value:\n\n      #!clj\n      (def set-last-update\n        (core/enrich\n          (fn [{db :db} [_ {user :user}]]\n            (when (active-user? user)  ;; \x3c- Only perform an update if user is active\n              ...))))\n  '], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5919$re_frame_DOT_core_SLASH_reg_global_interceptor, $APP.cljs$cst$108$val, re_frame.core.reg_global_interceptor, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5875$interceptor], null)), $APP.cljs$cst$256$doc, "Registers the given `interceptor` as a global interceptor. Global interceptors are\n   included in the processing chain of every event.\n\n   When you register an event handler, you have the option of supplying an\n   interceptor chain. Any global interceptors you register are effectively\n   prepending to this chain.\n\n   Global interceptors are run in the order that they are registered."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5920$re_frame_DOT_core_SLASH_console, $APP.cljs$cst$108$val, re_frame.core.console, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5877$level, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null)), $APP.cljs$cst$256$doc, 'A utility logging function which is used internally within re-frame to produce\n  warnings and other output. It can also be used by libraries which\n  extend re-frame, such as effect handlers.\n\n  By default, it will output the given `args` to `js/console` at the given log `level`.\n  However, an application using re-frame can redirect `console` output via `set-loggers!`.\n\n  `level` can be one of `:log`, `:error`, `:warn`, `:debug`, `:group` or `:groupEnd`.\n\n  Example usage:\n\n      #!clj\n      (console :error "Sure enough it happened:" a-var "and" another)\n      (console :warn "Possible breach of containment wall at:" dt)\n  '], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5921$re_frame_DOT_core_SLASH_clear_cofx, $APP.cljs$cst$108$val, re_frame.core.clear_cofx, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null)), $APP.cljs$cst$256$doc, "Unregisters coeffect handlers (presumably registered previously via the use of `reg-cofx`).\n\n  When called with no args, it will unregister all currently registered coeffect handlers.\n\n  When given one arg, assumed to be the `id` of a previously registered\n  coeffect handler, it will unregister the associated handler. Will produce a warning to\n  console if it finds no matching registration."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5922$re_frame_DOT_core_SLASH_reg_cofx, $APP.cljs$cst$108$val, re_frame.core.reg_cofx, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5861$handler], null)), $APP.cljs$cst$256$doc, "Register the given coeffect `handler` for the given `id`, for later use\n  within `inject-cofx`:\n\n    - `id` is keyword, often namespaced.\n    - `handler` is a function which takes either one or two arguments, the first of which is\n       always `coeffects` and which returns an updated `coeffects`.\n\n  See also: `inject-cofx`\n  "], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5923$re_frame_DOT_core_SLASH_after, $APP.cljs$cst$108$val, re_frame.core.after, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f], null)), $APP.cljs$cst$256$doc, "Returns an interceptor which runs the given function `f` in the `:after`\n  position, presumably for side effects.\n\n  `f` is called with two arguments: the `:effects` value for `:db`\n  (or the `:coeffect` value of `:db` if no `:db` effect is returned) and the event.\n  Its return value is ignored, so `f` can only side-effect.\n\n  An example of use can be seen in the re-frame github repo in `/examples/todomvc/events.cljs`:\n\n     - `f` runs schema validation (reporting any errors found).\n     - `f` writes to localstorage."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5924$re_frame_DOT_core_SLASH_register_handler, $APP.cljs$cst$108$val, re_frame.core.register_handler, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null)), $APP.cljs$cst$256$doc, "Deprecated. Use `reg-event-db` instead."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5925$re_frame_DOT_core_SLASH_set_loggers_BANG_, $APP.cljs$cst$108$val, re_frame.core.set_loggers_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$5884$new_loggers], null)), $APP.cljs$cst$256$doc, "re-frame outputs warnings and errors via the API function `console`\n   which, by default, delegates to `js/console`'s default implementation for\n  `log`, `error`, `warn`, `debug`, `group` and `groupEnd`. But, using this function,\n   you can override that behaviour with your own functions.\n\n  The argument `new-loggers` should be a map containing a subset of they keys\n  for the standard `loggers`, namely  `:log` `:error` `:warn` `:debug` `:group`\n  or `:groupEnd`.\n\n  Example Usage:\n\n      #!clj\n      (defn my-logger      ;; my alternative logging function\n        [\x26 args]\n        (post-it-somewhere (apply str args)))\n\n      ;; now install my alternative loggers\n      (re-frame.core/set-loggers!  {:warn my-logger :log my-logger})\n   "], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5926$re_frame_DOT_core_SLASH_assoc_effect, $APP.cljs$cst$108$val, re_frame.core.assoc_effect, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key, $APP.cljs$cst$15$value], null)), $APP.cljs$cst$256$doc, 
"A utility function, typically used when writing an interceptor's `:after` function.\n\n   Adds or updates a key/value pair in the `:effects` map within `context`. "], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5927$re_frame_DOT_core_SLASH_on_changes, $APP.cljs$cst$108$val, re_frame.core.on_changes, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f, cljs$cst$5887$out_path, $APP.cljs$cst$148$_AMPERSAND_, cljs$cst$5888$in_paths], null)), $APP.cljs$cst$256$doc, "Returns an interceptor which will observe N paths within `db`, and if any of them\n  test not `identical?` to their previous value  (as a result of a event handler\n  being run), then it will run `f` to compute a new value, which is then assoc-ed\n  into the given `out-path` within `db`.\n\n  Example Usage:\n\n      #!clj\n      (defn my-f\n        [a-val b-val]\n        ... some computation on a and b in here)\n\n      ;; use it\n      (def my-interceptor (on-changes my-f [:c] [:a] [:b]))\n\n      (reg-event-db\n        :event-id\n        [... my-interceptor ...]  ;; \x3c-- ultimately used here\n        (fn [db v]\n           ...))\n\n\n  If you put this interceptor on handlers which might change paths `:a` or `:b`,\n  it will:\n\n    - call `f` each time the value at path `[:a]` or `[:b]` changes\n    - call `f` with the values extracted from `[:a]` `[:b]`\n    - assoc the return value from `f` into the path  `[:c]`\n  "], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5928$re_frame_DOT_core_SLASH_clear_subscription_cache_BANG_, $APP.cljs$cst$108$val, re_frame.core.clear_subscription_cache_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY), $APP.cljs$cst$256$doc, "Removes all subscriptions from the cache.\n\n  This function can be used at development time or test time. Useful when hot reloading\n  namespaces containing subscription handlers. Also call it after a React/render exception,\n  because React components won't have been cleaned up properly. And this, in turn, means\n  the subscriptions within those components won't have been cleaned up correctly. So this\n  forces the issue.\n  "], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5929$re_frame_DOT_core_SLASH_get_effect, $APP.cljs$cst$108$val, re_frame.core.get_effect, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key, $APP.cljs$cst$5865$not_found], null)), $APP.cljs$cst$256$doc, "A utility function, used when writing interceptors, typically within an `:after` function.\n\n   When called with one argument, returns the `:effects` map from the `context`.\n\n   When called with two or three arguments, behaves like `clojure.core/get` and\n   returns the value mapped to `key` in the effects map, `not-found` or\n   `nil` if `key` is not present."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5930$re_frame_DOT_core_SLASH_register_sub, $APP.cljs$cst$108$val, re_frame.core.register_sub, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null)), $APP.cljs$cst$256$doc, "Deprecated. Use `reg-sub-raw` instead."], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5931$re_frame_DOT_core_SLASH_path, $APP.cljs$cst$108$val, re_frame.core.path, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$1246$args], null)), $APP.cljs$cst$256$doc, "Returns an interceptor which acts somewhat like `clojure.core/update-in`, in the sense that\n  the event handler is given a specific part of `app-db` to change, not all of `app-db`.\n\n  The interceptor has both a `:before` and `:after` functions. The `:before` replaces\n  the `:db` key within coeffects with a sub-path within `app-db`. The `:after` reverses the process,\n  and it grafts the handler's return value back into db, at the right path.\n\n  Examples:\n\n      #!clj\n      (path :some :path)\n      (path [:some :path])\n      (path [:some :path] :to :here)\n      (path [:some :path] [:to] :here)\n\n  Example Use:\n\n      #!clj\n      (reg-event-db\n        :event-id\n        (path [:a :b])  ;; \x3c-- used here, in interceptor chain\n        (fn [b v]       ;; 1st arg is not db. Is the value from path [:a :b] within db\n          ... new-b))   ;; returns a new value for that path (not the entire db)\n\n  Notes:\n\n    1. `path` may appear more than once in an interceptor chain. Progressive narrowing.\n    2. if `:effects` contains no `:db` effect, can't graft a value back in.\n  "], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5932$re_frame_DOT_core_SLASH_clear_global_interceptor, $APP.cljs$cst$108$val, re_frame.core.clear_global_interceptor, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null)), $APP.cljs$cst$256$doc, 
"Unregisters global interceptors (presumably registered previously via the use of `reg-global-interceptor`).\n\n  When called with no args, it will unregister all currently registered global interceptors.\n\n  When given one arg, assumed to be the `id` of a previously registered\n  global interceptors, it will unregister the associated interceptor. Will produce a warning to\n  console if it finds no matching registration."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
cljs$cst$5933$re_frame_DOT_core_SLASH_clear_sub, $APP.cljs$cst$108$val, re_frame.core.clear_sub, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$5853$query_id], null)), $APP.cljs$cst$256$doc, "Unregisters subscription handlers (presumably registered previously via the use of `reg-sub`).\n\n  When called with no args, it will unregister all currently registered subscription handlers.\n\n  When given one arg, assumed to be the `id` of a previously registered\n  subscription handler, it will unregister the associated handler. Will produce a warning to\n  console if it finds no matching registration.\n\n  NOTE: Depending on the usecase, it may be necessary to call `clear-subscription-cache!` afterwards"], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5934$re_frame_DOT_core_SLASH_trim_v, $APP.cljs$cst$108$val, re_frame.core.trim_v, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5935$re_frame_DOT_core_SLASH___GT_interceptor, $APP.cljs$cst$108$val, re_frame.core.__GT_interceptor, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, 
[$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$265$as, $APP.cljs$cst$1370$m, $APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5896$before, cljs$cst$5880$after], null)], null)], null)), $APP.cljs$cst$256$doc, "A utility function for creating interceptors.\n\n  Accepts three optional, named arguments:\n\n     - `:id` - an id for the interceptor (decorative only)\n     - `:before` - the interceptor's before function\n     - `:after`  - the interceptor's after function\n\n  Example use:\n\n      #!clj\n      (def my-interceptor\n        (-\x3einterceptor\n         :id     :my-interceptor\n         :before (fn [context]\n                   ... modifies and returns `context`)\n         :after  (fn [context]\n                   ... modifies and returns `context`)))\n\n  Notes:\n\n    - `:before` functions modify and return their `context` argument. Sometimes they\n      only side effect, in which case, they'll perform the side effect and return\n      `context` unchanged.\n    - `:before` functions often modify the `:coeffects` map within `context` and,\n      if they do, then they should use the utility functions `get-coeffect` and\n      `assoc-coeffect`.\n    - `:after` functions modify and return their `context` argument. Sometimes they\n      only side effect, in which case, they'll perform the side effect and return\n      `context` unchanged.\n    - `:after` functions often modify the `:effects` map within `context` and,\n      if they do, then they should use the utility functions `get-effect`\n      and `assoc-effect`"], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5936$re_frame_DOT_core_SLASH_make_restore_fn, $APP.cljs$cst$108$val, re_frame.core.make_restore_fn, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY), $APP.cljs$cst$256$doc, "This is a utility function, typically used in testing.\n\n  It checkpoints the current state of re-frame and returns a function which, when\n  later called, will restore re-frame to the checkpointed state.\n\n  The checkpoint includes `app-db`, all registered handlers and all subscriptions.\n  "], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5937$re_frame_DOT_core_SLASH_purge_event_queue, $APP.cljs$cst$108$val, re_frame.core.purge_event_queue, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs.core.PersistentVector.EMPTY), $APP.cljs$cst$256$doc, "Removes all events currently queued for processing"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
cljs$cst$5938$re_frame_DOT_core_SLASH_debug, $APP.cljs$cst$108$val, re_frame.core.debug, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5939$re_frame_DOT_core_SLASH_assoc_coeffect, $APP.cljs$cst$108$val, re_frame.core.assoc_coeffect, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 
5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2417$context, $APP.cljs$cst$76$key, $APP.cljs$cst$15$value], null)), $APP.cljs$cst$256$doc, "A utility function, typically used when writing an interceptor's `:before` function.\n\n   Adds or updates a key/value pair in the `:coeffects` map within `context`. "], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5940$re_frame_DOT_core_SLASH_reg_event_db, $APP.cljs$cst$108$val, re_frame.core.reg_event_db, 
$APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5861$handler], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id, cljs$cst$5862$interceptors, cljs$cst$5861$handler], null)), $APP.cljs$cst$256$doc, "Register the given event `handler` (function) for the given `id`. Optionally, provide\n  an `interceptors` chain:\n\n    - `id` is typically a namespaced keyword  (but can be anything)\n    - `handler` is a function: (db event) -\x3e db\n    - `interceptors` is a collection of interceptors. Will be flattened and nils removed.\n\n  Example Usage:\n\n      #!clj\n      (reg-event-db\n        :token\n        (fn [db event]\n          (assoc db :some-key (get event 2)))  ;; return updated db\n\n  Or perhaps:\n\n      #!clj\n      (reg-event-db\n        :namespaced/id           ;; \x3c-- namespaced keywords are often used\n        [one two three]          ;; \x3c-- a seq of interceptors\n        (fn [db [_ arg1 arg2]]   ;; \x3c-- event vector is destructured\n          (-\x3e db\n            (dissoc arg1)\n            (update :key + arg2))))   ;; return updated db\n  "], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5941$re_frame_DOT_core_SLASH_inject_cofx, $APP.cljs$cst$108$val, re_frame.core.inject_cofx, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$1850$id, $APP.cljs$cst$15$value], null)), $APP.cljs$cst$256$doc, "Given an `id`, and an optional, arbitrary `value`, returns an interceptor\n  whose `:before` adds to the `:coeffects` (map) by calling a pre-registered\n  'coeffect handler' identified by the `id`.\n\n  The previous association of a `coeffect handler` with an `id` will have\n  happened via a call to `re-frame.core/reg-cofx` - generally on program startup.\n\n  Within the created interceptor, this 'looked up' `coeffect handler` will\n  be called (within the `:before`) with two arguments:\n\n  - the current value of `:coeffects`\n  - optionally, the originally supplied arbitrary `value`\n\n  This `coeffect handler` is expected to modify and return its first, `coeffects` argument.\n\n  **Example of `inject-cofx` and `reg-cofx` working together**\n\n\n  First - Early in app startup, you register a `coeffect handler` for `:datetime`:\n\n      #!clj\n      (re-frame.core/reg-cofx\n        :datetime                        ;; usage  (inject-cofx :datetime)\n        (fn coeffect-handler\n          [coeffect]\n          (assoc coeffect :now (js/Date.))))   ;; modify and return first arg\n\n  Second - Later, add an interceptor to an -fx event handler, using `inject-cofx`:\n\n      #!clj\n      (re-frame.core/reg-event-fx            ;; when registering an event handler\n        :event-id\n        [ ... (inject-cofx :datetime) ... ]  ;; \x3c-- create an injecting interceptor\n        (fn event-handler\n          [coeffect event]\n            ;;... in here can access (:now coeffect) to obtain current datetime ...\n          )))\n\n  **Background**\n\n  `coeffects` are the input resources required by an event handler\n  to perform its job. The two most obvious ones are `db` and `event`.\n  But sometimes an event handler might need other resources.\n\n  Perhaps an event handler needs a random number or a GUID or the current\n  datetime. Perhaps it needs access to a DataScript database connection.\n\n  If an event handler directly accesses these resources, it stops being\n  pure and, consequently, it becomes harder to test, etc. So we don't\n  want that.\n\n  Instead, the interceptor created by this function is a way to 'inject'\n  'necessary resources' into the `:coeffects` (map) subsequently given\n  to the event handler at call time.\n\n  See also `reg-cofx`\n  "], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5942$re_frame_DOT_core_SLASH_remove_post_event_callback, $APP.cljs$cst$108$val, re_frame.core.remove_post_event_callback, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1850$id], null)), $APP.cljs$cst$256$doc, "Unregisters a post event callback function, identified by `id`.\n\n  Such a function must have been previously registered via `add-post-event-callback`"], 
null)], null)]), $APP.sci.configs.re_frame.re_frame.rfns);
$APP.sci.configs.re_frame.re_frame.re_frame_db_namespace = $APP.sci.core._copy_ns(new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$5943$app_db, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$5944$re_frame_DOT_db_SLASH_app_db, $APP.cljs$cst$108$val, re_frame.db.app_db, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null)], null), $APP.sci.configs.re_frame.re_frame.rfdbns);
$APP.sci.configs.re_frame.re_frame.namespaces = new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$5850$re_frame_DOT_core, $APP.sci.configs.re_frame.re_frame.re_frame_namespace, cljs$cst$5851$re_frame_DOT_db, $APP.sci.configs.re_frame.re_frame.re_frame_db_namespace], null);
$APP.sci.configs.re_frame.re_frame.config = new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$398$namespaces, $APP.sci.configs.re_frame.re_frame.namespaces], null);
$APP.scittle.re_frame = {};
$APP.scittle.core.register_plugin_BANG_(cljs$cst$5945$scittle_DOT_re_frame_SLASH_re_frame, $APP.sci.configs.re_frame.re_frame.config);

}).call(this);