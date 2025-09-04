(function(){
'use strict';
var cljs$cst$2672$abort = new $APP.cljs.core.Symbol(null, "abort", "abort", -2133242571, null), cljs$cst$2684$ajax_DOT_core_SLASH_default_formats = new $APP.cljs.core.Symbol("ajax.core", "default-formats", "ajax.core/default-formats", 1628437945, null), cljs$cst$2701$ajax_DOT_core_SLASH_text_response_format = new $APP.cljs.core.Symbol("ajax.core", "text-response-format", "ajax.core/text-response-format", 1875705088, null), cljs$cst$2614$write = new $APP.cljs.core.Keyword(null, "write", "write", -1857649168), 
cljs$cst$2607$was_aborted = new $APP.cljs.core.Keyword(null, "was-aborted", "was-aborted", -2120084828), cljs$cst$2612$java = new $APP.cljs.core.Keyword(null, "java", "java", 1958249105), cljs$cst$2670$to_interceptor = new $APP.cljs.core.Symbol(null, "to-interceptor", "to-interceptor", 708446535, null), cljs$cst$2687$ajax_DOT_core_SLASH_PUT = new $APP.cljs.core.Symbol("ajax.core", "PUT", "ajax.core/PUT", 117595477, null), cljs$cst$2688$ajax_DOT_core_SLASH_ajax_request = new $APP.cljs.core.Symbol("ajax.core", 
"ajax-request", "ajax.core/ajax-request", -913943903, null), cljs$cst$2683$ajax_DOT_core_SLASH_text_request_format = new $APP.cljs.core.Symbol("ajax.core", "text-request-format", "ajax.core/text-request-format", -1136916927, null), cljs$cst$2637$writer = new $APP.cljs.core.Keyword(null, "writer", "writer", -277568236), cljs$cst$2622$original_text = new $APP.cljs.core.Keyword(null, "original-text", "original-text", 744448452), cljs$cst$2669$raw_response_format = new $APP.cljs.core.Symbol(null, "raw-response-format", 
"raw-response-format", 502782404, null), cljs$cst$2654$POST = new $APP.cljs.core.Symbol(null, "POST", "POST", 1750988384, null), cljs$cst$2690$ajax_DOT_core_SLASH_detect_response_format = new $APP.cljs.core.Symbol("ajax.core", "detect-response-format", "ajax.core/detect-response-format", 1220704017, null), cljs$cst$2677$PATCH = new $APP.cljs.core.Symbol(null, "PATCH", "PATCH", -1233173284, null), cljs$cst$2605$status_text = new $APP.cljs.core.Keyword(null, "status-text", "status-text", -1834235478), 
cljs$cst$2702$ajax_DOT_core_SLASH_PATCH = new $APP.cljs.core.Symbol("ajax.core", "PATCH", "ajax.core/PATCH", -1168388223, null), cljs$cst$2661$PUT = new $APP.cljs.core.Symbol(null, "PUT", "PUT", -201468416, null), cljs$cst$2638$json_verbose = new $APP.cljs.core.Keyword(null, "json-verbose", "json-verbose", -542533531), cljs$cst$2680$ajax_DOT_core_SLASH_POST = new $APP.cljs.core.Symbol("ajax.core", "POST", "ajax.core/POST", 1572763855, null), cljs$cst$2608$status = new $APP.cljs.core.Symbol(null, 
"status", "status", -357266886, null), cljs$cst$2634$response_format = new $APP.cljs.core.Keyword(null, "response-format", "response-format", 1664465322), cljs$cst$2621$parse = new $APP.cljs.core.Keyword(null, "parse", "parse", -1162164619), cljs$cst$2698$ajax_DOT_core_SLASH_abort = new $APP.cljs.core.Symbol("ajax.core", "abort", "ajax.core/abort", -1933719678, null), cljs$cst$2666$ring_response_format = new $APP.cljs.core.Symbol(null, "ring-response-format", "ring-response-format", -1088027719, 
null), cljs$cst$2646$priority = new $APP.cljs.core.Keyword(null, "priority", "priority", 1431093715), cljs$cst$2700$ajax_DOT_core_SLASH_default_interceptors = new $APP.cljs.core.Symbol("ajax.core", "default-interceptors", "ajax.core/default-interceptors", -559960448, null), cljs$cst$2671$success_QMARK_ = new $APP.cljs.core.Symbol(null, "success?", "success?", 1517677475, null), cljs$cst$2699$ajax_DOT_core_SLASH_json_request_format = new $APP.cljs.core.Symbol("ajax.core", "json-request-format", "ajax.core/json-request-format", 
1516018481, null), cljs$cst$2663$HEAD = new $APP.cljs.core.Symbol(null, "HEAD", "HEAD", 1903810169, null), cljs$cst$2624$read = new $APP.cljs.core.Keyword(null, "read", "read", 1140058661), cljs$cst$2649$connection_established = new $APP.cljs.core.Keyword(null, "connection-established", "connection-established", -1403749733), cljs$cst$2689$ajax_DOT_core_SLASH_HEAD = new $APP.cljs.core.Symbol("ajax.core", "HEAD", "ajax.core/HEAD", 1834834092, null), cljs$cst$2617$response = new $APP.cljs.core.Keyword(null, 
"response", "response", -1068424192), cljs$cst$2653$ajax_DOT_core = new $APP.cljs.core.Symbol(null, "ajax.core", "ajax.core", -1363316958, null), cljs$cst$2657$text_request_format = new $APP.cljs.core.Symbol(null, "text-request-format", "text-request-format", -1447006052, null), cljs$cst$2682$ajax_DOT_core_SLASH_OPTIONS = new $APP.cljs.core.Symbol("ajax.core", "OPTIONS", "ajax.core/OPTIONS", 538242386, null), cljs$cst$2685$ajax_DOT_core_SLASH_url_request_format = new $APP.cljs.core.Symbol("ajax.core", 
"url-request-format", "ajax.core/url-request-format", -1610761429, null), cljs$cst$2651$processing_request = new $APP.cljs.core.Keyword(null, "processing-request", "processing-request", -264947221), cljs$cst$2652$response_ready = new $APP.cljs.core.Keyword(null, "response-ready", "response-ready", 245208276), cljs$cst$2618$request = new $APP.cljs.core.Symbol(null, "request", "request", -881481046, null), cljs$cst$2632$format = new $APP.cljs.core.Keyword(null, "format", "format", -1306924766), cljs$cst$2656$OPTIONS = 
new $APP.cljs.core.Symbol(null, "OPTIONS", "OPTIONS", 742094783, null), cljs$cst$2616$request = new $APP.cljs.core.Keyword(null, "request", "request", 1772954723), cljs$cst$2641$api = new $APP.cljs.core.Keyword(null, "api", "api", -899839580), cljs$cst$2609$status_text = new $APP.cljs.core.Symbol(null, "status-text", "status-text", -193703951, null), cljs$cst$2626$aborted = new $APP.cljs.core.Keyword(null, "aborted", "aborted", 1775972619), cljs$cst$2665$transit_request_format = new $APP.cljs.core.Symbol(null, 
"transit-request-format", "transit-request-format", 1046391906, null), cljs$cst$2697$ajax_DOT_core_SLASH_success_QMARK_ = new $APP.cljs.core.Symbol("ajax.core", "success?", "ajax.core/success?", 1435598544, null), cljs$cst$2692$ajax_DOT_core_SLASH_ring_response_format = new $APP.cljs.core.Symbol("ajax.core", "ring-response-format", "ajax.core/ring-response-format", -1429501748, null), cljs$cst$2696$ajax_DOT_core_SLASH_to_interceptor = new $APP.cljs.core.Symbol("ajax.core", "to-interceptor", "ajax.core/to-interceptor", 
643728016, null), cljs$cst$2642$error_handler = new $APP.cljs.core.Keyword(null, "error-handler", "error-handler", -484945776), cljs$cst$2679$json_response_format = new $APP.cljs.core.Symbol(null, "json-response-format", "json-response-format", 692692627, null), cljs$cst$2658$default_formats = new $APP.cljs.core.Symbol(null, "default-formats", "default-formats", 1427335370, null), cljs$cst$2705$scittle_DOT_cljs_ajax_SLASH_ajax = new $APP.cljs.core.Keyword("scittle.cljs-ajax", "ajax", "scittle.cljs-ajax/ajax", 
-1187750508), cljs$cst$2691$ajax_DOT_core_SLASH_transit_request_format = new $APP.cljs.core.Symbol("ajax.core", "transit-request-format", "ajax.core/transit-request-format", 842152849, null), cljs$cst$2619$response = new $APP.cljs.core.Symbol(null, "response", "response", 572107335, null), cljs$cst$2695$ajax_DOT_core_SLASH_raw_response_format = new $APP.cljs.core.Symbol("ajax.core", "raw-response-format", "ajax.core/raw-response-format", 165303065, null), cljs$cst$2693$ajax_DOT_core_SLASH_GET = new $APP.cljs.core.Symbol("ajax.core", 
"GET", "ajax.core/GET", -580027892, null), cljs$cst$2611$was_aborted = new $APP.cljs.core.Symbol(null, "was-aborted", "was-aborted", -479553301, null), cljs$cst$2623$parse_error = new $APP.cljs.core.Keyword(null, "parse-error", "parse-error", 255902478), cljs$cst$2655$transit_response_format = new $APP.cljs.core.Symbol(null, "transit-response-format", "transit-response-format", 462907130, null), cljs$cst$2629$description = new $APP.cljs.core.Symbol(null, "description", "description", 211970983, null), 
cljs$cst$2676$text_response_format = new $APP.cljs.core.Symbol(null, "text-response-format", "text-response-format", 1403741165, null), cljs$cst$2615$content_type = new $APP.cljs.core.Keyword(null, "content-type", "content-type", -508222634), cljs$cst$2667$GET = new $APP.cljs.core.Symbol(null, "GET", "GET", -917844743, null), cljs$cst$2633$url_params = new $APP.cljs.core.Keyword(null, "url-params", "url-params", -697567619), cljs$cst$2644$with_credentials = new $APP.cljs.core.Keyword(null, "with-credentials", 
"with-credentials", -1163127235), cljs$cst$2660$DELETE = new $APP.cljs.core.Symbol(null, "DELETE", "DELETE", -965761997, null), cljs$cst$2636$keywords_QMARK_ = new $APP.cljs.core.Keyword(null, "keywords?", "keywords?", 764949733), cljs$cst$2620$description = new $APP.cljs.core.Keyword(null, "description", "description", -1428560544), cljs$cst$2704$ajax_DOT_core_SLASH_json_response_format = new $APP.cljs.core.Symbol("ajax.core", "json-response-format", "ajax.core/json-response-format", 358882374, 
null), cljs$cst$2647$max_retries = new $APP.cljs.core.Keyword(null, "max-retries", "max-retries", -1933762121), cljs$cst$2650$request_received = new $APP.cljs.core.Keyword(null, "request-received", "request-received", 2110590540), cljs$cst$2686$ajax_DOT_core_SLASH_DELETE = new $APP.cljs.core.Symbol("ajax.core", "DELETE", "ajax.core/DELETE", -1115542810, null), cljs$cst$2664$detect_response_format = new $APP.cljs.core.Symbol(null, "detect-response-format", "detect-response-format", 1017515132, null), 
cljs$cst$2625$failed = new $APP.cljs.core.Keyword(null, "failed", "failed", -1397425762), cljs$cst$2659$url_request_format = new $APP.cljs.core.Symbol(null, "url-request-format", "url-request-format", -2082918152, null), cljs$cst$2694$ajax_DOT_core_SLASH_TRACE = new $APP.cljs.core.Symbol("ajax.core", "TRACE", "ajax.core/TRACE", -532528279, null), cljs$cst$2662$ajax_request = new $APP.cljs.core.Symbol(null, "ajax-request", "ajax-request", -1248141866, null), cljs$cst$2668$TRACE = new $APP.cljs.core.Symbol(null, 
"TRACE", "TRACE", -64041414, null), cljs$cst$2678$PURGE = new $APP.cljs.core.Symbol(null, "PURGE", "PURGE", -89476959, null), cljs$cst$2645$progress_handler = new $APP.cljs.core.Keyword(null, "progress-handler", "progress-handler", 333585589), cljs$cst$2703$ajax_DOT_core_SLASH_PURGE = new $APP.cljs.core.Symbol("ajax.core", "PURGE", "ajax.core/PURGE", -850838574, null), cljs$cst$2613$vec_strategy = new $APP.cljs.core.Keyword(null, "vec-strategy", "vec-strategy", 1843221372), cljs$cst$2648$not_initialized = 
new $APP.cljs.core.Keyword(null, "not-initialized", "not-initialized", -1937378906), cljs$cst$2675$default_interceptors = new $APP.cljs.core.Symbol(null, "default-interceptors", "default-interceptors", -893771721, null), cljs$cst$2681$ajax_DOT_core_SLASH_transit_response_format = new $APP.cljs.core.Symbol("ajax.core", "transit-response-format", "ajax.core/transit-response-format", 1743973673, null), cljs$cst$2630$content_type = new $APP.cljs.core.Symbol(null, "content-type", "content-type", 1132308893, 
null), cljs$cst$2674$json_request_format = new $APP.cljs.core.Symbol(null, "json-request-format", "json-request-format", 1446516354, null);
var ajax = {protocols:{}};
ajax.protocols.AjaxImpl = function() {
};
var ajax$protocols$AjaxImpl$_js_ajax_request$dyn_46146 = function($this$$$, $request$$, $handler$$) {
  var $m__5372__auto__$jscomp$230_m__5374__auto__$$ = ajax.protocols._js_ajax_request[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$230_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$230_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$230_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $request$$, $handler$$) : $m__5372__auto__$jscomp$230_m__5374__auto__$$.call(null, $this$$$, $request$$, $handler$$);
  }
  $m__5372__auto__$jscomp$230_m__5374__auto__$$ = ajax.protocols._js_ajax_request._;
  if ($m__5372__auto__$jscomp$230_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$230_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$230_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $request$$, $handler$$) : $m__5372__auto__$jscomp$230_m__5374__auto__$$.call(null, $this$$$, $request$$, $handler$$);
  }
  throw $APP.cljs.core.missing_protocol("AjaxImpl.-js-ajax-request", $this$$$);
};
ajax.protocols._js_ajax_request = function($this$$$, $request$$, $handler$$) {
  return $this$$$ != null && $this$$$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 != null ? $this$$$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3($this$$$, $request$$, $handler$$) : ajax$protocols$AjaxImpl$_js_ajax_request$dyn_46146($this$$$, $request$$, $handler$$);
};
ajax.protocols.AjaxRequest = function() {
};
var ajax$protocols$AjaxRequest$_abort$dyn_46147 = function($this$$$) {
  var $m__5372__auto__$jscomp$231_m__5374__auto__$$ = ajax.protocols._abort[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$231_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$231_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$231_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$231_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$231_m__5374__auto__$$ = ajax.protocols._abort._;
  if ($m__5372__auto__$jscomp$231_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$231_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$231_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$231_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("AjaxRequest.-abort", $this$$$);
};
ajax.protocols._abort = function($this$$$) {
  return $this$$$ != null && $this$$$.ajax$protocols$AjaxRequest$_abort$arity$1 != null ? $this$$$.ajax$protocols$AjaxRequest$_abort$arity$1($this$$$) : ajax$protocols$AjaxRequest$_abort$dyn_46147($this$$$);
};
ajax.protocols.AjaxResponse = function() {
};
var ajax$protocols$AjaxResponse$_status$dyn_46148 = function($this$$$) {
  var $m__5372__auto__$jscomp$232_m__5374__auto__$$ = ajax.protocols._status[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$232_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$232_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$232_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$232_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$232_m__5374__auto__$$ = ajax.protocols._status._;
  if ($m__5372__auto__$jscomp$232_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$232_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$232_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$232_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("AjaxResponse.-status", $this$$$);
};
ajax.protocols._status = function($this$$$) {
  return $this$$$ != null && $this$$$.ajax$protocols$AjaxResponse$_status$arity$1 != null ? $this$$$.ajax$protocols$AjaxResponse$_status$arity$1($this$$$) : ajax$protocols$AjaxResponse$_status$dyn_46148($this$$$);
};
var ajax$protocols$AjaxResponse$_status_text$dyn_46149 = function($this$$$) {
  var $m__5372__auto__$jscomp$233_m__5374__auto__$$ = ajax.protocols._status_text[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$233_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$233_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$233_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$233_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$233_m__5374__auto__$$ = ajax.protocols._status_text._;
  if ($m__5372__auto__$jscomp$233_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$233_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$233_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$233_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("AjaxResponse.-status-text", $this$$$);
};
ajax.protocols._status_text = function($this$$$) {
  return $this$$$ != null && $this$$$.ajax$protocols$AjaxResponse$_status_text$arity$1 != null ? $this$$$.ajax$protocols$AjaxResponse$_status_text$arity$1($this$$$) : ajax$protocols$AjaxResponse$_status_text$dyn_46149($this$$$);
};
var ajax$protocols$AjaxResponse$_get_all_headers$dyn_46150 = function($this$$$) {
  var $m__5372__auto__$jscomp$234_m__5374__auto__$$ = ajax.protocols._get_all_headers[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$234_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$234_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$234_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$234_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$234_m__5374__auto__$$ = ajax.protocols._get_all_headers._;
  if ($m__5372__auto__$jscomp$234_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$234_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$234_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$234_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("AjaxResponse.-get-all-headers", $this$$$);
};
ajax.protocols._get_all_headers = function($this$$$) {
  return $this$$$ != null && $this$$$.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 != null ? $this$$$.ajax$protocols$AjaxResponse$_get_all_headers$arity$1($this$$$) : ajax$protocols$AjaxResponse$_get_all_headers$dyn_46150($this$$$);
};
var ajax$protocols$AjaxResponse$_body$dyn_46151 = function($this$$$) {
  var $m__5372__auto__$jscomp$235_m__5374__auto__$$ = ajax.protocols._body[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$235_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$235_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$235_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$235_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$235_m__5374__auto__$$ = ajax.protocols._body._;
  if ($m__5372__auto__$jscomp$235_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$235_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$235_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$235_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("AjaxResponse.-body", $this$$$);
};
ajax.protocols._body = function($this$$$) {
  return $this$$$ != null && $this$$$.ajax$protocols$AjaxResponse$_body$arity$1 != null ? $this$$$.ajax$protocols$AjaxResponse$_body$arity$1($this$$$) : ajax$protocols$AjaxResponse$_body$dyn_46151($this$$$);
};
var ajax$protocols$AjaxResponse$_get_response_header$dyn_46152 = function($this$$$, $header$$) {
  var $m__5372__auto__$jscomp$236_m__5374__auto__$$ = ajax.protocols._get_response_header[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$236_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$236_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$236_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $header$$) : $m__5372__auto__$jscomp$236_m__5374__auto__$$.call(null, $this$$$, $header$$);
  }
  $m__5372__auto__$jscomp$236_m__5374__auto__$$ = ajax.protocols._get_response_header._;
  if ($m__5372__auto__$jscomp$236_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$236_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$236_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $header$$) : $m__5372__auto__$jscomp$236_m__5374__auto__$$.call(null, $this$$$, $header$$);
  }
  throw $APP.cljs.core.missing_protocol("AjaxResponse.-get-response-header", $this$$$);
};
ajax.protocols._get_response_header = function($this$$$, $header$$) {
  return $this$$$ != null && $this$$$.ajax$protocols$AjaxResponse$_get_response_header$arity$2 != null ? $this$$$.ajax$protocols$AjaxResponse$_get_response_header$arity$2($this$$$, $header$$) : ajax$protocols$AjaxResponse$_get_response_header$dyn_46152($this$$$, $header$$);
};
var ajax$protocols$AjaxResponse$_was_aborted$dyn_46153 = function($this$$$) {
  var $m__5372__auto__$jscomp$237_m__5374__auto__$$ = ajax.protocols._was_aborted[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$237_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$237_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$237_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$237_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$237_m__5374__auto__$$ = ajax.protocols._was_aborted._;
  if ($m__5372__auto__$jscomp$237_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$237_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$237_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$237_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("AjaxResponse.-was-aborted", $this$$$);
};
ajax.protocols._was_aborted = function($this$$$) {
  return $this$$$ != null && $this$$$.ajax$protocols$AjaxResponse$_was_aborted$arity$1 != null ? $this$$$.ajax$protocols$AjaxResponse$_was_aborted$arity$1($this$$$) : ajax$protocols$AjaxResponse$_was_aborted$dyn_46153($this$$$);
};
ajax.protocols.Interceptor = function() {
};
var ajax$protocols$Interceptor$_process_request$dyn_46154 = function($this$$$, $request$$) {
  var $m__5372__auto__$jscomp$238_m__5374__auto__$$ = ajax.protocols._process_request[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$238_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$238_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$238_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $request$$) : $m__5372__auto__$jscomp$238_m__5374__auto__$$.call(null, $this$$$, $request$$);
  }
  $m__5372__auto__$jscomp$238_m__5374__auto__$$ = ajax.protocols._process_request._;
  if ($m__5372__auto__$jscomp$238_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$238_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$238_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $request$$) : $m__5372__auto__$jscomp$238_m__5374__auto__$$.call(null, $this$$$, $request$$);
  }
  throw $APP.cljs.core.missing_protocol("Interceptor.-process-request", $this$$$);
};
ajax.protocols._process_request = function($this$$$, $request$$) {
  return $this$$$ != null && $this$$$.ajax$protocols$Interceptor$_process_request$arity$2 != null ? $this$$$.ajax$protocols$Interceptor$_process_request$arity$2($this$$$, $request$$) : ajax$protocols$Interceptor$_process_request$dyn_46154($this$$$, $request$$);
};
var ajax$protocols$Interceptor$_process_response$dyn_46155 = function($this$$$, $response$$) {
  var $m__5372__auto__$jscomp$239_m__5374__auto__$$ = ajax.protocols._process_response[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$239_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$239_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$239_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $response$$) : $m__5372__auto__$jscomp$239_m__5374__auto__$$.call(null, $this$$$, $response$$);
  }
  $m__5372__auto__$jscomp$239_m__5374__auto__$$ = ajax.protocols._process_response._;
  if ($m__5372__auto__$jscomp$239_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$239_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$239_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $response$$) : $m__5372__auto__$jscomp$239_m__5374__auto__$$.call(null, $this$$$, $response$$);
  }
  throw $APP.cljs.core.missing_protocol("Interceptor.-process-response", $this$$$);
};
ajax.protocols._process_response = function($this$$$, $response$$) {
  return $this$$$ != null && $this$$$.ajax$protocols$Interceptor$_process_response$arity$2 != null ? $this$$$.ajax$protocols$Interceptor$_process_response$arity$2($this$$$, $response$$) : ajax$protocols$Interceptor$_process_response$dyn_46155($this$$$, $response$$);
};
ajax.protocols.Response = function($status$$, $body$$, $status_text$$, $headers$$, $was_aborted$$, $__meta$$, $__extmap$$, $__hash$$) {
  this.status = $status$$;
  this.body = $body$$;
  this.status_text = $status_text$$;
  this.headers = $headers$$;
  this.was_aborted = $was_aborted$$;
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k46118$$, $else__5326__auto__$$) {
  switch($k46118$$ instanceof $APP.cljs.core.Keyword ? $k46118$$.fqn : null) {
    case "status":
      return this.status;
    case "body":
      return this.body;
    case "status-text":
      return this.status_text;
    case "headers":
      return this.headers;
    case "was-aborted":
      return this.was_aborted;
    default:
      return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k46118$$, $else__5326__auto__$$);
  }
};
ajax.protocols.Response.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__46126_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46126_v__5348__auto__$$, 0, null);
    $p__46126_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46126_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__46126_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__46126_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
ajax.protocols.Response.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#ajax.protocols.Response{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$109$status, this.status], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$411$body, this.body], null), new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2605$status_text, this.status_text], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2606$headers, this.headers], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2607$was_aborted, this.was_aborted], null)], null), this.__extmap));
};
ajax.protocols.Response.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__46117$$) {
  return new $APP.cljs.core.RecordIter(0, this, 5, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$109$status, $APP.cljs$cst$411$body, cljs$cst$2605$status_text, $APP.cljs$cst$2606$headers, cljs$cst$2607$was_aborted], null), $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
ajax.protocols.Response.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
ajax.protocols.Response.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new ajax.protocols.Response(this.status, this.body, this.status_text, this.headers, this.was_aborted, this.__meta, this.__extmap, this.__hash);
};
ajax.protocols.Response.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 5 + $APP.cljs.core.count(this.__extmap);
};
ajax.protocols.Response.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$75_h__5134__auto____$1$jscomp$75_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$75_h__5134__auto____$1$jscomp$75_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$75_h__5134__auto____$1$jscomp$75_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$75_h__5134__auto____$1$jscomp$75_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$75_h__5134__auto____$1$jscomp$75_this__5319__auto__$$ = -473222333 ^ $APP.cljs.core.hash_unordered_coll(this);
};
ajax.protocols.Response.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this46119$$, $other46120$$) {
  return $other46120$$ != null && this.constructor === $other46120$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.status, $other46120$$.status) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.body, $other46120$$.body) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.status_text, $other46120$$.status_text) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.headers, $other46120$$.headers) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.was_aborted, 
  $other46120$$.was_aborted) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other46120$$.__extmap);
};
ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$ = $APP.cljs.core.PROTOCOL_SENTINEL;
ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = function($this$$$) {
  return $APP.cljs$cst$411$body.cljs$core$IFn$_invoke$arity$1(this);
};
ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = function($this$$$) {
  return $APP.cljs$cst$109$status.cljs$core$IFn$_invoke$arity$1(this);
};
ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = function($this$$$) {
  return cljs$cst$2605$status_text.cljs$core$IFn$_invoke$arity$1(this);
};
ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = function($this$$$) {
  return $APP.cljs$cst$2606$headers.cljs$core$IFn$_invoke$arity$1(this);
};
ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = function($this$$$, $header$$) {
  return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$2606$headers.cljs$core$IFn$_invoke$arity$1(this), $header$$);
};
ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = function($this$$$) {
  return cljs$cst$2607$was_aborted.cljs$core$IFn$_invoke$arity$1(this);
};
ajax.protocols.Response.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 5, [cljs$cst$2607$was_aborted, null, cljs$cst$2605$status_text, null, $APP.cljs$cst$2606$headers, null, $APP.cljs$cst$109$status, null, $APP.cljs$cst$411$body, null], null), null), $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), 
  this.__meta), $k__5334__auto__$$) : new ajax.protocols.Response(this.status, this.body, this.status_text, this.headers, this.was_aborted, this.__meta, $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
ajax.protocols.Response.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k46118$$) {
  switch($k46118$$ instanceof $APP.cljs.core.Keyword ? $k46118$$.fqn : null) {
    case "status":
    case "body":
    case "status-text":
    case "headers":
    case "was-aborted":
      return !0;
    default:
      return $APP.cljs.core.contains_QMARK_(this.__extmap, $k46118$$);
  }
};
ajax.protocols.Response.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($pred__46142_this__5331__auto__$$, $k__5332__auto__$$, $G__46117$$) {
  $pred__46142_this__5331__auto__$$ = $APP.cljs.core.keyword_identical_QMARK_;
  return $APP.cljs.core.truth_($pred__46142_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__46142_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$109$status, $k__5332__auto__$$) : $pred__46142_this__5331__auto__$$.call(null, $APP.cljs$cst$109$status, $k__5332__auto__$$)) ? new ajax.protocols.Response($G__46117$$, this.body, this.status_text, this.headers, this.was_aborted, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__46142_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? 
  $pred__46142_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$411$body, $k__5332__auto__$$) : $pred__46142_this__5331__auto__$$.call(null, $APP.cljs$cst$411$body, $k__5332__auto__$$)) ? new ajax.protocols.Response(this.status, $G__46117$$, this.status_text, this.headers, this.was_aborted, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__46142_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__46142_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2605$status_text, 
  $k__5332__auto__$$) : $pred__46142_this__5331__auto__$$.call(null, cljs$cst$2605$status_text, $k__5332__auto__$$)) ? new ajax.protocols.Response(this.status, this.body, $G__46117$$, this.headers, this.was_aborted, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__46142_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__46142_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$2606$headers, $k__5332__auto__$$) : $pred__46142_this__5331__auto__$$.call(null, $APP.cljs$cst$2606$headers, 
  $k__5332__auto__$$)) ? new ajax.protocols.Response(this.status, this.body, this.status_text, $G__46117$$, this.was_aborted, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__46142_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__46142_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2607$was_aborted, $k__5332__auto__$$) : $pred__46142_this__5331__auto__$$.call(null, cljs$cst$2607$was_aborted, $k__5332__auto__$$)) ? new ajax.protocols.Response(this.status, this.body, 
  this.status_text, this.headers, $G__46117$$, this.__meta, this.__extmap, null) : new ajax.protocols.Response(this.status, this.body, this.status_text, this.headers, this.was_aborted, this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__46117$$), null);
};
ajax.protocols.Response.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.MapEntry($APP.cljs$cst$109$status, this.status, null), new $APP.cljs.core.MapEntry($APP.cljs$cst$411$body, this.body, null), new $APP.cljs.core.MapEntry(cljs$cst$2605$status_text, this.status_text, null), new $APP.cljs.core.MapEntry($APP.cljs$cst$2606$headers, this.headers, null), new $APP.cljs.core.MapEntry(cljs$cst$2607$was_aborted, 
  this.was_aborted, null)], null), this.__extmap));
};
ajax.protocols.Response.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__46117$$) {
  return new ajax.protocols.Response(this.status, this.body, this.status_text, this.headers, this.was_aborted, $G__46117$$, this.__extmap, this.__hash);
};
ajax.protocols.Response.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
ajax.protocols.Response.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2608$status, $APP.cljs$cst$597$body, cljs$cst$2609$status_text, $APP.cljs$cst$2610$headers, cljs$cst$2611$was_aborted], null);
};
ajax.protocols.Response.cljs$lang$type = !0;
ajax.protocols.Response.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "ajax.protocols/Response", null, 1, null);
};
ajax.protocols.Response.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "ajax.protocols/Response");
};
ajax.protocols.__GT_Response = function($status$$, $body$$, $status_text$$, $headers$$, $was_aborted$$) {
  return new ajax.protocols.Response($status$$, $body$$, $status_text$$, $headers$$, $was_aborted$$, null, null, null);
};
ajax.protocols.map__GT_Response = function($G__46124$$) {
  var $G__46145$jscomp$inline_5048_extmap__5365__auto__$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($G__46124$$, $APP.cljs$cst$109$status, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$411$body, cljs$cst$2605$status_text, $APP.cljs$cst$2606$headers, cljs$cst$2607$was_aborted], 0));
  $G__46145$jscomp$inline_5048_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__46124$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__46145$jscomp$inline_5048_extmap__5365__auto__$$) : $G__46145$jscomp$inline_5048_extmap__5365__auto__$$;
  return new ajax.protocols.Response($APP.cljs$cst$109$status.cljs$core$IFn$_invoke$arity$1($G__46124$$), $APP.cljs$cst$411$body.cljs$core$IFn$_invoke$arity$1($G__46124$$), cljs$cst$2605$status_text.cljs$core$IFn$_invoke$arity$1($G__46124$$), $APP.cljs$cst$2606$headers.cljs$core$IFn$_invoke$arity$1($G__46124$$), cljs$cst$2607$was_aborted.cljs$core$IFn$_invoke$arity$1($G__46124$$), null, $APP.cljs.core.not_empty($G__46145$jscomp$inline_5048_extmap__5365__auto__$$), null);
};
ajax.util = {};
ajax.util.throw_error = function($args$$) {
  throw Error($APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($args$$));
};
ajax.util.get_content_type = function($or__5025__auto__$jscomp$377_response$$) {
  $or__5025__auto__$jscomp$377_response$$ = ajax.protocols._get_response_header($or__5025__auto__$jscomp$377_response$$, "Content-Type");
  return $APP.cljs.core.truth_($or__5025__auto__$jscomp$377_response$$) ? $or__5025__auto__$jscomp$377_response$$ : "";
};
ajax.util.to_utf8_writer = function($to_str$$) {
  return $to_str$$;
};
ajax.util.successful_response_codes_set = new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 7, [206, null, 204, null, 304, null, 1223, null, 201, null, 202, null, 200, null], null), null);
ajax.util.success_QMARK_ = function($status$$) {
  return $APP.cljs.core.contains_QMARK_(ajax.util.successful_response_codes_set, $status$$);
};
ajax.url = {};
ajax.url.key_encode = function($key$$) {
  return $APP.cljs.core.qualified_keyword_QMARK_($key$$) ? $APP.clojure.string.join.cljs$core$IFn$_invoke$arity$2("/", $APP.cljs.core.juxt.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.namespace, $APP.cljs.core.name)($key$$)) : $key$$ instanceof $APP.cljs.core.Keyword ? $APP.cljs.core.name($key$$) : $key$$;
};
ajax.url.value_encode = encodeURIComponent;
ajax.url.key_value_pair_to_str = function($p__46158_v$$) {
  var $k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46158_v$$, 0, null);
  $p__46158_v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46158_v$$, 1, null);
  return [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.key_encode($k$$)), "\x3d", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.value_encode.cljs$core$IFn$_invoke$arity$1 ? ajax.url.value_encode.cljs$core$IFn$_invoke$arity$1($p__46158_v$$) : ajax.url.value_encode.call(null, $p__46158_v$$))].join("");
};
ajax.url.vec_key_transform_fn = function($vec_key_encode$$, $k$$, $v$$) {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$vec_key_encode$$.cljs$core$IFn$_invoke$arity$1 ? $vec_key_encode$$.cljs$core$IFn$_invoke$arity$1($k$$) : $vec_key_encode$$.call(null, $k$$), $v$$], null);
};
ajax.url.to_vec_key_transform = function($vec_strategy$$) {
  var $vec_key_encode$$ = function() {
    var $G__46162_G__46162__$1$$ = $APP.cljs.core.truth_($vec_strategy$$) ? $vec_strategy$$ : cljs$cst$2612$java;
    $G__46162_G__46162__$1$$ = $G__46162_G__46162__$1$$ instanceof $APP.cljs.core.Keyword ? $G__46162_G__46162__$1$$.fqn : null;
    switch($G__46162_G__46162__$1$$) {
      case "java":
        return function($k$$) {
          return null;
        };
      case "rails":
        return function($k$$) {
          return "";
        };
      case "indexed":
        return $APP.cljs.core.identity;
      default:
        throw Error(["No matching clause: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($G__46162_G__46162__$1$$)].join(""));
    }
  }();
  return $APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.url.vec_key_transform_fn, $vec_key_encode$$);
};
ajax.url.param_to_key_value_pairs = function($vec_key_transform$$, $new_key_prefix$$, $p__46163_value$$) {
  var $key$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46163_value$$, 0, null);
  $p__46163_value$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46163_value$$, 1, null);
  var $k1$$ = ajax.url.key_encode($key$$);
  $new_key_prefix$$ = $APP.cljs.core.truth_($new_key_prefix$$) ? $APP.cljs.core.truth_($key$$) ? [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($new_key_prefix$$), "[", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($k1$$), "]"].join("") : $new_key_prefix$$ : $k1$$;
  $key$$ = $APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$3(ajax.url.param_to_key_value_pairs, $vec_key_transform$$, $new_key_prefix$$);
  return typeof $p__46163_value$$ === "string" ? new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$new_key_prefix$$, $p__46163_value$$], null)], null) : $APP.cljs.core.qualified_keyword_QMARK_($p__46163_value$$) ? new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$new_key_prefix$$, $APP.clojure.string.join.cljs$core$IFn$_invoke$arity$2("/", $APP.cljs.core.juxt.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.namespace, $APP.cljs.core.name)($p__46163_value$$))], null)], null) : $p__46163_value$$ instanceof $APP.cljs.core.Keyword ? new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$new_key_prefix$$, $APP.cljs.core.name($p__46163_value$$)], 
  null)], null) : $APP.cljs.core.map_QMARK_($p__46163_value$$) ? $APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic($key$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.seq($p__46163_value$$)], 0)) : $APP.cljs.core.sequential_QMARK_($p__46163_value$$) || $APP.cljs.core.set_QMARK_($p__46163_value$$) ? $APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic($key$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2($vec_key_transform$$, 
  $APP.cljs.core.seq($p__46163_value$$))], 0)) : new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$new_key_prefix$$, $p__46163_value$$], null)], null);
};
ajax.url.params_to_str = function($vec_strategy$$, $params$$) {
  return $APP.clojure.string.join.cljs$core$IFn$_invoke$arity$2("\x26", $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(ajax.url.key_value_pair_to_str, ajax.url.param_to_key_value_pairs(ajax.url.to_vec_key_transform($vec_strategy$$), null, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [null, $params$$], null))));
};
ajax.url.url_request_format = function($var_args$$) {
  switch(arguments.length) {
    case 0:
      return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$0 = function() {
  return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY);
};
ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1 = function($map__46170__$1_p__46169_vec_strategy$$) {
  $map__46170__$1_p__46169_vec_strategy$$ = $APP.cljs.core.__destructure_map($map__46170__$1_p__46169_vec_strategy$$);
  $map__46170__$1_p__46169_vec_strategy$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46170__$1_p__46169_vec_strategy$$, cljs$cst$2613$vec_strategy);
  return new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$2614$write, ajax.util.to_utf8_writer($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.url.params_to_str, $map__46170__$1_p__46169_vec_strategy$$)), cljs$cst$2615$content_type, "application/x-www-form-urlencoded; charset\x3dutf-8"], null);
};
ajax.url.url_request_format.cljs$lang$maxFixedArity = 1;
ajax.interceptors = {};
ajax.interceptors.StandardInterceptor = function($name$$, $request$$, $response$$, $__meta$$, $__extmap$$, $__hash$$) {
  this.name = $name$$;
  this.request = $request$$;
  this.response = $response$$;
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k46190$$, $else__5326__auto__$$) {
  switch($k46190$$ instanceof $APP.cljs.core.Keyword ? $k46190$$.fqn : null) {
    case "name":
      return this.name;
    case "request":
      return this.request;
    case "response":
      return this.response;
    default:
      return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k46190$$, $else__5326__auto__$$);
  }
};
ajax.interceptors.StandardInterceptor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__46195_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46195_v__5348__auto__$$, 0, null);
    $p__46195_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46195_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__46195_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__46195_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = $APP.cljs.core.PROTOCOL_SENTINEL;
ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = function($map__46200__$1_map__46201__$1_p__46199_request__$2$$, $opts$$) {
  $map__46200__$1_map__46201__$1_p__46199_request__$2$$ = $APP.cljs.core.__destructure_map($map__46200__$1_map__46201__$1_p__46199_request__$2$$);
  $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46200__$1_map__46201__$1_p__46199_request__$2$$, cljs$cst$2616$request);
  $map__46200__$1_map__46201__$1_p__46199_request__$2$$ = $APP.cljs.core.__destructure_map(this);
  $map__46200__$1_map__46201__$1_p__46199_request__$2$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46200__$1_map__46201__$1_p__46199_request__$2$$, cljs$cst$2616$request);
  return $map__46200__$1_map__46201__$1_p__46199_request__$2$$.cljs$core$IFn$_invoke$arity$1 ? $map__46200__$1_map__46201__$1_p__46199_request__$2$$.cljs$core$IFn$_invoke$arity$1($opts$$) : $map__46200__$1_map__46201__$1_p__46199_request__$2$$.call(null, $opts$$);
};
ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = function($map__46203__$1_map__46204__$1_p__46202_response__$2$$, $xhrio$$) {
  $map__46203__$1_map__46204__$1_p__46202_response__$2$$ = $APP.cljs.core.__destructure_map($map__46203__$1_map__46204__$1_p__46202_response__$2$$);
  $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46203__$1_map__46204__$1_p__46202_response__$2$$, cljs$cst$2617$response);
  $map__46203__$1_map__46204__$1_p__46202_response__$2$$ = $APP.cljs.core.__destructure_map(this);
  $map__46203__$1_map__46204__$1_p__46202_response__$2$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46203__$1_map__46204__$1_p__46202_response__$2$$, cljs$cst$2617$response);
  return $map__46203__$1_map__46204__$1_p__46202_response__$2$$.cljs$core$IFn$_invoke$arity$1 ? $map__46203__$1_map__46204__$1_p__46202_response__$2$$.cljs$core$IFn$_invoke$arity$1($xhrio$$) : $map__46203__$1_map__46204__$1_p__46202_response__$2$$.call(null, $xhrio$$);
};
ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#ajax.interceptors.StandardInterceptor{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$272$name, this.name], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2616$request, this.request], null), 
  new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2617$response, this.response], null)], null), this.__extmap));
};
ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__46189$$) {
  return new $APP.cljs.core.RecordIter(0, this, 3, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$272$name, cljs$cst$2616$request, cljs$cst$2617$response], null), $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new ajax.interceptors.StandardInterceptor(this.name, this.request, this.response, this.__meta, this.__extmap, this.__hash);
};
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 3 + $APP.cljs.core.count(this.__extmap);
};
ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$76_h__5134__auto____$1$jscomp$76_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$76_h__5134__auto____$1$jscomp$76_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$76_h__5134__auto____$1$jscomp$76_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$76_h__5134__auto____$1$jscomp$76_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$76_h__5134__auto____$1$jscomp$76_this__5319__auto__$$ = 1482887116 ^ $APP.cljs.core.hash_unordered_coll(this);
};
ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this46191$$, $other46192$$) {
  return $other46192$$ != null && this.constructor === $other46192$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.name, $other46192$$.name) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.request, $other46192$$.request) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.response, $other46192$$.response) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other46192$$.__extmap);
};
ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2617$response, null, cljs$cst$2616$request, null, $APP.cljs$cst$272$name, null], null), null), $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), $k__5334__auto__$$) : new ajax.interceptors.StandardInterceptor(this.name, 
  this.request, this.response, this.__meta, $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k46190$$) {
  switch($k46190$$ instanceof $APP.cljs.core.Keyword ? $k46190$$.fqn : null) {
    case "name":
    case "request":
    case "response":
      return !0;
    default:
      return $APP.cljs.core.contains_QMARK_(this.__extmap, $k46190$$);
  }
};
ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($pred__46206_this__5331__auto__$$, $k__5332__auto__$$, $G__46189$$) {
  $pred__46206_this__5331__auto__$$ = $APP.cljs.core.keyword_identical_QMARK_;
  return $APP.cljs.core.truth_($pred__46206_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__46206_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$272$name, $k__5332__auto__$$) : $pred__46206_this__5331__auto__$$.call(null, $APP.cljs$cst$272$name, $k__5332__auto__$$)) ? new ajax.interceptors.StandardInterceptor($G__46189$$, this.request, this.response, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__46206_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? 
  $pred__46206_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2616$request, $k__5332__auto__$$) : $pred__46206_this__5331__auto__$$.call(null, cljs$cst$2616$request, $k__5332__auto__$$)) ? new ajax.interceptors.StandardInterceptor(this.name, $G__46189$$, this.response, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__46206_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__46206_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2617$response, $k__5332__auto__$$) : 
  $pred__46206_this__5331__auto__$$.call(null, cljs$cst$2617$response, $k__5332__auto__$$)) ? new ajax.interceptors.StandardInterceptor(this.name, this.request, $G__46189$$, this.__meta, this.__extmap, null) : new ajax.interceptors.StandardInterceptor(this.name, this.request, this.response, this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__46189$$), null);
};
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.MapEntry($APP.cljs$cst$272$name, this.name, null), new $APP.cljs.core.MapEntry(cljs$cst$2616$request, this.request, null), new $APP.cljs.core.MapEntry(cljs$cst$2617$response, this.response, null)], null), this.__extmap));
};
ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__46189$$) {
  return new ajax.interceptors.StandardInterceptor(this.name, this.request, this.response, $G__46189$$, this.__extmap, this.__hash);
};
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
ajax.interceptors.StandardInterceptor.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$7$name, cljs$cst$2618$request, cljs$cst$2619$response], null);
};
ajax.interceptors.StandardInterceptor.cljs$lang$type = !0;
ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "ajax.interceptors/StandardInterceptor", null, 1, null);
};
ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "ajax.interceptors/StandardInterceptor");
};
ajax.interceptors.__GT_StandardInterceptor = function($name$$, $request$$, $response$$) {
  return new ajax.interceptors.StandardInterceptor($name$$, $request$$, $response$$, null, null, null);
};
ajax.interceptors.map__GT_StandardInterceptor = function($G__46193$$) {
  var $G__46209$jscomp$inline_5050_extmap__5365__auto__$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($G__46193$$, $APP.cljs$cst$272$name, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2616$request, cljs$cst$2617$response], 0));
  $G__46209$jscomp$inline_5050_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__46193$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__46209$jscomp$inline_5050_extmap__5365__auto__$$) : $G__46209$jscomp$inline_5050_extmap__5365__auto__$$;
  return new ajax.interceptors.StandardInterceptor($APP.cljs$cst$272$name.cljs$core$IFn$_invoke$arity$1($G__46193$$), cljs$cst$2616$request.cljs$core$IFn$_invoke$arity$1($G__46193$$), cljs$cst$2617$response.cljs$core$IFn$_invoke$arity$1($G__46193$$), null, $APP.cljs.core.not_empty($G__46209$jscomp$inline_5050_extmap__5365__auto__$$), null);
};
ajax.interceptors.to_interceptor = function($m$$) {
  return ajax.interceptors.map__GT_StandardInterceptor($APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$2616$request, $APP.cljs.core.identity, cljs$cst$2617$response, $APP.cljs.core.identity], null), $m$$], 0)));
};
ajax.interceptors.exception_message = function($e$$) {
  return $e$$.message;
};
ajax.interceptors.exception_response = function($e$jscomp$281_parse_error_status_text$$, $status$$, $map__46211__$1_p__46210_response$$, $xhrio$$) {
  $map__46211__$1_p__46210_response$$ = $APP.cljs.core.__destructure_map($map__46211__$1_p__46210_response$$);
  var $description$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46211__$1_p__46210_response$$, cljs$cst$2620$description);
  $map__46211__$1_p__46210_response$$ = new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$109$status, $status$$, $APP.cljs$cst$2025$failure, $APP.cljs$cst$1404$error, cljs$cst$2617$response, null], null);
  $e$jscomp$281_parse_error_status_text$$ = [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message($e$jscomp$281_parse_error_status_text$$)), "  Format should have been ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($description$$)].join("");
  $e$jscomp$281_parse_error_status_text$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic($map__46211__$1_p__46210_response$$, cljs$cst$2605$status_text, $e$jscomp$281_parse_error_status_text$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$2025$failure, cljs$cst$2621$parse, cljs$cst$2622$original_text, ajax.protocols._body($xhrio$$)], 0));
  return ajax.util.success_QMARK_($status$$) ? $e$jscomp$281_parse_error_status_text$$ : $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic($map__46211__$1_p__46210_response$$, cljs$cst$2605$status_text, ajax.protocols._status_text($xhrio$$), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2623$parse_error, $e$jscomp$281_parse_error_status_text$$], 0));
};
ajax.interceptors.fail = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$209_argseq__5756__auto__$$ = [], $len__5749__auto___46313$$ = arguments.length, $i__5750__auto___46315$$ = 0;;) {
    if ($i__5750__auto___46315$$ < $len__5749__auto___46313$$) {
      $args__5755__auto__$jscomp$209_argseq__5756__auto__$$.push(arguments[$i__5750__auto___46315$$]), $i__5750__auto___46315$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$209_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$209_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$209_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$209_argseq__5756__auto__$$);
};
ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = function($response$jscomp$8_status$$, $status_text$$, $failure$$, $params$$) {
  $response$jscomp$8_status$$ = new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$109$status, $response$jscomp$8_status$$, cljs$cst$2605$status_text, $status_text$$, $APP.cljs$cst$2025$failure, $failure$$], null);
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [!1, $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.conj, $response$jscomp$8_status$$, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.vec, $APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2, $params$$)))], null);
};
ajax.interceptors.fail.cljs$lang$maxFixedArity = 3;
ajax.interceptors.fail.cljs$lang$applyTo = function($G__46214_seq46212$$) {
  var $G__46213$$ = $APP.cljs.core.first($G__46214_seq46212$$), $G__46215_seq46212__$1$$ = $APP.cljs.core.next($G__46214_seq46212$$);
  $G__46214_seq46212$$ = $APP.cljs.core.first($G__46215_seq46212__$1$$);
  var $seq46212__$2_seq46212__$3$$ = $APP.cljs.core.next($G__46215_seq46212__$1$$);
  $G__46215_seq46212__$1$$ = $APP.cljs.core.first($seq46212__$2_seq46212__$3$$);
  $seq46212__$2_seq46212__$3$$ = $APP.cljs.core.next($seq46212__$2_seq46212__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__46213$$, $G__46214_seq46212$$, $G__46215_seq46212__$1$$, $seq46212__$2_seq46212__$3$$);
};
ajax.interceptors.content_type_to_request_header = function($content_type$$) {
  return $APP.clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ", typeof $content_type$$ === "string" ? new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$content_type$$], null) : $content_type$$);
};
ajax.interceptors.ResponseFormat = function($read$$, $description$$, $content_type$$, $__meta$$, $__extmap$$, $__hash$$) {
  this.read = $read$$;
  this.description = $description$$;
  this.content_type = $content_type$$;
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k46218$$, $else__5326__auto__$$) {
  switch($k46218$$ instanceof $APP.cljs.core.Keyword ? $k46218$$.fqn : null) {
    case "read":
      return this.read;
    case "description":
      return this.description;
    case "content-type":
      return this.content_type;
    default:
      return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k46218$$, $else__5326__auto__$$);
  }
};
ajax.interceptors.ResponseFormat.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__46223_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46223_v__5348__auto__$$, 0, null);
    $p__46223_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46223_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__46223_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__46223_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = $APP.cljs.core.PROTOCOL_SENTINEL;
ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = function($map__46228__$1_map__46229__$1_p__46227$$, $request$$) {
  $map__46228__$1_map__46229__$1_p__46227$$ = $APP.cljs.core.__destructure_map($map__46228__$1_map__46229__$1_p__46227$$);
  $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46228__$1_map__46229__$1_p__46227$$, cljs$cst$2615$content_type);
  $map__46228__$1_map__46229__$1_p__46227$$ = $APP.cljs.core.__destructure_map(this);
  var $content_type__$2$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46228__$1_map__46229__$1_p__46227$$, cljs$cst$2615$content_type);
  return $APP.cljs.core.update.cljs$core$IFn$_invoke$arity$3($request$$, $APP.cljs$cst$2606$headers, function($JSCompiler_inline_result$$) {
    var $JSCompiler_temp_const$$ = $APP.cljs.core.merge, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.cljs$core$IFn$_invoke$arity$variadic, $JSCompiler_temp_const$jscomp$1$$ = $APP.cljs.core.prim_seq, $JSCompiler_temp_const$jscomp$2$$ = $JSCompiler_temp_const$jscomp$1$$.cljs$core$IFn$_invoke$arity$2, $JSCompiler_temp_const$jscomp$3$$ = new $APP.cljs.core.PersistentArrayMap(null, 1, ["Accept", ajax.interceptors.content_type_to_request_header($content_type__$2$$)], null);
    $JSCompiler_inline_result$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$$) ? $JSCompiler_inline_result$$ : $APP.cljs.core.PersistentArrayMap.EMPTY;
    return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_temp_const$jscomp$2$$.call($JSCompiler_temp_const$jscomp$1$$, [$JSCompiler_temp_const$jscomp$3$$, $JSCompiler_inline_result$$], 0));
  });
};
ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = function($map__46231__$1_map__46232__$1_p__46230$$, $xhrio$$) {
  $map__46231__$1_map__46232__$1_p__46230$$ = $APP.cljs.core.__destructure_map($map__46231__$1_map__46232__$1_p__46230$$);
  $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46231__$1_map__46232__$1_p__46230$$, cljs$cst$2624$read);
  $map__46231__$1_map__46232__$1_p__46230$$ = $APP.cljs.core.__destructure_map(this);
  var $read__$2$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46231__$1_map__46232__$1_p__46230$$, cljs$cst$2624$read);
  try {
    var $status$$ = ajax.protocols._status($xhrio$$), $e$jscomp$282_fail$$ = $APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.interceptors.fail, $status$$);
    switch($status$$) {
      case 0:
        return $xhrio$$ instanceof ajax.protocols.Response ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [!1, $xhrio$$], null) : $e$jscomp$282_fail$$("Request failed.", cljs$cst$2625$failed);
      case -1:
        return $APP.cljs.core.truth_(ajax.protocols._was_aborted($xhrio$$)) ? $e$jscomp$282_fail$$("Request aborted by client.", cljs$cst$2626$aborted) : $e$jscomp$282_fail$$("Request timed out.", $APP.cljs$cst$2627$timeout);
      case 204:
        return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [!0, null], null);
      case 205:
        return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [!0, null], null);
      default:
        try {
          var $response$$ = $read__$2$$.cljs$core$IFn$_invoke$arity$1 ? $read__$2$$.cljs$core$IFn$_invoke$arity$1($xhrio$$) : $read__$2$$.call(null, $xhrio$$);
          return ajax.util.success_QMARK_($status$$) ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [!0, $response$$], null) : $e$jscomp$282_fail$$(ajax.protocols._status_text($xhrio$$), $APP.cljs$cst$1404$error, cljs$cst$2617$response, $response$$);
        } catch ($e46235$$) {
          if ($e46235$$ instanceof Object) {
            return $e$jscomp$282_fail$$ = $e46235$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [!1, ajax.interceptors.exception_response($e$jscomp$282_fail$$, $status$$, $map__46231__$1_map__46232__$1_p__46230$$, $xhrio$$)], null);
          }
          throw $e46235$$;
        }
    }
  } catch ($e46233$$) {
    if ($e46233$$ instanceof Object) {
      return $e$jscomp$282_fail$$ = $e46233$$, ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(0, $e$jscomp$282_fail$$.message, $APP.cljs$cst$2628$exception, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$2628$exception, $e$jscomp$282_fail$$], 0));
    }
    throw $e46233$$;
  }
};
ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#ajax.interceptors.ResponseFormat{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2624$read, this.read], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2620$description, this.description], null), new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2615$content_type, this.content_type], null)], null), this.__extmap));
};
ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__46217$$) {
  return new $APP.cljs.core.RecordIter(0, this, 3, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2624$read, cljs$cst$2620$description, cljs$cst$2615$content_type], null), $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new ajax.interceptors.ResponseFormat(this.read, this.description, this.content_type, this.__meta, this.__extmap, this.__hash);
};
ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 3 + $APP.cljs.core.count(this.__extmap);
};
ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$77_h__5134__auto____$1$jscomp$77_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$77_h__5134__auto____$1$jscomp$77_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$77_h__5134__auto____$1$jscomp$77_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$77_h__5134__auto____$1$jscomp$77_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$77_h__5134__auto____$1$jscomp$77_this__5319__auto__$$ = -2103965186 ^ $APP.cljs.core.hash_unordered_coll(this);
};
ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this46219$$, $other46220$$) {
  return $other46220$$ != null && this.constructor === $other46220$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.read, $other46220$$.read) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.description, $other46220$$.description) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.content_type, $other46220$$.content_type) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other46220$$.__extmap);
};
ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2620$description, null, cljs$cst$2624$read, null, cljs$cst$2615$content_type, null], null), null), $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), $k__5334__auto__$$) : new ajax.interceptors.ResponseFormat(this.read, 
  this.description, this.content_type, this.__meta, $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k46218$$) {
  switch($k46218$$ instanceof $APP.cljs.core.Keyword ? $k46218$$.fqn : null) {
    case "read":
    case "description":
    case "content-type":
      return !0;
    default:
      return $APP.cljs.core.contains_QMARK_(this.__extmap, $k46218$$);
  }
};
ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($pred__46237_this__5331__auto__$$, $k__5332__auto__$$, $G__46217$$) {
  $pred__46237_this__5331__auto__$$ = $APP.cljs.core.keyword_identical_QMARK_;
  return $APP.cljs.core.truth_($pred__46237_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__46237_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2624$read, $k__5332__auto__$$) : $pred__46237_this__5331__auto__$$.call(null, cljs$cst$2624$read, $k__5332__auto__$$)) ? new ajax.interceptors.ResponseFormat($G__46217$$, this.description, this.content_type, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__46237_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? 
  $pred__46237_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2620$description, $k__5332__auto__$$) : $pred__46237_this__5331__auto__$$.call(null, cljs$cst$2620$description, $k__5332__auto__$$)) ? new ajax.interceptors.ResponseFormat(this.read, $G__46217$$, this.content_type, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__46237_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__46237_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2615$content_type, 
  $k__5332__auto__$$) : $pred__46237_this__5331__auto__$$.call(null, cljs$cst$2615$content_type, $k__5332__auto__$$)) ? new ajax.interceptors.ResponseFormat(this.read, this.description, $G__46217$$, this.__meta, this.__extmap, null) : new ajax.interceptors.ResponseFormat(this.read, this.description, this.content_type, this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__46217$$), null);
};
ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.MapEntry(cljs$cst$2624$read, this.read, null), new $APP.cljs.core.MapEntry(cljs$cst$2620$description, this.description, null), new $APP.cljs.core.MapEntry(cljs$cst$2615$content_type, this.content_type, null)], null), this.__extmap));
};
ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__46217$$) {
  return new ajax.interceptors.ResponseFormat(this.read, this.description, this.content_type, $G__46217$$, this.__extmap, this.__hash);
};
ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
ajax.interceptors.ResponseFormat.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$951$read, cljs$cst$2629$description, cljs$cst$2630$content_type], null);
};
ajax.interceptors.ResponseFormat.cljs$lang$type = !0;
ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "ajax.interceptors/ResponseFormat", null, 1, null);
};
ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "ajax.interceptors/ResponseFormat");
};
ajax.interceptors.__GT_ResponseFormat = function($read$$, $description$$, $content_type$$) {
  return new ajax.interceptors.ResponseFormat($read$$, $description$$, $content_type$$, null, null, null);
};
ajax.interceptors.map__GT_ResponseFormat = function($G__46221$$) {
  var $G__46240$jscomp$inline_5054_extmap__5365__auto__$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($G__46221$$, cljs$cst$2624$read, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2620$description, cljs$cst$2615$content_type], 0));
  $G__46240$jscomp$inline_5054_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__46221$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__46240$jscomp$inline_5054_extmap__5365__auto__$$) : $G__46240$jscomp$inline_5054_extmap__5365__auto__$$;
  return new ajax.interceptors.ResponseFormat(cljs$cst$2624$read.cljs$core$IFn$_invoke$arity$1($G__46221$$), cljs$cst$2620$description.cljs$core$IFn$_invoke$arity$1($G__46221$$), cljs$cst$2615$content_type.cljs$core$IFn$_invoke$arity$1($G__46221$$), null, $APP.cljs.core.not_empty($G__46240$jscomp$inline_5054_extmap__5365__auto__$$), null);
};
ajax.interceptors.get_request_format = function($format$$) {
  return $APP.cljs.core.map_QMARK_($format$$) ? $format$$ : $format$$ instanceof $APP.cljs.core.Keyword ? ajax.util.throw_error(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ", $format$$], null)) : $APP.cljs.core.ifn_QMARK_($format$$) ? new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$2614$write, $format$$, cljs$cst$2615$content_type, "text/plain"], null) : $APP.cljs.core.PersistentArrayMap.EMPTY;
};
ajax.interceptors.apply_request_format = function($write$$, $params$$) {
  return $write$$.cljs$core$IFn$_invoke$arity$1 ? $write$$.cljs$core$IFn$_invoke$arity$1($params$$) : $write$$.call(null, $params$$);
};
ajax.interceptors.ApplyRequestFormat = function($__meta$$, $__extmap$$, $__hash$$) {
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k46242$$, $else__5326__auto__$$) {
  return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k46242$$, $else__5326__auto__$$);
};
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__46247_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46247_v__5348__auto__$$, 0, null);
    $p__46247_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46247_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__46247_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__46247_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = $APP.cljs.core.PROTOCOL_SENTINEL;
ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = function($_$$, $headers$jscomp$22_headers__$1$$) {
  $_$$ = $APP.cljs.core.__destructure_map($headers$jscomp$22_headers__$1$$);
  $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($_$$, $APP.cljs$cst$2493$uri);
  $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($_$$, $APP.cljs$cst$2631$method);
  var $body$jscomp$46_format$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($_$$, cljs$cst$2632$format), $params$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($_$$, $APP.cljs$cst$410$params);
  $headers$jscomp$22_headers__$1$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($_$$, $APP.cljs$cst$2606$headers);
  var $content_type$$ = ajax.interceptors.get_request_format($body$jscomp$46_format$$);
  $content_type$$ = $APP.cljs.core.__destructure_map($content_type$$);
  var $write$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($content_type$$, cljs$cst$2614$write);
  $content_type$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($content_type$$, cljs$cst$2615$content_type);
  $body$jscomp$46_format$$ = $write$$ != null ? ajax.interceptors.apply_request_format($write$$, $params$$) : ajax.util.throw_error(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ", $body$jscomp$46_format$$], null));
  $headers$jscomp$22_headers__$1$$ = $APP.cljs.core.truth_($headers$jscomp$22_headers__$1$$) ? $headers$jscomp$22_headers__$1$$ : $APP.cljs.core.PersistentArrayMap.EMPTY;
  return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic($_$$, $APP.cljs$cst$411$body, $body$jscomp$46_format$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$2606$headers, $APP.cljs.core.truth_($content_type$$) ? $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($headers$jscomp$22_headers__$1$$, "Content-Type", ajax.interceptors.content_type_to_request_header($content_type$$)) : $headers$jscomp$22_headers__$1$$], 0));
};
ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = function($_$$, $xhrio$$) {
  return $xhrio$$;
};
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#ajax.interceptors.ApplyRequestFormat{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentVector.EMPTY, this.__extmap));
};
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__46241$$) {
  return new $APP.cljs.core.RecordIter(0, this, 0, $APP.cljs.core.PersistentVector.EMPTY, $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new ajax.interceptors.ApplyRequestFormat(this.__meta, this.__extmap, this.__hash);
};
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 0 + $APP.cljs.core.count(this.__extmap);
};
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$78_h__5134__auto____$1$jscomp$78_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$78_h__5134__auto____$1$jscomp$78_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$78_h__5134__auto____$1$jscomp$78_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$78_h__5134__auto____$1$jscomp$78_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$78_h__5134__auto____$1$jscomp$78_this__5319__auto__$$ = 1698259290 ^ $APP.cljs.core.hash_unordered_coll(this);
};
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this46243$$, $other46244$$) {
  return $other46244$$ != null && this.constructor === $other46244$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other46244$$.__extmap);
};
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_($APP.cljs.core.PersistentHashSet.EMPTY, $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), $k__5334__auto__$$) : new ajax.interceptors.ApplyRequestFormat(this.__meta, $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k46242$$) {
  return $APP.cljs.core.contains_QMARK_(this.__extmap, $k46242$$);
};
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($this__5331__auto__$$, $k__5332__auto__$$, $G__46241$$) {
  return new ajax.interceptors.ApplyRequestFormat(this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__46241$$), null);
};
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentVector.EMPTY, this.__extmap));
};
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__46241$$) {
  return new ajax.interceptors.ApplyRequestFormat($G__46241$$, this.__extmap, this.__hash);
};
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
ajax.interceptors.ApplyRequestFormat.getBasis = function() {
  return $APP.cljs.core.PersistentVector.EMPTY;
};
ajax.interceptors.ApplyRequestFormat.cljs$lang$type = !0;
ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "ajax.interceptors/ApplyRequestFormat", null, 1, null);
};
ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "ajax.interceptors/ApplyRequestFormat");
};
ajax.interceptors.__GT_ApplyRequestFormat = function() {
  return new ajax.interceptors.ApplyRequestFormat(null, null, null);
};
ajax.interceptors.map__GT_ApplyRequestFormat = function($G__46245_extmap__5365__auto__$$) {
  var $G__46257$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1($G__46245_extmap__5365__auto__$$);
  $G__46245_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__46245_extmap__5365__auto__$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__46257$$) : $G__46257$$;
  return new ajax.interceptors.ApplyRequestFormat(null, $APP.cljs.core.not_empty($G__46245_extmap__5365__auto__$$), null);
};
ajax.interceptors.uri_with_params = function($p__46258_vec_strategy$$, $uri$$) {
  var $map__46259__$1_url_params$$ = $APP.cljs.core.__destructure_map($p__46258_vec_strategy$$);
  $p__46258_vec_strategy$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46259__$1_url_params$$, cljs$cst$2613$vec_strategy);
  var $params$jscomp$95_temp__5823__auto__$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46259__$1_url_params$$, $APP.cljs$cst$410$params), $method$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46259__$1_url_params$$, $APP.cljs$cst$2631$method);
  $map__46259__$1_url_params$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46259__$1_url_params$$, cljs$cst$2633$url_params);
  $params$jscomp$95_temp__5823__auto__$$ = $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($method$$, "GET") && $map__46259__$1_url_params$$ == null ? $params$jscomp$95_temp__5823__auto__$$ : $map__46259__$1_url_params$$;
  return $APP.cljs.core.truth_($params$jscomp$95_temp__5823__auto__$$) ? [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($uri$$), $APP.cljs.core.truth_($APP.cljs.core.re_find(/\?/, $uri$$)) ? "\x26" : "?", ajax.url.params_to_str($p__46258_vec_strategy$$, $params$jscomp$95_temp__5823__auto__$$)].join("") : $uri$$;
};
ajax.interceptors.ProcessUrlParameters = function($__meta$$, $__extmap$$, $__hash$$) {
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k46261$$, $else__5326__auto__$$) {
  return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k46261$$, $else__5326__auto__$$);
};
ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__46266_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46266_v__5348__auto__$$, 0, null);
    $p__46266_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46266_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__46266_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__46266_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$ = $APP.cljs.core.PROTOCOL_SENTINEL;
ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = function($_$jscomp$596_method$$, $G__46272_map__46271__$1_p__46270$$) {
  $G__46272_map__46271__$1_p__46270$$ = $APP.cljs.core.__destructure_map($G__46272_map__46271__$1_p__46270$$);
  $_$jscomp$596_method$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($G__46272_map__46271__$1_p__46270$$, $APP.cljs$cst$2631$method);
  $G__46272_map__46271__$1_p__46270$$ = $APP.cljs.core.update.cljs$core$IFn$_invoke$arity$3($G__46272_map__46271__$1_p__46270$$, $APP.cljs$cst$2493$uri, $APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.interceptors.uri_with_params, $G__46272_map__46271__$1_p__46270$$));
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($_$jscomp$596_method$$, "GET") ? $APP.cljs.core.reduced($G__46272_map__46271__$1_p__46270$$) : $G__46272_map__46271__$1_p__46270$$;
};
ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = function($_$$, $response$$) {
  return $response$$;
};
ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#ajax.interceptors.ProcessUrlParameters{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentVector.EMPTY, this.__extmap));
};
ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__46260$$) {
  return new $APP.cljs.core.RecordIter(0, this, 0, $APP.cljs.core.PersistentVector.EMPTY, $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new ajax.interceptors.ProcessUrlParameters(this.__meta, this.__extmap, this.__hash);
};
ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 0 + $APP.cljs.core.count(this.__extmap);
};
ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$79_h__5134__auto____$1$jscomp$79_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$79_h__5134__auto____$1$jscomp$79_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$79_h__5134__auto____$1$jscomp$79_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$79_h__5134__auto____$1$jscomp$79_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$79_h__5134__auto____$1$jscomp$79_this__5319__auto__$$ = -516728758 ^ $APP.cljs.core.hash_unordered_coll(this);
};
ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this46262$$, $other46263$$) {
  return $other46263$$ != null && this.constructor === $other46263$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other46263$$.__extmap);
};
ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_($APP.cljs.core.PersistentHashSet.EMPTY, $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), $k__5334__auto__$$) : new ajax.interceptors.ProcessUrlParameters(this.__meta, $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k46261$$) {
  return $APP.cljs.core.contains_QMARK_(this.__extmap, $k46261$$);
};
ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($this__5331__auto__$$, $k__5332__auto__$$, $G__46260$$) {
  return new ajax.interceptors.ProcessUrlParameters(this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__46260$$), null);
};
ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentVector.EMPTY, this.__extmap));
};
ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__46260$$) {
  return new ajax.interceptors.ProcessUrlParameters($G__46260$$, this.__extmap, this.__hash);
};
ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
ajax.interceptors.ProcessUrlParameters.getBasis = function() {
  return $APP.cljs.core.PersistentVector.EMPTY;
};
ajax.interceptors.ProcessUrlParameters.cljs$lang$type = !0;
ajax.interceptors.ProcessUrlParameters.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "ajax.interceptors/ProcessUrlParameters", null, 1, null);
};
ajax.interceptors.ProcessUrlParameters.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "ajax.interceptors/ProcessUrlParameters");
};
ajax.interceptors.__GT_ProcessUrlParameters = function() {
  return new ajax.interceptors.ProcessUrlParameters(null, null, null);
};
ajax.interceptors.map__GT_ProcessUrlParameters = function($G__46264_extmap__5365__auto__$$) {
  var $G__46276$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1($G__46264_extmap__5365__auto__$$);
  $G__46264_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__46264_extmap__5365__auto__$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__46276$$) : $G__46276$$;
  return new ajax.interceptors.ProcessUrlParameters(null, $APP.cljs.core.not_empty($G__46264_extmap__5365__auto__$$), null);
};
ajax.interceptors.DirectSubmission = function($__meta$$, $__extmap$$, $__hash$$) {
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k46278$$, $else__5326__auto__$$) {
  return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k46278$$, $else__5326__auto__$$);
};
ajax.interceptors.DirectSubmission.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__46283_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46283_v__5348__auto__$$, 0, null);
    $p__46283_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46283_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__46283_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__46283_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = $APP.cljs.core.PROTOCOL_SENTINEL;
ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = function($_$$, $p__46287$$) {
  $_$$ = $APP.cljs.core.__destructure_map($p__46287$$);
  return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($_$$, $APP.cljs$cst$411$body) == null ? $_$$ : $APP.cljs.core.reduced($_$$);
};
ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = function($_$$, $response$$) {
  return $response$$;
};
ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#ajax.interceptors.DirectSubmission{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentVector.EMPTY, this.__extmap));
};
ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__46277$$) {
  return new $APP.cljs.core.RecordIter(0, this, 0, $APP.cljs.core.PersistentVector.EMPTY, $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new ajax.interceptors.DirectSubmission(this.__meta, this.__extmap, this.__hash);
};
ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 0 + $APP.cljs.core.count(this.__extmap);
};
ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$80_h__5134__auto____$1$jscomp$80_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$80_h__5134__auto____$1$jscomp$80_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$80_h__5134__auto____$1$jscomp$80_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$80_h__5134__auto____$1$jscomp$80_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$80_h__5134__auto____$1$jscomp$80_this__5319__auto__$$ = -1077152635 ^ $APP.cljs.core.hash_unordered_coll(this);
};
ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this46279$$, $other46280$$) {
  return $other46280$$ != null && this.constructor === $other46280$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other46280$$.__extmap);
};
ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_($APP.cljs.core.PersistentHashSet.EMPTY, $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), $k__5334__auto__$$) : new ajax.interceptors.DirectSubmission(this.__meta, $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k46278$$) {
  return $APP.cljs.core.contains_QMARK_(this.__extmap, $k46278$$);
};
ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($this__5331__auto__$$, $k__5332__auto__$$, $G__46277$$) {
  return new ajax.interceptors.DirectSubmission(this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__46277$$), null);
};
ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentVector.EMPTY, this.__extmap));
};
ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__46277$$) {
  return new ajax.interceptors.DirectSubmission($G__46277$$, this.__extmap, this.__hash);
};
ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
ajax.interceptors.DirectSubmission.getBasis = function() {
  return $APP.cljs.core.PersistentVector.EMPTY;
};
ajax.interceptors.DirectSubmission.cljs$lang$type = !0;
ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "ajax.interceptors/DirectSubmission", null, 1, null);
};
ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "ajax.interceptors/DirectSubmission");
};
ajax.interceptors.__GT_DirectSubmission = function() {
  return new ajax.interceptors.DirectSubmission(null, null, null);
};
ajax.interceptors.map__GT_DirectSubmission = function($G__46281_extmap__5365__auto__$$) {
  var $G__46292$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1($G__46281_extmap__5365__auto__$$);
  $G__46281_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__46281_extmap__5365__auto__$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__46292$$) : $G__46292$$;
  return new ajax.interceptors.DirectSubmission(null, $APP.cljs.core.not_empty($G__46281_extmap__5365__auto__$$), null);
};
ajax.interceptors.request_interceptors = new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new ajax.interceptors.ProcessUrlParameters(null, null, null), new ajax.interceptors.DirectSubmission(null, null, null), new ajax.interceptors.ApplyRequestFormat(null, null, null)], null);
ajax.interceptors.is_response_format_QMARK_ = function($response_format$$) {
  return $response_format$$ instanceof ajax.interceptors.ResponseFormat;
};
ajax.interceptors.get_response_format = function($interpret_vector$$, $map__46294__$1_p__46293$$) {
  $map__46294__$1_p__46293$$ = $APP.cljs.core.__destructure_map($map__46294__$1_p__46293$$);
  var $response_format$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46294__$1_p__46293$$, cljs$cst$2634$response_format);
  return ajax.interceptors.is_response_format_QMARK_($response_format$$) ? $response_format$$ : $APP.cljs.core.vector_QMARK_($response_format$$) ? $interpret_vector$$.cljs$core$IFn$_invoke$arity$1 ? $interpret_vector$$.cljs$core$IFn$_invoke$arity$1($map__46294__$1_p__46293$$) : $interpret_vector$$.call(null, $map__46294__$1_p__46293$$) : $APP.cljs.core.map_QMARK_($response_format$$) ? ajax.interceptors.map__GT_ResponseFormat($response_format$$) : $response_format$$ instanceof $APP.cljs.core.Keyword ? 
  ajax.util.throw_error(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ", $response_format$$], null)) : $APP.cljs.core.ifn_QMARK_($response_format$$) ? ajax.interceptors.map__GT_ResponseFormat(new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2624$read, $response_format$$, cljs$cst$2620$description, "custom", cljs$cst$2615$content_type, "*/*"], null)) : ajax.util.throw_error(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ", $response_format$$], null));
};
ajax.json = {};
ajax.json.write_json_native = function($data$$) {
  return JSON.stringify($APP.cljs.core.clj__GT_js($data$$));
};
ajax.json.read_json_native = function($raw$$, $keywords_QMARK_$$, $result_raw_text$$) {
  $result_raw_text$$ = JSON.parse($result_raw_text$$);
  return $APP.cljs.core.truth_($raw$$) ? $result_raw_text$$ : $APP.cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic($result_raw_text$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$127$keywordize_keys, $keywords_QMARK_$$], 0));
};
ajax.json.read_json_transit = function($edn_raw$$, $keywords_QMARK_$$, $text$$) {
  if ($APP.cljs.core.truth_($edn_raw$$)) {
    return JSON.parse($text$$);
  }
  $edn_raw$$ = $APP.cognitect.transit.read($APP.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1($APP.cljs$cst$2635$json), $text$$);
  return $APP.cljs.core.truth_($keywords_QMARK_$$) ? $APP.clojure.walk.keywordize_keys($edn_raw$$) : $edn_raw$$;
};
ajax.json.make_json_request_format = function($write_json$$) {
  return function() {
    return new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$2614$write, $write_json$$, cljs$cst$2615$content_type, "application/json"], null);
  };
};
ajax.json.strip_prefix = function($prefix$$, $text$$) {
  var $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.truth_;
  var $JSCompiler_inline_result$$ = $APP.cljs.core.truth_($prefix$$) ? $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(0, $text$$.indexOf($prefix$$)) : $prefix$$;
  return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_inline_result$$) ? $text$$.substring($prefix$$.length) : $text$$;
};
ajax.json.make_json_response_format = function($read_json$$) {
  return function() {
    var $ajax$json$make_json_response_format_$_json_response_format$$ = null, $ajax$json$make_json_response_format_$_json_response_format__0$$ = function() {
      return $ajax$json$make_json_response_format_$_json_response_format$$.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY);
    }, $ajax$json$make_json_response_format_$_json_response_format__1$$ = function($map__46306__$1_p__46305$$) {
      $map__46306__$1_p__46305$$ = $APP.cljs.core.__destructure_map($map__46306__$1_p__46305$$);
      var $prefix$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46306__$1_p__46305$$, $APP.cljs$cst$1543$prefix), $keywords_QMARK_$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46306__$1_p__46305$$, cljs$cst$2636$keywords_QMARK_), $raw$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46306__$1_p__46305$$, $APP.cljs$cst$1995$raw);
      return ajax.interceptors.map__GT_ResponseFormat(new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2624$read, function($G__46309_xhrio$$) {
        $G__46309_xhrio$$ = ajax.json.strip_prefix($prefix$$, ajax.protocols._body($G__46309_xhrio$$));
        return $read_json$$.cljs$core$IFn$_invoke$arity$3 ? $read_json$$.cljs$core$IFn$_invoke$arity$3($raw$$, $keywords_QMARK_$$, $G__46309_xhrio$$) : $read_json$$.call(null, $raw$$, $keywords_QMARK_$$, $G__46309_xhrio$$);
      }, cljs$cst$2620$description, ["JSON", $APP.cljs.core.truth_($prefix$$) ? [" prefix '", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($prefix$$), "'"].join("") : null, $APP.cljs.core.truth_($keywords_QMARK_$$) ? " keywordize" : null].join(""), cljs$cst$2615$content_type, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
    };
    $ajax$json$make_json_response_format_$_json_response_format$$ = function($p__46305$$) {
      switch(arguments.length) {
        case 0:
          return $ajax$json$make_json_response_format_$_json_response_format__0$$.call(this);
        case 1:
          return $ajax$json$make_json_response_format_$_json_response_format__1$$.call(this, $p__46305$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $ajax$json$make_json_response_format_$_json_response_format$$.cljs$core$IFn$_invoke$arity$0 = $ajax$json$make_json_response_format_$_json_response_format__0$$;
    $ajax$json$make_json_response_format_$_json_response_format$$.cljs$core$IFn$_invoke$arity$1 = $ajax$json$make_json_response_format_$_json_response_format__1$$;
    return $ajax$json$make_json_response_format_$_json_response_format$$;
  }();
};
ajax.json.json_response_format = ajax.json.make_json_response_format(ajax.json.read_json_native);
ajax.json.json_request_format = ajax.json.make_json_request_format(ajax.json.write_json_native);
ajax.json.safe_json_request_format = ajax.json.make_json_response_format(ajax.json.read_json_transit);
ajax.transit = {};
ajax.transit.transit_type = function($map__46298__$1_or__5025__auto__$$) {
  $map__46298__$1_or__5025__auto__$$ = $APP.cljs.core.__destructure_map($map__46298__$1_or__5025__auto__$$);
  $map__46298__$1_or__5025__auto__$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46298__$1_or__5025__auto__$$, $APP.cljs$cst$139$type);
  return $APP.cljs.core.truth_($map__46298__$1_or__5025__auto__$$) ? $map__46298__$1_or__5025__auto__$$ : $APP.cljs$cst$2635$json;
};
ajax.transit.transit_write_fn = function($type$$, $opts$$) {
  var $writer$$ = function() {
    var $or__5025__auto__$$ = cljs$cst$2637$writer.cljs$core$IFn$_invoke$arity$1($opts$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2($type$$, $opts$$);
  }();
  return function($params$$) {
    return $APP.cognitect.transit.write($writer$$, $params$$);
  };
};
ajax.transit.transit_request_format = function($var_args$$) {
  switch(arguments.length) {
    case 0:
      return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$0 = function() {
  return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY);
};
ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1 = function($opts$$) {
  var $type$$ = ajax.transit.transit_type($opts$$), $mime_type$$ = $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($type$$, $APP.cljs$cst$2635$json) || $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($type$$, cljs$cst$2638$json_verbose) ? "json" : "msgpack";
  return new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$2614$write, ajax.transit.transit_write_fn($type$$, $opts$$), cljs$cst$2615$content_type, ["application/transit+", $mime_type$$].join("")], null);
};
ajax.transit.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.transit.transit_read_fn = function($opts$$) {
  var $reader$$ = function() {
    var $or__5025__auto__$$ = $APP.cljs$cst$2639$reader.cljs$core$IFn$_invoke$arity$1($opts$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : $APP.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$2635$json, $opts$$);
  }();
  return function($response$$) {
    return $APP.cognitect.transit.read($reader$$, ajax.protocols._body($response$$));
  };
};
ajax.transit.transit_response_format = function($var_args$$) {
  switch(arguments.length) {
    case 0:
      return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$0 = function() {
  return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY);
};
ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$1 = function($opts$$) {
  return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$2(ajax.transit.transit_type($opts$$), $opts$$);
};
ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$2 = function($type$$, $opts$$) {
  return ajax.interceptors.map__GT_ResponseFormat(new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2624$read, ajax.transit.transit_read_fn($opts$$), cljs$cst$2620$description, "Transit", cljs$cst$2615$content_type, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
};
ajax.transit.transit_response_format.cljs$lang$maxFixedArity = 2;
ajax.formats = {};
ajax.formats.raw_response_format = function($var_args$$) {
  switch(arguments.length) {
    case 0:
      return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0 = function() {
  return ajax.interceptors.map__GT_ResponseFormat(new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2624$read, ajax.protocols._body, cljs$cst$2620$description, "raw text", cljs$cst$2615$content_type, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
};
ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$1 = function($_$$) {
  return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0();
};
ajax.formats.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.formats.text_request_format = function() {
  return new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$2614$write, ajax.util.to_utf8_writer($APP.cljs.core.identity), cljs$cst$2615$content_type, "text/plain; charset\x3dutf-8"], null);
};
ajax.formats.text_response_format = ajax.formats.raw_response_format;
ajax.formats.get_format = function($request$$, $G__46303_format_entry$$) {
  return $G__46303_format_entry$$ == null || $APP.cljs.core.map_QMARK_($G__46303_format_entry$$) ? $G__46303_format_entry$$ : $APP.cljs.core.vector_QMARK_($G__46303_format_entry$$) ? ($G__46303_format_entry$$ = $APP.cljs.core.second($G__46303_format_entry$$), ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2 ? ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2($request$$, $G__46303_format_entry$$) : ajax.formats.get_format.call(null, $request$$, $G__46303_format_entry$$)) : $G__46303_format_entry$$.cljs$core$IFn$_invoke$arity$1 ? 
  $G__46303_format_entry$$.cljs$core$IFn$_invoke$arity$1($request$$) : $G__46303_format_entry$$.call(null, $request$$);
};
ajax.formats.get_accept_entries = function($fe_request$$, $format_entry$$) {
  $fe_request$$ = $APP.cljs.core.vector_QMARK_($format_entry$$) ? $APP.cljs.core.first($format_entry$$) : cljs$cst$2615$content_type.cljs$core$IFn$_invoke$arity$1(ajax.formats.get_format($fe_request$$, $format_entry$$));
  return $fe_request$$ == null ? new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null) : typeof $fe_request$$ === "string" ? new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$fe_request$$], null) : $fe_request$$;
};
ajax.formats.content_type_matches = function($content_type$$, $accept$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($accept$$, "*/*") || $content_type$$.indexOf($accept$$) >= 0;
};
ajax.formats.detect_content_type = function($content_type$$, $accept$jscomp$1_request$$, $format_entry$$) {
  $accept$jscomp$1_request$$ = ajax.formats.get_accept_entries($accept$jscomp$1_request$$, $format_entry$$);
  return $APP.cljs.core.some(function($p1__46310_SHARP_$$) {
    return ajax.formats.content_type_matches($content_type$$, $p1__46310_SHARP_$$);
  }, $accept$jscomp$1_request$$);
};
ajax.formats.get_default_format = function($response$$, $p__46311_response_format$$) {
  var $map__46312__$1$$ = $APP.cljs.core.__destructure_map($p__46311_response_format$$);
  $p__46311_response_format$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46312__$1$$, cljs$cst$2634$response_format);
  var $content_type$$ = ajax.util.get_content_type($response$$);
  return ajax.formats.get_format($map__46312__$1$$, $APP.cljs.core.first($APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2(function($format_entry$$) {
    return ajax.formats.detect_content_type($content_type$$, $map__46312__$1$$, $format_entry$$);
  }, $p__46311_response_format$$)));
};
ajax.formats.detect_response_format_read = function($request$$) {
  return function($response$$) {
    var $fexpr__46319_format$$ = ajax.formats.get_default_format($response$$, $request$$);
    $fexpr__46319_format$$ = cljs$cst$2624$read.cljs$core$IFn$_invoke$arity$1($fexpr__46319_format$$);
    return $fexpr__46319_format$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__46319_format$$.cljs$core$IFn$_invoke$arity$1($response$$) : $fexpr__46319_format$$.call(null, $response$$);
  };
};
ajax.formats.accept_header = function($formats_p__46321_response_format$$) {
  var $map__46322__$1$$ = $APP.cljs.core.__destructure_map($formats_p__46321_response_format$$);
  $formats_p__46321_response_format$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46322__$1$$, cljs$cst$2634$response_format);
  $formats_p__46321_response_format$$ = $APP.cljs.core.vector_QMARK_($formats_p__46321_response_format$$) ? $formats_p__46321_response_format$$ : new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$formats_p__46321_response_format$$], null);
  return $APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(function($p1__46320_SHARP_$$) {
    return ajax.formats.get_accept_entries($map__46322__$1$$, $p1__46320_SHARP_$$);
  }, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$formats_p__46321_response_format$$], 0));
};
ajax.formats.detect_response_format = function($opts$$) {
  var $accept$$ = ajax.formats.accept_header($opts$$);
  return ajax.interceptors.map__GT_ResponseFormat(new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2624$read, ajax.formats.detect_response_format_read($opts$$), cljs$cst$2632$format, ["(from ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($accept$$), ")"].join(""), cljs$cst$2615$content_type, $accept$$], null));
};
ajax.ring = {};
ajax.ring.make_ring_read = function($body_read$$) {
  return function($response$$) {
    return new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$109$status, ajax.protocols._status($response$$), $APP.cljs$cst$2606$headers, ajax.protocols._get_all_headers($response$$), $APP.cljs$cst$411$body, $body_read$$.cljs$core$IFn$_invoke$arity$1 ? $body_read$$.cljs$core$IFn$_invoke$arity$1($response$$) : $body_read$$.call(null, $response$$)], null);
  };
};
ajax.ring.ring_response_format = function($var_args$$) {
  switch(arguments.length) {
    case 0:
      return ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$0 = function() {
  return ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$2632$format, ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0()], null));
};
ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$1 = function($map__46337__$1_map__46338_p__46336_read$$) {
  $map__46337__$1_map__46338_p__46336_read$$ = $APP.cljs.core.__destructure_map($map__46337__$1_map__46338_p__46336_read$$);
  $map__46337__$1_map__46338_p__46336_read$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46337__$1_map__46338_p__46336_read$$, cljs$cst$2632$format);
  var $content_type$$ = $APP.cljs.core.__destructure_map($map__46337__$1_map__46338_p__46336_read$$);
  $map__46337__$1_map__46338_p__46336_read$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($content_type$$, cljs$cst$2624$read);
  var $description$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($content_type$$, cljs$cst$2620$description);
  $content_type$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($content_type$$, cljs$cst$2615$content_type);
  return ajax.interceptors.map__GT_ResponseFormat(new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2624$read, ajax.ring.make_ring_read($map__46337__$1_map__46338_p__46336_read$$), cljs$cst$2620$description, ["ring/", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($description$$)].join(""), cljs$cst$2615$content_type, $content_type$$], null));
};
ajax.ring.ring_response_format.cljs$lang$maxFixedArity = 1;
ajax.simple = {};
ajax.simple.normalize_method = function($method$$) {
  return $method$$ instanceof $APP.cljs.core.Keyword ? $APP.clojure.string.upper_case($APP.cljs.core.name($method$$)) : $method$$;
};
ajax.simple.process_response = function($response$$, $interceptor$$) {
  return ajax.protocols._process_response($interceptor$$, $response$$);
};
ajax.simple.make_js_handler = function($handler$$, $interceptors$$) {
  return function($processed$jscomp$1_response$$) {
    $processed$jscomp$1_response$$ = $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(ajax.simple.process_response, $processed$jscomp$1_response$$, $interceptors$$);
    return $handler$$.cljs$core$IFn$_invoke$arity$1 ? $handler$$.cljs$core$IFn$_invoke$arity$1($processed$jscomp$1_response$$) : $handler$$.call(null, $processed$jscomp$1_response$$);
  };
};
ajax.simple.base_handler = function($interceptors$$, $handler$$) {
  $handler$$ = $APP.cljs.core.__destructure_map($handler$$);
  $handler$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($handler$$, $APP.cljs$cst$1736$handler);
  return $APP.cljs.core.truth_($handler$$) ? ajax.simple.make_js_handler($handler$$, $interceptors$$) : ajax.util.throw_error("No ajax handler provided.");
};
ajax.simple.default_interceptors = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentVector.EMPTY);
ajax.simple.normalize_request = function($request$$) {
  var $response_format$$ = ajax.interceptors.get_response_format(ajax.formats.detect_response_format, $request$$);
  return $APP.cljs.core.update.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.update.cljs$core$IFn$_invoke$arity$3($request$$, $APP.cljs$cst$2631$method, ajax.simple.normalize_method), $APP.cljs$cst$2640$interceptors, function($JSCompiler_inline_result$$) {
    var $JSCompiler_temp_const$$ = $APP.cljs.core.concat, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.cljs$core$IFn$_invoke$arity$variadic, $JSCompiler_temp_const$jscomp$1$$ = new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$response_format$$], null);
    $JSCompiler_inline_result$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$$) ? $JSCompiler_inline_result$$ : $APP.cljs.core.deref(ajax.simple.default_interceptors);
    return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_temp_const$jscomp$1$$, $JSCompiler_inline_result$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ajax.interceptors.request_interceptors], 0));
  });
};
ajax.simple.new_default_api = function() {
  return new $APP.goog.net.XhrIo();
};
ajax.simple.process_request = function($request$$, $interceptor$$) {
  return ajax.protocols._process_request($interceptor$$, $request$$);
};
ajax.simple.raw_ajax_request = function($map__46341__$1_p__46340_request__$1$$) {
  $map__46341__$1_p__46340_request__$1$$ = $APP.cljs.core.__destructure_map($map__46341__$1_p__46340_request__$1$$);
  var $handler$jscomp$27_interceptors$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46341__$1_p__46340_request__$1$$, $APP.cljs$cst$2640$interceptors);
  $map__46341__$1_p__46340_request__$1$$ = $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(ajax.simple.process_request, $map__46341__$1_p__46340_request__$1$$, $handler$jscomp$27_interceptors$$);
  $handler$jscomp$27_interceptors$$ = ajax.simple.base_handler($APP.cljs.core.reverse($handler$jscomp$27_interceptors$$), $map__46341__$1_p__46340_request__$1$$);
  var $api_or__5025__auto__$$ = cljs$cst$2641$api.cljs$core$IFn$_invoke$arity$1($map__46341__$1_p__46340_request__$1$$);
  $api_or__5025__auto__$$ = $APP.cljs.core.truth_($api_or__5025__auto__$$) ? $api_or__5025__auto__$$ : ajax.simple.new_default_api();
  return ajax.protocols._js_ajax_request($api_or__5025__auto__$$, $map__46341__$1_p__46340_request__$1$$, $handler$jscomp$27_interceptors$$);
};
ajax.simple.ajax_request = function($request$$) {
  return ajax.simple.raw_ajax_request(ajax.simple.normalize_request($request$$));
};
ajax.easy = {};
ajax.easy.default_formats = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json", ajax.transit.transit_response_format], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit", ajax.transit.transit_response_format], 
null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["application/json", ajax.json.json_response_format], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["text/plain", ajax.formats.text_response_format], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["text/html", ajax.formats.text_response_format], null), new $APP.cljs.core.PersistentVector(null, 
2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, ["*/*", ajax.formats.raw_response_format], null)], null));
ajax.easy.detect_response_format = function($var_args$$) {
  switch(arguments.length) {
    case 0:
      return ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$0 = function() {
  return ajax.formats.detect_response_format(new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$2634$response_format, $APP.cljs.core.deref(ajax.easy.default_formats)], null));
};
ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$1 = function($opts$$) {
  return ajax.formats.detect_response_format($opts$$);
};
ajax.easy.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.easy.keyword_request_format = function($format$$, $format_params$$) {
  if ($APP.cljs.core.map_QMARK_($format$$)) {
    return $format$$;
  }
  if ($APP.cljs.core.fn_QMARK_($format$$)) {
    return new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$2614$write, $format$$], null);
  }
  if ($format$$ == null) {
    return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1($format_params$$);
  }
  switch($format$$ instanceof $APP.cljs.core.Keyword ? $format$$.fqn : null) {
    case "transit":
      return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1($format_params$$);
    case "json":
      return ajax.json.json_request_format();
    case "text":
      return ajax.formats.text_request_format();
    case "raw":
      return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1($format_params$$);
    case "url":
      return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1($format_params$$);
    default:
      return null;
  }
};
ajax.easy.keyword_response_format_element = function($G__46350$jscomp$inline_5070_format$$, $JSCompiler_inline_result$jscomp$920_format_params$$) {
  if ($APP.cljs.core.vector_QMARK_($G__46350$jscomp$inline_5070_format$$)) {
    var $JSCompiler_temp_const$$ = $APP.cljs.core.PersistentVector, $JSCompiler_temp_const$jscomp$0$$ = $APP.cljs.core.PersistentVector.EMPTY_NODE, $JSCompiler_temp_const$jscomp$1$$ = $APP.cljs.core.first($G__46350$jscomp$inline_5070_format$$);
    $G__46350$jscomp$inline_5070_format$$ = $APP.cljs.core.second($G__46350$jscomp$inline_5070_format$$);
    $JSCompiler_inline_result$jscomp$920_format_params$$ = ajax.easy.keyword_response_format_element.cljs$core$IFn$_invoke$arity$2 ? ajax.easy.keyword_response_format_element.cljs$core$IFn$_invoke$arity$2($G__46350$jscomp$inline_5070_format$$, $JSCompiler_inline_result$jscomp$920_format_params$$) : ajax.easy.keyword_response_format_element.call(null, $G__46350$jscomp$inline_5070_format$$, $JSCompiler_inline_result$jscomp$920_format_params$$);
    return new $JSCompiler_temp_const$$(null, 2, 5, $JSCompiler_temp_const$jscomp$0$$, [$JSCompiler_temp_const$jscomp$1$$, $JSCompiler_inline_result$jscomp$920_format_params$$], null);
  }
  if ($APP.cljs.core.map_QMARK_($G__46350$jscomp$inline_5070_format$$)) {
    return $G__46350$jscomp$inline_5070_format$$;
  }
  if ($APP.cljs.core.fn_QMARK_($G__46350$jscomp$inline_5070_format$$)) {
    return new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$2624$read, $G__46350$jscomp$inline_5070_format$$, cljs$cst$2620$description, "custom"], null);
  }
  if ($G__46350$jscomp$inline_5070_format$$ == null) {
    return ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$0();
  }
  switch($G__46350$jscomp$inline_5070_format$$ instanceof $APP.cljs.core.Keyword ? $G__46350$jscomp$inline_5070_format$$.fqn : null) {
    case "transit":
      return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$1($JSCompiler_inline_result$jscomp$920_format_params$$);
    case "json":
      return ajax.json.json_response_format($JSCompiler_inline_result$jscomp$920_format_params$$);
    case "text":
      return ajax.formats.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.formats.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.formats.text_response_format.call(null);
    case "ring":
      return ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$0();
    case "raw":
      return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0();
    case "detect":
      return ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$0();
    default:
      return null;
  }
};
ajax.easy.keyword_response_format = function($format$$, $format_params$$) {
  return $APP.cljs.core.vector_QMARK_($format$$) ? $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.vector, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__46354_SHARP_$$) {
    return ajax.easy.keyword_response_format_element($p1__46354_SHARP_$$, $format_params$$);
  }, $format$$)) : ajax.easy.keyword_response_format_element($format$$, $format_params$$);
};
ajax.easy.print_response = function($response$$) {
  return $APP.cljs.core.println.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CLJS-AJAX response:", $response$$], 0));
};
ajax.easy.default_handler = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ajax.easy.print_response);
ajax.easy.print_error_response = function($response$$) {
  return typeof console !== "undefined" ? console.error($response$$) : typeof window !== "undefined" ? window.alert($APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($response$$)) : $APP.cljs.core.println.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CLJS-AJAX ERROR:", $response$$], 0));
};
ajax.easy.default_error_handler = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ajax.easy.print_error_response);
ajax.easy.transform_handler = function($map__46360__$1_p__46358$$) {
  $map__46360__$1_p__46358$$ = $APP.cljs.core.__destructure_map($map__46360__$1_p__46358$$);
  var $handler$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46360__$1_p__46358$$, $APP.cljs$cst$1736$handler), $error_handler$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46360__$1_p__46358$$, cljs$cst$2642$error_handler), $finally$$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46360__$1_p__46358$$, $APP.cljs$cst$2643$finally), $h$$ = $APP.cljs.core.truth_($handler$$) ? $handler$$ : $APP.cljs.core.deref(ajax.easy.default_handler), $e$$ = $APP.cljs.core.truth_($error_handler$$) ? 
  $error_handler$$ : $APP.cljs.core.deref(ajax.easy.default_error_handler);
  return function($p__46363_result$$) {
    var $fexpr__46367_46373_ok$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46363_result$$, 0, null);
    $p__46363_result$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46363_result$$, 1, null);
    $fexpr__46367_46373_ok$$ = $APP.cljs.core.truth_($fexpr__46367_46373_ok$$) ? $h$$ : $e$$;
    $fexpr__46367_46373_ok$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__46367_46373_ok$$.cljs$core$IFn$_invoke$arity$1($p__46363_result$$) : $fexpr__46367_46373_ok$$.call(null, $p__46363_result$$);
    return $APP.cljs.core.fn_QMARK_($finally$$$) ? $finally$$$.cljs$core$IFn$_invoke$arity$0 ? $finally$$$.cljs$core$IFn$_invoke$arity$0() : $finally$$$.call(null) : null;
  };
};
ajax.easy.transform_opts = function($map__46369__$1_p__46368$$) {
  $map__46369__$1_p__46368$$ = $APP.cljs.core.__destructure_map($map__46369__$1_p__46368$$);
  var $JSCompiler_temp_const$jscomp$922_method$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46369__$1_p__46368$$, $APP.cljs$cst$2631$method), $format$jscomp$33_rf$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46369__$1_p__46368$$, cljs$cst$2632$format), $response_format$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46369__$1_p__46368$$, cljs$cst$2634$response_format);
  $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46369__$1_p__46368$$, $APP.cljs$cst$410$params);
  var $JSCompiler_inline_result$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46369__$1_p__46368$$, $APP.cljs$cst$411$body) == null && $APP.cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$jscomp$922_method$$, "GET");
  $JSCompiler_temp_const$jscomp$922_method$$ = $APP.cljs.core;
  var $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$922_method$$.truth_;
  $JSCompiler_inline_result$$ = $APP.cljs.core.truth_($format$jscomp$33_rf$$) ? $format$jscomp$33_rf$$ : $JSCompiler_inline_result$$;
  $format$jscomp$33_rf$$ = $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$922_method$$, $JSCompiler_inline_result$$) ? ajax.easy.keyword_request_format($format$jscomp$33_rf$$, $map__46369__$1_p__46368$$) : null;
  return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic($map__46369__$1_p__46368$$, $APP.cljs$cst$1736$handler, ajax.easy.transform_handler($map__46369__$1_p__46368$$), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2632$format, $format$jscomp$33_rf$$, cljs$cst$2634$response_format, ajax.easy.keyword_response_format($response_format$$, $map__46369__$1_p__46368$$)], 0));
};
ajax.easy.easy_ajax_request = function($uri$$, $method$$, $opts$$) {
  return ajax.simple.ajax_request(ajax.easy.transform_opts($APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic($opts$$, $APP.cljs$cst$2493$uri, $uri$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$2631$method, $method$$], 0))));
};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
$APP.goog.net.XhrManager = function($opt_maxRetries$$, $opt_headers$$, $opt_minCount$$, $opt_maxCount$$, $opt_timeoutInterval$$, $opt_withCredentials$$) {
  $APP.goog.events.EventTarget.call(this);
  this.maxRetries_ = $opt_maxRetries$$ !== void 0 ? $opt_maxRetries$$ : 1;
  this.timeoutInterval_ = $opt_timeoutInterval$$ !== void 0 ? Math.max(0, $opt_timeoutInterval$$) : 0;
  this.withCredentials_ = !!$opt_withCredentials$$;
  this.xhrPool_ = new $APP.goog.net.XhrIoPool($opt_headers$$, $opt_minCount$$, $opt_maxCount$$, $opt_withCredentials$$);
  this.requests_ = new $APP.goog.structs.Map();
  this.eventHandler_ = new $APP.goog.events.EventHandler(this);
};
$APP.goog.inherits($APP.goog.net.XhrManager, $APP.goog.events.EventTarget);
$APP.goog.net.XhrManager.ERROR_ID_IN_USE_ = "[goog.net.XhrManager] ID in use";
$APP.goog.net.XhrManager.XHR_EVENT_TYPES_ = [$APP.goog.net.EventType.READY, $APP.goog.net.EventType.COMPLETE, $APP.goog.net.EventType.SUCCESS, $APP.goog.net.EventType.ERROR, $APP.goog.net.EventType.ABORT, $APP.goog.net.EventType.TIMEOUT];
$APP.goog.net.XhrManager.prototype.setTimeoutInterval = function($ms$$) {
  this.timeoutInterval_ = Math.max(0, $ms$$);
};
$APP.goog.net.XhrManager.prototype.getOutstandingCount = function() {
  return this.requests_.getCount();
};
$APP.goog.net.XhrManager.prototype.getOutstandingRequestIds = function() {
  return this.requests_.getKeys();
};
$APP.goog.net.XhrManager.prototype.send = function($callback$jscomp$77_id$$, $request$jscomp$25_url$$, $opt_method$$, $opt_content$$, $opt_headers$$, $opt_priority$$, $opt_callback$$, $opt_maxRetries$$, $opt_responseType$$, $opt_withCredentials$$) {
  if (this.requests_.get($callback$jscomp$77_id$$)) {
    throw Error($APP.goog.net.XhrManager.ERROR_ID_IN_USE_);
  }
  $request$jscomp$25_url$$ = new $APP.goog.net.XhrManager.Request($request$jscomp$25_url$$, $APP.goog.bind(this.handleEvent_, this, $callback$jscomp$77_id$$), $opt_method$$, $opt_content$$, $opt_headers$$, $opt_callback$$, $opt_maxRetries$$ !== void 0 ? $opt_maxRetries$$ : this.maxRetries_, $opt_responseType$$, $opt_withCredentials$$ !== void 0 ? $opt_withCredentials$$ : this.withCredentials_);
  this.requests_.set($callback$jscomp$77_id$$, $request$jscomp$25_url$$);
  $callback$jscomp$77_id$$ = $APP.goog.bind(this.handleAvailableXhr_, this, $callback$jscomp$77_id$$);
  this.xhrPool_.getObject($callback$jscomp$77_id$$, $opt_priority$$);
  return $request$jscomp$25_url$$;
};
$APP.goog.net.XhrManager.prototype.abort = function($id$$, $opt_force$$) {
  const $request$$ = this.requests_.get($id$$);
  if ($request$$) {
    const $xhrIo$$ = $request$$.xhrIo;
    $request$$.setAborted(!0);
    $opt_force$$ && ($xhrIo$$ && (this.removeXhrListener_($xhrIo$$, $request$$.getXhrEventCallback()), $APP.goog.events.listenOnce($xhrIo$$, $APP.goog.net.EventType.READY, function() {
      this.xhrPool_.releaseObject($xhrIo$$);
    }, !1, this)), this.requests_.remove($id$$));
    $xhrIo$$ && $xhrIo$$.abort();
  }
};
$APP.goog.net.XhrManager.prototype.setXhrPoolForTesting = function($testingPool$$) {
  if ($APP.goog.DISALLOW_TEST_ONLY_CODE) {
    throw Error("Importing test-only code into non-debug environment: setXhrPoolForTesting");
  }
  this.xhrPool_ = $testingPool$$;
};
$APP.goog.net.XhrManager.prototype.handleAvailableXhr_ = function($id$$, $xhrIo$$) {
  const $request$$ = this.requests_.get($id$$);
  $request$$ && !$request$$.xhrIo ? (this.addXhrListener_($xhrIo$$, $request$$.getXhrEventCallback()), $xhrIo$$.setTimeoutInterval(this.timeoutInterval_), $xhrIo$$.setResponseType($request$$.getResponseType()), $xhrIo$$.setWithCredentials($request$$.getWithCredentials()), $request$$.xhrIo = $xhrIo$$, this.dispatchEvent(new $APP.goog.net.XhrManager.Event($APP.goog.net.EventType.READY, this, $id$$, $xhrIo$$)), this.retry_($id$$, $xhrIo$$), $request$$.getAborted() && $xhrIo$$.abort()) : this.xhrPool_.releaseObject($xhrIo$$);
};
$APP.goog.net.XhrManager.prototype.handleEvent_ = function($id$$, $e$$) {
  const $xhrIo$$ = $e$$.target;
  switch($e$$.type) {
    case $APP.goog.net.EventType.READY:
      this.retry_($id$$, $xhrIo$$);
      break;
    case $APP.goog.net.EventType.COMPLETE:
      return this.handleComplete_($id$$, $xhrIo$$, $e$$);
    case $APP.goog.net.EventType.SUCCESS:
      this.handleSuccess_($id$$, $xhrIo$$);
      break;
    case $APP.goog.net.EventType.TIMEOUT:
    case $APP.goog.net.EventType.ERROR:
      this.handleError_($id$$, $xhrIo$$);
      break;
    case $APP.goog.net.EventType.ABORT:
      this.handleAbort_($id$$, $xhrIo$$);
  }
  return null;
};
$APP.goog.net.XhrManager.prototype.retry_ = function($id$$, $xhrIo$$) {
  const $request$$ = this.requests_.get($id$$);
  !$request$$ || $request$$.getCompleted() || $request$$.hasReachedMaxRetries() ? ($request$$ && (this.removeXhrListener_($xhrIo$$, $request$$.getXhrEventCallback()), this.requests_.remove($id$$)), this.xhrPool_.releaseObject($xhrIo$$)) : ($request$$.increaseAttemptCount(), $xhrIo$$.send($request$$.getUrl(), $request$$.getMethod(), $request$$.getContent(), $request$$.getHeaders()));
};
$APP.goog.net.XhrManager.prototype.handleComplete_ = function($id$$, $xhrIo$$, $e$$) {
  const $request$$ = this.requests_.get($id$$);
  if ($xhrIo$$.getLastErrorCode() == $APP.goog.net.ErrorCode.ABORT || $xhrIo$$.isSuccess() || $request$$.hasReachedMaxRetries()) {
    if (this.dispatchEvent(new $APP.goog.net.XhrManager.Event($APP.goog.net.EventType.COMPLETE, this, $id$$, $xhrIo$$)), $request$$ && ($request$$.setCompleted(!0), $request$$.getCompleteCallback())) {
      return $request$$.getCompleteCallback().call($xhrIo$$, $e$$);
    }
  }
  return null;
};
$APP.goog.net.XhrManager.prototype.handleAbort_ = function($id$$, $xhrIo$$) {
  this.dispatchEvent(new $APP.goog.net.XhrManager.Event($APP.goog.net.EventType.ABORT, this, $id$$, $xhrIo$$));
};
$APP.goog.net.XhrManager.prototype.handleSuccess_ = function($id$$, $xhrIo$$) {
  this.dispatchEvent(new $APP.goog.net.XhrManager.Event($APP.goog.net.EventType.SUCCESS, this, $id$$, $xhrIo$$));
};
$APP.goog.net.XhrManager.prototype.handleError_ = function($id$$, $xhrIo$$) {
  this.requests_.get($id$$).hasReachedMaxRetries() && this.dispatchEvent(new $APP.goog.net.XhrManager.Event($APP.goog.net.EventType.ERROR, this, $id$$, $xhrIo$$));
};
$APP.goog.net.XhrManager.prototype.removeXhrListener_ = function($xhrIo$$, $func$$, $opt_types$$) {
  this.eventHandler_.unlisten($xhrIo$$, $opt_types$$ || $APP.goog.net.XhrManager.XHR_EVENT_TYPES_, $func$$);
};
$APP.goog.net.XhrManager.prototype.addXhrListener_ = function($xhrIo$$, $func$$, $opt_types$$) {
  this.eventHandler_.listen($xhrIo$$, $opt_types$$ || $APP.goog.net.XhrManager.XHR_EVENT_TYPES_, $func$$);
};
$APP.goog.net.XhrManager.prototype.disposeInternal = function() {
  $APP.goog.net.XhrManager.superClass_.disposeInternal.call(this);
  this.xhrPool_.dispose();
  this.xhrPool_ = null;
  this.eventHandler_.dispose();
  this.eventHandler_ = null;
  this.requests_.clear();
  this.requests_ = null;
};
$APP.goog.net.XhrManager.Event = function($type$$, $target$$, $id$$, $xhrIo$$) {
  $APP.goog.events.Event.call(this, $type$$, $target$$);
  this.id = $id$$;
  this.xhrIo = $xhrIo$$;
};
$APP.goog.inherits($APP.goog.net.XhrManager.Event, $APP.goog.events.Event);
$APP.goog.net.XhrManager.Request = function($url$$, $xhrEventCallback$$, $opt_method$$, $opt_content$$, $opt_headers$$, $opt_callback$$, $opt_maxRetries$$, $opt_responseType$$, $opt_withCredentials$$) {
  this.url_ = $url$$;
  this.method_ = $opt_method$$ || "GET";
  this.content_ = $opt_content$$;
  this.headers_ = $opt_headers$$ || null;
  this.maxRetries_ = $opt_maxRetries$$ !== void 0 ? $opt_maxRetries$$ : 1;
  this.attemptCount_ = 0;
  this.aborted_ = this.completed_ = !1;
  this.xhrEventCallback_ = $xhrEventCallback$$;
  this.completeCallback_ = $opt_callback$$;
  this.responseType_ = $opt_responseType$$ || $APP.goog.net.XhrIo.ResponseType.DEFAULT;
  this.withCredentials_ = !!$opt_withCredentials$$;
  this.xhrIo = null;
};
$APP.goog.net.XhrManager.Request.prototype.getUrl = function() {
  return this.url_;
};
$APP.goog.net.XhrManager.Request.prototype.getMethod = function() {
  return this.method_;
};
$APP.goog.net.XhrManager.Request.prototype.getContent = function() {
  return this.content_;
};
$APP.goog.net.XhrManager.Request.prototype.getHeaders = function() {
  return this.headers_;
};
$APP.goog.net.XhrManager.Request.prototype.getWithCredentials = function() {
  return this.withCredentials_;
};
$APP.goog.net.XhrManager.Request.prototype.getMaxRetries = function() {
  return this.maxRetries_;
};
$APP.goog.net.XhrManager.Request.prototype.getAttemptCount = function() {
  return this.attemptCount_;
};
$APP.goog.net.XhrManager.Request.prototype.increaseAttemptCount = function() {
  this.attemptCount_++;
};
$APP.goog.net.XhrManager.Request.prototype.hasReachedMaxRetries = function() {
  return this.attemptCount_ > this.maxRetries_;
};
$APP.goog.net.XhrManager.Request.prototype.setCompleted = function($complete$$) {
  this.completed_ = $complete$$;
};
$APP.goog.net.XhrManager.Request.prototype.getCompleted = function() {
  return this.completed_;
};
$APP.goog.net.XhrManager.Request.prototype.setAborted = function($aborted$$) {
  this.aborted_ = $aborted$$;
};
$APP.goog.net.XhrManager.Request.prototype.getAborted = function() {
  return this.aborted_;
};
$APP.goog.net.XhrManager.Request.prototype.getXhrEventCallback = function() {
  return this.xhrEventCallback_;
};
$APP.goog.net.XhrManager.Request.prototype.getCompleteCallback = function() {
  return this.completeCallback_;
};
$APP.goog.net.XhrManager.Request.prototype.getResponseType = function() {
  return this.responseType_;
};
ajax.xhrio = {};
$APP.goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$ = $APP.cljs.core.PROTOCOL_SENTINEL;
$APP.goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = function($this$$jscomp$758_uri$$, $method$$, $handler$$) {
  var $map__46346__$1_progress_handler$$ = $APP.cljs.core.__destructure_map($method$$);
  $this$$jscomp$758_uri$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46346__$1_progress_handler$$, $APP.cljs$cst$2493$uri);
  $method$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46346__$1_progress_handler$$, $APP.cljs$cst$2631$method);
  var $body$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46346__$1_progress_handler$$, $APP.cljs$cst$411$body), $headers$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46346__$1_progress_handler$$, $APP.cljs$cst$2606$headers), $timeout$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($map__46346__$1_progress_handler$$, $APP.cljs$cst$2627$timeout, 0), $with_credentials$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($map__46346__$1_progress_handler$$, cljs$cst$2644$with_credentials, 
  !1), $response_format$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46346__$1_progress_handler$$, cljs$cst$2634$response_format);
  $map__46346__$1_progress_handler$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46346__$1_progress_handler$$, cljs$cst$2645$progress_handler);
  $response_format$$ = $APP.cljs$cst$139$type.cljs$core$IFn$_invoke$arity$1($response_format$$);
  $APP.cljs.core.truth_($response_format$$) && this.setResponseType($APP.cljs.core.name($response_format$$));
  $APP.cljs.core.fn_QMARK_($map__46346__$1_progress_handler$$) && (this.setProgressEventsEnabled(!0), $APP.goog.events.listen(this, $APP.goog.net.EventType.UPLOAD_PROGRESS, $map__46346__$1_progress_handler$$));
  $APP.goog.events.listen(this, $APP.goog.net.EventType.COMPLETE, function($G__46352_p1__46344_SHARP_$$) {
    $G__46352_p1__46344_SHARP_$$ = $G__46352_p1__46344_SHARP_$$.target;
    return $handler$$.cljs$core$IFn$_invoke$arity$1 ? $handler$$.cljs$core$IFn$_invoke$arity$1($G__46352_p1__46344_SHARP_$$) : $handler$$.call(null, $G__46352_p1__46344_SHARP_$$);
  });
  this.setTimeoutInterval($timeout$$);
  this.setWithCredentials($with_credentials$$);
  this.send($this$$jscomp$758_uri$$, $method$$, $body$$, $APP.cljs.core.clj__GT_js($headers$$));
  return this;
};
$APP.goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$ = $APP.cljs.core.PROTOCOL_SENTINEL;
$APP.goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = function($this$$$) {
  return this.abort($APP.goog.net.ErrorCode.ABORT);
};
$APP.goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$ = $APP.cljs.core.PROTOCOL_SENTINEL;
$APP.goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = function($this$$$) {
  return this.getResponse();
};
$APP.goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = function($this$$$) {
  return this.getStatus();
};
$APP.goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = function($this$$$) {
  return this.getStatusText();
};
$APP.goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = function($this$$$) {
  return $APP.cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(this.getResponseHeaders());
};
$APP.goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = function($this$$$, $header$$) {
  return this.getResponseHeader($header$$);
};
$APP.goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = function($this$$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.getLastErrorCode(), $APP.goog.net.ErrorCode.ABORT);
};
$APP.goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$ = $APP.cljs.core.PROTOCOL_SENTINEL;
$APP.goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = function($this$$jscomp$766_uri$$, $method$$, $handler$$) {
  var $map__46356__$1_max_retries$$ = $APP.cljs.core.__destructure_map($method$$);
  $this$$jscomp$766_uri$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46356__$1_max_retries$$, $APP.cljs$cst$2493$uri);
  $method$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46356__$1_max_retries$$, $APP.cljs$cst$2631$method);
  var $body$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46356__$1_max_retries$$, $APP.cljs$cst$411$body), $headers$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46356__$1_max_retries$$, $APP.cljs$cst$2606$headers), $id$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46356__$1_max_retries$$, $APP.cljs$cst$396$id), $timeout$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($map__46356__$1_max_retries$$, $APP.cljs$cst$2627$timeout, 0), $priority$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46356__$1_max_retries$$, 
  cljs$cst$2646$priority);
  $map__46356__$1_max_retries$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46356__$1_max_retries$$, cljs$cst$2647$max_retries);
  this.setTimeoutInterval($timeout$$);
  this.send($id$$, $this$$jscomp$766_uri$$, $method$$, $body$$, $APP.cljs.core.clj__GT_js($headers$$), $priority$$, $handler$$, $map__46356__$1_max_retries$$);
  return this;
};
ajax.xml_http_request = {};
ajax.xml_http_request.ready_state = function($G__46375_e$$) {
  $G__46375_e$$ = $G__46375_e$$.target.readyState;
  var $fexpr__46374$$ = new $APP.cljs.core.PersistentArrayMap(null, 5, [0, cljs$cst$2648$not_initialized, 1, cljs$cst$2649$connection_established, 2, cljs$cst$2650$request_received, 3, cljs$cst$2651$processing_request, 4, cljs$cst$2652$response_ready], null);
  return $fexpr__46374$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__46374$$.cljs$core$IFn$_invoke$arity$1($G__46375_e$$) : $fexpr__46374$$.call(null, $G__46375_e$$);
};
ajax.xml_http_request.append = function($current$$, $next$$) {
  return $APP.cljs.core.truth_($current$$) ? [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($current$$), ", ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($next$$)].join("") : $next$$;
};
ajax.xml_http_request.process_headers = function($header_str$$) {
  return $APP.cljs.core.truth_($header_str$$) ? $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($headers$$, $header_line_key_value$$) {
    if ($APP.cljs.core.truth_($APP.goog.string.isEmptyOrWhitespace($header_line_key_value$$))) {
      return $headers$$;
    }
    $header_line_key_value$$ = $APP.goog.string.splitLimit($header_line_key_value$$, ": ", 2);
    return $APP.cljs.core.update.cljs$core$IFn$_invoke$arity$4($headers$$, $header_line_key_value$$[0], ajax.xml_http_request.append, $header_line_key_value$$[1]);
  }, $APP.cljs.core.PersistentArrayMap.EMPTY, $header_str$$.split("\r\n")) : $APP.cljs.core.PersistentArrayMap.EMPTY;
};
ajax.xml_http_request.xmlhttprequest = typeof $APP.goog !== "undefined" && typeof $APP.goog.global !== "undefined" && typeof $APP.goog.global.XMLHttpRequest !== "undefined" ? $APP.goog.global.XMLHttpRequest : typeof require !== "undefined" ? function() {
  var $req$$ = require;
  return ($req$$.cljs$core$IFn$_invoke$arity$1 ? $req$$.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : $req$$.call(null, "xmlhttprequest")).XMLHttpRequest;
}() : null;
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = $APP.cljs.core.PROTOCOL_SENTINEL;
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = function($body$jscomp$51_this$$$, $G__46411_headers$$, $handler$$) {
  var $map__46378__$1_response_format$$ = $APP.cljs.core.__destructure_map($G__46411_headers$$), $G__46412_chunk__46380_46398_k_46416_temp__5825__auto___46395_uri$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46378__$1_response_format$$, $APP.cljs$cst$2493$uri), $G__46413_c__5548__auto___46410_count__46381_46399_method$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46378__$1_response_format$$, $APP.cljs$cst$2631$method);
  $body$jscomp$51_this$$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46378__$1_response_format$$, $APP.cljs$cst$411$body);
  $G__46411_headers$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46378__$1_response_format$$, $APP.cljs$cst$2606$headers);
  var $i__46382_46400_timeout$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($map__46378__$1_response_format$$, $APP.cljs$cst$2627$timeout, 0), $k_46402_with_credentials$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($map__46378__$1_response_format$$, cljs$cst$2644$with_credentials, !1);
  $map__46378__$1_response_format$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__46378__$1_response_format$$, cljs$cst$2634$response_format);
  var $this$__$1$$ = this;
  $this$__$1$$.withCredentials = $k_46402_with_credentials$$;
  $this$__$1$$.onreadystatechange = function($p1__46376_SHARP_$$) {
    return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs$cst$2652$response_ready, ajax.xml_http_request.ready_state($p1__46376_SHARP_$$)) ? $handler$$.cljs$core$IFn$_invoke$arity$1 ? $handler$$.cljs$core$IFn$_invoke$arity$1($this$__$1$$) : $handler$$.call(null, $this$__$1$$) : null;
  };
  $this$__$1$$.open($G__46413_c__5548__auto___46410_count__46381_46399_method$$, $G__46412_chunk__46380_46398_k_46416_temp__5825__auto___46395_uri$$, !0);
  $this$__$1$$.timeout = $i__46382_46400_timeout$$;
  $G__46412_chunk__46380_46398_k_46416_temp__5825__auto___46395_uri$$ = $APP.cljs$cst$139$type.cljs$core$IFn$_invoke$arity$1($map__46378__$1_response_format$$);
  $APP.cljs.core.truth_($G__46412_chunk__46380_46398_k_46416_temp__5825__auto___46395_uri$$) && ($this$__$1$$.responseType = $APP.cljs.core.name($G__46412_chunk__46380_46398_k_46416_temp__5825__auto___46395_uri$$));
  $G__46411_headers$$ = $APP.cljs.core.seq($G__46411_headers$$);
  $G__46412_chunk__46380_46398_k_46416_temp__5825__auto___46395_uri$$ = null;
  for ($i__46382_46400_timeout$$ = $G__46413_c__5548__auto___46410_count__46381_46399_method$$ = 0;;) {
    if ($i__46382_46400_timeout$$ < $G__46413_c__5548__auto___46410_count__46381_46399_method$$) {
      $map__46378__$1_response_format$$ = $G__46412_chunk__46380_46398_k_46416_temp__5825__auto___46395_uri$$.cljs$core$IIndexed$_nth$arity$2(null, $i__46382_46400_timeout$$), $k_46402_with_credentials$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($map__46378__$1_response_format$$, 0, null), $map__46378__$1_response_format$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($map__46378__$1_response_format$$, 1, null), $this$__$1$$.setRequestHeader($k_46402_with_credentials$$, $map__46378__$1_response_format$$), 
      $i__46382_46400_timeout$$ += 1;
    } else {
      if ($G__46411_headers$$ = $APP.cljs.core.seq($G__46411_headers$$)) {
        $APP.cljs.core.chunked_seq_QMARK_($G__46411_headers$$) ? ($G__46413_c__5548__auto___46410_count__46381_46399_method$$ = $APP.cljs.core.chunk_first($G__46411_headers$$), $G__46411_headers$$ = $APP.cljs.core.chunk_rest($G__46411_headers$$), $G__46412_chunk__46380_46398_k_46416_temp__5825__auto___46395_uri$$ = $G__46413_c__5548__auto___46410_count__46381_46399_method$$, $G__46413_c__5548__auto___46410_count__46381_46399_method$$ = $APP.cljs.core.count($G__46413_c__5548__auto___46410_count__46381_46399_method$$)) : 
        ($G__46413_c__5548__auto___46410_count__46381_46399_method$$ = $APP.cljs.core.first($G__46411_headers$$), $G__46412_chunk__46380_46398_k_46416_temp__5825__auto___46395_uri$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__46413_c__5548__auto___46410_count__46381_46399_method$$, 0, null), $G__46413_c__5548__auto___46410_count__46381_46399_method$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__46413_c__5548__auto___46410_count__46381_46399_method$$, 1, null), $this$__$1$$.setRequestHeader($G__46412_chunk__46380_46398_k_46416_temp__5825__auto___46395_uri$$, 
        $G__46413_c__5548__auto___46410_count__46381_46399_method$$), $G__46411_headers$$ = $APP.cljs.core.next($G__46411_headers$$), $G__46412_chunk__46380_46398_k_46416_temp__5825__auto___46395_uri$$ = null, $G__46413_c__5548__auto___46410_count__46381_46399_method$$ = 0), $i__46382_46400_timeout$$ = 0;
      } else {
        break;
      }
    }
  }
  $this$__$1$$.send($APP.cljs.core.truth_($body$jscomp$51_this$$$) ? $body$jscomp$51_this$$$ : "");
  return $this$__$1$$;
};
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = $APP.cljs.core.PROTOCOL_SENTINEL;
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = function($this$$$) {
  return this.abort();
};
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = $APP.cljs.core.PROTOCOL_SENTINEL;
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = function($this$$$) {
  return this.response;
};
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = function($this$$$) {
  return this.status;
};
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = function($this$$$) {
  return this.statusText;
};
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = function($this$$$) {
  return ajax.xml_http_request.process_headers(this.getAllResponseHeaders());
};
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = function($this$$$, $header$$) {
  return this.getResponseHeader($header$$);
};
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = function($this$$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(0, this.readyState);
};
ajax.core = {};
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = function($this$$$) {
  return ajax.protocols._abort($this$$$);
};
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.success_QMARK_ = ajax.util.success_QMARK_;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
ajax.core.GET = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$210_argseq__5756__auto__$$ = [], $len__5749__auto___46473$$ = arguments.length, $i__5750__auto___46474$$ = 0;;) {
    if ($i__5750__auto___46474$$ < $len__5749__auto___46473$$) {
      $args__5755__auto__$jscomp$210_argseq__5756__auto__$$.push(arguments[$i__5750__auto___46474$$]), $i__5750__auto___46474$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$210_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$210_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$210_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$210_argseq__5756__auto__$$);
};
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = function($uri$$, $opts$$) {
  var $f__46183__auto__$$ = $APP.cljs.core.first($opts$$);
  return ajax.easy.easy_ajax_request($uri$$, "GET", $f__46183__auto__$$ instanceof $APP.cljs.core.Keyword ? $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.hash_map, $opts$$) : $f__46183__auto__$$);
};
ajax.core.GET.cljs$lang$maxFixedArity = 1;
ajax.core.GET.cljs$lang$applyTo = function($seq46422_seq46422__$1$$) {
  var $G__46423$$ = $APP.cljs.core.first($seq46422_seq46422__$1$$);
  $seq46422_seq46422__$1$$ = $APP.cljs.core.next($seq46422_seq46422__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__46423$$, $seq46422_seq46422__$1$$);
};
ajax.core.HEAD = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$211_argseq__5756__auto__$$ = [], $len__5749__auto___46476$$ = arguments.length, $i__5750__auto___46477$$ = 0;;) {
    if ($i__5750__auto___46477$$ < $len__5749__auto___46476$$) {
      $args__5755__auto__$jscomp$211_argseq__5756__auto__$$.push(arguments[$i__5750__auto___46477$$]), $i__5750__auto___46477$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$211_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$211_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$211_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$211_argseq__5756__auto__$$);
};
ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = function($uri$$, $opts$$) {
  var $f__46183__auto__$$ = $APP.cljs.core.first($opts$$);
  return ajax.easy.easy_ajax_request($uri$$, "HEAD", $f__46183__auto__$$ instanceof $APP.cljs.core.Keyword ? $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.hash_map, $opts$$) : $f__46183__auto__$$);
};
ajax.core.HEAD.cljs$lang$maxFixedArity = 1;
ajax.core.HEAD.cljs$lang$applyTo = function($seq46429_seq46429__$1$$) {
  var $G__46430$$ = $APP.cljs.core.first($seq46429_seq46429__$1$$);
  $seq46429_seq46429__$1$$ = $APP.cljs.core.next($seq46429_seq46429__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__46430$$, $seq46429_seq46429__$1$$);
};
ajax.core.POST = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$212_argseq__5756__auto__$$ = [], $len__5749__auto___46479$$ = arguments.length, $i__5750__auto___46480$$ = 0;;) {
    if ($i__5750__auto___46480$$ < $len__5749__auto___46479$$) {
      $args__5755__auto__$jscomp$212_argseq__5756__auto__$$.push(arguments[$i__5750__auto___46480$$]), $i__5750__auto___46480$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$212_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$212_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$212_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$212_argseq__5756__auto__$$);
};
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = function($uri$$, $opts$$) {
  var $f__46183__auto__$$ = $APP.cljs.core.first($opts$$);
  return ajax.easy.easy_ajax_request($uri$$, "POST", $f__46183__auto__$$ instanceof $APP.cljs.core.Keyword ? $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.hash_map, $opts$$) : $f__46183__auto__$$);
};
ajax.core.POST.cljs$lang$maxFixedArity = 1;
ajax.core.POST.cljs$lang$applyTo = function($seq46438_seq46438__$1$$) {
  var $G__46439$$ = $APP.cljs.core.first($seq46438_seq46438__$1$$);
  $seq46438_seq46438__$1$$ = $APP.cljs.core.next($seq46438_seq46438__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__46439$$, $seq46438_seq46438__$1$$);
};
ajax.core.PUT = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$213_argseq__5756__auto__$$ = [], $len__5749__auto___46482$$ = arguments.length, $i__5750__auto___46483$$ = 0;;) {
    if ($i__5750__auto___46483$$ < $len__5749__auto___46482$$) {
      $args__5755__auto__$jscomp$213_argseq__5756__auto__$$.push(arguments[$i__5750__auto___46483$$]), $i__5750__auto___46483$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$213_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$213_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$213_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$213_argseq__5756__auto__$$);
};
ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = function($uri$$, $opts$$) {
  var $f__46183__auto__$$ = $APP.cljs.core.first($opts$$);
  return ajax.easy.easy_ajax_request($uri$$, "PUT", $f__46183__auto__$$ instanceof $APP.cljs.core.Keyword ? $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.hash_map, $opts$$) : $f__46183__auto__$$);
};
ajax.core.PUT.cljs$lang$maxFixedArity = 1;
ajax.core.PUT.cljs$lang$applyTo = function($seq46445_seq46445__$1$$) {
  var $G__46446$$ = $APP.cljs.core.first($seq46445_seq46445__$1$$);
  $seq46445_seq46445__$1$$ = $APP.cljs.core.next($seq46445_seq46445__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__46446$$, $seq46445_seq46445__$1$$);
};
ajax.core.DELETE = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$214_argseq__5756__auto__$$ = [], $len__5749__auto___46485$$ = arguments.length, $i__5750__auto___46486$$ = 0;;) {
    if ($i__5750__auto___46486$$ < $len__5749__auto___46485$$) {
      $args__5755__auto__$jscomp$214_argseq__5756__auto__$$.push(arguments[$i__5750__auto___46486$$]), $i__5750__auto___46486$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$214_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$214_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$214_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$214_argseq__5756__auto__$$);
};
ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = function($uri$$, $opts$$) {
  var $f__46183__auto__$$ = $APP.cljs.core.first($opts$$);
  return ajax.easy.easy_ajax_request($uri$$, "DELETE", $f__46183__auto__$$ instanceof $APP.cljs.core.Keyword ? $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.hash_map, $opts$$) : $f__46183__auto__$$);
};
ajax.core.DELETE.cljs$lang$maxFixedArity = 1;
ajax.core.DELETE.cljs$lang$applyTo = function($seq46451_seq46451__$1$$) {
  var $G__46452$$ = $APP.cljs.core.first($seq46451_seq46451__$1$$);
  $seq46451_seq46451__$1$$ = $APP.cljs.core.next($seq46451_seq46451__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__46452$$, $seq46451_seq46451__$1$$);
};
ajax.core.OPTIONS = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$215_argseq__5756__auto__$$ = [], $len__5749__auto___46488$$ = arguments.length, $i__5750__auto___46489$$ = 0;;) {
    if ($i__5750__auto___46489$$ < $len__5749__auto___46488$$) {
      $args__5755__auto__$jscomp$215_argseq__5756__auto__$$.push(arguments[$i__5750__auto___46489$$]), $i__5750__auto___46489$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$215_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$215_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$215_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$215_argseq__5756__auto__$$);
};
ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = function($uri$$, $opts$$) {
  var $f__46183__auto__$$ = $APP.cljs.core.first($opts$$);
  return ajax.easy.easy_ajax_request($uri$$, "OPTIONS", $f__46183__auto__$$ instanceof $APP.cljs.core.Keyword ? $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.hash_map, $opts$$) : $f__46183__auto__$$);
};
ajax.core.OPTIONS.cljs$lang$maxFixedArity = 1;
ajax.core.OPTIONS.cljs$lang$applyTo = function($seq46453_seq46453__$1$$) {
  var $G__46454$$ = $APP.cljs.core.first($seq46453_seq46453__$1$$);
  $seq46453_seq46453__$1$$ = $APP.cljs.core.next($seq46453_seq46453__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__46454$$, $seq46453_seq46453__$1$$);
};
ajax.core.TRACE = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$216_argseq__5756__auto__$$ = [], $len__5749__auto___46491$$ = arguments.length, $i__5750__auto___46492$$ = 0;;) {
    if ($i__5750__auto___46492$$ < $len__5749__auto___46491$$) {
      $args__5755__auto__$jscomp$216_argseq__5756__auto__$$.push(arguments[$i__5750__auto___46492$$]), $i__5750__auto___46492$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$216_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$216_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$216_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$216_argseq__5756__auto__$$);
};
ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = function($uri$$, $opts$$) {
  var $f__46183__auto__$$ = $APP.cljs.core.first($opts$$);
  return ajax.easy.easy_ajax_request($uri$$, "TRACE", $f__46183__auto__$$ instanceof $APP.cljs.core.Keyword ? $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.hash_map, $opts$$) : $f__46183__auto__$$);
};
ajax.core.TRACE.cljs$lang$maxFixedArity = 1;
ajax.core.TRACE.cljs$lang$applyTo = function($seq46455_seq46455__$1$$) {
  var $G__46456$$ = $APP.cljs.core.first($seq46455_seq46455__$1$$);
  $seq46455_seq46455__$1$$ = $APP.cljs.core.next($seq46455_seq46455__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__46456$$, $seq46455_seq46455__$1$$);
};
ajax.core.PATCH = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$217_argseq__5756__auto__$$ = [], $len__5749__auto___46494$$ = arguments.length, $i__5750__auto___46495$$ = 0;;) {
    if ($i__5750__auto___46495$$ < $len__5749__auto___46494$$) {
      $args__5755__auto__$jscomp$217_argseq__5756__auto__$$.push(arguments[$i__5750__auto___46495$$]), $i__5750__auto___46495$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$217_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$217_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$217_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$217_argseq__5756__auto__$$);
};
ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = function($uri$$, $opts$$) {
  var $f__46183__auto__$$ = $APP.cljs.core.first($opts$$);
  return ajax.easy.easy_ajax_request($uri$$, "PATCH", $f__46183__auto__$$ instanceof $APP.cljs.core.Keyword ? $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.hash_map, $opts$$) : $f__46183__auto__$$);
};
ajax.core.PATCH.cljs$lang$maxFixedArity = 1;
ajax.core.PATCH.cljs$lang$applyTo = function($seq46458_seq46458__$1$$) {
  var $G__46459$$ = $APP.cljs.core.first($seq46458_seq46458__$1$$);
  $seq46458_seq46458__$1$$ = $APP.cljs.core.next($seq46458_seq46458__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__46459$$, $seq46458_seq46458__$1$$);
};
ajax.core.PURGE = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$218_argseq__5756__auto__$$ = [], $len__5749__auto___46497$$ = arguments.length, $i__5750__auto___46498$$ = 0;;) {
    if ($i__5750__auto___46498$$ < $len__5749__auto___46497$$) {
      $args__5755__auto__$jscomp$218_argseq__5756__auto__$$.push(arguments[$i__5750__auto___46498$$]), $i__5750__auto___46498$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$218_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$218_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$218_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$218_argseq__5756__auto__$$);
};
ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = function($uri$$, $opts$$) {
  var $f__46183__auto__$$ = $APP.cljs.core.first($opts$$);
  return ajax.easy.easy_ajax_request($uri$$, "PURGE", $f__46183__auto__$$ instanceof $APP.cljs.core.Keyword ? $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.hash_map, $opts$$) : $f__46183__auto__$$);
};
ajax.core.PURGE.cljs$lang$maxFixedArity = 1;
ajax.core.PURGE.cljs$lang$applyTo = function($seq46465_seq46465__$1$$) {
  var $G__46466$$ = $APP.cljs.core.first($seq46465_seq46465__$1$$);
  $seq46465_seq46465__$1$$ = $APP.cljs.core.next($seq46465_seq46465__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__46466$$, $seq46465_seq46465__$1$$);
};
$APP.scittle.cljs_ajax = {};
$APP.scittle.cljs_ajax.ans = $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$2653$ajax_DOT_core, null);
$APP.scittle.cljs_ajax.ajax_namespace = $APP.sci.core._copy_ns($APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs.core.with_meta(cljs$cst$2654$POST, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null))), $APP.cljs$cst$256$doc, "accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :progress-handler - the handler function for progress events.\n                            this handler is only available when using the goog.net.XhrIo API\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request", 
$APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2492$uri, $APP.cljs$cst$309$opts)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), cljs$cst$2655$transit_response_format, $APP.cljs.core.with_meta(cljs$cst$2656$OPTIONS, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2492$uri, 
$APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null))), $APP.cljs$cst$256$doc, "accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :progress-handler - the handler function for progress events.\n                            this handler is only available when using the goog.net.XhrIo API\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request", 
$APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2492$uri, $APP.cljs$cst$309$opts)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), cljs$cst$2657$text_request_format, cljs$cst$2658$default_formats, cljs$cst$2659$url_request_format, $APP.cljs.core.with_meta(cljs$cst$2660$DELETE, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, 
$APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null))), $APP.cljs$cst$256$doc, "accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :progress-handler - the handler function for progress events.\n                            this handler is only available when using the goog.net.XhrIo API\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request", 
$APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2492$uri, $APP.cljs$cst$309$opts)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2661$PUT, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], 
null))), $APP.cljs$cst$256$doc, "accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :progress-handler - the handler function for progress events.\n                            this handler is only available when using the goog.net.XhrIo API\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request", 
$APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2492$uri, $APP.cljs$cst$309$opts)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), cljs$cst$2662$ajax_request, $APP.cljs.core.with_meta(cljs$cst$2663$HEAD, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, 
$APP.cljs$cst$309$opts], null))), $APP.cljs$cst$256$doc, "accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :progress-handler - the handler function for progress events.\n                            this handler is only available when using the goog.net.XhrIo API\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request", 
$APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2492$uri, $APP.cljs$cst$309$opts)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), cljs$cst$2664$detect_response_format, cljs$cst$2665$transit_request_format, cljs$cst$2666$ring_response_format, $APP.cljs.core.with_meta(cljs$cst$2667$GET, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null))), $APP.cljs$cst$256$doc, "accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :progress-handler - the handler function for progress events.\n                            this handler is only available when using the goog.net.XhrIo API\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request", 
$APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2492$uri, $APP.cljs$cst$309$opts)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2668$TRACE, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, 
$APP.cljs$cst$309$opts], null))), $APP.cljs$cst$256$doc, "accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :progress-handler - the handler function for progress events.\n                            this handler is only available when using the goog.net.XhrIo API\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request", 
$APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2492$uri, $APP.cljs$cst$309$opts)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), cljs$cst$2669$raw_response_format, cljs$cst$2670$to_interceptor, cljs$cst$2671$success_QMARK_, $APP.cljs.core.with_meta(cljs$cst$2672$abort, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2673$this], null))), $APP.cljs$cst$256$doc, "Call this on the result of `ajax-request` to cancel the request."], null)), cljs$cst$2674$json_request_format, cljs$cst$2675$default_interceptors, cljs$cst$2676$text_response_format, $APP.cljs.core.with_meta(cljs$cst$2677$PATCH, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null))), $APP.cljs$cst$256$doc, "accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :progress-handler - the handler function for progress events.\n                            this handler is only available when using the goog.net.XhrIo API\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request", 
$APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2492$uri, $APP.cljs$cst$309$opts)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2678$PURGE, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, 
$APP.cljs$cst$309$opts], null))), $APP.cljs$cst$256$doc, "accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :progress-handler - the handler function for progress events.\n                            this handler is only available when using the goog.net.XhrIo API\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request", 
$APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2492$uri, $APP.cljs$cst$309$opts)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
[$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), cljs$cst$2679$json_response_format], [new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2680$ajax_DOT_core_SLASH_POST, $APP.cljs$cst$108$val, ajax.core.POST, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$256$doc, "accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :progress-handler - the handler function for progress events.\n                            this handler is only available when using the goog.net.XhrIo API\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request"], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2681$ajax_DOT_core_SLASH_transit_response_format, $APP.cljs$cst$108$val, ajax.core.transit_response_format, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2682$ajax_DOT_core_SLASH_OPTIONS, $APP.cljs$cst$108$val, ajax.core.OPTIONS, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, 
[$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$256$doc, "accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :progress-handler - the handler function for progress events.\n                            this handler is only available when using the goog.net.XhrIo API\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request"], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2683$ajax_DOT_core_SLASH_text_request_format, $APP.cljs$cst$108$val, ajax.core.text_request_format, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2684$ajax_DOT_core_SLASH_default_formats, $APP.cljs$cst$108$val, ajax.core.default_formats, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], 
null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2685$ajax_DOT_core_SLASH_url_request_format, $APP.cljs$cst$108$val, ajax.core.url_request_format, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2686$ajax_DOT_core_SLASH_DELETE, $APP.cljs$cst$108$val, ajax.core.DELETE, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$256$doc, "accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :progress-handler - the handler function for progress events.\n                            this handler is only available when using the goog.net.XhrIo API\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request"], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2687$ajax_DOT_core_SLASH_PUT, $APP.cljs$cst$108$val, ajax.core.PUT, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$256$doc, "accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :progress-handler - the handler function for progress events.\n                            this handler is only available when using the goog.net.XhrIo API\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request"], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2688$ajax_DOT_core_SLASH_ajax_request, $APP.cljs$cst$108$val, ajax.core.ajax_request, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2689$ajax_DOT_core_SLASH_HEAD, $APP.cljs$cst$108$val, ajax.core.HEAD, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$256$doc, "accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :progress-handler - the handler function for progress events.\n                            this handler is only available when using the goog.net.XhrIo API\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request"], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2690$ajax_DOT_core_SLASH_detect_response_format, $APP.cljs$cst$108$val, ajax.core.detect_response_format, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2691$ajax_DOT_core_SLASH_transit_request_format, $APP.cljs$cst$108$val, ajax.core.transit_request_format, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], 
null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2692$ajax_DOT_core_SLASH_ring_response_format, $APP.cljs$cst$108$val, ajax.core.ring_response_format, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2693$ajax_DOT_core_SLASH_GET, $APP.cljs$cst$108$val, ajax.core.GET, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
$APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$256$doc, "accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :progress-handler - the handler function for progress events.\n                            this handler is only available when using the goog.net.XhrIo API\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request"], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2694$ajax_DOT_core_SLASH_TRACE, $APP.cljs$cst$108$val, ajax.core.TRACE, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$256$doc, "accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :progress-handler - the handler function for progress events.\n                            this handler is only available when using the goog.net.XhrIo API\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request"], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2695$ajax_DOT_core_SLASH_raw_response_format, $APP.cljs$cst$108$val, ajax.core.raw_response_format, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2696$ajax_DOT_core_SLASH_to_interceptor, $APP.cljs$cst$108$val, ajax.core.to_interceptor, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], 
null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2697$ajax_DOT_core_SLASH_success_QMARK_, $APP.cljs$cst$108$val, ajax.core.success_QMARK_, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2698$ajax_DOT_core_SLASH_abort, $APP.cljs$cst$108$val, ajax.core.abort, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2673$this], null)), $APP.cljs$cst$256$doc, "Call this on the result of `ajax-request` to cancel the request."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2699$ajax_DOT_core_SLASH_json_request_format, $APP.cljs$cst$108$val, ajax.core.json_request_format, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
cljs$cst$2700$ajax_DOT_core_SLASH_default_interceptors, $APP.cljs$cst$108$val, ajax.core.default_interceptors, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2701$ajax_DOT_core_SLASH_text_response_format, $APP.cljs$cst$108$val, ajax.core.text_response_format, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
cljs$cst$2702$ajax_DOT_core_SLASH_PATCH, $APP.cljs$cst$108$val, ajax.core.PATCH, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$256$doc, "accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :progress-handler - the handler function for progress events.\n                            this handler is only available when using the goog.net.XhrIo API\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request"], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2703$ajax_DOT_core_SLASH_PURGE, $APP.cljs$cst$108$val, ajax.core.PURGE, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2492$uri, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$256$doc, "accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :progress-handler - the handler function for progress events.\n                            this handler is only available when using the goog.net.XhrIo API\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request"], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2704$ajax_DOT_core_SLASH_json_response_format, $APP.cljs$cst$108$val, ajax.core.json_response_format, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null)]), $APP.scittle.cljs_ajax.ans);
$APP.scittle.core.register_plugin_BANG_(cljs$cst$2705$scittle_DOT_cljs_ajax_SLASH_ajax, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$398$namespaces, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$2653$ajax_DOT_core, $APP.scittle.cljs_ajax.ajax_namespace], null)], null));

}).call(this);