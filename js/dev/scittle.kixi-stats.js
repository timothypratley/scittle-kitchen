(function(){
'use strict';
var cljs$cst$9828$standard_deviation = new $APP.cljs.core.Symbol(null, "standard-deviation", "standard-deviation", 1337763444, null), cljs$cst$9987$kixi_DOT_stats_DOT_distribution_SLASH_cauchy = new $APP.cljs.core.Symbol("kixi.stats.distribution", "cauchy", "kixi.stats.distribution/cauchy", 1062074668, null), cljs$cst$9821$__GT_t_kixi$stats$core115495 = new $APP.cljs.core.Symbol(null, "-\x3et_kixi$stats$core115495", "-\x3et_kixi$stats$core115495", -2001743107, null), cljs$cst$9855$__GT_t_kixi$stats$core115492 = 
new $APP.cljs.core.Symbol(null, "-\x3et_kixi$stats$core115492", "-\x3et_kixi$stats$core115492", -403900786, null), cljs$cst$9850$__GT_t_kixi$stats$core115486 = new $APP.cljs.core.Symbol(null, "-\x3et_kixi$stats$core115486", "-\x3et_kixi$stats$core115486", 2053561654, null), cljs$cst$9845$__GT_t_kixi$stats$core115480 = new $APP.cljs.core.Symbol(null, "-\x3et_kixi$stats$core115480", "-\x3et_kixi$stats$core115480", -1823121018, null), cljs$cst$9826$__GT_t_kixi$stats$core115477 = new $APP.cljs.core.Symbol(null, 
"-\x3et_kixi$stats$core115477", "-\x3et_kixi$stats$core115477", -940437577, null), cljs$cst$9830$__GT_t_kixi$stats$core115471 = new $APP.cljs.core.Symbol(null, "-\x3et_kixi$stats$core115471", "-\x3et_kixi$stats$core115471", -611453459, null), cljs$cst$9945$dirichlet_multinomial = new $APP.cljs.core.Symbol(null, "dirichlet-multinomial", "dirichlet-multinomial", 1528983376, null), cljs$cst$9754$returned = new $APP.cljs.core.Keyword(null, "returned", "returned", -2020439163), cljs$cst$9764$iqr = new $APP.cljs.core.Keyword(null, 
"iqr", "iqr", 1758816648), cljs$cst$9946$categorical = new $APP.cljs.core.Symbol(null, "categorical", "categorical", -831264963, null), cljs$cst$9799$meta114831 = new $APP.cljs.core.Symbol(null, "meta114831", "meta114831", 190232846, null), cljs$cst$9858$correlation_matrix = new $APP.cljs.core.Symbol(null, "correlation-matrix", "correlation-matrix", 740100652, null), cljs$cst$9856$standard_deviation_s = new $APP.cljs.core.Symbol(null, "standard-deviation-s", "standard-deviation-s", 1242129130, null), 
cljs$cst$9865$standard_deviation_p = new $APP.cljs.core.Symbol(null, "standard-deviation-p", "standard-deviation-p", -623301739, null), cljs$cst$9893$kixi_DOT_stats_DOT_core_SLASH_covariance_matrix = new $APP.cljs.core.Symbol("kixi.stats.core", "covariance-matrix", "kixi.stats.core/covariance-matrix", 1713750712, null), cljs$cst$9990$kixi_DOT_stats_DOT_distribution_SLASH_sample = new $APP.cljs.core.Symbol("kixi.stats.distribution", "sample", "kixi.stats.distribution/sample", 1407725870, null), cljs$cst$9770$lambda = 
new $APP.cljs.core.Keyword(null, "lambda", "lambda", -1483427225), cljs$cst$9841$covariance_matrix = new $APP.cljs.core.Symbol(null, "covariance-matrix", "covariance-matrix", 1992527019, null), cljs$cst$9876$kixi_DOT_stats_DOT_core_SLASH_variance = new $APP.cljs.core.Symbol("kixi.stats.core", "variance", "kixi.stats.core/variance", 1424751015, null), cljs$cst$9875$kixi_DOT_stats_DOT_core_SLASH_rmse = new $APP.cljs.core.Symbol("kixi.stats.core", "rmse", "kixi.stats.core/rmse", -545998513, null), cljs$cst$9948$exponential = 
new $APP.cljs.core.Symbol(null, "exponential", "exponential", 62007867, null), cljs$cst$9933$alphas = new $APP.cljs.core.Symbol(null, "alphas", "alphas", 1721449592, null), cljs$cst$9843$z_test = new $APP.cljs.core.Symbol(null, "z-test", "z-test", -1568049280, null), cljs$cst$9846$skewness_s = new $APP.cljs.core.Symbol(null, "skewness-s", "skewness-s", 1318919155, null), cljs$cst$9796$meta114816 = new $APP.cljs.core.Symbol(null, "meta114816", "meta114816", -94846273, null), cljs$cst$9914$kixi_DOT_stats_DOT_core_SLASH_r_squared = 
new $APP.cljs.core.Symbol("kixi.stats.core", "r-squared", "kixi.stats.core/r-squared", -803153667, null), cljs$cst$9759$lambda = new $APP.cljs.core.Symbol(null, "lambda", "lambda", 157104302, null), cljs$cst$9934$poisson = new $APP.cljs.core.Symbol(null, "poisson", "poisson", 1907986686, null), cljs$cst$9836$skewness_p = new $APP.cljs.core.Symbol(null, "skewness-p", "skewness-p", 291607521, null), cljs$cst$9808$p__115270 = new $APP.cljs.core.Symbol(null, "p__115270", "p__115270", -171958022, null), 
cljs$cst$10000$map__GT_TestResult = new $APP.cljs.core.Symbol(null, "map-\x3eTestResult", "map-\x3eTestResult", -1376551896, null), cljs$cst$9935$critical_value = new $APP.cljs.core.Symbol(null, "critical-value", "critical-value", 966987189, null), cljs$cst$10003$p_value = new $APP.cljs.core.Symbol(null, "p-value", "p-value", -1220411950, null), cljs$cst$9792$y_hat = new $APP.cljs.core.Symbol(null, "y-hat", "y-hat", -1873919944, null), cljs$cst$9984$kixi_DOT_stats_DOT_distribution_SLASH_uniform = 
new $APP.cljs.core.Symbol("kixi.stats.distribution", "uniform", "kixi.stats.distribution/uniform", 1660352373, null), cljs$cst$9989$kixi_DOT_stats_DOT_distribution_SLASH_draw = new $APP.cljs.core.Symbol("kixi.stats.distribution", "draw", "kixi.stats.distribution/draw", 1204590611, null), cljs$cst$9829$variance_s = new $APP.cljs.core.Symbol(null, "variance-s", "variance-s", -2043126367, null), cljs$cst$9853$variance_p = new $APP.cljs.core.Symbol(null, "variance-p", "variance-p", 2031826692, null), 
cljs$cst$9786$meta114791 = new $APP.cljs.core.Symbol(null, "meta114791", "meta114791", 1802974546, null), cljs$cst$9915$kixi_DOT_stats_DOT_core_SLASH_arithmetic_mean = new $APP.cljs.core.Symbol("kixi.stats.core", "arithmetic-mean", "kixi.stats.core/arithmetic-mean", 1795159803, null), cljs$cst$9857$kurtosis = new $APP.cljs.core.Symbol(null, "kurtosis", "kurtosis", 1248428033, null), cljs$cst$9982$kixi_DOT_stats_DOT_distribution_SLASH_bernoulli = new $APP.cljs.core.Symbol("kixi.stats.distribution", 
"bernoulli", "kixi.stats.distribution/bernoulli", -174142724, null), cljs$cst$9854$monoid = new $APP.cljs.core.Symbol(null, "monoid", "monoid", 1982407932, null), cljs$cst$9832$kixi_DOT_stats_DOT_protocols_SLASH_PContingencyTable = new $APP.cljs.core.Symbol("kixi.stats.protocols", "PContingencyTable", "kixi.stats.protocols/PContingencyTable", 19147016, null), cljs$cst$9911$kixi_DOT_stats_DOT_core_SLASH_kurtosis = new $APP.cljs.core.Symbol("kixi.stats.core", "kurtosis", "kixi.stats.core/kurtosis", 
993228302, null), cljs$cst$9880$kixi_DOT_stats_DOT_core_SLASH_standard_deviation = new $APP.cljs.core.Symbol("kixi.stats.core", "standard-deviation", "kixi.stats.core/standard-deviation", 1595592807, null), cljs$cst$9951$bernoulli = new $APP.cljs.core.Symbol(null, "bernoulli", "bernoulli", -110596626, null), cljs$cst$9831$__GT_t_kixi$stats$core115288 = new $APP.cljs.core.Symbol(null, "-\x3et_kixi$stats$core115288", "-\x3et_kixi$stats$core115288", -123368895, null), cljs$cst$9927$kixi_DOT_stats_DOT_core_SLASH_regression_confidence_interval = 
new $APP.cljs.core.Symbol("kixi.stats.core", "regression-confidence-interval", "kixi.stats.core/regression-confidence-interval", 2098091097, null), cljs$cst$9974$kixi_DOT_stats_DOT_distribution_SLASH_dirichlet_multinomial = new $APP.cljs.core.Symbol("kixi.stats.distribution", "dirichlet-multinomial", "kixi.stats.distribution/dirichlet-multinomial", 1683277894, null), cljs$cst$9968$kixi_DOT_stats_DOT_distribution_SLASH_sample_summary = new $APP.cljs.core.Symbol("kixi.stats.distribution", "sample-summary", 
"kixi.stats.distribution/sample-summary", 1026786233, null), cljs$cst$9966$kixi_DOT_stats_DOT_distribution_SLASH_f = new $APP.cljs.core.Symbol("kixi.stats.distribution", "f", "kixi.stats.distribution/f", 2100857581, null), cljs$cst$9976$kixi_DOT_stats_DOT_distribution_SLASH_t = new $APP.cljs.core.Symbol("kixi.stats.distribution", "t", "kixi.stats.distribution/t", 97113630, null), cljs$cst$9870$standard_error_s = new $APP.cljs.core.Symbol(null, "standard-error-s", "standard-error-s", -1413515432, 
null), cljs$cst$9867$simple_linear_regression = new $APP.cljs.core.Symbol(null, "simple-linear-regression", "simple-linear-regression", -568947272, null), cljs$cst$9919$kixi_DOT_stats_DOT_core_SLASH_standard_deviation_p = new $APP.cljs.core.Symbol("kixi.stats.core", "standard-deviation-p", "kixi.stats.core/standard-deviation-p", -920394360, null), cljs$cst$9910$kixi_DOT_stats_DOT_core_SLASH_standard_deviation_s = new $APP.cljs.core.Symbol("kixi.stats.core", "standard-deviation-s", "kixi.stats.core/standard-deviation-s", 
983807775, null), cljs$cst$9873$regression_confidence_interval = new $APP.cljs.core.Symbol(null, "regression-confidence-interval", "regression-confidence-interval", 1840749156, null), cljs$cst$9834$mean = new $APP.cljs.core.Symbol(null, "mean", "mean", 281296812, null), cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile = new $APP.cljs.core.Symbol(null, "kixi.stats.protocols.PQuantile", "kixi.stats.protocols.PQuantile", -2065633339, null), cljs$cst$9847$standard_error = new $APP.cljs.core.Symbol(null, 
"standard-error", "standard-error", 1124467117, null), cljs$cst$10002$__GT_TestResult = new $APP.cljs.core.Symbol(null, "-\x3eTestResult", "-\x3eTestResult", -625652318, null), cljs$cst$9952$chi_squared = new $APP.cljs.core.Symbol(null, "chi-squared", "chi-squared", -901021740, null), cljs$cst$9773$_LT__GT_ = new $APP.cljs.core.Keyword(null, "\x3c\x3e", "\x3c\x3e", 1280186386), cljs$cst$9801$distribution = new $APP.cljs.core.Keyword(null, "distribution", "distribution", -284555369), cljs$cst$9789$regression = 
new $APP.cljs.core.Symbol(null, "regression", "regression", 1209204402, null), cljs$cst$9972$kixi_DOT_stats_DOT_distribution_SLASH_multinomial = new $APP.cljs.core.Symbol("kixi.stats.distribution", "multinomial", "kixi.stats.distribution/multinomial", 1206332073, null), cljs$cst$9973$kixi_DOT_stats_DOT_distribution_SLASH_log_normal = new $APP.cljs.core.Symbol("kixi.stats.distribution", "log-normal", "kixi.stats.distribution/log-normal", 1143575259, null), cljs$cst$9939$pareto = new $APP.cljs.core.Symbol(null, 
"pareto", "pareto", 1709231323, null), cljs$cst$9771$probs = new $APP.cljs.core.Keyword(null, "probs", "probs", -1201894224), cljs$cst$9936$tails = new $APP.cljs.core.Symbol(null, "tails", "tails", 175166699, null), cljs$cst$9947$category_probs = new $APP.cljs.core.Symbol(null, "category-probs", "category-probs", 288314749, null), cljs$cst$9785$slope = new $APP.cljs.core.Symbol(null, "slope", "slope", 412593404, null), cljs$cst$9861$arithmetic_mean = new $APP.cljs.core.Symbol(null, "arithmetic-mean", 
"arithmetic-mean", 2051345640, null), cljs$cst$9872$t_test = new $APP.cljs.core.Symbol(null, "t-test", "t-test", -2134164338, null), cljs$cst$9798$map__114829 = new $APP.cljs.core.Symbol(null, "map__114829", "map__114829", -1283194670, null), cljs$cst$9932$dirichlet = new $APP.cljs.core.Symbol(null, "dirichlet", "dirichlet", -780469989, null), cljs$cst$9787$map__114812 = new $APP.cljs.core.Symbol(null, "map__114812", "map__114812", -1119094902, null), cljs$cst$10001$G__115132 = new $APP.cljs.core.Symbol(null, 
"G__115132", "G__115132", 1418741554, null), cljs$cst$9985$kixi_DOT_stats_DOT_distribution_SLASH_normal = new $APP.cljs.core.Symbol("kixi.stats.distribution", "normal", "kixi.stats.distribution/normal", 198374819, null), cljs$cst$9892$kixi_DOT_stats_DOT_core_SLASH_covariance_p = new $APP.cljs.core.Symbol("kixi.stats.core", "covariance-p", "kixi.stats.core/covariance-p", 702923902, null), cljs$cst$9955$maximum = new $APP.cljs.core.Symbol(null, "maximum", "maximum", -2080555055, null), cljs$cst$9896$kixi_DOT_stats_DOT_core_SLASH_covariance_s = 
new $APP.cljs.core.Symbol("kixi.stats.core", "covariance-s", "kixi.stats.core/covariance-s", 110319950, null), cljs$cst$9839$share = new $APP.cljs.core.Symbol(null, "share", "share", 1051097594, null), cljs$cst$10004$test_result = new $APP.cljs.core.Symbol(null, "test-result", "test-result", -151413868, null), cljs$cst$9755$rate = new $APP.cljs.core.Symbol(null, "rate", "rate", 211871829, null), cljs$cst$9950$beta_binomial = new $APP.cljs.core.Symbol(null, "beta-binomial", "beta-binomial", -1493838274, 
null), cljs$cst$9820$kixi_DOT_stats_DOT_core = new $APP.cljs.core.Symbol(null, "kixi.stats.core", "kixi.stats.core", -1899842709, null), cljs$cst$9917$kixi_DOT_stats_DOT_core_SLASH_regression_prediction_standard_error = new $APP.cljs.core.Symbol("kixi.stats.core", "regression-prediction-standard-error", "kixi.stats.core/regression-prediction-standard-error", -165723011, null), cljs$cst$9780$map__114789 = new $APP.cljs.core.Symbol(null, "map__114789", "map__114789", 469950410, null), cljs$cst$9904$kixi_DOT_stats_DOT_core_SLASH_proportion = 
new $APP.cljs.core.Symbol("kixi.stats.core", "proportion", "kixi.stats.core/proportion", 692749774, null), cljs$cst$9772$alphas = new $APP.cljs.core.Keyword(null, "alphas", "alphas", 80918065), cljs$cst$9964$kixi_DOT_stats_DOT_distribution_SLASH_poisson = new $APP.cljs.core.Symbol("kixi.stats.distribution", "poisson", "kixi.stats.distribution/poisson", 2102917068, null), cljs$cst$9819$scittle_DOT_kixi_stats_SLASH_kixi_stats = new $APP.cljs.core.Keyword("scittle.kixi-stats", "kixi-stats", "scittle.kixi-stats/kixi-stats", 
1512220579), cljs$cst$9906$kixi_DOT_stats_DOT_core_SLASH_variance_p = new $APP.cljs.core.Symbol("kixi.stats.core", "variance-p", "kixi.stats.core/variance-p", -1984066823, null), cljs$cst$9881$kixi_DOT_stats_DOT_core_SLASH_variance_s = new $APP.cljs.core.Symbol("kixi.stats.core", "variance-s", "kixi.stats.core/variance-s", -1231943758, null), cljs$cst$9912$kixi_DOT_stats_DOT_core_SLASH_correlation_matrix = new $APP.cljs.core.Symbol("kixi.stats.core", "correlation-matrix", "kixi.stats.core/correlation-matrix", 
1028113441, null), cljs$cst$9926$kixi_DOT_stats_DOT_core_SLASH_t_test = new $APP.cljs.core.Symbol("kixi.stats.core", "t-test", "kixi.stats.core/t-test", -249433415, null), cljs$cst$10016$kixi_DOT_stats_DOT_test_SLASH_map__GT_TestResult = new $APP.cljs.core.Symbol("kixi.stats.test", "map-\x3eTestResult", "kixi.stats.test/map-\x3eTestResult", -1656398040, null), cljs$cst$9864$harmonic_mean = new $APP.cljs.core.Symbol(null, "harmonic-mean", "harmonic-mean", 350397485, null), cljs$cst$9842$mse = new $APP.cljs.core.Symbol(null, 
"mse", "mse", -1676237584, null), cljs$cst$9800$statistic = new $APP.cljs.core.Keyword(null, "statistic", "statistic", -788899134), cljs$cst$10021$kixi_DOT_stats_DOT_test_SLASH_t_test = new $APP.cljs.core.Symbol("kixi.stats.test", "t-test", "kixi.stats.test/t-test", -247914610, null), cljs$cst$9975$kixi_DOT_stats_DOT_distribution_SLASH_categorical = new $APP.cljs.core.Symbol("kixi.stats.distribution", "categorical", "kixi.stats.distribution/categorical", 988630467, null), cljs$cst$9887$kixi_DOT_stats_DOT_core_SLASH_cramers_v = 
new $APP.cljs.core.Symbol("kixi.stats.core", "cramers-v", "kixi.stats.core/cramers-v", 472086395, null), cljs$cst$9793$sum_squares = new $APP.cljs.core.Symbol(null, "sum-squares", "sum-squares", 4070811, null), cljs$cst$10007$sd_a = new $APP.cljs.core.Symbol(null, "sd-a", "sd-a", 1652454914, null), cljs$cst$10010$sd_b = new $APP.cljs.core.Symbol(null, "sd-b", "sd-b", 1415068649, null), cljs$cst$9805$mean = new $APP.cljs.core.Keyword(null, "mean", "mean", -1359234715), cljs$cst$9817$meta115493 = new $APP.cljs.core.Symbol(null, 
"meta115493", "meta115493", -863367658, null), cljs$cst$9818$meta115496 = new $APP.cljs.core.Symbol(null, "meta115496", "meta115496", 195730904, null), cljs$cst$9815$meta115481 = new $APP.cljs.core.Symbol(null, "meta115481", "meta115481", 733923943, null), cljs$cst$9816$meta115487 = new $APP.cljs.core.Symbol(null, "meta115487", "meta115487", -1386639271, null), cljs$cst$9994$sd_x = new $APP.cljs.core.Symbol(null, "sd-x", "sd-x", 1778052567, null), cljs$cst$9997$sd_y = new $APP.cljs.core.Symbol(null, 
"sd-y", "sd-y", -947735317, null), cljs$cst$9908$kixi_DOT_stats_DOT_core_SLASH_monoid = new $APP.cljs.core.Symbol("kixi.stats.core", "monoid", "kixi.stats.core/monoid", 1771557121, null), cljs$cst$9775$y_bar = new $APP.cljs.core.Keyword(null, "y-bar", "y-bar", -1489868827), cljs$cst$9889$kixi_DOT_stats_DOT_core_SLASH_simple_z_test = new $APP.cljs.core.Symbol("kixi.stats.core", "simple-z-test", "kixi.stats.core/simple-z-test", 1148878516, null), cljs$cst$9837$simple_z_test = new $APP.cljs.core.Symbol(null, 
"simple-z-test", "simple-z-test", 1461957767, null), cljs$cst$9776$ss_xy = new $APP.cljs.core.Keyword(null, "ss-xy", "ss-xy", 483608232), cljs$cst$10015$kixi_DOT_stats_DOT_test_SLASH_chi_squared_test = new $APP.cljs.core.Symbol("kixi.stats.test", "chi-squared-test", "kixi.stats.test/chi-squared-test", -1401897648, null), cljs$cst$9888$kixi_DOT_stats_DOT_core_SLASH_skewness_p = new $APP.cljs.core.Symbol("kixi.stats.core", "skewness-p", "kixi.stats.core/skewness-p", 545775060, null), cljs$cst$9899$kixi_DOT_stats_DOT_core_SLASH_skewness_s = 
new $APP.cljs.core.Symbol("kixi.stats.core", "skewness-s", "kixi.stats.core/skewness-s", 1584704512, null), cljs$cst$9920$kixi_DOT_stats_DOT_core_SLASH_covariance = new $APP.cljs.core.Symbol("kixi.stats.core", "covariance", "kixi.stats.core/covariance", 1351586799, null), cljs$cst$9804$distribution = new $APP.cljs.core.Symbol(null, "distribution", "distribution", 1355976158, null), cljs$cst$9988$kixi_DOT_stats_DOT_distribution_SLASH_iqr = new $APP.cljs.core.Symbol("kixi.stats.distribution", "iqr", 
"kixi.stats.distribution/iqr", -546354991, null), cljs$cst$10011$n_b = new $APP.cljs.core.Symbol(null, "n-b", "n-b", -1896655762, null), cljs$cst$10008$n_a = new $APP.cljs.core.Symbol(null, "n-a", "n-a", -914192008, null), cljs$cst$9814$meta115478 = new $APP.cljs.core.Symbol(null, "meta115478", "meta115478", -1249175619, null), cljs$cst$9813$meta115472 = new $APP.cljs.core.Symbol(null, "meta115472", "meta115472", -1595682317, null), cljs$cst$9998$n_y = new $APP.cljs.core.Symbol(null, "n-y", "n-y", 
-2110474470, null), cljs$cst$9995$n_x = new $APP.cljs.core.Symbol(null, "n-x", "n-x", 1814782609, null), cljs$cst$9791$t_crit = new $APP.cljs.core.Symbol(null, "t-crit", "t-crit", -1473514667, null), cljs$cst$9956$cauchy = new $APP.cljs.core.Symbol(null, "cauchy", "cauchy", 608142394, null), cljs$cst$9902$kixi_DOT_stats_DOT_core_SLASH_chi_squared_test = new $APP.cljs.core.Symbol("kixi.stats.core", "chi-squared-test", "kixi.stats.core/chi-squared-test", -1402470331, null), cljs$cst$9944$log_normal = 
new $APP.cljs.core.Symbol(null, "log-normal", "log-normal", 1490696661, null), cljs$cst$9921$kixi_DOT_stats_DOT_core_SLASH_simple_linear_regression = new $APP.cljs.core.Symbol("kixi.stats.core", "simple-linear-regression", "kixi.stats.core/simple-linear-regression", -780600377, null), cljs$cst$9827$kixi_DOT_stats_DOT_protocols_SLASH_PDependentWithSignificance = new $APP.cljs.core.Symbol("kixi.stats.protocols", "PDependentWithSignificance", "kixi.stats.protocols/PDependentWithSignificance", -2139155491, 
null), cljs$cst$9863$regression_prediction_standard_error = new $APP.cljs.core.Symbol(null, "regression-prediction-standard-error", "regression-prediction-standard-error", -951676274, null), cljs$cst$9970$kixi_DOT_stats_DOT_distribution_SLASH_quantile = new $APP.cljs.core.Symbol("kixi.stats.distribution", "quantile", "kixi.stats.distribution/quantile", 198080402, null), cljs$cst$9965$kixi_DOT_stats_DOT_distribution_SLASH_median = new $APP.cljs.core.Symbol("kixi.stats.distribution", "median", "kixi.stats.distribution/median", 
-2000352024, null), cljs$cst$10013$kixi_DOT_stats_DOT_test_SLASH_simple_z_test = new $APP.cljs.core.Symbol("kixi.stats.test", "simple-z-test", "kixi.stats.test/simple-z-test", 1148294535, null), cljs$cst$10014$kixi_DOT_stats_DOT_test_SLASH_z_test = new $APP.cljs.core.Symbol("kixi.stats.test", "z-test", "kixi.stats.test/z-test", -1277454720, null), cljs$cst$9918$kixi_DOT_stats_DOT_core_SLASH_harmonic_mean = new $APP.cljs.core.Symbol("kixi.stats.core", "harmonic-mean", "kixi.stats.core/harmonic-mean", 
69008944, null), cljs$cst$9807$fxs = new $APP.cljs.core.Symbol(null, "fxs", "fxs", -749353879, null), cljs$cst$9924$kixi_DOT_stats_DOT_core_SLASH_standard_error_s = new $APP.cljs.core.Symbol("kixi.stats.core", "standard-error-s", "kixi.stats.core/standard-error-s", -1151779507, null), cljs$cst$9928$kixi_DOT_stats_DOT_distribution = new $APP.cljs.core.Symbol(null, "kixi.stats.distribution", "kixi.stats.distribution", 1307452384, null), cljs$cst$9905$kixi_DOT_stats_DOT_core_SLASH_adjusted_r_squared = 
new $APP.cljs.core.Symbol("kixi.stats.core", "adjusted-r-squared", "kixi.stats.core/adjusted-r-squared", -539164770, null), cljs$cst$9931$binomial = new $APP.cljs.core.Symbol(null, "binomial", "binomial", 524804990, null), cljs$cst$9895$kixi_DOT_stats_DOT_core_SLASH_z_test = new $APP.cljs.core.Symbol("kixi.stats.core", "z-test", "kixi.stats.core/z-test", -1276958315, null), cljs$cst$9992$significant_QMARK_ = new $APP.cljs.core.Symbol(null, "significant?", "significant?", -326573603, null), cljs$cst$9890$kixi_DOT_stats_DOT_core_SLASH_regression_prediction_confidence_interval = 
new $APP.cljs.core.Symbol("kixi.stats.core", "regression-prediction-confidence-interval", "kixi.stats.core/regression-prediction-confidence-interval", 515583558, null), cljs$cst$9779$p__114788 = new $APP.cljs.core.Symbol(null, "p__114788", "p__114788", 573880976, null), cljs$cst$9986$kixi_DOT_stats_DOT_distribution_SLASH_maximum = new $APP.cljs.core.Symbol("kixi.stats.distribution", "maximum", "kixi.stats.distribution/maximum", -1754296125, null), cljs$cst$9783$ss_x = new $APP.cljs.core.Symbol(null, 
"ss-x", "ss-x", -166382883, null), cljs$cst$9983$kixi_DOT_stats_DOT_distribution_SLASH_chi_squared = new $APP.cljs.core.Symbol("kixi.stats.distribution", "chi-squared", "kixi.stats.distribution/chi-squared", -1042736410, null), cljs$cst$9810$meta115289 = new $APP.cljs.core.Symbol(null, "meta115289", "meta115289", -298020133, null), cljs$cst$9765$rate = new $APP.cljs.core.Keyword(null, "rate", "rate", -1428659698), cljs$cst$9894$kixi_DOT_stats_DOT_core_SLASH_mse = new $APP.cljs.core.Symbol("kixi.stats.core", 
"mse", "kixi.stats.core/mse", -1393755419, null), cljs$cst$9774$x_bar = new $APP.cljs.core.Keyword(null, "x-bar", "x-bar", 1942845486), cljs$cst$9823$rmse = new $APP.cljs.core.Symbol(null, "rmse", "rmse", -810892480, null), cljs$cst$9753$seed = new $APP.cljs.core.Keyword(null, "seed", "seed", 68613327), cljs$cst$9835$cramers_v = new $APP.cljs.core.Symbol(null, "cramers-v", "cramers-v", 222629238, null), cljs$cst$9797$p__114828 = new $APP.cljs.core.Symbol(null, "p__114828", "p__114828", 557186983, 
null), cljs$cst$9794$p__114808 = new $APP.cljs.core.Symbol(null, "p__114808", "p__114808", 417699390, null), cljs$cst$9877$kixi_DOT_stats_DOT_core_SLASH_correlation = new $APP.cljs.core.Symbol("kixi.stats.core", "correlation", "kixi.stats.core/correlation", 818257445, null), cljs$cst$9960$kixi_DOT_stats_DOT_distribution_SLASH_cdf = new $APP.cljs.core.Symbol("kixi.stats.distribution", "cdf", "kixi.stats.distribution/cdf", 1112552994, null), cljs$cst$9957$iqr = new $APP.cljs.core.Symbol(null, "iqr", 
"iqr", -895619121, null), cljs$cst$9756$mu = new $APP.cljs.core.Symbol(null, "mu", "mu", -1507966528, null), cljs$cst$9900$kixi_DOT_stats_DOT_core_SLASH_standard_error = new $APP.cljs.core.Symbol("kixi.stats.core", "standard-error", "kixi.stats.core/standard-error", 1392277406, null), cljs$cst$9809$margins = new $APP.cljs.core.Symbol(null, "margins", "margins", 804589980, null), cljs$cst$9760$ps = new $APP.cljs.core.Symbol(null, "ps", "ps", 1932889573, null), cljs$cst$9954$normal = new $APP.cljs.core.Symbol(null, 
"normal", "normal", 121407669, null), cljs$cst$9757$sd = new $APP.cljs.core.Symbol(null, "sd", "sd", -66592929, null), cljs$cst$9795$se = new $APP.cljs.core.Symbol(null, "se", "se", 220887806, null), cljs$cst$9971$kixi_DOT_stats_DOT_distribution_SLASH_minimum = new $APP.cljs.core.Symbol("kixi.stats.distribution", "minimum", "kixi.stats.distribution/minimum", 482625634, null), cljs$cst$10018$kixi_DOT_stats_DOT_test_SLASH_p_value = new $APP.cljs.core.Symbol("kixi.stats.test", "p-value", "kixi.stats.test/p-value", 
-1005314862, null), cljs$cst$9782$y_bar = new $APP.cljs.core.Symbol(null, "y-bar", "y-bar", 150662700, null), cljs$cst$9977$kixi_DOT_stats_DOT_distribution_SLASH_gamma = new $APP.cljs.core.Symbol("kixi.stats.distribution", "gamma", "kixi.stats.distribution/gamma", -379504340, null), cljs$cst$9897$kixi_DOT_stats_DOT_core_SLASH_min = new $APP.cljs.core.Symbol("kixi.stats.core", "min", "kixi.stats.core/min", 1827985530, null), cljs$cst$9969$kixi_DOT_stats_DOT_distribution_SLASH_pareto = new $APP.cljs.core.Symbol("kixi.stats.distribution", 
"pareto", "kixi.stats.distribution/pareto", 1586703305, null), cljs$cst$9878$kixi_DOT_stats_DOT_core_SLASH_sum_squares = new $APP.cljs.core.Symbol("kixi.stats.core", "sum-squares", "kixi.stats.core/sum-squares", 278418318, null), cljs$cst$9923$kixi_DOT_stats_DOT_core_SLASH_regression_standard_error = new $APP.cljs.core.Symbol("kixi.stats.core", "regression-standard-error", "kixi.stats.core/regression-standard-error", 897157432, null), cljs$cst$9784$ss_xy = new $APP.cljs.core.Symbol(null, "ss-xy", 
"ss-xy", 2124139759, null), cljs$cst$9949$weibull = new $APP.cljs.core.Symbol(null, "weibull", "weibull", -1735969593, null), cljs$cst$9866$covariance = new $APP.cljs.core.Symbol(null, "covariance", "covariance", 1076440090, null), cljs$cst$9907$kixi_DOT_stats_DOT_core_SLASH_max = new $APP.cljs.core.Symbol("kixi.stats.core", "max", "kixi.stats.core/max", 1955241316, null), cljs$cst$9790$df = new $APP.cljs.core.Symbol(null, "df", "df", 1701750387, null), cljs$cst$9901$kixi_DOT_stats_DOT_core_SLASH_kurtosis_p = 
new $APP.cljs.core.Symbol("kixi.stats.core", "kurtosis-p", "kixi.stats.core/kurtosis-p", 653113271, null), cljs$cst$9913$kixi_DOT_stats_DOT_core_SLASH_kurtosis_s = new $APP.cljs.core.Symbol("kixi.stats.core", "kurtosis-s", "kixi.stats.core/kurtosis-s", 1541567068, null), cljs$cst$9812$fy = new $APP.cljs.core.Symbol(null, "fy", "fy", -2103646785, null), cljs$cst$9811$fx = new $APP.cljs.core.Symbol(null, "fx", "fx", 402701955, null), cljs$cst$9943$probs = new $APP.cljs.core.Symbol(null, "probs", "probs", 
438637303, null), cljs$cst$9978$kixi_DOT_stats_DOT_distribution_SLASH_beta = new $APP.cljs.core.Symbol("kixi.stats.distribution", "beta", "kixi.stats.distribution/beta", 1212604869, null), cljs$cst$9822$kixi_DOT_stats_DOT_protocols_SLASH_PDependent = new $APP.cljs.core.Symbol("kixi.stats.protocols", "PDependent", "kixi.stats.protocols/PDependent", -484114264, null), cljs$cst$9869$regression_standard_error = new $APP.cljs.core.Symbol(null, "regression-standard-error", "regression-standard-error", 
634798917, null), cljs$cst$9884$kixi_DOT_stats_DOT_core_SLASH___GT_t_kixi$stats$core115288 = new $APP.cljs.core.Symbol("kixi.stats.core", "-\x3et_kixi$stats$core115288", "kixi.stats.core/-\x3et_kixi$stats$core115288", -938528686, null), cljs$cst$9959$kixi_DOT_stats_DOT_protocols_DOT_PRandomVariable = new $APP.cljs.core.Symbol(null, "kixi.stats.protocols.PRandomVariable", "kixi.stats.protocols.PRandomVariable", -1374268633, null), cljs$cst$9825$correlation = new $APP.cljs.core.Symbol(null, "correlation", 
"correlation", 664758320, null), cljs$cst$9993$mean_x = new $APP.cljs.core.Symbol(null, "mean-x", "mean-x", 121128833, null), cljs$cst$9996$mean_y = new $APP.cljs.core.Symbol(null, "mean-y", "mean-y", 1504961792, null), cljs$cst$10009$mean_b = new $APP.cljs.core.Symbol(null, "mean-b", "mean-b", -1130413279, null), cljs$cst$10006$mean_a = new $APP.cljs.core.Symbol(null, "mean-a", "mean-a", 880865751, null), cljs$cst$9803$statistic = new $APP.cljs.core.Symbol(null, "statistic", "statistic", 851632393, 
null), cljs$cst$9929$cdf = new $APP.cljs.core.Symbol(null, "cdf", "cdf", 1573804848, null), cljs$cst$9781$x_bar = new $APP.cljs.core.Symbol(null, "x-bar", "x-bar", -711590283, null), cljs$cst$9851$proportion = new $APP.cljs.core.Symbol(null, "proportion", "proportion", 431247297, null), cljs$cst$9891$kixi_DOT_stats_DOT_core_SLASH_share = new $APP.cljs.core.Symbol("kixi.stats.core", "share", "kixi.stats.core/share", -838065169, null), cljs$cst$9979$kixi_DOT_stats_DOT_distribution_SLASH_exponential = 
new $APP.cljs.core.Symbol("kixi.stats.distribution", "exponential", "kixi.stats.distribution/exponential", 255899445, null), cljs$cst$10005$alternate = new $APP.cljs.core.Symbol(null, "alternate", "alternate", 709492883, null), cljs$cst$9806$vec__115285 = new $APP.cljs.core.Symbol(null, "vec__115285", "vec__115285", 1186980929, null), cljs$cst$9802$h1 = new $APP.cljs.core.Keyword(null, "h1", "h1", -1896887462), cljs$cst$9848$kurtosis_p = new $APP.cljs.core.Symbol(null, "kurtosis-p", "kurtosis-p", 
1497660840, null), cljs$cst$9859$kurtosis_s = new $APP.cljs.core.Symbol(null, "kurtosis-s", "kurtosis-s", 705443923, null), cljs$cst$9953$uniform = new $APP.cljs.core.Symbol(null, "uniform", "uniform", 2137034875, null), cljs$cst$9777$ss_x = new $APP.cljs.core.Keyword(null, "ss-x", "ss-x", -1806914410), cljs$cst$9778$ss_y = new $APP.cljs.core.Keyword(null, "ss-y", "ss-y", -376418976), cljs$cst$9981$kixi_DOT_stats_DOT_distribution_SLASH_beta_binomial = new $APP.cljs.core.Symbol("kixi.stats.distribution", 
"beta-binomial", "kixi.stats.distribution/beta-binomial", -1822182644, null), cljs$cst$9769$d2 = new $APP.cljs.core.Keyword(null, "d2", "d2", 2138401859), cljs$cst$9768$d1 = new $APP.cljs.core.Keyword(null, "d1", "d1", -1264719807), cljs$cst$9761$q1 = new $APP.cljs.core.Keyword(null, "q1", "q1", 163909474), cljs$cst$9763$q3 = new $APP.cljs.core.Keyword(null, "q3", "q3", 1466749348), cljs$cst$9766$mu = new $APP.cljs.core.Keyword(null, "mu", "mu", 1146469241), cljs$cst$9958$draw = new $APP.cljs.core.Symbol(null, 
"draw", "draw", -1296104095, null), cljs$cst$9882$kixi_DOT_stats_DOT_core_SLASH_count = new $APP.cljs.core.Symbol("kixi.stats.core", "count", "kixi.stats.core/count", -804333903, null), cljs$cst$9963$kixi_DOT_stats_DOT_distribution_SLASH_dirichlet = new $APP.cljs.core.Symbol("kixi.stats.distribution", "dirichlet", "kixi.stats.distribution/dirichlet", -286759923, null), cljs$cst$9883$kixi_DOT_stats_DOT_core_SLASH___GT_t_kixi$stats$core115471 = new $APP.cljs.core.Symbol("kixi.stats.core", "-\x3et_kixi$stats$core115471", 
"kixi.stats.core/-\x3et_kixi$stats$core115471", -730644514, null), cljs$cst$9874$kixi_DOT_stats_DOT_core_SLASH___GT_t_kixi$stats$core115495 = new $APP.cljs.core.Symbol("kixi.stats.core", "-\x3et_kixi$stats$core115495", "kixi.stats.core/-\x3et_kixi$stats$core115495", -1740217110, null), cljs$cst$9909$kixi_DOT_stats_DOT_core_SLASH___GT_t_kixi$stats$core115492 = new $APP.cljs.core.Symbol("kixi.stats.core", "-\x3et_kixi$stats$core115492", "kixi.stats.core/-\x3et_kixi$stats$core115492", 369536131, null), 
cljs$cst$9879$kixi_DOT_stats_DOT_core_SLASH___GT_t_kixi$stats$core115477 = new $APP.cljs.core.Symbol("kixi.stats.core", "-\x3et_kixi$stats$core115477", "kixi.stats.core/-\x3et_kixi$stats$core115477", -1231267424, null), cljs$cst$9903$kixi_DOT_stats_DOT_core_SLASH___GT_t_kixi$stats$core115486 = new $APP.cljs.core.Symbol("kixi.stats.core", "-\x3et_kixi$stats$core115486", "kixi.stats.core/-\x3et_kixi$stats$core115486", -1970762949, null), cljs$cst$9898$kixi_DOT_stats_DOT_core_SLASH___GT_t_kixi$stats$core115480 = 
new $APP.cljs.core.Symbol("kixi.stats.core", "-\x3et_kixi$stats$core115480", "kixi.stats.core/-\x3et_kixi$stats$core115480", -2144610447, null), cljs$cst$9767$sd = new $APP.cljs.core.Keyword(null, "sd", "sd", -1707124456), cljs$cst$10012$kixi_DOT_stats_DOT_test_SLASH_significant_QMARK_ = new $APP.cljs.core.Symbol("kixi.stats.test", "significant?", "kixi.stats.test/significant?", 461013213, null), cljs$cst$9961$kixi_DOT_stats_DOT_distribution_SLASH_summary = new $APP.cljs.core.Symbol("kixi.stats.distribution", 
"summary", "kixi.stats.distribution/summary", 1827426981, null), cljs$cst$10017$kixi_DOT_stats_DOT_test_SLASH___GT_TestResult = new $APP.cljs.core.Symbol("kixi.stats.test", "-\x3eTestResult", "kixi.stats.test/-\x3eTestResult", -1438159710, null), cljs$cst$9967$kixi_DOT_stats_DOT_distribution_SLASH_critical_value = new $APP.cljs.core.Symbol("kixi.stats.distribution", "critical-value", "kixi.stats.distribution/critical-value", 886482595, null), cljs$cst$9788$err = new $APP.cljs.core.Symbol(null, "err", 
"err", -448925678, null), cljs$cst$9852$adjusted_r_squared = new $APP.cljs.core.Symbol(null, "adjusted-r-squared", "adjusted-r-squared", -827962963, null), cljs$cst$9942$multinomial = new $APP.cljs.core.Symbol(null, "multinomial", "multinomial", 1383384511, null), cljs$cst$9938$kixi_DOT_stats_DOT_protocols_DOT_PDiscreteRandomVariable = new $APP.cljs.core.Symbol(null, "kixi.stats.protocols.PDiscreteRandomVariable", "kixi.stats.protocols.PDiscreteRandomVariable", -1118475578, null), cljs$cst$9999$kixi_DOT_stats_DOT_protocols_DOT_PContingencyTable = 
new $APP.cljs.core.Symbol(null, "kixi.stats.protocols.PContingencyTable", "kixi.stats.protocols.PContingencyTable", 1340305005, null), cljs$cst$9824$fy_hat = new $APP.cljs.core.Symbol(null, "fy-hat", "fy-hat", 892616172, null), cljs$cst$9991$kixi_DOT_stats_DOT_test = new $APP.cljs.core.Symbol(null, "kixi.stats.test", "kixi.stats.test", 1737871695, null), cljs$cst$9925$kixi_DOT_stats_DOT_core_SLASH_geometric_mean = new $APP.cljs.core.Symbol("kixi.stats.core", "geometric-mean", "kixi.stats.core/geometric-mean", 
-234280537, null), cljs$cst$10019$kixi_DOT_stats_DOT_test_SLASH_simple_t_test = new $APP.cljs.core.Symbol("kixi.stats.test", "simple-t-test", "kixi.stats.test/simple-t-test", 1722180002, null), cljs$cst$9862$skewness = new $APP.cljs.core.Symbol(null, "skewness", "skewness", -806623129, null), cljs$cst$9838$regression_prediction_confidence_interval = new $APP.cljs.core.Symbol(null, "regression-prediction-confidence-interval", "regression-prediction-confidence-interval", -272527275, null), cljs$cst$9941$minimum = 
new $APP.cljs.core.Symbol(null, "minimum", "minimum", 19525468, null), cljs$cst$9916$kixi_DOT_stats_DOT_core_SLASH_skewness = new $APP.cljs.core.Symbol("kixi.stats.core", "skewness", "kixi.stats.core/skewness", 1060484698, null), cljs$cst$9922$kixi_DOT_stats_DOT_core_SLASH_simple_t_test = new $APP.cljs.core.Symbol("kixi.stats.core", "simple-t-test", "kixi.stats.core/simple-t-test", 1722684599, null), cljs$cst$9762$median = new $APP.cljs.core.Keyword(null, "median", "median", 569566131), cljs$cst$9940$quantile = 
new $APP.cljs.core.Symbol(null, "quantile", "quantile", 2092700384, null), cljs$cst$10020$kixi_DOT_stats_DOT_test_SLASH_test_result = new $APP.cljs.core.Symbol("kixi.stats.test", "test-result", "kixi.stats.test/test-result", -971523436, null), cljs$cst$9758$dof = new $APP.cljs.core.Symbol(null, "dof", "dof", 1009750250, null), cljs$cst$9849$chi_squared_test = new $APP.cljs.core.Symbol(null, "chi-squared-test", "chi-squared-test", -1115497904, null), cljs$cst$9962$kixi_DOT_stats_DOT_distribution_SLASH_binomial = 
new $APP.cljs.core.Symbol("kixi.stats.distribution", "binomial", "kixi.stats.distribution/binomial", -338592180, null), cljs$cst$9840$covariance_p = new $APP.cljs.core.Symbol(null, "covariance-p", "covariance-p", 948703857, null), cljs$cst$9844$covariance_s = new $APP.cljs.core.Symbol(null, "covariance-s", "covariance-s", 909709147, null), cljs$cst$9871$geometric_mean = new $APP.cljs.core.Symbol(null, "geometric-mean", "geometric-mean", -514419822, null), cljs$cst$9886$kixi_DOT_stats_DOT_core_SLASH_mean = 
new $APP.cljs.core.Symbol("kixi.stats.core", "mean", "kixi.stats.core/mean", 543876513, null), cljs$cst$9980$kixi_DOT_stats_DOT_distribution_SLASH_weibull = new $APP.cljs.core.Symbol("kixi.stats.distribution", "weibull", "kixi.stats.distribution/weibull", -1927622187, null), cljs$cst$9885$kixi_DOT_stats_DOT_core_SLASH_cross_tabulate = new $APP.cljs.core.Symbol("kixi.stats.core", "cross-tabulate", "kixi.stats.core/cross-tabulate", -1644661599, null), cljs$cst$9868$simple_t_test = new $APP.cljs.core.Symbol(null, 
"simple-t-test", "simple-t-test", -1756085598, null), cljs$cst$9833$cross_tabulate = new $APP.cljs.core.Symbol(null, "cross-tabulate", "cross-tabulate", -1923887460, null), cljs$cst$9860$r_squared = new $APP.cljs.core.Symbol(null, "r-squared", "r-squared", -1484057842, null), cljs$cst$9937$sample_summary = new $APP.cljs.core.Symbol(null, "sample-summary", "sample-summary", 814029135, null);
var kixi = {stats:{}};
kixi.stats.math = {};
kixi.stats.math.PI = Math.PI;
kixi.stats.math.abs = function($x$$) {
  return $x$$ < 0 ? -$x$$ : $x$$;
};
kixi.stats.math.sqrt = function($x$$) {
  return Math.sqrt($x$$);
};
kixi.stats.math.sq = function($x$$) {
  return $x$$ * $x$$;
};
kixi.stats.math.pow = function($x$$, $n$$) {
  return Math.pow($x$$, $n$$);
};
kixi.stats.math.root = function($x$$, $n$$) {
  return kixi.stats.math.pow($x$$, 1 / $n$$);
};
kixi.stats.math.log = function($x$$) {
  return Math.log($x$$);
};
kixi.stats.math.log1p = function($x$$) {
  return Math.log($x$$ + 1);
};
kixi.stats.math.exp = function($x$$) {
  return Math.exp($x$$);
};
kixi.stats.math.cos = function($x$$) {
  return Math.cos($x$$);
};
kixi.stats.math.clamp = function($x$jscomp$2240_x__5113__auto__$$, $lower$$, $upper$$) {
  $x$jscomp$2240_x__5113__auto__$$ = $x$jscomp$2240_x__5113__auto__$$ > $lower$$ ? $x$jscomp$2240_x__5113__auto__$$ : $lower$$;
  return $x$jscomp$2240_x__5113__auto__$$ < $upper$$ ? $x$jscomp$2240_x__5113__auto__$$ : $upper$$;
};
kixi.stats.math.sin = function($x$$) {
  return Math.sin($x$$);
};
kixi.stats.math.tan = function($x$$) {
  return Math.tan($x$$);
};
kixi.stats.math.atan = function($x$$) {
  return Math.atan($x$$);
};
kixi.stats.math.ceil = function($x$$) {
  return Math.ceil($x$$);
};
kixi.stats.math.floor = function($x$$) {
  return Math.floor($x$$);
};
kixi.stats.math.equal = function($x$$, $y$$, $e$$) {
  return kixi.stats.math.abs($y$$ - $x$$) <= $e$$;
};
kixi.stats.math.infinity = Infinity;
kixi.stats.math.negative_infinity = -Infinity;
kixi.stats.math.infinite_QMARK_ = function($x$$) {
  return $APP.cljs.core.not(isFinite($x$$));
};
kixi.stats.math.SQRT_2_PI = 2.5066282746310007;
kixi.stats.math.HALF_LOG_2_PI = 0.5 * kixi.stats.math.log(2.0 * kixi.stats.math.PI);
kixi.stats.math.LANCZOS = new $APP.cljs.core.PersistentVector(null, 14, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [14, 3.6899182659531625E-6], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [13, -2.6190838401581408E-5], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [12, 8.441822398385275E-5], null), 
new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [11, -1.643181065367639E-4], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [10, 2.1743961811521265E-4], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [9, -2.1026444172410488E-4], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [8, 1.580887032249125E-4], 
null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [7, -9.837447530487956E-5], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [6, 4.652362892704858E-5], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [5, 3.399464998481189E-5], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [4, -0.4919138160976202], 
null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [3, 14.136097974741746], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [2, -59.59796035547549], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [1, 57.15623566586292], null)], null);
kixi.stats.math.A = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [6.116095104481416E-9, 6.247308301164655E-9], null);
kixi.stats.math.B = new $APP.cljs.core.PersistentVector(null, 8, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [1.9575583661463974E-10, -6.077618957228252E-8, 9.926418406727737E-7, -6.4304548177935305E-6, -8.514194324403149E-6, 4.939449793824468E-4, 0.026620534842894922, 0.203610414066807], null);
kixi.stats.math.P = new $APP.cljs.core.PersistentVector(null, 7, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [4.343529937408594E-15, -1.2494415722763663E-13, 1.5728330277104463E-12, 4.686843322948848E-11, 6.820161668496171E-10, 6.8716741130671986E-9, 6.116095104481416E-9], null);
kixi.stats.math.Q = new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [2.6923694661863613E-4, 0.004956830093825887, 0.054642130860422966, 0.3056961078365221], null);
kixi.stats.math.C = new $APP.cljs.core.PersistentVector(null, 13, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [-2.056338416977607E-7, 1.133027231981696E-6, -1.2504934821426706E-6, -2.013485478078824E-5, 1.280502823881162E-4, -2.1524167411495098E-4, -0.0011651675918590652, 0.0072189432466631, -0.009621971527876973, -0.04219773455554433, 0.16653861138229148, -0.04200263503409524, -0.6558780715202539], null);
kixi.stats.math.CA = -0.42278433509846713;
kixi.stats.math.CB = 0.5772156649015329;
kixi.stats.math.LANCZOS_G = 4.7421875;
kixi.stats.math.lanczos_approximation = function($x$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($sum$$, $l$$) {
    var $i$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($l$$, 0, null);
    $l$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($l$$, 1, null);
    return $sum$$ + $l$$ / ($x$$ + $i$$);
  }, 0.0, kixi.stats.math.LANCZOS) + 0.9999999999999971;
};
kixi.stats.math.inv_gamma_1pm1 = function($x$$) {
  var $t$$ = $x$$ <= 0.5 ? $x$$ : $x$$ - 0.5 - 0.5;
  if ($t$$ < 0) {
    var $a1$jscomp$505_q$$ = kixi.stats.math.A, $a0$jscomp$756_c$jscomp$762_p$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($a1$jscomp$505_q$$, 0, null);
    $a1$jscomp$505_q$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($a1$jscomp$505_q$$, 1, null);
    var $b$$ = $t$$ * $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(function($b$$, $b_SINGLEQUOTE_$$) {
      return $t$$ * $b$$ + $b_SINGLEQUOTE_$$;
    }, kixi.stats.math.B) + 1;
    $a0$jscomp$756_c$jscomp$762_p$$ = kixi.stats.math.CA + $t$$ * $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($c$$, $c_SINGLEQUOTE_$$) {
      return $t$$ * $c$$ + $c_SINGLEQUOTE_$$;
    }, ($a0$jscomp$756_c$jscomp$762_p$$ + $a1$jscomp$505_q$$ * $t$$) / $b$$, kixi.stats.math.C);
    return $x$$ > 0.5 ? $a0$jscomp$756_c$jscomp$762_p$$ / $x$$ * $t$$ : $x$$ * ($a0$jscomp$756_c$jscomp$762_p$$ + 1);
  }
  $a0$jscomp$756_c$jscomp$762_p$$ = $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(function($p$$, $p_SINGLEQUOTE_$$) {
    return $t$$ * $p$$ + $p_SINGLEQUOTE_$$;
  }, kixi.stats.math.P);
  $a1$jscomp$505_q$$ = $t$$ * $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(function($q$$, $q_SINGLEQUOTE_$$) {
    return $t$$ * $q$$ + $q_SINGLEQUOTE_$$;
  }, kixi.stats.math.Q) + 1;
  $a0$jscomp$756_c$jscomp$762_p$$ = kixi.stats.math.CB + $t$$ * $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($c$$, $c_SINGLEQUOTE_$$) {
    return $t$$ * $c$$ + $c_SINGLEQUOTE_$$;
  }, $a0$jscomp$756_c$jscomp$762_p$$ / $a1$jscomp$505_q$$, kixi.stats.math.C);
  return $x$$ > 0.5 ? $t$$ / $x$$ * ($a0$jscomp$756_c$jscomp$762_p$$ - 1) : $x$$ * $a0$jscomp$756_c$jscomp$762_p$$;
};
kixi.stats.math.log_gamma_1p = function($x$$) {
  return -kixi.stats.math.log1p(kixi.stats.math.inv_gamma_1pm1($x$$));
};
kixi.stats.math.log_gamma = function($JSCompiler_inline_result$jscomp$3552_x$$) {
  if ($JSCompiler_inline_result$jscomp$3552_x$$ < 0.5) {
    return kixi.stats.math.log_gamma_1p($JSCompiler_inline_result$jscomp$3552_x$$) - kixi.stats.math.log($JSCompiler_inline_result$jscomp$3552_x$$);
  }
  if ($JSCompiler_inline_result$jscomp$3552_x$$ <= 2.5) {
    return kixi.stats.math.log_gamma_1p($JSCompiler_inline_result$jscomp$3552_x$$ - 1);
  }
  if ($JSCompiler_inline_result$jscomp$3552_x$$ <= 8.0) {
    var $n$$ = kixi.stats.math.floor($JSCompiler_inline_result$jscomp$3552_x$$ - 1.5) | 0, $JSCompiler_temp_const$jscomp$3551_t$$ = kixi.stats.math.log_gamma_1p($JSCompiler_inline_result$jscomp$3552_x$$ - ($n$$ + 1));
    a: {
      for (var $i$$ = 1, $G__114579$jscomp$inline_9068_p$$ = 1.0;;) {
        if ($i$$ <= $n$$) {
          $G__114579$jscomp$inline_9068_p$$ *= $JSCompiler_inline_result$jscomp$3552_x$$ - $i$$, $i$$ += 1;
        } else {
          $JSCompiler_inline_result$jscomp$3552_x$$ = kixi.stats.math.log($G__114579$jscomp$inline_9068_p$$);
          break a;
        }
      }
      $JSCompiler_inline_result$jscomp$3552_x$$ = void 0;
    }
    return $JSCompiler_temp_const$jscomp$3551_t$$ + $JSCompiler_inline_result$jscomp$3552_x$$;
  }
  $JSCompiler_temp_const$jscomp$3551_t$$ = $JSCompiler_inline_result$jscomp$3552_x$$ + kixi.stats.math.LANCZOS_G + 0.5;
  return ($JSCompiler_inline_result$jscomp$3552_x$$ + 0.5) * kixi.stats.math.log($JSCompiler_temp_const$jscomp$3551_t$$) - $JSCompiler_temp_const$jscomp$3551_t$$ + kixi.stats.math.HALF_LOG_2_PI + kixi.stats.math.log(kixi.stats.math.lanczos_approximation($JSCompiler_inline_result$jscomp$3552_x$$) / $JSCompiler_inline_result$jscomp$3552_x$$);
};
kixi.stats.math.gamma = function($G__114581_G__114583_p$jscomp$548_x$$) {
  var $abs_g_abs_x_t$$ = kixi.stats.math.abs($G__114581_G__114583_p$jscomp$548_x$$);
  if ($abs_g_abs_x_t$$ <= 20) {
    if ($G__114581_G__114583_p$jscomp$548_x$$ >= 1) {
      for ($abs_g_abs_x_t$$ = $G__114581_G__114583_p$jscomp$548_x$$ - 1, $G__114581_G__114583_p$jscomp$548_x$$ = 1;;) {
        if ($abs_g_abs_x_t$$ > 1.5) {
          $G__114581_G__114583_p$jscomp$548_x$$ *= $abs_g_abs_x_t$$, --$abs_g_abs_x_t$$;
        } else {
          return $G__114581_G__114583_p$jscomp$548_x$$ / (kixi.stats.math.inv_gamma_1pm1($abs_g_abs_x_t$$) + 1);
        }
      }
    } else {
      for ($abs_g_abs_x_t$$ = $G__114581_G__114583_p$jscomp$548_x$$ + 1;;) {
        if ($abs_g_abs_x_t$$ < 0.5) {
          $G__114581_G__114583_p$jscomp$548_x$$ *= $abs_g_abs_x_t$$, $abs_g_abs_x_t$$ += 1;
        } else {
          return 1 / ($G__114581_G__114583_p$jscomp$548_x$$ * (kixi.stats.math.inv_gamma_1pm1($abs_g_abs_x_t$$ - 1) + 1));
        }
      }
    }
  } else {
    var $y$$ = $abs_g_abs_x_t$$ + kixi.stats.math.LANCZOS_G + 0.5;
    $abs_g_abs_x_t$$ = kixi.stats.math.SQRT_2_PI / $abs_g_abs_x_t$$ * kixi.stats.math.pow($y$$, $abs_g_abs_x_t$$ + 0.5) * kixi.stats.math.exp(-$y$$) * kixi.stats.math.lanczos_approximation($abs_g_abs_x_t$$);
    return $G__114581_G__114583_p$jscomp$548_x$$ > 0 ? $abs_g_abs_x_t$$ : -kixi.stats.math.PI / ($G__114581_G__114583_p$jscomp$548_x$$ * $abs_g_abs_x_t$$ * kixi.stats.math.sin(kixi.stats.math.PI * $G__114581_G__114583_p$jscomp$548_x$$));
  }
};
kixi.stats.math.lower_regularized_gamma = function($a$$, $x$$) {
  if ($x$$ >= 0 && $a$$ > 0) {
    var $max_iter$$ = kixi.stats.math.floor(kixi.stats.math.log($a$$ >= 1 ? $a$$ : 1 / $a$$) * 8.5 + 0.4 * $a$$ + 17 + 1) | 0;
    if ($x$$ < $a$$ + 1) {
      for (var $i$$ = 1, $G__114593_ap$jscomp$1_d$jscomp$565_d__$2$$ = $a$$, $G__114586_G__114592_c$jscomp$765_c__$1$jscomp$7_del$$ = 1 / $G__114593_ap$jscomp$1_d$jscomp$565_d__$2$$, $G__114587_G__114591_b$jscomp$1164_b__$1$jscomp$27_sum$$ = 1 / $G__114593_ap$jscomp$1_d$jscomp$565_d__$2$$;;) {
        if ($i$$ < $max_iter$$) {
          var $G__114585_G__114594_ap__$1_h$jscomp$365_h__$1$$ = $G__114593_ap$jscomp$1_d$jscomp$565_d__$2$$ + 1;
          $G__114586_G__114592_c$jscomp$765_c__$1$jscomp$7_del$$ = $G__114593_ap$jscomp$1_d$jscomp$565_d__$2$$ = $x$$ / $G__114585_G__114594_ap__$1_h$jscomp$365_h__$1$$ * $G__114586_G__114592_c$jscomp$765_c__$1$jscomp$7_del$$;
          $G__114587_G__114591_b$jscomp$1164_b__$1$jscomp$27_sum$$ += $G__114593_ap$jscomp$1_d$jscomp$565_d__$2$$;
          $i$$ += 1;
          $G__114593_ap$jscomp$1_d$jscomp$565_d__$2$$ = $G__114585_G__114594_ap__$1_h$jscomp$365_h__$1$$;
        } else {
          return $G__114587_G__114591_b$jscomp$1164_b__$1$jscomp$27_sum$$ * kixi.stats.math.exp($a$$ * kixi.stats.math.log($x$$) - $x$$ - kixi.stats.math.log_gamma($a$$));
        }
      }
    } else {
      for ($i$$ = 1, $G__114587_G__114591_b$jscomp$1164_b__$1$jscomp$27_sum$$ = $x$$ + 1 - $a$$, $G__114586_G__114592_c$jscomp$765_c__$1$jscomp$7_del$$ = 1 / 1.0E-30, $G__114593_ap$jscomp$1_d$jscomp$565_d__$2$$ = 1 / $G__114587_G__114591_b$jscomp$1164_b__$1$jscomp$27_sum$$, $G__114585_G__114594_ap__$1_h$jscomp$365_h__$1$$ = 1 / $G__114587_G__114591_b$jscomp$1164_b__$1$jscomp$27_sum$$;;) {
        var $an$$ = -$i$$ * ($i$$ - $a$$);
        $G__114587_G__114591_b$jscomp$1164_b__$1$jscomp$27_sum$$ += 2;
        $G__114586_G__114592_c$jscomp$765_c__$1$jscomp$7_del$$ = $G__114587_G__114591_b$jscomp$1164_b__$1$jscomp$27_sum$$ + $an$$ / $G__114586_G__114592_c$jscomp$765_c__$1$jscomp$7_del$$;
        $G__114593_ap$jscomp$1_d$jscomp$565_d__$2$$ = 1 / ($an$$ * $G__114593_ap$jscomp$1_d$jscomp$565_d__$2$$ + $G__114587_G__114591_b$jscomp$1164_b__$1$jscomp$27_sum$$);
        $G__114585_G__114594_ap__$1_h$jscomp$365_h__$1$$ = $G__114585_G__114594_ap__$1_h$jscomp$365_h__$1$$ * $G__114593_ap$jscomp$1_d$jscomp$565_d__$2$$ * $G__114586_G__114592_c$jscomp$765_c__$1$jscomp$7_del$$;
        if ($i$$ < $max_iter$$) {
          $i$$ += 1;
        } else {
          return 1 - $G__114585_G__114594_ap__$1_h$jscomp$365_h__$1$$ * kixi.stats.math.exp($a$$ * kixi.stats.math.log($x$$) - $x$$ - kixi.stats.math.log_gamma($a$$));
        }
      }
    }
  } else {
    return null;
  }
};
kixi.stats.math.gamma_pinv = function($p$$, $a$$) {
  if ($p$$ >= 1.0) {
    var $gln_y__5111__auto__$$ = $a$$ + 100.0 * kixi.stats.math.sqrt($a$$);
    return 100.0 > $gln_y__5111__auto__$$ ? 100.0 : $gln_y__5111__auto__$$;
  }
  if ($p$$ <= 0.0) {
    return 0.0;
  }
  $gln_y__5111__auto__$$ = kixi.stats.math.log_gamma($a$$);
  for (var $a1$$ = $a$$ - 1, $lna1$$ = kixi.stats.math.log($a1$$), $afac$$ = kixi.stats.math.exp($a1$$ * ($lna1$$ - 1) - $gln_y__5111__auto__$$), $j$$ = 0, $x__$1$$ = $a$$ > 1 ? function() {
    var $t$jscomp$297_x$jscomp$2255_y__5111__auto__$$ = kixi.stats.math.sqrt(-2 * kixi.stats.math.log($p$$ < 0.5 ? $p$$ : 1 - $p$$));
    $t$jscomp$297_x$jscomp$2255_y__5111__auto__$$ = (2.30753 + 0.27061 * $t$jscomp$297_x$jscomp$2255_y__5111__auto__$$) / (1 + $t$jscomp$297_x$jscomp$2255_y__5111__auto__$$ * (0.99229 + 0.04481 * $t$jscomp$297_x$jscomp$2255_y__5111__auto__$$)) - $t$jscomp$297_x$jscomp$2255_y__5111__auto__$$;
    $t$jscomp$297_x$jscomp$2255_y__5111__auto__$$ = $a$$ * kixi.stats.math.pow(1 - 1 / (9 * $a$$) - ($p$$ < 0.5 ? -$t$jscomp$297_x$jscomp$2255_y__5111__auto__$$ : $t$jscomp$297_x$jscomp$2255_y__5111__auto__$$) / (3 * kixi.stats.math.sqrt($a$$)), 3);
    return 0.001 > $t$jscomp$297_x$jscomp$2255_y__5111__auto__$$ ? 0.001 : $t$jscomp$297_x$jscomp$2255_y__5111__auto__$$;
  }() : function() {
    var $t$$ = 1 - $a$$ * (0.253 + 0.12 * $a$$);
    return $p$$ < $t$$ ? kixi.stats.math.pow($p$$ / $t$$, 1 / $a$$) : 1 - kixi.stats.math.log(1 - ($p$$ - $t$$) / (1 - $t$$));
  }();;) {
    if ($x__$1$$ <= 0.0) {
      return 0.0;
    }
    var $G__114596_err$jscomp$55_t__$1$$ = kixi.stats.math.lower_regularized_gamma($a$$, $x__$1$$) - $p$$, $t$$ = $a$$ > 1 ? $afac$$ * kixi.stats.math.exp($a1$$ * (kixi.stats.math.log($x__$1$$) - $lna1$$) - ($x__$1$$ - $a1$$)) : kixi.stats.math.exp($a1$$ * kixi.stats.math.log($x__$1$$) - $gln_y__5111__auto__$$ - $x__$1$$), $u$$ = $G__114596_err$jscomp$55_t__$1$$ / $t$$;
    $G__114596_err$jscomp$55_t__$1$$ = $u$$ / (1 - 0.5 * function() {
      var $y__5114__auto__$$ = $u$$ * (($a$$ - 1) / $x__$1$$ - 1);
      return 1 < $y__5114__auto__$$ ? 1 : $y__5114__auto__$$;
    }());
    $t$$ = $x__$1$$ - $G__114596_err$jscomp$55_t__$1$$;
    $t$$ = $t$$ <= 0 ? 0.5 * ($t$$ + $G__114596_err$jscomp$55_t__$1$$) : $t$$;
    if (kixi.stats.math.abs($G__114596_err$jscomp$55_t__$1$$) < 1.0E-8 * $t$$ || $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($j$$, 11)) {
      return $t$$;
    }
    $G__114596_err$jscomp$55_t__$1$$ = $t$$;
    $j$$ += 1;
    $x__$1$$ = $G__114596_err$jscomp$55_t__$1$$;
  }
};
kixi.stats.math.log_beta = function($a$$, $b$$) {
  return kixi.stats.math.log_gamma($a$$) + kixi.stats.math.log_gamma($b$$) - kixi.stats.math.log_gamma($a$$ + $b$$);
};
kixi.stats.math.beta = function($a$$, $b$$) {
  return $a$$ > 0 && $b$$ > 0 ? $a$$ + $b$$ > 170 ? kixi.stats.math.exp(kixi.stats.math.log_beta($a$$, $b$$)) : kixi.stats.math.gamma($a$$) * kixi.stats.math.gamma($b$$) / kixi.stats.math.gamma($a$$ + $b$$) : null;
};
kixi.stats.math.betacf = function($x$$, $a$$, $b$$) {
  for (var $check$$ = function($x__$1$$) {
    return kixi.stats.math.abs($x__$1$$) < 1.0E-30 ? 1.0E-30 : $x__$1$$;
  }, $qab$$ = $a$$ + $b$$, $qap$$ = $a$$ + 1, $qam$$ = $a$$ - 1, $G__114599_aa__$1_c__$2$jscomp$2_d$jscomp$566_m2$$ = 1 / $check$$(1 - $x$$ * $qab$$ / $qap$$), $m$$ = 1, $d__$3_h$$ = $G__114599_aa__$1_c__$2$jscomp$2_d$jscomp$566_m2$$, $G__114598_c$jscomp$766_h__$1$$ = 1, $G__114600_d__$1$jscomp$19_d__$2$jscomp$2_del$$ = $G__114599_aa__$1_c__$2$jscomp$2_d$jscomp$566_m2$$;;) {
    $G__114599_aa__$1_c__$2$jscomp$2_d$jscomp$566_m2$$ = 2 * $m$$;
    var $aa$jscomp$2_c__$1$$ = $m$$ * ($b$$ - $m$$) * ($x$$ / (($qam$$ + $G__114599_aa__$1_c__$2$jscomp$2_d$jscomp$566_m2$$) * ($a$$ + $G__114599_aa__$1_c__$2$jscomp$2_d$jscomp$566_m2$$)));
    $G__114600_d__$1$jscomp$19_d__$2$jscomp$2_del$$ = 1 / $check$$(1 + $aa$jscomp$2_c__$1$$ * $G__114600_d__$1$jscomp$19_d__$2$jscomp$2_del$$);
    $aa$jscomp$2_c__$1$$ = $check$$(1 + $aa$jscomp$2_c__$1$$ / $G__114598_c$jscomp$766_h__$1$$);
    $G__114598_c$jscomp$766_h__$1$$ = $d__$3_h$$ * $G__114600_d__$1$jscomp$19_d__$2$jscomp$2_del$$ * $aa$jscomp$2_c__$1$$;
    $G__114599_aa__$1_c__$2$jscomp$2_d$jscomp$566_m2$$ = -($a$$ + $m$$) * ($qab$$ + $m$$) * ($x$$ / (($a$$ + $G__114599_aa__$1_c__$2$jscomp$2_d$jscomp$566_m2$$) * ($qap$$ + $G__114599_aa__$1_c__$2$jscomp$2_d$jscomp$566_m2$$)));
    $d__$3_h$$ = 1 / $check$$(1 + $G__114599_aa__$1_c__$2$jscomp$2_d$jscomp$566_m2$$ * $G__114600_d__$1$jscomp$19_d__$2$jscomp$2_del$$);
    $G__114599_aa__$1_c__$2$jscomp$2_d$jscomp$566_m2$$ = $check$$(1 + $G__114599_aa__$1_c__$2$jscomp$2_d$jscomp$566_m2$$ / $aa$jscomp$2_c__$1$$);
    $G__114600_d__$1$jscomp$19_d__$2$jscomp$2_del$$ = $d__$3_h$$ * $G__114599_aa__$1_c__$2$jscomp$2_d$jscomp$566_m2$$;
    $G__114598_c$jscomp$766_h__$1$$ *= $G__114600_d__$1$jscomp$19_d__$2$jscomp$2_del$$;
    if (kixi.stats.math.abs($G__114600_d__$1$jscomp$19_d__$2$jscomp$2_del$$) < 3.0E-7 || $m$$ >= 100) {
      return $G__114598_c$jscomp$766_h__$1$$;
    }
    $G__114600_d__$1$jscomp$19_d__$2$jscomp$2_del$$ = $d__$3_h$$;
    $m$$ += 1;
    $d__$3_h$$ = $G__114598_c$jscomp$766_h__$1$$;
    $G__114598_c$jscomp$766_h__$1$$ = $G__114599_aa__$1_c__$2$jscomp$2_d$jscomp$566_m2$$;
  }
};
kixi.stats.math.ibeta = function($x$$, $a$$, $b$$) {
  if (0 <= $x$$ && $x$$ <= 1) {
    var $bt$$ = $x$$ === 0 || $x$$ === 1 ? 0 : kixi.stats.math.exp(kixi.stats.math.log_gamma($a$$ + $b$$) - kixi.stats.math.log_gamma($a$$) - kixi.stats.math.log_gamma($b$$) + $a$$ * kixi.stats.math.log($x$$) + $b$$ * kixi.stats.math.log(1 - $x$$));
    return $x$$ < ($a$$ + 1) / ($a$$ + $b$$ + 2) ? $bt$$ * (kixi.stats.math.betacf($x$$, $a$$, $b$$) / $a$$) : 1 - $bt$$ * (kixi.stats.math.betacf(1 - $x$$, $b$$, $a$$) / $b$$);
  }
  return null;
};
kixi.stats.math.ibetainv = function($p$$, $a$$, $b$$) {
  if ($p$$ <= 0) {
    return 0.0;
  }
  if ($p$$ >= 1) {
    return 1.0;
  }
  for (var $a1$$ = $a$$ - 1, $b1$$ = $b$$ - 1, $G__114602_err$jscomp$56_t__$1$jscomp$12_x$$ = $a$$ >= 1 && $b$$ >= 1 ? function() {
    var $t$jscomp$300_w$jscomp$120_x$jscomp$2259_x__$1$$ = kixi.stats.math.sqrt(-2 * kixi.stats.math.log($p$$ < 0.5 ? $p$$ : 1 - $p$$));
    $t$jscomp$300_w$jscomp$120_x$jscomp$2259_x__$1$$ = (2.30753 + $t$jscomp$300_w$jscomp$120_x$jscomp$2259_x__$1$$ * 0.27061) / ($t$jscomp$300_w$jscomp$120_x$jscomp$2259_x__$1$$ * (0.99229 + $t$jscomp$300_w$jscomp$120_x$jscomp$2259_x__$1$$ * 0.04481) + 1) - $t$jscomp$300_w$jscomp$120_x$jscomp$2259_x__$1$$;
    $t$jscomp$300_w$jscomp$120_x$jscomp$2259_x__$1$$ = $p$$ < 0.5 ? -$t$jscomp$300_w$jscomp$120_x$jscomp$2259_x__$1$$ : $t$jscomp$300_w$jscomp$120_x$jscomp$2259_x__$1$$;
    var $al$$ = (kixi.stats.math.sq($t$jscomp$300_w$jscomp$120_x$jscomp$2259_x__$1$$) - 3) / 6, $h$$ = 2 / (1 / (2 * $a$$ - 1) + 1 / (2 * $b$$ - 1));
    $t$jscomp$300_w$jscomp$120_x$jscomp$2259_x__$1$$ = $t$jscomp$300_w$jscomp$120_x$jscomp$2259_x__$1$$ * kixi.stats.math.sqrt($al$$ + $h$$) / $h$$ - (1 / (2 * $b$$ - 1) - 1 / (2 * $a$$ - 1)) * ($al$$ + 5 / 6 + -2 / (3 * $h$$));
    return $a$$ / ($a$$ + $b$$ * kixi.stats.math.exp(2 * $t$jscomp$300_w$jscomp$120_x$jscomp$2259_x__$1$$));
  }() : function() {
    var $lna_t$$ = kixi.stats.math.log($a$$ / ($a$$ + $b$$)), $lnb_u$jscomp$84_w$$ = kixi.stats.math.log($b$$ / ($a$$ + $b$$));
    $lna_t$$ = kixi.stats.math.exp($a$$ * $lna_t$$) / $a$$;
    $lnb_u$jscomp$84_w$$ = kixi.stats.math.exp($b$$ * $lnb_u$jscomp$84_w$$) / $b$$;
    $lnb_u$jscomp$84_w$$ = $lna_t$$ + $lnb_u$jscomp$84_w$$;
    return $p$$ < $lna_t$$ / $lnb_u$jscomp$84_w$$ ? kixi.stats.math.pow($a$$ * $lnb_u$jscomp$84_w$$ * $p$$, 1 / $a$$) : 1 - kixi.stats.math.pow($b$$ * $lnb_u$jscomp$84_w$$ * (1 - $p$$), 1 / $b$$);
  }(), $afac$$ = kixi.stats.math.log_gamma($a$$ + $b$$) - kixi.stats.math.log_gamma($a$$) - kixi.stats.math.log_gamma($b$$), $j$$ = 0, $x__$1$$ = $G__114602_err$jscomp$56_t__$1$jscomp$12_x$$;;) {
    if ($x__$1$$ === 0 || $x__$1$$ === 1 || $j$$ >= 10) {
      return $x__$1$$;
    }
    $G__114602_err$jscomp$56_t__$1$jscomp$12_x$$ = kixi.stats.math.ibeta($x__$1$$, $a$$, $b$$) - $p$$;
    var $t$jscomp$299_x__$2$jscomp$1_x__$3$$ = kixi.stats.math.exp($a1$$ * kixi.stats.math.log($x__$1$$) + $b1$$ * kixi.stats.math.log(1 - $x__$1$$) + $afac$$), $u$$ = $G__114602_err$jscomp$56_t__$1$jscomp$12_x$$ / $t$jscomp$299_x__$2$jscomp$1_x__$3$$;
    $G__114602_err$jscomp$56_t__$1$jscomp$12_x$$ = $u$$ / (1 - 0.5 * function() {
      var $y__5114__auto__$$ = $u$$ * ($a1$$ / $x__$1$$ - $b1$$ / (1 - $x__$1$$));
      return 1 < $y__5114__auto__$$ ? 1 : $y__5114__auto__$$;
    }());
    $t$jscomp$299_x__$2$jscomp$1_x__$3$$ = $x__$1$$ - $G__114602_err$jscomp$56_t__$1$jscomp$12_x$$;
    $t$jscomp$299_x__$2$jscomp$1_x__$3$$ = $t$jscomp$299_x__$2$jscomp$1_x__$3$$ <= 0 ? 0.5 * ($t$jscomp$299_x__$2$jscomp$1_x__$3$$ + $G__114602_err$jscomp$56_t__$1$jscomp$12_x$$) : $t$jscomp$299_x__$2$jscomp$1_x__$3$$ >= 1 ? 0.5 * ($t$jscomp$299_x__$2$jscomp$1_x__$3$$ + $G__114602_err$jscomp$56_t__$1$jscomp$12_x$$ + 1) : $t$jscomp$299_x__$2$jscomp$1_x__$3$$;
    if ($j$$ > 0 && kixi.stats.math.abs($G__114602_err$jscomp$56_t__$1$jscomp$12_x$$) < 1.0E-8 * $t$jscomp$299_x__$2$jscomp$1_x__$3$$) {
      return $t$jscomp$299_x__$2$jscomp$1_x__$3$$;
    }
    $G__114602_err$jscomp$56_t__$1$jscomp$12_x$$ = $t$jscomp$299_x__$2$jscomp$1_x__$3$$;
    $j$$ += 1;
    $x__$1$$ = $G__114602_err$jscomp$56_t__$1$jscomp$12_x$$;
  }
};
kixi.stats.math.erf = function($x$$) {
  var $res$jscomp$84_x_SINGLEQUOTE_$$ = kixi.stats.math.abs($x$$), $t$$ = 2 / ($res$jscomp$84_x_SINGLEQUOTE_$$ + 2), $ty$$ = 4 * $t$$ - 2, $dd$$ = $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($dd$$, $cof$$) {
    var $d$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($dd$$, 0, null);
    $dd$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($dd$$, 1, null);
    return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$ty$$ * $d$$ - $dd$$ + $cof$$, $d$$], null);
  }, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0, 0], null), new $APP.cljs.core.PersistentVector(null, 27, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [-2.8E-17, 1.21E-16, -9.4E-17, -1.523E-15, 7.106E-15, 3.81E-16, -1.12708E-13, 3.13092E-13, 8.94487E-13, -6.886027E-12, 2.394038E-12, 9.6467911E-11, -2.27365122E-10, -9.91364156E-10, 5.059343495E-9, 6.529054439E-9, -8.5238095915E-8, 1.5626441722E-8, 1.30365583558E-6, -1.624290004647E-6, -2.0278578112534E-5, 
  4.2523324806907E-5, 3.66839497852761E-4, -9.46595344482036E-4, -0.00956151478680863, 0.019476473204185836, 0.6419697923564902], null)), $d$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($dd$$, 0, null);
  $dd$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($dd$$, 1, null);
  $res$jscomp$84_x_SINGLEQUOTE_$$ = $t$$ * kixi.stats.math.exp(-$res$jscomp$84_x_SINGLEQUOTE_$$ * $res$jscomp$84_x_SINGLEQUOTE_$$ + 0.5 * ($ty$$ * $d$$ + -1.3026537197817094) + -$dd$$);
  return $x$$ < 0 ? $res$jscomp$84_x_SINGLEQUOTE_$$ - 1 : 1 - $res$jscomp$84_x_SINGLEQUOTE_$$;
};
kixi.stats.math.erfc = function($x$$) {
  return 1 - kixi.stats.math.erf($x$$);
};
kixi.stats.math.erfcinv = function($p$$) {
  if ($p$$ >= 2) {
    return -100;
  }
  if ($p$$ <= 0) {
    return 100;
  }
  var $pp$jscomp$5_x__$1$$ = $p$$ < 1 ? $p$$ : 2 - $p$$, $G__114604$jscomp$inline_9074_t$jscomp$303_x__$1$$ = kixi.stats.math.sqrt(-2 * kixi.stats.math.log($pp$jscomp$5_x__$1$$ * 0.5));
  a: {
    var $G__114603$jscomp$inline_9073_j$$ = 0;
    for ($G__114604$jscomp$inline_9074_t$jscomp$303_x__$1$$ = -0.70711 * ((0.27061 * $G__114604$jscomp$inline_9074_t$jscomp$303_x__$1$$ + 2.30753) / (1 + $G__114604$jscomp$inline_9074_t$jscomp$303_x__$1$$ * (0.04481 * $G__114604$jscomp$inline_9074_t$jscomp$303_x__$1$$ + 0.99229)) - $G__114604$jscomp$inline_9074_t$jscomp$303_x__$1$$);;) {
      if ($G__114603$jscomp$inline_9073_j$$ < 2) {
        var $err$$ = kixi.stats.math.erfc($G__114604$jscomp$inline_9074_t$jscomp$303_x__$1$$) - $pp$jscomp$5_x__$1$$;
        $G__114603$jscomp$inline_9073_j$$ += 1;
        $G__114604$jscomp$inline_9074_t$jscomp$303_x__$1$$ += $err$$ / (1.1283791670955126 * kixi.stats.math.exp(-$G__114604$jscomp$inline_9074_t$jscomp$303_x__$1$$ * $G__114604$jscomp$inline_9074_t$jscomp$303_x__$1$$) - $G__114604$jscomp$inline_9074_t$jscomp$303_x__$1$$ * $err$$);
      } else {
        $pp$jscomp$5_x__$1$$ = $G__114604$jscomp$inline_9074_t$jscomp$303_x__$1$$;
        break a;
      }
    }
    $pp$jscomp$5_x__$1$$ = void 0;
  }
  return $p$$ < 1 ? $pp$jscomp$5_x__$1$$ : -$pp$jscomp$5_x__$1$$;
};
kixi.stats.protocols = {};
kixi.stats.protocols.PBounded = function() {
};
var kixi$stats$protocols$PBounded$minimum$dyn_114605 = function($this$$$) {
  var $m__5372__auto__$jscomp$955_m__5374__auto__$$ = kixi.stats.protocols.minimum[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$955_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$955_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$955_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$955_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$955_m__5374__auto__$$ = kixi.stats.protocols.minimum._;
  if ($m__5372__auto__$jscomp$955_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$955_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$955_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$955_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("PBounded.minimum", $this$$$);
};
kixi.stats.protocols.minimum = function($this$$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PBounded$minimum$arity$1 != null ? $this$$$.kixi$stats$protocols$PBounded$minimum$arity$1($this$$$) : kixi$stats$protocols$PBounded$minimum$dyn_114605($this$$$);
};
var kixi$stats$protocols$PBounded$maximum$dyn_114606 = function($this$$$) {
  var $m__5372__auto__$jscomp$956_m__5374__auto__$$ = kixi.stats.protocols.maximum[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$956_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$956_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$956_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$956_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$956_m__5374__auto__$$ = kixi.stats.protocols.maximum._;
  if ($m__5372__auto__$jscomp$956_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$956_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$956_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$956_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("PBounded.maximum", $this$$$);
};
kixi.stats.protocols.maximum = function($this$$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PBounded$maximum$arity$1 != null ? $this$$$.kixi$stats$protocols$PBounded$maximum$arity$1($this$$$) : kixi$stats$protocols$PBounded$maximum$dyn_114606($this$$$);
};
kixi.stats.protocols.PContingencyTable = function() {
};
var kixi$stats$protocols$PContingencyTable$cell$dyn_114607 = function($this$$$, $coordinates$$) {
  var $m__5372__auto__$jscomp$957_m__5374__auto__$$ = kixi.stats.protocols.cell[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$957_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$957_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$957_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $coordinates$$) : $m__5372__auto__$jscomp$957_m__5374__auto__$$.call(null, $this$$$, $coordinates$$);
  }
  $m__5372__auto__$jscomp$957_m__5374__auto__$$ = kixi.stats.protocols.cell._;
  if ($m__5372__auto__$jscomp$957_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$957_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$957_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $coordinates$$) : $m__5372__auto__$jscomp$957_m__5374__auto__$$.call(null, $this$$$, $coordinates$$);
  }
  throw $APP.cljs.core.missing_protocol("PContingencyTable.cell", $this$$$);
};
kixi.stats.protocols.cell = function($this$$$, $coordinates$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PContingencyTable$cell$arity$2 != null ? $this$$$.kixi$stats$protocols$PContingencyTable$cell$arity$2($this$$$, $coordinates$$) : kixi$stats$protocols$PContingencyTable$cell$dyn_114607($this$$$, $coordinates$$);
};
var kixi$stats$protocols$PContingencyTable$grand_total$dyn_114608 = function($this$$$) {
  var $m__5372__auto__$jscomp$958_m__5374__auto__$$ = kixi.stats.protocols.grand_total[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$958_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$958_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$958_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$958_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$958_m__5374__auto__$$ = kixi.stats.protocols.grand_total._;
  if ($m__5372__auto__$jscomp$958_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$958_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$958_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$958_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("PContingencyTable.grand-total", $this$$$);
};
kixi.stats.protocols.grand_total = function($this$$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PContingencyTable$grand_total$arity$1 != null ? $this$$$.kixi$stats$protocols$PContingencyTable$grand_total$arity$1($this$$$) : kixi$stats$protocols$PContingencyTable$grand_total$dyn_114608($this$$$);
};
var kixi$stats$protocols$PContingencyTable$margin_totals$dyn_114609 = function($this$$$) {
  var $m__5372__auto__$jscomp$959_m__5374__auto__$$ = kixi.stats.protocols.margin_totals[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$959_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$959_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$959_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$959_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$959_m__5374__auto__$$ = kixi.stats.protocols.margin_totals._;
  if ($m__5372__auto__$jscomp$959_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$959_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$959_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$959_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("PContingencyTable.margin-totals", $this$$$);
};
kixi.stats.protocols.margin_totals = function($this$$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PContingencyTable$margin_totals$arity$1 != null ? $this$$$.kixi$stats$protocols$PContingencyTable$margin_totals$arity$1($this$$$) : kixi$stats$protocols$PContingencyTable$margin_totals$dyn_114609($this$$$);
};
var kixi$stats$protocols$PContingencyTable$size$dyn_114610 = function($this$$$) {
  var $m__5372__auto__$jscomp$960_m__5374__auto__$$ = kixi.stats.protocols.size[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$960_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$960_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$960_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$960_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$960_m__5374__auto__$$ = kixi.stats.protocols.size._;
  if ($m__5372__auto__$jscomp$960_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$960_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$960_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$960_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("PContingencyTable.size", $this$$$);
};
kixi.stats.protocols.size = function($this$$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PContingencyTable$size$arity$1 != null ? $this$$$.kixi$stats$protocols$PContingencyTable$size$arity$1($this$$$) : kixi$stats$protocols$PContingencyTable$size$dyn_114610($this$$$);
};
kixi.stats.protocols.PDependent = function() {
};
var kixi$stats$protocols$PDependent$measure$dyn_114611 = function($this$$$, $x$$) {
  var $m__5372__auto__$jscomp$961_m__5374__auto__$$ = kixi.stats.protocols.measure[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$961_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$961_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$961_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $x$$) : $m__5372__auto__$jscomp$961_m__5374__auto__$$.call(null, $this$$$, $x$$);
  }
  $m__5372__auto__$jscomp$961_m__5374__auto__$$ = kixi.stats.protocols.measure._;
  if ($m__5372__auto__$jscomp$961_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$961_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$961_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $x$$) : $m__5372__auto__$jscomp$961_m__5374__auto__$$.call(null, $this$$$, $x$$);
  }
  throw $APP.cljs.core.missing_protocol("PDependent.measure", $this$$$);
};
kixi.stats.protocols.measure = function($this$$$, $x$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PDependent$measure$arity$2 != null ? $this$$$.kixi$stats$protocols$PDependent$measure$arity$2($this$$$, $x$$) : kixi$stats$protocols$PDependent$measure$dyn_114611($this$$$, $x$$);
};
kixi.stats.protocols.PDependentWithSignificance = function() {
};
var kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$dyn_114612 = function($this$$$, $x$$, $alpha$$) {
  var $m__5372__auto__$jscomp$962_m__5374__auto__$$ = kixi.stats.protocols.measure_with_significance[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$962_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$962_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$962_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $x$$, $alpha$$) : $m__5372__auto__$jscomp$962_m__5374__auto__$$.call(null, $this$$$, $x$$, $alpha$$);
  }
  $m__5372__auto__$jscomp$962_m__5374__auto__$$ = kixi.stats.protocols.measure_with_significance._;
  if ($m__5372__auto__$jscomp$962_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$962_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$962_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $x$$, $alpha$$) : $m__5372__auto__$jscomp$962_m__5374__auto__$$.call(null, $this$$$, $x$$, $alpha$$);
  }
  throw $APP.cljs.core.missing_protocol("PDependentWithSignificance.measure-with-significance", $this$$$);
};
kixi.stats.protocols.measure_with_significance = function($this$$$, $x$$, $alpha$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3 != null ? $this$$$.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3($this$$$, $x$$, $alpha$$) : kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$dyn_114612($this$$$, $x$$, $alpha$$);
};
kixi.stats.protocols.PDiscreteRandomVariable = function() {
};
var kixi$stats$protocols$PDiscreteRandomVariable$sample_frequencies$dyn_114613 = function($this$$$, $n$$, $rng$$) {
  var $m__5372__auto__$jscomp$963_m__5374__auto__$$ = kixi.stats.protocols.sample_frequencies[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$963_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$963_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$963_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $n$$, $rng$$) : $m__5372__auto__$jscomp$963_m__5374__auto__$$.call(null, $this$$$, $n$$, $rng$$);
  }
  $m__5372__auto__$jscomp$963_m__5374__auto__$$ = kixi.stats.protocols.sample_frequencies._;
  if ($m__5372__auto__$jscomp$963_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$963_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$963_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $n$$, $rng$$) : $m__5372__auto__$jscomp$963_m__5374__auto__$$.call(null, $this$$$, $n$$, $rng$$);
  }
  throw $APP.cljs.core.missing_protocol("PDiscreteRandomVariable.sample-frequencies", $this$$$);
};
kixi.stats.protocols.sample_frequencies = function($this$$$, $n$$, $rng$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PDiscreteRandomVariable$sample_frequencies$arity$3 != null ? $this$$$.kixi$stats$protocols$PDiscreteRandomVariable$sample_frequencies$arity$3($this$$$, $n$$, $rng$$) : kixi$stats$protocols$PDiscreteRandomVariable$sample_frequencies$dyn_114613($this$$$, $n$$, $rng$$);
};
kixi.stats.protocols.PTestResult = function() {
};
var kixi$stats$protocols$PTestResult$p_value$dyn_114614 = function() {
  var $G__114615$$ = null, $G__114615__1$$ = function($this$$$) {
    var $m__5372__auto__$jscomp$964_m__5374__auto__$$ = kixi.stats.protocols.p_value[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
    if ($m__5372__auto__$jscomp$964_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$964_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$964_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$964_m__5374__auto__$$.call(null, $this$$$);
    }
    $m__5372__auto__$jscomp$964_m__5374__auto__$$ = kixi.stats.protocols.p_value._;
    if ($m__5372__auto__$jscomp$964_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$964_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$964_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$964_m__5374__auto__$$.call(null, $this$$$);
    }
    throw $APP.cljs.core.missing_protocol("PTestResult.p-value", $this$$$);
  }, $G__114615__2$$ = function($this$$$, $alternative$$) {
    var $m__5372__auto__$jscomp$965_m__5374__auto__$$ = kixi.stats.protocols.p_value[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
    if ($m__5372__auto__$jscomp$965_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$965_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$965_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $alternative$$) : $m__5372__auto__$jscomp$965_m__5374__auto__$$.call(null, $this$$$, $alternative$$);
    }
    $m__5372__auto__$jscomp$965_m__5374__auto__$$ = kixi.stats.protocols.p_value._;
    if ($m__5372__auto__$jscomp$965_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$965_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$965_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $alternative$$) : $m__5372__auto__$jscomp$965_m__5374__auto__$$.call(null, $this$$$, $alternative$$);
    }
    throw $APP.cljs.core.missing_protocol("PTestResult.p-value", $this$$$);
  };
  $G__114615$$ = function($this$$$, $alternative$$) {
    switch(arguments.length) {
      case 1:
        return $G__114615__1$$.call(this, $this$$$);
      case 2:
        return $G__114615__2$$.call(this, $this$$$, $alternative$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__114615$$.cljs$core$IFn$_invoke$arity$1 = $G__114615__1$$;
  $G__114615$$.cljs$core$IFn$_invoke$arity$2 = $G__114615__2$$;
  return $G__114615$$;
}();
kixi.stats.protocols.p_value = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return kixi.stats.protocols.p_value.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return kixi.stats.protocols.p_value.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
kixi.stats.protocols.p_value.cljs$core$IFn$_invoke$arity$1 = function($this$$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PTestResult$p_value$arity$1 != null ? $this$$$.kixi$stats$protocols$PTestResult$p_value$arity$1($this$$$) : kixi$stats$protocols$PTestResult$p_value$dyn_114614($this$$$);
};
kixi.stats.protocols.p_value.cljs$core$IFn$_invoke$arity$2 = function($this$$$, $alternative$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PTestResult$p_value$arity$2 != null ? $this$$$.kixi$stats$protocols$PTestResult$p_value$arity$2($this$$$, $alternative$$) : kixi$stats$protocols$PTestResult$p_value$dyn_114614($this$$$, $alternative$$);
};
kixi.stats.protocols.p_value.cljs$lang$maxFixedArity = 2;
var kixi$stats$protocols$PTestResult$significant_QMARK_$dyn_114617 = function() {
  var $G__114618$$ = null, $G__114618__2$$ = function($this$$$, $alpha$$) {
    var $m__5372__auto__$jscomp$966_m__5374__auto__$$ = kixi.stats.protocols.significant_QMARK_[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
    if ($m__5372__auto__$jscomp$966_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$966_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$966_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $alpha$$) : $m__5372__auto__$jscomp$966_m__5374__auto__$$.call(null, $this$$$, $alpha$$);
    }
    $m__5372__auto__$jscomp$966_m__5374__auto__$$ = kixi.stats.protocols.significant_QMARK_._;
    if ($m__5372__auto__$jscomp$966_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$966_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$966_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $alpha$$) : $m__5372__auto__$jscomp$966_m__5374__auto__$$.call(null, $this$$$, $alpha$$);
    }
    throw $APP.cljs.core.missing_protocol("PTestResult.significant?", $this$$$);
  }, $G__114618__3$$ = function($this$$$, $alpha$$, $alternative$$) {
    var $m__5372__auto__$jscomp$967_m__5374__auto__$$ = kixi.stats.protocols.significant_QMARK_[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
    if ($m__5372__auto__$jscomp$967_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$967_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$967_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $alpha$$, $alternative$$) : $m__5372__auto__$jscomp$967_m__5374__auto__$$.call(null, $this$$$, $alpha$$, $alternative$$);
    }
    $m__5372__auto__$jscomp$967_m__5374__auto__$$ = kixi.stats.protocols.significant_QMARK_._;
    if ($m__5372__auto__$jscomp$967_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$967_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$967_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $alpha$$, $alternative$$) : $m__5372__auto__$jscomp$967_m__5374__auto__$$.call(null, $this$$$, $alpha$$, $alternative$$);
    }
    throw $APP.cljs.core.missing_protocol("PTestResult.significant?", $this$$$);
  };
  $G__114618$$ = function($this$$$, $alpha$$, $alternative$$) {
    switch(arguments.length) {
      case 2:
        return $G__114618__2$$.call(this, $this$$$, $alpha$$);
      case 3:
        return $G__114618__3$$.call(this, $this$$$, $alpha$$, $alternative$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__114618$$.cljs$core$IFn$_invoke$arity$2 = $G__114618__2$$;
  $G__114618$$.cljs$core$IFn$_invoke$arity$3 = $G__114618__3$$;
  return $G__114618$$;
}();
kixi.stats.protocols.significant_QMARK_ = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return kixi.stats.protocols.significant_QMARK_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return kixi.stats.protocols.significant_QMARK_.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
kixi.stats.protocols.significant_QMARK_.cljs$core$IFn$_invoke$arity$2 = function($this$$$, $alpha$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PTestResult$significant_QMARK_$arity$2 != null ? $this$$$.kixi$stats$protocols$PTestResult$significant_QMARK_$arity$2($this$$$, $alpha$$) : kixi$stats$protocols$PTestResult$significant_QMARK_$dyn_114617($this$$$, $alpha$$);
};
kixi.stats.protocols.significant_QMARK_.cljs$core$IFn$_invoke$arity$3 = function($this$$$, $alpha$$, $alternative$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PTestResult$significant_QMARK_$arity$3 != null ? $this$$$.kixi$stats$protocols$PTestResult$significant_QMARK_$arity$3($this$$$, $alpha$$, $alternative$$) : kixi$stats$protocols$PTestResult$significant_QMARK_$dyn_114617($this$$$, $alpha$$, $alternative$$);
};
kixi.stats.protocols.significant_QMARK_.cljs$lang$maxFixedArity = 3;
kixi.stats.protocols.PInterval = function() {
};
var kixi$stats$protocols$PInterval$lower$dyn_114620 = function($this$$$) {
  var $m__5372__auto__$jscomp$968_m__5374__auto__$$ = kixi.stats.protocols.lower[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$968_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$968_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$968_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$968_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$968_m__5374__auto__$$ = kixi.stats.protocols.lower._;
  if ($m__5372__auto__$jscomp$968_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$968_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$968_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$968_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("PInterval.lower", $this$$$);
};
kixi.stats.protocols.lower = function($this$$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PInterval$lower$arity$1 != null ? $this$$$.kixi$stats$protocols$PInterval$lower$arity$1($this$$$) : kixi$stats$protocols$PInterval$lower$dyn_114620($this$$$);
};
var kixi$stats$protocols$PInterval$upper$dyn_114621 = function($this$$$) {
  var $m__5372__auto__$jscomp$969_m__5374__auto__$$ = kixi.stats.protocols.upper[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$969_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$969_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$969_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$969_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$969_m__5374__auto__$$ = kixi.stats.protocols.upper._;
  if ($m__5372__auto__$jscomp$969_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$969_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$969_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$969_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("PInterval.upper", $this$$$);
};
kixi.stats.protocols.upper = function($this$$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PInterval$upper$arity$1 != null ? $this$$$.kixi$stats$protocols$PInterval$upper$arity$1($this$$$) : kixi$stats$protocols$PInterval$upper$dyn_114621($this$$$);
};
kixi.stats.protocols.PParameterised = function() {
};
var kixi$stats$protocols$PParameterised$parameters$dyn_114622 = function($this$$$) {
  var $m__5372__auto__$jscomp$970_m__5374__auto__$$ = kixi.stats.protocols.parameters[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$970_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$970_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$970_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$970_m__5374__auto__$$.call(null, $this$$$);
  }
  $m__5372__auto__$jscomp$970_m__5374__auto__$$ = kixi.stats.protocols.parameters._;
  if ($m__5372__auto__$jscomp$970_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$970_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$970_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($this$$$) : $m__5372__auto__$jscomp$970_m__5374__auto__$$.call(null, $this$$$);
  }
  throw $APP.cljs.core.missing_protocol("PParameterised.parameters", $this$$$);
};
kixi.stats.protocols.parameters = function($this$$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PParameterised$parameters$arity$1 != null ? $this$$$.kixi$stats$protocols$PParameterised$parameters$arity$1($this$$$) : kixi$stats$protocols$PParameterised$parameters$dyn_114622($this$$$);
};
kixi.stats.protocols.PQuantile = function() {
};
var kixi$stats$protocols$PQuantile$cdf$dyn_114623 = function($this$$$, $x$$) {
  var $m__5372__auto__$jscomp$971_m__5374__auto__$$ = kixi.stats.protocols.cdf[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$971_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$971_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$971_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $x$$) : $m__5372__auto__$jscomp$971_m__5374__auto__$$.call(null, $this$$$, $x$$);
  }
  $m__5372__auto__$jscomp$971_m__5374__auto__$$ = kixi.stats.protocols.cdf._;
  if ($m__5372__auto__$jscomp$971_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$971_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$971_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $x$$) : $m__5372__auto__$jscomp$971_m__5374__auto__$$.call(null, $this$$$, $x$$);
  }
  throw $APP.cljs.core.missing_protocol("PQuantile.cdf", $this$$$);
};
kixi.stats.protocols.cdf = function($this$$$, $x$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PQuantile$cdf$arity$2 != null ? $this$$$.kixi$stats$protocols$PQuantile$cdf$arity$2($this$$$, $x$$) : kixi$stats$protocols$PQuantile$cdf$dyn_114623($this$$$, $x$$);
};
var kixi$stats$protocols$PQuantile$quantile$dyn_114624 = function($this$$$, $p$$) {
  var $m__5372__auto__$jscomp$972_m__5374__auto__$$ = kixi.stats.protocols.quantile[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$972_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$972_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$972_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $p$$) : $m__5372__auto__$jscomp$972_m__5374__auto__$$.call(null, $this$$$, $p$$);
  }
  $m__5372__auto__$jscomp$972_m__5374__auto__$$ = kixi.stats.protocols.quantile._;
  if ($m__5372__auto__$jscomp$972_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$972_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$972_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $p$$) : $m__5372__auto__$jscomp$972_m__5374__auto__$$.call(null, $this$$$, $p$$);
  }
  throw $APP.cljs.core.missing_protocol("PQuantile.quantile", $this$$$);
};
kixi.stats.protocols.quantile = function($this$$$, $p$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PQuantile$quantile$arity$2 != null ? $this$$$.kixi$stats$protocols$PQuantile$quantile$arity$2($this$$$, $p$$) : kixi$stats$protocols$PQuantile$quantile$dyn_114624($this$$$, $p$$);
};
kixi.stats.protocols.PRandomVariable = function() {
};
var kixi$stats$protocols$PRandomVariable$sample_1$dyn_114625 = function($this$$$, $rng$$) {
  var $m__5372__auto__$jscomp$973_m__5374__auto__$$ = kixi.stats.protocols.sample_1[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$973_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$973_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$973_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $rng$$) : $m__5372__auto__$jscomp$973_m__5374__auto__$$.call(null, $this$$$, $rng$$);
  }
  $m__5372__auto__$jscomp$973_m__5374__auto__$$ = kixi.stats.protocols.sample_1._;
  if ($m__5372__auto__$jscomp$973_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$973_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$973_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($this$$$, $rng$$) : $m__5372__auto__$jscomp$973_m__5374__auto__$$.call(null, $this$$$, $rng$$);
  }
  throw $APP.cljs.core.missing_protocol("PRandomVariable.sample-1", $this$$$);
};
kixi.stats.protocols.sample_1 = function($this$$$, $rng$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 != null ? $this$$$.kixi$stats$protocols$PRandomVariable$sample_1$arity$2($this$$$, $rng$$) : kixi$stats$protocols$PRandomVariable$sample_1$dyn_114625($this$$$, $rng$$);
};
var kixi$stats$protocols$PRandomVariable$sample_n$dyn_114626 = function($this$$$, $n$$, $rng$$) {
  var $m__5372__auto__$jscomp$974_m__5374__auto__$$ = kixi.stats.protocols.sample_n[$APP.goog.typeOf($this$$$ == null ? null : $this$$$)];
  if ($m__5372__auto__$jscomp$974_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$974_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$974_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $n$$, $rng$$) : $m__5372__auto__$jscomp$974_m__5374__auto__$$.call(null, $this$$$, $n$$, $rng$$);
  }
  $m__5372__auto__$jscomp$974_m__5374__auto__$$ = kixi.stats.protocols.sample_n._;
  if ($m__5372__auto__$jscomp$974_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$974_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$974_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($this$$$, $n$$, $rng$$) : $m__5372__auto__$jscomp$974_m__5374__auto__$$.call(null, $this$$$, $n$$, $rng$$);
  }
  throw $APP.cljs.core.missing_protocol("PRandomVariable.sample-n", $this$$$);
};
kixi.stats.protocols.sample_n = function($this$$$, $n$$, $rng$$) {
  return $this$$$ != null && $this$$$.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 != null ? $this$$$.kixi$stats$protocols$PRandomVariable$sample_n$arity$3($this$$$, $n$$, $rng$$) : kixi$stats$protocols$PRandomVariable$sample_n$dyn_114626($this$$$, $n$$, $rng$$);
};
$APP.clojure.test = {};
$APP.clojure.test.check = {};
$APP.clojure.test.check.random = {};
$APP.clojure.test.check.random.longs = {};
$APP.clojure.test.check.random.longs.bit_count_impl = {};
$APP.clojure.test.check.random.longs.bit_count_impl.lookup = function() {
  for (var $arr$$ = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null], $i_114628$$ = $arr$$[0] = 0;;) {
    if ($i_114628$$ < 256) {
      $arr$$[$i_114628$$] = $arr$$[$i_114628$$ >> 1] + ($i_114628$$ & 1), $i_114628$$ += 1;
    } else {
      break;
    }
  }
  return $arr$$;
}();
$APP.clojure.test.check.random.longs.bit_count_impl.bit_count = function($high$jscomp$18_x$$) {
  var $low$$ = $high$jscomp$18_x$$.low_;
  $high$jscomp$18_x$$ = $high$jscomp$18_x$$.high_;
  return $APP.clojure.test.check.random.longs.bit_count_impl.lookup[$low$$ & 255] + $APP.clojure.test.check.random.longs.bit_count_impl.lookup[$low$$ >> 8 & 255] + $APP.clojure.test.check.random.longs.bit_count_impl.lookup[$low$$ >> 16 & 255] + $APP.clojure.test.check.random.longs.bit_count_impl.lookup[$low$$ >> 24 & 255] + $APP.clojure.test.check.random.longs.bit_count_impl.lookup[$high$jscomp$18_x$$ & 255] + $APP.clojure.test.check.random.longs.bit_count_impl.lookup[$high$jscomp$18_x$$ >> 8 & 255] + 
  $APP.clojure.test.check.random.longs.bit_count_impl.lookup[$high$jscomp$18_x$$ >> 16 & 255] + $APP.clojure.test.check.random.longs.bit_count_impl.lookup[$high$jscomp$18_x$$ >> 24 & 255];
};
$APP.clojure.test.check.random.longs.goog$module$goog$math$Long = $APP.module$contents$goog$math$Long_Long;
$APP.clojure.test.check.random.longs.unsigned_bit_shift_right = function($x$$, $n$$) {
  return $x$$.shiftRightUnsigned($n$$);
};
$APP.clojure.test.check.random.longs._PLUS_ = function($x$$, $y$$) {
  return $x$$.add($y$$);
};
$APP.clojure.test.check.random.longs._STAR_ = function($a00$jscomp$2_x$$, $b00$jscomp$4_y$$) {
  var $a48$$ = $a00$jscomp$2_x$$.high_ >>> 16, $a32$$ = $a00$jscomp$2_x$$.high_ & 65535, $a16$$ = $a00$jscomp$2_x$$.low_ >>> 16;
  $a00$jscomp$2_x$$ = $a00$jscomp$2_x$$.low_ & 65535;
  var $b48$$ = $b00$jscomp$4_y$$.high_ >>> 16, $b32$$ = $b00$jscomp$4_y$$.high_ & 65535, $b16$$ = $b00$jscomp$4_y$$.low_ >>> 16;
  $b00$jscomp$4_y$$ = $b00$jscomp$4_y$$.low_ & 65535;
  var $arr$$ = [0, 0, 0, 0];
  $arr$$[0] = $a00$jscomp$2_x$$ * $b00$jscomp$4_y$$;
  $arr$$[1] = $arr$$[0] >>> 16;
  $arr$$[0] &= 65535;
  $arr$$[1] += $a16$$ * $b00$jscomp$4_y$$;
  $arr$$[2] = $arr$$[1] >>> 16;
  $arr$$[1] &= 65535;
  $arr$$[1] += $a00$jscomp$2_x$$ * $b16$$;
  $arr$$[2] += $arr$$[1] >>> 16;
  $arr$$[1] &= 65535;
  $arr$$[2] += $a32$$ * $b00$jscomp$4_y$$;
  $arr$$[3] = $arr$$[2] >>> 16;
  $arr$$[2] &= 65535;
  $arr$$[2] += $a16$$ * $b16$$;
  $arr$$[3] += $arr$$[2] >>> 16;
  $arr$$[2] &= 65535;
  $arr$$[2] += $a00$jscomp$2_x$$ * $b32$$;
  $arr$$[3] += $arr$$[2] >>> 16;
  $arr$$[2] &= 65535;
  $arr$$[3] = $arr$$[3] + $a48$$ * $b00$jscomp$4_y$$ + $a32$$ * $b16$$ + $a16$$ * $b32$$ + $a00$jscomp$2_x$$ * $b48$$;
  $arr$$[3] &= 65535;
  return $APP.clojure.test.check.random.longs.goog$module$goog$math$Long.fromBits($arr$$[1] << 16 | $arr$$[0], $arr$$[3] << 16 | $arr$$[2]);
};
$APP.clojure.test.check.random.longs.bit_xor = function($x$$, $y$$) {
  return $x$$.xor($y$$);
};
$APP.clojure.test.check.random.longs.bit_or = function($x$$, $y$$) {
  return $x$$.or($y$$);
};
$APP.clojure.test.check.random.longs.from_string = function($s$$, $radix$$) {
  return $APP.clojure.test.check.random.longs.goog$module$goog$math$Long.fromString($s$$, $radix$$);
};
$APP.clojure.test.check.random.longs.from_number = function($x$$) {
  return $APP.clojure.test.check.random.longs.goog$module$goog$math$Long.fromNumber($x$$);
};
$APP.clojure.test.check.random.longs.__GT_long = function($x$$) {
  return typeof $x$$ === "number" ? $APP.clojure.test.check.random.longs.goog$module$goog$math$Long.fromNumber($x$$) : $x$$ instanceof $APP.clojure.test.check.random.longs.goog$module$goog$math$Long ? $x$$ : null;
};
$APP.clojure.test.check.random.longs.ONE = $APP.clojure.test.check.random.longs.goog$module$goog$math$Long.getOne();
$APP.clojure.test.check.random.longs.bit_count = $APP.clojure.test.check.random.longs.bit_count_impl.bit_count;
$APP.clojure.test.check.random.doubles = {};
$APP.clojure.test.check.random.doubles.double_unit = function() {
  for (var $i$$ = 53, $G__114631_x$$ = 1;;) {
    if ($i$$ === 0) {
      return $G__114631_x$$;
    }
    $G__114631_x$$ /= 2;
    --$i$$;
  }
}();
$APP.clojure.test.check.random.doubles.big_double_unit = $APP.clojure.test.check.random.doubles.double_unit * 4294967296;
$APP.clojure.test.check.random.doubles.rand_long__GT_rand_double = function($long$_low_bits$$) {
  var $high_bits_x$$ = $APP.clojure.test.check.random.longs.unsigned_bit_shift_right($long$_low_bits$$, 11);
  $long$_low_bits$$ = $high_bits_x$$.getLowBitsUnsigned();
  $high_bits_x$$ = $high_bits_x$$.getHighBits();
  return $APP.clojure.test.check.random.doubles.double_unit * $long$_low_bits$$ + $APP.clojure.test.check.random.doubles.big_double_unit * $high_bits_x$$;
};
$APP.clojure.test.check.random.IRandom = function() {
};
var clojure$test$check$random$IRandom$rand_long$dyn_114642 = function($rng$$) {
  var $m__5372__auto__$jscomp$975_m__5374__auto__$$ = $APP.clojure.test.check.random.rand_long[$APP.goog.typeOf($rng$$ == null ? null : $rng$$)];
  if ($m__5372__auto__$jscomp$975_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$975_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$975_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($rng$$) : $m__5372__auto__$jscomp$975_m__5374__auto__$$.call(null, $rng$$);
  }
  $m__5372__auto__$jscomp$975_m__5374__auto__$$ = $APP.clojure.test.check.random.rand_long._;
  if ($m__5372__auto__$jscomp$975_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$975_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$975_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($rng$$) : $m__5372__auto__$jscomp$975_m__5374__auto__$$.call(null, $rng$$);
  }
  throw $APP.cljs.core.missing_protocol("IRandom.rand-long", $rng$$);
};
$APP.clojure.test.check.random.rand_long = function($rng$$) {
  return $rng$$ != null && $rng$$.clojure$test$check$random$IRandom$rand_long$arity$1 != null ? $rng$$.clojure$test$check$random$IRandom$rand_long$arity$1($rng$$) : clojure$test$check$random$IRandom$rand_long$dyn_114642($rng$$);
};
var clojure$test$check$random$IRandom$rand_double$dyn_114643 = function($rng$$) {
  var $m__5372__auto__$jscomp$976_m__5374__auto__$$ = $APP.clojure.test.check.random.rand_double[$APP.goog.typeOf($rng$$ == null ? null : $rng$$)];
  if ($m__5372__auto__$jscomp$976_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$976_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$976_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($rng$$) : $m__5372__auto__$jscomp$976_m__5374__auto__$$.call(null, $rng$$);
  }
  $m__5372__auto__$jscomp$976_m__5374__auto__$$ = $APP.clojure.test.check.random.rand_double._;
  if ($m__5372__auto__$jscomp$976_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$976_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$976_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($rng$$) : $m__5372__auto__$jscomp$976_m__5374__auto__$$.call(null, $rng$$);
  }
  throw $APP.cljs.core.missing_protocol("IRandom.rand-double", $rng$$);
};
$APP.clojure.test.check.random.rand_double = function($rng$$) {
  return $rng$$ != null && $rng$$.clojure$test$check$random$IRandom$rand_double$arity$1 != null ? $rng$$.clojure$test$check$random$IRandom$rand_double$arity$1($rng$$) : clojure$test$check$random$IRandom$rand_double$dyn_114643($rng$$);
};
var clojure$test$check$random$IRandom$split$dyn_114644 = function($rng$$) {
  var $m__5372__auto__$jscomp$977_m__5374__auto__$$ = $APP.clojure.test.check.random.split[$APP.goog.typeOf($rng$$ == null ? null : $rng$$)];
  if ($m__5372__auto__$jscomp$977_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$977_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$977_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($rng$$) : $m__5372__auto__$jscomp$977_m__5374__auto__$$.call(null, $rng$$);
  }
  $m__5372__auto__$jscomp$977_m__5374__auto__$$ = $APP.clojure.test.check.random.split._;
  if ($m__5372__auto__$jscomp$977_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$977_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$977_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($rng$$) : $m__5372__auto__$jscomp$977_m__5374__auto__$$.call(null, $rng$$);
  }
  throw $APP.cljs.core.missing_protocol("IRandom.split", $rng$$);
};
$APP.clojure.test.check.random.split = function($rng$$) {
  return $rng$$ != null && $rng$$.clojure$test$check$random$IRandom$split$arity$1 != null ? $rng$$.clojure$test$check$random$IRandom$split$arity$1($rng$$) : clojure$test$check$random$IRandom$split$dyn_114644($rng$$);
};
var clojure$test$check$random$IRandom$split_n$dyn_114645 = function($rng$$, $n$$) {
  var $m__5372__auto__$jscomp$978_m__5374__auto__$$ = $APP.clojure.test.check.random.split_n[$APP.goog.typeOf($rng$$ == null ? null : $rng$$)];
  if ($m__5372__auto__$jscomp$978_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$978_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$978_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($rng$$, $n$$) : $m__5372__auto__$jscomp$978_m__5374__auto__$$.call(null, $rng$$, $n$$);
  }
  $m__5372__auto__$jscomp$978_m__5374__auto__$$ = $APP.clojure.test.check.random.split_n._;
  if ($m__5372__auto__$jscomp$978_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$978_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$978_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($rng$$, $n$$) : $m__5372__auto__$jscomp$978_m__5374__auto__$$.call(null, $rng$$, $n$$);
  }
  throw $APP.cljs.core.missing_protocol("IRandom.split-n", $rng$$);
};
$APP.clojure.test.check.random.split_n = function($rng$$, $n$$) {
  return $rng$$ != null && $rng$$.clojure$test$check$random$IRandom$split_n$arity$2 != null ? $rng$$.clojure$test$check$random$IRandom$split_n$arity$2($rng$$, $n$$) : clojure$test$check$random$IRandom$split_n$dyn_114645($rng$$, $n$$);
};
$APP.clojure.test.check.random.hex_long = function($s$$) {
  return $APP.clojure.test.check.random.longs.from_string($s$$, 16);
};
$APP.clojure.test.check.random.bxoubsr = function($x$$, $n$$) {
  return $APP.clojure.test.check.random.longs.bit_xor($APP.clojure.test.check.random.longs.unsigned_bit_shift_right($x$$, $n$$), $x$$);
};
$APP.clojure.test.check.random.mix_64_const_1 = $APP.clojure.test.check.random.hex_long("bf58476d1ce4e5b9");
$APP.clojure.test.check.random.mix_64_const_2 = $APP.clojure.test.check.random.hex_long("94d049bb133111eb");
$APP.clojure.test.check.random.mix_64 = function($n$$) {
  return $APP.clojure.test.check.random.bxoubsr($APP.clojure.test.check.random.longs._STAR_($APP.clojure.test.check.random.bxoubsr($APP.clojure.test.check.random.longs._STAR_($APP.clojure.test.check.random.bxoubsr($n$$, 30), $APP.clojure.test.check.random.mix_64_const_1), 27), $APP.clojure.test.check.random.mix_64_const_2), 31);
};
$APP.clojure.test.check.random.mix_gamma_const_1 = $APP.clojure.test.check.random.hex_long("ff51afd7ed558ccd");
$APP.clojure.test.check.random.mix_gamma_const_2 = $APP.clojure.test.check.random.hex_long("c4ceb9fe1a85ec53");
$APP.clojure.test.check.random.mix_gamma_const_3 = $APP.clojure.test.check.random.hex_long("aaaaaaaaaaaaaaaa");
$APP.clojure.test.check.random.mix_gamma = function($n$jscomp$879_z$$) {
  $n$jscomp$879_z$$ = $APP.clojure.test.check.random.longs.bit_or($APP.clojure.test.check.random.bxoubsr($APP.clojure.test.check.random.longs._STAR_($APP.clojure.test.check.random.bxoubsr($APP.clojure.test.check.random.longs._STAR_($APP.clojure.test.check.random.bxoubsr($n$jscomp$879_z$$, 33), $APP.clojure.test.check.random.mix_gamma_const_1), 33), $APP.clojure.test.check.random.mix_gamma_const_2), 33), $APP.clojure.test.check.random.longs.ONE);
  var $G__114633$$ = $APP.clojure.test.check.random.bxoubsr($n$jscomp$879_z$$, 1);
  return 24 > ($APP.clojure.test.check.random.longs.bit_count.cljs$core$IFn$_invoke$arity$1 ? $APP.clojure.test.check.random.longs.bit_count.cljs$core$IFn$_invoke$arity$1($G__114633$$) : $APP.clojure.test.check.random.longs.bit_count.call(null, $G__114633$$)) ? $APP.clojure.test.check.random.longs.bit_xor($n$jscomp$879_z$$, $APP.clojure.test.check.random.mix_gamma_const_3) : $n$jscomp$879_z$$;
};
$APP.clojure.test.check.random.JavaUtilSplittableRandom = function($gamma$$, $state$$) {
  this.gamma = $gamma$$;
  this.state = $state$$;
};
$APP.clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$ = $APP.cljs.core.PROTOCOL_SENTINEL;
$APP.clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$rand_long$arity$1 = function($_$$) {
  return $APP.clojure.test.check.random.mix_64($APP.clojure.test.check.random.longs._PLUS_(this.state, this.gamma));
};
$APP.clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$rand_double$arity$1 = function($this$$$) {
  return $APP.clojure.test.check.random.doubles.rand_long__GT_rand_double(this.clojure$test$check$random$IRandom$rand_long$arity$1(null));
};
$APP.clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$split$arity$1 = function($state_SINGLEQUOTE__this$$$) {
  $state_SINGLEQUOTE__this$$$ = $APP.clojure.test.check.random.longs._PLUS_(this.gamma, this.state);
  var $state_SINGLEQUOTE__SINGLEQUOTE_$$ = $APP.clojure.test.check.random.longs._PLUS_(this.gamma, $state_SINGLEQUOTE__this$$$), $gamma_SINGLEQUOTE_$$ = $APP.clojure.test.check.random.mix_gamma($state_SINGLEQUOTE__SINGLEQUOTE_$$);
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.clojure.test.check.random.JavaUtilSplittableRandom(this.gamma, $state_SINGLEQUOTE__SINGLEQUOTE_$$), new $APP.clojure.test.check.random.JavaUtilSplittableRandom($gamma_SINGLEQUOTE_$$, $APP.clojure.test.check.random.mix_64($state_SINGLEQUOTE__this$$$))], null);
};
$APP.clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$split_n$arity$2 = function($n_dec_this$$$, $G__114648_n$jscomp$880_ret$$) {
  switch($G__114648_n$jscomp$880_ret$$) {
    case 0:
      return $APP.cljs.core.PersistentVector.EMPTY;
    case 1:
      return new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [this], null);
    default:
      $n_dec_this$$$ = $G__114648_n$jscomp$880_ret$$ - 1;
      var $G__114647_state_SINGLEQUOTE__SINGLEQUOTE_$jscomp$1_state__$1$$ = this.state;
      for ($G__114648_n$jscomp$880_ret$$ = $APP.cljs.core.transient$($APP.cljs.core.PersistentVector.EMPTY);;) {
        if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($n_dec_this$$$, $APP.cljs.core.count($G__114648_n$jscomp$880_ret$$))) {
          return $APP.cljs.core.persistent_BANG_($APP.cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2($G__114648_n$jscomp$880_ret$$, new $APP.clojure.test.check.random.JavaUtilSplittableRandom(this.gamma, $G__114647_state_SINGLEQUOTE__SINGLEQUOTE_$jscomp$1_state__$1$$)));
        }
        var $new_rng_state_SINGLEQUOTE_$$ = $APP.clojure.test.check.random.longs._PLUS_(this.gamma, $G__114647_state_SINGLEQUOTE__SINGLEQUOTE_$jscomp$1_state__$1$$);
        $G__114647_state_SINGLEQUOTE__SINGLEQUOTE_$jscomp$1_state__$1$$ = $APP.clojure.test.check.random.longs._PLUS_(this.gamma, $new_rng_state_SINGLEQUOTE_$$);
        var $gamma_SINGLEQUOTE_$$ = $APP.clojure.test.check.random.mix_gamma($G__114647_state_SINGLEQUOTE__SINGLEQUOTE_$jscomp$1_state__$1$$);
        $new_rng_state_SINGLEQUOTE_$$ = new $APP.clojure.test.check.random.JavaUtilSplittableRandom($gamma_SINGLEQUOTE_$$, $APP.clojure.test.check.random.mix_64($new_rng_state_SINGLEQUOTE_$$));
        $G__114648_n$jscomp$880_ret$$ = $APP.cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2($G__114648_n$jscomp$880_ret$$, $new_rng_state_SINGLEQUOTE_$$);
      }
  }
};
$APP.clojure.test.check.random.JavaUtilSplittableRandom.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$3994$gamma, $APP.cljs$cst$44$state], null);
};
$APP.clojure.test.check.random.JavaUtilSplittableRandom.cljs$lang$type = !0;
$APP.clojure.test.check.random.JavaUtilSplittableRandom.cljs$lang$ctorStr = "clojure.test.check.random/JavaUtilSplittableRandom";
$APP.clojure.test.check.random.JavaUtilSplittableRandom.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "clojure.test.check.random/JavaUtilSplittableRandom");
};
$APP.clojure.test.check.random.__GT_JavaUtilSplittableRandom = function($gamma$$, $state$$) {
  return new $APP.clojure.test.check.random.JavaUtilSplittableRandom($gamma$$, $state$$);
};
$APP.clojure.test.check.random.golden_gamma = $APP.clojure.test.check.random.hex_long("9e3779b97f4a7c15");
$APP.clojure.test.check.random.make_java_util_splittable_random = function($seed$$) {
  var $JSCompiler_temp_const$$ = $APP.clojure.test.check.random.JavaUtilSplittableRandom, $JSCompiler_temp_const$jscomp$0$$ = $APP.clojure.test.check.random.golden_gamma;
  var $or__5025__auto__$$ = $APP.clojure.test.check.random.longs.__GT_long($seed$$);
  if (!$APP.cljs.core.truth_($or__5025__auto__$$)) {
    throw $APP.cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Bad random seed!", new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$9753$seed, $seed$$], null));
  }
  return new $JSCompiler_temp_const$$($JSCompiler_temp_const$jscomp$0$$, $or__5025__auto__$$);
};
$APP.clojure.test.check.random.next_rng = function() {
  var $a$$ = $APP.cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$2455$state, $APP.clojure.test.check.random.make_java_util_splittable_random((new Date()).valueOf())], null));
  return function() {
    return cljs$cst$9754$returned.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2($a$$, function($map__114636__$1_p__114635_r1$jscomp$10_state$$) {
      $map__114636__$1_p__114635_r1$jscomp$10_state$$ = $APP.cljs.core.__destructure_map($map__114636__$1_p__114635_r1$jscomp$10_state$$);
      $map__114636__$1_p__114635_r1$jscomp$10_state$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114636__$1_p__114635_r1$jscomp$10_state$$, $APP.cljs$cst$2455$state);
      var $r2$$ = $APP.clojure.test.check.random.split($map__114636__$1_p__114635_r1$jscomp$10_state$$);
      $map__114636__$1_p__114635_r1$jscomp$10_state$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($r2$$, 0, null);
      $r2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($r2$$, 1, null);
      return new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$2455$state, $map__114636__$1_p__114635_r1$jscomp$10_state$$, cljs$cst$9754$returned, $r2$$], null);
    }));
  };
}();
$APP.clojure.test.check.random.make_random = function($var_args$$) {
  switch(arguments.length) {
    case 0:
      return $APP.clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();
    case 1:
      return $APP.clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
$APP.clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0 = function() {
  return $APP.clojure.test.check.random.next_rng();
};
$APP.clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1 = function($seed$$) {
  return $APP.clojure.test.check.random.make_java_util_splittable_random($seed$$);
};
$APP.clojure.test.check.random.make_random.cljs$lang$maxFixedArity = 1;
kixi.stats.distribution = {};
kixi.stats.distribution.non_neg_QMARK_ = $APP.cljs.core.complement($APP.cljs.core.neg_QMARK_);
kixi.stats.distribution.next_rng = $APP.cljs.core.comp.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.first, $APP.clojure.test.check.random.split);
kixi.stats.distribution.swap = function($coll$$, $i2$$) {
  var $i1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($i2$$, 0, null);
  $i2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($i2$$, 1, null);
  return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic($coll$$, $i2$$, $coll$$.cljs$core$IFn$_invoke$arity$1 ? $coll$$.cljs$core$IFn$_invoke$arity$1($i1$$) : $coll$$.call(null, $i1$$), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$i1$$, $coll$$.cljs$core$IFn$_invoke$arity$1 ? $coll$$.cljs$core$IFn$_invoke$arity$1($i2$$) : $coll$$.call(null, $i2$$)], 0));
};
kixi.stats.distribution.rand_int = function($a$$, $b$jscomp$1170_r$$, $rng$$) {
  $b$jscomp$1170_r$$ = $APP.clojure.test.check.random.rand_double($rng$$) * ($b$jscomp$1170_r$$ - $a$$);
  return $a$$ + $b$jscomp$1170_r$$ | 0;
};
kixi.stats.distribution.rand_normal = function($r1$jscomp$11_rng$$) {
  var $r2$$ = $APP.clojure.test.check.random.split($r1$jscomp$11_rng$$);
  $r1$jscomp$11_rng$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($r2$$, 0, null);
  $r2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($r2$$, 1, null);
  return kixi.stats.math.sqrt(-2 * kixi.stats.math.log($APP.clojure.test.check.random.rand_double($r1$jscomp$11_rng$$))) * kixi.stats.math.cos(2 * kixi.stats.math.PI * $APP.clojure.test.check.random.rand_double($r2$$));
};
kixi.stats.distribution.btrd_f = function($k$jscomp$1091_k_SINGLEQUOTE_$$) {
  switch($k$jscomp$1091_k_SINGLEQUOTE_$$) {
    case 0:
      return 0.08106146679532726;
    case 1:
      return 0.04134069595540929;
    case 2:
      return 0.02767792568499834;
    case 3:
      return 0.02079067210376509;
    case 4:
      return 0.01664469118982119;
    case 5:
      return 0.01387612882307075;
    case 6:
      return 0.01189670994589177;
    case 7:
      return 0.01041126526197209;
    case 8:
      return 0.009255462182712733;
    case 9:
      return 0.00833056343336287;
    default:
      $k$jscomp$1091_k_SINGLEQUOTE_$$ += 1;
      var $k2_SINGLEQUOTE_$$ = kixi.stats.math.sq($k$jscomp$1091_k_SINGLEQUOTE_$$);
      return (0.08333333333333333 - (0.002777777777777778 - 7.936507936507937E-4 / $k2_SINGLEQUOTE_$$) / $k2_SINGLEQUOTE_$$) / $k$jscomp$1091_k_SINGLEQUOTE_$$;
  }
};
kixi.stats.distribution.rand_binomial_btrd = function($n$$, $p$$, $rng$$) {
  if ($p$$ > 0.5) {
    return $n$$ - function() {
      var $G__114659$$ = 1 - $p$$;
      return kixi.stats.distribution.rand_binomial_btrd.cljs$core$IFn$_invoke$arity$3 ? kixi.stats.distribution.rand_binomial_btrd.cljs$core$IFn$_invoke$arity$3($n$$, $G__114659$$, $rng$$) : kixi.stats.distribution.rand_binomial_btrd.call(null, $n$$, $G__114659$$, $rng$$);
    }();
  }
  for (var $m$$ = kixi.stats.math.floor(($n$$ + 1) * $p$$) | 0, $q$$ = 1 - $p$$, $r$$ = $p$$ / $q$$, $nr$$ = ($n$$ + 1) * $r$$, $npq$$ = $n$$ * $p$$ * $q$$, $rnpq$$ = kixi.stats.math.sqrt($npq$$), $b$$ = 1.15 + 2.53 * $rnpq$$, $a$$ = -0.0873 + 0.0248 * $b$$ + 0.01 * $p$$, $c$$ = $n$$ * $p$$ + 0.5, $alpha$$ = (2.83 + 5.1 / $b$$) * $rnpq$$, $vr$$ = 0.92 - 4.2 / $b$$, $urvr$$ = 0.86 * $vr$$, $h$jscomp$368_p__$1$jscomp$50_rng__$1$$ = $rng$$;;) {
    var $v$$ = $APP.clojure.test.check.random.rand_double($h$jscomp$368_p__$1$jscomp$50_rng__$1$$);
    if ($v$$ <= $urvr$$) {
      var $nk$jscomp$1_u$$ = $v$$ / $vr$$ - 0.43;
      return kixi.stats.math.floor((2 * $a$$ / (0.5 - kixi.stats.math.abs($nk$jscomp$1_u$$)) + $b$$) * $nk$jscomp$1_u$$ + $c$$) | 0;
    }
    var $vec__114661$$ = $APP.clojure.test.check.random.split($h$jscomp$368_p__$1$jscomp$50_rng__$1$$), $r1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__114661$$, 0, null), $r2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__114661$$, 1, null), $vec__114664$$ = $v$$ >= $vr$$ ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.clojure.test.check.random.rand_double($r1$$) - 0.5, $v$$], null) : function() {
      var $u$$ = $v$$ / $vr$$ - 0.93;
      return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0.5 * ($u$$ > 0 ? 1 : -1) - $u$$, $APP.clojure.test.check.random.rand_double($r1$$) * $vr$$], null);
    }();
    $nk$jscomp$1_u$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__114664$$, 0, null);
    var $v__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__114664$$, 1, null), $us$$ = 0.5 - kixi.stats.math.abs($nk$jscomp$1_u$$), $k$$ = kixi.stats.math.floor(($a$$ / $us$$ * 2 + $b$$) * $nk$jscomp$1_u$$ + $c$$) | 0;
    if (0 <= $k$$ && $k$$ <= $n$$) {
      var $v__$2$$ = $v__$1$$ * ($alpha$$ / ($a$$ / kixi.stats.math.sq($us$$) + $b$$)), $f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$ = kixi.stats.math.abs($k$$ - $m$$);
      if ($f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$ <= 15) {
        if ($f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$ = function($rng__$1$$, $f$$, $v__$2$$, $km$$, $vec__114661$$, $r1$$, $r2$$, $vec__114664$$, $u$$, $v__$1$$, $us$$, $k$$, $v$$, $m$$, $q$$, $r$$, $nr$$, $npq$$, $rnpq$$, $b$$, $a$$, $c$$, $alpha$$, $vr$$, $urvr$$) {
          return function($x$$, $i$$) {
            return $x$$ * ($nr$$ / ($i$$ + 1) - $r$$);
          };
        }($h$jscomp$368_p__$1$jscomp$50_rng__$1$$, 1.0, $v__$2$$, $f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$, $vec__114661$$, $r1$$, $r2$$, $vec__114664$$, $nk$jscomp$1_u$$, $v__$1$$, $us$$, $k$$, $v$$, $m$$, $q$$, $r$$, $nr$$, $npq$$, $rnpq$$, $b$$, $a$$, $c$$, $alpha$$, $vr$$, $urvr$$), $v__$2$$ = $m$$ < $k$$ ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$, 
        1.0, $APP.cljs.core.range.cljs$core$IFn$_invoke$arity$2($m$$, $k$$)), $v__$2$$], null) : new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [1.0, $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$, $v__$2$$, $APP.cljs.core.range.cljs$core$IFn$_invoke$arity$2($k$$, $m$$))], null), $f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v__$2$$, 
        0, null), $v__$2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v__$2$$, 1, null), $v__$2$$ <= $f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$) {
          return $k$$;
        }
      } else {
        if ($v__$2$$ = kixi.stats.math.log($v__$2$$), $h$jscomp$368_p__$1$jscomp$50_rng__$1$$ = $f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$ / $npq$$ * ((($f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$ / 3 + 0.625) * $f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$ + 0.1666666666666667) / $npq$$ + 0.5), $f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$ = -$f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$ * $f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$ / 
        (2 * $npq$$), $v__$2$$ < $f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$ - $h$jscomp$368_p__$1$jscomp$50_rng__$1$$ || !($v__$2$$ > $f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$ + $h$jscomp$368_p__$1$jscomp$50_rng__$1$$) && ($f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$ = $n$$ - $m$$ + 1, $h$jscomp$368_p__$1$jscomp$50_rng__$1$$ = ($m$$ + 0.5) * kixi.stats.math.log(($m$$ + 1) / ($r$$ * $f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$)) + kixi.stats.distribution.btrd_f($m$$) + 
        kixi.stats.distribution.btrd_f($n$$ - $m$$), $nk$jscomp$1_u$$ = $n$$ - $k$$ + 1, $v__$2$$ <= $h$jscomp$368_p__$1$jscomp$50_rng__$1$$ + ($n$$ + 1) * kixi.stats.math.log($f__$1$jscomp$61_fx$jscomp$18_km$jscomp$1_nm$jscomp$4_t$$ / $nk$jscomp$1_u$$) + ($k$$ + 0.5) * kixi.stats.math.log($nk$jscomp$1_u$$ * $r$$ / ($k$$ + 1)) + -kixi.stats.distribution.btrd_f($k$$) + -kixi.stats.distribution.btrd_f($n$$ - $k$$))) {
          return $k$$;
        }
      }
    }
    $h$jscomp$368_p__$1$jscomp$50_rng__$1$$ = $r2$$;
  }
};
kixi.stats.distribution.rand_binomial_binv = function($G__114676_n$$, $G__114671$jscomp$inline_9081_G__114677_p$$, $G__114678_JSCompiler_inline_result$jscomp$3557_rng$$) {
  if ($G__114671$jscomp$inline_9081_G__114677_p$$ > 0.5) {
    return $G__114671$jscomp$inline_9081_G__114677_p$$ = 1 - $G__114671$jscomp$inline_9081_G__114677_p$$, $G__114678_JSCompiler_inline_result$jscomp$3557_rng$$ = kixi.stats.distribution.rand_binomial_binv.cljs$core$IFn$_invoke$arity$3 ? kixi.stats.distribution.rand_binomial_binv.cljs$core$IFn$_invoke$arity$3($G__114676_n$$, $G__114671$jscomp$inline_9081_G__114677_p$$, $G__114678_JSCompiler_inline_result$jscomp$3557_rng$$) : kixi.stats.distribution.rand_binomial_binv.call(null, $G__114676_n$$, $G__114671$jscomp$inline_9081_G__114677_p$$, 
    $G__114678_JSCompiler_inline_result$jscomp$3557_rng$$), $G__114676_n$$ - $G__114678_JSCompiler_inline_result$jscomp$3557_rng$$;
  }
  var $f$jscomp$1545_q$$ = 1 - $G__114671$jscomp$inline_9081_G__114677_p$$, $s$$ = $G__114671$jscomp$inline_9081_G__114677_p$$ / $f$jscomp$1545_q$$, $ix$$ = 0;
  $f$jscomp$1545_q$$ = kixi.stats.math.pow($f$jscomp$1545_q$$, $G__114676_n$$);
  for (var $G__114804_u$$ = $APP.clojure.test.check.random.rand_double($G__114678_JSCompiler_inline_result$jscomp$3557_rng$$);;) {
    if ($G__114804_u$$ < $f$jscomp$1545_q$$) {
      return $ix$$;
    }
    if ($ix$$ >= 110) {
      return $G__114678_JSCompiler_inline_result$jscomp$3557_rng$$ = kixi.stats.distribution.next_rng($G__114678_JSCompiler_inline_result$jscomp$3557_rng$$), kixi.stats.distribution.rand_binomial_binv.cljs$core$IFn$_invoke$arity$3 ? kixi.stats.distribution.rand_binomial_binv.cljs$core$IFn$_invoke$arity$3($G__114676_n$$, $G__114671$jscomp$inline_9081_G__114677_p$$, $G__114678_JSCompiler_inline_result$jscomp$3557_rng$$) : kixi.stats.distribution.rand_binomial_binv.call(null, $G__114676_n$$, $G__114671$jscomp$inline_9081_G__114677_p$$, 
      $G__114678_JSCompiler_inline_result$jscomp$3557_rng$$);
    }
    var $G__114803$$ = $f$jscomp$1545_q$$ * $s$$ * (($G__114676_n$$ - $ix$$) / ($ix$$ + 1));
    $G__114804_u$$ -= $f$jscomp$1545_q$$;
    $ix$$ += 1;
    $f$jscomp$1545_q$$ = $G__114803$$;
  }
};
kixi.stats.distribution.rand_binomial = function($n$$, $p$jscomp$556_p__$1$jscomp$51_y__5111__auto__$$, $rng$$) {
  $p$jscomp$556_p__$1$jscomp$51_y__5111__auto__$$ = $p$jscomp$556_p__$1$jscomp$51_y__5111__auto__$$ < 1.0 ? $p$jscomp$556_p__$1$jscomp$51_y__5111__auto__$$ : 1.0;
  $p$jscomp$556_p__$1$jscomp$51_y__5111__auto__$$ = 0.0 > $p$jscomp$556_p__$1$jscomp$51_y__5111__auto__$$ ? 0.0 : $p$jscomp$556_p__$1$jscomp$51_y__5111__auto__$$;
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($p$jscomp$556_p__$1$jscomp$51_y__5111__auto__$$, 0.0) ? 0 : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($p$jscomp$556_p__$1$jscomp$51_y__5111__auto__$$, 1.0) ? $n$$ : $n$$ * $p$jscomp$556_p__$1$jscomp$51_y__5111__auto__$$ < 14 ? kixi.stats.distribution.rand_binomial_binv($n$$, $p$jscomp$556_p__$1$jscomp$51_y__5111__auto__$$, $rng$$) : kixi.stats.distribution.rand_binomial_btrd($n$$, $p$jscomp$556_p__$1$jscomp$51_y__5111__auto__$$, $rng$$);
};
kixi.stats.distribution.rand_gamma = function($alpha$$, $rng$jscomp$54_v$$) {
  var $alpha_SINGLEQUOTE_$$ = $alpha$$ < 1 ? $alpha$$ + 1 : $alpha$$, $d$$ = $alpha_SINGLEQUOTE_$$ - 1.0 / 3.0, $c$$ = 1.0 / kixi.stats.math.sqrt(9.0 * $d$$);
  $rng$jscomp$54_v$$ = $APP.clojure.test.check.random.split($rng$jscomp$54_v$$);
  var $r1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($rng$jscomp$54_v$$, 0, null), $r2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($rng$jscomp$54_v$$, 1, null);
  $rng$jscomp$54_v$$ = function() {
    for (var $r1__$1_rng__$1$$ = $r1$$;;) {
      var $rng__$2$jscomp$inline_9087_vec__114688_x$$ = $APP.clojure.test.check.random.split($r1__$1_rng__$1$$);
      $r1__$1_rng__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($rng__$2$jscomp$inline_9087_vec__114688_x$$, 0, null);
      a: {
        for ($rng__$2$jscomp$inline_9087_vec__114688_x$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($rng__$2$jscomp$inline_9087_vec__114688_x$$, 1, null);;) {
          var $v$jscomp$1183_v__$1$jscomp$62_vec__114691_x$$ = kixi.stats.distribution.rand_normal($rng__$2$jscomp$inline_9087_vec__114688_x$$);
          var $u$jscomp$89_v$$ = $c$$ * $v$jscomp$1183_v__$1$jscomp$62_vec__114691_x$$ + 1;
          if ($u$jscomp$89_v$$ > 0) {
            $v$jscomp$1183_v__$1$jscomp$62_vec__114691_x$$ = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$v$jscomp$1183_v__$1$jscomp$62_vec__114691_x$$, $u$jscomp$89_v$$], null);
            break a;
          } else {
            $rng__$2$jscomp$inline_9087_vec__114688_x$$ = kixi.stats.distribution.next_rng($rng__$2$jscomp$inline_9087_vec__114688_x$$);
          }
        }
        $v$jscomp$1183_v__$1$jscomp$62_vec__114691_x$$ = void 0;
      }
      $rng__$2$jscomp$inline_9087_vec__114688_x$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$jscomp$1183_v__$1$jscomp$62_vec__114691_x$$, 0, null);
      $v$jscomp$1183_v__$1$jscomp$62_vec__114691_x$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$jscomp$1183_v__$1$jscomp$62_vec__114691_x$$, 1, null);
      $v$jscomp$1183_v__$1$jscomp$62_vec__114691_x$$ *= $v$jscomp$1183_v__$1$jscomp$62_vec__114691_x$$ * $v$jscomp$1183_v__$1$jscomp$62_vec__114691_x$$;
      $u$jscomp$89_v$$ = $APP.clojure.test.check.random.rand_double($r1__$1_rng__$1$$);
      $rng__$2$jscomp$inline_9087_vec__114688_x$$ *= $rng__$2$jscomp$inline_9087_vec__114688_x$$;
      if ($u$jscomp$89_v$$ < 1.0 - $rng__$2$jscomp$inline_9087_vec__114688_x$$ * $rng__$2$jscomp$inline_9087_vec__114688_x$$ * 0.331 || kixi.stats.math.log($u$jscomp$89_v$$) < 0.5 * $rng__$2$jscomp$inline_9087_vec__114688_x$$ + $d$$ * (1.0 - $v$jscomp$1183_v__$1$jscomp$62_vec__114691_x$$ + kixi.stats.math.log($v$jscomp$1183_v__$1$jscomp$62_vec__114691_x$$))) {
        return $v$jscomp$1183_v__$1$jscomp$62_vec__114691_x$$;
      }
      $r1__$1_rng__$1$$ = kixi.stats.distribution.next_rng($r1__$1_rng__$1$$);
    }
  }();
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($alpha$$, $alpha_SINGLEQUOTE_$$) ? $d$$ * $rng$jscomp$54_v$$ : kixi.stats.math.pow(function() {
    for (var $rng__$1$$ = $r2$$;;) {
      var $r$$ = $APP.clojure.test.check.random.rand_double($rng__$1$$);
      if ($r$$ > 0) {
        return $r$$;
      }
      $rng__$1$$ = kixi.stats.distribution.next_rng($rng__$1$$);
    }
  }(), 1.0 / $alpha$$) * $d$$ * $rng$jscomp$54_v$$;
};
kixi.stats.distribution.rand_beta = function($alpha$jscomp$22_u$$, $beta$$, $r1$jscomp$15_rng$$) {
  var $r2$$ = $APP.clojure.test.check.random.split($r1$jscomp$15_rng$$);
  $r1$jscomp$15_rng$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($r2$$, 0, null);
  $r2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($r2$$, 1, null);
  $alpha$jscomp$22_u$$ = kixi.stats.distribution.rand_gamma($alpha$jscomp$22_u$$, $r1$jscomp$15_rng$$);
  return $alpha$jscomp$22_u$$ / ($alpha$jscomp$22_u$$ + kixi.stats.distribution.rand_gamma($beta$$, $r2$$));
};
kixi.stats.distribution.rand_int_tuple = function($a$$, $b$$, $r1$jscomp$16_rng$$) {
  var $r2$$ = $APP.clojure.test.check.random.split($r1$jscomp$16_rng$$);
  $r1$jscomp$16_rng$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($r2$$, 0, null);
  $r2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($r2$$, 1, null);
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [kixi.stats.distribution.rand_int($a$$, $b$$, $r1$jscomp$16_rng$$), kixi.stats.distribution.rand_int($a$$, $b$$, $r2$$)], null);
};
kixi.stats.distribution.shuffle = function($coll$jscomp$1201_coll__$1$$, $rng$$) {
  $coll$jscomp$1201_coll__$1$$ = $APP.cljs.core.vector_QMARK_($coll$jscomp$1201_coll__$1$$) ? $coll$jscomp$1201_coll__$1$$ : $APP.cljs.core.vec($coll$jscomp$1201_coll__$1$$);
  var $n$$ = $APP.cljs.core.count($coll$jscomp$1201_coll__$1$$);
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(kixi.stats.distribution.swap, $coll$jscomp$1201_coll__$1$$, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__114700_SHARP_$$) {
    return kixi.stats.distribution.rand_int_tuple(0, $n$$, $p1__114700_SHARP_$$);
  }, $APP.clojure.test.check.random.split_n($rng$$, kixi.stats.distribution.rand_int(0, 2 * $n$$, $rng$$))));
};
kixi.stats.distribution.sampleable__GT_seq = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1 = function($distribution$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$2($distribution$$, $APP.clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0());
};
kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$2 = function($distribution$$, $rng$$) {
  return new $APP.cljs.core.LazySeq(null, function() {
    var $r2$$ = $APP.clojure.test.check.random.split($rng$$), $r1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($r2$$, 0, null);
    $r2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($r2$$, 1, null);
    return $APP.cljs.core.cons(kixi.stats.protocols.sample_1($distribution$$, $r1$$), kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$2($distribution$$, $r2$$));
  }, null, null);
};
kixi.stats.distribution.sampleable__GT_seq.cljs$lang$maxFixedArity = 2;
kixi.stats.distribution.default_sample_n = function($distribution$$, $n$$, $rng$$) {
  return $APP.cljs.core.take.cljs$core$IFn$_invoke$arity$2($n$$, kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$2($distribution$$, $rng$$));
};
kixi.stats.distribution.categorical_sample = function($G__114824_ks$jscomp$131_ks__$1$$, $G__114825_ps$jscomp$26_ps__$1$$, $G__114821_n$jscomp$886_n__$1$$, $G__114823_rng$jscomp$60_rng__$1$$) {
  for (var $G__114820_coll$$ = $APP.cljs.core.List.EMPTY, $G__114822_rem$$ = 1;;) {
    if ($APP.cljs.core.seq($G__114824_ks$jscomp$131_ks__$1$$) && $G__114822_rem$$ > 0) {
      var $k$$ = $APP.cljs.core.first($G__114824_ks$jscomp$131_ks__$1$$), $p$$ = $APP.cljs.core.first($G__114825_ps$jscomp$26_ps__$1$$), $JSCompiler_temp_const$jscomp$3559_x$$ = kixi.stats.protocols, $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$3559_x$$.sample_1;
      var $G__114708$jscomp$inline_9092_JSCompiler_inline_result$$ = $G__114821_n$jscomp$886_n__$1$$;
      var $G__114709$$ = $p$$ / $G__114822_rem$$;
      $G__114708$jscomp$inline_9092_JSCompiler_inline_result$$ = kixi.stats.distribution.__GT_Binomial.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.__GT_Binomial.cljs$core$IFn$_invoke$arity$2($G__114708$jscomp$inline_9092_JSCompiler_inline_result$$, $G__114709$$) : kixi.stats.distribution.__GT_Binomial.call(null, $G__114708$jscomp$inline_9092_JSCompiler_inline_result$$, $G__114709$$);
      $JSCompiler_temp_const$jscomp$3559_x$$ = $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$3559_x$$, $G__114708$jscomp$inline_9092_JSCompiler_inline_result$$, $G__114823_rng$jscomp$60_rng__$1$$);
      $G__114820_coll$$ = $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($G__114820_coll$$, $APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$jscomp$3559_x$$, $k$$));
      $G__114821_n$jscomp$886_n__$1$$ -= $JSCompiler_temp_const$jscomp$3559_x$$;
      $G__114822_rem$$ -= $p$$;
      $G__114823_rng$jscomp$60_rng__$1$$ = kixi.stats.distribution.next_rng($G__114823_rng$jscomp$60_rng__$1$$);
      $G__114824_ks$jscomp$131_ks__$1$$ = $APP.cljs.core.rest($G__114824_ks$jscomp$131_ks__$1$$);
      $G__114825_ps$jscomp$26_ps__$1$$ = $APP.cljs.core.rest($G__114825_ps$jscomp$26_ps__$1$$);
    } else {
      return $G__114820_coll$$;
    }
  }
};
kixi.stats.distribution.quantile_t = function($dof_x__$1$$, $p$$) {
  if ($p$$ <= 0.0) {
    return kixi.stats.math.negative_infinity;
  }
  if ($p$$ >= 1.0) {
    return kixi.stats.math.infinity;
  }
  var $JSCompiler_temp_const$jscomp$3562_x$$ = kixi.stats.math, $y__5114__auto__$$ = 1 - $p$$;
  $JSCompiler_temp_const$jscomp$3562_x$$ = $JSCompiler_temp_const$jscomp$3562_x$$.ibetainv.call($JSCompiler_temp_const$jscomp$3562_x$$, 2 * ($p$$ < $y__5114__auto__$$ ? $p$$ : $y__5114__auto__$$), 0.5 * $dof_x__$1$$, 0.5);
  $dof_x__$1$$ = kixi.stats.math.sqrt((1 - $JSCompiler_temp_const$jscomp$3562_x$$) / $JSCompiler_temp_const$jscomp$3562_x$$ * $dof_x__$1$$);
  return $p$$ > 0.5 ? $dof_x__$1$$ : -$dof_x__$1$$;
};
kixi.stats.distribution.cdf_t = function($dof$$, $x$$) {
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($x$$, kixi.stats.math.negative_infinity)) {
    return 0.0;
  }
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($x$$, kixi.stats.math.infinity)) {
    return 1.0;
  }
  var $dof2$$ = $dof$$ * 0.5;
  return kixi.stats.math.ibeta(($x$$ + kixi.stats.math.sqrt(kixi.stats.math.sq($x$$) + $dof$$)) / (2 * kixi.stats.math.sqrt(kixi.stats.math.sq($x$$) + $dof$$)), $dof2$$, $dof2$$);
};
kixi.stats.distribution.Uniform = function($a$$, $b$$) {
  this.a = $a$$;
  this.b = $b$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.Uniform.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Uniform.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$$, $rng$$) {
  return $APP.clojure.test.check.random.rand_double($rng$$) * (this.b - this.a) + this.a;
};
kixi.stats.distribution.Uniform.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($this$$$, $n$$, $rng$$) {
  return kixi.stats.distribution.default_sample_n(this, $n$$, $rng$$);
};
kixi.stats.distribution.Uniform.prototype.kixi$stats$protocols$PQuantile$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Uniform.prototype.kixi$stats$protocols$PQuantile$cdf$arity$2 = function($_$$, $x$$) {
  return $x$$ <= this.a ? 0.0 : $x$$ >= this.b ? 1.0 : ($x$$ - this.a) / (this.b - this.a);
};
kixi.stats.distribution.Uniform.prototype.kixi$stats$protocols$PQuantile$quantile$arity$2 = function($_$$, $p$$) {
  return $p$$ === 0 ? this.a : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($p$$, 1.0) ? this.b : this.a + $p$$ * (this.b - this.a);
};
kixi.stats.distribution.Uniform.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.Uniform.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1255$a, $APP.cljs$cst$2229$b], null);
};
kixi.stats.distribution.Uniform.cljs$lang$type = !0;
kixi.stats.distribution.Uniform.cljs$lang$ctorStr = "kixi.stats.distribution/Uniform";
kixi.stats.distribution.Uniform.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/Uniform");
};
kixi.stats.distribution.__GT_Uniform = function($a$$, $b$$) {
  return new kixi.stats.distribution.Uniform($a$$, $b$$);
};
kixi.stats.distribution.Exponential = function($rate$$) {
  this.rate = $rate$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.Exponential.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Exponential.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$$, $rng$$) {
  return -kixi.stats.math.log($APP.clojure.test.check.random.rand_double($rng$$)) / this.rate;
};
kixi.stats.distribution.Exponential.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($this$$$, $n$$, $rng$$) {
  return kixi.stats.distribution.default_sample_n(this, $n$$, $rng$$);
};
kixi.stats.distribution.Exponential.prototype.kixi$stats$protocols$PQuantile$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Exponential.prototype.kixi$stats$protocols$PQuantile$cdf$arity$2 = function($_$$, $x$$) {
  return 1.0 - kixi.stats.math.exp(-(this.rate * $x$$));
};
kixi.stats.distribution.Exponential.prototype.kixi$stats$protocols$PQuantile$quantile$arity$2 = function($_$$, $p$$) {
  return -kixi.stats.math.log(1.0 - $p$$) / this.rate;
};
kixi.stats.distribution.Exponential.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.Exponential.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9755$rate], null);
};
kixi.stats.distribution.Exponential.cljs$lang$type = !0;
kixi.stats.distribution.Exponential.cljs$lang$ctorStr = "kixi.stats.distribution/Exponential";
kixi.stats.distribution.Exponential.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/Exponential");
};
kixi.stats.distribution.__GT_Exponential = function($rate$$) {
  return new kixi.stats.distribution.Exponential($rate$$);
};
kixi.stats.distribution.Binomial = function($n$$, $p$$) {
  this.n = $n$$;
  this.p = $p$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.Binomial.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Binomial.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$$, $rng$$) {
  return kixi.stats.distribution.rand_binomial(this.n, this.p, $rng$$);
};
kixi.stats.distribution.Binomial.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($this$$$, $n__$1$$, $rng$$) {
  return kixi.stats.distribution.default_sample_n(this, $n__$1$$, $rng$$);
};
kixi.stats.distribution.Binomial.prototype.kixi$stats$protocols$PDiscreteRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Binomial.prototype.kixi$stats$protocols$PDiscreteRandomVariable$sample_frequencies$arity$3 = function($this$$$, $n_SINGLEQUOTE_$$, $rng$$) {
  return $APP.cljs.core.frequencies(this.kixi$stats$protocols$PRandomVariable$sample_n$arity$3(null, $n_SINGLEQUOTE_$$, $rng$$));
};
kixi.stats.distribution.Binomial.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.Binomial.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs$cst$1253$p], null);
};
kixi.stats.distribution.Binomial.cljs$lang$type = !0;
kixi.stats.distribution.Binomial.cljs$lang$ctorStr = "kixi.stats.distribution/Binomial";
kixi.stats.distribution.Binomial.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/Binomial");
};
kixi.stats.distribution.__GT_Binomial = function($n$$, $p$$) {
  return new kixi.stats.distribution.Binomial($n$$, $p$$);
};
kixi.stats.distribution.Bernoulli = function($p$$) {
  this.p = $p$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.Bernoulli.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Bernoulli.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$$, $rng$$) {
  return $APP.clojure.test.check.random.rand_double($rng$$) < this.p;
};
kixi.stats.distribution.Bernoulli.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($_$jscomp$2936_v$$, $n$$, $rng$$) {
  $_$jscomp$2936_v$$ = kixi.stats.distribution.__GT_Binomial($n$$, this.p).kixi$stats$protocols$PRandomVariable$sample_1$arity$2(null, $rng$$);
  return kixi.stats.distribution.shuffle($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2($_$jscomp$2936_v$$, !0), $APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2($n$$ - $_$jscomp$2936_v$$, !1)), $rng$$);
};
kixi.stats.distribution.Bernoulli.prototype.kixi$stats$protocols$PDiscreteRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Bernoulli.prototype.kixi$stats$protocols$PDiscreteRandomVariable$sample_frequencies$arity$3 = function($_$jscomp$2937_v$$, $n$$, $rng$$) {
  $_$jscomp$2937_v$$ = kixi.stats.distribution.__GT_Binomial($n$$, this.p).kixi$stats$protocols$PRandomVariable$sample_1$arity$2(null, $rng$$);
  return new $APP.cljs.core.PersistentArrayMap(null, 2, [!0, $_$jscomp$2937_v$$, !1, $n$$ - $_$jscomp$2937_v$$], null);
};
kixi.stats.distribution.Bernoulli.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.Bernoulli.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1253$p], null);
};
kixi.stats.distribution.Bernoulli.cljs$lang$type = !0;
kixi.stats.distribution.Bernoulli.cljs$lang$ctorStr = "kixi.stats.distribution/Bernoulli";
kixi.stats.distribution.Bernoulli.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/Bernoulli");
};
kixi.stats.distribution.__GT_Bernoulli = function($p$$) {
  return new kixi.stats.distribution.Bernoulli($p$$);
};
kixi.stats.distribution.Normal = function($mu$$, $sd$$) {
  this.mu = $mu$$;
  this.sd = $sd$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.Normal.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Normal.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$$, $rng$$) {
  return kixi.stats.distribution.rand_normal($rng$$) * this.sd + this.mu;
};
kixi.stats.distribution.Normal.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($this$$$, $n$$, $rng$$) {
  return kixi.stats.distribution.default_sample_n(this, $n$$, $rng$$);
};
kixi.stats.distribution.Normal.prototype.kixi$stats$protocols$PQuantile$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Normal.prototype.kixi$stats$protocols$PQuantile$cdf$arity$2 = function($_$$, $x$$) {
  return 0.5 * (1 + kixi.stats.math.erf(($x$$ - this.mu) / kixi.stats.math.sqrt(2 * this.sd * this.sd)));
};
kixi.stats.distribution.Normal.prototype.kixi$stats$protocols$PQuantile$quantile$arity$2 = function($_$$, $p$$) {
  return -1.4142135623730951 * this.sd * kixi.stats.math.erfcinv(2 * $p$$) + this.mu;
};
kixi.stats.distribution.Normal.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.Normal.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9756$mu, cljs$cst$9757$sd], null);
};
kixi.stats.distribution.Normal.cljs$lang$type = !0;
kixi.stats.distribution.Normal.cljs$lang$ctorStr = "kixi.stats.distribution/Normal";
kixi.stats.distribution.Normal.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/Normal");
};
kixi.stats.distribution.__GT_Normal = function($mu$$, $sd$$) {
  return new kixi.stats.distribution.Normal($mu$$, $sd$$);
};
kixi.stats.distribution.T = function($dof$$) {
  this.dof = $dof$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.T.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.T.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$jscomp$2941_r1$$, $r2$jscomp$18_rng$$) {
  $r2$jscomp$18_rng$$ = $APP.clojure.test.check.random.split($r2$jscomp$18_rng$$);
  $_$jscomp$2941_r1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($r2$jscomp$18_rng$$, 0, null);
  $r2$jscomp$18_rng$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($r2$jscomp$18_rng$$, 1, null);
  return kixi.stats.distribution.rand_normal($_$jscomp$2941_r1$$) * kixi.stats.math.sqrt(this.dof / (2 * kixi.stats.distribution.rand_gamma(0.5 * this.dof, $r2$jscomp$18_rng$$)));
};
kixi.stats.distribution.T.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($this$$$, $n$$, $rng$$) {
  return kixi.stats.distribution.default_sample_n(this, $n$$, $rng$$);
};
kixi.stats.distribution.T.prototype.kixi$stats$protocols$PQuantile$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.T.prototype.kixi$stats$protocols$PQuantile$cdf$arity$2 = function($_$$, $x$$) {
  return kixi.stats.distribution.cdf_t(this.dof, $x$$);
};
kixi.stats.distribution.T.prototype.kixi$stats$protocols$PQuantile$quantile$arity$2 = function($_$$, $p$$) {
  return kixi.stats.distribution.quantile_t(this.dof, $p$$);
};
kixi.stats.distribution.T.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.T.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9758$dof], null);
};
kixi.stats.distribution.T.cljs$lang$type = !0;
kixi.stats.distribution.T.cljs$lang$ctorStr = "kixi.stats.distribution/T";
kixi.stats.distribution.T.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/T");
};
kixi.stats.distribution.__GT_T = function($dof$$) {
  return new kixi.stats.distribution.T($dof$$);
};
kixi.stats.distribution.Gamma = function($shape$$, $scale$$) {
  this.shape = $shape$$;
  this.scale = $scale$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.Gamma.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Gamma.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$$, $rng$$) {
  return kixi.stats.distribution.rand_gamma(this.shape, $rng$$) * this.scale;
};
kixi.stats.distribution.Gamma.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($this$$$, $n$$, $rng$$) {
  return kixi.stats.distribution.default_sample_n(this, $n$$, $rng$$);
};
kixi.stats.distribution.Gamma.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.Gamma.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$3456$shape, $APP.cljs$cst$3509$scale], null);
};
kixi.stats.distribution.Gamma.cljs$lang$type = !0;
kixi.stats.distribution.Gamma.cljs$lang$ctorStr = "kixi.stats.distribution/Gamma";
kixi.stats.distribution.Gamma.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/Gamma");
};
kixi.stats.distribution.__GT_Gamma = function($shape$$, $scale$$) {
  return new kixi.stats.distribution.Gamma($shape$$, $scale$$);
};
kixi.stats.distribution.Beta = function($alpha$$, $beta$$) {
  this.alpha = $alpha$$;
  this.beta = $beta$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.Beta.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Beta.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$$, $rng$$) {
  return kixi.stats.distribution.rand_beta(this.alpha, this.beta, $rng$$);
};
kixi.stats.distribution.Beta.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($this$$$, $n$$, $rng$$) {
  return kixi.stats.distribution.default_sample_n(this, $n$$, $rng$$);
};
kixi.stats.distribution.Beta.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.Beta.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$4010$alpha, $APP.cljs$cst$7754$beta], null);
};
kixi.stats.distribution.Beta.cljs$lang$type = !0;
kixi.stats.distribution.Beta.cljs$lang$ctorStr = "kixi.stats.distribution/Beta";
kixi.stats.distribution.Beta.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/Beta");
};
kixi.stats.distribution.__GT_Beta = function($alpha$$, $beta$$) {
  return new kixi.stats.distribution.Beta($alpha$$, $beta$$);
};
kixi.stats.distribution.BetaBinomial = function($n$$, $alpha$$, $beta$$) {
  this.n = $n$$;
  this.alpha = $alpha$$;
  this.beta = $beta$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.BetaBinomial.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.BetaBinomial.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$jscomp$2946_p$jscomp$567_r1$$, $r2$jscomp$19_rng$$) {
  $r2$jscomp$19_rng$$ = $APP.clojure.test.check.random.split($r2$jscomp$19_rng$$);
  $_$jscomp$2946_p$jscomp$567_r1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($r2$jscomp$19_rng$$, 0, null);
  $r2$jscomp$19_rng$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($r2$jscomp$19_rng$$, 1, null);
  $_$jscomp$2946_p$jscomp$567_r1$$ = kixi.stats.distribution.rand_beta(this.alpha, this.beta, $_$jscomp$2946_p$jscomp$567_r1$$);
  return kixi.stats.distribution.rand_binomial(this.n, $_$jscomp$2946_p$jscomp$567_r1$$, $r2$jscomp$19_rng$$);
};
kixi.stats.distribution.BetaBinomial.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($this$$$, $n__$1$$, $rng$$) {
  return kixi.stats.distribution.default_sample_n(this, $n__$1$$, $rng$$);
};
kixi.stats.distribution.BetaBinomial.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.BetaBinomial.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs$cst$4010$alpha, $APP.cljs$cst$7754$beta], null);
};
kixi.stats.distribution.BetaBinomial.cljs$lang$type = !0;
kixi.stats.distribution.BetaBinomial.cljs$lang$ctorStr = "kixi.stats.distribution/BetaBinomial";
kixi.stats.distribution.BetaBinomial.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/BetaBinomial");
};
kixi.stats.distribution.__GT_BetaBinomial = function($n$$, $alpha$$, $beta$$) {
  return new kixi.stats.distribution.BetaBinomial($n$$, $alpha$$, $beta$$);
};
kixi.stats.distribution.ChiSquared = function($k$$) {
  this.k = $k$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.ChiSquared.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.ChiSquared.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$$, $rng$$) {
  return kixi.stats.distribution.rand_gamma(this.k / 2, $rng$$) * 2;
};
kixi.stats.distribution.ChiSquared.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($this$$$, $n$$, $rng$$) {
  return kixi.stats.distribution.default_sample_n(this, $n$$, $rng$$);
};
kixi.stats.distribution.ChiSquared.prototype.kixi$stats$protocols$PQuantile$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.ChiSquared.prototype.kixi$stats$protocols$PQuantile$cdf$arity$2 = function($_$$, $x$$) {
  return kixi.stats.math.lower_regularized_gamma(0.5 * this.k, 0.5 * $x$$);
};
kixi.stats.distribution.ChiSquared.prototype.kixi$stats$protocols$PQuantile$quantile$arity$2 = function($_$$, $p$$) {
  return 2.0 * kixi.stats.math.gamma_pinv($p$$, 0.5 * this.k);
};
kixi.stats.distribution.ChiSquared.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.ChiSquared.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1485$k], null);
};
kixi.stats.distribution.ChiSquared.cljs$lang$type = !0;
kixi.stats.distribution.ChiSquared.cljs$lang$ctorStr = "kixi.stats.distribution/ChiSquared";
kixi.stats.distribution.ChiSquared.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/ChiSquared");
};
kixi.stats.distribution.__GT_ChiSquared = function($k$$) {
  return new kixi.stats.distribution.ChiSquared($k$$);
};
kixi.stats.distribution.F = function($d1$$, $d2$$) {
  this.d1 = $d1$$;
  this.d2 = $d2$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.F.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.F.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$jscomp$2950_r1$jscomp$20_x1$$, $r2$jscomp$20_rng$jscomp$83_vec__114716_x2$$) {
  $r2$jscomp$20_rng$jscomp$83_vec__114716_x2$$ = $APP.clojure.test.check.random.split($r2$jscomp$20_rng$jscomp$83_vec__114716_x2$$);
  $_$jscomp$2950_r1$jscomp$20_x1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($r2$jscomp$20_rng$jscomp$83_vec__114716_x2$$, 0, null);
  $r2$jscomp$20_rng$jscomp$83_vec__114716_x2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($r2$jscomp$20_rng$jscomp$83_vec__114716_x2$$, 1, null);
  $_$jscomp$2950_r1$jscomp$20_x1$$ = kixi.stats.distribution.rand_gamma(this.d1 / 2, $_$jscomp$2950_r1$jscomp$20_x1$$) * 2;
  $r2$jscomp$20_rng$jscomp$83_vec__114716_x2$$ = kixi.stats.distribution.rand_gamma(this.d2 / 2, $r2$jscomp$20_rng$jscomp$83_vec__114716_x2$$) * 2;
  return $_$jscomp$2950_r1$jscomp$20_x1$$ / this.d1 / ($r2$jscomp$20_rng$jscomp$83_vec__114716_x2$$ / this.d2);
};
kixi.stats.distribution.F.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($this$$$, $n$$, $rng$$) {
  return kixi.stats.distribution.default_sample_n(this, $n$$, $rng$$);
};
kixi.stats.distribution.F.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.F.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$3487$d1, $APP.cljs$cst$3488$d2], null);
};
kixi.stats.distribution.F.cljs$lang$type = !0;
kixi.stats.distribution.F.cljs$lang$ctorStr = "kixi.stats.distribution/F";
kixi.stats.distribution.F.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/F");
};
kixi.stats.distribution.__GT_F = function($d1$$, $d2$$) {
  return new kixi.stats.distribution.F($d1$$, $d2$$);
};
kixi.stats.distribution.Poisson = function($lambda$$) {
  this.lambda = $lambda$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.Poisson.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Poisson.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$jscomp$2951_l$$, $G__114835_rng$jscomp$85_rng__$1$$) {
  $_$jscomp$2951_l$$ = kixi.stats.math.exp(-this.lambda);
  for (var $G__114833_p$jscomp$569_p__$1$$ = 1, $G__114834_k$$ = 0;;) {
    if ($G__114833_p$jscomp$569_p__$1$$ *= $APP.clojure.test.check.random.rand_double($G__114835_rng$jscomp$85_rng__$1$$), $G__114833_p$jscomp$569_p__$1$$ > $_$jscomp$2951_l$$) {
      $G__114834_k$$ += 1, $G__114835_rng$jscomp$85_rng__$1$$ = kixi.stats.distribution.next_rng($G__114835_rng$jscomp$85_rng__$1$$);
    } else {
      return $G__114834_k$$;
    }
  }
};
kixi.stats.distribution.Poisson.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($this$$$, $n$$, $rng$$) {
  return kixi.stats.distribution.default_sample_n(this, $n$$, $rng$$);
};
kixi.stats.distribution.Poisson.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.Poisson.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9759$lambda], null);
};
kixi.stats.distribution.Poisson.cljs$lang$type = !0;
kixi.stats.distribution.Poisson.cljs$lang$ctorStr = "kixi.stats.distribution/Poisson";
kixi.stats.distribution.Poisson.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/Poisson");
};
kixi.stats.distribution.__GT_Poisson = function($lambda$$) {
  return new kixi.stats.distribution.Poisson($lambda$$);
};
kixi.stats.distribution.Weibull = function($shape$$, $scale$$) {
  this.shape = $shape$$;
  this.scale = $scale$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.Weibull.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Weibull.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$$, $rng$$) {
  return kixi.stats.math.pow(-kixi.stats.math.log($APP.clojure.test.check.random.rand_double($rng$$)), 1 / this.shape) * this.scale;
};
kixi.stats.distribution.Weibull.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($this$$$, $n$$, $rng$$) {
  return kixi.stats.distribution.default_sample_n(this, $n$$, $rng$$);
};
kixi.stats.distribution.Weibull.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.Weibull.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$3456$shape, $APP.cljs$cst$3509$scale], null);
};
kixi.stats.distribution.Weibull.cljs$lang$type = !0;
kixi.stats.distribution.Weibull.cljs$lang$ctorStr = "kixi.stats.distribution/Weibull";
kixi.stats.distribution.Weibull.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/Weibull");
};
kixi.stats.distribution.__GT_Weibull = function($shape$$, $scale$$) {
  return new kixi.stats.distribution.Weibull($shape$$, $scale$$);
};
kixi.stats.distribution.Categorical = function($ks$$, $ps$$) {
  this.ks = $ks$$;
  this.ps = $ps$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.Categorical.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Categorical.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$$, $rng$$) {
  return $APP.cljs.core.first(kixi.stats.distribution.categorical_sample(this.ks, this.ps, 1, $rng$$));
};
kixi.stats.distribution.Categorical.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($_$$, $n$$, $rng$$) {
  return kixi.stats.distribution.shuffle(kixi.stats.distribution.categorical_sample(this.ks, this.ps, $n$$, $rng$$), $rng$$);
};
kixi.stats.distribution.Categorical.prototype.kixi$stats$protocols$PDiscreteRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Categorical.prototype.kixi$stats$protocols$PDiscreteRandomVariable$sample_frequencies$arity$3 = function($G__114836__$jscomp$2955_coll$$, $G__114837_n$jscomp$904_n__$1$$, $G__114839_rng$jscomp$91_rng__$1$$) {
  $G__114836__$jscomp$2955_coll$$ = $APP.cljs.core.transient$($APP.cljs.core.PersistentArrayMap.EMPTY);
  for (var $G__114838_rem$$ = 1, $G__114840_ks__$1$$ = this.ks, $G__114841_ps__$1$$ = this.ps;;) {
    if ($APP.cljs.core.seq($G__114840_ks__$1$$) && $G__114838_rem$$ > 0) {
      var $k$$ = $APP.cljs.core.first($G__114840_ks__$1$$), $p$$ = $APP.cljs.core.first($G__114841_ps__$1$$), $x$$ = kixi.stats.distribution.rand_binomial($G__114837_n$jscomp$904_n__$1$$, $p$$ / $G__114838_rem$$, $G__114839_rng$jscomp$91_rng__$1$$);
      $G__114836__$jscomp$2955_coll$$ = $APP.cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3($G__114836__$jscomp$2955_coll$$, $k$$, $x$$);
      $G__114837_n$jscomp$904_n__$1$$ -= $x$$;
      $G__114838_rem$$ -= $p$$;
      $G__114839_rng$jscomp$91_rng__$1$$ = kixi.stats.distribution.next_rng($G__114839_rng$jscomp$91_rng__$1$$);
      $G__114840_ks__$1$$ = $APP.cljs.core.rest($G__114840_ks__$1$$);
      $G__114841_ps__$1$$ = $APP.cljs.core.rest($G__114841_ps__$1$$);
    } else {
      return $APP.cljs.core.persistent_BANG_($G__114836__$jscomp$2955_coll$$);
    }
  }
};
kixi.stats.distribution.Categorical.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.Categorical.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$5138$ks, cljs$cst$9760$ps], null);
};
kixi.stats.distribution.Categorical.cljs$lang$type = !0;
kixi.stats.distribution.Categorical.cljs$lang$ctorStr = "kixi.stats.distribution/Categorical";
kixi.stats.distribution.Categorical.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/Categorical");
};
kixi.stats.distribution.__GT_Categorical = function($ks$$, $ps$$) {
  return new kixi.stats.distribution.Categorical($ks$$, $ps$$);
};
kixi.stats.distribution.Multinomial = function($n$$, $ps$$) {
  this.n = $n$$;
  this.ps = $ps$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.Multinomial.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Multinomial.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($G__114842__$jscomp$2956_coll$$, $G__114845_rng$jscomp$92_rng__$1$$) {
  $G__114842__$jscomp$2956_coll$$ = $APP.cljs.core.transient$($APP.cljs.core.PersistentVector.EMPTY);
  for (var $G__114843_n__$1$$ = this.n, $G__114844_rem$$ = 1, $G__114846_ps__$1$$ = this.ps;;) {
    if ($APP.cljs.core.seq($G__114846_ps__$1$$) && $G__114844_rem$$ > 0) {
      var $p$$ = $APP.cljs.core.first($G__114846_ps__$1$$), $x$$ = kixi.stats.distribution.rand_binomial($G__114843_n__$1$$, $p$$ / $G__114844_rem$$, $G__114845_rng$jscomp$92_rng__$1$$);
      $G__114842__$jscomp$2956_coll$$ = $APP.cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2($G__114842__$jscomp$2956_coll$$, $x$$);
      $G__114843_n__$1$$ -= $x$$;
      $G__114844_rem$$ -= $p$$;
      $G__114845_rng$jscomp$92_rng__$1$$ = kixi.stats.distribution.next_rng($G__114845_rng$jscomp$92_rng__$1$$);
      $G__114846_ps__$1$$ = $APP.cljs.core.rest($G__114846_ps__$1$$);
    } else {
      return $APP.cljs.core.persistent_BANG_($G__114842__$jscomp$2956_coll$$);
    }
  }
};
kixi.stats.distribution.Multinomial.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($this$$$, $n__$1$$, $rng$$) {
  return kixi.stats.distribution.default_sample_n(this, $n__$1$$, $rng$$);
};
kixi.stats.distribution.Multinomial.prototype.kixi$stats$protocols$PDiscreteRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Multinomial.prototype.kixi$stats$protocols$PDiscreteRandomVariable$sample_frequencies$arity$3 = function($this$$$, $n__$1$$, $rng$$) {
  return $APP.cljs.core.frequencies(this.kixi$stats$protocols$PRandomVariable$sample_n$arity$3(null, $n__$1$$, $rng$$));
};
kixi.stats.distribution.Multinomial.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.Multinomial.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, cljs$cst$9760$ps], null);
};
kixi.stats.distribution.Multinomial.cljs$lang$type = !0;
kixi.stats.distribution.Multinomial.cljs$lang$ctorStr = "kixi.stats.distribution/Multinomial";
kixi.stats.distribution.Multinomial.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/Multinomial");
};
kixi.stats.distribution.__GT_Multinomial = function($n$$, $ps$$) {
  return new kixi.stats.distribution.Multinomial($n$$, $ps$$);
};
kixi.stats.distribution.Dirichlet = function($as$$) {
  this.as = $as$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.Dirichlet.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Dirichlet.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$jscomp$2957_rs$jscomp$14_xs$$, $rng$$) {
  $_$jscomp$2957_rs$jscomp$14_xs$$ = $APP.clojure.test.check.random.split_n($rng$$, $APP.cljs.core.count(this.as));
  $_$jscomp$2957_rs$jscomp$14_xs$$ = $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$3(function($p1__114719_SHARP_$$, $p2__114720_SHARP_$$) {
    return kixi.stats.distribution.rand_gamma($p1__114719_SHARP_$$, $p2__114720_SHARP_$$);
  }, this.as, $_$jscomp$2957_rs$jscomp$14_xs$$);
  var $s$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._PLUS_, $_$jscomp$2957_rs$jscomp$14_xs$$);
  return $APP.cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(function($p1__114721_SHARP_$$) {
    return $p1__114721_SHARP_$$ / $s$$;
  }, $_$jscomp$2957_rs$jscomp$14_xs$$);
};
kixi.stats.distribution.Dirichlet.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($this$$$, $n$$, $rng$$) {
  return kixi.stats.distribution.default_sample_n(this, $n$$, $rng$$);
};
kixi.stats.distribution.Dirichlet.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.Dirichlet.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$4543$as], null);
};
kixi.stats.distribution.Dirichlet.cljs$lang$type = !0;
kixi.stats.distribution.Dirichlet.cljs$lang$ctorStr = "kixi.stats.distribution/Dirichlet";
kixi.stats.distribution.Dirichlet.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/Dirichlet");
};
kixi.stats.distribution.__GT_Dirichlet = function($as$$) {
  return new kixi.stats.distribution.Dirichlet($as$$);
};
kixi.stats.distribution.DirichletMultinomial = function($n$$, $as$$) {
  this.n = $n$$;
  this.as = $as$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.DirichletMultinomial.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.DirichletMultinomial.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$jscomp$2958_ps$jscomp$31_r1$$, $r2$jscomp$21_rng$$) {
  $r2$jscomp$21_rng$$ = $APP.clojure.test.check.random.split($r2$jscomp$21_rng$$);
  $_$jscomp$2958_ps$jscomp$31_r1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($r2$jscomp$21_rng$$, 0, null);
  $r2$jscomp$21_rng$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($r2$jscomp$21_rng$$, 1, null);
  $_$jscomp$2958_ps$jscomp$31_r1$$ = kixi.stats.distribution.__GT_Dirichlet(this.as).kixi$stats$protocols$PRandomVariable$sample_1$arity$2(null, $_$jscomp$2958_ps$jscomp$31_r1$$);
  return kixi.stats.distribution.__GT_Multinomial(this.n, $_$jscomp$2958_ps$jscomp$31_r1$$).kixi$stats$protocols$PRandomVariable$sample_1$arity$2(null, $r2$jscomp$21_rng$$);
};
kixi.stats.distribution.DirichletMultinomial.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($this$$$, $n__$1$$, $rng$$) {
  return kixi.stats.distribution.default_sample_n(this, $n__$1$$, $rng$$);
};
kixi.stats.distribution.DirichletMultinomial.prototype.kixi$stats$protocols$PDiscreteRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.DirichletMultinomial.prototype.kixi$stats$protocols$PDiscreteRandomVariable$sample_frequencies$arity$3 = function($this$$$, $n__$1$$, $rng$$) {
  return $APP.cljs.core.frequencies(this.kixi$stats$protocols$PRandomVariable$sample_n$arity$3(null, $n__$1$$, $rng$$));
};
kixi.stats.distribution.DirichletMultinomial.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.DirichletMultinomial.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs$cst$4543$as], null);
};
kixi.stats.distribution.DirichletMultinomial.cljs$lang$type = !0;
kixi.stats.distribution.DirichletMultinomial.cljs$lang$ctorStr = "kixi.stats.distribution/DirichletMultinomial";
kixi.stats.distribution.DirichletMultinomial.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/DirichletMultinomial");
};
kixi.stats.distribution.__GT_DirichletMultinomial = function($n$$, $as$$) {
  return new kixi.stats.distribution.DirichletMultinomial($n$$, $as$$);
};
kixi.stats.distribution.Cauchy = function($location$$, $scale$$) {
  this.location = $location$$;
  this.scale = $scale$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.Cauchy.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Cauchy.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$$, $rng$$) {
  return this.location + this.scale * kixi.stats.math.tan(kixi.stats.math.PI * ($APP.clojure.test.check.random.rand_double($rng$$) - 0.5));
};
kixi.stats.distribution.Cauchy.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($this$$$, $n$$, $rng$$) {
  return kixi.stats.distribution.default_sample_n(this, $n$$, $rng$$);
};
kixi.stats.distribution.Cauchy.prototype.kixi$stats$protocols$PQuantile$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Cauchy.prototype.kixi$stats$protocols$PQuantile$cdf$arity$2 = function($_$$, $x$$) {
  return 0.5 + kixi.stats.math.atan(($x$$ - this.location) / this.scale) / kixi.stats.math.PI;
};
kixi.stats.distribution.Cauchy.prototype.kixi$stats$protocols$PQuantile$quantile$arity$2 = function($_$$, $p$$) {
  return this.location + this.scale * kixi.stats.math.tan(kixi.stats.math.PI * ($p$$ - 0.5));
};
kixi.stats.distribution.Cauchy.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.Cauchy.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$6052$location, $APP.cljs$cst$3509$scale], null);
};
kixi.stats.distribution.Cauchy.cljs$lang$type = !0;
kixi.stats.distribution.Cauchy.cljs$lang$ctorStr = "kixi.stats.distribution/Cauchy";
kixi.stats.distribution.Cauchy.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/Cauchy");
};
kixi.stats.distribution.__GT_Cauchy = function($location$$, $scale$$) {
  return new kixi.stats.distribution.Cauchy($location$$, $scale$$);
};
kixi.stats.distribution.LogNormal = function($mu$$, $sd$$) {
  this.mu = $mu$$;
  this.sd = $sd$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.LogNormal.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.LogNormal.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$$, $rng$$) {
  return kixi.stats.math.exp(kixi.stats.distribution.rand_normal($rng$$) * this.sd + this.mu);
};
kixi.stats.distribution.LogNormal.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($this$$$, $n$$, $rng$$) {
  return kixi.stats.distribution.default_sample_n(this, $n$$, $rng$$);
};
kixi.stats.distribution.LogNormal.prototype.kixi$stats$protocols$PQuantile$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.LogNormal.prototype.kixi$stats$protocols$PQuantile$cdf$arity$2 = function($_$$, $x$$) {
  return 0.5 * (1 + kixi.stats.math.erf((kixi.stats.math.log($x$$) - this.mu) / kixi.stats.math.sqrt(2 * this.sd * this.sd)));
};
kixi.stats.distribution.LogNormal.prototype.kixi$stats$protocols$PQuantile$quantile$arity$2 = function($_$$, $p$$) {
  return kixi.stats.math.exp(-1.4142135623730951 * this.sd * kixi.stats.math.erfcinv(2 * $p$$) + this.mu);
};
kixi.stats.distribution.LogNormal.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.LogNormal.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9756$mu, cljs$cst$9757$sd], null);
};
kixi.stats.distribution.LogNormal.cljs$lang$type = !0;
kixi.stats.distribution.LogNormal.cljs$lang$ctorStr = "kixi.stats.distribution/LogNormal";
kixi.stats.distribution.LogNormal.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/LogNormal");
};
kixi.stats.distribution.__GT_LogNormal = function($mu$$, $sd$$) {
  return new kixi.stats.distribution.LogNormal($mu$$, $sd$$);
};
kixi.stats.distribution.Pareto = function($scale$$, $shape$$) {
  this.scale = $scale$$;
  this.shape = $shape$$;
  this.cljs$lang$protocol_mask$partition0$ = 8388608;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.distribution.Pareto.prototype.kixi$stats$protocols$PRandomVariable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Pareto.prototype.kixi$stats$protocols$PRandomVariable$sample_1$arity$2 = function($_$$, $rng$$) {
  return this.scale / kixi.stats.math.pow($APP.clojure.test.check.random.rand_double($rng$$), 1 / this.shape);
};
kixi.stats.distribution.Pareto.prototype.kixi$stats$protocols$PRandomVariable$sample_n$arity$3 = function($this$$$, $n$$, $rng$$) {
  return kixi.stats.distribution.default_sample_n(this, $n$$, $rng$$);
};
kixi.stats.distribution.Pareto.prototype.kixi$stats$protocols$PQuantile$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.distribution.Pareto.prototype.kixi$stats$protocols$PQuantile$cdf$arity$2 = function($_$$, $x$$) {
  return this.scale < $x$$ ? 1 - kixi.stats.math.pow(this.scale / $x$$, this.shape) : 0.0;
};
kixi.stats.distribution.Pareto.prototype.kixi$stats$protocols$PQuantile$quantile$arity$2 = function($_$$, $p$$) {
  return this.scale / kixi.stats.math.pow(1 - $p$$, 1 / this.shape);
};
kixi.stats.distribution.Pareto.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this$$$) {
  return kixi.stats.distribution.sampleable__GT_seq.cljs$core$IFn$_invoke$arity$1(this);
};
kixi.stats.distribution.Pareto.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$3509$scale, $APP.cljs$cst$3456$shape], null);
};
kixi.stats.distribution.Pareto.cljs$lang$type = !0;
kixi.stats.distribution.Pareto.cljs$lang$ctorStr = "kixi.stats.distribution/Pareto";
kixi.stats.distribution.Pareto.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.distribution/Pareto");
};
kixi.stats.distribution.__GT_Pareto = function($scale$$, $shape$$) {
  return new kixi.stats.distribution.Pareto($scale$$, $shape$$);
};
kixi.stats.distribution.minimum = kixi.stats.protocols.minimum;
kixi.stats.distribution.maximum = kixi.stats.protocols.maximum;
kixi.stats.distribution.quantile = kixi.stats.protocols.quantile;
kixi.stats.distribution.cdf = kixi.stats.protocols.cdf;
kixi.stats.distribution.iqr = function($distribution$$) {
  return (kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2($distribution$$, 0.75) : kixi.stats.distribution.quantile.call(null, $distribution$$, 0.75)) - (kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2($distribution$$, 0.25) : kixi.stats.distribution.quantile.call(null, $distribution$$, 0.25));
};
kixi.stats.distribution.median = function($distribution$$) {
  return kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2($distribution$$, 0.5) : kixi.stats.distribution.quantile.call(null, $distribution$$, 0.5);
};
kixi.stats.distribution.summary = function($JSCompiler_temp_const$jscomp$3566_distribution$$) {
  var $q1$$ = kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$jscomp$3566_distribution$$, 0.25) : kixi.stats.distribution.quantile.call(null, $JSCompiler_temp_const$jscomp$3566_distribution$$, 0.25), $q3$$ = kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$jscomp$3566_distribution$$, 0.75) : kixi.stats.distribution.quantile.call(null, 
  $JSCompiler_temp_const$jscomp$3566_distribution$$, 0.75), $JSCompiler_temp_const$$ = $APP.cljs.core.PersistentArrayMap, $JSCompiler_temp_const$jscomp$0$$ = kixi.stats.distribution.minimum.cljs$core$IFn$_invoke$arity$1 ? kixi.stats.distribution.minimum.cljs$core$IFn$_invoke$arity$1($JSCompiler_temp_const$jscomp$3566_distribution$$) : kixi.stats.distribution.minimum.call(null, $JSCompiler_temp_const$jscomp$3566_distribution$$), $JSCompiler_temp_const$jscomp$1$$ = kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2 ? 
  kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$jscomp$3566_distribution$$, 0.5) : kixi.stats.distribution.quantile.call(null, $JSCompiler_temp_const$jscomp$3566_distribution$$, 0.5);
  $JSCompiler_temp_const$jscomp$3566_distribution$$ = kixi.stats.distribution.maximum.cljs$core$IFn$_invoke$arity$1 ? kixi.stats.distribution.maximum.cljs$core$IFn$_invoke$arity$1($JSCompiler_temp_const$jscomp$3566_distribution$$) : kixi.stats.distribution.maximum.call(null, $JSCompiler_temp_const$jscomp$3566_distribution$$);
  var $JSCompiler_temp_const$jscomp$2$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$3$$ = $JSCompiler_temp_const$jscomp$2$$.truth_;
  var $JSCompiler_inline_result$$ = $APP.cljs.core.truth_($q1$$) ? $q3$$ : $q1$$;
  return new $JSCompiler_temp_const$$(null, 6, [$APP.cljs$cst$1816$min, $JSCompiler_temp_const$jscomp$0$$, cljs$cst$9761$q1, $q1$$, cljs$cst$9762$median, $JSCompiler_temp_const$jscomp$1$$, cljs$cst$9763$q3, $q3$$, $APP.cljs$cst$1533$max, $JSCompiler_temp_const$jscomp$3566_distribution$$, cljs$cst$9764$iqr, $JSCompiler_temp_const$jscomp$3$$.call($JSCompiler_temp_const$jscomp$2$$, $JSCompiler_inline_result$$) ? $q3$$ - $q1$$ : null], null);
};
kixi.stats.distribution.uniform = function($a$$) {
  var $b$$ = $APP.cljs.core.__destructure_map($a$$);
  $a$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($b$$, $APP.cljs$cst$2200$a);
  $b$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($b$$, $APP.cljs$cst$3299$b);
  return kixi.stats.distribution.__GT_Uniform($a$$, $b$$);
};
kixi.stats.distribution.exponential = function($map__114728__$1_p__114727_rate$$) {
  $map__114728__$1_p__114727_rate$$ = $APP.cljs.core.__destructure_map($map__114728__$1_p__114727_rate$$);
  $map__114728__$1_p__114727_rate$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114728__$1_p__114727_rate$$, cljs$cst$9765$rate);
  return kixi.stats.distribution.__GT_Exponential($map__114728__$1_p__114727_rate$$);
};
kixi.stats.distribution.bernoulli = function($map__114730__$1_p$$) {
  $map__114730__$1_p$$ = $APP.cljs.core.__destructure_map($map__114730__$1_p$$);
  $map__114730__$1_p$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114730__$1_p$$, $APP.cljs$cst$1455$p);
  return kixi.stats.distribution.__GT_Bernoulli($map__114730__$1_p$$);
};
kixi.stats.distribution.binomial = function($n$$) {
  var $map__114732__$1_p$$ = $APP.cljs.core.__destructure_map($n$$);
  $n$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114732__$1_p$$, $APP.cljs$cst$1630$n);
  $map__114732__$1_p$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114732__$1_p$$, $APP.cljs$cst$1455$p);
  return kixi.stats.distribution.__GT_Binomial($n$$, $map__114732__$1_p$$);
};
kixi.stats.distribution.normal = function($location__$1_p__114733$$) {
  var $map__114734__$1_sd$$ = $APP.cljs.core.__destructure_map($location__$1_p__114733$$);
  $location__$1_p__114733$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114734__$1_sd$$, $APP.cljs$cst$6520$location);
  var $scale$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114734__$1_sd$$, $APP.cljs$cst$3417$scale), $mu$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114734__$1_sd$$, cljs$cst$9766$mu);
  $map__114734__$1_sd$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114734__$1_sd$$, cljs$cst$9767$sd);
  return kixi.stats.distribution.__GT_Normal($APP.cljs.core.truth_($location__$1_p__114733$$) ? $location__$1_p__114733$$ : $mu$$, $APP.cljs.core.truth_($scale$$) ? $scale$$ : $map__114734__$1_sd$$);
};
kixi.stats.distribution.t = function($map__114736__$1_p__114735_v$$) {
  $map__114736__$1_p__114735_v$$ = $APP.cljs.core.__destructure_map($map__114736__$1_p__114735_v$$);
  $map__114736__$1_p__114735_v$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114736__$1_p__114735_v$$, $APP.cljs$cst$1438$v);
  return kixi.stats.distribution.__GT_T($map__114736__$1_p__114735_v$$);
};
kixi.stats.distribution.gamma = function($p__114737_shape$$) {
  var $JSCompiler_temp_const$$ = $APP.cljs.core.__destructure_map($p__114737_shape$$);
  $p__114737_shape$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($JSCompiler_temp_const$$, $APP.cljs$cst$3393$shape, 1.0);
  var $JSCompiler_inline_result$jscomp$3573_scale$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$$, $APP.cljs$cst$3417$scale), $rate$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($JSCompiler_temp_const$$, cljs$cst$9765$rate);
  $JSCompiler_temp_const$$ = kixi.stats.distribution;
  var $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.__GT_Gamma;
  $JSCompiler_inline_result$jscomp$3573_scale$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$3573_scale$$) ? $JSCompiler_inline_result$jscomp$3573_scale$$ : 1.0 / $rate$$;
  return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $p__114737_shape$$, $JSCompiler_inline_result$jscomp$3573_scale$$);
};
kixi.stats.distribution.beta = function($alpha$$) {
  var $beta$$ = $APP.cljs.core.__destructure_map($alpha$$);
  $alpha$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($beta$$, $APP.cljs$cst$4015$alpha, 1.0);
  $beta$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($beta$$, $APP.cljs$cst$6916$beta, 1.0);
  return kixi.stats.distribution.__GT_Beta($alpha$$, $beta$$);
};
kixi.stats.distribution.beta_binomial = function($n$$) {
  var $beta$$ = $APP.cljs.core.__destructure_map($n$$);
  $n$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($beta$$, $APP.cljs$cst$1630$n);
  var $alpha$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($beta$$, $APP.cljs$cst$4015$alpha, 1.0);
  $beta$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($beta$$, $APP.cljs$cst$6916$beta, 1.0);
  return kixi.stats.distribution.__GT_BetaBinomial($n$$, $alpha$$, $beta$$);
};
kixi.stats.distribution.weibull = function($p__114743_shape$$) {
  var $map__114744__$1_scale$$ = $APP.cljs.core.__destructure_map($p__114743_shape$$);
  $p__114743_shape$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($map__114744__$1_scale$$, $APP.cljs$cst$3393$shape, 1.0);
  $map__114744__$1_scale$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($map__114744__$1_scale$$, $APP.cljs$cst$3417$scale, 1.0);
  return kixi.stats.distribution.__GT_Weibull($p__114743_shape$$, $map__114744__$1_scale$$);
};
kixi.stats.distribution.chi_squared = function($k$$) {
  $k$$ = $APP.cljs.core.__destructure_map($k$$);
  $k$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($k$$, $APP.cljs$cst$1484$k);
  return kixi.stats.distribution.__GT_ChiSquared($k$$);
};
kixi.stats.distribution.f = function($d1$$) {
  var $d2$$ = $APP.cljs.core.__destructure_map($d1$$);
  $d1$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($d2$$, cljs$cst$9768$d1);
  $d2$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($d2$$, cljs$cst$9769$d2);
  return kixi.stats.distribution.__GT_F($d1$$, $d2$$);
};
kixi.stats.distribution.poisson = function($lambda$$) {
  $lambda$$ = $APP.cljs.core.__destructure_map($lambda$$);
  $lambda$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($lambda$$, cljs$cst$9770$lambda);
  return kixi.stats.distribution.__GT_Poisson($lambda$$);
};
kixi.stats.distribution.categorical = function($category_probs_ks$$) {
  var $ps$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.map, $APP.cljs.core.vector, $category_probs_ks$$);
  $category_probs_ks$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($ps$$, 0, null);
  $ps$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($ps$$, 1, null);
  return kixi.stats.distribution.__GT_Categorical($category_probs_ks$$, $ps$$);
};
kixi.stats.distribution.multinomial = function($n$$) {
  var $map__114757__$1_probs$$ = $APP.cljs.core.__destructure_map($n$$);
  $n$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114757__$1_probs$$, $APP.cljs$cst$1630$n);
  $map__114757__$1_probs$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114757__$1_probs$$, cljs$cst$9771$probs);
  return kixi.stats.distribution.__GT_Multinomial($n$$, $map__114757__$1_probs$$);
};
kixi.stats.distribution.dirichlet = function($alphas_map__114759__$1_p__114758$$) {
  $alphas_map__114759__$1_p__114758$$ = $APP.cljs.core.__destructure_map($alphas_map__114759__$1_p__114758$$);
  $alphas_map__114759__$1_p__114758$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($alphas_map__114759__$1_p__114758$$, cljs$cst$9772$alphas);
  return kixi.stats.distribution.__GT_Dirichlet($alphas_map__114759__$1_p__114758$$);
};
kixi.stats.distribution.dirichlet_multinomial = function($n$$) {
  var $alphas$$ = $APP.cljs.core.__destructure_map($n$$);
  $n$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($alphas$$, $APP.cljs$cst$1630$n);
  $alphas$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($alphas$$, cljs$cst$9772$alphas);
  return kixi.stats.distribution.__GT_DirichletMultinomial($n$$, $alphas$$);
};
kixi.stats.distribution.cauchy = function($location__$1$$) {
  var $map__114763__$1_scale$$ = $APP.cljs.core.__destructure_map($location__$1$$);
  $location__$1$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114763__$1_scale$$, $APP.cljs$cst$6520$location);
  $map__114763__$1_scale$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114763__$1_scale$$, $APP.cljs$cst$3417$scale);
  return kixi.stats.distribution.__GT_Cauchy($location__$1$$, $map__114763__$1_scale$$);
};
kixi.stats.distribution.log_normal = function($location__$1$$) {
  var $map__114765__$1_sd$$ = $APP.cljs.core.__destructure_map($location__$1$$);
  $location__$1$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114765__$1_sd$$, $APP.cljs$cst$6520$location);
  var $scale$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114765__$1_sd$$, $APP.cljs$cst$3417$scale), $mu$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114765__$1_sd$$, cljs$cst$9766$mu);
  $map__114765__$1_sd$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114765__$1_sd$$, cljs$cst$9767$sd);
  return kixi.stats.distribution.__GT_LogNormal($APP.cljs.core.truth_($location__$1$$) ? $location__$1$$ : $mu$$, $APP.cljs.core.truth_($scale$$) ? $scale$$ : $map__114765__$1_sd$$);
};
kixi.stats.distribution.pareto = function($p__114766_scale$$) {
  var $map__114767__$1_shape$$ = $APP.cljs.core.__destructure_map($p__114766_scale$$);
  $p__114766_scale$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114767__$1_shape$$, $APP.cljs$cst$3417$scale);
  $map__114767__$1_shape$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114767__$1_shape$$, $APP.cljs$cst$3393$shape);
  return kixi.stats.distribution.__GT_Pareto($p__114766_scale$$, $map__114767__$1_shape$$);
};
kixi.stats.distribution.draw = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return kixi.stats.distribution.draw.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return kixi.stats.distribution.draw.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
kixi.stats.distribution.draw.cljs$core$IFn$_invoke$arity$1 = function($distribution$$) {
  return kixi.stats.distribution.draw.cljs$core$IFn$_invoke$arity$2($distribution$$, $APP.cljs.core.PersistentArrayMap.EMPTY);
};
kixi.stats.distribution.draw.cljs$core$IFn$_invoke$arity$2 = function($distribution$$, $map__114771__$1_p__114770_rng$jscomp$106_seed$$) {
  $map__114771__$1_p__114770_rng$jscomp$106_seed$$ = $APP.cljs.core.__destructure_map($map__114771__$1_p__114770_rng$jscomp$106_seed$$);
  $map__114771__$1_p__114770_rng$jscomp$106_seed$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114771__$1_p__114770_rng$jscomp$106_seed$$, cljs$cst$9753$seed);
  $map__114771__$1_p__114770_rng$jscomp$106_seed$$ = $APP.cljs.core.truth_($map__114771__$1_p__114770_rng$jscomp$106_seed$$) ? $APP.clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1($map__114771__$1_p__114770_rng$jscomp$106_seed$$) : $APP.clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();
  return kixi.stats.protocols.sample_1($distribution$$, $map__114771__$1_p__114770_rng$jscomp$106_seed$$);
};
kixi.stats.distribution.draw.cljs$lang$maxFixedArity = 2;
kixi.stats.distribution.sample = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return kixi.stats.distribution.sample.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return kixi.stats.distribution.sample.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
kixi.stats.distribution.sample.cljs$core$IFn$_invoke$arity$2 = function($n$$, $distribution$$) {
  return kixi.stats.distribution.sample.cljs$core$IFn$_invoke$arity$3($n$$, $distribution$$, $APP.cljs.core.PersistentArrayMap.EMPTY);
};
kixi.stats.distribution.sample.cljs$core$IFn$_invoke$arity$3 = function($n$$, $distribution$$, $map__114775__$1_p__114774_rng$jscomp$107_seed$$) {
  $map__114775__$1_p__114774_rng$jscomp$107_seed$$ = $APP.cljs.core.__destructure_map($map__114775__$1_p__114774_rng$jscomp$107_seed$$);
  $map__114775__$1_p__114774_rng$jscomp$107_seed$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114775__$1_p__114774_rng$jscomp$107_seed$$, cljs$cst$9753$seed);
  $map__114775__$1_p__114774_rng$jscomp$107_seed$$ = $APP.cljs.core.truth_($map__114775__$1_p__114774_rng$jscomp$107_seed$$) ? $APP.clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1($map__114775__$1_p__114774_rng$jscomp$107_seed$$) : $APP.clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();
  return kixi.stats.protocols.sample_n($distribution$$, $n$$, $map__114775__$1_p__114774_rng$jscomp$107_seed$$);
};
kixi.stats.distribution.sample.cljs$lang$maxFixedArity = 3;
kixi.stats.distribution.sample_summary = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return kixi.stats.distribution.sample_summary.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return kixi.stats.distribution.sample_summary.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
kixi.stats.distribution.sample_summary.cljs$core$IFn$_invoke$arity$2 = function($n$$, $distribution$$) {
  return kixi.stats.distribution.sample_summary.cljs$core$IFn$_invoke$arity$3($n$$, $distribution$$, $APP.cljs.core.PersistentArrayMap.EMPTY);
};
kixi.stats.distribution.sample_summary.cljs$core$IFn$_invoke$arity$3 = function($n$$, $distribution$$, $map__114779__$1_p__114778_rng$jscomp$108_seed$$) {
  $map__114779__$1_p__114778_rng$jscomp$108_seed$$ = $APP.cljs.core.__destructure_map($map__114779__$1_p__114778_rng$jscomp$108_seed$$);
  $map__114779__$1_p__114778_rng$jscomp$108_seed$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114779__$1_p__114778_rng$jscomp$108_seed$$, cljs$cst$9753$seed);
  $map__114779__$1_p__114778_rng$jscomp$108_seed$$ = $APP.cljs.core.truth_($map__114779__$1_p__114778_rng$jscomp$108_seed$$) ? $APP.clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1($map__114779__$1_p__114778_rng$jscomp$108_seed$$) : $APP.clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();
  return kixi.stats.protocols.sample_frequencies($distribution$$, $n$$, $map__114779__$1_p__114778_rng$jscomp$108_seed$$);
};
kixi.stats.distribution.sample_summary.cljs$lang$maxFixedArity = 3;
kixi.stats.distribution.critical_value = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$1 = function($distribution$$) {
  return kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2($distribution$$, 0.05);
};
kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2 = function($distribution$$, $alpha$$) {
  return kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$3($distribution$$, $alpha$$, cljs$cst$9773$_LT__GT_);
};
kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$3 = function($distribution$$, $G__114784_G__114786_alpha$$, $G__114782__$1_tails$$) {
  $G__114782__$1_tails$$ = $G__114782__$1_tails$$ instanceof $APP.cljs.core.Keyword ? $G__114782__$1_tails$$.fqn : null;
  switch($G__114782__$1_tails$$) {
    case "\x3c\x3e":
      return $G__114784_G__114786_alpha$$ = 1 - 0.5 * $G__114784_G__114786_alpha$$, kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2($distribution$$, $G__114784_G__114786_alpha$$) : kixi.stats.distribution.quantile.call(null, $distribution$$, $G__114784_G__114786_alpha$$);
    case "\x3c":
      return kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2($distribution$$, $G__114784_G__114786_alpha$$) : kixi.stats.distribution.quantile.call(null, $distribution$$, $G__114784_G__114786_alpha$$);
    case "\x3e":
      return $G__114784_G__114786_alpha$$ = 1 - $G__114784_G__114786_alpha$$, kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.quantile.cljs$core$IFn$_invoke$arity$2($distribution$$, $G__114784_G__114786_alpha$$) : kixi.stats.distribution.quantile.call(null, $distribution$$, $G__114784_G__114786_alpha$$);
    default:
      throw Error(["No matching clause: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($G__114782__$1_tails$$)].join(""));
  }
};
kixi.stats.distribution.critical_value.cljs$lang$maxFixedArity = 3;
kixi.stats.digest = {};
kixi.stats.digest.sum_squares = function($fx$$, $fy$$) {
  return function() {
    var $G__114818$$ = null, $G__114818__0$$ = function() {
      return new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], null);
    }, $G__114818__1$$ = function($p__114798_ssxy$$) {
      var $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__114798_ssxy$$, 0, null), $mx$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__114798_ssxy$$, 1, null), $my$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__114798_ssxy$$, 2, null), $ssx$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__114798_ssxy$$, 3, null), $ssy$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__114798_ssxy$$, 4, null);
      $p__114798_ssxy$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__114798_ssxy$$, 5, null);
      return new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1630$n, $c$$, cljs$cst$9774$x_bar, $mx$$, cljs$cst$9775$y_bar, $my$$, cljs$cst$9776$ss_xy, $p__114798_ssxy$$, cljs$cst$9777$ss_x, $ssx$$, cljs$cst$9778$ss_y, $ssy$$], null);
    }, $G__114818__2$$ = function($c_SINGLEQUOTE_$$, $e$jscomp$651_y$$) {
      var $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 0, null), $mx$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 1, null), $my$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 2, null), $ssx$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 3, null), $ssy$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 4, null), $ssxy$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 
      5, null), $x$$ = $fx$$.cljs$core$IFn$_invoke$arity$1 ? $fx$$.cljs$core$IFn$_invoke$arity$1($e$jscomp$651_y$$) : $fx$$.call(null, $e$jscomp$651_y$$);
      $e$jscomp$651_y$$ = $fy$$.cljs$core$IFn$_invoke$arity$1 ? $fy$$.cljs$core$IFn$_invoke$arity$1($e$jscomp$651_y$$) : $fy$$.call(null, $e$jscomp$651_y$$);
      if ($x$$ == null || $e$jscomp$651_y$$ == null) {
        return $c_SINGLEQUOTE_$$;
      }
      $c_SINGLEQUOTE_$$ = $c$$ + 1;
      $c$$ = $mx$$ + ($x$$ - $mx$$) / $c_SINGLEQUOTE_$$;
      var $my_SINGLEQUOTE_$$ = $my$$ + ($e$jscomp$651_y$$ - $my$$) / $c_SINGLEQUOTE_$$;
      return new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$c_SINGLEQUOTE_$$, $c$$, $my_SINGLEQUOTE_$$, $ssx$$ + ($x$$ - $c$$) * ($x$$ - $mx$$), $ssy$$ + ($e$jscomp$651_y$$ - $my_SINGLEQUOTE_$$) * ($e$jscomp$651_y$$ - $my$$), $ssxy$$ + ($x$$ - $c$$) * ($e$jscomp$651_y$$ - $my$$)], null);
    };
    $G__114818$$ = function($p__114797$$, $e$$) {
      switch(arguments.length) {
        case 0:
          return $G__114818__0$$.call(this);
        case 1:
          return $G__114818__1$$.call(this, $p__114797$$);
        case 2:
          return $G__114818__2$$.call(this, $p__114797$$, $e$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $G__114818$$.cljs$core$IFn$_invoke$arity$0 = $G__114818__0$$;
    $G__114818$$.cljs$core$IFn$_invoke$arity$1 = $G__114818__1$$;
    $G__114818$$.cljs$core$IFn$_invoke$arity$2 = $G__114818__2$$;
    return $G__114818$$;
  }();
};
kixi.stats.estimate = {};
kixi.stats.estimate.t_kixi$stats$estimate114790 = function($p__114788$$, $map__114789$$, $x_bar$$, $y_bar$$, $ss_x$$, $ss_xy$$, $slope$$, $offset$$, $meta114791$$) {
  this.p__114788 = $p__114788$$;
  this.map__114789 = $map__114789$$;
  this.x_bar = $x_bar$$;
  this.y_bar = $y_bar$$;
  this.ss_x = $ss_x$$;
  this.ss_xy = $ss_xy$$;
  this.slope = $slope$$;
  this.offset = $offset$$;
  this.meta114791 = $meta114791$$;
  this.cljs$lang$protocol_mask$partition0$ = 393216;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.estimate.t_kixi$stats$estimate114790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($_114792$$, $meta114791__$1$$) {
  return new kixi.stats.estimate.t_kixi$stats$estimate114790(this.p__114788, this.map__114789, this.x_bar, this.y_bar, this.ss_x, this.ss_xy, this.slope, this.offset, $meta114791__$1$$);
};
kixi.stats.estimate.t_kixi$stats$estimate114790.prototype.cljs$core$IMeta$_meta$arity$1 = function($_114792$$) {
  return this.meta114791;
};
kixi.stats.estimate.t_kixi$stats$estimate114790.prototype.kixi$stats$protocols$PDependent$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.estimate.t_kixi$stats$estimate114790.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = function($_$$, $x$$) {
  return this.offset + this.slope * $x$$;
};
kixi.stats.estimate.t_kixi$stats$estimate114790.prototype.kixi$stats$protocols$PParameterised$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.estimate.t_kixi$stats$estimate114790.prototype.kixi$stats$protocols$PParameterised$parameters$arity$1 = function($_$$) {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [this.offset, this.slope], null);
};
kixi.stats.estimate.t_kixi$stats$estimate114790.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 9, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9779$p__114788, cljs$cst$9780$map__114789, cljs$cst$9781$x_bar, cljs$cst$9782$y_bar, cljs$cst$9783$ss_x, cljs$cst$9784$ss_xy, cljs$cst$9785$slope, $APP.cljs$cst$1572$offset, cljs$cst$9786$meta114791], null);
};
kixi.stats.estimate.t_kixi$stats$estimate114790.cljs$lang$type = !0;
kixi.stats.estimate.t_kixi$stats$estimate114790.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate114790";
kixi.stats.estimate.t_kixi$stats$estimate114790.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.estimate/t_kixi$stats$estimate114790");
};
kixi.stats.estimate.__GT_t_kixi$stats$estimate114790 = function($p__114788$$, $map__114789$$, $x_bar$$, $y_bar$$, $ss_x$$, $ss_xy$$, $slope$$, $offset$$, $meta114791$$) {
  return new kixi.stats.estimate.t_kixi$stats$estimate114790($p__114788$$, $map__114789$$, $x_bar$$, $y_bar$$, $ss_x$$, $ss_xy$$, $slope$$, $offset$$, $meta114791$$);
};
kixi.stats.estimate.simple_linear_regression = function($p__114788$$) {
  var $map__114789__$1$$ = $APP.cljs.core.__destructure_map($p__114788$$), $x_bar$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114789__$1$$, cljs$cst$9774$x_bar), $y_bar$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114789__$1$$, cljs$cst$9775$y_bar), $ss_x$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114789__$1$$, cljs$cst$9777$ss_x), $ss_xy$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114789__$1$$, cljs$cst$9776$ss_xy);
  if ($ss_x$$ === 0) {
    return null;
  }
  var $slope$$ = $ss_xy$$ / $ss_x$$;
  return new kixi.stats.estimate.t_kixi$stats$estimate114790($p__114788$$, $map__114789__$1$$, $x_bar$$, $y_bar$$, $ss_x$$, $ss_xy$$, $slope$$, $y_bar$$ - $x_bar$$ * $slope$$, $APP.cljs.core.PersistentArrayMap.EMPTY);
};
kixi.stats.estimate.regression_standard_error = function($n$$, $x$$) {
  var $map__114806__$1_ss_xy$$ = $APP.cljs.core.__destructure_map($n$$);
  $n$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114806__$1_ss_xy$$, $APP.cljs$cst$1630$n);
  var $x_bar$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114806__$1_ss_xy$$, cljs$cst$9774$x_bar), $ss_x$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114806__$1_ss_xy$$, cljs$cst$9777$ss_x), $ss_y$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114806__$1_ss_xy$$, cljs$cst$9778$ss_y);
  $map__114806__$1_ss_xy$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114806__$1_ss_xy$$, cljs$cst$9776$ss_xy);
  return $n$$ > 2 && $ss_x$$ !== 0 ? kixi.stats.math.sqrt(1 / ($n$$ - 2) * ($ss_y$$ - kixi.stats.math.sq($map__114806__$1_ss_xy$$) / $ss_x$$) * (1 / $n$$ + kixi.stats.math.sq($x$$ - $x_bar$$) / $ss_x$$)) : null;
};
kixi.stats.estimate.t_kixi$stats$estimate114815 = function($x$$, $map__114812$$, $n$$, $err$$, $regression$$, $df$$, $t_crit$$, $y_hat$$, $sum_squares$$, $p__114808$$, $se$$, $alpha$$, $meta114816$$) {
  this.x = $x$$;
  this.map__114812 = $map__114812$$;
  this.n = $n$$;
  this.err = $err$$;
  this.regression = $regression$$;
  this.df = $df$$;
  this.t_crit = $t_crit$$;
  this.y_hat = $y_hat$$;
  this.sum_squares = $sum_squares$$;
  this.p__114808 = $p__114808$$;
  this.se = $se$$;
  this.alpha = $alpha$$;
  this.meta114816 = $meta114816$$;
  this.cljs$lang$protocol_mask$partition0$ = 393216;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.estimate.t_kixi$stats$estimate114815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($_114817$$, $meta114816__$1$$) {
  return new kixi.stats.estimate.t_kixi$stats$estimate114815(this.x, this.map__114812, this.n, this.err, this.regression, this.df, this.t_crit, this.y_hat, this.sum_squares, this.p__114808, this.se, this.alpha, $meta114816__$1$$);
};
kixi.stats.estimate.t_kixi$stats$estimate114815.prototype.cljs$core$IMeta$_meta$arity$1 = function($_114817$$) {
  return this.meta114816;
};
kixi.stats.estimate.t_kixi$stats$estimate114815.prototype.kixi$stats$protocols$PInterval$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.estimate.t_kixi$stats$estimate114815.prototype.kixi$stats$protocols$PInterval$lower$arity$1 = function($_$$) {
  return this.y_hat - this.err;
};
kixi.stats.estimate.t_kixi$stats$estimate114815.prototype.kixi$stats$protocols$PInterval$upper$arity$1 = function($_$$) {
  return this.y_hat + this.err;
};
kixi.stats.estimate.t_kixi$stats$estimate114815.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 13, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x, cljs$cst$9787$map__114812, $APP.cljs$cst$2483$n, cljs$cst$9788$err, cljs$cst$9789$regression, cljs$cst$9790$df, cljs$cst$9791$t_crit, cljs$cst$9792$y_hat, cljs$cst$9793$sum_squares, cljs$cst$9794$p__114808, cljs$cst$9795$se, $APP.cljs$cst$4010$alpha, cljs$cst$9796$meta114816], null);
};
kixi.stats.estimate.t_kixi$stats$estimate114815.cljs$lang$type = !0;
kixi.stats.estimate.t_kixi$stats$estimate114815.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate114815";
kixi.stats.estimate.t_kixi$stats$estimate114815.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.estimate/t_kixi$stats$estimate114815");
};
kixi.stats.estimate.__GT_t_kixi$stats$estimate114815 = function($x$$, $map__114812$$, $n$$, $err$$, $regression$$, $df$$, $t_crit$$, $y_hat$$, $sum_squares$$, $p__114808$$, $se$$, $alpha$$, $meta114816$$) {
  return new kixi.stats.estimate.t_kixi$stats$estimate114815($x$$, $map__114812$$, $n$$, $err$$, $regression$$, $df$$, $t_crit$$, $y_hat$$, $sum_squares$$, $p__114808$$, $se$$, $alpha$$, $meta114816$$);
};
kixi.stats.estimate.regression_confidence_interval = function($p__114808$$, $x$$, $alpha$$) {
  var $map__114812__$1$$ = $APP.cljs.core.__destructure_map($p__114808$$), $n$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114812__$1$$, $APP.cljs$cst$1630$n), $regression$$ = kixi.stats.estimate.simple_linear_regression($map__114812__$1$$), $y_hat$$ = kixi.stats.protocols.measure($regression$$, $x$$), $se$$ = kixi.stats.estimate.regression_standard_error($map__114812__$1$$, $x$$), $df$$ = $n$$ - 2, $t_crit$$ = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2(kixi.stats.distribution.t(new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$1438$v, $df$$], null)), $alpha$$);
  return new kixi.stats.estimate.t_kixi$stats$estimate114815($x$$, $map__114812__$1$$, $n$$, $t_crit$$ * $se$$, $regression$$, $df$$, $t_crit$$, $y_hat$$, $map__114812__$1$$, $p__114808$$, $se$$, $alpha$$, $APP.cljs.core.PersistentArrayMap.EMPTY);
};
kixi.stats.estimate.regression_prediction_standard_error = function($n$$, $x$$) {
  var $map__114827__$1_ss_xy$$ = $APP.cljs.core.__destructure_map($n$$);
  $n$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114827__$1_ss_xy$$, $APP.cljs$cst$1630$n);
  var $x_bar$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114827__$1_ss_xy$$, cljs$cst$9774$x_bar), $ss_x$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114827__$1_ss_xy$$, cljs$cst$9777$ss_x), $ss_y$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114827__$1_ss_xy$$, cljs$cst$9778$ss_y);
  $map__114827__$1_ss_xy$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114827__$1_ss_xy$$, cljs$cst$9776$ss_xy);
  return $n$$ > 2 && $ss_x$$ !== 0 ? kixi.stats.math.sqrt(1 / ($n$$ - 2) * ($ss_y$$ - kixi.stats.math.sq($map__114827__$1_ss_xy$$) / $ss_x$$) * (1 + 1 / $n$$ + kixi.stats.math.sq($x$$ - $x_bar$$) / $ss_x$$)) : null;
};
kixi.stats.estimate.t_kixi$stats$estimate114830 = function($x$$, $p__114828$$, $n$$, $err$$, $map__114829$$, $regression$$, $df$$, $t_crit$$, $y_hat$$, $sum_squares$$, $se$$, $alpha$$, $meta114831$$) {
  this.x = $x$$;
  this.p__114828 = $p__114828$$;
  this.n = $n$$;
  this.err = $err$$;
  this.map__114829 = $map__114829$$;
  this.regression = $regression$$;
  this.df = $df$$;
  this.t_crit = $t_crit$$;
  this.y_hat = $y_hat$$;
  this.sum_squares = $sum_squares$$;
  this.se = $se$$;
  this.alpha = $alpha$$;
  this.meta114831 = $meta114831$$;
  this.cljs$lang$protocol_mask$partition0$ = 393216;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.estimate.t_kixi$stats$estimate114830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($_114832$$, $meta114831__$1$$) {
  return new kixi.stats.estimate.t_kixi$stats$estimate114830(this.x, this.p__114828, this.n, this.err, this.map__114829, this.regression, this.df, this.t_crit, this.y_hat, this.sum_squares, this.se, this.alpha, $meta114831__$1$$);
};
kixi.stats.estimate.t_kixi$stats$estimate114830.prototype.cljs$core$IMeta$_meta$arity$1 = function($_114832$$) {
  return this.meta114831;
};
kixi.stats.estimate.t_kixi$stats$estimate114830.prototype.kixi$stats$protocols$PInterval$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.estimate.t_kixi$stats$estimate114830.prototype.kixi$stats$protocols$PInterval$lower$arity$1 = function($_$$) {
  return this.y_hat - this.err;
};
kixi.stats.estimate.t_kixi$stats$estimate114830.prototype.kixi$stats$protocols$PInterval$upper$arity$1 = function($_$$) {
  return this.y_hat + this.err;
};
kixi.stats.estimate.t_kixi$stats$estimate114830.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 13, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1237$x, cljs$cst$9797$p__114828, $APP.cljs$cst$2483$n, cljs$cst$9788$err, cljs$cst$9798$map__114829, cljs$cst$9789$regression, cljs$cst$9790$df, cljs$cst$9791$t_crit, cljs$cst$9792$y_hat, cljs$cst$9793$sum_squares, cljs$cst$9795$se, $APP.cljs$cst$4010$alpha, cljs$cst$9799$meta114831], null);
};
kixi.stats.estimate.t_kixi$stats$estimate114830.cljs$lang$type = !0;
kixi.stats.estimate.t_kixi$stats$estimate114830.cljs$lang$ctorStr = "kixi.stats.estimate/t_kixi$stats$estimate114830";
kixi.stats.estimate.t_kixi$stats$estimate114830.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.estimate/t_kixi$stats$estimate114830");
};
kixi.stats.estimate.__GT_t_kixi$stats$estimate114830 = function($x$$, $p__114828$$, $n$$, $err$$, $map__114829$$, $regression$$, $df$$, $t_crit$$, $y_hat$$, $sum_squares$$, $se$$, $alpha$$, $meta114831$$) {
  return new kixi.stats.estimate.t_kixi$stats$estimate114830($x$$, $p__114828$$, $n$$, $err$$, $map__114829$$, $regression$$, $df$$, $t_crit$$, $y_hat$$, $sum_squares$$, $se$$, $alpha$$, $meta114831$$);
};
kixi.stats.estimate.regression_prediction_interval = function($p__114828$$, $x$$, $alpha$$) {
  var $map__114829__$1$$ = $APP.cljs.core.__destructure_map($p__114828$$), $n$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__114829__$1$$, $APP.cljs$cst$1630$n), $regression$$ = kixi.stats.estimate.simple_linear_regression($map__114829__$1$$), $y_hat$$ = kixi.stats.protocols.measure($regression$$, $x$$), $se$$ = kixi.stats.estimate.regression_prediction_standard_error($map__114829__$1$$, $x$$), $df$$ = $n$$ - 2, $t_crit$$ = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$2(kixi.stats.distribution.t(new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$1438$v, $df$$], null)), $alpha$$);
  return new kixi.stats.estimate.t_kixi$stats$estimate114830($x$$, $p__114828$$, $n$$, $t_crit$$ * $se$$, $map__114829__$1$$, $regression$$, $df$$, $t_crit$$, $y_hat$$, $map__114829__$1$$, $se$$, $alpha$$, $APP.cljs.core.PersistentArrayMap.EMPTY);
};
$APP.clojure.math = {};
$APP.clojure.math.combinatorics = {};
$APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_ = $APP.cljs.core._STAR_;
$APP.clojure.math.combinatorics._PLUS__SINGLEQUOTE_ = $APP.cljs.core._PLUS_;
$APP.clojure.math.combinatorics.join = function($colls$$) {
  return new $APP.cljs.core.LazySeq(null, function() {
    var $G__114847$jscomp$inline_9102_JSCompiler_inline_result$jscomp$3577_temp__5825__auto__$$ = $APP.cljs.core.seq($colls$$);
    if ($G__114847$jscomp$inline_9102_JSCompiler_inline_result$jscomp$3577_temp__5825__auto__$$) {
      var $JSCompiler_temp_const$$ = $APP.cljs.core.concat, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.cljs$core$IFn$_invoke$arity$2, $JSCompiler_temp_const$jscomp$1$$ = $APP.cljs.core.first($G__114847$jscomp$inline_9102_JSCompiler_inline_result$jscomp$3577_temp__5825__auto__$$);
      $G__114847$jscomp$inline_9102_JSCompiler_inline_result$jscomp$3577_temp__5825__auto__$$ = $APP.cljs.core.rest($G__114847$jscomp$inline_9102_JSCompiler_inline_result$jscomp$3577_temp__5825__auto__$$);
      $G__114847$jscomp$inline_9102_JSCompiler_inline_result$jscomp$3577_temp__5825__auto__$$ = $APP.clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1 ? $APP.clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1($G__114847$jscomp$inline_9102_JSCompiler_inline_result$jscomp$3577_temp__5825__auto__$$) : $APP.clojure.math.combinatorics.join.call(null, $G__114847$jscomp$inline_9102_JSCompiler_inline_result$jscomp$3577_temp__5825__auto__$$);
      return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_temp_const$jscomp$1$$, $G__114847$jscomp$inline_9102_JSCompiler_inline_result$jscomp$3577_temp__5825__auto__$$);
    }
    return null;
  }, null, null);
};
$APP.clojure.math.combinatorics.mapjoin = function($f$$, $coll$$) {
  return $APP.clojure.math.combinatorics.join($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($f$$, $coll$$));
};
$APP.clojure.math.combinatorics.all_different_QMARK_ = function($s$$) {
  return $APP.cljs.core.seq($s$$) ? $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.distinct_QMARK_, $s$$) : !0;
};
$APP.clojure.math.combinatorics.index_combinations = function($n$$, $cnt$$) {
  return new $APP.cljs.core.LazySeq(null, function() {
    return function $clojure$math$combinatorics$index_combinations_$_step$$($c__$1$$, $j$$) {
      return $APP.cljs.core.cons($APP.cljs.core.rseq($APP.cljs.core.subvec.cljs$core$IFn$_invoke$arity$3($c__$1$$, 1, $n$$ + 1)), new $APP.cljs.core.LazySeq(null, function() {
        a: {
          if ($j$$ > $n$$) {
            var $G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$ = null;
          } else {
            if ($G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($c__$1$$, $j$$, ($c__$1$$.cljs$core$IFn$_invoke$arity$1 ? $c__$1$$.cljs$core$IFn$_invoke$arity$1($j$$) : $c__$1$$.call(null, $j$$)) - 1), ($G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$.cljs$core$IFn$_invoke$arity$1 ? $G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$.cljs$core$IFn$_invoke$arity$1($j$$) : 
            $G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$.call(null, $j$$)) < $j$$) {
              $G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$ = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$, $j$$ + 1], null);
            } else {
              for (var $G__115136$jscomp$inline_9114_j__$1$$ = $j$$;;) {
                if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($G__115136$jscomp$inline_9114_j__$1$$, 1)) {
                  $G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$ = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$, $G__115136$jscomp$inline_9114_j__$1$$], null);
                  break a;
                } else {
                  $G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$, $G__115136$jscomp$inline_9114_j__$1$$ - 1, ($G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$.cljs$core$IFn$_invoke$arity$1 ? $G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$.cljs$core$IFn$_invoke$arity$1($G__115136$jscomp$inline_9114_j__$1$$) : 
                  $G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$.call(null, $G__115136$jscomp$inline_9114_j__$1$$)) - 1), --$G__115136$jscomp$inline_9114_j__$1$$;
                }
              }
              $G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$ = void 0;
            }
          }
        }
        return $APP.cljs.core.truth_($G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$) ? $clojure$math$combinatorics$index_combinations_$_step$$($G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$.cljs$core$IFn$_invoke$arity$1 ? $G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$.cljs$core$IFn$_invoke$arity$1(0) : $G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$.call(null, 
        0), $G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$.cljs$core$IFn$_invoke$arity$1 ? $G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$.cljs$core$IFn$_invoke$arity$1(1) : $G__115135$jscomp$inline_9113_c__$2$jscomp$inline_9110_c__$3$jscomp$inline_9111_next_step$$.call(null, 1)) : null;
      }, null, null));
    }($APP.cljs.core.vec($APP.cljs.core.cons(null, function() {
      return function $clojure$math$combinatorics$index_combinations_$_iter__114848$$($s__114849$$) {
        return new $APP.cljs.core.LazySeq(null, function() {
          for (;;) {
            var $s__114849__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__114849$$);
            if ($s__114849__$2_temp__5825__auto__$$) {
              if ($APP.cljs.core.chunked_seq_QMARK_($s__114849__$2_temp__5825__auto__$$)) {
                var $JSCompiler_inline_result$jscomp$3578_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__114849__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$3578_c__5501__auto__$$), $b__114851_j$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                a: {
                  for (var $i__114850$$ = 0;;) {
                    if ($i__114850$$ < $size__5502__auto__$$) {
                      var $j$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$3578_c__5501__auto__$$, $i__114850$$);
                      $APP.cljs.core.chunk_append($b__114851_j$$, $j$$ + $cnt$$ + -($n$$ + 1));
                      $i__114850$$ += 1;
                    } else {
                      $JSCompiler_inline_result$jscomp$3578_c__5501__auto__$$ = !0;
                      break a;
                    }
                  }
                  $JSCompiler_inline_result$jscomp$3578_c__5501__auto__$$ = void 0;
                }
                return $JSCompiler_inline_result$jscomp$3578_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114851_j$$), $clojure$math$combinatorics$index_combinations_$_iter__114848$$($APP.cljs.core.chunk_rest($s__114849__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114851_j$$), null);
              }
              $b__114851_j$$ = $APP.cljs.core.first($s__114849__$2_temp__5825__auto__$$);
              return $APP.cljs.core.cons($b__114851_j$$ + $cnt$$ + -($n$$ + 1), $clojure$math$combinatorics$index_combinations_$_iter__114848$$($APP.cljs.core.rest($s__114849__$2_temp__5825__auto__$$)));
            }
            return null;
          }
        }, null, null);
      }($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$2(1, $n$$ + 1));
    }())), 1);
  }, null, null);
};
$APP.clojure.math.combinatorics.distribute = function($m$$, $G__115140_index$jscomp$247_index__$1$$, $total$$, $G__115139_distribution$$, $G__115141_already_distributed_already_distributed__$1$$) {
  for (;;) {
    if ($G__115140_index$jscomp$247_index__$1$$ >= $APP.cljs.core.count($m$$)) {
      return null;
    }
    var $quantity_to_distribute$$ = $total$$ - $G__115141_already_distributed_already_distributed__$1$$, $mi$$ = $m$$.cljs$core$IFn$_invoke$arity$1 ? $m$$.cljs$core$IFn$_invoke$arity$1($G__115140_index$jscomp$247_index__$1$$) : $m$$.call(null, $G__115140_index$jscomp$247_index__$1$$);
    if ($quantity_to_distribute$$ <= $mi$$) {
      return $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__115139_distribution$$, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__115140_index$jscomp$247_index__$1$$, $quantity_to_distribute$$, $total$$], null));
    }
    $G__115139_distribution$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__115139_distribution$$, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__115140_index$jscomp$247_index__$1$$, $mi$$, $G__115141_already_distributed_already_distributed__$1$$ + $mi$$], null));
    $G__115140_index$jscomp$247_index__$1$$ += 1;
    $G__115141_already_distributed_already_distributed__$1$$ += $mi$$;
  }
};
$APP.clojure.math.combinatorics.next_distribution = function($m$$, $total$$, $distribution$jscomp$16_index__$1$$) {
  var $this_and_to_the_left_this_and_to_the_left__$1_vec__114852_vec__114855$$ = $APP.cljs.core.peek($distribution$jscomp$16_index__$1$$), $distribution__$1$jscomp$1_distribution__$2_index$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($this_and_to_the_left_this_and_to_the_left__$1_vec__114852_vec__114855$$, 0, null), $this_bucket_this_bucket__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($this_and_to_the_left_this_and_to_the_left__$1_vec__114852_vec__114855$$, 1, null);
  $this_and_to_the_left_this_and_to_the_left__$1_vec__114852_vec__114855$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($this_and_to_the_left_this_and_to_the_left__$1_vec__114852_vec__114855$$, 2, null);
  if ($distribution__$1$jscomp$1_distribution__$2_index$$ < $APP.cljs.core.count($m$$) - 1) {
    return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($this_bucket_this_bucket__$1$$, 1) ? $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.pop($distribution$jscomp$16_index__$1$$), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$distribution__$1$jscomp$1_distribution__$2_index$$ + 1, 1, $this_and_to_the_left_this_and_to_the_left__$1_vec__114852_vec__114855$$], null)) : $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.pop($distribution$jscomp$16_index__$1$$), 
    new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$distribution__$1$jscomp$1_distribution__$2_index$$, $this_bucket_this_bucket__$1$$ - 1, $this_and_to_the_left_this_and_to_the_left__$1_vec__114852_vec__114855$$ - 1], null), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$distribution__$1$jscomp$1_distribution__$2_index$$ + 1, 1, $this_and_to_the_left_this_and_to_the_left__$1_vec__114852_vec__114855$$], 
    null)], 0));
  }
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($this_bucket_this_bucket__$1$$, $total$$)) {
    return null;
  }
  for ($distribution__$1$jscomp$1_distribution__$2_index$$ = $APP.cljs.core.pop($distribution$jscomp$16_index__$1$$);;) {
    $this_and_to_the_left_this_and_to_the_left__$1_vec__114852_vec__114855$$ = $APP.cljs.core.peek($distribution__$1$jscomp$1_distribution__$2_index$$);
    $distribution$jscomp$16_index__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($this_and_to_the_left_this_and_to_the_left__$1_vec__114852_vec__114855$$, 0, null);
    $this_bucket_this_bucket__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($this_and_to_the_left_this_and_to_the_left__$1_vec__114852_vec__114855$$, 1, null);
    $this_and_to_the_left_this_and_to_the_left__$1_vec__114852_vec__114855$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($this_and_to_the_left_this_and_to_the_left__$1_vec__114852_vec__114855$$, 2, null);
    $distribution__$1$jscomp$1_distribution__$2_index$$ = $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($this_bucket_this_bucket__$1$$, 1) ? $APP.cljs.core.pop($distribution__$1$jscomp$1_distribution__$2_index$$) : $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.pop($distribution__$1$jscomp$1_distribution__$2_index$$), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$distribution$jscomp$16_index__$1$$, $this_bucket_this_bucket__$1$$ - 
    1, $this_and_to_the_left_this_and_to_the_left__$1_vec__114852_vec__114855$$ - 1], null));
    if ($total$$ - ($this_and_to_the_left_this_and_to_the_left__$1_vec__114852_vec__114855$$ - 1) <= $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._PLUS_, $APP.cljs.core.subvec.cljs$core$IFn$_invoke$arity$2($m$$, $distribution$jscomp$16_index__$1$$ + 1))) {
      return $APP.clojure.math.combinatorics.distribute($m$$, $distribution$jscomp$16_index__$1$$ + 1, $total$$, $distribution__$1$jscomp$1_distribution__$2_index$$, $this_and_to_the_left_this_and_to_the_left__$1_vec__114852_vec__114855$$ - 1);
    }
    if (!$APP.cljs.core.seq($distribution__$1$jscomp$1_distribution__$2_index$$)) {
      return null;
    }
  }
};
$APP.clojure.math.combinatorics.bounded_distributions = function($m$$, $t$$) {
  return function $clojure$math$combinatorics$bounded_distributions_$_step$$($distribution$$) {
    return $APP.cljs.core.cons($distribution$$, new $APP.cljs.core.LazySeq(null, function() {
      var $temp__5825__auto__$$ = $APP.clojure.math.combinatorics.next_distribution($m$$, $t$$, $distribution$$);
      return $APP.cljs.core.truth_($temp__5825__auto__$$) ? $clojure$math$combinatorics$bounded_distributions_$_step$$($temp__5825__auto__$$) : null;
    }, null, null));
  }($APP.clojure.math.combinatorics.distribute($m$$, 0, $t$$, $APP.cljs.core.PersistentVector.EMPTY, 0));
};
$APP.clojure.math.combinatorics.multi_comb = function($l$$, $t$$) {
  var $f$$ = $APP.cljs.core.frequencies($l$$), $v$$ = $APP.cljs.core.vec($APP.cljs.core.distinct.cljs$core$IFn$_invoke$arity$1($l$$)), $domain$$ = $APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.count($v$$)), $m$$ = $APP.cljs.core.vec(function() {
    return function $clojure$math$combinatorics$multi_comb_$_iter__114863$$($s__114864$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (;;) {
          var $s__114864__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__114864$$);
          if ($s__114864__$2_temp__5825__auto__$$) {
            if ($APP.cljs.core.chunked_seq_QMARK_($s__114864__$2_temp__5825__auto__$$)) {
              var $c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__114864__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($c__5501__auto__$$), $b__114866$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              return function() {
                for (var $i__114865$$ = 0;;) {
                  if ($i__114865$$ < $size__5502__auto__$$) {
                    var $G__114867$jscomp$inline_9116_JSCompiler_inline_result$jscomp$3582_i$$ = $APP.cljs.core._nth($c__5501__auto__$$, $i__114865$$), $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.chunk_append, $JSCompiler_temp_const$jscomp$1$$ = $b__114866$$;
                    $G__114867$jscomp$inline_9116_JSCompiler_inline_result$jscomp$3582_i$$ = $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($G__114867$jscomp$inline_9116_JSCompiler_inline_result$jscomp$3582_i$$) : $v$$.call(null, $G__114867$jscomp$inline_9116_JSCompiler_inline_result$jscomp$3582_i$$);
                    $G__114867$jscomp$inline_9116_JSCompiler_inline_result$jscomp$3582_i$$ = $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($G__114867$jscomp$inline_9116_JSCompiler_inline_result$jscomp$3582_i$$) : $f$$.call(null, $G__114867$jscomp$inline_9116_JSCompiler_inline_result$jscomp$3582_i$$);
                    $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_temp_const$jscomp$1$$, $G__114867$jscomp$inline_9116_JSCompiler_inline_result$jscomp$3582_i$$);
                    $i__114865$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114866$$), $clojure$math$combinatorics$multi_comb_$_iter__114863$$($APP.cljs.core.chunk_rest($s__114864__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114866$$), null);
            }
            var $i$$ = $APP.cljs.core.first($s__114864__$2_temp__5825__auto__$$);
            return $APP.cljs.core.cons(function() {
              var $G__114868$$ = $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($i$$) : $v$$.call(null, $i$$);
              return $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($G__114868$$) : $f$$.call(null, $G__114868$$);
            }(), $clojure$math$combinatorics$multi_comb_$_iter__114863$$($APP.cljs.core.rest($s__114864__$2_temp__5825__auto__$$)));
          }
          return null;
        }
      }, null, null);
    }($domain$$);
  }()), $qs$$ = $APP.clojure.math.combinatorics.bounded_distributions($m$$, $t$$);
  return function $clojure$math$combinatorics$multi_comb_$_iter__114869$$($s__114870$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (;;) {
        var $temp__5825__auto__$$ = $APP.cljs.core.seq($s__114870$$);
        if ($temp__5825__auto__$$) {
          var $s__114870__$2$$ = $temp__5825__auto__$$;
          if ($APP.cljs.core.chunked_seq_QMARK_($s__114870__$2$$)) {
            var $c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__114870__$2$$), $size__5502__auto__$$ = $APP.cljs.core.count($c__5501__auto__$$), $b__114872$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
            return function() {
              for (var $i__114871$$ = 0;;) {
                if ($i__114871$$ < $size__5502__auto__$$) {
                  var $q$$ = $APP.cljs.core._nth($c__5501__auto__$$, $i__114871$$);
                  $APP.cljs.core.chunk_append($b__114872$$, $APP.clojure.math.combinatorics.join(function() {
                    return function($i__114871$$, $q$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__114872$$, $s__114870__$2$$, $temp__5825__auto__$$, $f$$, $v$$, $domain$$, $m$$, $qs$$) {
                      return function $clojure$math$combinatorics$multi_comb_$_iter__114869_$_iter__114873$$($s__114874$$) {
                        return new $APP.cljs.core.LazySeq(null, function($i__114871$$, $q$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__114872$$, $s__114870__$2$$, $temp__5825__auto__$$, $f$$, $v$$, $domain$$, $m$$, $qs$$) {
                          return function() {
                            for (;;) {
                              var $s__114874__$2_temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__114874$$);
                              if ($s__114874__$2_temp__5825__auto____$1$$) {
                                if ($APP.cljs.core.chunked_seq_QMARK_($s__114874__$2_temp__5825__auto____$1$$)) {
                                  var $JSCompiler_inline_result$jscomp$3583_c__5501__auto____$1_index$$ = $APP.cljs.core.chunk_first($s__114874__$2_temp__5825__auto____$1$$), $size__5502__auto____$1_this_bucket$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$3583_c__5501__auto____$1_index$$), $b__114876_vec__114880$$ = $APP.cljs.core.chunk_buffer($size__5502__auto____$1_this_bucket$$);
                                  a: {
                                    for (var $i__114875$$ = 0;;) {
                                      if ($i__114875$$ < $size__5502__auto____$1_this_bucket$$) {
                                        var $vec__114877$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$3583_c__5501__auto____$1_index$$, $i__114875$$), $index$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__114877$$, 0, null), $this_bucket$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__114877$$, 1, null);
                                        $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__114877$$, 2, null);
                                        $APP.cljs.core.chunk_append($b__114876_vec__114880$$, $APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2($this_bucket$$, $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($index$$) : $v$$.call(null, $index$$)));
                                        $i__114875$$ += 1;
                                      } else {
                                        $JSCompiler_inline_result$jscomp$3583_c__5501__auto____$1_index$$ = !0;
                                        break a;
                                      }
                                    }
                                    $JSCompiler_inline_result$jscomp$3583_c__5501__auto____$1_index$$ = void 0;
                                  }
                                  return $JSCompiler_inline_result$jscomp$3583_c__5501__auto____$1_index$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114876_vec__114880$$), $clojure$math$combinatorics$multi_comb_$_iter__114869_$_iter__114873$$($APP.cljs.core.chunk_rest($s__114874__$2_temp__5825__auto____$1$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114876_vec__114880$$), null);
                                }
                                $b__114876_vec__114880$$ = $APP.cljs.core.first($s__114874__$2_temp__5825__auto____$1$$);
                                $JSCompiler_inline_result$jscomp$3583_c__5501__auto____$1_index$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($b__114876_vec__114880$$, 0, null);
                                $size__5502__auto____$1_this_bucket$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($b__114876_vec__114880$$, 1, null);
                                $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($b__114876_vec__114880$$, 2, null);
                                return $APP.cljs.core.cons($APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2($size__5502__auto____$1_this_bucket$$, $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($JSCompiler_inline_result$jscomp$3583_c__5501__auto____$1_index$$) : $v$$.call(null, $JSCompiler_inline_result$jscomp$3583_c__5501__auto____$1_index$$)), $clojure$math$combinatorics$multi_comb_$_iter__114869_$_iter__114873$$($APP.cljs.core.rest($s__114874__$2_temp__5825__auto____$1$$)));
                              }
                              return null;
                            }
                          };
                        }($i__114871$$, $q$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__114872$$, $s__114870__$2$$, $temp__5825__auto__$$, $f$$, $v$$, $domain$$, $m$$, $qs$$), null, null);
                      };
                    }($i__114871$$, $q$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__114872$$, $s__114870__$2$$, $temp__5825__auto__$$, $f$$, $v$$, $domain$$, $m$$, $qs$$)($q$$);
                  }()));
                  $i__114871$$ += 1;
                } else {
                  return !0;
                }
              }
            }() ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114872$$), $clojure$math$combinatorics$multi_comb_$_iter__114869$$($APP.cljs.core.chunk_rest($s__114870__$2$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114872$$), null);
          }
          var $q$$ = $APP.cljs.core.first($s__114870__$2$$);
          return $APP.cljs.core.cons($APP.clojure.math.combinatorics.join(function() {
            return function($q$$, $s__114870__$2$$, $temp__5825__auto__$$, $f$$, $v$$, $domain$$, $m$$, $qs$$) {
              return function $clojure$math$combinatorics$multi_comb_$_iter__114869_$_iter__114883$$($s__114884$$) {
                return new $APP.cljs.core.LazySeq(null, function() {
                  for (;;) {
                    var $s__114884__$2_temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__114884$$);
                    if ($s__114884__$2_temp__5825__auto____$1$$) {
                      if ($APP.cljs.core.chunked_seq_QMARK_($s__114884__$2_temp__5825__auto____$1$$)) {
                        var $JSCompiler_inline_result$jscomp$3584_c__5501__auto__$jscomp$304_index$$ = $APP.cljs.core.chunk_first($s__114884__$2_temp__5825__auto____$1$$), $size__5502__auto__$jscomp$304_this_bucket$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$3584_c__5501__auto__$jscomp$304_index$$), $b__114886_vec__114890$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$jscomp$304_this_bucket$$);
                        a: {
                          for (var $i__114885$$ = 0;;) {
                            if ($i__114885$$ < $size__5502__auto__$jscomp$304_this_bucket$$) {
                              var $vec__114887$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$3584_c__5501__auto__$jscomp$304_index$$, $i__114885$$), $index$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__114887$$, 0, null), $this_bucket$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__114887$$, 1, null);
                              $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__114887$$, 2, null);
                              $APP.cljs.core.chunk_append($b__114886_vec__114890$$, $APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2($this_bucket$$, $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($index$$) : $v$$.call(null, $index$$)));
                              $i__114885$$ += 1;
                            } else {
                              $JSCompiler_inline_result$jscomp$3584_c__5501__auto__$jscomp$304_index$$ = !0;
                              break a;
                            }
                          }
                          $JSCompiler_inline_result$jscomp$3584_c__5501__auto__$jscomp$304_index$$ = void 0;
                        }
                        return $JSCompiler_inline_result$jscomp$3584_c__5501__auto__$jscomp$304_index$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114886_vec__114890$$), $clojure$math$combinatorics$multi_comb_$_iter__114869_$_iter__114883$$($APP.cljs.core.chunk_rest($s__114884__$2_temp__5825__auto____$1$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114886_vec__114890$$), null);
                      }
                      $b__114886_vec__114890$$ = $APP.cljs.core.first($s__114884__$2_temp__5825__auto____$1$$);
                      $JSCompiler_inline_result$jscomp$3584_c__5501__auto__$jscomp$304_index$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($b__114886_vec__114890$$, 0, null);
                      $size__5502__auto__$jscomp$304_this_bucket$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($b__114886_vec__114890$$, 1, null);
                      $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($b__114886_vec__114890$$, 2, null);
                      return $APP.cljs.core.cons($APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2($size__5502__auto__$jscomp$304_this_bucket$$, $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($JSCompiler_inline_result$jscomp$3584_c__5501__auto__$jscomp$304_index$$) : $v$$.call(null, $JSCompiler_inline_result$jscomp$3584_c__5501__auto__$jscomp$304_index$$)), $clojure$math$combinatorics$multi_comb_$_iter__114869_$_iter__114883$$($APP.cljs.core.rest($s__114884__$2_temp__5825__auto____$1$$)));
                    }
                    return null;
                  }
                }, null, null);
              };
            }($q$$, $s__114870__$2$$, $temp__5825__auto__$$, $f$$, $v$$, $domain$$, $m$$, $qs$$)($q$$);
          }()), $clojure$math$combinatorics$multi_comb_$_iter__114869$$($APP.cljs.core.rest($s__114870__$2$$)));
        }
        return null;
      }
    }, null, null);
  }($qs$$);
};
$APP.clojure.math.combinatorics.combinations = function($items$$, $t$$) {
  var $v_items$$ = $APP.cljs.core.vec($APP.cljs.core.reverse($items$$));
  if ($t$$ === 0) {
    return new $APP.cljs.core.List(null, $APP.cljs.core.List.EMPTY, null, 1, null);
  }
  var $cnt$$ = $APP.cljs.core.count($items$$);
  return $t$$ > $cnt$$ ? null : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($t$$, 1) ? function $clojure$math$combinatorics$combinations_$_iter__114894$$($s__114895$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (;;) {
        var $s__114895__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__114895$$);
        if ($s__114895__$2_temp__5825__auto__$$) {
          if ($APP.cljs.core.chunked_seq_QMARK_($s__114895__$2_temp__5825__auto__$$)) {
            var $JSCompiler_inline_result$jscomp$3585_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__114895__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$3585_c__5501__auto__$$), $b__114897_item$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
            a: {
              for (var $i__114896$$ = 0;;) {
                if ($i__114896$$ < $size__5502__auto__$$) {
                  var $item$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$3585_c__5501__auto__$$, $i__114896$$);
                  $APP.cljs.core.chunk_append($b__114897_item$$, new $APP.cljs.core.List(null, $item$$, null, 1, null));
                  $i__114896$$ += 1;
                } else {
                  $JSCompiler_inline_result$jscomp$3585_c__5501__auto__$$ = !0;
                  break a;
                }
              }
              $JSCompiler_inline_result$jscomp$3585_c__5501__auto__$$ = void 0;
            }
            return $JSCompiler_inline_result$jscomp$3585_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114897_item$$), $clojure$math$combinatorics$combinations_$_iter__114894$$($APP.cljs.core.chunk_rest($s__114895__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114897_item$$), null);
          }
          $b__114897_item$$ = $APP.cljs.core.first($s__114895__$2_temp__5825__auto__$$);
          return $APP.cljs.core.cons(new $APP.cljs.core.List(null, $b__114897_item$$, null, 1, null), $clojure$math$combinatorics$combinations_$_iter__114894$$($APP.cljs.core.rest($s__114895__$2_temp__5825__auto__$$)));
        }
        return null;
      }
    }, null, null);
  }($APP.cljs.core.distinct.cljs$core$IFn$_invoke$arity$1($items$$)) : $APP.cljs.core.truth_($APP.clojure.math.combinatorics.all_different_QMARK_($items$$)) ? $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($t$$, $cnt$$) ? new $APP.cljs.core.List(null, $APP.cljs.core.seq($items$$), null, 1, null) : $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__114893_SHARP_$$) {
    return $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($v_items$$, $p1__114893_SHARP_$$);
  }, $APP.clojure.math.combinatorics.index_combinations($t$$, $cnt$$)) : $APP.clojure.math.combinatorics.multi_comb($items$$, $t$$);
};
$APP.clojure.math.combinatorics.unchunk = function($s$$) {
  return new $APP.cljs.core.LazySeq(null, function() {
    if ($APP.cljs.core.seq($s$$)) {
      var $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.cons, $JSCompiler_temp_const$jscomp$1$$ = $APP.cljs.core.first($s$$);
      var $G__114898$jscomp$inline_9136_JSCompiler_inline_result$$ = $APP.cljs.core.rest($s$$);
      $G__114898$jscomp$inline_9136_JSCompiler_inline_result$$ = $APP.clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1 ? $APP.clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1($G__114898$jscomp$inline_9136_JSCompiler_inline_result$$) : $APP.clojure.math.combinatorics.unchunk.call(null, $G__114898$jscomp$inline_9136_JSCompiler_inline_result$$);
      return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_temp_const$jscomp$1$$, $G__114898$jscomp$inline_9136_JSCompiler_inline_result$$);
    }
    return null;
  }, null, null);
};
$APP.clojure.math.combinatorics.subsets = function($items$$) {
  return $APP.clojure.math.combinatorics.mapjoin(function($n$$) {
    return $APP.clojure.math.combinatorics.combinations($items$$, $n$$);
  }, $APP.clojure.math.combinatorics.unchunk($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.count($items$$) + 1)));
};
$APP.clojure.math.combinatorics.cartesian_product = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$552_argseq__5756__auto__$$ = [], $len__5749__auto___115158$$ = arguments.length, $i__5750__auto___115159$$ = 0;;) {
    if ($i__5750__auto___115159$$ < $len__5749__auto___115158$$) {
      $args__5755__auto__$jscomp$552_argseq__5756__auto__$$.push(arguments[$i__5750__auto___115159$$]), $i__5750__auto___115159$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$552_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$552_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$552_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return $APP.clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$552_argseq__5756__auto__$$);
};
$APP.clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = function($seqs$$) {
  var $v_original_seqs$$ = $APP.cljs.core.vec($seqs$$), $step$$ = function $clojure$math$combinatorics$step$$($v_seqs$$) {
    return $APP.cljs.core.truth_($v_seqs$$) ? $APP.cljs.core.cons($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.first, $v_seqs$$), new $APP.cljs.core.LazySeq(null, function() {
      a: {
        var $JSCompiler_inline_result$jscomp$3590_i$$ = $APP.cljs.core.count($v_seqs$$) - 1;
        for (var $G__115162$jscomp$inline_9144_v_seqs__$2$$ = $v_seqs$$;;) {
          if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($JSCompiler_inline_result$jscomp$3590_i$$, -1)) {
            $JSCompiler_inline_result$jscomp$3590_i$$ = null;
            break a;
          } else {
            var $G__115161$jscomp$inline_9143_temp__5823__auto__$$ = $APP.cljs.core.next($G__115162$jscomp$inline_9144_v_seqs__$2$$.cljs$core$IFn$_invoke$arity$1 ? $G__115162$jscomp$inline_9144_v_seqs__$2$$.cljs$core$IFn$_invoke$arity$1($JSCompiler_inline_result$jscomp$3590_i$$) : $G__115162$jscomp$inline_9144_v_seqs__$2$$.call(null, $JSCompiler_inline_result$jscomp$3590_i$$));
            if ($G__115161$jscomp$inline_9143_temp__5823__auto__$$) {
              $JSCompiler_inline_result$jscomp$3590_i$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__115162$jscomp$inline_9144_v_seqs__$2$$, $JSCompiler_inline_result$jscomp$3590_i$$, $G__115161$jscomp$inline_9143_temp__5823__auto__$$);
              break a;
            } else {
              $G__115161$jscomp$inline_9143_temp__5823__auto__$$ = $JSCompiler_inline_result$jscomp$3590_i$$ - 1;
              $G__115162$jscomp$inline_9144_v_seqs__$2$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__115162$jscomp$inline_9144_v_seqs__$2$$, $JSCompiler_inline_result$jscomp$3590_i$$, $v_original_seqs$$.cljs$core$IFn$_invoke$arity$1 ? $v_original_seqs$$.cljs$core$IFn$_invoke$arity$1($JSCompiler_inline_result$jscomp$3590_i$$) : $v_original_seqs$$.call(null, $JSCompiler_inline_result$jscomp$3590_i$$));
              $JSCompiler_inline_result$jscomp$3590_i$$ = $G__115161$jscomp$inline_9143_temp__5823__auto__$$;
              continue;
            }
          }
          break;
        }
        $JSCompiler_inline_result$jscomp$3590_i$$ = void 0;
      }
      return $clojure$math$combinatorics$step$$($JSCompiler_inline_result$jscomp$3590_i$$);
    }, null, null)) : null;
  };
  return $APP.cljs.core.every_QMARK_($APP.cljs.core.seq, $seqs$$) ? new $APP.cljs.core.LazySeq(null, function() {
    return $step$$($v_original_seqs$$);
  }, null, null) : null;
};
$APP.clojure.math.combinatorics.cartesian_product.cljs$lang$maxFixedArity = 0;
$APP.clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = function($seq114899$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq114899$$));
};
$APP.clojure.math.combinatorics.selections = function($items$$, $n$$) {
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.clojure.math.combinatorics.cartesian_product, $APP.cljs.core.take.cljs$core$IFn$_invoke$arity$2($n$$, $APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$1($items$$)));
};
$APP.clojure.math.combinatorics.iter_perm = function($v$$) {
  var $len$$ = $APP.cljs.core.count($v$$), $G__115166_j$jscomp$293_k$$ = function() {
    for (var $i$$ = $len$$ - 2;;) {
      if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($i$$, -1)) {
        return null;
      }
      var $JSCompiler_temp_const$$ = $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($i$$) : $v$$.call(null, $i$$);
      var $G__114900$jscomp$inline_9146_JSCompiler_inline_result$$ = $i$$ + 1;
      $G__114900$jscomp$inline_9146_JSCompiler_inline_result$$ = $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($G__114900$jscomp$inline_9146_JSCompiler_inline_result$$) : $v$$.call(null, $G__114900$jscomp$inline_9146_JSCompiler_inline_result$$);
      if ($JSCompiler_temp_const$$ < $G__114900$jscomp$inline_9146_JSCompiler_inline_result$$) {
        return $i$$;
      }
      --$i$$;
    }
  }();
  if ($APP.cljs.core.truth_($G__115166_j$jscomp$293_k$$)) {
    var $vj$$ = $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($G__115166_j$jscomp$293_k$$) : $v$$.call(null, $G__115166_j$jscomp$293_k$$), $G__115165_l$jscomp$381_v__$1$$ = function() {
      for (var $i$$ = $len$$ - 1;;) {
        if ($vj$$ < ($v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($i$$) : $v$$.call(null, $i$$))) {
          return $i$$;
        }
        --$i$$;
      }
    }();
    $G__115165_l$jscomp$381_v__$1$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic($v$$, $G__115166_j$jscomp$293_k$$, $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($G__115165_l$jscomp$381_v__$1$$) : $v$$.call(null, $G__115165_l$jscomp$381_v__$1$$), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$G__115165_l$jscomp$381_v__$1$$, $vj$$], 0));
    $G__115166_j$jscomp$293_k$$ += 1;
    for (var $G__115167_l__$1$$ = $len$$ - 1;;) {
      if ($G__115166_j$jscomp$293_k$$ < $G__115167_l__$1$$) {
        $G__115165_l$jscomp$381_v__$1$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic($G__115165_l$jscomp$381_v__$1$$, $G__115166_j$jscomp$293_k$$, $G__115165_l$jscomp$381_v__$1$$.cljs$core$IFn$_invoke$arity$1 ? $G__115165_l$jscomp$381_v__$1$$.cljs$core$IFn$_invoke$arity$1($G__115167_l__$1$$) : $G__115165_l$jscomp$381_v__$1$$.call(null, $G__115167_l__$1$$), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$G__115167_l__$1$$, $G__115165_l$jscomp$381_v__$1$$.cljs$core$IFn$_invoke$arity$1 ? 
        $G__115165_l$jscomp$381_v__$1$$.cljs$core$IFn$_invoke$arity$1($G__115166_j$jscomp$293_k$$) : $G__115165_l$jscomp$381_v__$1$$.call(null, $G__115166_j$jscomp$293_k$$)], 0)), $G__115166_j$jscomp$293_k$$ += 1, --$G__115167_l__$1$$;
      } else {
        return $G__115165_l$jscomp$381_v__$1$$;
      }
    }
  } else {
    return null;
  }
};
$APP.clojure.math.combinatorics.vec_lex_permutations = function($v$$) {
  return $APP.cljs.core.truth_($v$$) ? $APP.cljs.core.cons($v$$, new $APP.cljs.core.LazySeq(null, function() {
    var $G__114901$$ = $APP.clojure.math.combinatorics.iter_perm($v$$);
    return $APP.clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1 ? $APP.clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1($G__114901$$) : $APP.clojure.math.combinatorics.vec_lex_permutations.call(null, $G__114901$$);
  }, null, null)) : null;
};
$APP.clojure.math.combinatorics.lex_permutations = function($c$$) {
  return new $APP.cljs.core.LazySeq(null, function() {
    var $vec_sorted$$ = $APP.cljs.core.vec($APP.cljs.core.sort.cljs$core$IFn$_invoke$arity$1($c$$));
    return $APP.cljs.core.count($vec_sorted$$) === 0 ? new $APP.cljs.core.List(null, $APP.cljs.core.PersistentVector.EMPTY, null, 1, null) : $APP.clojure.math.combinatorics.vec_lex_permutations($vec_sorted$$);
  }, null, null);
};
$APP.clojure.math.combinatorics.sorted_numbers_QMARK_ = function($s$$) {
  var $and__5023__auto__$jscomp$588_or__5025__auto__$$ = $APP.cljs.core.every_QMARK_($APP.cljs.core.number_QMARK_, $s$$);
  return $and__5023__auto__$jscomp$588_or__5025__auto__$$ ? ($and__5023__auto__$jscomp$588_or__5025__auto__$$ = $APP.cljs.core.empty_QMARK_($s$$)) ? $and__5023__auto__$jscomp$588_or__5025__auto__$$ : $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._LT__EQ_, $s$$) : $and__5023__auto__$jscomp$588_or__5025__auto__$$;
};
$APP.clojure.math.combinatorics.multi_perm = function($indices$jscomp$11_l$$) {
  var $f$$ = $APP.cljs.core.frequencies($indices$jscomp$11_l$$), $v$$ = $APP.cljs.core.vec($APP.cljs.core.distinct.cljs$core$IFn$_invoke$arity$1($indices$jscomp$11_l$$));
  $indices$jscomp$11_l$$ = $APP.clojure.math.combinatorics.join(function() {
    return function $clojure$math$combinatorics$multi_perm_$_iter__114902$$($s__114903$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (;;) {
          var $s__114903__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__114903$$);
          if ($s__114903__$2_temp__5825__auto__$$) {
            if ($APP.cljs.core.chunked_seq_QMARK_($s__114903__$2_temp__5825__auto__$$)) {
              var $c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__114903__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($c__5501__auto__$$), $b__114905$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              return function() {
                for (var $i__114904$$ = 0;;) {
                  if ($i__114904$$ < $size__5502__auto__$$) {
                    var $i$$ = $APP.cljs.core._nth($c__5501__auto__$$, $i__114904$$), $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.chunk_append, $JSCompiler_temp_const$jscomp$1$$ = $b__114905$$, $JSCompiler_temp_const$jscomp$2$$ = $APP.cljs.core.repeat, $JSCompiler_temp_const$jscomp$3$$ = $JSCompiler_temp_const$jscomp$2$$.cljs$core$IFn$_invoke$arity$2;
                    var $G__114906$jscomp$inline_9148_JSCompiler_inline_result$$ = $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($i$$) : $v$$.call(null, $i$$);
                    $G__114906$jscomp$inline_9148_JSCompiler_inline_result$$ = $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($G__114906$jscomp$inline_9148_JSCompiler_inline_result$$) : $f$$.call(null, $G__114906$jscomp$inline_9148_JSCompiler_inline_result$$);
                    $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_temp_const$jscomp$1$$, $JSCompiler_temp_const$jscomp$3$$.call($JSCompiler_temp_const$jscomp$2$$, $G__114906$jscomp$inline_9148_JSCompiler_inline_result$$, $i$$));
                    $i__114904$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114905$$), $clojure$math$combinatorics$multi_perm_$_iter__114902$$($APP.cljs.core.chunk_rest($s__114903__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114905$$), null);
            }
            var $i$$ = $APP.cljs.core.first($s__114903__$2_temp__5825__auto__$$);
            return $APP.cljs.core.cons($APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(function() {
              var $G__114907$$ = $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($i$$) : $v$$.call(null, $i$$);
              return $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($G__114907$$) : $f$$.call(null, $G__114907$$);
            }(), $i$$), $clojure$math$combinatorics$multi_perm_$_iter__114902$$($APP.cljs.core.rest($s__114903__$2_temp__5825__auto__$$)));
          }
          return null;
        }
      }, null, null);
    }($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.count($v$$)));
  }());
  return $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.map, $v$$), $APP.clojure.math.combinatorics.lex_permutations($indices$jscomp$11_l$$));
};
$APP.clojure.math.combinatorics.permutations = function($items$$) {
  if ($APP.cljs.core.truth_($APP.clojure.math.combinatorics.sorted_numbers_QMARK_($items$$))) {
    return $APP.clojure.math.combinatorics.lex_permutations($items$$);
  }
  if ($APP.cljs.core.truth_($APP.clojure.math.combinatorics.all_different_QMARK_($items$$))) {
    var $v$$ = $APP.cljs.core.vec($items$$);
    return $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__114908_SHARP_$$) {
      return $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($v$$, $p1__114908_SHARP_$$);
    }, $APP.clojure.math.combinatorics.lex_permutations($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.count($v$$))));
  }
  return $APP.clojure.math.combinatorics.multi_perm($items$$);
};
$APP.clojure.math.combinatorics.permuted_combinations = function($items$$, $t$$) {
  return $APP.clojure.math.combinatorics.join($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.clojure.math.combinatorics.permutations, $APP.clojure.math.combinatorics.combinations($items$$, $t$$)));
};
$APP.clojure.math.combinatorics.factorial = function($G__115173_n$jscomp$932_n__$1$$) {
  for (var $G__115172_acc$$ = 1;;) {
    if ($G__115173_n$jscomp$932_n__$1$$ === 0) {
      return $G__115172_acc$$;
    }
    $G__115172_acc$$ = $APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? $APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2($G__115172_acc$$, $G__115173_n$jscomp$932_n__$1$$) : $APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null, $G__115172_acc$$, $G__115173_n$jscomp$932_n__$1$$);
    --$G__115173_n$jscomp$932_n__$1$$;
  }
};
$APP.clojure.math.combinatorics.factorial_numbers = function($G__115175_digits$jscomp$6_n$$) {
  var $G__115174_n__$1$$ = $G__115175_digits$jscomp$6_n$$;
  $G__115175_digits$jscomp$6_n$$ = $APP.cljs.core.List.EMPTY;
  for (var $G__115176_divisor$$ = 1;;) {
    if ($G__115174_n__$1$$ === 0) {
      return $G__115175_digits$jscomp$6_n$$;
    }
    var $q$$ = $APP.cljs.core.quot($G__115174_n__$1$$, $G__115176_divisor$$), $r$$ = $APP.cljs.core.rem($G__115174_n__$1$$, $G__115176_divisor$$);
    $G__115174_n__$1$$ = $q$$;
    $G__115175_digits$jscomp$6_n$$ = $APP.cljs.core.cons($r$$, $G__115175_digits$jscomp$6_n$$);
    $G__115176_divisor$$ += 1;
  }
};
$APP.clojure.math.combinatorics.remove_nth = function($G__115179_l$jscomp$383_l__$1$$, $G__115180_n$jscomp$934_n__$1$$) {
  for (var $G__115178_acc$$ = $APP.cljs.core.PersistentVector.EMPTY;;) {
    if ($G__115180_n$jscomp$934_n__$1$$ === 0) {
      return $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($G__115178_acc$$, $APP.cljs.core.rest($G__115179_l$jscomp$383_l__$1$$));
    }
    $G__115178_acc$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__115178_acc$$, $APP.cljs.core.first($G__115179_l$jscomp$383_l__$1$$));
    $G__115179_l$jscomp$383_l__$1$$ = $APP.cljs.core.rest($G__115179_l$jscomp$383_l__$1$$);
    --$G__115180_n$jscomp$934_n__$1$$;
  }
};
$APP.clojure.math.combinatorics.nth_permutation_distinct = function($G__115185_l$jscomp$384_l__$1$$, $G__115186_fact_nums_n$jscomp$935_perm$$) {
  var $G__115184_indices$jscomp$12_length$$ = $APP.cljs.core.count($G__115185_l$jscomp$384_l__$1$$);
  $G__115186_fact_nums_n$jscomp$935_perm$$ = $APP.clojure.math.combinatorics.factorial_numbers($G__115186_fact_nums_n$jscomp$935_perm$$);
  $G__115184_indices$jscomp$12_length$$ = $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2($G__115184_indices$jscomp$12_length$$ - $APP.cljs.core.count($G__115186_fact_nums_n$jscomp$935_perm$$), 0), $G__115186_fact_nums_n$jscomp$935_perm$$);
  for ($G__115186_fact_nums_n$jscomp$935_perm$$ = $APP.cljs.core.PersistentVector.EMPTY;;) {
    if ($APP.cljs.core.empty_QMARK_($G__115184_indices$jscomp$12_length$$)) {
      return $G__115186_fact_nums_n$jscomp$935_perm$$;
    }
    var $i$$ = $APP.cljs.core.first($G__115184_indices$jscomp$12_length$$), $item$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$2($G__115185_l$jscomp$384_l__$1$$, $i$$);
    $G__115184_indices$jscomp$12_length$$ = $APP.cljs.core.rest($G__115184_indices$jscomp$12_length$$);
    $G__115185_l$jscomp$384_l__$1$$ = $APP.clojure.math.combinatorics.remove_nth($G__115185_l$jscomp$384_l__$1$$, $i$$);
    $G__115186_fact_nums_n$jscomp$935_perm$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__115186_fact_nums_n$jscomp$935_perm$$, $item$$);
  }
};
$APP.clojure.math.combinatorics.count_permutations_from_frequencies = function($counts$$) {
  $counts$$ = $APP.cljs.core.vals($counts$$);
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._SLASH_, $APP.clojure.math.combinatorics.factorial($APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._PLUS_, $counts$$)), $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.clojure.math.combinatorics.factorial, $counts$$));
};
$APP.clojure.math.combinatorics.count_permutations = function($l$$) {
  return $APP.cljs.core.truth_($APP.clojure.math.combinatorics.all_different_QMARK_($l$$)) ? $APP.clojure.math.combinatorics.factorial($APP.cljs.core.count($l$$)) : $APP.clojure.math.combinatorics.count_permutations_from_frequencies($APP.cljs.core.frequencies($l$$));
};
$APP.clojure.math.combinatorics.initial_perm_numbers = function($freqs$$) {
  return $APP.cljs.core.reductions.cljs$core$IFn$_invoke$arity$3($APP.clojure.math.combinatorics._PLUS__SINGLEQUOTE_, 0, function() {
    return function $clojure$math$combinatorics$initial_perm_numbers_$_iter__114909$$($s__114910$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (;;) {
          var $s__114910__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__114910$$);
          if ($s__114910__$2_temp__5825__auto__$$) {
            if ($APP.cljs.core.chunked_seq_QMARK_($s__114910__$2_temp__5825__auto__$$)) {
              var $JSCompiler_inline_result$jscomp$3599_c__5501__auto__$jscomp$307_v$$ = $APP.cljs.core.chunk_first($s__114910__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$3599_c__5501__auto__$jscomp$307_v$$), $b__114912_k$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              a: {
                for (var $i__114911$$ = 0;;) {
                  if ($i__114911$$ < $size__5502__auto__$$) {
                    var $v$jscomp$inline_9153_vec__114913$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$3599_c__5501__auto__$jscomp$307_v$$, $i__114911$$), $k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$jscomp$inline_9153_vec__114913$$, 0, null);
                    $v$jscomp$inline_9153_vec__114913$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$jscomp$inline_9153_vec__114913$$, 1, null);
                    $APP.cljs.core.chunk_append($b__114912_k$$, $APP.clojure.math.combinatorics.count_permutations_from_frequencies($APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($freqs$$, $k$$, $v$jscomp$inline_9153_vec__114913$$ - 1)));
                    $i__114911$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$3599_c__5501__auto__$jscomp$307_v$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$3599_c__5501__auto__$jscomp$307_v$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$3599_c__5501__auto__$jscomp$307_v$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114912_k$$), $clojure$math$combinatorics$initial_perm_numbers_$_iter__114909$$($APP.cljs.core.chunk_rest($s__114910__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114912_k$$), null);
            }
            $JSCompiler_inline_result$jscomp$3599_c__5501__auto__$jscomp$307_v$$ = $APP.cljs.core.first($s__114910__$2_temp__5825__auto__$$);
            $b__114912_k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$3599_c__5501__auto__$jscomp$307_v$$, 0, null);
            $JSCompiler_inline_result$jscomp$3599_c__5501__auto__$jscomp$307_v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$3599_c__5501__auto__$jscomp$307_v$$, 1, null);
            return $APP.cljs.core.cons($APP.clojure.math.combinatorics.count_permutations_from_frequencies($APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($freqs$$, $b__114912_k$$, $JSCompiler_inline_result$jscomp$3599_c__5501__auto__$jscomp$307_v$$ - 1)), $clojure$math$combinatorics$initial_perm_numbers_$_iter__114909$$($APP.cljs.core.rest($s__114910__$2_temp__5825__auto__$$)));
          }
          return null;
        }
      }, null, null);
    }($freqs$$);
  }());
};
$APP.clojure.math.combinatorics.index_remainder = function($G__115192_perm_numbers_perm_numbers__$1$$, $n$$) {
  for (var $G__115193_index$$ = 0;;) {
    if ($APP.cljs.core.first($G__115192_perm_numbers_perm_numbers__$1$$) <= $n$$ && $n$$ < $APP.cljs.core.second($G__115192_perm_numbers_perm_numbers__$1$$)) {
      return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__115193_index$$, $n$$ - $APP.cljs.core.first($G__115192_perm_numbers_perm_numbers__$1$$)], null);
    }
    $G__115192_perm_numbers_perm_numbers__$1$$ = $APP.cljs.core.rest($G__115192_perm_numbers_perm_numbers__$1$$);
    $G__115193_index$$ += 1;
  }
};
$APP.clojure.math.combinatorics.dec_key = function($m$$, $k$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1, $m$$.cljs$core$IFn$_invoke$arity$1 ? $m$$.cljs$core$IFn$_invoke$arity$1($k$$) : $m$$.call(null, $k$$)) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($m$$, $k$$) : $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$3($m$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$k$$], null), $APP.cljs.core.dec);
};
$APP.clojure.math.combinatorics.factorial_numbers_with_duplicates = function($G__115199_digits$jscomp$7_n$$, $G__115200_freqs$$) {
  var $G__115198_n__$1$$ = $G__115199_digits$jscomp$7_n$$;
  for ($G__115199_digits$jscomp$7_n$$ = $APP.cljs.core.PersistentVector.EMPTY;;) {
    if ($G__115198_n__$1$$ === 0) {
      return $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($G__115199_digits$jscomp$7_n$$, $APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._PLUS_, $APP.cljs.core.vals($G__115200_freqs$$)), 0));
    }
    $G__115198_n__$1$$ = $APP.clojure.math.combinatorics.index_remainder($APP.clojure.math.combinatorics.initial_perm_numbers($G__115200_freqs$$), $G__115198_n__$1$$);
    var $index$jscomp$254_nth_key$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__115198_n__$1$$, 0, null);
    $G__115198_n__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__115198_n__$1$$, 1, null);
    $G__115199_digits$jscomp$7_n$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__115199_digits$jscomp$7_n$$, $index$jscomp$254_nth_key$$);
    $index$jscomp$254_nth_key$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.keys($G__115200_freqs$$), $index$jscomp$254_nth_key$$);
    $G__115200_freqs$$ = $APP.clojure.math.combinatorics.dec_key($G__115200_freqs$$, $index$jscomp$254_nth_key$$);
  }
};
$APP.clojure.math.combinatorics.nth_permutation_duplicates = function($G__115201_freqs$jscomp$3_l$$, $G__115202_indices$jscomp$13_n$$) {
  $G__115201_freqs$jscomp$3_l$$ = $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.sorted_map(), $APP.cljs.core.frequencies($G__115201_freqs$jscomp$3_l$$));
  $G__115202_indices$jscomp$13_n$$ = $APP.clojure.math.combinatorics.factorial_numbers_with_duplicates($G__115202_indices$jscomp$13_n$$, $G__115201_freqs$jscomp$3_l$$);
  for (var $G__115203_perm$$ = $APP.cljs.core.PersistentVector.EMPTY;;) {
    if ($APP.cljs.core.empty_QMARK_($G__115202_indices$jscomp$13_n$$)) {
      return $G__115203_perm$$;
    }
    var $i$jscomp$805_item$$ = $APP.cljs.core.first($G__115202_indices$jscomp$13_n$$);
    $i$jscomp$805_item$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.keys($G__115201_freqs$jscomp$3_l$$), $i$jscomp$805_item$$);
    $G__115201_freqs$jscomp$3_l$$ = $APP.clojure.math.combinatorics.dec_key($G__115201_freqs$jscomp$3_l$$, $i$jscomp$805_item$$);
    $G__115202_indices$jscomp$13_n$$ = $APP.cljs.core.rest($G__115202_indices$jscomp$13_n$$);
    $G__115203_perm$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__115203_perm$$, $i$jscomp$805_item$$);
  }
};
$APP.clojure.math.combinatorics.nth_permutation = function($indices$jscomp$14_items$$, $n$$) {
  if ($APP.cljs.core.truth_($APP.clojure.math.combinatorics.sorted_numbers_QMARK_($indices$jscomp$14_items$$))) {
    return $APP.cljs.core.truth_($APP.clojure.math.combinatorics.all_different_QMARK_($indices$jscomp$14_items$$)) ? $APP.clojure.math.combinatorics.nth_permutation_distinct($indices$jscomp$14_items$$, $n$$) : $APP.clojure.math.combinatorics.nth_permutation_duplicates($indices$jscomp$14_items$$, $n$$);
  }
  if ($APP.cljs.core.truth_($APP.clojure.math.combinatorics.all_different_QMARK_($indices$jscomp$14_items$$))) {
    var $v$$ = $APP.cljs.core.vec($indices$jscomp$14_items$$);
    $n$$ = $APP.clojure.math.combinatorics.nth_permutation_distinct($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.count($indices$jscomp$14_items$$)), $n$$);
    return $APP.cljs.core.vec($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($v$$, $n$$));
  }
  $v$$ = $APP.cljs.core.vec($APP.cljs.core.distinct.cljs$core$IFn$_invoke$arity$1($indices$jscomp$14_items$$));
  var $f$$ = $APP.cljs.core.frequencies($indices$jscomp$14_items$$);
  $indices$jscomp$14_items$$ = $APP.clojure.math.combinatorics.join(function() {
    return function $clojure$math$combinatorics$nth_permutation_$_iter__114933$$($s__114934$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (;;) {
          var $s__114934__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__114934$$);
          if ($s__114934__$2_temp__5825__auto__$$) {
            if ($APP.cljs.core.chunked_seq_QMARK_($s__114934__$2_temp__5825__auto__$$)) {
              var $c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__114934__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($c__5501__auto__$$), $b__114936$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              return function() {
                for (var $i__114935$$ = 0;;) {
                  if ($i__114935$$ < $size__5502__auto__$$) {
                    var $i$$ = $APP.cljs.core._nth($c__5501__auto__$$, $i__114935$$), $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.chunk_append, $JSCompiler_temp_const$jscomp$1$$ = $b__114936$$, $JSCompiler_temp_const$jscomp$2$$ = $APP.cljs.core.repeat, $JSCompiler_temp_const$jscomp$3$$ = $JSCompiler_temp_const$jscomp$2$$.cljs$core$IFn$_invoke$arity$2;
                    var $G__114937$jscomp$inline_9158_JSCompiler_inline_result$$ = $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($i$$) : $v$$.call(null, $i$$);
                    $G__114937$jscomp$inline_9158_JSCompiler_inline_result$$ = $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($G__114937$jscomp$inline_9158_JSCompiler_inline_result$$) : $f$$.call(null, $G__114937$jscomp$inline_9158_JSCompiler_inline_result$$);
                    $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_temp_const$jscomp$1$$, $JSCompiler_temp_const$jscomp$3$$.call($JSCompiler_temp_const$jscomp$2$$, $G__114937$jscomp$inline_9158_JSCompiler_inline_result$$, $i$$));
                    $i__114935$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114936$$), $clojure$math$combinatorics$nth_permutation_$_iter__114933$$($APP.cljs.core.chunk_rest($s__114934__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114936$$), null);
            }
            var $i$$ = $APP.cljs.core.first($s__114934__$2_temp__5825__auto__$$);
            return $APP.cljs.core.cons($APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(function() {
              var $G__114938$$ = $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($i$$) : $v$$.call(null, $i$$);
              return $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($G__114938$$) : $f$$.call(null, $G__114938$$);
            }(), $i$$), $clojure$math$combinatorics$nth_permutation_$_iter__114933$$($APP.cljs.core.rest($s__114934__$2_temp__5825__auto__$$)));
          }
          return null;
        }
      }, null, null);
    }($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.count($v$$)));
  }());
  return $APP.cljs.core.vec($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($v$$, $APP.clojure.math.combinatorics.nth_permutation_duplicates($indices$jscomp$14_items$$, $n$$)));
};
$APP.clojure.math.combinatorics.drop_permutations = function($indices$jscomp$15_items$$, $n$jscomp$940_perm_indices$$) {
  if ($n$jscomp$940_perm_indices$$ === 0) {
    return $APP.clojure.math.combinatorics.permutations($indices$jscomp$15_items$$);
  }
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($n$jscomp$940_perm_indices$$, $APP.clojure.math.combinatorics.count_permutations($indices$jscomp$15_items$$))) {
    return $APP.cljs.core.List.EMPTY;
  }
  if ($APP.cljs.core.truth_($APP.clojure.math.combinatorics.sorted_numbers_QMARK_($indices$jscomp$15_items$$))) {
    return $APP.cljs.core.truth_($APP.clojure.math.combinatorics.all_different_QMARK_($indices$jscomp$15_items$$)) ? $APP.clojure.math.combinatorics.vec_lex_permutations($APP.clojure.math.combinatorics.nth_permutation_distinct($indices$jscomp$15_items$$, $n$jscomp$940_perm_indices$$)) : $APP.clojure.math.combinatorics.vec_lex_permutations($APP.clojure.math.combinatorics.nth_permutation_duplicates($indices$jscomp$15_items$$, $n$jscomp$940_perm_indices$$));
  }
  if ($APP.cljs.core.truth_($APP.clojure.math.combinatorics.all_different_QMARK_($indices$jscomp$15_items$$))) {
    var $v$$ = $APP.cljs.core.vec($indices$jscomp$15_items$$);
    $n$jscomp$940_perm_indices$$ = $APP.clojure.math.combinatorics.nth_permutation_distinct($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.count($indices$jscomp$15_items$$)), $n$jscomp$940_perm_indices$$);
    return $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.map, $v$$), $APP.clojure.math.combinatorics.vec_lex_permutations($n$jscomp$940_perm_indices$$));
  }
  $v$$ = $APP.cljs.core.vec($APP.cljs.core.distinct.cljs$core$IFn$_invoke$arity$1($indices$jscomp$15_items$$));
  var $f$$ = $APP.cljs.core.frequencies($indices$jscomp$15_items$$);
  $indices$jscomp$15_items$$ = $APP.clojure.math.combinatorics.join(function() {
    return function $clojure$math$combinatorics$drop_permutations_$_iter__114939$$($s__114940$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (;;) {
          var $s__114940__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__114940$$);
          if ($s__114940__$2_temp__5825__auto__$$) {
            if ($APP.cljs.core.chunked_seq_QMARK_($s__114940__$2_temp__5825__auto__$$)) {
              var $c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__114940__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($c__5501__auto__$$), $b__114942$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              return function() {
                for (var $i__114941$$ = 0;;) {
                  if ($i__114941$$ < $size__5502__auto__$$) {
                    var $i$$ = $APP.cljs.core._nth($c__5501__auto__$$, $i__114941$$), $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.chunk_append, $JSCompiler_temp_const$jscomp$1$$ = $b__114942$$, $JSCompiler_temp_const$jscomp$2$$ = $APP.cljs.core.repeat, $JSCompiler_temp_const$jscomp$3$$ = $JSCompiler_temp_const$jscomp$2$$.cljs$core$IFn$_invoke$arity$2;
                    var $G__114943$jscomp$inline_9160_JSCompiler_inline_result$$ = $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($i$$) : $v$$.call(null, $i$$);
                    $G__114943$jscomp$inline_9160_JSCompiler_inline_result$$ = $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($G__114943$jscomp$inline_9160_JSCompiler_inline_result$$) : $f$$.call(null, $G__114943$jscomp$inline_9160_JSCompiler_inline_result$$);
                    $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_temp_const$jscomp$1$$, $JSCompiler_temp_const$jscomp$3$$.call($JSCompiler_temp_const$jscomp$2$$, $G__114943$jscomp$inline_9160_JSCompiler_inline_result$$, $i$$));
                    $i__114941$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114942$$), $clojure$math$combinatorics$drop_permutations_$_iter__114939$$($APP.cljs.core.chunk_rest($s__114940__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114942$$), null);
            }
            var $i$$ = $APP.cljs.core.first($s__114940__$2_temp__5825__auto__$$);
            return $APP.cljs.core.cons($APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(function() {
              var $G__114944$$ = $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($i$$) : $v$$.call(null, $i$$);
              return $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($G__114944$$) : $f$$.call(null, $G__114944$$);
            }(), $i$$), $clojure$math$combinatorics$drop_permutations_$_iter__114939$$($APP.cljs.core.rest($s__114940__$2_temp__5825__auto__$$)));
          }
          return null;
        }
      }, null, null);
    }($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.count($v$$)));
  }());
  return $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.map, $v$$), $APP.clojure.math.combinatorics.vec_lex_permutations($APP.clojure.math.combinatorics.nth_permutation_duplicates($indices$jscomp$15_items$$, $n$jscomp$940_perm_indices$$)));
};
$APP.clojure.math.combinatorics.n_take_k = function($n$$, $k$$) {
  for (;;) {
    if ($k$$ < 0 || $k$$ > $n$$) {
      return 0;
    }
    if ($k$$ === 0) {
      return 1;
    }
    if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($k$$, 1)) {
      return $n$$;
    }
    if ($k$$ > $APP.cljs.core.quot($n$$, 2)) {
      $k$$ = $n$$ - $k$$;
    } else {
      return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_, $APP.cljs.core.range.cljs$core$IFn$_invoke$arity$2($n$$ - $k$$ + 1, $n$$ + 1)) / $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_, $APP.cljs.core.range.cljs$core$IFn$_invoke$arity$2(1, $k$$ + 1));
    }
  }
};
$APP.clojure.math.combinatorics.count_combinations_from_frequencies = function($G__114952_freqs$$, $t$$) {
  var $G__114951_counts$$ = $APP.cljs.core.vals($G__114952_freqs$$), $sum$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._PLUS_, $G__114951_counts$$);
  if ($t$$ === 0) {
    return 1;
  }
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($t$$, 1)) {
    return $APP.cljs.core.count($G__114952_freqs$$);
  }
  if ($APP.cljs.core.every_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 1, [1, null], null), null), $G__114951_counts$$)) {
    return $APP.clojure.math.combinatorics.n_take_k($APP.cljs.core.count($G__114952_freqs$$), $t$$);
  }
  if ($t$$ > $sum$$) {
    return 0;
  }
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($t$$, $sum$$) || $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count($G__114952_freqs$$), 1)) {
    return 1;
  }
  $G__114951_counts$$ = $APP.clojure.math.combinatorics.dec_key($G__114952_freqs$$, $APP.cljs.core.first($APP.cljs.core.keys($G__114952_freqs$$)));
  $G__114951_counts$$ = $APP.clojure.math.combinatorics.count_combinations_from_frequencies.call(null, $G__114951_counts$$, $t$$ - 1);
  $G__114952_freqs$$ = $APP.clojure.math.combinatorics.count_combinations_from_frequencies.call(null, $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($G__114952_freqs$$, $APP.cljs.core.first($APP.cljs.core.keys($G__114952_freqs$$))), $t$$);
  return $APP.clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? $APP.clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2($G__114951_counts$$, $G__114952_freqs$$) : $APP.clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null, $G__114951_counts$$, $G__114952_freqs$$);
};
$APP.clojure.math.combinatorics.count_combinations_unmemoized = function($items$$, $t$$) {
  return $APP.cljs.core.truth_($APP.clojure.math.combinatorics.all_different_QMARK_($items$$)) ? $APP.clojure.math.combinatorics.n_take_k($APP.cljs.core.count($items$$), $t$$) : $APP.clojure.math.combinatorics.count_combinations_from_frequencies.call(null, $APP.cljs.core.frequencies($items$$), $t$$);
};
$APP.clojure.math.combinatorics.count_combinations = function($items$$, $t$$) {
  var $count_combinations_from_frequencies_orig_val__114955$$ = $APP.clojure.math.combinatorics.count_combinations_from_frequencies, $count_combinations_from_frequencies_temp_val__114956$$ = $APP.cljs.core.memoize($APP.clojure.math.combinatorics.count_combinations_from_frequencies);
  $APP.clojure.math.combinatorics.count_combinations_from_frequencies = $count_combinations_from_frequencies_temp_val__114956$$;
  try {
    return $APP.clojure.math.combinatorics.count_combinations_unmemoized($items$$, $t$$);
  } finally {
    $APP.clojure.math.combinatorics.count_combinations_from_frequencies = $count_combinations_from_frequencies_orig_val__114955$$;
  }
};
$APP.clojure.math.combinatorics.expt_int = function($G__115219_G__115225_base$jscomp$39_z$$, $G__115218_G__115224_pow$jscomp$11_y$$) {
  var $G__115217_G__115223_n$jscomp$942_n__$1$$ = $G__115218_G__115224_pow$jscomp$11_y$$;
  for ($G__115218_G__115224_pow$jscomp$11_y$$ = 1;;) {
    var $t$$ = $APP.cljs.core.even_QMARK_($G__115217_G__115223_n$jscomp$942_n__$1$$);
    $G__115217_G__115223_n$jscomp$942_n__$1$$ = $APP.cljs.core.quot($G__115217_G__115223_n$jscomp$942_n__$1$$, 2);
    if ($t$$) {
      $G__115219_G__115225_base$jscomp$39_z$$ = $APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? $APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2($G__115219_G__115225_base$jscomp$39_z$$, $G__115219_G__115225_base$jscomp$39_z$$) : $APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null, $G__115219_G__115225_base$jscomp$39_z$$, $G__115219_G__115225_base$jscomp$39_z$$);
    } else {
      if ($G__115217_G__115223_n$jscomp$942_n__$1$$ === 0) {
        return $APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? $APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2($G__115219_G__115225_base$jscomp$39_z$$, $G__115218_G__115224_pow$jscomp$11_y$$) : $APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null, $G__115219_G__115225_base$jscomp$39_z$$, $G__115218_G__115224_pow$jscomp$11_y$$);
      }
      $G__115218_G__115224_pow$jscomp$11_y$$ = $APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? $APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2($G__115219_G__115225_base$jscomp$39_z$$, $G__115218_G__115224_pow$jscomp$11_y$$) : $APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null, $G__115219_G__115225_base$jscomp$39_z$$, $G__115218_G__115224_pow$jscomp$11_y$$);
      $G__115219_G__115225_base$jscomp$39_z$$ = $APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? $APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2($G__115219_G__115225_base$jscomp$39_z$$, $G__115219_G__115225_base$jscomp$39_z$$) : $APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null, $G__115219_G__115225_base$jscomp$39_z$$, $G__115219_G__115225_base$jscomp$39_z$$);
    }
  }
};
$APP.clojure.math.combinatorics.count_subsets_unmemoized = function($items$$) {
  return $APP.cljs.core.empty_QMARK_($items$$) ? 1 : $APP.cljs.core.truth_($APP.clojure.math.combinatorics.all_different_QMARK_($items$$)) ? $APP.clojure.math.combinatorics.expt_int(2, $APP.cljs.core.count($items$$)) : $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.clojure.math.combinatorics._PLUS__SINGLEQUOTE_, function() {
    return function $clojure$math$combinatorics$count_subsets_unmemoized_$_iter__114967$$($s__114968$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (;;) {
          var $s__114968__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__114968$$);
          if ($s__114968__$2_temp__5825__auto__$$) {
            if ($APP.cljs.core.chunked_seq_QMARK_($s__114968__$2_temp__5825__auto__$$)) {
              var $JSCompiler_inline_result$jscomp$3612_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__114968__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$3612_c__5501__auto__$$), $b__114970_i$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              a: {
                for (var $i__114969$$ = 0;;) {
                  if ($i__114969$$ < $size__5502__auto__$$) {
                    var $i$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$3612_c__5501__auto__$$, $i__114969$$);
                    $APP.cljs.core.chunk_append($b__114970_i$$, $APP.clojure.math.combinatorics.count_combinations_unmemoized($items$$, $i$$));
                    $i__114969$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$3612_c__5501__auto__$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$3612_c__5501__auto__$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$3612_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114970_i$$), $clojure$math$combinatorics$count_subsets_unmemoized_$_iter__114967$$($APP.cljs.core.chunk_rest($s__114968__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114970_i$$), null);
            }
            $b__114970_i$$ = $APP.cljs.core.first($s__114968__$2_temp__5825__auto__$$);
            return $APP.cljs.core.cons($APP.clojure.math.combinatorics.count_combinations_unmemoized($items$$, $b__114970_i$$), $clojure$math$combinatorics$count_subsets_unmemoized_$_iter__114967$$($APP.cljs.core.rest($s__114968__$2_temp__5825__auto__$$)));
          }
          return null;
        }
      }, null, null);
    }($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$2(0, $APP.cljs.core.count($items$$) + 1));
  }());
};
$APP.clojure.math.combinatorics.count_subsets = function($items$$) {
  var $count_combinations_from_frequencies_orig_val__114976$$ = $APP.clojure.math.combinatorics.count_combinations_from_frequencies, $count_combinations_from_frequencies_temp_val__114977$$ = $APP.cljs.core.memoize($APP.clojure.math.combinatorics.count_combinations_from_frequencies);
  $APP.clojure.math.combinatorics.count_combinations_from_frequencies = $count_combinations_from_frequencies_temp_val__114977$$;
  try {
    return $APP.clojure.math.combinatorics.count_subsets_unmemoized($items$$);
  } finally {
    $APP.clojure.math.combinatorics.count_combinations_from_frequencies = $count_combinations_from_frequencies_orig_val__114976$$;
  }
};
$APP.clojure.math.combinatorics.nth_combination_distinct = function($G__115229_G__115233_items$$, $G__115230_G__115234_t$jscomp$313_t__$1$$, $G__115231_G__115235_n$jscomp$943_n__$1$$) {
  for (var $G__115228_G__115232_comb$$ = $APP.cljs.core.PersistentVector.EMPTY;;) {
    if ($G__115231_G__115235_n$jscomp$943_n__$1$$ === 0 || $APP.cljs.core.empty_QMARK_($G__115229_G__115233_items$$)) {
      return $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($G__115228_G__115232_comb$$, $APP.cljs.core.take.cljs$core$IFn$_invoke$arity$2($G__115230_G__115234_t$jscomp$313_t__$1$$, $G__115229_G__115233_items$$));
    }
    var $dc_dt$$ = $APP.clojure.math.combinatorics.n_take_k($APP.cljs.core.count($G__115229_G__115233_items$$) - 1, $G__115230_G__115234_t$jscomp$313_t__$1$$ - 1);
    $G__115231_G__115235_n$jscomp$943_n__$1$$ < $dc_dt$$ ? ($G__115228_G__115232_comb$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__115228_G__115232_comb$$, $APP.cljs.core.first($G__115229_G__115233_items$$)), $G__115229_G__115233_items$$ = $APP.cljs.core.rest($G__115229_G__115233_items$$), --$G__115230_G__115234_t$jscomp$313_t__$1$$) : ($G__115229_G__115233_items$$ = $APP.cljs.core.rest($G__115229_G__115233_items$$), $G__115231_G__115235_n$jscomp$943_n__$1$$ -= $dc_dt$$);
  }
};
$APP.clojure.math.combinatorics.nth_combination_freqs = function($G__115238_G__115245_dc_dt$jscomp$1_freqs$$, $G__115239_G__115242_remove_one_key_t$$, $G__115240_G__115243_first_key_n$$) {
  for (var $comb$$ = $APP.cljs.core.PersistentVector.EMPTY, $freqs__$1$$ = $G__115238_G__115245_dc_dt$jscomp$1_freqs$$, $t__$1$$ = $G__115239_G__115242_remove_one_key_t$$, $n__$1$$ = $G__115240_G__115243_first_key_n$$;;) {
    if ($n__$1$$ === 0 || $APP.cljs.core.empty_QMARK_($freqs__$1$$)) {
      return $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($comb$$, $APP.cljs.core.take.cljs$core$IFn$_invoke$arity$2($t__$1$$, $APP.clojure.math.combinatorics.join(function() {
        return function($comb$$, $freqs__$1$$, $t__$1$$, $n__$1$$) {
          return function $clojure$math$combinatorics$nth_combination_freqs_$_iter__114988$$($s__114989$$) {
            return new $APP.cljs.core.LazySeq(null, function($comb$$, $freqs__$1$$, $t__$1$$, $n__$1$$) {
              return function() {
                for (;;) {
                  var $s__114989__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__114989$$);
                  if ($s__114989__$2_temp__5825__auto__$$) {
                    if ($APP.cljs.core.chunked_seq_QMARK_($s__114989__$2_temp__5825__auto__$$)) {
                      var $JSCompiler_inline_result$jscomp$3613_c__5501__auto__$jscomp$311_v$$ = $APP.cljs.core.chunk_first($s__114989__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$3613_c__5501__auto__$jscomp$311_v$$), $b__114991_k$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                      a: {
                        for (var $i__114990$$ = 0;;) {
                          if ($i__114990$$ < $size__5502__auto__$$) {
                            var $v$jscomp$inline_9169_vec__114992$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$3613_c__5501__auto__$jscomp$311_v$$, $i__114990$$), $k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$jscomp$inline_9169_vec__114992$$, 0, null);
                            $v$jscomp$inline_9169_vec__114992$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v$jscomp$inline_9169_vec__114992$$, 1, null);
                            $APP.cljs.core.chunk_append($b__114991_k$$, $APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2($v$jscomp$inline_9169_vec__114992$$, $k$$));
                            $i__114990$$ += 1;
                          } else {
                            $JSCompiler_inline_result$jscomp$3613_c__5501__auto__$jscomp$311_v$$ = !0;
                            break a;
                          }
                        }
                        $JSCompiler_inline_result$jscomp$3613_c__5501__auto__$jscomp$311_v$$ = void 0;
                      }
                      return $JSCompiler_inline_result$jscomp$3613_c__5501__auto__$jscomp$311_v$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114991_k$$), $clojure$math$combinatorics$nth_combination_freqs_$_iter__114988$$($APP.cljs.core.chunk_rest($s__114989__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__114991_k$$), null);
                    }
                    $JSCompiler_inline_result$jscomp$3613_c__5501__auto__$jscomp$311_v$$ = $APP.cljs.core.first($s__114989__$2_temp__5825__auto__$$);
                    $b__114991_k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$3613_c__5501__auto__$jscomp$311_v$$, 0, null);
                    $JSCompiler_inline_result$jscomp$3613_c__5501__auto__$jscomp$311_v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$3613_c__5501__auto__$jscomp$311_v$$, 1, null);
                    return $APP.cljs.core.cons($APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2($JSCompiler_inline_result$jscomp$3613_c__5501__auto__$jscomp$311_v$$, $b__114991_k$$), $clojure$math$combinatorics$nth_combination_freqs_$_iter__114988$$($APP.cljs.core.rest($s__114989__$2_temp__5825__auto__$$)));
                  }
                  return null;
                }
              };
            }($comb$$, $freqs__$1$$, $t__$1$$, $n__$1$$), null, null);
          };
        }($comb$$, $freqs__$1$$, $t__$1$$, $n__$1$$)($freqs__$1$$);
      }())));
    }
    $G__115240_G__115243_first_key_n$$ = $APP.cljs.core.first($APP.cljs.core.keys($freqs__$1$$));
    $G__115239_G__115242_remove_one_key_t$$ = $APP.clojure.math.combinatorics.dec_key($freqs__$1$$, $G__115240_G__115243_first_key_n$$);
    $G__115238_G__115245_dc_dt$jscomp$1_freqs$$ = $APP.clojure.math.combinatorics.count_combinations_from_frequencies.call(null, $G__115239_G__115242_remove_one_key_t$$, $t__$1$$ - 1);
    if ($n__$1$$ < $G__115238_G__115245_dc_dt$jscomp$1_freqs$$) {
      $G__115238_G__115245_dc_dt$jscomp$1_freqs$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($comb$$, $G__115240_G__115243_first_key_n$$);
      $G__115240_G__115243_first_key_n$$ = $t__$1$$ - 1;
      var $G__115241_G__115244$$ = $n__$1$$;
      $comb$$ = $G__115238_G__115245_dc_dt$jscomp$1_freqs$$;
      $freqs__$1$$ = $G__115239_G__115242_remove_one_key_t$$;
      $t__$1$$ = $G__115240_G__115243_first_key_n$$;
      $n__$1$$ = $G__115241_G__115244$$;
    } else {
      $G__115239_G__115242_remove_one_key_t$$ = $comb$$, $G__115240_G__115243_first_key_n$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($freqs__$1$$, $G__115240_G__115243_first_key_n$$), $G__115241_G__115244$$ = $t__$1$$, $G__115238_G__115245_dc_dt$jscomp$1_freqs$$ = $n__$1$$ - $G__115238_G__115245_dc_dt$jscomp$1_freqs$$, $comb$$ = $G__115239_G__115242_remove_one_key_t$$, $freqs__$1$$ = $G__115240_G__115243_first_key_n$$, $t__$1$$ = $G__115241_G__115244$$, $n__$1$$ = $G__115238_G__115245_dc_dt$jscomp$1_freqs$$;
    }
  }
};
$APP.clojure.math.combinatorics.nth_combination = function($items$$, $t$$, $n$$) {
  if ($APP.cljs.core.truth_($APP.clojure.math.combinatorics.all_different_QMARK_($items$$))) {
    return $APP.clojure.math.combinatorics.nth_combination_distinct($items$$, $t$$, $n$$);
  }
  var $count_combinations_from_frequencies_orig_val__114998$$ = $APP.clojure.math.combinatorics.count_combinations_from_frequencies, $count_combinations_from_frequencies_temp_val__114999$$ = $APP.cljs.core.memoize($APP.clojure.math.combinatorics.count_combinations_from_frequencies);
  $APP.clojure.math.combinatorics.count_combinations_from_frequencies = $count_combinations_from_frequencies_temp_val__114999$$;
  try {
    var $v$$ = $APP.cljs.core.vec($APP.cljs.core.distinct.cljs$core$IFn$_invoke$arity$1($items$$)), $f$$ = $APP.cljs.core.frequencies($items$$), $indices$$ = $APP.clojure.math.combinatorics.join(function() {
      return function $clojure$math$combinatorics$nth_combination_$_iter__115000$$($s__115001$$) {
        return new $APP.cljs.core.LazySeq(null, function() {
          for (;;) {
            var $s__115001__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__115001$$);
            if ($s__115001__$2_temp__5825__auto__$$) {
              if ($APP.cljs.core.chunked_seq_QMARK_($s__115001__$2_temp__5825__auto__$$)) {
                var $c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__115001__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($c__5501__auto__$$), $b__115003$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                return function() {
                  for (var $i__115002$$ = 0;;) {
                    if ($i__115002$$ < $size__5502__auto__$$) {
                      var $i$$ = $APP.cljs.core._nth($c__5501__auto__$$, $i__115002$$), $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.chunk_append, $JSCompiler_temp_const$jscomp$1$$ = $b__115003$$, $JSCompiler_temp_const$jscomp$2$$ = $APP.cljs.core.repeat, $JSCompiler_temp_const$jscomp$3$$ = $JSCompiler_temp_const$jscomp$2$$.cljs$core$IFn$_invoke$arity$2;
                      var $G__115004$jscomp$inline_9172_JSCompiler_inline_result$$ = $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($i$$) : $v$$.call(null, $i$$);
                      $G__115004$jscomp$inline_9172_JSCompiler_inline_result$$ = $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($G__115004$jscomp$inline_9172_JSCompiler_inline_result$$) : $f$$.call(null, $G__115004$jscomp$inline_9172_JSCompiler_inline_result$$);
                      $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_temp_const$jscomp$1$$, $JSCompiler_temp_const$jscomp$3$$.call($JSCompiler_temp_const$jscomp$2$$, $G__115004$jscomp$inline_9172_JSCompiler_inline_result$$, $i$$));
                      $i__115002$$ += 1;
                    } else {
                      return !0;
                    }
                  }
                }() ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115003$$), $clojure$math$combinatorics$nth_combination_$_iter__115000$$($APP.cljs.core.chunk_rest($s__115001__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115003$$), null);
              }
              var $i$$ = $APP.cljs.core.first($s__115001__$2_temp__5825__auto__$$);
              return $APP.cljs.core.cons($APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(function() {
                var $G__115005$$ = $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($i$$) : $v$$.call(null, $i$$);
                return $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($G__115005$$) : $f$$.call(null, $G__115005$$);
              }(), $i$$), $clojure$math$combinatorics$nth_combination_$_iter__115000$$($APP.cljs.core.rest($s__115001__$2_temp__5825__auto__$$)));
            }
            return null;
          }
        }, null, null);
      }($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.count($v$$)));
    }()), $indices_freqs$$ = $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.sorted_map(), $APP.cljs.core.frequencies($indices$$));
    return $APP.cljs.core.vec($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($v$$, $APP.clojure.math.combinatorics.nth_combination_freqs($indices_freqs$$, $t$$, $n$$)));
  } finally {
    $APP.clojure.math.combinatorics.count_combinations_from_frequencies = $count_combinations_from_frequencies_orig_val__114998$$;
  }
};
$APP.clojure.math.combinatorics.nth_subset = function($items$$, $G__115249_n$jscomp$946_n__$1$$) {
  for (var $size$$ = 0;;) {
    var $num_combinations$$ = $APP.clojure.math.combinatorics.count_combinations($items$$, $size$$);
    if ($G__115249_n$jscomp$946_n__$1$$ < $num_combinations$$) {
      return $APP.clojure.math.combinatorics.nth_combination($items$$, $size$$, $G__115249_n$jscomp$946_n__$1$$);
    }
    $G__115249_n$jscomp$946_n__$1$$ -= $num_combinations$$;
    $size$$ += 1;
  }
};
$APP.clojure.math.combinatorics.list_index = function($G__115250_l$jscomp$387_l__$1$$, $item$$) {
  for (var $G__115251_n$$ = 0;;) {
    if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($item$$, $APP.cljs.core.first($G__115250_l$jscomp$387_l__$1$$))) {
      return $G__115251_n$$;
    }
    $G__115250_l$jscomp$387_l__$1$$ = $APP.cljs.core.rest($G__115250_l$jscomp$387_l__$1$$);
    $G__115251_n$$ += 1;
  }
};
$APP.clojure.math.combinatorics.permutation_index_distinct = function($G__115253_l$$) {
  for (var $G__115011$jscomp$inline_10153_G__115013$jscomp$inline_10155_l__$1$$ = $G__115253_l$$, $G__115010$jscomp$inline_10152_G__115254_index$$ = 0, $G__115255_n$$ = $APP.cljs.core.count($G__115011$jscomp$inline_10153_G__115013$jscomp$inline_10155_l__$1$$) - 1;;) {
    if ($APP.cljs.core.empty_QMARK_($G__115011$jscomp$inline_10153_G__115013$jscomp$inline_10155_l__$1$$)) {
      return $G__115010$jscomp$inline_10152_G__115254_index$$;
    }
    $G__115253_l$$ = $APP.cljs.core.rest($G__115011$jscomp$inline_10153_G__115013$jscomp$inline_10155_l__$1$$);
    var $G__115012$$ = $APP.clojure.math.combinatorics.factorial($G__115255_n$$);
    $G__115011$jscomp$inline_10153_G__115013$jscomp$inline_10155_l__$1$$ = $APP.clojure.math.combinatorics.list_index($APP.cljs.core.sort.cljs$core$IFn$_invoke$arity$1($G__115011$jscomp$inline_10153_G__115013$jscomp$inline_10155_l__$1$$), $APP.cljs.core.first($G__115011$jscomp$inline_10153_G__115013$jscomp$inline_10155_l__$1$$));
    $G__115011$jscomp$inline_10153_G__115013$jscomp$inline_10155_l__$1$$ = $APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? $APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2($G__115012$$, $G__115011$jscomp$inline_10153_G__115013$jscomp$inline_10155_l__$1$$) : $APP.clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null, $G__115012$$, $G__115011$jscomp$inline_10153_G__115013$jscomp$inline_10155_l__$1$$);
    $G__115010$jscomp$inline_10152_G__115254_index$$ = $APP.clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? $APP.clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2($G__115010$jscomp$inline_10152_G__115254_index$$, $G__115011$jscomp$inline_10153_G__115013$jscomp$inline_10155_l__$1$$) : $APP.clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null, $G__115010$jscomp$inline_10152_G__115254_index$$, $G__115011$jscomp$inline_10153_G__115013$jscomp$inline_10155_l__$1$$);
    --$G__115255_n$$;
    $G__115011$jscomp$inline_10153_G__115013$jscomp$inline_10155_l__$1$$ = $G__115253_l$$;
  }
};
$APP.clojure.math.combinatorics.permutation_index_duplicates = function($G__115257_l$$) {
  for (var $l__$1$$ = $G__115257_l$$, $index$$ = 0, $freqs$$ = $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.sorted_map(), $APP.cljs.core.frequencies($l__$1$$));;) {
    if ($APP.cljs.core.empty_QMARK_($l__$1$$)) {
      return $index$$;
    }
    $G__115257_l$$ = $APP.cljs.core.rest($l__$1$$);
    var $G__115258$$ = $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.clojure.math.combinatorics._PLUS__SINGLEQUOTE_, $index$$, function() {
      var $iter__5503__auto__$$ = function($l__$1$$, $index$$, $freqs$$) {
        return function $clojure$math$combinatorics$permutation_index_duplicates_$_iter__115019$$($s__115020$$) {
          return new $APP.cljs.core.LazySeq(null, function($l__$1$$, $index$$, $freqs$$) {
            return function() {
              for (;;) {
                var $s__115020__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__115020$$);
                if ($s__115020__$2_temp__5825__auto__$$) {
                  if ($APP.cljs.core.chunked_seq_QMARK_($s__115020__$2_temp__5825__auto__$$)) {
                    var $JSCompiler_inline_result$jscomp$3620_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__115020__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$3620_c__5501__auto__$$), $b__115022_k$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                    a: {
                      for (var $i__115021$$ = 0;;) {
                        if ($i__115021$$ < $size__5502__auto__$$) {
                          var $k$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$3620_c__5501__auto__$$, $i__115021$$);
                          $APP.cljs.core.chunk_append($b__115022_k$$, $APP.clojure.math.combinatorics.count_permutations_from_frequencies($APP.clojure.math.combinatorics.dec_key($freqs$$, $k$$)));
                          $i__115021$$ += 1;
                        } else {
                          $JSCompiler_inline_result$jscomp$3620_c__5501__auto__$$ = !0;
                          break a;
                        }
                      }
                      $JSCompiler_inline_result$jscomp$3620_c__5501__auto__$$ = void 0;
                    }
                    return $JSCompiler_inline_result$jscomp$3620_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115022_k$$), $clojure$math$combinatorics$permutation_index_duplicates_$_iter__115019$$($APP.cljs.core.chunk_rest($s__115020__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115022_k$$), null);
                  }
                  $b__115022_k$$ = $APP.cljs.core.first($s__115020__$2_temp__5825__auto__$$);
                  return $APP.cljs.core.cons($APP.clojure.math.combinatorics.count_permutations_from_frequencies($APP.clojure.math.combinatorics.dec_key($freqs$$, $b__115022_k$$)), $clojure$math$combinatorics$permutation_index_duplicates_$_iter__115019$$($APP.cljs.core.rest($s__115020__$2_temp__5825__auto__$$)));
                }
                return null;
              }
            };
          }($l__$1$$, $index$$, $freqs$$), null, null);
        };
      }($l__$1$$, $index$$, $freqs$$);
      return $iter__5503__auto__$$($APP.cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(function($l__$1$$, $index$$, $freqs$$, $iter__5503__auto__$$) {
        return function($p1__115014_SHARP_$$) {
          return $APP.cljs.core.compare($p1__115014_SHARP_$$, $APP.cljs.core.first($l__$1$$)) < 0;
        };
      }($l__$1$$, $index$$, $freqs$$, $iter__5503__auto__$$), $APP.cljs.core.keys($freqs$$)));
    }()), $G__115259$$ = $APP.clojure.math.combinatorics.dec_key($freqs$$, $APP.cljs.core.first($l__$1$$));
    $l__$1$$ = $G__115257_l$$;
    $index$$ = $G__115258$$;
    $freqs$$ = $G__115259$$;
  }
};
$APP.clojure.math.combinatorics.permutation_index = function($items$$) {
  return $APP.cljs.core.truth_($APP.clojure.math.combinatorics.all_different_QMARK_($items$$)) ? $APP.clojure.math.combinatorics.permutation_index_distinct($items$$) : $APP.clojure.math.combinatorics.permutation_index_duplicates($items$$);
};
$APP.clojure.math.combinatorics.update = function($vec$$, $index$$, $f$$) {
  var $item$$ = $vec$$.cljs$core$IFn$_invoke$arity$1 ? $vec$$.cljs$core$IFn$_invoke$arity$1($index$$) : $vec$$.call(null, $index$$);
  return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($vec$$, $index$$, $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($item$$) : $f$$.call(null, $item$$));
};
$APP.clojure.math.combinatorics.reify_bool = function($statement$$) {
  return $APP.cljs.core.truth_($statement$$) ? 1 : 0;
};
$APP.clojure.math.combinatorics.init = function($n$$, $s$$) {
  return $APP.cljs.core.truth_($s$$) ? $APP.cljs.core.vec(function() {
    return function $clojure$math$combinatorics$init_$_iter__115023$$($s__115024$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (;;) {
          var $s__115024__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__115024$$);
          if ($s__115024__$2_temp__5825__auto__$$) {
            if ($APP.cljs.core.chunked_seq_QMARK_($s__115024__$2_temp__5825__auto__$$)) {
              var $c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__115024__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($c__5501__auto__$$), $b__115026$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              return function() {
                for (var $i__115025$$ = 0;;) {
                  if ($i__115025$$ < $size__5502__auto__$$) {
                    var $i$jscomp$815_y__5111__auto__$$ = $APP.cljs.core._nth($c__5501__auto__$$, $i__115025$$), $JSCompiler_temp_const$$ = $APP.cljs.core;
                    $i$jscomp$815_y__5111__auto__$$ -= $n$$ - $s$$ - -1;
                    $JSCompiler_temp_const$$.chunk_append.call($JSCompiler_temp_const$$, $b__115026$$, 0 > $i$jscomp$815_y__5111__auto__$$ ? 0 : $i$jscomp$815_y__5111__auto__$$);
                    $i__115025$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115026$$), $clojure$math$combinatorics$init_$_iter__115023$$($APP.cljs.core.chunk_rest($s__115024__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115026$$), null);
            }
            var $i$$ = $APP.cljs.core.first($s__115024__$2_temp__5825__auto__$$);
            return $APP.cljs.core.cons(function() {
              var $y__5111__auto__$$ = $i$$ - ($n$$ - $s$$ - -1);
              return 0 > $y__5111__auto__$$ ? 0 : $y__5111__auto__$$;
            }(), $clojure$math$combinatorics$init_$_iter__115023$$($APP.cljs.core.rest($s__115024__$2_temp__5825__auto__$$)));
          }
          return null;
        }
      }, null, null);
    }($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$2(1, $n$$ + 1));
  }()) : $APP.cljs.core.vec($APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2($n$$, 0));
};
$APP.clojure.math.combinatorics.growth_strings_H = function($var_args$$) {
  switch(arguments.length) {
    case 3:
      return $APP.clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 5:
      return $APP.clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
$APP.clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3 = function($n$$, $r$$, $s$$) {
  return $APP.clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5($n$$, $APP.clojure.math.combinatorics.init($n$$, $s$$), $APP.cljs.core.vec($APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2($n$$, 1)), $r$$, $s$$);
};
$APP.clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5 = function($n$$, $a$$, $b$$, $r$$, $s$$) {
  return $APP.cljs.core.cons($a$$, new $APP.cljs.core.LazySeq(null, function() {
    if (function() {
      var $and__5023__auto__$$ = $APP.cljs.core.peek($b$$) > $APP.cljs.core.peek($a$$);
      return $and__5023__auto__$$ ? $APP.cljs.core.truth_($r$$) ? $APP.cljs.core.peek($a$$) < $r$$ - 1 : !0 : $and__5023__auto__$$;
    }()) {
      return $APP.clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5($n$$, $APP.clojure.math.combinatorics.update($a$$, $n$$ - 1, $APP.cljs.core.inc), $b$$, $r$$, $s$$);
    }
    var $j$$ = function() {
      for (var $j$$ = $n$$ - 2;;) {
        var $JSCompiler_inline_result$jscomp$9509_and__5023__auto__$jscomp$inline_10157_and__5023__auto____$1$$;
        if ($JSCompiler_inline_result$jscomp$9509_and__5023__auto__$jscomp$inline_10157_and__5023__auto____$1$$ = ($a$$.cljs$core$IFn$_invoke$arity$1 ? $a$$.cljs$core$IFn$_invoke$arity$1($j$$) : $a$$.call(null, $j$$)) < ($b$$.cljs$core$IFn$_invoke$arity$1 ? $b$$.cljs$core$IFn$_invoke$arity$1($j$$) : $b$$.call(null, $j$$))) {
          $JSCompiler_inline_result$jscomp$9509_and__5023__auto__$jscomp$inline_10157_and__5023__auto____$1$$ = ($JSCompiler_inline_result$jscomp$9509_and__5023__auto__$jscomp$inline_10157_and__5023__auto____$1$$ = $APP.cljs.core.truth_($r$$) ? ($a$$.cljs$core$IFn$_invoke$arity$1 ? $a$$.cljs$core$IFn$_invoke$arity$1($j$$) : $a$$.call(null, $j$$)) < $r$$ - 1 : !0) ? $APP.cljs.core.truth_($s$$) ? $s$$ - ($b$$.cljs$core$IFn$_invoke$arity$1 ? $b$$.cljs$core$IFn$_invoke$arity$1($j$$) : $b$$.call(null, 
          $j$$)) - $APP.clojure.math.combinatorics.reify_bool(($a$$.cljs$core$IFn$_invoke$arity$1 ? $a$$.cljs$core$IFn$_invoke$arity$1($j$$) : $a$$.call(null, $j$$)) + 1 === ($b$$.cljs$core$IFn$_invoke$arity$1 ? $b$$.cljs$core$IFn$_invoke$arity$1($j$$) : $b$$.call(null, $j$$))) <= $n$$ - $j$$ : !0 : $JSCompiler_inline_result$jscomp$9509_and__5023__auto__$jscomp$inline_10157_and__5023__auto____$1$$;
        }
        if ($JSCompiler_inline_result$jscomp$9509_and__5023__auto__$jscomp$inline_10157_and__5023__auto____$1$$) {
          return $j$$;
        }
        --$j$$;
      }
    }();
    if ($j$$ === 0) {
      return $APP.cljs.core.List.EMPTY;
    }
    var $a__$1$$ = $APP.clojure.math.combinatorics.update($a$$, $j$$, $APP.cljs.core.inc), $x$$ = $APP.cljs.core.truth_($s$$) ? $s$$ - (($b$$.cljs$core$IFn$_invoke$arity$1 ? $b$$.cljs$core$IFn$_invoke$arity$1($j$$) : $b$$.call(null, $j$$)) + $APP.clojure.math.combinatorics.reify_bool($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($a__$1$$.cljs$core$IFn$_invoke$arity$1 ? $a__$1$$.cljs$core$IFn$_invoke$arity$1($j$$) : $a__$1$$.call(null, $j$$), $b$$.cljs$core$IFn$_invoke$arity$1 ? $b$$.cljs$core$IFn$_invoke$arity$1($j$$) : 
    $b$$.call(null, $j$$)))) : null, $b__$1$$ = function() {
      for (var $G__115265_G__115271_a__$2$$ = $a__$1$$, $G__115266_G__115272_b__$1$$ = $b$$, $G__115267_G__115273_i$$ = $j$$ + 1, $G__115268_G__115274_current_max_x__5110__auto__$$ = ($G__115266_G__115272_b__$1$$.cljs$core$IFn$_invoke$arity$1 ? $G__115266_G__115272_b__$1$$.cljs$core$IFn$_invoke$arity$1($j$$) : $G__115266_G__115272_b__$1$$.call(null, $j$$)) + $APP.clojure.math.combinatorics.reify_bool(($G__115266_G__115272_b__$1$$.cljs$core$IFn$_invoke$arity$1 ? $G__115266_G__115272_b__$1$$.cljs$core$IFn$_invoke$arity$1($j$$) : 
      $G__115266_G__115272_b__$1$$.call(null, $j$$)) === ($G__115265_G__115271_a__$2$$.cljs$core$IFn$_invoke$arity$1 ? $G__115265_G__115271_a__$2$$.cljs$core$IFn$_invoke$arity$1($j$$) : $G__115265_G__115271_a__$2$$.call(null, $j$$)));;) {
        if ($G__115267_G__115273_i$$ === $n$$) {
          return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__115265_G__115271_a__$2$$, $G__115266_G__115272_b__$1$$], null);
        }
        if ($APP.cljs.core.truth_($APP.cljs.core.truth_($s$$) ? $G__115267_G__115273_i$$ > $n$$ - $x$$ - 1 : $s$$)) {
          var $new_a_i_y__5111__auto__$$ = $G__115267_G__115273_i$$ - $n$$ + $s$$;
          $G__115265_G__115271_a__$2$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__115265_G__115271_a__$2$$, $G__115267_G__115273_i$$, $new_a_i_y__5111__auto__$$);
          $G__115266_G__115272_b__$1$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__115266_G__115272_b__$1$$, $G__115267_G__115273_i$$, $G__115268_G__115274_current_max_x__5110__auto__$$);
          $G__115267_G__115273_i$$ += 1;
          $new_a_i_y__5111__auto__$$ += 1;
          $G__115268_G__115274_current_max_x__5110__auto__$$ = $G__115268_G__115274_current_max_x__5110__auto__$$ > $new_a_i_y__5111__auto__$$ ? $G__115268_G__115274_current_max_x__5110__auto__$$ : $new_a_i_y__5111__auto__$$;
        } else {
          $G__115265_G__115271_a__$2$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__115265_G__115271_a__$2$$, $G__115267_G__115273_i$$, 0), $G__115266_G__115272_b__$1$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__115266_G__115272_b__$1$$, $G__115267_G__115273_i$$, $G__115268_G__115274_current_max_x__5110__auto__$$), $G__115267_G__115273_i$$ += 1;
        }
      }
    }(), $a__$2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($b__$1$$, 0, null);
    $b__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($b__$1$$, 1, null);
    return $APP.clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5($n$$, $a__$2$$, $b__$1$$, $r$$, $s$$);
  }, null, null));
};
$APP.clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5;
$APP.clojure.math.combinatorics.lex_partitions_H = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$553_argseq__5756__auto__$$ = [], $len__5749__auto___115278$$ = arguments.length, $i__5750__auto___115279$$ = 0;;) {
    if ($i__5750__auto___115279$$ < $len__5749__auto___115278$$) {
      $args__5755__auto__$jscomp$553_argseq__5756__auto__$$.push(arguments[$i__5750__auto___115279$$]), $i__5750__auto___115279$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$553_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$553_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$553_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return $APP.clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$553_argseq__5756__auto__$$);
};
$APP.clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = function($N$$, $from$jscomp$26_from__$1$$) {
  var $map__115035__$1_to$jscomp$25_to__$1$$ = $APP.cljs.core.__destructure_map($from$jscomp$26_from__$1$$);
  $from$jscomp$26_from__$1$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115035__$1_to$jscomp$25_to__$1$$, $APP.cljs$cst$1816$min);
  $map__115035__$1_to$jscomp$25_to__$1$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115035__$1_to$jscomp$25_to__$1$$, $APP.cljs$cst$1533$max);
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($N$$, 0)) {
    return ($APP.cljs.core.truth_($from$jscomp$26_from__$1$$) ? $from$jscomp$26_from__$1$$ : 0) <= 0 && 0 <= ($APP.cljs.core.truth_($map__115035__$1_to$jscomp$25_to__$1$$) ? $map__115035__$1_to$jscomp$25_to__$1$$ : 0) ? $APP.cljs.core.list($APP.cljs.core.List.EMPTY) : $APP.cljs.core.List.EMPTY;
  }
  $from$jscomp$26_from__$1$$ = $APP.cljs.core.truth_($APP.cljs.core.truth_($from$jscomp$26_from__$1$$) ? $from$jscomp$26_from__$1$$ <= 1 : $from$jscomp$26_from__$1$$) ? null : $from$jscomp$26_from__$1$$;
  $map__115035__$1_to$jscomp$25_to__$1$$ = $APP.cljs.core.truth_($APP.cljs.core.truth_($map__115035__$1_to$jscomp$25_to__$1$$) ? $map__115035__$1_to$jscomp$25_to__$1$$ >= $N$$ : $map__115035__$1_to$jscomp$25_to__$1$$) ? null : $map__115035__$1_to$jscomp$25_to__$1$$;
  return 1 <= ($APP.cljs.core.truth_($from$jscomp$26_from__$1$$) ? $from$jscomp$26_from__$1$$ : 1) && ($APP.cljs.core.truth_($from$jscomp$26_from__$1$$) ? $from$jscomp$26_from__$1$$ : 1) <= ($APP.cljs.core.truth_($map__115035__$1_to$jscomp$25_to__$1$$) ? $map__115035__$1_to$jscomp$25_to__$1$$ : $N$$) && ($APP.cljs.core.truth_($map__115035__$1_to$jscomp$25_to__$1$$) ? $map__115035__$1_to$jscomp$25_to__$1$$ : $N$$) <= $N$$ ? $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($N$$, 0) ? $APP.cljs.core.list($APP.cljs.core.List.EMPTY) : 
  $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($N$$, 1) ? $APP.cljs.core.list($APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0], null))) : $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($map__115035__$1_to$jscomp$25_to__$1$$, 1) ? $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.List(null, 
  $APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1($N$$), null, 1, null)))), null, 1, null)))) : function $clojure$math$combinatorics$iter__115036$$($s__115037$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (;;) {
        var $s__115037__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__115037$$);
        if ($s__115037__$2_temp__5825__auto__$$) {
          if ($APP.cljs.core.chunked_seq_QMARK_($s__115037__$2_temp__5825__auto__$$)) {
            var $JSCompiler_inline_result$jscomp$3625_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__115037__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$3625_c__5501__auto__$$), $b__115039_groups$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
            a: {
              for (var $i__115038$$ = 0;;) {
                if ($i__115038$$ < $size__5502__auto__$$) {
                  var $groups$jscomp$inline_9186_growth_string$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$3625_c__5501__auto__$$, $i__115038$$);
                  $groups$jscomp$inline_9186_growth_string$$ = $APP.cljs.core.group_by($groups$jscomp$inline_9186_growth_string$$, $APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1($N$$));
                  $APP.cljs.core.chunk_append($b__115039_groups$$, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($groups$jscomp$inline_9186_growth_string$$, $APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.count($groups$jscomp$inline_9186_growth_string$$))));
                  $i__115038$$ += 1;
                } else {
                  $JSCompiler_inline_result$jscomp$3625_c__5501__auto__$$ = !0;
                  break a;
                }
              }
              $JSCompiler_inline_result$jscomp$3625_c__5501__auto__$$ = void 0;
            }
            return $JSCompiler_inline_result$jscomp$3625_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115039_groups$$), $clojure$math$combinatorics$iter__115036$$($APP.cljs.core.chunk_rest($s__115037__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115039_groups$$), null);
          }
          $b__115039_groups$$ = $APP.cljs.core.first($s__115037__$2_temp__5825__auto__$$);
          $b__115039_groups$$ = $APP.cljs.core.group_by($b__115039_groups$$, $APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1($N$$));
          return $APP.cljs.core.cons($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($b__115039_groups$$, $APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.count($b__115039_groups$$))), $clojure$math$combinatorics$iter__115036$$($APP.cljs.core.rest($s__115037__$2_temp__5825__auto__$$)));
        }
        return null;
      }
    }, null, null);
  }($APP.clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3($N$$, $map__115035__$1_to$jscomp$25_to__$1$$, $from$jscomp$26_from__$1$$)) : $APP.cljs.core.List.EMPTY;
};
$APP.clojure.math.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = 1;
$APP.clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = function($seq115032_seq115032__$1$$) {
  var $G__115033$$ = $APP.cljs.core.first($seq115032_seq115032__$1$$);
  $seq115032_seq115032__$1$$ = $APP.cljs.core.next($seq115032_seq115032__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__115033$$, $seq115032_seq115032__$1$$);
};
$APP.clojure.math.combinatorics.partitions_H = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$554_argseq__5756__auto__$$ = [], $len__5749__auto___115292$$ = arguments.length, $i__5750__auto___115293$$ = 0;;) {
    if ($i__5750__auto___115293$$ < $len__5749__auto___115292$$) {
      $args__5755__auto__$jscomp$554_argseq__5756__auto__$$.push(arguments[$i__5750__auto___115293$$]), $i__5750__auto___115293$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$554_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$554_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$554_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return $APP.clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$554_argseq__5756__auto__$$);
};
$APP.clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic = function($items$$, $args$$) {
  var $items__$1$$ = $APP.cljs.core.vec($items$$), $N$$ = $APP.cljs.core.count($items__$1$$), $lex$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.clojure.math.combinatorics.lex_partitions_H, $N$$, $args$$);
  return function $clojure$math$combinatorics$iter__115042$$($s__115043$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (;;) {
        var $temp__5825__auto__$$ = $APP.cljs.core.seq($s__115043$$);
        if ($temp__5825__auto__$$) {
          var $s__115043__$2$$ = $temp__5825__auto__$$;
          if ($APP.cljs.core.chunked_seq_QMARK_($s__115043__$2$$)) {
            var $c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__115043__$2$$), $size__5502__auto__$$ = $APP.cljs.core.count($c__5501__auto__$$), $b__115045$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
            return function() {
              for (var $i__115044$$ = 0;;) {
                if ($i__115044$$ < $size__5502__auto__$$) {
                  var $parts$$ = $APP.cljs.core._nth($c__5501__auto__$$, $i__115044$$);
                  $APP.cljs.core.chunk_append($b__115045$$, function() {
                    return function($i__115044$$, $parts$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115045$$, $s__115043__$2$$, $temp__5825__auto__$$, $items__$1$$, $N$$, $lex$$) {
                      return function $clojure$math$combinatorics$iter__115042_$_iter__115046$$($s__115047$$) {
                        return new $APP.cljs.core.LazySeq(null, function($i__115044$$, $parts$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115045$$, $s__115043__$2$$, $temp__5825__auto__$$, $items__$1$$, $N$$, $lex$$) {
                          return function() {
                            for (;;) {
                              var $temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__115047$$);
                              if ($temp__5825__auto____$1$$) {
                                var $s__115047__$2$$ = $temp__5825__auto____$1$$;
                                if ($APP.cljs.core.chunked_seq_QMARK_($s__115047__$2$$)) {
                                  var $c__5501__auto____$1$$ = $APP.cljs.core.chunk_first($s__115047__$2$$), $size__5502__auto____$1$$ = $APP.cljs.core.count($c__5501__auto____$1$$), $b__115049$$ = $APP.cljs.core.chunk_buffer($size__5502__auto____$1$$);
                                  return function() {
                                    for (var $i__115048$$ = 0;;) {
                                      if ($i__115048$$ < $size__5502__auto____$1$$) {
                                        var $part$$ = $APP.cljs.core._nth($c__5501__auto____$1$$, $i__115048$$);
                                        $APP.cljs.core.chunk_append($b__115049$$, $APP.cljs.core.persistent_BANG_($APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($i__115048$$, $i__115044$$, $part$$, $c__5501__auto____$1$$, $size__5502__auto____$1$$, $b__115049$$, $s__115047__$2$$, $temp__5825__auto____$1$$, $parts$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115045$$, $s__115043__$2$$, $temp__5825__auto__$$, $items__$1$$, $N$$, $lex$$) {
                                          return function($v$$, $o$$) {
                                            return $APP.cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2($v$$, $items__$1$$.cljs$core$IFn$_invoke$arity$1 ? $items__$1$$.cljs$core$IFn$_invoke$arity$1($o$$) : $items__$1$$.call(null, $o$$));
                                          };
                                        }($i__115048$$, $i__115044$$, $part$$, $c__5501__auto____$1$$, $size__5502__auto____$1$$, $b__115049$$, $s__115047__$2$$, $temp__5825__auto____$1$$, $parts$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115045$$, $s__115043__$2$$, $temp__5825__auto__$$, $items__$1$$, $N$$, $lex$$), $APP.cljs.core.transient$($APP.cljs.core.PersistentVector.EMPTY), $part$$)));
                                        $i__115048$$ += 1;
                                      } else {
                                        return !0;
                                      }
                                    }
                                  }() ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115049$$), $clojure$math$combinatorics$iter__115042_$_iter__115046$$($APP.cljs.core.chunk_rest($s__115047__$2$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115049$$), null);
                                }
                                var $part$$ = $APP.cljs.core.first($s__115047__$2$$);
                                return $APP.cljs.core.cons($APP.cljs.core.persistent_BANG_($APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($i__115044$$, $part$$, $s__115047__$2$$, $temp__5825__auto____$1$$, $parts$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115045$$, $s__115043__$2$$, $temp__5825__auto__$$, $items__$1$$, $N$$, $lex$$) {
                                  return function($v$$, $o$$) {
                                    return $APP.cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2($v$$, $items__$1$$.cljs$core$IFn$_invoke$arity$1 ? $items__$1$$.cljs$core$IFn$_invoke$arity$1($o$$) : $items__$1$$.call(null, $o$$));
                                  };
                                }($i__115044$$, $part$$, $s__115047__$2$$, $temp__5825__auto____$1$$, $parts$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115045$$, $s__115043__$2$$, $temp__5825__auto__$$, $items__$1$$, $N$$, $lex$$), $APP.cljs.core.transient$($APP.cljs.core.PersistentVector.EMPTY), $part$$)), $clojure$math$combinatorics$iter__115042_$_iter__115046$$($APP.cljs.core.rest($s__115047__$2$$)));
                              }
                              return null;
                            }
                          };
                        }($i__115044$$, $parts$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115045$$, $s__115043__$2$$, $temp__5825__auto__$$, $items__$1$$, $N$$, $lex$$), null, null);
                      };
                    }($i__115044$$, $parts$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115045$$, $s__115043__$2$$, $temp__5825__auto__$$, $items__$1$$, $N$$, $lex$$)($parts$$);
                  }());
                  $i__115044$$ += 1;
                } else {
                  return !0;
                }
              }
            }() ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115045$$), $clojure$math$combinatorics$iter__115042$$($APP.cljs.core.chunk_rest($s__115043__$2$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115045$$), null);
          }
          var $parts$$ = $APP.cljs.core.first($s__115043__$2$$);
          return $APP.cljs.core.cons(function() {
            return function($parts$$, $s__115043__$2$$, $temp__5825__auto__$$, $items__$1$$, $N$$, $lex$$) {
              return function $clojure$math$combinatorics$iter__115042_$_iter__115050$$($s__115051$$) {
                return new $APP.cljs.core.LazySeq(null, function() {
                  for (;;) {
                    var $temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__115051$$);
                    if ($temp__5825__auto____$1$$) {
                      var $s__115051__$2$$ = $temp__5825__auto____$1$$;
                      if ($APP.cljs.core.chunked_seq_QMARK_($s__115051__$2$$)) {
                        var $c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__115051__$2$$), $size__5502__auto__$$ = $APP.cljs.core.count($c__5501__auto__$$), $b__115053$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                        return function() {
                          for (var $i__115052$$ = 0;;) {
                            if ($i__115052$$ < $size__5502__auto__$$) {
                              var $part$$ = $APP.cljs.core._nth($c__5501__auto__$$, $i__115052$$);
                              $APP.cljs.core.chunk_append($b__115053$$, $APP.cljs.core.persistent_BANG_($APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($i__115052$$, $part$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115053$$, $s__115051__$2$$, $temp__5825__auto____$1$$, $parts$$, $s__115043__$2$$, $temp__5825__auto__$$, $items__$1$$, $N$$, $lex$$) {
                                return function($v$$, $o$$) {
                                  return $APP.cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2($v$$, $items__$1$$.cljs$core$IFn$_invoke$arity$1 ? $items__$1$$.cljs$core$IFn$_invoke$arity$1($o$$) : $items__$1$$.call(null, $o$$));
                                };
                              }($i__115052$$, $part$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115053$$, $s__115051__$2$$, $temp__5825__auto____$1$$, $parts$$, $s__115043__$2$$, $temp__5825__auto__$$, $items__$1$$, $N$$, $lex$$), $APP.cljs.core.transient$($APP.cljs.core.PersistentVector.EMPTY), $part$$)));
                              $i__115052$$ += 1;
                            } else {
                              return !0;
                            }
                          }
                        }() ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115053$$), $clojure$math$combinatorics$iter__115042_$_iter__115050$$($APP.cljs.core.chunk_rest($s__115051__$2$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115053$$), null);
                      }
                      var $part$$ = $APP.cljs.core.first($s__115051__$2$$);
                      return $APP.cljs.core.cons($APP.cljs.core.persistent_BANG_($APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($part$$, $s__115051__$2$$, $temp__5825__auto____$1$$, $parts$$, $s__115043__$2$$, $temp__5825__auto__$$, $items__$1$$, $N$$, $lex$$) {
                        return function($v$$, $o$$) {
                          return $APP.cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2($v$$, $items__$1$$.cljs$core$IFn$_invoke$arity$1 ? $items__$1$$.cljs$core$IFn$_invoke$arity$1($o$$) : $items__$1$$.call(null, $o$$));
                        };
                      }($part$$, $s__115051__$2$$, $temp__5825__auto____$1$$, $parts$$, $s__115043__$2$$, $temp__5825__auto__$$, $items__$1$$, $N$$, $lex$$), $APP.cljs.core.transient$($APP.cljs.core.PersistentVector.EMPTY), $part$$)), $clojure$math$combinatorics$iter__115042_$_iter__115050$$($APP.cljs.core.rest($s__115051__$2$$)));
                    }
                    return null;
                  }
                }, null, null);
              };
            }($parts$$, $s__115043__$2$$, $temp__5825__auto__$$, $items__$1$$, $N$$, $lex$$)($parts$$);
          }(), $clojure$math$combinatorics$iter__115042$$($APP.cljs.core.rest($s__115043__$2$$)));
        }
        return null;
      }
    }, null, null);
  }($lex$$);
};
$APP.clojure.math.combinatorics.partitions_H.cljs$lang$maxFixedArity = 1;
$APP.clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = function($seq115040_seq115040__$1$$) {
  var $G__115041$$ = $APP.cljs.core.first($seq115040_seq115040__$1$$);
  $seq115040_seq115040__$1$$ = $APP.cljs.core.next($seq115040_seq115040__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__115041$$, $seq115040_seq115040__$1$$);
};
$APP.clojure.math.combinatorics.multiset_partitions_M = function($var_args$$) {
  switch(arguments.length) {
    case 3:
      return $APP.clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 11:
      return $APP.clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
$APP.clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = function($multiset$$, $r$$, $s$$) {
  var $n$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._PLUS_, $APP.cljs.core.vals($multiset$$)), $m$$ = $APP.cljs.core.count($multiset$$), $f$jscomp$1556_f__$1$$ = $APP.cljs.core.PersistentVector.EMPTY, $c$$ = $APP.cljs.core.PersistentVector.EMPTY, $u$$ = $APP.cljs.core.PersistentVector.EMPTY, $v$$ = $APP.cljs.core.PersistentVector.EMPTY, $v__$1$$ = function() {
    for (var $j$$ = 0, $G__115300_c__$1$$ = $c$$, $G__115301_u__$1$$ = $u$$, $G__115302_v__$1$$ = $v$$;;) {
      if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($j$$, $m$$)) {
        return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__115300_c__$1$$, $G__115301_u__$1$$, $G__115302_v__$1$$], null);
      }
      var $G__115299$$ = $j$$ + 1;
      $G__115300_c__$1$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__115300_c__$1$$, $j$$, $j$$ + 1);
      $G__115301_u__$1$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__115301_u__$1$$, $j$$, function() {
        var $G__115061$$ = $j$$ + 1;
        return $multiset$$.cljs$core$IFn$_invoke$arity$1 ? $multiset$$.cljs$core$IFn$_invoke$arity$1($G__115061$$) : $multiset$$.call(null, $G__115061$$);
      }());
      $G__115302_v__$1$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__115302_v__$1$$, $j$$, function() {
        var $G__115062$$ = $j$$ + 1;
        return $multiset$$.cljs$core$IFn$_invoke$arity$1 ? $multiset$$.cljs$core$IFn$_invoke$arity$1($G__115062$$) : $multiset$$.call(null, $G__115062$$);
      }());
      $j$$ = $G__115299$$;
    }
  }(), $c__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v__$1$$, 0, null), $u__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v__$1$$, 1, null);
  $v__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($v__$1$$, 2, null);
  $f$jscomp$1556_f__$1$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic($f$jscomp$1556_f__$1$$, 0, 0, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([1, $m$$], 0));
  return $APP.clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11($n$$, $m$$, $f$jscomp$1556_f__$1$$, $c__$1$$, $u__$1$$, $v__$1$$, 0, $m$$, 0, $r$$, $s$$);
};
$APP.clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = function($n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$$, $l$$, $r$$, $s$$) {
  for (;;) {
    var $vec__115063$$ = function() {
      for (var $j$jscomp$298_j__$1$$ = $a$$, $G__115304_G__115310_G__115316_k$jscomp$1110_k__$1$$ = $b$$, $G__115311_G__115317_JSCompiler_temp_const$jscomp$3629_x$jscomp$2307_x__$1$$ = !1, $G__115306_c__$2$jscomp$4_u__$1$$ = $u$$, $G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$ = $v$$, $G__115308_G__115314_G__115320_JSCompiler_temp_const$jscomp$3628_c__$1$$ = $c$$;;) {
        if ($j$jscomp$298_j__$1$$ >= $b$$) {
          return new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__115306_c__$2$jscomp$4_u__$1$$, $G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$, $G__115308_G__115314_G__115320_JSCompiler_temp_const$jscomp$3628_c__$1$$, $j$jscomp$298_j__$1$$, $G__115304_G__115310_G__115316_k$jscomp$1110_k__$1$$], null);
        }
        var $G__115307_G__115312_G__115318_u__$2$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__115306_c__$2$jscomp$4_u__$1$$, $G__115304_G__115310_G__115316_k$jscomp$1110_k__$1$$, ($G__115306_c__$2$jscomp$4_u__$1$$.cljs$core$IFn$_invoke$arity$1 ? $G__115306_c__$2$jscomp$4_u__$1$$.cljs$core$IFn$_invoke$arity$1($j$jscomp$298_j__$1$$) : $G__115306_c__$2$jscomp$4_u__$1$$.call(null, $j$jscomp$298_j__$1$$)) - ($G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$.cljs$core$IFn$_invoke$arity$1 ? 
        $G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$.cljs$core$IFn$_invoke$arity$1($j$jscomp$298_j__$1$$) : $G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$.call(null, $j$jscomp$298_j__$1$$)));
        if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($G__115307_G__115312_G__115318_u__$2$$.cljs$core$IFn$_invoke$arity$1 ? $G__115307_G__115312_G__115318_u__$2$$.cljs$core$IFn$_invoke$arity$1($G__115304_G__115310_G__115316_k$jscomp$1110_k__$1$$) : $G__115307_G__115312_G__115318_u__$2$$.call(null, $G__115304_G__115310_G__115316_k$jscomp$1110_k__$1$$), 0)) {
          $G__115306_c__$2$jscomp$4_u__$1$$ = $G__115307_G__115312_G__115318_u__$2$$, $G__115307_G__115312_G__115318_u__$2$$ = $G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$, $j$jscomp$298_j__$1$$ += 1, $G__115311_G__115317_JSCompiler_temp_const$jscomp$3629_x$jscomp$2307_x__$1$$ = !0, $G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$ = $G__115307_G__115312_G__115318_u__$2$$;
        } else {
          if ($APP.cljs.core.not($G__115311_G__115317_JSCompiler_temp_const$jscomp$3629_x$jscomp$2307_x__$1$$)) {
            $G__115306_c__$2$jscomp$4_u__$1$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__115308_G__115314_G__115320_JSCompiler_temp_const$jscomp$3628_c__$1$$, $G__115304_G__115310_G__115316_k$jscomp$1110_k__$1$$, $G__115308_G__115314_G__115320_JSCompiler_temp_const$jscomp$3628_c__$1$$.cljs$core$IFn$_invoke$arity$1 ? $G__115308_G__115314_G__115320_JSCompiler_temp_const$jscomp$3628_c__$1$$.cljs$core$IFn$_invoke$arity$1($j$jscomp$298_j__$1$$) : $G__115308_G__115314_G__115320_JSCompiler_temp_const$jscomp$3628_c__$1$$.call(null, 
            $j$jscomp$298_j__$1$$));
            $G__115311_G__115317_JSCompiler_temp_const$jscomp$3629_x$jscomp$2307_x__$1$$ = $APP.cljs.core.assoc;
            $G__115308_G__115314_G__115320_JSCompiler_temp_const$jscomp$3628_c__$1$$ = $G__115311_G__115317_JSCompiler_temp_const$jscomp$3629_x$jscomp$2307_x__$1$$.cljs$core$IFn$_invoke$arity$3;
            var $JSCompiler_temp_const$$ = $G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$, $JSCompiler_temp_const$jscomp$0$$ = $G__115304_G__115310_G__115316_k$jscomp$1110_k__$1$$;
            $G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$ = $G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$.cljs$core$IFn$_invoke$arity$1($j$jscomp$298_j__$1$$) : $G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$.call(null, $j$jscomp$298_j__$1$$);
            var $y__5114__auto__$$ = $G__115307_G__115312_G__115318_u__$2$$.cljs$core$IFn$_invoke$arity$1 ? $G__115307_G__115312_G__115318_u__$2$$.cljs$core$IFn$_invoke$arity$1($G__115304_G__115310_G__115316_k$jscomp$1110_k__$1$$) : $G__115307_G__115312_G__115318_u__$2$$.call(null, $G__115304_G__115310_G__115316_k$jscomp$1110_k__$1$$);
            $G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$ = $G__115308_G__115314_G__115320_JSCompiler_temp_const$jscomp$3628_c__$1$$.call($G__115311_G__115317_JSCompiler_temp_const$jscomp$3629_x$jscomp$2307_x__$1$$, $JSCompiler_temp_const$$, $JSCompiler_temp_const$jscomp$0$$, $G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$ < $y__5114__auto__$$ ? $G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$ : $y__5114__auto__$$);
            $G__115311_G__115317_JSCompiler_temp_const$jscomp$3629_x$jscomp$2307_x__$1$$ = ($G__115307_G__115312_G__115318_u__$2$$.cljs$core$IFn$_invoke$arity$1 ? $G__115307_G__115312_G__115318_u__$2$$.cljs$core$IFn$_invoke$arity$1($G__115304_G__115310_G__115316_k$jscomp$1110_k__$1$$) : $G__115307_G__115312_G__115318_u__$2$$.call(null, $G__115304_G__115310_G__115316_k$jscomp$1110_k__$1$$)) < ($G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$.cljs$core$IFn$_invoke$arity$1($j$jscomp$298_j__$1$$) : 
            $G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$.call(null, $j$jscomp$298_j__$1$$));
            $G__115304_G__115310_G__115316_k$jscomp$1110_k__$1$$ += 1;
            $j$jscomp$298_j__$1$$ += 1;
            $G__115308_G__115314_G__115320_JSCompiler_temp_const$jscomp$3628_c__$1$$ = $G__115306_c__$2$jscomp$4_u__$1$$;
            $G__115306_c__$2$jscomp$4_u__$1$$ = $G__115307_G__115312_G__115318_u__$2$$;
          } else {
            $G__115306_c__$2$jscomp$4_u__$1$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__115308_G__115314_G__115320_JSCompiler_temp_const$jscomp$3628_c__$1$$, $G__115304_G__115310_G__115316_k$jscomp$1110_k__$1$$, $G__115308_G__115314_G__115320_JSCompiler_temp_const$jscomp$3628_c__$1$$.cljs$core$IFn$_invoke$arity$1 ? $G__115308_G__115314_G__115320_JSCompiler_temp_const$jscomp$3628_c__$1$$.cljs$core$IFn$_invoke$arity$1($j$jscomp$298_j__$1$$) : $G__115308_G__115314_G__115320_JSCompiler_temp_const$jscomp$3628_c__$1$$.call(null, 
            $j$jscomp$298_j__$1$$)), $G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__115313_G__115319_v__$1$jscomp$67_v__$2$jscomp$11_x__5113__auto__$$, $G__115304_G__115310_G__115316_k$jscomp$1110_k__$1$$, $G__115307_G__115312_G__115318_u__$2$$.cljs$core$IFn$_invoke$arity$1 ? $G__115307_G__115312_G__115318_u__$2$$.cljs$core$IFn$_invoke$arity$1($G__115304_G__115310_G__115316_k$jscomp$1110_k__$1$$) : $G__115307_G__115312_G__115318_u__$2$$.call(null, 
            $G__115304_G__115310_G__115316_k$jscomp$1110_k__$1$$)), $G__115304_G__115310_G__115316_k$jscomp$1110_k__$1$$ += 1, $j$jscomp$298_j__$1$$ += 1, $G__115308_G__115314_G__115320_JSCompiler_temp_const$jscomp$3628_c__$1$$ = $G__115306_c__$2$jscomp$4_u__$1$$, $G__115306_c__$2$jscomp$4_u__$1$$ = $G__115307_G__115312_G__115318_u__$2$$;
          }
        }
      }
    }(), $u__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__115063$$, 0, null), $v__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__115063$$, 1, null), $c__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__115063$$, 2, null), $j$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__115063$$, 3, null), $k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__115063$$, 4, null);
    if ($APP.cljs.core.truth_(function() {
      var $and__5023__auto__$$ = $r$$;
      return $APP.cljs.core.truth_($and__5023__auto__$$) ? $k$$ > $b$$ && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($l$$, $r$$ - 1) : $and__5023__auto__$$;
    }()) || $APP.cljs.core.truth_(function() {
      var $and__5023__auto__$$ = $s$$;
      return $APP.cljs.core.truth_($and__5023__auto__$$) ? $k$$ <= $b$$ && $l$$ + 1 < $s$$ : $and__5023__auto__$$;
    }())) {
      return $APP.clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? $APP.clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11($n$$, $m$$, $f$$, $c__$1$$, $u__$1$$, $v__$1$$, $a$$, $b$$, $l$$, $r$$, $s$$) : $APP.clojure.math.combinatorics.m5.call(null, $n$$, $m$$, $f$$, $c__$1$$, $u__$1$$, $v__$1$$, $a$$, $b$$, $l$$, $r$$, $s$$);
    }
    if ($k$$ > $b$$) {
      var $G__115327_a__$1$$ = $b$$, $G__115328_b__$1$$ = $k$$, $G__115329_l__$1$$ = $l$$ + 1, $G__115323_part$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($f$$, $G__115329_l__$1$$ + 1, $G__115328_b__$1$$), $G__115324$$ = $c__$1$$, $G__115325$$ = $u__$1$$, $G__115326$$ = $v__$1$$, $G__115330$$ = $r$$, $G__115331$$ = $s$$;
      $f$$ = $G__115323_part$$;
      $c$$ = $G__115324$$;
      $u$$ = $G__115325$$;
      $v$$ = $G__115326$$;
      $a$$ = $G__115327_a__$1$$;
      $b$$ = $G__115328_b__$1$$;
      $l$$ = $G__115329_l__$1$$;
      $r$$ = $G__115330$$;
      $s$$ = $G__115331$$;
    } else {
      return $G__115323_part$$ = function() {
        return function($n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$$, $l$$, $r$$, $s$$, $vec__115063$$, $u__$1$$, $v__$1$$, $c__$1$$, $j$$, $k$$) {
          return function $clojure$math$combinatorics$iter__115066$$($s__115067$$) {
            return new $APP.cljs.core.LazySeq(null, function($n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$$, $l$$, $r$$, $s$$, $vec__115063$$, $u__$1$$, $v__$1$$, $c__$1$$, $j$$, $k$$) {
              return function() {
                for (;;) {
                  var $temp__5825__auto__$$ = $APP.cljs.core.seq($s__115067$$);
                  if ($temp__5825__auto__$$) {
                    var $s__115067__$2$$ = $temp__5825__auto__$$;
                    if ($APP.cljs.core.chunked_seq_QMARK_($s__115067__$2$$)) {
                      var $c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__115067__$2$$), $size__5502__auto__$$ = $APP.cljs.core.count($c__5501__auto__$$), $b__115069$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                      return function() {
                        for (var $i__115068$$ = 0;;) {
                          if ($i__115068$$ < $size__5502__auto__$$) {
                            var $y$$ = $APP.cljs.core._nth($c__5501__auto__$$, $i__115068$$);
                            $APP.cljs.core.chunk_append($b__115069$$, function() {
                              var $first_col$$ = $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($y$$) : $f$$.call(null, $y$$), $last_col$$ = function() {
                                var $G__115070$$ = $y$$ + 1;
                                return $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($G__115070$$) : $f$$.call(null, $G__115070$$);
                              }() - 1;
                              return $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, function() {
                                return function($i__115068$$, $n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$$, $l$$, $r$$, $s$$, $first_col$$, $last_col$$, $y$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115069$$, $s__115067__$2$$, $temp__5825__auto__$$, $vec__115063$$, $u__$1$$, $v__$1$$, $c__$1$$, $j$$, $k$$) {
                                  return function $clojure$math$combinatorics$iter__115066_$_iter__115071$$($s__115072$$) {
                                    return new $APP.cljs.core.LazySeq(null, function($i__115068$$, $n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$$, $l$$, $r$$, $s$$, $first_col$$, $last_col$$, $y$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115069$$, $s__115067__$2$$, $temp__5825__auto__$$, $vec__115063$$, $u__$1$$, $v__$1$$, $c__$1$$, $j$$, $k$$) {
                                      return function() {
                                        for (var $s__115072__$1_s__115072__$2_temp__5825__auto____$1$$ = $s__115072$$;;) {
                                          if ($s__115072__$1_s__115072__$2_temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__115072__$1_s__115072__$2_temp__5825__auto____$1$$)) {
                                            if ($APP.cljs.core.chunked_seq_QMARK_($s__115072__$1_s__115072__$2_temp__5825__auto____$1$$)) {
                                              var $JSCompiler_inline_result$jscomp$3631_c__5501__auto____$1$$ = $APP.cljs.core.chunk_first($s__115072__$1_s__115072__$2_temp__5825__auto____$1$$), $size__5502__auto____$1$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$3631_c__5501__auto____$1$$), $b__115074_z$$ = $APP.cljs.core.chunk_buffer($size__5502__auto____$1$$);
                                              a: {
                                                for (var $i__115073$$ = 0;;) {
                                                  if ($i__115073$$ < $size__5502__auto____$1$$) {
                                                    var $z$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$3631_c__5501__auto____$1$$, $i__115073$$);
                                                    $APP.cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2($v__$1$$.cljs$core$IFn$_invoke$arity$1 ? $v__$1$$.cljs$core$IFn$_invoke$arity$1($z$$) : $v__$1$$.call(null, $z$$), 0) && $APP.cljs.core.chunk_append($b__115074_z$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$c__$1$$.cljs$core$IFn$_invoke$arity$1 ? $c__$1$$.cljs$core$IFn$_invoke$arity$1($z$$) : $c__$1$$.call(null, $z$$), $v__$1$$.cljs$core$IFn$_invoke$arity$1 ? 
                                                    $v__$1$$.cljs$core$IFn$_invoke$arity$1($z$$) : $v__$1$$.call(null, $z$$)], null));
                                                    $i__115073$$ += 1;
                                                  } else {
                                                    $JSCompiler_inline_result$jscomp$3631_c__5501__auto____$1$$ = !0;
                                                    break a;
                                                  }
                                                }
                                                $JSCompiler_inline_result$jscomp$3631_c__5501__auto____$1$$ = void 0;
                                              }
                                              return $JSCompiler_inline_result$jscomp$3631_c__5501__auto____$1$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115074_z$$), $clojure$math$combinatorics$iter__115066_$_iter__115071$$($APP.cljs.core.chunk_rest($s__115072__$1_s__115072__$2_temp__5825__auto____$1$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115074_z$$), null);
                                            }
                                            $b__115074_z$$ = $APP.cljs.core.first($s__115072__$1_s__115072__$2_temp__5825__auto____$1$$);
                                            if ($APP.cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2($v__$1$$.cljs$core$IFn$_invoke$arity$1 ? $v__$1$$.cljs$core$IFn$_invoke$arity$1($b__115074_z$$) : $v__$1$$.call(null, $b__115074_z$$), 0)) {
                                              return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$c__$1$$.cljs$core$IFn$_invoke$arity$1 ? $c__$1$$.cljs$core$IFn$_invoke$arity$1($b__115074_z$$) : $c__$1$$.call(null, $b__115074_z$$), $v__$1$$.cljs$core$IFn$_invoke$arity$1 ? $v__$1$$.cljs$core$IFn$_invoke$arity$1($b__115074_z$$) : $v__$1$$.call(null, $b__115074_z$$)], null), $clojure$math$combinatorics$iter__115066_$_iter__115071$$($APP.cljs.core.rest($s__115072__$1_s__115072__$2_temp__5825__auto____$1$$)));
                                            }
                                            $s__115072__$1_s__115072__$2_temp__5825__auto____$1$$ = $APP.cljs.core.rest($s__115072__$1_s__115072__$2_temp__5825__auto____$1$$);
                                          } else {
                                            return null;
                                          }
                                        }
                                      };
                                    }($i__115068$$, $n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$$, $l$$, $r$$, $s$$, $first_col$$, $last_col$$, $y$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115069$$, $s__115067__$2$$, $temp__5825__auto__$$, $vec__115063$$, $u__$1$$, $v__$1$$, $c__$1$$, $j$$, $k$$), null, null);
                                  };
                                }($i__115068$$, $n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$$, $l$$, $r$$, $s$$, $first_col$$, $last_col$$, $y$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115069$$, $s__115067__$2$$, $temp__5825__auto__$$, $vec__115063$$, $u__$1$$, $v__$1$$, $c__$1$$, $j$$, $k$$)($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$2($first_col$$, $last_col$$ + 1));
                              }());
                            }());
                            $i__115068$$ += 1;
                          } else {
                            return !0;
                          }
                        }
                      }() ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115069$$), $clojure$math$combinatorics$iter__115066$$($APP.cljs.core.chunk_rest($s__115067__$2$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115069$$), null);
                    }
                    var $y$$ = $APP.cljs.core.first($s__115067__$2$$);
                    return $APP.cljs.core.cons(function() {
                      var $first_col$$ = $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($y$$) : $f$$.call(null, $y$$), $last_col$$ = function() {
                        var $G__115075$$ = $y$$ + 1;
                        return $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($G__115075$$) : $f$$.call(null, $G__115075$$);
                      }() - 1;
                      return $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, function() {
                        return function($n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$$, $l$$, $r$$, $s$$, $first_col$$, $last_col$$, $y$$, $s__115067__$2$$, $temp__5825__auto__$$, $vec__115063$$, $u__$1$$, $v__$1$$, $c__$1$$, $j$$, $k$$) {
                          return function $clojure$math$combinatorics$iter__115066_$_iter__115076$$($s__115077$$) {
                            return new $APP.cljs.core.LazySeq(null, function($n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$$, $l$$, $r$$, $s$$, $first_col$$, $last_col$$, $y$$, $s__115067__$2$$, $temp__5825__auto__$$, $vec__115063$$, $u__$1$$, $v__$1$$, $c__$1$$, $j$$, $k$$) {
                              return function() {
                                for (var $s__115077__$1_s__115077__$2_temp__5825__auto____$1$$ = $s__115077$$;;) {
                                  if ($s__115077__$1_s__115077__$2_temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__115077__$1_s__115077__$2_temp__5825__auto____$1$$)) {
                                    if ($APP.cljs.core.chunked_seq_QMARK_($s__115077__$1_s__115077__$2_temp__5825__auto____$1$$)) {
                                      var $JSCompiler_inline_result$jscomp$3632_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__115077__$1_s__115077__$2_temp__5825__auto____$1$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$3632_c__5501__auto__$$), $b__115079_z$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                                      a: {
                                        for (var $i__115078$$ = 0;;) {
                                          if ($i__115078$$ < $size__5502__auto__$$) {
                                            var $z$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$3632_c__5501__auto__$$, $i__115078$$);
                                            $APP.cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2($v__$1$$.cljs$core$IFn$_invoke$arity$1 ? $v__$1$$.cljs$core$IFn$_invoke$arity$1($z$$) : $v__$1$$.call(null, $z$$), 0) && $APP.cljs.core.chunk_append($b__115079_z$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$c__$1$$.cljs$core$IFn$_invoke$arity$1 ? $c__$1$$.cljs$core$IFn$_invoke$arity$1($z$$) : $c__$1$$.call(null, $z$$), $v__$1$$.cljs$core$IFn$_invoke$arity$1 ? 
                                            $v__$1$$.cljs$core$IFn$_invoke$arity$1($z$$) : $v__$1$$.call(null, $z$$)], null));
                                            $i__115078$$ += 1;
                                          } else {
                                            $JSCompiler_inline_result$jscomp$3632_c__5501__auto__$$ = !0;
                                            break a;
                                          }
                                        }
                                        $JSCompiler_inline_result$jscomp$3632_c__5501__auto__$$ = void 0;
                                      }
                                      return $JSCompiler_inline_result$jscomp$3632_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115079_z$$), $clojure$math$combinatorics$iter__115066_$_iter__115076$$($APP.cljs.core.chunk_rest($s__115077__$1_s__115077__$2_temp__5825__auto____$1$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115079_z$$), null);
                                    }
                                    $b__115079_z$$ = $APP.cljs.core.first($s__115077__$1_s__115077__$2_temp__5825__auto____$1$$);
                                    if ($APP.cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2($v__$1$$.cljs$core$IFn$_invoke$arity$1 ? $v__$1$$.cljs$core$IFn$_invoke$arity$1($b__115079_z$$) : $v__$1$$.call(null, $b__115079_z$$), 0)) {
                                      return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$c__$1$$.cljs$core$IFn$_invoke$arity$1 ? $c__$1$$.cljs$core$IFn$_invoke$arity$1($b__115079_z$$) : $c__$1$$.call(null, $b__115079_z$$), $v__$1$$.cljs$core$IFn$_invoke$arity$1 ? $v__$1$$.cljs$core$IFn$_invoke$arity$1($b__115079_z$$) : $v__$1$$.call(null, $b__115079_z$$)], null), $clojure$math$combinatorics$iter__115066_$_iter__115076$$($APP.cljs.core.rest($s__115077__$1_s__115077__$2_temp__5825__auto____$1$$)));
                                    }
                                    $s__115077__$1_s__115077__$2_temp__5825__auto____$1$$ = $APP.cljs.core.rest($s__115077__$1_s__115077__$2_temp__5825__auto____$1$$);
                                  } else {
                                    return null;
                                  }
                                }
                              };
                            }($n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$$, $l$$, $r$$, $s$$, $first_col$$, $last_col$$, $y$$, $s__115067__$2$$, $temp__5825__auto__$$, $vec__115063$$, $u__$1$$, $v__$1$$, $c__$1$$, $j$$, $k$$), null, null);
                          };
                        }($n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$$, $l$$, $r$$, $s$$, $first_col$$, $last_col$$, $y$$, $s__115067__$2$$, $temp__5825__auto__$$, $vec__115063$$, $u__$1$$, $v__$1$$, $c__$1$$, $j$$, $k$$)($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$2($first_col$$, $last_col$$ + 1));
                      }());
                    }(), $clojure$math$combinatorics$iter__115066$$($APP.cljs.core.rest($s__115067__$2$$)));
                  }
                  return null;
                }
              };
            }($n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$$, $l$$, $r$$, $s$$, $vec__115063$$, $u__$1$$, $v__$1$$, $c__$1$$, $j$$, $k$$), null, null);
          };
        }($n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$$, $l$$, $r$$, $s$$, $vec__115063$$, $u__$1$$, $v__$1$$, $c__$1$$, $j$$, $k$$)($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1($l$$ + 1));
      }(), $APP.cljs.core.cons($G__115323_part$$, new $APP.cljs.core.LazySeq(null, function($n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$$, $l$$, $r$$, $s$$, $part$$, $vec__115063$$, $u__$1$$, $v__$1$$, $c__$1$$, $j$$, $k$$) {
        return function() {
          return $APP.clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? $APP.clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11($n$$, $m$$, $f$$, $c__$1$$, $u__$1$$, $v__$1$$, $a$$, $b$$, $l$$, $r$$, $s$$) : $APP.clojure.math.combinatorics.m5.call(null, $n$$, $m$$, $f$$, $c__$1$$, $u__$1$$, $v__$1$$, $a$$, $b$$, $l$$, $r$$, $s$$);
        };
      }($n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$$, $l$$, $r$$, $s$$, $G__115323_part$$, $vec__115063$$, $u__$1$$, $v__$1$$, $c__$1$$, $j$$, $k$$), null, null));
    }
  }
};
$APP.clojure.math.combinatorics.multiset_partitions_M.cljs$lang$maxFixedArity = 11;
$APP.clojure.math.combinatorics.m5 = function($n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$$, $l$$, $r$$, $s$$) {
  var $j$$ = function() {
    for (var $j$$ = $b$$ - 1;;) {
      if ($APP.cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2($v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($j$$) : $v$$.call(null, $j$$), 0)) {
        return $j$$;
      }
      --$j$$;
    }
  }();
  if ($APP.cljs.core.truth_($APP.cljs.core.truth_($r$$) ? $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($j$$, $a$$) && (($v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($j$$) : $v$$.call(null, $j$$)) - 1) * ($r$$ - $l$$) < ($u$$.cljs$core$IFn$_invoke$arity$1 ? $u$$.cljs$core$IFn$_invoke$arity$1($j$$) : $u$$.call(null, $j$$)) : $r$$) || $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($j$$, $a$$) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($v$$.cljs$core$IFn$_invoke$arity$1 ? 
  $v$$.cljs$core$IFn$_invoke$arity$1($j$$) : $v$$.call(null, $j$$), 1)) {
    return $APP.clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? $APP.clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11($n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$$, $l$$, $r$$, $s$$) : $APP.clojure.math.combinatorics.m6.call(null, $n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$$, $l$$, $r$$, $s$$);
  }
  var $v__$1$$ = $APP.clojure.math.combinatorics.update($v$$, $j$$, $APP.cljs.core.dec), $diff_uv$$ = $APP.cljs.core.truth_($s$$) ? $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._PLUS_, function() {
    return function $clojure$math$combinatorics$m5_$_iter__115080$$($s__115081$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (;;) {
          var $s__115081__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__115081$$);
          if ($s__115081__$2_temp__5825__auto__$$) {
            if ($APP.cljs.core.chunked_seq_QMARK_($s__115081__$2_temp__5825__auto__$$)) {
              var $JSCompiler_inline_result$jscomp$3633_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__115081__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$3633_c__5501__auto__$$), $b__115083_i$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              a: {
                for (var $i__115082$$ = 0;;) {
                  if ($i__115082$$ < $size__5502__auto__$$) {
                    var $i$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$3633_c__5501__auto__$$, $i__115082$$);
                    $APP.cljs.core.chunk_append($b__115083_i$$, ($u$$.cljs$core$IFn$_invoke$arity$1 ? $u$$.cljs$core$IFn$_invoke$arity$1($i$$) : $u$$.call(null, $i$$)) - ($v__$1$$.cljs$core$IFn$_invoke$arity$1 ? $v__$1$$.cljs$core$IFn$_invoke$arity$1($i$$) : $v__$1$$.call(null, $i$$)));
                    $i__115082$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$3633_c__5501__auto__$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$3633_c__5501__auto__$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$3633_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115083_i$$), $clojure$math$combinatorics$m5_$_iter__115080$$($APP.cljs.core.chunk_rest($s__115081__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115083_i$$), null);
            }
            $b__115083_i$$ = $APP.cljs.core.first($s__115081__$2_temp__5825__auto__$$);
            return $APP.cljs.core.cons(($u$$.cljs$core$IFn$_invoke$arity$1 ? $u$$.cljs$core$IFn$_invoke$arity$1($b__115083_i$$) : $u$$.call(null, $b__115083_i$$)) - ($v__$1$$.cljs$core$IFn$_invoke$arity$1 ? $v__$1$$.cljs$core$IFn$_invoke$arity$1($b__115083_i$$) : $v__$1$$.call(null, $b__115083_i$$)), $clojure$math$combinatorics$m5_$_iter__115080$$($APP.cljs.core.rest($s__115081__$2_temp__5825__auto__$$)));
          }
          return null;
        }
      }, null, null);
    }($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$2($a$$, $j$$ + 1));
  }()) : null, $v__$2$$ = function() {
    for (var $G__115357_ks$$ = $APP.cljs.core.range.cljs$core$IFn$_invoke$arity$2($j$$ + 1, $b$$), $G__115358_v__$2$$ = $v__$1$$;;) {
      if ($APP.cljs.core.empty_QMARK_($G__115357_ks$$)) {
        return $G__115358_v__$2$$;
      }
      var $k$$ = $APP.cljs.core.first($G__115357_ks$$);
      $G__115357_ks$$ = $APP.cljs.core.rest($G__115357_ks$$);
      $G__115358_v__$2$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__115358_v__$2$$, $k$$, $u$$.cljs$core$IFn$_invoke$arity$1 ? $u$$.cljs$core$IFn$_invoke$arity$1($k$$) : $u$$.call(null, $k$$));
    }
  }(), $min_partitions_after_this$$ = $APP.cljs.core.truth_($s$$) ? $s$$ - ($l$$ + 1) : 0, $amount_to_dec$$ = $APP.cljs.core.truth_($s$$) ? function() {
    var $y__5111__auto__$$ = $min_partitions_after_this$$ - $diff_uv$$;
    return 0 > $y__5111__auto__$$ ? 0 : $y__5111__auto__$$;
  }() : 0, $v__$3$$ = $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($amount_to_dec$$, 0) ? $v__$2$$ : function() {
    for (var $k_1$$ = $b$$ - 1, $G__115360_v__$3$$ = $v__$2$$, $G__115361_amount$$ = $amount_to_dec$$;;) {
      var $vk$$ = $G__115360_v__$3$$.cljs$core$IFn$_invoke$arity$1 ? $G__115360_v__$3$$.cljs$core$IFn$_invoke$arity$1($k_1$$) : $G__115360_v__$3$$.call(null, $k_1$$);
      if ($G__115361_amount$$ > $vk$$) {
        var $G__115359$$ = $k_1$$ - 1;
        $G__115360_v__$3$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__115360_v__$3$$, $k_1$$, 0);
        $G__115361_amount$$ -= $vk$$;
        $k_1$$ = $G__115359$$;
      } else {
        return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__115360_v__$3$$, $k_1$$, $vk$$ - $G__115361_amount$$);
      }
    }
  }();
  return $APP.clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11($n$$, $m$$, $f$$, $c$$, $u$$, $v__$3$$, $a$$, $b$$, $l$$, $r$$, $s$$);
};
$APP.clojure.math.combinatorics.m6 = function($n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a$$, $b$jscomp$1188_l__$1$$, $a__$1$jscomp$69_l$$, $r$$, $s$$) {
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($a__$1$jscomp$69_l$$, 0)) {
    return $APP.cljs.core.List.EMPTY;
  }
  $b$jscomp$1188_l__$1$$ = $a__$1$jscomp$69_l$$ - 1;
  $a__$1$jscomp$69_l$$ = $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($b$jscomp$1188_l__$1$$) : $f$$.call(null, $b$jscomp$1188_l__$1$$);
  return $APP.clojure.math.combinatorics.m5($n$$, $m$$, $f$$, $c$$, $u$$, $v$$, $a__$1$jscomp$69_l$$, $a$$, $b$jscomp$1188_l__$1$$, $r$$, $s$$);
};
$APP.clojure.math.combinatorics.partitions_M = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$555_argseq__5756__auto__$$ = [], $len__5749__auto___115367$$ = arguments.length, $i__5750__auto___115368$$ = 0;;) {
    if ($i__5750__auto___115368$$ < $len__5749__auto___115367$$) {
      $args__5755__auto__$jscomp$555_argseq__5756__auto__$$.push(arguments[$i__5750__auto___115368$$]), $i__5750__auto___115368$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$555_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$555_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$555_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return $APP.clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$555_argseq__5756__auto__$$);
};
$APP.clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = function($items$$, $p__115086$$) {
  var $map__115087__$1$$ = $APP.cljs.core.__destructure_map($p__115086$$), $from$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115087__$1$$, $APP.cljs$cst$1816$min), $to$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115087__$1$$, $APP.cljs$cst$1533$max);
  if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count($items$$), 0)) {
    return ($APP.cljs.core.truth_($from$$) ? $from$$ : 0) <= 0 && 0 <= ($APP.cljs.core.truth_($to$$) ? $to$$ : 0) ? $APP.cljs.core.list($APP.cljs.core.List.EMPTY) : $APP.cljs.core.List.EMPTY;
  }
  var $items__$1$$ = $APP.cljs.core.vec($items$$), $ditems$$ = $APP.cljs.core.vec($APP.cljs.core.distinct.cljs$core$IFn$_invoke$arity$1($items__$1$$)), $freqs$$ = $APP.cljs.core.frequencies($items__$1$$), $N$$ = $APP.cljs.core.count($items__$1$$), $M$$ = $APP.cljs.core.count($ditems$$), $from__$1$$ = $APP.cljs.core.truth_($APP.cljs.core.truth_($from$$) ? $from$$ <= 1 : $from$$) ? null : $from$$, $to__$1$$ = $APP.cljs.core.truth_($APP.cljs.core.truth_($to$$) ? $to$$ >= $N$$ : $to$$) ? null : $to$$;
  if (1 <= ($APP.cljs.core.truth_($from__$1$$) ? $from__$1$$ : 1) && ($APP.cljs.core.truth_($from__$1$$) ? $from__$1$$ : 1) <= ($APP.cljs.core.truth_($to__$1$$) ? $to__$1$$ : $N$$) && ($APP.cljs.core.truth_($to__$1$$) ? $to__$1$$ : $N$$) <= $N$$) {
    if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($N$$, 1)) {
      return $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.List(null, $APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.List(null, $APP.cljs.core.vec($APP.cljs.core.sequence.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new $APP.cljs.core.List(null, $APP.cljs.core.first($items__$1$$), 
      null, 1, null))))), null, 1, null)))), null, 1, null))));
    }
    var $start_multiset$$ = $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, function() {
      return function $clojure$math$combinatorics$iter__115088$$($s__115089$$) {
        return new $APP.cljs.core.LazySeq(null, function() {
          for (;;) {
            var $s__115089__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__115089$$);
            if ($s__115089__$2_temp__5825__auto__$$) {
              if ($APP.cljs.core.chunked_seq_QMARK_($s__115089__$2_temp__5825__auto__$$)) {
                var $c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__115089__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($c__5501__auto__$$), $b__115091$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                return function() {
                  for (var $i__115090$$ = 0;;) {
                    if ($i__115090$$ < $size__5502__auto__$$) {
                      var $G__115092$jscomp$inline_9206_JSCompiler_inline_result$jscomp$3640_i$$ = $APP.cljs.core._nth($c__5501__auto__$$, $i__115090$$), $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.chunk_append, $JSCompiler_temp_const$jscomp$1$$ = $b__115091$$, $JSCompiler_temp_const$jscomp$2$$ = $APP.cljs.core.PersistentVector, $JSCompiler_temp_const$jscomp$3$$ = $APP.cljs.core.PersistentVector.EMPTY_NODE, $JSCompiler_temp_const$jscomp$4$$ = 
                      $G__115092$jscomp$inline_9206_JSCompiler_inline_result$jscomp$3640_i$$ + 1;
                      $G__115092$jscomp$inline_9206_JSCompiler_inline_result$jscomp$3640_i$$ = $ditems$$.cljs$core$IFn$_invoke$arity$1 ? $ditems$$.cljs$core$IFn$_invoke$arity$1($G__115092$jscomp$inline_9206_JSCompiler_inline_result$jscomp$3640_i$$) : $ditems$$.call(null, $G__115092$jscomp$inline_9206_JSCompiler_inline_result$jscomp$3640_i$$);
                      $G__115092$jscomp$inline_9206_JSCompiler_inline_result$jscomp$3640_i$$ = $freqs$$.cljs$core$IFn$_invoke$arity$1 ? $freqs$$.cljs$core$IFn$_invoke$arity$1($G__115092$jscomp$inline_9206_JSCompiler_inline_result$jscomp$3640_i$$) : $freqs$$.call(null, $G__115092$jscomp$inline_9206_JSCompiler_inline_result$jscomp$3640_i$$);
                      $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_temp_const$jscomp$1$$, new $JSCompiler_temp_const$jscomp$2$$(null, 2, 5, $JSCompiler_temp_const$jscomp$3$$, [$JSCompiler_temp_const$jscomp$4$$, $G__115092$jscomp$inline_9206_JSCompiler_inline_result$jscomp$3640_i$$], null));
                      $i__115090$$ += 1;
                    } else {
                      return !0;
                    }
                  }
                }() ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115091$$), $clojure$math$combinatorics$iter__115088$$($APP.cljs.core.chunk_rest($s__115089__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115091$$), null);
              }
              var $i$$ = $APP.cljs.core.first($s__115089__$2_temp__5825__auto__$$);
              return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$i$$ + 1, function() {
                var $G__115093$$ = $ditems$$.cljs$core$IFn$_invoke$arity$1 ? $ditems$$.cljs$core$IFn$_invoke$arity$1($i$$) : $ditems$$.call(null, $i$$);
                return $freqs$$.cljs$core$IFn$_invoke$arity$1 ? $freqs$$.cljs$core$IFn$_invoke$arity$1($G__115093$$) : $freqs$$.call(null, $G__115093$$);
              }()], null), $clojure$math$combinatorics$iter__115088$$($APP.cljs.core.rest($s__115089__$2_temp__5825__auto__$$)));
            }
            return null;
          }
        }, null, null);
      }($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1($M$$));
    }()), $parts$$ = $APP.clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3($start_multiset$$, $to__$1$$, $from__$1$$);
    return function $clojure$math$combinatorics$iter__115094$$($s__115095$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (;;) {
          var $temp__5825__auto__$$ = $APP.cljs.core.seq($s__115095$$);
          if ($temp__5825__auto__$$) {
            var $s__115095__$2$$ = $temp__5825__auto__$$;
            if ($APP.cljs.core.chunked_seq_QMARK_($s__115095__$2$$)) {
              var $c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__115095__$2$$), $size__5502__auto__$$ = $APP.cljs.core.count($c__5501__auto__$$), $b__115097$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              return function() {
                for (var $i__115096$$ = 0;;) {
                  if ($i__115096$$ < $size__5502__auto__$$) {
                    var $part$$ = $APP.cljs.core._nth($c__5501__auto__$$, $i__115096$$);
                    $APP.cljs.core.chunk_append($b__115097$$, function() {
                      return function($i__115096$$, $part$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115097$$, $s__115095__$2$$, $temp__5825__auto__$$, $start_multiset$$, $parts$$, $items__$1$$, $ditems$$, $freqs$$, $N$$, $M$$, $from__$1$$, $to__$1$$, $map__115087$$, $map__115087__$1$$, $from$$, $to$$) {
                        return function $clojure$math$combinatorics$iter__115094_$_iter__115098$$($s__115099$$) {
                          return new $APP.cljs.core.LazySeq(null, function($i__115096$$, $part$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115097$$, $s__115095__$2$$, $temp__5825__auto__$$, $start_multiset$$, $parts$$, $items__$1$$, $ditems$$, $freqs$$, $N$$, $M$$, $from__$1$$, $to__$1$$, $map__115087$$, $map__115087__$1$$, $from$$, $to$$) {
                            return function() {
                              for (;;) {
                                var $temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__115099$$);
                                if ($temp__5825__auto____$1$$) {
                                  var $s__115099__$2$$ = $temp__5825__auto____$1$$;
                                  if ($APP.cljs.core.chunked_seq_QMARK_($s__115099__$2$$)) {
                                    var $c__5501__auto____$1$$ = $APP.cljs.core.chunk_first($s__115099__$2$$), $size__5502__auto____$1$$ = $APP.cljs.core.count($c__5501__auto____$1$$), $b__115101$$ = $APP.cljs.core.chunk_buffer($size__5502__auto____$1$$);
                                    return function() {
                                      for (var $i__115100$$ = 0;;) {
                                        if ($i__115100$$ < $size__5502__auto____$1$$) {
                                          var $multiset$$ = $APP.cljs.core._nth($c__5501__auto____$1$$, $i__115100$$);
                                          $APP.cljs.core.chunk_append($b__115101$$, $APP.cljs.core.vec($APP.clojure.math.combinatorics.mapjoin(function($i__115100$$, $i__115096$$, $multiset$$, $c__5501__auto____$1$$, $size__5502__auto____$1$$, $b__115101$$, $s__115099__$2$$, $temp__5825__auto____$1$$, $part$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115097$$, $s__115095__$2$$, $temp__5825__auto__$$, $start_multiset$$, $parts$$, $items__$1$$, $ditems$$, $freqs$$, $N$$, $M$$, $from__$1$$, $to__$1$$, 
                                          $map__115087$$, $map__115087__$1$$, $from$$, $to$$) {
                                            return function($numtimes_p__115102$$) {
                                              var $G__115106$jscomp$inline_9208_JSCompiler_inline_result$jscomp$3643_index$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($numtimes_p__115102$$, 0, null);
                                              $numtimes_p__115102$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($numtimes_p__115102$$, 1, null);
                                              var $JSCompiler_temp_const$$ = $APP.cljs.core.repeat, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.cljs$core$IFn$_invoke$arity$2;
                                              --$G__115106$jscomp$inline_9208_JSCompiler_inline_result$jscomp$3643_index$$;
                                              $G__115106$jscomp$inline_9208_JSCompiler_inline_result$jscomp$3643_index$$ = $ditems$$.cljs$core$IFn$_invoke$arity$1 ? $ditems$$.cljs$core$IFn$_invoke$arity$1($G__115106$jscomp$inline_9208_JSCompiler_inline_result$jscomp$3643_index$$) : $ditems$$.call(null, $G__115106$jscomp$inline_9208_JSCompiler_inline_result$jscomp$3643_index$$);
                                              return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $numtimes_p__115102$$, $G__115106$jscomp$inline_9208_JSCompiler_inline_result$jscomp$3643_index$$);
                                            };
                                          }($i__115100$$, $i__115096$$, $multiset$$, $c__5501__auto____$1$$, $size__5502__auto____$1$$, $b__115101$$, $s__115099__$2$$, $temp__5825__auto____$1$$, $part$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115097$$, $s__115095__$2$$, $temp__5825__auto__$$, $start_multiset$$, $parts$$, $items__$1$$, $ditems$$, $freqs$$, $N$$, $M$$, $from__$1$$, $to__$1$$, $map__115087$$, $map__115087__$1$$, $from$$, $to$$), $multiset$$)));
                                          $i__115100$$ += 1;
                                        } else {
                                          return !0;
                                        }
                                      }
                                    }() ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115101$$), $clojure$math$combinatorics$iter__115094_$_iter__115098$$($APP.cljs.core.chunk_rest($s__115099__$2$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115101$$), null);
                                  }
                                  var $multiset$$ = $APP.cljs.core.first($s__115099__$2$$);
                                  return $APP.cljs.core.cons($APP.cljs.core.vec($APP.clojure.math.combinatorics.mapjoin(function($i__115096$$, $multiset$$, $s__115099__$2$$, $temp__5825__auto____$1$$, $part$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115097$$, $s__115095__$2$$, $temp__5825__auto__$$, $start_multiset$$, $parts$$, $items__$1$$, $ditems$$, $freqs$$, $N$$, $M$$, $from__$1$$, $to__$1$$, $map__115087$$, $map__115087__$1$$, $from$$, $to$$) {
                                    return function($numtimes$$) {
                                      var $G__115111$jscomp$inline_9210_JSCompiler_inline_result$jscomp$3646_index$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($numtimes$$, 0, null);
                                      $numtimes$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($numtimes$$, 1, null);
                                      var $JSCompiler_temp_const$$ = $APP.cljs.core.repeat, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.cljs$core$IFn$_invoke$arity$2;
                                      --$G__115111$jscomp$inline_9210_JSCompiler_inline_result$jscomp$3646_index$$;
                                      $G__115111$jscomp$inline_9210_JSCompiler_inline_result$jscomp$3646_index$$ = $ditems$$.cljs$core$IFn$_invoke$arity$1 ? $ditems$$.cljs$core$IFn$_invoke$arity$1($G__115111$jscomp$inline_9210_JSCompiler_inline_result$jscomp$3646_index$$) : $ditems$$.call(null, $G__115111$jscomp$inline_9210_JSCompiler_inline_result$jscomp$3646_index$$);
                                      return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $numtimes$$, $G__115111$jscomp$inline_9210_JSCompiler_inline_result$jscomp$3646_index$$);
                                    };
                                  }($i__115096$$, $multiset$$, $s__115099__$2$$, $temp__5825__auto____$1$$, $part$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115097$$, $s__115095__$2$$, $temp__5825__auto__$$, $start_multiset$$, $parts$$, $items__$1$$, $ditems$$, $freqs$$, $N$$, $M$$, $from__$1$$, $to__$1$$, $map__115087$$, $map__115087__$1$$, $from$$, $to$$), $multiset$$)), $clojure$math$combinatorics$iter__115094_$_iter__115098$$($APP.cljs.core.rest($s__115099__$2$$)));
                                }
                                return null;
                              }
                            };
                          }($i__115096$$, $part$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115097$$, $s__115095__$2$$, $temp__5825__auto__$$, $start_multiset$$, $parts$$, $items__$1$$, $ditems$$, $freqs$$, $N$$, $M$$, $from__$1$$, $to__$1$$, $map__115087$$, $map__115087__$1$$, $from$$, $to$$), null, null);
                        };
                      }($i__115096$$, $part$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115097$$, $s__115095__$2$$, $temp__5825__auto__$$, $start_multiset$$, $parts$$, $items__$1$$, $ditems$$, $freqs$$, $N$$, $M$$, $from__$1$$, $to__$1$$, $p__115086$$, $map__115087__$1$$, $from$$, $to$$)($part$$);
                    }());
                    $i__115096$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115097$$), $clojure$math$combinatorics$iter__115094$$($APP.cljs.core.chunk_rest($s__115095__$2$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115097$$), null);
            }
            var $part$$ = $APP.cljs.core.first($s__115095__$2$$);
            return $APP.cljs.core.cons(function() {
              return function($part$$, $s__115095__$2$$, $temp__5825__auto__$$, $start_multiset$$, $parts$$, $items__$1$$, $ditems$$, $freqs$$, $N$$, $M$$, $from__$1$$, $to__$1$$, $map__115087$$, $map__115087__$1$$, $from$$, $to$$) {
                return function $clojure$math$combinatorics$iter__115094_$_iter__115112$$($s__115113$$) {
                  return new $APP.cljs.core.LazySeq(null, function() {
                    for (;;) {
                      var $temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__115113$$);
                      if ($temp__5825__auto____$1$$) {
                        var $s__115113__$2$$ = $temp__5825__auto____$1$$;
                        if ($APP.cljs.core.chunked_seq_QMARK_($s__115113__$2$$)) {
                          var $c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__115113__$2$$), $size__5502__auto__$$ = $APP.cljs.core.count($c__5501__auto__$$), $b__115115$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                          return function() {
                            for (var $i__115114$$ = 0;;) {
                              if ($i__115114$$ < $size__5502__auto__$$) {
                                var $multiset$$ = $APP.cljs.core._nth($c__5501__auto__$$, $i__115114$$);
                                $APP.cljs.core.chunk_append($b__115115$$, $APP.cljs.core.vec($APP.clojure.math.combinatorics.mapjoin(function($i__115114$$, $multiset$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115115$$, $s__115113__$2$$, $temp__5825__auto____$1$$, $part$$, $s__115095__$2$$, $temp__5825__auto__$$, $start_multiset$$, $parts$$, $items__$1$$, $ditems$$, $freqs$$, $N$$, $M$$, $from__$1$$, $to__$1$$, $map__115087$$, $map__115087__$1$$, $from$$, $to$$) {
                                  return function($numtimes$$) {
                                    var $G__115120$jscomp$inline_9212_JSCompiler_inline_result$jscomp$3649_index$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($numtimes$$, 0, null);
                                    $numtimes$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($numtimes$$, 1, null);
                                    var $JSCompiler_temp_const$$ = $APP.cljs.core.repeat, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.cljs$core$IFn$_invoke$arity$2;
                                    --$G__115120$jscomp$inline_9212_JSCompiler_inline_result$jscomp$3649_index$$;
                                    $G__115120$jscomp$inline_9212_JSCompiler_inline_result$jscomp$3649_index$$ = $ditems$$.cljs$core$IFn$_invoke$arity$1 ? $ditems$$.cljs$core$IFn$_invoke$arity$1($G__115120$jscomp$inline_9212_JSCompiler_inline_result$jscomp$3649_index$$) : $ditems$$.call(null, $G__115120$jscomp$inline_9212_JSCompiler_inline_result$jscomp$3649_index$$);
                                    return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $numtimes$$, $G__115120$jscomp$inline_9212_JSCompiler_inline_result$jscomp$3649_index$$);
                                  };
                                }($i__115114$$, $multiset$$, $c__5501__auto__$$, $size__5502__auto__$$, $b__115115$$, $s__115113__$2$$, $temp__5825__auto____$1$$, $part$$, $s__115095__$2$$, $temp__5825__auto__$$, $start_multiset$$, $parts$$, $items__$1$$, $ditems$$, $freqs$$, $N$$, $M$$, $from__$1$$, $to__$1$$, $map__115087$$, $map__115087__$1$$, $from$$, $to$$), $multiset$$)));
                                $i__115114$$ += 1;
                              } else {
                                return !0;
                              }
                            }
                          }() ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115115$$), $clojure$math$combinatorics$iter__115094_$_iter__115112$$($APP.cljs.core.chunk_rest($s__115113__$2$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__115115$$), null);
                        }
                        var $multiset$$ = $APP.cljs.core.first($s__115113__$2$$);
                        return $APP.cljs.core.cons($APP.cljs.core.vec($APP.clojure.math.combinatorics.mapjoin(function($multiset$$, $s__115113__$2$$, $temp__5825__auto____$1$$, $part$$, $s__115095__$2$$, $temp__5825__auto__$$, $start_multiset$$, $parts$$, $items__$1$$, $ditems$$, $freqs$$, $N$$, $M$$, $from__$1$$, $to__$1$$, $map__115087$$, $map__115087__$1$$, $from$$, $to$$) {
                          return function($numtimes$$) {
                            var $G__115125$jscomp$inline_9214_JSCompiler_inline_result$jscomp$3652_index$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($numtimes$$, 0, null);
                            $numtimes$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($numtimes$$, 1, null);
                            var $JSCompiler_temp_const$$ = $APP.cljs.core.repeat, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.cljs$core$IFn$_invoke$arity$2;
                            --$G__115125$jscomp$inline_9214_JSCompiler_inline_result$jscomp$3652_index$$;
                            $G__115125$jscomp$inline_9214_JSCompiler_inline_result$jscomp$3652_index$$ = $ditems$$.cljs$core$IFn$_invoke$arity$1 ? $ditems$$.cljs$core$IFn$_invoke$arity$1($G__115125$jscomp$inline_9214_JSCompiler_inline_result$jscomp$3652_index$$) : $ditems$$.call(null, $G__115125$jscomp$inline_9214_JSCompiler_inline_result$jscomp$3652_index$$);
                            return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $numtimes$$, $G__115125$jscomp$inline_9214_JSCompiler_inline_result$jscomp$3652_index$$);
                          };
                        }($multiset$$, $s__115113__$2$$, $temp__5825__auto____$1$$, $part$$, $s__115095__$2$$, $temp__5825__auto__$$, $start_multiset$$, $parts$$, $items__$1$$, $ditems$$, $freqs$$, $N$$, $M$$, $from__$1$$, $to__$1$$, $map__115087$$, $map__115087__$1$$, $from$$, $to$$), $multiset$$)), $clojure$math$combinatorics$iter__115094_$_iter__115112$$($APP.cljs.core.rest($s__115113__$2$$)));
                      }
                      return null;
                    }
                  }, null, null);
                };
              }($part$$, $s__115095__$2$$, $temp__5825__auto__$$, $start_multiset$$, $parts$$, $items__$1$$, $ditems$$, $freqs$$, $N$$, $M$$, $from__$1$$, $to__$1$$, $p__115086$$, $map__115087__$1$$, $from$$, $to$$)($part$$);
            }(), $clojure$math$combinatorics$iter__115094$$($APP.cljs.core.rest($s__115095__$2$$)));
          }
          return null;
        }
      }, null, null);
    }($parts$$);
  }
  return $APP.cljs.core.List.EMPTY;
};
$APP.clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = 1;
$APP.clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = function($seq115084_seq115084__$1$$) {
  var $G__115085$$ = $APP.cljs.core.first($seq115084_seq115084__$1$$);
  $seq115084_seq115084__$1$$ = $APP.cljs.core.next($seq115084_seq115084__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__115085$$, $seq115084_seq115084__$1$$);
};
$APP.clojure.math.combinatorics.partitions = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$556_argseq__5756__auto__$$ = [], $len__5749__auto___115401$$ = arguments.length, $i__5750__auto___115402$$ = 0;;) {
    if ($i__5750__auto___115402$$ < $len__5749__auto___115401$$) {
      $args__5755__auto__$jscomp$556_argseq__5756__auto__$$.push(arguments[$i__5750__auto___115402$$]), $i__5750__auto___115402$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$556_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$556_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$556_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return $APP.clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$556_argseq__5756__auto__$$);
};
$APP.clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic = function($items$$, $args$$) {
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count($items$$), 0) ? $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.clojure.math.combinatorics.partitions_H, $items$$, $args$$) : $APP.cljs.core.truth_($APP.clojure.math.combinatorics.all_different_QMARK_($items$$)) ? $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.clojure.math.combinatorics.partitions_H, $items$$, $args$$) : $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.clojure.math.combinatorics.partitions_M, 
  $items$$, $args$$);
};
$APP.clojure.math.combinatorics.partitions.cljs$lang$maxFixedArity = 1;
$APP.clojure.math.combinatorics.partitions.cljs$lang$applyTo = function($seq115126_seq115126__$1$$) {
  var $G__115127$$ = $APP.cljs.core.first($seq115126_seq115126__$1$$);
  $seq115126_seq115126__$1$$ = $APP.cljs.core.next($seq115126_seq115126__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__115127$$, $seq115126_seq115126__$1$$);
};
kixi.stats.test = {};
kixi.stats.test.p_value = kixi.stats.protocols.p_value;
kixi.stats.test.significant_QMARK_ = kixi.stats.protocols.significant_QMARK_;
kixi.stats.test.TestResult = function($statistic$$, $distribution$$, $h1$$, $__meta$$, $__extmap$$, $__hash$$) {
  this.statistic = $statistic$$;
  this.distribution = $distribution$$;
  this.h1 = $h1$$;
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
kixi.stats.test.TestResult.prototype.kixi$stats$protocols$PTestResult$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.test.TestResult.prototype.kixi$stats$protocols$PTestResult$p_value$arity$1 = function($this$$$) {
  return kixi.stats.test.p_value.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.test.p_value.cljs$core$IFn$_invoke$arity$2(this, this.h1) : kixi.stats.test.p_value.call(null, this, this.h1);
};
kixi.stats.test.TestResult.prototype.kixi$stats$protocols$PTestResult$p_value$arity$2 = function($G__115134__$1__$$, $alternate$$) {
  var $self__$$ = this;
  if ($APP.cljs.core.truth_(function() {
    var $and__5023__auto__$jscomp$599_and__5023__auto____$1$$ = $self__$$.statistic;
    return $APP.cljs.core.truth_($and__5023__auto__$jscomp$599_and__5023__auto____$1$$) ? ($and__5023__auto__$jscomp$599_and__5023__auto____$1$$ = $self__$$.distribution, $APP.cljs.core.truth_($and__5023__auto__$jscomp$599_and__5023__auto____$1$$) ? $alternate$$ : $and__5023__auto__$jscomp$599_and__5023__auto____$1$$) : $and__5023__auto__$jscomp$599_and__5023__auto____$1$$;
  }())) {
    switch($G__115134__$1__$$ = $alternate$$ instanceof $APP.cljs.core.Keyword ? $alternate$$.fqn : null, $G__115134__$1__$$) {
      case "\x3c\x3e":
        return kixi.stats.math.clamp(2 * function() {
          var $G__115137$$ = $self__$$.distribution, $G__115138$$ = -kixi.stats.math.abs($self__$$.statistic);
          return kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2($G__115137$$, $G__115138$$) : kixi.stats.distribution.cdf.call(null, $G__115137$$, $G__115138$$);
        }(), 0.0, 1.0);
      case "\x3c":
        return kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2($self__$$.distribution, $self__$$.statistic) : kixi.stats.distribution.cdf.call(null, $self__$$.distribution, $self__$$.statistic);
      case "\x3e":
        return 1 - (kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.distribution.cdf.cljs$core$IFn$_invoke$arity$2($self__$$.distribution, $self__$$.statistic) : kixi.stats.distribution.cdf.call(null, $self__$$.distribution, $self__$$.statistic));
      default:
        throw Error(["No matching clause: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($G__115134__$1__$$)].join(""));
    }
  } else {
    return null;
  }
};
kixi.stats.test.TestResult.prototype.kixi$stats$protocols$PTestResult$significant_QMARK_$arity$2 = function($this$$$, $alpha$$) {
  return kixi.stats.test.significant_QMARK_.cljs$core$IFn$_invoke$arity$3 ? kixi.stats.test.significant_QMARK_.cljs$core$IFn$_invoke$arity$3(this, $alpha$$, this.h1) : kixi.stats.test.significant_QMARK_.call(null, this, $alpha$$, this.h1);
};
kixi.stats.test.TestResult.prototype.kixi$stats$protocols$PTestResult$significant_QMARK_$arity$3 = function($JSCompiler_temp_const$jscomp$9511__$$, $alpha$$, $G__115142__$1_alternate$$) {
  $JSCompiler_temp_const$jscomp$9511__$$ = $APP.cljs.core;
  var $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$9511__$$.truth_;
  var $JSCompiler_inline_result$jscomp$9512_and__5023__auto__$jscomp$inline_10160_and__5023__auto____$1$$ = this.statistic;
  $APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$9512_and__5023__auto__$jscomp$inline_10160_and__5023__auto____$1$$) && ($JSCompiler_inline_result$jscomp$9512_and__5023__auto__$jscomp$inline_10160_and__5023__auto____$1$$ = this.distribution, $JSCompiler_inline_result$jscomp$9512_and__5023__auto__$jscomp$inline_10160_and__5023__auto____$1$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$9512_and__5023__auto__$jscomp$inline_10160_and__5023__auto____$1$$) ? $APP.cljs.core.truth_($alpha$$) ? 
  $G__115142__$1_alternate$$ : $alpha$$ : $JSCompiler_inline_result$jscomp$9512_and__5023__auto__$jscomp$inline_10160_and__5023__auto____$1$$);
  if ($JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$9511__$$, $JSCompiler_inline_result$jscomp$9512_and__5023__auto__$jscomp$inline_10160_and__5023__auto____$1$$)) {
    switch($alpha$$ = kixi.stats.distribution.critical_value.cljs$core$IFn$_invoke$arity$3(this.distribution, $alpha$$, $G__115142__$1_alternate$$), $G__115142__$1_alternate$$ = $G__115142__$1_alternate$$ instanceof $APP.cljs.core.Keyword ? $G__115142__$1_alternate$$.fqn : null, $G__115142__$1_alternate$$) {
      case "\x3c\x3e":
        return kixi.stats.math.abs(this.statistic) > $alpha$$;
      case "\x3c":
        return this.statistic < $alpha$$;
      case "\x3e":
        return this.statistic > $alpha$$;
      default:
        throw Error(["No matching clause: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($G__115142__$1_alternate$$)].join(""));
    }
  } else {
    return null;
  }
};
kixi.stats.test.TestResult.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
kixi.stats.test.TestResult.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k115129$$, $else__5326__auto__$$) {
  switch($k115129$$ instanceof $APP.cljs.core.Keyword ? $k115129$$.fqn : null) {
    case "statistic":
      return this.statistic;
    case "distribution":
      return this.distribution;
    case "h1":
      return this.h1;
    default:
      return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k115129$$, $else__5326__auto__$$);
  }
};
kixi.stats.test.TestResult.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__115145_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115145_v__5348__auto__$$, 0, null);
    $p__115145_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115145_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__115145_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__115145_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
kixi.stats.test.TestResult.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#kixi.stats.test.TestResult{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9800$statistic, this.statistic], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9801$distribution, this.distribution], null), 
  new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9802$h1, this.h1], null)], null), this.__extmap));
};
kixi.stats.test.TestResult.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__115128$$) {
  return new $APP.cljs.core.RecordIter(0, this, 3, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9800$statistic, cljs$cst$9801$distribution, cljs$cst$9802$h1], null), $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
kixi.stats.test.TestResult.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
kixi.stats.test.TestResult.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new kixi.stats.test.TestResult(this.statistic, this.distribution, this.h1, this.__meta, this.__extmap, this.__hash);
};
kixi.stats.test.TestResult.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 3 + $APP.cljs.core.count(this.__extmap);
};
kixi.stats.test.TestResult.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$206_h__5134__auto____$1$jscomp$206_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$206_h__5134__auto____$1$jscomp$206_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$206_h__5134__auto____$1$jscomp$206_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$206_h__5134__auto____$1$jscomp$206_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$206_h__5134__auto____$1$jscomp$206_this__5319__auto__$$ = -1240870390 ^ $APP.cljs.core.hash_unordered_coll(this);
};
kixi.stats.test.TestResult.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this115130$$, $other115131$$) {
  return $other115131$$ != null && this.constructor === $other115131$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.statistic, $other115131$$.statistic) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.distribution, $other115131$$.distribution) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.h1, $other115131$$.h1) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other115131$$.__extmap);
};
kixi.stats.test.TestResult.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$9800$statistic, null, cljs$cst$9801$distribution, null, cljs$cst$9802$h1, null], null), null), $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), $k__5334__auto__$$) : new kixi.stats.test.TestResult(this.statistic, 
  this.distribution, this.h1, this.__meta, $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
kixi.stats.test.TestResult.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k115129$$) {
  switch($k115129$$ instanceof $APP.cljs.core.Keyword ? $k115129$$.fqn : null) {
    case "statistic":
    case "distribution":
    case "h1":
      return !0;
    default:
      return $APP.cljs.core.contains_QMARK_(this.__extmap, $k115129$$);
  }
};
kixi.stats.test.TestResult.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($pred__115155_this__5331__auto__$$, $k__5332__auto__$$, $G__115128$$) {
  $pred__115155_this__5331__auto__$$ = $APP.cljs.core.keyword_identical_QMARK_;
  return $APP.cljs.core.truth_($pred__115155_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__115155_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$9800$statistic, $k__5332__auto__$$) : $pred__115155_this__5331__auto__$$.call(null, cljs$cst$9800$statistic, $k__5332__auto__$$)) ? new kixi.stats.test.TestResult($G__115128$$, this.distribution, this.h1, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__115155_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? 
  $pred__115155_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$9801$distribution, $k__5332__auto__$$) : $pred__115155_this__5331__auto__$$.call(null, cljs$cst$9801$distribution, $k__5332__auto__$$)) ? new kixi.stats.test.TestResult(this.statistic, $G__115128$$, this.h1, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__115155_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__115155_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$9802$h1, $k__5332__auto__$$) : 
  $pred__115155_this__5331__auto__$$.call(null, cljs$cst$9802$h1, $k__5332__auto__$$)) ? new kixi.stats.test.TestResult(this.statistic, this.distribution, $G__115128$$, this.__meta, this.__extmap, null) : new kixi.stats.test.TestResult(this.statistic, this.distribution, this.h1, this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__115128$$), null);
};
kixi.stats.test.TestResult.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.MapEntry(cljs$cst$9800$statistic, this.statistic, null), new $APP.cljs.core.MapEntry(cljs$cst$9801$distribution, this.distribution, null), new $APP.cljs.core.MapEntry(cljs$cst$9802$h1, this.h1, null)], null), this.__extmap));
};
kixi.stats.test.TestResult.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__115128$$) {
  return new kixi.stats.test.TestResult(this.statistic, this.distribution, this.h1, $G__115128$$, this.__extmap, this.__hash);
};
kixi.stats.test.TestResult.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
kixi.stats.test.TestResult.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9803$statistic, cljs$cst$9804$distribution, $APP.cljs$cst$9144$h1], null);
};
kixi.stats.test.TestResult.cljs$lang$type = !0;
kixi.stats.test.TestResult.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "kixi.stats.test/TestResult", null, 1, null);
};
kixi.stats.test.TestResult.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "kixi.stats.test/TestResult");
};
kixi.stats.test.__GT_TestResult = function($statistic$$, $distribution$$, $h1$$) {
  return new kixi.stats.test.TestResult($statistic$$, $distribution$$, $h1$$, null, null, null);
};
kixi.stats.test.map__GT_TestResult = function($G__115132$$) {
  var $G__115168$jscomp$inline_9216_extmap__5365__auto__$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($G__115132$$, cljs$cst$9800$statistic, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$9801$distribution, cljs$cst$9802$h1], 0));
  $G__115168$jscomp$inline_9216_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__115132$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__115168$jscomp$inline_9216_extmap__5365__auto__$$) : $G__115168$jscomp$inline_9216_extmap__5365__auto__$$;
  return new kixi.stats.test.TestResult(cljs$cst$9800$statistic.cljs$core$IFn$_invoke$arity$1($G__115132$$), cljs$cst$9801$distribution.cljs$core$IFn$_invoke$arity$1($G__115132$$), cljs$cst$9802$h1.cljs$core$IFn$_invoke$arity$1($G__115132$$), null, $APP.cljs.core.not_empty($G__115168$jscomp$inline_9216_extmap__5365__auto__$$), null);
};
kixi.stats.test.test_result = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2 = function($statistic$$, $distribution$$) {
  return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$3($statistic$$, $distribution$$, cljs$cst$9773$_LT__GT_);
};
kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$3 = function($statistic$$, $distribution$$, $alternate$$) {
  return kixi.stats.test.__GT_TestResult($statistic$$, $distribution$$, $alternate$$);
};
kixi.stats.test.test_result.cljs$lang$maxFixedArity = 3;
kixi.stats.test.chi_squared_test = function($table$$) {
  var $margins_stat$$ = kixi.stats.protocols.margin_totals($table$$), $dof$jscomp$4_size$$ = kixi.stats.protocols.size($table$$), $factors$$ = $APP.cljs.core.count($dof$jscomp$4_size$$), $total$$ = kixi.stats.math.pow(kixi.stats.protocols.grand_total($table$$), $factors$$ - 1);
  $dof$jscomp$4_size$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$4($APP.cljs.core._, $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._STAR_, $dof$jscomp$4_size$$), 1, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.dec, $dof$jscomp$4_size$$));
  $margins_stat$$ = $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($acc$$, $counts$jscomp$5_e$$) {
    var $cell_levels$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($counts$jscomp$5_e$$, 0, null);
    $counts$jscomp$5_e$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($counts$jscomp$5_e$$, 1, null);
    $cell_levels$$ = kixi.stats.protocols.cell($table$$, $cell_levels$$);
    $counts$jscomp$5_e$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._STAR_, $counts$jscomp$5_e$$) / $total$$;
    return $acc$$ + kixi.stats.math.sq($counts$jscomp$5_e$$ - $cell_levels$$) / $counts$jscomp$5_e$$;
  }, 0, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.apply, $APP.cljs.core.map, $APP.cljs.core.vector), $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.clojure.math.combinatorics.cartesian_product, $margins_stat$$)));
  return kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$3($margins_stat$$, kixi.stats.distribution.chi_squared(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1484$k, $dof$jscomp$4_size$$], null)), $APP.cljs$cst$9557$_GT_);
};
kixi.stats.test.simple_z_test = function($mu$jscomp$6_p__115187_z$$, $mean$$) {
  var $map__115189__$1_sd$$ = $APP.cljs.core.__destructure_map($mu$jscomp$6_p__115187_z$$);
  $mu$jscomp$6_p__115187_z$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115189__$1_sd$$, cljs$cst$9766$mu);
  $map__115189__$1_sd$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115189__$1_sd$$, cljs$cst$9767$sd);
  var $map__115190__$1_n$$ = $APP.cljs.core.__destructure_map($mean$$);
  $mean$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115190__$1_n$$, cljs$cst$9805$mean);
  $map__115190__$1_n$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115190__$1_n$$, $APP.cljs$cst$1630$n);
  return $map__115190__$1_n$$ > 0 && $map__115189__$1_sd$$ > 0 ? ($mu$jscomp$6_p__115187_z$$ = ($mean$$ - $mu$jscomp$6_p__115187_z$$) / ($map__115189__$1_sd$$ / kixi.stats.math.sqrt($map__115190__$1_n$$)), kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2($mu$jscomp$6_p__115187_z$$, kixi.stats.distribution.normal(new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$6520$location, 0.0, $APP.cljs$cst$3417$scale, 1.0], null)))) : null;
};
kixi.stats.test.z_test = function($map__115196__$1_p__115194$$, $map__115197__$1_p__115195_z$$) {
  $map__115196__$1_p__115194$$ = $APP.cljs.core.__destructure_map($map__115196__$1_p__115194$$);
  var $mean_x$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115196__$1_p__115194$$, cljs$cst$9805$mean), $sd_x$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115196__$1_p__115194$$, cljs$cst$9767$sd), $n_x$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115196__$1_p__115194$$, $APP.cljs$cst$1630$n);
  $map__115197__$1_p__115195_z$$ = $APP.cljs.core.__destructure_map($map__115197__$1_p__115195_z$$);
  var $mean_y$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115197__$1_p__115195_z$$, cljs$cst$9805$mean), $sd_y$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115197__$1_p__115195_z$$, cljs$cst$9767$sd), $n_y$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115197__$1_p__115195_z$$, $APP.cljs$cst$1630$n), $sd_xy$$ = function() {
    var $and__5023__auto__$jscomp$601_and__5023__auto____$1$$ = $n_x$$ > 0;
    return $and__5023__auto__$jscomp$601_and__5023__auto____$1$$ ? ($and__5023__auto__$jscomp$601_and__5023__auto____$1$$ = $n_y$$ > 0) ? kixi.stats.math.sqrt(kixi.stats.math.sq($sd_x$$) / $n_x$$ + kixi.stats.math.sq($sd_y$$) / $n_y$$) : $and__5023__auto__$jscomp$601_and__5023__auto____$1$$ : $and__5023__auto__$jscomp$601_and__5023__auto____$1$$;
  }();
  $map__115197__$1_p__115195_z$$ = function() {
    if ($APP.cljs.core.truth_($sd_xy$$)) {
      var $and__5023__auto____$1$$ = $sd_xy$$ > 0;
      return $and__5023__auto____$1$$ ? ($mean_x$$ - $mean_y$$) / $sd_xy$$ : $and__5023__auto____$1$$;
    }
    return $sd_xy$$;
  }();
  return $APP.cljs.core.truth_($map__115197__$1_p__115195_z$$) ? kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2($map__115197__$1_p__115195_z$$, kixi.stats.distribution.normal(new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$6520$location, 0.0, $APP.cljs$cst$3417$scale, 1.0], null))) : null;
};
kixi.stats.test.t_test = function($mean_a_p__115204_t$$, $dof$$) {
  var $map__115206__$1_mean_b$$ = $APP.cljs.core.__destructure_map($mean_a_p__115204_t$$);
  $mean_a_p__115204_t$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115206__$1_mean_b$$, cljs$cst$9805$mean);
  var $sd_a$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115206__$1_mean_b$$, cljs$cst$9767$sd), $n_a$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115206__$1_mean_b$$, $APP.cljs$cst$1630$n);
  $dof$$ = $APP.cljs.core.__destructure_map($dof$$);
  $map__115206__$1_mean_b$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($dof$$, cljs$cst$9805$mean);
  var $sd_b$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($dof$$, cljs$cst$9767$sd), $n_b$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($dof$$, $APP.cljs$cst$1630$n), $sd_ab$$ = function() {
    var $and__5023__auto__$jscomp$603_and__5023__auto____$1$$ = $n_a$$ > 0;
    return $and__5023__auto__$jscomp$603_and__5023__auto____$1$$ ? ($and__5023__auto__$jscomp$603_and__5023__auto____$1$$ = $n_b$$ > 0) ? kixi.stats.math.sq($sd_a$$) / $n_a$$ + kixi.stats.math.sq($sd_b$$) / $n_b$$ : $and__5023__auto__$jscomp$603_and__5023__auto____$1$$ : $and__5023__auto__$jscomp$603_and__5023__auto____$1$$;
  }();
  $mean_a_p__115204_t$$ = $APP.cljs.core.truth_($sd_ab$$) ? ($mean_a_p__115204_t$$ - $map__115206__$1_mean_b$$) / kixi.stats.math.sqrt($sd_ab$$) : $sd_ab$$;
  $dof$$ = function() {
    var $and__5023__auto__$jscomp$605_and__5023__auto____$1$$ = $n_a$$ > 1;
    return $and__5023__auto__$jscomp$605_and__5023__auto____$1$$ ? ($and__5023__auto__$jscomp$605_and__5023__auto____$1$$ = $n_b$$ > 1) ? kixi.stats.math.sq($sd_ab$$) / (kixi.stats.math.pow($sd_a$$, 4) / ($n_a$$ * $n_a$$ * ($n_a$$ - 1)) + kixi.stats.math.pow($sd_b$$, 4) / ($n_b$$ * $n_b$$ * ($n_b$$ - 1))) : $and__5023__auto__$jscomp$605_and__5023__auto____$1$$ : $and__5023__auto__$jscomp$605_and__5023__auto____$1$$;
  }();
  return $APP.cljs.core.truth_($APP.cljs.core.truth_($mean_a_p__115204_t$$) ? $dof$$ : $mean_a_p__115204_t$$) ? kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2($mean_a_p__115204_t$$, kixi.stats.distribution.t(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1438$v, $dof$$], null))) : null;
};
kixi.stats.test.simple_t_test = function($mu$jscomp$7_p__115209_t$$, $mean$$) {
  var $map__115211__$1_sd$$ = $APP.cljs.core.__destructure_map($mu$jscomp$7_p__115209_t$$);
  $mu$jscomp$7_p__115209_t$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115211__$1_sd$$, cljs$cst$9766$mu);
  $map__115211__$1_sd$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115211__$1_sd$$, cljs$cst$9767$sd);
  var $dof$$ = $APP.cljs.core.__destructure_map($mean$$);
  $mean$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($dof$$, cljs$cst$9805$mean);
  var $n$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($dof$$, $APP.cljs$cst$1630$n);
  $dof$$ = $n$$ - 1;
  var $and__5023__auto__$jscomp$inline_10529_and__5023__auto____$1$$ = $map__115211__$1_sd$$ > 0;
  $mu$jscomp$7_p__115209_t$$ = $and__5023__auto__$jscomp$inline_10529_and__5023__auto____$1$$ ? ($and__5023__auto__$jscomp$inline_10529_and__5023__auto____$1$$ = $n$$ > 0) ? ($mean$$ - $mu$jscomp$7_p__115209_t$$) / ($map__115211__$1_sd$$ / kixi.stats.math.sqrt($n$$)) : $and__5023__auto__$jscomp$inline_10529_and__5023__auto____$1$$ : $and__5023__auto__$jscomp$inline_10529_and__5023__auto____$1$$;
  return $APP.cljs.core.truth_($APP.cljs.core.truth_($mu$jscomp$7_p__115209_t$$) ? $dof$$ > 0 : $mu$jscomp$7_p__115209_t$$) ? kixi.stats.test.test_result.cljs$core$IFn$_invoke$arity$2($mu$jscomp$7_p__115209_t$$, kixi.stats.distribution.t(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1438$v, $dof$$], null))) : null;
};
var redux = {utils:{}};
redux.utils.project = function($fmap$$) {
  return function($x$$) {
    return $APP.cljs.core.persistent_BANG_($APP.cljs.core.reduce_kv(function($m$$, $k$$, $v$$) {
      return $APP.cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3($m$$, $k$$, $v$$.cljs$core$IFn$_invoke$arity$1 ? $v$$.cljs$core$IFn$_invoke$arity$1($x$$) : $v$$.call(null, $x$$));
    }, $APP.cljs.core.transient$($APP.cljs.core.PersistentArrayMap.EMPTY), $fmap$$));
  };
};
redux.utils.complete_triangular_matrix = function($m$$) {
  return $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($m$$, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p__114925_v$$) {
    var $vec__114929_y$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__114925_v$$, 0, null), $x$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__114929_y$$, 0, null);
    $vec__114929_y$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__114929_y$$, 1, null);
    $p__114925_v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__114925_v$$, 1, null);
    return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$vec__114929_y$$, $x$$], null), $p__114925_v$$], null);
  }, $m$$));
};
redux.utils.pairs = function($coll$$) {
  return function $redux$utils$pairs_$_pair$$($x$$, $xs$$) {
    return $APP.cljs.core.seq($xs$$) ? $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__114932_SHARP_$$) {
      return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$x$$, $p1__114932_SHARP_$$], null);
    }, $xs$$), $redux$utils$pairs_$_pair$$($APP.cljs.core.first($xs$$), $APP.cljs.core.rest($xs$$))) : $APP.cljs.core.PersistentVector.EMPTY;
  }($APP.cljs.core.first($coll$$), $APP.cljs.core.rest($coll$$));
};
redux.core = {};
redux.core.pre_step = function($rf$$, $f$$) {
  return function() {
    var $G__114965$$ = null, $G__114965__0$$ = function() {
      return $rf$$.cljs$core$IFn$_invoke$arity$0 ? $rf$$.cljs$core$IFn$_invoke$arity$0() : $rf$$.call(null);
    }, $G__114965__1$$ = function($acc$$) {
      return $rf$$.cljs$core$IFn$_invoke$arity$1 ? $rf$$.cljs$core$IFn$_invoke$arity$1($acc$$) : $rf$$.call(null, $acc$$);
    }, $G__114965__2$$ = function($acc$$, $G__114946_x$$) {
      $G__114946_x$$ = $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($G__114946_x$$) : $f$$.call(null, $G__114946_x$$);
      return $rf$$.cljs$core$IFn$_invoke$arity$2 ? $rf$$.cljs$core$IFn$_invoke$arity$2($acc$$, $G__114946_x$$) : $rf$$.call(null, $acc$$, $G__114946_x$$);
    };
    $G__114965$$ = function($acc$$, $x$$) {
      switch(arguments.length) {
        case 0:
          return $G__114965__0$$.call(this);
        case 1:
          return $G__114965__1$$.call(this, $acc$$);
        case 2:
          return $G__114965__2$$.call(this, $acc$$, $x$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $G__114965$$.cljs$core$IFn$_invoke$arity$0 = $G__114965__0$$;
    $G__114965$$.cljs$core$IFn$_invoke$arity$1 = $G__114965__1$$;
    $G__114965$$.cljs$core$IFn$_invoke$arity$2 = $G__114965__2$$;
    return $G__114965$$;
  }();
};
redux.core.post_complete = function($rf$$, $f$$) {
  return function() {
    var $G__114966$$ = null, $G__114966__0$$ = function() {
      return $rf$$.cljs$core$IFn$_invoke$arity$0 ? $rf$$.cljs$core$IFn$_invoke$arity$0() : $rf$$.call(null);
    }, $G__114966__1$$ = function($G__114947_acc$$) {
      $G__114947_acc$$ = $rf$$.cljs$core$IFn$_invoke$arity$1 ? $rf$$.cljs$core$IFn$_invoke$arity$1($G__114947_acc$$) : $rf$$.call(null, $G__114947_acc$$);
      return $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($G__114947_acc$$) : $f$$.call(null, $G__114947_acc$$);
    }, $G__114966__2$$ = function($acc$$, $x$$) {
      return $rf$$.cljs$core$IFn$_invoke$arity$2 ? $rf$$.cljs$core$IFn$_invoke$arity$2($acc$$, $x$$) : $rf$$.call(null, $acc$$, $x$$);
    };
    $G__114966$$ = function($acc$$, $x$$) {
      switch(arguments.length) {
        case 0:
          return $G__114966__0$$.call(this);
        case 1:
          return $G__114966__1$$.call(this, $acc$$);
        case 2:
          return $G__114966__2$$.call(this, $acc$$, $x$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $G__114966$$.cljs$core$IFn$_invoke$arity$0 = $G__114966__0$$;
    $G__114966$$.cljs$core$IFn$_invoke$arity$1 = $G__114966__1$$;
    $G__114966$$.cljs$core$IFn$_invoke$arity$2 = $G__114966__2$$;
    return $G__114966$$;
  }();
};
redux.core.with_xform = function($rf$$, $xform$$) {
  var $rfv$$ = $APP.cljs.core.volatile_BANG_(null);
  return function() {
    var $G__114971$$ = null, $G__114971__0$$ = function() {
      $APP.cljs.core.vreset_BANG_($rfv$$, $xform$$.cljs$core$IFn$_invoke$arity$1 ? $xform$$.cljs$core$IFn$_invoke$arity$1($rf$$) : $xform$$.call(null, $rf$$));
      var $fexpr__114948$$ = $APP.cljs.core.deref($rfv$$);
      return $fexpr__114948$$.cljs$core$IFn$_invoke$arity$0 ? $fexpr__114948$$.cljs$core$IFn$_invoke$arity$0() : $fexpr__114948$$.call(null);
    }, $G__114971__1$$ = function($acc$$) {
      var $fexpr__114949$$ = $APP.cljs.core.deref($rfv$$);
      return $fexpr__114949$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__114949$$.cljs$core$IFn$_invoke$arity$1($acc$$) : $fexpr__114949$$.call(null, $acc$$);
    }, $G__114971__2$$ = function($acc$$, $x$$) {
      var $fexpr__114950$$ = $APP.cljs.core.deref($rfv$$);
      return $fexpr__114950$$.cljs$core$IFn$_invoke$arity$2 ? $fexpr__114950$$.cljs$core$IFn$_invoke$arity$2($acc$$, $x$$) : $fexpr__114950$$.call(null, $acc$$, $x$$);
    };
    $G__114971$$ = function($acc$$, $x$$) {
      switch(arguments.length) {
        case 0:
          return $G__114971__0$$.call(this);
        case 1:
          return $G__114971__1$$.call(this, $acc$$);
        case 2:
          return $G__114971__2$$.call(this, $acc$$, $x$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $G__114971$$.cljs$core$IFn$_invoke$arity$0 = $G__114971__0$$;
    $G__114971$$.cljs$core$IFn$_invoke$arity$1 = $G__114971__1$$;
    $G__114971$$.cljs$core$IFn$_invoke$arity$2 = $G__114971__2$$;
    return $G__114971$$;
  }();
};
redux.core.juxt = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$557_argseq__5756__auto__$$ = [], $len__5749__auto___114972$$ = arguments.length, $i__5750__auto___114973$$ = 0;;) {
    if ($i__5750__auto___114973$$ < $len__5749__auto___114972$$) {
      $args__5755__auto__$jscomp$557_argseq__5756__auto__$$.push(arguments[$i__5750__auto___114973$$]), $i__5750__auto___114973$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$557_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$557_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$557_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return redux.core.juxt.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$557_argseq__5756__auto__$$);
};
redux.core.juxt.cljs$core$IFn$_invoke$arity$variadic = function($rfns$$) {
  return function() {
    var $G__114975$$ = null, $G__114975__0$$ = function() {
      return $APP.cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(function($f$$) {
        return $f$$.cljs$core$IFn$_invoke$arity$0 ? $f$$.cljs$core$IFn$_invoke$arity$0() : $f$$.call(null);
      }, $rfns$$);
    }, $G__114975__1$$ = function($acc$$) {
      return $APP.cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(function($f$$, $G__114954_a$$) {
        $G__114954_a$$ = $APP.cljs.core.unreduced($G__114954_a$$);
        return $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($G__114954_a$$) : $f$$.call(null, $G__114954_a$$);
      }, $rfns$$, $acc$$);
    }, $G__114975__2$$ = function($acc$jscomp$278_results$$, $x$$) {
      var $all_reduced_QMARK_$$ = $APP.cljs.core.volatile_BANG_(!0);
      $acc$jscomp$278_results$$ = $APP.cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(function($f$$, $a$$) {
        if ($APP.cljs.core.reduced_QMARK_($a$$)) {
          return $a$$;
        }
        $APP.cljs.core.vreset_BANG_($all_reduced_QMARK_$$, !1);
        return $f$$.cljs$core$IFn$_invoke$arity$2 ? $f$$.cljs$core$IFn$_invoke$arity$2($a$$, $x$$) : $f$$.call(null, $a$$, $x$$);
      }, $rfns$$, $acc$jscomp$278_results$$);
      return $APP.cljs.core.truth_($APP.cljs.core.deref($all_reduced_QMARK_$$)) ? $APP.cljs.core.reduced($acc$jscomp$278_results$$) : $acc$jscomp$278_results$$;
    };
    $G__114975$$ = function($acc$$, $x$$) {
      switch(arguments.length) {
        case 0:
          return $G__114975__0$$.call(this);
        case 1:
          return $G__114975__1$$.call(this, $acc$$);
        case 2:
          return $G__114975__2$$.call(this, $acc$$, $x$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $G__114975$$.cljs$core$IFn$_invoke$arity$0 = $G__114975__0$$;
    $G__114975$$.cljs$core$IFn$_invoke$arity$1 = $G__114975__1$$;
    $G__114975$$.cljs$core$IFn$_invoke$arity$2 = $G__114975__2$$;
    return $G__114975$$;
  }();
};
redux.core.juxt.cljs$lang$maxFixedArity = 0;
redux.core.juxt.cljs$lang$applyTo = function($seq114953$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq114953$$));
};
redux.core.facet = function($rf$$, $fns$$) {
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2(redux.core.juxt, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($f$$) {
    return redux.core.pre_step($rf$$, $f$$);
  }, $fns$$));
};
redux.core.fuse = function($kvs$$) {
  return redux.core.post_complete($APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2(redux.core.juxt, $APP.cljs.core.vals($kvs$$)), function($acc$$) {
    return $APP.cljs.core.zipmap($APP.cljs.core.keys($kvs$$), $acc$$);
  });
};
redux.core.fuse_matrix = function($rf$$, $kvs$$) {
  return redux.core.post_complete(redux.core.pre_step(redux.core.fuse($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p__114959$$) {
    var $k1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__114959$$, 0, null), $k2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__114959$$, 1, null);
    return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$k1$$, $k2$$], null), function() {
      var $G__114963$$ = function($p1__114957_SHARP_$$) {
        return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($p1__114957_SHARP_$$, $k1$$);
      }, $G__114964$$ = function($p1__114958_SHARP_$$) {
        return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($p1__114958_SHARP_$$, $k2$$);
      };
      return $rf$$.cljs$core$IFn$_invoke$arity$2 ? $rf$$.cljs$core$IFn$_invoke$arity$2($G__114963$$, $G__114964$$) : $rf$$.call(null, $G__114963$$, $G__114964$$);
    }()], null);
  }, redux.utils.pairs($APP.cljs.core.keys($kvs$$))))), redux.utils.project($kvs$$)), redux.utils.complete_triangular_matrix);
};
kixi.stats.core = {};
kixi.stats.core.somef = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$558_argseq__5756__auto__$$ = [], $len__5749__auto___115551$$ = arguments.length, $i__5750__auto___115552$$ = 0;;) {
    if ($i__5750__auto___115552$$ < $len__5749__auto___115551$$) {
      $args__5755__auto__$jscomp$558_argseq__5756__auto__$$.push(arguments[$i__5750__auto___115552$$]), $i__5750__auto___115552$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$558_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$558_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$558_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return kixi.stats.core.somef.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$558_argseq__5756__auto__$$);
};
kixi.stats.core.somef.cljs$core$IFn$_invoke$arity$variadic = function($f$$, $args$$) {
  return function($x$$) {
    return $x$$ == null ? null : $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($f$$, $x$$, $args$$);
  };
};
kixi.stats.core.somef.cljs$lang$maxFixedArity = 1;
kixi.stats.core.somef.cljs$lang$applyTo = function($seq115220_seq115220__$1$$) {
  var $G__115221$$ = $APP.cljs.core.first($seq115220_seq115220__$1$$);
  $seq115220_seq115220__$1$$ = $APP.cljs.core.next($seq115220_seq115220__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__115221$$, $seq115220_seq115220__$1$$);
};
kixi.stats.core.monoid = function($f$$, $init$$) {
  return function() {
    var $G__115554$$ = null, $G__115554__1$$ = function($acc$$) {
      return $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($acc$$) : $f$$.call(null, $acc$$);
    }, $G__115554__2$$ = function($acc$$, $x$$) {
      return $f$$.cljs$core$IFn$_invoke$arity$2 ? $f$$.cljs$core$IFn$_invoke$arity$2($acc$$, $x$$) : $f$$.call(null, $acc$$, $x$$);
    };
    $G__115554$$ = function($acc$$, $x$$) {
      switch(arguments.length) {
        case 0:
          return $init$$;
        case 1:
          return $G__115554__1$$.call(this, $acc$$);
        case 2:
          return $G__115554__2$$.call(this, $acc$$, $x$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $G__115554$$.cljs$core$IFn$_invoke$arity$0 = function() {
      return $init$$;
    };
    $G__115554$$.cljs$core$IFn$_invoke$arity$1 = $G__115554__1$$;
    $G__115554$$.cljs$core$IFn$_invoke$arity$2 = $G__115554__2$$;
    return $G__115554$$;
  }();
};
kixi.stats.core.post_complete = function($rf$$, $f$$) {
  return $APP.cljs.core.completing.cljs$core$IFn$_invoke$arity$2($rf$$, function($G__115256_p1__115252_SHARP_$$) {
    $G__115256_p1__115252_SHARP_$$ = $rf$$.cljs$core$IFn$_invoke$arity$1 ? $rf$$.cljs$core$IFn$_invoke$arity$1($G__115256_p1__115252_SHARP_$$) : $rf$$.call(null, $G__115256_p1__115252_SHARP_$$);
    return $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($G__115256_p1__115252_SHARP_$$) : $f$$.call(null, $G__115256_p1__115252_SHARP_$$);
  });
};
kixi.stats.core.t_kixi$stats$core115288 = function($vec__115285$$, $cells$$, $fxs$$, $n$$, $k$$, $inc$$, $p__115270$$, $margins$$, $f$$, $meta115289$$) {
  this.vec__115285 = $vec__115285$$;
  this.cells = $cells$$;
  this.fxs = $fxs$$;
  this.n = $n$$;
  this.k = $k$$;
  this.inc = $inc$$;
  this.p__115270 = $p__115270$$;
  this.margins = $margins$$;
  this.f = $f$$;
  this.meta115289 = $meta115289$$;
  this.cljs$lang$protocol_mask$partition0$ = 393216;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.core.t_kixi$stats$core115288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($_115290$$, $meta115289__$1$$) {
  return new kixi.stats.core.t_kixi$stats$core115288(this.vec__115285, this.cells, this.fxs, this.n, this.k, this.inc, this.p__115270, this.margins, this.f, $meta115289__$1$$);
};
kixi.stats.core.t_kixi$stats$core115288.prototype.cljs$core$IMeta$_meta$arity$1 = function($_115290$$) {
  return this.meta115289;
};
kixi.stats.core.t_kixi$stats$core115288.prototype.kixi$stats$protocols$PContingencyTable$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.core.t_kixi$stats$core115288.prototype.kixi$stats$protocols$PContingencyTable$cell$arity$2 = function($_$$, $coordinates$$) {
  return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.cells, $coordinates$$, 0);
};
kixi.stats.core.t_kixi$stats$core115288.prototype.kixi$stats$protocols$PContingencyTable$grand_total$arity$1 = function($_$$) {
  return this.n;
};
kixi.stats.core.t_kixi$stats$core115288.prototype.kixi$stats$protocols$PContingencyTable$margin_totals$arity$1 = function($_$$) {
  return this.margins;
};
kixi.stats.core.t_kixi$stats$core115288.prototype.kixi$stats$protocols$PContingencyTable$size$arity$1 = function($_$$) {
  return $APP.cljs.core.mapv.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count, this.margins);
};
kixi.stats.core.t_kixi$stats$core115288.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 10, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9806$vec__115285, $APP.cljs$cst$8987$cells, cljs$cst$9807$fxs, $APP.cljs$cst$2483$n, $APP.cljs$cst$1485$k, $APP.cljs$cst$689$inc, cljs$cst$9808$p__115270, cljs$cst$9809$margins, $APP.cljs$cst$52$f, cljs$cst$9810$meta115289], null);
};
kixi.stats.core.t_kixi$stats$core115288.cljs$lang$type = !0;
kixi.stats.core.t_kixi$stats$core115288.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core115288";
kixi.stats.core.t_kixi$stats$core115288.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.core/t_kixi$stats$core115288");
};
kixi.stats.core.__GT_t_kixi$stats$core115288 = function($vec__115285$$, $cells$$, $fxs$$, $n$$, $k$$, $inc$$, $p__115270$$, $margins$$, $f$$, $meta115289$$) {
  return new kixi.stats.core.t_kixi$stats$core115288($vec__115285$$, $cells$$, $fxs$$, $n$$, $k$$, $inc$$, $p__115270$$, $margins$$, $f$$, $meta115289$$);
};
kixi.stats.core.cross_tabulate = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$559_argseq__5756__auto__$$ = [], $len__5749__auto___115555$$ = arguments.length, $i__5750__auto___115556$$ = 0;;) {
    if ($i__5750__auto___115556$$ < $len__5749__auto___115555$$) {
      $args__5755__auto__$jscomp$559_argseq__5756__auto__$$.push(arguments[$i__5750__auto___115556$$]), $i__5750__auto___115556$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$559_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$559_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$559_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return kixi.stats.core.cross_tabulate.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$559_argseq__5756__auto__$$);
};
kixi.stats.core.cross_tabulate.cljs$core$IFn$_invoke$arity$variadic = function($fxs$$) {
  var $f$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.juxt, $fxs$$), $k$$ = $APP.cljs.core.count($fxs$$), $inc$$ = $APP.cljs.core.fnil.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.inc, 0);
  return function() {
    var $G__115558$$ = null, $G__115558__0$$ = function() {
      return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.PersistentArrayMap.EMPTY, $APP.cljs.core.vec($APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$2($k$$, $APP.cljs.core.PersistentArrayMap.EMPTY)), 0], null);
    }, $G__115558__1$$ = function($p__115270$$) {
      var $cells$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115270$$, 0, null), $margins$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115270$$, 1, null), $n$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115270$$, 2, null);
      return new kixi.stats.core.t_kixi$stats$core115288($p__115270$$, $cells$$, $fxs$$, $n$$, $k$$, $inc$$, $p__115270$$, $margins$$, $f$$, $APP.cljs.core.PersistentArrayMap.EMPTY);
    }, $G__115558__2$$ = function($n$$, $x$$) {
      var $cells$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n$$, 0, null), $margins$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n$$, 1, null);
      $n$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n$$, 2, null);
      return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.update.cljs$core$IFn$_invoke$arity$3($cells$$, $f$$.cljs$core$IFn$_invoke$arity$1 ? $f$$.cljs$core$IFn$_invoke$arity$1($x$$) : $f$$.call(null, $x$$), $inc$$), $APP.cljs.core.first($APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($i$$, $fx$$) {
        var $margins__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($i$$, 0, null);
        $i$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($i$$, 1, null);
        return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$3($margins__$1$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$i$$, $fx$$.cljs$core$IFn$_invoke$arity$1 ? $fx$$.cljs$core$IFn$_invoke$arity$1($x$$) : $fx$$.call(null, $x$$)], null), $inc$$), $inc$$($i$$)], null);
      }, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$margins$$, 0], null), $fxs$$)), $inc$$($n$$)], null);
    };
    $G__115558$$ = function($p__115269$$, $x$$) {
      switch(arguments.length) {
        case 0:
          return $G__115558__0$$.call(this);
        case 1:
          return $G__115558__1$$.call(this, $p__115269$$);
        case 2:
          return $G__115558__2$$.call(this, $p__115269$$, $x$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $G__115558$$.cljs$core$IFn$_invoke$arity$0 = $G__115558__0$$;
    $G__115558$$.cljs$core$IFn$_invoke$arity$1 = $G__115558__1$$;
    $G__115558$$.cljs$core$IFn$_invoke$arity$2 = $G__115558__2$$;
    return $G__115558$$;
  }();
};
kixi.stats.core.cross_tabulate.cljs$lang$maxFixedArity = 0;
kixi.stats.core.cross_tabulate.cljs$lang$applyTo = function($seq115260$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq115260$$));
};
kixi.stats.core.count = function() {
  var $kixi$stats$core$count$$ = null;
  $kixi$stats$core$count$$ = function($n$$, $_$$) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return $n$$;
      case 2:
        return $n$$ + 1;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $kixi$stats$core$count$$.cljs$core$IFn$_invoke$arity$0 = function() {
    return 0;
  };
  $kixi$stats$core$count$$.cljs$core$IFn$_invoke$arity$1 = function($n$$) {
    return $n$$;
  };
  $kixi$stats$core$count$$.cljs$core$IFn$_invoke$arity$2 = function($n$$, $_$$) {
    return $n$$ + 1;
  };
  return $kixi$stats$core$count$$;
}();
kixi.stats.core.arithmetic_mean = function() {
  var $kixi$stats$core$arithmetic_mean$$ = null, $kixi$stats$core$arithmetic_mean__0$$ = function() {
    return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0.0, 0], null);
  }, $kixi$stats$core$arithmetic_mean__1$$ = function($c$$) {
    var $s$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c$$, 0, null);
    $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c$$, 1, null);
    return $c$$ === 0 ? null : $s$$ / $c$$;
  }, $kixi$stats$core$arithmetic_mean__2$$ = function($p__115332$$, $e$$) {
    var $s$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115332$$, 0, null), $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115332$$, 1, null);
    return $e$$ == null ? $p__115332$$ : new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$s$$ + $e$$, $c$$ + 1], null);
  };
  $kixi$stats$core$arithmetic_mean$$ = function($p__115332$$, $e$$) {
    switch(arguments.length) {
      case 0:
        return $kixi$stats$core$arithmetic_mean__0$$.call(this);
      case 1:
        return $kixi$stats$core$arithmetic_mean__1$$.call(this, $p__115332$$);
      case 2:
        return $kixi$stats$core$arithmetic_mean__2$$.call(this, $p__115332$$, $e$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $kixi$stats$core$arithmetic_mean$$.cljs$core$IFn$_invoke$arity$0 = $kixi$stats$core$arithmetic_mean__0$$;
  $kixi$stats$core$arithmetic_mean$$.cljs$core$IFn$_invoke$arity$1 = $kixi$stats$core$arithmetic_mean__1$$;
  $kixi$stats$core$arithmetic_mean$$.cljs$core$IFn$_invoke$arity$2 = $kixi$stats$core$arithmetic_mean__2$$;
  return $kixi$stats$core$arithmetic_mean$$;
}();
kixi.stats.core.mean = kixi.stats.core.arithmetic_mean;
kixi.stats.core.geometric_mean = function() {
  var $kixi$stats$core$geometric_mean$$ = null, $kixi$stats$core$geometric_mean__0$$ = function() {
    return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [1, 0], null);
  }, $kixi$stats$core$geometric_mean__1$$ = function($c$$) {
    var $s$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c$$, 0, null);
    $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c$$, 1, null);
    return $c$$ === 0 ? null : $s$$ === 0 ? 0.0 : kixi.stats.math.root($s$$, $c$$);
  }, $kixi$stats$core$geometric_mean__2$$ = function($p__115344$$, $e$$) {
    var $s$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115344$$, 0, null), $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115344$$, 1, null);
    return $e$$ == null ? $p__115344$$ : $e$$ < 0 ? $APP.cljs.core.reduced(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [null, 0], null)) : new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$s$$ * $e$$, $c$$ + 1], null);
  };
  $kixi$stats$core$geometric_mean$$ = function($p__115344$$, $e$$) {
    switch(arguments.length) {
      case 0:
        return $kixi$stats$core$geometric_mean__0$$.call(this);
      case 1:
        return $kixi$stats$core$geometric_mean__1$$.call(this, $p__115344$$);
      case 2:
        return $kixi$stats$core$geometric_mean__2$$.call(this, $p__115344$$, $e$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $kixi$stats$core$geometric_mean$$.cljs$core$IFn$_invoke$arity$0 = $kixi$stats$core$geometric_mean__0$$;
  $kixi$stats$core$geometric_mean$$.cljs$core$IFn$_invoke$arity$1 = $kixi$stats$core$geometric_mean__1$$;
  $kixi$stats$core$geometric_mean$$.cljs$core$IFn$_invoke$arity$2 = $kixi$stats$core$geometric_mean__2$$;
  return $kixi$stats$core$geometric_mean$$;
}();
kixi.stats.core.harmonic_mean = function() {
  var $kixi$stats$core$harmonic_mean$$ = null, $kixi$stats$core$harmonic_mean__0$$ = function() {
    return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0, 0], null);
  }, $kixi$stats$core$harmonic_mean__1$$ = function($c$$) {
    var $s$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c$$, 0, null);
    $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c$$, 1, null);
    return $c$$ === 0 ? null : $s$$ === 0 ? 0.0 : $c$$ / $s$$;
  }, $kixi$stats$core$harmonic_mean__2$$ = function($p__115362$$, $e$$) {
    var $s$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115362$$, 0, null), $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115362$$, 1, null);
    return $e$$ == null ? $p__115362$$ : $e$$ === 0 ? $APP.cljs.core.reduced(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0, $c$$ + 1], null)) : new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$s$$ + 1 / $e$$, $c$$ + 1], null);
  };
  $kixi$stats$core$harmonic_mean$$ = function($p__115362$$, $e$$) {
    switch(arguments.length) {
      case 0:
        return $kixi$stats$core$harmonic_mean__0$$.call(this);
      case 1:
        return $kixi$stats$core$harmonic_mean__1$$.call(this, $p__115362$$);
      case 2:
        return $kixi$stats$core$harmonic_mean__2$$.call(this, $p__115362$$, $e$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $kixi$stats$core$harmonic_mean$$.cljs$core$IFn$_invoke$arity$0 = $kixi$stats$core$harmonic_mean__0$$;
  $kixi$stats$core$harmonic_mean$$.cljs$core$IFn$_invoke$arity$1 = $kixi$stats$core$harmonic_mean__1$$;
  $kixi$stats$core$harmonic_mean$$.cljs$core$IFn$_invoke$arity$2 = $kixi$stats$core$harmonic_mean__2$$;
  return $kixi$stats$core$harmonic_mean$$;
}();
kixi.stats.core.variance_s = function() {
  var $kixi$stats$core$variance_s$$ = null, $kixi$stats$core$variance_s__0$$ = function() {
    return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0, 0.0, 0.0], null);
  }, $kixi$stats$core$variance_s__1$$ = function($p__115374_ss$$) {
    var $c$jscomp$791_c_SINGLEQUOTE_$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115374_ss$$, 0, null);
    $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115374_ss$$, 1, null);
    $p__115374_ss$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115374_ss$$, 2, null);
    if ($c$jscomp$791_c_SINGLEQUOTE_$$ === 0) {
      return null;
    }
    --$c$jscomp$791_c_SINGLEQUOTE_$$;
    return $c$jscomp$791_c_SINGLEQUOTE_$$ > 0 ? $p__115374_ss$$ / $c$jscomp$791_c_SINGLEQUOTE_$$ : 0;
  }, $kixi$stats$core$variance_s__2$$ = function($c_SINGLEQUOTE_$$, $e$$) {
    var $c$jscomp$792_m_SINGLEQUOTE_$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 0, null), $m$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 1, null), $ss$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 2, null);
    if ($e$$ == null) {
      return $c_SINGLEQUOTE_$$;
    }
    $c_SINGLEQUOTE_$$ = $c$jscomp$792_m_SINGLEQUOTE_$$ + 1;
    $c$jscomp$792_m_SINGLEQUOTE_$$ = $m$$ + ($e$$ - $m$$) / $c_SINGLEQUOTE_$$;
    return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$c_SINGLEQUOTE_$$, $c$jscomp$792_m_SINGLEQUOTE_$$, $ss$$ + ($e$$ - $c$jscomp$792_m_SINGLEQUOTE_$$) * ($e$$ - $m$$)], null);
  };
  $kixi$stats$core$variance_s$$ = function($p__115373$$, $e$$) {
    switch(arguments.length) {
      case 0:
        return $kixi$stats$core$variance_s__0$$.call(this);
      case 1:
        return $kixi$stats$core$variance_s__1$$.call(this, $p__115373$$);
      case 2:
        return $kixi$stats$core$variance_s__2$$.call(this, $p__115373$$, $e$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $kixi$stats$core$variance_s$$.cljs$core$IFn$_invoke$arity$0 = $kixi$stats$core$variance_s__0$$;
  $kixi$stats$core$variance_s$$.cljs$core$IFn$_invoke$arity$1 = $kixi$stats$core$variance_s__1$$;
  $kixi$stats$core$variance_s$$.cljs$core$IFn$_invoke$arity$2 = $kixi$stats$core$variance_s__2$$;
  return $kixi$stats$core$variance_s$$;
}();
kixi.stats.core.variance = kixi.stats.core.variance_s;
kixi.stats.core.variance_p = $APP.cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance_s, function($p__115382_ss$$) {
  var $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115382_ss$$, 0, null);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115382_ss$$, 1, null);
  $p__115382_ss$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115382_ss$$, 2, null);
  return $c$$ === 0 ? null : $p__115382_ss$$ / $c$$;
});
kixi.stats.core.standard_deviation_s = kixi.stats.core.post_complete(kixi.stats.core.variance_s, kixi.stats.core.somef(kixi.stats.math.sqrt));
kixi.stats.core.standard_deviation = kixi.stats.core.standard_deviation_s;
kixi.stats.core.standard_deviation_p = kixi.stats.core.post_complete(kixi.stats.core.variance_p, kixi.stats.core.somef(kixi.stats.math.sqrt));
kixi.stats.core.standard_error_s = $APP.cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.standard_deviation_s, function($p__115386_ss$$) {
  var $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115386_ss$$, 0, null);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115386_ss$$, 1, null);
  $p__115386_ss$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115386_ss$$, 2, null);
  if ($c$$ === 0) {
    return null;
  }
  var $c_SINGLEQUOTE_$$ = $c$$ - 1;
  return $c_SINGLEQUOTE_$$ > 0 ? kixi.stats.math.sqrt($p__115386_ss$$ / $c_SINGLEQUOTE_$$ / $c$$) : 0;
});
kixi.stats.core.standard_error = kixi.stats.core.standard_error_s;
kixi.stats.core.skewness_s = function() {
  var $kixi$stats$core$skewness_s$$ = null, $kixi$stats$core$skewness_s__0$$ = function() {
    return new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0.0, 0.0, 0.0, 0.0], null);
  }, $kixi$stats$core$skewness_s__1$$ = function($m3_p__115393$$) {
    var $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($m3_p__115393$$, 0, null);
    $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($m3_p__115393$$, 1, null);
    var $d$jscomp$570_m2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($m3_p__115393$$, 2, null);
    $m3_p__115393$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($m3_p__115393$$, 3, null);
    $d$jscomp$570_m2$$ = kixi.stats.math.pow($d$jscomp$570_m2$$, 1.5) * ($c$$ - 2);
    return $d$jscomp$570_m2$$ === 0 ? null : kixi.stats.math.sqrt($c$$ - 1) * $m3_p__115393$$ * $c$$ / $d$jscomp$570_m2$$;
  }, $kixi$stats$core$skewness_s__2$$ = function($c_SINGLEQUOTE_$$, $d$jscomp$571_e$$) {
    var $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 0, null), $m1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 1, null), $m2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 2, null), $m3$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 3, null);
    if ($d$jscomp$571_e$$ == null) {
      return $c_SINGLEQUOTE_$$;
    }
    $c_SINGLEQUOTE_$$ = $c$$ + 1;
    $d$jscomp$571_e$$ -= $m1$$;
    var $dc$$ = $d$jscomp$571_e$$ / $c_SINGLEQUOTE_$$;
    $m1$$ += $dc$$;
    $c$$ = $m2$$ + kixi.stats.math.sq($d$jscomp$571_e$$) * ($c$$ / $c_SINGLEQUOTE_$$);
    $m2$$ = $m3$$ + kixi.stats.math.pow($d$jscomp$571_e$$, 3) * ($c_SINGLEQUOTE_$$ - 1) * ($c_SINGLEQUOTE_$$ - 2) / kixi.stats.math.sq($c_SINGLEQUOTE_$$) + -3 * $m2$$ * $dc$$;
    return new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$c_SINGLEQUOTE_$$, $m1$$, $c$$, $m2$$], null);
  };
  $kixi$stats$core$skewness_s$$ = function($p__115392$$, $e$$) {
    switch(arguments.length) {
      case 0:
        return $kixi$stats$core$skewness_s__0$$.call(this);
      case 1:
        return $kixi$stats$core$skewness_s__1$$.call(this, $p__115392$$);
      case 2:
        return $kixi$stats$core$skewness_s__2$$.call(this, $p__115392$$, $e$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $kixi$stats$core$skewness_s$$.cljs$core$IFn$_invoke$arity$0 = $kixi$stats$core$skewness_s__0$$;
  $kixi$stats$core$skewness_s$$.cljs$core$IFn$_invoke$arity$1 = $kixi$stats$core$skewness_s__1$$;
  $kixi$stats$core$skewness_s$$.cljs$core$IFn$_invoke$arity$2 = $kixi$stats$core$skewness_s__2$$;
  return $kixi$stats$core$skewness_s$$;
}();
kixi.stats.core.skewness = kixi.stats.core.skewness_s;
kixi.stats.core.skewness_p = $APP.cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.skewness_s, function($m3$$) {
  var $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($m3$$, 0, null);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($m3$$, 1, null);
  var $d$jscomp$572_m2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($m3$$, 2, null);
  $m3$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($m3$$, 3, null);
  $d$jscomp$572_m2$$ = kixi.stats.math.pow($d$jscomp$572_m2$$, 1.5);
  return $d$jscomp$572_m2$$ === 0 ? null : kixi.stats.math.sqrt($c$$) * $m3$$ / $d$jscomp$572_m2$$;
});
kixi.stats.core.kurtosis_s = function() {
  var $kixi$stats$core$kurtosis_s$$ = null, $kixi$stats$core$kurtosis_s__0$$ = function() {
    return new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0.0, 0.0, 0.0, 0.0, 0.0], null);
  }, $kixi$stats$core$kurtosis_s__1$$ = function($m4_p__115409$$) {
    var $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($m4_p__115409$$, 0, null);
    $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($m4_p__115409$$, 1, null);
    var $m2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($m4_p__115409$$, 2, null);
    $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($m4_p__115409$$, 3, null);
    $m4_p__115409$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($m4_p__115409$$, 4, null);
    return $m2$$ === 0 || $c$$ < 4 ? null : $c$$ * ($c$$ + 1) * $m4_p__115409$$ / (($c$$ - 1) * ($c$$ - 2) * ($c$$ - 3) * kixi.stats.math.sq($m2$$ / ($c$$ - 1))) - 3 * kixi.stats.math.sq($c$$ - 1) / (($c$$ - 2) * ($c$$ - 3));
  }, $kixi$stats$core$kurtosis_s__2$$ = function($c_SINGLEQUOTE_$$, $d$jscomp$573_e$$) {
    var $c$jscomp$799_m2_SINGLEQUOTE_$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 0, null), $m1$jscomp$27_m1_SINGLEQUOTE_$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 1, null), $m2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 2, null), $m3$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 3, null), $m4$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 4, null);
    if ($d$jscomp$573_e$$ == null) {
      return $c_SINGLEQUOTE_$$;
    }
    $c_SINGLEQUOTE_$$ = $c$jscomp$799_m2_SINGLEQUOTE_$$ + 1;
    $d$jscomp$573_e$$ -= $m1$jscomp$27_m1_SINGLEQUOTE_$$;
    var $dc$$ = $d$jscomp$573_e$$ / $c_SINGLEQUOTE_$$;
    $m1$jscomp$27_m1_SINGLEQUOTE_$$ += $dc$$;
    $c$jscomp$799_m2_SINGLEQUOTE_$$ = $m2$$ + kixi.stats.math.sq($d$jscomp$573_e$$) * ($c$jscomp$799_m2_SINGLEQUOTE_$$ / $c_SINGLEQUOTE_$$);
    var $m3_SINGLEQUOTE_$$ = $m3$$ + kixi.stats.math.pow($d$jscomp$573_e$$, 3) * ($c_SINGLEQUOTE_$$ - 1) * ($c_SINGLEQUOTE_$$ - 2) / kixi.stats.math.sq($c_SINGLEQUOTE_$$) + -3 * $m2$$ * $dc$$;
    $m2$$ = $m4$$ + kixi.stats.math.pow($d$jscomp$573_e$$, 4) * ($c_SINGLEQUOTE_$$ - 1) * (kixi.stats.math.sq($c_SINGLEQUOTE_$$) + -3 * $c_SINGLEQUOTE_$$ + 3) / kixi.stats.math.pow($c_SINGLEQUOTE_$$, 3) + 6 * $m2$$ * kixi.stats.math.sq($dc$$) + -4 * $m3$$ * $dc$$;
    return new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$c_SINGLEQUOTE_$$, $m1$jscomp$27_m1_SINGLEQUOTE_$$, $c$jscomp$799_m2_SINGLEQUOTE_$$, $m3_SINGLEQUOTE_$$, $m2$$], null);
  };
  $kixi$stats$core$kurtosis_s$$ = function($p__115408$$, $e$$) {
    switch(arguments.length) {
      case 0:
        return $kixi$stats$core$kurtosis_s__0$$.call(this);
      case 1:
        return $kixi$stats$core$kurtosis_s__1$$.call(this, $p__115408$$);
      case 2:
        return $kixi$stats$core$kurtosis_s__2$$.call(this, $p__115408$$, $e$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $kixi$stats$core$kurtosis_s$$.cljs$core$IFn$_invoke$arity$0 = $kixi$stats$core$kurtosis_s__0$$;
  $kixi$stats$core$kurtosis_s$$.cljs$core$IFn$_invoke$arity$1 = $kixi$stats$core$kurtosis_s__1$$;
  $kixi$stats$core$kurtosis_s$$.cljs$core$IFn$_invoke$arity$2 = $kixi$stats$core$kurtosis_s__2$$;
  return $kixi$stats$core$kurtosis_s$$;
}();
kixi.stats.core.kurtosis = kixi.stats.core.kurtosis_s;
kixi.stats.core.kurtosis_p = $APP.cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.kurtosis_s, function($m4$$) {
  var $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($m4$$, 0, null);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($m4$$, 1, null);
  var $m2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($m4$$, 2, null);
  $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($m4$$, 3, null);
  $m4$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($m4$$, 4, null);
  return $m2$$ === 0 ? null : $c$$ * $m4$$ / kixi.stats.math.sq($m2$$) - 3;
});
kixi.stats.core.covariance_s = function($fx$$, $fy$$) {
  return function() {
    var $G__115559$$ = null, $G__115559__0$$ = function() {
      return new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0.0, 0.0, 0.0, 0.0], null);
    }, $G__115559__1$$ = function($p__115421_ss$$) {
      var $c$jscomp$801_c_SINGLEQUOTE_$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115421_ss$$, 0, null);
      $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115421_ss$$, 1, null);
      $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115421_ss$$, 2, null);
      $p__115421_ss$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115421_ss$$, 3, null);
      if ($c$jscomp$801_c_SINGLEQUOTE_$$ === 0) {
        return null;
      }
      --$c$jscomp$801_c_SINGLEQUOTE_$$;
      return $c$jscomp$801_c_SINGLEQUOTE_$$ > 0 ? $p__115421_ss$$ / $c$jscomp$801_c_SINGLEQUOTE_$$ : 0;
    }, $G__115559__2$$ = function($c_SINGLEQUOTE_$$, $e$jscomp$666_y$$) {
      var $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 0, null), $mx$jscomp$2_mx_SINGLEQUOTE_$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 1, null), $my$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 2, null), $ss$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 3, null), $x$$ = $fx$$.cljs$core$IFn$_invoke$arity$1 ? $fx$$.cljs$core$IFn$_invoke$arity$1($e$jscomp$666_y$$) : $fx$$.call(null, $e$jscomp$666_y$$);
      $e$jscomp$666_y$$ = $fy$$.cljs$core$IFn$_invoke$arity$1 ? $fy$$.cljs$core$IFn$_invoke$arity$1($e$jscomp$666_y$$) : $fy$$.call(null, $e$jscomp$666_y$$);
      if ($x$$ == null || $e$jscomp$666_y$$ == null) {
        return $c_SINGLEQUOTE_$$;
      }
      $c_SINGLEQUOTE_$$ = $c$$ + 1;
      $mx$jscomp$2_mx_SINGLEQUOTE_$$ += ($x$$ - $mx$jscomp$2_mx_SINGLEQUOTE_$$) / $c_SINGLEQUOTE_$$;
      return new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$c_SINGLEQUOTE_$$, $mx$jscomp$2_mx_SINGLEQUOTE_$$, $my$$ + ($e$jscomp$666_y$$ - $my$$) / $c_SINGLEQUOTE_$$, $ss$$ + ($x$$ - $mx$jscomp$2_mx_SINGLEQUOTE_$$) * ($e$jscomp$666_y$$ - $my$$)], null);
    };
    $G__115559$$ = function($p__115420$$, $e$$) {
      switch(arguments.length) {
        case 0:
          return $G__115559__0$$.call(this);
        case 1:
          return $G__115559__1$$.call(this, $p__115420$$);
        case 2:
          return $G__115559__2$$.call(this, $p__115420$$, $e$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $G__115559$$.cljs$core$IFn$_invoke$arity$0 = $G__115559__0$$;
    $G__115559$$.cljs$core$IFn$_invoke$arity$1 = $G__115559__1$$;
    $G__115559$$.cljs$core$IFn$_invoke$arity$2 = $G__115559__2$$;
    return $G__115559$$;
  }();
};
kixi.stats.core.covariance = kixi.stats.core.covariance_s;
kixi.stats.core.covariance_p = function($fx$$, $fy$$) {
  return $APP.cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.covariance_s($fx$$, $fy$$), function($p__115428_ss$$) {
    var $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115428_ss$$, 0, null);
    $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115428_ss$$, 1, null);
    $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115428_ss$$, 2, null);
    $p__115428_ss$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115428_ss$$, 3, null);
    return $c$$ === 0 ? null : $p__115428_ss$$ / $c$$;
  });
};
kixi.stats.core.covariance_matrix = function($kvs$$) {
  return redux.core.fuse_matrix(kixi.stats.core.covariance, $kvs$$);
};
kixi.stats.core.correlation = function($fx$$, $fy$$) {
  return function() {
    var $G__115560$$ = null, $G__115560__0$$ = function() {
      return new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], null);
    }, $G__115560__1$$ = function($p__115433_ssxy$$) {
      $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115433_ssxy$$, 0, null);
      $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115433_ssxy$$, 1, null);
      $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115433_ssxy$$, 2, null);
      var $d$jscomp$574_ssx$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115433_ssxy$$, 3, null), $ssy$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115433_ssxy$$, 4, null);
      $p__115433_ssxy$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115433_ssxy$$, 5, null);
      $d$jscomp$574_ssx$$ = kixi.stats.math.sqrt($d$jscomp$574_ssx$$ * $ssy$$);
      return $d$jscomp$574_ssx$$ === 0 ? null : $p__115433_ssxy$$ / $d$jscomp$574_ssx$$;
    }, $G__115560__2$$ = function($c_SINGLEQUOTE_$$, $e$jscomp$668_y$$) {
      var $c$jscomp$804_mx_SINGLEQUOTE_$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 0, null), $mx$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 1, null), $my$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 2, null), $ssx$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 3, null), $ssy$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 4, null), $ssxy$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c_SINGLEQUOTE_$$, 
      5, null), $x$$ = $fx$$.cljs$core$IFn$_invoke$arity$1 ? $fx$$.cljs$core$IFn$_invoke$arity$1($e$jscomp$668_y$$) : $fx$$.call(null, $e$jscomp$668_y$$);
      $e$jscomp$668_y$$ = $fy$$.cljs$core$IFn$_invoke$arity$1 ? $fy$$.cljs$core$IFn$_invoke$arity$1($e$jscomp$668_y$$) : $fy$$.call(null, $e$jscomp$668_y$$);
      if ($x$$ == null || $e$jscomp$668_y$$ == null) {
        return $c_SINGLEQUOTE_$$;
      }
      $c_SINGLEQUOTE_$$ = $c$jscomp$804_mx_SINGLEQUOTE_$$ + 1;
      $c$jscomp$804_mx_SINGLEQUOTE_$$ = $mx$$ + ($x$$ - $mx$$) / $c_SINGLEQUOTE_$$;
      var $my_SINGLEQUOTE_$$ = $my$$ + ($e$jscomp$668_y$$ - $my$$) / $c_SINGLEQUOTE_$$;
      return new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$c_SINGLEQUOTE_$$, $c$jscomp$804_mx_SINGLEQUOTE_$$, $my_SINGLEQUOTE_$$, $ssx$$ + ($x$$ - $c$jscomp$804_mx_SINGLEQUOTE_$$) * ($x$$ - $mx$$), $ssy$$ + ($e$jscomp$668_y$$ - $my_SINGLEQUOTE_$$) * ($e$jscomp$668_y$$ - $my$$), $ssxy$$ + ($x$$ - $c$jscomp$804_mx_SINGLEQUOTE_$$) * ($e$jscomp$668_y$$ - $my$$)], null);
    };
    $G__115560$$ = function($p__115432$$, $e$$) {
      switch(arguments.length) {
        case 0:
          return $G__115560__0$$.call(this);
        case 1:
          return $G__115560__1$$.call(this, $p__115432$$);
        case 2:
          return $G__115560__2$$.call(this, $p__115432$$, $e$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $G__115560$$.cljs$core$IFn$_invoke$arity$0 = $G__115560__0$$;
    $G__115560$$.cljs$core$IFn$_invoke$arity$1 = $G__115560__1$$;
    $G__115560$$.cljs$core$IFn$_invoke$arity$2 = $G__115560__2$$;
    return $G__115560$$;
  }();
};
kixi.stats.core.r_squared = function($fy_hat$$, $fy$$) {
  return function() {
    var $G__115561$$ = null, $G__115561__0$$ = function() {
      return new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0.0, 0.0, 0.0, 0.0], null);
    }, $G__115561__1$$ = function($p__115441_ssy$$) {
      var $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115441_ssy$$, 0, null);
      $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115441_ssy$$, 1, null);
      var $ssr$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115441_ssy$$, 2, null);
      $p__115441_ssy$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115441_ssy$$, 3, null);
      return $c$$ === 0 || $p__115441_ssy$$ === 0 ? null : 1 - $ssr$$ / $p__115441_ssy$$;
    }, $G__115561__2$$ = function($p__115440_r$$, $e$jscomp$670_y$$) {
      var $c$jscomp$806_c_SINGLEQUOTE_$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115440_r$$, 0, null), $my$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115440_r$$, 1, null), $ssr$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115440_r$$, 2, null), $ssy$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115440_r$$, 3, null), $my_SINGLEQUOTE_$jscomp$3_y_hat$$ = $fy_hat$$.cljs$core$IFn$_invoke$arity$1 ? $fy_hat$$.cljs$core$IFn$_invoke$arity$1($e$jscomp$670_y$$) : 
      $fy_hat$$.call(null, $e$jscomp$670_y$$);
      $e$jscomp$670_y$$ = $fy$$.cljs$core$IFn$_invoke$arity$1 ? $fy$$.cljs$core$IFn$_invoke$arity$1($e$jscomp$670_y$$) : $fy$$.call(null, $e$jscomp$670_y$$);
      if ($my_SINGLEQUOTE_$jscomp$3_y_hat$$ == null || $e$jscomp$670_y$$ == null) {
        return $p__115440_r$$;
      }
      $p__115440_r$$ = $e$jscomp$670_y$$ - $my_SINGLEQUOTE_$jscomp$3_y_hat$$;
      $c$jscomp$806_c_SINGLEQUOTE_$$ += 1;
      $my_SINGLEQUOTE_$jscomp$3_y_hat$$ = $my$$ + ($e$jscomp$670_y$$ - $my$$) / $c$jscomp$806_c_SINGLEQUOTE_$$;
      return new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$c$jscomp$806_c_SINGLEQUOTE_$$, $my_SINGLEQUOTE_$jscomp$3_y_hat$$, $ssr$$ + $p__115440_r$$ * $p__115440_r$$, $ssy$$ + ($e$jscomp$670_y$$ - $my_SINGLEQUOTE_$jscomp$3_y_hat$$) * ($e$jscomp$670_y$$ - $my$$)], null);
    };
    $G__115561$$ = function($p__115440$$, $e$$) {
      switch(arguments.length) {
        case 0:
          return $G__115561__0$$.call(this);
        case 1:
          return $G__115561__1$$.call(this, $p__115440$$);
        case 2:
          return $G__115561__2$$.call(this, $p__115440$$, $e$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $G__115561$$.cljs$core$IFn$_invoke$arity$0 = $G__115561__0$$;
    $G__115561$$.cljs$core$IFn$_invoke$arity$1 = $G__115561__1$$;
    $G__115561$$.cljs$core$IFn$_invoke$arity$2 = $G__115561__2$$;
    return $G__115561$$;
  }();
};
kixi.stats.core.adjusted_r_squared = function($fy_hat$$, $fy$$, $k$$) {
  return $APP.cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.r_squared($fy_hat$$, $fy$$), function($p__115448_ssy$$) {
    var $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115448_ssy$$, 0, null);
    $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115448_ssy$$, 1, null);
    var $ssr$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115448_ssy$$, 2, null);
    $p__115448_ssy$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115448_ssy$$, 3, null);
    return $p__115448_ssy$$ > 0 && $c$$ - $k$$ - 1 > 0 ? 1 - $ssr$$ / $p__115448_ssy$$ * ($c$$ - 1) / ($c$$ - $k$$ - 1) : null;
  });
};
kixi.stats.core.mse = function($fy_hat$$, $fy$$) {
  return function() {
    var $G__115562$$ = null, $G__115562__0$$ = function() {
      return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0.0, 0.0], null);
    }, $G__115562__1$$ = function($mse_p__115453$$) {
      var $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($mse_p__115453$$, 0, null);
      $mse_p__115453$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($mse_p__115453$$, 1, null);
      return $c$$ > 0 ? $mse_p__115453$$ : null;
    }, $G__115562__2$$ = function($p__115452_se$$, $e$jscomp$672_y$$) {
      var $c$jscomp$809_c_SINGLEQUOTE_$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115452_se$$, 0, null), $mse$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115452_se$$, 1, null), $y_hat$$ = $fy_hat$$.cljs$core$IFn$_invoke$arity$1 ? $fy_hat$$.cljs$core$IFn$_invoke$arity$1($e$jscomp$672_y$$) : $fy_hat$$.call(null, $e$jscomp$672_y$$);
      $e$jscomp$672_y$$ = $fy$$.cljs$core$IFn$_invoke$arity$1 ? $fy$$.cljs$core$IFn$_invoke$arity$1($e$jscomp$672_y$$) : $fy$$.call(null, $e$jscomp$672_y$$);
      if ($y_hat$$ == null || $e$jscomp$672_y$$ == null) {
        return $p__115452_se$$;
      }
      $p__115452_se$$ = kixi.stats.math.sq($e$jscomp$672_y$$ - $y_hat$$);
      $c$jscomp$809_c_SINGLEQUOTE_$$ += 1;
      return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$c$jscomp$809_c_SINGLEQUOTE_$$, $mse$$ + ($p__115452_se$$ - $mse$$) / $c$jscomp$809_c_SINGLEQUOTE_$$], null);
    };
    $G__115562$$ = function($p__115452$$, $e$$) {
      switch(arguments.length) {
        case 0:
          return $G__115562__0$$.call(this);
        case 1:
          return $G__115562__1$$.call(this, $p__115452$$);
        case 2:
          return $G__115562__2$$.call(this, $p__115452$$, $e$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $G__115562$$.cljs$core$IFn$_invoke$arity$0 = $G__115562__0$$;
    $G__115562$$.cljs$core$IFn$_invoke$arity$1 = $G__115562__1$$;
    $G__115562$$.cljs$core$IFn$_invoke$arity$2 = $G__115562__2$$;
    return $G__115562$$;
  }();
};
kixi.stats.core.rmse = function($fy_hat$$, $fy$$) {
  return kixi.stats.core.post_complete(kixi.stats.core.mse($fy_hat$$, $fy$$), kixi.stats.core.somef(kixi.stats.math.sqrt));
};
kixi.stats.core.correlation_matrix = function($kvs$$) {
  return redux.core.fuse_matrix(kixi.stats.core.correlation, $kvs$$);
};
kixi.stats.core.cramers_v = function($fx$$, $fy$$) {
  return function() {
    var $G__115563$$ = null, $G__115563__0$$ = function() {
      return new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.PersistentArrayMap.EMPTY, $APP.cljs.core.PersistentArrayMap.EMPTY, $APP.cljs.core.PersistentArrayMap.EMPTY, 0], null);
    }, $G__115563__1$$ = function($k$jscomp$1124_p__115461_r$$) {
      var $f1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($k$jscomp$1124_p__115461_r$$, 0, null), $f2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($k$jscomp$1124_p__115461_r$$, 1, null), $chi_squared_f12$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($k$jscomp$1124_p__115461_r$$, 2, null), $n$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($k$jscomp$1124_p__115461_r$$, 3, null);
      $k$jscomp$1124_p__115461_r$$ = $APP.cljs.core.count($f1$$);
      var $r_tilde$$ = $n$$ > 1 ? $k$jscomp$1124_p__115461_r$$ - kixi.stats.math.sq($k$jscomp$1124_p__115461_r$$ - 1) / ($n$$ - 1) : null;
      $k$jscomp$1124_p__115461_r$$ = $APP.cljs.core.count($f2$$);
      var $k_tilde$$ = $n$$ > 1 ? $k$jscomp$1124_p__115461_r$$ - kixi.stats.math.sq($k$jscomp$1124_p__115461_r$$ - 1) / ($n$$ - 1) : null;
      $chi_squared_f12$$ = $APP.cljs.core.reduce_kv(function($acc$$, $k__$1$jscomp$38_n2$$, $v$$) {
        var $n1$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($f1$$, $APP.cljs.core.first($k__$1$jscomp$38_n2$$));
        $k__$1$jscomp$38_n2$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($f2$$, $APP.cljs.core.last($k__$1$jscomp$38_n2$$));
        return $acc$$ + kixi.stats.math.sq($v$$ - $n1$$ * $k__$1$jscomp$38_n2$$ / $n$$) / ($n1$$ * $k__$1$jscomp$38_n2$$ / $n$$);
      }, 0, $chi_squared_f12$$);
      return $APP.cljs.core.truth_($APP.cljs.core.truth_($r_tilde$$) ? $APP.cljs.core.truth_($k_tilde$$) ? $r_tilde$$ > 1 && $k_tilde$$ > 1 : $k_tilde$$ : $r_tilde$$) ? kixi.stats.math.sqrt($chi_squared_f12$$ / $n$$ / function() {
        var $x__5113__auto__$$ = $r_tilde$$ - 1, $y__5114__auto__$$ = $k_tilde$$ - 1;
        return $x__5113__auto__$$ < $y__5114__auto__$$ ? $x__5113__auto__$$ : $y__5114__auto__$$;
      }()) : null;
    }, $G__115563__2$$ = function($n$$, $k12_row$$) {
      var $f1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n$$, 0, null), $f2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n$$, 1, null), $f12$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n$$, 2, null);
      $n$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n$$, 3, null);
      var $k1$$ = $fx$$.cljs$core$IFn$_invoke$arity$1 ? $fx$$.cljs$core$IFn$_invoke$arity$1($k12_row$$) : $fx$$.call(null, $k12_row$$), $k2$$ = $fy$$.cljs$core$IFn$_invoke$arity$1 ? $fy$$.cljs$core$IFn$_invoke$arity$1($k12_row$$) : $fy$$.call(null, $k12_row$$);
      $k12_row$$ = new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$k1$$, $k2$$], null);
      var $increment_count$$ = function($m$$, $k$$) {
        return $APP.cljs.core.update.cljs$core$IFn$_invoke$arity$3($m$$, $k$$, $APP.cljs.core.fnil.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.inc, 0));
      };
      $f1$$ = $increment_count$$($f1$$, $k1$$);
      $f2$$ = $increment_count$$($f2$$, $k2$$);
      $f12$$ = $increment_count$$($f12$$, $k12_row$$);
      return new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$f1$$, $f2$$, $f12$$, $n$$ + 1], null);
    };
    $G__115563$$ = function($p__115460$$, $row$$) {
      switch(arguments.length) {
        case 0:
          return $G__115563__0$$.call(this);
        case 1:
          return $G__115563__1$$.call(this, $p__115460$$);
        case 2:
          return $G__115563__2$$.call(this, $p__115460$$, $row$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $G__115563$$.cljs$core$IFn$_invoke$arity$0 = $G__115563__0$$;
    $G__115563$$.cljs$core$IFn$_invoke$arity$1 = $G__115563__1$$;
    $G__115563$$.cljs$core$IFn$_invoke$arity$2 = $G__115563__2$$;
    return $G__115563$$;
  }();
};
kixi.stats.core.sum_squares = kixi.stats.digest.sum_squares;
kixi.stats.core.simple_linear_regression = function($fx$$, $fy$$) {
  return kixi.stats.core.post_complete(kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2($fx$$, $fy$$) : kixi.stats.core.sum_squares.call(null, $fx$$, $fy$$), kixi.stats.estimate.simple_linear_regression);
};
kixi.stats.core.t_kixi$stats$core115471 = function($fx$$, $fy$$, $sum_squares$$, $meta115472$$) {
  this.fx = $fx$$;
  this.fy = $fy$$;
  this.sum_squares = $sum_squares$$;
  this.meta115472 = $meta115472$$;
  this.cljs$lang$protocol_mask$partition0$ = 393216;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.core.t_kixi$stats$core115471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($_115473$$, $meta115472__$1$$) {
  return new kixi.stats.core.t_kixi$stats$core115471(this.fx, this.fy, this.sum_squares, $meta115472__$1$$);
};
kixi.stats.core.t_kixi$stats$core115471.prototype.cljs$core$IMeta$_meta$arity$1 = function($_115473$$) {
  return this.meta115472;
};
kixi.stats.core.t_kixi$stats$core115471.prototype.kixi$stats$protocols$PDependent$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.core.t_kixi$stats$core115471.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = function($_$$, $x$$) {
  return kixi.stats.estimate.regression_standard_error(this.sum_squares, $x$$);
};
kixi.stats.core.t_kixi$stats$core115471.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, cljs$cst$9793$sum_squares, cljs$cst$9813$meta115472], null);
};
kixi.stats.core.t_kixi$stats$core115471.cljs$lang$type = !0;
kixi.stats.core.t_kixi$stats$core115471.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core115471";
kixi.stats.core.t_kixi$stats$core115471.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.core/t_kixi$stats$core115471");
};
kixi.stats.core.__GT_t_kixi$stats$core115471 = function($fx$$, $fy$$, $sum_squares$$, $meta115472$$) {
  return new kixi.stats.core.t_kixi$stats$core115471($fx$$, $fy$$, $sum_squares$$, $meta115472$$);
};
kixi.stats.core.regression_standard_error = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return kixi.stats.core.regression_standard_error.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return kixi.stats.core.regression_standard_error.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
kixi.stats.core.regression_standard_error.cljs$core$IFn$_invoke$arity$2 = function($fx$$, $fy$$) {
  return kixi.stats.core.post_complete(kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2($fx$$, $fy$$) : kixi.stats.core.sum_squares.call(null, $fx$$, $fy$$), function($sum_squares$$) {
    return new kixi.stats.core.t_kixi$stats$core115471($fx$$, $fy$$, $sum_squares$$, $APP.cljs.core.PersistentArrayMap.EMPTY);
  });
};
kixi.stats.core.regression_standard_error.cljs$core$IFn$_invoke$arity$3 = function($fx$$, $fy$$, $x$$) {
  return kixi.stats.core.post_complete(kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2($fx$$, $fy$$) : kixi.stats.core.sum_squares.call(null, $fx$$, $fy$$), function($p1__115468_SHARP_$$) {
    return kixi.stats.estimate.regression_standard_error($p1__115468_SHARP_$$, $x$$);
  });
};
kixi.stats.core.regression_standard_error.cljs$lang$maxFixedArity = 3;
kixi.stats.core.t_kixi$stats$core115477 = function($fx$$, $fy$$, $sum_squares$$, $meta115478$$) {
  this.fx = $fx$$;
  this.fy = $fy$$;
  this.sum_squares = $sum_squares$$;
  this.meta115478 = $meta115478$$;
  this.cljs$lang$protocol_mask$partition0$ = 393216;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.core.t_kixi$stats$core115477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($_115479$$, $meta115478__$1$$) {
  return new kixi.stats.core.t_kixi$stats$core115477(this.fx, this.fy, this.sum_squares, $meta115478__$1$$);
};
kixi.stats.core.t_kixi$stats$core115477.prototype.cljs$core$IMeta$_meta$arity$1 = function($_115479$$) {
  return this.meta115478;
};
kixi.stats.core.t_kixi$stats$core115477.prototype.kixi$stats$protocols$PDependentWithSignificance$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.core.t_kixi$stats$core115477.prototype.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3 = function($_$$, $x$$, $alpha$$) {
  return kixi.stats.estimate.regression_confidence_interval(this.sum_squares, $x$$, $alpha$$);
};
kixi.stats.core.t_kixi$stats$core115477.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, cljs$cst$9793$sum_squares, cljs$cst$9814$meta115478], null);
};
kixi.stats.core.t_kixi$stats$core115477.cljs$lang$type = !0;
kixi.stats.core.t_kixi$stats$core115477.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core115477";
kixi.stats.core.t_kixi$stats$core115477.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.core/t_kixi$stats$core115477");
};
kixi.stats.core.__GT_t_kixi$stats$core115477 = function($fx$$, $fy$$, $sum_squares$$, $meta115478$$) {
  return new kixi.stats.core.t_kixi$stats$core115477($fx$$, $fy$$, $sum_squares$$, $meta115478$$);
};
kixi.stats.core.t_kixi$stats$core115480 = function($fx$$, $fy$$, $alpha$$, $sum_squares$$, $meta115481$$) {
  this.fx = $fx$$;
  this.fy = $fy$$;
  this.alpha = $alpha$$;
  this.sum_squares = $sum_squares$$;
  this.meta115481 = $meta115481$$;
  this.cljs$lang$protocol_mask$partition0$ = 393216;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.core.t_kixi$stats$core115480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($_115482$$, $meta115481__$1$$) {
  return new kixi.stats.core.t_kixi$stats$core115480(this.fx, this.fy, this.alpha, this.sum_squares, $meta115481__$1$$);
};
kixi.stats.core.t_kixi$stats$core115480.prototype.cljs$core$IMeta$_meta$arity$1 = function($_115482$$) {
  return this.meta115481;
};
kixi.stats.core.t_kixi$stats$core115480.prototype.kixi$stats$protocols$PDependent$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.core.t_kixi$stats$core115480.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = function($_$$, $x$$) {
  return kixi.stats.estimate.regression_confidence_interval(this.sum_squares, $x$$, this.alpha);
};
kixi.stats.core.t_kixi$stats$core115480.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha, cljs$cst$9793$sum_squares, cljs$cst$9815$meta115481], null);
};
kixi.stats.core.t_kixi$stats$core115480.cljs$lang$type = !0;
kixi.stats.core.t_kixi$stats$core115480.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core115480";
kixi.stats.core.t_kixi$stats$core115480.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.core/t_kixi$stats$core115480");
};
kixi.stats.core.__GT_t_kixi$stats$core115480 = function($fx$$, $fy$$, $alpha$$, $sum_squares$$, $meta115481$$) {
  return new kixi.stats.core.t_kixi$stats$core115480($fx$$, $fy$$, $alpha$$, $sum_squares$$, $meta115481$$);
};
kixi.stats.core.regression_confidence_interval = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$2 = function($fx$$, $fy$$) {
  return kixi.stats.core.post_complete(kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2($fx$$, $fy$$) : kixi.stats.core.sum_squares.call(null, $fx$$, $fy$$), function($sum_squares$$) {
    return new kixi.stats.core.t_kixi$stats$core115477($fx$$, $fy$$, $sum_squares$$, $APP.cljs.core.PersistentArrayMap.EMPTY);
  });
};
kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$3 = function($fx$$, $fy$$, $alpha$$) {
  return kixi.stats.core.post_complete(kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2($fx$$, $fy$$) : kixi.stats.core.sum_squares.call(null, $fx$$, $fy$$), function($sum_squares$$) {
    return new kixi.stats.core.t_kixi$stats$core115480($fx$$, $fy$$, $alpha$$, $sum_squares$$, $APP.cljs.core.PersistentArrayMap.EMPTY);
  });
};
kixi.stats.core.regression_confidence_interval.cljs$core$IFn$_invoke$arity$4 = function($fx$$, $fy$$, $alpha$$, $x$$) {
  return kixi.stats.core.post_complete(kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2($fx$$, $fy$$) : kixi.stats.core.sum_squares.call(null, $fx$$, $fy$$), function($p1__115474_SHARP_$$) {
    return kixi.stats.estimate.regression_confidence_interval($p1__115474_SHARP_$$, $x$$, $alpha$$);
  });
};
kixi.stats.core.regression_confidence_interval.cljs$lang$maxFixedArity = 4;
kixi.stats.core.t_kixi$stats$core115486 = function($fx$$, $fy$$, $sum_squares$$, $meta115487$$) {
  this.fx = $fx$$;
  this.fy = $fy$$;
  this.sum_squares = $sum_squares$$;
  this.meta115487 = $meta115487$$;
  this.cljs$lang$protocol_mask$partition0$ = 393216;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.core.t_kixi$stats$core115486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($_115488$$, $meta115487__$1$$) {
  return new kixi.stats.core.t_kixi$stats$core115486(this.fx, this.fy, this.sum_squares, $meta115487__$1$$);
};
kixi.stats.core.t_kixi$stats$core115486.prototype.cljs$core$IMeta$_meta$arity$1 = function($_115488$$) {
  return this.meta115487;
};
kixi.stats.core.t_kixi$stats$core115486.prototype.kixi$stats$protocols$PDependent$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.core.t_kixi$stats$core115486.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = function($_$$, $x$$) {
  return kixi.stats.estimate.regression_prediction_standard_error(this.sum_squares, $x$$);
};
kixi.stats.core.t_kixi$stats$core115486.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, cljs$cst$9793$sum_squares, cljs$cst$9816$meta115487], null);
};
kixi.stats.core.t_kixi$stats$core115486.cljs$lang$type = !0;
kixi.stats.core.t_kixi$stats$core115486.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core115486";
kixi.stats.core.t_kixi$stats$core115486.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.core/t_kixi$stats$core115486");
};
kixi.stats.core.__GT_t_kixi$stats$core115486 = function($fx$$, $fy$$, $sum_squares$$, $meta115487$$) {
  return new kixi.stats.core.t_kixi$stats$core115486($fx$$, $fy$$, $sum_squares$$, $meta115487$$);
};
kixi.stats.core.regression_prediction_standard_error = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return kixi.stats.core.regression_prediction_standard_error.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return kixi.stats.core.regression_prediction_standard_error.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
kixi.stats.core.regression_prediction_standard_error.cljs$core$IFn$_invoke$arity$2 = function($fx$$, $fy$$) {
  return kixi.stats.core.post_complete(kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2($fx$$, $fy$$) : kixi.stats.core.sum_squares.call(null, $fx$$, $fy$$), function($sum_squares$$) {
    return $APP.cljs.core.truth_($sum_squares$$) ? new kixi.stats.core.t_kixi$stats$core115486($fx$$, $fy$$, $sum_squares$$, $APP.cljs.core.PersistentArrayMap.EMPTY) : null;
  });
};
kixi.stats.core.regression_prediction_standard_error.cljs$core$IFn$_invoke$arity$3 = function($fx$$, $fy$$, $x$$) {
  return kixi.stats.core.post_complete(kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2($fx$$, $fy$$) : kixi.stats.core.sum_squares.call(null, $fx$$, $fy$$), function($p1__115483_SHARP_$$) {
    return kixi.stats.estimate.regression_prediction_standard_error($p1__115483_SHARP_$$, $x$$);
  });
};
kixi.stats.core.regression_prediction_standard_error.cljs$lang$maxFixedArity = 3;
kixi.stats.core.t_kixi$stats$core115492 = function($fx$$, $fy$$, $sum_squares$$, $meta115493$$) {
  this.fx = $fx$$;
  this.fy = $fy$$;
  this.sum_squares = $sum_squares$$;
  this.meta115493 = $meta115493$$;
  this.cljs$lang$protocol_mask$partition0$ = 393216;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.core.t_kixi$stats$core115492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($_115494$$, $meta115493__$1$$) {
  return new kixi.stats.core.t_kixi$stats$core115492(this.fx, this.fy, this.sum_squares, $meta115493__$1$$);
};
kixi.stats.core.t_kixi$stats$core115492.prototype.cljs$core$IMeta$_meta$arity$1 = function($_115494$$) {
  return this.meta115493;
};
kixi.stats.core.t_kixi$stats$core115492.prototype.kixi$stats$protocols$PDependentWithSignificance$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.core.t_kixi$stats$core115492.prototype.kixi$stats$protocols$PDependentWithSignificance$measure_with_significance$arity$3 = function($_$$, $x$$, $alpha$$) {
  return kixi.stats.estimate.regression_prediction_interval(this.sum_squares, $x$$, $alpha$$);
};
kixi.stats.core.t_kixi$stats$core115492.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, cljs$cst$9793$sum_squares, cljs$cst$9817$meta115493], null);
};
kixi.stats.core.t_kixi$stats$core115492.cljs$lang$type = !0;
kixi.stats.core.t_kixi$stats$core115492.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core115492";
kixi.stats.core.t_kixi$stats$core115492.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.core/t_kixi$stats$core115492");
};
kixi.stats.core.__GT_t_kixi$stats$core115492 = function($fx$$, $fy$$, $sum_squares$$, $meta115493$$) {
  return new kixi.stats.core.t_kixi$stats$core115492($fx$$, $fy$$, $sum_squares$$, $meta115493$$);
};
kixi.stats.core.t_kixi$stats$core115495 = function($fx$$, $fy$$, $alpha$$, $sum_squares$$, $meta115496$$) {
  this.fx = $fx$$;
  this.fy = $fy$$;
  this.alpha = $alpha$$;
  this.sum_squares = $sum_squares$$;
  this.meta115496 = $meta115496$$;
  this.cljs$lang$protocol_mask$partition0$ = 393216;
  this.cljs$lang$protocol_mask$partition1$ = 0;
};
kixi.stats.core.t_kixi$stats$core115495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($_115497$$, $meta115496__$1$$) {
  return new kixi.stats.core.t_kixi$stats$core115495(this.fx, this.fy, this.alpha, this.sum_squares, $meta115496__$1$$);
};
kixi.stats.core.t_kixi$stats$core115495.prototype.cljs$core$IMeta$_meta$arity$1 = function($_115497$$) {
  return this.meta115496;
};
kixi.stats.core.t_kixi$stats$core115495.prototype.kixi$stats$protocols$PDependent$ = $APP.cljs.core.PROTOCOL_SENTINEL;
kixi.stats.core.t_kixi$stats$core115495.prototype.kixi$stats$protocols$PDependent$measure$arity$2 = function($_$$, $x$$) {
  return kixi.stats.estimate.regression_prediction_interval(this.sum_squares, $x$$, this.alpha);
};
kixi.stats.core.t_kixi$stats$core115495.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha, cljs$cst$9793$sum_squares, cljs$cst$9818$meta115496], null);
};
kixi.stats.core.t_kixi$stats$core115495.cljs$lang$type = !0;
kixi.stats.core.t_kixi$stats$core115495.cljs$lang$ctorStr = "kixi.stats.core/t_kixi$stats$core115495";
kixi.stats.core.t_kixi$stats$core115495.cljs$lang$ctorPrWriter = function($this__5310__auto__$$, $writer__5311__auto__$$, $opt__5312__auto__$$) {
  return $APP.cljs.core._write($writer__5311__auto__$$, "kixi.stats.core/t_kixi$stats$core115495");
};
kixi.stats.core.__GT_t_kixi$stats$core115495 = function($fx$$, $fy$$, $alpha$$, $sum_squares$$, $meta115496$$) {
  return new kixi.stats.core.t_kixi$stats$core115495($fx$$, $fy$$, $alpha$$, $sum_squares$$, $meta115496$$);
};
kixi.stats.core.regression_prediction_confidence_interval = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$2 = function($fx$$, $fy$$) {
  return kixi.stats.core.post_complete(kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2($fx$$, $fy$$) : kixi.stats.core.sum_squares.call(null, $fx$$, $fy$$), function($sum_squares$$) {
    return new kixi.stats.core.t_kixi$stats$core115492($fx$$, $fy$$, $sum_squares$$, $APP.cljs.core.PersistentArrayMap.EMPTY);
  });
};
kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$3 = function($fx$$, $fy$$, $alpha$$) {
  return kixi.stats.core.post_complete(kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2($fx$$, $fy$$) : kixi.stats.core.sum_squares.call(null, $fx$$, $fy$$), function($sum_squares$$) {
    return new kixi.stats.core.t_kixi$stats$core115495($fx$$, $fy$$, $alpha$$, $sum_squares$$, $APP.cljs.core.PersistentArrayMap.EMPTY);
  });
};
kixi.stats.core.regression_prediction_confidence_interval.cljs$core$IFn$_invoke$arity$4 = function($fx$$, $fy$$, $alpha$$, $x$$) {
  return kixi.stats.core.post_complete(kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2 ? kixi.stats.core.sum_squares.cljs$core$IFn$_invoke$arity$2($fx$$, $fy$$) : kixi.stats.core.sum_squares.call(null, $fx$$, $fy$$), function($p1__115489_SHARP_$$) {
    return kixi.stats.estimate.regression_prediction_interval($p1__115489_SHARP_$$, $x$$, $alpha$$);
  });
};
kixi.stats.core.regression_prediction_confidence_interval.cljs$lang$maxFixedArity = 4;
kixi.stats.core.chi_squared_test = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$560_argseq__5756__auto__$$ = [], $len__5749__auto___115568$$ = arguments.length, $i__5750__auto___115569$$ = 0;;) {
    if ($i__5750__auto___115569$$ < $len__5749__auto___115568$$) {
      $args__5755__auto__$jscomp$560_argseq__5756__auto__$$.push(arguments[$i__5750__auto___115569$$]), $i__5750__auto___115569$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$560_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$560_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$560_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return kixi.stats.core.chi_squared_test.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$560_argseq__5756__auto__$$);
};
kixi.stats.core.chi_squared_test.cljs$core$IFn$_invoke$arity$variadic = function($fxs$$) {
  return kixi.stats.core.post_complete($APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.cross_tabulate, $fxs$$), kixi.stats.test.chi_squared_test);
};
kixi.stats.core.chi_squared_test.cljs$lang$maxFixedArity = 0;
kixi.stats.core.chi_squared_test.cljs$lang$applyTo = function($seq115498$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq115498$$));
};
kixi.stats.core.simple_t_test = function($map__115500__$1_p__115499$$) {
  $map__115500__$1_p__115499$$ = $APP.cljs.core.__destructure_map($map__115500__$1_p__115499$$);
  var $mu$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115500__$1_p__115499$$, cljs$cst$9766$mu), $sd$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115500__$1_p__115499$$, cljs$cst$9767$sd);
  return $APP.cljs.core.truth_($sd$$) ? $APP.cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.mean, function($c$$) {
    var $s$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c$$, 0, null);
    $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c$$, 1, null);
    return $c$$ === 0 ? null : kixi.stats.test.simple_t_test(new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$9766$mu, $mu$$, cljs$cst$9767$sd, $sd$$], null), new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$9805$mean, $s$$ / $c$$, $APP.cljs$cst$1630$n, $c$$], null));
  }) : $APP.cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance, function($p__115505_ss$$) {
    var $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115505_ss$$, 0, null), $m$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115505_ss$$, 1, null);
    $p__115505_ss$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115505_ss$$, 2, null);
    if ($c$$ === 0) {
      return null;
    }
    var $c_SINGLEQUOTE_$$ = $c$$ - 1;
    return kixi.stats.test.simple_t_test(new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$9766$mu, $mu$$, cljs$cst$9767$sd, kixi.stats.math.sqrt($c_SINGLEQUOTE_$$ > 0 ? $p__115505_ss$$ / $c_SINGLEQUOTE_$$ : 0)], null), new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$9805$mean, $m$$, $APP.cljs$cst$1630$n, $c$$], null));
  });
};
kixi.stats.core.t_test = function($fx$$, $fy$$) {
  return function() {
    var $G__115571$$ = null, $G__115571__0$$ = function() {
      return new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], null);
    }, $G__115571__1$$ = function($p__115510_ssy$$) {
      var $cx$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115510_ssy$$, 0, null), $cy$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115510_ssy$$, 1, null), $mx$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115510_ssy$$, 2, null), $my$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115510_ssy$$, 3, null), $ssx$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115510_ssy$$, 4, null);
      $p__115510_ssy$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115510_ssy$$, 5, null);
      var $cx_SINGLEQUOTE_$$ = $cx$$ - 1, $cy_SINGLEQUOTE_$$ = $cy$$ - 1;
      return $cx_SINGLEQUOTE_$$ > 0 && $cy_SINGLEQUOTE_$$ > 0 ? kixi.stats.test.t_test(new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$9805$mean, $mx$$, cljs$cst$9767$sd, kixi.stats.math.sqrt($ssx$$ / $cx_SINGLEQUOTE_$$), $APP.cljs$cst$1630$n, $cx$$], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$9805$mean, $my$$, cljs$cst$9767$sd, kixi.stats.math.sqrt($p__115510_ssy$$ / $cy_SINGLEQUOTE_$$), $APP.cljs$cst$1630$n, $cy$$], null)) : null;
    }, $G__115571__2$$ = function($cx_SINGLEQUOTE_$$, $e$$) {
      var $cx$jscomp$24_mx_SINGLEQUOTE_$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($cx_SINGLEQUOTE_$$, 0, null), $cy$jscomp$4_cy_SINGLEQUOTE_$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($cx_SINGLEQUOTE_$$, 1, null), $mx$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($cx_SINGLEQUOTE_$$, 2, null), $my$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($cx_SINGLEQUOTE_$$, 3, null), $ssx$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($cx_SINGLEQUOTE_$$, 4, null), $ssy$$ = 
      $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($cx_SINGLEQUOTE_$$, 5, null), $x$$ = function() {
        var $G__115514$$ = $fx$$.cljs$core$IFn$_invoke$arity$1 ? $fx$$.cljs$core$IFn$_invoke$arity$1($e$$) : $fx$$.call(null, $e$$);
        return $G__115514$$ == null ? null : $G__115514$$;
      }(), $y$$ = function() {
        var $G__115515$$ = $fy$$.cljs$core$IFn$_invoke$arity$1 ? $fy$$.cljs$core$IFn$_invoke$arity$1($e$$) : $fy$$.call(null, $e$$);
        return $G__115515$$ == null ? null : $G__115515$$;
      }();
      if ($x$$ == null && $y$$ == null) {
        return $cx_SINGLEQUOTE_$$;
      }
      $cx_SINGLEQUOTE_$$ = $APP.cljs.core.truth_($x$$) ? $cx$jscomp$24_mx_SINGLEQUOTE_$$ + 1 : $cx$jscomp$24_mx_SINGLEQUOTE_$$;
      $cy$jscomp$4_cy_SINGLEQUOTE_$$ = $APP.cljs.core.truth_($y$$) ? $cy$jscomp$4_cy_SINGLEQUOTE_$$ + 1 : $cy$jscomp$4_cy_SINGLEQUOTE_$$;
      $cx$jscomp$24_mx_SINGLEQUOTE_$$ = $APP.cljs.core.truth_($x$$) ? $mx$$ + ($x$$ - $mx$$) / $cx_SINGLEQUOTE_$$ : $mx$$;
      var $my_SINGLEQUOTE_$$ = $APP.cljs.core.truth_($y$$) ? $my$$ + ($y$$ - $my$$) / $cy$jscomp$4_cy_SINGLEQUOTE_$$ : $my$$;
      $mx$$ = $APP.cljs.core.truth_($x$$) ? $ssx$$ + ($x$$ - $cx$jscomp$24_mx_SINGLEQUOTE_$$) * ($x$$ - $mx$$) : $ssx$$;
      $my$$ = $APP.cljs.core.truth_($y$$) ? $ssy$$ + ($y$$ - $my_SINGLEQUOTE_$$) * ($y$$ - $my$$) : $ssy$$;
      return new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$cx_SINGLEQUOTE_$$, $cy$jscomp$4_cy_SINGLEQUOTE_$$, $cx$jscomp$24_mx_SINGLEQUOTE_$$, $my_SINGLEQUOTE_$$, $mx$$, $my$$], null);
    };
    $G__115571$$ = function($p__115509$$, $e$$) {
      switch(arguments.length) {
        case 0:
          return $G__115571__0$$.call(this);
        case 1:
          return $G__115571__1$$.call(this, $p__115509$$);
        case 2:
          return $G__115571__2$$.call(this, $p__115509$$, $e$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $G__115571$$.cljs$core$IFn$_invoke$arity$0 = $G__115571__0$$;
    $G__115571$$.cljs$core$IFn$_invoke$arity$1 = $G__115571__1$$;
    $G__115571$$.cljs$core$IFn$_invoke$arity$2 = $G__115571__2$$;
    return $G__115571$$;
  }();
};
kixi.stats.core.simple_z_test = function($map__115526__$1_p__115525$$) {
  $map__115526__$1_p__115525$$ = $APP.cljs.core.__destructure_map($map__115526__$1_p__115525$$);
  var $mu$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115526__$1_p__115525$$, cljs$cst$9766$mu), $sd$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__115526__$1_p__115525$$, cljs$cst$9767$sd);
  return $APP.cljs.core.truth_($sd$$) ? $APP.cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.mean, function($c$$) {
    var $s$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c$$, 0, null);
    $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($c$$, 1, null);
    return $c$$ === 0 ? null : kixi.stats.test.simple_z_test(new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$9766$mu, $mu$$, cljs$cst$9767$sd, $sd$$], null), new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$9805$mean, $s$$ / $c$$, $APP.cljs$cst$1630$n, $c$$], null));
  }) : $APP.cljs.core.completing.cljs$core$IFn$_invoke$arity$2(kixi.stats.core.variance, function($p__115531_ss$$) {
    var $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115531_ss$$, 0, null), $m$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115531_ss$$, 1, null);
    $p__115531_ss$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115531_ss$$, 2, null);
    if ($c$$ === 0) {
      return null;
    }
    var $c_SINGLEQUOTE_$$ = $c$$ - 1;
    return kixi.stats.test.simple_z_test(new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$9766$mu, $mu$$, cljs$cst$9767$sd, kixi.stats.math.sqrt($c_SINGLEQUOTE_$$ > 0 ? $p__115531_ss$$ / $c_SINGLEQUOTE_$$ : 0)], null), new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$9805$mean, $m$$, $APP.cljs$cst$1630$n, $c$$], null));
  });
};
kixi.stats.core.z_test = function($fx$$, $fy$$) {
  return function() {
    var $G__115572$$ = null, $G__115572__0$$ = function() {
      return new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], null);
    }, $G__115572__1$$ = function($p__115536_ssy$$) {
      var $cx$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115536_ssy$$, 0, null), $cy$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115536_ssy$$, 1, null), $mx$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115536_ssy$$, 2, null), $my$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115536_ssy$$, 3, null), $ssx$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115536_ssy$$, 4, null);
      $p__115536_ssy$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__115536_ssy$$, 5, null);
      var $cx_SINGLEQUOTE_$$ = $cx$$ - 1, $cy_SINGLEQUOTE_$$ = $cy$$ - 1;
      return $cx_SINGLEQUOTE_$$ > 0 && $cy_SINGLEQUOTE_$$ > 0 ? kixi.stats.test.z_test(new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$9805$mean, $mx$$, cljs$cst$9767$sd, kixi.stats.math.sqrt($ssx$$ / $cx_SINGLEQUOTE_$$), $APP.cljs$cst$1630$n, $cx$$], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$9805$mean, $my$$, cljs$cst$9767$sd, kixi.stats.math.sqrt($p__115536_ssy$$ / $cy_SINGLEQUOTE_$$), $APP.cljs$cst$1630$n, $cy$$], null)) : null;
    }, $G__115572__2$$ = function($cx_SINGLEQUOTE_$$, $e$$) {
      var $cx$jscomp$26_mx_SINGLEQUOTE_$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($cx_SINGLEQUOTE_$$, 0, null), $cy$jscomp$6_cy_SINGLEQUOTE_$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($cx_SINGLEQUOTE_$$, 1, null), $mx$jscomp$7_ssx_SINGLEQUOTE_$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($cx_SINGLEQUOTE_$$, 2, null), $my$jscomp$8_ssy_SINGLEQUOTE_$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($cx_SINGLEQUOTE_$$, 3, null), $ssx$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($cx_SINGLEQUOTE_$$, 
      4, null), $ssy$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($cx_SINGLEQUOTE_$$, 5, null), $x$$ = function() {
        var $G__115540$$ = $fx$$.cljs$core$IFn$_invoke$arity$1 ? $fx$$.cljs$core$IFn$_invoke$arity$1($e$$) : $fx$$.call(null, $e$$);
        return $G__115540$$ == null ? null : $G__115540$$;
      }(), $y$$ = function() {
        var $G__115541$$ = $fy$$.cljs$core$IFn$_invoke$arity$1 ? $fy$$.cljs$core$IFn$_invoke$arity$1($e$$) : $fy$$.call(null, $e$$);
        return $G__115541$$ == null ? null : $G__115541$$;
      }();
      if ($x$$ == null && $y$$ == null) {
        return $cx_SINGLEQUOTE_$$;
      }
      $cx_SINGLEQUOTE_$$ = $APP.cljs.core.truth_($x$$) ? $cx$jscomp$26_mx_SINGLEQUOTE_$$ + 1 : $cx$jscomp$26_mx_SINGLEQUOTE_$$;
      $cy$jscomp$6_cy_SINGLEQUOTE_$$ = $APP.cljs.core.truth_($y$$) ? $cy$jscomp$6_cy_SINGLEQUOTE_$$ + 1 : $cy$jscomp$6_cy_SINGLEQUOTE_$$;
      $cx$jscomp$26_mx_SINGLEQUOTE_$$ = $APP.cljs.core.truth_($x$$) ? $mx$jscomp$7_ssx_SINGLEQUOTE_$$ + ($x$$ - $mx$jscomp$7_ssx_SINGLEQUOTE_$$) / $cx_SINGLEQUOTE_$$ : $mx$jscomp$7_ssx_SINGLEQUOTE_$$;
      var $my_SINGLEQUOTE_$$ = $APP.cljs.core.truth_($y$$) ? $my$jscomp$8_ssy_SINGLEQUOTE_$$ + ($y$$ - $my$jscomp$8_ssy_SINGLEQUOTE_$$) / $cy$jscomp$6_cy_SINGLEQUOTE_$$ : $my$jscomp$8_ssy_SINGLEQUOTE_$$;
      $mx$jscomp$7_ssx_SINGLEQUOTE_$$ = $APP.cljs.core.truth_($x$$) ? $ssx$$ + ($x$$ - $cx$jscomp$26_mx_SINGLEQUOTE_$$) * ($x$$ - $mx$jscomp$7_ssx_SINGLEQUOTE_$$) : $ssx$$;
      $my$jscomp$8_ssy_SINGLEQUOTE_$$ = $APP.cljs.core.truth_($y$$) ? $ssy$$ + ($y$$ - $my_SINGLEQUOTE_$$) * ($y$$ - $my$jscomp$8_ssy_SINGLEQUOTE_$$) : $ssy$$;
      return new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$cx_SINGLEQUOTE_$$, $cy$jscomp$6_cy_SINGLEQUOTE_$$, $cx$jscomp$26_mx_SINGLEQUOTE_$$, $my_SINGLEQUOTE_$$, $mx$jscomp$7_ssx_SINGLEQUOTE_$$, $my$jscomp$8_ssy_SINGLEQUOTE_$$], null);
    };
    $G__115572$$ = function($p__115535$$, $e$$) {
      switch(arguments.length) {
        case 0:
          return $G__115572__0$$.call(this);
        case 1:
          return $G__115572__1$$.call(this, $p__115535$$);
        case 2:
          return $G__115572__2$$.call(this, $p__115535$$, $e$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $G__115572$$.cljs$core$IFn$_invoke$arity$0 = $G__115572__0$$;
    $G__115572$$.cljs$core$IFn$_invoke$arity$1 = $G__115572__1$$;
    $G__115572$$.cljs$core$IFn$_invoke$arity$2 = $G__115572__2$$;
    return $G__115572$$;
  }();
};
kixi.stats.core.proportion = function($pred$$) {
  var $arrv$$ = $APP.cljs.core.volatile_BANG_($APP.cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(2));
  return function() {
    var $G__115573$$ = null, $G__115573__1$$ = function($_$jscomp$3000_n$$) {
      var $arr$jscomp$203_d$$ = $APP.cljs.core.deref($arrv$$);
      $_$jscomp$3000_n$$ = $arr$jscomp$203_d$$[0];
      $arr$jscomp$203_d$$ = $arr$jscomp$203_d$$[1];
      return $arr$jscomp$203_d$$ > 0 ? $_$jscomp$3000_n$$ / $arr$jscomp$203_d$$ : null;
    }, $G__115573__2$$ = function($_$jscomp$3001_arr$$, $e$$) {
      $_$jscomp$3001_arr$$ = $APP.cljs.core.deref($arrv$$);
      $APP.cljs.core.truth_($pred$$.cljs$core$IFn$_invoke$arity$1 ? $pred$$.cljs$core$IFn$_invoke$arity$1($e$$) : $pred$$.call(null, $e$$)) && ($_$jscomp$3001_arr$$[0] += 1);
      $_$jscomp$3001_arr$$[1] += 1;
      return $APP.cljs.core.vreset_BANG_($arrv$$, $_$jscomp$3001_arr$$);
    };
    $G__115573$$ = function($_$$, $e$$) {
      switch(arguments.length) {
        case 0:
          return null;
        case 1:
          return $G__115573__1$$.call(this, $_$$);
        case 2:
          return $G__115573__2$$.call(this, $_$$, $e$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $G__115573$$.cljs$core$IFn$_invoke$arity$0 = function() {
      return null;
    };
    $G__115573$$.cljs$core$IFn$_invoke$arity$1 = $G__115573__1$$;
    $G__115573$$.cljs$core$IFn$_invoke$arity$2 = $G__115573__2$$;
    return $G__115573$$;
  }();
};
kixi.stats.core.share = kixi.stats.core.proportion;
kixi.stats.core.min = function() {
  var $kixi$stats$core$min$$ = null, $kixi$stats$core$min__0$$ = function() {
    return kixi.stats.math.infinity;
  }, $kixi$stats$core$min__1$$ = function($acc$$) {
    return kixi.stats.math.infinite_QMARK_($acc$$) ? null : $acc$$;
  }, $kixi$stats$core$min__2$$ = function($acc$$, $e$$) {
    return $e$$ == null ? $acc$$ : $acc$$ < $e$$ ? $acc$$ : $e$$;
  };
  $kixi$stats$core$min$$ = function($acc$$, $e$$) {
    switch(arguments.length) {
      case 0:
        return $kixi$stats$core$min__0$$.call(this);
      case 1:
        return $kixi$stats$core$min__1$$.call(this, $acc$$);
      case 2:
        return $kixi$stats$core$min__2$$.call(this, $acc$$, $e$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $kixi$stats$core$min$$.cljs$core$IFn$_invoke$arity$0 = $kixi$stats$core$min__0$$;
  $kixi$stats$core$min$$.cljs$core$IFn$_invoke$arity$1 = $kixi$stats$core$min__1$$;
  $kixi$stats$core$min$$.cljs$core$IFn$_invoke$arity$2 = $kixi$stats$core$min__2$$;
  return $kixi$stats$core$min$$;
}();
kixi.stats.core.max = function() {
  var $kixi$stats$core$max$$ = null, $kixi$stats$core$max__0$$ = function() {
    return kixi.stats.math.negative_infinity;
  }, $kixi$stats$core$max__1$$ = function($acc$$) {
    return kixi.stats.math.infinite_QMARK_($acc$$) ? null : $acc$$;
  }, $kixi$stats$core$max__2$$ = function($acc$$, $e$$) {
    return $e$$ == null ? $acc$$ : $acc$$ > $e$$ ? $acc$$ : $e$$;
  };
  $kixi$stats$core$max$$ = function($acc$$, $e$$) {
    switch(arguments.length) {
      case 0:
        return $kixi$stats$core$max__0$$.call(this);
      case 1:
        return $kixi$stats$core$max__1$$.call(this, $acc$$);
      case 2:
        return $kixi$stats$core$max__2$$.call(this, $acc$$, $e$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $kixi$stats$core$max$$.cljs$core$IFn$_invoke$arity$0 = $kixi$stats$core$max__0$$;
  $kixi$stats$core$max$$.cljs$core$IFn$_invoke$arity$1 = $kixi$stats$core$max__1$$;
  $kixi$stats$core$max$$.cljs$core$IFn$_invoke$arity$2 = $kixi$stats$core$max__2$$;
  return $kixi$stats$core$max$$;
}();
$APP.scittle.kixi_stats = {};
$APP.scittle.kixi_stats.init = function() {
  return $APP.scittle.core.register_plugin_BANG_(cljs$cst$9819$scittle_DOT_kixi_stats_SLASH_kixi_stats, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$398$namespaces, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$9820$kixi_DOT_stats_DOT_core, $APP.sci.core._copy_ns($APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs.core.with_meta(cljs$cst$9821$__GT_t_kixi$stats$core115495, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$4051$anonymous, !0, $APP.cljs$cst$3758$protocols, 
  new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$9822$kixi_DOT_stats_DOT_protocols_SLASH_PDependent, "null", $APP.cljs$cst$3785$cljs_DOT_core_SLASH_IMeta, "null", $APP.cljs$cst$3800$cljs_DOT_core_SLASH_IWithMeta, "null"], null), null), $APP.cljs$cst$3805$skip_protocol_flag, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$3785$cljs_DOT_core_SLASH_IMeta, "null", $APP.cljs$cst$3800$cljs_DOT_core_SLASH_IWithMeta, 
  "null"], null), null), $APP.cljs$cst$2139$factory, $APP.cljs$cst$2145$positional, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha, cljs$cst$9793$sum_squares, cljs$cst$9818$meta115496], null))), $APP.cljs$cst$256$doc, "Positional factory function for kixi.stats.core/t_kixi$stats$core115495."], null)), 
  $APP.cljs.core.with_meta(cljs$cst$9823$rmse, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9824$fy_hat, cljs$cst$9812$fy], null))), $APP.cljs$cst$256$doc, "Given two functions: (fŷ input) and (fy input), returning\n  the predicted and actual values of y respectively, calculates\n  the root mean squared error of the estimate."], 
  null)), $APP.cljs$cst$2345$variance, $APP.cljs.core.with_meta(cljs$cst$9825$correlation, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null))), $APP.cljs$cst$256$doc, "Given two functions: (fx input) and (fy input), each of which returns a\n  number, estimates the unbiased linear correlation coefficient between fx and\n  fy over inputs. Ignores any records where fx or fy are nil. If there are no\n  records with values for fx and fy, the correlation is nil. See\n  http://mathworld.wolfram.com/CorrelationCoefficient.html."], 
  null)), cljs$cst$9793$sum_squares, $APP.cljs.core.with_meta(cljs$cst$9826$__GT_t_kixi$stats$core115477, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$4051$anonymous, !0, $APP.cljs$cst$3758$protocols, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$3785$cljs_DOT_core_SLASH_IMeta, "null", $APP.cljs$cst$3800$cljs_DOT_core_SLASH_IWithMeta, "null", cljs$cst$9827$kixi_DOT_stats_DOT_protocols_SLASH_PDependentWithSignificance, "null"], 
  null), null), $APP.cljs$cst$3805$skip_protocol_flag, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$3785$cljs_DOT_core_SLASH_IMeta, "null", $APP.cljs$cst$3800$cljs_DOT_core_SLASH_IWithMeta, "null"], null), null), $APP.cljs$cst$2139$factory, $APP.cljs$cst$2145$positional, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [cljs$cst$9811$fx, cljs$cst$9812$fy, cljs$cst$9793$sum_squares, cljs$cst$9814$meta115478], null))), $APP.cljs$cst$256$doc, "Positional factory function for kixi.stats.core/t_kixi$stats$core115477."], null)), cljs$cst$9828$standard_deviation, cljs$cst$9829$variance_s, $APP.cljs$cst$25$count, $APP.cljs.core.with_meta(cljs$cst$9830$__GT_t_kixi$stats$core115471, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$4051$anonymous, !0, $APP.cljs$cst$3758$protocols, new $APP.cljs.core.PersistentHashSet(null, 
  new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$9822$kixi_DOT_stats_DOT_protocols_SLASH_PDependent, "null", $APP.cljs$cst$3785$cljs_DOT_core_SLASH_IMeta, "null", $APP.cljs$cst$3800$cljs_DOT_core_SLASH_IWithMeta, "null"], null), null), $APP.cljs$cst$3805$skip_protocol_flag, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$3785$cljs_DOT_core_SLASH_IMeta, "null", $APP.cljs$cst$3800$cljs_DOT_core_SLASH_IWithMeta, "null"], null), null), 
  $APP.cljs$cst$2139$factory, $APP.cljs$cst$2145$positional, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, cljs$cst$9793$sum_squares, cljs$cst$9813$meta115472], null))), $APP.cljs$cst$256$doc, "Positional factory function for kixi.stats.core/t_kixi$stats$core115471."], null)), $APP.cljs.core.with_meta(cljs$cst$9831$__GT_t_kixi$stats$core115288, 
  new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$4051$anonymous, !0, $APP.cljs$cst$3758$protocols, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$9832$kixi_DOT_stats_DOT_protocols_SLASH_PContingencyTable, "null", $APP.cljs$cst$3785$cljs_DOT_core_SLASH_IMeta, "null", $APP.cljs$cst$3800$cljs_DOT_core_SLASH_IWithMeta, "null"], null), null), $APP.cljs$cst$3805$skip_protocol_flag, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$3785$cljs_DOT_core_SLASH_IMeta, "null", $APP.cljs$cst$3800$cljs_DOT_core_SLASH_IWithMeta, "null"], null), null), $APP.cljs$cst$2139$factory, $APP.cljs$cst$2145$positional, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 10, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9806$vec__115285, $APP.cljs$cst$8987$cells, cljs$cst$9807$fxs, $APP.cljs$cst$2483$n, $APP.cljs$cst$1485$k, $APP.cljs$cst$689$inc, 
  cljs$cst$9808$p__115270, cljs$cst$9809$margins, $APP.cljs$cst$52$f, cljs$cst$9810$meta115289], null))), $APP.cljs$cst$256$doc, "Positional factory function for kixi.stats.core/t_kixi$stats$core115288."], null)), $APP.cljs.core.with_meta(cljs$cst$9833$cross_tabulate, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$148$_AMPERSAND_, cljs$cst$9807$fxs], null))), $APP.cljs$cst$256$doc, "Given a sequence of n functions, each of which returns a categorical value\n  (e.g. keyword or string) of a factor, calculates an n-dimensional contingency table\n  implementing PContingencyTable. This can be passed to kixi.stats.test/chi-squared-test\n  to determine if the relationship between factors is significant.\n  See also: kixi.stats.core/chi-squared-test", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 
  6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 0, $APP.cljs$cst$1379$max_fixed_arity, 0, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list(cljs$cst$9807$fxs)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, cljs$cst$9807$fxs], null)), $APP.cljs$cst$1381$arglists_meta, 
  $APP.cljs.core.list(null)], null)], null)), cljs$cst$9834$mean, $APP.cljs.core.with_meta(cljs$cst$9835$cramers_v, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null))), $APP.cljs$cst$256$doc, "Cramer's Phi is the intercorrelation of two discrete variables and may be used with variables having two or more levels. It gives a value between 0 and +1 (inclusive).\n  Given two functions: (fx input) and (fy input), each of which returns a the relevant discrete value."], 
  null)), cljs$cst$9836$skewness_p, $APP.cljs.core.with_meta(cljs$cst$9837$simple_z_test, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9756$mu, 
  cljs$cst$9757$sd], null)], null)], null))), $APP.cljs$cst$256$doc, "Performs a simple z test against a specified population mean\n  and standard deviation. The standard deviation is optional,\n  if not provided, a 'plug-in' test using the sample's sd\n  will be performed instead.\n  mu: the population mean\n  sd: (optional) the population standard deviation"], null)), $APP.cljs.core.with_meta(cljs$cst$9838$regression_prediction_confidence_interval, new $APP.cljs.core.PersistentArrayMap(null, 3, 
  [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, 
  cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha, $APP.cljs$cst$1237$x], null))), $APP.cljs$cst$256$doc, "Given two functions: (fx input) and (fy input), each of which returns a\n  number, and an x value, calculates the standard error of the least\n  squares linear model of fx and fy over inputs.\n  Returns a reified kixi.stats.protocols/PDependent if alpha is supplied,\n  or a reified kixi.stats.protocols/PDependentWithSignificance otherwise.\n  Ignores any records with fx or fy are nil. If there are no records with\n  values for fx and fy, the standard error of the estimate is nil.", 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 4, $APP.cljs$cst$1379$max_fixed_arity, 4, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null), new $APP.cljs.core.PersistentVector(null, 3, 5, 
  $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha, $APP.cljs$cst$1237$x], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null), new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha, $APP.cljs$cst$1237$x], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null, null)], null)], null)), cljs$cst$9839$share, $APP.cljs.core.with_meta(cljs$cst$9840$covariance_p, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null))), $APP.cljs$cst$256$doc, "Given two functions of an input `(fx input)` and `(fy input)`, each of which\n  returns a number, estimates the population covariance of those functions over\n  inputs.\n\n  Ignores any inputs where `(fx input)` or `(fy input)` are nil. If no\n  inputs have both x and y, returns nil."], 
  null)), $APP.cljs.core.with_meta(cljs$cst$9841$covariance_matrix, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2441$kvs], null))), $APP.cljs$cst$256$doc, "Given a map of key names to functions that extract values for those keys\n  from an input, computes the covariance for each of the n^2 key pairs.\n  For example:\n\n      (covariance-matrix {:name-length #(.length (:name %))\n                          :age         :age\n                          :num-cats    (comp count :cats)})\n\n  will, when reduced, return a map like:\n\n      {[:name-length :age]      0.56\n       [:name-length :num-cats] 0.95\n       ...}"], 
  null)), $APP.cljs.core.with_meta(cljs$cst$9842$mse, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9824$fy_hat, cljs$cst$9812$fy], null))), $APP.cljs$cst$256$doc, "Given two functions: (fŷ input) and (fy input), returning\n  the predicted and actual values of y respectively, calculates\n  the mean squared error of the estimate."], 
  null)), $APP.cljs.core.with_meta(cljs$cst$9843$z_test, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null))), $APP.cljs$cst$256$doc, "Given two functions of an input `(fx input)` and `(fy input)`, each of which\n  returns a number, performs the z-test of mean significance of those functions over\n  inputs.\n\n  Ignores only inputs where both `(fx input)` and `(fy input)` are nil."], 
  null)), $APP.cljs.core.with_meta(cljs$cst$9844$covariance_s, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null))), $APP.cljs$cst$256$doc, "Given two functions of an input `(fx input)` and `(fy input)`, each of which\n  returns a number, estimates the unbiased covariance of those functions over\n  inputs.\n\n  Ignores any inputs where `(fx input)` or `(fy input)` are nil. If no\n  inputs have both x and y, returns nil."], 
  null)), $APP.cljs$cst$651$min, $APP.cljs.core.with_meta(cljs$cst$9845$__GT_t_kixi$stats$core115480, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$4051$anonymous, !0, $APP.cljs$cst$3758$protocols, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$9822$kixi_DOT_stats_DOT_protocols_SLASH_PDependent, "null", $APP.cljs$cst$3785$cljs_DOT_core_SLASH_IMeta, "null", $APP.cljs$cst$3800$cljs_DOT_core_SLASH_IWithMeta, "null"], null), null), 
  $APP.cljs$cst$3805$skip_protocol_flag, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$3785$cljs_DOT_core_SLASH_IMeta, "null", $APP.cljs$cst$3800$cljs_DOT_core_SLASH_IWithMeta, "null"], null), null), $APP.cljs$cst$2139$factory, $APP.cljs$cst$2145$positional, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha, cljs$cst$9793$sum_squares, cljs$cst$9815$meta115481], null))), $APP.cljs$cst$256$doc, "Positional factory function for kixi.stats.core/t_kixi$stats$core115480."], null)), cljs$cst$9846$skewness_s, cljs$cst$9847$standard_error, cljs$cst$9848$kurtosis_p, $APP.cljs.core.with_meta(cljs$cst$9849$chi_squared_test, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, cljs$cst$9807$fxs], null))), $APP.cljs$cst$256$doc, "Given a sequence of functions, each of which returns the categorical value\n  (e.g. keyword or string) of a factor, performs a X^2 test of independence.", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 0, $APP.cljs$cst$1379$max_fixed_arity, 0, $APP.cljs$cst$1380$method_params, 
  new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list(cljs$cst$9807$fxs)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, cljs$cst$9807$fxs], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$9850$__GT_t_kixi$stats$core115486, new $APP.cljs.core.PersistentArrayMap(null, 
  6, [$APP.cljs$cst$4051$anonymous, !0, $APP.cljs$cst$3758$protocols, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$9822$kixi_DOT_stats_DOT_protocols_SLASH_PDependent, "null", $APP.cljs$cst$3785$cljs_DOT_core_SLASH_IMeta, "null", $APP.cljs$cst$3800$cljs_DOT_core_SLASH_IWithMeta, "null"], null), null), $APP.cljs$cst$3805$skip_protocol_flag, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$3785$cljs_DOT_core_SLASH_IMeta, 
  "null", $APP.cljs$cst$3800$cljs_DOT_core_SLASH_IWithMeta, "null"], null), null), $APP.cljs$cst$2139$factory, $APP.cljs$cst$2145$positional, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, cljs$cst$9793$sum_squares, cljs$cst$9816$meta115487], null))), $APP.cljs$cst$256$doc, "Positional factory function for kixi.stats.core/t_kixi$stats$core115486."], 
  null)), $APP.cljs.core.with_meta(cljs$cst$9851$proportion, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1244$pred], null))), $APP.cljs$cst$256$doc, "Calculate the proportion of inputs for which `pred` returns true."], null)), $APP.cljs.core.with_meta(cljs$cst$9852$adjusted_r_squared, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9824$fy_hat, cljs$cst$9812$fy, $APP.cljs$cst$1485$k], null))), $APP.cljs$cst$256$doc, "Given two functions: (fŷ input) and (fy input), returning\n  the predicted and actual values of y respectively, and a constant k\n  equal to the number of terms in the model, estimates the adjusted\n  coefficient of determination R^2 using Wherry's Formula-1.\n  This is the fraction of variance in y explained by the model,\n  adjusted for the number of terms in the model.\n  https://stats.stackexchange.com/questions/48703/what-is-the-adjusted-r-squared-formula-in-lm-in-r-and-how-should-it-be-interpret"], 
  null)), cljs$cst$9853$variance_p, $APP.cljs$cst$695$max, $APP.cljs.core.with_meta(cljs$cst$9854$monoid, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f, $APP.cljs$cst$1263$init], null))), $APP.cljs$cst$256$doc, "Add 0-arity returning `init` to `f`."], null)), $APP.cljs.core.with_meta(cljs$cst$9855$__GT_t_kixi$stats$core115492, 
  new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$4051$anonymous, !0, $APP.cljs$cst$3758$protocols, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$3785$cljs_DOT_core_SLASH_IMeta, "null", $APP.cljs$cst$3800$cljs_DOT_core_SLASH_IWithMeta, "null", cljs$cst$9827$kixi_DOT_stats_DOT_protocols_SLASH_PDependentWithSignificance, "null"], null), null), $APP.cljs$cst$3805$skip_protocol_flag, new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$3785$cljs_DOT_core_SLASH_IMeta, "null", $APP.cljs$cst$3800$cljs_DOT_core_SLASH_IWithMeta, "null"], null), null), $APP.cljs$cst$2139$factory, $APP.cljs$cst$2145$positional, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, cljs$cst$9793$sum_squares, cljs$cst$9817$meta115493], null))), $APP.cljs$cst$256$doc, "Positional factory function for kixi.stats.core/t_kixi$stats$core115492."], 
  null)), cljs$cst$9856$standard_deviation_s, cljs$cst$9857$kurtosis, $APP.cljs.core.with_meta(cljs$cst$9858$correlation_matrix, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2441$kvs], null))), $APP.cljs$cst$256$doc, "Given a map of key names to functions that extract values for those keys\n  from an input, computes the correlation for each of the n^2 key pairs.\n  For example:\n\n      (correlation-matrix {:name-length #(.length (:name %))\n                           :age         :age\n                           :num-cats    (comp count :cats)})\n\n  will, when reduced, return a map like:\n\n      {[:name-length :age]      0.56\n       [:name-length :num-cats] 0.95\n       ...}"], 
  null)), cljs$cst$9859$kurtosis_s, $APP.cljs.core.with_meta(cljs$cst$9860$r_squared, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9824$fy_hat, cljs$cst$9812$fy], null))), $APP.cljs$cst$256$doc, "Given two functions: (fŷ input) and (fy input), returning\n  the predicted and actual values of y respectively, estimates\n  the coefficient of determination R^2.\n  This is the fraction of variance in y explained by the model."], 
  null)), cljs$cst$9861$arithmetic_mean, cljs$cst$9862$skewness, $APP.cljs.core.with_meta(cljs$cst$9863$regression_prediction_standard_error, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$1237$x], null))), $APP.cljs$cst$256$doc, "Given two functions: (fx input) and (fy input), each of which returns a\n  number, and an x value, calculates the standard error of the least\n  squares linear model of fx and fy over inputs.\n  Returns a reified kixi.stats.protocols/PDependent.\n  Ignores any records with fx or fy are nil. If there are no records with\n  values for fx and fy, the standard error of the estimate is nil.", $APP.cljs$cst$1377$top_fn, 
  new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$1237$x], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$1237$x], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), 
  cljs$cst$9864$harmonic_mean, cljs$cst$9865$standard_deviation_p, cljs$cst$9866$covariance, $APP.cljs.core.with_meta(cljs$cst$9867$simple_linear_regression, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null))), $APP.cljs$cst$256$doc, "Given two functions: (fx input) and (fy input), each of which returns a\n  number, calculates a least squares linear model between fx and fy over inputs.\n  Returns a reified kixi.stats.protocols/PParamaterised.\n  Ignores any records with fx or fy are nil. If there are no records with\n  values for fx and fy, the linear relationship is nil. See\n  https://en.wikipedia.org/wiki/Simple_linear_regression."], 
  null)), $APP.cljs.core.with_meta(cljs$cst$9868$simple_t_test, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9756$mu, cljs$cst$9757$sd], 
  null)], null)], null))), $APP.cljs$cst$256$doc, "Performs a simple t test against a specified population mean\n  and standard deviation. The standard deviation is optional,\n  if not provided, a 'plug-in' test using the sample's sd\n  will be performed instead.\n  mu: the population mean\n  sd: (optional) the population standard deviation"], null)), $APP.cljs.core.with_meta(cljs$cst$9869$regression_standard_error, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$1237$x], null))), $APP.cljs$cst$256$doc, "Given two functions: (fx input) and (fy input), each of which returns a\n  number, and an x value, calculates the standard error of the least\n  squares linear model of fx and fy over inputs.\n  Returns a reified kixi.stats.protocols/PDependent.\n  Ignores any records with fx or fy are nil. If there are no records with\n  values for fx and fy, the standard error of the estimate is nil.", 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null), new $APP.cljs.core.PersistentVector(null, 3, 5, 
  $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$1237$x], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$1237$x], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, 
  null)], null)], null)), cljs$cst$9870$standard_error_s, cljs$cst$9871$geometric_mean, $APP.cljs.core.with_meta(cljs$cst$9872$t_test, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null))), $APP.cljs$cst$256$doc, "Given two functions of an input `(fx input)` and `(fy input)`, each of which\n  returns a number, performs the t test of mean significance of those functions over\n  inputs.\n  Ignores only inputs where both `(fx input)` and `(fy input)` are nil."], 
  null)), $APP.cljs.core.with_meta(cljs$cst$9873$regression_confidence_interval, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha], 
  null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha, $APP.cljs$cst$1237$x], null))), $APP.cljs$cst$256$doc, "Given two functions: (fx input) and (fy input), each of which returns a\n  number, and an x value, calculates the standard error of the least\n  squares linear model of fx and fy over inputs.\n  Returns a reified kixi.stats.protocols/PDependent if alpha is supplied,\n  or a reified kixi.stats.protocols/PDependentWithSignificance otherwise.\n  Ignores any records with fx or fy are nil. If there are no records with\n  values for fx and fy, the standard error of the estimate is nil.", 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 4, $APP.cljs$cst$1379$max_fixed_arity, 4, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null), new $APP.cljs.core.PersistentVector(null, 3, 5, 
  $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha, $APP.cljs$cst$1237$x], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null), new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha, $APP.cljs$cst$1237$x], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null, null)], null)], null))], [new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9874$kixi_DOT_stats_DOT_core_SLASH___GT_t_kixi$stats$core115495, 
  $APP.cljs$cst$108$val, kixi.stats.core.__GT_t_kixi$stats$core115495, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha, cljs$cst$9793$sum_squares, cljs$cst$9818$meta115496], null)), $APP.cljs$cst$256$doc, "Positional factory function for kixi.stats.core/t_kixi$stats$core115495."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9875$kixi_DOT_stats_DOT_core_SLASH_rmse, $APP.cljs$cst$108$val, kixi.stats.core.rmse, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9824$fy_hat, cljs$cst$9812$fy], null)), $APP.cljs$cst$256$doc, "Given two functions: (fŷ input) and (fy input), returning\n  the predicted and actual values of y respectively, calculates\n  the root mean squared error of the estimate."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9876$kixi_DOT_stats_DOT_core_SLASH_variance, $APP.cljs$cst$108$val, kixi.stats.core.variance, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9877$kixi_DOT_stats_DOT_core_SLASH_correlation, $APP.cljs$cst$108$val, kixi.stats.core.correlation, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null)), $APP.cljs$cst$256$doc, "Given two functions: (fx input) and (fy input), each of which returns a\n  number, estimates the unbiased linear correlation coefficient between fx and\n  fy over inputs. Ignores any records where fx or fy are nil. If there are no\n  records with values for fx and fy, the correlation is nil. See\n  http://mathworld.wolfram.com/CorrelationCoefficient.html."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9878$kixi_DOT_stats_DOT_core_SLASH_sum_squares, $APP.cljs$cst$108$val, kixi.stats.core.sum_squares, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9879$kixi_DOT_stats_DOT_core_SLASH___GT_t_kixi$stats$core115477, $APP.cljs$cst$108$val, kixi.stats.core.__GT_t_kixi$stats$core115477, $APP.cljs$cst$2$meta, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, cljs$cst$9793$sum_squares, cljs$cst$9814$meta115478], null)), $APP.cljs$cst$256$doc, "Positional factory function for kixi.stats.core/t_kixi$stats$core115477."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9880$kixi_DOT_stats_DOT_core_SLASH_standard_deviation, 
  $APP.cljs$cst$108$val, kixi.stats.core.standard_deviation, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9881$kixi_DOT_stats_DOT_core_SLASH_variance_s, $APP.cljs$cst$108$val, kixi.stats.core.variance_s, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9882$kixi_DOT_stats_DOT_core_SLASH_count, 
  $APP.cljs$cst$108$val, kixi.stats.core.count, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9883$kixi_DOT_stats_DOT_core_SLASH___GT_t_kixi$stats$core115471, $APP.cljs$cst$108$val, kixi.stats.core.__GT_t_kixi$stats$core115471, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [cljs$cst$9811$fx, cljs$cst$9812$fy, cljs$cst$9793$sum_squares, cljs$cst$9813$meta115472], null)), $APP.cljs$cst$256$doc, "Positional factory function for kixi.stats.core/t_kixi$stats$core115471."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9884$kixi_DOT_stats_DOT_core_SLASH___GT_t_kixi$stats$core115288, $APP.cljs$cst$108$val, kixi.stats.core.__GT_t_kixi$stats$core115288, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 10, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9806$vec__115285, $APP.cljs$cst$8987$cells, cljs$cst$9807$fxs, $APP.cljs$cst$2483$n, $APP.cljs$cst$1485$k, $APP.cljs$cst$689$inc, cljs$cst$9808$p__115270, cljs$cst$9809$margins, $APP.cljs$cst$52$f, cljs$cst$9810$meta115289], null)), $APP.cljs$cst$256$doc, "Positional factory function for kixi.stats.core/t_kixi$stats$core115288."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 
  3, [$APP.cljs$cst$272$name, cljs$cst$9885$kixi_DOT_stats_DOT_core_SLASH_cross_tabulate, $APP.cljs$cst$108$val, kixi.stats.core.cross_tabulate, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, cljs$cst$9807$fxs], null)), $APP.cljs$cst$256$doc, "Given a sequence of n functions, each of which returns a categorical value\n  (e.g. keyword or string) of a factor, calculates an n-dimensional contingency table\n  implementing PContingencyTable. This can be passed to kixi.stats.test/chi-squared-test\n  to determine if the relationship between factors is significant.\n  See also: kixi.stats.core/chi-squared-test"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9886$kixi_DOT_stats_DOT_core_SLASH_mean, $APP.cljs$cst$108$val, kixi.stats.core.mean, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9887$kixi_DOT_stats_DOT_core_SLASH_cramers_v, $APP.cljs$cst$108$val, kixi.stats.core.cramers_v, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, 
  [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null)), $APP.cljs$cst$256$doc, "Cramer's Phi is the intercorrelation of two discrete variables and may be used with variables having two or more levels. It gives a value between 0 and +1 (inclusive).\n  Given two functions: (fx input) and (fy input), each of which returns a the relevant discrete value."], null)], null), 
  new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9888$kixi_DOT_stats_DOT_core_SLASH_skewness_p, $APP.cljs$cst$108$val, kixi.stats.core.skewness_p, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9889$kixi_DOT_stats_DOT_core_SLASH_simple_z_test, $APP.cljs$cst$108$val, kixi.stats.core.simple_z_test, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9756$mu, cljs$cst$9757$sd], null)], null)], null)), $APP.cljs$cst$256$doc, "Performs a simple z test against a specified population mean\n  and standard deviation. The standard deviation is optional,\n  if not provided, a 'plug-in' test using the sample's sd\n  will be performed instead.\n  mu: the population mean\n  sd: (optional) the population standard deviation"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9890$kixi_DOT_stats_DOT_core_SLASH_regression_prediction_confidence_interval, $APP.cljs$cst$108$val, kixi.stats.core.regression_prediction_confidence_interval, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], 
  null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha, $APP.cljs$cst$1237$x], null)), $APP.cljs$cst$256$doc, "Given two functions: (fx input) and (fy input), each of which returns a\n  number, and an x value, calculates the standard error of the least\n  squares linear model of fx and fy over inputs.\n  Returns a reified kixi.stats.protocols/PDependent if alpha is supplied,\n  or a reified kixi.stats.protocols/PDependentWithSignificance otherwise.\n  Ignores any records with fx or fy are nil. If there are no records with\n  values for fx and fy, the standard error of the estimate is nil."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9891$kixi_DOT_stats_DOT_core_SLASH_share, $APP.cljs$cst$108$val, kixi.stats.core.share, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9892$kixi_DOT_stats_DOT_core_SLASH_covariance_p, $APP.cljs$cst$108$val, kixi.stats.core.covariance_p, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null)), $APP.cljs$cst$256$doc, "Given two functions of an input `(fx input)` and `(fy input)`, each of which\n  returns a number, estimates the population covariance of those functions over\n  inputs.\n\n  Ignores any inputs where `(fx input)` or `(fy input)` are nil. If no\n  inputs have both x and y, returns nil."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9893$kixi_DOT_stats_DOT_core_SLASH_covariance_matrix, $APP.cljs$cst$108$val, kixi.stats.core.covariance_matrix, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2441$kvs], null)), $APP.cljs$cst$256$doc, "Given a map of key names to functions that extract values for those keys\n  from an input, computes the covariance for each of the n^2 key pairs.\n  For example:\n\n      (covariance-matrix {:name-length #(.length (:name %))\n                          :age         :age\n                          :num-cats    (comp count :cats)})\n\n  will, when reduced, return a map like:\n\n      {[:name-length :age]      0.56\n       [:name-length :num-cats] 0.95\n       ...}"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9894$kixi_DOT_stats_DOT_core_SLASH_mse, $APP.cljs$cst$108$val, kixi.stats.core.mse, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9824$fy_hat, cljs$cst$9812$fy], null)), $APP.cljs$cst$256$doc, "Given two functions: (fŷ input) and (fy input), returning\n  the predicted and actual values of y respectively, calculates\n  the mean squared error of the estimate."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9895$kixi_DOT_stats_DOT_core_SLASH_z_test, $APP.cljs$cst$108$val, kixi.stats.core.z_test, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null)), $APP.cljs$cst$256$doc, "Given two functions of an input `(fx input)` and `(fy input)`, each of which\n  returns a number, performs the z-test of mean significance of those functions over\n  inputs.\n\n  Ignores only inputs where both `(fx input)` and `(fy input)` are nil."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9896$kixi_DOT_stats_DOT_core_SLASH_covariance_s, $APP.cljs$cst$108$val, kixi.stats.core.covariance_s, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null)), $APP.cljs$cst$256$doc, "Given two functions of an input `(fx input)` and `(fy input)`, each of which\n  returns a number, estimates the unbiased covariance of those functions over\n  inputs.\n\n  Ignores any inputs where `(fx input)` or `(fy input)` are nil. If no\n  inputs have both x and y, returns nil."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9897$kixi_DOT_stats_DOT_core_SLASH_min, $APP.cljs$cst$108$val, kixi.stats.core.min, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9898$kixi_DOT_stats_DOT_core_SLASH___GT_t_kixi$stats$core115480, $APP.cljs$cst$108$val, kixi.stats.core.__GT_t_kixi$stats$core115480, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha, cljs$cst$9793$sum_squares, cljs$cst$9815$meta115481], null)), $APP.cljs$cst$256$doc, "Positional factory function for kixi.stats.core/t_kixi$stats$core115480."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9899$kixi_DOT_stats_DOT_core_SLASH_skewness_s, 
  $APP.cljs$cst$108$val, kixi.stats.core.skewness_s, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9900$kixi_DOT_stats_DOT_core_SLASH_standard_error, $APP.cljs$cst$108$val, kixi.stats.core.standard_error, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9901$kixi_DOT_stats_DOT_core_SLASH_kurtosis_p, 
  $APP.cljs$cst$108$val, kixi.stats.core.kurtosis_p, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9902$kixi_DOT_stats_DOT_core_SLASH_chi_squared_test, $APP.cljs$cst$108$val, kixi.stats.core.chi_squared_test, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$148$_AMPERSAND_, cljs$cst$9807$fxs], null)), $APP.cljs$cst$256$doc, "Given a sequence of functions, each of which returns the categorical value\n  (e.g. keyword or string) of a factor, performs a X^2 test of independence."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9903$kixi_DOT_stats_DOT_core_SLASH___GT_t_kixi$stats$core115486, $APP.cljs$cst$108$val, kixi.stats.core.__GT_t_kixi$stats$core115486, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, cljs$cst$9793$sum_squares, cljs$cst$9816$meta115487], null)), $APP.cljs$cst$256$doc, "Positional factory function for kixi.stats.core/t_kixi$stats$core115486."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9904$kixi_DOT_stats_DOT_core_SLASH_proportion, $APP.cljs$cst$108$val, 
  kixi.stats.core.proportion, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1244$pred], null)), $APP.cljs$cst$256$doc, "Calculate the proportion of inputs for which `pred` returns true."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9905$kixi_DOT_stats_DOT_core_SLASH_adjusted_r_squared, 
  $APP.cljs$cst$108$val, kixi.stats.core.adjusted_r_squared, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9824$fy_hat, cljs$cst$9812$fy, $APP.cljs$cst$1485$k], null)), $APP.cljs$cst$256$doc, "Given two functions: (fŷ input) and (fy input), returning\n  the predicted and actual values of y respectively, and a constant k\n  equal to the number of terms in the model, estimates the adjusted\n  coefficient of determination R^2 using Wherry's Formula-1.\n  This is the fraction of variance in y explained by the model,\n  adjusted for the number of terms in the model.\n  https://stats.stackexchange.com/questions/48703/what-is-the-adjusted-r-squared-formula-in-lm-in-r-and-how-should-it-be-interpret"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9906$kixi_DOT_stats_DOT_core_SLASH_variance_p, $APP.cljs$cst$108$val, kixi.stats.core.variance_p, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9907$kixi_DOT_stats_DOT_core_SLASH_max, $APP.cljs$cst$108$val, kixi.stats.core.max, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), 
  new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9908$kixi_DOT_stats_DOT_core_SLASH_monoid, $APP.cljs$cst$108$val, kixi.stats.core.monoid, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f, $APP.cljs$cst$1263$init], null)), $APP.cljs$cst$256$doc, "Add 0-arity returning `init` to `f`."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9909$kixi_DOT_stats_DOT_core_SLASH___GT_t_kixi$stats$core115492, $APP.cljs$cst$108$val, kixi.stats.core.__GT_t_kixi$stats$core115492, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, cljs$cst$9793$sum_squares, 
  cljs$cst$9817$meta115493], null)), $APP.cljs$cst$256$doc, "Positional factory function for kixi.stats.core/t_kixi$stats$core115492."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9910$kixi_DOT_stats_DOT_core_SLASH_standard_deviation_s, $APP.cljs$cst$108$val, kixi.stats.core.standard_deviation_s, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9911$kixi_DOT_stats_DOT_core_SLASH_kurtosis, 
  $APP.cljs$cst$108$val, kixi.stats.core.kurtosis, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9912$kixi_DOT_stats_DOT_core_SLASH_correlation_matrix, $APP.cljs$cst$108$val, kixi.stats.core.correlation_matrix, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2441$kvs], null)), $APP.cljs$cst$256$doc, "Given a map of key names to functions that extract values for those keys\n  from an input, computes the correlation for each of the n^2 key pairs.\n  For example:\n\n      (correlation-matrix {:name-length #(.length (:name %))\n                           :age         :age\n                           :num-cats    (comp count :cats)})\n\n  will, when reduced, return a map like:\n\n      {[:name-length :age]      0.56\n       [:name-length :num-cats] 0.95\n       ...}"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9913$kixi_DOT_stats_DOT_core_SLASH_kurtosis_s, $APP.cljs$cst$108$val, kixi.stats.core.kurtosis_s, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9914$kixi_DOT_stats_DOT_core_SLASH_r_squared, $APP.cljs$cst$108$val, kixi.stats.core.r_squared, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9824$fy_hat, cljs$cst$9812$fy], null)), $APP.cljs$cst$256$doc, "Given two functions: (fŷ input) and (fy input), returning\n  the predicted and actual values of y respectively, estimates\n  the coefficient of determination R^2.\n  This is the fraction of variance in y explained by the model."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 
  3, [$APP.cljs$cst$272$name, cljs$cst$9915$kixi_DOT_stats_DOT_core_SLASH_arithmetic_mean, $APP.cljs$cst$108$val, kixi.stats.core.arithmetic_mean, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9916$kixi_DOT_stats_DOT_core_SLASH_skewness, $APP.cljs$cst$108$val, kixi.stats.core.skewness, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 
  3, [$APP.cljs$cst$272$name, cljs$cst$9917$kixi_DOT_stats_DOT_core_SLASH_regression_prediction_standard_error, $APP.cljs$cst$108$val, kixi.stats.core.regression_prediction_standard_error, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$1237$x], null)), $APP.cljs$cst$256$doc, "Given two functions: (fx input) and (fy input), each of which returns a\n  number, and an x value, calculates the standard error of the least\n  squares linear model of fx and fy over inputs.\n  Returns a reified kixi.stats.protocols/PDependent.\n  Ignores any records with fx or fy are nil. If there are no records with\n  values for fx and fy, the standard error of the estimate is nil."], null)], null), 
  new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9918$kixi_DOT_stats_DOT_core_SLASH_harmonic_mean, $APP.cljs$cst$108$val, kixi.stats.core.harmonic_mean, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9919$kixi_DOT_stats_DOT_core_SLASH_standard_deviation_p, $APP.cljs$cst$108$val, kixi.stats.core.standard_deviation_p, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], 
  null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9920$kixi_DOT_stats_DOT_core_SLASH_covariance, $APP.cljs$cst$108$val, kixi.stats.core.covariance, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9921$kixi_DOT_stats_DOT_core_SLASH_simple_linear_regression, $APP.cljs$cst$108$val, kixi.stats.core.simple_linear_regression, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null)), $APP.cljs$cst$256$doc, "Given two functions: (fx input) and (fy input), each of which returns a\n  number, calculates a least squares linear model between fx and fy over inputs.\n  Returns a reified kixi.stats.protocols/PParamaterised.\n  Ignores any records with fx or fy are nil. If there are no records with\n  values for fx and fy, the linear relationship is nil. See\n  https://en.wikipedia.org/wiki/Simple_linear_regression."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9922$kixi_DOT_stats_DOT_core_SLASH_simple_t_test, $APP.cljs$cst$108$val, kixi.stats.core.simple_t_test, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9756$mu, cljs$cst$9757$sd], null)], null)], null)), $APP.cljs$cst$256$doc, "Performs a simple t test against a specified population mean\n  and standard deviation. The standard deviation is optional,\n  if not provided, a 'plug-in' test using the sample's sd\n  will be performed instead.\n  mu: the population mean\n  sd: (optional) the population standard deviation"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
  cljs$cst$9923$kixi_DOT_stats_DOT_core_SLASH_regression_standard_error, $APP.cljs$cst$108$val, kixi.stats.core.regression_standard_error, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, 
  cljs$cst$9812$fy, $APP.cljs$cst$1237$x], null)), $APP.cljs$cst$256$doc, "Given two functions: (fx input) and (fy input), each of which returns a\n  number, and an x value, calculates the standard error of the least\n  squares linear model of fx and fy over inputs.\n  Returns a reified kixi.stats.protocols/PDependent.\n  Ignores any records with fx or fy are nil. If there are no records with\n  values for fx and fy, the standard error of the estimate is nil."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 
  3, [$APP.cljs$cst$272$name, cljs$cst$9924$kixi_DOT_stats_DOT_core_SLASH_standard_error_s, $APP.cljs$cst$108$val, kixi.stats.core.standard_error_s, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9925$kixi_DOT_stats_DOT_core_SLASH_geometric_mean, $APP.cljs$cst$108$val, kixi.stats.core.geometric_mean, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 
  3, [$APP.cljs$cst$272$name, cljs$cst$9926$kixi_DOT_stats_DOT_core_SLASH_t_test, $APP.cljs$cst$108$val, kixi.stats.core.t_test, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null)), $APP.cljs$cst$256$doc, "Given two functions of an input `(fx input)` and `(fy input)`, each of which\n  returns a number, performs the t test of mean significance of those functions over\n  inputs.\n  Ignores only inputs where both `(fx input)` and `(fy input)` are nil."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9927$kixi_DOT_stats_DOT_core_SLASH_regression_confidence_interval, $APP.cljs$cst$108$val, kixi.stats.core.regression_confidence_interval, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy], null), new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9811$fx, cljs$cst$9812$fy, $APP.cljs$cst$4010$alpha, $APP.cljs$cst$1237$x], null)), $APP.cljs$cst$256$doc, "Given two functions: (fx input) and (fy input), each of which returns a\n  number, and an x value, calculates the standard error of the least\n  squares linear model of fx and fy over inputs.\n  Returns a reified kixi.stats.protocols/PDependent if alpha is supplied,\n  or a reified kixi.stats.protocols/PDependentWithSignificance otherwise.\n  Ignores any records with fx or fy are nil. If there are no records with\n  values for fx and fy, the standard error of the estimate is nil."], 
  null)], null)]), $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$9820$kixi_DOT_stats_DOT_core, null)), cljs$cst$9928$kixi_DOT_stats_DOT_distribution, $APP.sci.core._copy_ns($APP.cljs.core.PersistentHashMap.fromArrays([cljs$cst$9929$cdf, $APP.cljs.core.with_meta($APP.cljs$cst$4948$summary, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile], null))], null))), $APP.cljs$cst$256$doc, "Returns the 5-number distribution summary\n  and the interquartile range."], null)), $APP.cljs.core.with_meta(cljs$cst$9931$binomial, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs$cst$1253$p], null)], null)], null))), $APP.cljs$cst$256$doc, "Return a binomial distribution.\n  Params: {:n ∈ ℕ, :p ∈ [0 1]}"], null)), $APP.cljs.core.with_meta(cljs$cst$9932$dirichlet, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9933$alphas], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns a Dirichlet distribution.\n  Params: {:alphas [ℝ \x3e\x3d 0, ...]}"], null)), $APP.cljs.core.with_meta(cljs$cst$9934$poisson, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9759$lambda], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns a Poisson distribution.\n  Params: {:lambda ∈ ℝ \x3e 0}"], 
  null)), $APP.cljs.core.with_meta($APP.cljs$cst$2347$median, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile], null))], null))), $APP.cljs$cst$256$doc, 
  "Returns the median"], null)), $APP.cljs.core.with_meta($APP.cljs$cst$52$f, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$3487$d1, 
  $APP.cljs$cst$3488$d2], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns an F distribution.\n  Params: {:d1 ∈ ℝ \x3e 0, :d2 ∈ ℝ \x3e 0}"], null)), $APP.cljs.core.with_meta(cljs$cst$9935$critical_value, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$78$tag, cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile], null))], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile], null)), $APP.cljs$cst$4010$alpha], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile], null)), $APP.cljs$cst$4010$alpha, cljs$cst$9936$tails], null))), $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile], null))], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$78$tag, cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile], null)), $APP.cljs$cst$4010$alpha], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile], null)), $APP.cljs$cst$4010$alpha, cljs$cst$9936$tails], null)], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile], null))], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$78$tag, cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile], null)), $APP.cljs$cst$4010$alpha], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile], null)), $APP.cljs$cst$4010$alpha, cljs$cst$9936$tails], null)), $APP.cljs$cst$1381$arglists_meta, 
  $APP.cljs.core.list(null, null, null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$9937$sample_summary, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9938$kixi_DOT_stats_DOT_protocols_DOT_PDiscreteRandomVariable], 
  null))], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9938$kixi_DOT_stats_DOT_protocols_DOT_PDiscreteRandomVariable], null)), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$54$seed], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns a summary count of each variate for a sample\n  of a given length from a discrete distribution\n  such as the Bernoulli, binomial or categorical.\n  An optional seed long will ensure deterministic results", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, 
  new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9938$kixi_DOT_stats_DOT_protocols_DOT_PDiscreteRandomVariable], null))], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2483$n, $APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9938$kixi_DOT_stats_DOT_protocols_DOT_PDiscreteRandomVariable], null)), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$54$seed], null)], null)], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9938$kixi_DOT_stats_DOT_protocols_DOT_PDiscreteRandomVariable], null))], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, 
  [$APP.cljs$cst$78$tag, cljs$cst$9938$kixi_DOT_stats_DOT_protocols_DOT_PDiscreteRandomVariable], null)), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$54$seed], null)], null)], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$9939$pareto, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$3509$scale, $APP.cljs$cst$3456$shape], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns a Pareto distribution.\n  Params: {:scale ∈ ℝ \x3e 0, :shape ∈ ℝ \x3e 0}"], 
  null)), cljs$cst$9940$quantile, cljs$cst$9941$minimum, $APP.cljs.core.with_meta(cljs$cst$9942$multinomial, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2483$n, cljs$cst$9943$probs], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns a multinomial distribution.\n  Params: {:n ∈ ℕ \x3e 0, :probs [ℝ \x3e\x3d 0, ...]}\n  Probabilities should be \x3e\x3d 0 and sum to 1"], null)), $APP.cljs.core.with_meta(cljs$cst$9944$log_normal, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$6052$location, $APP.cljs$cst$3509$scale, cljs$cst$9756$mu, cljs$cst$9757$sd], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns a Log-normal distribution.\n  The parameters are the log of the\n  mean and sd of this distribution.\n  Params: {:location ∈ ℝ, :scale ∈ ℝ \x3e 0}"], null)), $APP.cljs.core.with_meta(cljs$cst$9945$dirichlet_multinomial, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, cljs$cst$9933$alphas], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns a Dirichlet-multinomial distribution.\n  Params: {:n ∈ ℕ, :alphas [ℝ \x3e\x3d 0, ...]}"], 
  null)), $APP.cljs.core.with_meta(cljs$cst$9946$categorical, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9947$category_probs], null))), $APP.cljs$cst$256$doc, "Returns a categorical distribution.\n  Params: {[category] [probability], ...}\n  Probabilities should be \x3e\x3d 0 and sum to 1"], null)), 
  $APP.cljs.core.with_meta($APP.cljs$cst$1235$t, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$57$v], null)], null)], null))), $APP.cljs$cst$256$doc, 
  "Returns a t distribution.\n  Params: {:v ∈ ℝ \x3e 0}"], null)), $APP.cljs.core.with_meta($APP.cljs$cst$3994$gamma, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$3456$shape, $APP.cljs$cst$3509$scale, cljs$cst$9755$rate], null), $APP.cljs$cst$712$or, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$3456$shape, 1], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns a gamma distribution.\n  Params: {:shape ∈ ℝ \x3e 0, :scale ∈ ℝ \x3e 0} or {:shape ∈ ℝ \x3e 0, :rate ∈ ℝ \x3e 0}"], null)), $APP.cljs.core.with_meta($APP.cljs$cst$7754$beta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$4010$alpha, $APP.cljs$cst$7754$beta], null), $APP.cljs$cst$712$or, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$4010$alpha, 1, $APP.cljs$cst$7754$beta, 1], null)], null)], null))), $APP.cljs$cst$256$doc, 
  "Returns a beta distribution.\n  Params: {:alpha ∈ ℝ \x3e 0, :beta ∈ ℝ \x3e 0}"], null)), $APP.cljs.core.with_meta(cljs$cst$9948$exponential, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [cljs$cst$9755$rate], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns an exponential distribution.\n  Params: {:rate ∈ ℝ \x3e 0}"], null)), $APP.cljs.core.with_meta(cljs$cst$9949$weibull, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1383$keys, 
  new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$3456$shape, $APP.cljs$cst$3509$scale], null), $APP.cljs$cst$712$or, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$3456$shape, 1, $APP.cljs$cst$3509$scale, 1], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns a weibull distribution.\n  Params: {:shape ∈ ℝ \x3e\x3d 0, :scale ∈ ℝ \x3e\x3d 0}"], null)), $APP.cljs.core.with_meta(cljs$cst$9950$beta_binomial, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs$cst$4010$alpha, $APP.cljs$cst$7754$beta], null), $APP.cljs$cst$712$or, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$4010$alpha, 1, $APP.cljs$cst$7754$beta, 1], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns a beta distribution.\n  Params: {:n ∈ ℕ \x3e 0, :alpha ∈ ℝ \x3e 0, :beta ∈ ℝ \x3e 0}"], null)), $APP.cljs.core.with_meta(cljs$cst$9951$bernoulli, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1253$p], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns a Bernoulli distribution.\n  Params: {:p ∈ [0 1]}"], null)), $APP.cljs.core.with_meta(cljs$cst$9952$chi_squared, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 
  5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1485$k], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns a chi-squared distribution.\n  Params: {:k ∈ ℕ \x3e 0}"], null)), $APP.cljs.core.with_meta(cljs$cst$9953$uniform, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1255$a, $APP.cljs$cst$2229$b], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns a uniform distribution.\n  Params: {:a ∈ ℝ, :b ∈ ℝ, :a \x3c :b}"], null)), $APP.cljs.core.with_meta(cljs$cst$9954$normal, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$6052$location, $APP.cljs$cst$3509$scale, cljs$cst$9756$mu, cljs$cst$9757$sd], null)], 
  null)], null))), $APP.cljs$cst$256$doc, "Returns a normal distribution.\n  Params: {:location ∈ ℝ, :scale ∈ ℝ \x3e 0}"], null)), cljs$cst$9955$maximum, $APP.cljs.core.with_meta(cljs$cst$9956$cauchy, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, 
  new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$6052$location, $APP.cljs$cst$3509$scale], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns a Cauchy distribution.\n  Params: {:location ∈ ℝ, :scale ∈ ℝ \x3e 0}"], null)), $APP.cljs.core.with_meta(cljs$cst$9957$iqr, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile], null))], null))), $APP.cljs$cst$256$doc, "Returns the interquartile range"], null)), $APP.cljs.core.with_meta(cljs$cst$9958$draw, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9959$kixi_DOT_stats_DOT_protocols_DOT_PRandomVariable], null))], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9959$kixi_DOT_stats_DOT_protocols_DOT_PRandomVariable], 
  null)), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$54$seed], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns a single variate from the distribution.\n  An optional seed long will ensure deterministic results", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 
  2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9959$kixi_DOT_stats_DOT_protocols_DOT_PRandomVariable], null))], null), new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9959$kixi_DOT_stats_DOT_protocols_DOT_PRandomVariable], null)), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$54$seed], null)], null)], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9959$kixi_DOT_stats_DOT_protocols_DOT_PRandomVariable], null))], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9959$kixi_DOT_stats_DOT_protocols_DOT_PRandomVariable], 
  null)), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$54$seed], null)], null)], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), $APP.cljs.core.with_meta($APP.cljs$cst$2346$sample, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9959$kixi_DOT_stats_DOT_protocols_DOT_PRandomVariable], null))], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, 
  cljs$cst$9959$kixi_DOT_stats_DOT_protocols_DOT_PRandomVariable], null)), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$54$seed], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns n variates from the distribution.\n  An optional seed long will ensure deterministic results", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, 
  !1, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9959$kixi_DOT_stats_DOT_protocols_DOT_PRandomVariable], 
  null))], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9959$kixi_DOT_stats_DOT_protocols_DOT_PRandomVariable], null)), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$54$seed], 
  null)], null)], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9959$kixi_DOT_stats_DOT_protocols_DOT_PRandomVariable], null))], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, 
  $APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9959$kixi_DOT_stats_DOT_protocols_DOT_PRandomVariable], null)), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$54$seed], null)], null)], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null))], [new $APP.cljs.core.PersistentArrayMap(null, 
  3, [$APP.cljs$cst$272$name, cljs$cst$9960$kixi_DOT_stats_DOT_distribution_SLASH_cdf, $APP.cljs$cst$108$val, kixi.stats.distribution.cdf, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9961$kixi_DOT_stats_DOT_distribution_SLASH_summary, $APP.cljs$cst$108$val, kixi.stats.distribution.summary, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile], null))], null)), $APP.cljs$cst$256$doc, "Returns the 5-number distribution summary\n  and the interquartile range."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9962$kixi_DOT_stats_DOT_distribution_SLASH_binomial, 
  $APP.cljs$cst$108$val, kixi.stats.distribution.binomial, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs$cst$1253$p], null)], null)], null)), 
  $APP.cljs$cst$256$doc, "Return a binomial distribution.\n  Params: {:n ∈ ℕ, :p ∈ [0 1]}"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9963$kixi_DOT_stats_DOT_distribution_SLASH_dirichlet, $APP.cljs$cst$108$val, kixi.stats.distribution.dirichlet, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9933$alphas], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns a Dirichlet distribution.\n  Params: {:alphas [ℝ \x3e\x3d 0, ...]}"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9964$kixi_DOT_stats_DOT_distribution_SLASH_poisson, $APP.cljs$cst$108$val, kixi.stats.distribution.poisson, 
  $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9759$lambda], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns a Poisson distribution.\n  Params: {:lambda ∈ ℝ \x3e 0}"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9965$kixi_DOT_stats_DOT_distribution_SLASH_median, $APP.cljs$cst$108$val, kixi.stats.distribution.median, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$78$tag, cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile], null))], null)), $APP.cljs$cst$256$doc, "Returns the median"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9966$kixi_DOT_stats_DOT_distribution_SLASH_f, $APP.cljs$cst$108$val, kixi.stats.distribution.f, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$3487$d1, $APP.cljs$cst$3488$d2], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns an F distribution.\n  Params: {:d1 ∈ ℝ \x3e 0, :d2 ∈ ℝ \x3e 0}"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9967$kixi_DOT_stats_DOT_distribution_SLASH_critical_value, 
  $APP.cljs$cst$108$val, kixi.stats.distribution.critical_value, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile], null))], null), new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile], null)), $APP.cljs$cst$4010$alpha], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile], 
  null)), $APP.cljs$cst$4010$alpha, cljs$cst$9936$tails], null))], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9968$kixi_DOT_stats_DOT_distribution_SLASH_sample_summary, $APP.cljs$cst$108$val, kixi.stats.distribution.sample_summary, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, 
  $APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9938$kixi_DOT_stats_DOT_protocols_DOT_PDiscreteRandomVariable], null))], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9938$kixi_DOT_stats_DOT_protocols_DOT_PDiscreteRandomVariable], 
  null)), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$54$seed], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns a summary count of each variate for a sample\n  of a given length from a discrete distribution\n  such as the Bernoulli, binomial or categorical.\n  An optional seed long will ensure deterministic results"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 
  3, [$APP.cljs$cst$272$name, cljs$cst$9969$kixi_DOT_stats_DOT_distribution_SLASH_pareto, $APP.cljs$cst$108$val, kixi.stats.distribution.pareto, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$3509$scale, $APP.cljs$cst$3456$shape], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns a Pareto distribution.\n  Params: {:scale ∈ ℝ \x3e 0, :shape ∈ ℝ \x3e 0}"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9970$kixi_DOT_stats_DOT_distribution_SLASH_quantile, $APP.cljs$cst$108$val, kixi.stats.distribution.quantile, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 
  3, [$APP.cljs$cst$272$name, cljs$cst$9971$kixi_DOT_stats_DOT_distribution_SLASH_minimum, $APP.cljs$cst$108$val, kixi.stats.distribution.minimum, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9972$kixi_DOT_stats_DOT_distribution_SLASH_multinomial, $APP.cljs$cst$108$val, kixi.stats.distribution.multinomial, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, cljs$cst$9943$probs], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns a multinomial distribution.\n  Params: {:n ∈ ℕ \x3e 0, :probs [ℝ \x3e\x3d 0, ...]}\n  Probabilities should be \x3e\x3d 0 and sum to 1"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9973$kixi_DOT_stats_DOT_distribution_SLASH_log_normal, $APP.cljs$cst$108$val, kixi.stats.distribution.log_normal, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 
  4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$6052$location, $APP.cljs$cst$3509$scale, cljs$cst$9756$mu, cljs$cst$9757$sd], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns a Log-normal distribution.\n  The parameters are the log of the\n  mean and sd of this distribution.\n  Params: {:location ∈ ℝ, :scale ∈ ℝ \x3e 0}"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9974$kixi_DOT_stats_DOT_distribution_SLASH_dirichlet_multinomial, 
  $APP.cljs$cst$108$val, kixi.stats.distribution.dirichlet_multinomial, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, cljs$cst$9933$alphas], null)], 
  null)], null)), $APP.cljs$cst$256$doc, "Returns a Dirichlet-multinomial distribution.\n  Params: {:n ∈ ℕ, :alphas [ℝ \x3e\x3d 0, ...]}"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9975$kixi_DOT_stats_DOT_distribution_SLASH_categorical, $APP.cljs$cst$108$val, kixi.stats.distribution.categorical, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9947$category_probs], null)), $APP.cljs$cst$256$doc, "Returns a categorical distribution.\n  Params: {[category] [probability], ...}\n  Probabilities should be \x3e\x3d 0 and sum to 1"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9976$kixi_DOT_stats_DOT_distribution_SLASH_t, $APP.cljs$cst$108$val, kixi.stats.distribution.t, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$57$v], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns a t distribution.\n  Params: {:v ∈ ℝ \x3e 0}"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
  cljs$cst$9977$kixi_DOT_stats_DOT_distribution_SLASH_gamma, $APP.cljs$cst$108$val, kixi.stats.distribution.gamma, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$3456$shape, 
  $APP.cljs$cst$3509$scale, cljs$cst$9755$rate], null), $APP.cljs$cst$712$or, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$3456$shape, 1], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns a gamma distribution.\n  Params: {:shape ∈ ℝ \x3e 0, :scale ∈ ℝ \x3e 0} or {:shape ∈ ℝ \x3e 0, :rate ∈ ℝ \x3e 0}"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9978$kixi_DOT_stats_DOT_distribution_SLASH_beta, $APP.cljs$cst$108$val, kixi.stats.distribution.beta, 
  $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$4010$alpha, $APP.cljs$cst$7754$beta], null), $APP.cljs$cst$712$or, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$4010$alpha, 1, $APP.cljs$cst$7754$beta, 1], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns a beta distribution.\n  Params: {:alpha ∈ ℝ \x3e 0, :beta ∈ ℝ \x3e 0}"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9979$kixi_DOT_stats_DOT_distribution_SLASH_exponential, $APP.cljs$cst$108$val, kixi.stats.distribution.exponential, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9755$rate], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns an exponential distribution.\n  Params: {:rate ∈ ℝ \x3e 0}"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
  cljs$cst$9980$kixi_DOT_stats_DOT_distribution_SLASH_weibull, $APP.cljs$cst$108$val, kixi.stats.distribution.weibull, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$3456$shape, 
  $APP.cljs$cst$3509$scale], null), $APP.cljs$cst$712$or, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$3456$shape, 1, $APP.cljs$cst$3509$scale, 1], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns a weibull distribution.\n  Params: {:shape ∈ ℝ \x3e\x3d 0, :scale ∈ ℝ \x3e\x3d 0}"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9981$kixi_DOT_stats_DOT_distribution_SLASH_beta_binomial, $APP.cljs$cst$108$val, kixi.stats.distribution.beta_binomial, 
  $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs$cst$4010$alpha, $APP.cljs$cst$7754$beta], null), $APP.cljs$cst$712$or, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$4010$alpha, 1, $APP.cljs$cst$7754$beta, 1], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns a beta distribution.\n  Params: {:n ∈ ℕ \x3e 0, :alpha ∈ ℝ \x3e 0, :beta ∈ ℝ \x3e 0}"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9982$kixi_DOT_stats_DOT_distribution_SLASH_bernoulli, $APP.cljs$cst$108$val, kixi.stats.distribution.bernoulli, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1253$p], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns a Bernoulli distribution.\n  Params: {:p ∈ [0 1]}"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9983$kixi_DOT_stats_DOT_distribution_SLASH_chi_squared, 
  $APP.cljs$cst$108$val, kixi.stats.distribution.chi_squared, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1485$k], null)], null)], null)), $APP.cljs$cst$256$doc, 
  "Returns a chi-squared distribution.\n  Params: {:k ∈ ℕ \x3e 0}"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9984$kixi_DOT_stats_DOT_distribution_SLASH_uniform, $APP.cljs$cst$108$val, kixi.stats.distribution.uniform, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1255$a, $APP.cljs$cst$2229$b], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns a uniform distribution.\n  Params: {:a ∈ ℝ, :b ∈ ℝ, :a \x3c :b}"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9985$kixi_DOT_stats_DOT_distribution_SLASH_normal, $APP.cljs$cst$108$val, kixi.stats.distribution.normal, $APP.cljs$cst$2$meta, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$6052$location, $APP.cljs$cst$3509$scale, cljs$cst$9756$mu, cljs$cst$9757$sd], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns a normal distribution.\n  Params: {:location ∈ ℝ, :scale ∈ ℝ \x3e 0}"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9986$kixi_DOT_stats_DOT_distribution_SLASH_maximum, $APP.cljs$cst$108$val, kixi.stats.distribution.maximum, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9987$kixi_DOT_stats_DOT_distribution_SLASH_cauchy, $APP.cljs$cst$108$val, kixi.stats.distribution.cauchy, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$6052$location, $APP.cljs$cst$3509$scale], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns a Cauchy distribution.\n  Params: {:location ∈ ℝ, :scale ∈ ℝ \x3e 0}"], null)], 
  null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9988$kixi_DOT_stats_DOT_distribution_SLASH_iqr, $APP.cljs$cst$108$val, kixi.stats.distribution.iqr, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, 
  [$APP.cljs$cst$78$tag, cljs$cst$9930$kixi_DOT_stats_DOT_protocols_DOT_PQuantile], null))], null)), $APP.cljs$cst$256$doc, "Returns the interquartile range"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9989$kixi_DOT_stats_DOT_distribution_SLASH_draw, $APP.cljs$cst$108$val, kixi.stats.distribution.draw, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9959$kixi_DOT_stats_DOT_protocols_DOT_PRandomVariable], null))], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9959$kixi_DOT_stats_DOT_protocols_DOT_PRandomVariable], 
  null)), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$54$seed], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns a single variate from the distribution.\n  An optional seed long will ensure deterministic results"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$9990$kixi_DOT_stats_DOT_distribution_SLASH_sample, 
  $APP.cljs$cst$108$val, kixi.stats.distribution.sample, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9959$kixi_DOT_stats_DOT_protocols_DOT_PRandomVariable], null))], null), new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2483$n, $APP.cljs.core.with_meta(cljs$cst$9804$distribution, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9959$kixi_DOT_stats_DOT_protocols_DOT_PRandomVariable], null)), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$54$seed], null)], null)], null)), $APP.cljs$cst$256$doc, 
  "Returns n variates from the distribution.\n  An optional seed long will ensure deterministic results"], null)], null)]), $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$9928$kixi_DOT_stats_DOT_distribution, null)), cljs$cst$9991$kixi_DOT_stats_DOT_test, $APP.sci.core._copy_ns($APP.cljs.core.PersistentHashMap.fromArrays([cljs$cst$9992$significant_QMARK_, $APP.cljs.core.with_meta(cljs$cst$9837$simple_z_test, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9756$mu, cljs$cst$9757$sd], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [cljs$cst$9834$mean, $APP.cljs$cst$2483$n], null)], null)], null))), $APP.cljs$cst$256$doc, "Calculates the z-test of statistical significance for a sample mean.\n  mu: the population mean\n  sd: the population standard deviation\n  mean: the sample mean\n  n: the sample size\n  Returns a reified kixi.stats.protocols/PTestResult.\n  See also: kixi.stats.core/simple-z-test"], null)), $APP.cljs.core.with_meta(cljs$cst$9843$z_test, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$9993$mean_x, cljs$cst$9805$mean, cljs$cst$9994$sd_x, cljs$cst$9767$sd, cljs$cst$9995$n_x, $APP.cljs$cst$1630$n], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$9996$mean_y, cljs$cst$9805$mean, cljs$cst$9997$sd_y, cljs$cst$9767$sd, cljs$cst$9998$n_y, $APP.cljs$cst$1630$n], 
  null)], null))), $APP.cljs$cst$256$doc, "Calculates the z-test of statistical significance between two sample means.\n  Requires the mean, sd and sample size (n) of both samples.\n  Returns a reified kixi.stats.protocols/PTestResult.\n  See also: kixi.stats.core/z-test"], null)), $APP.cljs.core.with_meta(cljs$cst$9849$chi_squared_test, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta($APP.cljs$cst$5239$table, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9999$kixi_DOT_stats_DOT_protocols_DOT_PContingencyTable], null))], null))), $APP.cljs$cst$256$doc, "Calculates the X^2 test of independence for a given contingency table.\n  Returns a reified kixi.stats.protocols/PTestResult.\n  See kixi.stats.core/cross-tabulate"], null)), $APP.cljs.core.with_meta(cljs$cst$10000$map__GT_TestResult, 
  new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, $APP.cljs$cst$202$map, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$10001$G__115132], null))), $APP.cljs$cst$256$doc, "Factory function for kixi.stats.test/TestResult, taking a map of keywords to field values."], null)), $APP.cljs.core.with_meta(cljs$cst$10002$__GT_TestResult, 
  new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, $APP.cljs$cst$2145$positional, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9803$statistic, cljs$cst$9804$distribution, $APP.cljs$cst$9144$h1], null))), $APP.cljs$cst$256$doc, "Positional factory function for kixi.stats.test/TestResult."], 
  null)), cljs$cst$10003$p_value, $APP.cljs.core.with_meta(cljs$cst$9868$simple_t_test, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9756$mu, 
  cljs$cst$9757$sd], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9834$mean, $APP.cljs$cst$2483$n], null)], null)], null))), $APP.cljs$cst$256$doc, "Calculates the t-test of statistical significance for a sample mean.\n  mu: the population mean\n  sd: the population standard deviation\n  mean: the sample mean\n  n: the sample size\n  Returns a reified kixi.stats.protocols/PTestResult.\n  See also: kixi.stats.core/simple-t-test"], 
  null)), $APP.cljs.core.with_meta(cljs$cst$10004$test_result, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9803$statistic, cljs$cst$9804$distribution], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9803$statistic, cljs$cst$9804$distribution, 
  cljs$cst$10005$alternate], null))), $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9803$statistic, cljs$cst$9804$distribution], null), 
  new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9803$statistic, cljs$cst$9804$distribution, cljs$cst$10005$alternate], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9803$statistic, cljs$cst$9804$distribution], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9803$statistic, 
  cljs$cst$9804$distribution, cljs$cst$10005$alternate], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$9872$t_test, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$10006$mean_a, 
  cljs$cst$9805$mean, cljs$cst$10007$sd_a, cljs$cst$9767$sd, cljs$cst$10008$n_a, $APP.cljs$cst$1630$n], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$10009$mean_b, cljs$cst$9805$mean, cljs$cst$10010$sd_b, cljs$cst$9767$sd, cljs$cst$10011$n_b, $APP.cljs$cst$1630$n], null)], null))), $APP.cljs$cst$256$doc, "Calculates Welch's unequal variances t-test of statistical significance.\n  Requires the mean, sd and sample size (n) of both samples.\n  Returns a reified kixi.stats.protocols/PTestResult.\n  See also: kixi.stats.core/t-test"], 
  null))], [new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$10012$kixi_DOT_stats_DOT_test_SLASH_significant_QMARK_, $APP.cljs$cst$108$val, kixi.stats.test.significant_QMARK_, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$10013$kixi_DOT_stats_DOT_test_SLASH_simple_z_test, $APP.cljs$cst$108$val, kixi.stats.test.simple_z_test, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9756$mu, cljs$cst$9757$sd], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [cljs$cst$9834$mean, $APP.cljs$cst$2483$n], null)], null)], null)), $APP.cljs$cst$256$doc, "Calculates the z-test of statistical significance for a sample mean.\n  mu: the population mean\n  sd: the population standard deviation\n  mean: the sample mean\n  n: the sample size\n  Returns a reified kixi.stats.protocols/PTestResult.\n  See also: kixi.stats.core/simple-z-test"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$10014$kixi_DOT_stats_DOT_test_SLASH_z_test, 
  $APP.cljs$cst$108$val, kixi.stats.test.z_test, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$9993$mean_x, cljs$cst$9805$mean, cljs$cst$9994$sd_x, cljs$cst$9767$sd, cljs$cst$9995$n_x, $APP.cljs$cst$1630$n], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$9996$mean_y, 
  cljs$cst$9805$mean, cljs$cst$9997$sd_y, cljs$cst$9767$sd, cljs$cst$9998$n_y, $APP.cljs$cst$1630$n], null)], null)), $APP.cljs$cst$256$doc, "Calculates the z-test of statistical significance between two sample means.\n  Requires the mean, sd and sample size (n) of both samples.\n  Returns a reified kixi.stats.protocols/PTestResult.\n  See also: kixi.stats.core/z-test"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$10015$kixi_DOT_stats_DOT_test_SLASH_chi_squared_test, 
  $APP.cljs$cst$108$val, kixi.stats.test.chi_squared_test, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.with_meta($APP.cljs$cst$5239$table, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$78$tag, cljs$cst$9999$kixi_DOT_stats_DOT_protocols_DOT_PContingencyTable], null))], null)), $APP.cljs$cst$256$doc, "Calculates the X^2 test of independence for a given contingency table.\n  Returns a reified kixi.stats.protocols/PTestResult.\n  See kixi.stats.core/cross-tabulate"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$10016$kixi_DOT_stats_DOT_test_SLASH_map__GT_TestResult, $APP.cljs$cst$108$val, kixi.stats.test.map__GT_TestResult, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$10001$G__115132], null)), $APP.cljs$cst$256$doc, "Factory function for kixi.stats.test/TestResult, taking a map of keywords to field values."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$10017$kixi_DOT_stats_DOT_test_SLASH___GT_TestResult, $APP.cljs$cst$108$val, kixi.stats.test.__GT_TestResult, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9803$statistic, cljs$cst$9804$distribution, $APP.cljs$cst$9144$h1], null)), 
  $APP.cljs$cst$256$doc, "Positional factory function for kixi.stats.test/TestResult."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$10018$kixi_DOT_stats_DOT_test_SLASH_p_value, $APP.cljs$cst$108$val, kixi.stats.test.p_value, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$10019$kixi_DOT_stats_DOT_test_SLASH_simple_t_test, $APP.cljs$cst$108$val, 
  kixi.stats.test.simple_t_test, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9756$mu, cljs$cst$9757$sd], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9834$mean, $APP.cljs$cst$2483$n], null)], null)], null)), $APP.cljs$cst$256$doc, "Calculates the t-test of statistical significance for a sample mean.\n  mu: the population mean\n  sd: the population standard deviation\n  mean: the sample mean\n  n: the sample size\n  Returns a reified kixi.stats.protocols/PTestResult.\n  See also: kixi.stats.core/simple-t-test"], null)], 
  null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$10020$kixi_DOT_stats_DOT_test_SLASH_test_result, $APP.cljs$cst$108$val, kixi.stats.test.test_result, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9803$statistic, cljs$cst$9804$distribution], null), new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$9803$statistic, cljs$cst$9804$distribution, cljs$cst$10005$alternate], null))], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$10021$kixi_DOT_stats_DOT_test_SLASH_t_test, $APP.cljs$cst$108$val, kixi.stats.test.t_test, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$10006$mean_a, cljs$cst$9805$mean, cljs$cst$10007$sd_a, cljs$cst$9767$sd, cljs$cst$10008$n_a, $APP.cljs$cst$1630$n], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$10009$mean_b, cljs$cst$9805$mean, cljs$cst$10010$sd_b, cljs$cst$9767$sd, cljs$cst$10011$n_b, $APP.cljs$cst$1630$n], null)], null)), $APP.cljs$cst$256$doc, "Calculates Welch's unequal variances t-test of statistical significance.\n  Requires the mean, sd and sample size (n) of both samples.\n  Returns a reified kixi.stats.protocols/PTestResult.\n  See also: kixi.stats.core/t-test"], 
  null)], null)]), $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$9991$kixi_DOT_stats_DOT_test, null))], null)], null));
};
$APP.scittle.kixi_stats.init();

}).call(this);