(function(){
'use strict';
var cljs$cst$2093$bin_char = new $APP.cljs.core.Keyword(null, "bin-char", "bin-char", -1662780697), cljs$cst$2051$optional = new $APP.cljs.core.Keyword(null, "optional", "optional", 2053951509), cljs$cst$2045$full_listeners = new $APP.cljs.core.Symbol(null, "full-listeners", "full-listeners", 1691153354, null), cljs$cst$2027$grammar = new $APP.cljs.core.Symbol(null, "grammar", "grammar", -773107502, null), cljs$cst$2062$paren = new $APP.cljs.core.Keyword(null, "paren", "paren", -294107600), cljs$cst$2161$instaparse_DOT_core_SLASH_parse = 
new $APP.cljs.core.Symbol("instaparse.core", "parse", "instaparse.core/parse", 1705196489, null), cljs$cst$1997$start_production = new $APP.cljs.core.Keyword(null, "start-production", "start-production", 687546537), cljs$cst$2081$DQUOTE = new $APP.cljs.core.Keyword(null, "DQUOTE", "DQUOTE", -571169808), cljs$cst$2022$msg_cache = new $APP.cljs.core.Keyword(null, "msg-cache", "msg-cache", -733775070), cljs$cst$2159$instaparse_DOT_core_SLASH_parses = new $APP.cljs.core.Symbol("instaparse.core", "parses", 
"instaparse.core/parses", -132599097, null), cljs$cst$2167$instaparse_DOT_core_SLASH_parser = new $APP.cljs.core.Symbol("instaparse.core", "parser", "instaparse.core/parser", 1554713294, null), cljs$cst$2171$instaparse_DOT_core_SLASH_enable_tracing_BANG_ = new $APP.cljs.core.Symbol("instaparse.core", "enable-tracing!", "instaparse.core/enable-tracing!", -1883937417, null), cljs$cst$2011$string_ci = new $APP.cljs.core.Keyword(null, "string-ci", "string-ci", 374631805), cljs$cst$2070$pending_forms = 
new $APP.cljs.core.Symbol(null, "pending-forms", "pending-forms", -1225172071, null), cljs$cst$2178$metamap = new $APP.cljs.core.Symbol(null, "metamap", "metamap", -1054832541, null), cljs$cst$2173$instaparse_DOT_transform = new $APP.cljs.core.Symbol(null, "instaparse.transform", "instaparse.transform", 344072010, null), cljs$cst$2089$hide_tag = new $APP.cljs.core.Keyword(null, "hide-tag", "hide-tag", 1347642501), cljs$cst$2063$alt_or_ord = new $APP.cljs.core.Keyword(null, "alt-or-ord", "alt-or-ord", 
310249425), cljs$cst$2177$merge_meta = new $APP.cljs.core.Symbol(null, "merge-meta", "merge-meta", 265684322, null), cljs$cst$1978$dirty = new $APP.cljs.core.Symbol(null, "dirty", "dirty", -1924882488, null), cljs$cst$2019$next_stack = new $APP.cljs.core.Keyword(null, "next-stack", "next-stack", -481930728), cljs$cst$2114$optimize = new $APP.cljs.core.Keyword(null, "optimize", "optimize", -1912349448), cljs$cst$2083$CR = new $APP.cljs.core.Keyword(null, "CR", "CR", -1654295403), cljs$cst$2098$defined_as = 
new $APP.cljs.core.Keyword(null, "defined-as", "defined-as", -474679152), cljs$cst$2103$dec_val = new $APP.cljs.core.Keyword(null, "dec-val", "dec-val", -1263870894), cljs$cst$2144$__GT_Parser = new $APP.cljs.core.Symbol(null, "-\x3eParser", "-\x3eParser", -1668535414, null), cljs$cst$2015$reason = new $APP.cljs.core.Symbol(null, "reason", "reason", -430220232, null), cljs$cst$2182$instaparse_DOT_transform_SLASH_transform = new $APP.cljs.core.Symbol("instaparse.transform", "transform", "instaparse.transform/transform", 
1875576373, null), cljs$cst$2125$start_production = new $APP.cljs.core.Symbol(null, "start-production", "start-production", -1966889232, null), cljs$cst$2075$LF = new $APP.cljs.core.Keyword(null, "LF", "LF", 1177033158), cljs$cst$2003$full = new $APP.cljs.core.Keyword(null, "full", "full", 436801220), cljs$cst$2078$SP = new $APP.cljs.core.Keyword(null, "SP", "SP", 124290284), cljs$cst$2156$enable_tracing_BANG_ = new $APP.cljs.core.Symbol(null, "enable-tracing!", "enable-tracing!", 1184223322, null), 
cljs$cst$1992$regexp = new $APP.cljs.core.Keyword(null, "regexp", "regexp", -541372782), cljs$cst$2106$repetition = new $APP.cljs.core.Keyword(null, "repetition", "repetition", 1938392115), cljs$cst$2021$negative_listeners = new $APP.cljs.core.Keyword(null, "negative-listeners", "negative-listeners", 55241092), cljs$cst$2112$low = new $APP.cljs.core.Keyword(null, "low", "low", -1601362409), cljs$cst$2047$full_results = new $APP.cljs.core.Symbol(null, "full-results", "full-results", 140306120, null), 
cljs$cst$2002$expecting = new $APP.cljs.core.Keyword(null, "expecting", "expecting", -57706705), cljs$cst$2130$standard = new $APP.cljs.core.Keyword(null, "standard", "standard", -1769206695), cljs$cst$2069$read_string_STAR_ = new $APP.cljs.core.Symbol(null, "read-string*", "read-string*", 1046768315, null), cljs$cst$2163$instaparse_DOT_core_SLASH___GT_Parser = new $APP.cljs.core.Symbol("instaparse.core", "-\x3eParser", "instaparse.core/-\x3eParser", -336791401, null), cljs$cst$2134$failure_QMARK_ = 
new $APP.cljs.core.Symbol(null, "failure?", "failure?", -1935176422, null), cljs$cst$2120$ebnf = new $APP.cljs.core.Keyword(null, "ebnf", "ebnf", 31967825), cljs$cst$2014$neg = new $APP.cljs.core.Keyword(null, "neg", "neg", 1800032960), cljs$cst$2158$instaparse_DOT_core_SLASH_failure_QMARK_ = new $APP.cljs.core.Symbol("instaparse.core", "failure?", "instaparse.core/failure?", -175644617, null), cljs$cst$2034$negative_listeners = new $APP.cljs.core.Symbol(null, "negative-listeners", "negative-listeners", 
1695772619, null), cljs$cst$2117$instaparse_DOT_gll_SLASH_start_column = new $APP.cljs.core.Keyword("instaparse.gll", "start-column", "instaparse.gll/start-column", -1490883898), cljs$cst$2042$results = new $APP.cljs.core.Keyword(null, "results", "results", -1134170113), cljs$cst$2148$set_default_input_format_BANG_ = new $APP.cljs.core.Symbol(null, "set-default-input-format!", "set-default-input-format!", 699742130, null), cljs$cst$2140$G__42959 = new $APP.cljs.core.Symbol(null, "G__42959", "G__42959", 
-1115956322, null), cljs$cst$2143$result = new $APP.cljs.core.Symbol(null, "result", "result", -1239343558, null), cljs$cst$2096$char_val = new $APP.cljs.core.Keyword(null, "char-val", "char-val", 1408617933), cljs$cst$1996$grammar = new $APP.cljs.core.Keyword(null, "grammar", "grammar", 1881328267), cljs$cst$2152$standard_whitespace_parsers = new $APP.cljs.core.Symbol(null, "standard-whitespace-parsers", "standard-whitespace-parsers", -1387573457, null), cljs$cst$2092$hide_tag_rule = new $APP.cljs.core.Keyword(null, 
"hide-tag-rule", "hide-tag-rule", 150267589), cljs$cst$2160$instaparse_DOT_core_SLASH_map__GT_Parser = new $APP.cljs.core.Symbol("instaparse.core", "map-\x3eParser", "instaparse.core/map-\x3eParser", 685104155, null), cljs$cst$2109$repeat = new $APP.cljs.core.Keyword(null, "repeat", "repeat", 832692087), cljs$cst$1991$hide = new $APP.cljs.core.Keyword(null, "hide", "hide", -596913169), cljs$cst$2074$LWSP = new $APP.cljs.core.Keyword(null, "LWSP", "LWSP", 782998598), cljs$cst$2044$listeners = new $APP.cljs.core.Symbol(null, 
"listeners", "listeners", 2035075972, null), cljs$cst$2113$high = new $APP.cljs.core.Keyword(null, "high", "high", 2027297808), cljs$cst$2090$whitespace = new $APP.cljs.core.Keyword(null, "whitespace", "whitespace", -1340035483), cljs$cst$2110$hex_val = new $APP.cljs.core.Keyword(null, "hex-val", "hex-val", 1267737401), cljs$cst$2157$_STAR_default_input_format_STAR_ = new $APP.cljs.core.Symbol(null, "*default-input-format*", "*default-input-format*", -1592871694, null), cljs$cst$2005$enlive = new $APP.cljs.core.Keyword(null, 
"enlive", "enlive", 1679023921), cljs$cst$2032$next_stack = new $APP.cljs.core.Symbol(null, "next-stack", "next-stack", 1158600799, null), cljs$cst$1979$cached_seq = new $APP.cljs.core.Symbol(null, "cached-seq", "cached-seq", 1369780142, null), cljs$cst$2031$node_builder = new $APP.cljs.core.Symbol(null, "node-builder", "node-builder", -316031078, null), cljs$cst$2038$trace_QMARK_ = new $APP.cljs.core.Symbol(null, "trace?", "trace?", -923745090, null), cljs$cst$2126$output_format = new $APP.cljs.core.Symbol(null, 
"output-format", "output-format", -185851149, null), cljs$cst$1982$flat = new $APP.cljs.core.Symbol(null, "flat", "flat", -2076841507, null), cljs$cst$2053$lookahead = new $APP.cljs.core.Keyword(null, "lookahead", "lookahead", -400102393), cljs$cst$2059$hide_nt = new $APP.cljs.core.Keyword(null, "hide-nt", "hide-nt", -228813845), cljs$cst$2018$node_builder = new $APP.cljs.core.Keyword(null, "node-builder", "node-builder", -1956562605), cljs$cst$2132$scittle_DOT_instaparse_SLASH_instaparse = new $APP.cljs.core.Keyword("scittle.instaparse", 
"instaparse", "scittle.instaparse/instaparse", -475291229), cljs$cst$2095$NUM = new $APP.cljs.core.Keyword(null, "NUM", "NUM", -218662260), cljs$cst$2176$instaparse_DOT_transform_SLASH_map_preserving_meta = new $APP.cljs.core.Symbol("instaparse.transform", "map-preserving-meta", "instaparse.transform/map-preserving-meta", 1638920527, null), cljs$cst$1984$ord = new $APP.cljs.core.Keyword(null, "ord", "ord", 1142548323), cljs$cst$2000$NOT = new $APP.cljs.core.Keyword(null, "NOT", "NOT", -1689245341), 
cljs$cst$2030$fail_index = new $APP.cljs.core.Symbol(null, "fail-index", "fail-index", 1889258450, null), cljs$cst$2151$ws_parser = new $APP.cljs.core.Symbol(null, "ws-parser", "ws-parser", 937152647, null), cljs$cst$2111$dec_char = new $APP.cljs.core.Keyword(null, "dec-char", "dec-char", -646625154), cljs$cst$2037$failure = new $APP.cljs.core.Symbol(null, "failure", "failure", -1934019890, null), cljs$cst$2162$instaparse_DOT_core_SLASH_get_failure = new $APP.cljs.core.Symbol("instaparse.core", "get-failure", 
"instaparse.core/get-failure", 635675937, null), cljs$cst$2107$rulename_left = new $APP.cljs.core.Keyword(null, "rulename-left", "rulename-left", -1824251564), cljs$cst$2146$add_line_and_column_info_to_metadata = new $APP.cljs.core.Symbol(null, "add-line-and-column-info-to-metadata", "add-line-and-column-info-to-metadata", 1817549915, null), cljs$cst$2119$instaparse_DOT_gll_SLASH_end_column = new $APP.cljs.core.Keyword("instaparse.gll", "end-column", "instaparse.gll/end-column", 942330297), cljs$cst$2149$abnf = 
new $APP.cljs.core.Keyword(null, "abnf", "abnf", -152462052), cljs$cst$2100$hex_char = new $APP.cljs.core.Keyword(null, "hex-char", "hex-char", 764443568), cljs$cst$2043$full_results = new $APP.cljs.core.Keyword(null, "full-results", "full-results", -1500225407), cljs$cst$2170$instaparse_DOT_core_SLASH_span = new $APP.cljs.core.Symbol("instaparse.core", "span", "instaparse.core/span", -41143283, null), cljs$cst$2055$Epsilon = new $APP.cljs.core.Keyword(null, "Epsilon", "Epsilon", 133418452), cljs$cst$2141$parse = 
new $APP.cljs.core.Symbol(null, "parse", "parse", 478366908, null), cljs$cst$2166$instaparse_DOT_core_SLASH_set_default_input_format_BANG_ = new $APP.cljs.core.Symbol("instaparse.core", "set-default-input-format!", "instaparse.core/set-default-input-format!", -560600955, null), cljs$cst$1985$alt = new $APP.cljs.core.Keyword(null, "alt", "alt", -3214426), cljs$cst$2054$negative_lookahead = new $APP.cljs.core.Keyword(null, "negative-lookahead", "negative-lookahead", 874382387), cljs$cst$2016$segment = 
new $APP.cljs.core.Keyword(null, "segment", "segment", -964921196), cljs$cst$2097$num_val = new $APP.cljs.core.Keyword(null, "num-val", "num-val", 1497434478), cljs$cst$2010$rep = new $APP.cljs.core.Keyword(null, "rep", "rep", -1226820564), cljs$cst$2084$OCTET = new $APP.cljs.core.Keyword(null, "OCTET", "OCTET", -743420682), cljs$cst$2127$input_format = new $APP.cljs.core.Keyword(null, "input-format", "input-format", -422703481), cljs$cst$2142$get_failure = new $APP.cljs.core.Symbol(null, "get-failure", 
"get-failure", -763097036, null), cljs$cst$2085$ALPHA = new $APP.cljs.core.Keyword(null, "ALPHA", "ALPHA", -1463859144), cljs$cst$2086$CHAR = new $APP.cljs.core.Keyword(null, "CHAR", "CHAR", -1280338086), cljs$cst$2135$parses = new $APP.cljs.core.Symbol(null, "parses", "parses", 54052778, null), cljs$cst$2136$parser = new $APP.cljs.core.Symbol(null, "parser", "parser", 97036217, null), cljs$cst$2128$allow_namespaced_nts = new $APP.cljs.core.Keyword(null, "allow-namespaced-nts", "allow-namespaced-nts", 
-507534966), cljs$cst$1977$hashcode = new $APP.cljs.core.Symbol(null, "hashcode", "hashcode", 1350412446, null), cljs$cst$2150$grammar_specification = new $APP.cljs.core.Symbol(null, "grammar-specification", "grammar-specification", 1790122876, null), cljs$cst$2137$map__GT_Parser = new $APP.cljs.core.Symbol(null, "map-\x3eParser", "map-\x3eParser", -239761138, null), cljs$cst$2020$generation = new $APP.cljs.core.Keyword(null, "generation", "generation", -2132542044), cljs$cst$2179$instaparse_DOT_transform_SLASH_merge_meta = 
new $APP.cljs.core.Symbol("instaparse.transform", "merge-meta", "instaparse.transform/merge-meta", -182680664, null), cljs$cst$2169$instaparse_DOT_core_SLASH_set_default_output_format_BANG_ = new $APP.cljs.core.Symbol("instaparse.core", "set-default-output-format!", "instaparse.core/set-default-output-format!", -999485039, null), cljs$cst$2172$instaparse_DOT_core_SLASH__STAR_default_input_format_STAR_ = new $APP.cljs.core.Symbol("instaparse.core", "*default-input-format*", "instaparse.core/*default-input-format*", 
2054101023, null), cljs$cst$2046$results = new $APP.cljs.core.Symbol(null, "results", "results", 506361414, null), cljs$cst$2168$instaparse_DOT_core_SLASH_transform = new $APP.cljs.core.Symbol("instaparse.core", "transform", "instaparse.core/transform", -46278314, null), cljs$cst$2001$char_range = new $APP.cljs.core.Keyword(null, "char-range", "char-range", 1443391389), cljs$cst$2131$comma = new $APP.cljs.core.Keyword(null, "comma", "comma", 1699024745), cljs$cst$2154$set_default_output_format_BANG_ = 
new $APP.cljs.core.Symbol(null, "set-default-output-format!", "set-default-output-format!", 2106420900, null), cljs$cst$2174$map_preserving_meta = new $APP.cljs.core.Symbol(null, "map-preserving-meta", "map-preserving-meta", 207910677, null), cljs$cst$2164$instaparse_DOT_core_SLASH_add_line_and_column_info_to_metadata = new $APP.cljs.core.Symbol("instaparse.core", "add-line-and-column-info-to-metadata", "instaparse.core/add-line-and-column-info-to-metadata", 662030624, null), cljs$cst$2133$instaparse_DOT_core = 
new $APP.cljs.core.Symbol(null, "instaparse.core", "instaparse.core", 932523059, null), cljs$cst$2057$rule_separator = new $APP.cljs.core.Keyword(null, "rule-separator", "rule-separator", 1539322213), cljs$cst$2087$BIT = new $APP.cljs.core.Keyword(null, "BIT", "BIT", -1854474115), cljs$cst$2041$full_listeners = new $APP.cljs.core.Keyword(null, "full-listeners", "full-listeners", 50621827), cljs$cst$1983$cat = new $APP.cljs.core.Keyword(null, "cat", "cat", -1457810207), cljs$cst$2077$DIGIT = new $APP.cljs.core.Keyword(null, 
"DIGIT", "DIGIT", 341251338), cljs$cst$2065$comment = new $APP.cljs.core.Keyword(null, "comment", "comment", 532206069), cljs$cst$2080$CTL = new $APP.cljs.core.Keyword(null, "CTL", "CTL", -9995632), cljs$cst$2052$end_of_string = new $APP.cljs.core.Keyword(null, "end-of-string", "end-of-string", 1567354241), cljs$cst$2033$generation = new $APP.cljs.core.Symbol(null, "generation", "generation", -492010517, null), cljs$cst$2013$look = new $APP.cljs.core.Keyword(null, "look", "look", -539441433), cljs$cst$1980$ISeq = 
new $APP.cljs.core.Symbol(null, "ISeq", "ISeq", 1517365813, null), cljs$cst$1976$premix_hashcode = new $APP.cljs.core.Symbol(null, "premix-hashcode", "premix-hashcode", -1918840795, null), cljs$cst$2017$fail_index = new $APP.cljs.core.Keyword(null, "fail-index", "fail-index", 248726923), cljs$cst$2066$rules_or_parser = new $APP.cljs.core.Keyword(null, "rules-or-parser", "rules-or-parser", -314380386), cljs$cst$2118$instaparse_DOT_gll_SLASH_end_line = new $APP.cljs.core.Keyword("instaparse.gll", "end-line", 
"instaparse.gll/end-line", -1706020282), cljs$cst$2147$_STAR_default_output_format_STAR_ = new $APP.cljs.core.Symbol(null, "*default-output-format*", "*default-output-format*", -1763857086, null), cljs$cst$2116$instaparse_DOT_gll_SLASH_start_line = new $APP.cljs.core.Keyword("instaparse.gll", "start-line", "instaparse.gll/start-line", 768862483), cljs$cst$2105$alternation = new $APP.cljs.core.Keyword(null, "alternation", "alternation", -1162147630), cljs$cst$1988$parser1 = new $APP.cljs.core.Keyword(null, 
"parser1", "parser1", -439601422), cljs$cst$1989$parser2 = new $APP.cljs.core.Keyword(null, "parser2", "parser2", 1013754688), cljs$cst$2094$rulename_right = new $APP.cljs.core.Keyword(null, "rulename-right", "rulename-right", 1125609193), cljs$cst$2067$cljs_DOT_tools_DOT_reader_SLASH_read_string_STAR_ = new $APP.cljs.core.Symbol("cljs.tools.reader", "read-string*", "cljs.tools.reader/read-string*", 1492661621, null), cljs$cst$2108$rulelist = new $APP.cljs.core.Keyword(null, "rulelist", "rulelist", 
-1871218473), cljs$cst$1990$parsers = new $APP.cljs.core.Keyword(null, "parsers", "parsers", -804353827), cljs$cst$2181$parse_tree = new $APP.cljs.core.Symbol(null, "parse-tree", "parse-tree", 698274905, null), cljs$cst$2012$nt = new $APP.cljs.core.Keyword(null, "nt", "nt", -835425781), cljs$cst$2049$instaparse_DOT_gll_SLASH_end_index = new $APP.cljs.core.Keyword("instaparse.gll", "end-index", "instaparse.gll/end-index", -1851404441), cljs$cst$2122$partial = new $APP.cljs.core.Keyword(null, "partial", 
"partial", 241141745), cljs$cst$2073$HTAB = new $APP.cljs.core.Keyword(null, "HTAB", "HTAB", 11392612), cljs$cst$2026$trace_QMARK_ = new $APP.cljs.core.Keyword(null, "trace?", "trace?", 1730690679), cljs$cst$2071$output_format = new $APP.cljs.core.Keyword(null, "output-format", "output-format", -1826382676), cljs$cst$2123$unhide = new $APP.cljs.core.Keyword(null, "unhide", "unhide", -413983695), cljs$cst$1993$reduction_type = new $APP.cljs.core.Keyword(null, "reduction-type", "reduction-type", -488293450), 
cljs$cst$2076$VCHAR = new $APP.cljs.core.Keyword(null, "VCHAR", "VCHAR", 1962437706), cljs$cst$2082$WSP = new $APP.cljs.core.Keyword(null, "WSP", "WSP", -1046948716), cljs$cst$2165$instaparse_DOT_core_SLASH__STAR_default_output_format_STAR_ = new $APP.cljs.core.Symbol("instaparse.core", "*default-output-format*", "instaparse.core/*default-output-format*", -805502353, null), cljs$cst$2048$instaparse_DOT_gll_SLASH_start_index = new $APP.cljs.core.Keyword("instaparse.gll", "start-index", "instaparse.gll/start-index", 
404653620), cljs$cst$2101$rulename = new $APP.cljs.core.Keyword(null, "rulename", "rulename", 948914160), cljs$cst$2072$CRLF = new $APP.cljs.core.Keyword(null, "CRLF", "CRLF", 11418756), cljs$cst$2104$concatenation = new $APP.cljs.core.Keyword(null, "concatenation", "concatenation", -951369614), cljs$cst$2102$bin_val = new $APP.cljs.core.Keyword(null, "bin-val", "bin-val", 1705209105), cljs$cst$2035$msg_cache = new $APP.cljs.core.Symbol(null, "msg-cache", "msg-cache", 906756457, null), cljs$cst$2129$auto_whitespace = 
new $APP.cljs.core.Keyword(null, "auto-whitespace", "auto-whitespace", 741152317), cljs$cst$2056$opt_whitespace = new $APP.cljs.core.Keyword(null, "opt-whitespace", "opt-whitespace", 1115207927), cljs$cst$2079$HEXDIG = new $APP.cljs.core.Keyword(null, "HEXDIG", "HEXDIG", -200221072), cljs$cst$2099$option = new $APP.cljs.core.Keyword(null, "option", "option", 65132272), cljs$cst$2180$transform_map = new $APP.cljs.core.Symbol(null, "transform-map", "transform-map", -1528364582, null), cljs$cst$2068$cljs_DOT_tools_DOT_reader = 
new $APP.cljs.core.Symbol(null, "cljs.tools.reader", "cljs.tools.reader", -831293977, null), cljs$cst$2029$segment = new $APP.cljs.core.Symbol(null, "segment", "segment", 675610331, null), cljs$cst$2060$inside_comment = new $APP.cljs.core.Keyword(null, "inside-comment", "inside-comment", 1258069708), cljs$cst$2050$instaparse_SLASH_failure = new $APP.cljs.core.Keyword("instaparse", "failure", "instaparse/failure", 1422918607);
var instaparse = {auto_flatten_seq:{}};
instaparse.auto_flatten_seq.threshold = 32;
instaparse.auto_flatten_seq.ConjFlat = function() {
};
var instaparse$auto_flatten_seq$ConjFlat$conj_flat$dyn_40023 = function($self$$, $obj$$) {
  var $m__5372__auto__$jscomp$163_m__5374__auto__$$ = instaparse.auto_flatten_seq.conj_flat[$APP.goog.typeOf($self$$ == null ? null : $self$$)];
  if ($m__5372__auto__$jscomp$163_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$163_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$163_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($self$$, $obj$$) : $m__5372__auto__$jscomp$163_m__5374__auto__$$.call(null, $self$$, $obj$$);
  }
  $m__5372__auto__$jscomp$163_m__5374__auto__$$ = instaparse.auto_flatten_seq.conj_flat._;
  if ($m__5372__auto__$jscomp$163_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$163_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$163_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($self$$, $obj$$) : $m__5372__auto__$jscomp$163_m__5374__auto__$$.call(null, $self$$, $obj$$);
  }
  throw $APP.cljs.core.missing_protocol("ConjFlat.conj-flat", $self$$);
};
instaparse.auto_flatten_seq.conj_flat = function($self$$, $obj$$) {
  return $self$$ != null && $self$$.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2 != null ? $self$$.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2($self$$, $obj$$) : instaparse$auto_flatten_seq$ConjFlat$conj_flat$dyn_40023($self$$, $obj$$);
};
var instaparse$auto_flatten_seq$ConjFlat$cached_QMARK_$dyn_40028 = function($self$$) {
  var $m__5372__auto__$jscomp$164_m__5374__auto__$$ = instaparse.auto_flatten_seq.cached_QMARK_[$APP.goog.typeOf($self$$ == null ? null : $self$$)];
  if ($m__5372__auto__$jscomp$164_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$164_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$164_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($self$$) : $m__5372__auto__$jscomp$164_m__5374__auto__$$.call(null, $self$$);
  }
  $m__5372__auto__$jscomp$164_m__5374__auto__$$ = instaparse.auto_flatten_seq.cached_QMARK_._;
  if ($m__5372__auto__$jscomp$164_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$164_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$164_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($self$$) : $m__5372__auto__$jscomp$164_m__5374__auto__$$.call(null, $self$$);
  }
  throw $APP.cljs.core.missing_protocol("ConjFlat.cached?", $self$$);
};
instaparse.auto_flatten_seq.cached_QMARK_ = function($self$$) {
  return $self$$ != null && $self$$.instaparse$auto_flatten_seq$ConjFlat$cached_QMARK_$arity$1 != null ? $self$$.instaparse$auto_flatten_seq$ConjFlat$cached_QMARK_$arity$1($self$$) : instaparse$auto_flatten_seq$ConjFlat$cached_QMARK_$dyn_40028($self$$);
};
instaparse.auto_flatten_seq.hash_conj = function($unmixed_hash$$, $item$$) {
  return $APP.cljs.core.imul(31, $unmixed_hash$$) + $APP.cljs.core.hash($item$$);
};
instaparse.auto_flatten_seq.expt = function($G__40036_G__40039_base$jscomp$20_z$$, $G__40035_G__40038_pow$jscomp$2_y$$) {
  if ($G__40035_G__40038_pow$jscomp$2_y$$ === 0) {
    return 1;
  }
  var $G__40034_G__40037_n$jscomp$241_n__$1$$ = $G__40035_G__40038_pow$jscomp$2_y$$ | 0;
  $G__40035_G__40038_pow$jscomp$2_y$$ = 1;
  for ($G__40036_G__40039_base$jscomp$20_z$$ |= 0;;) {
    var $t$$ = $APP.cljs.core.even_QMARK_($G__40034_G__40037_n$jscomp$241_n__$1$$);
    $G__40034_G__40037_n$jscomp$241_n__$1$$ = $APP.cljs.core.quot($G__40034_G__40037_n$jscomp$241_n__$1$$, 2);
    if ($t$$) {
      $G__40036_G__40039_base$jscomp$20_z$$ = $APP.cljs.core.imul($G__40036_G__40039_base$jscomp$20_z$$, $G__40036_G__40039_base$jscomp$20_z$$);
    } else {
      if ($G__40034_G__40037_n$jscomp$241_n__$1$$ === 0) {
        return $APP.cljs.core.imul($G__40036_G__40039_base$jscomp$20_z$$, $G__40035_G__40038_pow$jscomp$2_y$$);
      }
      $G__40035_G__40038_pow$jscomp$2_y$$ = $APP.cljs.core.imul($G__40036_G__40039_base$jscomp$20_z$$, $G__40035_G__40038_pow$jscomp$2_y$$);
      $G__40036_G__40039_base$jscomp$20_z$$ = $APP.cljs.core.imul($G__40036_G__40039_base$jscomp$20_z$$, $G__40036_G__40039_base$jscomp$20_z$$);
    }
  }
};
instaparse.auto_flatten_seq.delve = function($G__40041_v$jscomp$383_v__$1$$, $G__40042_index$$) {
  for ($G__40041_v$jscomp$383_v__$1$$ = $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($G__40041_v$jscomp$383_v__$1$$, $G__40042_index$$);;) {
    if ($APP.cljs.core.truth_(instaparse.auto_flatten_seq.afs_QMARK_.cljs$core$IFn$_invoke$arity$1 ? instaparse.auto_flatten_seq.afs_QMARK_.cljs$core$IFn$_invoke$arity$1($G__40041_v$jscomp$383_v__$1$$) : instaparse.auto_flatten_seq.afs_QMARK_.call(null, $G__40041_v$jscomp$383_v__$1$$))) {
      $G__40041_v$jscomp$383_v__$1$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($G__40041_v$jscomp$383_v__$1$$, 0), $G__40042_index$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__40042_index$$, 0);
    } else {
      return $G__40042_index$$;
    }
  }
};
instaparse.auto_flatten_seq.advance = function($G__40044_v$$, $G__40045_index$$) {
  for (;;) {
    if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count($G__40045_index$$), 1)) {
      return $APP.cljs.core.peek($G__40045_index$$) < (instaparse.auto_flatten_seq.true_count.cljs$core$IFn$_invoke$arity$1 ? instaparse.auto_flatten_seq.true_count.cljs$core$IFn$_invoke$arity$1($G__40044_v$$) : instaparse.auto_flatten_seq.true_count.call(null, $G__40044_v$$)) - 1 ? instaparse.auto_flatten_seq.delve($G__40044_v$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.peek($G__40045_index$$) + 1], null)) : null;
    }
    var $JSCompiler_temp_const$$ = $APP.cljs.core.peek($G__40045_index$$);
    var $G__39919$jscomp$inline_4652_JSCompiler_inline_result$$ = $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($G__40044_v$$, $APP.cljs.core.pop($G__40045_index$$));
    $G__39919$jscomp$inline_4652_JSCompiler_inline_result$$ = instaparse.auto_flatten_seq.true_count.cljs$core$IFn$_invoke$arity$1 ? instaparse.auto_flatten_seq.true_count.cljs$core$IFn$_invoke$arity$1($G__39919$jscomp$inline_4652_JSCompiler_inline_result$$) : instaparse.auto_flatten_seq.true_count.call(null, $G__39919$jscomp$inline_4652_JSCompiler_inline_result$$);
    if ($JSCompiler_temp_const$$ < $G__39919$jscomp$inline_4652_JSCompiler_inline_result$$ - 1) {
      return instaparse.auto_flatten_seq.delve($G__40044_v$$, $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.pop($G__40045_index$$), $APP.cljs.core.peek($G__40045_index$$) + 1));
    }
    $G__40045_index$$ = $APP.cljs.core.pop($G__40045_index$$);
  }
};
instaparse.auto_flatten_seq.flat_seq = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return instaparse.auto_flatten_seq.flat_seq.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return instaparse.auto_flatten_seq.flat_seq.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
instaparse.auto_flatten_seq.flat_seq.cljs$core$IFn$_invoke$arity$1 = function($v$$) {
  return $APP.cljs.core.count($v$$) > 0 ? instaparse.auto_flatten_seq.flat_seq.cljs$core$IFn$_invoke$arity$2($v$$, instaparse.auto_flatten_seq.delve($v$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0], null))) : null;
};
instaparse.auto_flatten_seq.flat_seq.cljs$core$IFn$_invoke$arity$2 = function($v$$, $index$$) {
  return new $APP.cljs.core.LazySeq(null, function() {
    var $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.cons, $JSCompiler_temp_const$jscomp$1$$ = $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($v$$, $index$$);
    var $JSCompiler_inline_result$jscomp$693_temp__5825__auto__$$ = instaparse.auto_flatten_seq.advance($v$$, $index$$);
    $JSCompiler_inline_result$jscomp$693_temp__5825__auto__$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$693_temp__5825__auto__$$) ? instaparse.auto_flatten_seq.flat_seq.cljs$core$IFn$_invoke$arity$2($v$$, $JSCompiler_inline_result$jscomp$693_temp__5825__auto__$$) : null;
    return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_temp_const$jscomp$1$$, $JSCompiler_inline_result$jscomp$693_temp__5825__auto__$$);
  }, null, null);
};
instaparse.auto_flatten_seq.flat_seq.cljs$lang$maxFixedArity = 2;
instaparse.auto_flatten_seq.AutoFlattenSeq = function($v$$, $premix_hashcode$$, $hashcode$$, $cnt$$, $dirty$$, $cached_seq$$) {
  this.v = $v$$;
  this.premix_hashcode = $premix_hashcode$$;
  this.hashcode = $hashcode$$;
  this.cnt = $cnt$$;
  this.dirty = $dirty$$;
  this.cached_seq = $cached_seq$$;
  this.cljs$lang$protocol_mask$partition0$ = 31850958;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.toString = function() {
  return $APP.cljs.core.pr_str_STAR_($APP.cljs.core.seq(this));
};
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ILookup$_lookup$arity$2 = function($self$$, $key$$) {
  return this.v.cljs$core$ILookup$_lookup$arity$2(null, $key$$);
};
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ILookup$_lookup$arity$3 = function($self$$, $key$$, $not_found$$) {
  return this.v.cljs$core$ILookup$_lookup$arity$3(null, $key$$, $not_found$$);
};
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function($self$$) {
  return $APP.cljs.core.meta(this.v);
};
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$INext$_next$arity$1 = function($self$$) {
  return $APP.cljs.core.next($APP.cljs.core.seq(this));
};
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ICounted$_count$arity$1 = function($self$$) {
  return this.cnt;
};
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$IHash$_hash$arity$1 = function($self$$) {
  return this.hashcode;
};
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($self$$, $other$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.hashcode, $APP.cljs.core.hash($other$$)) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.cnt, $APP.cljs.core.count($other$$)) && ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.cnt, 0) || $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.seq(this), $other$$));
};
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function($self$$) {
  return $APP.cljs.core.with_meta(instaparse.auto_flatten_seq.EMPTY, $APP.cljs.core.meta(this));
};
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ISeq$_first$arity$1 = function($self$$) {
  return $APP.cljs.core.first($APP.cljs.core.seq(this));
};
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function($self$$) {
  return $APP.cljs.core.rest($APP.cljs.core.seq(this));
};
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function($self$$) {
  $APP.cljs.core.truth_(this.cached_seq) || (this.cached_seq = this.dirty ? instaparse.auto_flatten_seq.flat_seq.cljs$core$IFn$_invoke$arity$1(this.v) : $APP.cljs.core.seq(this.v));
  return this.cached_seq;
};
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($self$$, $metamap$$) {
  return new instaparse.auto_flatten_seq.AutoFlattenSeq($APP.cljs.core.with_meta(this.v, $metamap$$), this.premix_hashcode, this.hashcode, this.cnt, this.dirty, null);
};
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function($self$$, $o$$) {
  return $APP.cljs.core.cons($o$$, this);
};
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.instaparse$auto_flatten_seq$ConjFlat$ = $APP.cljs.core.PROTOCOL_SENTINEL;
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2 = function($new_cnt_self$$, $JSCompiler_inline_result$jscomp$699_obj$$) {
  if ($JSCompiler_inline_result$jscomp$699_obj$$ == null) {
    return this;
  }
  if ($APP.cljs.core.truth_(instaparse.auto_flatten_seq.afs_QMARK_.cljs$core$IFn$_invoke$arity$1 ? instaparse.auto_flatten_seq.afs_QMARK_.cljs$core$IFn$_invoke$arity$1($JSCompiler_inline_result$jscomp$699_obj$$) : instaparse.auto_flatten_seq.afs_QMARK_.call(null, $JSCompiler_inline_result$jscomp$699_obj$$))) {
    if (this.cnt === 0) {
      return $JSCompiler_inline_result$jscomp$699_obj$$;
    }
    if ($APP.cljs.core.count($JSCompiler_inline_result$jscomp$699_obj$$) <= 32) {
      var $JSCompiler_temp_const$$ = instaparse.auto_flatten_seq.hash_cat.cljs$core$IFn$_invoke$arity$2 ? instaparse.auto_flatten_seq.hash_cat.cljs$core$IFn$_invoke$arity$2(this, $JSCompiler_inline_result$jscomp$699_obj$$) : instaparse.auto_flatten_seq.hash_cat.call(null, this, $JSCompiler_inline_result$jscomp$699_obj$$);
      $new_cnt_self$$ = this.cnt + $APP.cljs.core.count($JSCompiler_inline_result$jscomp$699_obj$$);
      var $JSCompiler_temp_const$jscomp$0$$ = instaparse.auto_flatten_seq.AutoFlattenSeq, $JSCompiler_temp_const$jscomp$1$$ = $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2(this.v, $JSCompiler_inline_result$jscomp$699_obj$$), $JSCompiler_temp_const$jscomp$2$$ = $JSCompiler_temp_const$$;
      $JSCompiler_temp_const$$ = $APP.cljs.core.mix_collection_hash($JSCompiler_temp_const$$, $new_cnt_self$$);
      var $or__5025__auto__$$ = this.dirty;
      $JSCompiler_inline_result$jscomp$699_obj$$ = $or__5025__auto__$$ ? $or__5025__auto__$$ : $JSCompiler_inline_result$jscomp$699_obj$$.dirty;
      return new $JSCompiler_temp_const$jscomp$0$$($JSCompiler_temp_const$jscomp$1$$, $JSCompiler_temp_const$jscomp$2$$, $JSCompiler_temp_const$$, $new_cnt_self$$, $JSCompiler_inline_result$jscomp$699_obj$$, null);
    }
    $JSCompiler_temp_const$$ = instaparse.auto_flatten_seq.hash_cat.cljs$core$IFn$_invoke$arity$2 ? instaparse.auto_flatten_seq.hash_cat.cljs$core$IFn$_invoke$arity$2(this, $JSCompiler_inline_result$jscomp$699_obj$$) : instaparse.auto_flatten_seq.hash_cat.call(null, this, $JSCompiler_inline_result$jscomp$699_obj$$);
    $new_cnt_self$$ = this.cnt + $APP.cljs.core.count($JSCompiler_inline_result$jscomp$699_obj$$);
    return new instaparse.auto_flatten_seq.AutoFlattenSeq($APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2(this.v, $JSCompiler_inline_result$jscomp$699_obj$$), $JSCompiler_temp_const$$, $APP.cljs.core.mix_collection_hash($JSCompiler_temp_const$$, $new_cnt_self$$), $new_cnt_self$$, !0, null);
  }
  $JSCompiler_temp_const$$ = instaparse.auto_flatten_seq.hash_conj(this.premix_hashcode, $JSCompiler_inline_result$jscomp$699_obj$$);
  $new_cnt_self$$ = this.cnt + 1;
  return new instaparse.auto_flatten_seq.AutoFlattenSeq($APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2(this.v, $JSCompiler_inline_result$jscomp$699_obj$$), $JSCompiler_temp_const$$, $APP.cljs.core.mix_collection_hash($JSCompiler_temp_const$$, $new_cnt_self$$), $new_cnt_self$$, this.dirty, null);
};
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.instaparse$auto_flatten_seq$ConjFlat$cached_QMARK_$arity$1 = function($self$$) {
  return this.cached_seq;
};
instaparse.auto_flatten_seq.AutoFlattenSeq.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta($APP.cljs$cst$57$v, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$1975$PersistentVector], null)), $APP.cljs.core.with_meta(cljs$cst$1976$premix_hashcode, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$510$number], null)), $APP.cljs.core.with_meta(cljs$cst$1977$hashcode, new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$510$number], null)), $APP.cljs.core.with_meta($APP.cljs$cst$59$cnt, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$510$number], null)), $APP.cljs.core.with_meta(cljs$cst$1978$dirty, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$79$boolean], null)), $APP.cljs.core.with_meta(cljs$cst$1979$cached_seq, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1980$ISeq, 
  $APP.cljs$cst$1981$unsynchronized_mutable, !0], null))], null);
};
instaparse.auto_flatten_seq.AutoFlattenSeq.cljs$lang$type = !0;
instaparse.auto_flatten_seq.AutoFlattenSeq.cljs$lang$ctorStr = "instaparse.auto-flatten-seq/AutoFlattenSeq";
instaparse.auto_flatten_seq.AutoFlattenSeq.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "instaparse.auto-flatten-seq/AutoFlattenSeq");
};
instaparse.auto_flatten_seq.__GT_AutoFlattenSeq = function($v$$, $premix_hashcode$$, $hashcode$$, $cnt$$, $dirty$$, $cached_seq$$) {
  return new instaparse.auto_flatten_seq.AutoFlattenSeq($v$$, $premix_hashcode$$, $hashcode$$, $cnt$$, $dirty$$, $cached_seq$$);
};
instaparse.auto_flatten_seq.hash_cat = function($v1$$, $v2$$) {
  var $c$jscomp$222_e$$ = $APP.cljs.core.count($v2$$);
  $c$jscomp$222_e$$ = instaparse.auto_flatten_seq.expt(31, $c$jscomp$222_e$$) | 0;
  return $APP.cljs.core.imul($c$jscomp$222_e$$, $v1$$.premix_hashcode) + ($v2$$.premix_hashcode - $c$jscomp$222_e$$);
};
instaparse.auto_flatten_seq.hash_ordered_coll_without_mix = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return instaparse.auto_flatten_seq.hash_ordered_coll_without_mix.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return instaparse.auto_flatten_seq.hash_ordered_coll_without_mix.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
instaparse.auto_flatten_seq.hash_ordered_coll_without_mix.cljs$core$IFn$_invoke$arity$1 = function($coll$$) {
  return instaparse.auto_flatten_seq.hash_ordered_coll_without_mix.cljs$core$IFn$_invoke$arity$2(1, $coll$$);
};
instaparse.auto_flatten_seq.hash_ordered_coll_without_mix.cljs$core$IFn$_invoke$arity$2 = function($G__40086_existing_unmixed_hash_unmixed_hash$$, $G__40087_coll$jscomp$871_coll__$1$$) {
  for ($G__40087_coll$jscomp$871_coll__$1$$ = $APP.cljs.core.seq($G__40087_coll$jscomp$871_coll__$1$$);;) {
    if ($G__40087_coll$jscomp$871_coll__$1$$ != null) {
      $G__40086_existing_unmixed_hash_unmixed_hash$$ = $APP.cljs.core.imul(31, $G__40086_existing_unmixed_hash_unmixed_hash$$) + $APP.cljs.core.hash($APP.cljs.core.first($G__40087_coll$jscomp$871_coll__$1$$)) | 0, $G__40087_coll$jscomp$871_coll__$1$$ = $APP.cljs.core.next($G__40087_coll$jscomp$871_coll__$1$$);
    } else {
      return $G__40086_existing_unmixed_hash_unmixed_hash$$;
    }
  }
};
instaparse.auto_flatten_seq.hash_ordered_coll_without_mix.cljs$lang$maxFixedArity = 2;
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$IPrintWithWriter$ = $APP.cljs.core.PROTOCOL_SENTINEL;
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($afs$$, $writer$$, $opts$$) {
  return $APP.cljs.core._pr_writer($APP.cljs.core.seq(this), $writer$$, $opts$$);
};
instaparse.auto_flatten_seq.auto_flatten_seq = function($v$jscomp$389_v__$1$$) {
  $v$jscomp$389_v__$1$$ = $APP.cljs.core.vec($v$jscomp$389_v__$1$$);
  return new instaparse.auto_flatten_seq.AutoFlattenSeq($v$jscomp$389_v__$1$$, instaparse.auto_flatten_seq.hash_ordered_coll_without_mix.cljs$core$IFn$_invoke$arity$1($v$jscomp$389_v__$1$$), $APP.cljs.core.hash($v$jscomp$389_v__$1$$), $APP.cljs.core.count($v$jscomp$389_v__$1$$), !1, null);
};
instaparse.auto_flatten_seq.EMPTY = instaparse.auto_flatten_seq.auto_flatten_seq($APP.cljs.core.PersistentVector.EMPTY);
instaparse.auto_flatten_seq.afs_QMARK_ = function($s$$) {
  return $s$$ instanceof instaparse.auto_flatten_seq.AutoFlattenSeq;
};
instaparse.auto_flatten_seq.true_count = function($v$$) {
  return instaparse.auto_flatten_seq.afs_QMARK_($v$$) ? $APP.cljs.core.count($v$$.v) : $APP.cljs.core.count($v$$);
};
instaparse.auto_flatten_seq.flat_vec_helper = function($G__40090_G__40093_acc$$, $G__40091_G__40094_v$$) {
  for (;;) {
    if ($APP.cljs.core.seq($G__40091_G__40094_v$$)) {
      var $fst$$ = $APP.cljs.core.first($G__40091_G__40094_v$$);
      instaparse.auto_flatten_seq.afs_QMARK_($fst$$) ? ($G__40090_G__40093_acc$$ = instaparse.auto_flatten_seq.flat_vec_helper.cljs$core$IFn$_invoke$arity$2 ? instaparse.auto_flatten_seq.flat_vec_helper.cljs$core$IFn$_invoke$arity$2($G__40090_G__40093_acc$$, $fst$$) : instaparse.auto_flatten_seq.flat_vec_helper.call(null, $G__40090_G__40093_acc$$, $fst$$), $G__40091_G__40094_v$$ = $APP.cljs.core.next($G__40091_G__40094_v$$)) : ($G__40090_G__40093_acc$$ = $APP.cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2($G__40090_G__40093_acc$$, 
      $fst$$), $G__40091_G__40094_v$$ = $APP.cljs.core.next($G__40091_G__40094_v$$));
    } else {
      return $G__40090_G__40093_acc$$;
    }
  }
};
instaparse.auto_flatten_seq.flat_vec = function($v$$) {
  return $APP.cljs.core.persistent_BANG_(instaparse.auto_flatten_seq.flat_vec_helper($APP.cljs.core.transient$($APP.cljs.core.PersistentVector.EMPTY), $v$$));
};
instaparse.auto_flatten_seq.GetVec = function() {
};
var instaparse$auto_flatten_seq$GetVec$get_vec$dyn_40099 = function($self$$) {
  var $m__5372__auto__$jscomp$165_m__5374__auto__$$ = instaparse.auto_flatten_seq.get_vec[$APP.goog.typeOf($self$$ == null ? null : $self$$)];
  if ($m__5372__auto__$jscomp$165_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$165_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$165_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($self$$) : $m__5372__auto__$jscomp$165_m__5374__auto__$$.call(null, $self$$);
  }
  $m__5372__auto__$jscomp$165_m__5374__auto__$$ = instaparse.auto_flatten_seq.get_vec._;
  if ($m__5372__auto__$jscomp$165_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$165_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$165_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($self$$) : $m__5372__auto__$jscomp$165_m__5374__auto__$$.call(null, $self$$);
  }
  throw $APP.cljs.core.missing_protocol("GetVec.get-vec", $self$$);
};
instaparse.auto_flatten_seq.get_vec = function($self$$) {
  return $self$$ != null && $self$$.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1 != null ? $self$$.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1($self$$) : instaparse$auto_flatten_seq$GetVec$get_vec$dyn_40099($self$$);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector = function($v$$, $hashcode$$, $cnt$$, $flat$$) {
  this.v = $v$$;
  this.hashcode = $hashcode$$;
  this.cnt = $cnt$$;
  this.flat = $flat$$;
  this.cljs$lang$protocol_mask$partition0$ = 167142175;
  this.cljs$lang$protocol_mask$partition1$ = 2048;
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.toString = function() {
  return $APP.cljs.core.pr_str_STAR_(this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null));
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$ILookup$_lookup$arity$2 = function($self$$, $key$$) {
  return this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$ILookup$_lookup$arity$2(null, $key$$);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$ILookup$_lookup$arity$3 = function($self$$, $key$$, $not_found$$) {
  return this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$ILookup$_lookup$arity$3(null, $key$$, $not_found$$);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.instaparse$auto_flatten_seq$GetVec$ = $APP.cljs.core.PROTOCOL_SENTINEL;
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1 = function($self$$) {
  var $self__$$ = this;
  $APP.cljs.core.not($APP.cljs.core.deref($self__$$.flat)) && ($APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2($self__$$.flat, function($_$$) {
    return $APP.cljs.core.with_meta(instaparse.auto_flatten_seq.flat_vec($APP.cljs.core.deref($self__$$.v)), $APP.cljs.core.meta($APP.cljs.core.deref($self__$$.v)));
  }), $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2($self__$$.v, function($_$$) {
    return null;
  }));
  return $APP.cljs.core.deref($self__$$.flat);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($self$$, $f$$, $init$$) {
  return this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$IKVReduce$_kv_reduce$arity$3(null, $f$$, $init$$);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IIndexed$_nth$arity$2 = function($self$$, $i$$) {
  return this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$IIndexed$_nth$arity$2(null, $i$$);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IIndexed$_nth$arity$3 = function($self$$, $i$$, $not_found$$) {
  return this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$IIndexed$_nth$arity$3(null, $i$$, $not_found$$);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = function($self$$, $i$$, $val$$) {
  return this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$IVector$_assoc_n$arity$3(null, $i$$, $val$$);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IMeta$_meta$arity$1 = function($self$$) {
  return $APP.cljs.core.truth_($APP.cljs.core.deref(this.flat)) ? $APP.cljs.core.meta($APP.cljs.core.deref(this.flat)) : $APP.cljs.core.meta($APP.cljs.core.deref(this.v));
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$ICounted$_count$arity$1 = function($self$$) {
  return this.cnt;
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IStack$_peek$arity$1 = function($self$$) {
  return this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$IStack$_peek$arity$1(null);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IStack$_pop$arity$1 = function($self$$) {
  return this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$IStack$_pop$arity$1(null);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IReversible$_rseq$arity$1 = function($self$$) {
  return this.cnt > 0 ? $APP.cljs.core.rseq(this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null)) : null;
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IHash$_hash$arity$1 = function($self$$) {
  return this.hashcode;
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($self$$, $other$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.hashcode, $APP.cljs.core.hash($other$$)) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.cnt, $APP.cljs.core.count($other$$)) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null), $other$$);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function($self$$) {
  return $APP.cljs.core.with_meta($APP.cljs.core.PersistentVector.EMPTY, $APP.cljs.core.meta(this));
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($self$$, $i$$, $val$$) {
  return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null), $i$$, $val$$);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($self$$, $k$$) {
  return this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$IAssociative$_contains_key_QMARK_$arity$2(null, $k$$);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$ISeqable$_seq$arity$1 = function($self$$) {
  return $APP.cljs.core.seq(this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null));
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($self$$, $metamap$$) {
  return $APP.cljs.core.truth_($APP.cljs.core.deref(this.flat)) ? new instaparse.auto_flatten_seq.FlattenOnDemandVector($APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.deref(this.v)), this.hashcode, this.cnt, $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.with_meta($APP.cljs.core.deref(this.flat), $metamap$$))) : new instaparse.auto_flatten_seq.FlattenOnDemandVector($APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.with_meta($APP.cljs.core.deref(this.v), 
  $metamap$$)), this.hashcode, this.cnt, $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.deref(this.flat)));
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$ICollection$_conj$arity$2 = function($self$$, $obj$$) {
  return $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2(this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null), $obj$$);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.call = function($unused__11804__auto__$$) {
  switch(arguments.length - 1) {
    case 1:
      return this.cljs$core$IFn$_invoke$arity$1(arguments[1]);
    case 2:
      return this.cljs$core$IFn$_invoke$arity$2(arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length - 1)].join(""));
  }
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.apply = function($self__$$, $args39988$$) {
  return this.call.apply(this, [this].concat($APP.cljs.core.aclone($args39988$$)));
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IFn$_invoke$arity$1 = function($arg$$) {
  return this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$IFn$_invoke$arity$2(null, $arg$$);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IFn$_invoke$arity$2 = function($arg$$, $not_found$$) {
  return this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$IFn$_invoke$arity$3(null, $arg$$, $not_found$$);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IComparable$_compare$arity$2 = function($self$$, $that$$) {
  return $APP.cljs.core._compare(this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null), $that$$);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$57$v, $APP.cljs.core.with_meta(cljs$cst$1977$hashcode, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$510$number], null)), $APP.cljs.core.with_meta($APP.cljs$cst$59$cnt, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$510$number], null)), cljs$cst$1982$flat], null);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.cljs$lang$type = !0;
instaparse.auto_flatten_seq.FlattenOnDemandVector.cljs$lang$ctorStr = "instaparse.auto-flatten-seq/FlattenOnDemandVector";
instaparse.auto_flatten_seq.FlattenOnDemandVector.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "instaparse.auto-flatten-seq/FlattenOnDemandVector");
};
instaparse.auto_flatten_seq.__GT_FlattenOnDemandVector = function($v$$, $hashcode$$, $cnt$$, $flat$$) {
  return new instaparse.auto_flatten_seq.FlattenOnDemandVector($v$$, $hashcode$$, $cnt$$, $flat$$);
};
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IPrintWithWriter$ = $APP.cljs.core.PROTOCOL_SENTINEL;
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($v$$, $writer$$, $opts$$) {
  return $APP.cljs.core._pr_writer(this.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null), $writer$$, $opts$$);
};
instaparse.auto_flatten_seq.convert_afs_to_vec = function($afs$$) {
  return $APP.cljs.core.truth_($afs$$.dirty) ? $APP.cljs.core.truth_($afs$$.instaparse$auto_flatten_seq$ConjFlat$cached_QMARK_$arity$1(null)) ? $APP.cljs.core.vec($APP.cljs.core.seq($afs$$)) : new instaparse.auto_flatten_seq.FlattenOnDemandVector($APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($afs$$.v), $afs$$.hashcode, $afs$$.cnt, $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)) : $afs$$.v;
};
instaparse.print = {};
instaparse.print.paren_for_tags = function($JSCompiler_inline_result$$, $G__39949$jscomp$inline_4660_and__5023__auto__$$, $parser$$) {
  var $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.truth_;
  ($G__39949$jscomp$inline_4660_and__5023__auto__$$ = $APP.cljs.core.not($G__39949$jscomp$inline_4660_and__5023__auto__$$)) ? ($G__39949$jscomp$inline_4660_and__5023__auto__$$ = $parser$$.cljs$core$IFn$_invoke$arity$1 ? $parser$$.cljs$core$IFn$_invoke$arity$1($APP.cljs$cst$78$tag) : $parser$$.call(null, $APP.cljs$cst$78$tag), $JSCompiler_inline_result$$ = $JSCompiler_inline_result$$.cljs$core$IFn$_invoke$arity$1 ? $JSCompiler_inline_result$$.cljs$core$IFn$_invoke$arity$1($G__39949$jscomp$inline_4660_and__5023__auto__$$) : 
  $JSCompiler_inline_result$$.call(null, $G__39949$jscomp$inline_4660_and__5023__auto__$$)) : $JSCompiler_inline_result$$ = $G__39949$jscomp$inline_4660_and__5023__auto__$$;
  return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_inline_result$$) ? ["(", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2($parser$$, !1) : instaparse.print.combinators__GT_str.call(null, $parser$$, !1)), ")"].join("") : instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2($parser$$, 
  !1) : instaparse.print.combinators__GT_str.call(null, $parser$$, !1);
};
instaparse.print.paren_for_compound = $APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.print.paren_for_tags, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$1983$cat, null, cljs$cst$1984$ord, null, cljs$cst$1985$alt, null], null), null));
instaparse.print.regexp_replace = function($s$$) {
  switch($s$$) {
    case "\n":
      return "\\n";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\r":
      return "\\r";
    case "\t":
      return "\\t";
    default:
      return $s$$;
  }
};
instaparse.print.regexp__GT_str = function($r$$) {
  return $APP.clojure.string.replace(['#"', $APP.cljs.core.subs.cljs$core$IFn$_invoke$arity$2($r$$.source, 1), '"'].join(""), /[\s]/, instaparse.print.regexp_replace);
};
instaparse.print.number__GT_hex_padded = function($n$$) {
  return $n$$ <= 4095 ? ["0000", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($n$$.toString(16))].join("").substr(-4) : $n$$.toString(16);
};
instaparse.print.char_range__GT_str = function($lo$$) {
  var $hi$$ = $APP.cljs.core.__destructure_map($lo$$);
  $lo$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($hi$$, $APP.cljs$cst$1986$lo);
  $hi$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($hi$$, $APP.cljs$cst$1987$hi);
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($lo$$, $hi$$) ? ["%x", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.number__GT_hex_padded($lo$$))].join("") : ["%x", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.number__GT_hex_padded($lo$$)), "-", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.number__GT_hex_padded($hi$$))].join("");
};
instaparse.print.combinators__GT_str = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1 = function($p$$) {
  return instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2($p$$, !1);
};
instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 = function($_STAR_print_newline_STAR__orig_val__39974_40060__STAR_print_newline_STAR__orig_val__39980_40065_p__39957_parser$$, $hidden_QMARK_$$) {
  var $map__39958__$1$$ = $APP.cljs.core.__destructure_map($_STAR_print_newline_STAR__orig_val__39974_40060__STAR_print_newline_STAR__orig_val__39980_40065_p__39957_parser$$);
  $_STAR_print_newline_STAR__orig_val__39974_40060__STAR_print_newline_STAR__orig_val__39980_40065_p__39957_parser$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__39958__$1$$, $APP.cljs$cst$1420$parser);
  var $_STAR_print_fn_STAR__orig_val__39975_40061__STAR_print_fn_STAR__orig_val__39981_40066_parser1$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__39958__$1$$, cljs$cst$1988$parser1), $parser2$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__39958__$1$$, cljs$cst$1989$parser2), $parsers$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__39958__$1$$, cljs$cst$1990$parsers), $G__39961__$1_tag$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__39958__$1$$, $APP.cljs$cst$78$tag);
  if ($APP.cljs.core.truth_(function() {
    var $and__5023__auto__$$ = $APP.cljs.core.not($hidden_QMARK_$$);
    return $and__5023__auto__$$ ? cljs$cst$1991$hide.cljs$core$IFn$_invoke$arity$1($map__39958__$1$$) : $and__5023__auto__$$;
  }())) {
    return ["\x3c", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2($map__39958__$1$$, !0)), "\x3e"].join("");
  }
  $G__39961__$1_tag$$ = $G__39961__$1_tag$$ instanceof $APP.cljs.core.Keyword ? $G__39961__$1_tag$$.fqn : null;
  switch($G__39961__$1_tag$$) {
    case "epsilon":
      return "ε";
    case "opt":
      return [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound($hidden_QMARK_$$, $_STAR_print_newline_STAR__orig_val__39974_40060__STAR_print_newline_STAR__orig_val__39980_40065_p__39957_parser$$)), "?"].join("");
    case "plus":
      return [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound($hidden_QMARK_$$, $_STAR_print_newline_STAR__orig_val__39974_40060__STAR_print_newline_STAR__orig_val__39980_40065_p__39957_parser$$)), "+"].join("");
    case "star":
      return [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound($hidden_QMARK_$$, $_STAR_print_newline_STAR__orig_val__39974_40060__STAR_print_newline_STAR__orig_val__39980_40065_p__39957_parser$$)), "*"].join("");
    case "rep":
      return $APP.cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$1816$min.cljs$core$IFn$_invoke$arity$1($map__39958__$1$$), $APP.cljs$cst$1533$max.cljs$core$IFn$_invoke$arity$1($map__39958__$1$$)) ? [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound($hidden_QMARK_$$, $_STAR_print_newline_STAR__orig_val__39974_40060__STAR_print_newline_STAR__orig_val__39980_40065_p__39957_parser$$)), "{", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($APP.cljs$cst$1816$min.cljs$core$IFn$_invoke$arity$1($map__39958__$1$$)), 
      ",", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($APP.cljs$cst$1533$max.cljs$core$IFn$_invoke$arity$1($map__39958__$1$$)), "}"].join("") : [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound($hidden_QMARK_$$, $_STAR_print_newline_STAR__orig_val__39974_40060__STAR_print_newline_STAR__orig_val__39980_40065_p__39957_parser$$)), "{", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($APP.cljs$cst$1816$min.cljs$core$IFn$_invoke$arity$1($map__39958__$1$$)), "}"].join("");
    case "alt":
      return $APP.clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ", $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$3(instaparse.print.paren_for_tags, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$1984$ord, null], null), null), $hidden_QMARK_$$), $parsers$$));
    case "ord":
      return [$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_tags(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$1985$alt, null], null), null), $hidden_QMARK_$$, $_STAR_print_fn_STAR__orig_val__39975_40061__STAR_print_fn_STAR__orig_val__39981_40066_parser1$$)), " / ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_tags(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 
      1, [cljs$cst$1985$alt, null], null), null), $hidden_QMARK_$$, $parser2$$))].join("");
    case "cat":
      return $APP.clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ", $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$3(instaparse.print.paren_for_tags, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1984$ord, null, cljs$cst$1985$alt, null], null), null), $hidden_QMARK_$$), $parsers$$));
    case "string":
      var $sb__5670__auto__$$ = new $APP.goog.string.StringBuffer();
      $_STAR_print_newline_STAR__orig_val__39974_40060__STAR_print_newline_STAR__orig_val__39980_40065_p__39957_parser$$ = $APP.cljs.core._STAR_print_newline_STAR_;
      $_STAR_print_fn_STAR__orig_val__39975_40061__STAR_print_fn_STAR__orig_val__39981_40066_parser1$$ = $APP.cljs.core._STAR_print_fn_STAR_;
      $APP.cljs.core._STAR_print_newline_STAR_ = !0;
      $APP.cljs.core._STAR_print_fn_STAR_ = function($x__5671__auto__$$) {
        return $sb__5670__auto__$$.append($x__5671__auto__$$);
      };
      try {
        $APP.cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$198$string.cljs$core$IFn$_invoke$arity$1($map__39958__$1$$)], 0));
      } finally {
        $APP.cljs.core._STAR_print_fn_STAR_ = $_STAR_print_fn_STAR__orig_val__39975_40061__STAR_print_fn_STAR__orig_val__39981_40066_parser1$$, $APP.cljs.core._STAR_print_newline_STAR_ = $_STAR_print_newline_STAR__orig_val__39974_40060__STAR_print_newline_STAR__orig_val__39980_40065_p__39957_parser$$;
      }
      return $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($sb__5670__auto__$$);
    case "string-ci":
      $sb__5670__auto__$$ = new $APP.goog.string.StringBuffer();
      $_STAR_print_newline_STAR__orig_val__39974_40060__STAR_print_newline_STAR__orig_val__39980_40065_p__39957_parser$$ = $APP.cljs.core._STAR_print_newline_STAR_;
      $_STAR_print_fn_STAR__orig_val__39975_40061__STAR_print_fn_STAR__orig_val__39981_40066_parser1$$ = $APP.cljs.core._STAR_print_fn_STAR_;
      $APP.cljs.core._STAR_print_newline_STAR_ = !0;
      $APP.cljs.core._STAR_print_fn_STAR_ = function($x__5671__auto__$$) {
        return $sb__5670__auto__$$.append($x__5671__auto__$$);
      };
      try {
        $APP.cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$198$string.cljs$core$IFn$_invoke$arity$1($map__39958__$1$$)], 0));
      } finally {
        $APP.cljs.core._STAR_print_fn_STAR_ = $_STAR_print_fn_STAR__orig_val__39975_40061__STAR_print_fn_STAR__orig_val__39981_40066_parser1$$, $APP.cljs.core._STAR_print_newline_STAR_ = $_STAR_print_newline_STAR__orig_val__39974_40060__STAR_print_newline_STAR__orig_val__39980_40065_p__39957_parser$$;
      }
      return $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($sb__5670__auto__$$);
    case "char":
      return instaparse.print.char_range__GT_str($map__39958__$1$$);
    case "regexp":
      return instaparse.print.regexp__GT_str(cljs$cst$1992$regexp.cljs$core$IFn$_invoke$arity$1($map__39958__$1$$));
    case "nt":
      return $APP.cljs.core.subs.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($APP.cljs$cst$221$keyword.cljs$core$IFn$_invoke$arity$1($map__39958__$1$$)), 1);
    case "look":
      return ["\x26", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound($hidden_QMARK_$$, $_STAR_print_newline_STAR__orig_val__39974_40060__STAR_print_newline_STAR__orig_val__39980_40065_p__39957_parser$$))].join("");
    case "neg":
      return ["!", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound($hidden_QMARK_$$, $_STAR_print_newline_STAR__orig_val__39974_40060__STAR_print_newline_STAR__orig_val__39980_40065_p__39957_parser$$))].join("");
    default:
      throw Error(["No matching clause: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($G__39961__$1_tag$$)].join(""));
  }
};
instaparse.print.combinators__GT_str.cljs$lang$maxFixedArity = 2;
instaparse.print.non_terminal__GT_str = function($non_terminal$$) {
  var $temp__5823__auto__$$ = $APP.cljs.core.namespace($non_terminal$$);
  return $APP.cljs.core.truth_($temp__5823__auto__$$) ? [$temp__5823__auto__$$, "/", $APP.cljs.core.name($non_terminal$$)].join("") : $APP.cljs.core.name($non_terminal$$);
};
instaparse.print.rule__GT_str = function($non_terminal$$, $parser$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs$cst$1993$reduction_type.cljs$core$IFn$_invoke$arity$1($APP.cljs$cst$1994$red.cljs$core$IFn$_invoke$arity$1($parser$$)), $APP.cljs$cst$1995$raw) ? ["\x3c", $APP.cljs.core.name($non_terminal$$), "\x3e \x3d ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1($parser$$))].join("") : [instaparse.print.non_terminal__GT_str($non_terminal$$), " \x3d ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1($parser$$))].join("");
};
instaparse.print.Parser__GT_str = function($map__39990__$1_p__39989$$) {
  $map__39990__$1_p__39989$$ = $APP.cljs.core.__destructure_map($map__39990__$1_p__39989$$);
  var $grammar$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__39990__$1_p__39989$$, cljs$cst$1996$grammar), $start$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__39990__$1_p__39989$$, cljs$cst$1997$start_production);
  return $APP.clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n", $APP.cljs.core.cons(instaparse.print.rule__GT_str($start$$, $grammar$$.cljs$core$IFn$_invoke$arity$1 ? $grammar$$.cljs$core$IFn$_invoke$arity$1($start$$) : $grammar$$.call(null, $start$$)), function() {
    return function $instaparse$print$Parser__GT_str_$_iter__39991$$($s__39992$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (var $s__39992__$1_s__39992__$2_temp__5825__auto__$$ = $s__39992$$;;) {
          if ($s__39992__$1_s__39992__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__39992__$1_s__39992__$2_temp__5825__auto__$$)) {
            if ($APP.cljs.core.chunked_seq_QMARK_($s__39992__$1_s__39992__$2_temp__5825__auto__$$)) {
              var $JSCompiler_inline_result$jscomp$703_c__5501__auto__$jscomp$27_parser$$ = $APP.cljs.core.chunk_first($s__39992__$1_s__39992__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$703_c__5501__auto__$jscomp$27_parser$$), $b__39994_non_terminal$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              a: {
                for (var $i__39993$$ = 0;;) {
                  if ($i__39993$$ < $size__5502__auto__$$) {
                    var $parser$jscomp$inline_4665_vec__39995$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$703_c__5501__auto__$jscomp$27_parser$$, $i__39993$$), $non_terminal$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($parser$jscomp$inline_4665_vec__39995$$, 0, null);
                    $parser$jscomp$inline_4665_vec__39995$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($parser$jscomp$inline_4665_vec__39995$$, 1, null);
                    $APP.cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2($non_terminal$$, $start$$) && $APP.cljs.core.chunk_append($b__39994_non_terminal$$, instaparse.print.rule__GT_str($non_terminal$$, $parser$jscomp$inline_4665_vec__39995$$));
                    $i__39993$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$703_c__5501__auto__$jscomp$27_parser$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$703_c__5501__auto__$jscomp$27_parser$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$703_c__5501__auto__$jscomp$27_parser$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__39994_non_terminal$$), $instaparse$print$Parser__GT_str_$_iter__39991$$($APP.cljs.core.chunk_rest($s__39992__$1_s__39992__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__39994_non_terminal$$), null);
            }
            $JSCompiler_inline_result$jscomp$703_c__5501__auto__$jscomp$27_parser$$ = $APP.cljs.core.first($s__39992__$1_s__39992__$2_temp__5825__auto__$$);
            $b__39994_non_terminal$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$703_c__5501__auto__$jscomp$27_parser$$, 0, null);
            $JSCompiler_inline_result$jscomp$703_c__5501__auto__$jscomp$27_parser$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$703_c__5501__auto__$jscomp$27_parser$$, 1, null);
            if ($APP.cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2($b__39994_non_terminal$$, $start$$)) {
              return $APP.cljs.core.cons(instaparse.print.rule__GT_str($b__39994_non_terminal$$, $JSCompiler_inline_result$jscomp$703_c__5501__auto__$jscomp$27_parser$$), $instaparse$print$Parser__GT_str_$_iter__39991$$($APP.cljs.core.rest($s__39992__$1_s__39992__$2_temp__5825__auto__$$)));
            }
            $s__39992__$1_s__39992__$2_temp__5825__auto__$$ = $APP.cljs.core.rest($s__39992__$1_s__39992__$2_temp__5825__auto__$$);
          } else {
            return null;
          }
        }
      }, null, null);
    }($grammar$$);
  }()));
};
instaparse.failure = {};
instaparse.failure.index__GT_line_column = function($index$$, $text$$) {
  for (var $line$$ = 1, $col$$ = 1, $G__40400_G__40403_counter$$ = 0;;) {
    if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($index$$, $G__40400_G__40403_counter$$)) {
      return new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$209$line, $line$$, $APP.cljs$cst$216$column, $col$$], null);
    }
    $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n", $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($text$$, $G__40400_G__40403_counter$$)) ? ($G__40400_G__40403_counter$$ += 1, $line$$ += 1, $col$$ = 1) : ($G__40400_G__40403_counter$$ += 1, $col$$ += 1);
  }
};
instaparse.failure.get_line = function($G__40405_G__40407_n$jscomp$243_n__$1$$, $G__40404_G__40406_chars$jscomp$4_text$$) {
  for ($G__40404_G__40406_chars$jscomp$4_text$$ = $APP.cljs.core.seq($APP.clojure.string.replace($G__40404_G__40406_chars$jscomp$4_text$$, "\r\n", "\n"));;) {
    if ($APP.cljs.core.empty_QMARK_($G__40404_G__40406_chars$jscomp$4_text$$)) {
      return "";
    }
    if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($G__40405_G__40407_n$jscomp$243_n__$1$$, 1)) {
      return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.str, $APP.cljs.core.take_while.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.complement(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 1, ["\n", null], null), null)), $G__40404_G__40406_chars$jscomp$4_text$$));
    }
    $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n", $APP.cljs.core.first($G__40404_G__40406_chars$jscomp$4_text$$)) ? ($G__40404_G__40406_chars$jscomp$4_text$$ = $APP.cljs.core.next($G__40404_G__40406_chars$jscomp$4_text$$), --$G__40405_G__40407_n$jscomp$243_n__$1$$) : $G__40404_G__40406_chars$jscomp$4_text$$ = $APP.cljs.core.next($G__40404_G__40406_chars$jscomp$4_text$$);
  }
};
instaparse.failure.marker = function($marker_text_text$$, $n$$) {
  var $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.truth_;
  var $JSCompiler_inline_result$$ = $APP.cljs.core.truth_($marker_text_text$$) ? $APP.cljs.core.integer_QMARK_($n$$) : $marker_text_text$$;
  return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_inline_result$$) ? ($marker_text_text$$ = $APP.clojure.string.replace($marker_text_text$$, /[^\s]/, " "), $n$$ <= 1 ? "^" : [$APP.cljs.core.subs.cljs$core$IFn$_invoke$arity$3($marker_text_text$$, 0, $n$$ - 1), "^"].join("")) : null;
};
instaparse.failure.augment_failure = function($failure$$, $text$$) {
  var $lc$$ = instaparse.failure.index__GT_line_column($APP.cljs$cst$1998$index.cljs$core$IFn$_invoke$arity$1($failure$$), $text$$);
  return $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$failure$$, $lc$$, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1999$text, instaparse.failure.get_line($APP.cljs$cst$209$line.cljs$core$IFn$_invoke$arity$1($lc$$), $text$$)], null)], 0));
};
instaparse.failure.print_reason = function($r$$) {
  return $APP.cljs.core.truth_(cljs$cst$2000$NOT.cljs$core$IFn$_invoke$arity$1($r$$)) ? ($APP.cljs.core.print.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0)), $APP.cljs.core.print.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2000$NOT.cljs$core$IFn$_invoke$arity$1($r$$)], 0))) : $APP.cljs.core.truth_(cljs$cst$2001$char_range.cljs$core$IFn$_invoke$arity$1($r$$)) ? $APP.cljs.core.print.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str($r$$)], 
  0)) : $r$$ instanceof RegExp ? $APP.cljs.core.print.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str($r$$)], 0)) : $APP.cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$r$$], 0));
};
instaparse.failure.pprint_failure = function($c__5548__auto__$jscomp$16_line$jscomp$29_p__40345_partial_reasons_seq__40393_temp__5825__auto__$$) {
  var $G__40426_G__40437_count__40366_40414_count__40395_map__40350__$1_reason$$ = $APP.cljs.core.__destructure_map($c__5548__auto__$jscomp$16_line$jscomp$29_p__40345_partial_reasons_seq__40393_temp__5825__auto__$$);
  $c__5548__auto__$jscomp$16_line$jscomp$29_p__40345_partial_reasons_seq__40393_temp__5825__auto__$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($G__40426_G__40437_count__40366_40414_count__40395_map__40350__$1_reason$$, $APP.cljs$cst$209$line);
  var $G__40438_c__5548__auto___40423_chunk__40394_column$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($G__40426_G__40437_count__40366_40414_count__40395_map__40350__$1_reason$$, $APP.cljs$cst$216$column), $G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($G__40426_G__40437_count__40366_40414_count__40395_map__40350__$1_reason$$, $APP.cljs$cst$1999$text);
  $G__40426_G__40437_count__40366_40414_count__40395_map__40350__$1_reason$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($G__40426_G__40437_count__40366_40414_count__40395_map__40350__$1_reason$$, $APP.cljs$cst$1827$reason);
  $APP.cljs.core.println.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($c__5548__auto__$jscomp$16_line$jscomp$29_p__40345_partial_reasons_seq__40393_temp__5825__auto__$$), ", column ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($G__40438_c__5548__auto___40423_chunk__40394_column$$), ":"].join("")], 0));
  $APP.cljs.core.println.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$], 0));
  $APP.cljs.core.println.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker($G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$, $G__40438_c__5548__auto___40423_chunk__40394_column$$)], 0));
  $G__40438_c__5548__auto___40423_chunk__40394_column$$ = $APP.cljs.core.distinct.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs$cst$2002$expecting, $APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs$cst$2003$full, $G__40426_G__40437_count__40366_40414_count__40395_map__40350__$1_reason$$)));
  $c__5548__auto__$jscomp$16_line$jscomp$29_p__40345_partial_reasons_seq__40393_temp__5825__auto__$$ = $APP.cljs.core.distinct.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs$cst$2002$expecting, $APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.complement(cljs$cst$2003$full), $G__40426_G__40437_count__40366_40414_count__40395_map__40350__$1_reason$$)));
  $G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$ = $APP.cljs.core.count($G__40438_c__5548__auto___40423_chunk__40394_column$$) + $APP.cljs.core.count($c__5548__auto__$jscomp$16_line$jscomp$29_p__40345_partial_reasons_seq__40393_temp__5825__auto__$$);
  $G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$ !== 0 && ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1, $G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$) ? $APP.cljs.core.println.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0)) : $APP.cljs.core.println.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 
  0)));
  $G__40438_c__5548__auto___40423_chunk__40394_column$$ = $APP.cljs.core.seq($G__40438_c__5548__auto___40423_chunk__40394_column$$);
  $G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$ = null;
  for (var $G__40424_i__40367_40415_i__40396$$ = $G__40426_G__40437_count__40366_40414_count__40395_map__40350__$1_reason$$ = 0;;) {
    if ($G__40424_i__40367_40415_i__40396$$ < $G__40426_G__40437_count__40366_40414_count__40395_map__40350__$1_reason$$) {
      var $r_40416$$ = $G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$.cljs$core$IIndexed$_nth$arity$2(null, $G__40424_i__40367_40415_i__40396$$);
      instaparse.failure.print_reason($r_40416$$);
      $APP.cljs.core.println.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));
      $G__40424_i__40367_40415_i__40396$$ += 1;
    } else {
      if ($G__40438_c__5548__auto___40423_chunk__40394_column$$ = $APP.cljs.core.seq($G__40438_c__5548__auto___40423_chunk__40394_column$$)) {
        $G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$ = $G__40438_c__5548__auto___40423_chunk__40394_column$$, $APP.cljs.core.chunked_seq_QMARK_($G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$) ? ($G__40438_c__5548__auto___40423_chunk__40394_column$$ = $APP.cljs.core.chunk_first($G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$), $G__40424_i__40367_40415_i__40396$$ = 
        $APP.cljs.core.chunk_rest($G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$), $G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$ = $G__40438_c__5548__auto___40423_chunk__40394_column$$, $G__40426_G__40437_count__40366_40414_count__40395_map__40350__$1_reason$$ = $APP.cljs.core.count($G__40438_c__5548__auto___40423_chunk__40394_column$$), $G__40438_c__5548__auto___40423_chunk__40394_column$$ = $G__40424_i__40367_40415_i__40396$$) : 
        ($G__40438_c__5548__auto___40423_chunk__40394_column$$ = $APP.cljs.core.first($G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$), instaparse.failure.print_reason($G__40438_c__5548__auto___40423_chunk__40394_column$$), $APP.cljs.core.println.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0)), $G__40438_c__5548__auto___40423_chunk__40394_column$$ = $APP.cljs.core.next($G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$), 
        $G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$ = null, $G__40426_G__40437_count__40366_40414_count__40395_map__40350__$1_reason$$ = 0), $G__40424_i__40367_40415_i__40396$$ = 0;
      } else {
        break;
      }
    }
  }
  $c__5548__auto__$jscomp$16_line$jscomp$29_p__40345_partial_reasons_seq__40393_temp__5825__auto__$$ = $APP.cljs.core.seq($c__5548__auto__$jscomp$16_line$jscomp$29_p__40345_partial_reasons_seq__40393_temp__5825__auto__$$);
  $G__40438_c__5548__auto___40423_chunk__40394_column$$ = null;
  for ($G__40424_i__40367_40415_i__40396$$ = $G__40426_G__40437_count__40366_40414_count__40395_map__40350__$1_reason$$ = 0;;) {
    if ($G__40424_i__40367_40415_i__40396$$ < $G__40426_G__40437_count__40366_40414_count__40395_map__40350__$1_reason$$) {
      $G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$ = $G__40438_c__5548__auto___40423_chunk__40394_column$$.cljs$core$IIndexed$_nth$arity$2(null, $G__40424_i__40367_40415_i__40396$$), instaparse.failure.print_reason($G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$), $APP.cljs.core.println(), $G__40424_i__40367_40415_i__40396$$ += 1;
    } else {
      if ($c__5548__auto__$jscomp$16_line$jscomp$29_p__40345_partial_reasons_seq__40393_temp__5825__auto__$$ = $APP.cljs.core.seq($c__5548__auto__$jscomp$16_line$jscomp$29_p__40345_partial_reasons_seq__40393_temp__5825__auto__$$)) {
        $G__40438_c__5548__auto___40423_chunk__40394_column$$ = $c__5548__auto__$jscomp$16_line$jscomp$29_p__40345_partial_reasons_seq__40393_temp__5825__auto__$$, $APP.cljs.core.chunked_seq_QMARK_($G__40438_c__5548__auto___40423_chunk__40394_column$$) ? ($c__5548__auto__$jscomp$16_line$jscomp$29_p__40345_partial_reasons_seq__40393_temp__5825__auto__$$ = $APP.cljs.core.chunk_first($G__40438_c__5548__auto___40423_chunk__40394_column$$), $G__40426_G__40437_count__40366_40414_count__40395_map__40350__$1_reason$$ = 
        $APP.cljs.core.chunk_rest($G__40438_c__5548__auto___40423_chunk__40394_column$$), $G__40438_c__5548__auto___40423_chunk__40394_column$$ = $c__5548__auto__$jscomp$16_line$jscomp$29_p__40345_partial_reasons_seq__40393_temp__5825__auto__$$, $G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$ = $APP.cljs.core.count($c__5548__auto__$jscomp$16_line$jscomp$29_p__40345_partial_reasons_seq__40393_temp__5825__auto__$$), $c__5548__auto__$jscomp$16_line$jscomp$29_p__40345_partial_reasons_seq__40393_temp__5825__auto__$$ = 
        $G__40426_G__40437_count__40366_40414_count__40395_map__40350__$1_reason$$, $G__40426_G__40437_count__40366_40414_count__40395_map__40350__$1_reason$$ = $G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$) : ($G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$ = $APP.cljs.core.first($G__40438_c__5548__auto___40423_chunk__40394_column$$), instaparse.failure.print_reason($G__40425_G__40439_chunk__40365_40413_r$jscomp$61_seq__40364_40422__$1_text$jscomp$23_total$$), 
        $APP.cljs.core.println(), $c__5548__auto__$jscomp$16_line$jscomp$29_p__40345_partial_reasons_seq__40393_temp__5825__auto__$$ = $APP.cljs.core.next($G__40438_c__5548__auto___40423_chunk__40394_column$$), $G__40438_c__5548__auto___40423_chunk__40394_column$$ = null, $G__40426_G__40437_count__40366_40414_count__40395_map__40350__$1_reason$$ = 0), $G__40424_i__40367_40415_i__40396$$ = 0;
      } else {
        return null;
      }
    }
  }
};
instaparse.util = {};
instaparse.util.throw_runtime_exception = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$189_argseq__5756__auto__$$ = [], $len__5749__auto___40343$$ = arguments.length, $i__5750__auto___40344$$ = 0;;) {
    if ($i__5750__auto___40344$$ < $len__5749__auto___40343$$) {
      $args__5755__auto__$jscomp$189_argseq__5756__auto__$$.push(arguments[$i__5750__auto___40344$$]), $i__5750__auto___40344$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$189_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$189_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$189_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$189_argseq__5756__auto__$$);
};
instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = function($message$$) {
  throw $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.str, $message$$);
};
instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = 0;
instaparse.util.throw_runtime_exception.cljs$lang$applyTo = function($seq40272$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq40272$$));
};
instaparse.util.throw_illegal_argument_exception = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$190_argseq__5756__auto__$$ = [], $len__5749__auto___40354$$ = arguments.length, $i__5750__auto___40355$$ = 0;;) {
    if ($i__5750__auto___40355$$ < $len__5749__auto___40354$$) {
      $args__5755__auto__$jscomp$190_argseq__5756__auto__$$.push(arguments[$i__5750__auto___40355$$]), $i__5750__auto___40355$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$190_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$190_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$190_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$190_argseq__5756__auto__$$);
};
instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = function($message$$) {
  throw $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.str, $message$$);
};
instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = 0;
instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = function($seq40283$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq40283$$));
};
instaparse.util.regexp_flags = function($re$$) {
  var $G__40330__$1_G__40330__$2$$ = $APP.cljs.core.truth_($re$$.ignoreCase) ? "i" : "";
  $G__40330__$1_G__40330__$2$$ = $APP.cljs.core.truth_($re$$.multiline) ? [$G__40330__$1_G__40330__$2$$, "m"].join("") : $G__40330__$1_G__40330__$2$$;
  return $APP.cljs.core.truth_($re$$.unicode) ? [$G__40330__$1_G__40330__$2$$, "u"].join("") : $G__40330__$1_G__40330__$2$$;
};
instaparse.reduction = {};
instaparse.reduction.singleton_QMARK_ = function($s$$) {
  return $APP.cljs.core.seq($s$$) && $APP.cljs.core.not($APP.cljs.core.next($s$$));
};
instaparse.reduction.red = function($parser$$, $f$$) {
  return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($parser$$, $APP.cljs$cst$1994$red, $f$$);
};
instaparse.reduction.raw_non_terminal_reduction = new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1995$raw], null);
instaparse.reduction.HiccupNonTerminalReduction = function($key$$) {
  return new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, $key$$], null);
};
instaparse.reduction.EnliveNonTerminalReduction = function($key$$) {
  return new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, cljs$cst$2005$enlive, $APP.cljs$cst$2004$key, $key$$], null);
};
instaparse.reduction.reduction_types = new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1675$hiccup, instaparse.reduction.HiccupNonTerminalReduction, cljs$cst$2005$enlive, instaparse.reduction.EnliveNonTerminalReduction], null);
instaparse.reduction.node_builders = new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$2005$enlive, function($tag$$, $item$$) {
  return new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $tag$$, $APP.cljs$cst$2006$content, new $APP.cljs.core.List(null, $item$$, null, 1, null)], null);
}, $APP.cljs$cst$1675$hiccup, function($tag$$, $item$$) {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$tag$$, $item$$], null);
}], null);
instaparse.reduction.standard_non_terminal_reduction = $APP.cljs$cst$1675$hiccup;
instaparse.reduction.apply_reduction = function($f$$, $content$jscomp$14_result$$) {
  var $G__40446$$ = cljs$cst$1993$reduction_type.cljs$core$IFn$_invoke$arity$1($f$$);
  switch($G__40446$$ instanceof $APP.cljs.core.Keyword ? $G__40446$$.fqn : null) {
    case "raw":
      return instaparse.auto_flatten_seq.EMPTY.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null, $content$jscomp$14_result$$);
    case "hiccup":
      return instaparse.auto_flatten_seq.convert_afs_to_vec(instaparse.auto_flatten_seq.auto_flatten_seq(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2004$key.cljs$core$IFn$_invoke$arity$1($f$$)], null)).instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null, $content$jscomp$14_result$$));
    case "enlive":
      return $content$jscomp$14_result$$ = instaparse.auto_flatten_seq.EMPTY.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null, $content$jscomp$14_result$$), new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$2004$key.cljs$core$IFn$_invoke$arity$1($f$$), $APP.cljs$cst$2006$content, $APP.cljs.core.count($content$jscomp$14_result$$) === 0 ? null : $content$jscomp$14_result$$], null);
    default:
      return $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($content$jscomp$14_result$$) : $f$$.call(null, $content$jscomp$14_result$$);
  }
};
instaparse.reduction.apply_standard_reductions = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$1 = function($grammar$$) {
  return instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(instaparse.reduction.standard_non_terminal_reduction, $grammar$$);
};
instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2 = function($reduction_type$$, $grammar$$) {
  var $temp__5823__auto__$$ = instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1($reduction_type$$) : instaparse.reduction.reduction_types.call(null, $reduction_type$$);
  return $APP.cljs.core.truth_($temp__5823__auto__$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, function() {
    return function $instaparse$reduction$iter__40449$$($s__40450$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (;;) {
          var $s__40450__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__40450$$);
          if ($s__40450__$2_temp__5825__auto__$$) {
            if ($APP.cljs.core.chunked_seq_QMARK_($s__40450__$2_temp__5825__auto__$$)) {
              var $JSCompiler_inline_result$jscomp$707_c__5501__auto__$jscomp$28_v$$ = $APP.cljs.core.chunk_first($s__40450__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$707_c__5501__auto__$jscomp$28_v$$), $b__40452_k$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              a: {
                for (var $i__40451$$ = 0;;) {
                  if ($i__40451$$ < $size__5502__auto__$$) {
                    var $v$jscomp$inline_4674_vec__40455$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$707_c__5501__auto__$jscomp$28_v$$, $i__40451$$), $k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$jscomp$inline_4674_vec__40455$$, 0, null);
                    $v$jscomp$inline_4674_vec__40455$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$jscomp$inline_4674_vec__40455$$, 1, null);
                    $APP.cljs.core.chunk_append($b__40452_k$$, $APP.cljs.core.truth_($APP.cljs$cst$1994$red.cljs$core$IFn$_invoke$arity$1($v$jscomp$inline_4674_vec__40455$$)) ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$k$$, $v$jscomp$inline_4674_vec__40455$$], null) : new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$k$$, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($v$jscomp$inline_4674_vec__40455$$, 
                    $APP.cljs$cst$1994$red, $temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1($k$$) : $temp__5823__auto__$$.call(null, $k$$))], null));
                    $i__40451$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$707_c__5501__auto__$jscomp$28_v$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$707_c__5501__auto__$jscomp$28_v$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$707_c__5501__auto__$jscomp$28_v$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__40452_k$$), $instaparse$reduction$iter__40449$$($APP.cljs.core.chunk_rest($s__40450__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__40452_k$$), null);
            }
            $JSCompiler_inline_result$jscomp$707_c__5501__auto__$jscomp$28_v$$ = $APP.cljs.core.first($s__40450__$2_temp__5825__auto__$$);
            $b__40452_k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$707_c__5501__auto__$jscomp$28_v$$, 0, null);
            $JSCompiler_inline_result$jscomp$707_c__5501__auto__$jscomp$28_v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$707_c__5501__auto__$jscomp$28_v$$, 1, null);
            return $APP.cljs.core.cons($APP.cljs.core.truth_($APP.cljs$cst$1994$red.cljs$core$IFn$_invoke$arity$1($JSCompiler_inline_result$jscomp$707_c__5501__auto__$jscomp$28_v$$)) ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$b__40452_k$$, $JSCompiler_inline_result$jscomp$707_c__5501__auto__$jscomp$28_v$$], null) : new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$b__40452_k$$, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$707_c__5501__auto__$jscomp$28_v$$, 
            $APP.cljs$cst$1994$red, $temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1($b__40452_k$$) : $temp__5823__auto__$$.call(null, $b__40452_k$$))], null), $instaparse$reduction$iter__40449$$($APP.cljs.core.rest($s__40450__$2_temp__5825__auto__$$)));
          }
          return null;
        }
      }, null, null);
    }($grammar$$);
  }()) : instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid output format ", $reduction_type$$, ". Use :enlive or :hiccup."], 0));
};
instaparse.reduction.apply_standard_reductions.cljs$lang$maxFixedArity = 2;
instaparse.combinators_source = {};
instaparse.combinators_source.Epsilon = new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$2007$epsilon], null);
instaparse.combinators_source.opt = function($parser$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($parser$$, instaparse.combinators_source.Epsilon) ? instaparse.combinators_source.Epsilon : new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$1834$opt, $APP.cljs$cst$1420$parser, $parser$$], null);
};
instaparse.combinators_source.plus = function($parser$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($parser$$, instaparse.combinators_source.Epsilon) ? instaparse.combinators_source.Epsilon : new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$2008$plus, $APP.cljs$cst$1420$parser, $parser$$], null);
};
instaparse.combinators_source.star = function($parser$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($parser$$, instaparse.combinators_source.Epsilon) ? instaparse.combinators_source.Epsilon : new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$2009$star, $APP.cljs$cst$1420$parser, $parser$$], null);
};
instaparse.combinators_source.rep = function($m$$, $n$$, $parser$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($parser$$, instaparse.combinators_source.Epsilon) ? instaparse.combinators_source.Epsilon : new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$78$tag, cljs$cst$2010$rep, $APP.cljs$cst$1420$parser, $parser$$, $APP.cljs$cst$1816$min, $m$$, $APP.cljs$cst$1533$max, $n$$], null);
};
instaparse.combinators_source.alt = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$191_argseq__5756__auto__$$ = [], $len__5749__auto___40585$$ = arguments.length, $i__5750__auto___40586$$ = 0;;) {
    if ($i__5750__auto___40586$$ < $len__5749__auto___40585$$) {
      $args__5755__auto__$jscomp$191_argseq__5756__auto__$$.push(arguments[$i__5750__auto___40586$$]), $i__5750__auto___40586$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$191_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$191_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$191_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$191_argseq__5756__auto__$$);
};
instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic = function($parsers$$) {
  return $APP.cljs.core.every_QMARK_($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._EQ_, instaparse.combinators_source.Epsilon), $parsers$$) ? instaparse.combinators_source.Epsilon : instaparse.reduction.singleton_QMARK_($parsers$$) ? $APP.cljs.core.first($parsers$$) : new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1985$alt, cljs$cst$1990$parsers, $parsers$$], null);
};
instaparse.combinators_source.alt.cljs$lang$maxFixedArity = 0;
instaparse.combinators_source.alt.cljs$lang$applyTo = function($seq40464$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq40464$$));
};
instaparse.combinators_source.ord2 = function($parser1$$, $parser2$$) {
  return new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1984$ord, cljs$cst$1988$parser1, $parser1$$, cljs$cst$1989$parser2, $parser2$$], null);
};
instaparse.combinators_source.ord = function($var_args$$) {
  switch(arguments.length) {
    case 0:
      return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$0();
    default:
      for (var $args_arr__5774__auto__$jscomp$78_argseq__5775__auto__$$ = [], $len__5749__auto___40591$$ = arguments.length, $i__5750__auto___40592$$ = 0;;) {
        if ($i__5750__auto___40592$$ < $len__5749__auto___40591$$) {
          $args_arr__5774__auto__$jscomp$78_argseq__5775__auto__$$.push(arguments[$i__5750__auto___40592$$]), $i__5750__auto___40592$$ += 1;
        } else {
          break;
        }
      }
      $args_arr__5774__auto__$jscomp$78_argseq__5775__auto__$$ = 1 < $args_arr__5774__auto__$jscomp$78_argseq__5775__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args_arr__5774__auto__$jscomp$78_argseq__5775__auto__$$.slice(1), 0, null) : null;
      return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args_arr__5774__auto__$jscomp$78_argseq__5775__auto__$$);
  }
};
instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$0 = function() {
  return instaparse.combinators_source.Epsilon;
};
instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic = function($parser1$$, $parsers$$) {
  $parsers$$ = $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($parser1$$, instaparse.combinators_source.Epsilon) ? $APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentHashSet.createAsIfByAssoc([instaparse.combinators_source.Epsilon]), $parsers$$) : $parsers$$;
  return $APP.cljs.core.seq($parsers$$) ? instaparse.combinators_source.ord2($parser1$$, $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.ord, $parsers$$)) : $parser1$$;
};
instaparse.combinators_source.ord.cljs$lang$applyTo = function($seq40466_seq40466__$1$$) {
  var $G__40467$$ = $APP.cljs.core.first($seq40466_seq40466__$1$$);
  $seq40466_seq40466__$1$$ = $APP.cljs.core.next($seq40466_seq40466__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__40467$$, $seq40466_seq40466__$1$$);
};
instaparse.combinators_source.ord.cljs$lang$maxFixedArity = 1;
instaparse.combinators_source.cat = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$192_argseq__5756__auto__$$ = [], $len__5749__auto___40596$$ = arguments.length, $i__5750__auto___40597$$ = 0;;) {
    if ($i__5750__auto___40597$$ < $len__5749__auto___40596$$) {
      $args__5755__auto__$jscomp$192_argseq__5756__auto__$$.push(arguments[$i__5750__auto___40597$$]), $i__5750__auto___40597$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$192_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$192_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$192_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$192_argseq__5756__auto__$$);
};
instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic = function($parsers$jscomp$3_parsers__$1$$) {
  if ($APP.cljs.core.every_QMARK_($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._EQ_, instaparse.combinators_source.Epsilon), $parsers$jscomp$3_parsers__$1$$)) {
    return instaparse.combinators_source.Epsilon;
  }
  $parsers$jscomp$3_parsers__$1$$ = $APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentHashSet.createAsIfByAssoc([instaparse.combinators_source.Epsilon]), $parsers$jscomp$3_parsers__$1$$);
  return instaparse.reduction.singleton_QMARK_($parsers$jscomp$3_parsers__$1$$) ? $APP.cljs.core.first($parsers$jscomp$3_parsers__$1$$) : new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, $parsers$jscomp$3_parsers__$1$$], null);
};
instaparse.combinators_source.cat.cljs$lang$maxFixedArity = 0;
instaparse.combinators_source.cat.cljs$lang$applyTo = function($seq40472$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq40472$$));
};
instaparse.combinators_source.string = function($s$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($s$$, "") ? instaparse.combinators_source.Epsilon : new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, $s$$], null);
};
instaparse.combinators_source.string_ci = function($s$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($s$$, "") ? instaparse.combinators_source.Epsilon : new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2011$string_ci, $APP.cljs$cst$198$string, $s$$], null);
};
instaparse.combinators_source.unicode_char = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1 = function($code_point$$) {
  return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2($code_point$$, $code_point$$);
};
instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2 = function($lo$$, $hi$$) {
  return new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$322$char, $APP.cljs$cst$1986$lo, $lo$$, $APP.cljs$cst$1987$hi, $hi$$], null);
};
instaparse.combinators_source.unicode_char.cljs$lang$maxFixedArity = 2;
instaparse.combinators_source.add_beginning_constraint = function($r$$) {
  return $APP.cljs.core.regexp_QMARK_($r$$) ? new RegExp(["^", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($r$$.source)].join(""), instaparse.util.regexp_flags($r$$)) : $r$$;
};
instaparse.combinators_source.regexp = function($r$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($r$$, "") ? instaparse.combinators_source.Epsilon : new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1992$regexp, cljs$cst$1992$regexp, instaparse.combinators_source.add_beginning_constraint($APP.cljs.core.re_pattern($r$$))], null);
};
instaparse.combinators_source.nt = function($s$$) {
  return new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, $s$$], null);
};
instaparse.combinators_source.look = function($parser$$) {
  return new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2013$look, $APP.cljs$cst$1420$parser, $parser$$], null);
};
instaparse.combinators_source.neg = function($parser$$) {
  return new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2014$neg, $APP.cljs$cst$1420$parser, $parser$$], null);
};
instaparse.combinators_source.hide = function($parser$$) {
  return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($parser$$, cljs$cst$1991$hide, !0);
};
instaparse.combinators_source.hide_tag = function($parser$$) {
  return instaparse.reduction.red($parser$$, instaparse.reduction.raw_non_terminal_reduction);
};
instaparse.combinators_source.hidden_tag_QMARK_ = function($parser$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$1994$red.cljs$core$IFn$_invoke$arity$1($parser$$), instaparse.reduction.raw_non_terminal_reduction);
};
instaparse.combinators_source.unhide_content = function($parser$$) {
  var $parser__$1$$ = $APP.cljs.core.truth_(cljs$cst$1991$hide.cljs$core$IFn$_invoke$arity$1($parser$$)) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($parser$$, cljs$cst$1991$hide) : $parser$$;
  return $APP.cljs.core.truth_($APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($parser__$1$$)) ? $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($parser__$1$$, $APP.cljs$cst$1420$parser, function() {
    var $G__40485$$ = $APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($parser__$1$$);
    return instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1 ? instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1($G__40485$$) : instaparse.combinators_source.unhide_content.call(null, $G__40485$$);
  }()) : $APP.cljs.core.truth_(cljs$cst$1990$parsers.cljs$core$IFn$_invoke$arity$1($parser__$1$$)) ? $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($parser__$1$$, cljs$cst$1990$parsers, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.unhide_content, cljs$cst$1990$parsers.cljs$core$IFn$_invoke$arity$1($parser__$1$$))) : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$78$tag.cljs$core$IFn$_invoke$arity$1($parser__$1$$), cljs$cst$1984$ord) ? $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic($parser__$1$$, 
  cljs$cst$1988$parser1, function() {
    var $G__40486$$ = cljs$cst$1988$parser1.cljs$core$IFn$_invoke$arity$1($parser__$1$$);
    return instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1 ? instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1($G__40486$$) : instaparse.combinators_source.unhide_content.call(null, $G__40486$$);
  }(), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$1989$parser2, function() {
    var $G__40488$$ = cljs$cst$1989$parser2.cljs$core$IFn$_invoke$arity$1($parser__$1$$);
    return instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1 ? instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1($G__40488$$) : instaparse.combinators_source.unhide_content.call(null, $G__40488$$);
  }()], 0)) : $parser__$1$$;
};
instaparse.combinators_source.unhide_all_content = function($grammar$$) {
  return $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, function() {
    return function $instaparse$combinators_source$unhide_all_content_$_iter__40492$$($s__40493$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (;;) {
          var $s__40493__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__40493$$);
          if ($s__40493__$2_temp__5825__auto__$$) {
            if ($APP.cljs.core.chunked_seq_QMARK_($s__40493__$2_temp__5825__auto__$$)) {
              var $JSCompiler_inline_result$jscomp$708_c__5501__auto__$jscomp$29_v$$ = $APP.cljs.core.chunk_first($s__40493__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$708_c__5501__auto__$jscomp$29_v$$), $b__40495_k$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              a: {
                for (var $i__40494$$ = 0;;) {
                  if ($i__40494$$ < $size__5502__auto__$$) {
                    var $v$jscomp$inline_4680_vec__40499$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$708_c__5501__auto__$jscomp$29_v$$, $i__40494$$), $k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$jscomp$inline_4680_vec__40499$$, 0, null);
                    $v$jscomp$inline_4680_vec__40499$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$jscomp$inline_4680_vec__40499$$, 1, null);
                    $APP.cljs.core.chunk_append($b__40495_k$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$k$$, instaparse.combinators_source.unhide_content($v$jscomp$inline_4680_vec__40499$$)], null));
                    $i__40494$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$708_c__5501__auto__$jscomp$29_v$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$708_c__5501__auto__$jscomp$29_v$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$708_c__5501__auto__$jscomp$29_v$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__40495_k$$), $instaparse$combinators_source$unhide_all_content_$_iter__40492$$($APP.cljs.core.chunk_rest($s__40493__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__40495_k$$), null);
            }
            $JSCompiler_inline_result$jscomp$708_c__5501__auto__$jscomp$29_v$$ = $APP.cljs.core.first($s__40493__$2_temp__5825__auto__$$);
            $b__40495_k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$708_c__5501__auto__$jscomp$29_v$$, 0, null);
            $JSCompiler_inline_result$jscomp$708_c__5501__auto__$jscomp$29_v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$708_c__5501__auto__$jscomp$29_v$$, 1, null);
            return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$b__40495_k$$, instaparse.combinators_source.unhide_content($JSCompiler_inline_result$jscomp$708_c__5501__auto__$jscomp$29_v$$)], null), $instaparse$combinators_source$unhide_all_content_$_iter__40492$$($APP.cljs.core.rest($s__40493__$2_temp__5825__auto__$$)));
          }
          return null;
        }
      }, null, null);
    }($grammar$$);
  }());
};
instaparse.combinators_source.unhide_tags = function($reduction_type$$, $grammar$$) {
  var $temp__5823__auto__$$ = instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1($reduction_type$$) : instaparse.reduction.reduction_types.call(null, $reduction_type$$);
  return $APP.cljs.core.truth_($temp__5823__auto__$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, function() {
    return function $instaparse$combinators_source$unhide_tags_$_iter__40511$$($s__40512$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (;;) {
          var $s__40512__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__40512$$);
          if ($s__40512__$2_temp__5825__auto__$$) {
            if ($APP.cljs.core.chunked_seq_QMARK_($s__40512__$2_temp__5825__auto__$$)) {
              var $JSCompiler_inline_result$jscomp$709_c__5501__auto__$jscomp$30_v$$ = $APP.cljs.core.chunk_first($s__40512__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$709_c__5501__auto__$jscomp$30_v$$), $b__40514_k$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              a: {
                for (var $i__40513$$ = 0;;) {
                  if ($i__40513$$ < $size__5502__auto__$$) {
                    var $v$jscomp$inline_4686_vec__40528$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$709_c__5501__auto__$jscomp$30_v$$, $i__40513$$), $k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$jscomp$inline_4686_vec__40528$$, 0, null);
                    $v$jscomp$inline_4686_vec__40528$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$jscomp$inline_4686_vec__40528$$, 1, null);
                    $APP.cljs.core.chunk_append($b__40514_k$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$k$$, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($v$jscomp$inline_4686_vec__40528$$, $APP.cljs$cst$1994$red, $temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1($k$$) : $temp__5823__auto__$$.call(null, $k$$))], null));
                    $i__40513$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$709_c__5501__auto__$jscomp$30_v$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$709_c__5501__auto__$jscomp$30_v$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$709_c__5501__auto__$jscomp$30_v$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__40514_k$$), $instaparse$combinators_source$unhide_tags_$_iter__40511$$($APP.cljs.core.chunk_rest($s__40512__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__40514_k$$), null);
            }
            $JSCompiler_inline_result$jscomp$709_c__5501__auto__$jscomp$30_v$$ = $APP.cljs.core.first($s__40512__$2_temp__5825__auto__$$);
            $b__40514_k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$709_c__5501__auto__$jscomp$30_v$$, 0, null);
            $JSCompiler_inline_result$jscomp$709_c__5501__auto__$jscomp$30_v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$709_c__5501__auto__$jscomp$30_v$$, 1, null);
            return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$b__40514_k$$, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$709_c__5501__auto__$jscomp$30_v$$, $APP.cljs$cst$1994$red, $temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1($b__40514_k$$) : $temp__5823__auto__$$.call(null, $b__40514_k$$))], null), $instaparse$combinators_source$unhide_tags_$_iter__40511$$($APP.cljs.core.rest($s__40512__$2_temp__5825__auto__$$)));
          }
          return null;
        }
      }, null, null);
    }($grammar$$);
  }()) : instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid output format ", $reduction_type$$, ". Use :enlive or :hiccup."], 0));
};
instaparse.combinators_source.unhide_all = function($reduction_type$$, $grammar$$) {
  var $temp__5823__auto__$$ = instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1($reduction_type$$) : instaparse.reduction.reduction_types.call(null, $reduction_type$$);
  return $APP.cljs.core.truth_($temp__5823__auto__$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, function() {
    return function $instaparse$combinators_source$unhide_all_$_iter__40547$$($s__40548$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (;;) {
          var $s__40548__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__40548$$);
          if ($s__40548__$2_temp__5825__auto__$$) {
            if ($APP.cljs.core.chunked_seq_QMARK_($s__40548__$2_temp__5825__auto__$$)) {
              var $JSCompiler_inline_result$jscomp$710_c__5501__auto__$jscomp$31_v$$ = $APP.cljs.core.chunk_first($s__40548__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$710_c__5501__auto__$jscomp$31_v$$), $b__40550_k$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              a: {
                for (var $i__40549$$ = 0;;) {
                  if ($i__40549$$ < $size__5502__auto__$$) {
                    var $v$jscomp$inline_4692_vec__40551$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$710_c__5501__auto__$jscomp$31_v$$, $i__40549$$), $k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$jscomp$inline_4692_vec__40551$$, 0, null);
                    $v$jscomp$inline_4692_vec__40551$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$jscomp$inline_4692_vec__40551$$, 1, null);
                    $APP.cljs.core.chunk_append($b__40550_k$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$k$$, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.unhide_content($v$jscomp$inline_4692_vec__40551$$), $APP.cljs$cst$1994$red, $temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1($k$$) : $temp__5823__auto__$$.call(null, $k$$))], null));
                    $i__40549$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$710_c__5501__auto__$jscomp$31_v$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$710_c__5501__auto__$jscomp$31_v$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$710_c__5501__auto__$jscomp$31_v$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__40550_k$$), $instaparse$combinators_source$unhide_all_$_iter__40547$$($APP.cljs.core.chunk_rest($s__40548__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__40550_k$$), null);
            }
            $JSCompiler_inline_result$jscomp$710_c__5501__auto__$jscomp$31_v$$ = $APP.cljs.core.first($s__40548__$2_temp__5825__auto__$$);
            $b__40550_k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$710_c__5501__auto__$jscomp$31_v$$, 0, null);
            $JSCompiler_inline_result$jscomp$710_c__5501__auto__$jscomp$31_v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$710_c__5501__auto__$jscomp$31_v$$, 1, null);
            return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$b__40550_k$$, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.unhide_content($JSCompiler_inline_result$jscomp$710_c__5501__auto__$jscomp$31_v$$), $APP.cljs$cst$1994$red, $temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1($b__40550_k$$) : $temp__5823__auto__$$.call(null, $b__40550_k$$))], 
            null), $instaparse$combinators_source$unhide_all_$_iter__40547$$($APP.cljs.core.rest($s__40548__$2_temp__5825__auto__$$)));
          }
          return null;
        }
      }, null, null);
    }($grammar$$);
  }()) : instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid output format ", $reduction_type$$, ". Use :enlive or :hiccup."], 0));
};
instaparse.combinators_source.auto_whitespace_parser = function($parser$$, $ws_parser$$) {
  var $G__40562_G__40562__$1$$ = $APP.cljs$cst$78$tag.cljs$core$IFn$_invoke$arity$1($parser$$);
  $G__40562_G__40562__$1$$ = $G__40562_G__40562__$1$$ instanceof $APP.cljs.core.Keyword ? $G__40562_G__40562__$1$$.fqn : null;
  switch($G__40562_G__40562__$1$$) {
    case "nt":
    case "epsilon":
      return $parser$$;
    case "opt":
    case "plus":
    case "star":
    case "rep":
    case "look":
    case "neg":
      return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($parser$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1420$parser], null), instaparse.combinators_source.auto_whitespace_parser, $ws_parser$$);
    case "alt":
    case "cat":
      return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($parser$$, cljs$cst$1990$parsers, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__40561_SHARP_$$) {
        return instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2 ? instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2($p1__40561_SHARP_$$, $ws_parser$$) : instaparse.combinators_source.auto_whitespace_parser.call(null, $p1__40561_SHARP_$$, $ws_parser$$);
      }, cljs$cst$1990$parsers.cljs$core$IFn$_invoke$arity$1($parser$$)));
    case "ord":
      return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic($parser$$, cljs$cst$1988$parser1, function() {
        var $G__40563$$ = cljs$cst$1988$parser1.cljs$core$IFn$_invoke$arity$1($parser$$);
        return instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2 ? instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2($G__40563$$, $ws_parser$$) : instaparse.combinators_source.auto_whitespace_parser.call(null, $G__40563$$, $ws_parser$$);
      }(), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$1989$parser2, function() {
        var $G__40565$$ = cljs$cst$1989$parser2.cljs$core$IFn$_invoke$arity$1($parser$$);
        return instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2 ? instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2($G__40565$$, $ws_parser$$) : instaparse.combinators_source.auto_whitespace_parser.call(null, $G__40565$$, $ws_parser$$);
      }()], 0));
    case "string":
    case "string-ci":
    case "regexp":
      return $APP.cljs.core.truth_($APP.cljs$cst$1994$red.cljs$core$IFn$_invoke$arity$1($parser$$)) ? $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$ws_parser$$, $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($parser$$, $APP.cljs$cst$1994$red)], 0)), $APP.cljs$cst$1994$red, $APP.cljs$cst$1994$red.cljs$core$IFn$_invoke$arity$1($parser$$)) : instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$ws_parser$$, 
      $parser$$], 0));
    default:
      throw Error(["No matching clause: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($G__40562_G__40562__$1$$)].join(""));
  }
};
instaparse.combinators_source.auto_whitespace = function($grammar$$, $final_grammar_start$$, $grammar_ws_grammar_ws__$1$$, $modified_grammar_start_ws$$) {
  var $ws_parser$$ = instaparse.combinators_source.hide(instaparse.combinators_source.opt(instaparse.combinators_source.nt($modified_grammar_start_ws$$)));
  $grammar_ws_grammar_ws__$1$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($grammar_ws_grammar_ws__$1$$, $modified_grammar_start_ws$$, instaparse.combinators_source.hide_tag($grammar_ws_grammar_ws__$1$$.cljs$core$IFn$_invoke$arity$1 ? $grammar_ws_grammar_ws__$1$$.cljs$core$IFn$_invoke$arity$1($modified_grammar_start_ws$$) : $grammar_ws_grammar_ws__$1$$.call(null, $modified_grammar_start_ws$$)));
  $modified_grammar_start_ws$$ = $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, function() {
    return function $instaparse$combinators_source$auto_whitespace_$_iter__40571$$($s__40572$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (;;) {
          var $s__40572__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__40572$$);
          if ($s__40572__$2_temp__5825__auto__$$) {
            if ($APP.cljs.core.chunked_seq_QMARK_($s__40572__$2_temp__5825__auto__$$)) {
              var $JSCompiler_inline_result$jscomp$711_c__5501__auto__$jscomp$32_parser$$ = $APP.cljs.core.chunk_first($s__40572__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$711_c__5501__auto__$jscomp$32_parser$$), $b__40574_nt$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              a: {
                for (var $i__40573$$ = 0;;) {
                  if ($i__40573$$ < $size__5502__auto__$$) {
                    var $parser$jscomp$inline_4698_vec__40577$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$711_c__5501__auto__$jscomp$32_parser$$, $i__40573$$), $nt$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($parser$jscomp$inline_4698_vec__40577$$, 0, null);
                    $parser$jscomp$inline_4698_vec__40577$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($parser$jscomp$inline_4698_vec__40577$$, 1, null);
                    $APP.cljs.core.chunk_append($b__40574_nt$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$nt$$, instaparse.combinators_source.auto_whitespace_parser($parser$jscomp$inline_4698_vec__40577$$, $ws_parser$$)], null));
                    $i__40573$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$711_c__5501__auto__$jscomp$32_parser$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$711_c__5501__auto__$jscomp$32_parser$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$711_c__5501__auto__$jscomp$32_parser$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__40574_nt$$), $instaparse$combinators_source$auto_whitespace_$_iter__40571$$($APP.cljs.core.chunk_rest($s__40572__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__40574_nt$$), null);
            }
            $JSCompiler_inline_result$jscomp$711_c__5501__auto__$jscomp$32_parser$$ = $APP.cljs.core.first($s__40572__$2_temp__5825__auto__$$);
            $b__40574_nt$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$711_c__5501__auto__$jscomp$32_parser$$, 0, null);
            $JSCompiler_inline_result$jscomp$711_c__5501__auto__$jscomp$32_parser$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$711_c__5501__auto__$jscomp$32_parser$$, 1, null);
            return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$b__40574_nt$$, instaparse.combinators_source.auto_whitespace_parser($JSCompiler_inline_result$jscomp$711_c__5501__auto__$jscomp$32_parser$$, $ws_parser$$)], null), $instaparse$combinators_source$auto_whitespace_$_iter__40571$$($APP.cljs.core.rest($s__40572__$2_temp__5825__auto__$$)));
          }
          return null;
        }
      }, null, null);
    }($grammar$$);
  }());
  $final_grammar_start$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($modified_grammar_start_ws$$, $final_grammar_start$$, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($modified_grammar_start_ws$$.cljs$core$IFn$_invoke$arity$1 ? $modified_grammar_start_ws$$.cljs$core$IFn$_invoke$arity$1($final_grammar_start$$) : 
  $modified_grammar_start_ws$$.call(null, $final_grammar_start$$), $APP.cljs$cst$1994$red), $ws_parser$$], 0)), $APP.cljs$cst$1994$red, $APP.cljs$cst$1994$red.cljs$core$IFn$_invoke$arity$1($modified_grammar_start_ws$$.cljs$core$IFn$_invoke$arity$1 ? $modified_grammar_start_ws$$.cljs$core$IFn$_invoke$arity$1($final_grammar_start$$) : $modified_grammar_start_ws$$.call(null, $final_grammar_start$$))));
  return $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$final_grammar_start$$, $grammar_ws_grammar_ws__$1$$], 0));
};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
$APP.goog.i18n.uChar = {};
$APP.goog.i18n.uChar.SUPPLEMENTARY_CODE_POINT_MIN_VALUE_ = 65536;
$APP.goog.i18n.uChar.CODE_POINT_MAX_VALUE_ = 1114111;
$APP.goog.i18n.uChar.LEAD_SURROGATE_MIN_VALUE_ = 55296;
$APP.goog.i18n.uChar.LEAD_SURROGATE_MAX_VALUE_ = 56319;
$APP.goog.i18n.uChar.TRAIL_SURROGATE_MIN_VALUE_ = 56320;
$APP.goog.i18n.uChar.TRAIL_SURROGATE_MAX_VALUE_ = 57343;
$APP.goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_ = 10;
$APP.goog.i18n.uChar.toHexString = function($ch$$) {
  $ch$$ = $APP.goog.i18n.uChar.toCharCode($ch$$);
  return "U+" + $APP.goog.i18n.uChar.padString_($ch$$.toString(16).toUpperCase(), 4, "0");
};
$APP.goog.i18n.uChar.padString_ = function($str$$, $length$$, $ch$$) {
  for (; $str$$.length < $length$$;) {
    $str$$ = $ch$$ + $str$$;
  }
  return $str$$;
};
$APP.goog.i18n.uChar.toCharCode = function($ch$$) {
  return $APP.goog.i18n.uChar.getCodePointAround($ch$$, 0);
};
$APP.goog.i18n.uChar.fromCharCode = function($code$$) {
  if ($code$$ == null || !($code$$ >= 0 && $code$$ <= $APP.goog.i18n.uChar.CODE_POINT_MAX_VALUE_)) {
    return null;
  }
  if ($APP.goog.i18n.uChar.isSupplementaryCodePoint($code$$)) {
    const $trailCodePoint$$ = ($code$$ & (1 << $APP.goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_) - 1) + $APP.goog.i18n.uChar.TRAIL_SURROGATE_MIN_VALUE_;
    return String.fromCharCode(($code$$ >> $APP.goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_) + ($APP.goog.i18n.uChar.LEAD_SURROGATE_MIN_VALUE_ - ($APP.goog.i18n.uChar.SUPPLEMENTARY_CODE_POINT_MIN_VALUE_ >> $APP.goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_))) + String.fromCharCode($trailCodePoint$$);
  }
  return String.fromCharCode($code$$);
};
$APP.goog.i18n.uChar.getCodePointAround = function($lead$jscomp$1_string$$, $index$$) {
  const $charCode$$ = $lead$jscomp$1_string$$.charCodeAt($index$$);
  if ($APP.goog.i18n.uChar.isLeadSurrogateCodePoint($charCode$$) && $index$$ + 1 < $lead$jscomp$1_string$$.length) {
    if ($lead$jscomp$1_string$$ = $lead$jscomp$1_string$$.charCodeAt($index$$ + 1), $APP.goog.i18n.uChar.isTrailSurrogateCodePoint($lead$jscomp$1_string$$)) {
      return $APP.goog.i18n.uChar.buildSupplementaryCodePoint($charCode$$, $lead$jscomp$1_string$$);
    }
  } else if ($APP.goog.i18n.uChar.isTrailSurrogateCodePoint($charCode$$) && $index$$ > 0 && ($lead$jscomp$1_string$$ = $lead$jscomp$1_string$$.charCodeAt($index$$ - 1), $APP.goog.i18n.uChar.isLeadSurrogateCodePoint($lead$jscomp$1_string$$))) {
    return -$APP.goog.i18n.uChar.buildSupplementaryCodePoint($lead$jscomp$1_string$$, $charCode$$);
  }
  return $charCode$$;
};
$APP.goog.i18n.uChar.charCount = function($codePoint$$) {
  return $APP.goog.i18n.uChar.isSupplementaryCodePoint($codePoint$$) ? 2 : 1;
};
$APP.goog.i18n.uChar.isSupplementaryCodePoint = function($codePoint$$) {
  return $codePoint$$ >= $APP.goog.i18n.uChar.SUPPLEMENTARY_CODE_POINT_MIN_VALUE_ && $codePoint$$ <= $APP.goog.i18n.uChar.CODE_POINT_MAX_VALUE_;
};
$APP.goog.i18n.uChar.isLeadSurrogateCodePoint = function($codePoint$$) {
  return $codePoint$$ >= $APP.goog.i18n.uChar.LEAD_SURROGATE_MIN_VALUE_ && $codePoint$$ <= $APP.goog.i18n.uChar.LEAD_SURROGATE_MAX_VALUE_;
};
$APP.goog.i18n.uChar.isTrailSurrogateCodePoint = function($codePoint$$) {
  return $codePoint$$ >= $APP.goog.i18n.uChar.TRAIL_SURROGATE_MIN_VALUE_ && $codePoint$$ <= $APP.goog.i18n.uChar.TRAIL_SURROGATE_MAX_VALUE_;
};
$APP.goog.i18n.uChar.buildSupplementaryCodePoint = function($lead$$, $trail$$) {
  return $APP.goog.i18n.uChar.isLeadSurrogateCodePoint($lead$$) && $APP.goog.i18n.uChar.isTrailSurrogateCodePoint($trail$$) ? ($lead$$ << $APP.goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_) - ($APP.goog.i18n.uChar.LEAD_SURROGATE_MIN_VALUE_ << $APP.goog.i18n.uChar.TRAIL_SURROGATE_BIT_COUNT_) + ($trail$$ - $APP.goog.i18n.uChar.TRAIL_SURROGATE_MIN_VALUE_ + $APP.goog.i18n.uChar.SUPPLEMENTARY_CODE_POINT_MIN_VALUE_) : null;
};
instaparse.gll = {};
instaparse.gll._STAR_diagnostic_char_lookahead_STAR_ = 10;
instaparse.gll.get_parser = function($grammar$$, $p$$) {
  return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($grammar$$, $p$$, $p$$);
};
instaparse.gll._parse = function($parser$$, $index$$, $tramp$$) {
  var $G__41876_G__41876__$1$$ = $APP.cljs$cst$78$tag.cljs$core$IFn$_invoke$arity$1($parser$$);
  $G__41876_G__41876__$1$$ = $G__41876_G__41876__$1$$ instanceof $APP.cljs.core.Keyword ? $G__41876_G__41876__$1$$.fqn : null;
  switch($G__41876_G__41876__$1$$) {
    case "nt":
      return instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.non_terminal_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "alt":
      return instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.alt_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "cat":
      return instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.cat_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "string":
      return instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.string_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "string-ci":
      return instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.string_case_insensitive_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "char":
      return instaparse.gll.char_range_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.char_range_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.char_range_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "epsilon":
      return instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.epsilon_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "opt":
      return instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.opt_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "plus":
      return instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.plus_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "rep":
      return instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.rep_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "star":
      return instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.star_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "regexp":
      return instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.regexp_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "look":
      return instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.lookahead_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "neg":
      return instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.negative_lookahead_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "ord":
      return instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.ordered_alt_parse.call(null, $parser$$, $index$$, $tramp$$);
    default:
      throw Error(["No matching clause: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($G__41876_G__41876__$1$$)].join(""));
  }
};
instaparse.gll._full_parse = function($parser$$, $index$$, $tramp$$) {
  var $G__41877_G__41877__$1$$ = $APP.cljs$cst$78$tag.cljs$core$IFn$_invoke$arity$1($parser$$);
  $G__41877_G__41877__$1$$ = $G__41877_G__41877__$1$$ instanceof $APP.cljs.core.Keyword ? $G__41877_G__41877__$1$$.fqn : null;
  switch($G__41877_G__41877__$1$$) {
    case "nt":
      return instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.non_terminal_full_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "alt":
      return instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.alt_full_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "cat":
      return instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.cat_full_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "string":
      return instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.string_full_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "string-ci":
      return instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.string_case_insensitive_full_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "char":
      return instaparse.gll.char_range_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.char_range_full_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.char_range_full_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "epsilon":
      return instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.epsilon_full_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "opt":
      return instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.opt_full_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "plus":
      return instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.plus_full_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "rep":
      return instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.rep_full_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "star":
      return instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.star_full_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "regexp":
      return instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.regexp_full_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "look":
      return instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.lookahead_full_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "neg":
      return instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.negative_lookahead_parse.call(null, $parser$$, $index$$, $tramp$$);
    case "ord":
      return instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3($parser$$, $index$$, $tramp$$) : instaparse.gll.ordered_alt_full_parse.call(null, $parser$$, $index$$, $tramp$$);
    default:
      throw Error(["No matching clause: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($G__41877_G__41877__$1$$)].join(""));
  }
};
instaparse.gll.Failure = function($index$$, $reason$$, $__meta$$, $__extmap$$, $__hash$$) {
  this.index = $index$$;
  this.reason = $reason$$;
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k41879$$, $else__5326__auto__$$) {
  switch($k41879$$ instanceof $APP.cljs.core.Keyword ? $k41879$$.fqn : null) {
    case "index":
      return this.index;
    case "reason":
      return this.reason;
    default:
      return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k41879$$, $else__5326__auto__$$);
  }
};
instaparse.gll.Failure.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__41884_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__41884_v__5348__auto__$$, 0, null);
    $p__41884_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__41884_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__41884_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__41884_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#instaparse.gll.Failure{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1998$index, this.index], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1827$reason, this.reason], null)], null), this.__extmap));
};
instaparse.gll.Failure.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__41878$$) {
  return new $APP.cljs.core.RecordIter(0, this, 2, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1998$index, $APP.cljs$cst$1827$reason], null), $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
instaparse.gll.Failure.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
instaparse.gll.Failure.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new instaparse.gll.Failure(this.index, this.reason, this.__meta, this.__extmap, this.__hash);
};
instaparse.gll.Failure.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 2 + $APP.cljs.core.count(this.__extmap);
};
instaparse.gll.Failure.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$66_h__5134__auto____$1$jscomp$66_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$66_h__5134__auto____$1$jscomp$66_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$66_h__5134__auto____$1$jscomp$66_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$66_h__5134__auto____$1$jscomp$66_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$66_h__5134__auto____$1$jscomp$66_this__5319__auto__$$ = -1140991288 ^ $APP.cljs.core.hash_unordered_coll(this);
};
instaparse.gll.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this41880$$, $other41881$$) {
  return $other41881$$ != null && this.constructor === $other41881$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.index, $other41881$$.index) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.reason, $other41881$$.reason) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other41881$$.__extmap);
};
instaparse.gll.Failure.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1998$index, null, $APP.cljs$cst$1827$reason, null], null), null), $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), $k__5334__auto__$$) : new instaparse.gll.Failure(this.index, this.reason, this.__meta, 
  $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
instaparse.gll.Failure.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k41879$$) {
  switch($k41879$$ instanceof $APP.cljs.core.Keyword ? $k41879$$.fqn : null) {
    case "index":
    case "reason":
      return !0;
    default:
      return $APP.cljs.core.contains_QMARK_(this.__extmap, $k41879$$);
  }
};
instaparse.gll.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($pred__41889_this__5331__auto__$$, $k__5332__auto__$$, $G__41878$$) {
  $pred__41889_this__5331__auto__$$ = $APP.cljs.core.keyword_identical_QMARK_;
  return $APP.cljs.core.truth_($pred__41889_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41889_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$1998$index, $k__5332__auto__$$) : $pred__41889_this__5331__auto__$$.call(null, $APP.cljs$cst$1998$index, $k__5332__auto__$$)) ? new instaparse.gll.Failure($G__41878$$, this.reason, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__41889_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41889_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$1827$reason, 
  $k__5332__auto__$$) : $pred__41889_this__5331__auto__$$.call(null, $APP.cljs$cst$1827$reason, $k__5332__auto__$$)) ? new instaparse.gll.Failure(this.index, $G__41878$$, this.__meta, this.__extmap, null) : new instaparse.gll.Failure(this.index, this.reason, this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__41878$$), null);
};
instaparse.gll.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.MapEntry($APP.cljs$cst$1998$index, this.index, null), new $APP.cljs.core.MapEntry($APP.cljs$cst$1827$reason, this.reason, null)], null), this.__extmap));
};
instaparse.gll.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__41878$$) {
  return new instaparse.gll.Failure(this.index, this.reason, $G__41878$$, this.__extmap, this.__hash);
};
instaparse.gll.Failure.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
instaparse.gll.Failure.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1336$index, cljs$cst$2015$reason], null);
};
instaparse.gll.Failure.cljs$lang$type = !0;
instaparse.gll.Failure.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "instaparse.gll/Failure", null, 1, null);
};
instaparse.gll.Failure.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "instaparse.gll/Failure");
};
instaparse.gll.__GT_Failure = function($index$$, $reason$$) {
  return new instaparse.gll.Failure($index$$, $reason$$, null, null, null);
};
instaparse.gll.map__GT_Failure = function($G__41882$$) {
  var $G__41892$jscomp$inline_4701_extmap__5365__auto__$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($G__41882$$, $APP.cljs$cst$1998$index, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$1827$reason], 0));
  $G__41892$jscomp$inline_4701_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__41882$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__41892$jscomp$inline_4701_extmap__5365__auto__$$) : $G__41892$jscomp$inline_4701_extmap__5365__auto__$$;
  return new instaparse.gll.Failure($APP.cljs$cst$1998$index.cljs$core$IFn$_invoke$arity$1($G__41882$$), $APP.cljs$cst$1827$reason.cljs$core$IFn$_invoke$arity$1($G__41882$$), null, $APP.cljs.core.not_empty($G__41892$jscomp$inline_4701_extmap__5365__auto__$$), null);
};
instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$ = $APP.cljs.core.PROTOCOL_SENTINEL;
instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($fail$$, $writer$$, $_$$) {
  var $fail__$1$$ = this;
  return $APP.cljs.core._write($writer$$, function() {
    var $sb__5670__auto__$$ = new $APP.goog.string.StringBuffer(), $_STAR_print_newline_STAR__orig_val__41895_42015$$ = $APP.cljs.core._STAR_print_newline_STAR_, $_STAR_print_fn_STAR__orig_val__41896_42016$$ = $APP.cljs.core._STAR_print_fn_STAR_;
    $APP.cljs.core._STAR_print_newline_STAR_ = !0;
    $APP.cljs.core._STAR_print_fn_STAR_ = function($x__5671__auto__$$) {
      return $sb__5670__auto__$$.append($x__5671__auto__$$);
    };
    try {
      instaparse.failure.pprint_failure($fail__$1$$);
    } finally {
      $APP.cljs.core._STAR_print_fn_STAR_ = $_STAR_print_fn_STAR__orig_val__41896_42016$$, $APP.cljs.core._STAR_print_newline_STAR_ = $_STAR_print_newline_STAR__orig_val__41895_42015$$;
    }
    return $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($sb__5670__auto__$$);
  }());
};
instaparse.gll.failure_type = $APP.cljs.core.type(new instaparse.gll.Failure(null, null, null, null, null));
instaparse.gll.text__GT_segment = function($text$$) {
  return $text$$;
};
instaparse.gll.sub_sequence = $APP.cljs.core.subs;
instaparse.gll.Tramp = function($grammar$$, $text$$, $segment$$, $fail_index$$, $node_builder$$, $stack$$, $next_stack$$, $generation$$, $negative_listeners$$, $msg_cache$$, $nodes$$, $success$$, $failure$$, $trace_QMARK_$$, $__meta$$, $__extmap$$, $__hash$$) {
  this.grammar = $grammar$$;
  this.text = $text$$;
  this.segment = $segment$$;
  this.fail_index = $fail_index$$;
  this.node_builder = $node_builder$$;
  this.stack = $stack$$;
  this.next_stack = $next_stack$$;
  this.generation = $generation$$;
  this.negative_listeners = $negative_listeners$$;
  this.msg_cache = $msg_cache$$;
  this.nodes = $nodes$$;
  this.success = $success$$;
  this.failure = $failure$$;
  this.trace_QMARK_ = $trace_QMARK_$$;
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k41903$$, $else__5326__auto__$$) {
  switch($k41903$$ instanceof $APP.cljs.core.Keyword ? $k41903$$.fqn : null) {
    case "grammar":
      return this.grammar;
    case "text":
      return this.text;
    case "segment":
      return this.segment;
    case "fail-index":
      return this.fail_index;
    case "node-builder":
      return this.node_builder;
    case "stack":
      return this.stack;
    case "next-stack":
      return this.next_stack;
    case "generation":
      return this.generation;
    case "negative-listeners":
      return this.negative_listeners;
    case "msg-cache":
      return this.msg_cache;
    case "nodes":
      return this.nodes;
    case "success":
      return this.success;
    case "failure":
      return this.failure;
    case "trace?":
      return this.trace_QMARK_;
    default:
      return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k41903$$, $else__5326__auto__$$);
  }
};
instaparse.gll.Tramp.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__41908_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__41908_v__5348__auto__$$, 0, null);
    $p__41908_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__41908_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__41908_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__41908_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
instaparse.gll.Tramp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#instaparse.gll.Tramp{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 14, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$1996$grammar, this.grammar], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1999$text, this.text], null), new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2016$segment, this.segment], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2017$fail_index, this.fail_index], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2018$node_builder, this.node_builder], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$374$stack, 
  this.stack], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2019$next_stack, this.next_stack], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2020$generation, this.generation], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2021$negative_listeners, this.negative_listeners], null), new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2022$msg_cache, this.msg_cache], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2023$nodes, this.nodes], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2024$success, this.success], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2025$failure, 
  this.failure], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2026$trace_QMARK_, this.trace_QMARK_], null)], null), this.__extmap));
};
instaparse.gll.Tramp.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__41902$$) {
  return new $APP.cljs.core.RecordIter(0, this, 14, new $APP.cljs.core.PersistentVector(null, 14, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$1996$grammar, $APP.cljs$cst$1999$text, cljs$cst$2016$segment, cljs$cst$2017$fail_index, cljs$cst$2018$node_builder, $APP.cljs$cst$374$stack, cljs$cst$2019$next_stack, cljs$cst$2020$generation, cljs$cst$2021$negative_listeners, cljs$cst$2022$msg_cache, $APP.cljs$cst$2023$nodes, $APP.cljs$cst$2024$success, $APP.cljs$cst$2025$failure, cljs$cst$2026$trace_QMARK_], 
  null), $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
instaparse.gll.Tramp.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
instaparse.gll.Tramp.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new instaparse.gll.Tramp(this.grammar, this.text, this.segment, this.fail_index, this.node_builder, this.stack, this.next_stack, this.generation, this.negative_listeners, this.msg_cache, this.nodes, this.success, this.failure, this.trace_QMARK_, this.__meta, this.__extmap, this.__hash);
};
instaparse.gll.Tramp.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 14 + $APP.cljs.core.count(this.__extmap);
};
instaparse.gll.Tramp.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$67_h__5134__auto____$1$jscomp$67_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$67_h__5134__auto____$1$jscomp$67_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$67_h__5134__auto____$1$jscomp$67_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$67_h__5134__auto____$1$jscomp$67_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$67_h__5134__auto____$1$jscomp$67_this__5319__auto__$$ = 166878148 ^ $APP.cljs.core.hash_unordered_coll(this);
};
instaparse.gll.Tramp.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this41904$$, $other41905$$) {
  return $other41905$$ != null && this.constructor === $other41905$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.grammar, $other41905$$.grammar) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.text, $other41905$$.text) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.segment, $other41905$$.segment) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.fail_index, $other41905$$.fail_index) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.node_builder, 
  $other41905$$.node_builder) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.stack, $other41905$$.stack) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.next_stack, $other41905$$.next_stack) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.generation, $other41905$$.generation) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.negative_listeners, $other41905$$.negative_listeners) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.msg_cache, $other41905$$.msg_cache) && 
  $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.nodes, $other41905$$.nodes) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.success, $other41905$$.success) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.failure, $other41905$$.failure) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.trace_QMARK_, $other41905$$.trace_QMARK_) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other41905$$.__extmap);
};
instaparse.gll.Tramp.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 14, [cljs$cst$2022$msg_cache, null, cljs$cst$2021$negative_listeners, null, cljs$cst$2020$generation, null, $APP.cljs$cst$2025$failure, null, cljs$cst$2017$fail_index, null, cljs$cst$1996$grammar, null, $APP.cljs$cst$2024$success, null, $APP.cljs$cst$2023$nodes, null, cljs$cst$2018$node_builder, null, cljs$cst$2016$segment, null, $APP.cljs$cst$374$stack, null, cljs$cst$2026$trace_QMARK_, 
  null, cljs$cst$2019$next_stack, null, $APP.cljs$cst$1999$text, null], null), null), $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), $k__5334__auto__$$) : new instaparse.gll.Tramp(this.grammar, this.text, this.segment, this.fail_index, this.node_builder, this.stack, this.next_stack, this.generation, this.negative_listeners, this.msg_cache, 
  this.nodes, this.success, this.failure, this.trace_QMARK_, this.__meta, $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
instaparse.gll.Tramp.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k41903$$) {
  switch($k41903$$ instanceof $APP.cljs.core.Keyword ? $k41903$$.fqn : null) {
    case "grammar":
    case "text":
    case "segment":
    case "fail-index":
    case "node-builder":
    case "stack":
    case "next-stack":
    case "generation":
    case "negative-listeners":
    case "msg-cache":
    case "nodes":
    case "success":
    case "failure":
    case "trace?":
      return !0;
    default:
      return $APP.cljs.core.contains_QMARK_(this.__extmap, $k41903$$);
  }
};
instaparse.gll.Tramp.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($pred__41917_this__5331__auto__$$, $k__5332__auto__$$, $G__41902$$) {
  $pred__41917_this__5331__auto__$$ = $APP.cljs.core.keyword_identical_QMARK_;
  return $APP.cljs.core.truth_($pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$1996$grammar, $k__5332__auto__$$) : $pred__41917_this__5331__auto__$$.call(null, cljs$cst$1996$grammar, $k__5332__auto__$$)) ? new instaparse.gll.Tramp($G__41902$$, this.text, this.segment, this.fail_index, this.node_builder, this.stack, this.next_stack, this.generation, this.negative_listeners, this.msg_cache, this.nodes, this.success, 
  this.failure, this.trace_QMARK_, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$1999$text, $k__5332__auto__$$) : $pred__41917_this__5331__auto__$$.call(null, $APP.cljs$cst$1999$text, $k__5332__auto__$$)) ? new instaparse.gll.Tramp(this.grammar, $G__41902$$, this.segment, this.fail_index, this.node_builder, this.stack, this.next_stack, this.generation, 
  this.negative_listeners, this.msg_cache, this.nodes, this.success, this.failure, this.trace_QMARK_, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2016$segment, $k__5332__auto__$$) : $pred__41917_this__5331__auto__$$.call(null, cljs$cst$2016$segment, $k__5332__auto__$$)) ? new instaparse.gll.Tramp(this.grammar, this.text, $G__41902$$, this.fail_index, 
  this.node_builder, this.stack, this.next_stack, this.generation, this.negative_listeners, this.msg_cache, this.nodes, this.success, this.failure, this.trace_QMARK_, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2017$fail_index, $k__5332__auto__$$) : $pred__41917_this__5331__auto__$$.call(null, cljs$cst$2017$fail_index, $k__5332__auto__$$)) ? new instaparse.gll.Tramp(this.grammar, 
  this.text, this.segment, $G__41902$$, this.node_builder, this.stack, this.next_stack, this.generation, this.negative_listeners, this.msg_cache, this.nodes, this.success, this.failure, this.trace_QMARK_, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2018$node_builder, $k__5332__auto__$$) : $pred__41917_this__5331__auto__$$.call(null, cljs$cst$2018$node_builder, 
  $k__5332__auto__$$)) ? new instaparse.gll.Tramp(this.grammar, this.text, this.segment, this.fail_index, $G__41902$$, this.stack, this.next_stack, this.generation, this.negative_listeners, this.msg_cache, this.nodes, this.success, this.failure, this.trace_QMARK_, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$374$stack, $k__5332__auto__$$) : $pred__41917_this__5331__auto__$$.call(null, 
  $APP.cljs$cst$374$stack, $k__5332__auto__$$)) ? new instaparse.gll.Tramp(this.grammar, this.text, this.segment, this.fail_index, this.node_builder, $G__41902$$, this.next_stack, this.generation, this.negative_listeners, this.msg_cache, this.nodes, this.success, this.failure, this.trace_QMARK_, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2019$next_stack, 
  $k__5332__auto__$$) : $pred__41917_this__5331__auto__$$.call(null, cljs$cst$2019$next_stack, $k__5332__auto__$$)) ? new instaparse.gll.Tramp(this.grammar, this.text, this.segment, this.fail_index, this.node_builder, this.stack, $G__41902$$, this.generation, this.negative_listeners, this.msg_cache, this.nodes, this.success, this.failure, this.trace_QMARK_, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2020$generation, 
  $k__5332__auto__$$) : $pred__41917_this__5331__auto__$$.call(null, cljs$cst$2020$generation, $k__5332__auto__$$)) ? new instaparse.gll.Tramp(this.grammar, this.text, this.segment, this.fail_index, this.node_builder, this.stack, this.next_stack, $G__41902$$, this.negative_listeners, this.msg_cache, this.nodes, this.success, this.failure, this.trace_QMARK_, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2021$negative_listeners, 
  $k__5332__auto__$$) : $pred__41917_this__5331__auto__$$.call(null, cljs$cst$2021$negative_listeners, $k__5332__auto__$$)) ? new instaparse.gll.Tramp(this.grammar, this.text, this.segment, this.fail_index, this.node_builder, this.stack, this.next_stack, this.generation, $G__41902$$, this.msg_cache, this.nodes, this.success, this.failure, this.trace_QMARK_, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2022$msg_cache, 
  $k__5332__auto__$$) : $pred__41917_this__5331__auto__$$.call(null, cljs$cst$2022$msg_cache, $k__5332__auto__$$)) ? new instaparse.gll.Tramp(this.grammar, this.text, this.segment, this.fail_index, this.node_builder, this.stack, this.next_stack, this.generation, this.negative_listeners, $G__41902$$, this.nodes, this.success, this.failure, this.trace_QMARK_, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$2023$nodes, 
  $k__5332__auto__$$) : $pred__41917_this__5331__auto__$$.call(null, $APP.cljs$cst$2023$nodes, $k__5332__auto__$$)) ? new instaparse.gll.Tramp(this.grammar, this.text, this.segment, this.fail_index, this.node_builder, this.stack, this.next_stack, this.generation, this.negative_listeners, this.msg_cache, $G__41902$$, this.success, this.failure, this.trace_QMARK_, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$2024$success, 
  $k__5332__auto__$$) : $pred__41917_this__5331__auto__$$.call(null, $APP.cljs$cst$2024$success, $k__5332__auto__$$)) ? new instaparse.gll.Tramp(this.grammar, this.text, this.segment, this.fail_index, this.node_builder, this.stack, this.next_stack, this.generation, this.negative_listeners, this.msg_cache, this.nodes, $G__41902$$, this.failure, this.trace_QMARK_, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$2025$failure, 
  $k__5332__auto__$$) : $pred__41917_this__5331__auto__$$.call(null, $APP.cljs$cst$2025$failure, $k__5332__auto__$$)) ? new instaparse.gll.Tramp(this.grammar, this.text, this.segment, this.fail_index, this.node_builder, this.stack, this.next_stack, this.generation, this.negative_listeners, this.msg_cache, this.nodes, this.success, $G__41902$$, this.trace_QMARK_, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41917_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2026$trace_QMARK_, 
  $k__5332__auto__$$) : $pred__41917_this__5331__auto__$$.call(null, cljs$cst$2026$trace_QMARK_, $k__5332__auto__$$)) ? new instaparse.gll.Tramp(this.grammar, this.text, this.segment, this.fail_index, this.node_builder, this.stack, this.next_stack, this.generation, this.negative_listeners, this.msg_cache, this.nodes, this.success, this.failure, $G__41902$$, this.__meta, this.__extmap, null) : new instaparse.gll.Tramp(this.grammar, this.text, this.segment, this.fail_index, this.node_builder, this.stack, 
  this.next_stack, this.generation, this.negative_listeners, this.msg_cache, this.nodes, this.success, this.failure, this.trace_QMARK_, this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__41902$$), null);
};
instaparse.gll.Tramp.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 14, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.MapEntry(cljs$cst$1996$grammar, this.grammar, null), new $APP.cljs.core.MapEntry($APP.cljs$cst$1999$text, this.text, null), new $APP.cljs.core.MapEntry(cljs$cst$2016$segment, this.segment, null), new $APP.cljs.core.MapEntry(cljs$cst$2017$fail_index, this.fail_index, null), new $APP.cljs.core.MapEntry(cljs$cst$2018$node_builder, 
  this.node_builder, null), new $APP.cljs.core.MapEntry($APP.cljs$cst$374$stack, this.stack, null), new $APP.cljs.core.MapEntry(cljs$cst$2019$next_stack, this.next_stack, null), new $APP.cljs.core.MapEntry(cljs$cst$2020$generation, this.generation, null), new $APP.cljs.core.MapEntry(cljs$cst$2021$negative_listeners, this.negative_listeners, null), new $APP.cljs.core.MapEntry(cljs$cst$2022$msg_cache, this.msg_cache, null), new $APP.cljs.core.MapEntry($APP.cljs$cst$2023$nodes, this.nodes, null), new $APP.cljs.core.MapEntry($APP.cljs$cst$2024$success, 
  this.success, null), new $APP.cljs.core.MapEntry($APP.cljs$cst$2025$failure, this.failure, null), new $APP.cljs.core.MapEntry(cljs$cst$2026$trace_QMARK_, this.trace_QMARK_, null)], null), this.__extmap));
};
instaparse.gll.Tramp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__41902$$) {
  return new instaparse.gll.Tramp(this.grammar, this.text, this.segment, this.fail_index, this.node_builder, this.stack, this.next_stack, this.generation, this.negative_listeners, this.msg_cache, this.nodes, this.success, this.failure, this.trace_QMARK_, $G__41902$$, this.__extmap, this.__hash);
};
instaparse.gll.Tramp.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
instaparse.gll.Tramp.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 14, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2027$grammar, $APP.cljs$cst$2028$text, cljs$cst$2029$segment, cljs$cst$2030$fail_index, cljs$cst$2031$node_builder, $APP.cljs$cst$90$stack, cljs$cst$2032$next_stack, cljs$cst$2033$generation, cljs$cst$2034$negative_listeners, cljs$cst$2035$msg_cache, $APP.cljs$cst$85$nodes, $APP.cljs$cst$2036$success, cljs$cst$2037$failure, cljs$cst$2038$trace_QMARK_], null);
};
instaparse.gll.Tramp.cljs$lang$type = !0;
instaparse.gll.Tramp.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "instaparse.gll/Tramp", null, 1, null);
};
instaparse.gll.Tramp.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "instaparse.gll/Tramp");
};
instaparse.gll.__GT_Tramp = function($grammar$$, $text$$, $segment$$, $fail_index$$, $node_builder$$, $stack$$, $next_stack$$, $generation$$, $negative_listeners$$, $msg_cache$$, $nodes$$, $success$$, $failure$$, $trace_QMARK_$$) {
  return new instaparse.gll.Tramp($grammar$$, $text$$, $segment$$, $fail_index$$, $node_builder$$, $stack$$, $next_stack$$, $generation$$, $negative_listeners$$, $msg_cache$$, $nodes$$, $success$$, $failure$$, $trace_QMARK_$$, null, null, null);
};
instaparse.gll.map__GT_Tramp = function($G__41906$$) {
  var $G__41924$jscomp$inline_4703_extmap__5365__auto__$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($G__41906$$, cljs$cst$1996$grammar, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$1999$text, cljs$cst$2016$segment, cljs$cst$2017$fail_index, cljs$cst$2018$node_builder, $APP.cljs$cst$374$stack, cljs$cst$2019$next_stack, cljs$cst$2020$generation, cljs$cst$2021$negative_listeners, cljs$cst$2022$msg_cache, $APP.cljs$cst$2023$nodes, $APP.cljs$cst$2024$success, 
  $APP.cljs$cst$2025$failure, cljs$cst$2026$trace_QMARK_], 0));
  $G__41924$jscomp$inline_4703_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__41906$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__41924$jscomp$inline_4703_extmap__5365__auto__$$) : $G__41924$jscomp$inline_4703_extmap__5365__auto__$$;
  return new instaparse.gll.Tramp(cljs$cst$1996$grammar.cljs$core$IFn$_invoke$arity$1($G__41906$$), $APP.cljs$cst$1999$text.cljs$core$IFn$_invoke$arity$1($G__41906$$), cljs$cst$2016$segment.cljs$core$IFn$_invoke$arity$1($G__41906$$), cljs$cst$2017$fail_index.cljs$core$IFn$_invoke$arity$1($G__41906$$), cljs$cst$2018$node_builder.cljs$core$IFn$_invoke$arity$1($G__41906$$), $APP.cljs$cst$374$stack.cljs$core$IFn$_invoke$arity$1($G__41906$$), cljs$cst$2019$next_stack.cljs$core$IFn$_invoke$arity$1($G__41906$$), 
  cljs$cst$2020$generation.cljs$core$IFn$_invoke$arity$1($G__41906$$), cljs$cst$2021$negative_listeners.cljs$core$IFn$_invoke$arity$1($G__41906$$), cljs$cst$2022$msg_cache.cljs$core$IFn$_invoke$arity$1($G__41906$$), $APP.cljs$cst$2023$nodes.cljs$core$IFn$_invoke$arity$1($G__41906$$), $APP.cljs$cst$2024$success.cljs$core$IFn$_invoke$arity$1($G__41906$$), $APP.cljs$cst$2025$failure.cljs$core$IFn$_invoke$arity$1($G__41906$$), cljs$cst$2026$trace_QMARK_.cljs$core$IFn$_invoke$arity$1($G__41906$$), null, 
  $APP.cljs.core.not_empty($G__41924$jscomp$inline_4703_extmap__5365__auto__$$), null);
};
instaparse.gll.make_tramp = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2 = function($grammar$$, $text$$) {
  return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5($grammar$$, $text$$, instaparse.gll.text__GT_segment($text$$), -1, null);
};
instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3 = function($grammar$$, $text$$, $segment$$) {
  return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5($grammar$$, $text$$, $segment$$, -1, null);
};
instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4 = function($grammar$$, $text$$, $fail_index$$, $node_builder$$) {
  return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5($grammar$$, $text$$, instaparse.gll.text__GT_segment($text$$), $fail_index$$, $node_builder$$);
};
instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5 = function($grammar$$, $text$$, $segment$$, $fail_index$$, $node_builder$$) {
  return new instaparse.gll.Tramp($grammar$$, $text$$, $segment$$, $fail_index$$, $node_builder$$, $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentVector.EMPTY), $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentVector.EMPTY), $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0), $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.sorted_map_by($APP.cljs.core._GT_)), $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY), 
  $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentArrayMap.EMPTY), $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null), $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new instaparse.gll.Failure(0, $APP.cljs.core.PersistentVector.EMPTY, null, null, null)), !1, null, null, null);
};
instaparse.gll.make_tramp.cljs$lang$maxFixedArity = 5;
instaparse.gll.make_success = function($result$$, $index$$) {
  return new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$2039$result, $result$$, $APP.cljs$cst$1998$index, $index$$], null);
};
instaparse.gll.total_success_QMARK_ = function($tramp$$, $s$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count($APP.cljs$cst$1999$text.cljs$core$IFn$_invoke$arity$1($tramp$$)), $APP.cljs$cst$1998$index.cljs$core$IFn$_invoke$arity$1($s$$));
};
instaparse.gll.Node = function($listeners$$, $full_listeners$$, $results$$, $full_results$$, $__meta$$, $__extmap$$, $__hash$$) {
  this.listeners = $listeners$$;
  this.full_listeners = $full_listeners$$;
  this.results = $results$$;
  this.full_results = $full_results$$;
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k41928$$, $else__5326__auto__$$) {
  switch($k41928$$ instanceof $APP.cljs.core.Keyword ? $k41928$$.fqn : null) {
    case "listeners":
      return this.listeners;
    case "full-listeners":
      return this.full_listeners;
    case "results":
      return this.results;
    case "full-results":
      return this.full_results;
    default:
      return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k41928$$, $else__5326__auto__$$);
  }
};
instaparse.gll.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__41933_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__41933_v__5348__auto__$$, 0, null);
    $p__41933_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__41933_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__41933_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__41933_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
instaparse.gll.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#instaparse.gll.Node{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2040$listeners, this.listeners], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2041$full_listeners, this.full_listeners], 
  null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2042$results, this.results], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2043$full_results, this.full_results], null)], null), this.__extmap));
};
instaparse.gll.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__41927$$) {
  return new $APP.cljs.core.RecordIter(0, this, 4, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2040$listeners, cljs$cst$2041$full_listeners, cljs$cst$2042$results, cljs$cst$2043$full_results], null), $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
instaparse.gll.Node.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
instaparse.gll.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new instaparse.gll.Node(this.listeners, this.full_listeners, this.results, this.full_results, this.__meta, this.__extmap, this.__hash);
};
instaparse.gll.Node.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 4 + $APP.cljs.core.count(this.__extmap);
};
instaparse.gll.Node.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$68_h__5134__auto____$1$jscomp$68_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$68_h__5134__auto____$1$jscomp$68_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$68_h__5134__auto____$1$jscomp$68_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$68_h__5134__auto____$1$jscomp$68_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$68_h__5134__auto____$1$jscomp$68_this__5319__auto__$$ = -1610074144 ^ $APP.cljs.core.hash_unordered_coll(this);
};
instaparse.gll.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this41929$$, $other41930$$) {
  return $other41930$$ != null && this.constructor === $other41930$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.listeners, $other41930$$.listeners) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.full_listeners, $other41930$$.full_listeners) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.results, $other41930$$.results) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.full_results, $other41930$$.full_results) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, 
  $other41930$$.__extmap);
};
instaparse.gll.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$2043$full_results, null, cljs$cst$2041$full_listeners, null, $APP.cljs$cst$2040$listeners, null, cljs$cst$2042$results, null], null), null), $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), $k__5334__auto__$$) : 
  new instaparse.gll.Node(this.listeners, this.full_listeners, this.results, this.full_results, this.__meta, $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
instaparse.gll.Node.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k41928$$) {
  switch($k41928$$ instanceof $APP.cljs.core.Keyword ? $k41928$$.fqn : null) {
    case "listeners":
    case "full-listeners":
    case "results":
    case "full-results":
      return !0;
    default:
      return $APP.cljs.core.contains_QMARK_(this.__extmap, $k41928$$);
  }
};
instaparse.gll.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($pred__41938_this__5331__auto__$$, $k__5332__auto__$$, $G__41927$$) {
  $pred__41938_this__5331__auto__$$ = $APP.cljs.core.keyword_identical_QMARK_;
  return $APP.cljs.core.truth_($pred__41938_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41938_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$2040$listeners, $k__5332__auto__$$) : $pred__41938_this__5331__auto__$$.call(null, $APP.cljs$cst$2040$listeners, $k__5332__auto__$$)) ? new instaparse.gll.Node($G__41927$$, this.full_listeners, this.results, this.full_results, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__41938_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? 
  $pred__41938_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2041$full_listeners, $k__5332__auto__$$) : $pred__41938_this__5331__auto__$$.call(null, cljs$cst$2041$full_listeners, $k__5332__auto__$$)) ? new instaparse.gll.Node(this.listeners, $G__41927$$, this.results, this.full_results, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__41938_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41938_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2042$results, 
  $k__5332__auto__$$) : $pred__41938_this__5331__auto__$$.call(null, cljs$cst$2042$results, $k__5332__auto__$$)) ? new instaparse.gll.Node(this.listeners, this.full_listeners, $G__41927$$, this.full_results, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__41938_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__41938_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2043$full_results, $k__5332__auto__$$) : $pred__41938_this__5331__auto__$$.call(null, cljs$cst$2043$full_results, 
  $k__5332__auto__$$)) ? new instaparse.gll.Node(this.listeners, this.full_listeners, this.results, $G__41927$$, this.__meta, this.__extmap, null) : new instaparse.gll.Node(this.listeners, this.full_listeners, this.results, this.full_results, this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__41927$$), null);
};
instaparse.gll.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.MapEntry($APP.cljs$cst$2040$listeners, this.listeners, null), new $APP.cljs.core.MapEntry(cljs$cst$2041$full_listeners, this.full_listeners, null), new $APP.cljs.core.MapEntry(cljs$cst$2042$results, this.results, null), new $APP.cljs.core.MapEntry(cljs$cst$2043$full_results, this.full_results, null)], null), 
  this.__extmap));
};
instaparse.gll.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__41927$$) {
  return new instaparse.gll.Node(this.listeners, this.full_listeners, this.results, this.full_results, $G__41927$$, this.__extmap, this.__hash);
};
instaparse.gll.Node.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
instaparse.gll.Node.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2044$listeners, cljs$cst$2045$full_listeners, cljs$cst$2046$results, cljs$cst$2047$full_results], null);
};
instaparse.gll.Node.cljs$lang$type = !0;
instaparse.gll.Node.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "instaparse.gll/Node", null, 1, null);
};
instaparse.gll.Node.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "instaparse.gll/Node");
};
instaparse.gll.__GT_Node = function($listeners$$, $full_listeners$$, $results$$, $full_results$$) {
  return new instaparse.gll.Node($listeners$$, $full_listeners$$, $results$$, $full_results$$, null, null, null);
};
instaparse.gll.map__GT_Node = function($G__41931$$) {
  var $G__41941$jscomp$inline_4705_extmap__5365__auto__$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($G__41931$$, $APP.cljs$cst$2040$listeners, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2041$full_listeners, cljs$cst$2042$results, cljs$cst$2043$full_results], 0));
  $G__41941$jscomp$inline_4705_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__41931$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__41941$jscomp$inline_4705_extmap__5365__auto__$$) : $G__41941$jscomp$inline_4705_extmap__5365__auto__$$;
  return new instaparse.gll.Node($APP.cljs$cst$2040$listeners.cljs$core$IFn$_invoke$arity$1($G__41931$$), cljs$cst$2041$full_listeners.cljs$core$IFn$_invoke$arity$1($G__41931$$), cljs$cst$2042$results.cljs$core$IFn$_invoke$arity$1($G__41931$$), cljs$cst$2043$full_results.cljs$core$IFn$_invoke$arity$1($G__41931$$), null, $APP.cljs.core.not_empty($G__41941$jscomp$inline_4705_extmap__5365__auto__$$), null);
};
instaparse.gll.make_node = function() {
  return new instaparse.gll.Node($APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentVector.EMPTY), $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentVector.EMPTY), $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentHashSet.EMPTY), $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.PersistentHashSet.EMPTY), null, null, null);
};
instaparse.gll.push_stack = function($tramp$$, $item$$) {
  return $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3($APP.cljs$cst$374$stack.cljs$core$IFn$_invoke$arity$1($tramp$$), $APP.cljs.core.conj, $item$$);
};
instaparse.gll.push_message = function($tramp$$, $listener$$, $result$$) {
  var $cache$$ = cljs$cst$2022$msg_cache.cljs$core$IFn$_invoke$arity$1($tramp$$), $i$jscomp$436_k$$ = $APP.cljs$cst$1998$index.cljs$core$IFn$_invoke$arity$1($result$$);
  $i$jscomp$436_k$$ = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$listener$$, $i$jscomp$436_k$$], null);
  var $c$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.deref($cache$$), $i$jscomp$436_k$$, 0), $f$$ = function() {
    return $listener$$.cljs$core$IFn$_invoke$arity$1 ? $listener$$.cljs$core$IFn$_invoke$arity$1($result$$) : $listener$$.call(null, $result$$);
  };
  $c$$ > $APP.cljs.core.deref(cljs$cst$2020$generation.cljs$core$IFn$_invoke$arity$1($tramp$$)) ? $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs$cst$2019$next_stack.cljs$core$IFn$_invoke$arity$1($tramp$$), $APP.cljs.core.conj, $f$$) : $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3($APP.cljs$cst$374$stack.cljs$core$IFn$_invoke$arity$1($tramp$$), $APP.cljs.core.conj, $f$$);
  return $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4($cache$$, $APP.cljs.core.assoc, $i$jscomp$436_k$$, $c$$ + 1);
};
instaparse.gll.listener_exists_QMARK_ = function($fexpr__41942$jscomp$inline_4707_nodes$jscomp$38_tramp$$, $node_key_temp__5825__auto__$$) {
  $fexpr__41942$jscomp$inline_4707_nodes$jscomp$38_tramp$$ = $APP.cljs$cst$2023$nodes.cljs$core$IFn$_invoke$arity$1($fexpr__41942$jscomp$inline_4707_nodes$jscomp$38_tramp$$);
  $fexpr__41942$jscomp$inline_4707_nodes$jscomp$38_tramp$$ = $APP.cljs.core.deref($fexpr__41942$jscomp$inline_4707_nodes$jscomp$38_tramp$$);
  $node_key_temp__5825__auto__$$ = $fexpr__41942$jscomp$inline_4707_nodes$jscomp$38_tramp$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__41942$jscomp$inline_4707_nodes$jscomp$38_tramp$$.cljs$core$IFn$_invoke$arity$1($node_key_temp__5825__auto__$$) : $fexpr__41942$jscomp$inline_4707_nodes$jscomp$38_tramp$$.call(null, $node_key_temp__5825__auto__$$);
  return $APP.cljs.core.truth_($node_key_temp__5825__auto__$$) ? $APP.cljs.core.count($APP.cljs.core.deref($APP.cljs$cst$2040$listeners.cljs$core$IFn$_invoke$arity$1($node_key_temp__5825__auto__$$))) > 0 : null;
};
instaparse.gll.full_listener_exists_QMARK_ = function($fexpr__41943$jscomp$inline_4709_nodes$jscomp$39_tramp$$, $node_key$jscomp$1_temp__5825__auto__$$) {
  $fexpr__41943$jscomp$inline_4709_nodes$jscomp$39_tramp$$ = $APP.cljs$cst$2023$nodes.cljs$core$IFn$_invoke$arity$1($fexpr__41943$jscomp$inline_4709_nodes$jscomp$39_tramp$$);
  $fexpr__41943$jscomp$inline_4709_nodes$jscomp$39_tramp$$ = $APP.cljs.core.deref($fexpr__41943$jscomp$inline_4709_nodes$jscomp$39_tramp$$);
  $node_key$jscomp$1_temp__5825__auto__$$ = $fexpr__41943$jscomp$inline_4709_nodes$jscomp$39_tramp$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__41943$jscomp$inline_4709_nodes$jscomp$39_tramp$$.cljs$core$IFn$_invoke$arity$1($node_key$jscomp$1_temp__5825__auto__$$) : $fexpr__41943$jscomp$inline_4709_nodes$jscomp$39_tramp$$.call(null, $node_key$jscomp$1_temp__5825__auto__$$);
  return $APP.cljs.core.truth_($node_key$jscomp$1_temp__5825__auto__$$) ? $APP.cljs.core.count($APP.cljs.core.deref(cljs$cst$2041$full_listeners.cljs$core$IFn$_invoke$arity$1($node_key$jscomp$1_temp__5825__auto__$$))) > 0 || $APP.cljs.core.count($APP.cljs.core.deref($APP.cljs$cst$2040$listeners.cljs$core$IFn$_invoke$arity$1($node_key$jscomp$1_temp__5825__auto__$$))) > 0 : null;
};
instaparse.gll.result_exists_QMARK_ = function($fexpr__41944$jscomp$inline_4711_nodes$jscomp$40_tramp$$, $node_key$jscomp$2_temp__5825__auto__$$) {
  $fexpr__41944$jscomp$inline_4711_nodes$jscomp$40_tramp$$ = $APP.cljs$cst$2023$nodes.cljs$core$IFn$_invoke$arity$1($fexpr__41944$jscomp$inline_4711_nodes$jscomp$40_tramp$$);
  $fexpr__41944$jscomp$inline_4711_nodes$jscomp$40_tramp$$ = $APP.cljs.core.deref($fexpr__41944$jscomp$inline_4711_nodes$jscomp$40_tramp$$);
  $node_key$jscomp$2_temp__5825__auto__$$ = $fexpr__41944$jscomp$inline_4711_nodes$jscomp$40_tramp$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__41944$jscomp$inline_4711_nodes$jscomp$40_tramp$$.cljs$core$IFn$_invoke$arity$1($node_key$jscomp$2_temp__5825__auto__$$) : $fexpr__41944$jscomp$inline_4711_nodes$jscomp$40_tramp$$.call(null, $node_key$jscomp$2_temp__5825__auto__$$);
  return $APP.cljs.core.truth_($node_key$jscomp$2_temp__5825__auto__$$) ? $APP.cljs.core.count($APP.cljs.core.deref(cljs$cst$2043$full_results.cljs$core$IFn$_invoke$arity$1($node_key$jscomp$2_temp__5825__auto__$$))) > 0 || $APP.cljs.core.count($APP.cljs.core.deref(cljs$cst$2042$results.cljs$core$IFn$_invoke$arity$1($node_key$jscomp$2_temp__5825__auto__$$))) > 0 : null;
};
instaparse.gll.full_result_exists_QMARK_ = function($fexpr__41945$jscomp$inline_4713_nodes$jscomp$41_tramp$$, $node_key$jscomp$3_temp__5825__auto__$$) {
  $fexpr__41945$jscomp$inline_4713_nodes$jscomp$41_tramp$$ = $APP.cljs$cst$2023$nodes.cljs$core$IFn$_invoke$arity$1($fexpr__41945$jscomp$inline_4713_nodes$jscomp$41_tramp$$);
  $fexpr__41945$jscomp$inline_4713_nodes$jscomp$41_tramp$$ = $APP.cljs.core.deref($fexpr__41945$jscomp$inline_4713_nodes$jscomp$41_tramp$$);
  $node_key$jscomp$3_temp__5825__auto__$$ = $fexpr__41945$jscomp$inline_4713_nodes$jscomp$41_tramp$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__41945$jscomp$inline_4713_nodes$jscomp$41_tramp$$.cljs$core$IFn$_invoke$arity$1($node_key$jscomp$3_temp__5825__auto__$$) : $fexpr__41945$jscomp$inline_4713_nodes$jscomp$41_tramp$$.call(null, $node_key$jscomp$3_temp__5825__auto__$$);
  return $APP.cljs.core.truth_($node_key$jscomp$3_temp__5825__auto__$$) ? $APP.cljs.core.count($APP.cljs.core.deref(cljs$cst$2043$full_results.cljs$core$IFn$_invoke$arity$1($node_key$jscomp$3_temp__5825__auto__$$))) > 0 : null;
};
instaparse.gll.node_get = function($nodes$jscomp$42_tramp$$, $node_key$$) {
  $nodes$jscomp$42_tramp$$ = $APP.cljs$cst$2023$nodes.cljs$core$IFn$_invoke$arity$1($nodes$jscomp$42_tramp$$);
  var $fexpr__41946$jscomp$inline_4715_node$jscomp$186_temp__5823__auto__$$ = $APP.cljs.core.deref($nodes$jscomp$42_tramp$$);
  $fexpr__41946$jscomp$inline_4715_node$jscomp$186_temp__5823__auto__$$ = $fexpr__41946$jscomp$inline_4715_node$jscomp$186_temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__41946$jscomp$inline_4715_node$jscomp$186_temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1($node_key$$) : $fexpr__41946$jscomp$inline_4715_node$jscomp$186_temp__5823__auto__$$.call(null, $node_key$$);
  if ($APP.cljs.core.truth_($fexpr__41946$jscomp$inline_4715_node$jscomp$186_temp__5823__auto__$$)) {
    return $fexpr__41946$jscomp$inline_4715_node$jscomp$186_temp__5823__auto__$$;
  }
  $fexpr__41946$jscomp$inline_4715_node$jscomp$186_temp__5823__auto__$$ = instaparse.gll.make_node();
  $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4($nodes$jscomp$42_tramp$$, $APP.cljs.core.assoc, $node_key$$, $fexpr__41946$jscomp$inline_4715_node$jscomp$186_temp__5823__auto__$$);
  return $fexpr__41946$jscomp$inline_4715_node$jscomp$186_temp__5823__auto__$$;
};
instaparse.gll.safe_with_meta = function($obj$$, $metamap$$) {
  return ($obj$$ != null ? $obj$$.cljs$lang$protocol_mask$partition0$ & 262144 || $APP.cljs.core.PROTOCOL_SENTINEL === $obj$$.cljs$core$IWithMeta$ || ($obj$$.cljs$lang$protocol_mask$partition0$ ? 0 : $APP.cljs.core.native_satisfies_QMARK_($APP.cljs.core.IWithMeta, $obj$$)) : $APP.cljs.core.native_satisfies_QMARK_($APP.cljs.core.IWithMeta, $obj$$)) ? $APP.cljs.core.with_meta($obj$$, $metamap$$) : $obj$$;
};
instaparse.gll.push_result = function($tramp$$, $node_key$$, $G__42063_chunk__41954_result$$) {
  var $c__5548__auto__$jscomp$17_node$jscomp$187_seq__41953_temp__5825__auto__$$ = instaparse.gll.node_get($tramp$$, $node_key$$), $parser$$ = $node_key$$.cljs$core$IFn$_invoke$arity$1 ? $node_key$$.cljs$core$IFn$_invoke$arity$1(1) : $node_key$$.call(null, 1), $result__$1$$ = $APP.cljs.core.truth_(cljs$cst$1991$hide.cljs$core$IFn$_invoke$arity$1($parser$$)) ? $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__42063_chunk__41954_result$$, $APP.cljs$cst$2039$result, null) : $G__42063_chunk__41954_result$$, 
  $result__$2$$ = function() {
    var $temp__5823__auto__$$ = $APP.cljs$cst$1994$red.cljs$core$IFn$_invoke$arity$1($parser$$);
    return $APP.cljs.core.truth_($temp__5823__auto__$$) ? instaparse.gll.make_success(instaparse.gll.safe_with_meta(instaparse.reduction.apply_reduction($temp__5823__auto__$$, $APP.cljs$cst$2039$result.cljs$core$IFn$_invoke$arity$1($result__$1$$)), new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$2048$instaparse_DOT_gll_SLASH_start_index, $node_key$$.cljs$core$IFn$_invoke$arity$1 ? $node_key$$.cljs$core$IFn$_invoke$arity$1(0) : $node_key$$.call(null, 0), cljs$cst$2049$instaparse_DOT_gll_SLASH_end_index, 
    $APP.cljs$cst$1998$index.cljs$core$IFn$_invoke$arity$1($result__$1$$)], null)), $APP.cljs$cst$1998$index.cljs$core$IFn$_invoke$arity$1($result__$1$$)) : $result__$1$$;
  }(), $results$$ = ($G__42063_chunk__41954_result$$ = instaparse.gll.total_success_QMARK_($tramp$$, $result__$2$$)) ? cljs$cst$2043$full_results.cljs$core$IFn$_invoke$arity$1($c__5548__auto__$jscomp$17_node$jscomp$187_seq__41953_temp__5825__auto__$$) : cljs$cst$2042$results.cljs$core$IFn$_invoke$arity$1($c__5548__auto__$jscomp$17_node$jscomp$187_seq__41953_temp__5825__auto__$$);
  if ($APP.cljs.core.not(function() {
    var $fexpr__41948$$ = $APP.cljs.core.deref($results$$);
    return $fexpr__41948$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__41948$$.cljs$core$IFn$_invoke$arity$1($result__$2$$) : $fexpr__41948$$.call(null, $result__$2$$);
  }())) {
    $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3($results$$, $APP.cljs.core.conj, $result__$2$$);
    for (var $G__42064_c__5548__auto___42047_listener$$ = $APP.cljs.core.seq($APP.cljs.core.deref($APP.cljs$cst$2040$listeners.cljs$core$IFn$_invoke$arity$1($c__5548__auto__$jscomp$17_node$jscomp$187_seq__41953_temp__5825__auto__$$))), $G__42049_G__42062_chunk__41950_42036_count__41955_seq__41949_42046__$1$$ = null, $G__42050_count__41951_42037_i__41956$$ = 0, $G__42048_i__41952_42038$$ = 0;;) {
      if ($G__42048_i__41952_42038$$ < $G__42050_count__41951_42037_i__41956$$) {
        var $listener_42039$$ = $G__42049_G__42062_chunk__41950_42036_count__41955_seq__41949_42046__$1$$.cljs$core$IIndexed$_nth$arity$2(null, $G__42048_i__41952_42038$$);
        instaparse.gll.push_message($tramp$$, $listener_42039$$, $result__$2$$);
        $G__42048_i__41952_42038$$ += 1;
      } else {
        if ($G__42064_c__5548__auto___42047_listener$$ = $APP.cljs.core.seq($G__42064_c__5548__auto___42047_listener$$)) {
          $G__42049_G__42062_chunk__41950_42036_count__41955_seq__41949_42046__$1$$ = $G__42064_c__5548__auto___42047_listener$$, $APP.cljs.core.chunked_seq_QMARK_($G__42049_G__42062_chunk__41950_42036_count__41955_seq__41949_42046__$1$$) ? ($G__42064_c__5548__auto___42047_listener$$ = $APP.cljs.core.chunk_first($G__42049_G__42062_chunk__41950_42036_count__41955_seq__41949_42046__$1$$), $G__42048_i__41952_42038$$ = $APP.cljs.core.chunk_rest($G__42049_G__42062_chunk__41950_42036_count__41955_seq__41949_42046__$1$$), 
          $G__42049_G__42062_chunk__41950_42036_count__41955_seq__41949_42046__$1$$ = $G__42064_c__5548__auto___42047_listener$$, $G__42050_count__41951_42037_i__41956$$ = $APP.cljs.core.count($G__42064_c__5548__auto___42047_listener$$), $G__42064_c__5548__auto___42047_listener$$ = $G__42048_i__41952_42038$$) : ($G__42064_c__5548__auto___42047_listener$$ = $APP.cljs.core.first($G__42049_G__42062_chunk__41950_42036_count__41955_seq__41949_42046__$1$$), instaparse.gll.push_message($tramp$$, $G__42064_c__5548__auto___42047_listener$$, 
          $result__$2$$), $G__42064_c__5548__auto___42047_listener$$ = $APP.cljs.core.next($G__42049_G__42062_chunk__41950_42036_count__41955_seq__41949_42046__$1$$), $G__42049_G__42062_chunk__41950_42036_count__41955_seq__41949_42046__$1$$ = null, $G__42050_count__41951_42037_i__41956$$ = 0), $G__42048_i__41952_42038$$ = 0;
        } else {
          break;
        }
      }
    }
    if ($G__42063_chunk__41954_result$$) {
      for ($c__5548__auto__$jscomp$17_node$jscomp$187_seq__41953_temp__5825__auto__$$ = $APP.cljs.core.seq($APP.cljs.core.deref(cljs$cst$2041$full_listeners.cljs$core$IFn$_invoke$arity$1($c__5548__auto__$jscomp$17_node$jscomp$187_seq__41953_temp__5825__auto__$$))), $G__42063_chunk__41954_result$$ = null, $G__42050_count__41951_42037_i__41956$$ = $G__42049_G__42062_chunk__41950_42036_count__41955_seq__41949_42046__$1$$ = 0;;) {
        if ($G__42050_count__41951_42037_i__41956$$ < $G__42049_G__42062_chunk__41950_42036_count__41955_seq__41949_42046__$1$$) {
          $G__42064_c__5548__auto___42047_listener$$ = $G__42063_chunk__41954_result$$.cljs$core$IIndexed$_nth$arity$2(null, $G__42050_count__41951_42037_i__41956$$), instaparse.gll.push_message($tramp$$, $G__42064_c__5548__auto___42047_listener$$, $result__$2$$), $G__42050_count__41951_42037_i__41956$$ += 1;
        } else {
          if ($c__5548__auto__$jscomp$17_node$jscomp$187_seq__41953_temp__5825__auto__$$ = $APP.cljs.core.seq($c__5548__auto__$jscomp$17_node$jscomp$187_seq__41953_temp__5825__auto__$$)) {
            $G__42063_chunk__41954_result$$ = $c__5548__auto__$jscomp$17_node$jscomp$187_seq__41953_temp__5825__auto__$$, $APP.cljs.core.chunked_seq_QMARK_($G__42063_chunk__41954_result$$) ? ($c__5548__auto__$jscomp$17_node$jscomp$187_seq__41953_temp__5825__auto__$$ = $APP.cljs.core.chunk_first($G__42063_chunk__41954_result$$), $G__42049_G__42062_chunk__41950_42036_count__41955_seq__41949_42046__$1$$ = $APP.cljs.core.chunk_rest($G__42063_chunk__41954_result$$), $G__42063_chunk__41954_result$$ = $c__5548__auto__$jscomp$17_node$jscomp$187_seq__41953_temp__5825__auto__$$, 
            $G__42064_c__5548__auto___42047_listener$$ = $APP.cljs.core.count($c__5548__auto__$jscomp$17_node$jscomp$187_seq__41953_temp__5825__auto__$$), $c__5548__auto__$jscomp$17_node$jscomp$187_seq__41953_temp__5825__auto__$$ = $G__42049_G__42062_chunk__41950_42036_count__41955_seq__41949_42046__$1$$, $G__42049_G__42062_chunk__41950_42036_count__41955_seq__41949_42046__$1$$ = $G__42064_c__5548__auto___42047_listener$$) : ($G__42064_c__5548__auto___42047_listener$$ = $APP.cljs.core.first($G__42063_chunk__41954_result$$), 
            instaparse.gll.push_message($tramp$$, $G__42064_c__5548__auto___42047_listener$$, $result__$2$$), $c__5548__auto__$jscomp$17_node$jscomp$187_seq__41953_temp__5825__auto__$$ = $APP.cljs.core.next($G__42063_chunk__41954_result$$), $G__42063_chunk__41954_result$$ = null, $G__42049_G__42062_chunk__41950_42036_count__41955_seq__41949_42046__$1$$ = 0), $G__42050_count__41951_42037_i__41956$$ = 0;
          } else {
            return null;
          }
        }
      }
    } else {
      return null;
    }
  } else {
    return null;
  }
};
instaparse.gll.push_listener = function($tramp$$, $node_key$$, $listener$$) {
  var $listener_already_exists_QMARK_$$ = instaparse.gll.listener_exists_QMARK_($tramp$$, $node_key$$), $c__5548__auto___42108_node$$ = instaparse.gll.node_get($tramp$$, $node_key$$), $G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$ = $APP.cljs$cst$2040$listeners.cljs$core$IFn$_invoke$arity$1($c__5548__auto___42108_node$$);
  $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3($G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$, $APP.cljs.core.conj, $listener$$);
  $G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$ = $APP.cljs.core.seq($APP.cljs.core.deref(cljs$cst$2042$results.cljs$core$IFn$_invoke$arity$1($c__5548__auto___42108_node$$)));
  for (var $G__42088_G__42111_chunk__41958_42074_count__41963_42098_seq__41957_42085__$1$$ = null, $G__42089_G__42109_count__41959_42075_i__41964_42099$$ = 0, $G__42087_i__41960_42076_result_42100$$ = 0;;) {
    if ($G__42087_i__41960_42076_result_42100$$ < $G__42089_G__42109_count__41959_42075_i__41964_42099$$) {
      var $result_42078$$ = $G__42088_G__42111_chunk__41958_42074_count__41963_42098_seq__41957_42085__$1$$.cljs$core$IIndexed$_nth$arity$2(null, $G__42087_i__41960_42076_result_42100$$);
      instaparse.gll.push_message($tramp$$, $listener$$, $result_42078$$);
      $G__42087_i__41960_42076_result_42100$$ += 1;
    } else {
      if ($G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$ = $APP.cljs.core.seq($G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$)) {
        $G__42088_G__42111_chunk__41958_42074_count__41963_42098_seq__41957_42085__$1$$ = $G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$, $APP.cljs.core.chunked_seq_QMARK_($G__42088_G__42111_chunk__41958_42074_count__41963_42098_seq__41957_42085__$1$$) ? ($G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$ = $APP.cljs.core.chunk_first($G__42088_G__42111_chunk__41958_42074_count__41963_42098_seq__41957_42085__$1$$), $G__42087_i__41960_42076_result_42100$$ = $APP.cljs.core.chunk_rest($G__42088_G__42111_chunk__41958_42074_count__41963_42098_seq__41957_42085__$1$$), 
        $G__42088_G__42111_chunk__41958_42074_count__41963_42098_seq__41957_42085__$1$$ = $G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$, $G__42089_G__42109_count__41959_42075_i__41964_42099$$ = $APP.cljs.core.count($G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$), $G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$ = $G__42087_i__41960_42076_result_42100$$) : ($G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$ = $APP.cljs.core.first($G__42088_G__42111_chunk__41958_42074_count__41963_42098_seq__41957_42085__$1$$), 
        instaparse.gll.push_message($tramp$$, $listener$$, $G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$), $G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$ = $APP.cljs.core.next($G__42088_G__42111_chunk__41958_42074_count__41963_42098_seq__41957_42085__$1$$), $G__42088_G__42111_chunk__41958_42074_count__41963_42098_seq__41957_42085__$1$$ = null, $G__42089_G__42109_count__41959_42075_i__41964_42099$$ = 0), $G__42087_i__41960_42076_result_42100$$ = 0;
      } else {
        break;
      }
    }
  }
  $c__5548__auto___42108_node$$ = $APP.cljs.core.seq($APP.cljs.core.deref(cljs$cst$2043$full_results.cljs$core$IFn$_invoke$arity$1($c__5548__auto___42108_node$$)));
  $G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$ = null;
  for ($G__42089_G__42109_count__41959_42075_i__41964_42099$$ = $G__42088_G__42111_chunk__41958_42074_count__41963_42098_seq__41957_42085__$1$$ = 0;;) {
    if ($G__42089_G__42109_count__41959_42075_i__41964_42099$$ < $G__42088_G__42111_chunk__41958_42074_count__41963_42098_seq__41957_42085__$1$$) {
      $G__42087_i__41960_42076_result_42100$$ = $G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$.cljs$core$IIndexed$_nth$arity$2(null, $G__42089_G__42109_count__41959_42075_i__41964_42099$$), instaparse.gll.push_message($tramp$$, $listener$$, $G__42087_i__41960_42076_result_42100$$), $G__42089_G__42109_count__41959_42075_i__41964_42099$$ += 1;
    } else {
      if ($c__5548__auto___42108_node$$ = $APP.cljs.core.seq($c__5548__auto___42108_node$$)) {
        $G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$ = $c__5548__auto___42108_node$$, $APP.cljs.core.chunked_seq_QMARK_($G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$) ? ($c__5548__auto___42108_node$$ = $APP.cljs.core.chunk_first($G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$), $G__42089_G__42109_count__41959_42075_i__41964_42099$$ = $APP.cljs.core.chunk_rest($G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$), $G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$ = 
        $c__5548__auto___42108_node$$, $G__42088_G__42111_chunk__41958_42074_count__41963_42098_seq__41957_42085__$1$$ = $APP.cljs.core.count($c__5548__auto___42108_node$$), $c__5548__auto___42108_node$$ = $G__42089_G__42109_count__41959_42075_i__41964_42099$$) : ($c__5548__auto___42108_node$$ = $APP.cljs.core.first($G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$), instaparse.gll.push_message($tramp$$, $listener$$, $c__5548__auto___42108_node$$), $c__5548__auto___42108_node$$ = $APP.cljs.core.next($G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$), 
        $G__42110_c__5548__auto___42086_chunk__41962_42097_listeners$$ = null, $G__42088_G__42111_chunk__41958_42074_count__41963_42098_seq__41957_42085__$1$$ = 0), $G__42089_G__42109_count__41959_42075_i__41964_42099$$ = 0;
      } else {
        break;
      }
    }
  }
  return $APP.cljs.core.not($listener_already_exists_QMARK_$$) ? instaparse.gll.push_stack($tramp$$, function() {
    return instaparse.gll._parse($node_key$$.cljs$core$IFn$_invoke$arity$1 ? $node_key$$.cljs$core$IFn$_invoke$arity$1(1) : $node_key$$.call(null, 1), $node_key$$.cljs$core$IFn$_invoke$arity$1 ? $node_key$$.cljs$core$IFn$_invoke$arity$1(0) : $node_key$$.call(null, 0), $tramp$$);
  }) : null;
};
instaparse.gll.push_full_listener = function($tramp$$, $node_key$$, $listener$$) {
  var $full_listener_already_exists_QMARK_$$ = instaparse.gll.full_listener_exists_QMARK_($tramp$$, $node_key$$), $c__5548__auto___42133_node$$ = instaparse.gll.node_get($tramp$$, $node_key$$), $G__42135_chunk__41966_42119_listeners$$ = cljs$cst$2041$full_listeners.cljs$core$IFn$_invoke$arity$1($c__5548__auto___42133_node$$);
  $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3($G__42135_chunk__41966_42119_listeners$$, $APP.cljs.core.conj, $listener$$);
  $c__5548__auto___42133_node$$ = $APP.cljs.core.seq($APP.cljs.core.deref(cljs$cst$2043$full_results.cljs$core$IFn$_invoke$arity$1($c__5548__auto___42133_node$$)));
  $G__42135_chunk__41966_42119_listeners$$ = null;
  for (var $G__42136_count__41967_42120$$ = 0, $G__42134_i__41968_42121$$ = 0;;) {
    if ($G__42134_i__41968_42121$$ < $G__42136_count__41967_42120$$) {
      var $result_42122$$ = $G__42135_chunk__41966_42119_listeners$$.cljs$core$IIndexed$_nth$arity$2(null, $G__42134_i__41968_42121$$);
      instaparse.gll.push_message($tramp$$, $listener$$, $result_42122$$);
      $G__42134_i__41968_42121$$ += 1;
    } else {
      if ($c__5548__auto___42133_node$$ = $APP.cljs.core.seq($c__5548__auto___42133_node$$)) {
        $G__42135_chunk__41966_42119_listeners$$ = $c__5548__auto___42133_node$$, $APP.cljs.core.chunked_seq_QMARK_($G__42135_chunk__41966_42119_listeners$$) ? ($c__5548__auto___42133_node$$ = $APP.cljs.core.chunk_first($G__42135_chunk__41966_42119_listeners$$), $G__42134_i__41968_42121$$ = $APP.cljs.core.chunk_rest($G__42135_chunk__41966_42119_listeners$$), $G__42135_chunk__41966_42119_listeners$$ = $c__5548__auto___42133_node$$, $G__42136_count__41967_42120$$ = $APP.cljs.core.count($c__5548__auto___42133_node$$), 
        $c__5548__auto___42133_node$$ = $G__42134_i__41968_42121$$) : ($c__5548__auto___42133_node$$ = $APP.cljs.core.first($G__42135_chunk__41966_42119_listeners$$), instaparse.gll.push_message($tramp$$, $listener$$, $c__5548__auto___42133_node$$), $c__5548__auto___42133_node$$ = $APP.cljs.core.next($G__42135_chunk__41966_42119_listeners$$), $G__42135_chunk__41966_42119_listeners$$ = null, $G__42136_count__41967_42120$$ = 0), $G__42134_i__41968_42121$$ = 0;
      } else {
        break;
      }
    }
  }
  return $APP.cljs.core.not($full_listener_already_exists_QMARK_$$) ? instaparse.gll.push_stack($tramp$$, function() {
    return instaparse.gll._full_parse($node_key$$.cljs$core$IFn$_invoke$arity$1 ? $node_key$$.cljs$core$IFn$_invoke$arity$1(1) : $node_key$$.call(null, 1), $node_key$$.cljs$core$IFn$_invoke$arity$1 ? $node_key$$.cljs$core$IFn$_invoke$arity$1(0) : $node_key$$.call(null, 0), $tramp$$);
  }) : null;
};
instaparse.gll.merge_negative_listeners = $APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.merge_with, $APP.cljs.core.into);
instaparse.gll.push_negative_listener = function($tramp$$, $creator$$, $negative_listener$$) {
  return $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs$cst$2021$negative_listeners.cljs$core$IFn$_invoke$arity$1($tramp$$), instaparse.gll.merge_negative_listeners, $APP.cljs.core.PersistentArrayMap.createAsIfByAssoc([$creator$$.cljs$core$IFn$_invoke$arity$1 ? $creator$$.cljs$core$IFn$_invoke$arity$1(0) : $creator$$.call(null, 0), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$negative_listener$$], null)]));
};
instaparse.gll.fail = function($tramp$$, $node_key$$, $index$$, $reason$$) {
  $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$2025$failure.cljs$core$IFn$_invoke$arity$1($tramp$$), function($failure$$) {
    var $G__41969_current_index$$ = $APP.cljs$cst$1998$index.cljs$core$IFn$_invoke$arity$1($failure$$);
    $G__41969_current_index$$ = $APP.cljs.core.compare($index$$, $G__41969_current_index$$);
    switch($G__41969_current_index$$) {
      case 1:
        return new instaparse.gll.Failure($index$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$reason$$], null), null, null, null);
      case 0:
        return new instaparse.gll.Failure($index$$, $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$1827$reason.cljs$core$IFn$_invoke$arity$1($failure$$), $reason$$), null, null, null);
      case -1:
        return $failure$$;
      default:
        throw Error(["No matching clause: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($G__41969_current_index$$)].join(""));
    }
  });
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($index$$, cljs$cst$2017$fail_index.cljs$core$IFn$_invoke$arity$1($tramp$$)) ? instaparse.gll.push_result($tramp$$, $node_key$$, instaparse.gll.make_success(function() {
    var $G__41970$$ = cljs$cst$2018$node_builder.cljs$core$IFn$_invoke$arity$1($tramp$$), $G__41971$$ = cljs$cst$2050$instaparse_SLASH_failure;
    var $G__41972_G__41975$$ = $APP.cljs$cst$1999$text.cljs$core$IFn$_invoke$arity$1($tramp$$);
    $G__41972_G__41975$$ = instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2($G__41972_G__41975$$, $index$$) : instaparse.gll.sub_sequence.call(null, $G__41972_G__41975$$, $index$$);
    var $G__41974$$ = $APP.cljs.core.count($APP.cljs$cst$1999$text.cljs$core$IFn$_invoke$arity$1($tramp$$));
    return instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5($G__41970$$, $G__41971$$, $G__41972_G__41975$$, $index$$, $G__41974$$) : instaparse.gll.build_node_with_meta.call(null, $G__41970$$, $G__41971$$, $G__41972_G__41975$$, $index$$, $G__41974$$);
  }(), $APP.cljs.core.count($APP.cljs$cst$1999$text.cljs$core$IFn$_invoke$arity$1($tramp$$)))) : null;
};
instaparse.gll.step = function($stack$$) {
  var $top$$ = $APP.cljs.core.peek($APP.cljs.core.deref($stack$$));
  $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2($stack$$, $APP.cljs.core.pop);
  return $top$$.cljs$core$IFn$_invoke$arity$0 ? $top$$.cljs$core$IFn$_invoke$arity$0() : $top$$.call(null);
};
instaparse.gll.run = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
instaparse.gll.run.cljs$core$IFn$_invoke$arity$1 = function($tramp$$) {
  return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2($tramp$$, null);
};
instaparse.gll.run.cljs$core$IFn$_invoke$arity$2 = function($tramp$$, $found_result_QMARK__next_stack$$) {
  for (;;) {
    var $index$jscomp$148_stack$$ = $APP.cljs$cst$374$stack.cljs$core$IFn$_invoke$arity$1($tramp$$);
    if ($APP.cljs.core.truth_($APP.cljs.core.deref($APP.cljs$cst$2024$success.cljs$core$IFn$_invoke$arity$1($tramp$$)))) {
      return $APP.cljs.core.cons($APP.cljs$cst$2039$result.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.deref($APP.cljs$cst$2024$success.cljs$core$IFn$_invoke$arity$1($tramp$$))), new $APP.cljs.core.LazySeq(null, function($tramp$$, $found_result_QMARK_$$, $stack$$) {
        return function() {
          $APP.cljs.core.reset_BANG_($APP.cljs$cst$2024$success.cljs$core$IFn$_invoke$arity$1($tramp$$), null);
          return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2($tramp$$, !0);
        };
      }($tramp$$, $found_result_QMARK__next_stack$$, $index$jscomp$148_stack$$), null, null));
    }
    if ($APP.cljs.core.count($APP.cljs.core.deref($index$jscomp$148_stack$$)) > 0) {
      instaparse.gll.step($index$jscomp$148_stack$$);
    } else {
      if ($APP.cljs.core.count($APP.cljs.core.deref(cljs$cst$2021$negative_listeners.cljs$core$IFn$_invoke$arity$1($tramp$$))) > 0) {
        var $listeners$$ = $APP.cljs.core.first($APP.cljs.core.deref(cljs$cst$2021$negative_listeners.cljs$core$IFn$_invoke$arity$1($tramp$$)));
        $index$jscomp$148_stack$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($listeners$$, 0, null);
        $listeners$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($listeners$$, 1, null);
        var $listener$$ = $APP.cljs.core.peek($listeners$$);
        $listener$$.cljs$core$IFn$_invoke$arity$0 ? $listener$$.cljs$core$IFn$_invoke$arity$0() : $listener$$.call(null);
        $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count($listeners$$), 1) ? $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs$cst$2021$negative_listeners.cljs$core$IFn$_invoke$arity$1($tramp$$), $APP.cljs.core.dissoc, $index$jscomp$148_stack$$) : $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs$cst$2021$negative_listeners.cljs$core$IFn$_invoke$arity$1($tramp$$), $APP.cljs.core.update_in, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
        [$index$jscomp$148_stack$$], null), $APP.cljs.core.pop);
      } else {
        if ($APP.cljs.core.truth_($found_result_QMARK__next_stack$$)) {
          $found_result_QMARK__next_stack$$ = cljs$cst$2019$next_stack.cljs$core$IFn$_invoke$arity$1($tramp$$), $APP.cljs.core.reset_BANG_($index$jscomp$148_stack$$, $APP.cljs.core.deref($found_result_QMARK__next_stack$$)), $APP.cljs.core.reset_BANG_($found_result_QMARK__next_stack$$, $APP.cljs.core.PersistentVector.EMPTY), $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs$cst$2020$generation.cljs$core$IFn$_invoke$arity$1($tramp$$), $APP.cljs.core.inc), $found_result_QMARK__next_stack$$ = 
          null;
        } else {
          return null;
        }
      }
    }
  }
};
instaparse.gll.run.cljs$lang$maxFixedArity = 2;
instaparse.gll.NodeListener = function($node_key$$, $tramp$$) {
  return function($result$$) {
    return instaparse.gll.push_result($tramp$$, $node_key$$, $result$$);
  };
};
instaparse.gll.LookListener = function($node_key$$, $tramp$$) {
  return function($result$$) {
    return instaparse.gll.push_result($tramp$$, $node_key$$, instaparse.gll.make_success(null, $node_key$$.cljs$core$IFn$_invoke$arity$1 ? $node_key$$.cljs$core$IFn$_invoke$arity$1(0) : $node_key$$.call(null, 0)));
  };
};
instaparse.gll.CatListener = function($results_so_far$$, $parser_sequence$$, $node_key$$, $tramp$$) {
  return function($JSCompiler_temp_const$jscomp$714_parsed_result_result$$) {
    var $JSCompiler_temp_const$$ = $APP.cljs.core.__destructure_map($JSCompiler_temp_const$jscomp$714_parsed_result_result$$);
    $JSCompiler_temp_const$jscomp$714_parsed_result_result$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$$, $APP.cljs$cst$2039$result);
    var $JSCompiler_temp_const$jscomp$0$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$$, $APP.cljs$cst$1998$index), $JSCompiler_inline_result$$ = instaparse.auto_flatten_seq.conj_flat($results_so_far$$, $JSCompiler_temp_const$jscomp$714_parsed_result_result$$);
    if ($APP.cljs.core.seq($parser_sequence$$)) {
      $JSCompiler_temp_const$jscomp$714_parsed_result_result$$ = instaparse.gll;
      $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$714_parsed_result_result$$.push_listener;
      $JSCompiler_temp_const$jscomp$0$$ = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$JSCompiler_temp_const$jscomp$0$$, $APP.cljs.core.first($parser_sequence$$)], null);
      var $G__41984$$ = $APP.cljs.core.next($parser_sequence$$);
      $JSCompiler_inline_result$$ = instaparse.gll.CatListener.cljs$core$IFn$_invoke$arity$4 ? instaparse.gll.CatListener.cljs$core$IFn$_invoke$arity$4($JSCompiler_inline_result$$, $G__41984$$, $node_key$$, $tramp$$) : instaparse.gll.CatListener.call(null, $JSCompiler_inline_result$$, $G__41984$$, $node_key$$, $tramp$$);
      return $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$714_parsed_result_result$$, $tramp$$, $JSCompiler_temp_const$jscomp$0$$, $JSCompiler_inline_result$$);
    }
    return instaparse.gll.push_result($tramp$$, $node_key$$, instaparse.gll.make_success($JSCompiler_inline_result$$, $JSCompiler_temp_const$jscomp$0$$));
  };
};
instaparse.gll.CatFullListener = function($results_so_far$$, $parser_sequence$$, $node_key$$, $tramp$$) {
  return function($parsed_result$jscomp$1_result$$) {
    var $continue_index$$ = $APP.cljs.core.__destructure_map($parsed_result$jscomp$1_result$$);
    $parsed_result$jscomp$1_result$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($continue_index$$, $APP.cljs$cst$2039$result);
    $continue_index$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($continue_index$$, $APP.cljs$cst$1998$index);
    var $new_results_so_far$$ = instaparse.auto_flatten_seq.conj_flat($results_so_far$$, $parsed_result$jscomp$1_result$$);
    return instaparse.reduction.singleton_QMARK_($parser_sequence$$) ? instaparse.gll.push_full_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$continue_index$$, $APP.cljs.core.first($parser_sequence$$)], null), function() {
      var $G__41989$$ = $APP.cljs.core.next($parser_sequence$$);
      return instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4 ? instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4($new_results_so_far$$, $G__41989$$, $node_key$$, $tramp$$) : instaparse.gll.CatFullListener.call(null, $new_results_so_far$$, $G__41989$$, $node_key$$, $tramp$$);
    }()) : $APP.cljs.core.seq($parser_sequence$$) ? instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$continue_index$$, $APP.cljs.core.first($parser_sequence$$)], null), function() {
      var $G__41993$$ = $APP.cljs.core.next($parser_sequence$$);
      return instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4 ? instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4($new_results_so_far$$, $G__41993$$, $node_key$$, $tramp$$) : instaparse.gll.CatFullListener.call(null, $new_results_so_far$$, $G__41993$$, $node_key$$, $tramp$$);
    }()) : instaparse.gll.push_result($tramp$$, $node_key$$, instaparse.gll.make_success($new_results_so_far$$, $continue_index$$));
  };
};
instaparse.gll.PlusListener = function($results_so_far$$, $parser$$, $prev_index$$, $node_key$$, $tramp$$) {
  return function($new_results_so_far$jscomp$2_parsed_result$jscomp$2_result$$) {
    var $continue_index$$ = $APP.cljs.core.__destructure_map($new_results_so_far$jscomp$2_parsed_result$jscomp$2_result$$);
    $new_results_so_far$jscomp$2_parsed_result$jscomp$2_result$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($continue_index$$, $APP.cljs$cst$2039$result);
    $continue_index$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($continue_index$$, $APP.cljs$cst$1998$index);
    if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($continue_index$$, $prev_index$$)) {
      return $APP.cljs.core.count($results_so_far$$) === 0 ? instaparse.gll.push_result($tramp$$, $node_key$$, instaparse.gll.make_success(null, $continue_index$$)) : null;
    }
    $new_results_so_far$jscomp$2_parsed_result$jscomp$2_result$$ = instaparse.auto_flatten_seq.conj_flat($results_so_far$$, $new_results_so_far$jscomp$2_parsed_result$jscomp$2_result$$);
    instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$continue_index$$, $parser$$], null), instaparse.gll.PlusListener.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.PlusListener.cljs$core$IFn$_invoke$arity$5($new_results_so_far$jscomp$2_parsed_result$jscomp$2_result$$, $parser$$, $continue_index$$, $node_key$$, $tramp$$) : instaparse.gll.PlusListener.call(null, $new_results_so_far$jscomp$2_parsed_result$jscomp$2_result$$, 
    $parser$$, $continue_index$$, $node_key$$, $tramp$$));
    return instaparse.gll.push_result($tramp$$, $node_key$$, instaparse.gll.make_success($new_results_so_far$jscomp$2_parsed_result$jscomp$2_result$$, $continue_index$$));
  };
};
instaparse.gll.PlusFullListener = function($results_so_far$$, $parser$$, $prev_index$$, $node_key$$, $tramp$$) {
  return function($new_results_so_far$jscomp$3_parsed_result$jscomp$3_result$$) {
    var $continue_index$$ = $APP.cljs.core.__destructure_map($new_results_so_far$jscomp$3_parsed_result$jscomp$3_result$$);
    $new_results_so_far$jscomp$3_parsed_result$jscomp$3_result$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($continue_index$$, $APP.cljs$cst$2039$result);
    $continue_index$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($continue_index$$, $APP.cljs$cst$1998$index);
    if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($continue_index$$, $prev_index$$)) {
      return $APP.cljs.core.count($results_so_far$$) === 0 ? instaparse.gll.push_result($tramp$$, $node_key$$, instaparse.gll.make_success(null, $continue_index$$)) : null;
    }
    $new_results_so_far$jscomp$3_parsed_result$jscomp$3_result$$ = instaparse.auto_flatten_seq.conj_flat($results_so_far$$, $new_results_so_far$jscomp$3_parsed_result$jscomp$3_result$$);
    return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($continue_index$$, $APP.cljs.core.count($APP.cljs$cst$1999$text.cljs$core$IFn$_invoke$arity$1($tramp$$))) ? instaparse.gll.push_result($tramp$$, $node_key$$, instaparse.gll.make_success($new_results_so_far$jscomp$3_parsed_result$jscomp$3_result$$, $continue_index$$)) : instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$continue_index$$, $parser$$], null), 
    instaparse.gll.PlusFullListener.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.PlusFullListener.cljs$core$IFn$_invoke$arity$5($new_results_so_far$jscomp$3_parsed_result$jscomp$3_result$$, $parser$$, $continue_index$$, $node_key$$, $tramp$$) : instaparse.gll.PlusFullListener.call(null, $new_results_so_far$jscomp$3_parsed_result$jscomp$3_result$$, $parser$$, $continue_index$$, $node_key$$, $tramp$$));
  };
};
instaparse.gll.RepListener = function($results_so_far$$, $n_results_so_far$$, $parser$$, $m$$, $n$$, $prev_index$$, $node_key$$, $tramp$$) {
  return function($continue_index$jscomp$4_map__41998__$1_result$$) {
    $continue_index$jscomp$4_map__41998__$1_result$$ = $APP.cljs.core.__destructure_map($continue_index$jscomp$4_map__41998__$1_result$$);
    var $new_results_so_far$jscomp$4_parsed_result$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($continue_index$jscomp$4_map__41998__$1_result$$, $APP.cljs$cst$2039$result);
    $continue_index$jscomp$4_map__41998__$1_result$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($continue_index$jscomp$4_map__41998__$1_result$$, $APP.cljs$cst$1998$index);
    $new_results_so_far$jscomp$4_parsed_result$$ = instaparse.auto_flatten_seq.conj_flat($results_so_far$$, $new_results_so_far$jscomp$4_parsed_result$$);
    var $new_n_results_so_far$$ = $n_results_so_far$$ + 1;
    $m$$ <= $new_n_results_so_far$$ && $new_n_results_so_far$$ <= $n$$ && instaparse.gll.push_result($tramp$$, $node_key$$, instaparse.gll.make_success($new_results_so_far$jscomp$4_parsed_result$$, $continue_index$jscomp$4_map__41998__$1_result$$));
    return $new_n_results_so_far$$ < $n$$ ? instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$continue_index$jscomp$4_map__41998__$1_result$$, $parser$$], null), instaparse.gll.RepListener.cljs$core$IFn$_invoke$arity$8 ? instaparse.gll.RepListener.cljs$core$IFn$_invoke$arity$8($new_results_so_far$jscomp$4_parsed_result$$, $new_n_results_so_far$$, $parser$$, $m$$, $n$$, $continue_index$jscomp$4_map__41998__$1_result$$, 
    $node_key$$, $tramp$$) : instaparse.gll.RepListener.call(null, $new_results_so_far$jscomp$4_parsed_result$$, $new_n_results_so_far$$, $parser$$, $m$$, $n$$, $continue_index$jscomp$4_map__41998__$1_result$$, $node_key$$, $tramp$$)) : null;
  };
};
instaparse.gll.RepFullListener = function($results_so_far$$, $n_results_so_far$$, $parser$$, $m$$, $n$$, $prev_index$$, $node_key$$, $tramp$$) {
  return function($continue_index$jscomp$5_map__41999__$1_result$$) {
    $continue_index$jscomp$5_map__41999__$1_result$$ = $APP.cljs.core.__destructure_map($continue_index$jscomp$5_map__41999__$1_result$$);
    var $new_results_so_far$jscomp$5_parsed_result$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($continue_index$jscomp$5_map__41999__$1_result$$, $APP.cljs$cst$2039$result);
    $continue_index$jscomp$5_map__41999__$1_result$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($continue_index$jscomp$5_map__41999__$1_result$$, $APP.cljs$cst$1998$index);
    $new_results_so_far$jscomp$5_parsed_result$$ = instaparse.auto_flatten_seq.conj_flat($results_so_far$$, $new_results_so_far$jscomp$5_parsed_result$$);
    var $new_n_results_so_far$$ = $n_results_so_far$$ + 1;
    return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($continue_index$jscomp$5_map__41999__$1_result$$, $APP.cljs.core.count($APP.cljs$cst$1999$text.cljs$core$IFn$_invoke$arity$1($tramp$$))) ? $m$$ <= $new_n_results_so_far$$ && $new_n_results_so_far$$ <= $n$$ ? instaparse.gll.push_result($tramp$$, $node_key$$, instaparse.gll.make_success($new_results_so_far$jscomp$5_parsed_result$$, $continue_index$jscomp$5_map__41999__$1_result$$)) : null : $new_n_results_so_far$$ < $n$$ ? instaparse.gll.push_listener($tramp$$, 
    new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$continue_index$jscomp$5_map__41999__$1_result$$, $parser$$], null), instaparse.gll.RepFullListener.cljs$core$IFn$_invoke$arity$8 ? instaparse.gll.RepFullListener.cljs$core$IFn$_invoke$arity$8($new_results_so_far$jscomp$5_parsed_result$$, $new_n_results_so_far$$, $parser$$, $m$$, $n$$, $continue_index$jscomp$5_map__41999__$1_result$$, $node_key$$, $tramp$$) : instaparse.gll.RepFullListener.call(null, 
    $new_results_so_far$jscomp$5_parsed_result$$, $new_n_results_so_far$$, $parser$$, $m$$, $n$$, $continue_index$jscomp$5_map__41999__$1_result$$, $node_key$$, $tramp$$)) : null;
  };
};
instaparse.gll.TopListener = function($tramp$$) {
  return function($result$$) {
    return $APP.cljs.core.reset_BANG_($APP.cljs$cst$2024$success.cljs$core$IFn$_invoke$arity$1($tramp$$), $result$$);
  };
};
instaparse.gll.string_parse = function($this$$$, $index$$, $tramp$$) {
  var $string$$ = $APP.cljs$cst$198$string.cljs$core$IFn$_invoke$arity$1($this$$$), $head$jscomp$2_text$$ = $APP.cljs$cst$1999$text.cljs$core$IFn$_invoke$arity$1($tramp$$);
  var $end$jscomp$51_x__5113__auto__$$ = $APP.cljs.core.count($head$jscomp$2_text$$);
  var $y__5114__auto__$$ = $index$$ + $APP.cljs.core.count($string$$);
  $end$jscomp$51_x__5113__auto__$$ = $end$jscomp$51_x__5113__auto__$$ < $y__5114__auto__$$ ? $end$jscomp$51_x__5113__auto__$$ : $y__5114__auto__$$;
  $head$jscomp$2_text$$ = instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3($head$jscomp$2_text$$, $index$$, $end$jscomp$51_x__5113__auto__$$) : instaparse.gll.sub_sequence.call(null, $head$jscomp$2_text$$, $index$$, $end$jscomp$51_x__5113__auto__$$);
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($string$$, $head$jscomp$2_text$$) ? instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success($string$$, $end$jscomp$51_x__5113__auto__$$)) : instaparse.gll.fail($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $index$$, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, cljs$cst$2002$expecting, $string$$], null));
};
instaparse.gll.string_full_parse = function($this$$$, $index$$, $tramp$$) {
  var $string$$ = $APP.cljs$cst$198$string.cljs$core$IFn$_invoke$arity$1($this$$$), $text$$ = $APP.cljs$cst$1999$text.cljs$core$IFn$_invoke$arity$1($tramp$$);
  var $end$jscomp$52_x__5113__auto__$$ = $APP.cljs.core.count($text$$);
  var $head$jscomp$3_y__5114__auto__$$ = $index$$ + $APP.cljs.core.count($string$$);
  $end$jscomp$52_x__5113__auto__$$ = $end$jscomp$52_x__5113__auto__$$ < $head$jscomp$3_y__5114__auto__$$ ? $end$jscomp$52_x__5113__auto__$$ : $head$jscomp$3_y__5114__auto__$$;
  $head$jscomp$3_y__5114__auto__$$ = instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3($text$$, $index$$, $end$jscomp$52_x__5113__auto__$$) : instaparse.gll.sub_sequence.call(null, $text$$, $index$$, $end$jscomp$52_x__5113__auto__$$);
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($end$jscomp$52_x__5113__auto__$$, $APP.cljs.core.count($text$$)) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($string$$, $head$jscomp$3_y__5114__auto__$$) ? instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success($string$$, $end$jscomp$52_x__5113__auto__$$)) : instaparse.gll.fail($tramp$$, new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $index$$, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, cljs$cst$2002$expecting, $string$$, cljs$cst$2003$full, !0], null));
};
instaparse.gll.equals_ignore_case = function($s1$$, $s2$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($s1$$.toUpperCase(), $s2$$.toUpperCase());
};
instaparse.gll.string_case_insensitive_parse = function($this$$$, $index$$, $tramp$$) {
  var $string$$ = $APP.cljs$cst$198$string.cljs$core$IFn$_invoke$arity$1($this$$$), $head$jscomp$4_text$$ = $APP.cljs$cst$1999$text.cljs$core$IFn$_invoke$arity$1($tramp$$);
  var $end$jscomp$53_x__5113__auto__$$ = $APP.cljs.core.count($head$jscomp$4_text$$);
  var $y__5114__auto__$$ = $index$$ + $APP.cljs.core.count($string$$);
  $end$jscomp$53_x__5113__auto__$$ = $end$jscomp$53_x__5113__auto__$$ < $y__5114__auto__$$ ? $end$jscomp$53_x__5113__auto__$$ : $y__5114__auto__$$;
  $head$jscomp$4_text$$ = instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3($head$jscomp$4_text$$, $index$$, $end$jscomp$53_x__5113__auto__$$) : instaparse.gll.sub_sequence.call(null, $head$jscomp$4_text$$, $index$$, $end$jscomp$53_x__5113__auto__$$);
  return instaparse.gll.equals_ignore_case($string$$, $head$jscomp$4_text$$) ? instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success($string$$, $end$jscomp$53_x__5113__auto__$$)) : instaparse.gll.fail($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $index$$, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, cljs$cst$2002$expecting, $string$$], null));
};
instaparse.gll.string_case_insensitive_full_parse = function($this$$$, $index$$, $tramp$$) {
  var $string$$ = $APP.cljs$cst$198$string.cljs$core$IFn$_invoke$arity$1($this$$$), $text$$ = $APP.cljs$cst$1999$text.cljs$core$IFn$_invoke$arity$1($tramp$$);
  var $end$jscomp$54_x__5113__auto__$$ = $APP.cljs.core.count($text$$);
  var $head$jscomp$5_y__5114__auto__$$ = $index$$ + $APP.cljs.core.count($string$$);
  $end$jscomp$54_x__5113__auto__$$ = $end$jscomp$54_x__5113__auto__$$ < $head$jscomp$5_y__5114__auto__$$ ? $end$jscomp$54_x__5113__auto__$$ : $head$jscomp$5_y__5114__auto__$$;
  $head$jscomp$5_y__5114__auto__$$ = instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3($text$$, $index$$, $end$jscomp$54_x__5113__auto__$$) : instaparse.gll.sub_sequence.call(null, $text$$, $index$$, $end$jscomp$54_x__5113__auto__$$);
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($end$jscomp$54_x__5113__auto__$$, $APP.cljs.core.count($text$$)) && instaparse.gll.equals_ignore_case($string$$, $head$jscomp$5_y__5114__auto__$$) ? instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success($string$$, $end$jscomp$54_x__5113__auto__$$)) : instaparse.gll.fail($tramp$$, new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $index$$, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, cljs$cst$2002$expecting, $string$$, cljs$cst$2003$full, !0], null));
};
instaparse.gll.single_char_code_at = function($text$$, $index$$) {
  return $text$$.charCodeAt($index$$);
};
instaparse.gll.unicode_code_point_at = function($text$$, $index$$) {
  return $APP.goog.i18n.uChar.getCodePointAround($text$$, $index$$ | 0);
};
instaparse.gll.code_point__GT_chars = function($code_point$$) {
  return $APP.goog.i18n.uChar.fromCharCode($code_point$$);
};
instaparse.gll.char_range_parse = function($this$$$, $index$$, $tramp$$) {
  var $lo$$ = $APP.cljs$cst$1986$lo.cljs$core$IFn$_invoke$arity$1($this$$$), $hi$$ = $APP.cljs$cst$1987$hi.cljs$core$IFn$_invoke$arity$1($this$$$), $code$jscomp$16_code_point$jscomp$2_text$$ = $APP.cljs$cst$1999$text.cljs$core$IFn$_invoke$arity$1($tramp$$);
  if ($index$$ >= $APP.cljs.core.count($code$jscomp$16_code_point$jscomp$2_text$$)) {
    return instaparse.gll.fail($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $index$$, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$322$char, cljs$cst$2002$expecting, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2001$char_range, !0, $APP.cljs$cst$1986$lo, $lo$$, $APP.cljs$cst$1987$hi, $hi$$], null)], null));
  }
  if ($hi$$ <= 65535) {
    return $code$jscomp$16_code_point$jscomp$2_text$$ = instaparse.gll.single_char_code_at($code$jscomp$16_code_point$jscomp$2_text$$, $index$$), $lo$$ <= $code$jscomp$16_code_point$jscomp$2_text$$ && $code$jscomp$16_code_point$jscomp$2_text$$ <= $hi$$ ? instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success($APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.char$($code$jscomp$16_code_point$jscomp$2_text$$)), 
    $index$$ + 1)) : instaparse.gll.fail($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $index$$, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$322$char, cljs$cst$2002$expecting, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2001$char_range, !0, $APP.cljs$cst$1986$lo, $lo$$, $APP.cljs$cst$1987$hi, $hi$$], null)], null));
  }
  $code$jscomp$16_code_point$jscomp$2_text$$ = instaparse.gll.unicode_code_point_at($code$jscomp$16_code_point$jscomp$2_text$$, $index$$);
  var $char_string$$ = instaparse.gll.code_point__GT_chars($code$jscomp$16_code_point$jscomp$2_text$$);
  return $lo$$ <= $code$jscomp$16_code_point$jscomp$2_text$$ && $code$jscomp$16_code_point$jscomp$2_text$$ <= $hi$$ ? instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success($char_string$$, $index$$ + $APP.cljs.core.count($char_string$$))) : instaparse.gll.fail($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, 
  $this$$$], null), $index$$, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$322$char, cljs$cst$2002$expecting, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2001$char_range, !0, $APP.cljs$cst$1986$lo, $lo$$, $APP.cljs$cst$1987$hi, $hi$$], null)], null));
};
instaparse.gll.char_range_full_parse = function($this$$$, $index$$, $tramp$$) {
  var $lo$$ = $APP.cljs$cst$1986$lo.cljs$core$IFn$_invoke$arity$1($this$$$), $hi$$ = $APP.cljs$cst$1987$hi.cljs$core$IFn$_invoke$arity$1($this$$$), $code$jscomp$17_code_point$jscomp$3_text$$ = $APP.cljs$cst$1999$text.cljs$core$IFn$_invoke$arity$1($tramp$$), $end$$ = $APP.cljs.core.count($code$jscomp$17_code_point$jscomp$3_text$$);
  if ($index$$ >= $APP.cljs.core.count($code$jscomp$17_code_point$jscomp$3_text$$)) {
    return instaparse.gll.fail($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $index$$, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$322$char, cljs$cst$2002$expecting, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2001$char_range, !0, $APP.cljs$cst$1986$lo, $lo$$, $APP.cljs$cst$1987$hi, $hi$$], null)], null));
  }
  if ($hi$$ <= 65535) {
    return $code$jscomp$17_code_point$jscomp$3_text$$ = instaparse.gll.single_char_code_at($code$jscomp$17_code_point$jscomp$3_text$$, $index$$), $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($index$$ + 1, $end$$) && $lo$$ <= $code$jscomp$17_code_point$jscomp$3_text$$ && $code$jscomp$17_code_point$jscomp$3_text$$ <= $hi$$ ? instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success($APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.char$($code$jscomp$17_code_point$jscomp$3_text$$)), 
    $end$$)) : instaparse.gll.fail($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $index$$, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$322$char, cljs$cst$2002$expecting, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2001$char_range, !0, $APP.cljs$cst$1986$lo, $lo$$, $APP.cljs$cst$1987$hi, $hi$$], null)], null));
  }
  $code$jscomp$17_code_point$jscomp$3_text$$ = instaparse.gll.unicode_code_point_at($code$jscomp$17_code_point$jscomp$3_text$$, $index$$);
  var $char_string$$ = instaparse.gll.code_point__GT_chars($code$jscomp$17_code_point$jscomp$3_text$$);
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($index$$ + $APP.cljs.core.count($char_string$$), $end$$) && $lo$$ <= $code$jscomp$17_code_point$jscomp$3_text$$ && $code$jscomp$17_code_point$jscomp$3_text$$ <= $hi$$ ? instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success($char_string$$, $end$$)) : instaparse.gll.fail($tramp$$, new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $index$$, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$322$char, cljs$cst$2002$expecting, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2001$char_range, !0, $APP.cljs$cst$1986$lo, $lo$$, $APP.cljs$cst$1987$hi, $hi$$], null), cljs$cst$2003$full, !0], null));
};
instaparse.gll.re_match_at_front = function($m$jscomp$195_regexp$$, $JSCompiler_temp_const$jscomp$717_text$$) {
  $m$jscomp$195_regexp$$ = (new RegExp($m$jscomp$195_regexp$$.source, ["g", instaparse.util.regexp_flags($m$jscomp$195_regexp$$)].join(""))).exec($JSCompiler_temp_const$jscomp$717_text$$);
  $JSCompiler_temp_const$jscomp$717_text$$ = $APP.cljs.core;
  var $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$717_text$$.truth_;
  var $JSCompiler_inline_result$$ = $APP.cljs.core.truth_($m$jscomp$195_regexp$$) ? $m$jscomp$195_regexp$$.index === 0 : $m$jscomp$195_regexp$$;
  return $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$717_text$$, $JSCompiler_inline_result$$) ? $APP.cljs.core.first($m$jscomp$195_regexp$$) : null;
};
instaparse.gll.regexp_parse = function($this$$$, $index$$, $tramp$$) {
  var $regexp$$ = cljs$cst$1992$regexp.cljs$core$IFn$_invoke$arity$1($this$$$), $match$jscomp$24_substring_text$$ = cljs$cst$2016$segment.cljs$core$IFn$_invoke$arity$1($tramp$$);
  $match$jscomp$24_substring_text$$ = instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2($match$jscomp$24_substring_text$$, $index$$) : instaparse.gll.sub_sequence.call(null, $match$jscomp$24_substring_text$$, $index$$);
  $match$jscomp$24_substring_text$$ = instaparse.gll.re_match_at_front($regexp$$, $match$jscomp$24_substring_text$$);
  return $APP.cljs.core.truth_($match$jscomp$24_substring_text$$) ? instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success($match$jscomp$24_substring_text$$, $index$$ + $APP.cljs.core.count($match$jscomp$24_substring_text$$))) : instaparse.gll.fail($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], 
  null), $index$$, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1992$regexp, cljs$cst$2002$expecting, $regexp$$], null));
};
instaparse.gll.regexp_full_parse = function($this$$$, $index$$, $tramp$$) {
  var $regexp$$ = cljs$cst$1992$regexp.cljs$core$IFn$_invoke$arity$1($this$$$), $text$$ = cljs$cst$2016$segment.cljs$core$IFn$_invoke$arity$1($tramp$$), $match$jscomp$25_substring$$ = instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2($text$$, $index$$) : instaparse.gll.sub_sequence.call(null, $text$$, $index$$);
  $match$jscomp$25_substring$$ = instaparse.gll.re_match_at_front($regexp$$, $match$jscomp$25_substring$$);
  var $JSCompiler_inline_result$$ = $APP.cljs.core.count($text$$) - $index$$, $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.truth_;
  $JSCompiler_inline_result$$ = $APP.cljs.core.truth_($match$jscomp$25_substring$$) ? $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count($match$jscomp$25_substring$$), $JSCompiler_inline_result$$) : $match$jscomp$25_substring$$;
  return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_inline_result$$) ? instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success($match$jscomp$25_substring$$, $APP.cljs.core.count($text$$))) : instaparse.gll.fail($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), 
  $index$$, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1992$regexp, cljs$cst$2002$expecting, $regexp$$, cljs$cst$2003$full, !0], null));
};
instaparse.gll.cat_parse = function($this$$$, $index$$, $tramp$$) {
  var $parsers$$ = cljs$cst$1990$parsers.cljs$core$IFn$_invoke$arity$1($this$$$);
  return instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $APP.cljs.core.first($parsers$$)], null), instaparse.gll.CatListener(instaparse.auto_flatten_seq.EMPTY, $APP.cljs.core.next($parsers$$), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$));
};
instaparse.gll.cat_full_parse = function($this$$$, $index$$, $tramp$$) {
  var $parsers$$ = cljs$cst$1990$parsers.cljs$core$IFn$_invoke$arity$1($this$$$);
  return instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $APP.cljs.core.first($parsers$$)], null), instaparse.gll.CatFullListener(instaparse.auto_flatten_seq.EMPTY, $APP.cljs.core.next($parsers$$), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$));
};
instaparse.gll.plus_parse = function($this$$$, $index$$, $tramp$$) {
  var $parser$$ = $APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($this$$$);
  return instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $parser$$], null), instaparse.gll.PlusListener(instaparse.auto_flatten_seq.EMPTY, $parser$$, $index$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$));
};
instaparse.gll.plus_full_parse = function($this$$$, $index$$, $tramp$$) {
  var $parser$$ = $APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($this$$$);
  return instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $parser$$], null), instaparse.gll.PlusFullListener(instaparse.auto_flatten_seq.EMPTY, $parser$$, $index$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$));
};
instaparse.gll.rep_parse = function($this$$$, $index$$, $tramp$$) {
  var $parser$$ = $APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($this$$$), $m$$ = $APP.cljs$cst$1816$min.cljs$core$IFn$_invoke$arity$1($this$$$), $n$$ = $APP.cljs$cst$1533$max.cljs$core$IFn$_invoke$arity$1($this$$$);
  return $m$$ === 0 ? (instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success(null, $index$$)), $n$$ >= 1 ? instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $parser$$], null), instaparse.gll.RepListener(instaparse.auto_flatten_seq.EMPTY, 0, $parser$$, 1, $n$$, $index$$, new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$)) : null) : instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $parser$$], null), instaparse.gll.RepListener(instaparse.auto_flatten_seq.EMPTY, 0, $parser$$, $m$$, $n$$, $index$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$));
};
instaparse.gll.rep_full_parse = function($this$$$, $index$$, $tramp$$) {
  var $parser$$ = $APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($this$$$), $m$$ = $APP.cljs$cst$1816$min.cljs$core$IFn$_invoke$arity$1($this$$$), $n$$ = $APP.cljs$cst$1533$max.cljs$core$IFn$_invoke$arity$1($this$$$);
  return $m$$ === 0 ? (instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success(null, $index$$)), $n$$ >= 1 ? instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $parser$$], null), instaparse.gll.RepFullListener(instaparse.auto_flatten_seq.EMPTY, 0, $parser$$, 1, $n$$, $index$$, new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$)) : null) : instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $parser$$], null), instaparse.gll.RepFullListener(instaparse.auto_flatten_seq.EMPTY, 0, $parser$$, $m$$, $n$$, $index$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$));
};
instaparse.gll.star_parse = function($this$$$, $index$$, $tramp$$) {
  var $parser$$ = $APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($this$$$);
  instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $parser$$], null), instaparse.gll.PlusListener(instaparse.auto_flatten_seq.EMPTY, $parser$$, $index$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$));
  return instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success(null, $index$$));
};
instaparse.gll.star_full_parse = function($this$$$, $index$$, $tramp$$) {
  var $parser$$ = $APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($this$$$);
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($index$$, $APP.cljs.core.count($APP.cljs$cst$1999$text.cljs$core$IFn$_invoke$arity$1($tramp$$))) ? instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success(null, $index$$)) : instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, 
  $parser$$], null), instaparse.gll.PlusFullListener(instaparse.auto_flatten_seq.EMPTY, $parser$$, $index$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$));
};
instaparse.gll.alt_parse = function($this$$$, $index$$, $tramp$$) {
  var $c__5548__auto__$jscomp$18_parsers$jscomp$6_seq__42000_temp__5825__auto__$$ = cljs$cst$1990$parsers.cljs$core$IFn$_invoke$arity$1($this$$$);
  $c__5548__auto__$jscomp$18_parsers$jscomp$6_seq__42000_temp__5825__auto__$$ = $APP.cljs.core.seq($c__5548__auto__$jscomp$18_parsers$jscomp$6_seq__42000_temp__5825__auto__$$);
  for (var $G__42228_chunk__42001_seq__42000__$1$$ = null, $G__42227_count__42002$$ = 0, $i__42003$$ = 0;;) {
    if ($i__42003$$ < $G__42227_count__42002$$) {
      var $G__42229_parser$$ = $G__42228_chunk__42001_seq__42000__$1$$.cljs$core$IIndexed$_nth$arity$2(null, $i__42003$$);
      instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $G__42229_parser$$], null), instaparse.gll.NodeListener(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$));
      $i__42003$$ += 1;
    } else {
      if ($c__5548__auto__$jscomp$18_parsers$jscomp$6_seq__42000_temp__5825__auto__$$ = $APP.cljs.core.seq($c__5548__auto__$jscomp$18_parsers$jscomp$6_seq__42000_temp__5825__auto__$$)) {
        $G__42228_chunk__42001_seq__42000__$1$$ = $c__5548__auto__$jscomp$18_parsers$jscomp$6_seq__42000_temp__5825__auto__$$, $APP.cljs.core.chunked_seq_QMARK_($G__42228_chunk__42001_seq__42000__$1$$) ? ($c__5548__auto__$jscomp$18_parsers$jscomp$6_seq__42000_temp__5825__auto__$$ = $APP.cljs.core.chunk_first($G__42228_chunk__42001_seq__42000__$1$$), $G__42227_count__42002$$ = $APP.cljs.core.chunk_rest($G__42228_chunk__42001_seq__42000__$1$$), $G__42228_chunk__42001_seq__42000__$1$$ = $c__5548__auto__$jscomp$18_parsers$jscomp$6_seq__42000_temp__5825__auto__$$, 
        $G__42229_parser$$ = $APP.cljs.core.count($c__5548__auto__$jscomp$18_parsers$jscomp$6_seq__42000_temp__5825__auto__$$), $c__5548__auto__$jscomp$18_parsers$jscomp$6_seq__42000_temp__5825__auto__$$ = $G__42227_count__42002$$, $G__42227_count__42002$$ = $G__42229_parser$$) : ($G__42229_parser$$ = $APP.cljs.core.first($G__42228_chunk__42001_seq__42000__$1$$), instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, 
        $G__42229_parser$$], null), instaparse.gll.NodeListener(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$)), $c__5548__auto__$jscomp$18_parsers$jscomp$6_seq__42000_temp__5825__auto__$$ = $APP.cljs.core.next($G__42228_chunk__42001_seq__42000__$1$$), $G__42228_chunk__42001_seq__42000__$1$$ = null, $G__42227_count__42002$$ = 0), $i__42003$$ = 0;
      } else {
        return null;
      }
    }
  }
};
instaparse.gll.alt_full_parse = function($this$$$, $index$$, $tramp$$) {
  var $c__5548__auto__$jscomp$19_parsers$jscomp$7_seq__42004_temp__5825__auto__$$ = cljs$cst$1990$parsers.cljs$core$IFn$_invoke$arity$1($this$$$);
  $c__5548__auto__$jscomp$19_parsers$jscomp$7_seq__42004_temp__5825__auto__$$ = $APP.cljs.core.seq($c__5548__auto__$jscomp$19_parsers$jscomp$7_seq__42004_temp__5825__auto__$$);
  for (var $G__42244_chunk__42005_seq__42004__$1$$ = null, $G__42243_count__42006$$ = 0, $i__42007$$ = 0;;) {
    if ($i__42007$$ < $G__42243_count__42006$$) {
      var $G__42245_parser$$ = $G__42244_chunk__42005_seq__42004__$1$$.cljs$core$IIndexed$_nth$arity$2(null, $i__42007$$);
      instaparse.gll.push_full_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $G__42245_parser$$], null), instaparse.gll.NodeListener(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$));
      $i__42007$$ += 1;
    } else {
      if ($c__5548__auto__$jscomp$19_parsers$jscomp$7_seq__42004_temp__5825__auto__$$ = $APP.cljs.core.seq($c__5548__auto__$jscomp$19_parsers$jscomp$7_seq__42004_temp__5825__auto__$$)) {
        $G__42244_chunk__42005_seq__42004__$1$$ = $c__5548__auto__$jscomp$19_parsers$jscomp$7_seq__42004_temp__5825__auto__$$, $APP.cljs.core.chunked_seq_QMARK_($G__42244_chunk__42005_seq__42004__$1$$) ? ($c__5548__auto__$jscomp$19_parsers$jscomp$7_seq__42004_temp__5825__auto__$$ = $APP.cljs.core.chunk_first($G__42244_chunk__42005_seq__42004__$1$$), $G__42243_count__42006$$ = $APP.cljs.core.chunk_rest($G__42244_chunk__42005_seq__42004__$1$$), $G__42244_chunk__42005_seq__42004__$1$$ = $c__5548__auto__$jscomp$19_parsers$jscomp$7_seq__42004_temp__5825__auto__$$, 
        $G__42245_parser$$ = $APP.cljs.core.count($c__5548__auto__$jscomp$19_parsers$jscomp$7_seq__42004_temp__5825__auto__$$), $c__5548__auto__$jscomp$19_parsers$jscomp$7_seq__42004_temp__5825__auto__$$ = $G__42243_count__42006$$, $G__42243_count__42006$$ = $G__42245_parser$$) : ($G__42245_parser$$ = $APP.cljs.core.first($G__42244_chunk__42005_seq__42004__$1$$), instaparse.gll.push_full_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
        [$index$$, $G__42245_parser$$], null), instaparse.gll.NodeListener(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$)), $c__5548__auto__$jscomp$19_parsers$jscomp$7_seq__42004_temp__5825__auto__$$ = $APP.cljs.core.next($G__42244_chunk__42005_seq__42004__$1$$), $G__42244_chunk__42005_seq__42004__$1$$ = null, $G__42243_count__42006$$ = 0), $i__42007$$ = 0;
      } else {
        return null;
      }
    }
  }
};
instaparse.gll.ordered_alt_parse = function($this$$$, $index$$, $tramp$$) {
  var $node_key_parser1_parser1$$ = cljs$cst$1988$parser1.cljs$core$IFn$_invoke$arity$1($this$$$), $parser2$$ = cljs$cst$1989$parser2.cljs$core$IFn$_invoke$arity$1($this$$$);
  $node_key_parser1_parser1$$ = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $node_key_parser1_parser1$$], null);
  var $node_key_parser2$$ = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $parser2$$], null), $listener$$ = instaparse.gll.NodeListener(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$);
  instaparse.gll.push_listener($tramp$$, $node_key_parser1_parser1$$, $listener$$);
  return instaparse.gll.push_negative_listener($tramp$$, $node_key_parser1_parser1$$, function() {
    return instaparse.gll.push_listener($tramp$$, $node_key_parser2$$, $listener$$);
  });
};
instaparse.gll.ordered_alt_full_parse = function($this$$$, $index$$, $tramp$$) {
  var $node_key_parser1$jscomp$1_parser1$$ = cljs$cst$1988$parser1.cljs$core$IFn$_invoke$arity$1($this$$$), $parser2$$ = cljs$cst$1989$parser2.cljs$core$IFn$_invoke$arity$1($this$$$);
  $node_key_parser1$jscomp$1_parser1$$ = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $node_key_parser1$jscomp$1_parser1$$], null);
  var $node_key_parser2$$ = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $parser2$$], null), $listener$$ = instaparse.gll.NodeListener(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$);
  instaparse.gll.push_full_listener($tramp$$, $node_key_parser1$jscomp$1_parser1$$, $listener$$);
  return instaparse.gll.push_negative_listener($tramp$$, $node_key_parser1$jscomp$1_parser1$$, function() {
    return instaparse.gll.push_full_listener($tramp$$, $node_key_parser2$$, $listener$$);
  });
};
instaparse.gll.opt_parse = function($this$$$, $index$$, $tramp$$) {
  var $parser$$ = $APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($this$$$);
  instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $parser$$], null), instaparse.gll.NodeListener(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$));
  return instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success(null, $index$$));
};
instaparse.gll.opt_full_parse = function($this$$$, $index$$, $tramp$$) {
  var $parser$$ = $APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($this$$$);
  instaparse.gll.push_full_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $parser$$], null), instaparse.gll.NodeListener(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$));
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($index$$, $APP.cljs.core.count($APP.cljs$cst$1999$text.cljs$core$IFn$_invoke$arity$1($tramp$$))) ? instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success(null, $index$$)) : instaparse.gll.fail($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], 
  null), $index$$, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2051$optional, cljs$cst$2002$expecting, cljs$cst$2052$end_of_string], null));
};
instaparse.gll.non_terminal_parse = function($this$$$, $index$$, $tramp$$) {
  var $parser$$ = instaparse.gll.get_parser(cljs$cst$1996$grammar.cljs$core$IFn$_invoke$arity$1($tramp$$), $APP.cljs$cst$221$keyword.cljs$core$IFn$_invoke$arity$1($this$$$));
  return instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $parser$$], null), instaparse.gll.NodeListener(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$));
};
instaparse.gll.non_terminal_full_parse = function($this$$$, $index$$, $tramp$$) {
  var $parser$$ = instaparse.gll.get_parser(cljs$cst$1996$grammar.cljs$core$IFn$_invoke$arity$1($tramp$$), $APP.cljs$cst$221$keyword.cljs$core$IFn$_invoke$arity$1($this$$$));
  return instaparse.gll.push_full_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $parser$$], null), instaparse.gll.NodeListener(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$));
};
instaparse.gll.lookahead_parse = function($this$$$, $index$$, $tramp$$) {
  var $parser$$ = $APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($this$$$);
  return instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $parser$$], null), instaparse.gll.LookListener(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $tramp$$));
};
instaparse.gll.lookahead_full_parse = function($this$$$, $index$$, $tramp$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($index$$, $APP.cljs.core.count($APP.cljs$cst$1999$text.cljs$core$IFn$_invoke$arity$1($tramp$$))) ? instaparse.gll.lookahead_parse($this$$$, $index$$, $tramp$$) : instaparse.gll.fail($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $index$$, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2053$lookahead, cljs$cst$2002$expecting, 
  cljs$cst$2052$end_of_string], null));
};
instaparse.gll.negative_lookahead_parse = function($this$$$, $index$$, $tramp$$) {
  var $parser$$ = $APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($this$$$), $node_key$$ = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $parser$$], null);
  if ($APP.cljs.core.truth_(instaparse.gll.result_exists_QMARK_($tramp$$, $node_key$$))) {
    return instaparse.gll.fail($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $index$$, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$2054$negative_lookahead], null));
  }
  instaparse.gll.push_listener($tramp$$, $node_key$$, function() {
    var $fail_send$$ = new $APP.cljs.core.Delay(function() {
      return instaparse.gll.fail($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), $index$$, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2054$negative_lookahead, cljs$cst$2002$expecting, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$2000$NOT, instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1($parser$$)], null)], null));
    }, null);
    return function($result$$) {
      return $APP.cljs.core.force($fail_send$$);
    };
  }());
  return instaparse.gll.push_negative_listener($tramp$$, $node_key$$, function() {
    return $APP.cljs.core.not(instaparse.gll.result_exists_QMARK_($tramp$$, $node_key$$)) ? instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success(null, $index$$)) : null;
  });
};
instaparse.gll.epsilon_parse = function($this$$$, $index$$, $tramp$$) {
  return instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success(null, $index$$));
};
instaparse.gll.epsilon_full_parse = function($this$$$, $index$$, $tramp$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($index$$, $APP.cljs.core.count($APP.cljs$cst$1999$text.cljs$core$IFn$_invoke$arity$1($tramp$$))) ? instaparse.gll.push_result($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], null), instaparse.gll.make_success(null, $index$$)) : instaparse.gll.fail($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $this$$$], 
  null), $index$$, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2055$Epsilon, cljs$cst$2002$expecting, cljs$cst$2052$end_of_string], null));
};
instaparse.gll.start_parser = function($tramp$$, $parser$$, $partial_QMARK_$$) {
  return $APP.cljs.core.truth_($partial_QMARK_$$) ? instaparse.gll.push_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0, $parser$$], null), instaparse.gll.TopListener($tramp$$)) : instaparse.gll.push_full_listener($tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0, $parser$$], null), instaparse.gll.TopListener($tramp$$));
};
instaparse.gll.parses = function($grammar$jscomp$14_tramp$$, $parser$jscomp$46_start$$, $text$$, $partial_QMARK_$jscomp$1_temp__5823__auto__$$) {
  $grammar$jscomp$14_tramp$$ = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2($grammar$jscomp$14_tramp$$, $text$$);
  $parser$jscomp$46_start$$ = instaparse.combinators_source.nt($parser$jscomp$46_start$$);
  instaparse.gll.start_parser($grammar$jscomp$14_tramp$$, $parser$jscomp$46_start$$, $partial_QMARK_$jscomp$1_temp__5823__auto__$$);
  $partial_QMARK_$jscomp$1_temp__5823__auto__$$ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1($grammar$jscomp$14_tramp$$);
  return $APP.cljs.core.truth_($partial_QMARK_$jscomp$1_temp__5823__auto__$$) ? $partial_QMARK_$jscomp$1_temp__5823__auto__$$ : $APP.cljs.core.with_meta($APP.cljs.core.List.EMPTY, instaparse.failure.augment_failure($APP.cljs.core.deref($APP.cljs$cst$2025$failure.cljs$core$IFn$_invoke$arity$1($grammar$jscomp$14_tramp$$)), $text$$));
};
instaparse.gll.parse = function($grammar$jscomp$15_tramp$$, $parser$jscomp$47_start$$, $text$$, $partial_QMARK_$jscomp$2_temp__5823__auto__$$) {
  $grammar$jscomp$15_tramp$$ = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2($grammar$jscomp$15_tramp$$, $text$$);
  $parser$jscomp$47_start$$ = instaparse.combinators_source.nt($parser$jscomp$47_start$$);
  instaparse.gll.start_parser($grammar$jscomp$15_tramp$$, $parser$jscomp$47_start$$, $partial_QMARK_$jscomp$2_temp__5823__auto__$$);
  $partial_QMARK_$jscomp$2_temp__5823__auto__$$ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1($grammar$jscomp$15_tramp$$);
  return $APP.cljs.core.truth_($partial_QMARK_$jscomp$2_temp__5823__auto__$$) ? $APP.cljs.core.first($partial_QMARK_$jscomp$2_temp__5823__auto__$$) : instaparse.failure.augment_failure($APP.cljs.core.deref($APP.cljs$cst$2025$failure.cljs$core$IFn$_invoke$arity$1($grammar$jscomp$15_tramp$$)), $text$$);
};
instaparse.gll.build_node_with_meta = function($node_builder$$, $tag$$, $content$$, $start$$, $end$$) {
  return $APP.cljs.core.with_meta($node_builder$$.cljs$core$IFn$_invoke$arity$2 ? $node_builder$$.cljs$core$IFn$_invoke$arity$2($tag$$, $content$$) : $node_builder$$.call(null, $tag$$, $content$$), new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$2048$instaparse_DOT_gll_SLASH_start_index, $start$$, cljs$cst$2049$instaparse_DOT_gll_SLASH_end_index, $end$$], null));
};
instaparse.gll.build_total_failure_node = function($node_builder$$, $start$$, $text$$) {
  var $build_failure_node$$ = instaparse.gll.build_node_with_meta($node_builder$$, cljs$cst$2050$instaparse_SLASH_failure, $text$$, 0, $APP.cljs.core.count($text$$));
  return instaparse.gll.build_node_with_meta($node_builder$$, $start$$, $build_failure_node$$, 0, $APP.cljs.core.count($text$$));
};
instaparse.gll.parses_total_after_fail = function($grammar$jscomp$16_tramp$$, $start$$, $text$$, $fail_index$jscomp$4_parser$$, $partial_QMARK_$jscomp$3_temp__5823__auto__$$, $node_builder$$) {
  $grammar$jscomp$16_tramp$$ = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4($grammar$jscomp$16_tramp$$, $text$$, $fail_index$jscomp$4_parser$$, $node_builder$$);
  $fail_index$jscomp$4_parser$$ = instaparse.combinators_source.nt($start$$);
  instaparse.gll.start_parser($grammar$jscomp$16_tramp$$, $fail_index$jscomp$4_parser$$, $partial_QMARK_$jscomp$3_temp__5823__auto__$$);
  $partial_QMARK_$jscomp$3_temp__5823__auto__$$ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1($grammar$jscomp$16_tramp$$);
  return $APP.cljs.core.truth_($partial_QMARK_$jscomp$3_temp__5823__auto__$$) ? $partial_QMARK_$jscomp$3_temp__5823__auto__$$ : new $APP.cljs.core.List(null, instaparse.gll.build_total_failure_node($node_builder$$, $start$$, $text$$), null, 1, null);
};
instaparse.gll.merge_meta = function($obj$$, $metamap$$) {
  return $APP.cljs.core.with_meta($obj$$, $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$metamap$$, $APP.cljs.core.meta($obj$$)], 0)));
};
instaparse.gll.parses_total = function($grammar$$, $start$$, $text$$, $partial_QMARK_$$, $node_builder$$) {
  var $all_parses$$ = instaparse.gll.parses($grammar$$, $start$$, $text$$, $partial_QMARK_$$);
  return $APP.cljs.core.seq($all_parses$$) ? $all_parses$$ : instaparse.gll.merge_meta(instaparse.gll.parses_total_after_fail($grammar$$, $start$$, $text$$, $APP.cljs$cst$1998$index.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.meta($all_parses$$)), $partial_QMARK_$$, $node_builder$$), $APP.cljs.core.meta($all_parses$$));
};
instaparse.gll.parse_total_after_fail = function($grammar$jscomp$18_tramp$$, $start$$, $text$$, $fail_index$jscomp$5_parser$$, $partial_QMARK_$jscomp$5_temp__5823__auto__$$, $node_builder$$) {
  $grammar$jscomp$18_tramp$$ = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4($grammar$jscomp$18_tramp$$, $text$$, $fail_index$jscomp$5_parser$$, $node_builder$$);
  $fail_index$jscomp$5_parser$$ = instaparse.combinators_source.nt($start$$);
  instaparse.gll.start_parser($grammar$jscomp$18_tramp$$, $fail_index$jscomp$5_parser$$, $partial_QMARK_$jscomp$5_temp__5823__auto__$$);
  $partial_QMARK_$jscomp$5_temp__5823__auto__$$ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1($grammar$jscomp$18_tramp$$);
  return $APP.cljs.core.truth_($partial_QMARK_$jscomp$5_temp__5823__auto__$$) ? $APP.cljs.core.first($partial_QMARK_$jscomp$5_temp__5823__auto__$$) : instaparse.gll.build_total_failure_node($node_builder$$, $start$$, $text$$);
};
instaparse.gll.parse_total = function($grammar$$, $start$$, $text$$, $partial_QMARK_$$, $node_builder$$) {
  var $result$$ = instaparse.gll.parse($grammar$$, $start$$, $text$$, $partial_QMARK_$$);
  return $result$$ instanceof instaparse.gll.Failure ? instaparse.gll.merge_meta(instaparse.gll.parse_total_after_fail($grammar$$, $start$$, $text$$, $APP.cljs$cst$1998$index.cljs$core$IFn$_invoke$arity$1($result$$), $partial_QMARK_$$, $node_builder$$), $result$$) : $result$$;
};
instaparse.cfg = {};
instaparse.cfg._STAR_case_insensitive_literals_STAR_ = $APP.cljs$cst$205$default;
instaparse.cfg.string_PLUS_ = function($s$$, $ci_by_default_QMARK_$$) {
  var $G__42012$$ = instaparse.cfg._STAR_case_insensitive_literals_STAR_;
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(!0, $G__42012$$)) {
    return instaparse.combinators_source.string_ci($s$$);
  }
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(!1, $G__42012$$)) {
    return instaparse.combinators_source.string($s$$);
  }
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$205$default, $G__42012$$)) {
    return $APP.cljs.core.truth_($ci_by_default_QMARK_$$) ? instaparse.combinators_source.string_ci($s$$) : instaparse.combinators_source.string($s$$);
  }
  throw Error(["No matching clause: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($G__42012$$)].join(""));
};
instaparse.cfg.regex_doc = function($pattern_str$$, $comment$$) {
  return $APP.cljs.core.re_pattern($pattern_str$$);
};
instaparse.cfg.single_quoted_string = instaparse.cfg.regex_doc(/'[^'\\]*(?:\\.[^'\\]*)*'/, "Single-quoted string");
instaparse.cfg.single_quoted_regexp = instaparse.cfg.regex_doc(/#'[^'\\]*(?:\\.[^'\\]*)*'/, "Single-quoted regexp");
instaparse.cfg.double_quoted_string = instaparse.cfg.regex_doc(/"[^"\\]*(?:\\.[^"\\]*)*"/, "Double-quoted string");
instaparse.cfg.double_quoted_regexp = instaparse.cfg.regex_doc(/#"[^"\\]*(?:\\.[^"\\]*)*"/, "Double-quoted regexp");
instaparse.cfg.inside_comment = /(?:(?!(?:\(\*|\*\)))[\s\S])*/;
instaparse.cfg.ws = instaparse.cfg.regex_doc("[,\\s]*", "optional whitespace");
instaparse.cfg.opt_whitespace = instaparse.combinators_source.hide(instaparse.combinators_source.nt(cljs$cst$2056$opt_whitespace));
instaparse.cfg.non_terminal = instaparse.cfg.regex_doc("[^, \\r\\t\\n\x3c\x3e(){}\\[\\]+*?:\x3d|'\"#\x26!;./]+", "Non-terminal");
instaparse.cfg.non_terminal_namespace_allowed = function() {
  return instaparse.cfg.regex_doc("[^, \\r\\t\\n\x3c\x3e(){}\\[\\]+*?:\x3d|'\"#\x26!;/.][^, \\r\\t\\n\x3c\x3e(){}\\[\\]+*?:\x3d|'\"#\x26!;]*", "Non-terminal-namespace-allowed");
}();
instaparse.cfg.make_cfg = function($allow_namespaced_nts_QMARK_$$) {
  return instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$1675$hiccup, $APP.cljs.core.PersistentHashMap.fromArrays([cljs$cst$2014$neg, cljs$cst$1983$cat, cljs$cst$1984$ord, cljs$cst$2057$rule_separator, cljs$cst$1985$alt, cljs$cst$2013$look, $APP.cljs$cst$2058$rule, cljs$cst$2012$nt, cljs$cst$2059$hide_nt, cljs$cst$2060$inside_comment, $APP.cljs$cst$2009$star, $APP.cljs$cst$198$string, $APP.cljs$cst$2061$rules, cljs$cst$1991$hide, cljs$cst$2062$paren, cljs$cst$2063$alt_or_ord, 
  cljs$cst$1992$regexp, $APP.cljs$cst$2064$factor, cljs$cst$2065$comment, $APP.cljs$cst$2008$plus, $APP.cljs$cst$2007$epsilon, cljs$cst$2056$opt_whitespace, cljs$cst$2066$rules_or_parser, $APP.cljs$cst$1834$opt], [instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("!")), instaparse.cfg.opt_whitespace, instaparse.combinators_source.nt($APP.cljs$cst$2064$factor)], 
  0)), instaparse.combinators_source.plus(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.cfg.opt_whitespace, instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt($APP.cljs$cst$2064$factor), instaparse.combinators_source.nt(cljs$cst$2013$look), instaparse.combinators_source.nt(cljs$cst$2014$neg)], 0)), instaparse.cfg.opt_whitespace], 
  0))), instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs$cst$1983$cat), instaparse.combinators_source.plus(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.cfg.opt_whitespace, instaparse.combinators_source.hide(instaparse.combinators_source.string("/")), instaparse.cfg.opt_whitespace, instaparse.combinators_source.nt(cljs$cst$1983$cat)], 
  0)))], 0)), instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(":"), instaparse.combinators_source.string(":\x3d"), instaparse.combinators_source.string("::\x3d"), instaparse.combinators_source.string("\x3d")], 0)), instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs$cst$1983$cat), 
  instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.cfg.opt_whitespace, instaparse.combinators_source.hide(instaparse.combinators_source.string("|")), instaparse.cfg.opt_whitespace, instaparse.combinators_source.nt(cljs$cst$1983$cat)], 0)))], 0)), instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("\x26")), 
  instaparse.cfg.opt_whitespace, instaparse.combinators_source.nt($APP.cljs$cst$2064$factor)], 0)), instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs$cst$2012$nt), instaparse.combinators_source.nt(cljs$cst$2059$hide_nt)], 0)), instaparse.cfg.opt_whitespace, instaparse.combinators_source.hide(instaparse.combinators_source.nt(cljs$cst$2057$rule_separator)), 
  instaparse.cfg.opt_whitespace, instaparse.combinators_source.nt(cljs$cst$2063$alt_or_ord), instaparse.combinators_source.hide(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs$cst$2056$opt_whitespace), instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs$cst$2056$opt_whitespace), 
  instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(";"), instaparse.combinators_source.string(".")], 0)), instaparse.combinators_source.nt(cljs$cst$2056$opt_whitespace)], 0))], 0)))], 0)), instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.neg(instaparse.combinators_source.nt($APP.cljs$cst$2007$epsilon)), 
  instaparse.combinators_source.regexp($APP.cljs.core.truth_($allow_namespaced_nts_QMARK_$$) ? instaparse.cfg.non_terminal_namespace_allowed : instaparse.cfg.non_terminal)], 0)), instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("\x3c")), instaparse.cfg.opt_whitespace, instaparse.combinators_source.nt(cljs$cst$2012$nt), instaparse.cfg.opt_whitespace, 
  instaparse.combinators_source.hide(instaparse.combinators_source.string("\x3e"))], 0)), instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp(instaparse.cfg.inside_comment), instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs$cst$2065$comment), 
  instaparse.combinators_source.regexp(instaparse.cfg.inside_comment)], 0)))], 0)), instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("{")), instaparse.cfg.opt_whitespace, instaparse.combinators_source.nt(cljs$cst$2063$alt_or_ord), 
  instaparse.cfg.opt_whitespace, instaparse.combinators_source.hide(instaparse.combinators_source.string("}"))], 0)), instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt($APP.cljs$cst$2064$factor), instaparse.cfg.opt_whitespace, instaparse.combinators_source.hide(instaparse.combinators_source.string("*"))], 0))], 0)), instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp(instaparse.cfg.single_quoted_string), 
  instaparse.combinators_source.regexp(instaparse.cfg.double_quoted_string)], 0)), instaparse.combinators_source.hide_tag(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.cfg.opt_whitespace, instaparse.combinators_source.plus(instaparse.combinators_source.nt($APP.cljs$cst$2058$rule))], 0))), instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("\x3c")), 
  instaparse.cfg.opt_whitespace, instaparse.combinators_source.nt(cljs$cst$2063$alt_or_ord), instaparse.cfg.opt_whitespace, instaparse.combinators_source.hide(instaparse.combinators_source.string("\x3e"))], 0)), instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("(")), instaparse.cfg.opt_whitespace, instaparse.combinators_source.nt(cljs$cst$2063$alt_or_ord), 
  instaparse.cfg.opt_whitespace, instaparse.combinators_source.hide(instaparse.combinators_source.string(")"))], 0)), instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs$cst$1985$alt), instaparse.combinators_source.nt(cljs$cst$1984$ord)], 0))), instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp(instaparse.cfg.single_quoted_regexp), 
  instaparse.combinators_source.regexp(instaparse.cfg.double_quoted_regexp)], 0)), instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs$cst$2012$nt), instaparse.combinators_source.nt($APP.cljs$cst$198$string), instaparse.combinators_source.nt(cljs$cst$1992$regexp), instaparse.combinators_source.nt($APP.cljs$cst$1834$opt), instaparse.combinators_source.nt($APP.cljs$cst$2009$star), 
  instaparse.combinators_source.nt($APP.cljs$cst$2008$plus), instaparse.combinators_source.nt(cljs$cst$2062$paren), instaparse.combinators_source.nt(cljs$cst$1991$hide), instaparse.combinators_source.nt($APP.cljs$cst$2007$epsilon)], 0))), instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string("(*"), instaparse.combinators_source.nt(cljs$cst$2060$inside_comment), instaparse.combinators_source.string("*)")], 
  0)), instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt($APP.cljs$cst$2064$factor), instaparse.cfg.opt_whitespace, instaparse.combinators_source.hide(instaparse.combinators_source.string("+"))], 0)), instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string("Epsilon"), instaparse.combinators_source.string("epsilon"), 
  instaparse.combinators_source.string("EPSILON"), instaparse.combinators_source.string("eps"), instaparse.combinators_source.string("ε")], 0)), instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp(instaparse.cfg.ws), instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs$cst$2065$comment), 
  instaparse.combinators_source.regexp(instaparse.cfg.ws)], 0)))], 0)), instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt($APP.cljs$cst$2061$rules), instaparse.combinators_source.nt(cljs$cst$2063$alt_or_ord)], 0))), instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("[")), 
  instaparse.cfg.opt_whitespace, instaparse.combinators_source.nt(cljs$cst$2063$alt_or_ord), instaparse.cfg.opt_whitespace, instaparse.combinators_source.hide(instaparse.combinators_source.string("]"))], 0)), instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt($APP.cljs$cst$2064$factor), instaparse.cfg.opt_whitespace, instaparse.combinators_source.hide(instaparse.combinators_source.string("?"))], 
  0))], 0))]));
};
instaparse.cfg.cfg = instaparse.cfg.make_cfg(!1);
instaparse.cfg.cfg_allow_namespaced_nts = instaparse.cfg.make_cfg(!0);
instaparse.cfg.tag = $APP.cljs.core.first;
instaparse.cfg.contents = $APP.cljs.core.next;
instaparse.cfg.content = $APP.cljs.core.fnext;
instaparse.cfg.escape = function($s$$) {
  for (var $G__42168_G__42170_G__42172_G__42174_sq$$ = $APP.cljs.core.seq($s$$), $G__42169_G__42171_G__42173_G__42175_v$$ = $APP.cljs.core.PersistentVector.EMPTY;;) {
    var $c$jscomp$224_temp__5823__auto__$$ = $APP.cljs.core.first($G__42168_G__42170_G__42172_G__42174_sq$$);
    if ($APP.cljs.core.truth_($c$jscomp$224_temp__5823__auto__$$)) {
      switch($c$jscomp$224_temp__5823__auto__$$) {
        case "\\":
          var $c2$jscomp$8_temp__5823__auto____$1$$ = $APP.cljs.core.second($G__42168_G__42170_G__42172_G__42174_sq$$);
          if ($APP.cljs.core.truth_($c2$jscomp$8_temp__5823__auto____$1$$)) {
            $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($c2$jscomp$8_temp__5823__auto____$1$$, "'") ? ($G__42168_G__42170_G__42172_G__42174_sq$$ = $APP.cljs.core.drop.cljs$core$IFn$_invoke$arity$2(2, $G__42168_G__42170_G__42172_G__42174_sq$$), $G__42169_G__42171_G__42173_G__42175_v$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__42169_G__42171_G__42173_G__42175_v$$, $c2$jscomp$8_temp__5823__auto____$1$$)) : ($G__42168_G__42170_G__42172_G__42174_sq$$ = $APP.cljs.core.drop.cljs$core$IFn$_invoke$arity$2(2, 
            $G__42168_G__42170_G__42172_G__42174_sq$$), $G__42169_G__42171_G__42173_G__42175_v$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic($G__42169_G__42171_G__42173_G__42175_v$$, $c$jscomp$224_temp__5823__auto__$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$c2$jscomp$8_temp__5823__auto____$1$$], 0)));
            continue;
          } else {
            return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Encountered backslash character at end of string: ", $s$$], 0));
          }
          break;
        case '"':
          $G__42168_G__42170_G__42172_G__42174_sq$$ = $APP.cljs.core.next($G__42168_G__42170_G__42172_G__42174_sq$$);
          $G__42169_G__42171_G__42173_G__42175_v$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic($G__42169_G__42171_G__42173_G__42175_v$$, "\\", $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(['"'], 0));
          continue;
        default:
          $G__42168_G__42170_G__42172_G__42174_sq$$ = $APP.cljs.core.next($G__42168_G__42170_G__42172_G__42174_sq$$);
          $G__42169_G__42171_G__42173_G__42175_v$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__42169_G__42171_G__42173_G__42175_v$$, $c$jscomp$224_temp__5823__auto__$$);
          continue;
      }
    } else {
      return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.str, $G__42169_G__42171_G__42173_G__42175_v$$);
    }
    break;
  }
};
var read_string_STAR__42176 = $APP.cljs.core.deref(new $APP.cljs.core.Var(function() {
  return $APP.cljs.tools.reader.read_string_STAR_;
}, cljs$cst$2067$cljs_DOT_tools_DOT_reader_SLASH_read_string_STAR_, $APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs$cst$271$private, $APP.cljs$cst$176$ns, $APP.cljs$cst$272$name, $APP.cljs$cst$208$file, $APP.cljs$cst$218$end_column, $APP.cljs$cst$216$column, $APP.cljs$cst$209$line, $APP.cljs$cst$217$end_line, $APP.cljs$cst$273$arglists, $APP.cljs$cst$256$doc, $APP.cljs$cst$171$test], [!0, cljs$cst$2068$cljs_DOT_tools_DOT_reader, cljs$cst$2069$read_string_STAR_, "cljs/tools/reader.cljs", 20, 
1, 306, 306, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta($APP.cljs$cst$301$reader, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$97$not_native], null)), $APP.cljs$cst$312$_, $APP.cljs$cst$309$opts, cljs$cst$2070$pending_forms], null)), null, $APP.cljs.core.truth_($APP.cljs.tools.reader.read_string_STAR_) ? $APP.cljs.tools.reader.read_string_STAR_.cljs$lang$test : null])));
instaparse.cfg.safe_read_string = function($G__42027_s$$) {
  $G__42027_s$$ = $APP.cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1($G__42027_s$$);
  return read_string_STAR__42176.cljs$core$IFn$_invoke$arity$4 ? read_string_STAR__42176.cljs$core$IFn$_invoke$arity$4($G__42027_s$$, null, null, null) : read_string_STAR__42176.call(null, $G__42027_s$$, null, null, null);
};
instaparse.cfg.process_string = function($remove_escaped_single_quotes_s$$) {
  $remove_escaped_single_quotes_s$$ = $APP.cljs.core.subs.cljs$core$IFn$_invoke$arity$3($remove_escaped_single_quotes_s$$, 1, $APP.cljs.core.count($remove_escaped_single_quotes_s$$) - 1);
  $remove_escaped_single_quotes_s$$ = instaparse.cfg.escape($remove_escaped_single_quotes_s$$);
  return instaparse.cfg.safe_read_string([$APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($remove_escaped_single_quotes_s$$), '"'].join(""));
};
instaparse.cfg.process_regexp = function($remove_escaped_single_quotes$jscomp$1_s$jscomp$365_stripped$$) {
  $remove_escaped_single_quotes$jscomp$1_s$jscomp$365_stripped$$ = $APP.cljs.core.subs.cljs$core$IFn$_invoke$arity$3($remove_escaped_single_quotes$jscomp$1_s$jscomp$365_stripped$$, 2, $APP.cljs.core.count($remove_escaped_single_quotes$jscomp$1_s$jscomp$365_stripped$$) - 1);
  $remove_escaped_single_quotes$jscomp$1_s$jscomp$365_stripped$$ = instaparse.cfg.escape($remove_escaped_single_quotes$jscomp$1_s$jscomp$365_stripped$$);
  return $APP.cljs.core.re_pattern($remove_escaped_single_quotes$jscomp$1_s$jscomp$365_stripped$$);
};
instaparse.cfg.build_rule = function($tree$$) {
  for (;;) {
    var $G__42031_G__42031__$1_alt_or_ord_vec__42032$$ = instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1($tree$$) : instaparse.cfg.tag.call(null, $tree$$);
    $G__42031_G__42031__$1_alt_or_ord_vec__42032$$ = $G__42031_G__42031__$1_alt_or_ord_vec__42032$$ instanceof $APP.cljs.core.Keyword ? $G__42031_G__42031__$1_alt_or_ord_vec__42032$$.fqn : null;
    switch($G__42031_G__42031__$1_alt_or_ord_vec__42032$$) {
      case "rule":
        $G__42031_G__42031__$1_alt_or_ord_vec__42032$$ = instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1($tree$$) : instaparse.cfg.contents.call(null, $tree$$);
        var $nt$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__42031_G__42031__$1_alt_or_ord_vec__42032$$, 0, null);
        $G__42031_G__42031__$1_alt_or_ord_vec__42032$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__42031_G__42031__$1_alt_or_ord_vec__42032$$, 1, null);
        return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1($nt$$) : instaparse.cfg.tag.call(null, $nt$$), cljs$cst$2059$hide_nt) ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(function() {
          var $G__42044$$ = instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1($nt$$) : instaparse.cfg.content.call(null, $nt$$);
          return instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1($G__42044$$) : instaparse.cfg.content.call(null, $G__42044$$);
        }()), instaparse.combinators_source.hide_tag(instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1($G__42031_G__42031__$1_alt_or_ord_vec__42032$$) : instaparse.cfg.build_rule.call(null, $G__42031_G__42031__$1_alt_or_ord_vec__42032$$))], null) : new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? 
        instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1($nt$$) : instaparse.cfg.content.call(null, $nt$$)), instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1($G__42031_G__42031__$1_alt_or_ord_vec__42032$$) : instaparse.cfg.build_rule.call(null, $G__42031_G__42031__$1_alt_or_ord_vec__42032$$)], null);
      case "nt":
        return instaparse.combinators_source.nt($APP.cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1($tree$$) : instaparse.cfg.content.call(null, $tree$$)));
      case "alt":
        return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.alt, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule, instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1($tree$$) : instaparse.cfg.contents.call(null, $tree$$)));
      case "ord":
        return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.ord, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule, instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1($tree$$) : instaparse.cfg.contents.call(null, $tree$$)));
      case "paren":
        $tree$$ = instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1($tree$$) : instaparse.cfg.content.call(null, $tree$$);
        continue;
      case "hide":
        return instaparse.combinators_source.hide(function() {
          var $G__42057$$ = instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1($tree$$) : instaparse.cfg.content.call(null, $tree$$);
          return instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1($G__42057$$) : instaparse.cfg.build_rule.call(null, $G__42057$$);
        }());
      case "cat":
        return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule, instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1($tree$$) : instaparse.cfg.contents.call(null, $tree$$)));
      case "string":
        return instaparse.cfg.string_PLUS_(instaparse.cfg.process_string(instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1($tree$$) : instaparse.cfg.content.call(null, $tree$$)), !1);
      case "regexp":
        return instaparse.combinators_source.regexp(instaparse.cfg.process_regexp(instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1($tree$$) : instaparse.cfg.content.call(null, $tree$$)));
      case "opt":
        return instaparse.combinators_source.opt(function() {
          var $G__42066$$ = instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1($tree$$) : instaparse.cfg.content.call(null, $tree$$);
          return instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1($G__42066$$) : instaparse.cfg.build_rule.call(null, $G__42066$$);
        }());
      case "star":
        return instaparse.combinators_source.star(function() {
          var $G__42071$$ = instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1($tree$$) : instaparse.cfg.content.call(null, $tree$$);
          return instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1($G__42071$$) : instaparse.cfg.build_rule.call(null, $G__42071$$);
        }());
      case "plus":
        return instaparse.combinators_source.plus(function() {
          var $G__42072$$ = instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1($tree$$) : instaparse.cfg.content.call(null, $tree$$);
          return instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1($G__42072$$) : instaparse.cfg.build_rule.call(null, $G__42072$$);
        }());
      case "look":
        return instaparse.combinators_source.look(function() {
          var $G__42077$$ = instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1($tree$$) : instaparse.cfg.content.call(null, $tree$$);
          return instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1($G__42077$$) : instaparse.cfg.build_rule.call(null, $G__42077$$);
        }());
      case "neg":
        return instaparse.combinators_source.neg(function() {
          var $G__42079$$ = instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1($tree$$) : instaparse.cfg.content.call(null, $tree$$);
          return instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1($G__42079$$) : instaparse.cfg.build_rule.call(null, $G__42079$$);
        }());
      case "epsilon":
        return instaparse.combinators_source.Epsilon;
      default:
        throw Error(["No matching clause: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($G__42031_G__42031__$1_alt_or_ord_vec__42032$$)].join(""));
    }
    break;
  }
};
instaparse.cfg.seq_nt = function($parser$$) {
  for (;;) {
    var $G__42101_G__42101__$1$$ = $APP.cljs$cst$78$tag.cljs$core$IFn$_invoke$arity$1($parser$$);
    $G__42101_G__42101__$1$$ = $G__42101_G__42101__$1$$ instanceof $APP.cljs.core.Keyword ? $G__42101_G__42101__$1$$.fqn : null;
    switch($G__42101_G__42101__$1$$) {
      case "nt":
        return new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$221$keyword.cljs$core$IFn$_invoke$arity$1($parser$$)], null);
      case "string":
      case "string-ci":
      case "char":
      case "regexp":
      case "epsilon":
        return $APP.cljs.core.PersistentVector.EMPTY;
      case "opt":
      case "plus":
      case "star":
      case "look":
      case "neg":
      case "rep":
        $parser$$ = $APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($parser$$);
        continue;
      case "alt":
      case "cat":
        return $APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$1990$parsers.cljs$core$IFn$_invoke$arity$1($parser$$)], 0));
      case "ord":
        return $APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$1988$parser1.cljs$core$IFn$_invoke$arity$1($parser$$), cljs$cst$1989$parser2.cljs$core$IFn$_invoke$arity$1($parser$$)], null)], 0));
      default:
        throw Error(["No matching clause: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($G__42101_G__42101__$1$$)].join(""));
    }
    break;
  }
};
instaparse.cfg.check_grammar = function($grammar_map$$) {
  for (var $valid_nts_42187$$ = $APP.cljs.core.set($APP.cljs.core.keys($grammar_map$$)), $c__5548__auto___42199_nt_42204_seq__42123_42188_temp__5825__auto___42197$$ = $APP.cljs.core.seq($APP.cljs.core.distinct.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.vals($grammar_map$$)], 0)))), $G__42201_chunk__42124_42189_seq__42123_42198__$1$$ = null, $G__42202_count__42125_42190$$ = 
  0, $G__42200_i__42126_42191$$ = 0;;) {
    if ($G__42200_i__42126_42191$$ < $G__42202_count__42125_42190$$) {
      var $nt_42192$$ = $G__42201_chunk__42124_42189_seq__42123_42198__$1$$.cljs$core$IIndexed$_nth$arity$2(null, $G__42200_i__42126_42191$$);
      $APP.cljs.core.truth_($valid_nts_42187$$.cljs$core$IFn$_invoke$arity$1 ? $valid_nts_42187$$.cljs$core$IFn$_invoke$arity$1($nt_42192$$) : $valid_nts_42187$$.call(null, $nt_42192$$)) || instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.subs.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($nt_42192$$), 1), " occurs on the right-hand side of your grammar, but not on the left"], 
      0));
      $G__42200_i__42126_42191$$ += 1;
    } else {
      if ($c__5548__auto___42199_nt_42204_seq__42123_42188_temp__5825__auto___42197$$ = $APP.cljs.core.seq($c__5548__auto___42199_nt_42204_seq__42123_42188_temp__5825__auto___42197$$)) {
        $G__42201_chunk__42124_42189_seq__42123_42198__$1$$ = $c__5548__auto___42199_nt_42204_seq__42123_42188_temp__5825__auto___42197$$, $APP.cljs.core.chunked_seq_QMARK_($G__42201_chunk__42124_42189_seq__42123_42198__$1$$) ? ($c__5548__auto___42199_nt_42204_seq__42123_42188_temp__5825__auto___42197$$ = $APP.cljs.core.chunk_first($G__42201_chunk__42124_42189_seq__42123_42198__$1$$), $G__42200_i__42126_42191$$ = $APP.cljs.core.chunk_rest($G__42201_chunk__42124_42189_seq__42123_42198__$1$$), $G__42201_chunk__42124_42189_seq__42123_42198__$1$$ = 
        $c__5548__auto___42199_nt_42204_seq__42123_42188_temp__5825__auto___42197$$, $G__42202_count__42125_42190$$ = $APP.cljs.core.count($c__5548__auto___42199_nt_42204_seq__42123_42188_temp__5825__auto___42197$$), $c__5548__auto___42199_nt_42204_seq__42123_42188_temp__5825__auto___42197$$ = $G__42200_i__42126_42191$$) : ($c__5548__auto___42199_nt_42204_seq__42123_42188_temp__5825__auto___42197$$ = $APP.cljs.core.first($G__42201_chunk__42124_42189_seq__42123_42198__$1$$), $APP.cljs.core.truth_($valid_nts_42187$$.cljs$core$IFn$_invoke$arity$1 ? 
        $valid_nts_42187$$.cljs$core$IFn$_invoke$arity$1($c__5548__auto___42199_nt_42204_seq__42123_42188_temp__5825__auto___42197$$) : $valid_nts_42187$$.call(null, $c__5548__auto___42199_nt_42204_seq__42123_42188_temp__5825__auto___42197$$)) || instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.subs.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($c__5548__auto___42199_nt_42204_seq__42123_42188_temp__5825__auto___42197$$), 
        1), " occurs on the right-hand side of your grammar, but not on the left"], 0)), $c__5548__auto___42199_nt_42204_seq__42123_42188_temp__5825__auto___42197$$ = $APP.cljs.core.next($G__42201_chunk__42124_42189_seq__42123_42198__$1$$), $G__42201_chunk__42124_42189_seq__42123_42198__$1$$ = null, $G__42202_count__42125_42190$$ = 0), $G__42200_i__42126_42191$$ = 0;
      } else {
        break;
      }
    }
  }
  return $grammar_map$$;
};
instaparse.cfg.build_parser = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return instaparse.cfg.build_parser.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return instaparse.cfg.build_parser.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
instaparse.cfg.build_parser.cljs$core$IFn$_invoke$arity$2 = function($spec$$, $output_format$$) {
  return instaparse.cfg.build_parser.cljs$core$IFn$_invoke$arity$3($spec$$, $output_format$$, !1);
};
instaparse.cfg.build_parser.cljs$core$IFn$_invoke$arity$3 = function($productions_spec$$, $output_format$$, $allow_namespaced_nts_QMARK_$$) {
  var $rules$$ = instaparse.gll.parse($APP.cljs.core.truth_($allow_namespaced_nts_QMARK_$$) ? instaparse.cfg.cfg_allow_namespaced_nts : instaparse.cfg.cfg, $APP.cljs$cst$2061$rules, $productions_spec$$, !1);
  if ($rules$$ instanceof instaparse.gll.Failure) {
    return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing grammar specification:\n", function() {
      var $sb__5670__auto__$$ = new $APP.goog.string.StringBuffer(), $_STAR_print_newline_STAR__orig_val__42153_42210$$ = $APP.cljs.core._STAR_print_newline_STAR_, $_STAR_print_fn_STAR__orig_val__42154_42211$$ = $APP.cljs.core._STAR_print_fn_STAR_;
      $APP.cljs.core._STAR_print_newline_STAR_ = !0;
      $APP.cljs.core._STAR_print_fn_STAR_ = function($x__5671__auto__$$) {
        return $sb__5670__auto__$$.append($x__5671__auto__$$);
      };
      try {
        $APP.cljs.core.println.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$rules$$], 0));
      } finally {
        $APP.cljs.core._STAR_print_fn_STAR_ = $_STAR_print_fn_STAR__orig_val__42154_42211$$, $APP.cljs.core._STAR_print_newline_STAR_ = $_STAR_print_newline_STAR__orig_val__42153_42210$$;
      }
      return $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($sb__5670__auto__$$);
    }()], 0));
  }
  $productions_spec$$ = $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule, $rules$$);
  $allow_namespaced_nts_QMARK_$$ = $APP.cljs.core.first($APP.cljs.core.first($productions_spec$$));
  return new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$1996$grammar, instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2($output_format$$, $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $productions_spec$$))), cljs$cst$1997$start_production, $allow_namespaced_nts_QMARK_$$, cljs$cst$2071$output_format, $output_format$$], null);
};
instaparse.cfg.build_parser.cljs$lang$maxFixedArity = 3;
instaparse.cfg.build_parser_from_combinators = function($grammar_map$$, $output_format$$, $start_production$$) {
  return $start_production$$ == null ? instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["When you build a parser from a map of parser combinators, you must provide a start production using the :start keyword argument."], 0)) : new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$1996$grammar, instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2($output_format$$, 
  $grammar_map$$)), cljs$cst$1997$start_production, $start_production$$, cljs$cst$2071$output_format, $output_format$$], null);
};
instaparse.cfg.ebnf = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$193_argseq__5756__auto__$$ = [], $len__5749__auto___42216$$ = arguments.length, $i__5750__auto___42217$$ = 0;;) {
    if ($i__5750__auto___42217$$ < $len__5749__auto___42216$$) {
      $args__5755__auto__$jscomp$193_argseq__5756__auto__$$.push(arguments[$i__5750__auto___42217$$]), $i__5750__auto___42217$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$193_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$193_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$193_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return instaparse.cfg.ebnf.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$193_argseq__5756__auto__$$);
};
instaparse.cfg.ebnf.cljs$core$IFn$_invoke$arity$variadic = function($spec$$, $_STAR_case_insensitive_literals_STAR__orig_val__42161_p__42159$$) {
  var $_STAR_case_insensitive_literals_STAR__temp_val__42162_map__42160__$1$$ = $APP.cljs.core.__destructure_map($_STAR_case_insensitive_literals_STAR__orig_val__42161_p__42159$$);
  $_STAR_case_insensitive_literals_STAR__orig_val__42161_p__42159$$ = instaparse.cfg._STAR_case_insensitive_literals_STAR_;
  $_STAR_case_insensitive_literals_STAR__temp_val__42162_map__42160__$1$$ = cljs$cst$2011$string_ci.cljs$core$IFn$_invoke$arity$2($_STAR_case_insensitive_literals_STAR__temp_val__42162_map__42160__$1$$, $APP.cljs$cst$205$default);
  instaparse.cfg._STAR_case_insensitive_literals_STAR_ = $_STAR_case_insensitive_literals_STAR__temp_val__42162_map__42160__$1$$;
  try {
    var $rules$$ = instaparse.gll.parse(instaparse.cfg.cfg, cljs$cst$2066$rules_or_parser, $spec$$, !1);
    return $rules$$ instanceof instaparse.gll.Failure ? instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing grammar specification:\n", function() {
      var $sb__5670__auto__$$ = new $APP.goog.string.StringBuffer(), $_STAR_print_newline_STAR__orig_val__42163_42219$$ = $APP.cljs.core._STAR_print_newline_STAR_, $_STAR_print_fn_STAR__orig_val__42164_42220$$ = $APP.cljs.core._STAR_print_fn_STAR_;
      $APP.cljs.core._STAR_print_newline_STAR_ = !0;
      $APP.cljs.core._STAR_print_fn_STAR_ = function($x__5671__auto__$$) {
        return $sb__5670__auto__$$.append($x__5671__auto__$$);
      };
      try {
        $APP.cljs.core.println.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$rules$$], 0));
      } finally {
        $APP.cljs.core._STAR_print_fn_STAR_ = $_STAR_print_fn_STAR__orig_val__42164_42220$$, $APP.cljs.core._STAR_print_newline_STAR_ = $_STAR_print_newline_STAR__orig_val__42163_42219$$;
      }
      return $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($sb__5670__auto__$$);
    }()], 0)) : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$2058$rule, $APP.cljs.core.ffirst($rules$$)) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule, $rules$$)) : instaparse.cfg.build_rule($APP.cljs.core.first($rules$$));
  } finally {
    instaparse.cfg._STAR_case_insensitive_literals_STAR_ = $_STAR_case_insensitive_literals_STAR__orig_val__42161_p__42159$$;
  }
};
instaparse.cfg.ebnf.cljs$lang$maxFixedArity = 1;
instaparse.cfg.ebnf.cljs$lang$applyTo = function($seq42157_seq42157__$1$$) {
  var $G__42158$$ = $APP.cljs.core.first($seq42157_seq42157__$1$$);
  $seq42157_seq42157__$1$$ = $APP.cljs.core.next($seq42157_seq42157__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__42158$$, $seq42157_seq42157__$1$$);
};
instaparse.transform = {};
instaparse.transform.map_preserving_meta = function($f$$, $l$$) {
  return $APP.cljs.core.with_meta($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($f$$, $l$$), $APP.cljs.core.meta($l$$));
};
instaparse.transform.merge_meta = function($obj$$, $metamap$$) {
  return ($obj$$ != null ? $obj$$.cljs$lang$protocol_mask$partition0$ & 262144 || $APP.cljs.core.PROTOCOL_SENTINEL === $obj$$.cljs$core$IWithMeta$ || ($obj$$.cljs$lang$protocol_mask$partition0$ ? 0 : $APP.cljs.core.native_satisfies_QMARK_($APP.cljs.core.IWithMeta, $obj$$)) : $APP.cljs.core.native_satisfies_QMARK_($APP.cljs.core.IWithMeta, $obj$$)) ? instaparse.gll.merge_meta($obj$$, $metamap$$) : $obj$$;
};
instaparse.transform.enlive_transform = function($transform_map$$, $parse_tree$$) {
  var $G__42014$jscomp$inline_4741_transform$$ = $APP.cljs$cst$78$tag.cljs$core$IFn$_invoke$arity$1($parse_tree$$);
  $G__42014$jscomp$inline_4741_transform$$ = $transform_map$$.cljs$core$IFn$_invoke$arity$1 ? $transform_map$$.cljs$core$IFn$_invoke$arity$1($G__42014$jscomp$inline_4741_transform$$) : $transform_map$$.call(null, $G__42014$jscomp$inline_4741_transform$$);
  return $APP.cljs.core.truth_($G__42014$jscomp$inline_4741_transform$$) ? instaparse.transform.merge_meta($APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($G__42014$jscomp$inline_4741_transform$$, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.transform.enlive_transform, $transform_map$$), $APP.cljs$cst$2006$content.cljs$core$IFn$_invoke$arity$1($parse_tree$$))), $APP.cljs.core.meta($parse_tree$$)) : $APP.cljs.core.truth_($APP.cljs$cst$78$tag.cljs$core$IFn$_invoke$arity$1($parse_tree$$)) ? 
  $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($parse_tree$$, $APP.cljs$cst$2006$content, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.transform.enlive_transform, $transform_map$$), $APP.cljs$cst$2006$content.cljs$core$IFn$_invoke$arity$1($parse_tree$$))) : $parse_tree$$;
};
instaparse.transform.hiccup_transform = function($transform_map$$, $parse_tree$$) {
  if ($APP.cljs.core.sequential_QMARK_($parse_tree$$) && $APP.cljs.core.seq($parse_tree$$)) {
    var $G__42019$jscomp$inline_4743_temp__5823__auto__$$ = $APP.cljs.core.first($parse_tree$$);
    $G__42019$jscomp$inline_4743_temp__5823__auto__$$ = $transform_map$$.cljs$core$IFn$_invoke$arity$1 ? $transform_map$$.cljs$core$IFn$_invoke$arity$1($G__42019$jscomp$inline_4743_temp__5823__auto__$$) : $transform_map$$.call(null, $G__42019$jscomp$inline_4743_temp__5823__auto__$$);
    return $APP.cljs.core.truth_($G__42019$jscomp$inline_4743_temp__5823__auto__$$) ? instaparse.transform.merge_meta($APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($G__42019$jscomp$inline_4743_temp__5823__auto__$$, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.transform.hiccup_transform, $transform_map$$), $APP.cljs.core.next($parse_tree$$))), $APP.cljs.core.meta($parse_tree$$)) : $APP.cljs.core.with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 
    1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.first($parse_tree$$)], null), $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.transform.hiccup_transform, $transform_map$$), $APP.cljs.core.next($parse_tree$$))), $APP.cljs.core.meta($parse_tree$$));
  }
  return $parse_tree$$;
};
instaparse.transform.transform = function($transform_map$$, $parse_tree$$) {
  if (typeof $parse_tree$$ === "string") {
    return $parse_tree$$;
  }
  var $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.truth_;
  var $JSCompiler_inline_result$jscomp$724_and__5023__auto__$$ = ($JSCompiler_inline_result$jscomp$724_and__5023__auto__$$ = $APP.cljs.core.map_QMARK_($parse_tree$$)) ? $APP.cljs$cst$78$tag.cljs$core$IFn$_invoke$arity$1($parse_tree$$) : $JSCompiler_inline_result$jscomp$724_and__5023__auto__$$;
  return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_inline_result$jscomp$724_and__5023__auto__$$) ? instaparse.transform.enlive_transform($transform_map$$, $parse_tree$$) : $APP.cljs.core.vector_QMARK_($parse_tree$$) && $APP.cljs.core.first($parse_tree$$) instanceof $APP.cljs.core.Keyword ? instaparse.transform.hiccup_transform($transform_map$$, $parse_tree$$) : $APP.cljs.core.sequential_QMARK_($parse_tree$$) ? instaparse.transform.map_preserving_meta($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.transform.transform, 
  $transform_map$$), $parse_tree$$) : $parse_tree$$ instanceof instaparse.gll.Failure ? $parse_tree$$ : instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid parse-tree, not recognized as either enlive or hiccup format."], 0));
};
instaparse.abnf = {};
instaparse.abnf._STAR_case_insensitive_STAR_ = !1;
instaparse.abnf.abnf_core = $APP.cljs.core.PersistentHashMap.fromArrays([cljs$cst$2072$CRLF, cljs$cst$2073$HTAB, cljs$cst$2074$LWSP, cljs$cst$2075$LF, cljs$cst$2076$VCHAR, cljs$cst$2077$DIGIT, cljs$cst$2078$SP, cljs$cst$2079$HEXDIG, cljs$cst$2080$CTL, cljs$cst$2081$DQUOTE, cljs$cst$2082$WSP, cljs$cst$2083$CR, cljs$cst$2084$OCTET, cljs$cst$2085$ALPHA, cljs$cst$2086$CHAR, cljs$cst$2087$BIT], [instaparse.combinators_source.string("\r\n"), instaparse.combinators_source.string("\t"), instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(" "), 
instaparse.combinators_source.string("\t")], 0)), instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string("\r\n"), instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(" "), instaparse.combinators_source.string("\t")], 0))], 0)))], 0)), instaparse.combinators_source.string("\n"), 
instaparse.combinators_source.regexp("[\\u0021-\\u007E]"), instaparse.combinators_source.regexp("[0-9]"), instaparse.combinators_source.string(" "), instaparse.combinators_source.regexp("[0-9a-fA-F]"), instaparse.combinators_source.regexp("[\\u0000-\\u001F|\\u007F]"), instaparse.combinators_source.string('"'), instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(" "), instaparse.combinators_source.string("\t")], 
0)), instaparse.combinators_source.string("\r"), instaparse.combinators_source.regexp("[\\u0000-\\u00FF]"), instaparse.combinators_source.regexp("[a-zA-Z]"), instaparse.combinators_source.regexp("[\\u0001-\\u007F]"), instaparse.combinators_source.regexp("[01]")]);
instaparse.abnf.abnf_grammar_common = "\n\x3crulelist\x3e \x3d \x3copt-whitespace\x3e (rule | hide-tag-rule)+;\nrule \x3d rulename-left \x3cdefined-as\x3e alternation \x3copt-whitespace\x3e;\nhide-tag-rule \x3d hide-tag \x3cdefined-as\x3e alternation \x3copt-whitespace\x3e;\nrulename-left \x3d rulename;\nrulename-right \x3d rulename;\n\x3chide-tag\x3e \x3d \x3c'\x3c' opt-whitespace\x3e rulename-left \x3copt-whitespace '\x3e'\x3e;\ndefined-as \x3d \x3copt-whitespace\x3e ('\x3d' | '\x3d/') \x3copt-whitespace\x3e;\nalternation \x3d concatenation (\x3copt-whitespace '/' opt-whitespace\x3e concatenation)*;\nconcatenation \x3d repetition (\x3cwhitespace\x3e repetition)*;\nrepetition \x3d [repeat] \x3copt-whitespace\x3e element;\nrepeat \x3d NUM | (NUM? '*' NUM?);\n\x3celement\x3e \x3d rulename-right | group | hide | option | char-val | num-val\n          | look | neg | regexp;\nlook \x3d \x3c'\x26' opt-whitespace\x3e element;\nneg \x3d \x3c'!' opt-whitespace\x3e element;\n\x3cgroup\x3e \x3d \x3c'(' opt-whitespace\x3e alternation \x3copt-whitespace ')'\x3e;\noption \x3d \x3c'[' opt-whitespace\x3e alternation \x3copt-whitespace ']'\x3e;\nhide \x3d \x3c'\x3c' opt-whitespace\x3e alternation \x3copt-whitespace '\x3e'\x3e;\nchar-val \x3d \x3c'\\u0022'\x3e #'[\\u0020-\\u0021\\u0023-\\u007E]'* \x3c'\\u0022'\x3e (* double-quoted strings *)\n         | \x3c'\\u0027'\x3e #'[\\u0020-\\u0026(-~]'* \x3c'\\u0027'\x3e;  (* single-quoted strings *)\n\x3cnum-val\x3e \x3d \x3c'%'\x3e (bin-val | dec-val | hex-val);\nbin-val \x3d \x3c'b'\x3e bin-char\n          [ (\x3c'.'\x3e bin-char)+ | ('-' bin-char) ];\nbin-char \x3d ('0' | '1')+;\ndec-val \x3d \x3c'd'\x3e dec-char\n          [ (\x3c'.'\x3e dec-char)+ | ('-' dec-char) ];\ndec-char \x3d DIGIT+;\nhex-val \x3d \x3c'x'\x3e hex-char\n          [ (\x3c'.'\x3e hex-char)+ | ('-' hex-char) ];\nhex-char \x3d HEXDIG+;\nNUM \x3d DIGIT+;\n\x3cDIGIT\x3e \x3d #'[0-9]';\n\x3cHEXDIG\x3e \x3d #'[0-9a-fA-F]';\n\n\n(* extra entrypoint to be used by the abnf combinator *)\n\x3crules-or-parser\x3e \x3d rulelist | alternation;\n  ";
instaparse.abnf.abnf_grammar_clj_only = "\n\x3crulename\x3e \x3d #'[a-zA-Z][-a-zA-Z0-9]*(?x) #identifier';\nopt-whitespace \x3d #'\\s*(?:;.*?(?:\\u000D?\\u000A\\s*|$))*(?x) # optional whitespace or comments';\nwhitespace \x3d #'\\s+(?:;.*?\\u000D?\\u000A\\s*)*(?x) # whitespace or comments';\nregexp \x3d #\"#'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'(?x) #Single-quoted regexp\"\n       | #\"#\\\"[^\\\"\\\\]*(?:\\\\.[^\\\"\\\\]*)*\\\"(?x) #Double-quoted regexp\"\n";
instaparse.abnf.abnf_grammar_cljs_only = "\n\x3crulename\x3e \x3d #'[a-zA-Z][-a-zA-Z0-9]*';\nopt-whitespace \x3d #'\\s*(?:;.*?(?:\\u000D?\\u000A\\s*|$))*';\nwhitespace \x3d #'\\s+(?:;.*?\\u000D?\\u000A\\s*)*';\nregexp \x3d #\"#'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'\"\n       | #\"#\\\"[^\\\"\\\\]*(?:\\\\.[^\\\"\\\\]*)*\\\"\"\n";
instaparse.abnf.abnf_parser = $APP.cljs.core.PersistentHashMap.fromArrays([cljs$cst$2014$neg, $APP.cljs$cst$2088$group, cljs$cst$2089$hide_tag, cljs$cst$2090$whitespace, $APP.cljs$cst$2091$element, cljs$cst$2092$hide_tag_rule, cljs$cst$2013$look, cljs$cst$2093$bin_char, $APP.cljs$cst$2058$rule, cljs$cst$2094$rulename_right, cljs$cst$2077$DIGIT, cljs$cst$2095$NUM, cljs$cst$2096$char_val, cljs$cst$2097$num_val, cljs$cst$1991$hide, cljs$cst$2098$defined_as, cljs$cst$2079$HEXDIG, cljs$cst$2099$option, 
cljs$cst$2100$hex_char, cljs$cst$2101$rulename, cljs$cst$2102$bin_val, cljs$cst$2103$dec_val, cljs$cst$2104$concatenation, cljs$cst$2105$alternation, cljs$cst$1992$regexp, cljs$cst$2106$repetition, cljs$cst$2107$rulename_left, cljs$cst$2108$rulelist, cljs$cst$2056$opt_whitespace, cljs$cst$2109$repeat, cljs$cst$2110$hex_val, cljs$cst$2111$dec_char, cljs$cst$2066$rules_or_parser], [new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, 
new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "!"], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2056$opt_whitespace], null), null, 1, null), 2, null), cljs$cst$1991$hide, 
!0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, $APP.cljs$cst$2091$element], null), null, 1, null), 2, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2014$neg], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, 
new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "("], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2056$opt_whitespace], null), null, 1, null), 
2, null), cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2105$alternation], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, 
cljs$cst$2056$opt_whitespace], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, ")"], null), null, 1, null), 2, null), cljs$cst$1991$hide, !0], null), null, 1, null), 2, null), 3, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1995$raw], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, 
cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "\x3c"], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2056$opt_whitespace], 
null), null, 1, null), 2, null), cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2107$rulename_left], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, 
$APP.cljs$cst$221$keyword, cljs$cst$2056$opt_whitespace], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "\x3e"], null), null, 1, null), 2, null), cljs$cst$1991$hide, !0], null), null, 1, null), 2, null), 3, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1995$raw], null)], null), $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("\\s+(?:;.*?\\u000D?\\u000A\\s*)*"), 
new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2090$whitespace], null)], null)], 0)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1985$alt, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, 
cljs$cst$2094$rulename_right], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, $APP.cljs$cst$2088$group], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$1991$hide], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, 
$APP.cljs$cst$221$keyword, cljs$cst$2099$option], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2096$char_val], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2097$num_val], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, 
cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2013$look], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2014$neg], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$1992$regexp], null), null, 1, null), 2, null), 3, null), 4, null), 5, null), 6, null), 7, null), 8, null), 
9, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1995$raw], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2089$hide_tag], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2098$defined_as, cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2105$alternation], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2056$opt_whitespace, cljs$cst$1991$hide, 
!0], null), null, 1, null), 2, null), 3, null), 4, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2092$hide_tag_rule], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, 
new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "\x26"], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2056$opt_whitespace], null), null, 1, null), 2, null), cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, 
cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, $APP.cljs$cst$2091$element], null), null, 1, null), 2, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2013$look], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$2008$plus, $APP.cljs$cst$1420$parser, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1985$alt, 
cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "0"], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "1"], null), null, 1, null), 2, null)], null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, 
$APP.cljs$cst$2004$key, cljs$cst$2093$bin_char], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2107$rulename_left], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, 
cljs$cst$2098$defined_as, cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2105$alternation], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2056$opt_whitespace, cljs$cst$1991$hide, !0], null), null, 1, null), 2, null), 3, null), 4, null), $APP.cljs$cst$1994$red, 
new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, $APP.cljs$cst$2058$rule], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2101$rulename, $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2094$rulename_right], null)], 
null), $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[0-9]"), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1995$raw], null)], null)], 0)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$2008$plus, $APP.cljs$cst$1420$parser, new $APP.cljs.core.PersistentArrayMap(null, 
2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2077$DIGIT], null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2095$NUM], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1985$alt, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, 
cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, '"', cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$2009$star, $APP.cljs$cst$1420$parser, $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[\\u0020-\\u0021\\u0023-\\u007E]"), 
$APP.cljs.core.PersistentArrayMap.EMPTY], 0))], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, '"', cljs$cst$1991$hide, !0], null), null, 1, null), 2, null), 3, null)], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "'", cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$2009$star, $APP.cljs$cst$1420$parser, $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[\\u0020-\\u0026(-~]"), $APP.cljs.core.PersistentArrayMap.EMPTY], 0))], null), new $APP.cljs.core.List(null, 
new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "'", cljs$cst$1991$hide, !0], null), null, 1, null), 2, null), 3, null)], null), null, 1, null), 2, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2096$char_val], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, 
cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "%", cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1985$alt, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2102$bin_val], 
null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2103$dec_val], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2110$hex_val], null), null, 1, null), 2, null), 3, null)], null), null, 1, null), 2, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$1993$reduction_type, 
$APP.cljs$cst$1995$raw], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "\x3c"], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 
2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2056$opt_whitespace], null), null, 1, null), 2, null), cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2105$alternation], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, 
new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2056$opt_whitespace], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "\x3e"], null), null, 1, null), 2, null), cljs$cst$1991$hide, !0], null), null, 1, null), 2, null), 3, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, 
$APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$1991$hide], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2056$opt_whitespace, cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, 
cljs$cst$1985$alt, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "\x3d"], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "\x3d/"], null), null, 1, null), 2, null)], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, 
cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2056$opt_whitespace, cljs$cst$1991$hide, !0], null), null, 1, null), 2, null), 3, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2098$defined_as], null)], null), $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[0-9a-fA-F]"), 
new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1995$raw], null)], null)], 0)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 
2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "["], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2056$opt_whitespace], null), null, 1, null), 2, null), cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2105$alternation], 
null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2056$opt_whitespace], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "]"], null), null, 
1, null), 2, null), cljs$cst$1991$hide, !0], null), null, 1, null), 2, null), 3, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2099$option], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$2008$plus, $APP.cljs$cst$1420$parser, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, 
cljs$cst$2079$HEXDIG], null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2100$hex_char], null)], null), $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[a-zA-Z][-a-zA-Z0-9]*"), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 
1, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1995$raw], null)], null)], 0)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "b", cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, 
cljs$cst$2093$bin_char], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$1834$opt, $APP.cljs$cst$1420$parser, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1985$alt, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$2008$plus, $APP.cljs$cst$1420$parser, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, 
cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, ".", cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2093$bin_char], null), null, 1, null), 2, null)], null)], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 
2, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "-"], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2093$bin_char], null), null, 1, null), 2, null)], null), null, 1, null), 2, null)], null)], null), null, 1, null), 
2, null), 3, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2102$bin_val], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "d", cljs$cst$1991$hide, 
!0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2111$dec_char], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$1834$opt, $APP.cljs$cst$1420$parser, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1985$alt, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 
2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$2008$plus, $APP.cljs$cst$1420$parser, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, ".", cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, 
cljs$cst$2111$dec_char], null), null, 1, null), 2, null)], null)], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "-"], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, 
cljs$cst$2111$dec_char], null), null, 1, null), 2, null)], null), null, 1, null), 2, null)], null)], null), null, 1, null), 2, null), 3, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2103$dec_val], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 
2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2106$repetition], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$2009$star, $APP.cljs$cst$1420$parser, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, 
cljs$cst$2090$whitespace, cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2106$repetition], null), null, 1, null), 2, null)], null)], null), null, 1, null), 2, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2104$concatenation], null)], null), 
new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2104$concatenation], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$2009$star, $APP.cljs$cst$1420$parser, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, 
cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2056$opt_whitespace], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, 
"/"], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2056$opt_whitespace], null), null, 1, null), 2, null), 3, null), cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2104$concatenation], null), null, 1, null), 2, null)], null)], null), null, 1, null), 
2, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2105$alternation], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1985$alt, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("#'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'"), 
$APP.cljs.core.PersistentArrayMap.EMPTY], 0)), new $APP.cljs.core.List(null, $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp('#\\"[^\\"\\\\]*(?:\\\\.[^\\"\\\\]*)*\\"'), $APP.cljs.core.PersistentArrayMap.EMPTY], 0)), null, 1, null), 2, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$1992$regexp], 
null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$1834$opt, $APP.cljs$cst$1420$parser, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2109$repeat], null)], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 
3, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2056$opt_whitespace, cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, $APP.cljs$cst$2091$element], null), null, 1, null), 2, null), 3, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, 
cljs$cst$2106$repetition], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2101$rulename, $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2107$rulename_left], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, 
new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2056$opt_whitespace, cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$2008$plus, $APP.cljs$cst$1420$parser, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1985$alt, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 
2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, $APP.cljs$cst$2058$rule], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2092$hide_tag_rule], null), null, 1, null), 2, null)], null)], null), null, 1, null), 2, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1995$raw], null)], null), $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("\\s*(?:;.*?(?:\\u000D?\\u000A\\s*|$))*"), 
new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2056$opt_whitespace], null)], null)], 0)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1985$alt, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, 
cljs$cst$2095$NUM], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$1834$opt, $APP.cljs$cst$1420$parser, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2095$NUM], null)], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 
2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "*"], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$1834$opt, $APP.cljs$cst$1420$parser, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2095$NUM], null)], null), null, 1, null), 2, null), 3, null)], null), null, 1, null), 2, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 
2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2109$repeat], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "x", cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, 
[$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2100$hex_char], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$1834$opt, $APP.cljs$cst$1420$parser, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1985$alt, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$2008$plus, $APP.cljs$cst$1420$parser, 
new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, ".", cljs$cst$1991$hide, !0], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2100$hex_char], null), null, 1, null), 2, null)], 
null)], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$1983$cat, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $APP.cljs$cst$198$string, $APP.cljs$cst$198$string, "-"], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2100$hex_char], null), null, 
1, null), 2, null)], null), null, 1, null), 2, null)], null)], null), null, 1, null), 2, null), 3, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2110$hex_val], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, $APP.cljs$cst$2008$plus, $APP.cljs$cst$1420$parser, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, 
$APP.cljs$cst$221$keyword, cljs$cst$2077$DIGIT], null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1675$hiccup, $APP.cljs$cst$2004$key, cljs$cst$2111$dec_char], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$78$tag, cljs$cst$1985$alt, cljs$cst$1990$parsers, new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, 
cljs$cst$2108$rulelist], null), new $APP.cljs.core.List(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, cljs$cst$2012$nt, $APP.cljs$cst$221$keyword, cljs$cst$2105$alternation], null), null, 1, null), 2, null), $APP.cljs$cst$1994$red, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$1993$reduction_type, $APP.cljs$cst$1995$raw], null)], null)]);
instaparse.abnf.get_char_combinator = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$194_argseq__5756__auto__$$ = [], $len__5749__auto___42610$$ = arguments.length, $i__5750__auto___42611$$ = 0;;) {
    if ($i__5750__auto___42611$$ < $len__5749__auto___42610$$) {
      $args__5755__auto__$jscomp$194_argseq__5756__auto__$$.push(arguments[$i__5750__auto___42611$$]), $i__5750__auto___42611$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$194_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$194_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$194_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return instaparse.abnf.get_char_combinator.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$194_argseq__5756__auto__$$);
};
instaparse.abnf.get_char_combinator.cljs$core$IFn$_invoke$arity$variadic = function($nums$$) {
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-", $APP.cljs.core.second($nums$$))) {
    var $lo$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($nums$$, 0, null);
    $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($nums$$, 1, null);
    var $hi$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($nums$$, 2, null);
    return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2($lo$$, $hi$$);
  }
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat, function() {
    return function $instaparse$abnf$iter__42548$$($s__42549$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (;;) {
          var $s__42549__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__42549$$);
          if ($s__42549__$2_temp__5825__auto__$$) {
            if ($APP.cljs.core.chunked_seq_QMARK_($s__42549__$2_temp__5825__auto__$$)) {
              var $JSCompiler_inline_result$jscomp$725_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__42549__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$725_c__5501__auto__$$), $b__42551_n$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              a: {
                for (var $i__42550$$ = 0;;) {
                  if ($i__42550$$ < $size__5502__auto__$$) {
                    var $n$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$725_c__5501__auto__$$, $i__42550$$);
                    $APP.cljs.core.chunk_append($b__42551_n$$, instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1($n$$));
                    $i__42550$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$725_c__5501__auto__$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$725_c__5501__auto__$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$725_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__42551_n$$), $instaparse$abnf$iter__42548$$($APP.cljs.core.chunk_rest($s__42549__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__42551_n$$), null);
            }
            $b__42551_n$$ = $APP.cljs.core.first($s__42549__$2_temp__5825__auto__$$);
            return $APP.cljs.core.cons(instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1($b__42551_n$$), $instaparse$abnf$iter__42548$$($APP.cljs.core.rest($s__42549__$2_temp__5825__auto__$$)));
          }
          return null;
        }
      }, null, null);
    }($nums$$);
  }());
};
instaparse.abnf.get_char_combinator.cljs$lang$maxFixedArity = 0;
instaparse.abnf.get_char_combinator.cljs$lang$applyTo = function($seq42544$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq42544$$));
};
instaparse.abnf.project = function($m$$, $ks$$) {
  return $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, function() {
    return function $instaparse$abnf$project_$_iter__42552$$($s__42553$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (var $s__42553__$1_s__42553__$2_temp__5825__auto__$$ = $s__42553$$;;) {
          if ($s__42553__$1_s__42553__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__42553__$1_s__42553__$2_temp__5825__auto__$$)) {
            if ($APP.cljs.core.chunked_seq_QMARK_($s__42553__$1_s__42553__$2_temp__5825__auto__$$)) {
              var $JSCompiler_inline_result$jscomp$726_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__42553__$1_s__42553__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$726_c__5501__auto__$$), $b__42555_k$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              a: {
                for (var $i__42554$$ = 0;;) {
                  if ($i__42554$$ < $size__5502__auto__$$) {
                    var $k$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$726_c__5501__auto__$$, $i__42554$$);
                    $APP.cljs.core.contains_QMARK_($m$$, $k$$) && $APP.cljs.core.chunk_append($b__42555_k$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$k$$, $m$$.cljs$core$IFn$_invoke$arity$1 ? $m$$.cljs$core$IFn$_invoke$arity$1($k$$) : $m$$.call(null, $k$$)], null));
                    $i__42554$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$726_c__5501__auto__$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$726_c__5501__auto__$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$726_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__42555_k$$), $instaparse$abnf$project_$_iter__42552$$($APP.cljs.core.chunk_rest($s__42553__$1_s__42553__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__42555_k$$), null);
            }
            $b__42555_k$$ = $APP.cljs.core.first($s__42553__$1_s__42553__$2_temp__5825__auto__$$);
            if ($APP.cljs.core.contains_QMARK_($m$$, $b__42555_k$$)) {
              return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$b__42555_k$$, $m$$.cljs$core$IFn$_invoke$arity$1 ? $m$$.cljs$core$IFn$_invoke$arity$1($b__42555_k$$) : $m$$.call(null, $b__42555_k$$)], null), $instaparse$abnf$project_$_iter__42552$$($APP.cljs.core.rest($s__42553__$1_s__42553__$2_temp__5825__auto__$$)));
            }
            $s__42553__$1_s__42553__$2_temp__5825__auto__$$ = $APP.cljs.core.rest($s__42553__$1_s__42553__$2_temp__5825__auto__$$);
          } else {
            return null;
          }
        }
      }, null, null);
    }($ks$$);
  }());
};
instaparse.abnf.merge_core = function($grammar_map$$) {
  return $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.abnf.project(instaparse.abnf.abnf_core, $APP.cljs.core.distinct.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.vals($grammar_map$$)], 0)))), $grammar_map$$], 0));
};
instaparse.abnf.hide_tag_QMARK_ = function($p$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$1994$red.cljs$core$IFn$_invoke$arity$1($p$$), instaparse.reduction.raw_non_terminal_reduction);
};
instaparse.abnf.alt_preserving_hide_tag = function($p1$$, $p2$$) {
  var $hide_tag_p1_QMARK_$$ = instaparse.abnf.hide_tag_QMARK_($p1$$), $hide_tag_p2_QMARK_$$ = instaparse.abnf.hide_tag_QMARK_($p2$$);
  return $hide_tag_p1_QMARK_$$ && $hide_tag_p2_QMARK_$$ ? instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($p1$$, $APP.cljs$cst$1994$red), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($p2$$, $APP.cljs$cst$1994$red)], 0))) : $hide_tag_p1_QMARK_$$ ? instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($p1$$, 
  $APP.cljs$cst$1994$red), $p2$$], 0))) : $hide_tag_p2_QMARK_$$ ? instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$p1$$, $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($p2$$, $APP.cljs$cst$1994$red)], 0))) : instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$p1$$, $p2$$], 0));
};
instaparse.abnf.parse_int = parseInt;
instaparse.abnf.abnf_transformer = $APP.cljs.core.PersistentHashMap.fromArrays([cljs$cst$2014$neg, cljs$cst$2092$hide_tag_rule, cljs$cst$2013$look, cljs$cst$2093$bin_char, $APP.cljs$cst$2058$rule, cljs$cst$2094$rulename_right, cljs$cst$2095$NUM, cljs$cst$2096$char_val, cljs$cst$1991$hide, cljs$cst$2099$option, cljs$cst$2100$hex_char, cljs$cst$2102$bin_val, cljs$cst$2103$dec_val, cljs$cst$2104$concatenation, cljs$cst$2105$alternation, cljs$cst$1992$regexp, cljs$cst$2106$repetition, cljs$cst$2107$rulename_left, 
cljs$cst$2109$repeat, cljs$cst$2110$hex_val, cljs$cst$2111$dec_char], [instaparse.combinators_source.neg, function($tag$$, $rule$$) {
  return $APP.cljs.core.PersistentArrayMap.createAsIfByAssoc([$tag$$, instaparse.combinators_source.hide_tag($rule$$)]);
}, instaparse.combinators_source.look, function() {
  var $G__42621__delegate$$ = function($G__42561_cs$$) {
    $G__42561_cs$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.str, $G__42561_cs$$);
    return instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$2 ? instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$2($G__42561_cs$$, 2) : instaparse.abnf.parse_int.call(null, $G__42561_cs$$, 2);
  }, $G__42621$$ = function($var_args$$) {
    var $G__42622__i_cs$$ = null;
    if (arguments.length > 0) {
      $G__42622__i_cs$$ = 0;
      for (var $G__42622__a$$ = Array(arguments.length - 0); $G__42622__i_cs$$ < $G__42622__a$$.length;) {
        $G__42622__a$$[$G__42622__i_cs$$] = arguments[$G__42622__i_cs$$ + 0], ++$G__42622__i_cs$$;
      }
      $G__42622__i_cs$$ = new $APP.cljs.core.IndexedSeq($G__42622__a$$, 0, null);
    }
    return $G__42621__delegate$$.call(this, $G__42622__i_cs$$);
  };
  $G__42621$$.cljs$lang$maxFixedArity = 0;
  $G__42621$$.cljs$lang$applyTo = function($arglist__42623_cs$$) {
    $arglist__42623_cs$$ = $APP.cljs.core.seq($arglist__42623_cs$$);
    return $G__42621__delegate$$($arglist__42623_cs$$);
  };
  $G__42621$$.cljs$core$IFn$_invoke$arity$variadic = $G__42621__delegate$$;
  return $G__42621$$;
}(), $APP.cljs.core.hash_map, function() {
  var $G__42624__delegate$$ = function($rest__42559_SHARP_$$) {
    return $APP.cljs.core.truth_(instaparse.abnf._STAR_case_insensitive_STAR_) ? instaparse.combinators_source.nt($APP.cljs.core.keyword.cljs$core$IFn$_invoke$arity$1($APP.clojure.string.upper_case($APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.str, $rest__42559_SHARP_$$)))) : instaparse.combinators_source.nt($APP.cljs.core.keyword.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.str, $rest__42559_SHARP_$$)));
  }, $G__42624$$ = function($var_args$$) {
    var $G__42627__i_rest__42559_SHARP_$$ = null;
    if (arguments.length > 0) {
      $G__42627__i_rest__42559_SHARP_$$ = 0;
      for (var $G__42627__a$$ = Array(arguments.length - 0); $G__42627__i_rest__42559_SHARP_$$ < $G__42627__a$$.length;) {
        $G__42627__a$$[$G__42627__i_rest__42559_SHARP_$$] = arguments[$G__42627__i_rest__42559_SHARP_$$ + 0], ++$G__42627__i_rest__42559_SHARP_$$;
      }
      $G__42627__i_rest__42559_SHARP_$$ = new $APP.cljs.core.IndexedSeq($G__42627__a$$, 0, null);
    }
    return $G__42624__delegate$$.call(this, $G__42627__i_rest__42559_SHARP_$$);
  };
  $G__42624$$.cljs$lang$maxFixedArity = 0;
  $G__42624$$.cljs$lang$applyTo = function($arglist__42628_rest__42559_SHARP_$$) {
    $arglist__42628_rest__42559_SHARP_$$ = $APP.cljs.core.seq($arglist__42628_rest__42559_SHARP_$$);
    return $G__42624__delegate$$($arglist__42628_rest__42559_SHARP_$$);
  };
  $G__42624$$.cljs$core$IFn$_invoke$arity$variadic = $G__42624__delegate$$;
  return $G__42624$$;
}(), function() {
  var $G__42629__delegate$$ = function($G__42563_rest__42560_SHARP_$$) {
    $G__42563_rest__42560_SHARP_$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.str, $G__42563_rest__42560_SHARP_$$);
    return instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$1 ? instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$1($G__42563_rest__42560_SHARP_$$) : instaparse.abnf.parse_int.call(null, $G__42563_rest__42560_SHARP_$$);
  }, $G__42629$$ = function($var_args$$) {
    var $G__42631__i_rest__42560_SHARP_$$ = null;
    if (arguments.length > 0) {
      $G__42631__i_rest__42560_SHARP_$$ = 0;
      for (var $G__42631__a$$ = Array(arguments.length - 0); $G__42631__i_rest__42560_SHARP_$$ < $G__42631__a$$.length;) {
        $G__42631__a$$[$G__42631__i_rest__42560_SHARP_$$] = arguments[$G__42631__i_rest__42560_SHARP_$$ + 0], ++$G__42631__i_rest__42560_SHARP_$$;
      }
      $G__42631__i_rest__42560_SHARP_$$ = new $APP.cljs.core.IndexedSeq($G__42631__a$$, 0, null);
    }
    return $G__42629__delegate$$.call(this, $G__42631__i_rest__42560_SHARP_$$);
  };
  $G__42629$$.cljs$lang$maxFixedArity = 0;
  $G__42629$$.cljs$lang$applyTo = function($arglist__42633_rest__42560_SHARP_$$) {
    $arglist__42633_rest__42560_SHARP_$$ = $APP.cljs.core.seq($arglist__42633_rest__42560_SHARP_$$);
    return $G__42629__delegate$$($arglist__42633_rest__42560_SHARP_$$);
  };
  $G__42629$$.cljs$core$IFn$_invoke$arity$variadic = $G__42629__delegate$$;
  return $G__42629$$;
}(), function() {
  var $G__42634__delegate$$ = function($cs$$) {
    return instaparse.cfg.string_PLUS_($APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.str, $cs$$), !0);
  }, $G__42634$$ = function($var_args$$) {
    var $G__42636__i_cs$$ = null;
    if (arguments.length > 0) {
      $G__42636__i_cs$$ = 0;
      for (var $G__42636__a$$ = Array(arguments.length - 0); $G__42636__i_cs$$ < $G__42636__a$$.length;) {
        $G__42636__a$$[$G__42636__i_cs$$] = arguments[$G__42636__i_cs$$ + 0], ++$G__42636__i_cs$$;
      }
      $G__42636__i_cs$$ = new $APP.cljs.core.IndexedSeq($G__42636__a$$, 0, null);
    }
    return $G__42634__delegate$$.call(this, $G__42636__i_cs$$);
  };
  $G__42634$$.cljs$lang$maxFixedArity = 0;
  $G__42634$$.cljs$lang$applyTo = function($arglist__42637_cs$$) {
    $arglist__42637_cs$$ = $APP.cljs.core.seq($arglist__42637_cs$$);
    return $G__42634__delegate$$($arglist__42637_cs$$);
  };
  $G__42634$$.cljs$core$IFn$_invoke$arity$variadic = $G__42634__delegate$$;
  return $G__42634$$;
}(), instaparse.combinators_source.hide, instaparse.combinators_source.opt, function() {
  var $G__42638__delegate$$ = function($G__42564_cs$$) {
    $G__42564_cs$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.str, $G__42564_cs$$);
    return instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$2 ? instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$2($G__42564_cs$$, 16) : instaparse.abnf.parse_int.call(null, $G__42564_cs$$, 16);
  }, $G__42638$$ = function($var_args$$) {
    var $G__42640__i_cs$$ = null;
    if (arguments.length > 0) {
      $G__42640__i_cs$$ = 0;
      for (var $G__42640__a$$ = Array(arguments.length - 0); $G__42640__i_cs$$ < $G__42640__a$$.length;) {
        $G__42640__a$$[$G__42640__i_cs$$] = arguments[$G__42640__i_cs$$ + 0], ++$G__42640__i_cs$$;
      }
      $G__42640__i_cs$$ = new $APP.cljs.core.IndexedSeq($G__42640__a$$, 0, null);
    }
    return $G__42638__delegate$$.call(this, $G__42640__i_cs$$);
  };
  $G__42638$$.cljs$lang$maxFixedArity = 0;
  $G__42638$$.cljs$lang$applyTo = function($arglist__42641_cs$$) {
    $arglist__42641_cs$$ = $APP.cljs.core.seq($arglist__42641_cs$$);
    return $G__42638__delegate$$($arglist__42641_cs$$);
  };
  $G__42638$$.cljs$core$IFn$_invoke$arity$variadic = $G__42638__delegate$$;
  return $G__42638$$;
}(), instaparse.abnf.get_char_combinator, instaparse.abnf.get_char_combinator, instaparse.combinators_source.cat, instaparse.combinators_source.alt, $APP.cljs.core.comp.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.regexp, instaparse.cfg.process_regexp), function() {
  var $G__42643$$ = null, $G__42643__2$$ = function($repeat$$, $element$$) {
    return $APP.cljs.core.empty_QMARK_($repeat$$) ? instaparse.combinators_source.star($element$$) : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count($repeat$$), 2) ? instaparse.combinators_source.rep(cljs$cst$2112$low.cljs$core$IFn$_invoke$arity$1($repeat$$), cljs$cst$2113$high.cljs$core$IFn$_invoke$arity$1($repeat$$), $element$$) : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs$cst$2112$low.cljs$core$IFn$_invoke$arity$1($repeat$$), 1) ? instaparse.combinators_source.plus($element$$) : 
    $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs$cst$2113$high.cljs$core$IFn$_invoke$arity$1($repeat$$), 1) ? instaparse.combinators_source.opt($element$$) : instaparse.combinators_source.rep(function() {
      var $or__5025__auto__$$ = cljs$cst$2112$low.cljs$core$IFn$_invoke$arity$1($repeat$$);
      return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : 0;
    }(), function() {
      var $or__5025__auto__$$ = cljs$cst$2113$high.cljs$core$IFn$_invoke$arity$1($repeat$$);
      return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : Infinity;
    }(), $element$$);
  };
  $G__42643$$ = function($repeat$$, $element$$) {
    switch(arguments.length) {
      case 1:
        return $repeat$$;
      case 2:
        return $G__42643__2$$.call(this, $repeat$$, $element$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__42643$$.cljs$core$IFn$_invoke$arity$1 = function($element$$) {
    return $element$$;
  };
  $G__42643$$.cljs$core$IFn$_invoke$arity$2 = $G__42643__2$$;
  return $G__42643$$;
}(), function() {
  var $G__42644__delegate$$ = function($rest__42558_SHARP_$$) {
    return $APP.cljs.core.truth_(instaparse.abnf._STAR_case_insensitive_STAR_) ? $APP.cljs.core.keyword.cljs$core$IFn$_invoke$arity$1($APP.clojure.string.upper_case($APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.str, $rest__42558_SHARP_$$))) : $APP.cljs.core.keyword.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.str, $rest__42558_SHARP_$$));
  }, $G__42644$$ = function($var_args$$) {
    var $G__42645__i_rest__42558_SHARP_$$ = null;
    if (arguments.length > 0) {
      $G__42645__i_rest__42558_SHARP_$$ = 0;
      for (var $G__42645__a$$ = Array(arguments.length - 0); $G__42645__i_rest__42558_SHARP_$$ < $G__42645__a$$.length;) {
        $G__42645__a$$[$G__42645__i_rest__42558_SHARP_$$] = arguments[$G__42645__i_rest__42558_SHARP_$$ + 0], ++$G__42645__i_rest__42558_SHARP_$$;
      }
      $G__42645__i_rest__42558_SHARP_$$ = new $APP.cljs.core.IndexedSeq($G__42645__a$$, 0, null);
    }
    return $G__42644__delegate$$.call(this, $G__42645__i_rest__42558_SHARP_$$);
  };
  $G__42644$$.cljs$lang$maxFixedArity = 0;
  $G__42644$$.cljs$lang$applyTo = function($arglist__42646_rest__42558_SHARP_$$) {
    $arglist__42646_rest__42558_SHARP_$$ = $APP.cljs.core.seq($arglist__42646_rest__42558_SHARP_$$);
    return $G__42644__delegate$$($arglist__42646_rest__42558_SHARP_$$);
  };
  $G__42644$$.cljs$core$IFn$_invoke$arity$variadic = $G__42644__delegate$$;
  return $G__42644$$;
}(), function() {
  var $G__42647__delegate$$ = function($items$$) {
    var $G__42566$$ = $APP.cljs.core.count($items$$);
    switch($G__42566$$) {
      case 1:
        return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.first($items$$), "*") ? $APP.cljs.core.PersistentArrayMap.EMPTY : new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$2112$low, $APP.cljs.core.first($items$$), cljs$cst$2113$high, $APP.cljs.core.first($items$$)], null);
      case 2:
        return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.first($items$$), "*") ? new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$2113$high, $APP.cljs.core.second($items$$)], null) : new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$2112$low, $APP.cljs.core.first($items$$)], null);
      case 3:
        return new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$2112$low, $APP.cljs.core.first($items$$), cljs$cst$2113$high, $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$2($items$$, 2)], null);
      default:
        throw Error(["No matching clause: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($G__42566$$)].join(""));
    }
  }, $G__42647$$ = function($var_args$$) {
    var $G__42649__i_items$$ = null;
    if (arguments.length > 0) {
      $G__42649__i_items$$ = 0;
      for (var $G__42649__a$$ = Array(arguments.length - 0); $G__42649__i_items$$ < $G__42649__a$$.length;) {
        $G__42649__a$$[$G__42649__i_items$$] = arguments[$G__42649__i_items$$ + 0], ++$G__42649__i_items$$;
      }
      $G__42649__i_items$$ = new $APP.cljs.core.IndexedSeq($G__42649__a$$, 0, null);
    }
    return $G__42647__delegate$$.call(this, $G__42649__i_items$$);
  };
  $G__42647$$.cljs$lang$maxFixedArity = 0;
  $G__42647$$.cljs$lang$applyTo = function($arglist__42650_items$$) {
    $arglist__42650_items$$ = $APP.cljs.core.seq($arglist__42650_items$$);
    return $G__42647__delegate$$($arglist__42650_items$$);
  };
  $G__42647$$.cljs$core$IFn$_invoke$arity$variadic = $G__42647__delegate$$;
  return $G__42647$$;
}(), instaparse.abnf.get_char_combinator, function() {
  var $G__42651__delegate$$ = function($G__42569_cs$$) {
    $G__42569_cs$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.str, $G__42569_cs$$);
    return instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$1 ? instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$1($G__42569_cs$$) : instaparse.abnf.parse_int.call(null, $G__42569_cs$$);
  }, $G__42651$$ = function($var_args$$) {
    var $G__42652__i_cs$$ = null;
    if (arguments.length > 0) {
      $G__42652__i_cs$$ = 0;
      for (var $G__42652__a$$ = Array(arguments.length - 0); $G__42652__i_cs$$ < $G__42652__a$$.length;) {
        $G__42652__a$$[$G__42652__i_cs$$] = arguments[$G__42652__i_cs$$ + 0], ++$G__42652__i_cs$$;
      }
      $G__42652__i_cs$$ = new $APP.cljs.core.IndexedSeq($G__42652__a$$, 0, null);
    }
    return $G__42651__delegate$$.call(this, $G__42652__i_cs$$);
  };
  $G__42651$$.cljs$lang$maxFixedArity = 0;
  $G__42651$$.cljs$lang$applyTo = function($arglist__42653_cs$$) {
    $arglist__42653_cs$$ = $APP.cljs.core.seq($arglist__42653_cs$$);
    return $G__42651__delegate$$($arglist__42653_cs$$);
  };
  $G__42651$$.cljs$core$IFn$_invoke$arity$variadic = $G__42651__delegate$$;
  return $G__42651$$;
}()]);
instaparse.abnf.rules__GT_grammar_map = function($rules$$) {
  return instaparse.abnf.merge_core($APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.merge_with, instaparse.abnf.alt_preserving_hide_tag, $rules$$));
};
instaparse.abnf.abnf = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$195_argseq__5756__auto__$$ = [], $len__5749__auto___42654$$ = arguments.length, $i__5750__auto___42655$$ = 0;;) {
    if ($i__5750__auto___42655$$ < $len__5749__auto___42654$$) {
      $args__5755__auto__$jscomp$195_argseq__5756__auto__$$.push(arguments[$i__5750__auto___42655$$]), $i__5750__auto___42655$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$195_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$195_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$195_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return instaparse.abnf.abnf.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$195_argseq__5756__auto__$$);
};
instaparse.abnf.abnf.cljs$core$IFn$_invoke$arity$variadic = function($spec$$, $_STAR_case_insensitive_literals_STAR__orig_val__42582_p__42577$$) {
  var $_STAR_case_insensitive_literals_STAR__temp_val__42583_map__42578__$1$$ = $APP.cljs.core.__destructure_map($_STAR_case_insensitive_literals_STAR__orig_val__42582_p__42577$$);
  $_STAR_case_insensitive_literals_STAR__orig_val__42582_p__42577$$ = instaparse.cfg._STAR_case_insensitive_literals_STAR_;
  $_STAR_case_insensitive_literals_STAR__temp_val__42583_map__42578__$1$$ = cljs$cst$2011$string_ci.cljs$core$IFn$_invoke$arity$2($_STAR_case_insensitive_literals_STAR__temp_val__42583_map__42578__$1$$, $APP.cljs$cst$205$default);
  instaparse.cfg._STAR_case_insensitive_literals_STAR_ = $_STAR_case_insensitive_literals_STAR__temp_val__42583_map__42578__$1$$;
  try {
    var $tree$$ = instaparse.gll.parse(instaparse.abnf.abnf_parser, cljs$cst$2066$rules_or_parser, $spec$$, !1);
    return $tree$$ instanceof instaparse.gll.Failure ? instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing grammar specification:\n", function() {
      var $sb__5670__auto__$$ = new $APP.goog.string.StringBuffer(), $_STAR_print_newline_STAR__orig_val__42584_42657$$ = $APP.cljs.core._STAR_print_newline_STAR_, $_STAR_print_fn_STAR__orig_val__42585_42658$$ = $APP.cljs.core._STAR_print_fn_STAR_;
      $APP.cljs.core._STAR_print_newline_STAR_ = !0;
      $APP.cljs.core._STAR_print_fn_STAR_ = function($x__5671__auto__$$) {
        return $sb__5670__auto__$$.append($x__5671__auto__$$);
      };
      try {
        $APP.cljs.core.println.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$tree$$], 0));
      } finally {
        $APP.cljs.core._STAR_print_fn_STAR_ = $_STAR_print_fn_STAR__orig_val__42585_42658$$, $APP.cljs.core._STAR_print_newline_STAR_ = $_STAR_print_newline_STAR__orig_val__42584_42657$$;
      }
      return $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($sb__5670__auto__$$);
    }()], 0)) : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs$cst$2105$alternation, $APP.cljs.core.ffirst($tree$$)) ? instaparse.transform.transform(instaparse.abnf.abnf_transformer, $APP.cljs.core.first($tree$$)) : instaparse.abnf.rules__GT_grammar_map(instaparse.transform.transform(instaparse.abnf.abnf_transformer, $tree$$));
  } finally {
    instaparse.cfg._STAR_case_insensitive_literals_STAR_ = $_STAR_case_insensitive_literals_STAR__orig_val__42582_p__42577$$;
  }
};
instaparse.abnf.abnf.cljs$lang$maxFixedArity = 1;
instaparse.abnf.abnf.cljs$lang$applyTo = function($seq42571_seq42571__$1$$) {
  var $G__42572$$ = $APP.cljs.core.first($seq42571_seq42571__$1$$);
  $seq42571_seq42571__$1$$ = $APP.cljs.core.next($seq42571_seq42571__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__42572$$, $seq42571_seq42571__$1$$);
};
instaparse.abnf.build_parser = function($grammar_map$jscomp$3_spec$$, $output_format$$) {
  var $rule_tree$$ = instaparse.gll.parse(instaparse.abnf.abnf_parser, cljs$cst$2108$rulelist, $grammar_map$jscomp$3_spec$$, !1);
  if ($rule_tree$$ instanceof instaparse.gll.Failure) {
    return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing grammar specification:\n", function() {
      var $sb__5670__auto__$$ = new $APP.goog.string.StringBuffer(), $_STAR_print_newline_STAR__orig_val__42588_42661$$ = $APP.cljs.core._STAR_print_newline_STAR_, $_STAR_print_fn_STAR__orig_val__42589_42662$$ = $APP.cljs.core._STAR_print_fn_STAR_;
      $APP.cljs.core._STAR_print_newline_STAR_ = !0;
      $APP.cljs.core._STAR_print_fn_STAR_ = function($x__5671__auto__$$) {
        return $sb__5670__auto__$$.append($x__5671__auto__$$);
      };
      try {
        $APP.cljs.core.println.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$rule_tree$$], 0));
      } finally {
        $APP.cljs.core._STAR_print_fn_STAR_ = $_STAR_print_fn_STAR__orig_val__42589_42662$$, $APP.cljs.core._STAR_print_newline_STAR_ = $_STAR_print_newline_STAR__orig_val__42588_42661$$;
      }
      return $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($sb__5670__auto__$$);
    }()], 0));
  }
  var $rules$jscomp$3_start_production$$ = instaparse.transform.transform(instaparse.abnf.abnf_transformer, $rule_tree$$);
  $grammar_map$jscomp$3_spec$$ = instaparse.abnf.rules__GT_grammar_map($rules$jscomp$3_start_production$$);
  $rules$jscomp$3_start_production$$ = $APP.cljs.core.first($APP.cljs.core.first($APP.cljs.core.first($rules$jscomp$3_start_production$$)));
  return new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$1996$grammar, instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2($output_format$$, $grammar_map$jscomp$3_spec$$)), cljs$cst$1997$start_production, $rules$jscomp$3_start_production$$, cljs$cst$2071$output_format, $output_format$$], null);
};
instaparse.viz = {};
instaparse.viz.span = function($s$jscomp$366_tree$$) {
  var $e$jscomp$243_m$$ = $APP.cljs.core.meta($s$jscomp$366_tree$$);
  $s$jscomp$366_tree$$ = cljs$cst$2048$instaparse_DOT_gll_SLASH_start_index.cljs$core$IFn$_invoke$arity$1($e$jscomp$243_m$$);
  $e$jscomp$243_m$$ = cljs$cst$2049$instaparse_DOT_gll_SLASH_end_index.cljs$core$IFn$_invoke$arity$1($e$jscomp$243_m$$);
  var $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.truth_;
  var $JSCompiler_inline_result$$ = $APP.cljs.core.truth_($s$jscomp$366_tree$$) ? $e$jscomp$243_m$$ : $s$jscomp$366_tree$$;
  return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_inline_result$$) ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$s$jscomp$366_tree$$, $e$jscomp$243_m$$], null) : null;
};
instaparse.repeat = {};
instaparse.repeat.empty_result_QMARK_ = function($result$$) {
  return $APP.cljs.core.vector_QMARK_($result$$) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count($result$$), 1) || $APP.cljs.core.map_QMARK_($result$$) && $APP.cljs.core.contains_QMARK_($result$$, $APP.cljs$cst$78$tag) && $APP.cljs.core.empty_QMARK_($APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($result$$, $APP.cljs$cst$2006$content)) || $APP.cljs.core.empty_QMARK_($result$$);
};
instaparse.repeat.failure_signal = instaparse.gll.__GT_Failure(null, null);
instaparse.repeat.get_end = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$1 = function($parse$$) {
  var $end$$ = instaparse.viz.span($parse$$);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($end$$, 0, null);
  $end$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($end$$, 1, null);
  return $APP.cljs.core.truth_($end$$) ? $APP.cljs.core.long$($end$$) : $APP.cljs.core.count($parse$$);
};
instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$2 = function($parse$$, $index$$) {
  var $end$$ = instaparse.viz.span($parse$$);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($end$$, 0, null);
  $end$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($end$$, 1, null);
  return $APP.cljs.core.truth_($end$$) ? $APP.cljs.core.long$($end$$) : $index$$ + $APP.cljs.core.count($parse$$);
};
instaparse.repeat.get_end.cljs$lang$maxFixedArity = 2;
instaparse.repeat.parse_from_index = function($grammar$jscomp$20_tramp$$, $initial_parser$$, $text$$, $segment$$, $index$$) {
  $grammar$jscomp$20_tramp$$ = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3($grammar$jscomp$20_tramp$$, $text$$, $segment$$);
  instaparse.gll.push_listener($grammar$jscomp$20_tramp$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$index$$, $initial_parser$$], null), instaparse.gll.TopListener($grammar$jscomp$20_tramp$$));
  return instaparse.gll.run.cljs$core$IFn$_invoke$arity$1($grammar$jscomp$20_tramp$$);
};
instaparse.repeat.select_parse = function($grammar$$, $initial_parser$$, $text$$, $segment$$, $index$$, $parses_parses__$1$$) {
  var $length$$ = $APP.cljs.core.count($text$$);
  for ($parses_parses__$1$$ = $APP.cljs.core.seq($parses_parses__$1$$);;) {
    if ($parses_parses__$1$$) {
      var $parse$$ = $APP.cljs.core.first($parses_parses__$1$$), $end$$ = instaparse.viz.span($parse$$);
      $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($end$$, 0, null);
      $end$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($end$$, 1, null);
      $end$$ = $APP.cljs.core.truth_($end$$) ? $end$$ : $index$$ + $APP.cljs.core.count($parse$$);
      if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($end$$, $length$$)) {
        return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$parse$$, $end$$, null], null);
      }
      var $temp__5823__auto__$$ = $APP.cljs.core.seq(instaparse.repeat.parse_from_index($grammar$$, $initial_parser$$, $text$$, $segment$$, $end$$));
      if ($temp__5823__auto__$$) {
        return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$parse$$, $end$$, $temp__5823__auto__$$], null);
      }
      $parses_parses__$1$$ = $APP.cljs.core.next($parses_parses__$1$$);
    } else {
      return null;
    }
  }
};
instaparse.repeat.repeat_parse_hiccup = function($var_args$$) {
  switch(arguments.length) {
    case 5:
      return instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$6(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$5 = function($grammar$$, $initial_parser$$, $root_tag$$, $text$$, $segment$$) {
  return instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$6($grammar$$, $initial_parser$$, $root_tag$$, $text$$, $segment$$, 0);
};
instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$6 = function($grammar$$, $initial_parser$$, $G__42443__$1_G__42505_end__$1$jscomp$1_parses$jscomp$1_root_tag$$, $text$$, $segment$$, $G__42504_index$jscomp$183_index__$1$jscomp$1_parses__$1$$) {
  var $length$$ = $APP.cljs.core.count($text$$), $G__42503_first_result_index__$2_index__$3$$ = instaparse.repeat.parse_from_index($grammar$$, $initial_parser$$, $text$$, $segment$$, $G__42504_index$jscomp$183_index__$1$jscomp$1_parses__$1$$);
  $G__42504_index$jscomp$183_index__$1$jscomp$1_parses__$1$$ = $APP.cljs.core.long$($G__42504_index$jscomp$183_index__$1$jscomp$1_parses__$1$$);
  $G__42443__$1_G__42505_end__$1$jscomp$1_parses$jscomp$1_root_tag$$ = instaparse.auto_flatten_seq.auto_flatten_seq(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__42443__$1_G__42505_end__$1$jscomp$1_parses$jscomp$1_root_tag$$], null));
  var $G__42443_follow_ups__$1$$ = instaparse.repeat.select_parse($grammar$$, $initial_parser$$, $text$$, $segment$$, $G__42504_index$jscomp$183_index__$1$jscomp$1_parses__$1$$, $G__42503_first_result_index__$2_index__$3$$);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__42443_follow_ups__$1$$, 0, null);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__42443_follow_ups__$1$$, 1, null);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__42443_follow_ups__$1$$, 2, null);
  $G__42503_first_result_index__$2_index__$3$$ = $G__42504_index$jscomp$183_index__$1$jscomp$1_parses__$1$$;
  $G__42504_index$jscomp$183_index__$1$jscomp$1_parses__$1$$ = $G__42443__$1_G__42505_end__$1$jscomp$1_parses$jscomp$1_root_tag$$;
  for ($G__42443__$1_G__42505_end__$1$jscomp$1_parses$jscomp$1_root_tag$$ = $G__42443_follow_ups__$1$$;;) {
    var $vec__42451$$ = $G__42443__$1_G__42505_end__$1$jscomp$1_parses$jscomp$1_root_tag$$, $parse__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__42451$$, 0, null);
    $G__42443__$1_G__42505_end__$1$jscomp$1_parses$jscomp$1_root_tag$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__42451$$, 1, null);
    $G__42443_follow_ups__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__42451$$, 2, null);
    if ($vec__42451$$ == null || $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($G__42503_first_result_index__$2_index__$3$$, $G__42443__$1_G__42505_end__$1$jscomp$1_parses$jscomp$1_root_tag$$)) {
      return instaparse.repeat.failure_signal;
    }
    if ($G__42443_follow_ups__$1$$ == null) {
      return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.convert_afs_to_vec(instaparse.auto_flatten_seq.conj_flat($G__42504_index$jscomp$183_index__$1$jscomp$1_parses__$1$$, $parse__$1$$)), new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2114$optimize, $APP.cljs$cst$2115$memory, cljs$cst$2048$instaparse_DOT_gll_SLASH_start_index, 0, cljs$cst$2049$instaparse_DOT_gll_SLASH_end_index, $length$$], null));
    }
    $G__42503_first_result_index__$2_index__$3$$ = $APP.cljs.core.long$($G__42443__$1_G__42505_end__$1$jscomp$1_parses$jscomp$1_root_tag$$);
    $G__42504_index$jscomp$183_index__$1$jscomp$1_parses__$1$$ = instaparse.auto_flatten_seq.conj_flat($G__42504_index$jscomp$183_index__$1$jscomp$1_parses__$1$$, $parse__$1$$);
    $G__42443__$1_G__42505_end__$1$jscomp$1_parses$jscomp$1_root_tag$$ = instaparse.repeat.select_parse($grammar$$, $initial_parser$$, $text$$, $segment$$, $G__42443__$1_G__42505_end__$1$jscomp$1_parses$jscomp$1_root_tag$$, $G__42443_follow_ups__$1$$);
  }
};
instaparse.repeat.repeat_parse_hiccup.cljs$lang$maxFixedArity = 6;
instaparse.repeat.repeat_parse_enlive = function($var_args$$) {
  switch(arguments.length) {
    case 5:
      return instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$6(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$5 = function($grammar$$, $initial_parser$$, $root_tag$$, $text$$, $segment$$) {
  return instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$6($grammar$$, $initial_parser$$, $root_tag$$, $text$$, $segment$$, 0);
};
instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$6 = function($grammar$$, $initial_parser$$, $root_tag$$, $text$$, $segment$$, $G__42508_index$jscomp$184_parses$jscomp$2_parses__$1$jscomp$2_parses__$2$$) {
  var $length$$ = $APP.cljs.core.count($text$$), $G__42507_first_result$jscomp$1_index__$2$jscomp$1_index__$3$$ = instaparse.repeat.parse_from_index($grammar$$, $initial_parser$$, $text$$, $segment$$, $G__42508_index$jscomp$184_parses$jscomp$2_parses__$1$jscomp$2_parses__$2$$), $follow_ups__$1$jscomp$1_index__$1$$ = $APP.cljs.core.long$($G__42508_index$jscomp$184_parses$jscomp$2_parses__$1$jscomp$2_parses__$2$$);
  $G__42508_index$jscomp$184_parses$jscomp$2_parses__$1$jscomp$2_parses__$2$$ = instaparse.auto_flatten_seq.EMPTY;
  var $G__42459_G__42459__$1_G__42509_end__$1$$ = instaparse.repeat.select_parse($grammar$$, $initial_parser$$, $text$$, $segment$$, $follow_ups__$1$jscomp$1_index__$1$$, $G__42507_first_result$jscomp$1_index__$2$jscomp$1_index__$3$$);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__42459_G__42459__$1_G__42509_end__$1$$, 0, null);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__42459_G__42459__$1_G__42509_end__$1$$, 1, null);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__42459_G__42459__$1_G__42509_end__$1$$, 2, null);
  for ($G__42507_first_result$jscomp$1_index__$2$jscomp$1_index__$3$$ = $follow_ups__$1$jscomp$1_index__$1$$;;) {
    var $vec__42466$$ = $G__42459_G__42459__$1_G__42509_end__$1$$, $parse__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__42466$$, 0, null);
    $G__42459_G__42459__$1_G__42509_end__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__42466$$, 1, null);
    $follow_ups__$1$jscomp$1_index__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__42466$$, 2, null);
    if ($vec__42466$$ == null || $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($G__42507_first_result$jscomp$1_index__$2$jscomp$1_index__$3$$, $G__42459_G__42459__$1_G__42509_end__$1$$)) {
      return instaparse.repeat.failure_signal;
    }
    if ($follow_ups__$1$jscomp$1_index__$1$$ == null) {
      return instaparse.gll.safe_with_meta(new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $root_tag$$, $APP.cljs$cst$2006$content, $APP.cljs.core.seq(instaparse.auto_flatten_seq.conj_flat($G__42508_index$jscomp$184_parses$jscomp$2_parses__$1$jscomp$2_parses__$2$$, $parse__$1$$))], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2114$optimize, $APP.cljs$cst$2115$memory, cljs$cst$2048$instaparse_DOT_gll_SLASH_start_index, 0, cljs$cst$2049$instaparse_DOT_gll_SLASH_end_index, 
      $length$$], null));
    }
    $G__42507_first_result$jscomp$1_index__$2$jscomp$1_index__$3$$ = $APP.cljs.core.long$($G__42459_G__42459__$1_G__42509_end__$1$$);
    $G__42508_index$jscomp$184_parses$jscomp$2_parses__$1$jscomp$2_parses__$2$$ = instaparse.auto_flatten_seq.conj_flat($G__42508_index$jscomp$184_parses$jscomp$2_parses__$1$jscomp$2_parses__$2$$, $parse__$1$$);
    $G__42459_G__42459__$1_G__42509_end__$1$$ = instaparse.repeat.select_parse($grammar$$, $initial_parser$$, $text$$, $segment$$, $G__42459_G__42459__$1_G__42509_end__$1$$, $follow_ups__$1$jscomp$1_index__$1$$);
  }
};
instaparse.repeat.repeat_parse_enlive.cljs$lang$maxFixedArity = 6;
instaparse.repeat.repeat_parse_no_tag = function($var_args$$) {
  switch(arguments.length) {
    case 4:
      return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$4 = function($grammar$$, $initial_parser$$, $text$$, $segment$$) {
  return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5($grammar$$, $initial_parser$$, $text$$, $segment$$, 0);
};
instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5 = function($grammar$$, $initial_parser$$, $text$$, $segment$$, $G__42512_index$jscomp$185_parses$jscomp$3_parses__$1$jscomp$3_parses__$2$$) {
  var $length$$ = $APP.cljs.core.count($text$$), $G__42511_first_result$jscomp$2_index__$2$jscomp$2_index__$3$$ = instaparse.repeat.parse_from_index($grammar$$, $initial_parser$$, $text$$, $segment$$, $G__42512_index$jscomp$185_parses$jscomp$3_parses__$1$jscomp$3_parses__$2$$), $follow_ups__$1$jscomp$2_index__$1$$ = $APP.cljs.core.long$($G__42512_index$jscomp$185_parses$jscomp$3_parses__$1$jscomp$3_parses__$2$$);
  $G__42512_index$jscomp$185_parses$jscomp$3_parses__$1$jscomp$3_parses__$2$$ = instaparse.auto_flatten_seq.EMPTY;
  var $G__42474_G__42474__$1_G__42513_end__$1$$ = instaparse.repeat.select_parse($grammar$$, $initial_parser$$, $text$$, $segment$$, $follow_ups__$1$jscomp$2_index__$1$$, $G__42511_first_result$jscomp$2_index__$2$jscomp$2_index__$3$$);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__42474_G__42474__$1_G__42513_end__$1$$, 0, null);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__42474_G__42474__$1_G__42513_end__$1$$, 1, null);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__42474_G__42474__$1_G__42513_end__$1$$, 2, null);
  for ($G__42511_first_result$jscomp$2_index__$2$jscomp$2_index__$3$$ = $follow_ups__$1$jscomp$2_index__$1$$;;) {
    var $vec__42481$$ = $G__42474_G__42474__$1_G__42513_end__$1$$, $parse__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__42481$$, 0, null);
    $G__42474_G__42474__$1_G__42513_end__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__42481$$, 1, null);
    $follow_ups__$1$jscomp$2_index__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__42481$$, 2, null);
    if ($vec__42481$$ == null || $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($G__42511_first_result$jscomp$2_index__$2$jscomp$2_index__$3$$, $G__42474_G__42474__$1_G__42513_end__$1$$)) {
      return instaparse.repeat.failure_signal;
    }
    if ($follow_ups__$1$jscomp$2_index__$1$$ == null) {
      return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.conj_flat($G__42512_index$jscomp$185_parses$jscomp$3_parses__$1$jscomp$3_parses__$2$$, $parse__$1$$), new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2114$optimize, $APP.cljs$cst$2115$memory, cljs$cst$2048$instaparse_DOT_gll_SLASH_start_index, 0, cljs$cst$2049$instaparse_DOT_gll_SLASH_end_index, $length$$], null));
    }
    $G__42511_first_result$jscomp$2_index__$2$jscomp$2_index__$3$$ = $APP.cljs.core.long$($G__42474_G__42474__$1_G__42513_end__$1$$);
    $G__42512_index$jscomp$185_parses$jscomp$3_parses__$1$jscomp$3_parses__$2$$ = instaparse.auto_flatten_seq.conj_flat($G__42512_index$jscomp$185_parses$jscomp$3_parses__$1$jscomp$3_parses__$2$$, $parse__$1$$);
    $G__42474_G__42474__$1_G__42513_end__$1$$ = instaparse.repeat.select_parse($grammar$$, $initial_parser$$, $text$$, $segment$$, $G__42474_G__42474__$1_G__42513_end__$1$$, $follow_ups__$1$jscomp$2_index__$1$$);
  }
};
instaparse.repeat.repeat_parse_no_tag.cljs$lang$maxFixedArity = 5;
instaparse.repeat.repeat_parse = function($var_args$$) {
  switch(arguments.length) {
    case 4:
      return instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4 = function($grammar$$, $initial_parser$$, $output_format$$, $text$$) {
  return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$4($grammar$$, $initial_parser$$, $text$$, instaparse.gll.text__GT_segment($text$$));
};
instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5 = function($grammar$$, $initial_parser$$, $output_format$$, $root_tag$$, $text$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($output_format$$, $APP.cljs$cst$1675$hiccup) ? instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$5($grammar$$, $initial_parser$$, $root_tag$$, $text$$, instaparse.gll.text__GT_segment($text$$)) : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($output_format$$, cljs$cst$2005$enlive) ? instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$5($grammar$$, $initial_parser$$, $root_tag$$, $text$$, instaparse.gll.text__GT_segment($text$$)) : 
  null;
};
instaparse.repeat.repeat_parse.cljs$lang$maxFixedArity = 5;
instaparse.repeat.repeat_parse_with_header = function($grammar$$, $JSCompiler_inline_result$$, $repeating_parser$$, $output_format$$, $root_tag$$, $text$$) {
  var $segment$$ = instaparse.gll.text__GT_segment($text$$), $length$$ = $APP.cljs.core.count($text$$), $header_result_header_results$$ = instaparse.repeat.parse_from_index($grammar$$, $JSCompiler_inline_result$$, $text$$, $segment$$, 0), $JSCompiler_temp_const$jscomp$731_end$$ = $APP.cljs.core, $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$731_end$$.truth_;
  var $or__5025__auto__$$ = $APP.cljs.core.empty_QMARK_($header_result_header_results$$);
  $JSCompiler_inline_result$$ = $or__5025__auto__$$ ? $or__5025__auto__$$ : cljs$cst$1991$hide.cljs$core$IFn$_invoke$arity$1($JSCompiler_inline_result$$);
  if ($JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$731_end$$, $JSCompiler_inline_result$$)) {
    return instaparse.repeat.failure_signal;
  }
  $header_result_header_results$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.max_key, instaparse.repeat.get_end, $header_result_header_results$$);
  $JSCompiler_temp_const$jscomp$731_end$$ = instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$1($header_result_header_results$$);
  $grammar$$ = instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5($grammar$$, $APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($repeating_parser$$), $text$$, $segment$$, $JSCompiler_temp_const$jscomp$731_end$$);
  $length$$ = new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2114$optimize, $APP.cljs$cst$2115$memory, cljs$cst$2048$instaparse_DOT_gll_SLASH_start_index, 0, cljs$cst$2049$instaparse_DOT_gll_SLASH_end_index, $length$$], null);
  if ($grammar$$ instanceof instaparse.gll.Failure || $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$78$tag.cljs$core$IFn$_invoke$arity$1($repeating_parser$$), $APP.cljs$cst$2009$star) && instaparse.repeat.empty_result_QMARK_($grammar$$)) {
    return instaparse.repeat.failure_signal;
  }
  switch($output_format$$ instanceof $APP.cljs.core.Keyword ? $output_format$$.fqn : null) {
    case "enlive":
      return instaparse.gll.safe_with_meta(new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$78$tag, $root_tag$$, $APP.cljs$cst$2006$content, instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.EMPTY.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null, $header_result_header_results$$), $grammar$$)], null), $length$$);
    case "hiccup":
      return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.convert_afs_to_vec(instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.auto_flatten_seq(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$root_tag$$], null)).instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null, $header_result_header_results$$), $grammar$$)), $length$$);
    default:
      return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.EMPTY.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null, $header_result_header_results$$), $grammar$$), $length$$);
  }
};
instaparse.repeat.try_repeating_parse_strategy_with_header = function($grammar$$, $text$$, $start_production$$, $start_rule$$, $output_format$$) {
  var $header_parser$jscomp$1_parsers$$ = cljs$cst$1990$parsers.cljs$core$IFn$_invoke$arity$1($start_rule$$), $repeating_parser$$ = $APP.cljs.core.last($header_parser$jscomp$1_parsers$$), $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.not, $G__42490$jscomp$inline_9712_JSCompiler_inline_result$jscomp$9307_and__5023__auto__$jscomp$inline_9710_and__5023__auto____$1$$;
  if ($G__42490$jscomp$inline_9712_JSCompiler_inline_result$jscomp$9307_and__5023__auto__$jscomp$inline_9710_and__5023__auto____$1$$ = $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$78$tag.cljs$core$IFn$_invoke$arity$1($start_rule$$), cljs$cst$1983$cat)) {
    $G__42490$jscomp$inline_9712_JSCompiler_inline_result$jscomp$9307_and__5023__auto__$jscomp$inline_9710_and__5023__auto____$1$$ = $APP.cljs$cst$78$tag.cljs$core$IFn$_invoke$arity$1($repeating_parser$$);
    var $fexpr__42489$$ = new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$2009$star, null, $APP.cljs$cst$2008$plus, null], null), null);
    $G__42490$jscomp$inline_9712_JSCompiler_inline_result$jscomp$9307_and__5023__auto__$jscomp$inline_9710_and__5023__auto____$1$$ = $fexpr__42489$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__42489$$.cljs$core$IFn$_invoke$arity$1($G__42490$jscomp$inline_9712_JSCompiler_inline_result$jscomp$9307_and__5023__auto__$jscomp$inline_9710_and__5023__auto____$1$$) : $fexpr__42489$$.call(null, $G__42490$jscomp$inline_9712_JSCompiler_inline_result$jscomp$9307_and__5023__auto__$jscomp$inline_9710_and__5023__auto____$1$$);
    $G__42490$jscomp$inline_9712_JSCompiler_inline_result$jscomp$9307_and__5023__auto__$jscomp$inline_9710_and__5023__auto____$1$$ = $APP.cljs.core.truth_($G__42490$jscomp$inline_9712_JSCompiler_inline_result$jscomp$9307_and__5023__auto__$jscomp$inline_9710_and__5023__auto____$1$$) ? $APP.cljs.core.not(cljs$cst$1991$hide.cljs$core$IFn$_invoke$arity$1($repeating_parser$$)) && $APP.cljs.core.not(cljs$cst$1991$hide.cljs$core$IFn$_invoke$arity$1($APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($repeating_parser$$))) : 
    $G__42490$jscomp$inline_9712_JSCompiler_inline_result$jscomp$9307_and__5023__auto__$jscomp$inline_9710_and__5023__auto____$1$$;
  }
  if ($JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $G__42490$jscomp$inline_9712_JSCompiler_inline_result$jscomp$9307_and__5023__auto__$jscomp$inline_9710_and__5023__auto____$1$$)) {
    return instaparse.repeat.failure_signal;
  }
  $header_parser$jscomp$1_parsers$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat, $APP.cljs.core.butlast($header_parser$jscomp$1_parsers$$));
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$1994$red.cljs$core$IFn$_invoke$arity$1($start_rule$$), instaparse.reduction.raw_non_terminal_reduction) ? instaparse.repeat.repeat_parse_with_header($grammar$$, $header_parser$jscomp$1_parsers$$, $repeating_parser$$, null, $start_production$$, $text$$) : instaparse.repeat.repeat_parse_with_header($grammar$$, $header_parser$jscomp$1_parsers$$, $repeating_parser$$, $output_format$$, $start_production$$, $text$$);
};
instaparse.repeat.try_repeating_parse_strategy = function($output_format$jscomp$8_parser$$, $result$jscomp$120_text$$, $start_production$$) {
  var $grammar$$ = cljs$cst$1996$grammar.cljs$core$IFn$_invoke$arity$1($output_format$jscomp$8_parser$$);
  $output_format$jscomp$8_parser$$ = cljs$cst$2071$output_format.cljs$core$IFn$_invoke$arity$1($output_format$jscomp$8_parser$$);
  var $start_rule$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($grammar$$, $start_production$$);
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs$cst$1991$hide.cljs$core$IFn$_invoke$arity$1($start_rule$$), !0) ? instaparse.repeat.failure_signal : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$1994$red.cljs$core$IFn$_invoke$arity$1($start_rule$$), instaparse.reduction.raw_non_terminal_reduction) ? $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$78$tag.cljs$core$IFn$_invoke$arity$1($start_rule$$), $APP.cljs$cst$2009$star) ? instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4($grammar$$, 
  $APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($start_rule$$), $output_format$jscomp$8_parser$$, $result$jscomp$120_text$$) : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$78$tag.cljs$core$IFn$_invoke$arity$1($start_rule$$), $APP.cljs$cst$2008$plus) ? ($result$jscomp$120_text$$ = instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4($grammar$$, $APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($start_rule$$), $output_format$jscomp$8_parser$$, $result$jscomp$120_text$$), 
  instaparse.repeat.empty_result_QMARK_($result$jscomp$120_text$$) ? instaparse.repeat.failure_signal : $result$jscomp$120_text$$) : instaparse.repeat.try_repeating_parse_strategy_with_header($grammar$$, $result$jscomp$120_text$$, $start_production$$, $start_rule$$, $output_format$jscomp$8_parser$$) : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$78$tag.cljs$core$IFn$_invoke$arity$1($start_rule$$), $APP.cljs$cst$2009$star) ? instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5($grammar$$, 
  $APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($start_rule$$), $output_format$jscomp$8_parser$$, $start_production$$, $result$jscomp$120_text$$) : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$78$tag.cljs$core$IFn$_invoke$arity$1($start_rule$$), $APP.cljs$cst$2008$plus) ? ($result$jscomp$120_text$$ = instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5($grammar$$, $APP.cljs$cst$1420$parser.cljs$core$IFn$_invoke$arity$1($start_rule$$), $output_format$jscomp$8_parser$$, 
  $start_production$$, $result$jscomp$120_text$$), instaparse.repeat.empty_result_QMARK_($result$jscomp$120_text$$) ? instaparse.repeat.failure_signal : $result$jscomp$120_text$$) : instaparse.repeat.try_repeating_parse_strategy_with_header($grammar$$, $result$jscomp$120_text$$, $start_production$$, $start_rule$$, $output_format$jscomp$8_parser$$);
};
instaparse.repeat.used_memory_optimization_QMARK_ = function($tree$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$2115$memory, cljs$cst$2114$optimize.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.meta($tree$$)));
};
instaparse.line_col = {};
instaparse.line_col.Cursor = function($index$$, $line$$, $column$$, $__meta$$, $__extmap$$, $__hash$$) {
  this.index = $index$$;
  this.line = $line$$;
  this.column = $column$$;
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
instaparse.line_col.Cursor.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
instaparse.line_col.Cursor.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k42414$$, $else__5326__auto__$$) {
  switch($k42414$$ instanceof $APP.cljs.core.Keyword ? $k42414$$.fqn : null) {
    case "index":
      return this.index;
    case "line":
      return this.line;
    case "column":
      return this.column;
    default:
      return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k42414$$, $else__5326__auto__$$);
  }
};
instaparse.line_col.Cursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__42419_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__42419_v__5348__auto__$$, 0, null);
    $p__42419_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__42419_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__42419_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__42419_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
instaparse.line_col.Cursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#instaparse.line-col.Cursor{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1998$index, this.index], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$209$line, this.line], null), new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$216$column, this.column], null)], null), this.__extmap));
};
instaparse.line_col.Cursor.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__42413$$) {
  return new $APP.cljs.core.RecordIter(0, this, 3, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1998$index, $APP.cljs$cst$209$line, $APP.cljs$cst$216$column], null), $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
instaparse.line_col.Cursor.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
instaparse.line_col.Cursor.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new instaparse.line_col.Cursor(this.index, this.line, this.column, this.__meta, this.__extmap, this.__hash);
};
instaparse.line_col.Cursor.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 3 + $APP.cljs.core.count(this.__extmap);
};
instaparse.line_col.Cursor.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$69_h__5134__auto____$1$jscomp$69_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$69_h__5134__auto____$1$jscomp$69_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$69_h__5134__auto____$1$jscomp$69_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$69_h__5134__auto____$1$jscomp$69_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$69_h__5134__auto____$1$jscomp$69_this__5319__auto__$$ = -1036355234 ^ $APP.cljs.core.hash_unordered_coll(this);
};
instaparse.line_col.Cursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this42415$$, $other42416$$) {
  return $other42416$$ != null && this.constructor === $other42416$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.index, $other42416$$.index) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.line, $other42416$$.line) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.column, $other42416$$.column) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other42416$$.__extmap);
};
instaparse.line_col.Cursor.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$1998$index, null, $APP.cljs$cst$216$column, null, $APP.cljs$cst$209$line, null], null), null), $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), $k__5334__auto__$$) : new instaparse.line_col.Cursor(this.index, 
  this.line, this.column, this.__meta, $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
instaparse.line_col.Cursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k42414$$) {
  switch($k42414$$ instanceof $APP.cljs.core.Keyword ? $k42414$$.fqn : null) {
    case "index":
    case "line":
    case "column":
      return !0;
    default:
      return $APP.cljs.core.contains_QMARK_(this.__extmap, $k42414$$);
  }
};
instaparse.line_col.Cursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($pred__42432_this__5331__auto__$$, $k__5332__auto__$$, $G__42413$$) {
  $pred__42432_this__5331__auto__$$ = $APP.cljs.core.keyword_identical_QMARK_;
  return $APP.cljs.core.truth_($pred__42432_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__42432_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$1998$index, $k__5332__auto__$$) : $pred__42432_this__5331__auto__$$.call(null, $APP.cljs$cst$1998$index, $k__5332__auto__$$)) ? new instaparse.line_col.Cursor($G__42413$$, this.line, this.column, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__42432_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__42432_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$209$line, 
  $k__5332__auto__$$) : $pred__42432_this__5331__auto__$$.call(null, $APP.cljs$cst$209$line, $k__5332__auto__$$)) ? new instaparse.line_col.Cursor(this.index, $G__42413$$, this.column, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__42432_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__42432_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$216$column, $k__5332__auto__$$) : $pred__42432_this__5331__auto__$$.call(null, $APP.cljs$cst$216$column, $k__5332__auto__$$)) ? 
  new instaparse.line_col.Cursor(this.index, this.line, $G__42413$$, this.__meta, this.__extmap, null) : new instaparse.line_col.Cursor(this.index, this.line, this.column, this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__42413$$), null);
};
instaparse.line_col.Cursor.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.MapEntry($APP.cljs$cst$1998$index, this.index, null), new $APP.cljs.core.MapEntry($APP.cljs$cst$209$line, this.line, null), new $APP.cljs.core.MapEntry($APP.cljs$cst$216$column, this.column, null)], null), this.__extmap));
};
instaparse.line_col.Cursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__42413$$) {
  return new instaparse.line_col.Cursor(this.index, this.line, this.column, $G__42413$$, this.__extmap, this.__hash);
};
instaparse.line_col.Cursor.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
instaparse.line_col.Cursor.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta($APP.cljs$cst$1336$index, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$661$int], null)), $APP.cljs.core.with_meta($APP.cljs$cst$188$line, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$652$long], null)), $APP.cljs.core.with_meta($APP.cljs$cst$189$column, new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$78$tag, $APP.cljs$cst$652$long], null))], null);
};
instaparse.line_col.Cursor.cljs$lang$type = !0;
instaparse.line_col.Cursor.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "instaparse.line-col/Cursor", null, 1, null);
};
instaparse.line_col.Cursor.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "instaparse.line-col/Cursor");
};
instaparse.line_col.__GT_Cursor = function($index$$, $line$$, $column$$) {
  return new instaparse.line_col.Cursor($index$$, $line$$, $column$$, null, null, null);
};
instaparse.line_col.map__GT_Cursor = function($G__42417$$) {
  var $G__42450$jscomp$inline_4763_extmap__5365__auto__$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($G__42417$$, $APP.cljs$cst$1998$index, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$209$line, $APP.cljs$cst$216$column], 0));
  $G__42450$jscomp$inline_4763_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__42417$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__42450$jscomp$inline_4763_extmap__5365__auto__$$) : $G__42450$jscomp$inline_4763_extmap__5365__auto__$$;
  return new instaparse.line_col.Cursor($APP.cljs$cst$1998$index.cljs$core$IFn$_invoke$arity$1($G__42417$$), $APP.cljs$cst$209$line.cljs$core$IFn$_invoke$arity$1($G__42417$$), $APP.cljs$cst$216$column.cljs$core$IFn$_invoke$arity$1($G__42417$$), null, $APP.cljs.core.not_empty($G__42450$jscomp$inline_4763_extmap__5365__auto__$$), null);
};
instaparse.line_col.advance_cursor = function($G__42498_column$$, $text$$, $new_index_new_index__$1$$) {
  $new_index_new_index__$1$$ |= 0;
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($G__42498_column$$.index, $new_index_new_index__$1$$)) {
    return $G__42498_column$$;
  }
  var $index$$ = $G__42498_column$$.index, $G__42494_G__42497_line$$ = $G__42498_column$$.line;
  for ($G__42498_column$$ = $G__42498_column$$.column;;) {
    if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($index$$, $new_index_new_index__$1$$)) {
      return new instaparse.line_col.Cursor($index$$, $G__42494_G__42497_line$$, $G__42498_column$$, null, null, null);
    }
    $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($text$$.charAt($index$$), "\n") ? ($G__42494_G__42497_line$$ += 1, $index$$ += 1, $G__42498_column$$ = 1) : ($G__42498_column$$ += 1, $index$$ += 1);
  }
};
instaparse.line_col.make_line_col_fn = function($text$$, $start_line$$, $start_column$$) {
  var $cursor_state$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new instaparse.line_col.Cursor(0, $start_line$$, $start_column$$, null, null, null));
  return function($i$$) {
    $APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4($cursor_state$$, instaparse.line_col.advance_cursor, $text$$, $i$$);
    return $APP.cljs.core.deref($cursor_state$$);
  };
};
instaparse.line_col.hiccup_add_line_col_spans = function($end_cursor_line_col_fn$$, $parse_tree$$) {
  var $end_index_m$$ = $APP.cljs.core.meta($parse_tree$$), $start_cursor_start_index$$ = cljs$cst$2048$instaparse_DOT_gll_SLASH_start_index.cljs$core$IFn$_invoke$arity$1($end_index_m$$);
  $end_index_m$$ = cljs$cst$2049$instaparse_DOT_gll_SLASH_end_index.cljs$core$IFn$_invoke$arity$1($end_index_m$$);
  var $JSCompiler_temp_const$jscomp$734_children$$ = $APP.cljs.core, $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$734_children$$.truth_;
  var $JSCompiler_inline_result$$ = $APP.cljs.core.truth_($start_cursor_start_index$$) ? $end_index_m$$ : $start_cursor_start_index$$;
  return $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$734_children$$, $JSCompiler_inline_result$$) ? ($start_cursor_start_index$$ = $end_cursor_line_col_fn$$.cljs$core$IFn$_invoke$arity$1 ? $end_cursor_line_col_fn$$.cljs$core$IFn$_invoke$arity$1($start_cursor_start_index$$) : $end_cursor_line_col_fn$$.call(null, $start_cursor_start_index$$), $JSCompiler_temp_const$jscomp$734_children$$ = $APP.cljs.core.doall.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.line_col.hiccup_add_line_col_spans, 
  $end_cursor_line_col_fn$$), $APP.cljs.core.next($parse_tree$$))), $end_cursor_line_col_fn$$ = $end_cursor_line_col_fn$$.cljs$core$IFn$_invoke$arity$1 ? $end_cursor_line_col_fn$$.cljs$core$IFn$_invoke$arity$1($end_index_m$$) : $end_cursor_line_col_fn$$.call(null, $end_index_m$$), $APP.cljs.core.with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.first($parse_tree$$)], null), $JSCompiler_temp_const$jscomp$734_children$$), 
  $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.meta($parse_tree$$), new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$2116$instaparse_DOT_gll_SLASH_start_line, $APP.cljs$cst$209$line.cljs$core$IFn$_invoke$arity$1($start_cursor_start_index$$), cljs$cst$2117$instaparse_DOT_gll_SLASH_start_column, $APP.cljs$cst$216$column.cljs$core$IFn$_invoke$arity$1($start_cursor_start_index$$), cljs$cst$2118$instaparse_DOT_gll_SLASH_end_line, 
  $APP.cljs$cst$209$line.cljs$core$IFn$_invoke$arity$1($end_cursor_line_col_fn$$), cljs$cst$2119$instaparse_DOT_gll_SLASH_end_column, $APP.cljs$cst$216$column.cljs$core$IFn$_invoke$arity$1($end_cursor_line_col_fn$$)], null)], 0)))) : $parse_tree$$;
};
instaparse.line_col.enlive_add_line_col_spans = function($end_cursor$jscomp$1_line_col_fn$$, $parse_tree$$) {
  var $end_index$jscomp$1_m$$ = $APP.cljs.core.meta($parse_tree$$), $start_cursor$jscomp$1_start_index$$ = cljs$cst$2048$instaparse_DOT_gll_SLASH_start_index.cljs$core$IFn$_invoke$arity$1($end_index$jscomp$1_m$$);
  $end_index$jscomp$1_m$$ = cljs$cst$2049$instaparse_DOT_gll_SLASH_end_index.cljs$core$IFn$_invoke$arity$1($end_index$jscomp$1_m$$);
  var $JSCompiler_temp_const$jscomp$737_children$$ = $APP.cljs.core, $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$737_children$$.truth_;
  var $JSCompiler_inline_result$$ = $APP.cljs.core.truth_($start_cursor$jscomp$1_start_index$$) ? $end_index$jscomp$1_m$$ : $start_cursor$jscomp$1_start_index$$;
  return $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$737_children$$, $JSCompiler_inline_result$$) ? ($start_cursor$jscomp$1_start_index$$ = $end_cursor$jscomp$1_line_col_fn$$.cljs$core$IFn$_invoke$arity$1 ? $end_cursor$jscomp$1_line_col_fn$$.cljs$core$IFn$_invoke$arity$1($start_cursor$jscomp$1_start_index$$) : $end_cursor$jscomp$1_line_col_fn$$.call(null, $start_cursor$jscomp$1_start_index$$), $JSCompiler_temp_const$jscomp$737_children$$ = $APP.cljs.core.doall.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.line_col.enlive_add_line_col_spans, 
  $end_cursor$jscomp$1_line_col_fn$$), $APP.cljs$cst$2006$content.cljs$core$IFn$_invoke$arity$1($parse_tree$$))), $end_cursor$jscomp$1_line_col_fn$$ = $end_cursor$jscomp$1_line_col_fn$$.cljs$core$IFn$_invoke$arity$1 ? $end_cursor$jscomp$1_line_col_fn$$.cljs$core$IFn$_invoke$arity$1($end_index$jscomp$1_m$$) : $end_cursor$jscomp$1_line_col_fn$$.call(null, $end_index$jscomp$1_m$$), $APP.cljs.core.with_meta($APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($parse_tree$$, $APP.cljs$cst$2006$content, 
  $JSCompiler_temp_const$jscomp$737_children$$), $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.meta($parse_tree$$), new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$2116$instaparse_DOT_gll_SLASH_start_line, $APP.cljs$cst$209$line.cljs$core$IFn$_invoke$arity$1($start_cursor$jscomp$1_start_index$$), cljs$cst$2117$instaparse_DOT_gll_SLASH_start_column, $APP.cljs$cst$216$column.cljs$core$IFn$_invoke$arity$1($start_cursor$jscomp$1_start_index$$), 
  cljs$cst$2118$instaparse_DOT_gll_SLASH_end_line, $APP.cljs$cst$209$line.cljs$core$IFn$_invoke$arity$1($end_cursor$jscomp$1_line_col_fn$$), cljs$cst$2119$instaparse_DOT_gll_SLASH_end_column, $APP.cljs$cst$216$column.cljs$core$IFn$_invoke$arity$1($end_cursor$jscomp$1_line_col_fn$$)], null)], 0)))) : $parse_tree$$;
};
instaparse.line_col.add_line_col_spans = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return instaparse.line_col.add_line_col_spans.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 4:
      return instaparse.line_col.add_line_col_spans.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
instaparse.line_col.add_line_col_spans.cljs$core$IFn$_invoke$arity$2 = function($text$$, $parse_tree$$) {
  return instaparse.line_col.add_line_col_spans.cljs$core$IFn$_invoke$arity$4($text$$, 1, 1, $parse_tree$$);
};
instaparse.line_col.add_line_col_spans.cljs$core$IFn$_invoke$arity$4 = function($line_col_fn$jscomp$2_text$$, $start_line$$, $start_column$$, $parse_tree$$) {
  $line_col_fn$jscomp$2_text$$ = instaparse.line_col.make_line_col_fn($line_col_fn$jscomp$2_text$$, $start_line$$, $start_column$$);
  return $parse_tree$$ == null ? null : $APP.cljs.core.truth_(function() {
    var $and__5023__auto__$$ = $APP.cljs.core.map_QMARK_($parse_tree$$);
    return $and__5023__auto__$$ ? $APP.cljs$cst$78$tag.cljs$core$IFn$_invoke$arity$1($parse_tree$$) : $and__5023__auto__$$;
  }()) ? instaparse.line_col.enlive_add_line_col_spans($line_col_fn$jscomp$2_text$$, $parse_tree$$) : $APP.cljs.core.vector_QMARK_($parse_tree$$) && $APP.cljs.core.first($parse_tree$$) instanceof $APP.cljs.core.Keyword ? instaparse.line_col.hiccup_add_line_col_spans($line_col_fn$jscomp$2_text$$, $parse_tree$$) : $APP.cljs.core.truth_(function() {
    var $and__5023__auto__$jscomp$165_and__5023__auto____$1$$ = $APP.cljs.core.sequential_QMARK_($parse_tree$$);
    return $and__5023__auto__$jscomp$165_and__5023__auto____$1$$ ? ($and__5023__auto__$jscomp$165_and__5023__auto____$1$$ = $APP.cljs.core.map_QMARK_($APP.cljs.core.first($parse_tree$$))) ? $APP.cljs$cst$78$tag.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.first($parse_tree$$)) : $and__5023__auto__$jscomp$165_and__5023__auto____$1$$ : $and__5023__auto__$jscomp$165_and__5023__auto____$1$$;
  }()) ? instaparse.transform.map_preserving_meta($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.line_col.enlive_add_line_col_spans, $line_col_fn$jscomp$2_text$$), $parse_tree$$) : $APP.cljs.core.sequential_QMARK_($parse_tree$$) && $APP.cljs.core.vector_QMARK_($APP.cljs.core.first($parse_tree$$)) && $APP.cljs.core.first($APP.cljs.core.first($parse_tree$$)) instanceof $APP.cljs.core.Keyword ? instaparse.transform.map_preserving_meta($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.line_col.hiccup_add_line_col_spans, 
  $line_col_fn$jscomp$2_text$$), $parse_tree$$) : $parse_tree$$ instanceof instaparse.gll.Failure ? $parse_tree$$ : instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid parse-tree, not recognized as either enlive or hiccup format."], 0));
};
instaparse.line_col.add_line_col_spans.cljs$lang$maxFixedArity = 4;
instaparse.core = {};
instaparse.core._STAR_default_output_format_STAR_ = $APP.cljs$cst$1675$hiccup;
instaparse.core.set_default_output_format_BANG_ = function($type$$) {
  return instaparse.core._STAR_default_output_format_STAR_ = $type$$;
};
instaparse.core._STAR_default_input_format_STAR_ = cljs$cst$2120$ebnf;
instaparse.core.set_default_input_format_BANG_ = function($type$$) {
  return instaparse.core._STAR_default_input_format_STAR_ = $type$$;
};
instaparse.core.unhide_parser = function($parser$$, $unhide$$) {
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null, $unhide$$)) {
    return $parser$$;
  }
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$2006$content, $unhide$$)) {
    return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($parser$$, cljs$cst$1996$grammar, instaparse.combinators_source.unhide_all_content(cljs$cst$1996$grammar.cljs$core$IFn$_invoke$arity$1($parser$$)));
  }
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$2121$tags, $unhide$$)) {
    return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($parser$$, cljs$cst$1996$grammar, instaparse.combinators_source.unhide_tags(cljs$cst$2071$output_format.cljs$core$IFn$_invoke$arity$1($parser$$), cljs$cst$1996$grammar.cljs$core$IFn$_invoke$arity$1($parser$$)));
  }
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$365$all, $unhide$$)) {
    return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($parser$$, cljs$cst$1996$grammar, instaparse.combinators_source.unhide_all(cljs$cst$2071$output_format.cljs$core$IFn$_invoke$arity$1($parser$$), cljs$cst$1996$grammar.cljs$core$IFn$_invoke$arity$1($parser$$)));
  }
  throw Error(["No matching clause: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($unhide$$)].join(""));
};
instaparse.core.parse = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$196_argseq__5756__auto__$$ = [], $len__5749__auto___43019$$ = arguments.length, $i__5750__auto___43020$$ = 0;;) {
    if ($i__5750__auto___43020$$ < $len__5749__auto___43019$$) {
      $args__5755__auto__$jscomp$196_argseq__5756__auto__$$.push(arguments[$i__5750__auto___43020$$]), $i__5750__auto___43020$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$196_argseq__5756__auto__$$ = 2 < $args__5755__auto__$jscomp$196_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$196_argseq__5756__auto__$$.slice(2), 0, null) : null;
  return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args__5755__auto__$jscomp$196_argseq__5756__auto__$$);
};
instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic = function($G__42948$jscomp$inline_10364_JSCompiler_inline_result$jscomp$10206_parser$jscomp$53_parser__$1$$, $text$$, $p__42946_start_production$$) {
  var $JSCompiler_temp_const$jscomp$10205_options$jscomp$99_result$$ = $APP.cljs.core.__destructure_map($p__42946_start_production$$);
  $p__42946_start_production$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($JSCompiler_temp_const$jscomp$10205_options$jscomp$99_result$$, $APP.cljs$cst$1574$start, cljs$cst$1997$start_production.cljs$core$IFn$_invoke$arity$1($G__42948$jscomp$inline_10364_JSCompiler_inline_result$jscomp$10206_parser$jscomp$53_parser__$1$$));
  var $partial_QMARK_$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($JSCompiler_temp_const$jscomp$10205_options$jscomp$99_result$$, cljs$cst$2122$partial, !1), $JSCompiler_temp_const$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($JSCompiler_temp_const$jscomp$10205_options$jscomp$99_result$$, cljs$cst$2114$optimize, !1), $JSCompiler_temp_const$jscomp$10203_unhide$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$jscomp$10205_options$jscomp$99_result$$, cljs$cst$2123$unhide);
  $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($JSCompiler_temp_const$jscomp$10205_options$jscomp$99_result$$, $APP.cljs$cst$144$trace, !1);
  $G__42948$jscomp$inline_10364_JSCompiler_inline_result$jscomp$10206_parser$jscomp$53_parser__$1$$ = instaparse.core.unhide_parser($G__42948$jscomp$inline_10364_JSCompiler_inline_result$jscomp$10206_parser$jscomp$53_parser__$1$$, $JSCompiler_temp_const$jscomp$10203_unhide$$);
  return $APP.cljs.core.truth_($APP.cljs$cst$2124$total.cljs$core$IFn$_invoke$arity$1($JSCompiler_temp_const$jscomp$10205_options$jscomp$99_result$$)) ? ($JSCompiler_temp_const$jscomp$10205_options$jscomp$99_result$$ = instaparse.gll, $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$10205_options$jscomp$99_result$$.parse_total, $JSCompiler_temp_const$jscomp$10203_unhide$$ = cljs$cst$1996$grammar.cljs$core$IFn$_invoke$arity$1($G__42948$jscomp$inline_10364_JSCompiler_inline_result$jscomp$10206_parser$jscomp$53_parser__$1$$), 
  $G__42948$jscomp$inline_10364_JSCompiler_inline_result$jscomp$10206_parser$jscomp$53_parser__$1$$ = cljs$cst$2071$output_format.cljs$core$IFn$_invoke$arity$1($G__42948$jscomp$inline_10364_JSCompiler_inline_result$jscomp$10206_parser$jscomp$53_parser__$1$$), $G__42948$jscomp$inline_10364_JSCompiler_inline_result$jscomp$10206_parser$jscomp$53_parser__$1$$ = instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1($G__42948$jscomp$inline_10364_JSCompiler_inline_result$jscomp$10206_parser$jscomp$53_parser__$1$$) : 
  instaparse.reduction.node_builders.call(null, $G__42948$jscomp$inline_10364_JSCompiler_inline_result$jscomp$10206_parser$jscomp$53_parser__$1$$), $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$10205_options$jscomp$99_result$$, $JSCompiler_temp_const$jscomp$10203_unhide$$, $p__42946_start_production$$, $text$$, $partial_QMARK_$$, $G__42948$jscomp$inline_10364_JSCompiler_inline_result$jscomp$10206_parser$jscomp$53_parser__$1$$)) : $APP.cljs.core.truth_($APP.cljs.core.truth_($JSCompiler_temp_const$$) ? 
  $APP.cljs.core.not($partial_QMARK_$$) : $JSCompiler_temp_const$$) ? ($JSCompiler_temp_const$jscomp$10205_options$jscomp$99_result$$ = instaparse.repeat.try_repeating_parse_strategy($G__42948$jscomp$inline_10364_JSCompiler_inline_result$jscomp$10206_parser$jscomp$53_parser__$1$$, $text$$, $p__42946_start_production$$), $APP.cljs.core.truth_(instaparse.core.failure_QMARK_.cljs$core$IFn$_invoke$arity$1 ? instaparse.core.failure_QMARK_.cljs$core$IFn$_invoke$arity$1($JSCompiler_temp_const$jscomp$10205_options$jscomp$99_result$$) : 
  instaparse.core.failure_QMARK_.call(null, $JSCompiler_temp_const$jscomp$10205_options$jscomp$99_result$$)) ? instaparse.gll.parse(cljs$cst$1996$grammar.cljs$core$IFn$_invoke$arity$1($G__42948$jscomp$inline_10364_JSCompiler_inline_result$jscomp$10206_parser$jscomp$53_parser__$1$$), $p__42946_start_production$$, $text$$, $partial_QMARK_$$) : $JSCompiler_temp_const$jscomp$10205_options$jscomp$99_result$$) : instaparse.gll.parse(cljs$cst$1996$grammar.cljs$core$IFn$_invoke$arity$1($G__42948$jscomp$inline_10364_JSCompiler_inline_result$jscomp$10206_parser$jscomp$53_parser__$1$$), 
  $p__42946_start_production$$, $text$$, $partial_QMARK_$$);
};
instaparse.core.parse.cljs$lang$maxFixedArity = 2;
instaparse.core.parse.cljs$lang$applyTo = function($G__42945_seq42943$$) {
  var $G__42944$$ = $APP.cljs.core.first($G__42945_seq42943$$), $seq42943__$1_seq42943__$2$$ = $APP.cljs.core.next($G__42945_seq42943$$);
  $G__42945_seq42943$$ = $APP.cljs.core.first($seq42943__$1_seq42943__$2$$);
  $seq42943__$1_seq42943__$2$$ = $APP.cljs.core.next($seq42943__$1_seq42943__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__42944$$, $G__42945_seq42943$$, $seq42943__$1_seq42943__$2$$);
};
instaparse.core.parses = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$197_argseq__5756__auto__$$ = [], $len__5749__auto___43022$$ = arguments.length, $i__5750__auto___43023$$ = 0;;) {
    if ($i__5750__auto___43023$$ < $len__5749__auto___43022$$) {
      $args__5755__auto__$jscomp$197_argseq__5756__auto__$$.push(arguments[$i__5750__auto___43023$$]), $i__5750__auto___43023$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$197_argseq__5756__auto__$$ = 2 < $args__5755__auto__$jscomp$197_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$197_argseq__5756__auto__$$.slice(2), 0, null) : null;
  return instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args__5755__auto__$jscomp$197_argseq__5756__auto__$$);
};
instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic = function($JSCompiler_temp_const$jscomp$741_parser$$, $text$$, $p__42952_start_production$$) {
  var $JSCompiler_temp_const$jscomp$740_options$$ = $APP.cljs.core.__destructure_map($p__42952_start_production$$);
  $p__42952_start_production$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($JSCompiler_temp_const$jscomp$740_options$$, $APP.cljs$cst$1574$start, cljs$cst$1997$start_production.cljs$core$IFn$_invoke$arity$1($JSCompiler_temp_const$jscomp$741_parser$$));
  var $partial_QMARK_$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($JSCompiler_temp_const$jscomp$740_options$$, cljs$cst$2122$partial, !1), $JSCompiler_temp_const$jscomp$739_unhide$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$jscomp$740_options$$, cljs$cst$2123$unhide);
  $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($JSCompiler_temp_const$jscomp$740_options$$, $APP.cljs$cst$144$trace, !1);
  var $G__42954$jscomp$inline_4769_JSCompiler_inline_result$jscomp$742_parser__$1$$ = instaparse.core.unhide_parser($JSCompiler_temp_const$jscomp$741_parser$$, $JSCompiler_temp_const$jscomp$739_unhide$$);
  return $APP.cljs.core.truth_($APP.cljs$cst$2124$total.cljs$core$IFn$_invoke$arity$1($JSCompiler_temp_const$jscomp$740_options$$)) ? ($JSCompiler_temp_const$jscomp$741_parser$$ = instaparse.gll, $JSCompiler_temp_const$jscomp$740_options$$ = $JSCompiler_temp_const$jscomp$741_parser$$.parses_total, $JSCompiler_temp_const$jscomp$739_unhide$$ = cljs$cst$1996$grammar.cljs$core$IFn$_invoke$arity$1($G__42954$jscomp$inline_4769_JSCompiler_inline_result$jscomp$742_parser__$1$$), $G__42954$jscomp$inline_4769_JSCompiler_inline_result$jscomp$742_parser__$1$$ = 
  cljs$cst$2071$output_format.cljs$core$IFn$_invoke$arity$1($G__42954$jscomp$inline_4769_JSCompiler_inline_result$jscomp$742_parser__$1$$), $G__42954$jscomp$inline_4769_JSCompiler_inline_result$jscomp$742_parser__$1$$ = instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1($G__42954$jscomp$inline_4769_JSCompiler_inline_result$jscomp$742_parser__$1$$) : instaparse.reduction.node_builders.call(null, $G__42954$jscomp$inline_4769_JSCompiler_inline_result$jscomp$742_parser__$1$$), 
  $JSCompiler_temp_const$jscomp$740_options$$.call($JSCompiler_temp_const$jscomp$741_parser$$, $JSCompiler_temp_const$jscomp$739_unhide$$, $p__42952_start_production$$, $text$$, $partial_QMARK_$$, $G__42954$jscomp$inline_4769_JSCompiler_inline_result$jscomp$742_parser__$1$$)) : instaparse.gll.parses(cljs$cst$1996$grammar.cljs$core$IFn$_invoke$arity$1($G__42954$jscomp$inline_4769_JSCompiler_inline_result$jscomp$742_parser__$1$$), $p__42952_start_production$$, $text$$, $partial_QMARK_$$);
};
instaparse.core.parses.cljs$lang$maxFixedArity = 2;
instaparse.core.parses.cljs$lang$applyTo = function($G__42951_seq42949$$) {
  var $G__42950$$ = $APP.cljs.core.first($G__42951_seq42949$$), $seq42949__$1_seq42949__$2$$ = $APP.cljs.core.next($G__42951_seq42949$$);
  $G__42951_seq42949$$ = $APP.cljs.core.first($seq42949__$1_seq42949__$2$$);
  $seq42949__$1_seq42949__$2$$ = $APP.cljs.core.next($seq42949__$1_seq42949__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__42950$$, $G__42951_seq42949$$, $seq42949__$1_seq42949__$2$$);
};
instaparse.core.Parser = function($grammar$$, $start_production$$, $output_format$$, $__meta$$, $__extmap$$, $__hash$$) {
  this.grammar = $grammar$$;
  this.start_production = $start_production$$;
  this.output_format = $output_format$$;
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716171;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k42956$$, $else__5326__auto__$$) {
  switch($k42956$$ instanceof $APP.cljs.core.Keyword ? $k42956$$.fqn : null) {
    case "grammar":
      return this.grammar;
    case "start-production":
      return this.start_production;
    case "output-format":
      return this.output_format;
    default:
      return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k42956$$, $else__5326__auto__$$);
  }
};
instaparse.core.Parser.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__42966_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__42966_v__5348__auto__$$, 0, null);
    $p__42966_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__42966_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__42966_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__42966_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#instaparse.core.Parser{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$1996$grammar, this.grammar], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$1997$start_production, this.start_production], null), 
  new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2071$output_format, this.output_format], null)], null), this.__extmap));
};
instaparse.core.Parser.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__42955$$) {
  return new $APP.cljs.core.RecordIter(0, this, 3, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$1996$grammar, cljs$cst$1997$start_production, cljs$cst$2071$output_format], null), $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
instaparse.core.Parser.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
instaparse.core.Parser.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new instaparse.core.Parser(this.grammar, this.start_production, this.output_format, this.__meta, this.__extmap, this.__hash);
};
instaparse.core.Parser.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 3 + $APP.cljs.core.count(this.__extmap);
};
instaparse.core.Parser.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$70_h__5134__auto____$1$jscomp$70_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$70_h__5134__auto____$1$jscomp$70_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$70_h__5134__auto____$1$jscomp$70_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$70_h__5134__auto____$1$jscomp$70_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$70_h__5134__auto____$1$jscomp$70_this__5319__auto__$$ = -360509877 ^ $APP.cljs.core.hash_unordered_coll(this);
};
instaparse.core.Parser.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this42957$$, $other42958$$) {
  return $other42958$$ != null && this.constructor === $other42958$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.grammar, $other42958$$.grammar) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.start_production, $other42958$$.start_production) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.output_format, $other42958$$.output_format) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other42958$$.__extmap);
};
instaparse.core.Parser.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$1997$start_production, null, cljs$cst$1996$grammar, null, cljs$cst$2071$output_format, null], null), null), $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), $k__5334__auto__$$) : new instaparse.core.Parser(this.grammar, 
  this.start_production, this.output_format, this.__meta, $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
instaparse.core.Parser.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k42956$$) {
  switch($k42956$$ instanceof $APP.cljs.core.Keyword ? $k42956$$.fqn : null) {
    case "grammar":
    case "start-production":
    case "output-format":
      return !0;
    default:
      return $APP.cljs.core.contains_QMARK_(this.__extmap, $k42956$$);
  }
};
instaparse.core.Parser.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($pred__42983_this__5331__auto__$$, $k__5332__auto__$$, $G__42955$$) {
  $pred__42983_this__5331__auto__$$ = $APP.cljs.core.keyword_identical_QMARK_;
  return $APP.cljs.core.truth_($pred__42983_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__42983_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$1996$grammar, $k__5332__auto__$$) : $pred__42983_this__5331__auto__$$.call(null, cljs$cst$1996$grammar, $k__5332__auto__$$)) ? new instaparse.core.Parser($G__42955$$, this.start_production, this.output_format, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__42983_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? 
  $pred__42983_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$1997$start_production, $k__5332__auto__$$) : $pred__42983_this__5331__auto__$$.call(null, cljs$cst$1997$start_production, $k__5332__auto__$$)) ? new instaparse.core.Parser(this.grammar, $G__42955$$, this.output_format, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__42983_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__42983_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2071$output_format, 
  $k__5332__auto__$$) : $pred__42983_this__5331__auto__$$.call(null, cljs$cst$2071$output_format, $k__5332__auto__$$)) ? new instaparse.core.Parser(this.grammar, this.start_production, $G__42955$$, this.__meta, this.__extmap, null) : new instaparse.core.Parser(this.grammar, this.start_production, this.output_format, this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__42955$$), null);
};
instaparse.core.Parser.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.MapEntry(cljs$cst$1996$grammar, this.grammar, null), new $APP.cljs.core.MapEntry(cljs$cst$1997$start_production, this.start_production, null), new $APP.cljs.core.MapEntry(cljs$cst$2071$output_format, this.output_format, null)], null), this.__extmap));
};
instaparse.core.Parser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__42955$$) {
  return new instaparse.core.Parser(this.grammar, this.start_production, this.output_format, $G__42955$$, this.__extmap, this.__hash);
};
instaparse.core.Parser.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
instaparse.core.Parser.prototype.call = function($unused__11804__auto__$$) {
  switch(arguments.length - 1) {
    case 1:
      return this.cljs$core$IFn$_invoke$arity$1(arguments[1]);
    case 3:
      return this.cljs$core$IFn$_invoke$arity$3(arguments[1], arguments[2], arguments[3]);
    case 5:
      return this.cljs$core$IFn$_invoke$arity$5(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return this.cljs$core$IFn$_invoke$arity$7(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]);
    case 9:
      return this.cljs$core$IFn$_invoke$arity$9(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]);
    case 11:
      return this.cljs$core$IFn$_invoke$arity$11(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11]);
    case 13:
      return this.cljs$core$IFn$_invoke$arity$13(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13]);
    case 15:
      return this.cljs$core$IFn$_invoke$arity$15(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15]);
    case 17:
      return this.cljs$core$IFn$_invoke$arity$17(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17]);
    case 19:
      return this.cljs$core$IFn$_invoke$arity$19(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18], arguments[19]);
    case 21:
      return this.cljs$core$IFn$_invoke$arity$21(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18], arguments[19], arguments[20], arguments[21]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length - 1)].join(""));
  }
};
instaparse.core.Parser.prototype.apply = function($self__$$, $args42960$$) {
  return this.call.apply(this, [this].concat($APP.cljs.core.aclone($args42960$$)));
};
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$1 = function($text$$) {
  return instaparse.core.parse(this, $text$$);
};
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$3 = function($text$$, $key1$$, $val1$$) {
  return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(this, $text$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$key1$$, $val1$$], 0));
};
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$5 = function($text$$, $key1$$, $val1$$, $key2$$, $val2$$) {
  return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(this, $text$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$key1$$, $val1$$, $key2$$, $val2$$], 0));
};
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$7 = function($text$$, $key1$$, $val1$$, $key2$$, $val2$$, $key3$$, $val3$$) {
  return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(this, $text$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$key1$$, $val1$$, $key2$$, $val2$$, $key3$$, $val3$$], 0));
};
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$9 = function($text$$, $a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$) {
  return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(this, $text$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$], 0));
};
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$11 = function($text$$, $a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$) {
  return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(this, $text$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$], 0));
};
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$13 = function($text$$, $a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$) {
  return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(this, $text$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$], 0));
};
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$15 = function($text$$, $a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$) {
  return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(this, $text$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$], 0));
};
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$17 = function($text$$, $a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$, $p$$) {
  return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(this, $text$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$, $p$$], 0));
};
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$19 = function($text$$, $a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$, $p$$, $q$$, $r$$) {
  return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(this, $text$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$, $p$$], 0));
};
instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$21 = function($text$$, $a$$, $b$$, $c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$, $p$$, $q$$, $r$$, $s$$, $more$$) {
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(instaparse.core.parse, this, $text$$, $a$$, $b$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$c$$, $d$$, $e$$, $f$$, $g$$, $h$$, $i$$, $j$$, $k$$, $l$$, $m$$, $n$$, $o$$, $p$$, $q$$, $r$$, $s$$, $more$$], 0));
};
instaparse.core.Parser.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2027$grammar, cljs$cst$2125$start_production, cljs$cst$2126$output_format], null);
};
instaparse.core.Parser.cljs$lang$type = !0;
instaparse.core.Parser.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "instaparse.core/Parser", null, 1, null);
};
instaparse.core.Parser.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "instaparse.core/Parser");
};
instaparse.core.__GT_Parser = function($grammar$$, $start_production$$, $output_format$$) {
  return new instaparse.core.Parser($grammar$$, $start_production$$, $output_format$$, null, null, null);
};
instaparse.core.map__GT_Parser = function($G__42959$$) {
  var $G__42997$jscomp$inline_4771_extmap__5365__auto__$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($G__42959$$, cljs$cst$1996$grammar, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$1997$start_production, cljs$cst$2071$output_format], 0));
  $G__42997$jscomp$inline_4771_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__42959$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__42997$jscomp$inline_4771_extmap__5365__auto__$$) : $G__42997$jscomp$inline_4771_extmap__5365__auto__$$;
  return new instaparse.core.Parser(cljs$cst$1996$grammar.cljs$core$IFn$_invoke$arity$1($G__42959$$), cljs$cst$1997$start_production.cljs$core$IFn$_invoke$arity$1($G__42959$$), cljs$cst$2071$output_format.cljs$core$IFn$_invoke$arity$1($G__42959$$), null, $APP.cljs.core.not_empty($G__42997$jscomp$inline_4771_extmap__5365__auto__$$), null);
};
instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$ = $APP.cljs.core.PROTOCOL_SENTINEL;
instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($parser$$, $writer$$, $_$$) {
  return $APP.cljs.core._write($writer$$, instaparse.print.Parser__GT_str(this));
};
instaparse.core.parser = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$198_argseq__5756__auto__$$ = [], $len__5749__auto___43031$$ = arguments.length, $i__5750__auto___43032$$ = 0;;) {
    if ($i__5750__auto___43032$$ < $len__5749__auto___43031$$) {
      $args__5755__auto__$jscomp$198_argseq__5756__auto__$$.push(arguments[$i__5750__auto___43032$$]), $i__5750__auto___43032$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$198_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$198_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$198_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$198_argseq__5756__auto__$$);
};
instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic = function($grammar_specification$$, $built_parser_p__43006$$) {
  var $options$$ = $APP.cljs.core.__destructure_map($built_parser_p__43006$$), $input_format$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($options$$, cljs$cst$2127$input_format, instaparse.core._STAR_default_input_format_STAR_), $output_format$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($options$$, cljs$cst$2071$output_format, instaparse.core._STAR_default_output_format_STAR_), $start$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($options$$, $APP.cljs$cst$1574$start, null);
  $built_parser_p__43006$$ = typeof $grammar_specification$$ === "string" ? function() {
    a: {
      var $_STAR_case_insensitive_literals_STAR__orig_val__43009$$ = instaparse.cfg._STAR_case_insensitive_literals_STAR_, $_STAR_case_insensitive_literals_STAR__temp_val__43010$$ = cljs$cst$2011$string_ci.cljs$core$IFn$_invoke$arity$2($options$$, $APP.cljs$cst$205$default);
      instaparse.cfg._STAR_case_insensitive_literals_STAR_ = $_STAR_case_insensitive_literals_STAR__temp_val__43010$$;
      try {
        var $G__43011__$1$$ = $input_format$$ instanceof $APP.cljs.core.Keyword ? $input_format$$.fqn : null;
        switch($G__43011__$1$$) {
          case "abnf":
            var $parser$$ = instaparse.abnf.build_parser($grammar_specification$$, $output_format$$);
            break a;
          case "ebnf":
            $parser$$ = instaparse.cfg.build_parser.cljs$core$IFn$_invoke$arity$3($grammar_specification$$, $output_format$$, cljs$cst$2128$allow_namespaced_nts.cljs$core$IFn$_invoke$arity$2($options$$, !1));
            break a;
          default:
            throw Error(["No matching clause: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($G__43011__$1$$)].join(""));
        }
      } finally {
        instaparse.cfg._STAR_case_insensitive_literals_STAR_ = $_STAR_case_insensitive_literals_STAR__orig_val__43009$$;
      }
      $parser$$ = void 0;
    }
    return $APP.cljs.core.truth_($start$$) ? instaparse.core.map__GT_Parser($APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($parser$$, cljs$cst$1997$start_production, $start$$)) : instaparse.core.map__GT_Parser($parser$$);
  }() : $APP.cljs.core.map_QMARK_($grammar_specification$$) ? function() {
    var $parser$$ = instaparse.cfg.build_parser_from_combinators($grammar_specification$$, $output_format$$, $start$$);
    return instaparse.core.map__GT_Parser($parser$$);
  }() : $APP.cljs.core.vector_QMARK_($grammar_specification$$) ? function() {
    var $parser$jscomp$69_start__$1$$ = $APP.cljs.core.truth_($start$$) ? $start$$ : $grammar_specification$$.cljs$core$IFn$_invoke$arity$1 ? $grammar_specification$$.cljs$core$IFn$_invoke$arity$1(0) : $grammar_specification$$.call(null, 0);
    $parser$jscomp$69_start__$1$$ = instaparse.cfg.build_parser_from_combinators($APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.hash_map, $grammar_specification$$), $output_format$$, $parser$jscomp$69_start__$1$$);
    return instaparse.core.map__GT_Parser($parser$jscomp$69_start__$1$$);
  }() : instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected string, map, or vector as grammar specification, got ", $APP.cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$grammar_specification$$], 0))], 0));
  var $auto_whitespace_temp__5823__auto__$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($options$$, cljs$cst$2129$auto_whitespace);
  $auto_whitespace_temp__5823__auto__$$ = $auto_whitespace_temp__5823__auto__$$ instanceof $APP.cljs.core.Keyword ? $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2(instaparse.core.standard_whitespace_parsers, $auto_whitespace_temp__5823__auto__$$) : $auto_whitespace_temp__5823__auto__$$;
  if ($APP.cljs.core.truth_($auto_whitespace_temp__5823__auto__$$)) {
    var $map__43015__$1_ws_start$$ = $APP.cljs.core.__destructure_map($auto_whitespace_temp__5823__auto__$$);
    $auto_whitespace_temp__5823__auto__$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__43015__$1_ws_start$$, cljs$cst$1996$grammar);
    $map__43015__$1_ws_start$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__43015__$1_ws_start$$, cljs$cst$1997$start_production);
    return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($built_parser_p__43006$$, cljs$cst$1996$grammar, instaparse.combinators_source.auto_whitespace($built_parser_p__43006$$.grammar, $built_parser_p__43006$$.start_production, $auto_whitespace_temp__5823__auto__$$, $map__43015__$1_ws_start$$));
  }
  return $built_parser_p__43006$$;
};
instaparse.core.parser.cljs$lang$maxFixedArity = 1;
instaparse.core.parser.cljs$lang$applyTo = function($seq43002_seq43002__$1$$) {
  var $G__43003$$ = $APP.cljs.core.first($seq43002_seq43002__$1$$);
  $seq43002_seq43002__$1$$ = $APP.cljs.core.next($seq43002_seq43002__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__43003$$, $seq43002_seq43002__$1$$);
};
instaparse.core.failure_QMARK_ = function($result$$) {
  return $result$$ instanceof instaparse.gll.failure_type || $APP.cljs.core.meta($result$$) instanceof instaparse.gll.failure_type;
};
instaparse.core.get_failure = function($result$$) {
  return $result$$ instanceof instaparse.gll.failure_type ? $result$$ : $APP.cljs.core.meta($result$$) instanceof instaparse.gll.failure_type ? $APP.cljs.core.meta($result$$) : null;
};
instaparse.core.standard_whitespace_parsers = new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$2130$standard, instaparse.core.parser("whitespace \x3d #'\\s+'"), cljs$cst$2131$comma, instaparse.core.parser("whitespace \x3d #'[,\\s]+'")], null);
instaparse.core.transform = instaparse.transform.transform;
instaparse.core.add_line_and_column_info_to_metadata = instaparse.line_col.add_line_col_spans;
instaparse.core.span = instaparse.viz.span;
$APP.scittle.instaparse = {};
$APP.scittle.instaparse.init = function() {
  return $APP.scittle.core.register_plugin_BANG_(cljs$cst$2132$scittle_DOT_instaparse_SLASH_instaparse, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$398$namespaces, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$2133$instaparse_DOT_core, $APP.sci.core._copy_ns($APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs.core.with_meta(cljs$cst$2134$failure_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$774$declared, !0], null)), $APP.cljs.core.with_meta(cljs$cst$2135$parses, 
  new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list($APP.cljs.core.with_meta(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2136$parser, $APP.cljs$cst$2028$text, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$265$as, $APP.cljs$cst$1270$options], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$559$pre, 
  new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$1152$contains_QMARK_, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 4, [null, "null", $APP.cljs$cst$2121$tags, "null", $APP.cljs$cst$2006$content, "null", $APP.cljs$cst$365$all, "null"], null), null), $APP.cljs.core.list($APP.cljs$cst$435$get, $APP.cljs$cst$1270$options, cljs$cst$2123$unhide))], null)], null)))), $APP.cljs$cst$256$doc, 
  "Use parser to parse the text.  Returns lazy seq of all parse trees\n   that completely parse the text.  If no parse tree is possible, returns\n   () with a Failure object attached as metadata.\n   \n   Optional keyword arguments:\n   :start :keyword  (where :keyword is name of starting production rule)\n   :partial true    (parses that don't consume the whole string are okay)\n   :total true      (if parse fails, embed failure node in tree)\n   :unhide \x3c:tags or :content or :all\x3e (for this parse, disable hiding)\n\n   Clj only:\n   :trace true      (print diagnostic trace while parsing)", 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list(cljs$cst$2136$parser, $APP.cljs$cst$2028$text, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$265$as, $APP.cljs$cst$1270$options], null))], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2136$parser, $APP.cljs$cst$2028$text, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$265$as, $APP.cljs$cst$1270$options], null)], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2137$map__GT_Parser, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, 
  !0, $APP.cljs$cst$2139$factory, $APP.cljs$cst$202$map, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2140$G__42959], null))), $APP.cljs$cst$256$doc, "Factory function for instaparse.core/Parser, taking a map of keywords to field values."], null)), $APP.cljs.core.with_meta(cljs$cst$2141$parse, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list($APP.cljs.core.with_meta(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2136$parser, $APP.cljs$cst$2028$text, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$265$as, $APP.cljs$cst$1270$options], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$559$pre, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs.core.list($APP.cljs$cst$1152$contains_QMARK_, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 4, [null, "null", $APP.cljs$cst$2121$tags, "null", $APP.cljs$cst$2006$content, "null", $APP.cljs$cst$365$all, "null"], null), null), $APP.cljs.core.list($APP.cljs$cst$435$get, $APP.cljs$cst$1270$options, cljs$cst$2123$unhide)), $APP.cljs.core.list($APP.cljs$cst$1152$contains_QMARK_, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [null, "null", $APP.cljs$cst$2115$memory, "null"], null), null), $APP.cljs.core.list($APP.cljs$cst$435$get, $APP.cljs$cst$1270$options, cljs$cst$2114$optimize))], null)], null)))), $APP.cljs$cst$256$doc, "Use parser to parse the text.  Returns first parse tree found\n   that completely parses the text.  If no parse tree is possible, returns\n   a Failure object.\n   \n   Optional keyword arguments:\n   :start :keyword  (where :keyword is name of starting production rule)\n   :partial true    (parses that don't consume the whole string are okay)\n   :total true      (if parse fails, embed failure node in tree)\n   :unhide \x3c:tags or :content or :all\x3e (for this parse, disable hiding)\n   :optimize :memory   (when possible, employ strategy to use less memory)\n\n   Clj only:\n   :trace true      (print diagnostic trace while parsing)", 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list(cljs$cst$2136$parser, $APP.cljs$cst$2028$text, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$265$as, $APP.cljs$cst$1270$options], null))], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2136$parser, $APP.cljs$cst$2028$text, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$265$as, $APP.cljs$cst$1270$options], null)], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2142$get_failure, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2143$result], null))), $APP.cljs$cst$256$doc, "Extracts failure object from failed parse result."], null)), $APP.cljs.core.with_meta(cljs$cst$2144$__GT_Parser, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, $APP.cljs$cst$2145$positional, $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2027$grammar, cljs$cst$2125$start_production, cljs$cst$2126$output_format], null))), $APP.cljs$cst$256$doc, "Positional factory function for instaparse.core/Parser."], null)), cljs$cst$2146$add_line_and_column_info_to_metadata, $APP.cljs.core.with_meta(cljs$cst$2147$_STAR_default_output_format_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$383$dynamic, !0], null)), $APP.cljs.core.with_meta(cljs$cst$2148$set_default_input_format_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list($APP.cljs.core.with_meta(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$420$type], null), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$559$pre, new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$2120$ebnf, "null", cljs$cst$2149$abnf, "null"], null), null), $APP.cljs$cst$420$type)], null)], null)))), $APP.cljs$cst$256$doc, "Changes the default input format.  Input should be :abnf or :ebnf"], null)), $APP.cljs.core.with_meta(cljs$cst$2136$parser, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list($APP.cljs.core.with_meta(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2150$grammar_specification, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$265$as, $APP.cljs$cst$1270$options], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$559$pre, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs.core.list($APP.cljs$cst$1152$contains_QMARK_, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [null, "null", cljs$cst$2120$ebnf, "null", cljs$cst$2149$abnf, "null"], null), null), $APP.cljs.core.list($APP.cljs$cst$435$get, $APP.cljs$cst$1270$options, cljs$cst$2127$input_format)), $APP.cljs.core.list($APP.cljs$cst$1152$contains_QMARK_, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [null, "null", $APP.cljs$cst$1675$hiccup, 
  "null", cljs$cst$2005$enlive, "null"], null), null), $APP.cljs.core.list($APP.cljs$cst$435$get, $APP.cljs$cst$1270$options, cljs$cst$2071$output_format)), $APP.cljs.core.list($APP.cljs$cst$1058$let, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2151$ws_parser, $APP.cljs.core.list($APP.cljs$cst$435$get, $APP.cljs$cst$1270$options, cljs$cst$2129$auto_whitespace)], null), $APP.cljs.core.list($APP.cljs$cst$403$or, $APP.cljs.core.list($APP.cljs$cst$674$nil_QMARK_, 
  cljs$cst$2151$ws_parser), $APP.cljs.core.list($APP.cljs$cst$1152$contains_QMARK_, cljs$cst$2152$standard_whitespace_parsers, cljs$cst$2151$ws_parser), $APP.cljs.core.list($APP.cljs$cst$408$and, $APP.cljs.core.list($APP.cljs$cst$928$map_QMARK_, cljs$cst$2151$ws_parser), $APP.cljs.core.list($APP.cljs$cst$1152$contains_QMARK_, cljs$cst$2151$ws_parser, cljs$cst$1996$grammar), $APP.cljs.core.list($APP.cljs$cst$1152$contains_QMARK_, cljs$cst$2151$ws_parser, cljs$cst$1997$start_production))))], null)], 
  null)))), $APP.cljs$cst$256$doc, "Takes a string specification of a context-free grammar,\n  or a URI for a text file containing such a specification (Clj only),\n  or a map of parser combinators and returns a parser for that grammar.\n\n  Optional keyword arguments:\n  :input-format :ebnf\n  or\n  :input-format :abnf\n\n  :output-format :enlive\n  or\n  :output-format :hiccup\n\n  :start :keyword (where :keyword is name of starting production rule)\n\n  :string-ci true (treat all string literals as case insensitive)\n\n  :allow-namespaced-nts true (allow namespaced non-terminals in parser specification;\n                              parser's output will use corresponding namespaced keywords)\n\n  :auto-whitespace (:standard or :comma)\n  or\n  :auto-whitespace custom-whitespace-parser\n\n  Clj only:\n  :no-slurp true (disables use of slurp to auto-detect whether\n                  input is a URI.  When using this option, input\n                  must be a grammar string or grammar map.  Useful\n                  for platforms where slurp is slow or not available.)", 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list(cljs$cst$2150$grammar_specification, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$265$as, $APP.cljs$cst$1270$options], null))], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2150$grammar_specification, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$265$as, $APP.cljs$cst$1270$options], null)], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs$cst$2153$transform, $APP.cljs.core.with_meta(cljs$cst$2154$set_default_output_format_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list($APP.cljs.core.with_meta(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$420$type], null), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$559$pre, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$1675$hiccup, "null", cljs$cst$2005$enlive, "null"], null), null), $APP.cljs$cst$420$type)], null)], null)))), $APP.cljs$cst$256$doc, "Changes the default output format.  Input should be :hiccup or :enlive"], null)), $APP.cljs$cst$2155$span, $APP.cljs.core.with_meta(cljs$cst$2156$enable_tracing_BANG_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$774$declared, !0], null)), $APP.cljs.core.with_meta(cljs$cst$2157$_STAR_default_input_format_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$383$dynamic, !0], null))], [new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2158$instaparse_DOT_core_SLASH_failure_QMARK_, $APP.cljs$cst$108$val, instaparse.core.failure_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2143$result], null)), $APP.cljs$cst$256$doc, "Tests whether a parse result is a failure."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2159$instaparse_DOT_core_SLASH_parses, $APP.cljs$cst$108$val, instaparse.core.parses, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs.core.with_meta(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2136$parser, $APP.cljs$cst$2028$text, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$265$as, $APP.cljs$cst$1270$options], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$559$pre, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$1152$contains_QMARK_, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 4, [null, "null", $APP.cljs$cst$2121$tags, "null", $APP.cljs$cst$2006$content, "null", $APP.cljs$cst$365$all, "null"], null), 
  null), $APP.cljs.core.list($APP.cljs$cst$435$get, $APP.cljs$cst$1270$options, cljs$cst$2123$unhide))], null)], null))), $APP.cljs$cst$256$doc, "Use parser to parse the text.  Returns lazy seq of all parse trees\n   that completely parse the text.  If no parse tree is possible, returns\n   () with a Failure object attached as metadata.\n   \n   Optional keyword arguments:\n   :start :keyword  (where :keyword is name of starting production rule)\n   :partial true    (parses that don't consume the whole string are okay)\n   :total true      (if parse fails, embed failure node in tree)\n   :unhide \x3c:tags or :content or :all\x3e (for this parse, disable hiding)\n\n   Clj only:\n   :trace true      (print diagnostic trace while parsing)"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2160$instaparse_DOT_core_SLASH_map__GT_Parser, $APP.cljs$cst$108$val, instaparse.core.map__GT_Parser, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2140$G__42959], null)), $APP.cljs$cst$256$doc, "Factory function for instaparse.core/Parser, taking a map of keywords to field values."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2161$instaparse_DOT_core_SLASH_parse, $APP.cljs$cst$108$val, instaparse.core.parse, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs.core.with_meta(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2136$parser, $APP.cljs$cst$2028$text, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$265$as, $APP.cljs$cst$1270$options], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$559$pre, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$1152$contains_QMARK_, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 4, [null, "null", $APP.cljs$cst$2121$tags, "null", $APP.cljs$cst$2006$content, "null", $APP.cljs$cst$365$all, "null"], null), 
  null), $APP.cljs.core.list($APP.cljs$cst$435$get, $APP.cljs$cst$1270$options, cljs$cst$2123$unhide)), $APP.cljs.core.list($APP.cljs$cst$1152$contains_QMARK_, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [null, "null", $APP.cljs$cst$2115$memory, "null"], null), null), $APP.cljs.core.list($APP.cljs$cst$435$get, $APP.cljs$cst$1270$options, cljs$cst$2114$optimize))], null)], null))), $APP.cljs$cst$256$doc, "Use parser to parse the text.  Returns first parse tree found\n   that completely parses the text.  If no parse tree is possible, returns\n   a Failure object.\n   \n   Optional keyword arguments:\n   :start :keyword  (where :keyword is name of starting production rule)\n   :partial true    (parses that don't consume the whole string are okay)\n   :total true      (if parse fails, embed failure node in tree)\n   :unhide \x3c:tags or :content or :all\x3e (for this parse, disable hiding)\n   :optimize :memory   (when possible, employ strategy to use less memory)\n\n   Clj only:\n   :trace true      (print diagnostic trace while parsing)"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2162$instaparse_DOT_core_SLASH_get_failure, $APP.cljs$cst$108$val, instaparse.core.get_failure, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2143$result], null)), $APP.cljs$cst$256$doc, "Extracts failure object from failed parse result."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2163$instaparse_DOT_core_SLASH___GT_Parser, $APP.cljs$cst$108$val, instaparse.core.__GT_Parser, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2027$grammar, cljs$cst$2125$start_production, cljs$cst$2126$output_format], null)), $APP.cljs$cst$256$doc, 
  "Positional factory function for instaparse.core/Parser."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2164$instaparse_DOT_core_SLASH_add_line_and_column_info_to_metadata, $APP.cljs$cst$108$val, instaparse.core.add_line_and_column_info_to_metadata, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2165$instaparse_DOT_core_SLASH__STAR_default_output_format_STAR_, 
  $APP.cljs$cst$108$val, instaparse.core._STAR_default_output_format_STAR_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$383$dynamic, !0], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2166$instaparse_DOT_core_SLASH_set_default_input_format_BANG_, $APP.cljs$cst$108$val, instaparse.core.set_default_input_format_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list($APP.cljs.core.with_meta(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$420$type], null), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$559$pre, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$2120$ebnf, "null", cljs$cst$2149$abnf, "null"], 
  null), null), $APP.cljs$cst$420$type)], null)], null))), $APP.cljs$cst$256$doc, "Changes the default input format.  Input should be :abnf or :ebnf"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2167$instaparse_DOT_core_SLASH_parser, $APP.cljs$cst$108$val, instaparse.core.parser, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs.core.with_meta(new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2150$grammar_specification, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$265$as, $APP.cljs$cst$1270$options], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$559$pre, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$1152$contains_QMARK_, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 
  3, [null, "null", cljs$cst$2120$ebnf, "null", cljs$cst$2149$abnf, "null"], null), null), $APP.cljs.core.list($APP.cljs$cst$435$get, $APP.cljs$cst$1270$options, cljs$cst$2127$input_format)), $APP.cljs.core.list($APP.cljs$cst$1152$contains_QMARK_, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [null, "null", $APP.cljs$cst$1675$hiccup, "null", cljs$cst$2005$enlive, "null"], null), null), $APP.cljs.core.list($APP.cljs$cst$435$get, $APP.cljs$cst$1270$options, 
  cljs$cst$2071$output_format)), $APP.cljs.core.list($APP.cljs$cst$1058$let, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2151$ws_parser, $APP.cljs.core.list($APP.cljs$cst$435$get, $APP.cljs$cst$1270$options, cljs$cst$2129$auto_whitespace)], null), $APP.cljs.core.list($APP.cljs$cst$403$or, $APP.cljs.core.list($APP.cljs$cst$674$nil_QMARK_, cljs$cst$2151$ws_parser), $APP.cljs.core.list($APP.cljs$cst$1152$contains_QMARK_, cljs$cst$2152$standard_whitespace_parsers, 
  cljs$cst$2151$ws_parser), $APP.cljs.core.list($APP.cljs$cst$408$and, $APP.cljs.core.list($APP.cljs$cst$928$map_QMARK_, cljs$cst$2151$ws_parser), $APP.cljs.core.list($APP.cljs$cst$1152$contains_QMARK_, cljs$cst$2151$ws_parser, cljs$cst$1996$grammar), $APP.cljs.core.list($APP.cljs$cst$1152$contains_QMARK_, cljs$cst$2151$ws_parser, cljs$cst$1997$start_production))))], null)], null))), $APP.cljs$cst$256$doc, "Takes a string specification of a context-free grammar,\n  or a URI for a text file containing such a specification (Clj only),\n  or a map of parser combinators and returns a parser for that grammar.\n\n  Optional keyword arguments:\n  :input-format :ebnf\n  or\n  :input-format :abnf\n\n  :output-format :enlive\n  or\n  :output-format :hiccup\n\n  :start :keyword (where :keyword is name of starting production rule)\n\n  :string-ci true (treat all string literals as case insensitive)\n\n  :allow-namespaced-nts true (allow namespaced non-terminals in parser specification;\n                              parser's output will use corresponding namespaced keywords)\n\n  :auto-whitespace (:standard or :comma)\n  or\n  :auto-whitespace custom-whitespace-parser\n\n  Clj only:\n  :no-slurp true (disables use of slurp to auto-detect whether\n                  input is a URI.  When using this option, input\n                  must be a grammar string or grammar map.  Useful\n                  for platforms where slurp is slow or not available.)"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2168$instaparse_DOT_core_SLASH_transform, $APP.cljs$cst$108$val, instaparse.core.transform, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2169$instaparse_DOT_core_SLASH_set_default_output_format_BANG_, $APP.cljs$cst$108$val, instaparse.core.set_default_output_format_BANG_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs.core.with_meta(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$420$type], null), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$559$pre, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1675$hiccup, 
  "null", cljs$cst$2005$enlive, "null"], null), null), $APP.cljs$cst$420$type)], null)], null))), $APP.cljs$cst$256$doc, "Changes the default output format.  Input should be :hiccup or :enlive"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2170$instaparse_DOT_core_SLASH_span, $APP.cljs$cst$108$val, instaparse.core.span, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
  cljs$cst$2171$instaparse_DOT_core_SLASH_enable_tracing_BANG_, $APP.cljs$cst$108$val, instaparse.core.enable_tracing_BANG_, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2172$instaparse_DOT_core_SLASH__STAR_default_input_format_STAR_, $APP.cljs$cst$108$val, instaparse.core._STAR_default_input_format_STAR_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$383$dynamic, 
  !0], null)], null)]), $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$2133$instaparse_DOT_core, null)), cljs$cst$2173$instaparse_DOT_transform, $APP.sci.core._copy_ns(new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs.core.with_meta(cljs$cst$2174$map_preserving_meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$52$f, $APP.cljs$cst$2175$l], null)))], null)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2176$instaparse_DOT_transform_SLASH_map_preserving_meta, $APP.cljs$cst$108$val, instaparse.transform.map_preserving_meta, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f, $APP.cljs$cst$2175$l], 
  null))], null)], null), $APP.cljs.core.with_meta(cljs$cst$2177$merge_meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$177$obj, cljs$cst$2178$metamap], null))), $APP.cljs$cst$256$doc, "This variation of the merge-meta in gll does nothing if obj is not\nsomething that can have a metamap attached."], 
  null)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2179$instaparse_DOT_transform_SLASH_merge_meta, $APP.cljs$cst$108$val, instaparse.transform.merge_meta, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$177$obj, cljs$cst$2178$metamap], null)), $APP.cljs$cst$256$doc, "This variation of the merge-meta in gll does nothing if obj is not\nsomething that can have a metamap attached."], 
  null)], null), $APP.cljs.core.with_meta($APP.cljs$cst$2153$transform, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2180$transform_map, cljs$cst$2181$parse_tree], null))), $APP.cljs$cst$256$doc, "Takes a transform map and a parse tree (or seq of parse-trees).\n   A transform map is a mapping from tags to \n   functions that take a node's contents and return\n   a replacement for the node, i.e.,\n   {:node-tag (fn [child1 child2 ...] node-replacement),\n    :another-node-tag (fn [child1 child2 ...] node-replacement)}"], 
  null)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2182$instaparse_DOT_transform_SLASH_transform, $APP.cljs$cst$108$val, instaparse.transform.transform, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2180$transform_map, cljs$cst$2181$parse_tree], null)), $APP.cljs$cst$256$doc, "Takes a transform map and a parse tree (or seq of parse-trees).\n   A transform map is a mapping from tags to \n   functions that take a node's contents and return\n   a replacement for the node, i.e.,\n   {:node-tag (fn [child1 child2 ...] node-replacement),\n    :another-node-tag (fn [child1 child2 ...] node-replacement)}"], 
  null)], null)], null), $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$2173$instaparse_DOT_transform, null))], null)], null));
};
$APP.scittle.instaparse.init();

}).call(this);