(function(){
'use strict';
var cljs$cst$2880$loom_DOT_graph_SLASH_add_path = new $APP.cljs.core.Symbol("loom.graph", "add-path", "loom.graph/add-path", 361959638, null), cljs$cst$2992$loom_DOT_alg_SLASH_scc = new $APP.cljs.core.Symbol("loom.alg", "scc", "loom.alg/scc", -2033192705, null), cljs$cst$2946$visited = new $APP.cljs.core.Symbol(null, "visited", "visited", 29677652, null), cljs$cst$3026$loom_DOT_attr_SLASH_add_attrs_to_all = new $APP.cljs.core.Symbol("loom.attr", "add-attrs-to-all", "loom.attr/add-attrs-to-all", 1596075082, 
null), cljs$cst$2856$loom_DOT_graph_SLASH_has_node_QMARK_ = new $APP.cljs.core.Symbol("loom.graph", "has-node?", "loom.graph/has-node?", 1228434880, null), cljs$cst$2938$explored = new $APP.cljs.core.Symbol(null, "explored", "explored", 382042847, null), cljs$cst$3014$hilite_path = new $APP.cljs.core.Symbol(null, "hilite-path", "hilite-path", 1484892261, null), cljs$cst$2770$map__GT_BasicEditableGraph = new $APP.cljs.core.Symbol(null, "map-\x3eBasicEditableGraph", "map-\x3eBasicEditableGraph", -390635930, 
null), cljs$cst$2819$predecessors_STAR_ = new $APP.cljs.core.Symbol(null, "predecessors*", "predecessors*", 287867260, null), cljs$cst$2870$loom_DOT_graph_SLASH_weight_STAR_ = new $APP.cljs.core.Symbol("loom.graph", "weight*", "loom.graph/weight*", -9565817, null), cljs$cst$2835$has_edge_QMARK_ = new $APP.cljs.core.Symbol(null, "has-edge?", "has-edge?", -277136373, null), cljs$cst$2945$prim_mst_edges = new $APP.cljs.core.Symbol(null, "prim-mst-edges", "prim-mst-edges", -1498518677, null), cljs$cst$2882$loom_DOT_graph_SLASH_graph_QMARK_ = 
new $APP.cljs.core.Symbol("loom.graph", "graph?", "loom.graph/graph?", -702337780, null), cljs$cst$3055$loom_DOT_derived_SLASH_mapped_by = new $APP.cljs.core.Symbol("loom.derived", "mapped-by", "loom.derived/mapped-by", -225604359, null), cljs$cst$2910$greedy_coloring = new $APP.cljs.core.Symbol(null, "greedy-coloring", "greedy-coloring", -858313529, null), cljs$cst$2795$__GT_BasicEditableGraph = new $APP.cljs.core.Symbol(null, "-\x3eBasicEditableGraph", "-\x3eBasicEditableGraph", -960946972, null), 
cljs$cst$2869$loom_DOT_graph_SLASH_directed_QMARK_ = new $APP.cljs.core.Symbol("loom.graph", "directed?", "loom.graph/directed?", 221535968, null), cljs$cst$2973$loom_DOT_alg_SLASH_density = new $APP.cljs.core.Symbol("loom.alg", "density", "loom.alg/density", 1948554739, null), cljs$cst$2821$out_degree = new $APP.cljs.core.Symbol(null, "out-degree", "out-degree", -1984729625, null), cljs$cst$2971$loom_DOT_alg_SLASH_longest_shortest_path = new $APP.cljs.core.Symbol("loom.alg", "longest-shortest-path", 
"loom.alg/longest-shortest-path", 409006942, null), cljs$cst$2831$in_edges = new $APP.cljs.core.Keyword(null, "in-edges", "in-edges", 221484951), cljs$cst$2888$loom_DOT_graph_SLASH_remove_all = new $APP.cljs.core.Symbol("loom.graph", "remove-all", "loom.graph/remove-all", 1253502206, null), cljs$cst$2889$loom_DOT_graph_SLASH_add_cycle = new $APP.cljs.core.Symbol("loom.graph", "add-cycle", "loom.graph/add-cycle", -1973014059, null), cljs$cst$3018$add_attr = new $APP.cljs.core.Keyword(null, "add-attr", 
"add-attr", 1148192459), cljs$cst$3000$loom_DOT_alg_SLASH_pre_span = new $APP.cljs.core.Symbol("loom.alg", "pre-span", "loom.alg/pre-span", 793571186, null), cljs$cst$2820$add_cycle = new $APP.cljs.core.Symbol(null, "add-cycle", "add-cycle", -910726764, null), cljs$cst$2758$loom_DOT_graph = new $APP.cljs.core.Symbol(null, "loom.graph", "loom.graph", 67166027, null), cljs$cst$2740$fpredecessors = new $APP.cljs.core.Symbol(null, "fpredecessors", "fpredecessors", 227702593, null), cljs$cst$2977$loom_DOT_alg_SLASH_connected_QMARK_ = 
new $APP.cljs.core.Symbol("loom.alg", "connected?", "loom.alg/connected?", -1648728483, null), cljs$cst$2996$loom_DOT_alg_SLASH_connected_components = new $APP.cljs.core.Symbol("loom.alg", "connected-components", "loom.alg/connected-components", -239012865, null), cljs$cst$3058$nodes_filtered_by = new $APP.cljs.core.Symbol(null, "nodes-filtered-by", "nodes-filtered-by", -1062822682, null), cljs$cst$2839$successors_STAR_ = new $APP.cljs.core.Keyword(null, "successors*", "successors*", -1219618443), 
cljs$cst$2956$maximal_cliques = new $APP.cljs.core.Symbol(null, "maximal-cliques", "maximal-cliques", -333013428, null), cljs$cst$2927$post_traverse = new $APP.cljs.core.Symbol(null, "post-traverse", "post-traverse", 429963293, null), cljs$cst$2800$G__47217 = new $APP.cljs.core.Symbol(null, "G__47217", "G__47217", 362385938, null), cljs$cst$2912$bipartite_sets = new $APP.cljs.core.Symbol(null, "bipartite-sets", "bipartite-sets", -1960295928, null), cljs$cst$3034$loom_DOT_label = new $APP.cljs.core.Symbol(null, 
"loom.label", "loom.label", -1388568871, null), cljs$cst$2850$G__47232 = new $APP.cljs.core.Symbol(null, "G__47232", "G__47232", -1445226226, null), cljs$cst$2988$loom_DOT_alg_SLASH_max_flow = new $APP.cljs.core.Symbol("loom.alg", "max-flow", "loom.alg/max-flow", 355619934, null), cljs$cst$3009$attr_QMARK_ = new $APP.cljs.core.Symbol(null, "attr?", "attr?", -41348473, null), cljs$cst$2753$fontcolor = new $APP.cljs.core.Keyword(null, "fontcolor", "fontcolor", 473176016), cljs$cst$3057$loom_DOT_derived_SLASH_subgraph_reachable_from = 
new $APP.cljs.core.Symbol("loom.derived", "subgraph-reachable-from", "loom.derived/subgraph-reachable-from", 1440173683, null), cljs$cst$2941$johnson = new $APP.cljs.core.Symbol(null, "johnson", "johnson", 57228044, null), cljs$cst$2818$G__47202 = new $APP.cljs.core.Symbol(null, "G__47202", "G__47202", -590607588, null), cljs$cst$2915$pre_traverse = new $APP.cljs.core.Symbol(null, "pre-traverse", "pre-traverse", 634039803, null), cljs$cst$2732$adj = new $APP.cljs.core.Symbol(null, "adj", "adj", 295901331, 
null), cljs$cst$2937$heur = new $APP.cljs.core.Symbol(null, "heur", "heur", -235106205, null), cljs$cst$2899$loom_DOT_graph_SLASH___GT_WeightedFlyDigraph = new $APP.cljs.core.Symbol("loom.graph", "-\x3eWeightedFlyDigraph", "loom.graph/-\x3eWeightedFlyDigraph", 1719562941, null), cljs$cst$2908$loom_DOT_graph_SLASH_successors = new $APP.cljs.core.Symbol("loom.graph", "successors", "loom.graph/successors", 1379636334, null), cljs$cst$3048$nodes_PLUS_labels = new $APP.cljs.core.Symbol(null, "nodes+labels", 
"nodes+labels", 831656390, null), cljs$cst$3063$subset = new $APP.cljs.core.Symbol(null, "subset", "subset", 1543835916, null), cljs$cst$2874$loom_DOT_graph_SLASH___GT_FlyDigraph = new $APP.cljs.core.Symbol("loom.graph", "-\x3eFlyDigraph", "loom.graph/-\x3eFlyDigraph", -1925719410, null), cljs$cst$3032$loom_DOT_attr_SLASH_add_attr = new $APP.cljs.core.Symbol("loom.attr", "add-attr", "loom.attr/add-attr", -366196756, null), cljs$cst$2838$has_edge_QMARK_ = new $APP.cljs.core.Keyword(null, "has-edge?", 
"has-edge?", -1917667900), cljs$cst$2904$loom_DOT_graph_SLASH_has_edge_QMARK_ = new $APP.cljs.core.Symbol("loom.graph", "has-edge?", "loom.graph/has-edge?", -1456806710, null), cljs$cst$2905$loom_DOT_graph_SLASH_map__GT_WeightedFlyDigraph = new $APP.cljs.core.Symbol("loom.graph", "map-\x3eWeightedFlyDigraph", "loom.graph/map-\x3eWeightedFlyDigraph", -959545479, null), cljs$cst$2852$G__47187 = new $APP.cljs.core.Symbol(null, "G__47187", "G__47187", 660205701, null), cljs$cst$3046$loom_DOT_label_SLASH_labeled_QMARK_ = 
new $APP.cljs.core.Symbol("loom.label", "labeled?", "loom.label/labeled?", -1638719746, null), cljs$cst$2827$Digraph = new $APP.cljs.core.Symbol(null, "Digraph", "Digraph", -914357354, null), cljs$cst$3015$AttrGraph = new $APP.cljs.core.Symbol(null, "AttrGraph", "AttrGraph", -1695832365, null), cljs$cst$2847$build_graph = new $APP.cljs.core.Symbol(null, "build-graph", "build-graph", -990475985, null), cljs$cst$2903$loom_DOT_graph_SLASH_remove_edges = new $APP.cljs.core.Symbol("loom.graph", "remove-edges", 
"loom.graph/remove-edges", -483392286, null), cljs$cst$2796$directed_QMARK_ = new $APP.cljs.core.Symbol(null, "directed?", "directed?", 1317377697, null), cljs$cst$2805$successors = new $APP.cljs.core.Symbol(null, "successors", "successors", 401235113, null), cljs$cst$2989$loom_DOT_alg_SLASH_connect = new $APP.cljs.core.Symbol("loom.alg", "connect", "loom.alg/connect", 554757479, null), cljs$cst$2840$out_degree = new $APP.cljs.core.Keyword(null, "out-degree", "out-degree", 669706144), cljs$cst$2759$in_edges = 
new $APP.cljs.core.Symbol(null, "in-edges", "in-edges", 1862016478, null), cljs$cst$3065$surroundings = new $APP.cljs.core.Symbol(null, "surroundings", "surroundings", -1064175777, null), cljs$cst$2868$loom_DOT_graph_SLASH___GT_BasicEditableGraph = new $APP.cljs.core.Symbol("loom.graph", "-\x3eBasicEditableGraph", "loom.graph/-\x3eBasicEditableGraph", 50881573, null), cljs$cst$2773$weighted_graph = new $APP.cljs.core.Symbol(null, "weighted-graph", "weighted-graph", 892199797, null), cljs$cst$2866$loom_DOT_graph_SLASH_add_nodes = 
new $APP.cljs.core.Symbol("loom.graph", "add-nodes", "loom.graph/add-nodes", 1581068452, null), cljs$cst$2959$bf_all_pairs_shortest_paths = new $APP.cljs.core.Symbol(null, "bf-all-pairs-shortest-paths", "bf-all-pairs-shortest-paths", 1816574050, null), cljs$cst$2957$loners = new $APP.cljs.core.Symbol(null, "loners", "loners", -935722264, null), cljs$cst$2995$loom_DOT_alg_SLASH_bf_path_bi = new $APP.cljs.core.Symbol("loom.alg", "bf-path-bi", "loom.alg/bf-path-bi", 2132429724, null), cljs$cst$2931$shortest_path = 
new $APP.cljs.core.Symbol(null, "shortest-path", "shortest-path", 404921291, null), cljs$cst$2916$degeneracy_ordering = new $APP.cljs.core.Symbol(null, "degeneracy-ordering", "degeneracy-ordering", 969749824, null), cljs$cst$2969$loom_DOT_alg_SLASH_degeneracy_ordering = new $APP.cljs.core.Symbol("loom.alg", "degeneracy-ordering", "loom.alg/degeneracy-ordering", -1281219183, null), cljs$cst$2896$loom_DOT_graph_SLASH_map__GT_BasicEditableDigraph = new $APP.cljs.core.Symbol("loom.graph", "map-\x3eBasicEditableDigraph", 
"loom.graph/map-\x3eBasicEditableDigraph", 1430755049, null), cljs$cst$2845$G__47069 = new $APP.cljs.core.Symbol(null, "G__47069", "G__47069", 49343334, null), cljs$cst$2768$digraph = new $APP.cljs.core.Symbol(null, "digraph", "digraph", -1580615172, null), cljs$cst$2897$loom_DOT_graph_SLASH_graph = new $APP.cljs.core.Symbol("loom.graph", "graph", "loom.graph/graph", -118033217, null), cljs$cst$2771$G__47024 = new $APP.cljs.core.Symbol(null, "G__47024", "G__47024", -823098377, null), cljs$cst$2843$G__47039 = 
new $APP.cljs.core.Symbol(null, "G__47039", "G__47039", -1801906790, null), cljs$cst$2825$G__47054 = new $APP.cljs.core.Symbol(null, "G__47054", "G__47054", -75311045, null), cljs$cst$2930$subgraph_QMARK_ = new $APP.cljs.core.Symbol(null, "subgraph?", "subgraph?", 1667039490, null), cljs$cst$3028$loom_DOT_attr_SLASH_add_attr_to_nodes = new $APP.cljs.core.Symbol("loom.attr", "add-attr-to-nodes", "loom.attr/add-attr-to-nodes", -1275658035, null), cljs$cst$3019$remove_attr = new $APP.cljs.core.Keyword(null, 
"remove-attr", "remove-attr", 913372290), cljs$cst$2853$loom_DOT_graph_SLASH_in_edges = new $APP.cljs.core.Symbol("loom.graph", "in-edges", "loom.graph/in-edges", -1467136739, null), cljs$cst$2962$bf_traverse = new $APP.cljs.core.Symbol(null, "bf-traverse", "bf-traverse", -1074971653, null), cljs$cst$2793$add_nodes = new $APP.cljs.core.Symbol(null, "add-nodes", "add-nodes", -1718683291, null), cljs$cst$2933$coloring_QMARK_ = new $APP.cljs.core.Symbol(null, "coloring?", "coloring?", 785834289, null), 
cljs$cst$2786$remove_nodes_STAR_ = new $APP.cljs.core.Keyword(null, "remove-nodes*", "remove-nodes*", -1318969144), cljs$cst$3002$loom_DOT_alg_SLASH_astar_dist = new $APP.cljs.core.Symbol("loom.alg", "astar-dist", "loom.alg/astar-dist", -479457006, null), cljs$cst$2724$bitmaps = new $APP.cljs.core.Keyword(null, "bitmaps", "bitmaps", 1147698842), cljs$cst$2878$loom_DOT_graph_SLASH_subgraph = new $APP.cljs.core.Symbol("loom.graph", "subgraph", "loom.graph/subgraph", 482864316, null), cljs$cst$2817$map__GT_FlyDigraph = 
new $APP.cljs.core.Symbol(null, "map-\x3eFlyDigraph", "map-\x3eFlyDigraph", -1964475557, null), cljs$cst$2861$loom_DOT_graph_SLASH_successors_STAR_ = new $APP.cljs.core.Symbol("loom.graph", "successors*", "loom.graph/successors*", 1533527923, null), cljs$cst$2833$__GT_BasicEditableWeightedDigraph = new $APP.cljs.core.Symbol(null, "-\x3eBasicEditableWeightedDigraph", "-\x3eBasicEditableWeightedDigraph", 1704959291, null), cljs$cst$2760$loom_DOT_graph_SLASH_Digraph = new $APP.cljs.core.Symbol("loom.graph", 
"Digraph", "loom.graph/Digraph", 374821975, null), cljs$cst$2875$loom_DOT_graph_SLASH_add_nodes_STAR_ = new $APP.cljs.core.Symbol("loom.graph", "add-nodes*", "loom.graph/add-nodes*", -128088791, null), cljs$cst$2998$loom_DOT_alg_SLASH_maximal_cliques = new $APP.cljs.core.Symbol("loom.alg", "maximal-cliques", "loom.alg/maximal-cliques", 1716760445, null), cljs$cst$2782$remove_edges_STAR_ = new $APP.cljs.core.Symbol(null, "remove-edges*", "remove-edges*", 1267306182, null), cljs$cst$2955$topsort = 
new $APP.cljs.core.Symbol(null, "topsort", "topsort", 921717118, null), cljs$cst$2997$loom_DOT_alg_SLASH_topsort = new $APP.cljs.core.Symbol("loom.alg", "topsort", "loom.alg/topsort", -1891157969, null), cljs$cst$3038$remove_label = new $APP.cljs.core.Symbol(null, "remove-label", "remove-label", 1620175455, null), cljs$cst$2963$loom_DOT_alg_SLASH_greedy_coloring = new $APP.cljs.core.Symbol("loom.alg", "greedy-coloring", "loom.alg/greedy-coloring", 1449672118, null), cljs$cst$2834$Graph = new $APP.cljs.core.Symbol(null, 
"Graph", "Graph", 215547520, null), cljs$cst$3044$loom_DOT_label_SLASH_label = new $APP.cljs.core.Symbol("loom.label", "label", "loom.label/label", 237335522, null), cljs$cst$2999$loom_DOT_alg_SLASH_loners = new $APP.cljs.core.Symbol("loom.alg", "loners", "loom.alg/loners", 1113010651, null), cljs$cst$2865$loom_DOT_graph_SLASH_add_edges = new $APP.cljs.core.Symbol("loom.graph", "add-edges", "loom.graph/add-edges", -1791844763, null), cljs$cst$3013$add_attr_to_nodes = new $APP.cljs.core.Symbol(null, 
"add-attr-to-nodes", "add-attr-to-nodes", 268093999, null), cljs$cst$2772$predecessors = new $APP.cljs.core.Symbol(null, "predecessors", "predecessors", 1870444884, null), cljs$cst$2822$in_degree = new $APP.cljs.core.Symbol(null, "in-degree", "in-degree", 1121497719, null), cljs$cst$3003$loom_DOT_alg_SLASH_bf_span = new $APP.cljs.core.Symbol("loom.alg", "bf-span", "loom.alg/bf-span", 105241610, null), cljs$cst$2929$dijkstra_span = new $APP.cljs.core.Symbol(null, "dijkstra-span", "dijkstra-span", 
-1933458409, null), cljs$cst$2722$node__GT_idx = new $APP.cljs.core.Keyword(null, "node-\x3eidx", "node-\x3eidx", 152705227), cljs$cst$3050$add_labeled_edges = new $APP.cljs.core.Symbol(null, "add-labeled-edges", "add-labeled-edges", 2089133471, null), cljs$cst$3006$remove_attr = new $APP.cljs.core.Symbol(null, "remove-attr", "remove-attr", -1741063479, null), cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs = new $APP.cljs.core.Keyword("loom.attr", "edge-attrs", "loom.attr/edge-attrs", 1842958026), 
cljs$cst$3007$loom_DOT_attr_SLASH_AttrGraph = new $APP.cljs.core.Symbol("loom.attr", "AttrGraph", "loom.attr/AttrGraph", 1457582065, null), cljs$cst$2826$__GT_WeightedFlyGraph = new $APP.cljs.core.Symbol(null, "-\x3eWeightedFlyGraph", "-\x3eWeightedFlyGraph", 2020629626, null), cljs$cst$3008$node_or_edge = new $APP.cljs.core.Symbol(null, "node-or-edge", "node-or-edge", -1789673024, null), cljs$cst$2775$EditableGraph = new $APP.cljs.core.Symbol(null, "EditableGraph", "EditableGraph", 1011553869, null), 
cljs$cst$2950$all_pairs_shortest_paths = new $APP.cljs.core.Symbol(null, "all-pairs-shortest-paths", "all-pairs-shortest-paths", -733266409, null), cljs$cst$3049$loom_DOT_label_SLASH_add_labeled_nodes = new $APP.cljs.core.Symbol("loom.label", "add-labeled-nodes", "loom.label/add-labeled-nodes", 2087934743, null), cljs$cst$2891$loom_DOT_graph_SLASH_in_degree = new $APP.cljs.core.Symbol("loom.graph", "in-degree", "loom.graph/in-degree", 2750902, null), cljs$cst$2863$loom_DOT_graph_SLASH__STAR_default_weight_STAR_ = 
new $APP.cljs.core.Symbol("loom.graph", "*default-weight*", "loom.graph/*default-weight*", 117202517, null), cljs$cst$2991$loom_DOT_alg_SLASH_bipartite_QMARK_ = new $APP.cljs.core.Symbol("loom.alg", "bipartite?", "loom.alg/bipartite?", 1925998618, null), cljs$cst$2792$add_edges = new $APP.cljs.core.Symbol(null, "add-edges", "add-edges", -738339290, null), cljs$cst$3025$loom_DOT_attr_SLASH_add_attr_to_edges = new $APP.cljs.core.Symbol("loom.attr", "add-attr-to-edges", "loom.attr/add-attr-to-edges", 
-332600461, null), cljs$cst$2872$loom_DOT_graph_SLASH_edges = new $APP.cljs.core.Symbol("loom.graph", "edges", "loom.graph/edges", -68673369, null), cljs$cst$2823$loom_DOT_graph_SLASH_Edge = new $APP.cljs.core.Symbol("loom.graph", "Edge", "loom.graph/Edge", 1038966028, null), cljs$cst$2754$fillcolor = new $APP.cljs.core.Keyword(null, "fillcolor", "fillcolor", -151540217), cljs$cst$2984$loom_DOT_alg_SLASH_bipartite_color = new $APP.cljs.core.Symbol("loom.alg", "bipartite-color", "loom.alg/bipartite-color", 
1302388773, null), cljs$cst$2783$remove_all = new $APP.cljs.core.Symbol(null, "remove-all", "remove-all", -2012797889, null), cljs$cst$2738$fsuccessors = new $APP.cljs.core.Symbol(null, "fsuccessors", "fsuccessors", -826676562, null), cljs$cst$2919$prim_mst = new $APP.cljs.core.Symbol(null, "prim-mst", "prim-mst", 306690548, null), cljs$cst$3054$mapped_by = new $APP.cljs.core.Symbol(null, "mapped-by", "mapped-by", 272123689, null), cljs$cst$2906$loom_DOT_graph_SLASH_map__GT_FlyGraph = new $APP.cljs.core.Symbol("loom.graph", 
"map-\x3eFlyGraph", "loom.graph/map-\x3eFlyGraph", -1406387108, null), cljs$cst$2766$has_node_QMARK_ = new $APP.cljs.core.Symbol(null, "has-node?", "has-node?", -1930877567, null), cljs$cst$2918$longest_shortest_path = new $APP.cljs.core.Symbol(null, "longest-shortest-path", "longest-shortest-path", -1509039223, null), cljs$cst$3027$loom_DOT_attr_SLASH_attr = new $APP.cljs.core.Symbol("loom.attr", "attr", "loom.attr/attr", 1910208868, null), cljs$cst$2968$loom_DOT_alg_SLASH_pre_traverse = new $APP.cljs.core.Symbol("loom.alg", 
"pre-traverse", "loom.alg/pre-traverse", -1549419224, null), cljs$cst$2807$add_path = new $APP.cljs.core.Symbol(null, "add-path", "add-path", -698210281, null), cljs$cst$2846$__GT_WeightedFlyDigraph = new $APP.cljs.core.Symbol(null, "-\x3eWeightedFlyDigraph", "-\x3eWeightedFlyDigraph", 969493244, null), cljs$cst$3036$add_label = new $APP.cljs.core.Symbol(null, "add-label", "add-label", 1669084735, null), cljs$cst$2881$loom_DOT_graph_SLASH_weighted_digraph = new $APP.cljs.core.Symbol("loom.graph", 
"weighted-digraph", "loom.graph/weighted-digraph", -477430389, null), cljs$cst$2993$loom_DOT_alg_SLASH_all_pairs_shortest_paths = new $APP.cljs.core.Symbol("loom.alg", "all-pairs-shortest-paths", "loom.alg/all-pairs-shortest-paths", 1310984646, null), cljs$cst$2745$successors = new $APP.cljs.core.Keyword(null, "successors", "successors", -1239296414), cljs$cst$2965$loom_DOT_alg_SLASH_bipartite_sets = new $APP.cljs.core.Symbol("loom.alg", "bipartite-sets", "loom.alg/bipartite-sets", 43733471, null), 
cljs$cst$3010$add_attr_to_edges = new $APP.cljs.core.Symbol(null, "add-attr-to-edges", "add-attr-to-edges", 674869777, null), cljs$cst$2926$bf_path = new $APP.cljs.core.Symbol(null, "bf-path", "bf-path", 1923612333, null), cljs$cst$2814$weighted_digraph = new $APP.cljs.core.Symbol(null, "weighted-digraph", "weighted-digraph", -1577733548, null), cljs$cst$2790$_STAR_default_weight_STAR_ = new $APP.cljs.core.Symbol(null, "*default-weight*", "*default-weight*", 1085085590, null), cljs$cst$2737$fedges = 
new $APP.cljs.core.Symbol(null, "fedges", "fedges", 2140205450, null), cljs$cst$2748$loops = new $APP.cljs.core.Keyword(null, "loops", "loops", -1766681555), cljs$cst$2848$remove_edges = new $APP.cljs.core.Symbol(null, "remove-edges", "remove-edges", 612449453, null), cljs$cst$2731$nodeset = new $APP.cljs.core.Symbol(null, "nodeset", "nodeset", -1958444430, null), cljs$cst$2994$loom_DOT_alg_SLASH_isomorphism_QMARK_ = new $APP.cljs.core.Symbol("loom.alg", "isomorphism?", "loom.alg/isomorphism?", -1679308250, 
null), cljs$cst$2935$astar_path = new $APP.cljs.core.Symbol(null, "astar-path", "astar-path", 1408737710, null), cljs$cst$2987$loom_DOT_alg_SLASH_dijkstra_path_dist = new $APP.cljs.core.Symbol("loom.alg", "dijkstra-path-dist", "loom.alg/dijkstra-path-dist", -350023018, null), cljs$cst$2729$nodeset = new $APP.cljs.core.Keyword(null, "nodeset", "nodeset", 695991339), cljs$cst$3021$hilite = new $APP.cljs.core.Symbol(null, "hilite", "hilite", 1768871741, null), cljs$cst$3061$loom_DOT_derived_SLASH_edges_filtered_by = 
new $APP.cljs.core.Symbol("loom.derived", "edges-filtered-by", "loom.derived/edges-filtered-by", -1066853076, null), cljs$cst$2774$successors_STAR_ = new $APP.cljs.core.Symbol(null, "successors*", "successors*", 420913084, null), cljs$cst$2879$loom_DOT_graph_SLASH_nodes = new $APP.cljs.core.Symbol("loom.graph", "nodes", "loom.graph/nodes", -1493849219, null), cljs$cst$2778$add_nodes_STAR_ = new $APP.cljs.core.Symbol(null, "add-nodes*", "add-nodes*", 982732136, null), cljs$cst$3052$loom_DOT_label_SLASH_add_labeled_edges = 
new $APP.cljs.core.Symbol("loom.label", "add-labeled-edges", "loom.label/add-labeled-edges", -1565147290, null), cljs$cst$2911$distinct_edges = new $APP.cljs.core.Symbol(null, "distinct-edges", "distinct-edges", -1135543933, null), cljs$cst$2932$dijkstra_path = new $APP.cljs.core.Symbol(null, "dijkstra-path", "dijkstra-path", -1283593601, null), cljs$cst$3066$loom_DOT_derived_SLASH_surroundings = new $APP.cljs.core.Symbol("loom.derived", "surroundings", "loom.derived/surroundings", -413258609, null), 
cljs$cst$2767$loom_DOT_graph_SLASH_Graph = new $APP.cljs.core.Symbol("loom.graph", "Graph", "loom.graph/Graph", -835746105, null), cljs$cst$2928$connected_QMARK_ = new $APP.cljs.core.Symbol(null, "connected?", "connected?", 442980140, null), cljs$cst$3005$loom_DOT_attr = new $APP.cljs.core.Symbol(null, "loom.attr", "loom.attr", 1804695475, null), cljs$cst$2951$isomorphism_QMARK_ = new $APP.cljs.core.Symbol(null, "isomorphism?", "isomorphism?", 563411703, null), cljs$cst$2815$graph_QMARK_ = new $APP.cljs.core.Symbol(null, 
"graph?", "graph?", -1812666931, null), cljs$cst$2909$loom_DOT_alg = new $APP.cljs.core.Symbol(null, "loom.alg", "loom.alg", -1012819222, null), cljs$cst$2980$loom_DOT_alg_SLASH_shortest_path = new $APP.cljs.core.Symbol("loom.alg", "shortest-path", "loom.alg/shortest-path", -1851815268, null), cljs$cst$2750$method_set = new $APP.cljs.core.Keyword(null, "method-set", "method-set", -2030344221), cljs$cst$2978$loom_DOT_alg_SLASH_dijkstra_span = new $APP.cljs.core.Symbol("loom.alg", "dijkstra-span", 
"loom.alg/dijkstra-span", 370332998, null), cljs$cst$3056$subgraph_reachable_from = new $APP.cljs.core.Symbol(null, "subgraph-reachable-from", "subgraph-reachable-from", 710935075, null), cljs$cst$2884$loom_DOT_graph_SLASH_remove_edges_STAR_ = new $APP.cljs.core.Symbol("loom.graph", "remove-edges*", "loom.graph/remove-edges*", -1940171001, null), cljs$cst$2730$adj = new $APP.cljs.core.Keyword(null, "adj", "adj", -1344630196), cljs$cst$2960$astar_dist = new $APP.cljs.core.Symbol(null, "astar-dist", 
"astar-dist", 1764827203, null), cljs$cst$2921$density = new $APP.cljs.core.Symbol(null, "density", "density", -23624414, null), cljs$cst$2970$loom_DOT_alg_SLASH_strongly_connected_QMARK_ = new $APP.cljs.core.Symbol("loom.alg", "strongly-connected?", "loom.alg/strongly-connected?", -2032724695, null), cljs$cst$2844$map__GT_BasicEditableWeightedDigraph = new $APP.cljs.core.Symbol(null, "map-\x3eBasicEditableWeightedDigraph", "map-\x3eBasicEditableWeightedDigraph", 501664836, null), cljs$cst$2942$dijkstra_path_dist = 
new $APP.cljs.core.Symbol(null, "dijkstra-path-dist", "dijkstra-path-dist", 1979081127, null), cljs$cst$3030$loom_DOT_attr_SLASH_hilite = new $APP.cljs.core.Symbol("loom.attr", "hilite", "loom.attr/hilite", -1384571869, null), cljs$cst$2784$add_nodes_STAR_ = new $APP.cljs.core.Keyword(null, "add-nodes*", "add-nodes*", -657799391), cljs$cst$2779$add_edges_STAR_ = new $APP.cljs.core.Symbol(null, "add-edges*", "add-edges*", -542804279, null), cljs$cst$3053$loom_DOT_derived = new $APP.cljs.core.Symbol(null, 
"loom.derived", "loom.derived", -671289115, null), cljs$cst$2735$fsuccessors = new $APP.cljs.core.Keyword(null, "fsuccessors", "fsuccessors", 1827759207), cljs$cst$3022$add_attr_to_all = new $APP.cljs.core.Symbol(null, "add-attr-to-all", "add-attr-to-all", -42978248, null), cljs$cst$2873$loom_DOT_graph_SLASH_add_edges_STAR_ = new $APP.cljs.core.Symbol("loom.graph", "add-edges*", "loom.graph/add-edges*", -1720435058, null), cljs$cst$3011$add_attrs_to_all = new $APP.cljs.core.Symbol(null, "add-attrs-to-all", 
"add-attrs-to-all", 456058216, null), cljs$cst$2934$coloring = new $APP.cljs.core.Symbol(null, "coloring", "coloring", -336949604, null), cljs$cst$2727$bitmaps = new $APP.cljs.core.Symbol(null, "bitmaps", "bitmaps", -1506736927, null), cljs$cst$2859$loom_DOT_graph_SLASH_predecessors = new $APP.cljs.core.Symbol("loom.graph", "predecessors", "loom.graph/predecessors", -1429212905, null), cljs$cst$2964$loom_DOT_alg_SLASH_distinct_edges = new $APP.cljs.core.Symbol("loom.alg", "distinct-edges", "loom.alg/distinct-edges", 
637782738, null), cljs$cst$2983$loom_DOT_alg_SLASH_astar_path = new $APP.cljs.core.Symbol("loom.alg", "astar-path", "loom.alg/astar-path", -385707295, null), cljs$cst$2765$__GT_FlyGraph = new $APP.cljs.core.Symbol(null, "-\x3eFlyGraph", "-\x3eFlyGraph", 1835530892, null), cljs$cst$2816$remove_nodes = new $APP.cljs.core.Symbol(null, "remove-nodes", "remove-nodes", -854532219, null), cljs$cst$3029$loom_DOT_attr_SLASH_hilite_path = new $APP.cljs.core.Symbol("loom.attr", "hilite-path", "loom.attr/hilite-path", 
-2071273141, null), cljs$cst$2851$map__GT_FlyGraph = new $APP.cljs.core.Symbol(null, "map-\x3eFlyGraph", "map-\x3eFlyGraph", -503487461, null), cljs$cst$2943$max_flow = new $APP.cljs.core.Symbol(null, "max-flow", "max-flow", -1662736593, null), cljs$cst$2736$fnodes = new $APP.cljs.core.Symbol(null, "fnodes", "fnodes", 1004698034, null), cljs$cst$2894$loom_DOT_graph_SLASH___GT_WeightedFlyGraph = new $APP.cljs.core.Symbol("loom.graph", "-\x3eWeightedFlyGraph", "loom.graph/-\x3eWeightedFlyGraph", 983733181, 
null), cljs$cst$2902$loom_DOT_graph_SLASH_build_graph = new $APP.cljs.core.Symbol("loom.graph", "build-graph", "loom.graph/build-graph", 153465198, null), cljs$cst$3060$edges_filtered_by = new $APP.cljs.core.Symbol(null, "edges-filtered-by", "edges-filtered-by", -1564747396, null), cljs$cst$2985$loom_DOT_alg_SLASH_bellman_ford = new $APP.cljs.core.Symbol("loom.alg", "bellman-ford", "loom.alg/bellman-ford", 105901779, null), cljs$cst$2974$loom_DOT_alg_SLASH_eql_QMARK_ = new $APP.cljs.core.Symbol("loom.alg", 
"eql?", "loom.alg/eql?", -717815282, null), cljs$cst$2762$weight = new $APP.cljs.core.Symbol(null, "weight", "weight", 377735322, null), cljs$cst$3045$labeled_QMARK_ = new $APP.cljs.core.Symbol(null, "labeled?", "labeled?", 1547904087, null), cljs$cst$2939$bipartite_color = new $APP.cljs.core.Symbol(null, "bipartite-color", "bipartite-color", -674238092, null), cljs$cst$2806$subgraph = new $APP.cljs.core.Symbol(null, "subgraph", "subgraph", 1530189053, null), cljs$cst$2907$loom_DOT_graph_SLASH_out_edges = 
new $APP.cljs.core.Symbol("loom.graph", "out-edges", "loom.graph/out-edges", 1222283512, null), cljs$cst$2726$idx__GT_node = new $APP.cljs.core.Symbol(null, "idx-\x3enode", "idx-\x3enode", -842528594, null), cljs$cst$2858$loom_DOT_graph_SLASH_map__GT_BasicEditableGraph = new $APP.cljs.core.Symbol("loom.graph", "map-\x3eBasicEditableGraph", "loom.graph/map-\x3eBasicEditableGraph", 719689305, null), cljs$cst$2804$fly_graph = new $APP.cljs.core.Symbol(null, "fly-graph", "fly-graph", 1112837232, null), 
cljs$cst$2975$loom_DOT_alg_SLASH_bf_path = new $APP.cljs.core.Symbol("loom.alg", "bf-path", "loom.alg/bf-path", -196473346, null), cljs$cst$2763$n1 = new $APP.cljs.core.Symbol(null, "n1", "n1", -47149660, null), cljs$cst$2764$n2 = new $APP.cljs.core.Symbol(null, "n2", "n2", -1172545453, null), cljs$cst$3035$LabeledGraph = new $APP.cljs.core.Symbol(null, "LabeledGraph", "LabeledGraph", -1011752266, null), cljs$cst$2966$loom_DOT_alg_SLASH_dijkstra_traverse = new $APP.cljs.core.Symbol("loom.alg", "dijkstra-traverse", 
"loom.alg/dijkstra-traverse", 613359937, null), cljs$cst$2953$bf_path_bi = new $APP.cljs.core.Symbol(null, "bf-path-bi", "bf-path-bi", -151692435, null), cljs$cst$2920$wg = new $APP.cljs.core.Symbol(null, "wg", "wg", 834571664, null), cljs$cst$3042$loom_DOT_label_SLASH_add_label = new $APP.cljs.core.Symbol("loom.label", "add-label", "loom.label/add-label", -1586741930, null), cljs$cst$3041$loom_DOT_label_SLASH_LabeledGraph = new $APP.cljs.core.Symbol("loom.label", "LabeledGraph", "loom.label/LabeledGraph", 
4319697, null), cljs$cst$2799$map__GT_WeightedFlyGraph = new $APP.cljs.core.Symbol(null, "map-\x3eWeightedFlyGraph", "map-\x3eWeightedFlyGraph", 1872498614, null), cljs$cst$2972$loom_DOT_alg_SLASH_prim_mst = new $APP.cljs.core.Symbol("loom.alg", "prim-mst", "loom.alg/prim-mst", -1741379577, null), cljs$cst$2842$map__GT_BasicEditableDigraph = new $APP.cljs.core.Symbol(null, "map-\x3eBasicEditableDigraph", "map-\x3eBasicEditableDigraph", 402058934, null), cljs$cst$2857$loom_DOT_graph_SLASH_digraph = 
new $APP.cljs.core.Symbol("loom.graph", "digraph", "loom.graph/digraph", -6917709, null), cljs$cst$3001$loom_DOT_alg_SLASH_bf_all_pairs_shortest_paths = new $APP.cljs.core.Symbol("loom.alg", "bf-all-pairs-shortest-paths", "loom.alg/bf-all-pairs-shortest-paths", -367810415, null), cljs$cst$2922$loops = new $APP.cljs.core.Symbol(null, "loops", "loops", -126150028, null), cljs$cst$2855$loom_DOT_graph_SLASH___GT_FlyGraph = new $APP.cljs.core.Symbol("loom.graph", "-\x3eFlyGraph", "loom.graph/-\x3eFlyGraph", 
-1599556915, null), cljs$cst$2940$bellman_ford = new $APP.cljs.core.Symbol(null, "bellman-ford", "bellman-ford", -1879375998, null), cljs$cst$2914$dag_QMARK_ = new $APP.cljs.core.Symbol(null, "dag?", "dag?", -1483351094, null), cljs$cst$2925$g2 = new $APP.cljs.core.Symbol(null, "g2", "g2", 1161180146, null), cljs$cst$2924$g1 = new $APP.cljs.core.Symbol(null, "g1", "g1", -667661576, null), cljs$cst$2849$map__GT_WeightedFlyDigraph = new $APP.cljs.core.Symbol(null, "map-\x3eWeightedFlyDigraph", "map-\x3eWeightedFlyDigraph", 
-122112200, null), cljs$cst$2824$map__GT_BasicEditableWeightedGraph = new $APP.cljs.core.Symbol(null, "map-\x3eBasicEditableWeightedGraph", "map-\x3eBasicEditableWeightedGraph", 1034762079, null), cljs$cst$2801$loom_DOT_graph_SLASH_EditableGraph = new $APP.cljs.core.Symbol("loom.graph", "EditableGraph", "loom.graph/EditableGraph", -23568766, null), cljs$cst$2803$__GT_BasicEditableWeightedGraph = new $APP.cljs.core.Symbol(null, "-\x3eBasicEditableWeightedGraph", "-\x3eBasicEditableWeightedGraph", 
840527817, null), cljs$cst$2913$dijkstra_traverse = new $APP.cljs.core.Symbol(null, "dijkstra-traverse", "dijkstra-traverse", -1570754546, null), cljs$cst$2958$pre_span = new $APP.cljs.core.Symbol(null, "pre-span", "pre-span", -1583350207, null), cljs$cst$2948$bipartite_QMARK_ = new $APP.cljs.core.Symbol(null, "bipartite?", "bipartite?", -81822747, null), cljs$cst$2798$loom_DOT_graph_SLASH_WeightedGraph = new $APP.cljs.core.Symbol("loom.graph", "WeightedGraph", "loom.graph/WeightedGraph", 206686686, 
null), cljs$cst$2829$predecessors_STAR_ = new $APP.cljs.core.Keyword(null, "predecessors*", "predecessors*", -1352664267), cljs$cst$3047$add_labeled_nodes = new $APP.cljs.core.Symbol(null, "add-labeled-nodes", "add-labeled-nodes", 1044598444, null), cljs$cst$2986$loom_DOT_alg_SLASH_johnson = new $APP.cljs.core.Symbol("loom.alg", "johnson", "loom.alg/johnson", -1915081633, null), cljs$cst$2725$node__GT_idx = new $APP.cljs.core.Symbol(null, "node-\x3eidx", "node-\x3eidx", 1793236754, null), cljs$cst$3051$edges_PLUS_labels = 
new $APP.cljs.core.Symbol(null, "edges+labels", "edges+labels", -1362321625, null), cljs$cst$3059$loom_DOT_derived_SLASH_nodes_filtered_by = new $APP.cljs.core.Symbol("loom.derived", "nodes-filtered-by", "loom.derived/nodes-filtered-by", -487860202, null), cljs$cst$2791$__GT_BasicEditableDigraph = new $APP.cljs.core.Symbol(null, "-\x3eBasicEditableDigraph", "-\x3eBasicEditableDigraph", -1806154564, null), cljs$cst$2749$edmonds_karp = new $APP.cljs.core.Keyword(null, "edmonds-karp", "edmonds-karp", 
-1793813821), cljs$cst$2895$loom_DOT_graph_SLASH___GT_BasicEditableWeightedDigraph = new $APP.cljs.core.Symbol("loom.graph", "-\x3eBasicEditableWeightedDigraph", "loom.graph/-\x3eBasicEditableWeightedDigraph", -1486043782, null), cljs$cst$2841$out_edges = new $APP.cljs.core.Keyword(null, "out-edges", "out-edges", -1470029068), cljs$cst$2794$weighted_QMARK_ = new $APP.cljs.core.Symbol(null, "weighted?", "weighted?", -2080484415, null), cljs$cst$2954$connected_components = new $APP.cljs.core.Symbol(null, 
"connected-components", "connected-components", 1311965868, null), cljs$cst$2867$loom_DOT_graph_SLASH_weighted_QMARK_ = new $APP.cljs.core.Symbol("loom.graph", "weighted?", "loom.graph/weighted?", 1091115782, null), cljs$cst$2982$loom_DOT_alg_SLASH_coloring_QMARK_ = new $APP.cljs.core.Symbol("loom.alg", "coloring?", "loom.alg/coloring?", -1453198878, null), cljs$cst$2741$fweight = new $APP.cljs.core.Keyword(null, "fweight", "fweight", 1299924141), cljs$cst$3024$loom_DOT_attr_SLASH_attr_QMARK_ = new $APP.cljs.core.Symbol("loom.attr", 
"attr?", "loom.attr/attr?", -1182504599, null), cljs$cst$2979$loom_DOT_alg_SLASH_subgraph_QMARK_ = new $APP.cljs.core.Symbol("loom.alg", "subgraph?", "loom.alg/subgraph?", -383118799, null), cljs$cst$3033$loom_DOT_attr_SLASH_attrs = new $APP.cljs.core.Symbol("loom.attr", "attrs", "loom.attr/attrs", 692042368, null), cljs$cst$2742$fweight = new $APP.cljs.core.Symbol(null, "fweight", "fweight", -1354511628, null), cljs$cst$3043$loom_DOT_label_SLASH_remove_label = new $APP.cljs.core.Symbol("loom.label", 
"remove-label", "loom.label/remove-label", -1568539452, null), cljs$cst$2723$idx__GT_node = new $APP.cljs.core.Keyword(null, "idx-\x3enode", "idx-\x3enode", 1811907175), cljs$cst$2893$loom_DOT_graph_SLASH_map__GT_BasicEditableWeightedGraph = new $APP.cljs.core.Symbol("loom.graph", "map-\x3eBasicEditableWeightedGraph", "loom.graph/map-\x3eBasicEditableWeightedGraph", 1943818014, null), cljs$cst$2788$remove_all = new $APP.cljs.core.Keyword(null, "remove-all", "remove-all", 641637880), cljs$cst$3040$remove_label = 
new $APP.cljs.core.Keyword(null, "remove-label", "remove-label", -20356072), cljs$cst$2837$has_node_QMARK_ = new $APP.cljs.core.Keyword(null, "has-node?", "has-node?", 723558202), cljs$cst$2739$fpredecessors = new $APP.cljs.core.Keyword(null, "fpredecessors", "fpredecessors", -1412828934), cljs$cst$2802$__GT_FlyDigraph = new $APP.cljs.core.Symbol(null, "-\x3eFlyDigraph", "-\x3eFlyDigraph", 1128567497, null), cljs$cst$2976$loom_DOT_alg_SLASH_post_traverse = new $APP.cljs.core.Symbol("loom.alg", "post-traverse", 
"loom.alg/post-traverse", -1621120530, null), cljs$cst$2755$bold = new $APP.cljs.core.Keyword(null, "bold", "bold", -116809535), cljs$cst$3039$add_label = new $APP.cljs.core.Keyword(null, "add-label", "add-label", 28553208), cljs$cst$2886$loom_DOT_graph_SLASH_remove_nodes_STAR_ = new $APP.cljs.core.Symbol("loom.graph", "remove-nodes*", "loom.graph/remove-nodes*", -690249780, null), cljs$cst$2990$loom_DOT_alg_SLASH_prim_mst_edges = new $APP.cljs.core.Symbol("loom.alg", "prim-mst-edges", "loom.alg/prim-mst-edges", 
1058756696, null), cljs$cst$2871$loom_DOT_graph_SLASH_map__GT_WeightedFlyGraph = new $APP.cljs.core.Symbol("loom.graph", "map-\x3eWeightedFlyGraph", "loom.graph/map-\x3eWeightedFlyGraph", -1389410441, null), cljs$cst$2961$bf_span = new $APP.cljs.core.Symbol(null, "bf-span", "bf-span", -1673990661, null), cljs$cst$3064$loom_DOT_derived_SLASH_bipartite_subgraph = new $APP.cljs.core.Symbol("loom.derived", "bipartite-subgraph", "loom.derived/bipartite-subgraph", -1014815603, null), cljs$cst$2864$loom_DOT_graph_SLASH___GT_BasicEditableDigraph = 
new $APP.cljs.core.Symbol("loom.graph", "-\x3eBasicEditableDigraph", "loom.graph/-\x3eBasicEditableDigraph", -693461901, null), cljs$cst$2721$return_seen = new $APP.cljs.core.Keyword(null, "return-seen", "return-seen", 308792727), cljs$cst$3023$loom_DOT_attr_SLASH_remove_attr = new $APP.cljs.core.Symbol("loom.attr", "remove-attr", "loom.attr/remove-attr", -600989205, null), cljs$cst$2883$loom_DOT_graph_SLASH_remove_nodes = new $APP.cljs.core.Symbol("loom.graph", "remove-nodes", "loom.graph/remove-nodes", 
148969028, null), cljs$cst$2887$loom_DOT_graph_SLASH_predecessors_STAR_ = new $APP.cljs.core.Symbol("loom.graph", "predecessors*", "loom.graph/predecessors*", -858171075, null), cljs$cst$2733$fnodes = new $APP.cljs.core.Keyword(null, "fnodes", "fnodes", -635833493), cljs$cst$2949$scc = new $APP.cljs.core.Symbol(null, "scc", "scc", 10281E3, null), cljs$cst$2746$predecessors = new $APP.cljs.core.Keyword(null, "predecessors", "predecessors", 229913357), cljs$cst$2877$loom_DOT_graph_SLASH_fly_graph = 
new $APP.cljs.core.Symbol("loom.graph", "fly-graph", "loom.graph/fly-graph", -1645853641, null), cljs$cst$2808$WeightedGraph = new $APP.cljs.core.Symbol(null, "WeightedGraph", "WeightedGraph", -233926247, null), cljs$cst$2728$dest = new $APP.cljs.core.Keyword(null, "dest", "dest", -34569477), cljs$cst$2785$add_edges_STAR_ = new $APP.cljs.core.Keyword(null, "add-edges*", "add-edges*", 2111631490), cljs$cst$2898$loom_DOT_graph_SLASH_map__GT_BasicEditableWeightedDigraph = new $APP.cljs.core.Symbol("loom.graph", 
"map-\x3eBasicEditableWeightedDigraph", "loom.graph/map-\x3eBasicEditableWeightedDigraph", 1513362437, null), cljs$cst$2967$loom_DOT_alg_SLASH_dag_QMARK_ = new $APP.cljs.core.Symbol("loom.alg", "dag?", "loom.alg/dag?", 1581706397, null), cljs$cst$2885$loom_DOT_graph_SLASH_map__GT_FlyDigraph = new $APP.cljs.core.Symbol("loom.graph", "map-\x3eFlyDigraph", "loom.graph/map-\x3eFlyDigraph", 1144726296, null), cljs$cst$3031$loom_DOT_attr_SLASH_add_attr_to_all = new $APP.cljs.core.Symbol("loom.attr", "add-attr-to-all", 
"loom.attr/add-attr-to-all", 1098728218, null), cljs$cst$2836$out_edges = new $APP.cljs.core.Symbol(null, "out-edges", "out-edges", 170502459, null), cljs$cst$2890$loom_DOT_graph_SLASH_out_degree = new $APP.cljs.core.Symbol("loom.graph", "out-degree", "loom.graph/out-degree", -872106586, null), cljs$cst$2900$loom_DOT_graph_SLASH_transpose = new $APP.cljs.core.Symbol("loom.graph", "transpose", "loom.graph/transpose", -2029056658, null), cljs$cst$2917$strongly_connected_QMARK_ = new $APP.cljs.core.Symbol(null, 
"strongly-connected?", "strongly-connected?", 251799034, null), cljs$cst$2809$weight_STAR_ = new $APP.cljs.core.Keyword(null, "weight*", "weight*", -1611351297), cljs$cst$2747$weight = new $APP.cljs.core.Keyword(null, "weight", "weight", -1262796205), cljs$cst$2876$loom_DOT_graph_SLASH___GT_BasicEditableWeightedGraph = new $APP.cljs.core.Symbol("loom.graph", "-\x3eBasicEditableWeightedGraph", "loom.graph/-\x3eBasicEditableWeightedGraph", 1892308746, null), cljs$cst$2769$inits = new $APP.cljs.core.Symbol(null, 
"inits", "inits", 805706667, null), cljs$cst$2757$scittle_DOT_loom_SLASH_loom = new $APP.cljs.core.Keyword("scittle.loom", "loom", "scittle.loom/loom", -106077634), cljs$cst$2787$remove_edges_STAR_ = new $APP.cljs.core.Keyword(null, "remove-edges*", "remove-edges*", -373225345), cljs$cst$2944$sink = new $APP.cljs.core.Symbol(null, "sink", "sink", 1827367460, null), cljs$cst$2923$eql_QMARK_ = new $APP.cljs.core.Symbol(null, "eql?", "eql?", 1283723615, null), cljs$cst$2797$weight_STAR_ = new $APP.cljs.core.Symbol(null, 
"weight*", "weight*", 29180230, null), cljs$cst$2892$loom_DOT_graph_SLASH_dest = new $APP.cljs.core.Symbol("loom.graph", "dest", "loom.graph/dest", 502153349, null), cljs$cst$2860$loom_DOT_graph_SLASH_weighted_graph = new $APP.cljs.core.Symbol("loom.graph", "weighted-graph", "loom.graph/weighted-graph", -142656716, null), cljs$cst$3062$bipartite_subgraph = new $APP.cljs.core.Symbol(null, "bipartite-subgraph", "bipartite-subgraph", 569764701, null), cljs$cst$2810$Edge = new $APP.cljs.core.Symbol(null, 
"Edge", "Edge", 2015335885, null), cljs$cst$2854$loom_DOT_graph_SLASH_weight = new $APP.cljs.core.Symbol("loom.graph", "weight", "loom.graph/weight", -923602725, null), cljs$cst$2862$loom_DOT_graph_SLASH_editable_QMARK_ = new $APP.cljs.core.Symbol("loom.graph", "editable?", "loom.graph/editable?", 836630579, null), cljs$cst$2830$in_degree = new $APP.cljs.core.Keyword(null, "in-degree", "in-degree", -519033808), cljs$cst$2981$loom_DOT_alg_SLASH_dijkstra_path = new $APP.cljs.core.Symbol("loom.alg", 
"dijkstra-path", "loom.alg/dijkstra-path", 969988940, null), cljs$cst$3004$loom_DOT_alg_SLASH_bf_traverse = new $APP.cljs.core.Symbol("loom.alg", "bf-traverse", "loom.alg/bf-traverse", 84069388, null), cljs$cst$2734$fedges = new $APP.cljs.core.Keyword(null, "fedges", "fedges", 499673923), cljs$cst$2781$remove_nodes_STAR_ = new $APP.cljs.core.Symbol(null, "remove-nodes*", "remove-nodes*", 321562383, null), cljs$cst$2901$loom_DOT_graph_SLASH_src = new $APP.cljs.core.Symbol("loom.graph", "src", "loom.graph/src", 
1015956139, null);
var loom = {alg_generic:{}};
loom.alg_generic.trace_path = function($preds$$, $node$$) {
  return $APP.cljs.core.take_while.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.identity, $APP.cljs.core.iterate($preds$$, $node$$));
};
loom.alg_generic.paths = function($preds$$, $path$$) {
  var $this_node$$ = $APP.cljs.core.peek($path$$);
  return $APP.cljs.core.cons($path$$, $APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(function($G__31169_p1__31167_SHARP_$$) {
    $G__31169_p1__31167_SHARP_$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($path$$, $G__31169_p1__31167_SHARP_$$);
    return loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2 ? loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2($preds$$, $G__31169_p1__31167_SHARP_$$) : loom.alg_generic.paths.call(null, $preds$$, $G__31169_p1__31167_SHARP_$$);
  }, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2(function($p1__31166_SHARP_$$) {
    return $APP.cljs.core.not_any_QMARK_(function($edge$$) {
      return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($edge$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$this_node$$, $p1__31166_SHARP_$$], null));
    }, $APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$3(2, 1, $path$$));
  }, $preds$$.cljs$core$IFn$_invoke$arity$1 ? $preds$$.cljs$core$IFn$_invoke$arity$1($this_node$$) : $preds$$.call(null, $this_node$$))], 0)));
};
loom.alg_generic.trace_paths = function($preds$$, $start$$) {
  return $APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2(function($G__31171$$) {
    $G__31171$$ = $APP.cljs.core.peek($G__31171$$);
    return $preds$$.cljs$core$IFn$_invoke$arity$1 ? $preds$$.cljs$core$IFn$_invoke$arity$1($G__31171$$) : $preds$$.call(null, $G__31171$$);
  }, loom.alg_generic.paths($preds$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$start$$], null)));
};
loom.alg_generic.preds__GT_span = function($preds$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($span$$, $p$$) {
    var $n$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p$$, 0, null);
    $p$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p$$, 1, null);
    if ($APP.cljs.core.truth_($p$$)) {
      var $JSCompiler_temp_const$$ = $APP.cljs.core.assoc, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.cljs$core$IFn$_invoke$arity$3, $JSCompiler_temp_const$jscomp$1$$ = $APP.cljs.core.conj, $JSCompiler_temp_const$jscomp$2$$ = $JSCompiler_temp_const$jscomp$1$$.cljs$core$IFn$_invoke$arity$2;
      var $G__31177$jscomp$inline_5076_JSCompiler_inline_result$$ = $APP.cljs.core.PersistentVector.EMPTY;
      $G__31177$jscomp$inline_5076_JSCompiler_inline_result$$ = $span$$.cljs$core$IFn$_invoke$arity$2 ? $span$$.cljs$core$IFn$_invoke$arity$2($p$$, $G__31177$jscomp$inline_5076_JSCompiler_inline_result$$) : $span$$.call(null, $p$$, $G__31177$jscomp$inline_5076_JSCompiler_inline_result$$);
      return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $span$$, $p$$, $JSCompiler_temp_const$jscomp$2$$.call($JSCompiler_temp_const$jscomp$1$$, $G__31177$jscomp$inline_5076_JSCompiler_inline_result$$, $n$$));
    }
    return $span$$;
  }, $APP.cljs.core.PersistentArrayMap.EMPTY, $preds$$);
};
loom.alg_generic.pre_traverse = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$223_argseq__5756__auto__$$ = [], $len__5749__auto___31458$$ = arguments.length, $i__5750__auto___31461$$ = 0;;) {
    if ($i__5750__auto___31461$$ < $len__5749__auto___31458$$) {
      $args__5755__auto__$jscomp$223_argseq__5756__auto__$$.push(arguments[$i__5750__auto___31461$$]), $i__5750__auto___31461$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$223_argseq__5756__auto__$$ = 2 < $args__5755__auto__$jscomp$223_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$223_argseq__5756__auto__$$.slice(2), 0, null) : null;
  return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args__5755__auto__$jscomp$223_argseq__5756__auto__$$);
};
loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = function($successors$$, $start$$, $map__31182__$1_p__31181_seen$$) {
  $map__31182__$1_p__31181_seen$$ = $APP.cljs.core.__destructure_map($map__31182__$1_p__31181_seen$$);
  $map__31182__$1_p__31181_seen$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($map__31182__$1_p__31181_seen$$, $APP.cljs$cst$2720$seen, $APP.cljs.core.PersistentHashSet.EMPTY);
  return function $loom$alg_generic$step$$($stack$$, $seen__$1$$) {
    var $temp__5825__auto__$$ = $APP.cljs.core.peek($stack$$);
    if ($APP.cljs.core.truth_($temp__5825__auto__$$)) {
      if ($APP.cljs.core.contains_QMARK_($seen__$1$$, $temp__5825__auto__$$)) {
        return $loom$alg_generic$step$$($APP.cljs.core.pop($stack$$), $seen__$1$$);
      }
      var $seen__$2$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($seen__$1$$, $temp__5825__auto__$$), $nbrs$$ = $APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2($seen__$2$$, $successors$$.cljs$core$IFn$_invoke$arity$1 ? $successors$$.cljs$core$IFn$_invoke$arity$1($temp__5825__auto__$$) : $successors$$.call(null, $temp__5825__auto__$$));
      return new $APP.cljs.core.LazySeq(null, function() {
        return $APP.cljs.core.cons($temp__5825__auto__$$, $loom$alg_generic$step$$($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.pop($stack$$), $nbrs$$), $seen__$2$$));
      }, null, null);
    }
    return null;
  }(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$start$$], null), $map__31182__$1_p__31181_seen$$);
};
loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = 2;
loom.alg_generic.pre_traverse.cljs$lang$applyTo = function($G__31180$$) {
  var $G__31179$$ = $APP.cljs.core.first($G__31180$$), $seq31178__$1_seq31178__$2$$ = $APP.cljs.core.next($G__31180$$);
  $G__31180$$ = $APP.cljs.core.first($seq31178__$1_seq31178__$2$$);
  $seq31178__$1_seq31178__$2$$ = $APP.cljs.core.next($seq31178__$1_seq31178__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__31179$$, $G__31180$$, $seq31178__$1_seq31178__$2$$);
};
loom.alg_generic.pre_edge_traverse = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$224_argseq__5756__auto__$$ = [], $len__5749__auto___31463$$ = arguments.length, $i__5750__auto___31464$$ = 0;;) {
    if ($i__5750__auto___31464$$ < $len__5749__auto___31463$$) {
      $args__5755__auto__$jscomp$224_argseq__5756__auto__$$.push(arguments[$i__5750__auto___31464$$]), $i__5750__auto___31464$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$224_argseq__5756__auto__$$ = 2 < $args__5755__auto__$jscomp$224_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$224_argseq__5756__auto__$$.slice(2), 0, null) : null;
  return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args__5755__auto__$jscomp$224_argseq__5756__auto__$$);
};
loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = function($successors$$, $start$$, $p__31186$$) {
  var $map__31187__$1$$ = $APP.cljs.core.__destructure_map($p__31186$$), $seen$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($map__31187__$1$$, $APP.cljs$cst$2720$seen, $APP.cljs.core.PersistentHashSet.EMPTY), $step$$ = function $loom$alg_generic$step$$($G__31466_successors__$1$$, $start__$1$$, $G__31467_nbrs$jscomp$1_temp__5825__auto__$$, $G__31469_stack$$, $G__31470_nbrstack$$, $G__31471_seen__$1$$) {
    for (;;) {
      var $G__31468_temp__5823__auto__$$ = $APP.cljs.core.first($G__31467_nbrs$jscomp$1_temp__5825__auto__$$);
      if ($APP.cljs.core.truth_($G__31468_temp__5823__auto__$$)) {
        var $nbr$$ = $G__31468_temp__5823__auto__$$;
        return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$start__$1$$, $nbr$$], null), new $APP.cljs.core.LazySeq(null, function($successors__$1$$, $start__$1$$, $nbrs$$, $stack$$, $nbrstack$$, $seen__$1$$, $nbr$$, $temp__5823__auto__$$, $map__31187$$, $map__31187__$1$$, $seen$$) {
          return function() {
            var $seen__$2$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($seen__$1$$, $start__$1$$);
            return $APP.cljs.core.truth_($seen__$2$$.cljs$core$IFn$_invoke$arity$1 ? $seen__$2$$.cljs$core$IFn$_invoke$arity$1($nbr$$) : $seen__$2$$.call(null, $nbr$$)) ? $loom$alg_generic$step$$($successors__$1$$, $start__$1$$, $APP.cljs.core.next($nbrs$$), $stack$$, $nbrstack$$, $seen__$2$$) : $loom$alg_generic$step$$($successors__$1$$, $nbr$$, $successors__$1$$.cljs$core$IFn$_invoke$arity$1 ? $successors__$1$$.cljs$core$IFn$_invoke$arity$1($nbr$$) : $successors__$1$$.call(null, $nbr$$), $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($stack$$, 
            $start__$1$$), $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($nbrstack$$, $APP.cljs.core.next($nbrs$$)), $seen__$2$$);
          };
        }($G__31466_successors__$1$$, $start__$1$$, $G__31467_nbrs$jscomp$1_temp__5825__auto__$$, $G__31469_stack$$, $G__31470_nbrstack$$, $G__31471_seen__$1$$, $nbr$$, $G__31468_temp__5823__auto__$$, $p__31186$$, $map__31187__$1$$, $seen$$), null, null));
      }
      $G__31467_nbrs$jscomp$1_temp__5825__auto__$$ = $APP.cljs.core.peek($G__31469_stack$$);
      if ($APP.cljs.core.truth_($G__31467_nbrs$jscomp$1_temp__5825__auto__$$)) {
        $G__31468_temp__5823__auto__$$ = $APP.cljs.core.peek($G__31470_nbrstack$$), $G__31469_stack$$ = $APP.cljs.core.pop($G__31469_stack$$), $G__31470_nbrstack$$ = $APP.cljs.core.pop($G__31470_nbrstack$$), $G__31471_seen__$1$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__31471_seen__$1$$, $start__$1$$), $start__$1$$ = $G__31467_nbrs$jscomp$1_temp__5825__auto__$$, $G__31467_nbrs$jscomp$1_temp__5825__auto__$$ = $G__31468_temp__5823__auto__$$;
      } else {
        return null;
      }
    }
  };
  return $APP.cljs.core.truth_($seen$$.cljs$core$IFn$_invoke$arity$1 ? $seen$$.cljs$core$IFn$_invoke$arity$1($start$$) : $seen$$.call(null, $start$$)) ? null : $step$$($successors$$, $start$$, $successors$$.cljs$core$IFn$_invoke$arity$1 ? $successors$$.cljs$core$IFn$_invoke$arity$1($start$$) : $successors$$.call(null, $start$$), $APP.cljs.core.PersistentVector.EMPTY, $APP.cljs.core.PersistentVector.EMPTY, $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($seen$$, $start$$));
};
loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = 2;
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = function($G__31185$$) {
  var $G__31184$$ = $APP.cljs.core.first($G__31185$$), $seq31183__$1_seq31183__$2$$ = $APP.cljs.core.next($G__31185$$);
  $G__31185$$ = $APP.cljs.core.first($seq31183__$1_seq31183__$2$$);
  $seq31183__$1_seq31183__$2$$ = $APP.cljs.core.next($seq31183__$1_seq31183__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__31184$$, $G__31185$$, $seq31183__$1_seq31183__$2$$);
};
loom.alg_generic.pre_span = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$225_argseq__5756__auto__$$ = [], $len__5749__auto___31472$$ = arguments.length, $i__5750__auto___31473$$ = 0;;) {
    if ($i__5750__auto___31473$$ < $len__5749__auto___31472$$) {
      $args__5755__auto__$jscomp$225_argseq__5756__auto__$$.push(arguments[$i__5750__auto___31473$$]), $i__5750__auto___31473$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$225_argseq__5756__auto__$$ = 2 < $args__5755__auto__$jscomp$225_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$225_argseq__5756__auto__$$.slice(2), 0, null) : null;
  return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args__5755__auto__$jscomp$225_argseq__5756__auto__$$);
};
loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = function($successors$$, $G__31477$jscomp$1_G__31480_stack$jscomp$36_start$$, $map__31192__$1_p__31191_return_seen$$) {
  $map__31192__$1_p__31191_return_seen$$ = $APP.cljs.core.__destructure_map($map__31192__$1_p__31191_return_seen$$);
  var $G__31476_G__31479$jscomp$1_preds$jscomp$20_seen$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($map__31192__$1_p__31191_return_seen$$, $APP.cljs$cst$2720$seen, $APP.cljs.core.PersistentHashSet.EMPTY);
  $map__31192__$1_p__31191_return_seen$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__31192__$1_p__31191_return_seen$$, cljs$cst$2721$return_seen);
  var $G__31478$jscomp$1_seen__$1$jscomp$5_temp__5823__auto__$$ = $G__31476_G__31479$jscomp$1_preds$jscomp$20_seen$$;
  $G__31476_G__31479$jscomp$1_preds$jscomp$20_seen$$ = $APP.cljs.core.PersistentArrayMap.createAsIfByAssoc([$G__31477$jscomp$1_G__31480_stack$jscomp$36_start$$, null]);
  for ($G__31477$jscomp$1_G__31480_stack$jscomp$36_start$$ = new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__31477$jscomp$1_G__31480_stack$jscomp$36_start$$], null);;) {
    if ($APP.cljs.core.empty_QMARK_($G__31477$jscomp$1_G__31480_stack$jscomp$36_start$$)) {
      return $APP.cljs.core.truth_($map__31192__$1_p__31191_return_seen$$) ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [loom.alg_generic.preds__GT_span($G__31476_G__31479$jscomp$1_preds$jscomp$20_seen$$), $G__31478$jscomp$1_seen__$1$jscomp$5_temp__5823__auto__$$], null) : loom.alg_generic.preds__GT_span($G__31476_G__31479$jscomp$1_preds$jscomp$20_seen$$);
    }
    var $v$$ = $APP.cljs.core.peek($G__31477$jscomp$1_G__31480_stack$jscomp$36_start$$), $G__31475_seen__$2$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__31478$jscomp$1_seen__$1$jscomp$5_temp__5823__auto__$$, $v$$);
    $G__31478$jscomp$1_seen__$1$jscomp$5_temp__5823__auto__$$ = $APP.cljs.core.first($APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2($G__31475_seen__$2$$, $successors$$.cljs$core$IFn$_invoke$arity$1 ? $successors$$.cljs$core$IFn$_invoke$arity$1($v$$) : $successors$$.call(null, $v$$)));
    $APP.cljs.core.truth_($G__31478$jscomp$1_seen__$1$jscomp$5_temp__5823__auto__$$) ? ($G__31476_G__31479$jscomp$1_preds$jscomp$20_seen$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__31476_G__31479$jscomp$1_preds$jscomp$20_seen$$, $G__31478$jscomp$1_seen__$1$jscomp$5_temp__5823__auto__$$, $v$$), $G__31477$jscomp$1_G__31480_stack$jscomp$36_start$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__31477$jscomp$1_G__31480_stack$jscomp$36_start$$, $G__31478$jscomp$1_seen__$1$jscomp$5_temp__5823__auto__$$), 
    $G__31478$jscomp$1_seen__$1$jscomp$5_temp__5823__auto__$$ = $G__31475_seen__$2$$) : ($G__31478$jscomp$1_seen__$1$jscomp$5_temp__5823__auto__$$ = $G__31475_seen__$2$$, $G__31477$jscomp$1_G__31480_stack$jscomp$36_start$$ = $APP.cljs.core.pop($G__31477$jscomp$1_G__31480_stack$jscomp$36_start$$));
  }
};
loom.alg_generic.pre_span.cljs$lang$maxFixedArity = 2;
loom.alg_generic.pre_span.cljs$lang$applyTo = function($G__31190$$) {
  var $G__31189$$ = $APP.cljs.core.first($G__31190$$), $seq31188__$1_seq31188__$2$$ = $APP.cljs.core.next($G__31190$$);
  $G__31190$$ = $APP.cljs.core.first($seq31188__$1_seq31188__$2$$);
  $seq31188__$1_seq31188__$2$$ = $APP.cljs.core.next($seq31188__$1_seq31188__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__31189$$, $G__31190$$, $seq31188__$1_seq31188__$2$$);
};
loom.alg_generic.post_traverse = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$226_argseq__5756__auto__$$ = [], $len__5749__auto___31481$$ = arguments.length, $i__5750__auto___31482$$ = 0;;) {
    if ($i__5750__auto___31482$$ < $len__5749__auto___31481$$) {
      $args__5755__auto__$jscomp$226_argseq__5756__auto__$$.push(arguments[$i__5750__auto___31482$$]), $i__5750__auto___31482$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$226_argseq__5756__auto__$$ = 2 < $args__5755__auto__$jscomp$226_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$226_argseq__5756__auto__$$.slice(2), 0, null) : null;
  return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args__5755__auto__$jscomp$226_argseq__5756__auto__$$);
};
loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = function($successors$$, $G__31486_G__31489_stack$jscomp$37_start$$, $map__31197__$1_p__31196_return_seen$$) {
  $map__31197__$1_p__31196_return_seen$$ = $APP.cljs.core.__destructure_map($map__31197__$1_p__31196_return_seen$$);
  var $G__31485$jscomp$1_G__31488$jscomp$1_result$jscomp$144_seen$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($map__31197__$1_p__31196_return_seen$$, $APP.cljs$cst$2720$seen, $APP.cljs.core.PersistentHashSet.EMPTY);
  $map__31197__$1_p__31196_return_seen$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__31197__$1_p__31196_return_seen$$, cljs$cst$2721$return_seen);
  var $G__31484_nbrs$jscomp$3_seen__$1$$ = $G__31485$jscomp$1_G__31488$jscomp$1_result$jscomp$144_seen$$;
  $G__31485$jscomp$1_G__31488$jscomp$1_result$jscomp$144_seen$$ = $APP.cljs.core.PersistentVector.EMPTY;
  for ($G__31486_G__31489_stack$jscomp$37_start$$ = new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__31486_G__31489_stack$jscomp$37_start$$], null);;) {
    if ($APP.cljs.core.empty_QMARK_($G__31486_G__31489_stack$jscomp$37_start$$)) {
      return $APP.cljs.core.truth_($map__31197__$1_p__31196_return_seen$$) ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__31485$jscomp$1_G__31488$jscomp$1_result$jscomp$144_seen$$, $G__31484_nbrs$jscomp$3_seen__$1$$], null) : $G__31485$jscomp$1_G__31488$jscomp$1_result$jscomp$144_seen$$;
    }
    var $G__31487$jscomp$1_v$$ = $APP.cljs.core.peek($G__31486_G__31489_stack$jscomp$37_start$$), $seen__$2$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__31484_nbrs$jscomp$3_seen__$1$$, $G__31487$jscomp$1_v$$);
    $G__31484_nbrs$jscomp$3_seen__$1$$ = $APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2($seen__$2$$, $successors$$.cljs$core$IFn$_invoke$arity$1 ? $successors$$.cljs$core$IFn$_invoke$arity$1($G__31487$jscomp$1_v$$) : $successors$$.call(null, $G__31487$jscomp$1_v$$));
    $APP.cljs.core.empty_QMARK_($G__31484_nbrs$jscomp$3_seen__$1$$) ? ($G__31484_nbrs$jscomp$3_seen__$1$$ = $seen__$2$$, $G__31485$jscomp$1_G__31488$jscomp$1_result$jscomp$144_seen$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__31485$jscomp$1_G__31488$jscomp$1_result$jscomp$144_seen$$, $G__31487$jscomp$1_v$$), $G__31486_G__31489_stack$jscomp$37_start$$ = $APP.cljs.core.pop($G__31486_G__31489_stack$jscomp$37_start$$)) : ($G__31487$jscomp$1_v$$ = $seen__$2$$, $G__31486_G__31489_stack$jscomp$37_start$$ = 
    $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__31486_G__31489_stack$jscomp$37_start$$, $APP.cljs.core.first($G__31484_nbrs$jscomp$3_seen__$1$$)), $G__31484_nbrs$jscomp$3_seen__$1$$ = $G__31487$jscomp$1_v$$);
  }
};
loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = 2;
loom.alg_generic.post_traverse.cljs$lang$applyTo = function($G__31195$$) {
  var $G__31194$$ = $APP.cljs.core.first($G__31195$$), $seq31193__$1_seq31193__$2$$ = $APP.cljs.core.next($G__31195$$);
  $G__31195$$ = $APP.cljs.core.first($seq31193__$1_seq31193__$2$$);
  $seq31193__$1_seq31193__$2$$ = $APP.cljs.core.next($seq31193__$1_seq31193__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__31194$$, $G__31195$$, $seq31193__$1_seq31193__$2$$);
};
loom.alg_generic.post_edge_traverse = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$227_argseq__5756__auto__$$ = [], $len__5749__auto___31490$$ = arguments.length, $i__5750__auto___31491$$ = 0;;) {
    if ($i__5750__auto___31491$$ < $len__5749__auto___31490$$) {
      $args__5755__auto__$jscomp$227_argseq__5756__auto__$$.push(arguments[$i__5750__auto___31491$$]), $i__5750__auto___31491$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$227_argseq__5756__auto__$$ = 2 < $args__5755__auto__$jscomp$227_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$227_argseq__5756__auto__$$.slice(2), 0, null) : null;
  return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args__5755__auto__$jscomp$227_argseq__5756__auto__$$);
};
loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = function($successors$$, $G__31505_start$jscomp$189_start__$1$jscomp$16_temp__5823__auto____$1$$, $map__31202__$1_p__31201_return_seen$$) {
  $map__31202__$1_p__31201_return_seen$$ = $APP.cljs.core.__destructure_map($map__31202__$1_p__31201_return_seen$$);
  var $G__31498$jscomp$1_G__31504_G__31510$jscomp$1_edges$jscomp$1_seen$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($map__31202__$1_p__31201_return_seen$$, $APP.cljs$cst$2720$seen, $APP.cljs.core.PersistentHashSet.EMPTY);
  $map__31202__$1_p__31201_return_seen$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__31202__$1_p__31201_return_seen$$, cljs$cst$2721$return_seen);
  if ($APP.cljs.core.truth_($G__31498$jscomp$1_G__31504_G__31510$jscomp$1_edges$jscomp$1_seen$$.cljs$core$IFn$_invoke$arity$1 ? $G__31498$jscomp$1_G__31504_G__31510$jscomp$1_edges$jscomp$1_seen$$.cljs$core$IFn$_invoke$arity$1($G__31505_start$jscomp$189_start__$1$jscomp$16_temp__5823__auto____$1$$) : $G__31498$jscomp$1_G__31504_G__31510$jscomp$1_edges$jscomp$1_seen$$.call(null, $G__31505_start$jscomp$189_start__$1$jscomp$16_temp__5823__auto____$1$$))) {
    return $APP.cljs.core.truth_($map__31202__$1_p__31201_return_seen$$) ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [null, $G__31498$jscomp$1_G__31504_G__31510$jscomp$1_edges$jscomp$1_seen$$], null) : null;
  }
  var $G__31494_G__31506_nbrs$$ = $successors$$.cljs$core$IFn$_invoke$arity$1 ? $successors$$.cljs$core$IFn$_invoke$arity$1($G__31505_start$jscomp$189_start__$1$jscomp$16_temp__5823__auto____$1$$) : $successors$$.call(null, $G__31505_start$jscomp$189_start__$1$jscomp$16_temp__5823__auto____$1$$), $G__31495_G__31501_G__31507_stack$$ = $APP.cljs.core.PersistentVector.EMPTY, $G__31496_G__31502_G__31508$jscomp$1_nbrstack$$ = $APP.cljs.core.PersistentVector.EMPTY, $G__31497$jscomp$1_G__31503_G__31509$jscomp$1_seen__$1$jscomp$7_seen__$2$$ = 
  $G__31498$jscomp$1_G__31504_G__31510$jscomp$1_edges$jscomp$1_seen$$;
  for ($G__31498$jscomp$1_G__31504_G__31510$jscomp$1_edges$jscomp$1_seen$$ = $APP.cljs.core.List.EMPTY;;) {
    $G__31497$jscomp$1_G__31503_G__31509$jscomp$1_seen__$1$jscomp$7_seen__$2$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__31497$jscomp$1_G__31503_G__31509$jscomp$1_seen__$1$jscomp$7_seen__$2$$, $G__31505_start$jscomp$189_start__$1$jscomp$16_temp__5823__auto____$1$$);
    var $nbr$jscomp$2_temp__5823__auto__$$ = $APP.cljs.core.first($G__31494_G__31506_nbrs$$);
    if ($APP.cljs.core.truth_($nbr$jscomp$2_temp__5823__auto__$$)) {
      if ($APP.cljs.core.truth_($G__31497$jscomp$1_G__31503_G__31509$jscomp$1_seen__$1$jscomp$7_seen__$2$$.cljs$core$IFn$_invoke$arity$1 ? $G__31497$jscomp$1_G__31503_G__31509$jscomp$1_seen__$1$jscomp$7_seen__$2$$.cljs$core$IFn$_invoke$arity$1($nbr$jscomp$2_temp__5823__auto__$$) : $G__31497$jscomp$1_G__31503_G__31509$jscomp$1_seen__$1$jscomp$7_seen__$2$$.call(null, $nbr$jscomp$2_temp__5823__auto__$$))) {
        var $G__31493$jscomp$1_G__31499$$ = $G__31505_start$jscomp$189_start__$1$jscomp$16_temp__5823__auto____$1$$;
        $G__31494_G__31506_nbrs$$ = $APP.cljs.core.next($G__31494_G__31506_nbrs$$);
        $G__31498$jscomp$1_G__31504_G__31510$jscomp$1_edges$jscomp$1_seen$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__31498$jscomp$1_G__31504_G__31510$jscomp$1_edges$jscomp$1_seen$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__31505_start$jscomp$189_start__$1$jscomp$16_temp__5823__auto____$1$$, $nbr$jscomp$2_temp__5823__auto__$$], null));
        $G__31505_start$jscomp$189_start__$1$jscomp$16_temp__5823__auto____$1$$ = $G__31493$jscomp$1_G__31499$$;
      } else {
        $G__31493$jscomp$1_G__31499$$ = $nbr$jscomp$2_temp__5823__auto__$$;
        var $G__31500$$ = $successors$$.cljs$core$IFn$_invoke$arity$1 ? $successors$$.cljs$core$IFn$_invoke$arity$1($nbr$jscomp$2_temp__5823__auto__$$) : $successors$$.call(null, $nbr$jscomp$2_temp__5823__auto__$$);
        $G__31495_G__31501_G__31507_stack$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__31495_G__31501_G__31507_stack$$, $G__31505_start$jscomp$189_start__$1$jscomp$16_temp__5823__auto____$1$$);
        $G__31496_G__31502_G__31508$jscomp$1_nbrstack$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__31496_G__31502_G__31508$jscomp$1_nbrstack$$, $APP.cljs.core.next($G__31494_G__31506_nbrs$$));
        $G__31498$jscomp$1_G__31504_G__31510$jscomp$1_edges$jscomp$1_seen$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__31498$jscomp$1_G__31504_G__31510$jscomp$1_edges$jscomp$1_seen$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__31505_start$jscomp$189_start__$1$jscomp$16_temp__5823__auto____$1$$, $nbr$jscomp$2_temp__5823__auto__$$], null));
        $G__31505_start$jscomp$189_start__$1$jscomp$16_temp__5823__auto____$1$$ = $G__31493$jscomp$1_G__31499$$;
        $G__31494_G__31506_nbrs$$ = $G__31500$$;
      }
    } else {
      if ($G__31505_start$jscomp$189_start__$1$jscomp$16_temp__5823__auto____$1$$ = $APP.cljs.core.peek($G__31495_G__31501_G__31507_stack$$), $APP.cljs.core.truth_($G__31505_start$jscomp$189_start__$1$jscomp$16_temp__5823__auto____$1$$)) {
        $G__31494_G__31506_nbrs$$ = $APP.cljs.core.peek($G__31496_G__31502_G__31508$jscomp$1_nbrstack$$), $G__31495_G__31501_G__31507_stack$$ = $APP.cljs.core.pop($G__31495_G__31501_G__31507_stack$$), $G__31496_G__31502_G__31508$jscomp$1_nbrstack$$ = $APP.cljs.core.pop($G__31496_G__31502_G__31508$jscomp$1_nbrstack$$);
      } else {
        return $APP.cljs.core.truth_($map__31202__$1_p__31201_return_seen$$) ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__31498$jscomp$1_G__31504_G__31510$jscomp$1_edges$jscomp$1_seen$$, $G__31497$jscomp$1_G__31503_G__31509$jscomp$1_seen__$1$jscomp$7_seen__$2$$], null) : $G__31498$jscomp$1_G__31504_G__31510$jscomp$1_edges$jscomp$1_seen$$;
      }
    }
  }
};
loom.alg_generic.post_edge_traverse.cljs$lang$maxFixedArity = 2;
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = function($G__31200_seq31198$$) {
  var $G__31199$$ = $APP.cljs.core.first($G__31200_seq31198$$), $seq31198__$1_seq31198__$2$$ = $APP.cljs.core.next($G__31200_seq31198$$);
  $G__31200_seq31198$$ = $APP.cljs.core.first($seq31198__$1_seq31198__$2$$);
  $seq31198__$1_seq31198__$2$$ = $APP.cljs.core.next($seq31198__$1_seq31198__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__31199$$, $G__31200_seq31198$$, $seq31198__$1_seq31198__$2$$);
};
loom.alg_generic.topsort_component = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 4:
      return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2 = function($successors$$, $start$$) {
  return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4($successors$$, $start$$, $APP.cljs.core.PersistentHashSet.EMPTY, $APP.cljs.core.PersistentHashSet.EMPTY);
};
loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4 = function($successors$$, $G__31515_G__31519$jscomp$1_stack$jscomp$39_start$$, $G__31514_G__31518$jscomp$1_result$jscomp$145_seen$$, $G__31513_G__31517$$) {
  var $G__31516_seen__$1$$ = $G__31514_G__31518$jscomp$1_result$jscomp$145_seen$$;
  $G__31514_G__31518$jscomp$1_result$jscomp$145_seen$$ = $APP.cljs.core.List.EMPTY;
  for ($G__31515_G__31519$jscomp$1_stack$jscomp$39_start$$ = new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__31515_G__31519$jscomp$1_stack$jscomp$39_start$$], null);;) {
    if ($APP.cljs.core.empty_QMARK_($G__31515_G__31519$jscomp$1_stack$jscomp$39_start$$)) {
      return $G__31514_G__31518$jscomp$1_result$jscomp$145_seen$$;
    }
    var $G__31512_v$$ = $APP.cljs.core.peek($G__31515_G__31519$jscomp$1_stack$jscomp$39_start$$), $seen__$2$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__31516_seen__$1$$, $G__31512_v$$);
    $G__31516_seen__$1$$ = $APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2($G__31513_G__31517$$, $successors$$.cljs$core$IFn$_invoke$arity$1 ? $successors$$.cljs$core$IFn$_invoke$arity$1($G__31512_v$$) : $successors$$.call(null, $G__31512_v$$));
    if ($APP.cljs.core.seq($G__31516_seen__$1$$)) {
      if ($APP.cljs.core.truth_($APP.cljs.core.some($seen__$2$$, $G__31516_seen__$1$$))) {
        return null;
      }
      $G__31512_v$$ = $seen__$2$$;
      $G__31515_G__31519$jscomp$1_stack$jscomp$39_start$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__31515_G__31519$jscomp$1_stack$jscomp$39_start$$, $APP.cljs.core.first($G__31516_seen__$1$$));
      $G__31516_seen__$1$$ = $G__31512_v$$;
    } else {
      $G__31516_seen__$1$$ = $seen__$2$$, $G__31513_G__31517$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__31513_G__31517$$, $G__31512_v$$), $G__31514_G__31518$jscomp$1_result$jscomp$145_seen$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__31514_G__31518$jscomp$1_result$jscomp$145_seen$$, $G__31512_v$$), $G__31515_G__31519$jscomp$1_stack$jscomp$39_start$$ = $APP.cljs.core.pop($G__31515_G__31519$jscomp$1_stack$jscomp$39_start$$);
    }
  }
};
loom.alg_generic.topsort_component.cljs$lang$maxFixedArity = 4;
loom.alg_generic.bf_traverse = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$228_argseq__5756__auto__$$ = [], $len__5749__auto___31520$$ = arguments.length, $i__5750__auto___31521$$ = 0;;) {
    if ($i__5750__auto___31521$$ < $len__5749__auto___31520$$) {
      $args__5755__auto__$jscomp$228_argseq__5756__auto__$$.push(arguments[$i__5750__auto___31521$$]), $i__5750__auto___31521$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$228_argseq__5756__auto__$$ = 2 < $args__5755__auto__$jscomp$228_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$228_argseq__5756__auto__$$.slice(2), 0, null) : null;
  return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args__5755__auto__$jscomp$228_argseq__5756__auto__$$);
};
loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = function($successors$$, $start$$, $map__31213__$1_p__31212$$) {
  $map__31213__$1_p__31212$$ = $APP.cljs.core.__destructure_map($map__31213__$1_p__31212$$);
  var $f$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__31213__$1_p__31212$$, $APP.cljs$cst$373$f), $when$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__31213__$1_p__31212$$, $APP.cljs$cst$717$when), $seen$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__31213__$1_p__31212$$, $APP.cljs$cst$2720$seen), $f__$1$$ = function() {
    return $APP.cljs.core.truth_($f$$) ? $f$$ : function($n$$, $p$$, $d$$) {
      return $n$$;
    };
  }(), $nbr_pred$$ = $APP.cljs.core.truth_($when$$) ? $when$$ : $APP.cljs.core.constantly(!0);
  return function $loom$alg_generic$step$$($queue$$, $preds$$) {
    var $temp__5825__auto__$$ = $APP.cljs.core.peek($queue$$);
    if ($APP.cljs.core.truth_($temp__5825__auto__$$)) {
      var $node$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($temp__5825__auto__$$, 0, null), $depth$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($temp__5825__auto__$$, 1, null);
      return $APP.cljs.core.cons($f__$1$$.cljs$core$IFn$_invoke$arity$3 ? $f__$1$$.cljs$core$IFn$_invoke$arity$3($node$$, $preds$$, $depth$$) : $f__$1$$.call(null, $node$$, $preds$$, $depth$$), new $APP.cljs.core.LazySeq(null, function() {
        var $nbrs$$ = $APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2(function($p1__31206_SHARP_$$) {
          var $G__31229$$ = $depth$$ + 1;
          return $nbr_pred$$.cljs$core$IFn$_invoke$arity$3 ? $nbr_pred$$.cljs$core$IFn$_invoke$arity$3($p1__31206_SHARP_$$, $node$$, $G__31229$$) : $nbr_pred$$.call(null, $p1__31206_SHARP_$$, $node$$, $G__31229$$);
        }, $APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2(function($p1__31205_SHARP_$$) {
          return $APP.cljs.core.contains_QMARK_($preds$$, $p1__31205_SHARP_$$);
        }, $successors$$.cljs$core$IFn$_invoke$arity$1 ? $successors$$.cljs$core$IFn$_invoke$arity$1($node$$) : $successors$$.call(null, $node$$)));
        return $loom$alg_generic$step$$($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.pop($queue$$), function() {
          return function $loom$alg_generic$step_$_iter__31230$$($s__31231$$) {
            return new $APP.cljs.core.LazySeq(null, function() {
              for (;;) {
                var $s__31231__$2_temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__31231$$);
                if ($s__31231__$2_temp__5825__auto____$1$$) {
                  if ($APP.cljs.core.chunked_seq_QMARK_($s__31231__$2_temp__5825__auto____$1$$)) {
                    var $JSCompiler_inline_result$jscomp$929_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__31231__$2_temp__5825__auto____$1$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$929_c__5501__auto__$$), $b__31233_nbr$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                    a: {
                      for (var $i__31232$$ = 0;;) {
                        if ($i__31232$$ < $size__5502__auto__$$) {
                          var $nbr$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$929_c__5501__auto__$$, $i__31232$$);
                          $APP.cljs.core.chunk_append($b__31233_nbr$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$nbr$$, $depth$$ + 1], null));
                          $i__31232$$ += 1;
                        } else {
                          $JSCompiler_inline_result$jscomp$929_c__5501__auto__$$ = !0;
                          break a;
                        }
                      }
                      $JSCompiler_inline_result$jscomp$929_c__5501__auto__$$ = void 0;
                    }
                    return $JSCompiler_inline_result$jscomp$929_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__31233_nbr$$), $loom$alg_generic$step_$_iter__31230$$($APP.cljs.core.chunk_rest($s__31231__$2_temp__5825__auto____$1$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__31233_nbr$$), null);
                  }
                  $b__31233_nbr$$ = $APP.cljs.core.first($s__31231__$2_temp__5825__auto____$1$$);
                  return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$b__31233_nbr$$, $depth$$ + 1], null), $loom$alg_generic$step_$_iter__31230$$($APP.cljs.core.rest($s__31231__$2_temp__5825__auto____$1$$)));
                }
                return null;
              }
            }, null, null);
          }($nbrs$$);
        }()), $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($p1__31207_SHARP_$$, $p2__31208_SHARP_$$) {
          return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($p1__31207_SHARP_$$, $p2__31208_SHARP_$$, $node$$);
        }, $preds$$, $nbrs$$));
      }, null, null));
    }
    return null;
  }($APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentQueue.EMPTY, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$start$$, 0], null)), $APP.cljs.core.map_QMARK_($seen$$) ? $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($seen$$, $start$$, null) : $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.createAsIfByAssoc([$start$$, null]), function() {
    return function $loom$alg_generic$iter__31234$$($s__31235$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (;;) {
          var $s__31235__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__31235$$);
          if ($s__31235__$2_temp__5825__auto__$$) {
            if ($APP.cljs.core.chunked_seq_QMARK_($s__31235__$2_temp__5825__auto__$$)) {
              var $JSCompiler_inline_result$jscomp$930_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__31235__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$930_c__5501__auto__$$), $b__31237_s$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              a: {
                for (var $i__31236$$ = 0;;) {
                  if ($i__31236$$ < $size__5502__auto__$$) {
                    var $s$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$930_c__5501__auto__$$, $i__31236$$);
                    $APP.cljs.core.chunk_append($b__31237_s$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$s$$, null], null));
                    $i__31236$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$930_c__5501__auto__$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$930_c__5501__auto__$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$930_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__31237_s$$), $loom$alg_generic$iter__31234$$($APP.cljs.core.chunk_rest($s__31235__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__31237_s$$), null);
            }
            $b__31237_s$$ = $APP.cljs.core.first($s__31235__$2_temp__5825__auto__$$);
            return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$b__31237_s$$, null], null), $loom$alg_generic$iter__31234$$($APP.cljs.core.rest($s__31235__$2_temp__5825__auto__$$)));
          }
          return null;
        }
      }, null, null);
    }($seen$$);
  }()));
};
loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = 2;
loom.alg_generic.bf_traverse.cljs$lang$applyTo = function($G__31211$$) {
  var $G__31210$$ = $APP.cljs.core.first($G__31211$$), $seq31209__$1_seq31209__$2$$ = $APP.cljs.core.next($G__31211$$);
  $G__31211$$ = $APP.cljs.core.first($seq31209__$1_seq31209__$2$$);
  $seq31209__$1_seq31209__$2$$ = $APP.cljs.core.next($seq31209__$1_seq31209__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__31210$$, $G__31211$$, $seq31209__$1_seq31209__$2$$);
};
loom.alg_generic.bf_span = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$229_argseq__5756__auto__$$ = [], $len__5749__auto___31525$$ = arguments.length, $i__5750__auto___31526$$ = 0;;) {
    if ($i__5750__auto___31526$$ < $len__5749__auto___31525$$) {
      $args__5755__auto__$jscomp$229_argseq__5756__auto__$$.push(arguments[$i__5750__auto___31526$$]), $i__5750__auto___31526$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$229_argseq__5756__auto__$$ = 2 < $args__5755__auto__$jscomp$229_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$229_argseq__5756__auto__$$.slice(2), 0, null) : null;
  return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args__5755__auto__$jscomp$229_argseq__5756__auto__$$);
};
loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = function($successors$$, $start$$, $map__31242__$1_p__31241_seen$$) {
  $map__31242__$1_p__31241_seen$$ = $APP.cljs.core.__destructure_map($map__31242__$1_p__31241_seen$$);
  $map__31242__$1_p__31241_seen$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__31242__$1_p__31241_seen$$, $APP.cljs$cst$2720$seen);
  return loom.alg_generic.preds__GT_span($APP.cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic($successors$$, $start$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$373$f, function($_$$, $pm$$, $___$1$$) {
    return $pm$$;
  }, $APP.cljs$cst$2720$seen, $map__31242__$1_p__31241_seen$$], 0))));
};
loom.alg_generic.bf_span.cljs$lang$maxFixedArity = 2;
loom.alg_generic.bf_span.cljs$lang$applyTo = function($G__31240$$) {
  var $G__31239$$ = $APP.cljs.core.first($G__31240$$), $seq31238__$1_seq31238__$2$$ = $APP.cljs.core.next($G__31240$$);
  $G__31240$$ = $APP.cljs.core.first($seq31238__$1_seq31238__$2$$);
  $seq31238__$1_seq31238__$2$$ = $APP.cljs.core.next($seq31238__$1_seq31238__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__31239$$, $G__31240$$, $seq31238__$1_seq31238__$2$$);
};
loom.alg_generic.bf_path = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$230_argseq__5756__auto__$$ = [], $len__5749__auto___31528$$ = arguments.length, $i__5750__auto___31529$$ = 0;;) {
    if ($i__5750__auto___31529$$ < $len__5749__auto___31528$$) {
      $args__5755__auto__$jscomp$230_argseq__5756__auto__$$.push(arguments[$i__5750__auto___31529$$]), $i__5750__auto___31529$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$230_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$230_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$230_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$230_argseq__5756__auto__$$);
};
loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = function($successors$jscomp$9_temp__5825__auto__$$, $start$$, $end$$, $map__31248__$1_opts__$1$$) {
  $map__31248__$1_opts__$1$$ = $APP.cljs.core.__destructure_map($map__31248__$1_opts__$1$$);
  $map__31248__$1_opts__$1$$ = $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$map__31248__$1_opts__$1$$, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$373$f, $APP.cljs.core.vector], null)], 0));
  $successors$jscomp$9_temp__5825__auto__$$ = $APP.cljs.core.some(function($p__31249$$) {
    $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__31249$$, 0, null);
    var $pm$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__31249$$, 1, null);
    $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__31249$$, 2, null);
    return $APP.cljs.core.truth_($pm$$.cljs$core$IFn$_invoke$arity$1 ? $pm$$.cljs$core$IFn$_invoke$arity$1($end$$) : $pm$$.call(null, $end$$)) ? $pm$$ : null;
  }, $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$4(loom.alg_generic.bf_traverse, $successors$jscomp$9_temp__5825__auto__$$, $start$$, $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.concat, $map__31248__$1_opts__$1$$)));
  return $APP.cljs.core.truth_($successors$jscomp$9_temp__5825__auto__$$) ? $APP.cljs.core.reverse(loom.alg_generic.trace_path($successors$jscomp$9_temp__5825__auto__$$, $end$$)) : null;
};
loom.alg_generic.bf_path.cljs$lang$maxFixedArity = 3;
loom.alg_generic.bf_path.cljs$lang$applyTo = function($G__31245$$) {
  var $G__31244$$ = $APP.cljs.core.first($G__31245$$), $G__31246$$ = $APP.cljs.core.next($G__31245$$);
  $G__31245$$ = $APP.cljs.core.first($G__31246$$);
  var $seq31243__$2_seq31243__$3$$ = $APP.cljs.core.next($G__31246$$);
  $G__31246$$ = $APP.cljs.core.first($seq31243__$2_seq31243__$3$$);
  $seq31243__$2_seq31243__$3$$ = $APP.cljs.core.next($seq31243__$2_seq31243__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__31244$$, $G__31245$$, $G__31246$$, $seq31243__$2_seq31243__$3$$);
};
loom.alg_generic.shared_keys = function($m1$$, $m2$$) {
  for (;;) {
    if ($APP.cljs.core.count($m2$$) < $APP.cljs.core.count($m1$$)) {
      var $G__31540$$ = $m1$$;
      $m1$$ = $m2$$;
      $m2$$ = $G__31540$$;
    } else {
      return $APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.contains_QMARK_, $m2$$), $APP.cljs.core.keys($m1$$));
    }
  }
};
loom.alg_generic.bf_path_bi = function($outgoing$$, $predecessors$$, $start$$, $end$$) {
  throw Error("Unsupported operation `bf-path-bi`");
};
loom.alg_generic.reverse_edges = function($successor_fn$$, $nodes$$, $coll$$) {
  return function $loom$alg_generic$reverse_edges_$_iter__31254$$($s__31255$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (var $s__31255__$1$$ = $s__31255$$;;) {
        var $iterys__5499__auto__$jscomp$32_temp__5825__auto__$$ = $APP.cljs.core.seq($s__31255__$1$$);
        if ($iterys__5499__auto__$jscomp$32_temp__5825__auto__$$) {
          var $xs__6385__auto__$$ = $iterys__5499__auto__$jscomp$32_temp__5825__auto__$$, $fs__5500__auto__$jscomp$32_node$$ = $APP.cljs.core.first($xs__6385__auto__$$);
          $iterys__5499__auto__$jscomp$32_temp__5825__auto__$$ = function($s__31255__$1$$, $node$$, $xs__6385__auto__$$, $temp__5825__auto__$$) {
            return function $loom$alg_generic$reverse_edges_$_iter__31254_$_iter__31256$$($s__31257$$) {
              return new $APP.cljs.core.LazySeq(null, function($s__31255__$1$$, $node$$, $xs__6385__auto__$$, $temp__5825__auto__$$) {
                return function() {
                  for (var $s__31257__$1_s__31257__$2_temp__5825__auto____$1$$ = $s__31257$$;;) {
                    if ($s__31257__$1_s__31257__$2_temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__31257__$1_s__31257__$2_temp__5825__auto____$1$$)) {
                      if ($APP.cljs.core.chunked_seq_QMARK_($s__31257__$1_s__31257__$2_temp__5825__auto____$1$$)) {
                        var $JSCompiler_inline_result$jscomp$931_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__31257__$1_s__31257__$2_temp__5825__auto____$1$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$931_c__5501__auto__$$), $b__31259_nbr$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                        a: {
                          for (var $i__31258$$ = 0;;) {
                            if ($i__31258$$ < $size__5502__auto__$$) {
                              var $nbr$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$931_c__5501__auto__$$, $i__31258$$);
                              $APP.cljs.core.contains_QMARK_($coll$$, $nbr$$) || $APP.cljs.core.chunk_append($b__31259_nbr$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$nbr$$, $node$$], null));
                              $i__31258$$ += 1;
                            } else {
                              $JSCompiler_inline_result$jscomp$931_c__5501__auto__$$ = !0;
                              break a;
                            }
                          }
                          $JSCompiler_inline_result$jscomp$931_c__5501__auto__$$ = void 0;
                        }
                        return $JSCompiler_inline_result$jscomp$931_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__31259_nbr$$), $loom$alg_generic$reverse_edges_$_iter__31254_$_iter__31256$$($APP.cljs.core.chunk_rest($s__31257__$1_s__31257__$2_temp__5825__auto____$1$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__31259_nbr$$), null);
                      }
                      $b__31259_nbr$$ = $APP.cljs.core.first($s__31257__$1_s__31257__$2_temp__5825__auto____$1$$);
                      if ($APP.cljs.core.contains_QMARK_($coll$$, $b__31259_nbr$$)) {
                        $s__31257__$1_s__31257__$2_temp__5825__auto____$1$$ = $APP.cljs.core.rest($s__31257__$1_s__31257__$2_temp__5825__auto____$1$$);
                        continue;
                      } else {
                        return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$b__31259_nbr$$, $node$$], null), $loom$alg_generic$reverse_edges_$_iter__31254_$_iter__31256$$($APP.cljs.core.rest($s__31257__$1_s__31257__$2_temp__5825__auto____$1$$)));
                      }
                    } else {
                      return null;
                    }
                    break;
                  }
                };
              }($s__31255__$1$$, $node$$, $xs__6385__auto__$$, $temp__5825__auto__$$), null, null);
            };
          }($s__31255__$1$$, $fs__5500__auto__$jscomp$32_node$$, $xs__6385__auto__$$, $iterys__5499__auto__$jscomp$32_temp__5825__auto__$$);
          if ($fs__5500__auto__$jscomp$32_node$$ = $APP.cljs.core.seq($iterys__5499__auto__$jscomp$32_temp__5825__auto__$$($successor_fn$$.cljs$core$IFn$_invoke$arity$1 ? $successor_fn$$.cljs$core$IFn$_invoke$arity$1($fs__5500__auto__$jscomp$32_node$$) : $successor_fn$$.call(null, $fs__5500__auto__$jscomp$32_node$$)))) {
            return $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($fs__5500__auto__$jscomp$32_node$$, $loom$alg_generic$reverse_edges_$_iter__31254$$($APP.cljs.core.rest($s__31255__$1$$)));
          }
          $s__31255__$1$$ = $APP.cljs.core.rest($s__31255__$1$$);
        } else {
          return null;
        }
      }
    }, null, null);
  }($nodes$$);
};
loom.alg_generic.conj_paths = function($from_map$$, $to_map$$, $matches$$) {
  return function $loom$alg_generic$conj_paths_$_iter__31260$$($s__31261$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (var $s__31261__$1$$ = $s__31261$$;;) {
        var $iterys__5499__auto__$jscomp$33_temp__5825__auto__$$ = $APP.cljs.core.seq($s__31261__$1$$);
        if ($iterys__5499__auto__$jscomp$33_temp__5825__auto__$$) {
          var $xs__6385__auto__$$ = $iterys__5499__auto__$jscomp$33_temp__5825__auto__$$, $fs__5500__auto__$jscomp$33_n$$ = $APP.cljs.core.first($xs__6385__auto__$$);
          $iterys__5499__auto__$jscomp$33_temp__5825__auto__$$ = function($s__31261__$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$) {
            return function $loom$alg_generic$conj_paths_$_iter__31260_$_iter__31262$$($s__31263$$) {
              return new $APP.cljs.core.LazySeq(null, function($s__31261__$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$) {
                return function() {
                  for (var $s__31263__$1$$ = $s__31263$$;;) {
                    var $fs__5500__auto__$jscomp$34_iterys__5499__auto__$jscomp$34_temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__31263__$1$$);
                    if ($fs__5500__auto__$jscomp$34_iterys__5499__auto__$jscomp$34_temp__5825__auto____$1$$) {
                      var $xs__6385__auto____$1$$ = $fs__5500__auto__$jscomp$34_iterys__5499__auto__$jscomp$34_temp__5825__auto____$1$$, $from$$ = $APP.cljs.core.first($xs__6385__auto____$1$$);
                      $fs__5500__auto__$jscomp$34_iterys__5499__auto__$jscomp$34_temp__5825__auto____$1$$ = function($s__31263__$1$$, $s__31261__$1$$, $from$$, $xs__6385__auto____$1$$, $temp__5825__auto____$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$) {
                        return function $loom$alg_generic$conj_paths_$_iter__31260_$_iter__31262_$_iter__31264$$($s__31265$$) {
                          return new $APP.cljs.core.LazySeq(null, function($s__31263__$1$$, $s__31261__$1$$, $from$$, $xs__6385__auto____$1$$, $temp__5825__auto____$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$) {
                            return function() {
                              for (;;) {
                                var $s__31265__$2_temp__5825__auto____$2$$ = $APP.cljs.core.seq($s__31265$$);
                                if ($s__31265__$2_temp__5825__auto____$2$$) {
                                  if ($APP.cljs.core.chunked_seq_QMARK_($s__31265__$2_temp__5825__auto____$2$$)) {
                                    var $JSCompiler_inline_result$jscomp$932_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__31265__$2_temp__5825__auto____$2$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$932_c__5501__auto__$$), $b__31267_to$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                                    a: {
                                      for (var $i__31266$$ = 0;;) {
                                        if ($i__31266$$ < $size__5502__auto__$$) {
                                          var $to$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$932_c__5501__auto__$$, $i__31266$$);
                                          $APP.cljs.core.chunk_append($b__31267_to$$, $APP.cljs.core.vec($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($from$$, $to$$)));
                                          $i__31266$$ += 1;
                                        } else {
                                          $JSCompiler_inline_result$jscomp$932_c__5501__auto__$$ = !0;
                                          break a;
                                        }
                                      }
                                      $JSCompiler_inline_result$jscomp$932_c__5501__auto__$$ = void 0;
                                    }
                                    return $JSCompiler_inline_result$jscomp$932_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__31267_to$$), $loom$alg_generic$conj_paths_$_iter__31260_$_iter__31262_$_iter__31264$$($APP.cljs.core.chunk_rest($s__31265__$2_temp__5825__auto____$2$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__31267_to$$), null);
                                  }
                                  $b__31267_to$$ = $APP.cljs.core.first($s__31265__$2_temp__5825__auto____$2$$);
                                  return $APP.cljs.core.cons($APP.cljs.core.vec($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($from$$, $b__31267_to$$)), $loom$alg_generic$conj_paths_$_iter__31260_$_iter__31262_$_iter__31264$$($APP.cljs.core.rest($s__31265__$2_temp__5825__auto____$2$$)));
                                }
                                return null;
                              }
                            };
                          }($s__31263__$1$$, $s__31261__$1$$, $from$$, $xs__6385__auto____$1$$, $temp__5825__auto____$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$), null, null);
                        };
                      }($s__31263__$1$$, $s__31261__$1$$, $from$$, $xs__6385__auto____$1$$, $fs__5500__auto__$jscomp$34_iterys__5499__auto__$jscomp$34_temp__5825__auto____$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$);
                      if ($fs__5500__auto__$jscomp$34_iterys__5499__auto__$jscomp$34_temp__5825__auto____$1$$ = $APP.cljs.core.seq($fs__5500__auto__$jscomp$34_iterys__5499__auto__$jscomp$34_temp__5825__auto____$1$$($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.rest, loom.alg_generic.trace_paths($to_map$$, $n$$))))) {
                        return $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($fs__5500__auto__$jscomp$34_iterys__5499__auto__$jscomp$34_temp__5825__auto____$1$$, $loom$alg_generic$conj_paths_$_iter__31260_$_iter__31262$$($APP.cljs.core.rest($s__31263__$1$$)));
                      }
                      $s__31263__$1$$ = $APP.cljs.core.rest($s__31263__$1$$);
                    } else {
                      return null;
                    }
                  }
                };
              }($s__31261__$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$), null, null);
            };
          }($s__31261__$1$$, $fs__5500__auto__$jscomp$33_n$$, $xs__6385__auto__$$, $iterys__5499__auto__$jscomp$33_temp__5825__auto__$$);
          if ($fs__5500__auto__$jscomp$33_n$$ = $APP.cljs.core.seq($iterys__5499__auto__$jscomp$33_temp__5825__auto__$$($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.reverse, loom.alg_generic.trace_paths($from_map$$, $fs__5500__auto__$jscomp$33_n$$))))) {
            return $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($fs__5500__auto__$jscomp$33_n$$, $loom$alg_generic$conj_paths_$_iter__31260$$($APP.cljs.core.rest($s__31261__$1$$)));
          }
          $s__31261__$1$$ = $APP.cljs.core.rest($s__31261__$1$$);
        } else {
          return null;
        }
      }
    }, null, null);
  }($matches$$);
};
loom.alg_generic.bf_paths_bi = function($all$jscomp$6_find_succs_successors$$, $find_preds_predecessors$$, $G__31605_G__31618$jscomp$1_q1_q1__$1_start$$, $G__31606_G__31619$jscomp$1_end$$) {
  $all$jscomp$6_find_succs_successors$$ = $APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.reverse_edges, $all$jscomp$6_find_succs_successors$$);
  $find_preds_predecessors$$ = $APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.reverse_edges, $find_preds_predecessors$$);
  var $overlaps$$ = function($coll$$, $q$$) {
    return $APP.cljs.core.seq($APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2(function($p1__31268_SHARP_$$) {
      return $APP.cljs.core.contains_QMARK_($coll$$, $p1__31268_SHARP_$$);
    }, $q$$));
  }, $map_set_pairs$$ = function($map$$, $pairs$$) {
    return $APP.cljs.core.persistent_BANG_($APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($map__$1$$, $p__31269_val$$) {
      var $key$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__31269_val$$, 0, null);
      $p__31269_val$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__31269_val$$, 1, null);
      return $APP.cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3($map__$1$$, $key$$, $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($map__$1$$, $key$$, $APP.cljs.core.PersistentHashSet.EMPTY), $p__31269_val$$));
    }, $APP.cljs.core.transient$($map$$), $pairs$$));
  }, $outgoing$$ = $APP.cljs.core.PersistentArrayMap.createAsIfByAssoc([$G__31605_G__31618$jscomp$1_q1_q1__$1_start$$, null]), $G__31604$jscomp$1_incoming$$ = $APP.cljs.core.PersistentArrayMap.createAsIfByAssoc([$G__31606_G__31619$jscomp$1_end$$, null]);
  $G__31605_G__31618$jscomp$1_q1_q1__$1_start$$ = new $APP.cljs.core.List(null, $G__31605_G__31618$jscomp$1_q1_q1__$1_start$$, null, 1, null);
  for ($G__31606_G__31619$jscomp$1_end$$ = new $APP.cljs.core.List(null, $G__31606_G__31619$jscomp$1_end$$, null, 1, null);;) {
    if ($APP.cljs.core.seq($G__31605_G__31618$jscomp$1_q1_q1__$1_start$$) && $APP.cljs.core.seq($G__31606_G__31619$jscomp$1_end$$)) {
      if ($APP.cljs.core.count($G__31605_G__31618$jscomp$1_q1_q1__$1_start$$) <= $APP.cljs.core.count($G__31606_G__31619$jscomp$1_end$$)) {
        var $pairs$jscomp$7_temp__5823__auto__$$ = $all$jscomp$6_find_succs_successors$$($G__31605_G__31618$jscomp$1_q1_q1__$1_start$$, $outgoing$$);
        $outgoing$$ = $map_set_pairs$$($outgoing$$, $pairs$jscomp$7_temp__5823__auto__$$);
        $G__31605_G__31618$jscomp$1_q1_q1__$1_start$$ = $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.first, $pairs$jscomp$7_temp__5823__auto__$$);
        if ($pairs$jscomp$7_temp__5823__auto__$$ = $overlaps$$($G__31604$jscomp$1_incoming$$, $G__31605_G__31618$jscomp$1_q1_q1__$1_start$$)) {
          return $all$jscomp$6_find_succs_successors$$ = $pairs$jscomp$7_temp__5823__auto__$$, loom.alg_generic.conj_paths($outgoing$$, $G__31604$jscomp$1_incoming$$, $APP.cljs.core.set($all$jscomp$6_find_succs_successors$$));
        }
      } else {
        if ($pairs$jscomp$7_temp__5823__auto__$$ = $find_preds_predecessors$$($G__31606_G__31619$jscomp$1_end$$, $G__31604$jscomp$1_incoming$$), $G__31604$jscomp$1_incoming$$ = $map_set_pairs$$($G__31604$jscomp$1_incoming$$, $pairs$jscomp$7_temp__5823__auto__$$), $G__31606_G__31619$jscomp$1_end$$ = $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.first, $pairs$jscomp$7_temp__5823__auto__$$), $pairs$jscomp$7_temp__5823__auto__$$ = $overlaps$$($outgoing$$, $G__31606_G__31619$jscomp$1_end$$)) {
          return $all$jscomp$6_find_succs_successors$$ = $pairs$jscomp$7_temp__5823__auto__$$, loom.alg_generic.conj_paths($outgoing$$, $G__31604$jscomp$1_incoming$$, $APP.cljs.core.set($all$jscomp$6_find_succs_successors$$));
        }
      }
    } else {
      return null;
    }
  }
};
loom.alg_generic.dijkstra_traverse = function($var_args$$) {
  switch(arguments.length) {
    case 3:
      return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = function($successors$$, $dist$$, $start$$) {
  return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4($successors$$, $dist$$, $start$$, $APP.cljs.core.vector);
};
loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = function($successors$$, $dist$$, $start$$, $f$$) {
  return function $loom$alg_generic$step$$($p__31288$$) {
    var $state$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__31288$$, 0, null), $pq$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__31288$$, 1, null), $temp__5825__auto__$$ = $APP.cljs.core.first($pq$$);
    if ($APP.cljs.core.truth_($temp__5825__auto__$$)) {
      var $dist_su$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($temp__5825__auto__$$, 0, null);
      $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($temp__5825__auto__$$, 1, null);
      var $u$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($temp__5825__auto__$$, 2, null);
      return $APP.cljs.core.cons($f$$.cljs$core$IFn$_invoke$arity$2 ? $f$$.cljs$core$IFn$_invoke$arity$2($u$$, $state$$) : $f$$.call(null, $u$$, $state$$), new $APP.cljs.core.LazySeq(null, function() {
        return $loom$alg_generic$step$$($APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($dist_suv_p__31295$$, $v$$) {
          var $state__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($dist_suv_p__31295$$, 0, null), $pq__$1_pq__$2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($dist_suv_p__31295$$, 1, null);
          $dist_suv_p__31295$$ = $dist_su$$ + ($dist$$.cljs$core$IFn$_invoke$arity$2 ? $dist$$.cljs$core$IFn$_invoke$arity$2($u$$, $v$$) : $dist$$.call(null, $u$$, $v$$));
          var $dist_sv$$ = $APP.cljs.core.first($state__$1$$.cljs$core$IFn$_invoke$arity$1 ? $state__$1$$.cljs$core$IFn$_invoke$arity$1($v$$) : $state__$1$$.call(null, $v$$)), $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.truth_;
          var $JSCompiler_inline_result$$ = $APP.cljs.core.truth_($dist_sv$$) ? $dist_suv_p__31295$$ >= $dist_sv$$ : $dist_sv$$;
          if ($JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_inline_result$$)) {
            return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$state__$1$$, $pq__$1_pq__$2$$], null);
          }
          $pq__$1_pq__$2$$ = $APP.cljs.core.truth_($dist_sv$$) ? $APP.cljs.core.disj.cljs$core$IFn$_invoke$arity$2($pq__$1_pq__$2$$, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$dist_sv$$, $APP.cljs.core.hash($v$$), $v$$], null)) : $pq__$1_pq__$2$$;
          return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($state__$1$$, $v$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$dist_suv_p__31295$$, $u$$], null)), $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($pq__$1_pq__$2$$, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$dist_suv_p__31295$$, $APP.cljs.core.hash($v$$), 
          $v$$], null))], null);
        }, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$state$$, $APP.cljs.core.disj.cljs$core$IFn$_invoke$arity$2($pq$$, $temp__5825__auto__$$)], null), $successors$$.cljs$core$IFn$_invoke$arity$1 ? $successors$$.cljs$core$IFn$_invoke$arity$1($u$$) : $successors$$.call(null, $u$$)));
      }, null, null));
    }
    return null;
  }(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.PersistentArrayMap.createAsIfByAssoc([$start$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0, null], null)]), $APP.cljs.core.sorted_set.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0, $APP.cljs.core.hash($start$$), 
  $start$$], null)], 0))], null));
};
loom.alg_generic.dijkstra_traverse.cljs$lang$maxFixedArity = 4;
loom.alg_generic.dijkstra_span = function($successors$$, $dist$$, $start$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($span$$, $d$$) {
    var $n$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($d$$, 0, null), $p$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($d$$, 1, null);
    $d$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p$$, 0, null);
    $p$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p$$, 1, null);
    return $APP.cljs.core.truth_($p$$) ? $APP.cljs.core.assoc_in($span$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$p$$, $n$$], null), $d$$) : $span$$;
  }, $APP.cljs.core.PersistentArrayMap.EMPTY, $APP.cljs.core.second($APP.cljs.core.last(loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3($successors$$, $dist$$, $start$$))));
};
loom.alg_generic.dijkstra_path_dist = function($end_state_successors$jscomp$14_temp__5823__auto__$$, $dist$$, $start$$, $end$$) {
  $end_state_successors$jscomp$14_temp__5823__auto__$$ = $APP.cljs.core.first($APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2(function($p__31306$$) {
    var $node$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__31306$$, 0, null);
    $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__31306$$, 1, null);
    return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($end$$, $node$$);
  }, loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3($end_state_successors$jscomp$14_temp__5823__auto__$$, $dist$$, $start$$)));
  return $APP.cljs.core.truth_($end_state_successors$jscomp$14_temp__5823__auto__$$) ? ($APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($end_state_successors$jscomp$14_temp__5823__auto__$$, 0, null), $end_state_successors$jscomp$14_temp__5823__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($end_state_successors$jscomp$14_temp__5823__auto__$$, 1, null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.reverse(loom.alg_generic.trace_path($APP.cljs.core.comp.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.second, 
  $end_state_successors$jscomp$14_temp__5823__auto__$$), $end$$)), $APP.cljs.core.first($end_state_successors$jscomp$14_temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $end_state_successors$jscomp$14_temp__5823__auto__$$.cljs$core$IFn$_invoke$arity$1($end$$) : $end_state_successors$jscomp$14_temp__5823__auto__$$.call(null, $end$$))], null)) : null;
};
loom.alg_generic.dijkstra_path = function($successors$$, $dist$$, $start$$, $end$$) {
  return $APP.cljs.core.first(loom.alg_generic.dijkstra_path_dist($successors$$, $dist$$, $start$$, $end$$));
};
loom.alg_generic.bits_per_long = $APP.cljs.core.long$(32);
loom.alg_generic.bm_longs = function($bits$$) {
  return $APP.cljs.core.long$(Math.ceil($bits$$ / loom.alg_generic.bits_per_long));
};
loom.alg_generic.bm_new = function() {
  return $APP.cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(1);
};
loom.alg_generic.bm_copy = function($bm$$, $size$$) {
  return $bm$$.slice(0, $size$$);
};
loom.alg_generic.bm_set = function($bitmap$$, $idx$jscomp$152_offset$$) {
  var $chunk$jscomp$14_x__5110__auto__$$ = $APP.cljs.core.count($bitmap$$), $y__5111__auto__$$ = loom.alg_generic.bm_longs($idx$jscomp$152_offset$$ + 1);
  $bitmap$$ = loom.alg_generic.bm_copy($bitmap$$, $chunk$jscomp$14_x__5110__auto__$$ > $y__5111__auto__$$ ? $chunk$jscomp$14_x__5110__auto__$$ : $y__5111__auto__$$);
  $chunk$jscomp$14_x__5110__auto__$$ = $APP.cljs.core.quot($idx$jscomp$152_offset$$, loom.alg_generic.bits_per_long);
  $idx$jscomp$152_offset$$ = $APP.cljs.core.mod($idx$jscomp$152_offset$$, loom.alg_generic.bits_per_long);
  $bitmap$$[$chunk$jscomp$14_x__5110__auto__$$] |= 0 | 1 << $idx$jscomp$152_offset$$;
  return $bitmap$$;
};
loom.alg_generic.bm_get = function($bitmap$$, $idx$jscomp$153_offset$$) {
  if (loom.alg_generic.bm_longs($idx$jscomp$153_offset$$ + 1) <= $APP.cljs.core.count($bitmap$$)) {
    var $chunk$$ = $APP.cljs.core.quot($idx$jscomp$153_offset$$, loom.alg_generic.bits_per_long);
    $idx$jscomp$153_offset$$ = $APP.cljs.core.mod($idx$jscomp$153_offset$$, loom.alg_generic.bits_per_long);
    return ($bitmap$$[$chunk$$] & (0 | 1 << $idx$jscomp$153_offset$$)) !== 0;
  }
  return null;
};
loom.alg_generic.bm_or = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$231_argseq__5756__auto__$$ = [], $len__5749__auto___31635$$ = arguments.length, $i__5750__auto___31636$$ = 0;;) {
    if ($i__5750__auto___31636$$ < $len__5749__auto___31635$$) {
      $args__5755__auto__$jscomp$231_argseq__5756__auto__$$.push(arguments[$i__5750__auto___31636$$]), $i__5750__auto___31636$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$231_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$231_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$231_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$231_argseq__5756__auto__$$);
};
loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic = function($G__31691$$) {
  if ($APP.cljs.core.empty_QMARK_($G__31691$$)) {
    return loom.alg_generic.bm_new();
  }
  var $new_bitmap$jscomp$1_size$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.max, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count, $G__31691$$));
  $new_bitmap$jscomp$1_size$$ = loom.alg_generic.bm_copy($APP.cljs.core.first($G__31691$$), $new_bitmap$jscomp$1_size$$);
  $G__31691$$ = $APP.cljs.core.seq($APP.cljs.core.rest($G__31691$$));
  for (var $G__31692$jscomp$1_G__31711$$ = null, $G__31693$$ = 0, $G__31713_c__5548__auto___31710_count__31321_31698_i__31326_31643_masked_value_31718_vec__31378_31715$$ = 0;;) {
    if ($G__31713_c__5548__auto___31710_count__31321_31698_i__31326_31643_masked_value_31718_vec__31378_31715$$ < $G__31693$$) {
      var $G__31664_bitmap_31644_i__31322_31699_seq__31327_31647_seq__31327_31662__$1_temp__5825__auto___31661$$ = $G__31692$jscomp$1_G__31711$$.cljs$core$IIndexed$_nth$arity$2(null, $G__31713_c__5548__auto___31710_count__31321_31698_i__31326_31643_masked_value_31718_vec__31378_31715$$);
      $G__31664_bitmap_31644_i__31322_31699_seq__31327_31647_seq__31327_31662__$1_temp__5825__auto___31661$$ = $APP.cljs.core.seq($APP.cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.list, $G__31664_bitmap_31644_i__31322_31699_seq__31327_31647_seq__31327_31662__$1_temp__5825__auto___31661$$));
      for (var $G__31665_chunk__31329_31648_idx_31669_idx_31701$$ = null, $G__31666_c__5548__auto___31663_count__31330_31649_masked_value_31679_masked_value_31703_vec__31366_31668_vec__31375_31700$$ = 0, $i__31331_31650$$ = 0;;) {
        if ($i__31331_31650$$ < $G__31666_c__5548__auto___31663_count__31330_31649_masked_value_31679_masked_value_31703_vec__31366_31668_vec__31375_31700$$) {
          var $masked_value_31656_vec__31363_31653$$ = $G__31665_chunk__31329_31648_idx_31669_idx_31701$$.cljs$core$IIndexed$_nth$arity$2(null, $i__31331_31650$$), $idx_31654$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($masked_value_31656_vec__31363_31653$$, 0, null);
          $masked_value_31656_vec__31363_31653$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($masked_value_31656_vec__31363_31653$$, 1, null) | $new_bitmap$jscomp$1_size$$[$idx_31654$$];
          $new_bitmap$jscomp$1_size$$[$idx_31654$$] = $masked_value_31656_vec__31363_31653$$;
          $i__31331_31650$$ += 1;
        } else {
          if ($G__31664_bitmap_31644_i__31322_31699_seq__31327_31647_seq__31327_31662__$1_temp__5825__auto___31661$$ = $APP.cljs.core.seq($G__31664_bitmap_31644_i__31322_31699_seq__31327_31647_seq__31327_31662__$1_temp__5825__auto___31661$$)) {
            $APP.cljs.core.chunked_seq_QMARK_($G__31664_bitmap_31644_i__31322_31699_seq__31327_31647_seq__31327_31662__$1_temp__5825__auto___31661$$) ? ($G__31666_c__5548__auto___31663_count__31330_31649_masked_value_31679_masked_value_31703_vec__31366_31668_vec__31375_31700$$ = $APP.cljs.core.chunk_first($G__31664_bitmap_31644_i__31322_31699_seq__31327_31647_seq__31327_31662__$1_temp__5825__auto___31661$$), $G__31664_bitmap_31644_i__31322_31699_seq__31327_31647_seq__31327_31662__$1_temp__5825__auto___31661$$ = 
            $APP.cljs.core.chunk_rest($G__31664_bitmap_31644_i__31322_31699_seq__31327_31647_seq__31327_31662__$1_temp__5825__auto___31661$$), $G__31665_chunk__31329_31648_idx_31669_idx_31701$$ = $G__31666_c__5548__auto___31663_count__31330_31649_masked_value_31679_masked_value_31703_vec__31366_31668_vec__31375_31700$$, $G__31666_c__5548__auto___31663_count__31330_31649_masked_value_31679_masked_value_31703_vec__31366_31668_vec__31375_31700$$ = $APP.cljs.core.count($G__31666_c__5548__auto___31663_count__31330_31649_masked_value_31679_masked_value_31703_vec__31366_31668_vec__31375_31700$$)) : 
            ($G__31666_c__5548__auto___31663_count__31330_31649_masked_value_31679_masked_value_31703_vec__31366_31668_vec__31375_31700$$ = $APP.cljs.core.first($G__31664_bitmap_31644_i__31322_31699_seq__31327_31647_seq__31327_31662__$1_temp__5825__auto___31661$$), $G__31665_chunk__31329_31648_idx_31669_idx_31701$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__31666_c__5548__auto___31663_count__31330_31649_masked_value_31679_masked_value_31703_vec__31366_31668_vec__31375_31700$$, 0, null), 
            $G__31666_c__5548__auto___31663_count__31330_31649_masked_value_31679_masked_value_31703_vec__31366_31668_vec__31375_31700$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__31666_c__5548__auto___31663_count__31330_31649_masked_value_31679_masked_value_31703_vec__31366_31668_vec__31375_31700$$, 1, null) | $new_bitmap$jscomp$1_size$$[$G__31665_chunk__31329_31648_idx_31669_idx_31701$$], $new_bitmap$jscomp$1_size$$[$G__31665_chunk__31329_31648_idx_31669_idx_31701$$] = $G__31666_c__5548__auto___31663_count__31330_31649_masked_value_31679_masked_value_31703_vec__31366_31668_vec__31375_31700$$, 
            $G__31664_bitmap_31644_i__31322_31699_seq__31327_31647_seq__31327_31662__$1_temp__5825__auto___31661$$ = $APP.cljs.core.next($G__31664_bitmap_31644_i__31322_31699_seq__31327_31647_seq__31327_31662__$1_temp__5825__auto___31661$$), $G__31665_chunk__31329_31648_idx_31669_idx_31701$$ = null, $G__31666_c__5548__auto___31663_count__31330_31649_masked_value_31679_masked_value_31703_vec__31366_31668_vec__31375_31700$$ = 0), $i__31331_31650$$ = 0;
          } else {
            break;
          }
        }
      }
      $G__31713_c__5548__auto___31710_count__31321_31698_i__31326_31643_masked_value_31718_vec__31378_31715$$ += 1;
    } else {
      if ($G__31691$$ = $APP.cljs.core.seq($G__31691$$)) {
        if ($APP.cljs.core.chunked_seq_QMARK_($G__31691$$)) {
          $G__31693$$ = $APP.cljs.core.chunk_first($G__31691$$), $G__31691$$ = $APP.cljs.core.chunk_rest($G__31691$$), $G__31692$jscomp$1_G__31711$$ = $G__31693$$, $G__31693$$ = $APP.cljs.core.count($G__31693$$);
        } else {
          $G__31692$jscomp$1_G__31711$$ = $APP.cljs.core.first($G__31691$$);
          $G__31692$jscomp$1_G__31711$$ = $APP.cljs.core.seq($APP.cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.list, $G__31692$jscomp$1_G__31711$$));
          $G__31693$$ = null;
          for ($G__31664_bitmap_31644_i__31322_31699_seq__31327_31647_seq__31327_31662__$1_temp__5825__auto___31661$$ = $G__31713_c__5548__auto___31710_count__31321_31698_i__31326_31643_masked_value_31718_vec__31378_31715$$ = 0;;) {
            if ($G__31664_bitmap_31644_i__31322_31699_seq__31327_31647_seq__31327_31662__$1_temp__5825__auto___31661$$ < $G__31713_c__5548__auto___31710_count__31321_31698_i__31326_31643_masked_value_31718_vec__31378_31715$$) {
              $G__31666_c__5548__auto___31663_count__31330_31649_masked_value_31679_masked_value_31703_vec__31366_31668_vec__31375_31700$$ = $G__31693$$.cljs$core$IIndexed$_nth$arity$2(null, $G__31664_bitmap_31644_i__31322_31699_seq__31327_31647_seq__31327_31662__$1_temp__5825__auto___31661$$), $G__31665_chunk__31329_31648_idx_31669_idx_31701$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__31666_c__5548__auto___31663_count__31330_31649_masked_value_31679_masked_value_31703_vec__31366_31668_vec__31375_31700$$, 
              0, null), $G__31666_c__5548__auto___31663_count__31330_31649_masked_value_31679_masked_value_31703_vec__31366_31668_vec__31375_31700$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__31666_c__5548__auto___31663_count__31330_31649_masked_value_31679_masked_value_31703_vec__31366_31668_vec__31375_31700$$, 1, null) | $new_bitmap$jscomp$1_size$$[$G__31665_chunk__31329_31648_idx_31669_idx_31701$$], $new_bitmap$jscomp$1_size$$[$G__31665_chunk__31329_31648_idx_31669_idx_31701$$] = $G__31666_c__5548__auto___31663_count__31330_31649_masked_value_31679_masked_value_31703_vec__31366_31668_vec__31375_31700$$, 
              $G__31664_bitmap_31644_i__31322_31699_seq__31327_31647_seq__31327_31662__$1_temp__5825__auto___31661$$ += 1;
            } else {
              if ($G__31692$jscomp$1_G__31711$$ = $APP.cljs.core.seq($G__31692$jscomp$1_G__31711$$)) {
                $APP.cljs.core.chunked_seq_QMARK_($G__31692$jscomp$1_G__31711$$) ? ($G__31713_c__5548__auto___31710_count__31321_31698_i__31326_31643_masked_value_31718_vec__31378_31715$$ = $APP.cljs.core.chunk_first($G__31692$jscomp$1_G__31711$$), $G__31692$jscomp$1_G__31711$$ = $APP.cljs.core.chunk_rest($G__31692$jscomp$1_G__31711$$), $G__31693$$ = $G__31713_c__5548__auto___31710_count__31321_31698_i__31326_31643_masked_value_31718_vec__31378_31715$$, $G__31713_c__5548__auto___31710_count__31321_31698_i__31326_31643_masked_value_31718_vec__31378_31715$$ = 
                $APP.cljs.core.count($G__31713_c__5548__auto___31710_count__31321_31698_i__31326_31643_masked_value_31718_vec__31378_31715$$)) : ($G__31713_c__5548__auto___31710_count__31321_31698_i__31326_31643_masked_value_31718_vec__31378_31715$$ = $APP.cljs.core.first($G__31692$jscomp$1_G__31711$$), $G__31693$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__31713_c__5548__auto___31710_count__31321_31698_i__31326_31643_masked_value_31718_vec__31378_31715$$, 0, null), $G__31713_c__5548__auto___31710_count__31321_31698_i__31326_31643_masked_value_31718_vec__31378_31715$$ = 
                $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__31713_c__5548__auto___31710_count__31321_31698_i__31326_31643_masked_value_31718_vec__31378_31715$$, 1, null) | $new_bitmap$jscomp$1_size$$[$G__31693$$], $new_bitmap$jscomp$1_size$$[$G__31693$$] = $G__31713_c__5548__auto___31710_count__31321_31698_i__31326_31643_masked_value_31718_vec__31378_31715$$, $G__31692$jscomp$1_G__31711$$ = $APP.cljs.core.next($G__31692$jscomp$1_G__31711$$), $G__31693$$ = null, $G__31713_c__5548__auto___31710_count__31321_31698_i__31326_31643_masked_value_31718_vec__31378_31715$$ = 
                0), $G__31664_bitmap_31644_i__31322_31699_seq__31327_31647_seq__31327_31662__$1_temp__5825__auto___31661$$ = 0;
              } else {
                break;
              }
            }
          }
          $G__31691$$ = $APP.cljs.core.next($G__31691$$);
          $G__31692$jscomp$1_G__31711$$ = null;
          $G__31693$$ = 0;
        }
        $G__31713_c__5548__auto___31710_count__31321_31698_i__31326_31643_masked_value_31718_vec__31378_31715$$ = 0;
      } else {
        break;
      }
    }
  }
  return $new_bitmap$jscomp$1_size$$;
};
loom.alg_generic.bm_or.cljs$lang$maxFixedArity = 0;
loom.alg_generic.bm_or.cljs$lang$applyTo = function($seq31316$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq31316$$));
};
loom.alg_generic.bm_get_indicies = function($bitmap$$) {
  return function $loom$alg_generic$bm_get_indicies_$_iter__31381$$($s__31382$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (var $s__31382__$1$$ = $s__31382$$;;) {
        var $fs__5500__auto__$jscomp$35_iterys__5499__auto__$jscomp$35_temp__5825__auto__$$ = $APP.cljs.core.seq($s__31382__$1$$);
        if ($fs__5500__auto__$jscomp$35_iterys__5499__auto__$jscomp$35_temp__5825__auto__$$) {
          var $xs__6385__auto__$$ = $fs__5500__auto__$jscomp$35_iterys__5499__auto__$jscomp$35_temp__5825__auto__$$, $chunk$$ = $APP.cljs.core.first($xs__6385__auto__$$);
          $fs__5500__auto__$jscomp$35_iterys__5499__auto__$jscomp$35_temp__5825__auto__$$ = function($s__31382__$1$$, $chunk$$, $xs__6385__auto__$$, $temp__5825__auto__$$) {
            return function $loom$alg_generic$bm_get_indicies_$_iter__31381_$_iter__31383$$($s__31384$$) {
              return new $APP.cljs.core.LazySeq(null, function($s__31382__$1$$, $chunk$$, $xs__6385__auto__$$, $temp__5825__auto__$$) {
                return function() {
                  for (var $s__31384__$1_s__31384__$2_temp__5825__auto____$1$$ = $s__31384$$;;) {
                    if ($s__31384__$1_s__31384__$2_temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__31384__$1_s__31384__$2_temp__5825__auto____$1$$)) {
                      if ($APP.cljs.core.chunked_seq_QMARK_($s__31384__$1_s__31384__$2_temp__5825__auto____$1$$)) {
                        var $JSCompiler_inline_result$jscomp$936_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__31384__$1_s__31384__$2_temp__5825__auto____$1$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$936_c__5501__auto__$$), $b__31386_idx$jscomp$154_offset$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                        a: {
                          for (var $i__31385$$ = 0;;) {
                            if ($i__31385$$ < $size__5502__auto__$$) {
                              var $idx$jscomp$inline_5102_offset$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$936_c__5501__auto__$$, $i__31385$$);
                              $idx$jscomp$inline_5102_offset$$ = $chunk$$ * loom.alg_generic.bits_per_long + $idx$jscomp$inline_5102_offset$$;
                              $APP.cljs.core.truth_(loom.alg_generic.bm_get($bitmap$$, $idx$jscomp$inline_5102_offset$$)) && $APP.cljs.core.chunk_append($b__31386_idx$jscomp$154_offset$$, $idx$jscomp$inline_5102_offset$$);
                              $i__31385$$ += 1;
                            } else {
                              $JSCompiler_inline_result$jscomp$936_c__5501__auto__$$ = !0;
                              break a;
                            }
                          }
                          $JSCompiler_inline_result$jscomp$936_c__5501__auto__$$ = void 0;
                        }
                        return $JSCompiler_inline_result$jscomp$936_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__31386_idx$jscomp$154_offset$$), $loom$alg_generic$bm_get_indicies_$_iter__31381_$_iter__31383$$($APP.cljs.core.chunk_rest($s__31384__$1_s__31384__$2_temp__5825__auto____$1$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__31386_idx$jscomp$154_offset$$), null);
                      }
                      $b__31386_idx$jscomp$154_offset$$ = $APP.cljs.core.first($s__31384__$1_s__31384__$2_temp__5825__auto____$1$$);
                      $b__31386_idx$jscomp$154_offset$$ = $chunk$$ * loom.alg_generic.bits_per_long + $b__31386_idx$jscomp$154_offset$$;
                      if ($APP.cljs.core.truth_(loom.alg_generic.bm_get($bitmap$$, $b__31386_idx$jscomp$154_offset$$))) {
                        return $APP.cljs.core.cons($b__31386_idx$jscomp$154_offset$$, $loom$alg_generic$bm_get_indicies_$_iter__31381_$_iter__31383$$($APP.cljs.core.rest($s__31384__$1_s__31384__$2_temp__5825__auto____$1$$)));
                      }
                      $s__31384__$1_s__31384__$2_temp__5825__auto____$1$$ = $APP.cljs.core.rest($s__31384__$1_s__31384__$2_temp__5825__auto____$1$$);
                    } else {
                      return null;
                    }
                  }
                };
              }($s__31382__$1$$, $chunk$$, $xs__6385__auto__$$, $temp__5825__auto__$$), null, null);
            };
          }($s__31382__$1$$, $chunk$$, $xs__6385__auto__$$, $fs__5500__auto__$jscomp$35_iterys__5499__auto__$jscomp$35_temp__5825__auto__$$);
          if ($fs__5500__auto__$jscomp$35_iterys__5499__auto__$jscomp$35_temp__5825__auto__$$ = $APP.cljs.core.seq($fs__5500__auto__$jscomp$35_iterys__5499__auto__$jscomp$35_temp__5825__auto__$$($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)))) {
            return $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($fs__5500__auto__$jscomp$35_iterys__5499__auto__$jscomp$35_temp__5825__auto__$$, $loom$alg_generic$bm_get_indicies_$_iter__31381$$($APP.cljs.core.rest($s__31382__$1$$)));
          }
          $s__31382__$1$$ = $APP.cljs.core.rest($s__31382__$1$$);
        } else {
          return null;
        }
      }
    }, null, null);
  }($APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.count($bitmap$$)));
};
loom.alg_generic.Ancestry = function($node__GT_idx$$, $idx__GT_node$$, $bitmaps$$, $__meta$$, $__extmap$$, $__hash$$) {
  this.node__GT_idx = $node__GT_idx$$;
  this.idx__GT_node = $idx__GT_node$$;
  this.bitmaps = $bitmaps$$;
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k31388$$, $else__5326__auto__$$) {
  switch($k31388$$ instanceof $APP.cljs.core.Keyword ? $k31388$$.fqn : null) {
    case "node-\x3eidx":
      return this.node__GT_idx;
    case "idx-\x3enode":
      return this.idx__GT_node;
    case "bitmaps":
      return this.bitmaps;
    default:
      return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k31388$$, $else__5326__auto__$$);
  }
};
loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__31393_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__31393_v__5348__auto__$$, 0, null);
    $p__31393_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__31393_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__31393_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__31393_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
loom.alg_generic.Ancestry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#loom.alg-generic.Ancestry{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2722$node__GT_idx, this.node__GT_idx], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2723$idx__GT_node, this.idx__GT_node], 
  null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2724$bitmaps, this.bitmaps], null)], null), this.__extmap));
};
loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__31387$$) {
  return new $APP.cljs.core.RecordIter(0, this, 3, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2722$node__GT_idx, cljs$cst$2723$idx__GT_node, cljs$cst$2724$bitmaps], null), $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
loom.alg_generic.Ancestry.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
loom.alg_generic.Ancestry.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new loom.alg_generic.Ancestry(this.node__GT_idx, this.idx__GT_node, this.bitmaps, this.__meta, this.__extmap, this.__hash);
};
loom.alg_generic.Ancestry.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 3 + $APP.cljs.core.count(this.__extmap);
};
loom.alg_generic.Ancestry.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$81_h__5134__auto____$1$jscomp$81_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$81_h__5134__auto____$1$jscomp$81_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$81_h__5134__auto____$1$jscomp$81_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$81_h__5134__auto____$1$jscomp$81_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$81_h__5134__auto____$1$jscomp$81_this__5319__auto__$$ = -1116202445 ^ $APP.cljs.core.hash_unordered_coll(this);
};
loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this31389$$, $other31390$$) {
  return $other31390$$ != null && this.constructor === $other31390$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.node__GT_idx, $other31390$$.node__GT_idx) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.idx__GT_node, $other31390$$.idx__GT_node) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.bitmaps, $other31390$$.bitmaps) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other31390$$.__extmap);
};
loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2723$idx__GT_node, null, cljs$cst$2722$node__GT_idx, null, cljs$cst$2724$bitmaps, null], null), null), $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), $k__5334__auto__$$) : new loom.alg_generic.Ancestry(this.node__GT_idx, 
  this.idx__GT_node, this.bitmaps, this.__meta, $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k31388$$) {
  switch($k31388$$ instanceof $APP.cljs.core.Keyword ? $k31388$$.fqn : null) {
    case "node-\x3eidx":
    case "idx-\x3enode":
    case "bitmaps":
      return !0;
    default:
      return $APP.cljs.core.contains_QMARK_(this.__extmap, $k31388$$);
  }
};
loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($pred__31398_this__5331__auto__$$, $k__5332__auto__$$, $G__31387$$) {
  $pred__31398_this__5331__auto__$$ = $APP.cljs.core.keyword_identical_QMARK_;
  return $APP.cljs.core.truth_($pred__31398_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__31398_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2722$node__GT_idx, $k__5332__auto__$$) : $pred__31398_this__5331__auto__$$.call(null, cljs$cst$2722$node__GT_idx, $k__5332__auto__$$)) ? new loom.alg_generic.Ancestry($G__31387$$, this.idx__GT_node, this.bitmaps, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__31398_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? 
  $pred__31398_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2723$idx__GT_node, $k__5332__auto__$$) : $pred__31398_this__5331__auto__$$.call(null, cljs$cst$2723$idx__GT_node, $k__5332__auto__$$)) ? new loom.alg_generic.Ancestry(this.node__GT_idx, $G__31387$$, this.bitmaps, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__31398_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__31398_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2724$bitmaps, $k__5332__auto__$$) : 
  $pred__31398_this__5331__auto__$$.call(null, cljs$cst$2724$bitmaps, $k__5332__auto__$$)) ? new loom.alg_generic.Ancestry(this.node__GT_idx, this.idx__GT_node, $G__31387$$, this.__meta, this.__extmap, null) : new loom.alg_generic.Ancestry(this.node__GT_idx, this.idx__GT_node, this.bitmaps, this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__31387$$), null);
};
loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.MapEntry(cljs$cst$2722$node__GT_idx, this.node__GT_idx, null), new $APP.cljs.core.MapEntry(cljs$cst$2723$idx__GT_node, this.idx__GT_node, null), new $APP.cljs.core.MapEntry(cljs$cst$2724$bitmaps, this.bitmaps, null)], null), this.__extmap));
};
loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__31387$$) {
  return new loom.alg_generic.Ancestry(this.node__GT_idx, this.idx__GT_node, this.bitmaps, $G__31387$$, this.__extmap, this.__hash);
};
loom.alg_generic.Ancestry.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
loom.alg_generic.Ancestry.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2725$node__GT_idx, cljs$cst$2726$idx__GT_node, cljs$cst$2727$bitmaps], null);
};
loom.alg_generic.Ancestry.cljs$lang$type = !0;
loom.alg_generic.Ancestry.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "loom.alg-generic/Ancestry", null, 1, null);
};
loom.alg_generic.Ancestry.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "loom.alg-generic/Ancestry");
};
loom.alg_generic.__GT_Ancestry = function($node__GT_idx$$, $idx__GT_node$$, $bitmaps$$) {
  return new loom.alg_generic.Ancestry($node__GT_idx$$, $idx__GT_node$$, $bitmaps$$, null, null, null);
};
loom.alg_generic.map__GT_Ancestry = function($G__31391$$) {
  var $G__31401$jscomp$inline_5106_extmap__5365__auto__$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($G__31391$$, cljs$cst$2722$node__GT_idx, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2723$idx__GT_node, cljs$cst$2724$bitmaps], 0));
  $G__31401$jscomp$inline_5106_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__31391$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__31401$jscomp$inline_5106_extmap__5365__auto__$$) : $G__31401$jscomp$inline_5106_extmap__5365__auto__$$;
  return new loom.alg_generic.Ancestry(cljs$cst$2722$node__GT_idx.cljs$core$IFn$_invoke$arity$1($G__31391$$), cljs$cst$2723$idx__GT_node.cljs$core$IFn$_invoke$arity$1($G__31391$$), cljs$cst$2724$bitmaps.cljs$core$IFn$_invoke$arity$1($G__31391$$), null, $APP.cljs.core.not_empty($G__31401$jscomp$inline_5106_extmap__5365__auto__$$), null);
};
loom.alg_generic.ancestry_new = function() {
  return loom.alg_generic.__GT_Ancestry($APP.cljs.core.PersistentArrayMap.EMPTY, $APP.cljs.core.PersistentArrayMap.EMPTY, $APP.cljs.core.PersistentVector.EMPTY);
};
loom.alg_generic.ancestry_contains_QMARK_ = function($ancestry$$, $node$$) {
  return $APP.cljs.core.contains_QMARK_(cljs$cst$2722$node__GT_idx.cljs$core$IFn$_invoke$arity$1($ancestry$$), $node$$);
};
loom.alg_generic.ancestry_add = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$232_argseq__5756__auto__$$ = [], $len__5749__auto___31764$$ = arguments.length, $i__5750__auto___31765$$ = 0;;) {
    if ($i__5750__auto___31765$$ < $len__5749__auto___31764$$) {
      $args__5755__auto__$jscomp$232_argseq__5756__auto__$$.push(arguments[$i__5750__auto___31765$$]), $i__5750__auto___31765$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$232_argseq__5756__auto__$$ = 2 < $args__5755__auto__$jscomp$232_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$232_argseq__5756__auto__$$.slice(2), 0, null) : null;
  return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args__5755__auto__$jscomp$232_argseq__5756__auto__$$);
};
loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic = function($ancestry$jscomp$1_bitmaps$$, $idx__GT_node__$1_node$$, $new_bitmap__$1_parents$$) {
  if (loom.alg_generic.ancestry_contains_QMARK_($ancestry$jscomp$1_bitmaps$$, $idx__GT_node__$1_node$$)) {
    return $ancestry$jscomp$1_bitmaps$$;
  }
  $ancestry$jscomp$1_bitmaps$$ = $APP.cljs.core.__destructure_map($ancestry$jscomp$1_bitmaps$$);
  var $node__GT_idx$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($ancestry$jscomp$1_bitmaps$$, cljs$cst$2722$node__GT_idx), $idx__GT_node$jscomp$2_new_bitmap$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($ancestry$jscomp$1_bitmaps$$, cljs$cst$2723$idx__GT_node);
  $ancestry$jscomp$1_bitmaps$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($ancestry$jscomp$1_bitmaps$$, cljs$cst$2724$bitmaps);
  var $nid$$ = $APP.cljs.core.count($node__GT_idx$$);
  $node__GT_idx$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($node__GT_idx$$, $idx__GT_node__$1_node$$, $nid$$);
  $idx__GT_node__$1_node$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($idx__GT_node$jscomp$2_new_bitmap$$, $nid$$, $idx__GT_node__$1_node$$);
  $new_bitmap__$1_parents$$ = $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($node__GT_idx$$, $new_bitmap__$1_parents$$);
  $idx__GT_node$jscomp$2_new_bitmap$$ = $APP.cljs.core.empty_QMARK_($new_bitmap__$1_parents$$) ? loom.alg_generic.bm_new() : $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.bm_or, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($ancestry$jscomp$1_bitmaps$$, $new_bitmap__$1_parents$$));
  $new_bitmap__$1_parents$$ = $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(loom.alg_generic.bm_set, $idx__GT_node$jscomp$2_new_bitmap$$, $new_bitmap__$1_parents$$);
  $ancestry$jscomp$1_bitmaps$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($ancestry$jscomp$1_bitmaps$$, $new_bitmap__$1_parents$$);
  return loom.alg_generic.__GT_Ancestry($node__GT_idx$$, $idx__GT_node__$1_node$$, $ancestry$jscomp$1_bitmaps$$);
};
loom.alg_generic.ancestry_add.cljs$lang$maxFixedArity = 2;
loom.alg_generic.ancestry_add.cljs$lang$applyTo = function($G__31404$$) {
  var $G__31403$$ = $APP.cljs.core.first($G__31404$$), $seq31402__$1_seq31402__$2$$ = $APP.cljs.core.next($G__31404$$);
  $G__31404$$ = $APP.cljs.core.first($seq31402__$1_seq31402__$2$$);
  $seq31402__$1_seq31402__$2$$ = $APP.cljs.core.next($seq31402__$1_seq31402__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__31403$$, $G__31404$$, $seq31402__$1_seq31402__$2$$);
};
loom.alg_generic.ancestor_QMARK_ = function($ancestry$jscomp$2_bitmaps$$, $childer_cidx$$, $parenter_pidx$$) {
  $ancestry$jscomp$2_bitmaps$$ = $APP.cljs.core.__destructure_map($ancestry$jscomp$2_bitmaps$$);
  var $JSCompiler_temp_const$jscomp$940_node__GT_idx$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($ancestry$jscomp$2_bitmaps$$, cljs$cst$2722$node__GT_idx);
  $ancestry$jscomp$2_bitmaps$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($ancestry$jscomp$2_bitmaps$$, cljs$cst$2724$bitmaps);
  $childer_cidx$$ = $JSCompiler_temp_const$jscomp$940_node__GT_idx$$.cljs$core$IFn$_invoke$arity$1 ? $JSCompiler_temp_const$jscomp$940_node__GT_idx$$.cljs$core$IFn$_invoke$arity$1($childer_cidx$$) : $JSCompiler_temp_const$jscomp$940_node__GT_idx$$.call(null, $childer_cidx$$);
  $parenter_pidx$$ = $JSCompiler_temp_const$jscomp$940_node__GT_idx$$.cljs$core$IFn$_invoke$arity$1 ? $JSCompiler_temp_const$jscomp$940_node__GT_idx$$.cljs$core$IFn$_invoke$arity$1($parenter_pidx$$) : $JSCompiler_temp_const$jscomp$940_node__GT_idx$$.call(null, $parenter_pidx$$);
  $JSCompiler_temp_const$jscomp$940_node__GT_idx$$ = $APP.cljs.core;
  var $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$940_node__GT_idx$$.boolean$, $JSCompiler_temp_const$jscomp$0$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$1$$ = $JSCompiler_temp_const$jscomp$0$$.truth_;
  var $JSCompiler_inline_result$$ = $APP.cljs.core.truth_($childer_cidx$$) ? $parenter_pidx$$ : $childer_cidx$$;
  return $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$940_node__GT_idx$$, $JSCompiler_temp_const$jscomp$1$$.call($JSCompiler_temp_const$jscomp$0$$, $JSCompiler_inline_result$$) ? loom.alg_generic.bm_get($APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($ancestry$jscomp$2_bitmaps$$, $childer_cidx$$), $parenter_pidx$$) : null);
};
loom.alg_generic.ancestors = function($ancestry$jscomp$3_idx__GT_node$$, $child$jscomp$23_cidx$$) {
  var $bitmaps$$ = $APP.cljs.core.__destructure_map($ancestry$jscomp$3_idx__GT_node$$), $node__GT_idx$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($bitmaps$$, cljs$cst$2722$node__GT_idx);
  $ancestry$jscomp$3_idx__GT_node$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($bitmaps$$, cljs$cst$2723$idx__GT_node);
  $bitmaps$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($bitmaps$$, cljs$cst$2724$bitmaps);
  $child$jscomp$23_cidx$$ = $node__GT_idx$$.cljs$core$IFn$_invoke$arity$1 ? $node__GT_idx$$.cljs$core$IFn$_invoke$arity$1($child$jscomp$23_cidx$$) : $node__GT_idx$$.call(null, $child$jscomp$23_cidx$$);
  return $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($ancestry$jscomp$3_idx__GT_node$$, loom.alg_generic.bm_get_indicies($APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($bitmaps$$, $child$jscomp$23_cidx$$)));
};
loom.alg_generic.ancestry_nodes = function($ancestry$$) {
  return $APP.cljs.core.keys(cljs$cst$2722$node__GT_idx.cljs$core$IFn$_invoke$arity$1($ancestry$$));
};
loom.graph = {};
loom.graph.Graph = function() {
};
var loom$graph$Graph$nodes$dyn_47383 = function($g$$) {
  var $m__5372__auto__$jscomp$240_m__5374__auto__$$ = loom.graph.nodes[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
  if ($m__5372__auto__$jscomp$240_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$240_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$240_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($g$$) : $m__5372__auto__$jscomp$240_m__5374__auto__$$.call(null, $g$$);
  }
  $m__5372__auto__$jscomp$240_m__5374__auto__$$ = loom.graph.nodes._;
  if ($m__5372__auto__$jscomp$240_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$240_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$240_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($g$$) : $m__5372__auto__$jscomp$240_m__5374__auto__$$.call(null, $g$$);
  }
  throw $APP.cljs.core.missing_protocol("Graph.nodes", $g$$);
};
loom.graph.nodes = function($g$$) {
  return $g$$ != null && $g$$.loom$graph$Graph$nodes$arity$1 != null ? $g$$.loom$graph$Graph$nodes$arity$1($g$$) : loom$graph$Graph$nodes$dyn_47383($g$$);
};
var loom$graph$Graph$edges$dyn_47384 = function($g$$) {
  var $m__5372__auto__$jscomp$241_m__5374__auto__$$ = loom.graph.edges[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
  if ($m__5372__auto__$jscomp$241_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$241_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$241_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($g$$) : $m__5372__auto__$jscomp$241_m__5374__auto__$$.call(null, $g$$);
  }
  $m__5372__auto__$jscomp$241_m__5374__auto__$$ = loom.graph.edges._;
  if ($m__5372__auto__$jscomp$241_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$241_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$241_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($g$$) : $m__5372__auto__$jscomp$241_m__5374__auto__$$.call(null, $g$$);
  }
  throw $APP.cljs.core.missing_protocol("Graph.edges", $g$$);
};
loom.graph.edges = function($g$$) {
  return $g$$ != null && $g$$.loom$graph$Graph$edges$arity$1 != null ? $g$$.loom$graph$Graph$edges$arity$1($g$$) : loom$graph$Graph$edges$dyn_47384($g$$);
};
var loom$graph$Graph$has_node_QMARK_$dyn_47385 = function($g$$, $node$$) {
  var $m__5372__auto__$jscomp$242_m__5374__auto__$$ = loom.graph.has_node_QMARK_[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
  if ($m__5372__auto__$jscomp$242_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$242_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$242_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node$$) : $m__5372__auto__$jscomp$242_m__5374__auto__$$.call(null, $g$$, $node$$);
  }
  $m__5372__auto__$jscomp$242_m__5374__auto__$$ = loom.graph.has_node_QMARK_._;
  if ($m__5372__auto__$jscomp$242_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$242_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$242_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node$$) : $m__5372__auto__$jscomp$242_m__5374__auto__$$.call(null, $g$$, $node$$);
  }
  throw $APP.cljs.core.missing_protocol("Graph.has-node?", $g$$);
};
loom.graph.has_node_QMARK_ = function($g$$, $node$$) {
  return $g$$ != null && $g$$.loom$graph$Graph$has_node_QMARK_$arity$2 != null ? $g$$.loom$graph$Graph$has_node_QMARK_$arity$2($g$$, $node$$) : loom$graph$Graph$has_node_QMARK_$dyn_47385($g$$, $node$$);
};
var loom$graph$Graph$has_edge_QMARK_$dyn_47386 = function($g$$, $n1$$, $n2$$) {
  var $m__5372__auto__$jscomp$243_m__5374__auto__$$ = loom.graph.has_edge_QMARK_[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
  if ($m__5372__auto__$jscomp$243_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$243_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$243_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($g$$, $n1$$, $n2$$) : $m__5372__auto__$jscomp$243_m__5374__auto__$$.call(null, $g$$, $n1$$, $n2$$);
  }
  $m__5372__auto__$jscomp$243_m__5374__auto__$$ = loom.graph.has_edge_QMARK_._;
  if ($m__5372__auto__$jscomp$243_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$243_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$243_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($g$$, $n1$$, $n2$$) : $m__5372__auto__$jscomp$243_m__5374__auto__$$.call(null, $g$$, $n1$$, $n2$$);
  }
  throw $APP.cljs.core.missing_protocol("Graph.has-edge?", $g$$);
};
loom.graph.has_edge_QMARK_ = function($g$$, $n1$$, $n2$$) {
  return $g$$ != null && $g$$.loom$graph$Graph$has_edge_QMARK_$arity$3 != null ? $g$$.loom$graph$Graph$has_edge_QMARK_$arity$3($g$$, $n1$$, $n2$$) : loom$graph$Graph$has_edge_QMARK_$dyn_47386($g$$, $n1$$, $n2$$);
};
var loom$graph$Graph$successors_STAR_$dyn_47388 = function($g$$, $node$$) {
  var $m__5372__auto__$jscomp$244_m__5374__auto__$$ = loom.graph.successors_STAR_[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
  if ($m__5372__auto__$jscomp$244_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$244_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$244_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node$$) : $m__5372__auto__$jscomp$244_m__5374__auto__$$.call(null, $g$$, $node$$);
  }
  $m__5372__auto__$jscomp$244_m__5374__auto__$$ = loom.graph.successors_STAR_._;
  if ($m__5372__auto__$jscomp$244_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$244_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$244_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node$$) : $m__5372__auto__$jscomp$244_m__5374__auto__$$.call(null, $g$$, $node$$);
  }
  throw $APP.cljs.core.missing_protocol("Graph.successors*", $g$$);
};
loom.graph.successors_STAR_ = function($g$$, $node$$) {
  return $g$$ != null && $g$$.loom$graph$Graph$successors_STAR_$arity$2 != null ? $g$$.loom$graph$Graph$successors_STAR_$arity$2($g$$, $node$$) : loom$graph$Graph$successors_STAR_$dyn_47388($g$$, $node$$);
};
var loom$graph$Graph$out_degree$dyn_47400 = function($g$$, $node$$) {
  var $m__5372__auto__$jscomp$245_m__5374__auto__$$ = loom.graph.out_degree[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
  if ($m__5372__auto__$jscomp$245_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$245_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$245_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node$$) : $m__5372__auto__$jscomp$245_m__5374__auto__$$.call(null, $g$$, $node$$);
  }
  $m__5372__auto__$jscomp$245_m__5374__auto__$$ = loom.graph.out_degree._;
  if ($m__5372__auto__$jscomp$245_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$245_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$245_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node$$) : $m__5372__auto__$jscomp$245_m__5374__auto__$$.call(null, $g$$, $node$$);
  }
  throw $APP.cljs.core.missing_protocol("Graph.out-degree", $g$$);
};
loom.graph.out_degree = function($g$$, $node$$) {
  return $g$$ != null && $g$$.loom$graph$Graph$out_degree$arity$2 != null ? $g$$.loom$graph$Graph$out_degree$arity$2($g$$, $node$$) : loom$graph$Graph$out_degree$dyn_47400($g$$, $node$$);
};
var loom$graph$Graph$out_edges$dyn_47401 = function($g$$, $node$$) {
  var $m__5372__auto__$jscomp$246_m__5374__auto__$$ = loom.graph.out_edges[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
  if ($m__5372__auto__$jscomp$246_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$246_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$246_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node$$) : $m__5372__auto__$jscomp$246_m__5374__auto__$$.call(null, $g$$, $node$$);
  }
  $m__5372__auto__$jscomp$246_m__5374__auto__$$ = loom.graph.out_edges._;
  if ($m__5372__auto__$jscomp$246_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$246_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$246_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node$$) : $m__5372__auto__$jscomp$246_m__5374__auto__$$.call(null, $g$$, $node$$);
  }
  throw $APP.cljs.core.missing_protocol("Graph.out-edges", $g$$);
};
loom.graph.out_edges = function($g$$, $node$$) {
  return $g$$ != null && $g$$.loom$graph$Graph$out_edges$arity$2 != null ? $g$$.loom$graph$Graph$out_edges$arity$2($g$$, $node$$) : loom$graph$Graph$out_edges$dyn_47401($g$$, $node$$);
};
loom.graph.Digraph = function() {
};
var loom$graph$Digraph$predecessors_STAR_$dyn_47406 = function($g$$, $node$$) {
  var $m__5372__auto__$jscomp$247_m__5374__auto__$$ = loom.graph.predecessors_STAR_[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
  if ($m__5372__auto__$jscomp$247_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$247_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$247_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node$$) : $m__5372__auto__$jscomp$247_m__5374__auto__$$.call(null, $g$$, $node$$);
  }
  $m__5372__auto__$jscomp$247_m__5374__auto__$$ = loom.graph.predecessors_STAR_._;
  if ($m__5372__auto__$jscomp$247_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$247_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$247_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node$$) : $m__5372__auto__$jscomp$247_m__5374__auto__$$.call(null, $g$$, $node$$);
  }
  throw $APP.cljs.core.missing_protocol("Digraph.predecessors*", $g$$);
};
loom.graph.predecessors_STAR_ = function($g$$, $node$$) {
  return $g$$ != null && $g$$.loom$graph$Digraph$predecessors_STAR_$arity$2 != null ? $g$$.loom$graph$Digraph$predecessors_STAR_$arity$2($g$$, $node$$) : loom$graph$Digraph$predecessors_STAR_$dyn_47406($g$$, $node$$);
};
var loom$graph$Digraph$in_degree$dyn_47408 = function($g$$, $node$$) {
  var $m__5372__auto__$jscomp$248_m__5374__auto__$$ = loom.graph.in_degree[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
  if ($m__5372__auto__$jscomp$248_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$248_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$248_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node$$) : $m__5372__auto__$jscomp$248_m__5374__auto__$$.call(null, $g$$, $node$$);
  }
  $m__5372__auto__$jscomp$248_m__5374__auto__$$ = loom.graph.in_degree._;
  if ($m__5372__auto__$jscomp$248_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$248_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$248_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node$$) : $m__5372__auto__$jscomp$248_m__5374__auto__$$.call(null, $g$$, $node$$);
  }
  throw $APP.cljs.core.missing_protocol("Digraph.in-degree", $g$$);
};
loom.graph.in_degree = function($g$$, $node$$) {
  return $g$$ != null && $g$$.loom$graph$Digraph$in_degree$arity$2 != null ? $g$$.loom$graph$Digraph$in_degree$arity$2($g$$, $node$$) : loom$graph$Digraph$in_degree$dyn_47408($g$$, $node$$);
};
var loom$graph$Digraph$in_edges$dyn_47409 = function($g$$, $node$$) {
  var $m__5372__auto__$jscomp$249_m__5374__auto__$$ = loom.graph.in_edges[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
  if ($m__5372__auto__$jscomp$249_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$249_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$249_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node$$) : $m__5372__auto__$jscomp$249_m__5374__auto__$$.call(null, $g$$, $node$$);
  }
  $m__5372__auto__$jscomp$249_m__5374__auto__$$ = loom.graph.in_edges._;
  if ($m__5372__auto__$jscomp$249_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$249_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$249_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node$$) : $m__5372__auto__$jscomp$249_m__5374__auto__$$.call(null, $g$$, $node$$);
  }
  throw $APP.cljs.core.missing_protocol("Digraph.in-edges", $g$$);
};
loom.graph.in_edges = function($g$$, $node$$) {
  return $g$$ != null && $g$$.loom$graph$Digraph$in_edges$arity$2 != null ? $g$$.loom$graph$Digraph$in_edges$arity$2($g$$, $node$$) : loom$graph$Digraph$in_edges$dyn_47409($g$$, $node$$);
};
var loom$graph$Digraph$transpose$dyn_47425 = function($g$$) {
  var $m__5372__auto__$jscomp$250_m__5374__auto__$$ = loom.graph.transpose[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
  if ($m__5372__auto__$jscomp$250_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$250_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$250_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($g$$) : $m__5372__auto__$jscomp$250_m__5374__auto__$$.call(null, $g$$);
  }
  $m__5372__auto__$jscomp$250_m__5374__auto__$$ = loom.graph.transpose._;
  if ($m__5372__auto__$jscomp$250_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$250_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$250_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($g$$) : $m__5372__auto__$jscomp$250_m__5374__auto__$$.call(null, $g$$);
  }
  throw $APP.cljs.core.missing_protocol("Digraph.transpose", $g$$);
};
loom.graph.transpose = function($g$$) {
  return $g$$ != null && $g$$.loom$graph$Digraph$transpose$arity$1 != null ? $g$$.loom$graph$Digraph$transpose$arity$1($g$$) : loom$graph$Digraph$transpose$dyn_47425($g$$);
};
loom.graph.WeightedGraph = function() {
};
var loom$graph$WeightedGraph$weight_STAR_$dyn_47428 = function() {
  var $G__47429$$ = null, $G__47429__2$$ = function($g$$, $e$$) {
    var $m__5372__auto__$jscomp$251_m__5374__auto__$$ = loom.graph.weight_STAR_[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
    if ($m__5372__auto__$jscomp$251_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$251_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$251_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $e$$) : $m__5372__auto__$jscomp$251_m__5374__auto__$$.call(null, $g$$, $e$$);
    }
    $m__5372__auto__$jscomp$251_m__5374__auto__$$ = loom.graph.weight_STAR_._;
    if ($m__5372__auto__$jscomp$251_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$251_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$251_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $e$$) : $m__5372__auto__$jscomp$251_m__5374__auto__$$.call(null, $g$$, $e$$);
    }
    throw $APP.cljs.core.missing_protocol("WeightedGraph.weight*", $g$$);
  }, $G__47429__3$$ = function($g$$, $n1$$, $n2$$) {
    var $m__5372__auto__$jscomp$252_m__5374__auto__$$ = loom.graph.weight_STAR_[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
    if ($m__5372__auto__$jscomp$252_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$252_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$252_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($g$$, $n1$$, $n2$$) : $m__5372__auto__$jscomp$252_m__5374__auto__$$.call(null, $g$$, $n1$$, $n2$$);
    }
    $m__5372__auto__$jscomp$252_m__5374__auto__$$ = loom.graph.weight_STAR_._;
    if ($m__5372__auto__$jscomp$252_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$252_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$252_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($g$$, $n1$$, $n2$$) : $m__5372__auto__$jscomp$252_m__5374__auto__$$.call(null, $g$$, $n1$$, $n2$$);
    }
    throw $APP.cljs.core.missing_protocol("WeightedGraph.weight*", $g$$);
  };
  $G__47429$$ = function($g$$, $n1$$, $n2$$) {
    switch(arguments.length) {
      case 2:
        return $G__47429__2$$.call(this, $g$$, $n1$$);
      case 3:
        return $G__47429__3$$.call(this, $g$$, $n1$$, $n2$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__47429$$.cljs$core$IFn$_invoke$arity$2 = $G__47429__2$$;
  $G__47429$$.cljs$core$IFn$_invoke$arity$3 = $G__47429__3$$;
  return $G__47429$$;
}();
loom.graph.weight_STAR_ = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$2 = function($g$$, $e$$) {
  return $g$$ != null && $g$$.loom$graph$WeightedGraph$weight_STAR_$arity$2 != null ? $g$$.loom$graph$WeightedGraph$weight_STAR_$arity$2($g$$, $e$$) : loom$graph$WeightedGraph$weight_STAR_$dyn_47428($g$$, $e$$);
};
loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$3 = function($g$$, $n1$$, $n2$$) {
  return $g$$ != null && $g$$.loom$graph$WeightedGraph$weight_STAR_$arity$3 != null ? $g$$.loom$graph$WeightedGraph$weight_STAR_$arity$3($g$$, $n1$$, $n2$$) : loom$graph$WeightedGraph$weight_STAR_$dyn_47428($g$$, $n1$$, $n2$$);
};
loom.graph.weight_STAR_.cljs$lang$maxFixedArity = 3;
loom.graph.EditableGraph = function() {
};
var loom$graph$EditableGraph$add_nodes_STAR_$dyn_47436 = function($g$$, $nodes$$) {
  var $m__5372__auto__$jscomp$253_m__5374__auto__$$ = loom.graph.add_nodes_STAR_[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
  if ($m__5372__auto__$jscomp$253_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$253_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$253_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $nodes$$) : $m__5372__auto__$jscomp$253_m__5374__auto__$$.call(null, $g$$, $nodes$$);
  }
  $m__5372__auto__$jscomp$253_m__5374__auto__$$ = loom.graph.add_nodes_STAR_._;
  if ($m__5372__auto__$jscomp$253_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$253_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$253_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $nodes$$) : $m__5372__auto__$jscomp$253_m__5374__auto__$$.call(null, $g$$, $nodes$$);
  }
  throw $APP.cljs.core.missing_protocol("EditableGraph.add-nodes*", $g$$);
};
loom.graph.add_nodes_STAR_ = function($g$$, $nodes$$) {
  return $g$$ != null && $g$$.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 != null ? $g$$.loom$graph$EditableGraph$add_nodes_STAR_$arity$2($g$$, $nodes$$) : loom$graph$EditableGraph$add_nodes_STAR_$dyn_47436($g$$, $nodes$$);
};
var loom$graph$EditableGraph$add_edges_STAR_$dyn_47438 = function($g$$, $edges$$) {
  var $m__5372__auto__$jscomp$254_m__5374__auto__$$ = loom.graph.add_edges_STAR_[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
  if ($m__5372__auto__$jscomp$254_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$254_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$254_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $edges$$) : $m__5372__auto__$jscomp$254_m__5374__auto__$$.call(null, $g$$, $edges$$);
  }
  $m__5372__auto__$jscomp$254_m__5374__auto__$$ = loom.graph.add_edges_STAR_._;
  if ($m__5372__auto__$jscomp$254_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$254_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$254_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $edges$$) : $m__5372__auto__$jscomp$254_m__5374__auto__$$.call(null, $g$$, $edges$$);
  }
  throw $APP.cljs.core.missing_protocol("EditableGraph.add-edges*", $g$$);
};
loom.graph.add_edges_STAR_ = function($g$$, $edges$$) {
  return $g$$ != null && $g$$.loom$graph$EditableGraph$add_edges_STAR_$arity$2 != null ? $g$$.loom$graph$EditableGraph$add_edges_STAR_$arity$2($g$$, $edges$$) : loom$graph$EditableGraph$add_edges_STAR_$dyn_47438($g$$, $edges$$);
};
var loom$graph$EditableGraph$remove_nodes_STAR_$dyn_47442 = function($g$$, $nodes$$) {
  var $m__5372__auto__$jscomp$255_m__5374__auto__$$ = loom.graph.remove_nodes_STAR_[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
  if ($m__5372__auto__$jscomp$255_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$255_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$255_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $nodes$$) : $m__5372__auto__$jscomp$255_m__5374__auto__$$.call(null, $g$$, $nodes$$);
  }
  $m__5372__auto__$jscomp$255_m__5374__auto__$$ = loom.graph.remove_nodes_STAR_._;
  if ($m__5372__auto__$jscomp$255_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$255_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$255_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $nodes$$) : $m__5372__auto__$jscomp$255_m__5374__auto__$$.call(null, $g$$, $nodes$$);
  }
  throw $APP.cljs.core.missing_protocol("EditableGraph.remove-nodes*", $g$$);
};
loom.graph.remove_nodes_STAR_ = function($g$$, $nodes$$) {
  return $g$$ != null && $g$$.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 != null ? $g$$.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2($g$$, $nodes$$) : loom$graph$EditableGraph$remove_nodes_STAR_$dyn_47442($g$$, $nodes$$);
};
var loom$graph$EditableGraph$remove_edges_STAR_$dyn_47451 = function($g$$, $edges$$) {
  var $m__5372__auto__$jscomp$256_m__5374__auto__$$ = loom.graph.remove_edges_STAR_[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
  if ($m__5372__auto__$jscomp$256_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$256_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$256_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $edges$$) : $m__5372__auto__$jscomp$256_m__5374__auto__$$.call(null, $g$$, $edges$$);
  }
  $m__5372__auto__$jscomp$256_m__5374__auto__$$ = loom.graph.remove_edges_STAR_._;
  if ($m__5372__auto__$jscomp$256_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$256_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$256_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $edges$$) : $m__5372__auto__$jscomp$256_m__5374__auto__$$.call(null, $g$$, $edges$$);
  }
  throw $APP.cljs.core.missing_protocol("EditableGraph.remove-edges*", $g$$);
};
loom.graph.remove_edges_STAR_ = function($g$$, $edges$$) {
  return $g$$ != null && $g$$.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 != null ? $g$$.loom$graph$EditableGraph$remove_edges_STAR_$arity$2($g$$, $edges$$) : loom$graph$EditableGraph$remove_edges_STAR_$dyn_47451($g$$, $edges$$);
};
var loom$graph$EditableGraph$remove_all$dyn_47452 = function($g$$) {
  var $m__5372__auto__$jscomp$257_m__5374__auto__$$ = loom.graph.remove_all[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
  if ($m__5372__auto__$jscomp$257_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$257_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$257_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($g$$) : $m__5372__auto__$jscomp$257_m__5374__auto__$$.call(null, $g$$);
  }
  $m__5372__auto__$jscomp$257_m__5374__auto__$$ = loom.graph.remove_all._;
  if ($m__5372__auto__$jscomp$257_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$257_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$257_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($g$$) : $m__5372__auto__$jscomp$257_m__5374__auto__$$.call(null, $g$$);
  }
  throw $APP.cljs.core.missing_protocol("EditableGraph.remove-all", $g$$);
};
loom.graph.remove_all = function($g$$) {
  return $g$$ != null && $g$$.loom$graph$EditableGraph$remove_all$arity$1 != null ? $g$$.loom$graph$EditableGraph$remove_all$arity$1($g$$) : loom$graph$EditableGraph$remove_all$dyn_47452($g$$);
};
loom.graph.Edge = function() {
};
var loom$graph$Edge$src$dyn_47457 = function($edge$$) {
  var $m__5372__auto__$jscomp$258_m__5374__auto__$$ = loom.graph.src[$APP.goog.typeOf($edge$$ == null ? null : $edge$$)];
  if ($m__5372__auto__$jscomp$258_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$258_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$258_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($edge$$) : $m__5372__auto__$jscomp$258_m__5374__auto__$$.call(null, $edge$$);
  }
  $m__5372__auto__$jscomp$258_m__5374__auto__$$ = loom.graph.src._;
  if ($m__5372__auto__$jscomp$258_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$258_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$258_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($edge$$) : $m__5372__auto__$jscomp$258_m__5374__auto__$$.call(null, $edge$$);
  }
  throw $APP.cljs.core.missing_protocol("Edge.src", $edge$$);
};
loom.graph.src = function($edge$$) {
  return $edge$$ != null && $edge$$.loom$graph$Edge$src$arity$1 != null ? $edge$$.loom$graph$Edge$src$arity$1($edge$$) : loom$graph$Edge$src$dyn_47457($edge$$);
};
var loom$graph$Edge$dest$dyn_47458 = function($edge$$) {
  var $m__5372__auto__$jscomp$259_m__5374__auto__$$ = loom.graph.dest[$APP.goog.typeOf($edge$$ == null ? null : $edge$$)];
  if ($m__5372__auto__$jscomp$259_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$259_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$259_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($edge$$) : $m__5372__auto__$jscomp$259_m__5374__auto__$$.call(null, $edge$$);
  }
  $m__5372__auto__$jscomp$259_m__5374__auto__$$ = loom.graph.dest._;
  if ($m__5372__auto__$jscomp$259_m__5374__auto__$$ != null) {
    return $m__5372__auto__$jscomp$259_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1 ? $m__5372__auto__$jscomp$259_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$1($edge$$) : $m__5372__auto__$jscomp$259_m__5374__auto__$$.call(null, $edge$$);
  }
  throw $APP.cljs.core.missing_protocol("Edge.dest", $edge$$);
};
loom.graph.dest = function($edge$$) {
  return $edge$$ != null && $edge$$.loom$graph$Edge$dest$arity$1 != null ? $edge$$.loom$graph$Edge$dest$arity$1($edge$$) : loom$graph$Edge$dest$dyn_47458($edge$$);
};
$APP.cljs.core.PersistentVector.prototype.loom$graph$Edge$ = $APP.cljs.core.PROTOCOL_SENTINEL;
$APP.cljs.core.PersistentVector.prototype.loom$graph$Edge$src$arity$1 = function($edge$$) {
  return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2(this, 0);
};
$APP.cljs.core.PersistentVector.prototype.loom$graph$Edge$dest$arity$1 = function($edge$$) {
  return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2(this, 1);
};
$APP.cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$ = $APP.cljs.core.PROTOCOL_SENTINEL;
$APP.cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$src$arity$1 = function($edge$$) {
  return $APP.cljs$cst$1398$src.cljs$core$IFn$_invoke$arity$1(this);
};
$APP.cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$dest$arity$1 = function($edge$$) {
  return cljs$cst$2728$dest.cljs$core$IFn$_invoke$arity$1(this);
};
$APP.cljs.core.PersistentHashMap.prototype.loom$graph$Edge$ = $APP.cljs.core.PROTOCOL_SENTINEL;
$APP.cljs.core.PersistentHashMap.prototype.loom$graph$Edge$src$arity$1 = function($edge$$) {
  return $APP.cljs$cst$1398$src.cljs$core$IFn$_invoke$arity$1(this);
};
$APP.cljs.core.PersistentHashMap.prototype.loom$graph$Edge$dest$arity$1 = function($edge$$) {
  return cljs$cst$2728$dest.cljs$core$IFn$_invoke$arity$1(this);
};
$APP.cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$ = $APP.cljs.core.PROTOCOL_SENTINEL;
$APP.cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$src$arity$1 = function($edge$$) {
  return $APP.cljs$cst$1398$src.cljs$core$IFn$_invoke$arity$1(this);
};
$APP.cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$dest$arity$1 = function($edge$$) {
  return cljs$cst$2728$dest.cljs$core$IFn$_invoke$arity$1(this);
};
loom.graph.successors = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return loom.graph.successors.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.graph.successors.cljs$core$IFn$_invoke$arity$1 = function($g$$) {
  return function($p1__47004_SHARP_$$) {
    return loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g$$, $p1__47004_SHARP_$$);
  };
};
loom.graph.successors.cljs$core$IFn$_invoke$arity$2 = function($g$$, $node$$) {
  return loom.graph.successors_STAR_($g$$, $node$$);
};
loom.graph.successors.cljs$lang$maxFixedArity = 2;
loom.graph.predecessors = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1 = function($g$$) {
  return function($p1__47007_SHARP_$$) {
    return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2($g$$, $p1__47007_SHARP_$$);
  };
};
loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2 = function($g$$, $node$$) {
  return loom.graph.predecessors_STAR_($g$$, $node$$);
};
loom.graph.predecessors.cljs$lang$maxFixedArity = 2;
loom.graph.weight = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return loom.graph.weight.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return loom.graph.weight.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.graph.weight.cljs$core$IFn$_invoke$arity$1 = function($g$$) {
  return $APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.graph.weight, $g$$);
};
loom.graph.weight.cljs$core$IFn$_invoke$arity$2 = function($g$$, $e$$) {
  return loom.graph.weight_STAR_($g$$, loom.graph.src($e$$), loom.graph.dest($e$$));
};
loom.graph.weight.cljs$core$IFn$_invoke$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.graph.weight_STAR_($g$$, $n1$$, $n2$$);
};
loom.graph.weight.cljs$lang$maxFixedArity = 3;
loom.graph.add_nodes = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$233_argseq__5756__auto__$$ = [], $len__5749__auto___47466$$ = arguments.length, $i__5750__auto___47467$$ = 0;;) {
    if ($i__5750__auto___47467$$ < $len__5749__auto___47466$$) {
      $args__5755__auto__$jscomp$233_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47467$$]), $i__5750__auto___47467$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$233_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$233_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$233_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$233_argseq__5756__auto__$$);
};
loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic = function($g$$, $nodes$$) {
  return loom.graph.add_nodes_STAR_($g$$, $nodes$$);
};
loom.graph.add_nodes.cljs$lang$maxFixedArity = 1;
loom.graph.add_nodes.cljs$lang$applyTo = function($seq47012_seq47012__$1$$) {
  var $G__47013$$ = $APP.cljs.core.first($seq47012_seq47012__$1$$);
  $seq47012_seq47012__$1$$ = $APP.cljs.core.next($seq47012_seq47012__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__47013$$, $seq47012_seq47012__$1$$);
};
loom.graph.add_edges = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$234_argseq__5756__auto__$$ = [], $len__5749__auto___47469$$ = arguments.length, $i__5750__auto___47470$$ = 0;;) {
    if ($i__5750__auto___47470$$ < $len__5749__auto___47469$$) {
      $args__5755__auto__$jscomp$234_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47470$$]), $i__5750__auto___47470$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$234_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$234_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$234_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$234_argseq__5756__auto__$$);
};
loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic = function($g$$, $edges$$) {
  return loom.graph.add_edges_STAR_($g$$, $edges$$);
};
loom.graph.add_edges.cljs$lang$maxFixedArity = 1;
loom.graph.add_edges.cljs$lang$applyTo = function($seq47014_seq47014__$1$$) {
  var $G__47015$$ = $APP.cljs.core.first($seq47014_seq47014__$1$$);
  $seq47014_seq47014__$1$$ = $APP.cljs.core.next($seq47014_seq47014__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__47015$$, $seq47014_seq47014__$1$$);
};
loom.graph.remove_nodes = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$235_argseq__5756__auto__$$ = [], $len__5749__auto___47472$$ = arguments.length, $i__5750__auto___47473$$ = 0;;) {
    if ($i__5750__auto___47473$$ < $len__5749__auto___47472$$) {
      $args__5755__auto__$jscomp$235_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47473$$]), $i__5750__auto___47473$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$235_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$235_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$235_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$235_argseq__5756__auto__$$);
};
loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic = function($g$$, $nodes$$) {
  return loom.graph.remove_nodes_STAR_($g$$, $nodes$$);
};
loom.graph.remove_nodes.cljs$lang$maxFixedArity = 1;
loom.graph.remove_nodes.cljs$lang$applyTo = function($seq47016_seq47016__$1$$) {
  var $G__47017$$ = $APP.cljs.core.first($seq47016_seq47016__$1$$);
  $seq47016_seq47016__$1$$ = $APP.cljs.core.next($seq47016_seq47016__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__47017$$, $seq47016_seq47016__$1$$);
};
loom.graph.remove_edges = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$236_argseq__5756__auto__$$ = [], $len__5749__auto___47475$$ = arguments.length, $i__5750__auto___47476$$ = 0;;) {
    if ($i__5750__auto___47476$$ < $len__5749__auto___47475$$) {
      $args__5755__auto__$jscomp$236_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47476$$]), $i__5750__auto___47476$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$236_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$236_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$236_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$236_argseq__5756__auto__$$);
};
loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic = function($g$$, $edges$$) {
  return loom.graph.remove_edges_STAR_($g$$, $edges$$);
};
loom.graph.remove_edges.cljs$lang$maxFixedArity = 1;
loom.graph.remove_edges.cljs$lang$applyTo = function($seq47018_seq47018__$1$$) {
  var $G__47019$$ = $APP.cljs.core.first($seq47018_seq47018__$1$$);
  $seq47018_seq47018__$1$$ = $APP.cljs.core.next($seq47018_seq47018__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__47019$$, $seq47018_seq47018__$1$$);
};
loom.graph.BasicEditableGraph = function($nodeset$$, $adj$$, $__meta$$, $__extmap$$, $__hash$$) {
  this.nodeset = $nodeset$$;
  this.adj = $adj$$;
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k47021$$, $else__5326__auto__$$) {
  switch($k47021$$ instanceof $APP.cljs.core.Keyword ? $k47021$$.fqn : null) {
    case "nodeset":
      return this.nodeset;
    case "adj":
      return this.adj;
    default:
      return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k47021$$, $else__5326__auto__$$);
  }
};
loom.graph.BasicEditableGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__47026_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47026_v__5348__auto__$$, 0, null);
    $p__47026_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47026_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__47026_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__47026_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
loom.graph.BasicEditableGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#loom.graph.BasicEditableGraph{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset, this.nodeset], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, this.adj], null)], null), this.__extmap));
};
loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__47020$$) {
  return new $APP.cljs.core.RecordIter(0, this, 2, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset, cljs$cst$2730$adj], null), $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
loom.graph.BasicEditableGraph.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
loom.graph.BasicEditableGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new loom.graph.BasicEditableGraph(this.nodeset, this.adj, this.__meta, this.__extmap, this.__hash);
};
loom.graph.BasicEditableGraph.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 2 + $APP.cljs.core.count(this.__extmap);
};
loom.graph.BasicEditableGraph.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$82_h__5134__auto____$1$jscomp$82_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$82_h__5134__auto____$1$jscomp$82_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$82_h__5134__auto____$1$jscomp$82_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$82_h__5134__auto____$1$jscomp$82_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$82_h__5134__auto____$1$jscomp$82_this__5319__auto__$$ = 446662859 ^ $APP.cljs.core.hash_unordered_coll(this);
};
loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this47022$$, $other47023$$) {
  return $other47023$$ != null && this.constructor === $other47023$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.nodeset, $other47023$$.nodeset) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.adj, $other47023$$.adj) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other47023$$.__extmap);
};
loom.graph.BasicEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$2729$nodeset, null, cljs$cst$2730$adj, null], null), null), $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), $k__5334__auto__$$) : new loom.graph.BasicEditableGraph(this.nodeset, this.adj, this.__meta, 
  $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k47021$$) {
  switch($k47021$$ instanceof $APP.cljs.core.Keyword ? $k47021$$.fqn : null) {
    case "nodeset":
    case "adj":
      return !0;
    default:
      return $APP.cljs.core.contains_QMARK_(this.__extmap, $k47021$$);
  }
};
loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($pred__47031_this__5331__auto__$$, $k__5332__auto__$$, $G__47020$$) {
  $pred__47031_this__5331__auto__$$ = $APP.cljs.core.keyword_identical_QMARK_;
  return $APP.cljs.core.truth_($pred__47031_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47031_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2729$nodeset, $k__5332__auto__$$) : $pred__47031_this__5331__auto__$$.call(null, cljs$cst$2729$nodeset, $k__5332__auto__$$)) ? new loom.graph.BasicEditableGraph($G__47020$$, this.adj, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47031_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47031_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2730$adj, 
  $k__5332__auto__$$) : $pred__47031_this__5331__auto__$$.call(null, cljs$cst$2730$adj, $k__5332__auto__$$)) ? new loom.graph.BasicEditableGraph(this.nodeset, $G__47020$$, this.__meta, this.__extmap, null) : new loom.graph.BasicEditableGraph(this.nodeset, this.adj, this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__47020$$), null);
};
loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.MapEntry(cljs$cst$2729$nodeset, this.nodeset, null), new $APP.cljs.core.MapEntry(cljs$cst$2730$adj, this.adj, null)], null), this.__extmap));
};
loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__47020$$) {
  return new loom.graph.BasicEditableGraph(this.nodeset, this.adj, $G__47020$$, this.__extmap, this.__hash);
};
loom.graph.BasicEditableGraph.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
loom.graph.BasicEditableGraph.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2731$nodeset, cljs$cst$2732$adj], null);
};
loom.graph.BasicEditableGraph.cljs$lang$type = !0;
loom.graph.BasicEditableGraph.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "loom.graph/BasicEditableGraph", null, 1, null);
};
loom.graph.BasicEditableGraph.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "loom.graph/BasicEditableGraph");
};
loom.graph.__GT_BasicEditableGraph = function($nodeset$$, $adj$$) {
  return new loom.graph.BasicEditableGraph($nodeset$$, $adj$$, null, null, null);
};
loom.graph.map__GT_BasicEditableGraph = function($G__47024$$) {
  var $G__47034$jscomp$inline_5110_extmap__5365__auto__$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($G__47024$$, cljs$cst$2729$nodeset, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2730$adj], 0));
  $G__47034$jscomp$inline_5110_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__47024$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__47034$jscomp$inline_5110_extmap__5365__auto__$$) : $G__47034$jscomp$inline_5110_extmap__5365__auto__$$;
  return new loom.graph.BasicEditableGraph(cljs$cst$2729$nodeset.cljs$core$IFn$_invoke$arity$1($G__47024$$), cljs$cst$2730$adj.cljs$core$IFn$_invoke$arity$1($G__47024$$), null, $APP.cljs.core.not_empty($G__47034$jscomp$inline_5110_extmap__5365__auto__$$), null);
};
loom.graph.BasicEditableDigraph = function($nodeset$$, $adj$$, $in$$$, $__meta$$, $__extmap$$, $__hash$$) {
  this.nodeset = $nodeset$$;
  this.adj = $adj$$;
  this.in$ = $in$$$;
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k47036$$, $else__5326__auto__$$) {
  switch($k47036$$ instanceof $APP.cljs.core.Keyword ? $k47036$$.fqn : null) {
    case "nodeset":
      return this.nodeset;
    case "adj":
      return this.adj;
    case "in":
      return this.in$;
    default:
      return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k47036$$, $else__5326__auto__$$);
  }
};
loom.graph.BasicEditableDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__47041_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47041_v__5348__auto__$$, 0, null);
    $p__47041_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47041_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__47041_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__47041_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
loom.graph.BasicEditableDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#loom.graph.BasicEditableDigraph{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset, this.nodeset], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, this.adj], null), new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1825$in, this.in$], null)], null), this.__extmap));
};
loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__47035$$) {
  return new $APP.cljs.core.RecordIter(0, this, 3, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset, cljs$cst$2730$adj, $APP.cljs$cst$1825$in], null), $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
loom.graph.BasicEditableDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
loom.graph.BasicEditableDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new loom.graph.BasicEditableDigraph(this.nodeset, this.adj, this.in$, this.__meta, this.__extmap, this.__hash);
};
loom.graph.BasicEditableDigraph.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 3 + $APP.cljs.core.count(this.__extmap);
};
loom.graph.BasicEditableDigraph.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$83_h__5134__auto____$1$jscomp$83_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$83_h__5134__auto____$1$jscomp$83_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$83_h__5134__auto____$1$jscomp$83_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$83_h__5134__auto____$1$jscomp$83_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$83_h__5134__auto____$1$jscomp$83_this__5319__auto__$$ = 324724442 ^ $APP.cljs.core.hash_unordered_coll(this);
};
loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this47037$$, $other47038$$) {
  return $other47038$$ != null && this.constructor === $other47038$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.nodeset, $other47038$$.nodeset) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.adj, $other47038$$.adj) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.in, $other47038$$.in) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other47038$$.__extmap);
};
loom.graph.BasicEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2729$nodeset, null, cljs$cst$2730$adj, null, $APP.cljs$cst$1825$in, null], null), null), $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), $k__5334__auto__$$) : new loom.graph.BasicEditableDigraph(this.nodeset, 
  this.adj, this.in$, this.__meta, $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k47036$$) {
  switch($k47036$$ instanceof $APP.cljs.core.Keyword ? $k47036$$.fqn : null) {
    case "nodeset":
    case "adj":
    case "in":
      return !0;
    default:
      return $APP.cljs.core.contains_QMARK_(this.__extmap, $k47036$$);
  }
};
loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($pred__47046_this__5331__auto__$$, $k__5332__auto__$$, $G__47035$$) {
  $pred__47046_this__5331__auto__$$ = $APP.cljs.core.keyword_identical_QMARK_;
  return $APP.cljs.core.truth_($pred__47046_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47046_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2729$nodeset, $k__5332__auto__$$) : $pred__47046_this__5331__auto__$$.call(null, cljs$cst$2729$nodeset, $k__5332__auto__$$)) ? new loom.graph.BasicEditableDigraph($G__47035$$, this.adj, this.in$, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47046_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47046_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2730$adj, 
  $k__5332__auto__$$) : $pred__47046_this__5331__auto__$$.call(null, cljs$cst$2730$adj, $k__5332__auto__$$)) ? new loom.graph.BasicEditableDigraph(this.nodeset, $G__47035$$, this.in$, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47046_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47046_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$1825$in, $k__5332__auto__$$) : $pred__47046_this__5331__auto__$$.call(null, $APP.cljs$cst$1825$in, $k__5332__auto__$$)) ? 
  new loom.graph.BasicEditableDigraph(this.nodeset, this.adj, $G__47035$$, this.__meta, this.__extmap, null) : new loom.graph.BasicEditableDigraph(this.nodeset, this.adj, this.in$, this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__47035$$), null);
};
loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.MapEntry(cljs$cst$2729$nodeset, this.nodeset, null), new $APP.cljs.core.MapEntry(cljs$cst$2730$adj, this.adj, null), new $APP.cljs.core.MapEntry($APP.cljs$cst$1825$in, this.in$, null)], null), this.__extmap));
};
loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__47035$$) {
  return new loom.graph.BasicEditableDigraph(this.nodeset, this.adj, this.in$, $G__47035$$, this.__extmap, this.__hash);
};
loom.graph.BasicEditableDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
loom.graph.BasicEditableDigraph.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2731$nodeset, cljs$cst$2732$adj, $APP.cljs$cst$2401$in], null);
};
loom.graph.BasicEditableDigraph.cljs$lang$type = !0;
loom.graph.BasicEditableDigraph.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "loom.graph/BasicEditableDigraph", null, 1, null);
};
loom.graph.BasicEditableDigraph.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "loom.graph/BasicEditableDigraph");
};
loom.graph.__GT_BasicEditableDigraph = function($nodeset$$, $adj$$, $in$$$) {
  return new loom.graph.BasicEditableDigraph($nodeset$$, $adj$$, $in$$$, null, null, null);
};
loom.graph.map__GT_BasicEditableDigraph = function($G__47039$$) {
  var $G__47049$jscomp$inline_5112_extmap__5365__auto__$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($G__47039$$, cljs$cst$2729$nodeset, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2730$adj, $APP.cljs$cst$1825$in], 0));
  $G__47049$jscomp$inline_5112_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__47039$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__47049$jscomp$inline_5112_extmap__5365__auto__$$) : $G__47049$jscomp$inline_5112_extmap__5365__auto__$$;
  return new loom.graph.BasicEditableDigraph(cljs$cst$2729$nodeset.cljs$core$IFn$_invoke$arity$1($G__47039$$), cljs$cst$2730$adj.cljs$core$IFn$_invoke$arity$1($G__47039$$), $APP.cljs$cst$1825$in.cljs$core$IFn$_invoke$arity$1($G__47039$$), null, $APP.cljs.core.not_empty($G__47049$jscomp$inline_5112_extmap__5365__auto__$$), null);
};
loom.graph.BasicEditableWeightedGraph = function($nodeset$$, $adj$$, $__meta$$, $__extmap$$, $__hash$$) {
  this.nodeset = $nodeset$$;
  this.adj = $adj$$;
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k47051$$, $else__5326__auto__$$) {
  switch($k47051$$ instanceof $APP.cljs.core.Keyword ? $k47051$$.fqn : null) {
    case "nodeset":
      return this.nodeset;
    case "adj":
      return this.adj;
    default:
      return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k47051$$, $else__5326__auto__$$);
  }
};
loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__47056_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47056_v__5348__auto__$$, 0, null);
    $p__47056_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47056_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__47056_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__47056_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#loom.graph.BasicEditableWeightedGraph{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset, this.nodeset], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, this.adj], null)], null), 
  this.__extmap));
};
loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__47050$$) {
  return new $APP.cljs.core.RecordIter(0, this, 2, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset, cljs$cst$2730$adj], null), $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new loom.graph.BasicEditableWeightedGraph(this.nodeset, this.adj, this.__meta, this.__extmap, this.__hash);
};
loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 2 + $APP.cljs.core.count(this.__extmap);
};
loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$84_h__5134__auto____$1$jscomp$84_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$84_h__5134__auto____$1$jscomp$84_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$84_h__5134__auto____$1$jscomp$84_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$84_h__5134__auto____$1$jscomp$84_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$84_h__5134__auto____$1$jscomp$84_this__5319__auto__$$ = -212297308 ^ $APP.cljs.core.hash_unordered_coll(this);
};
loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this47052$$, $other47053$$) {
  return $other47053$$ != null && this.constructor === $other47053$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.nodeset, $other47053$$.nodeset) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.adj, $other47053$$.adj) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other47053$$.__extmap);
};
loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 2, [cljs$cst$2729$nodeset, null, cljs$cst$2730$adj, null], null), null), $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), $k__5334__auto__$$) : new loom.graph.BasicEditableWeightedGraph(this.nodeset, this.adj, this.__meta, 
  $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k47051$$) {
  switch($k47051$$ instanceof $APP.cljs.core.Keyword ? $k47051$$.fqn : null) {
    case "nodeset":
    case "adj":
      return !0;
    default:
      return $APP.cljs.core.contains_QMARK_(this.__extmap, $k47051$$);
  }
};
loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($pred__47061_this__5331__auto__$$, $k__5332__auto__$$, $G__47050$$) {
  $pred__47061_this__5331__auto__$$ = $APP.cljs.core.keyword_identical_QMARK_;
  return $APP.cljs.core.truth_($pred__47061_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47061_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2729$nodeset, $k__5332__auto__$$) : $pred__47061_this__5331__auto__$$.call(null, cljs$cst$2729$nodeset, $k__5332__auto__$$)) ? new loom.graph.BasicEditableWeightedGraph($G__47050$$, this.adj, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47061_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47061_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2730$adj, 
  $k__5332__auto__$$) : $pred__47061_this__5331__auto__$$.call(null, cljs$cst$2730$adj, $k__5332__auto__$$)) ? new loom.graph.BasicEditableWeightedGraph(this.nodeset, $G__47050$$, this.__meta, this.__extmap, null) : new loom.graph.BasicEditableWeightedGraph(this.nodeset, this.adj, this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__47050$$), null);
};
loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.MapEntry(cljs$cst$2729$nodeset, this.nodeset, null), new $APP.cljs.core.MapEntry(cljs$cst$2730$adj, this.adj, null)], null), this.__extmap));
};
loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__47050$$) {
  return new loom.graph.BasicEditableWeightedGraph(this.nodeset, this.adj, $G__47050$$, this.__extmap, this.__hash);
};
loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
loom.graph.BasicEditableWeightedGraph.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2731$nodeset, cljs$cst$2732$adj], null);
};
loom.graph.BasicEditableWeightedGraph.cljs$lang$type = !0;
loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "loom.graph/BasicEditableWeightedGraph", null, 1, null);
};
loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "loom.graph/BasicEditableWeightedGraph");
};
loom.graph.__GT_BasicEditableWeightedGraph = function($nodeset$$, $adj$$) {
  return new loom.graph.BasicEditableWeightedGraph($nodeset$$, $adj$$, null, null, null);
};
loom.graph.map__GT_BasicEditableWeightedGraph = function($G__47054$$) {
  var $G__47064$jscomp$inline_5114_extmap__5365__auto__$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($G__47054$$, cljs$cst$2729$nodeset, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2730$adj], 0));
  $G__47064$jscomp$inline_5114_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__47054$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__47064$jscomp$inline_5114_extmap__5365__auto__$$) : $G__47064$jscomp$inline_5114_extmap__5365__auto__$$;
  return new loom.graph.BasicEditableWeightedGraph(cljs$cst$2729$nodeset.cljs$core$IFn$_invoke$arity$1($G__47054$$), cljs$cst$2730$adj.cljs$core$IFn$_invoke$arity$1($G__47054$$), null, $APP.cljs.core.not_empty($G__47064$jscomp$inline_5114_extmap__5365__auto__$$), null);
};
loom.graph.BasicEditableWeightedDigraph = function($nodeset$$, $adj$$, $in$$$, $__meta$$, $__extmap$$, $__hash$$) {
  this.nodeset = $nodeset$$;
  this.adj = $adj$$;
  this.in$ = $in$$$;
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k47066$$, $else__5326__auto__$$) {
  switch($k47066$$ instanceof $APP.cljs.core.Keyword ? $k47066$$.fqn : null) {
    case "nodeset":
      return this.nodeset;
    case "adj":
      return this.adj;
    case "in":
      return this.in$;
    default:
      return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k47066$$, $else__5326__auto__$$);
  }
};
loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__47071_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47071_v__5348__auto__$$, 0, null);
    $p__47071_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47071_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__47071_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__47071_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#loom.graph.BasicEditableWeightedDigraph{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset, this.nodeset], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, this.adj], null), new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1825$in, this.in$], null)], null), this.__extmap));
};
loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__47065$$) {
  return new $APP.cljs.core.RecordIter(0, this, 3, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset, cljs$cst$2730$adj, $APP.cljs$cst$1825$in], null), $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new loom.graph.BasicEditableWeightedDigraph(this.nodeset, this.adj, this.in$, this.__meta, this.__extmap, this.__hash);
};
loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 3 + $APP.cljs.core.count(this.__extmap);
};
loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$85_h__5134__auto____$1$jscomp$85_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$85_h__5134__auto____$1$jscomp$85_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$85_h__5134__auto____$1$jscomp$85_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$85_h__5134__auto____$1$jscomp$85_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$85_h__5134__auto____$1$jscomp$85_this__5319__auto__$$ = -1110931322 ^ $APP.cljs.core.hash_unordered_coll(this);
};
loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this47067$$, $other47068$$) {
  return $other47068$$ != null && this.constructor === $other47068$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.nodeset, $other47068$$.nodeset) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.adj, $other47068$$.adj) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.in, $other47068$$.in) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other47068$$.__extmap);
};
loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$2729$nodeset, null, cljs$cst$2730$adj, null, $APP.cljs$cst$1825$in, null], null), null), $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), $k__5334__auto__$$) : new loom.graph.BasicEditableWeightedDigraph(this.nodeset, 
  this.adj, this.in$, this.__meta, $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k47066$$) {
  switch($k47066$$ instanceof $APP.cljs.core.Keyword ? $k47066$$.fqn : null) {
    case "nodeset":
    case "adj":
    case "in":
      return !0;
    default:
      return $APP.cljs.core.contains_QMARK_(this.__extmap, $k47066$$);
  }
};
loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($pred__47076_this__5331__auto__$$, $k__5332__auto__$$, $G__47065$$) {
  $pred__47076_this__5331__auto__$$ = $APP.cljs.core.keyword_identical_QMARK_;
  return $APP.cljs.core.truth_($pred__47076_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47076_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2729$nodeset, $k__5332__auto__$$) : $pred__47076_this__5331__auto__$$.call(null, cljs$cst$2729$nodeset, $k__5332__auto__$$)) ? new loom.graph.BasicEditableWeightedDigraph($G__47065$$, this.adj, this.in$, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47076_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47076_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2730$adj, 
  $k__5332__auto__$$) : $pred__47076_this__5331__auto__$$.call(null, cljs$cst$2730$adj, $k__5332__auto__$$)) ? new loom.graph.BasicEditableWeightedDigraph(this.nodeset, $G__47065$$, this.in$, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47076_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47076_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$1825$in, $k__5332__auto__$$) : $pred__47076_this__5331__auto__$$.call(null, $APP.cljs$cst$1825$in, $k__5332__auto__$$)) ? 
  new loom.graph.BasicEditableWeightedDigraph(this.nodeset, this.adj, $G__47065$$, this.__meta, this.__extmap, null) : new loom.graph.BasicEditableWeightedDigraph(this.nodeset, this.adj, this.in$, this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__47065$$), null);
};
loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.MapEntry(cljs$cst$2729$nodeset, this.nodeset, null), new $APP.cljs.core.MapEntry(cljs$cst$2730$adj, this.adj, null), new $APP.cljs.core.MapEntry($APP.cljs$cst$1825$in, this.in$, null)], null), this.__extmap));
};
loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__47065$$) {
  return new loom.graph.BasicEditableWeightedDigraph(this.nodeset, this.adj, this.in$, $G__47065$$, this.__extmap, this.__hash);
};
loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
loom.graph.BasicEditableWeightedDigraph.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2731$nodeset, cljs$cst$2732$adj, $APP.cljs$cst$2401$in], null);
};
loom.graph.BasicEditableWeightedDigraph.cljs$lang$type = !0;
loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "loom.graph/BasicEditableWeightedDigraph", null, 1, null);
};
loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "loom.graph/BasicEditableWeightedDigraph");
};
loom.graph.__GT_BasicEditableWeightedDigraph = function($nodeset$$, $adj$$, $in$$$) {
  return new loom.graph.BasicEditableWeightedDigraph($nodeset$$, $adj$$, $in$$$, null, null, null);
};
loom.graph.map__GT_BasicEditableWeightedDigraph = function($G__47069$$) {
  var $G__47079$jscomp$inline_5116_extmap__5365__auto__$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($G__47069$$, cljs$cst$2729$nodeset, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2730$adj, $APP.cljs$cst$1825$in], 0));
  $G__47079$jscomp$inline_5116_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__47069$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__47079$jscomp$inline_5116_extmap__5365__auto__$$) : $G__47079$jscomp$inline_5116_extmap__5365__auto__$$;
  return new loom.graph.BasicEditableWeightedDigraph(cljs$cst$2729$nodeset.cljs$core$IFn$_invoke$arity$1($G__47069$$), cljs$cst$2730$adj.cljs$core$IFn$_invoke$arity$1($G__47069$$), $APP.cljs$cst$1825$in.cljs$core$IFn$_invoke$arity$1($G__47069$$), null, $APP.cljs.core.not_empty($G__47079$jscomp$inline_5116_extmap__5365__auto__$$), null);
};
loom.graph._STAR_default_weight_STAR_ = 1;
loom.graph.remove_adj_nodes = function($m$$, $nodes$$, $adjacents$$, $remove_fn$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($m__$1$$, $n$$) {
    return $APP.cljs.core.truth_($m__$1$$.cljs$core$IFn$_invoke$arity$1 ? $m__$1$$.cljs$core$IFn$_invoke$arity$1($n$$) : $m__$1$$.call(null, $n$$)) ? $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$3($m__$1$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n$$], null), function($p1__47080_SHARP_$$) {
      return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($remove_fn$$, $p1__47080_SHARP_$$, $nodes$$);
    }) : $m__$1$$;
  }, $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.dissoc, $m$$, $nodes$$), $adjacents$$);
};
loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$nodes$arity$1 = function($g$$) {
  return this.nodeset;
};
loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$edges$arity$1 = function($g$$) {
  var $g__$1$$ = this;
  return function $loom$graph$iter__47083$$($s__47084$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (var $s__47084__$1$$ = $s__47084$$;;) {
        var $iterys__5499__auto__$jscomp$36_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47084__$1$$);
        if ($iterys__5499__auto__$jscomp$36_temp__5825__auto__$$) {
          var $xs__6385__auto__$$ = $iterys__5499__auto__$jscomp$36_temp__5825__auto__$$, $fs__5500__auto__$jscomp$36_n1$$ = $APP.cljs.core.first($xs__6385__auto__$$);
          $iterys__5499__auto__$jscomp$36_temp__5825__auto__$$ = function($s__47084__$1$$, $n1$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$) {
            return function $loom$graph$iter__47083_$_iter__47085$$($s__47086$$) {
              return new $APP.cljs.core.LazySeq(null, function($s__47084__$1$$, $n1$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$) {
                return function() {
                  for (;;) {
                    var $s__47086__$2_temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__47086$$);
                    if ($s__47086__$2_temp__5825__auto____$1$$) {
                      if ($APP.cljs.core.chunked_seq_QMARK_($s__47086__$2_temp__5825__auto____$1$$)) {
                        var $JSCompiler_inline_result$jscomp$942_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47086__$2_temp__5825__auto____$1$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$942_c__5501__auto__$$), $b__47088_e$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                        a: {
                          for (var $i__47087$$ = 0;;) {
                            if ($i__47087$$ < $size__5502__auto__$$) {
                              var $e$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$942_c__5501__auto__$$, $i__47087$$);
                              $APP.cljs.core.chunk_append($b__47088_e$$, $e$$);
                              $i__47087$$ += 1;
                            } else {
                              $JSCompiler_inline_result$jscomp$942_c__5501__auto__$$ = !0;
                              break a;
                            }
                          }
                          $JSCompiler_inline_result$jscomp$942_c__5501__auto__$$ = void 0;
                        }
                        return $JSCompiler_inline_result$jscomp$942_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47088_e$$), $loom$graph$iter__47083_$_iter__47085$$($APP.cljs.core.chunk_rest($s__47086__$2_temp__5825__auto____$1$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47088_e$$), null);
                      }
                      $b__47088_e$$ = $APP.cljs.core.first($s__47086__$2_temp__5825__auto____$1$$);
                      return $APP.cljs.core.cons($b__47088_e$$, $loom$graph$iter__47083_$_iter__47085$$($APP.cljs.core.rest($s__47086__$2_temp__5825__auto____$1$$)));
                    }
                    return null;
                  }
                };
              }($s__47084__$1$$, $n1$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$), null, null);
            };
          }($s__47084__$1$$, $fs__5500__auto__$jscomp$36_n1$$, $xs__6385__auto__$$, $iterys__5499__auto__$jscomp$36_temp__5825__auto__$$, $g__$1$$);
          if ($fs__5500__auto__$jscomp$36_n1$$ = $APP.cljs.core.seq($iterys__5499__auto__$jscomp$36_temp__5825__auto__$$(loom.graph.out_edges($g__$1$$, $fs__5500__auto__$jscomp$36_n1$$)))) {
            return $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($fs__5500__auto__$jscomp$36_n1$$, $loom$graph$iter__47083$$($APP.cljs.core.rest($s__47084__$1$$)));
          }
          $s__47084__$1$$ = $APP.cljs.core.rest($s__47084__$1$$);
        } else {
          return null;
        }
      }
    }, null, null);
  }(loom.graph.nodes($g__$1$$));
};
loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.contains_QMARK_(this.nodeset, $node$$);
};
loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = function($g$$, $n1$$, $n2$$) {
  return $APP.cljs.core.contains_QMARK_($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $n1$$], null)), $n2$$);
};
loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_degree$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.count($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $node$$], null)));
};
loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_edges$arity$2 = function($g$$, $node$$) {
  return function $loom$graph$iter__47089$$($s__47090$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (;;) {
        var $s__47090__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47090$$);
        if ($s__47090__$2_temp__5825__auto__$$) {
          if ($APP.cljs.core.chunked_seq_QMARK_($s__47090__$2_temp__5825__auto__$$)) {
            var $JSCompiler_inline_result$jscomp$943_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47090__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$943_c__5501__auto__$$), $b__47092_n2$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
            a: {
              for (var $i__47091$$ = 0;;) {
                if ($i__47091$$ < $size__5502__auto__$$) {
                  var $n2$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$943_c__5501__auto__$$, $i__47091$$);
                  $APP.cljs.core.chunk_append($b__47092_n2$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$node$$, $n2$$], null));
                  $i__47091$$ += 1;
                } else {
                  $JSCompiler_inline_result$jscomp$943_c__5501__auto__$$ = !0;
                  break a;
                }
              }
              $JSCompiler_inline_result$jscomp$943_c__5501__auto__$$ = void 0;
            }
            return $JSCompiler_inline_result$jscomp$943_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47092_n2$$), $loom$graph$iter__47089$$($APP.cljs.core.chunk_rest($s__47090__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47092_n2$$), null);
          }
          $b__47092_n2$$ = $APP.cljs.core.first($s__47090__$2_temp__5825__auto__$$);
          return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$node$$, $b__47092_n2$$], null), $loom$graph$iter__47089$$($APP.cljs.core.rest($s__47090__$2_temp__5825__auto__$$)));
        }
        return null;
      }
    }, null, null);
  }(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(this, $node$$));
};
loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $node$$], null));
};
loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = function($g$$, $nodes$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($g__$2$$, $node$$) {
    return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($g__$2$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset], null), $APP.cljs.core.conj, $node$$);
  }, this, $nodes$$);
};
loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = function($g$$, $edges$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($g__$2$$, $n2$$) {
    var $n1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$$, 0, null);
    $n2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$$, 1, null);
    return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$5($g__$2$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset], null), $APP.cljs.core.conj, $n1$$, $n2$$), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $n1$$], null), $APP.cljs.core.fnil.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.conj, 
    $APP.cljs.core.PersistentHashSet.EMPTY), $n2$$), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $n2$$], null), $APP.cljs.core.fnil.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.conj, $APP.cljs.core.PersistentHashSet.EMPTY), $n1$$);
  }, this, $edges$$);
};
loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = function($g$jscomp$192_nbrs$$, $nodes$$) {
  var $g__$1$$ = this;
  $g$jscomp$192_nbrs$$ = $APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(function($p1__47081_SHARP_$$) {
    return loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g__$1$$, $p1__47081_SHARP_$$);
  }, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$nodes$$], 0));
  return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$3($g__$1$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset], null), function($p1__47082_SHARP_$$) {
    return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.disj, $p1__47082_SHARP_$$, $nodes$$);
  }), cljs$cst$2730$adj, loom.graph.remove_adj_nodes($g__$1$$.adj, $nodes$$, $g$jscomp$192_nbrs$$, $APP.cljs.core.disj));
};
loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = function($g$$, $edges$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($g__$2$$, $n2$$) {
    var $n1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$$, 0, null);
    $n2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$$, 1, null);
    return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($g__$2$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $n1$$], null), $APP.cljs.core.disj, $n2$$), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $n2$$], null), $APP.cljs.core.disj, $n1$$);
  }, this, $edges$$);
};
loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = function($g$$) {
  return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this, cljs$cst$2729$nodeset, $APP.cljs.core.PersistentHashSet.EMPTY, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2730$adj, $APP.cljs.core.PersistentArrayMap.EMPTY], 0));
};
loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$nodes$arity$1 = function($g$$) {
  return this.nodeset;
};
loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$edges$arity$1 = function($g$$) {
  var $g__$1$$ = this;
  return function $loom$graph$iter__47104$$($s__47105$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (var $s__47105__$1$$ = $s__47105$$;;) {
        var $iterys__5499__auto__$jscomp$37_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47105__$1$$);
        if ($iterys__5499__auto__$jscomp$37_temp__5825__auto__$$) {
          var $xs__6385__auto__$$ = $iterys__5499__auto__$jscomp$37_temp__5825__auto__$$, $fs__5500__auto__$jscomp$37_n1$$ = $APP.cljs.core.first($xs__6385__auto__$$);
          $iterys__5499__auto__$jscomp$37_temp__5825__auto__$$ = function($s__47105__$1$$, $n1$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$) {
            return function $loom$graph$iter__47104_$_iter__47106$$($s__47107$$) {
              return new $APP.cljs.core.LazySeq(null, function($s__47105__$1$$, $n1$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$) {
                return function() {
                  for (;;) {
                    var $s__47107__$2_temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__47107$$);
                    if ($s__47107__$2_temp__5825__auto____$1$$) {
                      if ($APP.cljs.core.chunked_seq_QMARK_($s__47107__$2_temp__5825__auto____$1$$)) {
                        var $JSCompiler_inline_result$jscomp$944_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47107__$2_temp__5825__auto____$1$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$944_c__5501__auto__$$), $b__47109_e$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                        a: {
                          for (var $i__47108$$ = 0;;) {
                            if ($i__47108$$ < $size__5502__auto__$$) {
                              var $e$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$944_c__5501__auto__$$, $i__47108$$);
                              $APP.cljs.core.chunk_append($b__47109_e$$, $e$$);
                              $i__47108$$ += 1;
                            } else {
                              $JSCompiler_inline_result$jscomp$944_c__5501__auto__$$ = !0;
                              break a;
                            }
                          }
                          $JSCompiler_inline_result$jscomp$944_c__5501__auto__$$ = void 0;
                        }
                        return $JSCompiler_inline_result$jscomp$944_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47109_e$$), $loom$graph$iter__47104_$_iter__47106$$($APP.cljs.core.chunk_rest($s__47107__$2_temp__5825__auto____$1$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47109_e$$), null);
                      }
                      $b__47109_e$$ = $APP.cljs.core.first($s__47107__$2_temp__5825__auto____$1$$);
                      return $APP.cljs.core.cons($b__47109_e$$, $loom$graph$iter__47104_$_iter__47106$$($APP.cljs.core.rest($s__47107__$2_temp__5825__auto____$1$$)));
                    }
                    return null;
                  }
                };
              }($s__47105__$1$$, $n1$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$), null, null);
            };
          }($s__47105__$1$$, $fs__5500__auto__$jscomp$37_n1$$, $xs__6385__auto__$$, $iterys__5499__auto__$jscomp$37_temp__5825__auto__$$, $g__$1$$);
          if ($fs__5500__auto__$jscomp$37_n1$$ = $APP.cljs.core.seq($iterys__5499__auto__$jscomp$37_temp__5825__auto__$$(loom.graph.out_edges($g__$1$$, $fs__5500__auto__$jscomp$37_n1$$)))) {
            return $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($fs__5500__auto__$jscomp$37_n1$$, $loom$graph$iter__47104$$($APP.cljs.core.rest($s__47105__$1$$)));
          }
          $s__47105__$1$$ = $APP.cljs.core.rest($s__47105__$1$$);
        } else {
          return null;
        }
      }
    }, null, null);
  }(loom.graph.nodes($g__$1$$));
};
loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.contains_QMARK_(this.nodeset, $node$$);
};
loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = function($g$$, $n1$$, $n2$$) {
  return $APP.cljs.core.contains_QMARK_($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $n1$$], null)), $n2$$);
};
loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.count($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $node$$], null)));
};
loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = function($g$$, $node$$) {
  return function $loom$graph$iter__47110$$($s__47111$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (;;) {
        var $s__47111__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47111$$);
        if ($s__47111__$2_temp__5825__auto__$$) {
          if ($APP.cljs.core.chunked_seq_QMARK_($s__47111__$2_temp__5825__auto__$$)) {
            var $JSCompiler_inline_result$jscomp$945_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47111__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$945_c__5501__auto__$$), $b__47113_n2$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
            a: {
              for (var $i__47112$$ = 0;;) {
                if ($i__47112$$ < $size__5502__auto__$$) {
                  var $n2$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$945_c__5501__auto__$$, $i__47112$$);
                  $APP.cljs.core.chunk_append($b__47113_n2$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$node$$, $n2$$], null));
                  $i__47112$$ += 1;
                } else {
                  $JSCompiler_inline_result$jscomp$945_c__5501__auto__$$ = !0;
                  break a;
                }
              }
              $JSCompiler_inline_result$jscomp$945_c__5501__auto__$$ = void 0;
            }
            return $JSCompiler_inline_result$jscomp$945_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47113_n2$$), $loom$graph$iter__47110$$($APP.cljs.core.chunk_rest($s__47111__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47113_n2$$), null);
          }
          $b__47113_n2$$ = $APP.cljs.core.first($s__47111__$2_temp__5825__auto__$$);
          return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$node$$, $b__47113_n2$$], null), $loom$graph$iter__47110$$($APP.cljs.core.rest($s__47111__$2_temp__5825__auto__$$)));
        }
        return null;
      }
    }, null, null);
  }(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(this, $node$$));
};
loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $node$$], null));
};
loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = function($g$$, $nodes$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($g__$2$$, $node$$) {
    return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($g__$2$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset], null), $APP.cljs.core.conj, $node$$);
  }, this, $nodes$$);
};
loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = function($g$$, $edges$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($g__$2$$, $n2$$) {
    var $n1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$$, 0, null);
    $n2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$$, 1, null);
    return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$5($g__$2$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset], null), $APP.cljs.core.conj, $n1$$, $n2$$), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $n1$$], null), $APP.cljs.core.fnil.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.conj, 
    $APP.cljs.core.PersistentHashSet.EMPTY), $n2$$), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1825$in, $n2$$], null), $APP.cljs.core.fnil.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.conj, $APP.cljs.core.PersistentHashSet.EMPTY), $n1$$);
  }, this, $edges$$);
};
loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = function($g$jscomp$204_ins$$, $nodes$$) {
  var $g__$1$$ = this;
  $g$jscomp$204_ins$$ = $APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(function($p1__47101_SHARP_$$) {
    return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2($g__$1$$, $p1__47101_SHARP_$$);
  }, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$nodes$$], 0));
  var $outs$$ = $APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(function($p1__47102_SHARP_$$) {
    return loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g__$1$$, $p1__47102_SHARP_$$);
  }, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$nodes$$], 0));
  return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$3($g__$1$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset], null), function($p1__47103_SHARP_$$) {
    return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.disj, $p1__47103_SHARP_$$, $nodes$$);
  }), cljs$cst$2730$adj, loom.graph.remove_adj_nodes($g__$1$$.adj, $nodes$$, $g$jscomp$204_ins$$, $APP.cljs.core.disj)), $APP.cljs$cst$1825$in, loom.graph.remove_adj_nodes($g__$1$$.in, $nodes$$, $outs$$, $APP.cljs.core.disj));
};
loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = function($g$$, $edges$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($g__$2$$, $n2$$) {
    var $n1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$$, 0, null);
    $n2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$$, 1, null);
    return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($g__$2$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $n1$$], null), $APP.cljs.core.disj, $n2$$), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1825$in, $n2$$], null), $APP.cljs.core.disj, $n1$$);
  }, this, $edges$$);
};
loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = function($g$$) {
  return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this, cljs$cst$2729$nodeset, $APP.cljs.core.PersistentHashSet.EMPTY, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2730$adj, $APP.cljs.core.PersistentArrayMap.EMPTY, $APP.cljs$cst$1825$in, $APP.cljs.core.PersistentArrayMap.EMPTY], 0));
};
loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1825$in, $node$$], null));
};
loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.count($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1825$in, $node$$], null)));
};
loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = function($g$$, $node$$) {
  return function $loom$graph$iter__47122$$($s__47123$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (;;) {
        var $s__47123__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47123$$);
        if ($s__47123__$2_temp__5825__auto__$$) {
          if ($APP.cljs.core.chunked_seq_QMARK_($s__47123__$2_temp__5825__auto__$$)) {
            var $JSCompiler_inline_result$jscomp$946_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47123__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$946_c__5501__auto__$$), $b__47125_n2$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
            a: {
              for (var $i__47124$$ = 0;;) {
                if ($i__47124$$ < $size__5502__auto__$$) {
                  var $n2$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$946_c__5501__auto__$$, $i__47124$$);
                  $APP.cljs.core.chunk_append($b__47125_n2$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n2$$, $node$$], null));
                  $i__47124$$ += 1;
                } else {
                  $JSCompiler_inline_result$jscomp$946_c__5501__auto__$$ = !0;
                  break a;
                }
              }
              $JSCompiler_inline_result$jscomp$946_c__5501__auto__$$ = void 0;
            }
            return $JSCompiler_inline_result$jscomp$946_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47125_n2$$), $loom$graph$iter__47122$$($APP.cljs.core.chunk_rest($s__47123__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47125_n2$$), null);
          }
          $b__47125_n2$$ = $APP.cljs.core.first($s__47123__$2_temp__5825__auto__$$);
          return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$b__47125_n2$$, $node$$], null), $loom$graph$iter__47122$$($APP.cljs.core.rest($s__47123__$2_temp__5825__auto__$$)));
        }
        return null;
      }
    }, null, null);
  }(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(this, $node$$));
};
loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = function($g$$) {
  return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this, cljs$cst$2730$adj, this.in, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$1825$in, this.adj], 0));
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$nodes$arity$1 = function($g$$) {
  return this.nodeset;
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$edges$arity$1 = function($g$$) {
  var $g__$1$$ = this;
  return function $loom$graph$iter__47128$$($s__47129$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (var $s__47129__$1$$ = $s__47129$$;;) {
        var $iterys__5499__auto__$jscomp$38_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47129__$1$$);
        if ($iterys__5499__auto__$jscomp$38_temp__5825__auto__$$) {
          var $xs__6385__auto__$$ = $iterys__5499__auto__$jscomp$38_temp__5825__auto__$$, $fs__5500__auto__$jscomp$38_n1$$ = $APP.cljs.core.first($xs__6385__auto__$$);
          $iterys__5499__auto__$jscomp$38_temp__5825__auto__$$ = function($s__47129__$1$$, $n1$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$) {
            return function $loom$graph$iter__47128_$_iter__47130$$($s__47131$$) {
              return new $APP.cljs.core.LazySeq(null, function($s__47129__$1$$, $n1$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$) {
                return function() {
                  for (;;) {
                    var $s__47131__$2_temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__47131$$);
                    if ($s__47131__$2_temp__5825__auto____$1$$) {
                      if ($APP.cljs.core.chunked_seq_QMARK_($s__47131__$2_temp__5825__auto____$1$$)) {
                        var $JSCompiler_inline_result$jscomp$947_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47131__$2_temp__5825__auto____$1$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$947_c__5501__auto__$$), $b__47133_e$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                        a: {
                          for (var $i__47132$$ = 0;;) {
                            if ($i__47132$$ < $size__5502__auto__$$) {
                              var $e$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$947_c__5501__auto__$$, $i__47132$$);
                              $APP.cljs.core.chunk_append($b__47133_e$$, $e$$);
                              $i__47132$$ += 1;
                            } else {
                              $JSCompiler_inline_result$jscomp$947_c__5501__auto__$$ = !0;
                              break a;
                            }
                          }
                          $JSCompiler_inline_result$jscomp$947_c__5501__auto__$$ = void 0;
                        }
                        return $JSCompiler_inline_result$jscomp$947_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47133_e$$), $loom$graph$iter__47128_$_iter__47130$$($APP.cljs.core.chunk_rest($s__47131__$2_temp__5825__auto____$1$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47133_e$$), null);
                      }
                      $b__47133_e$$ = $APP.cljs.core.first($s__47131__$2_temp__5825__auto____$1$$);
                      return $APP.cljs.core.cons($b__47133_e$$, $loom$graph$iter__47128_$_iter__47130$$($APP.cljs.core.rest($s__47131__$2_temp__5825__auto____$1$$)));
                    }
                    return null;
                  }
                };
              }($s__47129__$1$$, $n1$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$), null, null);
            };
          }($s__47129__$1$$, $fs__5500__auto__$jscomp$38_n1$$, $xs__6385__auto__$$, $iterys__5499__auto__$jscomp$38_temp__5825__auto__$$, $g__$1$$);
          if ($fs__5500__auto__$jscomp$38_n1$$ = $APP.cljs.core.seq($iterys__5499__auto__$jscomp$38_temp__5825__auto__$$(loom.graph.out_edges($g__$1$$, $fs__5500__auto__$jscomp$38_n1$$)))) {
            return $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($fs__5500__auto__$jscomp$38_n1$$, $loom$graph$iter__47128$$($APP.cljs.core.rest($s__47129__$1$$)));
          }
          $s__47129__$1$$ = $APP.cljs.core.rest($s__47129__$1$$);
        } else {
          return null;
        }
      }
    }, null, null);
  }(loom.graph.nodes($g__$1$$));
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.contains_QMARK_(this.nodeset, $node$$);
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = function($g$$, $n1$$, $n2$$) {
  return $APP.cljs.core.contains_QMARK_($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $n1$$], null)), $n2$$);
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_degree$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.count($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $node$$], null)));
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_edges$arity$2 = function($g$$, $node$$) {
  return function $loom$graph$iter__47134$$($s__47135$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (;;) {
        var $s__47135__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47135$$);
        if ($s__47135__$2_temp__5825__auto__$$) {
          if ($APP.cljs.core.chunked_seq_QMARK_($s__47135__$2_temp__5825__auto__$$)) {
            var $JSCompiler_inline_result$jscomp$948_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47135__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$948_c__5501__auto__$$), $b__47137_n2$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
            a: {
              for (var $i__47136$$ = 0;;) {
                if ($i__47136$$ < $size__5502__auto__$$) {
                  var $n2$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$948_c__5501__auto__$$, $i__47136$$);
                  $APP.cljs.core.chunk_append($b__47137_n2$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$node$$, $n2$$], null));
                  $i__47136$$ += 1;
                } else {
                  $JSCompiler_inline_result$jscomp$948_c__5501__auto__$$ = !0;
                  break a;
                }
              }
              $JSCompiler_inline_result$jscomp$948_c__5501__auto__$$ = void 0;
            }
            return $JSCompiler_inline_result$jscomp$948_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47137_n2$$), $loom$graph$iter__47134$$($APP.cljs.core.chunk_rest($s__47135__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47137_n2$$), null);
          }
          $b__47137_n2$$ = $APP.cljs.core.first($s__47135__$2_temp__5825__auto__$$);
          return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$node$$, $b__47137_n2$$], null), $loom$graph$iter__47134$$($APP.cljs.core.rest($s__47135__$2_temp__5825__auto__$$)));
        }
        return null;
      }
    }, null, null);
  }(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(this, $node$$));
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.keys($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $node$$], null)));
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = function($g$$, $nodes$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($g__$2$$, $node$$) {
    return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($g__$2$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset], null), $APP.cljs.core.conj, $node$$);
  }, this, $nodes$$);
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = function($g$$, $edges$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($g__$2$$, $first__47141_p__47138$$) {
    var $first__47141__$1_seq__47140$$ = $APP.cljs.core.seq($first__47141_p__47138$$);
    $first__47141_p__47138$$ = $APP.cljs.core.first($first__47141__$1_seq__47140$$);
    var $seq__47140__$1_seq__47140__$2_w$$ = $APP.cljs.core.next($first__47141__$1_seq__47140$$);
    $first__47141__$1_seq__47140$$ = $APP.cljs.core.first($seq__47140__$1_seq__47140__$2_w$$);
    $seq__47140__$1_seq__47140__$2_w$$ = $APP.cljs.core.next($seq__47140__$1_seq__47140__$2_w$$);
    $seq__47140__$1_seq__47140__$2_w$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($seq__47140__$1_seq__47140__$2_w$$, 0, null);
    return $APP.cljs.core.assoc_in($APP.cljs.core.assoc_in($APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$5($g__$2$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset], null), $APP.cljs.core.conj, $first__47141_p__47138$$, $first__47141__$1_seq__47140$$), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $first__47141_p__47138$$, $first__47141__$1_seq__47140$$], null), 
    $APP.cljs.core.truth_($seq__47140__$1_seq__47140__$2_w$$) ? $seq__47140__$1_seq__47140__$2_w$$ : loom.graph._STAR_default_weight_STAR_), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $first__47141__$1_seq__47140$$, $first__47141_p__47138$$], null), $APP.cljs.core.truth_($seq__47140__$1_seq__47140__$2_w$$) ? $seq__47140__$1_seq__47140__$2_w$$ : loom.graph._STAR_default_weight_STAR_);
  }, this, $edges$$);
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = function($g$jscomp$220_nbrs$$, $nodes$$) {
  var $g__$1$$ = this;
  $g$jscomp$220_nbrs$$ = $APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(function($p1__47126_SHARP_$$) {
    return loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g__$1$$, $p1__47126_SHARP_$$);
  }, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$nodes$$], 0));
  return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$3($g__$1$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset], null), function($p1__47127_SHARP_$$) {
    return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.disj, $p1__47127_SHARP_$$, $nodes$$);
  }), cljs$cst$2730$adj, loom.graph.remove_adj_nodes($g__$1$$.adj, $nodes$$, $g$jscomp$220_nbrs$$, $APP.cljs.core.dissoc));
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = function($g$$, $edges$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($g__$2$$, $n2$$) {
    var $n1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$$, 0, null);
    $n2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$$, 1, null);
    return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($g__$2$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $n1$$], null), $APP.cljs.core.dissoc, $n2$$), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $n2$$], null), $APP.cljs.core.dissoc, $n1$$);
  }, this, $edges$$);
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = function($g$$) {
  return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this, cljs$cst$2729$nodeset, $APP.cljs.core.PersistentHashSet.EMPTY, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2730$adj, $APP.cljs.core.PersistentArrayMap.EMPTY], 0));
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = function($g$$, $e$$) {
  return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(this, loom.graph.src($e$$), loom.graph.dest($e$$));
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = function($g$$, $n1$$, $n2$$) {
  return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $n1$$, $n2$$], null));
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$nodes$arity$1 = function($g$$) {
  return this.nodeset;
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$edges$arity$1 = function($g$$) {
  var $g__$1$$ = this;
  return function $loom$graph$iter__47152$$($s__47153$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (var $s__47153__$1$$ = $s__47153$$;;) {
        var $iterys__5499__auto__$jscomp$39_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47153__$1$$);
        if ($iterys__5499__auto__$jscomp$39_temp__5825__auto__$$) {
          var $xs__6385__auto__$$ = $iterys__5499__auto__$jscomp$39_temp__5825__auto__$$, $fs__5500__auto__$jscomp$39_n1$$ = $APP.cljs.core.first($xs__6385__auto__$$);
          $iterys__5499__auto__$jscomp$39_temp__5825__auto__$$ = function($s__47153__$1$$, $n1$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$) {
            return function $loom$graph$iter__47152_$_iter__47154$$($s__47155$$) {
              return new $APP.cljs.core.LazySeq(null, function($s__47153__$1$$, $n1$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$) {
                return function() {
                  for (;;) {
                    var $s__47155__$2_temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__47155$$);
                    if ($s__47155__$2_temp__5825__auto____$1$$) {
                      if ($APP.cljs.core.chunked_seq_QMARK_($s__47155__$2_temp__5825__auto____$1$$)) {
                        var $JSCompiler_inline_result$jscomp$949_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47155__$2_temp__5825__auto____$1$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$949_c__5501__auto__$$), $b__47157_e$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                        a: {
                          for (var $i__47156$$ = 0;;) {
                            if ($i__47156$$ < $size__5502__auto__$$) {
                              var $e$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$949_c__5501__auto__$$, $i__47156$$);
                              $APP.cljs.core.chunk_append($b__47157_e$$, $e$$);
                              $i__47156$$ += 1;
                            } else {
                              $JSCompiler_inline_result$jscomp$949_c__5501__auto__$$ = !0;
                              break a;
                            }
                          }
                          $JSCompiler_inline_result$jscomp$949_c__5501__auto__$$ = void 0;
                        }
                        return $JSCompiler_inline_result$jscomp$949_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47157_e$$), $loom$graph$iter__47152_$_iter__47154$$($APP.cljs.core.chunk_rest($s__47155__$2_temp__5825__auto____$1$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47157_e$$), null);
                      }
                      $b__47157_e$$ = $APP.cljs.core.first($s__47155__$2_temp__5825__auto____$1$$);
                      return $APP.cljs.core.cons($b__47157_e$$, $loom$graph$iter__47152_$_iter__47154$$($APP.cljs.core.rest($s__47155__$2_temp__5825__auto____$1$$)));
                    }
                    return null;
                  }
                };
              }($s__47153__$1$$, $n1$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$), null, null);
            };
          }($s__47153__$1$$, $fs__5500__auto__$jscomp$39_n1$$, $xs__6385__auto__$$, $iterys__5499__auto__$jscomp$39_temp__5825__auto__$$, $g__$1$$);
          if ($fs__5500__auto__$jscomp$39_n1$$ = $APP.cljs.core.seq($iterys__5499__auto__$jscomp$39_temp__5825__auto__$$(loom.graph.out_edges($g__$1$$, $fs__5500__auto__$jscomp$39_n1$$)))) {
            return $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($fs__5500__auto__$jscomp$39_n1$$, $loom$graph$iter__47152$$($APP.cljs.core.rest($s__47153__$1$$)));
          }
          $s__47153__$1$$ = $APP.cljs.core.rest($s__47153__$1$$);
        } else {
          return null;
        }
      }
    }, null, null);
  }(loom.graph.nodes($g__$1$$));
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.contains_QMARK_(this.nodeset, $node$$);
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = function($g$$, $n1$$, $n2$$) {
  return $APP.cljs.core.contains_QMARK_($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $n1$$], null)), $n2$$);
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.count($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $node$$], null)));
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = function($g$$, $node$$) {
  return function $loom$graph$iter__47158$$($s__47159$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (;;) {
        var $s__47159__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47159$$);
        if ($s__47159__$2_temp__5825__auto__$$) {
          if ($APP.cljs.core.chunked_seq_QMARK_($s__47159__$2_temp__5825__auto__$$)) {
            var $JSCompiler_inline_result$jscomp$950_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47159__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$950_c__5501__auto__$$), $b__47161_n2$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
            a: {
              for (var $i__47160$$ = 0;;) {
                if ($i__47160$$ < $size__5502__auto__$$) {
                  var $n2$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$950_c__5501__auto__$$, $i__47160$$);
                  $APP.cljs.core.chunk_append($b__47161_n2$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$node$$, $n2$$], null));
                  $i__47160$$ += 1;
                } else {
                  $JSCompiler_inline_result$jscomp$950_c__5501__auto__$$ = !0;
                  break a;
                }
              }
              $JSCompiler_inline_result$jscomp$950_c__5501__auto__$$ = void 0;
            }
            return $JSCompiler_inline_result$jscomp$950_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47161_n2$$), $loom$graph$iter__47158$$($APP.cljs.core.chunk_rest($s__47159__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47161_n2$$), null);
          }
          $b__47161_n2$$ = $APP.cljs.core.first($s__47159__$2_temp__5825__auto__$$);
          return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$node$$, $b__47161_n2$$], null), $loom$graph$iter__47158$$($APP.cljs.core.rest($s__47159__$2_temp__5825__auto__$$)));
        }
        return null;
      }
    }, null, null);
  }(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(this, $node$$));
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.keys($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $node$$], null)));
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = function($g$$, $nodes$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($g__$2$$, $node$$) {
    return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($g__$2$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset], null), $APP.cljs.core.conj, $node$$);
  }, this, $nodes$$);
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = function($g$$, $edges$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($JSCompiler_temp_const$jscomp$952_g__$2$$, $first__47165_p__47162$$) {
    var $first__47165__$1_seq__47164$$ = $APP.cljs.core.seq($first__47165_p__47162$$);
    $first__47165_p__47162$$ = $APP.cljs.core.first($first__47165__$1_seq__47164$$);
    var $JSCompiler_temp_const$$ = $APP.cljs.core.next($first__47165__$1_seq__47164$$);
    $first__47165__$1_seq__47164$$ = $APP.cljs.core.first($JSCompiler_temp_const$$);
    $JSCompiler_temp_const$$ = $APP.cljs.core.next($JSCompiler_temp_const$$);
    var $JSCompiler_inline_result$jscomp$957_w$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_temp_const$$, 0, null);
    $JSCompiler_temp_const$$ = $APP.cljs.core.update_in;
    var $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.cljs$core$IFn$_invoke$arity$4, $JSCompiler_temp_const$jscomp$1$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$2$$ = $JSCompiler_temp_const$jscomp$1$$.assoc_in;
    $JSCompiler_temp_const$jscomp$952_g__$2$$ = $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$5($JSCompiler_temp_const$jscomp$952_g__$2$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset], null), $APP.cljs.core.conj, $first__47165_p__47162$$, $first__47165__$1_seq__47164$$);
    var $JSCompiler_temp_const$jscomp$3$$ = new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $first__47165_p__47162$$, $first__47165__$1_seq__47164$$], null);
    $JSCompiler_inline_result$jscomp$957_w$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$957_w$$) ? $JSCompiler_inline_result$jscomp$957_w$$ : loom.graph._STAR_default_weight_STAR_;
    return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_temp_const$jscomp$2$$.call($JSCompiler_temp_const$jscomp$1$$, $JSCompiler_temp_const$jscomp$952_g__$2$$, $JSCompiler_temp_const$jscomp$3$$, $JSCompiler_inline_result$jscomp$957_w$$), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1825$in, $first__47165__$1_seq__47164$$], null), $APP.cljs.core.fnil.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.conj, $APP.cljs.core.PersistentHashSet.EMPTY), 
    $first__47165_p__47162$$);
  }, this, $edges$$);
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = function($g$jscomp$234_ins$$, $nodes$$) {
  var $g__$1$$ = this;
  $g$jscomp$234_ins$$ = $APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(function($p1__47149_SHARP_$$) {
    return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2($g__$1$$, $p1__47149_SHARP_$$);
  }, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$nodes$$], 0));
  var $outs$$ = $APP.cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(function($p1__47150_SHARP_$$) {
    return loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g__$1$$, $p1__47150_SHARP_$$);
  }, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$nodes$$], 0));
  return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$3($g__$1$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2729$nodeset], null), function($p1__47151_SHARP_$$) {
    return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.disj, $p1__47151_SHARP_$$, $nodes$$);
  }), cljs$cst$2730$adj, loom.graph.remove_adj_nodes($g__$1$$.adj, $nodes$$, $g$jscomp$234_ins$$, $APP.cljs.core.dissoc)), $APP.cljs$cst$1825$in, loom.graph.remove_adj_nodes($g__$1$$.in, $nodes$$, $outs$$, $APP.cljs.core.disj));
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = function($g$$, $edges$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($g__$2$$, $n2$$) {
    var $n1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$$, 0, null);
    $n2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$$, 1, null);
    return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($g__$2$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $n1$$], null), $APP.cljs.core.dissoc, $n2$$), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1825$in, $n2$$], null), $APP.cljs.core.disj, $n1$$);
  }, this, $edges$$);
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = function($g$$) {
  return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this, cljs$cst$2729$nodeset, $APP.cljs.core.PersistentHashSet.EMPTY, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2730$adj, $APP.cljs.core.PersistentArrayMap.EMPTY, $APP.cljs$cst$1825$in, $APP.cljs.core.PersistentArrayMap.EMPTY], 0));
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1825$in, $node$$], null));
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.count($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1825$in, $node$$], null)));
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = function($g$$, $node$$) {
  return function $loom$graph$iter__47173$$($s__47174$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (;;) {
        var $s__47174__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47174$$);
        if ($s__47174__$2_temp__5825__auto__$$) {
          if ($APP.cljs.core.chunked_seq_QMARK_($s__47174__$2_temp__5825__auto__$$)) {
            var $JSCompiler_inline_result$jscomp$958_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47174__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$958_c__5501__auto__$$), $b__47176_n2$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
            a: {
              for (var $i__47175$$ = 0;;) {
                if ($i__47175$$ < $size__5502__auto__$$) {
                  var $n2$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$958_c__5501__auto__$$, $i__47175$$);
                  $APP.cljs.core.chunk_append($b__47176_n2$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n2$$, $node$$], null));
                  $i__47175$$ += 1;
                } else {
                  $JSCompiler_inline_result$jscomp$958_c__5501__auto__$$ = !0;
                  break a;
                }
              }
              $JSCompiler_inline_result$jscomp$958_c__5501__auto__$$ = void 0;
            }
            return $JSCompiler_inline_result$jscomp$958_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47176_n2$$), $loom$graph$iter__47173$$($APP.cljs.core.chunk_rest($s__47174__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47176_n2$$), null);
          }
          $b__47176_n2$$ = $APP.cljs.core.first($s__47174__$2_temp__5825__auto__$$);
          return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$b__47176_n2$$, $node$$], null), $loom$graph$iter__47173$$($APP.cljs.core.rest($s__47174__$2_temp__5825__auto__$$)));
        }
        return null;
      }
    }, null, null);
  }(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(this, $node$$));
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = function($g$$) {
  var $g__$1$$ = this;
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($tg$$, $n2$$) {
    var $n1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$$, 0, null);
    $n2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$$, 1, null);
    return loom.graph.add_edges_STAR_($tg$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n2$$, $n1$$, loom.graph.weight.cljs$core$IFn$_invoke$arity$3($g__$1$$, $n1$$, $n2$$)], null)], null));
  }, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic($g__$1$$, cljs$cst$2730$adj, $APP.cljs.core.PersistentArrayMap.EMPTY, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$1825$in, $APP.cljs.core.PersistentArrayMap.EMPTY], 0)), loom.graph.edges($g__$1$$));
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = function($g$$, $e$$) {
  return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(this, loom.graph.src($e$$), loom.graph.dest($e$$));
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = function($g$$, $n1$$, $n2$$) {
  return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2730$adj, $n1$$, $n2$$], null));
};
loom.graph.call_or_return = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$237_argseq__5756__auto__$$ = [], $len__5749__auto___47587$$ = arguments.length, $i__5750__auto___47588$$ = 0;;) {
    if ($i__5750__auto___47588$$ < $len__5749__auto___47587$$) {
      $args__5755__auto__$jscomp$237_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47588$$]), $i__5750__auto___47588$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$237_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$237_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$237_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$237_argseq__5756__auto__$$);
};
loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic = function($f$$, $args$$) {
  return $APP.cljs.core.fn_QMARK_($f$$) ? $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($f$$, $args$$) : $f$$;
};
loom.graph.call_or_return.cljs$lang$maxFixedArity = 1;
loom.graph.call_or_return.cljs$lang$applyTo = function($seq47181_seq47181__$1$$) {
  var $G__47182$$ = $APP.cljs.core.first($seq47181_seq47181__$1$$);
  $seq47181_seq47181__$1$$ = $APP.cljs.core.next($seq47181_seq47181__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__47182$$, $seq47181_seq47181__$1$$);
};
loom.graph.FlyGraph = function($fnodes$$, $fedges$$, $fsuccessors$$, $start$$, $__meta$$, $__extmap$$, $__hash$$) {
  this.fnodes = $fnodes$$;
  this.fedges = $fedges$$;
  this.fsuccessors = $fsuccessors$$;
  this.start = $start$$;
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k47184$$, $else__5326__auto__$$) {
  switch($k47184$$ instanceof $APP.cljs.core.Keyword ? $k47184$$.fqn : null) {
    case "fnodes":
      return this.fnodes;
    case "fedges":
      return this.fedges;
    case "fsuccessors":
      return this.fsuccessors;
    case "start":
      return this.start;
    default:
      return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k47184$$, $else__5326__auto__$$);
  }
};
loom.graph.FlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__47189_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47189_v__5348__auto__$$, 0, null);
    $p__47189_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47189_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__47189_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__47189_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
loom.graph.FlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#loom.graph.FlyGraph{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2733$fnodes, this.fnodes], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2734$fedges, this.fedges], null), new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2735$fsuccessors, this.fsuccessors], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1574$start, this.start], null)], null), this.__extmap));
};
loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__47183$$) {
  return new $APP.cljs.core.RecordIter(0, this, 4, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2733$fnodes, cljs$cst$2734$fedges, cljs$cst$2735$fsuccessors, $APP.cljs$cst$1574$start], null), $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
loom.graph.FlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
loom.graph.FlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new loom.graph.FlyGraph(this.fnodes, this.fedges, this.fsuccessors, this.start, this.__meta, this.__extmap, this.__hash);
};
loom.graph.FlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 4 + $APP.cljs.core.count(this.__extmap);
};
loom.graph.FlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$86_h__5134__auto____$1$jscomp$86_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$86_h__5134__auto____$1$jscomp$86_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$86_h__5134__auto____$1$jscomp$86_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$86_h__5134__auto____$1$jscomp$86_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$86_h__5134__auto____$1$jscomp$86_this__5319__auto__$$ = -1546683162 ^ $APP.cljs.core.hash_unordered_coll(this);
};
loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this47185$$, $other47186$$) {
  return $other47186$$ != null && this.constructor === $other47186$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.fnodes, $other47186$$.fnodes) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.fedges, $other47186$$.fedges) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.fsuccessors, $other47186$$.fsuccessors) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.start, $other47186$$.start) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, 
  $other47186$$.__extmap);
};
loom.graph.FlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$2734$fedges, null, cljs$cst$2735$fsuccessors, null, $APP.cljs$cst$1574$start, null, cljs$cst$2733$fnodes, null], null), null), $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), $k__5334__auto__$$) : 
  new loom.graph.FlyGraph(this.fnodes, this.fedges, this.fsuccessors, this.start, this.__meta, $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k47184$$) {
  switch($k47184$$ instanceof $APP.cljs.core.Keyword ? $k47184$$.fqn : null) {
    case "fnodes":
    case "fedges":
    case "fsuccessors":
    case "start":
      return !0;
    default:
      return $APP.cljs.core.contains_QMARK_(this.__extmap, $k47184$$);
  }
};
loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($pred__47194_this__5331__auto__$$, $k__5332__auto__$$, $G__47183$$) {
  $pred__47194_this__5331__auto__$$ = $APP.cljs.core.keyword_identical_QMARK_;
  return $APP.cljs.core.truth_($pred__47194_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47194_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2733$fnodes, $k__5332__auto__$$) : $pred__47194_this__5331__auto__$$.call(null, cljs$cst$2733$fnodes, $k__5332__auto__$$)) ? new loom.graph.FlyGraph($G__47183$$, this.fedges, this.fsuccessors, this.start, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47194_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47194_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2734$fedges, 
  $k__5332__auto__$$) : $pred__47194_this__5331__auto__$$.call(null, cljs$cst$2734$fedges, $k__5332__auto__$$)) ? new loom.graph.FlyGraph(this.fnodes, $G__47183$$, this.fsuccessors, this.start, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47194_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47194_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2735$fsuccessors, $k__5332__auto__$$) : $pred__47194_this__5331__auto__$$.call(null, cljs$cst$2735$fsuccessors, 
  $k__5332__auto__$$)) ? new loom.graph.FlyGraph(this.fnodes, this.fedges, $G__47183$$, this.start, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47194_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47194_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$1574$start, $k__5332__auto__$$) : $pred__47194_this__5331__auto__$$.call(null, $APP.cljs$cst$1574$start, $k__5332__auto__$$)) ? new loom.graph.FlyGraph(this.fnodes, this.fedges, this.fsuccessors, $G__47183$$, 
  this.__meta, this.__extmap, null) : new loom.graph.FlyGraph(this.fnodes, this.fedges, this.fsuccessors, this.start, this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__47183$$), null);
};
loom.graph.FlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.MapEntry(cljs$cst$2733$fnodes, this.fnodes, null), new $APP.cljs.core.MapEntry(cljs$cst$2734$fedges, this.fedges, null), new $APP.cljs.core.MapEntry(cljs$cst$2735$fsuccessors, this.fsuccessors, null), new $APP.cljs.core.MapEntry($APP.cljs$cst$1574$start, this.start, null)], null), this.__extmap));
};
loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__47183$$) {
  return new loom.graph.FlyGraph(this.fnodes, this.fedges, this.fsuccessors, this.start, $G__47183$$, this.__extmap, this.__hash);
};
loom.graph.FlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
loom.graph.FlyGraph.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2736$fnodes, cljs$cst$2737$fedges, cljs$cst$2738$fsuccessors, $APP.cljs$cst$58$start], null);
};
loom.graph.FlyGraph.cljs$lang$type = !0;
loom.graph.FlyGraph.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "loom.graph/FlyGraph", null, 1, null);
};
loom.graph.FlyGraph.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "loom.graph/FlyGraph");
};
loom.graph.__GT_FlyGraph = function($fnodes$$, $fedges$$, $fsuccessors$$, $start$$) {
  return new loom.graph.FlyGraph($fnodes$$, $fedges$$, $fsuccessors$$, $start$$, null, null, null);
};
loom.graph.map__GT_FlyGraph = function($G__47187$$) {
  var $G__47197$jscomp$inline_5160_extmap__5365__auto__$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($G__47187$$, cljs$cst$2733$fnodes, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2734$fedges, cljs$cst$2735$fsuccessors, $APP.cljs$cst$1574$start], 0));
  $G__47197$jscomp$inline_5160_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__47187$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__47197$jscomp$inline_5160_extmap__5365__auto__$$) : $G__47197$jscomp$inline_5160_extmap__5365__auto__$$;
  return new loom.graph.FlyGraph(cljs$cst$2733$fnodes.cljs$core$IFn$_invoke$arity$1($G__47187$$), cljs$cst$2734$fedges.cljs$core$IFn$_invoke$arity$1($G__47187$$), cljs$cst$2735$fsuccessors.cljs$core$IFn$_invoke$arity$1($G__47187$$), $APP.cljs$cst$1574$start.cljs$core$IFn$_invoke$arity$1($G__47187$$), null, $APP.cljs.core.not_empty($G__47197$jscomp$inline_5160_extmap__5365__auto__$$), null);
};
loom.graph.FlyDigraph = function($fnodes$$, $fedges$$, $fsuccessors$$, $fpredecessors$$, $start$$, $__meta$$, $__extmap$$, $__hash$$) {
  this.fnodes = $fnodes$$;
  this.fedges = $fedges$$;
  this.fsuccessors = $fsuccessors$$;
  this.fpredecessors = $fpredecessors$$;
  this.start = $start$$;
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k47199$$, $else__5326__auto__$$) {
  switch($k47199$$ instanceof $APP.cljs.core.Keyword ? $k47199$$.fqn : null) {
    case "fnodes":
      return this.fnodes;
    case "fedges":
      return this.fedges;
    case "fsuccessors":
      return this.fsuccessors;
    case "fpredecessors":
      return this.fpredecessors;
    case "start":
      return this.start;
    default:
      return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k47199$$, $else__5326__auto__$$);
  }
};
loom.graph.FlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__47204_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47204_v__5348__auto__$$, 0, null);
    $p__47204_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47204_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__47204_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__47204_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
loom.graph.FlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#loom.graph.FlyDigraph{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2733$fnodes, this.fnodes], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2734$fedges, this.fedges], null), new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2735$fsuccessors, this.fsuccessors], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2739$fpredecessors, this.fpredecessors], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1574$start, this.start], null)], null), this.__extmap));
};
loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__47198$$) {
  return new $APP.cljs.core.RecordIter(0, this, 5, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2733$fnodes, cljs$cst$2734$fedges, cljs$cst$2735$fsuccessors, cljs$cst$2739$fpredecessors, $APP.cljs$cst$1574$start], null), $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
loom.graph.FlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
loom.graph.FlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new loom.graph.FlyDigraph(this.fnodes, this.fedges, this.fsuccessors, this.fpredecessors, this.start, this.__meta, this.__extmap, this.__hash);
};
loom.graph.FlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 5 + $APP.cljs.core.count(this.__extmap);
};
loom.graph.FlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$87_h__5134__auto____$1$jscomp$87_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$87_h__5134__auto____$1$jscomp$87_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$87_h__5134__auto____$1$jscomp$87_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$87_h__5134__auto____$1$jscomp$87_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$87_h__5134__auto____$1$jscomp$87_this__5319__auto__$$ = 1981361804 ^ $APP.cljs.core.hash_unordered_coll(this);
};
loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this47200$$, $other47201$$) {
  return $other47201$$ != null && this.constructor === $other47201$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.fnodes, $other47201$$.fnodes) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.fedges, $other47201$$.fedges) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.fsuccessors, $other47201$$.fsuccessors) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.fpredecessors, $other47201$$.fpredecessors) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.start, 
  $other47201$$.start) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other47201$$.__extmap);
};
loom.graph.FlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 5, [cljs$cst$2734$fedges, null, cljs$cst$2735$fsuccessors, null, $APP.cljs$cst$1574$start, null, cljs$cst$2733$fnodes, null, cljs$cst$2739$fpredecessors, null], null), null), $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), 
  $k__5334__auto__$$) : new loom.graph.FlyDigraph(this.fnodes, this.fedges, this.fsuccessors, this.fpredecessors, this.start, this.__meta, $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k47199$$) {
  switch($k47199$$ instanceof $APP.cljs.core.Keyword ? $k47199$$.fqn : null) {
    case "fnodes":
    case "fedges":
    case "fsuccessors":
    case "fpredecessors":
    case "start":
      return !0;
    default:
      return $APP.cljs.core.contains_QMARK_(this.__extmap, $k47199$$);
  }
};
loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($pred__47209_this__5331__auto__$$, $k__5332__auto__$$, $G__47198$$) {
  $pred__47209_this__5331__auto__$$ = $APP.cljs.core.keyword_identical_QMARK_;
  return $APP.cljs.core.truth_($pred__47209_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47209_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2733$fnodes, $k__5332__auto__$$) : $pred__47209_this__5331__auto__$$.call(null, cljs$cst$2733$fnodes, $k__5332__auto__$$)) ? new loom.graph.FlyDigraph($G__47198$$, this.fedges, this.fsuccessors, this.fpredecessors, this.start, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47209_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? 
  $pred__47209_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2734$fedges, $k__5332__auto__$$) : $pred__47209_this__5331__auto__$$.call(null, cljs$cst$2734$fedges, $k__5332__auto__$$)) ? new loom.graph.FlyDigraph(this.fnodes, $G__47198$$, this.fsuccessors, this.fpredecessors, this.start, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47209_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47209_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2735$fsuccessors, 
  $k__5332__auto__$$) : $pred__47209_this__5331__auto__$$.call(null, cljs$cst$2735$fsuccessors, $k__5332__auto__$$)) ? new loom.graph.FlyDigraph(this.fnodes, this.fedges, $G__47198$$, this.fpredecessors, this.start, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47209_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47209_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2739$fpredecessors, $k__5332__auto__$$) : $pred__47209_this__5331__auto__$$.call(null, cljs$cst$2739$fpredecessors, 
  $k__5332__auto__$$)) ? new loom.graph.FlyDigraph(this.fnodes, this.fedges, this.fsuccessors, $G__47198$$, this.start, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47209_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47209_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$1574$start, $k__5332__auto__$$) : $pred__47209_this__5331__auto__$$.call(null, $APP.cljs$cst$1574$start, $k__5332__auto__$$)) ? new loom.graph.FlyDigraph(this.fnodes, this.fedges, 
  this.fsuccessors, this.fpredecessors, $G__47198$$, this.__meta, this.__extmap, null) : new loom.graph.FlyDigraph(this.fnodes, this.fedges, this.fsuccessors, this.fpredecessors, this.start, this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__47198$$), null);
};
loom.graph.FlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.MapEntry(cljs$cst$2733$fnodes, this.fnodes, null), new $APP.cljs.core.MapEntry(cljs$cst$2734$fedges, this.fedges, null), new $APP.cljs.core.MapEntry(cljs$cst$2735$fsuccessors, this.fsuccessors, null), new $APP.cljs.core.MapEntry(cljs$cst$2739$fpredecessors, this.fpredecessors, null), new $APP.cljs.core.MapEntry($APP.cljs$cst$1574$start, 
  this.start, null)], null), this.__extmap));
};
loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__47198$$) {
  return new loom.graph.FlyDigraph(this.fnodes, this.fedges, this.fsuccessors, this.fpredecessors, this.start, $G__47198$$, this.__extmap, this.__hash);
};
loom.graph.FlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
loom.graph.FlyDigraph.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2736$fnodes, cljs$cst$2737$fedges, cljs$cst$2738$fsuccessors, cljs$cst$2740$fpredecessors, $APP.cljs$cst$58$start], null);
};
loom.graph.FlyDigraph.cljs$lang$type = !0;
loom.graph.FlyDigraph.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "loom.graph/FlyDigraph", null, 1, null);
};
loom.graph.FlyDigraph.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "loom.graph/FlyDigraph");
};
loom.graph.__GT_FlyDigraph = function($fnodes$$, $fedges$$, $fsuccessors$$, $fpredecessors$$, $start$$) {
  return new loom.graph.FlyDigraph($fnodes$$, $fedges$$, $fsuccessors$$, $fpredecessors$$, $start$$, null, null, null);
};
loom.graph.map__GT_FlyDigraph = function($G__47202$$) {
  var $G__47212$jscomp$inline_5162_extmap__5365__auto__$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($G__47202$$, cljs$cst$2733$fnodes, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2734$fedges, cljs$cst$2735$fsuccessors, cljs$cst$2739$fpredecessors, $APP.cljs$cst$1574$start], 0));
  $G__47212$jscomp$inline_5162_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__47202$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__47212$jscomp$inline_5162_extmap__5365__auto__$$) : $G__47212$jscomp$inline_5162_extmap__5365__auto__$$;
  return new loom.graph.FlyDigraph(cljs$cst$2733$fnodes.cljs$core$IFn$_invoke$arity$1($G__47202$$), cljs$cst$2734$fedges.cljs$core$IFn$_invoke$arity$1($G__47202$$), cljs$cst$2735$fsuccessors.cljs$core$IFn$_invoke$arity$1($G__47202$$), cljs$cst$2739$fpredecessors.cljs$core$IFn$_invoke$arity$1($G__47202$$), $APP.cljs$cst$1574$start.cljs$core$IFn$_invoke$arity$1($G__47202$$), null, $APP.cljs.core.not_empty($G__47212$jscomp$inline_5162_extmap__5365__auto__$$), null);
};
loom.graph.WeightedFlyGraph = function($fnodes$$, $fedges$$, $fsuccessors$$, $fweight$$, $start$$, $__meta$$, $__extmap$$, $__hash$$) {
  this.fnodes = $fnodes$$;
  this.fedges = $fedges$$;
  this.fsuccessors = $fsuccessors$$;
  this.fweight = $fweight$$;
  this.start = $start$$;
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k47214$$, $else__5326__auto__$$) {
  switch($k47214$$ instanceof $APP.cljs.core.Keyword ? $k47214$$.fqn : null) {
    case "fnodes":
      return this.fnodes;
    case "fedges":
      return this.fedges;
    case "fsuccessors":
      return this.fsuccessors;
    case "fweight":
      return this.fweight;
    case "start":
      return this.start;
    default:
      return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k47214$$, $else__5326__auto__$$);
  }
};
loom.graph.WeightedFlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__47219_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47219_v__5348__auto__$$, 0, null);
    $p__47219_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47219_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__47219_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__47219_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
loom.graph.WeightedFlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#loom.graph.WeightedFlyGraph{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2733$fnodes, this.fnodes], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2734$fedges, this.fedges], null), new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2735$fsuccessors, this.fsuccessors], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2741$fweight, this.fweight], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1574$start, this.start], null)], null), this.__extmap));
};
loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__47213$$) {
  return new $APP.cljs.core.RecordIter(0, this, 5, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2733$fnodes, cljs$cst$2734$fedges, cljs$cst$2735$fsuccessors, cljs$cst$2741$fweight, $APP.cljs$cst$1574$start], null), $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
loom.graph.WeightedFlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
loom.graph.WeightedFlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new loom.graph.WeightedFlyGraph(this.fnodes, this.fedges, this.fsuccessors, this.fweight, this.start, this.__meta, this.__extmap, this.__hash);
};
loom.graph.WeightedFlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 5 + $APP.cljs.core.count(this.__extmap);
};
loom.graph.WeightedFlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$88_h__5134__auto____$1$jscomp$88_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$88_h__5134__auto____$1$jscomp$88_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$88_h__5134__auto____$1$jscomp$88_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$88_h__5134__auto____$1$jscomp$88_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$88_h__5134__auto____$1$jscomp$88_this__5319__auto__$$ = -1357917791 ^ $APP.cljs.core.hash_unordered_coll(this);
};
loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this47215$$, $other47216$$) {
  return $other47216$$ != null && this.constructor === $other47216$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.fnodes, $other47216$$.fnodes) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.fedges, $other47216$$.fedges) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.fsuccessors, $other47216$$.fsuccessors) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.fweight, $other47216$$.fweight) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.start, 
  $other47216$$.start) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other47216$$.__extmap);
};
loom.graph.WeightedFlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 5, [cljs$cst$2734$fedges, null, cljs$cst$2735$fsuccessors, null, $APP.cljs$cst$1574$start, null, cljs$cst$2733$fnodes, null, cljs$cst$2741$fweight, null], null), null), $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, this), this.__meta), 
  $k__5334__auto__$$) : new loom.graph.WeightedFlyGraph(this.fnodes, this.fedges, this.fsuccessors, this.fweight, this.start, this.__meta, $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k47214$$) {
  switch($k47214$$ instanceof $APP.cljs.core.Keyword ? $k47214$$.fqn : null) {
    case "fnodes":
    case "fedges":
    case "fsuccessors":
    case "fweight":
    case "start":
      return !0;
    default:
      return $APP.cljs.core.contains_QMARK_(this.__extmap, $k47214$$);
  }
};
loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($pred__47224_this__5331__auto__$$, $k__5332__auto__$$, $G__47213$$) {
  $pred__47224_this__5331__auto__$$ = $APP.cljs.core.keyword_identical_QMARK_;
  return $APP.cljs.core.truth_($pred__47224_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47224_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2733$fnodes, $k__5332__auto__$$) : $pred__47224_this__5331__auto__$$.call(null, cljs$cst$2733$fnodes, $k__5332__auto__$$)) ? new loom.graph.WeightedFlyGraph($G__47213$$, this.fedges, this.fsuccessors, this.fweight, this.start, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47224_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? 
  $pred__47224_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2734$fedges, $k__5332__auto__$$) : $pred__47224_this__5331__auto__$$.call(null, cljs$cst$2734$fedges, $k__5332__auto__$$)) ? new loom.graph.WeightedFlyGraph(this.fnodes, $G__47213$$, this.fsuccessors, this.fweight, this.start, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47224_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47224_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2735$fsuccessors, 
  $k__5332__auto__$$) : $pred__47224_this__5331__auto__$$.call(null, cljs$cst$2735$fsuccessors, $k__5332__auto__$$)) ? new loom.graph.WeightedFlyGraph(this.fnodes, this.fedges, $G__47213$$, this.fweight, this.start, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47224_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47224_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2741$fweight, $k__5332__auto__$$) : $pred__47224_this__5331__auto__$$.call(null, cljs$cst$2741$fweight, 
  $k__5332__auto__$$)) ? new loom.graph.WeightedFlyGraph(this.fnodes, this.fedges, this.fsuccessors, $G__47213$$, this.start, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47224_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47224_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$1574$start, $k__5332__auto__$$) : $pred__47224_this__5331__auto__$$.call(null, $APP.cljs$cst$1574$start, $k__5332__auto__$$)) ? new loom.graph.WeightedFlyGraph(this.fnodes, 
  this.fedges, this.fsuccessors, this.fweight, $G__47213$$, this.__meta, this.__extmap, null) : new loom.graph.WeightedFlyGraph(this.fnodes, this.fedges, this.fsuccessors, this.fweight, this.start, this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__47213$$), null);
};
loom.graph.WeightedFlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.MapEntry(cljs$cst$2733$fnodes, this.fnodes, null), new $APP.cljs.core.MapEntry(cljs$cst$2734$fedges, this.fedges, null), new $APP.cljs.core.MapEntry(cljs$cst$2735$fsuccessors, this.fsuccessors, null), new $APP.cljs.core.MapEntry(cljs$cst$2741$fweight, this.fweight, null), new $APP.cljs.core.MapEntry($APP.cljs$cst$1574$start, 
  this.start, null)], null), this.__extmap));
};
loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__47213$$) {
  return new loom.graph.WeightedFlyGraph(this.fnodes, this.fedges, this.fsuccessors, this.fweight, this.start, $G__47213$$, this.__extmap, this.__hash);
};
loom.graph.WeightedFlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
loom.graph.WeightedFlyGraph.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2736$fnodes, cljs$cst$2737$fedges, cljs$cst$2738$fsuccessors, cljs$cst$2742$fweight, $APP.cljs$cst$58$start], null);
};
loom.graph.WeightedFlyGraph.cljs$lang$type = !0;
loom.graph.WeightedFlyGraph.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "loom.graph/WeightedFlyGraph", null, 1, null);
};
loom.graph.WeightedFlyGraph.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "loom.graph/WeightedFlyGraph");
};
loom.graph.__GT_WeightedFlyGraph = function($fnodes$$, $fedges$$, $fsuccessors$$, $fweight$$, $start$$) {
  return new loom.graph.WeightedFlyGraph($fnodes$$, $fedges$$, $fsuccessors$$, $fweight$$, $start$$, null, null, null);
};
loom.graph.map__GT_WeightedFlyGraph = function($G__47217$$) {
  var $G__47227$jscomp$inline_5164_extmap__5365__auto__$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($G__47217$$, cljs$cst$2733$fnodes, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2734$fedges, cljs$cst$2735$fsuccessors, cljs$cst$2741$fweight, $APP.cljs$cst$1574$start], 0));
  $G__47227$jscomp$inline_5164_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__47217$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__47227$jscomp$inline_5164_extmap__5365__auto__$$) : $G__47227$jscomp$inline_5164_extmap__5365__auto__$$;
  return new loom.graph.WeightedFlyGraph(cljs$cst$2733$fnodes.cljs$core$IFn$_invoke$arity$1($G__47217$$), cljs$cst$2734$fedges.cljs$core$IFn$_invoke$arity$1($G__47217$$), cljs$cst$2735$fsuccessors.cljs$core$IFn$_invoke$arity$1($G__47217$$), cljs$cst$2741$fweight.cljs$core$IFn$_invoke$arity$1($G__47217$$), $APP.cljs$cst$1574$start.cljs$core$IFn$_invoke$arity$1($G__47217$$), null, $APP.cljs.core.not_empty($G__47227$jscomp$inline_5164_extmap__5365__auto__$$), null);
};
loom.graph.WeightedFlyDigraph = function($fnodes$$, $fedges$$, $fsuccessors$$, $fpredecessors$$, $fweight$$, $start$$, $__meta$$, $__extmap$$, $__hash$$) {
  this.fnodes = $fnodes$$;
  this.fedges = $fedges$$;
  this.fsuccessors = $fsuccessors$$;
  this.fpredecessors = $fpredecessors$$;
  this.fweight = $fweight$$;
  this.start = $start$$;
  this.__meta = $__meta$$;
  this.__extmap = $__extmap$$;
  this.__hash = $__hash$$;
  this.cljs$lang$protocol_mask$partition0$ = 2230716170;
  this.cljs$lang$protocol_mask$partition1$ = 139264;
};
loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = function($this__5323__auto__$$, $k__5324__auto__$$) {
  return this.cljs$core$ILookup$_lookup$arity$3(null, $k__5324__auto__$$, null);
};
loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = function($this__5325__auto__$$, $k47229$$, $else__5326__auto__$$) {
  switch($k47229$$ instanceof $APP.cljs.core.Keyword ? $k47229$$.fqn : null) {
    case "fnodes":
      return this.fnodes;
    case "fedges":
      return this.fedges;
    case "fsuccessors":
      return this.fsuccessors;
    case "fpredecessors":
      return this.fpredecessors;
    case "fweight":
      return this.fweight;
    case "start":
      return this.start;
    default:
      return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k47229$$, $else__5326__auto__$$);
  }
};
loom.graph.WeightedFlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function($this__5343__auto__$$, $f__5344__auto__$$, $init__5345__auto__$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ret__5346__auto__$$, $p__47234_v__5348__auto__$$) {
    var $k__5347__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47234_v__5348__auto__$$, 0, null);
    $p__47234_v__5348__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47234_v__5348__auto__$$, 1, null);
    return $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $f__5344__auto__$$.cljs$core$IFn$_invoke$arity$3($ret__5346__auto__$$, $k__5347__auto__$$, $p__47234_v__5348__auto__$$) : $f__5344__auto__$$.call(null, $ret__5346__auto__$$, $k__5347__auto__$$, $p__47234_v__5348__auto__$$);
  }, $init__5345__auto__$$, this);
};
loom.graph.WeightedFlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = function($this__5338__auto__$$, $writer__5339__auto__$$, $opts__5340__auto__$$) {
  return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, function($keyval__5342__auto__$$) {
    return $APP.cljs.core.pr_sequential_writer($writer__5339__auto__$$, $APP.cljs.core.pr_writer, "", " ", "", $opts__5340__auto__$$, $keyval__5342__auto__$$);
  }, "#loom.graph.WeightedFlyDigraph{", ", ", "}", $opts__5340__auto__$$, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2733$fnodes, this.fnodes], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2734$fedges, this.fedges], null), new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2735$fsuccessors, this.fsuccessors], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2739$fpredecessors, this.fpredecessors], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2741$fweight, this.fweight], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1574$start, 
  this.start], null)], null), this.__extmap));
};
loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = function($G__47228$$) {
  return new $APP.cljs.core.RecordIter(0, this, 6, new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2733$fnodes, cljs$cst$2734$fedges, cljs$cst$2735$fsuccessors, cljs$cst$2739$fpredecessors, cljs$cst$2741$fweight, $APP.cljs$cst$1574$start], null), $APP.cljs.core.truth_(this.__extmap) ? $APP.cljs.core._iterator(this.__extmap) : $APP.cljs.core.nil_iter());
};
loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = function($this__5321__auto__$$) {
  return this.__meta;
};
loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = function($this__5318__auto__$$) {
  return new loom.graph.WeightedFlyDigraph(this.fnodes, this.fedges, this.fsuccessors, this.fpredecessors, this.fweight, this.start, this.__meta, this.__extmap, this.__hash);
};
loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = function($this__5327__auto__$$) {
  return 6 + $APP.cljs.core.count(this.__extmap);
};
loom.graph.WeightedFlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = function($h__5134__auto__$jscomp$89_h__5134__auto____$1$jscomp$89_this__5319__auto__$$) {
  $h__5134__auto__$jscomp$89_h__5134__auto____$1$jscomp$89_this__5319__auto__$$ = this.__hash;
  return $h__5134__auto__$jscomp$89_h__5134__auto____$1$jscomp$89_this__5319__auto__$$ != null ? $h__5134__auto__$jscomp$89_h__5134__auto____$1$jscomp$89_this__5319__auto__$$ : this.__hash = $h__5134__auto__$jscomp$89_h__5134__auto____$1$jscomp$89_this__5319__auto__$$ = 788097524 ^ $APP.cljs.core.hash_unordered_coll(this);
};
loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = function($this47230$$, $other47231$$) {
  return $other47231$$ != null && this.constructor === $other47231$$.constructor && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.fnodes, $other47231$$.fnodes) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.fedges, $other47231$$.fedges) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.fsuccessors, $other47231$$.fsuccessors) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.fpredecessors, $other47231$$.fpredecessors) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.fweight, 
  $other47231$$.fweight) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.start, $other47231$$.start) && $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this.__extmap, $other47231$$.__extmap);
};
loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = function($this__5333__auto__$$, $k__5334__auto__$$) {
  return $APP.cljs.core.contains_QMARK_(new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 6, [cljs$cst$2734$fedges, null, cljs$cst$2735$fsuccessors, null, $APP.cljs$cst$1574$start, null, cljs$cst$2733$fnodes, null, cljs$cst$2741$fweight, null, cljs$cst$2739$fpredecessors, null], null), null), $k__5334__auto__$$) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._with_meta($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, 
  this), this.__meta), $k__5334__auto__$$) : new loom.graph.WeightedFlyDigraph(this.fnodes, this.fedges, this.fsuccessors, this.fpredecessors, this.fweight, this.start, this.__meta, $APP.cljs.core.not_empty($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this.__extmap, $k__5334__auto__$$)), null);
};
loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function($this__5330__auto__$$, $k47229$$) {
  switch($k47229$$ instanceof $APP.cljs.core.Keyword ? $k47229$$.fqn : null) {
    case "fnodes":
    case "fedges":
    case "fsuccessors":
    case "fpredecessors":
    case "fweight":
    case "start":
      return !0;
    default:
      return $APP.cljs.core.contains_QMARK_(this.__extmap, $k47229$$);
  }
};
loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = function($pred__47239_this__5331__auto__$$, $k__5332__auto__$$, $G__47228$$) {
  $pred__47239_this__5331__auto__$$ = $APP.cljs.core.keyword_identical_QMARK_;
  return $APP.cljs.core.truth_($pred__47239_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47239_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2733$fnodes, $k__5332__auto__$$) : $pred__47239_this__5331__auto__$$.call(null, cljs$cst$2733$fnodes, $k__5332__auto__$$)) ? new loom.graph.WeightedFlyDigraph($G__47228$$, this.fedges, this.fsuccessors, this.fpredecessors, this.fweight, this.start, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47239_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? 
  $pred__47239_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2734$fedges, $k__5332__auto__$$) : $pred__47239_this__5331__auto__$$.call(null, cljs$cst$2734$fedges, $k__5332__auto__$$)) ? new loom.graph.WeightedFlyDigraph(this.fnodes, $G__47228$$, this.fsuccessors, this.fpredecessors, this.fweight, this.start, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47239_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47239_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2735$fsuccessors, 
  $k__5332__auto__$$) : $pred__47239_this__5331__auto__$$.call(null, cljs$cst$2735$fsuccessors, $k__5332__auto__$$)) ? new loom.graph.WeightedFlyDigraph(this.fnodes, this.fedges, $G__47228$$, this.fpredecessors, this.fweight, this.start, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47239_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47239_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2739$fpredecessors, $k__5332__auto__$$) : $pred__47239_this__5331__auto__$$.call(null, 
  cljs$cst$2739$fpredecessors, $k__5332__auto__$$)) ? new loom.graph.WeightedFlyDigraph(this.fnodes, this.fedges, this.fsuccessors, $G__47228$$, this.fweight, this.start, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47239_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47239_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2(cljs$cst$2741$fweight, $k__5332__auto__$$) : $pred__47239_this__5331__auto__$$.call(null, cljs$cst$2741$fweight, $k__5332__auto__$$)) ? new loom.graph.WeightedFlyDigraph(this.fnodes, 
  this.fedges, this.fsuccessors, this.fpredecessors, $G__47228$$, this.start, this.__meta, this.__extmap, null) : $APP.cljs.core.truth_($pred__47239_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $pred__47239_this__5331__auto__$$.cljs$core$IFn$_invoke$arity$2($APP.cljs$cst$1574$start, $k__5332__auto__$$) : $pred__47239_this__5331__auto__$$.call(null, $APP.cljs$cst$1574$start, $k__5332__auto__$$)) ? new loom.graph.WeightedFlyDigraph(this.fnodes, this.fedges, this.fsuccessors, this.fpredecessors, 
  this.fweight, $G__47228$$, this.__meta, this.__extmap, null) : new loom.graph.WeightedFlyDigraph(this.fnodes, this.fedges, this.fsuccessors, this.fpredecessors, this.fweight, this.start, this.__meta, $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this.__extmap, $k__5332__auto__$$, $G__47228$$), null);
};
loom.graph.WeightedFlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = function($this__5336__auto__$$) {
  return $APP.cljs.core.seq($APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.MapEntry(cljs$cst$2733$fnodes, this.fnodes, null), new $APP.cljs.core.MapEntry(cljs$cst$2734$fedges, this.fedges, null), new $APP.cljs.core.MapEntry(cljs$cst$2735$fsuccessors, this.fsuccessors, null), new $APP.cljs.core.MapEntry(cljs$cst$2739$fpredecessors, this.fpredecessors, null), new $APP.cljs.core.MapEntry(cljs$cst$2741$fweight, 
  this.fweight, null), new $APP.cljs.core.MapEntry($APP.cljs$cst$1574$start, this.start, null)], null), this.__extmap));
};
loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function($this__5322__auto__$$, $G__47228$$) {
  return new loom.graph.WeightedFlyDigraph(this.fnodes, this.fedges, this.fsuccessors, this.fpredecessors, this.fweight, this.start, $G__47228$$, this.__extmap, this.__hash);
};
loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = function($this__5328__auto__$$, $entry__5329__auto__$$) {
  return $APP.cljs.core.vector_QMARK_($entry__5329__auto__$$) ? this.cljs$core$IAssociative$_assoc$arity$3(null, $APP.cljs.core._nth($entry__5329__auto__$$, 0), $APP.cljs.core._nth($entry__5329__auto__$$, 1)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core._conj, this, $entry__5329__auto__$$);
};
loom.graph.WeightedFlyDigraph.getBasis = function() {
  return new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2736$fnodes, cljs$cst$2737$fedges, cljs$cst$2738$fsuccessors, cljs$cst$2740$fpredecessors, cljs$cst$2742$fweight, $APP.cljs$cst$58$start], null);
};
loom.graph.WeightedFlyDigraph.cljs$lang$type = !0;
loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrSeq = function($this__5369__auto__$$) {
  return new $APP.cljs.core.List(null, "loom.graph/WeightedFlyDigraph", null, 1, null);
};
loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrWriter = function($this__5369__auto__$$, $writer__5370__auto__$$) {
  return $APP.cljs.core._write($writer__5370__auto__$$, "loom.graph/WeightedFlyDigraph");
};
loom.graph.__GT_WeightedFlyDigraph = function($fnodes$$, $fedges$$, $fsuccessors$$, $fpredecessors$$, $fweight$$, $start$$) {
  return new loom.graph.WeightedFlyDigraph($fnodes$$, $fedges$$, $fsuccessors$$, $fpredecessors$$, $fweight$$, $start$$, null, null, null);
};
loom.graph.map__GT_WeightedFlyDigraph = function($G__47232$$) {
  var $G__47242$jscomp$inline_5166_extmap__5365__auto__$$ = $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($G__47232$$, cljs$cst$2733$fnodes, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs$cst$2734$fedges, cljs$cst$2735$fsuccessors, cljs$cst$2739$fpredecessors, cljs$cst$2741$fweight, $APP.cljs$cst$1574$start], 0));
  $G__47242$jscomp$inline_5166_extmap__5365__auto__$$ = $APP.cljs.core.record_QMARK_($G__47232$$) ? $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $G__47242$jscomp$inline_5166_extmap__5365__auto__$$) : $G__47242$jscomp$inline_5166_extmap__5365__auto__$$;
  return new loom.graph.WeightedFlyDigraph(cljs$cst$2733$fnodes.cljs$core$IFn$_invoke$arity$1($G__47232$$), cljs$cst$2734$fedges.cljs$core$IFn$_invoke$arity$1($G__47232$$), cljs$cst$2735$fsuccessors.cljs$core$IFn$_invoke$arity$1($G__47232$$), cljs$cst$2739$fpredecessors.cljs$core$IFn$_invoke$arity$1($G__47232$$), cljs$cst$2741$fweight.cljs$core$IFn$_invoke$arity$1($G__47232$$), $APP.cljs$cst$1574$start.cljs$core$IFn$_invoke$arity$1($G__47232$$), null, $APP.cljs.core.not_empty($G__47242$jscomp$inline_5166_extmap__5365__auto__$$), 
  null);
};
loom.graph.FlyGraph.prototype.loom$graph$Graph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.FlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = function($JSCompiler_temp_const$jscomp$960_g$$) {
  $JSCompiler_temp_const$jscomp$960_g$$ = $APP.cljs.core;
  var $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$960_g$$.truth_;
  var $JSCompiler_inline_result$jscomp$961_or__5025__auto__$$ = this.fnodes;
  $JSCompiler_inline_result$jscomp$961_or__5025__auto__$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$961_or__5025__auto__$$) ? $JSCompiler_inline_result$jscomp$961_or__5025__auto__$$ : $APP.cljs.core.not(this.start);
  return $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$960_g$$, $JSCompiler_inline_result$jscomp$961_or__5025__auto__$$) ? loom.graph.call_or_return(this.fnodes) : loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(this), this.start);
};
loom.graph.FlyGraph.prototype.loom$graph$Graph$edges$arity$1 = function($g$$) {
  var $g__$1$$ = this;
  return $APP.cljs.core.truth_($g__$1$$.fedges) ? loom.graph.call_or_return($g__$1$$.fedges) : function $loom$graph$iter__47243$$($s__47244$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (var $s__47244__$1$$ = $s__47244$$;;) {
        var $iterys__5499__auto__$jscomp$40_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47244__$1$$);
        if ($iterys__5499__auto__$jscomp$40_temp__5825__auto__$$) {
          var $xs__6385__auto__$$ = $iterys__5499__auto__$jscomp$40_temp__5825__auto__$$, $fs__5500__auto__$jscomp$40_n$$ = $APP.cljs.core.first($xs__6385__auto__$$);
          $iterys__5499__auto__$jscomp$40_temp__5825__auto__$$ = function($s__47244__$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$) {
            return function $loom$graph$iter__47243_$_iter__47245$$($s__47246$$) {
              return new $APP.cljs.core.LazySeq(null, function($s__47244__$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$) {
                return function() {
                  for (;;) {
                    var $s__47246__$2_temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__47246$$);
                    if ($s__47246__$2_temp__5825__auto____$1$$) {
                      if ($APP.cljs.core.chunked_seq_QMARK_($s__47246__$2_temp__5825__auto____$1$$)) {
                        var $JSCompiler_inline_result$jscomp$962_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47246__$2_temp__5825__auto____$1$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$962_c__5501__auto__$$), $b__47248_nbr$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                        a: {
                          for (var $i__47247$$ = 0;;) {
                            if ($i__47247$$ < $size__5502__auto__$$) {
                              var $nbr$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$962_c__5501__auto__$$, $i__47247$$);
                              $APP.cljs.core.chunk_append($b__47248_nbr$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n$$, $nbr$$], null));
                              $i__47247$$ += 1;
                            } else {
                              $JSCompiler_inline_result$jscomp$962_c__5501__auto__$$ = !0;
                              break a;
                            }
                          }
                          $JSCompiler_inline_result$jscomp$962_c__5501__auto__$$ = void 0;
                        }
                        return $JSCompiler_inline_result$jscomp$962_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47248_nbr$$), $loom$graph$iter__47243_$_iter__47245$$($APP.cljs.core.chunk_rest($s__47246__$2_temp__5825__auto____$1$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47248_nbr$$), null);
                      }
                      $b__47248_nbr$$ = $APP.cljs.core.first($s__47246__$2_temp__5825__auto____$1$$);
                      return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n$$, $b__47248_nbr$$], null), $loom$graph$iter__47243_$_iter__47245$$($APP.cljs.core.rest($s__47246__$2_temp__5825__auto____$1$$)));
                    }
                    return null;
                  }
                };
              }($s__47244__$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$), null, null);
            };
          }($s__47244__$1$$, $fs__5500__auto__$jscomp$40_n$$, $xs__6385__auto__$$, $iterys__5499__auto__$jscomp$40_temp__5825__auto__$$, $g__$1$$);
          if ($fs__5500__auto__$jscomp$40_n$$ = $APP.cljs.core.seq($iterys__5499__auto__$jscomp$40_temp__5825__auto__$$(loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g__$1$$, $fs__5500__auto__$jscomp$40_n$$)))) {
            return $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($fs__5500__auto__$jscomp$40_n$$, $loom$graph$iter__47243$$($APP.cljs.core.rest($s__47244__$1$$)));
          }
          $s__47244__$1$$ = $APP.cljs.core.rest($s__47244__$1$$);
        } else {
          return null;
        }
      }
    }, null, null);
  }(loom.graph.nodes($g__$1$$));
};
loom.graph.FlyGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = function($g$$, $node$$) {
  return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(this.fsuccessors, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$node$$], 0));
};
loom.graph.FlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(this, $node$$));
};
loom.graph.FlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = function($g$$, $node$$) {
  return function $loom$graph$iter__47249$$($s__47250$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (;;) {
        var $s__47250__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47250$$);
        if ($s__47250__$2_temp__5825__auto__$$) {
          if ($APP.cljs.core.chunked_seq_QMARK_($s__47250__$2_temp__5825__auto__$$)) {
            var $JSCompiler_inline_result$jscomp$963_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47250__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$963_c__5501__auto__$$), $b__47252_n2$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
            a: {
              for (var $i__47251$$ = 0;;) {
                if ($i__47251$$ < $size__5502__auto__$$) {
                  var $n2$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$963_c__5501__auto__$$, $i__47251$$);
                  $APP.cljs.core.chunk_append($b__47252_n2$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$node$$, $n2$$], null));
                  $i__47251$$ += 1;
                } else {
                  $JSCompiler_inline_result$jscomp$963_c__5501__auto__$$ = !0;
                  break a;
                }
              }
              $JSCompiler_inline_result$jscomp$963_c__5501__auto__$$ = void 0;
            }
            return $JSCompiler_inline_result$jscomp$963_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47252_n2$$), $loom$graph$iter__47249$$($APP.cljs.core.chunk_rest($s__47250__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47252_n2$$), null);
          }
          $b__47252_n2$$ = $APP.cljs.core.first($s__47250__$2_temp__5825__auto__$$);
          return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$node$$, $b__47252_n2$$], null), $loom$graph$iter__47249$$($APP.cljs.core.rest($s__47250__$2_temp__5825__auto__$$)));
        }
        return null;
      }
    }, null, null);
  }(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(this, $node$$));
};
loom.graph.FlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.some($APP.cljs.core.PersistentHashSet.createAsIfByAssoc([$node$$]), loom.graph.nodes(this));
};
loom.graph.FlyGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = function($g$$, $n1$$, $n2$$) {
  return $APP.cljs.core.some($APP.cljs.core.PersistentHashSet.createAsIfByAssoc([new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n1$$, $n2$$], null)]), loom.graph.edges(this));
};
loom.graph.FlyDigraph.prototype.loom$graph$Graph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.FlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = function($JSCompiler_temp_const$jscomp$965_g$$) {
  $JSCompiler_temp_const$jscomp$965_g$$ = $APP.cljs.core;
  var $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$965_g$$.truth_;
  var $JSCompiler_inline_result$jscomp$966_or__5025__auto__$$ = this.fnodes;
  $JSCompiler_inline_result$jscomp$966_or__5025__auto__$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$966_or__5025__auto__$$) ? $JSCompiler_inline_result$jscomp$966_or__5025__auto__$$ : $APP.cljs.core.not(this.start);
  return $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$965_g$$, $JSCompiler_inline_result$jscomp$966_or__5025__auto__$$) ? loom.graph.call_or_return(this.fnodes) : loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(this), this.start);
};
loom.graph.FlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = function($g$$) {
  var $g__$1$$ = this;
  return $APP.cljs.core.truth_($g__$1$$.fedges) ? loom.graph.call_or_return($g__$1$$.fedges) : function $loom$graph$iter__47253$$($s__47254$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (var $s__47254__$1$$ = $s__47254$$;;) {
        var $iterys__5499__auto__$jscomp$41_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47254__$1$$);
        if ($iterys__5499__auto__$jscomp$41_temp__5825__auto__$$) {
          var $xs__6385__auto__$$ = $iterys__5499__auto__$jscomp$41_temp__5825__auto__$$, $fs__5500__auto__$jscomp$41_n$$ = $APP.cljs.core.first($xs__6385__auto__$$);
          $iterys__5499__auto__$jscomp$41_temp__5825__auto__$$ = function($s__47254__$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$) {
            return function $loom$graph$iter__47253_$_iter__47255$$($s__47256$$) {
              return new $APP.cljs.core.LazySeq(null, function($s__47254__$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$) {
                return function() {
                  for (;;) {
                    var $s__47256__$2_temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__47256$$);
                    if ($s__47256__$2_temp__5825__auto____$1$$) {
                      if ($APP.cljs.core.chunked_seq_QMARK_($s__47256__$2_temp__5825__auto____$1$$)) {
                        var $JSCompiler_inline_result$jscomp$967_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47256__$2_temp__5825__auto____$1$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$967_c__5501__auto__$$), $b__47258_nbr$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                        a: {
                          for (var $i__47257$$ = 0;;) {
                            if ($i__47257$$ < $size__5502__auto__$$) {
                              var $nbr$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$967_c__5501__auto__$$, $i__47257$$);
                              $APP.cljs.core.chunk_append($b__47258_nbr$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n$$, $nbr$$], null));
                              $i__47257$$ += 1;
                            } else {
                              $JSCompiler_inline_result$jscomp$967_c__5501__auto__$$ = !0;
                              break a;
                            }
                          }
                          $JSCompiler_inline_result$jscomp$967_c__5501__auto__$$ = void 0;
                        }
                        return $JSCompiler_inline_result$jscomp$967_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47258_nbr$$), $loom$graph$iter__47253_$_iter__47255$$($APP.cljs.core.chunk_rest($s__47256__$2_temp__5825__auto____$1$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47258_nbr$$), null);
                      }
                      $b__47258_nbr$$ = $APP.cljs.core.first($s__47256__$2_temp__5825__auto____$1$$);
                      return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n$$, $b__47258_nbr$$], null), $loom$graph$iter__47253_$_iter__47255$$($APP.cljs.core.rest($s__47256__$2_temp__5825__auto____$1$$)));
                    }
                    return null;
                  }
                };
              }($s__47254__$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$), null, null);
            };
          }($s__47254__$1$$, $fs__5500__auto__$jscomp$41_n$$, $xs__6385__auto__$$, $iterys__5499__auto__$jscomp$41_temp__5825__auto__$$, $g__$1$$);
          if ($fs__5500__auto__$jscomp$41_n$$ = $APP.cljs.core.seq($iterys__5499__auto__$jscomp$41_temp__5825__auto__$$(loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g__$1$$, $fs__5500__auto__$jscomp$41_n$$)))) {
            return $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($fs__5500__auto__$jscomp$41_n$$, $loom$graph$iter__47253$$($APP.cljs.core.rest($s__47254__$1$$)));
          }
          $s__47254__$1$$ = $APP.cljs.core.rest($s__47254__$1$$);
        } else {
          return null;
        }
      }
    }, null, null);
  }(loom.graph.nodes($g__$1$$));
};
loom.graph.FlyDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = function($g$$, $node$$) {
  return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(this.fsuccessors, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$node$$], 0));
};
loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(this, $node$$));
};
loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = function($g$$, $node$$) {
  return function $loom$graph$iter__47259$$($s__47260$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (;;) {
        var $s__47260__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47260$$);
        if ($s__47260__$2_temp__5825__auto__$$) {
          if ($APP.cljs.core.chunked_seq_QMARK_($s__47260__$2_temp__5825__auto__$$)) {
            var $JSCompiler_inline_result$jscomp$968_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47260__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$968_c__5501__auto__$$), $b__47262_n2$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
            a: {
              for (var $i__47261$$ = 0;;) {
                if ($i__47261$$ < $size__5502__auto__$$) {
                  var $n2$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$968_c__5501__auto__$$, $i__47261$$);
                  $APP.cljs.core.chunk_append($b__47262_n2$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$node$$, $n2$$], null));
                  $i__47261$$ += 1;
                } else {
                  $JSCompiler_inline_result$jscomp$968_c__5501__auto__$$ = !0;
                  break a;
                }
              }
              $JSCompiler_inline_result$jscomp$968_c__5501__auto__$$ = void 0;
            }
            return $JSCompiler_inline_result$jscomp$968_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47262_n2$$), $loom$graph$iter__47259$$($APP.cljs.core.chunk_rest($s__47260__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47262_n2$$), null);
          }
          $b__47262_n2$$ = $APP.cljs.core.first($s__47260__$2_temp__5825__auto__$$);
          return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$node$$, $b__47262_n2$$], null), $loom$graph$iter__47259$$($APP.cljs.core.rest($s__47260__$2_temp__5825__auto__$$)));
        }
        return null;
      }
    }, null, null);
  }(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(this, $node$$));
};
loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.some($APP.cljs.core.PersistentHashSet.createAsIfByAssoc([$node$$]), loom.graph.nodes(this));
};
loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = function($g$$, $n1$$, $n2$$) {
  return $APP.cljs.core.some($APP.cljs.core.PersistentHashSet.createAsIfByAssoc([new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n1$$, $n2$$], null)]), loom.graph.edges(this));
};
loom.graph.FlyDigraph.prototype.loom$graph$Digraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.FlyDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = function($g$$, $node$$) {
  return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(this.fpredecessors, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$node$$], 0));
};
loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.count(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(this, $node$$));
};
loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = function($g$$, $node$$) {
  return function $loom$graph$iter__47263$$($s__47264$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (;;) {
        var $s__47264__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47264$$);
        if ($s__47264__$2_temp__5825__auto__$$) {
          if ($APP.cljs.core.chunked_seq_QMARK_($s__47264__$2_temp__5825__auto__$$)) {
            var $JSCompiler_inline_result$jscomp$969_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47264__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$969_c__5501__auto__$$), $b__47266_n2$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
            a: {
              for (var $i__47265$$ = 0;;) {
                if ($i__47265$$ < $size__5502__auto__$$) {
                  var $n2$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$969_c__5501__auto__$$, $i__47265$$);
                  $APP.cljs.core.chunk_append($b__47266_n2$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n2$$, $node$$], null));
                  $i__47265$$ += 1;
                } else {
                  $JSCompiler_inline_result$jscomp$969_c__5501__auto__$$ = !0;
                  break a;
                }
              }
              $JSCompiler_inline_result$jscomp$969_c__5501__auto__$$ = void 0;
            }
            return $JSCompiler_inline_result$jscomp$969_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47266_n2$$), $loom$graph$iter__47263$$($APP.cljs.core.chunk_rest($s__47264__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47266_n2$$), null);
          }
          $b__47266_n2$$ = $APP.cljs.core.first($s__47264__$2_temp__5825__auto__$$);
          return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$b__47266_n2$$, $node$$], null), $loom$graph$iter__47263$$($APP.cljs.core.rest($s__47264__$2_temp__5825__auto__$$)));
        }
        return null;
      }
    }, null, null);
  }(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(this, $node$$));
};
loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = function($JSCompiler_temp_const$jscomp$971_g$$) {
  $JSCompiler_temp_const$jscomp$971_g$$ = $APP.cljs.core;
  var $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$971_g$$.truth_;
  var $JSCompiler_inline_result$jscomp$972_or__5025__auto__$$ = this.fnodes;
  $JSCompiler_inline_result$jscomp$972_or__5025__auto__$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$972_or__5025__auto__$$) ? $JSCompiler_inline_result$jscomp$972_or__5025__auto__$$ : $APP.cljs.core.not(this.start);
  return $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$971_g$$, $JSCompiler_inline_result$jscomp$972_or__5025__auto__$$) ? loom.graph.call_or_return(this.fnodes) : loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(this), this.start);
};
loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$edges$arity$1 = function($g$$) {
  var $g__$1$$ = this;
  return $APP.cljs.core.truth_($g__$1$$.fedges) ? loom.graph.call_or_return($g__$1$$.fedges) : function $loom$graph$iter__47267$$($s__47268$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (var $s__47268__$1$$ = $s__47268$$;;) {
        var $iterys__5499__auto__$jscomp$42_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47268__$1$$);
        if ($iterys__5499__auto__$jscomp$42_temp__5825__auto__$$) {
          var $xs__6385__auto__$$ = $iterys__5499__auto__$jscomp$42_temp__5825__auto__$$, $fs__5500__auto__$jscomp$42_n$$ = $APP.cljs.core.first($xs__6385__auto__$$);
          $iterys__5499__auto__$jscomp$42_temp__5825__auto__$$ = function($s__47268__$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$) {
            return function $loom$graph$iter__47267_$_iter__47269$$($s__47270$$) {
              return new $APP.cljs.core.LazySeq(null, function($s__47268__$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$) {
                return function() {
                  for (;;) {
                    var $s__47270__$2_temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__47270$$);
                    if ($s__47270__$2_temp__5825__auto____$1$$) {
                      if ($APP.cljs.core.chunked_seq_QMARK_($s__47270__$2_temp__5825__auto____$1$$)) {
                        var $JSCompiler_inline_result$jscomp$973_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47270__$2_temp__5825__auto____$1$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$973_c__5501__auto__$$), $b__47272_nbr$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                        a: {
                          for (var $i__47271$$ = 0;;) {
                            if ($i__47271$$ < $size__5502__auto__$$) {
                              var $nbr$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$973_c__5501__auto__$$, $i__47271$$);
                              $APP.cljs.core.chunk_append($b__47272_nbr$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n$$, $nbr$$], null));
                              $i__47271$$ += 1;
                            } else {
                              $JSCompiler_inline_result$jscomp$973_c__5501__auto__$$ = !0;
                              break a;
                            }
                          }
                          $JSCompiler_inline_result$jscomp$973_c__5501__auto__$$ = void 0;
                        }
                        return $JSCompiler_inline_result$jscomp$973_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47272_nbr$$), $loom$graph$iter__47267_$_iter__47269$$($APP.cljs.core.chunk_rest($s__47270__$2_temp__5825__auto____$1$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47272_nbr$$), null);
                      }
                      $b__47272_nbr$$ = $APP.cljs.core.first($s__47270__$2_temp__5825__auto____$1$$);
                      return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n$$, $b__47272_nbr$$], null), $loom$graph$iter__47267_$_iter__47269$$($APP.cljs.core.rest($s__47270__$2_temp__5825__auto____$1$$)));
                    }
                    return null;
                  }
                };
              }($s__47268__$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$), null, null);
            };
          }($s__47268__$1$$, $fs__5500__auto__$jscomp$42_n$$, $xs__6385__auto__$$, $iterys__5499__auto__$jscomp$42_temp__5825__auto__$$, $g__$1$$);
          if ($fs__5500__auto__$jscomp$42_n$$ = $APP.cljs.core.seq($iterys__5499__auto__$jscomp$42_temp__5825__auto__$$(loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g__$1$$, $fs__5500__auto__$jscomp$42_n$$)))) {
            return $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($fs__5500__auto__$jscomp$42_n$$, $loom$graph$iter__47267$$($APP.cljs.core.rest($s__47268__$1$$)));
          }
          $s__47268__$1$$ = $APP.cljs.core.rest($s__47268__$1$$);
        } else {
          return null;
        }
      }
    }, null, null);
  }(loom.graph.nodes($g__$1$$));
};
loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = function($g$$, $node$$) {
  return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(this.fsuccessors, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$node$$], 0));
};
loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(this, $node$$));
};
loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = function($g$$, $node$$) {
  return function $loom$graph$iter__47273$$($s__47274$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (;;) {
        var $s__47274__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47274$$);
        if ($s__47274__$2_temp__5825__auto__$$) {
          if ($APP.cljs.core.chunked_seq_QMARK_($s__47274__$2_temp__5825__auto__$$)) {
            var $JSCompiler_inline_result$jscomp$974_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47274__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$974_c__5501__auto__$$), $b__47276_n2$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
            a: {
              for (var $i__47275$$ = 0;;) {
                if ($i__47275$$ < $size__5502__auto__$$) {
                  var $n2$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$974_c__5501__auto__$$, $i__47275$$);
                  $APP.cljs.core.chunk_append($b__47276_n2$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$node$$, $n2$$], null));
                  $i__47275$$ += 1;
                } else {
                  $JSCompiler_inline_result$jscomp$974_c__5501__auto__$$ = !0;
                  break a;
                }
              }
              $JSCompiler_inline_result$jscomp$974_c__5501__auto__$$ = void 0;
            }
            return $JSCompiler_inline_result$jscomp$974_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47276_n2$$), $loom$graph$iter__47273$$($APP.cljs.core.chunk_rest($s__47274__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47276_n2$$), null);
          }
          $b__47276_n2$$ = $APP.cljs.core.first($s__47274__$2_temp__5825__auto__$$);
          return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$node$$, $b__47276_n2$$], null), $loom$graph$iter__47273$$($APP.cljs.core.rest($s__47274__$2_temp__5825__auto__$$)));
        }
        return null;
      }
    }, null, null);
  }(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(this, $node$$));
};
loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.some($APP.cljs.core.PersistentHashSet.createAsIfByAssoc([$node$$]), loom.graph.nodes(this));
};
loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = function($g$$, $n1$$, $n2$$) {
  return $APP.cljs.core.some($APP.cljs.core.PersistentHashSet.createAsIfByAssoc([new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n1$$, $n2$$], null)]), loom.graph.edges(this));
};
loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = function($g$$, $e$$) {
  return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(this, loom.graph.src($e$$), loom.graph.dest($e$$));
};
loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(this.fweight, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$n1$$, $n2$$], 0));
};
loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = function($JSCompiler_temp_const$jscomp$976_g$$) {
  $JSCompiler_temp_const$jscomp$976_g$$ = $APP.cljs.core;
  var $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$976_g$$.truth_;
  var $JSCompiler_inline_result$jscomp$977_or__5025__auto__$$ = this.fnodes;
  $JSCompiler_inline_result$jscomp$977_or__5025__auto__$$ = $APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$977_or__5025__auto__$$) ? $JSCompiler_inline_result$jscomp$977_or__5025__auto__$$ : $APP.cljs.core.not(this.start);
  return $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$976_g$$, $JSCompiler_inline_result$jscomp$977_or__5025__auto__$$) ? loom.graph.call_or_return(this.fnodes) : loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(this), this.start);
};
loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = function($g$$) {
  var $g__$1$$ = this;
  return $APP.cljs.core.truth_($g__$1$$.fedges) ? loom.graph.call_or_return($g__$1$$.fedges) : function $loom$graph$iter__47277$$($s__47278$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (var $s__47278__$1$$ = $s__47278$$;;) {
        var $iterys__5499__auto__$jscomp$43_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47278__$1$$);
        if ($iterys__5499__auto__$jscomp$43_temp__5825__auto__$$) {
          var $xs__6385__auto__$$ = $iterys__5499__auto__$jscomp$43_temp__5825__auto__$$, $fs__5500__auto__$jscomp$43_n$$ = $APP.cljs.core.first($xs__6385__auto__$$);
          $iterys__5499__auto__$jscomp$43_temp__5825__auto__$$ = function($s__47278__$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$) {
            return function $loom$graph$iter__47277_$_iter__47279$$($s__47280$$) {
              return new $APP.cljs.core.LazySeq(null, function($s__47278__$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$) {
                return function() {
                  for (;;) {
                    var $s__47280__$2_temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__47280$$);
                    if ($s__47280__$2_temp__5825__auto____$1$$) {
                      if ($APP.cljs.core.chunked_seq_QMARK_($s__47280__$2_temp__5825__auto____$1$$)) {
                        var $JSCompiler_inline_result$jscomp$978_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47280__$2_temp__5825__auto____$1$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$978_c__5501__auto__$$), $b__47282_nbr$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                        a: {
                          for (var $i__47281$$ = 0;;) {
                            if ($i__47281$$ < $size__5502__auto__$$) {
                              var $nbr$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$978_c__5501__auto__$$, $i__47281$$);
                              $APP.cljs.core.chunk_append($b__47282_nbr$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n$$, $nbr$$], null));
                              $i__47281$$ += 1;
                            } else {
                              $JSCompiler_inline_result$jscomp$978_c__5501__auto__$$ = !0;
                              break a;
                            }
                          }
                          $JSCompiler_inline_result$jscomp$978_c__5501__auto__$$ = void 0;
                        }
                        return $JSCompiler_inline_result$jscomp$978_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47282_nbr$$), $loom$graph$iter__47277_$_iter__47279$$($APP.cljs.core.chunk_rest($s__47280__$2_temp__5825__auto____$1$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47282_nbr$$), null);
                      }
                      $b__47282_nbr$$ = $APP.cljs.core.first($s__47280__$2_temp__5825__auto____$1$$);
                      return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n$$, $b__47282_nbr$$], null), $loom$graph$iter__47277_$_iter__47279$$($APP.cljs.core.rest($s__47280__$2_temp__5825__auto____$1$$)));
                    }
                    return null;
                  }
                };
              }($s__47278__$1$$, $n$$, $xs__6385__auto__$$, $temp__5825__auto__$$, $g__$1$$), null, null);
            };
          }($s__47278__$1$$, $fs__5500__auto__$jscomp$43_n$$, $xs__6385__auto__$$, $iterys__5499__auto__$jscomp$43_temp__5825__auto__$$, $g__$1$$);
          if ($fs__5500__auto__$jscomp$43_n$$ = $APP.cljs.core.seq($iterys__5499__auto__$jscomp$43_temp__5825__auto__$$(loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g__$1$$, $fs__5500__auto__$jscomp$43_n$$)))) {
            return $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($fs__5500__auto__$jscomp$43_n$$, $loom$graph$iter__47277$$($APP.cljs.core.rest($s__47278__$1$$)));
          }
          $s__47278__$1$$ = $APP.cljs.core.rest($s__47278__$1$$);
        } else {
          return null;
        }
      }
    }, null, null);
  }(loom.graph.nodes($g__$1$$));
};
loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = function($g$$, $node$$) {
  return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(this.fsuccessors, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$node$$], 0));
};
loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(this, $node$$));
};
loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = function($g$$, $node$$) {
  return function $loom$graph$iter__47283$$($s__47284$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (;;) {
        var $s__47284__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47284$$);
        if ($s__47284__$2_temp__5825__auto__$$) {
          if ($APP.cljs.core.chunked_seq_QMARK_($s__47284__$2_temp__5825__auto__$$)) {
            var $JSCompiler_inline_result$jscomp$979_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47284__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$979_c__5501__auto__$$), $b__47286_n2$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
            a: {
              for (var $i__47285$$ = 0;;) {
                if ($i__47285$$ < $size__5502__auto__$$) {
                  var $n2$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$979_c__5501__auto__$$, $i__47285$$);
                  $APP.cljs.core.chunk_append($b__47286_n2$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$node$$, $n2$$], null));
                  $i__47285$$ += 1;
                } else {
                  $JSCompiler_inline_result$jscomp$979_c__5501__auto__$$ = !0;
                  break a;
                }
              }
              $JSCompiler_inline_result$jscomp$979_c__5501__auto__$$ = void 0;
            }
            return $JSCompiler_inline_result$jscomp$979_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47286_n2$$), $loom$graph$iter__47283$$($APP.cljs.core.chunk_rest($s__47284__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47286_n2$$), null);
          }
          $b__47286_n2$$ = $APP.cljs.core.first($s__47284__$2_temp__5825__auto__$$);
          return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$node$$, $b__47286_n2$$], null), $loom$graph$iter__47283$$($APP.cljs.core.rest($s__47284__$2_temp__5825__auto__$$)));
        }
        return null;
      }
    }, null, null);
  }(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(this, $node$$));
};
loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.some($APP.cljs.core.PersistentHashSet.createAsIfByAssoc([$node$$]), loom.graph.nodes(this));
};
loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = function($g$$, $n1$$, $n2$$) {
  return $APP.cljs.core.some($APP.cljs.core.PersistentHashSet.createAsIfByAssoc([new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n1$$, $n2$$], null)]), loom.graph.edges(this));
};
loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = function($g$$, $node$$) {
  return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(this.fpredecessors, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$node$$], 0));
};
loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = function($g$$, $node$$) {
  return $APP.cljs.core.count(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(this, $node$$));
};
loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = function($g$$, $node$$) {
  return function $loom$graph$iter__47287$$($s__47288$$) {
    return new $APP.cljs.core.LazySeq(null, function() {
      for (;;) {
        var $s__47288__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47288$$);
        if ($s__47288__$2_temp__5825__auto__$$) {
          if ($APP.cljs.core.chunked_seq_QMARK_($s__47288__$2_temp__5825__auto__$$)) {
            var $JSCompiler_inline_result$jscomp$980_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47288__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$980_c__5501__auto__$$), $b__47290_n2$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
            a: {
              for (var $i__47289$$ = 0;;) {
                if ($i__47289$$ < $size__5502__auto__$$) {
                  var $n2$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$980_c__5501__auto__$$, $i__47289$$);
                  $APP.cljs.core.chunk_append($b__47290_n2$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n2$$, $node$$], null));
                  $i__47289$$ += 1;
                } else {
                  $JSCompiler_inline_result$jscomp$980_c__5501__auto__$$ = !0;
                  break a;
                }
              }
              $JSCompiler_inline_result$jscomp$980_c__5501__auto__$$ = void 0;
            }
            return $JSCompiler_inline_result$jscomp$980_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47290_n2$$), $loom$graph$iter__47287$$($APP.cljs.core.chunk_rest($s__47288__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47290_n2$$), null);
          }
          $b__47290_n2$$ = $APP.cljs.core.first($s__47288__$2_temp__5825__auto__$$);
          return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$b__47290_n2$$, $node$$], null), $loom$graph$iter__47287$$($APP.cljs.core.rest($s__47288__$2_temp__5825__auto__$$)));
        }
        return null;
      }
    }, null, null);
  }(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(this, $node$$));
};
loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = function($g$$, $e$$) {
  return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(this, loom.graph.src($e$$), loom.graph.dest($e$$));
};
loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(this.fweight, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$n1$$, $n2$$], 0));
};
loom.graph.subgraph = function($g$$, $ns$$) {
  return loom.graph.remove_nodes_STAR_($g$$, $APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.set($ns$$), loom.graph.nodes($g$$)));
};
loom.graph.add_path = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$238_argseq__5756__auto__$$ = [], $len__5749__auto___47682$$ = arguments.length, $i__5750__auto___47683$$ = 0;;) {
    if ($i__5750__auto___47683$$ < $len__5749__auto___47682$$) {
      $args__5755__auto__$jscomp$238_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47683$$]), $i__5750__auto___47683$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$238_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$238_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$238_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$238_argseq__5756__auto__$$);
};
loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic = function($g$$, $nodes$$) {
  return loom.graph.add_edges_STAR_($g$$, $APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$3(2, 1, $nodes$$));
};
loom.graph.add_path.cljs$lang$maxFixedArity = 1;
loom.graph.add_path.cljs$lang$applyTo = function($seq47291_seq47291__$1$$) {
  var $G__47292$$ = $APP.cljs.core.first($seq47291_seq47291__$1$$);
  $seq47291_seq47291__$1$$ = $APP.cljs.core.next($seq47291_seq47291__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__47292$$, $seq47291_seq47291__$1$$);
};
loom.graph.add_cycle = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$239_argseq__5756__auto__$$ = [], $len__5749__auto___47685$$ = arguments.length, $i__5750__auto___47686$$ = 0;;) {
    if ($i__5750__auto___47686$$ < $len__5749__auto___47685$$) {
      $args__5755__auto__$jscomp$239_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47686$$]), $i__5750__auto___47686$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$239_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$239_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$239_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$239_argseq__5756__auto__$$);
};
loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic = function($g$$, $nodes$$) {
  return loom.graph.add_edges_STAR_($g$$, $APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$3(2, 1, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($nodes$$, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.first($nodes$$)], null))));
};
loom.graph.add_cycle.cljs$lang$maxFixedArity = 1;
loom.graph.add_cycle.cljs$lang$applyTo = function($seq47293_seq47293__$1$$) {
  var $G__47294$$ = $APP.cljs.core.first($seq47293_seq47293__$1$$);
  $seq47293_seq47293__$1$$ = $APP.cljs.core.next($seq47293_seq47293__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__47294$$, $seq47293_seq47293__$1$$);
};
loom.graph.graph_QMARK_ = function($g$$) {
  return $g$$ != null ? $APP.cljs.core.PROTOCOL_SENTINEL === $g$$.loom$graph$Graph$ ? !0 : $g$$.cljs$lang$protocol_mask$partition$ ? !1 : $APP.cljs.core.native_satisfies_QMARK_(loom.graph.Graph, $g$$) : $APP.cljs.core.native_satisfies_QMARK_(loom.graph.Graph, $g$$);
};
loom.graph.directed_QMARK_ = function($g$$) {
  return $g$$ != null ? $APP.cljs.core.PROTOCOL_SENTINEL === $g$$.loom$graph$Digraph$ ? !0 : $g$$.cljs$lang$protocol_mask$partition$ ? !1 : $APP.cljs.core.native_satisfies_QMARK_(loom.graph.Digraph, $g$$) : $APP.cljs.core.native_satisfies_QMARK_(loom.graph.Digraph, $g$$);
};
loom.graph.weighted_QMARK_ = function($g$$) {
  return $g$$ != null ? $APP.cljs.core.PROTOCOL_SENTINEL === $g$$.loom$graph$WeightedGraph$ ? !0 : $g$$.cljs$lang$protocol_mask$partition$ ? !1 : $APP.cljs.core.native_satisfies_QMARK_(loom.graph.WeightedGraph, $g$$) : $APP.cljs.core.native_satisfies_QMARK_(loom.graph.WeightedGraph, $g$$);
};
loom.graph.editable_QMARK_ = function($g$$) {
  return $g$$ != null ? $APP.cljs.core.PROTOCOL_SENTINEL === $g$$.loom$graph$EditableGraph$ ? !0 : $g$$.cljs$lang$protocol_mask$partition$ ? !1 : $APP.cljs.core.native_satisfies_QMARK_(loom.graph.EditableGraph, $g$$) : $APP.cljs.core.native_satisfies_QMARK_(loom.graph.EditableGraph, $g$$);
};
loom.graph.build_graph = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$240_argseq__5756__auto__$$ = [], $len__5749__auto___47688$$ = arguments.length, $i__5750__auto___47689$$ = 0;;) {
    if ($i__5750__auto___47689$$ < $len__5749__auto___47688$$) {
      $args__5755__auto__$jscomp$240_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47689$$]), $i__5750__auto___47689$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$240_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$240_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$240_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$240_argseq__5756__auto__$$);
};
loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic = function($g$$, $inits$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($g__$1$$, $init$$) {
    if (loom.graph.graph_QMARK_($init$$)) {
      return loom.graph.weighted_QMARK_($g__$1$$) && loom.graph.weighted_QMARK_($init$$) ? $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(loom.graph.add_edges, loom.graph.add_nodes_STAR_($g__$1$$, loom.graph.nodes($init$$)), function() {
        return function $loom$graph$build_$_iter__47335$$($s__47336$$) {
          return new $APP.cljs.core.LazySeq(null, function() {
            for (;;) {
              var $s__47336__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47336$$);
              if ($s__47336__$2_temp__5825__auto__$$) {
                if ($APP.cljs.core.chunked_seq_QMARK_($s__47336__$2_temp__5825__auto__$$)) {
                  var $JSCompiler_inline_result$jscomp$981_c__5501__auto__$jscomp$84_n2$$ = $APP.cljs.core.chunk_first($s__47336__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$981_c__5501__auto__$jscomp$84_n2$$), $b__47338_n1$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                  a: {
                    for (var $i__47337$$ = 0;;) {
                      if ($i__47337$$ < $size__5502__auto__$$) {
                        var $n2$jscomp$inline_5219_vec__47339$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$981_c__5501__auto__$jscomp$84_n2$$, $i__47337$$), $n1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$jscomp$inline_5219_vec__47339$$, 0, null);
                        $n2$jscomp$inline_5219_vec__47339$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$jscomp$inline_5219_vec__47339$$, 1, null);
                        $APP.cljs.core.chunk_append($b__47338_n1$$, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n1$$, $n2$jscomp$inline_5219_vec__47339$$, loom.graph.weight.cljs$core$IFn$_invoke$arity$3($init$$, $n1$$, $n2$jscomp$inline_5219_vec__47339$$)], null));
                        $i__47337$$ += 1;
                      } else {
                        $JSCompiler_inline_result$jscomp$981_c__5501__auto__$jscomp$84_n2$$ = !0;
                        break a;
                      }
                    }
                    $JSCompiler_inline_result$jscomp$981_c__5501__auto__$jscomp$84_n2$$ = void 0;
                  }
                  return $JSCompiler_inline_result$jscomp$981_c__5501__auto__$jscomp$84_n2$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47338_n1$$), $loom$graph$build_$_iter__47335$$($APP.cljs.core.chunk_rest($s__47336__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47338_n1$$), null);
                }
                $JSCompiler_inline_result$jscomp$981_c__5501__auto__$jscomp$84_n2$$ = $APP.cljs.core.first($s__47336__$2_temp__5825__auto__$$);
                $b__47338_n1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$981_c__5501__auto__$jscomp$84_n2$$, 0, null);
                $JSCompiler_inline_result$jscomp$981_c__5501__auto__$jscomp$84_n2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$981_c__5501__auto__$jscomp$84_n2$$, 1, null);
                return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$b__47338_n1$$, $JSCompiler_inline_result$jscomp$981_c__5501__auto__$jscomp$84_n2$$, loom.graph.weight.cljs$core$IFn$_invoke$arity$3($init$$, $b__47338_n1$$, $JSCompiler_inline_result$jscomp$981_c__5501__auto__$jscomp$84_n2$$)], null), $loom$graph$build_$_iter__47335$$($APP.cljs.core.rest($s__47336__$2_temp__5825__auto__$$)));
              }
              return null;
            }
          }, null, null);
        }(loom.graph.edges($init$$));
      }()), $APP.cljs$cst$2743$attrs, $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$2743$attrs.cljs$core$IFn$_invoke$arity$1($g__$1$$), $APP.cljs$cst$2743$attrs.cljs$core$IFn$_invoke$arity$1($init$$)], 0))) : $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(loom.graph.add_edges_STAR_(loom.graph.add_nodes_STAR_($g__$1$$, loom.graph.nodes($init$$)), loom.graph.edges($init$$)), $APP.cljs$cst$2743$attrs, $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$2743$attrs.cljs$core$IFn$_invoke$arity$1($g__$1$$), 
      $APP.cljs$cst$2743$attrs.cljs$core$IFn$_invoke$arity$1($init$$)], 0)));
    }
    if ($APP.cljs.core.map_QMARK_($init$$)) {
      var $es$$ = $APP.cljs.core.map_QMARK_($APP.cljs.core.val($APP.cljs.core.first($init$$))) ? function() {
        return function $loom$graph$build_$_iter__47345$$($s__47346$$) {
          return new $APP.cljs.core.LazySeq(null, function() {
            for (var $s__47346__$1$$ = $s__47346$$;;) {
              var $iterys__5499__auto__$jscomp$44_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47346__$1$$);
              if ($iterys__5499__auto__$jscomp$44_temp__5825__auto__$$) {
                var $xs__6385__auto__$$ = $iterys__5499__auto__$jscomp$44_temp__5825__auto__$$, $vec__47351$$ = $APP.cljs.core.first($xs__6385__auto__$$), $n$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__47351$$, 0, null), $fs__5500__auto__$jscomp$44_nbrs$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__47351$$, 1, null);
                $iterys__5499__auto__$jscomp$44_temp__5825__auto__$$ = function($s__47346__$1$$, $vec__47351$$, $n$$, $nbrs$$, $xs__6385__auto__$$, $temp__5825__auto__$$) {
                  return function $loom$graph$build_$_iter__47345_$_iter__47347$$($s__47348$$) {
                    return new $APP.cljs.core.LazySeq(null, function($s__47346__$1$$, $vec__47351$$, $n$$, $nbrs$$, $xs__6385__auto__$$, $temp__5825__auto__$$) {
                      return function() {
                        for (;;) {
                          var $s__47348__$2_temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__47348$$);
                          if ($s__47348__$2_temp__5825__auto____$1$$) {
                            if ($APP.cljs.core.chunked_seq_QMARK_($s__47348__$2_temp__5825__auto____$1$$)) {
                              var $JSCompiler_inline_result$jscomp$982_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47348__$2_temp__5825__auto____$1$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$982_c__5501__auto__$$), $b__47350_nbr$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                              a: {
                                for (var $i__47349$$ = 0;;) {
                                  if ($i__47349$$ < $size__5502__auto__$$) {
                                    var $vec__47354$jscomp$inline_5223_wt$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$982_c__5501__auto__$$, $i__47349$$), $nbr$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__47354$jscomp$inline_5223_wt$$, 0, null);
                                    $vec__47354$jscomp$inline_5223_wt$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__47354$jscomp$inline_5223_wt$$, 1, null);
                                    $APP.cljs.core.chunk_append($b__47350_nbr$$, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n$$, $nbr$$, $vec__47354$jscomp$inline_5223_wt$$], null));
                                    $i__47349$$ += 1;
                                  } else {
                                    $JSCompiler_inline_result$jscomp$982_c__5501__auto__$$ = !0;
                                    break a;
                                  }
                                }
                                $JSCompiler_inline_result$jscomp$982_c__5501__auto__$$ = void 0;
                              }
                              return $JSCompiler_inline_result$jscomp$982_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47350_nbr$$), $loom$graph$build_$_iter__47345_$_iter__47347$$($APP.cljs.core.chunk_rest($s__47348__$2_temp__5825__auto____$1$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47350_nbr$$), null);
                            }
                            $JSCompiler_inline_result$jscomp$982_c__5501__auto__$$ = $APP.cljs.core.first($s__47348__$2_temp__5825__auto____$1$$);
                            $b__47350_nbr$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$982_c__5501__auto__$$, 0, null);
                            $JSCompiler_inline_result$jscomp$982_c__5501__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($JSCompiler_inline_result$jscomp$982_c__5501__auto__$$, 1, null);
                            return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n$$, $b__47350_nbr$$, $JSCompiler_inline_result$jscomp$982_c__5501__auto__$$], null), $loom$graph$build_$_iter__47345_$_iter__47347$$($APP.cljs.core.rest($s__47348__$2_temp__5825__auto____$1$$)));
                          }
                          return null;
                        }
                      };
                    }($s__47346__$1$$, $vec__47351$$, $n$$, $nbrs$$, $xs__6385__auto__$$, $temp__5825__auto__$$), null, null);
                  };
                }($s__47346__$1$$, $vec__47351$$, $n$$, $fs__5500__auto__$jscomp$44_nbrs$$, $xs__6385__auto__$$, $iterys__5499__auto__$jscomp$44_temp__5825__auto__$$);
                if ($fs__5500__auto__$jscomp$44_nbrs$$ = $APP.cljs.core.seq($iterys__5499__auto__$jscomp$44_temp__5825__auto__$$($fs__5500__auto__$jscomp$44_nbrs$$))) {
                  return $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($fs__5500__auto__$jscomp$44_nbrs$$, $loom$graph$build_$_iter__47345$$($APP.cljs.core.rest($s__47346__$1$$)));
                }
                $s__47346__$1$$ = $APP.cljs.core.rest($s__47346__$1$$);
              } else {
                return null;
              }
            }
          }, null, null);
        }($init$$);
      }() : function() {
        return function $loom$graph$build_$_iter__47360$$($s__47361$$) {
          return new $APP.cljs.core.LazySeq(null, function() {
            for (var $s__47361__$1$$ = $s__47361$$;;) {
              var $iterys__5499__auto__$jscomp$45_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47361__$1$$);
              if ($iterys__5499__auto__$jscomp$45_temp__5825__auto__$$) {
                var $xs__6385__auto__$$ = $iterys__5499__auto__$jscomp$45_temp__5825__auto__$$, $vec__47366$$ = $APP.cljs.core.first($xs__6385__auto__$$), $n$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__47366$$, 0, null), $fs__5500__auto__$jscomp$45_nbrs$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__47366$$, 1, null);
                $iterys__5499__auto__$jscomp$45_temp__5825__auto__$$ = function($s__47361__$1$$, $vec__47366$$, $n$$, $nbrs$$, $xs__6385__auto__$$, $temp__5825__auto__$$) {
                  return function $loom$graph$build_$_iter__47360_$_iter__47362$$($s__47363$$) {
                    return new $APP.cljs.core.LazySeq(null, function($s__47361__$1$$, $vec__47366$$, $n$$, $nbrs$$, $xs__6385__auto__$$, $temp__5825__auto__$$) {
                      return function() {
                        for (;;) {
                          var $s__47363__$2_temp__5825__auto____$1$$ = $APP.cljs.core.seq($s__47363$$);
                          if ($s__47363__$2_temp__5825__auto____$1$$) {
                            if ($APP.cljs.core.chunked_seq_QMARK_($s__47363__$2_temp__5825__auto____$1$$)) {
                              var $JSCompiler_inline_result$jscomp$983_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47363__$2_temp__5825__auto____$1$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$983_c__5501__auto__$$), $b__47365_nbr$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                              a: {
                                for (var $i__47364$$ = 0;;) {
                                  if ($i__47364$$ < $size__5502__auto__$$) {
                                    var $nbr$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$983_c__5501__auto__$$, $i__47364$$);
                                    $APP.cljs.core.chunk_append($b__47365_nbr$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n$$, $nbr$$], null));
                                    $i__47364$$ += 1;
                                  } else {
                                    $JSCompiler_inline_result$jscomp$983_c__5501__auto__$$ = !0;
                                    break a;
                                  }
                                }
                                $JSCompiler_inline_result$jscomp$983_c__5501__auto__$$ = void 0;
                              }
                              return $JSCompiler_inline_result$jscomp$983_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47365_nbr$$), $loom$graph$build_$_iter__47360_$_iter__47362$$($APP.cljs.core.chunk_rest($s__47363__$2_temp__5825__auto____$1$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47365_nbr$$), null);
                            }
                            $b__47365_nbr$$ = $APP.cljs.core.first($s__47363__$2_temp__5825__auto____$1$$);
                            return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$n$$, $b__47365_nbr$$], null), $loom$graph$build_$_iter__47360_$_iter__47362$$($APP.cljs.core.rest($s__47363__$2_temp__5825__auto____$1$$)));
                          }
                          return null;
                        }
                      };
                    }($s__47361__$1$$, $vec__47366$$, $n$$, $nbrs$$, $xs__6385__auto__$$, $temp__5825__auto__$$), null, null);
                  };
                }($s__47361__$1$$, $vec__47366$$, $n$$, $fs__5500__auto__$jscomp$45_nbrs$$, $xs__6385__auto__$$, $iterys__5499__auto__$jscomp$45_temp__5825__auto__$$);
                if ($fs__5500__auto__$jscomp$45_nbrs$$ = $APP.cljs.core.seq($iterys__5499__auto__$jscomp$45_temp__5825__auto__$$($fs__5500__auto__$jscomp$45_nbrs$$))) {
                  return $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($fs__5500__auto__$jscomp$45_nbrs$$, $loom$graph$build_$_iter__47360$$($APP.cljs.core.rest($s__47361__$1$$)));
                }
                $s__47361__$1$$ = $APP.cljs.core.rest($s__47361__$1$$);
              } else {
                return null;
              }
            }
          }, null, null);
        }($init$$);
      }();
      return loom.graph.add_edges_STAR_(loom.graph.add_nodes_STAR_($g__$1$$, $APP.cljs.core.keys($init$$)), $es$$);
    }
    return $APP.cljs.core.sequential_QMARK_($init$$) ? loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic($g__$1$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$init$$], 0)) : loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic($g__$1$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$init$$], 0));
  }, $g$$, $inits$$);
};
loom.graph.build_graph.cljs$lang$maxFixedArity = 1;
loom.graph.build_graph.cljs$lang$applyTo = function($seq47299_seq47299__$1$$) {
  var $G__47300$$ = $APP.cljs.core.first($seq47299_seq47299__$1$$);
  $seq47299_seq47299__$1$$ = $APP.cljs.core.next($seq47299_seq47299__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__47300$$, $seq47299_seq47299__$1$$);
};
loom.graph.graph = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$241_argseq__5756__auto__$$ = [], $len__5749__auto___47699$$ = arguments.length, $i__5750__auto___47700$$ = 0;;) {
    if ($i__5750__auto___47700$$ < $len__5749__auto___47699$$) {
      $args__5755__auto__$jscomp$241_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47700$$]), $i__5750__auto___47700$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$241_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$241_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$241_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$241_argseq__5756__auto__$$);
};
loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic = function($inits$$) {
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph, new loom.graph.BasicEditableGraph($APP.cljs.core.PersistentHashSet.EMPTY, $APP.cljs.core.PersistentArrayMap.EMPTY, null, null, null), $inits$$);
};
loom.graph.graph.cljs$lang$maxFixedArity = 0;
loom.graph.graph.cljs$lang$applyTo = function($seq47369$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq47369$$));
};
loom.graph.digraph = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$242_argseq__5756__auto__$$ = [], $len__5749__auto___47702$$ = arguments.length, $i__5750__auto___47703$$ = 0;;) {
    if ($i__5750__auto___47703$$ < $len__5749__auto___47702$$) {
      $args__5755__auto__$jscomp$242_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47703$$]), $i__5750__auto___47703$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$242_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$242_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$242_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$242_argseq__5756__auto__$$);
};
loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic = function($inits$$) {
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph, new loom.graph.BasicEditableDigraph($APP.cljs.core.PersistentHashSet.EMPTY, $APP.cljs.core.PersistentArrayMap.EMPTY, $APP.cljs.core.PersistentArrayMap.EMPTY, null, null, null), $inits$$);
};
loom.graph.digraph.cljs$lang$maxFixedArity = 0;
loom.graph.digraph.cljs$lang$applyTo = function($seq47370$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq47370$$));
};
loom.graph.weighted_graph = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$243_argseq__5756__auto__$$ = [], $len__5749__auto___47705$$ = arguments.length, $i__5750__auto___47706$$ = 0;;) {
    if ($i__5750__auto___47706$$ < $len__5749__auto___47705$$) {
      $args__5755__auto__$jscomp$243_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47706$$]), $i__5750__auto___47706$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$243_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$243_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$243_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$243_argseq__5756__auto__$$);
};
loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic = function($inits$$) {
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph, new loom.graph.BasicEditableWeightedGraph($APP.cljs.core.PersistentHashSet.EMPTY, $APP.cljs.core.PersistentArrayMap.EMPTY, null, null, null), $inits$$);
};
loom.graph.weighted_graph.cljs$lang$maxFixedArity = 0;
loom.graph.weighted_graph.cljs$lang$applyTo = function($seq47371$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq47371$$));
};
loom.graph.weighted_digraph = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$244_argseq__5756__auto__$$ = [], $len__5749__auto___47708$$ = arguments.length, $i__5750__auto___47709$$ = 0;;) {
    if ($i__5750__auto___47709$$ < $len__5749__auto___47708$$) {
      $args__5755__auto__$jscomp$244_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47709$$]), $i__5750__auto___47709$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$244_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$244_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$244_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$244_argseq__5756__auto__$$);
};
loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic = function($inits$$) {
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph, new loom.graph.BasicEditableWeightedDigraph($APP.cljs.core.PersistentHashSet.EMPTY, $APP.cljs.core.PersistentArrayMap.EMPTY, $APP.cljs.core.PersistentArrayMap.EMPTY, null, null, null), $inits$$);
};
loom.graph.weighted_digraph.cljs$lang$maxFixedArity = 0;
loom.graph.weighted_digraph.cljs$lang$applyTo = function($seq47372$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq47372$$));
};
loom.graph.fly_graph = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$245_argseq__5756__auto__$$ = [], $len__5749__auto___47711$$ = arguments.length, $i__5750__auto___47712$$ = 0;;) {
    if ($i__5750__auto___47712$$ < $len__5749__auto___47711$$) {
      $args__5755__auto__$jscomp$245_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47712$$]), $i__5750__auto___47712$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$245_argseq__5756__auto__$$ = 0 < $args__5755__auto__$jscomp$245_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$245_argseq__5756__auto__$$.slice(0), 0, null) : null;
  return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic($args__5755__auto__$jscomp$245_argseq__5756__auto__$$);
};
loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = function($nodes$$) {
  var $map__47375__$1_start$$ = $APP.cljs.core.__destructure_map($nodes$$);
  $nodes$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__47375__$1_start$$, $APP.cljs$cst$2023$nodes);
  var $edges$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__47375__$1_start$$, $APP.cljs$cst$2744$edges), $successors$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__47375__$1_start$$, cljs$cst$2745$successors), $predecessors$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__47375__$1_start$$, cljs$cst$2746$predecessors), $weight$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__47375__$1_start$$, cljs$cst$2747$weight);
  $map__47375__$1_start$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($map__47375__$1_start$$, $APP.cljs$cst$1574$start);
  var $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.truth_;
  var $JSCompiler_inline_result$$ = $APP.cljs.core.truth_($predecessors$$) ? $weight$$ : $predecessors$$;
  return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $JSCompiler_inline_result$$) ? new loom.graph.WeightedFlyDigraph($nodes$$, $edges$$, $successors$$, $predecessors$$, $weight$$, $map__47375__$1_start$$, null, null, null) : $APP.cljs.core.truth_($predecessors$$) ? new loom.graph.FlyDigraph($nodes$$, $edges$$, $successors$$, $predecessors$$, $map__47375__$1_start$$, null, null, null) : $APP.cljs.core.truth_($weight$$) ? new loom.graph.WeightedFlyGraph($nodes$$, $edges$$, $successors$$, 
  $weight$$, $map__47375__$1_start$$, null, null, null) : new loom.graph.FlyGraph($nodes$$, $edges$$, $successors$$, $map__47375__$1_start$$, null, null, null);
};
loom.graph.fly_graph.cljs$lang$maxFixedArity = 0;
loom.graph.fly_graph.cljs$lang$applyTo = function($seq47373$$) {
  return this.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.seq($seq47373$$));
};
loom.flow = {};
loom.flow.residual_capacity = function($capacity$$, $flow$$, $v1$$, $v2$$) {
  return function() {
    var $or__5025__auto__$$ = $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($flow$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$v2$$, $v1$$], null));
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : 0;
  }() + (function() {
    var $or__5025__auto__$$ = $capacity$$.cljs$core$IFn$_invoke$arity$2 ? $capacity$$.cljs$core$IFn$_invoke$arity$2($v1$$, $v2$$) : $capacity$$.call(null, $v1$$, $v2$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : 0;
  }() - function() {
    var $or__5025__auto__$$ = $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($flow$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$v1$$, $v2$$], null));
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : 0;
  }());
};
loom.flow.flow_balance = function($G__46990_adj_list_flow$$) {
  var $G__46988_out$$ = $APP.cljs.core.PersistentArrayMap.EMPTY, $G__46989_in$$$ = $APP.cljs.core.PersistentArrayMap.EMPTY;
  for ($G__46990_adj_list_flow$$ = $APP.cljs.core.seq($G__46990_adj_list_flow$$);;) {
    var $node$jscomp$279_temp__5823__auto__$$ = $APP.cljs.core.first($G__46990_adj_list_flow$$);
    if ($APP.cljs.core.truth_($node$jscomp$279_temp__5823__auto__$$)) {
      var $neighbours_vec__46886$$ = $node$jscomp$279_temp__5823__auto__$$;
      $node$jscomp$279_temp__5823__auto__$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($neighbours_vec__46886$$, 0, null);
      $neighbours_vec__46886$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($neighbours_vec__46886$$, 1, null);
      $G__46988_out$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__46988_out$$, $node$jscomp$279_temp__5823__auto__$$, -$APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._PLUS_, $APP.cljs.core.vals($neighbours_vec__46886$$)));
      $G__46989_in$$$ = $APP.cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core._PLUS_, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$G__46989_in$$$, $neighbours_vec__46886$$], 0));
      $G__46990_adj_list_flow$$ = $APP.cljs.core.next($G__46990_adj_list_flow$$);
    } else {
      return $APP.cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core._PLUS_, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$G__46988_out$$, $G__46989_in$$$], 0));
    }
  }
};
loom.flow.satisfies_mass_balance_QMARK_ = function($flow$$, $source$$, $sink$$) {
  var $balance$$ = loom.flow.flow_balance($flow$$);
  return function() {
    var $or__5025__auto__$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($balance$$, $source$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : 0;
  }() <= 0 && function() {
    var $or__5025__auto__$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($balance$$, $source$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : 0;
  }() + function() {
    var $or__5025__auto__$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($balance$$, $sink$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : 0;
  }() === 0 && $APP.cljs.core.every_QMARK_($APP.cljs.core.zero_QMARK_, $APP.cljs.core.vals($APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic($balance$$, $source$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$sink$$], 0))));
};
loom.flow.satisfies_capacity_constraints_QMARK_ = function($flow$$, $capacity$$) {
  return $APP.cljs.core.every_QMARK_(function($flow_to_successors_p__46971$$) {
    var $node$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($flow_to_successors_p__46971$$, 0, null);
    $flow_to_successors_p__46971$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($flow_to_successors_p__46971$$, 1, null);
    return $APP.cljs.core.every_QMARK_(function($p__46976$$) {
      var $neighbor$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46976$$, 0, null);
      return $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__46976$$, 1, null) <= ($capacity$$.cljs$core$IFn$_invoke$arity$2 ? $capacity$$.cljs$core$IFn$_invoke$arity$2($node$$, $neighbor$$) : $capacity$$.call(null, $node$$, $neighbor$$));
    }, $APP.cljs.core.seq($flow_to_successors_p__46971$$));
  }, $APP.cljs.core.seq($flow$$));
};
loom.flow.is_admissible_flow_QMARK_ = function($flow$$, $capacity$$, $source$$, $sink$$) {
  return loom.flow.satisfies_mass_balance_QMARK_($flow$$, $source$$, $sink$$) && loom.flow.satisfies_capacity_constraints_QMARK_($flow$$, $capacity$$);
};
loom.flow.min_weight_along_path = function($path$$, $weight_fn$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.min, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($or__5025__auto__$$) {
    $or__5025__auto__$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($weight_fn$$, $or__5025__auto__$$);
    return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : 0;
  }, $APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$3(2, 1, $path$$)));
};
loom.flow.bf_find_augmenting_path = function($successors$$, $predecessors$$, $capacity$$, $flow$$, $s$$, $t$$) {
  return loom.alg_generic.bf_path(function($vertex$$) {
    return $APP.cljs.core.distinct.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2(function($p1__46985_SHARP_$$) {
      return loom.flow.residual_capacity($capacity$$, $flow$$, $vertex$$, $p1__46985_SHARP_$$) > 0;
    }, $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($successors$$.cljs$core$IFn$_invoke$arity$1 ? $successors$$.cljs$core$IFn$_invoke$arity$1($vertex$$) : $successors$$.call(null, $vertex$$), $predecessors$$.cljs$core$IFn$_invoke$arity$1 ? $predecessors$$.cljs$core$IFn$_invoke$arity$1($vertex$$) : $predecessors$$.call(null, $vertex$$))));
  }, $s$$, $t$$);
};
loom.flow.augment_along_path = function($flow$$, $capacity$$, $G__46994_path$$, $increase$$) {
  for (;;) {
    var $vn0$$ = $APP.cljs.core.first($G__46994_path$$), $vn1$$ = $APP.cljs.core.second($G__46994_path$$), $G__46995_flow_1_flow_2_forward_flow$$ = function() {
      var $or__5025__auto__$$ = $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($flow$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$vn0$$, $vn1$$], null));
      return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : 0;
    }(), $forward_capacity$$ = function() {
      var $or__5025__auto__$$ = $capacity$$.cljs$core$IFn$_invoke$arity$2 ? $capacity$$.cljs$core$IFn$_invoke$arity$2($vn0$$, $vn1$$) : $capacity$$.call(null, $vn0$$, $vn1$$);
      return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : 0;
    }() - $G__46995_flow_1_flow_2_forward_flow$$, $G__46992_reverse_flow$$ = function() {
      var $or__5025__auto__$$ = $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2($flow$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$vn1$$, $vn0$$], null));
      return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : 0;
    }(), $forward_increase$$ = function() {
      var $x__5113__auto__$$ = $forward_capacity$$, $y__5114__auto__$$ = $increase$$;
      return $x__5113__auto__$$ < $y__5114__auto__$$ ? $x__5113__auto__$$ : $y__5114__auto__$$;
    }(), $G__46993_pushback$$ = $increase$$ - $forward_increase$$;
    $G__46995_flow_1_flow_2_forward_flow$$ = $forward_increase$$ > 0 ? $APP.cljs.core.assoc_in($flow$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$vn0$$, $vn1$$], null), $G__46995_flow_1_flow_2_forward_flow$$ + $forward_increase$$) : $flow$$;
    $G__46995_flow_1_flow_2_forward_flow$$ = $G__46993_pushback$$ > 0 ? $APP.cljs.core.assoc_in($G__46995_flow_1_flow_2_forward_flow$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$vn1$$, $vn0$$], null), $G__46992_reverse_flow$$ - $G__46993_pushback$$) : $G__46995_flow_1_flow_2_forward_flow$$;
    if ($G__46993_pushback$$ > $G__46992_reverse_flow$$) {
      throw Object(["Path augmentation failure: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($vn0$$), " ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($vn1$$)].join(""));
    }
    if ($APP.cljs.core.count($G__46994_path$$) > 2) {
      $G__46992_reverse_flow$$ = $G__46995_flow_1_flow_2_forward_flow$$, $G__46993_pushback$$ = $capacity$$, $G__46994_path$$ = $APP.cljs.core.next($G__46994_path$$), $G__46995_flow_1_flow_2_forward_flow$$ = $increase$$, $flow$$ = $G__46992_reverse_flow$$, $capacity$$ = $G__46993_pushback$$, $increase$$ = $G__46995_flow_1_flow_2_forward_flow$$;
    } else {
      return $G__46995_flow_1_flow_2_forward_flow$$;
    }
  }
};
loom.flow.edmonds_karp = function($var_args$$) {
  switch(arguments.length) {
    case 5:
      return loom.flow.edmonds_karp.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return loom.flow.edmonds_karp.cljs$core$IFn$_invoke$arity$6(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.flow.edmonds_karp.cljs$core$IFn$_invoke$arity$5 = function($successors$$, $predecessors$$, $capacity$$, $source$$, $sink$$) {
  return loom.flow.edmonds_karp.cljs$core$IFn$_invoke$arity$6($successors$$, $predecessors$$, $capacity$$, $source$$, $sink$$, $APP.cljs.core.PersistentArrayMap.EMPTY);
};
loom.flow.edmonds_karp.cljs$core$IFn$_invoke$arity$6 = function($G__46997_successors$$, $G__46998_predecessors$$, $capacity$jscomp$8_value$$, $G__47000_source$$, $G__47001_sink$$, $G__47002_flow$$) {
  for (;;) {
    var $G__46999_temp__5823__auto__$$ = loom.flow.bf_find_augmenting_path($G__46997_successors$$, $G__46998_predecessors$$, $capacity$jscomp$8_value$$, $G__47002_flow$$, $G__47000_source$$, $G__47001_sink$$);
    if ($APP.cljs.core.truth_($G__46999_temp__5823__auto__$$)) {
      var $path$$ = $G__46999_temp__5823__auto__$$;
      $G__46999_temp__5823__auto__$$ = $capacity$jscomp$8_value$$;
      $G__47002_flow$$ = loom.flow.augment_along_path($G__47002_flow$$, $capacity$jscomp$8_value$$, $path$$, loom.flow.min_weight_along_path($path$$, $APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$3(loom.flow.residual_capacity, $capacity$jscomp$8_value$$, $G__47002_flow$$)));
      $capacity$jscomp$8_value$$ = $G__46999_temp__5823__auto__$$;
    } else {
      return $capacity$jscomp$8_value$$ = $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._PLUS_, $APP.cljs.core.vals($APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($G__47002_flow$$, $G__47000_source$$))), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__47002_flow$$, $capacity$jscomp$8_value$$], null);
    }
  }
};
loom.flow.edmonds_karp.cljs$lang$maxFixedArity = 6;
loom.alg = {};
loom.alg.traverse_all = function($nodes$$, $traverse$$) {
  return $APP.cljs.core.persistent_BANG_($APP.cljs.core.second($APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($p__47376_trav$$, $ctrav_n$$) {
    var $seen$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47376_trav$$, 0, null);
    $p__47376_trav$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47376_trav$$, 1, null);
    if ($APP.cljs.core.truth_($seen$$.cljs$core$IFn$_invoke$arity$1 ? $seen$$.cljs$core$IFn$_invoke$arity$1($ctrav_n$$) : $seen$$.call(null, $ctrav_n$$))) {
      return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$seen$$, $p__47376_trav$$], null);
    }
    $ctrav_n$$ = $traverse$$.cljs$core$IFn$_invoke$arity$3 ? $traverse$$.cljs$core$IFn$_invoke$arity$3($ctrav_n$$, $APP.cljs$cst$2720$seen, $seen$$) : $traverse$$.call(null, $ctrav_n$$, $APP.cljs$cst$2720$seen, $seen$$);
    return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($seen$$, $ctrav_n$$), $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.conj_BANG_, $p__47376_trav$$, $ctrav_n$$)], null);
  }, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.PersistentHashSet.EMPTY, $APP.cljs.core.transient$($APP.cljs.core.PersistentVector.EMPTY)], null), $nodes$$)));
};
loom.alg.pre_traverse = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$1 = function($g$$) {
  return loom.alg.traverse_all(loom.graph.nodes($g$$), $APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.pre_traverse, loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$)));
};
loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$2 = function($g$$, $start$$) {
  return loom.alg_generic.pre_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), $start$$);
};
loom.alg.pre_traverse.cljs$lang$maxFixedArity = 2;
loom.alg.pre_span = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return loom.alg.pre_span.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return loom.alg.pre_span.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.alg.pre_span.cljs$core$IFn$_invoke$arity$1 = function($g$$) {
  return $APP.cljs.core.second($APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($p__47393_span$$, $n$$) {
    var $cspan_seen$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47393_span$$, 0, null);
    $p__47393_span$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47393_span$$, 1, null);
    if ($APP.cljs.core.truth_($cspan_seen$$.cljs$core$IFn$_invoke$arity$1 ? $cspan_seen$$.cljs$core$IFn$_invoke$arity$1($n$$) : $cspan_seen$$.call(null, $n$$))) {
      return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$cspan_seen$$, $p__47393_span$$], null);
    }
    var $seen__$1$$ = loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), $n$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$2720$seen, $cspan_seen$$, cljs$cst$2721$return_seen, !0], 0));
    $cspan_seen$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($seen__$1$$, 0, null);
    $seen__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($seen__$1$$, 1, null);
    return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$seen__$1$$, $APP.cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$p__47393_span$$, $APP.cljs.core.PersistentArrayMap.createAsIfByAssoc([$n$$, $APP.cljs.core.PersistentVector.EMPTY]), $cspan_seen$$], 0))], null);
  }, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.PersistentHashSet.EMPTY, $APP.cljs.core.PersistentArrayMap.EMPTY], null), loom.graph.nodes($g$$)));
};
loom.alg.pre_span.cljs$core$IFn$_invoke$arity$2 = function($g$$, $start$$) {
  return loom.alg_generic.pre_span(loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), $start$$);
};
loom.alg.pre_span.cljs$lang$maxFixedArity = 2;
loom.alg.post_traverse = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    default:
      for (var $args_arr__5774__auto__$jscomp$81_argseq__5775__auto__$$ = [], $len__5749__auto___47822$$ = arguments.length, $i__5750__auto___47823$$ = 0;;) {
        if ($i__5750__auto___47823$$ < $len__5749__auto___47822$$) {
          $args_arr__5774__auto__$jscomp$81_argseq__5775__auto__$$.push(arguments[$i__5750__auto___47823$$]), $i__5750__auto___47823$$ += 1;
        } else {
          break;
        }
      }
      $args_arr__5774__auto__$jscomp$81_argseq__5775__auto__$$ = 2 < $args_arr__5774__auto__$jscomp$81_argseq__5775__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args_arr__5774__auto__$jscomp$81_argseq__5775__auto__$$.slice(2), 0, null) : null;
      return loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args_arr__5774__auto__$jscomp$81_argseq__5775__auto__$$);
  }
};
loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$1 = function($g$$) {
  return loom.alg.traverse_all(loom.graph.nodes($g$$), $APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.post_traverse, loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$)));
};
loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic = function($g$$, $start$$, $opts$$) {
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$4(loom.alg_generic.post_traverse, loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), $start$$, $opts$$);
};
loom.alg.post_traverse.cljs$lang$applyTo = function($G__47405_seq47403$$) {
  var $G__47404$$ = $APP.cljs.core.first($G__47405_seq47403$$), $seq47403__$1_seq47403__$2$$ = $APP.cljs.core.next($G__47405_seq47403$$);
  $G__47405_seq47403$$ = $APP.cljs.core.first($seq47403__$1_seq47403__$2$$);
  $seq47403__$1_seq47403__$2$$ = $APP.cljs.core.next($seq47403__$1_seq47403__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__47404$$, $G__47405_seq47403$$, $seq47403__$1_seq47403__$2$$);
};
loom.alg.post_traverse.cljs$lang$maxFixedArity = 2;
loom.alg.topsort = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return loom.alg.topsort.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return loom.alg.topsort.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.alg.topsort.cljs$core$IFn$_invoke$arity$1 = function($g$$) {
  var $G__47832_seen$jscomp$30_seen__$1$jscomp$10_seen__$2$$ = $APP.cljs.core.PersistentHashSet.EMPTY, $G__47830_G__47833_result$jscomp$146_result__$1$jscomp$8_result__$2$$ = $APP.cljs.core.List.EMPTY, $G__47415_G__47415__$1_G__47831_G__47834_first__47427_ns__$1$$ = $APP.cljs.core.seq(loom.graph.nodes($g$$)), $cresult_seq__47417_seq__47426_seq__47426__$1_temp__5825__auto__$$ = $APP.cljs.core.seq($G__47415_G__47415__$1_G__47831_G__47834_first__47427_ns__$1$$);
  $APP.cljs.core.first($cresult_seq__47417_seq__47426_seq__47426__$1_temp__5825__auto__$$);
  for ($APP.cljs.core.next($cresult_seq__47417_seq__47426_seq__47426__$1_temp__5825__auto__$$);;) {
    $cresult_seq__47417_seq__47426_seq__47426__$1_temp__5825__auto__$$ = $APP.cljs.core.seq($G__47415_G__47415__$1_G__47831_G__47834_first__47427_ns__$1$$);
    $G__47415_G__47415__$1_G__47831_G__47834_first__47427_ns__$1$$ = $APP.cljs.core.first($cresult_seq__47417_seq__47426_seq__47426__$1_temp__5825__auto__$$);
    $cresult_seq__47417_seq__47426_seq__47426__$1_temp__5825__auto__$$ = $APP.cljs.core.next($cresult_seq__47417_seq__47426_seq__47426__$1_temp__5825__auto__$$);
    var $n__$1$$ = $G__47415_G__47415__$1_G__47831_G__47834_first__47427_ns__$1$$;
    $G__47415_G__47415__$1_G__47831_G__47834_first__47427_ns__$1$$ = $cresult_seq__47417_seq__47426_seq__47426__$1_temp__5825__auto__$$;
    if ($APP.cljs.core.not($n__$1$$)) {
      return $G__47830_G__47833_result$jscomp$146_result__$1$jscomp$8_result__$2$$;
    }
    if (!$APP.cljs.core.truth_($G__47832_seen$jscomp$30_seen__$1$jscomp$10_seen__$2$$.cljs$core$IFn$_invoke$arity$1 ? $G__47832_seen$jscomp$30_seen__$1$jscomp$10_seen__$2$$.cljs$core$IFn$_invoke$arity$1($n__$1$$) : $G__47832_seen$jscomp$30_seen__$1$jscomp$10_seen__$2$$.call(null, $n__$1$$))) {
      if ($cresult_seq__47417_seq__47426_seq__47426__$1_temp__5825__auto__$$ = loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4(loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), $n__$1$$, $G__47832_seen$jscomp$30_seen__$1$jscomp$10_seen__$2$$, $G__47832_seen$jscomp$30_seen__$1$jscomp$10_seen__$2$$), $APP.cljs.core.truth_($cresult_seq__47417_seq__47426_seq__47426__$1_temp__5825__auto__$$)) {
        $G__47832_seen$jscomp$30_seen__$1$jscomp$10_seen__$2$$ = $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($G__47832_seen$jscomp$30_seen__$1$jscomp$10_seen__$2$$, $cresult_seq__47417_seq__47426_seq__47426__$1_temp__5825__auto__$$), $G__47830_G__47833_result$jscomp$146_result__$1$jscomp$8_result__$2$$ = $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($cresult_seq__47417_seq__47426_seq__47426__$1_temp__5825__auto__$$, $G__47830_G__47833_result$jscomp$146_result__$1$jscomp$8_result__$2$$);
      } else {
        return null;
      }
    }
  }
};
loom.alg.topsort.cljs$core$IFn$_invoke$arity$2 = function($g$$, $start$$) {
  return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2(loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), $start$$);
};
loom.alg.topsort.cljs$lang$maxFixedArity = 2;
loom.alg.bf_traverse = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      for (var $args_arr__5774__auto__$jscomp$82_argseq__5775__auto__$$ = [], $len__5749__auto___47836$$ = arguments.length, $i__5750__auto___47837$$ = 0;;) {
        if ($i__5750__auto___47837$$ < $len__5749__auto___47836$$) {
          $args_arr__5774__auto__$jscomp$82_argseq__5775__auto__$$.push(arguments[$i__5750__auto___47837$$]), $i__5750__auto___47837$$ += 1;
        } else {
          break;
        }
      }
      $args_arr__5774__auto__$jscomp$82_argseq__5775__auto__$$ = 2 < $args_arr__5774__auto__$jscomp$82_argseq__5775__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args_arr__5774__auto__$jscomp$82_argseq__5775__auto__$$.slice(2), 0, null) : null;
      return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], $args_arr__5774__auto__$jscomp$82_argseq__5775__auto__$$);
  }
};
loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$1 = function($g$$) {
  return $APP.cljs.core.first($APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($p__47437_predmap$$, $n$$) {
    var $cc$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47437_predmap$$, 0, null);
    $p__47437_predmap$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47437_predmap$$, 1, null);
    return $APP.cljs.core.contains_QMARK_($p__47437_predmap$$, $n$$) ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$cc$$, $p__47437_predmap$$], null) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($n__$1$$, $p__47444$$) {
      var $cc__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n__$1$$, 0, null);
      $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n__$1$$, 1, null);
      $n__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47444$$, 0, null);
      var $pm$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47444$$, 1, null);
      $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47444$$, 2, null);
      return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($cc__$1$$, $n__$1$$), $pm$$], null);
    }, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$cc$$, $p__47437_predmap$$], null), loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), $n$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$373$f, $APP.cljs.core.vector, $APP.cljs$cst$2720$seen, $p__47437_predmap$$], 0)));
  }, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.PersistentVector.EMPTY, $APP.cljs.core.PersistentArrayMap.EMPTY], null), loom.graph.nodes($g$$)));
};
loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$2 = function($g$$, $start$$) {
  return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), $start$$);
};
loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = function($g$$, $start$$, $opts$$) {
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$4(loom.alg_generic.bf_traverse, loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), $start$$, $opts$$);
};
loom.alg.bf_traverse.cljs$lang$applyTo = function($G__47433_seq47431$$) {
  var $G__47432$$ = $APP.cljs.core.first($G__47433_seq47431$$), $seq47431__$1_seq47431__$2$$ = $APP.cljs.core.next($G__47433_seq47431$$);
  $G__47433_seq47431$$ = $APP.cljs.core.first($seq47431__$1_seq47431__$2$$);
  $seq47431__$1_seq47431__$2$$ = $APP.cljs.core.next($seq47431__$1_seq47431__$2$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__47432$$, $G__47433_seq47431$$, $seq47431__$1_seq47431__$2$$);
};
loom.alg.bf_traverse.cljs$lang$maxFixedArity = 2;
loom.alg.bf_span = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return loom.alg.bf_span.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return loom.alg.bf_span.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.alg.bf_span.cljs$core$IFn$_invoke$arity$1 = function($g$$) {
  return loom.alg_generic.preds__GT_span($APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($predmap$$, $n$$) {
    return $APP.cljs.core.contains_QMARK_($predmap$$, $n$$) ? $predmap$$ : $APP.cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), $n$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$373$f, function($_$$, $pm$$, $___$1$$) {
      return $pm$$;
    }, $APP.cljs$cst$2720$seen, $predmap$$], 0)));
  }, $APP.cljs.core.PersistentArrayMap.EMPTY, loom.graph.nodes($g$$)));
};
loom.alg.bf_span.cljs$core$IFn$_invoke$arity$2 = function($g$$, $start$$) {
  return loom.alg_generic.bf_span(loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), $start$$);
};
loom.alg.bf_span.cljs$lang$maxFixedArity = 2;
loom.alg.bf_path = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$246_argseq__5756__auto__$$ = [], $len__5749__auto___47840$$ = arguments.length, $i__5750__auto___47841$$ = 0;;) {
    if ($i__5750__auto___47841$$ < $len__5749__auto___47840$$) {
      $args__5755__auto__$jscomp$246_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47841$$]), $i__5750__auto___47841$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$246_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$246_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$246_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return loom.alg.bf_path.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$246_argseq__5756__auto__$$);
};
loom.alg.bf_path.cljs$core$IFn$_invoke$arity$variadic = function($g$$, $start$$, $end$$, $opts$$) {
  return $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$5(loom.alg_generic.bf_path, loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), $start$$, $end$$, $opts$$);
};
loom.alg.bf_path.cljs$lang$maxFixedArity = 3;
loom.alg.bf_path.cljs$lang$applyTo = function($G__47462_seq47460$$) {
  var $G__47461$$ = $APP.cljs.core.first($G__47462_seq47460$$), $G__47463_seq47460__$1$$ = $APP.cljs.core.next($G__47462_seq47460$$);
  $G__47462_seq47460$$ = $APP.cljs.core.first($G__47463_seq47460__$1$$);
  var $seq47460__$2_seq47460__$3$$ = $APP.cljs.core.next($G__47463_seq47460__$1$$);
  $G__47463_seq47460__$1$$ = $APP.cljs.core.first($seq47460__$2_seq47460__$3$$);
  $seq47460__$2_seq47460__$3$$ = $APP.cljs.core.next($seq47460__$2_seq47460__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__47461$$, $G__47462_seq47460$$, $G__47463_seq47460__$1$$, $seq47460__$2_seq47460__$3$$);
};
loom.alg.bf_path_bi = function($g$$, $start$$, $end$$) {
  return loom.graph.directed_QMARK_($g$$) ? loom.alg_generic.bf_path_bi(loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1($g$$), $start$$, $end$$) : loom.alg_generic.bf_path_bi(loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), $start$$, $end$$);
};
loom.alg.dijkstra_traverse = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$1 = function($g$$) {
  return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), loom.graph.weight.cljs$core$IFn$_invoke$arity$1($g$$), $APP.cljs.core.first(loom.graph.nodes($g$$)));
};
loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$2 = function($g$$, $start$$) {
  return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4(loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), loom.graph.weight.cljs$core$IFn$_invoke$arity$1($g$$), $start$$, $APP.cljs.core.vector);
};
loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = function($g$$, $start$$, $f$$) {
  return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4(loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), loom.graph.weight.cljs$core$IFn$_invoke$arity$1($g$$), $start$$, $f$$);
};
loom.alg.dijkstra_traverse.cljs$lang$maxFixedArity = 3;
loom.alg.dijkstra_span = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 2:
      return loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$1 = function($g$$) {
  return loom.alg_generic.dijkstra_span(loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), loom.graph.weight.cljs$core$IFn$_invoke$arity$1($g$$), $APP.cljs.core.first(loom.graph.nodes($g$$)));
};
loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$2 = function($g$$, $start$$) {
  return loom.alg_generic.dijkstra_span(loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), loom.graph.weight.cljs$core$IFn$_invoke$arity$1($g$$), $start$$);
};
loom.alg.dijkstra_span.cljs$lang$maxFixedArity = 2;
loom.alg.dijkstra_path_dist = function($g$$, $start$$, $end$$) {
  return loom.alg_generic.dijkstra_path_dist(loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$), loom.graph.weight.cljs$core$IFn$_invoke$arity$1($g$$), $start$$, $end$$);
};
loom.alg.dijkstra_path = function($g$$, $start$$, $end$$) {
  return $APP.cljs.core.first(loom.alg.dijkstra_path_dist($g$$, $start$$, $end$$));
};
loom.alg.can_relax_edge_QMARK_ = function($p__47485_v$$, $weight$$, $costs_ud$$) {
  var $u$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47485_v$$, 0, null);
  $p__47485_v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47485_v$$, 1, null);
  $p__47485_v$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($costs_ud$$, $p__47485_v$$);
  $costs_ud$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($costs_ud$$, $u$$);
  return $p__47485_v$$ > $costs_ud$$ + $weight$$;
};
loom.alg.relax_edge = function($p__47489$$, $weight$$, $p__47490$$) {
  var $u$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47489$$, 0, null), $v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47489$$, 1, null), $costs$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47490$$, 0, null), $paths$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47490$$, 1, null), $sum$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($costs$$, $u$$) + $weight$$;
  return loom.alg.can_relax_edge_QMARK_($p__47489$$, $weight$$, $costs$$) ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($costs$$, $v$$, $sum$$), $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($paths$$, $v$$, $u$$)], null) : $p__47490$$;
};
loom.alg.relax_edges = function($g$$, $start$$, $estimates$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($estimates__$1$$, $p__47498$$) {
    var $u$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47498$$, 0, null), $v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47498$$, 1, null);
    return loom.alg.relax_edge($p__47498$$, loom.graph.weight.cljs$core$IFn$_invoke$arity$3($g$$, $u$$, $v$$), $estimates__$1$$);
  }, $estimates$$, loom.graph.edges($g$$));
};
loom.alg.init_estimates = function($graph$$, $paths$jscomp$3_start$$) {
  var $init_paths_nodes$$ = $APP.cljs.core.disj.cljs$core$IFn$_invoke$arity$2(loom.graph.nodes($graph$$), $paths$jscomp$3_start$$);
  $graph$$ = $APP.cljs.core.PersistentArrayMap.createAsIfByAssoc([$paths$jscomp$3_start$$, 0]);
  $paths$jscomp$3_start$$ = $APP.cljs.core.PersistentArrayMap.createAsIfByAssoc([$paths$jscomp$3_start$$, null]);
  var $infinities_init_costs$$ = $APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(Infinity), $nils$$ = $APP.cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
  $infinities_init_costs$$ = $APP.cljs.core.interleave.cljs$core$IFn$_invoke$arity$2($init_paths_nodes$$, $infinities_init_costs$$);
  $init_paths_nodes$$ = $APP.cljs.core.interleave.cljs$core$IFn$_invoke$arity$2($init_paths_nodes$$, $nils$$);
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.assoc, $graph$$, $infinities_init_costs$$), $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.assoc, $paths$jscomp$3_start$$, $init_paths_nodes$$)], null);
};
loom.alg.bellman_ford = function($g$$, $start$$) {
  var $edges$$ = loom.alg.init_estimates($g$$, $start$$);
  $edges$$ = $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($estimates$$, $_$$) {
    return loom.alg.relax_edges($g$$, $start$$, $estimates$$);
  }, $edges$$, $APP.cljs.core.range.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.count(loom.graph.nodes($g$$)) - 1));
  var $costs$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($edges$$, 0, null), $paths$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($edges$$, 1, null);
  $edges$$ = loom.graph.edges($g$$);
  return $APP.cljs.core.truth_($APP.cljs.core.some(function($p__47508$$) {
    var $u$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47508$$, 0, null), $v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47508$$, 1, null);
    return loom.alg.can_relax_edge_QMARK_($p__47508$$, loom.graph.weight.cljs$core$IFn$_invoke$arity$3($g$$, $u$$, $v$$), $costs$$);
  }, $edges$$)) ? !1 : new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$costs$$, $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($final_paths$$, $v$$) {
    var $JSCompiler_temp_const$$ = $APP.cljs.core.assoc, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.cljs$core$IFn$_invoke$arity$3;
    a: {
      var $JSCompiler_inline_result$jscomp$989_node$$ = $v$$;
      for (var $G__47849$jscomp$inline_5237_path$$ = $APP.cljs.core.List.EMPTY;;) {
        if ($APP.cljs.core.truth_($JSCompiler_inline_result$jscomp$989_node$$)) {
          var $G__47848$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($paths$$, $JSCompiler_inline_result$jscomp$989_node$$);
          $G__47849$jscomp$inline_5237_path$$ = $APP.cljs.core.cons($JSCompiler_inline_result$jscomp$989_node$$, $G__47849$jscomp$inline_5237_path$$);
          $JSCompiler_inline_result$jscomp$989_node$$ = $G__47848$$;
        } else {
          $JSCompiler_inline_result$jscomp$989_node$$ = $G__47849$jscomp$inline_5237_path$$;
          break a;
        }
      }
      $JSCompiler_inline_result$jscomp$989_node$$ = void 0;
    }
    return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, $final_paths$$, $v$$, $JSCompiler_inline_result$jscomp$989_node$$);
  }, $APP.cljs.core.PersistentArrayMap.EMPTY, $APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2(function($p1__47503_SHARP_$$) {
    return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Infinity, $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($costs$$, $p1__47503_SHARP_$$));
  }, $APP.cljs.core.keys($paths$$)))], null);
};
loom.alg.dag_QMARK_ = function($g$$) {
  return $APP.cljs.core.boolean$(loom.alg.topsort.cljs$core$IFn$_invoke$arity$1($g$$));
};
loom.alg.shortest_path = function($g$$, $start$$, $end$$) {
  return loom.graph.weighted_QMARK_($g$$) ? loom.alg.dijkstra_path($g$$, $start$$, $end$$) : loom.alg.bf_path($g$$, $start$$, $end$$);
};
loom.alg.longest_shortest_path = function($g$$, $start$$) {
  return $APP.cljs.core.reverse(loom.graph.weighted_QMARK_($g$$) ? $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($path1$$, $p__47513_state$$) {
    var $n$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47513_state$$, 0, null);
    $p__47513_state$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47513_state$$, 1, null);
    $n$$ = loom.alg_generic.trace_path($APP.cljs.core.comp.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.second, $p__47513_state$$), $n$$);
    return $APP.cljs.core.count($path1$$) < $APP.cljs.core.count($n$$) ? $n$$ : $path1$$;
  }, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$start$$], null), loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3($g$$, $start$$, $APP.cljs.core.vector)) : $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($path1$$, $p__47518_path2$$) {
    var $n$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47518_path2$$, 0, null), $predmap$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47518_path2$$, 1, null);
    $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47518_path2$$, 2, null);
    $p__47518_path2$$ = loom.alg_generic.trace_path($predmap$$, $n$$);
    return $APP.cljs.core.count($path1$$) < $APP.cljs.core.count($p__47518_path2$$) ? $p__47518_path2$$ : $path1$$;
  }, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$start$$], null), loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$variadic($g$$, $start$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$373$f, $APP.cljs.core.vector], 0))));
};
loom.alg.bellman_ford_transform = function($wg$$) {
  var $q$$ = $APP.cljs.core.first($APP.cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.graph.has_node_QMARK_, $wg$$), $APP.cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1($APP.cljs.core.gensym))), $bf_results_es$$ = function() {
    return function $loom$alg$bellman_ford_transform_$_iter__47522$$($s__47523$$) {
      return new $APP.cljs.core.LazySeq(null, function() {
        for (;;) {
          var $s__47523__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47523$$);
          if ($s__47523__$2_temp__5825__auto__$$) {
            if ($APP.cljs.core.chunked_seq_QMARK_($s__47523__$2_temp__5825__auto__$$)) {
              var $JSCompiler_inline_result$jscomp$990_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47523__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$990_c__5501__auto__$$), $b__47525_v$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
              a: {
                for (var $i__47524$$ = 0;;) {
                  if ($i__47524$$ < $size__5502__auto__$$) {
                    var $v$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$990_c__5501__auto__$$, $i__47524$$);
                    $APP.cljs.core.chunk_append($b__47525_v$$, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$q$$, $v$$, 0], null));
                    $i__47524$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$990_c__5501__auto__$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$990_c__5501__auto__$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$990_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47525_v$$), $loom$alg$bellman_ford_transform_$_iter__47522$$($APP.cljs.core.chunk_rest($s__47523__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47525_v$$), null);
            }
            $b__47525_v$$ = $APP.cljs.core.first($s__47523__$2_temp__5825__auto__$$);
            return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$q$$, $b__47525_v$$, 0], null), $loom$alg$bellman_ford_transform_$_iter__47522$$($APP.cljs.core.rest($s__47523__$2_temp__5825__auto__$$)));
          }
          return null;
        }
      }, null, null);
    }(loom.graph.nodes($wg$$));
  }();
  $bf_results_es$$ = loom.alg.bellman_ford(loom.graph.add_edges_STAR_($wg$$, $bf_results_es$$), $q$$);
  if ($APP.cljs.core.truth_($bf_results_es$$)) {
    var $dist_q$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($bf_results_es$$, 0, null);
    $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($bf_results_es$$, 1, null);
    $bf_results_es$$ = $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.juxt.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.first, $APP.cljs.core.second, function($p__47531_v$$) {
      var $u$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47531_v$$, 0, null);
      $p__47531_v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47531_v$$, 1, null);
      return loom.graph.weight.cljs$core$IFn$_invoke$arity$3($wg$$, $u$$, $p__47531_v$$) + (($dist_q$$.cljs$core$IFn$_invoke$arity$1 ? $dist_q$$.cljs$core$IFn$_invoke$arity$1($u$$) : $dist_q$$.call(null, $u$$)) - ($dist_q$$.cljs$core$IFn$_invoke$arity$1 ? $dist_q$$.cljs$core$IFn$_invoke$arity$1($p__47531_v$$) : $dist_q$$.call(null, $p__47531_v$$)));
    }), loom.graph.edges($wg$$));
    return loom.graph.add_edges_STAR_($wg$$, $bf_results_es$$);
  }
  return !1;
};
loom.alg.johnson = function($g$$) {
  var $g__$1$$ = $APP.cljs.core.truth_(function() {
    var $and__5023__auto__$$ = loom.graph.weighted_QMARK_($g$$);
    return $and__5023__auto__$$ ? $APP.cljs.core.some($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2($APP.cljs.core._GT_, 0), $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(loom.graph.weight.cljs$core$IFn$_invoke$arity$1($g$$), loom.graph.edges($g$$))) : $and__5023__auto__$$;
  }()) ? loom.alg.bellman_ford_transform($g$$) : $g$$;
  if ($g__$1$$ === !1) {
    return !1;
  }
  var $dist$$ = loom.graph.weighted_QMARK_($g__$1$$) ? loom.graph.weight.cljs$core$IFn$_invoke$arity$1($g__$1$$) : function($u$$, $v$$) {
    return $APP.cljs.core.truth_(loom.graph.has_edge_QMARK_($g__$1$$, $u$$, $v$$)) ? 1 : null;
  };
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($acc$$, $node$$) {
    return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($acc$$, $node$$, loom.alg_generic.dijkstra_span(loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g__$1$$), $dist$$, $node$$));
  }, $APP.cljs.core.PersistentArrayMap.EMPTY, loom.graph.nodes($g__$1$$));
};
loom.alg.bf_all_pairs_shortest_paths = function($g$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($spans$$, $node$$) {
    return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($spans$$, $node$$, loom.alg.bf_span.cljs$core$IFn$_invoke$arity$2($g$$, $node$$));
  }, $APP.cljs.core.PersistentArrayMap.EMPTY, loom.graph.nodes($g$$));
};
loom.alg.all_pairs_shortest_paths = function($g$$) {
  return loom.graph.weighted_QMARK_($g$$) ? loom.alg.johnson($g$$) : loom.alg.bf_all_pairs_shortest_paths($g$$);
};
loom.alg.connected_components = function($g$$) {
  var $nb$$ = loom.graph.directed_QMARK_($g$$) ? function($p1__47538_SHARP_$$) {
    return $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2(loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g$$, $p1__47538_SHARP_$$), loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2($g$$, $p1__47538_SHARP_$$));
  } : loom.graph.successors.cljs$core$IFn$_invoke$arity$1($g$$);
  return $APP.cljs.core.first($APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($p__47540_pm$jscomp$6_predmap$$, $c$jscomp$272_n$$) {
    var $cc$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47540_pm$jscomp$6_predmap$$, 0, null);
    $p__47540_pm$jscomp$6_predmap$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47540_pm$jscomp$6_predmap$$, 1, null);
    if ($APP.cljs.core.contains_QMARK_($p__47540_pm$jscomp$6_predmap$$, $c$jscomp$272_n$$)) {
      return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$cc$$, $p__47540_pm$jscomp$6_predmap$$], null);
    }
    $p__47540_pm$jscomp$6_predmap$$ = $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($n__$1$$, $p__47548$$) {
      var $c$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n__$1$$, 0, null);
      $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n__$1$$, 1, null);
      $n__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47548$$, 0, null);
      var $pm$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47548$$, 1, null);
      $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47548$$, 2, null);
      return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($c$$, $n__$1$$), $pm$$], null);
    }, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.PersistentVector.EMPTY, null], null), loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic($nb$$, $c$jscomp$272_n$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$373$f, $APP.cljs.core.vector, $APP.cljs$cst$2720$seen, $p__47540_pm$jscomp$6_predmap$$], 0)));
    $c$jscomp$272_n$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47540_pm$jscomp$6_predmap$$, 0, null);
    $p__47540_pm$jscomp$6_predmap$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47540_pm$jscomp$6_predmap$$, 1, null);
    return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($cc$$, $c$jscomp$272_n$$), $p__47540_pm$jscomp$6_predmap$$], null);
  }, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.PersistentVector.EMPTY, $APP.cljs.core.PersistentArrayMap.EMPTY], null), loom.graph.nodes($g$$)));
};
loom.alg.connected_QMARK_ = function($g$$) {
  return $APP.cljs.core.count($APP.cljs.core.first(loom.alg.connected_components($g$$))) === $APP.cljs.core.count(loom.graph.nodes($g$$));
};
loom.alg.scc = function($G__47851_G__47854_g$jscomp$321_stack$$) {
  var $gt$$ = loom.graph.transpose($G__47851_G__47854_g$jscomp$321_stack$$);
  $G__47851_G__47854_g$jscomp$321_stack$$ = $APP.cljs.core.reverse(loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$1($G__47851_G__47854_g$jscomp$321_stack$$));
  for (var $G__47852_c$jscomp$274_seen$$ = $APP.cljs.core.PersistentHashSet.EMPTY, $G__47853_G__47856_cc$$ = $APP.cljs.core.transient$($APP.cljs.core.PersistentVector.EMPTY);;) {
    if ($APP.cljs.core.empty_QMARK_($G__47851_G__47854_g$jscomp$321_stack$$)) {
      return $APP.cljs.core.persistent_BANG_($G__47853_G__47856_cc$$);
    }
    var $G__47855_JSCompiler_temp_const$jscomp$992_seen__$1$$ = $APP.cljs.core, $JSCompiler_temp_const$$ = $G__47855_JSCompiler_temp_const$jscomp$992_seen__$1$$.truth_;
    var $G__47561$jscomp$inline_5243_JSCompiler_inline_result$$ = $APP.cljs.core.first($G__47851_G__47854_g$jscomp$321_stack$$);
    $G__47561$jscomp$inline_5243_JSCompiler_inline_result$$ = $G__47852_c$jscomp$274_seen$$.cljs$core$IFn$_invoke$arity$1 ? $G__47852_c$jscomp$274_seen$$.cljs$core$IFn$_invoke$arity$1($G__47561$jscomp$inline_5243_JSCompiler_inline_result$$) : $G__47852_c$jscomp$274_seen$$.call(null, $G__47561$jscomp$inline_5243_JSCompiler_inline_result$$);
    $JSCompiler_temp_const$$.call($G__47855_JSCompiler_temp_const$jscomp$992_seen__$1$$, $G__47561$jscomp$inline_5243_JSCompiler_inline_result$$) ? $G__47851_G__47854_g$jscomp$321_stack$$ = $APP.cljs.core.rest($G__47851_G__47854_g$jscomp$321_stack$$) : ($G__47855_JSCompiler_temp_const$jscomp$992_seen__$1$$ = loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic($gt$$, $APP.cljs.core.first($G__47851_G__47854_g$jscomp$321_stack$$), $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$2720$seen, 
    $G__47852_c$jscomp$274_seen$$, cljs$cst$2721$return_seen, !0], 0)), $G__47852_c$jscomp$274_seen$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__47855_JSCompiler_temp_const$jscomp$992_seen__$1$$, 0, null), $G__47855_JSCompiler_temp_const$jscomp$992_seen__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__47855_JSCompiler_temp_const$jscomp$992_seen__$1$$, 1, null), $G__47851_G__47854_g$jscomp$321_stack$$ = $APP.cljs.core.rest($G__47851_G__47854_g$jscomp$321_stack$$), $G__47853_G__47856_cc$$ = 
    $APP.cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2($G__47853_G__47856_cc$$, $G__47852_c$jscomp$274_seen$$), $G__47852_c$jscomp$274_seen$$ = $G__47855_JSCompiler_temp_const$jscomp$992_seen__$1$$);
  }
};
loom.alg.strongly_connected_QMARK_ = function($g$$) {
  return $APP.cljs.core.count($APP.cljs.core.first(loom.alg.scc($g$$))) === $APP.cljs.core.count(loom.graph.nodes($g$$));
};
loom.alg.connect = function($g$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(loom.graph.add_edges, $g$$, $APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$3(2, 1, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.first, loom.alg.connected_components($g$$))));
};
loom.alg.density = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$247_argseq__5756__auto__$$ = [], $len__5749__auto___47857$$ = arguments.length, $i__5750__auto___47858$$ = 0;;) {
    if ($i__5750__auto___47858$$ < $len__5749__auto___47857$$) {
      $args__5755__auto__$jscomp$247_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47858$$]), $i__5750__auto___47858$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$247_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$247_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$247_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return loom.alg.density.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$247_argseq__5756__auto__$$);
};
loom.alg.density.cljs$core$IFn$_invoke$arity$variadic = function($g$$, $loops_map__47570__$1_p__47569$$) {
  $loops_map__47570__$1_p__47569$$ = $APP.cljs.core.__destructure_map($loops_map__47570__$1_p__47569$$);
  $loops_map__47570__$1_p__47569$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($loops_map__47570__$1_p__47569$$, cljs$cst$2748$loops, !1);
  var $order$$ = $APP.cljs.core.count(loom.graph.nodes($g$$));
  return $APP.cljs.core.count(loom.graph.edges($g$$)) / ($order$$ * ($APP.cljs.core.truth_($loops_map__47570__$1_p__47569$$) ? $order$$ : $order$$ - 1));
};
loom.alg.density.cljs$lang$maxFixedArity = 1;
loom.alg.density.cljs$lang$applyTo = function($seq47567_seq47567__$1$$) {
  var $G__47568$$ = $APP.cljs.core.first($seq47567_seq47567__$1$$);
  $seq47567_seq47567__$1$$ = $APP.cljs.core.next($seq47567_seq47567__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__47568$$, $seq47567_seq47567__$1$$);
};
loom.alg.loners = function($g$$) {
  var $degree_total$$ = loom.graph.directed_QMARK_($g$$) ? function($p1__47571_SHARP_$$) {
    return loom.graph.in_degree($g$$, $p1__47571_SHARP_$$) + loom.graph.out_degree($g$$, $p1__47571_SHARP_$$);
  } : function($p1__47572_SHARP_$$) {
    return loom.graph.out_degree($g$$, $p1__47572_SHARP_$$);
  };
  return $APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.comp.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.zero_QMARK_, $degree_total$$), loom.graph.nodes($g$$));
};
loom.alg.distinct_edges = function($g$$) {
  return loom.graph.directed_QMARK_($g$$) ? loom.graph.edges($g$$) : $APP.cljs.core.second($APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($es$$, $e$$) {
    var $seen$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($es$$, 0, null);
    $es$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($es$$, 1, null);
    var $eset$$ = $APP.cljs.core.set($APP.cljs.core.take.cljs$core$IFn$_invoke$arity$2(2, $e$$));
    return $APP.cljs.core.truth_($seen$$.cljs$core$IFn$_invoke$arity$1 ? $seen$$.cljs$core$IFn$_invoke$arity$1($eset$$) : $seen$$.call(null, $eset$$)) ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$seen$$, $es$$], null) : new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($seen$$, $eset$$), $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($es$$, $e$$)], null);
  }, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.PersistentHashSet.EMPTY, $APP.cljs.core.PersistentVector.EMPTY], null), loom.graph.edges($g$$)));
};
loom.alg.bipartite_color = function($g$$) {
  var $color_component$$ = function($G__47860_coloring$$, $G__47861_start$$) {
    for (var $coloring__$1$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__47860_coloring$$, $G__47861_start$$, 1), $queue$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentQueue.EMPTY, $G__47861_start$$);;) {
      if ($APP.cljs.core.empty_QMARK_($queue$$)) {
        return $coloring__$1$$;
      }
      var $v$$ = $APP.cljs.core.peek($queue$$), $color$$ = 1 - ($coloring__$1$$.cljs$core$IFn$_invoke$arity$1 ? $coloring__$1$$.cljs$core$IFn$_invoke$arity$1($v$$) : $coloring__$1$$.call(null, $v$$)), $nbrs$$ = loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g$$, $v$$);
      if ($APP.cljs.core.truth_($APP.cljs.core.some(function($coloring__$1$$, $queue$$, $v$$, $color$$, $nbrs$$) {
        return function($p1__47580_SHARP_$$) {
          var $and__5023__auto__$$ = $coloring__$1$$.cljs$core$IFn$_invoke$arity$1 ? $coloring__$1$$.cljs$core$IFn$_invoke$arity$1($p1__47580_SHARP_$$) : $coloring__$1$$.call(null, $p1__47580_SHARP_$$);
          return $APP.cljs.core.truth_($and__5023__auto__$$) ? $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($coloring__$1$$.cljs$core$IFn$_invoke$arity$1 ? $coloring__$1$$.cljs$core$IFn$_invoke$arity$1($v$$) : $coloring__$1$$.call(null, $v$$), $coloring__$1$$.cljs$core$IFn$_invoke$arity$1 ? $coloring__$1$$.cljs$core$IFn$_invoke$arity$1($p1__47580_SHARP_$$) : $coloring__$1$$.call(null, $p1__47580_SHARP_$$)) : $and__5023__auto__$$;
        };
      }($coloring__$1$$, $queue$$, $v$$, $color$$, $nbrs$$), $nbrs$$))) {
        return null;
      }
      var $nbrs__$1$$ = $APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2($coloring__$1$$, $nbrs$$);
      $G__47860_coloring$$ = $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($coloring__$1$$, function() {
        return function($coloring__$1$$, $queue$$, $nbrs__$1$$, $v$$, $color$$, $nbrs$$) {
          return function $loom$alg$bipartite_color_$_color_component_$_iter__47633$$($s__47634$$) {
            return new $APP.cljs.core.LazySeq(null, function($coloring__$1$$, $queue$$, $nbrs__$1$$, $v$$, $color$$, $nbrs$$) {
              return function() {
                for (;;) {
                  var $s__47634__$2_temp__5825__auto__$$ = $APP.cljs.core.seq($s__47634$$);
                  if ($s__47634__$2_temp__5825__auto__$$) {
                    if ($APP.cljs.core.chunked_seq_QMARK_($s__47634__$2_temp__5825__auto__$$)) {
                      var $JSCompiler_inline_result$jscomp$994_c__5501__auto__$$ = $APP.cljs.core.chunk_first($s__47634__$2_temp__5825__auto__$$), $size__5502__auto__$$ = $APP.cljs.core.count($JSCompiler_inline_result$jscomp$994_c__5501__auto__$$), $b__47636_nbr$$ = $APP.cljs.core.chunk_buffer($size__5502__auto__$$);
                      a: {
                        for (var $i__47635$$ = 0;;) {
                          if ($i__47635$$ < $size__5502__auto__$$) {
                            var $nbr$$ = $APP.cljs.core._nth($JSCompiler_inline_result$jscomp$994_c__5501__auto__$$, $i__47635$$);
                            $APP.cljs.core.chunk_append($b__47636_nbr$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$nbr$$, $color$$], null));
                            $i__47635$$ += 1;
                          } else {
                            $JSCompiler_inline_result$jscomp$994_c__5501__auto__$$ = !0;
                            break a;
                          }
                        }
                        $JSCompiler_inline_result$jscomp$994_c__5501__auto__$$ = void 0;
                      }
                      return $JSCompiler_inline_result$jscomp$994_c__5501__auto__$$ ? $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47636_nbr$$), $loom$alg$bipartite_color_$_color_component_$_iter__47633$$($APP.cljs.core.chunk_rest($s__47634__$2_temp__5825__auto__$$))) : $APP.cljs.core.chunk_cons($APP.cljs.core.chunk($b__47636_nbr$$), null);
                    }
                    $b__47636_nbr$$ = $APP.cljs.core.first($s__47634__$2_temp__5825__auto__$$);
                    return $APP.cljs.core.cons(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$b__47636_nbr$$, $color$$], null), $loom$alg$bipartite_color_$_color_component_$_iter__47633$$($APP.cljs.core.rest($s__47634__$2_temp__5825__auto__$$)));
                  }
                  return null;
                }
              };
            }($coloring__$1$$, $queue$$, $nbrs__$1$$, $v$$, $color$$, $nbrs$$), null, null);
          };
        }($coloring__$1$$, $queue$$, $nbrs__$1$$, $v$$, $color$$, $nbrs$$)($nbrs__$1$$);
      }());
      $G__47861_start$$ = $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.pop($queue$$), $nbrs__$1$$);
      $coloring__$1$$ = $G__47860_coloring$$;
      $queue$$ = $G__47861_start$$;
    }
  }, $G__47649_G__47864_G__47866_coloring__$1_coloring__$2$$ = $APP.cljs.core.seq(loom.graph.nodes($g$$)), $G__47649__$1_first__47658_node__$1$$ = $APP.cljs.core.seq($G__47649_G__47864_G__47866_coloring__$1_coloring__$2$$);
  $APP.cljs.core.first($G__47649__$1_first__47658_node__$1$$);
  $APP.cljs.core.next($G__47649__$1_first__47658_node__$1$$);
  $G__47649__$1_first__47658_node__$1$$ = $G__47649_G__47864_G__47866_coloring__$1_coloring__$2$$;
  for ($G__47649_G__47864_G__47866_coloring__$1_coloring__$2$$ = $APP.cljs.core.PersistentArrayMap.EMPTY;;) {
    var $G__47865_nodes__$1_seq__47657_seq__47657__$1$$ = $APP.cljs.core.seq($G__47649__$1_first__47658_node__$1$$);
    $G__47649__$1_first__47658_node__$1$$ = $APP.cljs.core.first($G__47865_nodes__$1_seq__47657_seq__47657__$1$$);
    $G__47865_nodes__$1_seq__47657_seq__47657__$1$$ = $APP.cljs.core.next($G__47865_nodes__$1_seq__47657_seq__47657__$1$$);
    if ($APP.cljs.core.truth_($G__47649_G__47864_G__47866_coloring__$1_coloring__$2$$)) {
      if ($G__47649__$1_first__47658_node__$1$$ == null) {
        return $G__47649_G__47864_G__47866_coloring__$1_coloring__$2$$;
      }
      $APP.cljs.core.truth_($G__47649_G__47864_G__47866_coloring__$1_coloring__$2$$.cljs$core$IFn$_invoke$arity$1 ? $G__47649_G__47864_G__47866_coloring__$1_coloring__$2$$.cljs$core$IFn$_invoke$arity$1($G__47649__$1_first__47658_node__$1$$) : $G__47649_G__47864_G__47866_coloring__$1_coloring__$2$$.call(null, $G__47649__$1_first__47658_node__$1$$)) ? $G__47649__$1_first__47658_node__$1$$ = $G__47865_nodes__$1_seq__47657_seq__47657__$1$$ : ($G__47649_G__47864_G__47866_coloring__$1_coloring__$2$$ = 
      $color_component$$($G__47649_G__47864_G__47866_coloring__$1_coloring__$2$$, $G__47649__$1_first__47658_node__$1$$), $G__47649__$1_first__47658_node__$1$$ = $G__47865_nodes__$1_seq__47657_seq__47657__$1$$);
    } else {
      return null;
    }
  }
};
loom.alg.bipartite_QMARK_ = function($g$$) {
  return $APP.cljs.core.boolean$(loom.alg.bipartite_color($g$$));
};
loom.alg.bipartite_sets = function($g$jscomp$329_temp__5825__auto__$$) {
  $g$jscomp$329_temp__5825__auto__$$ = loom.alg.bipartite_color($g$jscomp$329_temp__5825__auto__$$);
  return $APP.cljs.core.truth_($g$jscomp$329_temp__5825__auto__$$) ? $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($p__47669_s2$$, $p__47670$$) {
    var $s1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47669_s2$$, 0, null);
    $p__47669_s2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47669_s2$$, 1, null);
    var $node$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47670$$, 0, null);
    return $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47670$$, 1, null) === 0 ? new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($s1$$, $node$$), $p__47669_s2$$], null) : new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$s1$$, $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($p__47669_s2$$, $node$$)], null);
  }, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.PersistentHashSet.EMPTY, $APP.cljs.core.PersistentHashSet.EMPTY], null), $g$jscomp$329_temp__5825__auto__$$) : null;
};
loom.alg.neighbor_colors = function($g$$, $node$$, $coloring$$) {
  var $successors$$ = loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g$$, $node$$);
  $g$$ = loom.graph.directed_QMARK_($g$$) ? $APP.cljs.core.concat.cljs$core$IFn$_invoke$arity$2($successors$$, loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2($g$$, $node$$)) : $successors$$;
  return $APP.cljs.core.set($APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.nil_QMARK_, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__47679_SHARP_$$) {
    return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($coloring$$, $p1__47679_SHARP_$$);
  }, $g$$)));
};
loom.alg.coloring_QMARK_ = function($g$$, $coloring$$) {
  return $APP.cljs.core.every_QMARK_(function($node$$) {
    return !$APP.cljs.core.contains_QMARK_(loom.alg.neighbor_colors($g$$, $node$$, $coloring$$), $coloring$$.cljs$core$IFn$_invoke$arity$1 ? $coloring$$.cljs$core$IFn$_invoke$arity$1($node$$) : $coloring$$.call(null, $node$$));
  }, loom.graph.nodes($g$$)) && $APP.cljs.core.every_QMARK_($APP.cljs.core.complement($APP.cljs.core.nil_QMARK_), $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__47696_SHARP_$$) {
    return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($coloring$$, $p1__47696_SHARP_$$);
  }, loom.graph.nodes($g$$)));
};
loom.alg.greedy_coloring = function($g$$) {
  for (var $G__47867_node_seq$$ = loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$1($g$$), $G__47868_coloring$$ = $APP.cljs.core.PersistentArrayMap.EMPTY, $G__47869_colors$$ = $APP.cljs.core.PersistentHashSet.EMPTY;;) {
    if ($APP.cljs.core.empty_QMARK_($G__47867_node_seq$$)) {
      return $G__47868_coloring$$;
    }
    var $node$$ = $APP.cljs.core.first($G__47867_node_seq$$), $node_color_possible_colors$$ = $APP.clojure.set.difference.cljs$core$IFn$_invoke$arity$2($G__47869_colors$$, loom.alg.neighbor_colors($g$$, $node$$, $G__47868_coloring$$));
    $node_color_possible_colors$$ = $APP.cljs.core.empty_QMARK_($node_color_possible_colors$$) ? $APP.cljs.core.count($G__47869_colors$$) : $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.min, $node_color_possible_colors$$);
    $G__47867_node_seq$$ = $APP.cljs.core.rest($G__47867_node_seq$$);
    $G__47868_coloring$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__47868_coloring$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$node$$, $node_color_possible_colors$$], null));
    $G__47869_colors$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__47869_colors$$, $node_color_possible_colors$$);
  }
};
loom.alg.max_flow = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$248_argseq__5756__auto__$$ = [], $len__5749__auto___47870$$ = arguments.length, $i__5750__auto___47871$$ = 0;;) {
    if ($i__5750__auto___47871$$ < $len__5749__auto___47870$$) {
      $args__5755__auto__$jscomp$248_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47871$$]), $i__5750__auto___47871$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$248_argseq__5756__auto__$$ = 3 < $args__5755__auto__$jscomp$248_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$248_argseq__5756__auto__$$.slice(3), 0, null) : null;
  return loom.alg.max_flow.cljs$core$IFn$_invoke$arity$variadic(arguments[0], arguments[1], arguments[2], $args__5755__auto__$jscomp$248_argseq__5756__auto__$$);
};
loom.alg.max_flow.cljs$core$IFn$_invoke$arity$variadic = function($c$jscomp$275_g$$, $flow_map_source$$, $flow_value$jscomp$1_sink$$, $map__47719__$1_method$$) {
  $map__47719__$1_method$$ = $APP.cljs.core.__destructure_map($map__47719__$1_method$$);
  $map__47719__$1_method$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$3($map__47719__$1_method$$, $APP.cljs$cst$2631$method, cljs$cst$2749$edmonds_karp);
  var $method_set$$ = new $APP.cljs.core.PersistentHashSet(null, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$2749$edmonds_karp, null], null), null), $n$$ = loom.graph.successors.cljs$core$IFn$_invoke$arity$1($c$jscomp$275_g$$), $i$$ = loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1($c$jscomp$275_g$$);
  $c$jscomp$275_g$$ = loom.graph.weight.cljs$core$IFn$_invoke$arity$1($c$jscomp$275_g$$);
  a: {
    switch($map__47719__$1_method$$ instanceof $APP.cljs.core.Keyword ? $map__47719__$1_method$$.fqn : null) {
      case "edmonds-karp":
        $flow_value$jscomp$1_sink$$ = loom.flow.edmonds_karp.cljs$core$IFn$_invoke$arity$5($n$$, $i$$, $c$jscomp$275_g$$, $flow_map_source$$, $flow_value$jscomp$1_sink$$);
        break a;
      default:
        throw $APP.cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Method not found.  Choose from: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1($method_set$$)].join(""), new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$2750$method_set, $method_set$$], null));
    }
  }
  $flow_map_source$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($flow_value$jscomp$1_sink$$, 0, null);
  $flow_value$jscomp$1_sink$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($flow_value$jscomp$1_sink$$, 1, null);
  return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$flow_map_source$$, $flow_value$jscomp$1_sink$$], null);
};
loom.alg.max_flow.cljs$lang$maxFixedArity = 3;
loom.alg.max_flow.cljs$lang$applyTo = function($G__47716_seq47714$$) {
  var $G__47715$$ = $APP.cljs.core.first($G__47716_seq47714$$), $G__47717_seq47714__$1$$ = $APP.cljs.core.next($G__47716_seq47714$$);
  $G__47716_seq47714$$ = $APP.cljs.core.first($G__47717_seq47714__$1$$);
  var $seq47714__$2_seq47714__$3$$ = $APP.cljs.core.next($G__47717_seq47714__$1$$);
  $G__47717_seq47714__$1$$ = $APP.cljs.core.first($seq47714__$2_seq47714__$3$$);
  $seq47714__$2_seq47714__$3$$ = $APP.cljs.core.next($seq47714__$2_seq47714__$3$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__47715$$, $G__47716_seq47714$$, $G__47717_seq47714__$1$$, $seq47714__$2_seq47714__$3$$);
};
loom.alg.edge_weights = function($wg$$, $v$$) {
  return $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__47724_SHARP_$$) {
    var $JSCompiler_temp_const$$ = $APP.cljs.core, $JSCompiler_temp_const$jscomp$0$$ = $JSCompiler_temp_const$$.vec, $JSCompiler_temp_const$jscomp$1$$ = $APP.cljs.core.PersistentVector, $JSCompiler_temp_const$jscomp$2$$ = $APP.cljs.core.PersistentVector.EMPTY_NODE, $JSCompiler_temp_const$jscomp$3$$ = $APP.cljs.core.PersistentVector, $JSCompiler_temp_const$jscomp$4$$ = $APP.cljs.core.PersistentVector.EMPTY_NODE;
    var $JSCompiler_inline_result$$ = loom.graph.weighted_QMARK_($wg$$) ? loom.graph.weight.cljs$core$IFn$_invoke$arity$3($wg$$, $v$$, $p1__47724_SHARP_$$) : 1;
    return $JSCompiler_temp_const$jscomp$0$$.call($JSCompiler_temp_const$$, new $JSCompiler_temp_const$jscomp$1$$(null, 2, 5, $JSCompiler_temp_const$jscomp$2$$, [$p1__47724_SHARP_$$, new $JSCompiler_temp_const$jscomp$3$$(null, 2, 5, $JSCompiler_temp_const$jscomp$4$$, [$v$$, $JSCompiler_inline_result$$], null)], null));
  }, loom.graph.successors.cljs$core$IFn$_invoke$arity$2($wg$$, $v$$));
};
loom.alg.prim_mst_edges = function($var_args$$) {
  switch(arguments.length) {
    case 1:
      return loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$1(arguments[0]);
    case 5:
      return loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$1 = function($wg$$) {
  if (loom.graph.directed_QMARK_($wg$$)) {
    throw Error("Spanning tree only defined for undirected graphs");
  }
  var $mst$$ = loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$5($wg$$, loom.graph.nodes($wg$$), null, $APP.cljs.core.PersistentHashSet.EMPTY, $APP.cljs.core.PersistentVector.EMPTY);
  return loom.graph.weighted_QMARK_($wg$$) ? $mst$$ : $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__47725_SHARP_$$) {
    return $APP.cljs.core.vec(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.first($p1__47725_SHARP_$$), $APP.cljs.core.second($p1__47725_SHARP_$$)], null));
  }, $mst$$);
};
loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$5 = function($G__47875_G__47880_wg$$, $G__47876_G__47881_n$$, $h$$, $G__47882_visited$$, $G__47879_G__47884_acc$$) {
  for (;;) {
    if ($APP.cljs.core.empty_QMARK_($G__47876_G__47881_n$$)) {
      return $G__47879_G__47884_acc$$;
    }
    if ($APP.cljs.core.empty_QMARK_($h$$)) {
      var $G__47878_v$$ = $APP.cljs.core.first($G__47876_G__47881_n$$);
      $h$$ = $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.tailrecursion.priority_map.priority_map_keyfn($APP.cljs.core.second), loom.alg.edge_weights($G__47875_G__47880_wg$$, $G__47878_v$$));
      $G__47876_G__47881_n$$ = $APP.cljs.core.disj.cljs$core$IFn$_invoke$arity$2($G__47876_G__47881_n$$, $G__47878_v$$);
      var $G__47877_u$$ = $h$$;
      $G__47878_v$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__47882_visited$$, $G__47878_v$$);
      $h$$ = $G__47877_u$$;
      $G__47882_visited$$ = $G__47878_v$$;
    } else {
      var $next_edge$$ = $APP.cljs.core.peek($h$$);
      $G__47877_u$$ = $APP.cljs.core.first($APP.cljs.core.second($next_edge$$));
      $G__47878_v$$ = $APP.cljs.core.first($next_edge$$);
      var $update_dist$$ = function($wg$$, $n$$, $h$$, $visited$$, $acc$$, $next_edge$$, $u$$, $v$$) {
        return function($h__$1$$, $p__47729_u__$1$$) {
          var $v__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47729_u__$1$$, 0, null), $vec__47733_wt$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47729_u__$1$$, 1, null);
          $p__47729_u__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__47733_wt$$, 0, null);
          $vec__47733_wt$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__47733_wt$$, 1, null);
          return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($h__$1$$, $v__$1$$) == null ? $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($h__$1$$, $v__$1$$, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$p__47729_u__$1$$, $vec__47733_wt$$], null)) : $APP.cljs.core.second($APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($h__$1$$, $v__$1$$)) > $vec__47733_wt$$ ? $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($h__$1$$, $v__$1$$, new $APP.cljs.core.PersistentVector(null, 
          2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$p__47729_u__$1$$, $vec__47733_wt$$], null)) : $h__$1$$;
        };
      }($G__47875_G__47880_wg$$, $G__47876_G__47881_n$$, $h$$, $G__47882_visited$$, $G__47879_G__47884_acc$$, $next_edge$$, $G__47877_u$$, $G__47878_v$$), $wt$$ = $APP.cljs.core.second($APP.cljs.core.second($next_edge$$)), $G__47883_visited__$1$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__47882_visited$$, $G__47878_v$$);
      $h$$ = $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($update_dist$$, $APP.cljs.core.pop($h$$), $APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2(function($wg$$, $n$$, $h$$, $visited$$, $acc$$, $wt$$, $visited__$1$$, $next_edge$$, $u$$, $v$$, $update_dist$$) {
        return function($p1__47726_SHARP_$$) {
          return $APP.cljs.core.complement($visited__$1$$)($APP.cljs.core.first($p1__47726_SHARP_$$));
        };
      }($G__47875_G__47880_wg$$, $G__47876_G__47881_n$$, $h$$, $G__47882_visited$$, $G__47879_G__47884_acc$$, $wt$$, $G__47883_visited__$1$$, $next_edge$$, $G__47877_u$$, $G__47878_v$$, $update_dist$$), loom.alg.edge_weights($G__47875_G__47880_wg$$, $G__47878_v$$)));
      $G__47876_G__47881_n$$ = $APP.cljs.core.disj.cljs$core$IFn$_invoke$arity$2($G__47876_G__47881_n$$, $G__47878_v$$);
      $G__47882_visited$$ = $h$$;
      $G__47883_visited__$1$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__47883_visited__$1$$, $G__47878_v$$);
      $G__47879_G__47884_acc$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__47879_G__47884_acc$$, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__47877_u$$, $G__47878_v$$, $wt$$], null));
      $h$$ = $G__47882_visited$$;
      $G__47882_visited$$ = $G__47883_visited__$1$$;
    }
  }
};
loom.alg.prim_mst_edges.cljs$lang$maxFixedArity = 5;
loom.alg.prim_mst = function($wg$$) {
  var $mst$$ = $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$2(loom.graph.weighted_graph, loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$1($wg$$));
  return $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.comp.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count, loom.graph.nodes)($wg$$), $APP.cljs.core.comp.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.count, loom.graph.nodes)($mst$$)) ? $mst$$ : $APP.cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.add_nodes, $mst$$, $APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2(function($p1__47749_SHARP_$$) {
    return loom.graph.out_degree($wg$$, $p1__47749_SHARP_$$) === 0;
  }, loom.graph.nodes($wg$$)));
};
loom.alg.astar_path = function($var_args$$) {
  switch(arguments.length) {
    case 4:
      return loom.alg.astar_path.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 6:
      return loom.alg.astar_path.cljs$core$IFn$_invoke$arity$6(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.alg.astar_path.cljs$core$IFn$_invoke$arity$4 = function($g$$, $src$$, $target$$, $heur_heur__$1$$) {
  $heur_heur__$1$$ = $heur_heur__$1$$ == null ? function($x$$, $y$$) {
    return 0;
  } : $heur_heur__$1$$;
  var $q$$ = $APP.tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.first, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$src$$, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [0, null, 0, 0], null)], 0));
  return loom.alg.astar_path.cljs$core$IFn$_invoke$arity$6($g$$, $src$$, $target$$, $heur_heur__$1$$, $q$$, $APP.cljs.core.PersistentHashMap.EMPTY);
};
loom.alg.astar_path.cljs$core$IFn$_invoke$arity$6 = function($g$jscomp$335_parent$$, $src$$, $target$$, $heur$$, $q$$, $G__47892_explored$jscomp$2_update_dist$$) {
  for (;;) {
    if ($APP.cljs.core.empty_QMARK_($q$$)) {
      throw $APP.cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Target not reachable from source", $APP.cljs.core.PersistentArrayMap.EMPTY);
    }
    if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.first($APP.cljs.core.peek($q$$)), $target$$)) {
      $APP.cljs.core.first($APP.cljs.core.peek($q$$));
      $g$jscomp$335_parent$$ = function() {
        var $fexpr__47752$$ = $APP.cljs.core.second($APP.cljs.core.peek($q$$));
        return $fexpr__47752$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__47752$$.cljs$core$IFn$_invoke$arity$1(1) : $fexpr__47752$$.call(null, 1);
      }();
      var $explored__$1$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__47892_explored$jscomp$2_update_dist$$, $target$$, $g$jscomp$335_parent$$);
      return function() {
        for (var $s$$ = $target$$, $G__47887_acc$$ = $APP.cljs.core.PersistentArrayMap.EMPTY;;) {
          if ($s$$ == null) {
            return $G__47887_acc$$;
          }
          if ($APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($s$$, $src$$)) {
            return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__47887_acc$$, $s$$, null);
          }
          var $G__47886$$ = $explored__$1$$.cljs$core$IFn$_invoke$arity$1 ? $explored__$1$$.cljs$core$IFn$_invoke$arity$1($s$$) : $explored__$1$$.call(null, $s$$);
          $G__47887_acc$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__47887_acc$$, $s$$, $explored__$1$$.cljs$core$IFn$_invoke$arity$1 ? $explored__$1$$.cljs$core$IFn$_invoke$arity$1($s$$) : $explored__$1$$.call(null, $s$$));
          $s$$ = $G__47886$$;
        }
      }();
    }
    var $G__47893_curr_node$$ = $APP.cljs.core.first($APP.cljs.core.peek($q$$)), $curr_dist$$ = function() {
      var $fexpr__47753$$ = $APP.cljs.core.second($APP.cljs.core.peek($q$$));
      return $fexpr__47753$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__47753$$.cljs$core$IFn$_invoke$arity$1(2) : $fexpr__47753$$.call(null, 2);
    }();
    $explored__$1$$ = $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($G__47892_explored$jscomp$2_update_dist$$, $G__47893_curr_node$$, function() {
      var $fexpr__47754$$ = $APP.cljs.core.second($APP.cljs.core.peek($q$$));
      return $fexpr__47754$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__47754$$.cljs$core$IFn$_invoke$arity$1(1) : $fexpr__47754$$.call(null, 1);
    }());
    var $nbrs$$ = $APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentHashSet.EMPTY, $APP.cljs.core.keys($explored__$1$$)), loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g$jscomp$335_parent$$, $G__47893_curr_node$$));
    $G__47892_explored$jscomp$2_update_dist$$ = function($g$$, $src$$, $target$$, $heur$$, $q$$, $explored$$, $curr_node$$, $curr_dist$$, $explored__$1$$, $nbrs$$) {
      return function($curr_node__$1$$, $act_curr_dist__$1$$, $q__$1$$, $v$$) {
        $act_curr_dist__$1$$ += loom.graph.weighted_QMARK_($g$$) ? loom.graph.weight.cljs$core$IFn$_invoke$arity$3($g$$, $curr_node__$1$$, $v$$) : 1;
        var $est$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($q__$1$$, $v$$) == null ? $heur$$.cljs$core$IFn$_invoke$arity$2 ? $heur$$.cljs$core$IFn$_invoke$arity$2($v$$, $target$$) : $heur$$.call(null, $v$$, $target$$) : function() {
          var $fexpr__47755$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($q__$1$$, $v$$);
          return $fexpr__47755$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__47755$$.cljs$core$IFn$_invoke$arity$1(3) : $fexpr__47755$$.call(null, 3);
        }();
        return $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($q__$1$$, $v$$) == null || function() {
          var $fexpr__47756$$ = $APP.cljs.core.get.cljs$core$IFn$_invoke$arity$2($q__$1$$, $v$$);
          return $fexpr__47756$$.cljs$core$IFn$_invoke$arity$1 ? $fexpr__47756$$.cljs$core$IFn$_invoke$arity$1(2) : $fexpr__47756$$.call(null, 2);
        }() > $act_curr_dist__$1$$ ? $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($q__$1$$, $v$$, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$act_curr_dist__$1$$ + $est$$, $curr_node__$1$$, $act_curr_dist__$1$$, $est$$], null)) : $q__$1$$;
      };
    }($g$jscomp$335_parent$$, $src$$, $target$$, $heur$$, $q$$, $G__47892_explored$jscomp$2_update_dist$$, $G__47893_curr_node$$, $curr_dist$$, $explored__$1$$, $nbrs$$);
    $G__47892_explored$jscomp$2_update_dist$$ = $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$3($G__47892_explored$jscomp$2_update_dist$$, $G__47893_curr_node$$, $curr_dist$$), $APP.cljs.core.pop($q$$), $nbrs$$);
    $G__47893_curr_node$$ = $explored__$1$$;
    $q$$ = $G__47892_explored$jscomp$2_update_dist$$;
    $G__47892_explored$jscomp$2_update_dist$$ = $G__47893_curr_node$$;
  }
};
loom.alg.astar_path.cljs$lang$maxFixedArity = 6;
loom.alg.astar_dist = function($g$$, $path$jscomp$75_src$$, $target$$, $heur$$) {
  $path$jscomp$75_src$$ = loom.alg.astar_path.cljs$core$IFn$_invoke$arity$4($g$$, $path$jscomp$75_src$$, $target$$, $heur$$);
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($c$$, $p__47760_v$$) {
    var $u$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47760_v$$, 0, null);
    $p__47760_v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47760_v$$, 1, null);
    return $p__47760_v$$ == null ? $c$$ : $c$$ + (loom.graph.weighted_QMARK_($g$$) ? loom.graph.weight.cljs$core$IFn$_invoke$arity$3($g$$, $p__47760_v$$, $u$$) : 1);
  }, 0, $path$jscomp$75_src$$);
};
loom.alg.degeneracy_ordering = function($g$$) {
  for (var $ordered_nodes$$ = $APP.cljs.core.PersistentVector.EMPTY, $G__47895_node_degs$$ = $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.tailrecursion.priority_map.priority_map(), $APP.cljs.core.zipmap(loom.graph.nodes($g$$), $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.graph.out_degree, $g$$), loom.graph.nodes($g$$)))), $k$$ = 0;;) {
    if ($APP.cljs.core.empty_QMARK_($G__47895_node_degs$$)) {
      return $ordered_nodes$$;
    }
    var $G__47896_vec__47777$$ = $APP.cljs.core.first($G__47895_node_degs$$), $n$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__47896_vec__47777$$, 0, null), $deg$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($G__47896_vec__47777$$, 1, null), $updated_degs$$ = $APP.cljs.core.into.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.PersistentArrayMap.EMPTY, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.juxt.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.first, $APP.cljs.core.comp.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.dec, 
    $APP.cljs.core.second)), $APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.second, $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.juxt.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.identity, $G__47895_node_degs$$), loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g$$, $n$$))))), $G__47894$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($ordered_nodes$$, $n$$);
    $G__47895_node_degs$$ = $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($ordered_nodes$$, $node_degs$$, $k$$, $vec__47777$$, $n$$, $deg$$, $updated_degs$$) {
      return function($n_ds$$, $d$$) {
        var $n__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($d$$, 0, null);
        $d$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($d$$, 1, null);
        return $APP.cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($n_ds$$, $n__$1$$, $d$$);
      };
    }($ordered_nodes$$, $G__47895_node_degs$$, $k$$, $G__47896_vec__47777$$, $n$$, $deg$$, $updated_degs$$), $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($G__47895_node_degs$$, $n$$), $updated_degs$$);
    $G__47896_vec__47777$$ = function() {
      var $x__5110__auto__$$ = $k$$, $y__5111__auto__$$ = $deg$$;
      return $x__5110__auto__$$ > $y__5111__auto__$$ ? $x__5110__auto__$$ : $y__5111__auto__$$;
    }();
    $ordered_nodes$$ = $G__47894$$;
    $k$$ = $G__47896_vec__47777$$;
  }
};
loom.alg.bk_gen = function($g$$, $p__47784_v_pivot$$, $G__47897_stack$$) {
  var $r$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47784_v_pivot$$, 0, null), $p$jscomp$157_p__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47784_v_pivot$$, 1, null), $x$jscomp$937_x__$1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47784_v_pivot$$, 2, null), $v$$ = $p__47784_v_pivot$$ = $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.max_key, $APP.cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.graph.out_degree, 
  $g$$)), $p$jscomp$157_p__$1$$);
  $p$jscomp$157_p__$1$$ = $APP.cljs.core.set($p$jscomp$157_p__$1$$);
  $x$jscomp$937_x__$1$$ = $APP.cljs.core.set($x$jscomp$937_x__$1$$);
  for (var $G__47900_stack__$1$$ = $G__47897_stack$$;;) {
    if ($v$$ == null) {
      return $G__47900_stack__$1$$;
    }
    var $succ_v$$ = $APP.cljs.core.set(loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g$$, $v$$));
    $G__47897_stack$$ = $APP.cljs.core.first($APP.clojure.set.difference.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.disj.cljs$core$IFn$_invoke$arity$2($p$jscomp$157_p__$1$$, $v$$), $APP.cljs.core.set(loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g$$, $p__47784_v_pivot$$))));
    var $G__47898$$ = $APP.cljs.core.disj.cljs$core$IFn$_invoke$arity$2($p$jscomp$157_p__$1$$, $v$$), $G__47899$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($x$jscomp$937_x__$1$$, $v$$);
    $G__47900_stack__$1$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__47900_stack__$1$$, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($r$$, $v$$), $APP.clojure.set.intersection.cljs$core$IFn$_invoke$arity$2($p$jscomp$157_p__$1$$, $succ_v$$), $APP.clojure.set.intersection.cljs$core$IFn$_invoke$arity$2($x$jscomp$937_x__$1$$, $succ_v$$)], null));
    $v$$ = $G__47897_stack$$;
    $p$jscomp$157_p__$1$$ = $G__47898$$;
    $x$jscomp$937_x__$1$$ = $G__47899$$;
  }
};
loom.alg.bk = function($g$$) {
  for (var $G__47901_G__47906_G__47911_G__47916_vs$$ = loom.alg.degeneracy_ordering($g$$), $G__47902_G__47907_G__47912_G__47917_max_clqs$$ = $APP.cljs.core.seq($APP.cljs.core.PersistentVector.EMPTY), $G__47908_G__47913_G__47918_p$$ = $APP.cljs.core.set(loom.graph.nodes($g$$)), $G__47909_G__47914_G__47919_x$$ = $APP.cljs.core.PersistentHashSet.EMPTY, $G__47903_G__47910_G__47915_G__47920_stack$$ = $APP.cljs.core.PersistentVector.EMPTY;;) {
    if ($APP.cljs.core.empty_QMARK_($G__47903_G__47910_G__47915_G__47920_stack$$) && $APP.cljs.core.empty_QMARK_($G__47901_G__47906_G__47911_G__47916_vs$$)) {
      return $G__47902_G__47907_G__47912_G__47917_max_clqs$$;
    }
    if ($APP.cljs.core.empty_QMARK_($G__47903_G__47910_G__47915_G__47920_stack$$)) {
      var $G__47905_s_p_v$$ = $APP.cljs.core.first($G__47901_G__47906_G__47911_G__47916_vs$$), $s_x_succ_v$$ = $APP.cljs.core.set(loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g$$, $G__47905_s_p_v$$));
      $G__47901_G__47906_G__47911_G__47916_vs$$ = $APP.cljs.core.rest($G__47901_G__47906_G__47911_G__47916_vs$$);
      $G__47903_G__47910_G__47915_G__47920_stack$$ = $APP.cljs.core.disj.cljs$core$IFn$_invoke$arity$2($G__47908_G__47913_G__47918_p$$, $G__47905_s_p_v$$);
      var $G__47904_r$$ = $APP.cljs.core.conj.cljs$core$IFn$_invoke$arity$2($G__47909_G__47914_G__47919_x$$, $G__47905_s_p_v$$);
      $G__47905_s_p_v$$ = new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.PersistentHashSet.createAsIfByAssoc([$G__47905_s_p_v$$]), $APP.clojure.set.intersection.cljs$core$IFn$_invoke$arity$2($G__47908_G__47913_G__47918_p$$, $s_x_succ_v$$), $APP.clojure.set.intersection.cljs$core$IFn$_invoke$arity$2($G__47909_G__47914_G__47919_x$$, $s_x_succ_v$$)], 
      null)], null);
      $G__47908_G__47913_G__47918_p$$ = $G__47903_G__47910_G__47915_G__47920_stack$$;
      $G__47909_G__47914_G__47919_x$$ = $G__47904_r$$;
      $G__47903_G__47910_G__47915_G__47920_stack$$ = $G__47905_s_p_v$$;
    } else {
      $s_x_succ_v$$ = $APP.cljs.core.peek($G__47903_G__47910_G__47915_G__47920_stack$$), $G__47904_r$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($s_x_succ_v$$, 0, null), $G__47905_s_p_v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($s_x_succ_v$$, 1, null), $s_x_succ_v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($s_x_succ_v$$, 2, null), $APP.cljs.core.empty_QMARK_($G__47905_s_p_v$$) && $APP.cljs.core.empty_QMARK_($s_x_succ_v$$) ? ($G__47902_G__47907_G__47912_G__47917_max_clqs$$ = 
      $APP.cljs.core.cons($G__47904_r$$, $G__47902_G__47907_G__47912_G__47917_max_clqs$$), $G__47903_G__47910_G__47915_G__47920_stack$$ = $APP.cljs.core.pop($G__47903_G__47910_G__47915_G__47920_stack$$)) : $G__47903_G__47910_G__47915_G__47920_stack$$ = $APP.cljs.core.empty_QMARK_($G__47905_s_p_v$$) ? $APP.cljs.core.pop($G__47903_G__47910_G__47915_G__47920_stack$$) : loom.alg.bk_gen($g$$, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$G__47904_r$$, $G__47905_s_p_v$$, 
      $s_x_succ_v$$], null), $APP.cljs.core.pop($G__47903_G__47910_G__47915_G__47920_stack$$));
    }
  }
};
loom.alg.maximal_cliques = function($g$$) {
  return loom.alg.bk($g$$);
};
loom.alg.subgraph_QMARK_ = function($g1$$, $g2$$) {
  var $and__5023__auto__$$ = $APP.cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(loom.graph.directed_QMARK_($g1$$), loom.graph.directed_QMARK_($g2$$));
  if ($and__5023__auto__$$) {
    var $edge_test_fn$$ = loom.graph.directed_QMARK_($g1$$) ? loom.graph.has_edge_QMARK_ : function($g$$, $x$$, $y$$) {
      var $or__5025__auto__$$ = loom.graph.has_edge_QMARK_($g$$, $x$$, $y$$);
      return $APP.cljs.core.truth_($or__5025__auto__$$) ? $or__5025__auto__$$ : loom.graph.has_edge_QMARK_($g$$, $y$$, $x$$);
    };
    return $APP.cljs.core.every_QMARK_(function($p1__47804_SHARP_$$) {
      return loom.graph.has_node_QMARK_($g2$$, $p1__47804_SHARP_$$);
    }, loom.graph.nodes($g1$$)) && $APP.cljs.core.every_QMARK_(function($p__47807_y$$) {
      var $x$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47807_y$$, 0, null);
      $p__47807_y$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47807_y$$, 1, null);
      return $edge_test_fn$$.cljs$core$IFn$_invoke$arity$3 ? $edge_test_fn$$.cljs$core$IFn$_invoke$arity$3($g2$$, $x$$, $p__47807_y$$) : $edge_test_fn$$.call(null, $g2$$, $x$$, $p__47807_y$$);
    }, loom.graph.edges($g1$$));
  }
  return $and__5023__auto__$$;
};
loom.alg.eql_QMARK_ = function($g1$$, $g2$$) {
  return loom.alg.subgraph_QMARK_($g1$$, $g2$$) && loom.alg.subgraph_QMARK_($g2$$, $g1$$);
};
loom.alg.isomorphism_QMARK_ = function($g1$$, $g2$$, $phi$$) {
  return loom.alg.eql_QMARK_($g2$$, loom.graph.add_edges_STAR_(loom.graph.add_nodes_STAR_(loom.graph.directed_QMARK_($g1$$) ? loom.graph.digraph() : loom.graph.graph(), $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($phi$$, loom.graph.nodes($g1$$))), $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p__47815_y$$) {
    var $x$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47815_y$$, 0, null);
    $p__47815_y$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47815_y$$, 1, null);
    return new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$phi$$.cljs$core$IFn$_invoke$arity$1 ? $phi$$.cljs$core$IFn$_invoke$arity$1($x$$) : $phi$$.call(null, $x$$), $phi$$.cljs$core$IFn$_invoke$arity$1 ? $phi$$.cljs$core$IFn$_invoke$arity$1($p__47815_y$$) : $phi$$.call(null, $p__47815_y$$)], null);
  }, loom.graph.edges($g1$$))));
};
loom.attr = {};
loom.attr.AttrGraph = function() {
};
var loom$attr$AttrGraph$add_attr$dyn_47613 = function() {
  var $G__47614$$ = null, $G__47614__4$$ = function($g$$, $node_or_edge$$, $k$$, $v$$) {
    var $m__5372__auto__$jscomp$260_m__5374__auto__$$ = loom.attr.add_attr[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
    if ($m__5372__auto__$jscomp$260_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$260_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$4 ? $m__5372__auto__$jscomp$260_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$4($g$$, $node_or_edge$$, $k$$, $v$$) : $m__5372__auto__$jscomp$260_m__5374__auto__$$.call(null, $g$$, $node_or_edge$$, $k$$, $v$$);
    }
    $m__5372__auto__$jscomp$260_m__5374__auto__$$ = loom.attr.add_attr._;
    if ($m__5372__auto__$jscomp$260_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$260_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$4 ? $m__5372__auto__$jscomp$260_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$4($g$$, $node_or_edge$$, $k$$, $v$$) : $m__5372__auto__$jscomp$260_m__5374__auto__$$.call(null, $g$$, $node_or_edge$$, $k$$, $v$$);
    }
    throw $APP.cljs.core.missing_protocol("AttrGraph.add-attr", $g$$);
  }, $G__47614__5$$ = function($g$$, $n1$$, $n2$$, $k$$, $v$$) {
    var $m__5372__auto__$jscomp$261_m__5374__auto__$$ = loom.attr.add_attr[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
    if ($m__5372__auto__$jscomp$261_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$261_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$5 ? $m__5372__auto__$jscomp$261_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$5($g$$, $n1$$, $n2$$, $k$$, $v$$) : $m__5372__auto__$jscomp$261_m__5374__auto__$$.call(null, $g$$, $n1$$, $n2$$, $k$$, $v$$);
    }
    $m__5372__auto__$jscomp$261_m__5374__auto__$$ = loom.attr.add_attr._;
    if ($m__5372__auto__$jscomp$261_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$261_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$5 ? $m__5372__auto__$jscomp$261_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$5($g$$, $n1$$, $n2$$, $k$$, $v$$) : $m__5372__auto__$jscomp$261_m__5374__auto__$$.call(null, $g$$, $n1$$, $n2$$, $k$$, $v$$);
    }
    throw $APP.cljs.core.missing_protocol("AttrGraph.add-attr", $g$$);
  };
  $G__47614$$ = function($g$$, $n1$$, $n2$$, $k$$, $v$$) {
    switch(arguments.length) {
      case 4:
        return $G__47614__4$$.call(this, $g$$, $n1$$, $n2$$, $k$$);
      case 5:
        return $G__47614__5$$.call(this, $g$$, $n1$$, $n2$$, $k$$, $v$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__47614$$.cljs$core$IFn$_invoke$arity$4 = $G__47614__4$$;
  $G__47614$$.cljs$core$IFn$_invoke$arity$5 = $G__47614__5$$;
  return $G__47614$$;
}();
loom.attr.add_attr = function($var_args$$) {
  switch(arguments.length) {
    case 4:
      return loom.attr.add_attr.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return loom.attr.add_attr.cljs$core$IFn$_invoke$arity$5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.attr.add_attr.cljs$core$IFn$_invoke$arity$4 = function($g$$, $node_or_edge$$, $k$$, $v$$) {
  return $g$$ != null && $g$$.loom$attr$AttrGraph$add_attr$arity$4 != null ? $g$$.loom$attr$AttrGraph$add_attr$arity$4($g$$, $node_or_edge$$, $k$$, $v$$) : loom$attr$AttrGraph$add_attr$dyn_47613($g$$, $node_or_edge$$, $k$$, $v$$);
};
loom.attr.add_attr.cljs$core$IFn$_invoke$arity$5 = function($g$$, $n1$$, $n2$$, $k$$, $v$$) {
  return $g$$ != null && $g$$.loom$attr$AttrGraph$add_attr$arity$5 != null ? $g$$.loom$attr$AttrGraph$add_attr$arity$5($g$$, $n1$$, $n2$$, $k$$, $v$$) : loom$attr$AttrGraph$add_attr$dyn_47613($g$$, $n1$$, $n2$$, $k$$, $v$$);
};
loom.attr.add_attr.cljs$lang$maxFixedArity = 5;
var loom$attr$AttrGraph$remove_attr$dyn_47617 = function() {
  var $G__47618$$ = null, $G__47618__3$$ = function($g$$, $node_or_edge$$, $k$$) {
    var $m__5372__auto__$jscomp$262_m__5374__auto__$$ = loom.attr.remove_attr[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
    if ($m__5372__auto__$jscomp$262_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$262_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$262_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($g$$, $node_or_edge$$, $k$$) : $m__5372__auto__$jscomp$262_m__5374__auto__$$.call(null, $g$$, $node_or_edge$$, $k$$);
    }
    $m__5372__auto__$jscomp$262_m__5374__auto__$$ = loom.attr.remove_attr._;
    if ($m__5372__auto__$jscomp$262_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$262_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$262_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($g$$, $node_or_edge$$, $k$$) : $m__5372__auto__$jscomp$262_m__5374__auto__$$.call(null, $g$$, $node_or_edge$$, $k$$);
    }
    throw $APP.cljs.core.missing_protocol("AttrGraph.remove-attr", $g$$);
  }, $G__47618__4$$ = function($g$$, $n1$$, $n2$$, $k$$) {
    var $m__5372__auto__$jscomp$263_m__5374__auto__$$ = loom.attr.remove_attr[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
    if ($m__5372__auto__$jscomp$263_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$263_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$4 ? $m__5372__auto__$jscomp$263_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$4($g$$, $n1$$, $n2$$, $k$$) : $m__5372__auto__$jscomp$263_m__5374__auto__$$.call(null, $g$$, $n1$$, $n2$$, $k$$);
    }
    $m__5372__auto__$jscomp$263_m__5374__auto__$$ = loom.attr.remove_attr._;
    if ($m__5372__auto__$jscomp$263_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$263_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$4 ? $m__5372__auto__$jscomp$263_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$4($g$$, $n1$$, $n2$$, $k$$) : $m__5372__auto__$jscomp$263_m__5374__auto__$$.call(null, $g$$, $n1$$, $n2$$, $k$$);
    }
    throw $APP.cljs.core.missing_protocol("AttrGraph.remove-attr", $g$$);
  };
  $G__47618$$ = function($g$$, $n1$$, $n2$$, $k$$) {
    switch(arguments.length) {
      case 3:
        return $G__47618__3$$.call(this, $g$$, $n1$$, $n2$$);
      case 4:
        return $G__47618__4$$.call(this, $g$$, $n1$$, $n2$$, $k$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__47618$$.cljs$core$IFn$_invoke$arity$3 = $G__47618__3$$;
  $G__47618$$.cljs$core$IFn$_invoke$arity$4 = $G__47618__4$$;
  return $G__47618$$;
}();
loom.attr.remove_attr = function($var_args$$) {
  switch(arguments.length) {
    case 3:
      return loom.attr.remove_attr.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return loom.attr.remove_attr.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.attr.remove_attr.cljs$core$IFn$_invoke$arity$3 = function($g$$, $node_or_edge$$, $k$$) {
  return $g$$ != null && $g$$.loom$attr$AttrGraph$remove_attr$arity$3 != null ? $g$$.loom$attr$AttrGraph$remove_attr$arity$3($g$$, $node_or_edge$$, $k$$) : loom$attr$AttrGraph$remove_attr$dyn_47617($g$$, $node_or_edge$$, $k$$);
};
loom.attr.remove_attr.cljs$core$IFn$_invoke$arity$4 = function($g$$, $n1$$, $n2$$, $k$$) {
  return $g$$ != null && $g$$.loom$attr$AttrGraph$remove_attr$arity$4 != null ? $g$$.loom$attr$AttrGraph$remove_attr$arity$4($g$$, $n1$$, $n2$$, $k$$) : loom$attr$AttrGraph$remove_attr$dyn_47617($g$$, $n1$$, $n2$$, $k$$);
};
loom.attr.remove_attr.cljs$lang$maxFixedArity = 4;
var loom$attr$AttrGraph$attr$dyn_47621 = function() {
  var $G__47622$$ = null, $G__47622__3$$ = function($g$$, $node_or_edge$$, $k$$) {
    var $m__5372__auto__$jscomp$264_m__5374__auto__$$ = loom.attr.attr[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
    if ($m__5372__auto__$jscomp$264_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$264_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$264_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($g$$, $node_or_edge$$, $k$$) : $m__5372__auto__$jscomp$264_m__5374__auto__$$.call(null, $g$$, $node_or_edge$$, $k$$);
    }
    $m__5372__auto__$jscomp$264_m__5374__auto__$$ = loom.attr.attr._;
    if ($m__5372__auto__$jscomp$264_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$264_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$264_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($g$$, $node_or_edge$$, $k$$) : $m__5372__auto__$jscomp$264_m__5374__auto__$$.call(null, $g$$, $node_or_edge$$, $k$$);
    }
    throw $APP.cljs.core.missing_protocol("AttrGraph.attr", $g$$);
  }, $G__47622__4$$ = function($g$$, $n1$$, $n2$$, $k$$) {
    var $m__5372__auto__$jscomp$265_m__5374__auto__$$ = loom.attr.attr[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
    if ($m__5372__auto__$jscomp$265_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$265_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$4 ? $m__5372__auto__$jscomp$265_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$4($g$$, $n1$$, $n2$$, $k$$) : $m__5372__auto__$jscomp$265_m__5374__auto__$$.call(null, $g$$, $n1$$, $n2$$, $k$$);
    }
    $m__5372__auto__$jscomp$265_m__5374__auto__$$ = loom.attr.attr._;
    if ($m__5372__auto__$jscomp$265_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$265_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$4 ? $m__5372__auto__$jscomp$265_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$4($g$$, $n1$$, $n2$$, $k$$) : $m__5372__auto__$jscomp$265_m__5374__auto__$$.call(null, $g$$, $n1$$, $n2$$, $k$$);
    }
    throw $APP.cljs.core.missing_protocol("AttrGraph.attr", $g$$);
  };
  $G__47622$$ = function($g$$, $n1$$, $n2$$, $k$$) {
    switch(arguments.length) {
      case 3:
        return $G__47622__3$$.call(this, $g$$, $n1$$, $n2$$);
      case 4:
        return $G__47622__4$$.call(this, $g$$, $n1$$, $n2$$, $k$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__47622$$.cljs$core$IFn$_invoke$arity$3 = $G__47622__3$$;
  $G__47622$$.cljs$core$IFn$_invoke$arity$4 = $G__47622__4$$;
  return $G__47622$$;
}();
loom.attr.attr = function($var_args$$) {
  switch(arguments.length) {
    case 3:
      return loom.attr.attr.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return loom.attr.attr.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.attr.attr.cljs$core$IFn$_invoke$arity$3 = function($g$$, $node_or_edge$$, $k$$) {
  return $g$$ != null && $g$$.loom$attr$AttrGraph$attr$arity$3 != null ? $g$$.loom$attr$AttrGraph$attr$arity$3($g$$, $node_or_edge$$, $k$$) : loom$attr$AttrGraph$attr$dyn_47621($g$$, $node_or_edge$$, $k$$);
};
loom.attr.attr.cljs$core$IFn$_invoke$arity$4 = function($g$$, $n1$$, $n2$$, $k$$) {
  return $g$$ != null && $g$$.loom$attr$AttrGraph$attr$arity$4 != null ? $g$$.loom$attr$AttrGraph$attr$arity$4($g$$, $n1$$, $n2$$, $k$$) : loom$attr$AttrGraph$attr$dyn_47621($g$$, $n1$$, $n2$$, $k$$);
};
loom.attr.attr.cljs$lang$maxFixedArity = 4;
var loom$attr$AttrGraph$attrs$dyn_47624 = function() {
  var $G__47625$$ = null, $G__47625__2$$ = function($g$$, $node_or_edge$$) {
    var $m__5372__auto__$jscomp$266_m__5374__auto__$$ = loom.attr.attrs[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
    if ($m__5372__auto__$jscomp$266_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$266_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$266_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node_or_edge$$) : $m__5372__auto__$jscomp$266_m__5374__auto__$$.call(null, $g$$, $node_or_edge$$);
    }
    $m__5372__auto__$jscomp$266_m__5374__auto__$$ = loom.attr.attrs._;
    if ($m__5372__auto__$jscomp$266_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$266_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$266_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node_or_edge$$) : $m__5372__auto__$jscomp$266_m__5374__auto__$$.call(null, $g$$, $node_or_edge$$);
    }
    throw $APP.cljs.core.missing_protocol("AttrGraph.attrs", $g$$);
  }, $G__47625__3$$ = function($g$$, $n1$$, $n2$$) {
    var $m__5372__auto__$jscomp$267_m__5374__auto__$$ = loom.attr.attrs[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
    if ($m__5372__auto__$jscomp$267_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$267_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$267_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($g$$, $n1$$, $n2$$) : $m__5372__auto__$jscomp$267_m__5374__auto__$$.call(null, $g$$, $n1$$, $n2$$);
    }
    $m__5372__auto__$jscomp$267_m__5374__auto__$$ = loom.attr.attrs._;
    if ($m__5372__auto__$jscomp$267_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$267_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$267_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($g$$, $n1$$, $n2$$) : $m__5372__auto__$jscomp$267_m__5374__auto__$$.call(null, $g$$, $n1$$, $n2$$);
    }
    throw $APP.cljs.core.missing_protocol("AttrGraph.attrs", $g$$);
  };
  $G__47625$$ = function($g$$, $n1$$, $n2$$) {
    switch(arguments.length) {
      case 2:
        return $G__47625__2$$.call(this, $g$$, $n1$$);
      case 3:
        return $G__47625__3$$.call(this, $g$$, $n1$$, $n2$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__47625$$.cljs$core$IFn$_invoke$arity$2 = $G__47625__2$$;
  $G__47625$$.cljs$core$IFn$_invoke$arity$3 = $G__47625__3$$;
  return $G__47625$$;
}();
loom.attr.attrs = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return loom.attr.attrs.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return loom.attr.attrs.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.attr.attrs.cljs$core$IFn$_invoke$arity$2 = function($g$$, $node_or_edge$$) {
  return $g$$ != null && $g$$.loom$attr$AttrGraph$attrs$arity$2 != null ? $g$$.loom$attr$AttrGraph$attrs$arity$2($g$$, $node_or_edge$$) : loom$attr$AttrGraph$attrs$dyn_47624($g$$, $node_or_edge$$);
};
loom.attr.attrs.cljs$core$IFn$_invoke$arity$3 = function($g$$, $n1$$, $n2$$) {
  return $g$$ != null && $g$$.loom$attr$AttrGraph$attrs$arity$3 != null ? $g$$.loom$attr$AttrGraph$attrs$arity$3($g$$, $n1$$, $n2$$) : loom$attr$AttrGraph$attrs$dyn_47624($g$$, $n1$$, $n2$$);
};
loom.attr.attrs.cljs$lang$maxFixedArity = 3;
loom.graph.BasicEditableGraph.prototype.loom$attr$AttrGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableGraph.prototype.loom$attr$AttrGraph$add_attr$arity$4 = function($g$$, $node_or_edge$$, $k$$, $v$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.assoc_in(this, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$, $k$$], null), $v$$) : loom.attr.add_attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$, $v$$);
};
loom.graph.BasicEditableGraph.prototype.loom$attr$AttrGraph$add_attr$arity$5 = function($g$jscomp$364_g__$2$$, $n1$$, $n2$$, $k$$, $v$$) {
  $g$jscomp$364_g__$2$$ = $APP.cljs.core.assoc_in(this, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$, $k$$], null), $v$$);
  return loom.graph.directed_QMARK_($g$jscomp$364_g__$2$$) ? $g$jscomp$364_g__$2$$ : $APP.cljs.core.assoc_in($g$jscomp$364_g__$2$$, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n2$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n1$$, $k$$], null), $v$$);
};
loom.graph.BasicEditableGraph.prototype.loom$attr$AttrGraph$remove_attr$arity$3 = function($g$$, $node_or_edge$$, $k$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$], null), $APP.cljs.core.dissoc, $k$$) : loom.attr.remove_attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$);
};
loom.graph.BasicEditableGraph.prototype.loom$attr$AttrGraph$remove_attr$arity$4 = function($g$$, $n1$$, $n2$$, $k$$) {
  return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(this, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$], null), $APP.cljs.core.dissoc, $k$$);
};
loom.graph.BasicEditableGraph.prototype.loom$attr$AttrGraph$attr$arity$3 = function($g$$, $node_or_edge$$, $k$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$, $k$$], null)) : loom.attr.attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$);
};
loom.graph.BasicEditableGraph.prototype.loom$attr$AttrGraph$attr$arity$4 = function($g$$, $n1$$, $n2$$, $k$$) {
  return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$, $k$$], null));
};
loom.graph.BasicEditableGraph.prototype.loom$attr$AttrGraph$attrs$arity$2 = function($g$$, $node_or_edge$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$], null)), cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs) : loom.attr.attrs(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$));
};
loom.graph.BasicEditableGraph.prototype.loom$attr$AttrGraph$attrs$arity$3 = function($attributes$jscomp$12_g$$, $n1$$, $n2$$) {
  $attributes$jscomp$12_g$$ = $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$], null));
  return $APP.cljs.core.seq($attributes$jscomp$12_g$$) ? $attributes$jscomp$12_g$$ : null;
};
loom.graph.BasicEditableDigraph.prototype.loom$attr$AttrGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableDigraph.prototype.loom$attr$AttrGraph$add_attr$arity$4 = function($g$$, $node_or_edge$$, $k$$, $v$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.assoc_in(this, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$, $k$$], null), $v$$) : loom.attr.add_attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$, $v$$);
};
loom.graph.BasicEditableDigraph.prototype.loom$attr$AttrGraph$add_attr$arity$5 = function($g$jscomp$372_g__$2$$, $n1$$, $n2$$, $k$$, $v$$) {
  $g$jscomp$372_g__$2$$ = $APP.cljs.core.assoc_in(this, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$, $k$$], null), $v$$);
  return loom.graph.directed_QMARK_($g$jscomp$372_g__$2$$) ? $g$jscomp$372_g__$2$$ : $APP.cljs.core.assoc_in($g$jscomp$372_g__$2$$, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n2$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n1$$, $k$$], null), $v$$);
};
loom.graph.BasicEditableDigraph.prototype.loom$attr$AttrGraph$remove_attr$arity$3 = function($g$$, $node_or_edge$$, $k$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$], null), $APP.cljs.core.dissoc, $k$$) : loom.attr.remove_attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$);
};
loom.graph.BasicEditableDigraph.prototype.loom$attr$AttrGraph$remove_attr$arity$4 = function($g$$, $n1$$, $n2$$, $k$$) {
  return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(this, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$], null), $APP.cljs.core.dissoc, $k$$);
};
loom.graph.BasicEditableDigraph.prototype.loom$attr$AttrGraph$attr$arity$3 = function($g$$, $node_or_edge$$, $k$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$, $k$$], null)) : loom.attr.attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$);
};
loom.graph.BasicEditableDigraph.prototype.loom$attr$AttrGraph$attr$arity$4 = function($g$$, $n1$$, $n2$$, $k$$) {
  return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$, $k$$], null));
};
loom.graph.BasicEditableDigraph.prototype.loom$attr$AttrGraph$attrs$arity$2 = function($g$$, $node_or_edge$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$], null)), cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs) : loom.attr.attrs(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$));
};
loom.graph.BasicEditableDigraph.prototype.loom$attr$AttrGraph$attrs$arity$3 = function($attributes$jscomp$13_g$$, $n1$$, $n2$$) {
  $attributes$jscomp$13_g$$ = $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$], null));
  return $APP.cljs.core.seq($attributes$jscomp$13_g$$) ? $attributes$jscomp$13_g$$ : null;
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$attr$AttrGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableWeightedGraph.prototype.loom$attr$AttrGraph$add_attr$arity$4 = function($g$$, $node_or_edge$$, $k$$, $v$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.assoc_in(this, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$, $k$$], null), $v$$) : loom.attr.add_attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$, $v$$);
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$attr$AttrGraph$add_attr$arity$5 = function($g$jscomp$380_g__$2$$, $n1$$, $n2$$, $k$$, $v$$) {
  $g$jscomp$380_g__$2$$ = $APP.cljs.core.assoc_in(this, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$, $k$$], null), $v$$);
  return loom.graph.directed_QMARK_($g$jscomp$380_g__$2$$) ? $g$jscomp$380_g__$2$$ : $APP.cljs.core.assoc_in($g$jscomp$380_g__$2$$, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n2$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n1$$, $k$$], null), $v$$);
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$attr$AttrGraph$remove_attr$arity$3 = function($g$$, $node_or_edge$$, $k$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$], null), $APP.cljs.core.dissoc, $k$$) : loom.attr.remove_attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$);
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$attr$AttrGraph$remove_attr$arity$4 = function($g$$, $n1$$, $n2$$, $k$$) {
  return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(this, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$], null), $APP.cljs.core.dissoc, $k$$);
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$attr$AttrGraph$attr$arity$3 = function($g$$, $node_or_edge$$, $k$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$, $k$$], null)) : loom.attr.attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$);
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$attr$AttrGraph$attr$arity$4 = function($g$$, $n1$$, $n2$$, $k$$) {
  return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$, $k$$], null));
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$attr$AttrGraph$attrs$arity$2 = function($g$$, $node_or_edge$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$], null)), cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs) : loom.attr.attrs(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$));
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$attr$AttrGraph$attrs$arity$3 = function($attributes$jscomp$14_g$$, $n1$$, $n2$$) {
  $attributes$jscomp$14_g$$ = $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$], null));
  return $APP.cljs.core.seq($attributes$jscomp$14_g$$) ? $attributes$jscomp$14_g$$ : null;
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$attr$AttrGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableWeightedDigraph.prototype.loom$attr$AttrGraph$add_attr$arity$4 = function($g$$, $node_or_edge$$, $k$$, $v$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.assoc_in(this, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$, $k$$], null), $v$$) : loom.attr.add_attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$, $v$$);
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$attr$AttrGraph$add_attr$arity$5 = function($g$jscomp$388_g__$2$$, $n1$$, $n2$$, $k$$, $v$$) {
  $g$jscomp$388_g__$2$$ = $APP.cljs.core.assoc_in(this, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$, $k$$], null), $v$$);
  return loom.graph.directed_QMARK_($g$jscomp$388_g__$2$$) ? $g$jscomp$388_g__$2$$ : $APP.cljs.core.assoc_in($g$jscomp$388_g__$2$$, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n2$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n1$$, $k$$], null), $v$$);
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$attr$AttrGraph$remove_attr$arity$3 = function($g$$, $node_or_edge$$, $k$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$], null), $APP.cljs.core.dissoc, $k$$) : loom.attr.remove_attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$);
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$attr$AttrGraph$remove_attr$arity$4 = function($g$$, $n1$$, $n2$$, $k$$) {
  return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(this, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$], null), $APP.cljs.core.dissoc, $k$$);
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$attr$AttrGraph$attr$arity$3 = function($g$$, $node_or_edge$$, $k$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$, $k$$], null)) : loom.attr.attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$);
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$attr$AttrGraph$attr$arity$4 = function($g$$, $n1$$, $n2$$, $k$$) {
  return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$, $k$$], null));
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$attr$AttrGraph$attrs$arity$2 = function($g$$, $node_or_edge$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$], null)), cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs) : loom.attr.attrs(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$));
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$attr$AttrGraph$attrs$arity$3 = function($attributes$jscomp$15_g$$, $n1$$, $n2$$) {
  $attributes$jscomp$15_g$$ = $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$], null));
  return $APP.cljs.core.seq($attributes$jscomp$15_g$$) ? $attributes$jscomp$15_g$$ : null;
};
loom.graph.FlyGraph.prototype.loom$attr$AttrGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.FlyGraph.prototype.loom$attr$AttrGraph$add_attr$arity$4 = function($g$$, $node_or_edge$$, $k$$, $v$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.assoc_in(this, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$, $k$$], null), $v$$) : loom.attr.add_attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$, $v$$);
};
loom.graph.FlyGraph.prototype.loom$attr$AttrGraph$add_attr$arity$5 = function($g$jscomp$396_g__$2$$, $n1$$, $n2$$, $k$$, $v$$) {
  $g$jscomp$396_g__$2$$ = $APP.cljs.core.assoc_in(this, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$, $k$$], null), $v$$);
  return loom.graph.directed_QMARK_($g$jscomp$396_g__$2$$) ? $g$jscomp$396_g__$2$$ : $APP.cljs.core.assoc_in($g$jscomp$396_g__$2$$, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n2$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n1$$, $k$$], null), $v$$);
};
loom.graph.FlyGraph.prototype.loom$attr$AttrGraph$remove_attr$arity$3 = function($g$$, $node_or_edge$$, $k$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$], null), $APP.cljs.core.dissoc, $k$$) : loom.attr.remove_attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$);
};
loom.graph.FlyGraph.prototype.loom$attr$AttrGraph$remove_attr$arity$4 = function($g$$, $n1$$, $n2$$, $k$$) {
  return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(this, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$], null), $APP.cljs.core.dissoc, $k$$);
};
loom.graph.FlyGraph.prototype.loom$attr$AttrGraph$attr$arity$3 = function($g$$, $node_or_edge$$, $k$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$, $k$$], null)) : loom.attr.attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$);
};
loom.graph.FlyGraph.prototype.loom$attr$AttrGraph$attr$arity$4 = function($g$$, $n1$$, $n2$$, $k$$) {
  return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$, $k$$], null));
};
loom.graph.FlyGraph.prototype.loom$attr$AttrGraph$attrs$arity$2 = function($g$$, $node_or_edge$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$], null)), cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs) : loom.attr.attrs(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$));
};
loom.graph.FlyGraph.prototype.loom$attr$AttrGraph$attrs$arity$3 = function($attributes$jscomp$16_g$$, $n1$$, $n2$$) {
  $attributes$jscomp$16_g$$ = $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$], null));
  return $APP.cljs.core.seq($attributes$jscomp$16_g$$) ? $attributes$jscomp$16_g$$ : null;
};
loom.graph.FlyDigraph.prototype.loom$attr$AttrGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.FlyDigraph.prototype.loom$attr$AttrGraph$add_attr$arity$4 = function($g$$, $node_or_edge$$, $k$$, $v$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.assoc_in(this, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$, $k$$], null), $v$$) : loom.attr.add_attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$, $v$$);
};
loom.graph.FlyDigraph.prototype.loom$attr$AttrGraph$add_attr$arity$5 = function($g$jscomp$404_g__$2$$, $n1$$, $n2$$, $k$$, $v$$) {
  $g$jscomp$404_g__$2$$ = $APP.cljs.core.assoc_in(this, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$, $k$$], null), $v$$);
  return loom.graph.directed_QMARK_($g$jscomp$404_g__$2$$) ? $g$jscomp$404_g__$2$$ : $APP.cljs.core.assoc_in($g$jscomp$404_g__$2$$, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n2$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n1$$, $k$$], null), $v$$);
};
loom.graph.FlyDigraph.prototype.loom$attr$AttrGraph$remove_attr$arity$3 = function($g$$, $node_or_edge$$, $k$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$], null), $APP.cljs.core.dissoc, $k$$) : loom.attr.remove_attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$);
};
loom.graph.FlyDigraph.prototype.loom$attr$AttrGraph$remove_attr$arity$4 = function($g$$, $n1$$, $n2$$, $k$$) {
  return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(this, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$], null), $APP.cljs.core.dissoc, $k$$);
};
loom.graph.FlyDigraph.prototype.loom$attr$AttrGraph$attr$arity$3 = function($g$$, $node_or_edge$$, $k$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$, $k$$], null)) : loom.attr.attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$);
};
loom.graph.FlyDigraph.prototype.loom$attr$AttrGraph$attr$arity$4 = function($g$$, $n1$$, $n2$$, $k$$) {
  return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$, $k$$], null));
};
loom.graph.FlyDigraph.prototype.loom$attr$AttrGraph$attrs$arity$2 = function($g$$, $node_or_edge$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$], null)), cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs) : loom.attr.attrs(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$));
};
loom.graph.FlyDigraph.prototype.loom$attr$AttrGraph$attrs$arity$3 = function($attributes$jscomp$17_g$$, $n1$$, $n2$$) {
  $attributes$jscomp$17_g$$ = $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$], null));
  return $APP.cljs.core.seq($attributes$jscomp$17_g$$) ? $attributes$jscomp$17_g$$ : null;
};
loom.graph.WeightedFlyGraph.prototype.loom$attr$AttrGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.WeightedFlyGraph.prototype.loom$attr$AttrGraph$add_attr$arity$4 = function($g$$, $node_or_edge$$, $k$$, $v$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.assoc_in(this, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$, $k$$], null), $v$$) : loom.attr.add_attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$, $v$$);
};
loom.graph.WeightedFlyGraph.prototype.loom$attr$AttrGraph$add_attr$arity$5 = function($g$jscomp$412_g__$2$$, $n1$$, $n2$$, $k$$, $v$$) {
  $g$jscomp$412_g__$2$$ = $APP.cljs.core.assoc_in(this, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$, $k$$], null), $v$$);
  return loom.graph.directed_QMARK_($g$jscomp$412_g__$2$$) ? $g$jscomp$412_g__$2$$ : $APP.cljs.core.assoc_in($g$jscomp$412_g__$2$$, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n2$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n1$$, $k$$], null), $v$$);
};
loom.graph.WeightedFlyGraph.prototype.loom$attr$AttrGraph$remove_attr$arity$3 = function($g$$, $node_or_edge$$, $k$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$], null), $APP.cljs.core.dissoc, $k$$) : loom.attr.remove_attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$);
};
loom.graph.WeightedFlyGraph.prototype.loom$attr$AttrGraph$remove_attr$arity$4 = function($g$$, $n1$$, $n2$$, $k$$) {
  return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(this, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$], null), $APP.cljs.core.dissoc, $k$$);
};
loom.graph.WeightedFlyGraph.prototype.loom$attr$AttrGraph$attr$arity$3 = function($g$$, $node_or_edge$$, $k$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$, $k$$], null)) : loom.attr.attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$);
};
loom.graph.WeightedFlyGraph.prototype.loom$attr$AttrGraph$attr$arity$4 = function($g$$, $n1$$, $n2$$, $k$$) {
  return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$, $k$$], null));
};
loom.graph.WeightedFlyGraph.prototype.loom$attr$AttrGraph$attrs$arity$2 = function($g$$, $node_or_edge$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$], null)), cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs) : loom.attr.attrs(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$));
};
loom.graph.WeightedFlyGraph.prototype.loom$attr$AttrGraph$attrs$arity$3 = function($attributes$jscomp$18_g$$, $n1$$, $n2$$) {
  $attributes$jscomp$18_g$$ = $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$], null));
  return $APP.cljs.core.seq($attributes$jscomp$18_g$$) ? $attributes$jscomp$18_g$$ : null;
};
loom.graph.WeightedFlyDigraph.prototype.loom$attr$AttrGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.WeightedFlyDigraph.prototype.loom$attr$AttrGraph$add_attr$arity$4 = function($g$$, $node_or_edge$$, $k$$, $v$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.assoc_in(this, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$, $k$$], null), $v$$) : loom.attr.add_attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$, $v$$);
};
loom.graph.WeightedFlyDigraph.prototype.loom$attr$AttrGraph$add_attr$arity$5 = function($g$jscomp$420_g__$2$$, $n1$$, $n2$$, $k$$, $v$$) {
  $g$jscomp$420_g__$2$$ = $APP.cljs.core.assoc_in(this, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$, $k$$], null), $v$$);
  return loom.graph.directed_QMARK_($g$jscomp$420_g__$2$$) ? $g$jscomp$420_g__$2$$ : $APP.cljs.core.assoc_in($g$jscomp$420_g__$2$$, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n2$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n1$$, $k$$], null), $v$$);
};
loom.graph.WeightedFlyDigraph.prototype.loom$attr$AttrGraph$remove_attr$arity$3 = function($g$$, $node_or_edge$$, $k$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$], null), $APP.cljs.core.dissoc, $k$$) : loom.attr.remove_attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$);
};
loom.graph.WeightedFlyDigraph.prototype.loom$attr$AttrGraph$remove_attr$arity$4 = function($g$$, $n1$$, $n2$$, $k$$) {
  return $APP.cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(this, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$], null), $APP.cljs.core.dissoc, $k$$);
};
loom.graph.WeightedFlyDigraph.prototype.loom$attr$AttrGraph$attr$arity$3 = function($g$$, $node_or_edge$$, $k$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$, $k$$], null)) : loom.attr.attr(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$), $k$$);
};
loom.graph.WeightedFlyDigraph.prototype.loom$attr$AttrGraph$attr$arity$4 = function($g$$, $n1$$, $n2$$, $k$$) {
  return $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$, $k$$], null));
};
loom.graph.WeightedFlyDigraph.prototype.loom$attr$AttrGraph$attrs$arity$2 = function($g$$, $node_or_edge$$) {
  return $APP.cljs.core.truth_(loom.graph.has_node_QMARK_(this, $node_or_edge$$)) ? $APP.cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $node_or_edge$$], null)), cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs) : loom.attr.attrs(this, loom.graph.src($node_or_edge$$), loom.graph.dest($node_or_edge$$));
};
loom.graph.WeightedFlyDigraph.prototype.loom$attr$AttrGraph$attrs$arity$3 = function($attributes$jscomp$19_g$$, $n1$$, $n2$$) {
  $attributes$jscomp$19_g$$ = $APP.cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this, new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2743$attrs, $n1$$, cljs$cst$2751$loom_DOT_attr_SLASH_edge_attrs, $n2$$], null));
  return $APP.cljs.core.seq($attributes$jscomp$19_g$$) ? $attributes$jscomp$19_g$$ : null;
};
loom.attr.attr_QMARK_ = function($g$$) {
  return $g$$ != null ? $APP.cljs.core.PROTOCOL_SENTINEL === $g$$.loom$attr$AttrGraph$ ? !0 : $g$$.cljs$lang$protocol_mask$partition$ ? !1 : $APP.cljs.core.native_satisfies_QMARK_(loom.attr.AttrGraph, $g$$) : $APP.cljs.core.native_satisfies_QMARK_(loom.attr.AttrGraph, $g$$);
};
loom.attr.add_attr_to_nodes = function($g$$, $k$$, $v$$, $nodes$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($g__$1$$, $n$$) {
    return loom.attr.add_attr($g__$1$$, $n$$, $k$$, $v$$);
  }, $g$$, $nodes$$);
};
loom.attr.add_attr_to_edges = function($g$$, $k$$, $v$$, $edges$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($g__$1$$, $n2$$) {
    var $n1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$$, 0, null);
    $n2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$$, 1, null);
    return loom.attr.add_attr($g__$1$$, $n1$$, $n2$$, $k$$, $v$$);
  }, $g$$, $edges$$);
};
loom.attr.add_attr_to_all = function($g$$, $k$$, $v$$) {
  return loom.attr.add_attr_to_edges(loom.attr.add_attr_to_nodes($g$$, $k$$, $v$$, loom.graph.nodes($g$$)), $k$$, $v$$, loom.graph.edges($g$$));
};
loom.attr.add_attrs_to_all = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$249_argseq__5756__auto__$$ = [], $len__5749__auto___47665$$ = arguments.length, $i__5750__auto___47666$$ = 0;;) {
    if ($i__5750__auto___47666$$ < $len__5749__auto___47665$$) {
      $args__5755__auto__$jscomp$249_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47666$$]), $i__5750__auto___47666$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$249_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$249_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$249_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return loom.attr.add_attrs_to_all.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$249_argseq__5756__auto__$$);
};
loom.attr.add_attrs_to_all.cljs$core$IFn$_invoke$arity$variadic = function($g$$, $kvs$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($g__$1$$, $p__47597_v$$) {
    var $k$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47597_v$$, 0, null);
    $p__47597_v$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($p__47597_v$$, 1, null);
    return loom.attr.add_attr_to_edges(loom.attr.add_attr_to_nodes($g__$1$$, $k$$, $p__47597_v$$, loom.graph.nodes($g__$1$$)), $k$$, $p__47597_v$$, loom.graph.edges($g__$1$$));
  }, $g$$, $APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$3(2, 1, $kvs$$));
};
loom.attr.add_attrs_to_all.cljs$lang$maxFixedArity = 1;
loom.attr.add_attrs_to_all.cljs$lang$applyTo = function($seq47590_seq47590__$1$$) {
  var $G__47591$$ = $APP.cljs.core.first($seq47590_seq47590__$1$$);
  $seq47590_seq47590__$1$$ = $APP.cljs.core.next($seq47590_seq47590__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__47591$$, $seq47590_seq47590__$1$$);
};
loom.attr.hilite = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return loom.attr.hilite.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return loom.attr.hilite.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.attr.hilite.cljs$core$IFn$_invoke$arity$2 = function($g$$, $node$$) {
  return loom.attr.add_attr(loom.attr.add_attr(loom.attr.add_attr(loom.attr.add_attr($g$$, $node$$, $APP.cljs$cst$2752$color, $APP.cljs$cst$1994$red), $node$$, cljs$cst$2753$fontcolor, $APP.cljs$cst$1994$red), $node$$, cljs$cst$2754$fillcolor, "#ffeeee"), $node$$, $APP.cljs$cst$1728$style, "filled,bold");
};
loom.attr.hilite.cljs$core$IFn$_invoke$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.attr.add_attr(loom.attr.add_attr(loom.attr.add_attr($g$$, $n1$$, $n2$$, $APP.cljs$cst$2752$color, $APP.cljs$cst$1994$red), $n1$$, $n2$$, cljs$cst$2753$fontcolor, $APP.cljs$cst$1994$red), $n1$$, $n2$$, $APP.cljs$cst$1728$style, cljs$cst$2755$bold);
};
loom.attr.hilite.cljs$lang$maxFixedArity = 3;
loom.attr.hilite_path = function($g$$, $path$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($g__$1$$, $n2$$) {
    var $n1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$$, 0, null);
    $n2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($n2$$, 1, null);
    return loom.attr.hilite.cljs$core$IFn$_invoke$arity$3(loom.attr.hilite.cljs$core$IFn$_invoke$arity$2(loom.attr.hilite.cljs$core$IFn$_invoke$arity$2($g__$1$$, $n1$$), $n2$$), $n1$$, $n2$$);
  }, $g$$, $APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$3(2, 1, $path$$));
};
loom.label = {};
loom.label.LabeledGraph = function() {
};
var loom$label$LabeledGraph$add_label$dyn_47795 = function() {
  var $G__47796$$ = null, $G__47796__3$$ = function($g$$, $node$$, $label$$) {
    var $m__5372__auto__$jscomp$268_m__5374__auto__$$ = loom.label.add_label[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
    if ($m__5372__auto__$jscomp$268_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$268_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$268_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($g$$, $node$$, $label$$) : $m__5372__auto__$jscomp$268_m__5374__auto__$$.call(null, $g$$, $node$$, $label$$);
    }
    $m__5372__auto__$jscomp$268_m__5374__auto__$$ = loom.label.add_label._;
    if ($m__5372__auto__$jscomp$268_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$268_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$268_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($g$$, $node$$, $label$$) : $m__5372__auto__$jscomp$268_m__5374__auto__$$.call(null, $g$$, $node$$, $label$$);
    }
    throw $APP.cljs.core.missing_protocol("LabeledGraph.add-label", $g$$);
  }, $G__47796__4$$ = function($g$$, $n1$$, $n2$$, $label$$) {
    var $m__5372__auto__$jscomp$269_m__5374__auto__$$ = loom.label.add_label[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
    if ($m__5372__auto__$jscomp$269_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$269_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$4 ? $m__5372__auto__$jscomp$269_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$4($g$$, $n1$$, $n2$$, $label$$) : $m__5372__auto__$jscomp$269_m__5374__auto__$$.call(null, $g$$, $n1$$, $n2$$, $label$$);
    }
    $m__5372__auto__$jscomp$269_m__5374__auto__$$ = loom.label.add_label._;
    if ($m__5372__auto__$jscomp$269_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$269_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$4 ? $m__5372__auto__$jscomp$269_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$4($g$$, $n1$$, $n2$$, $label$$) : $m__5372__auto__$jscomp$269_m__5374__auto__$$.call(null, $g$$, $n1$$, $n2$$, $label$$);
    }
    throw $APP.cljs.core.missing_protocol("LabeledGraph.add-label", $g$$);
  };
  $G__47796$$ = function($g$$, $n1$$, $n2$$, $label$$) {
    switch(arguments.length) {
      case 3:
        return $G__47796__3$$.call(this, $g$$, $n1$$, $n2$$);
      case 4:
        return $G__47796__4$$.call(this, $g$$, $n1$$, $n2$$, $label$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__47796$$.cljs$core$IFn$_invoke$arity$3 = $G__47796__3$$;
  $G__47796$$.cljs$core$IFn$_invoke$arity$4 = $G__47796__4$$;
  return $G__47796$$;
}();
loom.label.add_label = function($var_args$$) {
  switch(arguments.length) {
    case 3:
      return loom.label.add_label.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    case 4:
      return loom.label.add_label.cljs$core$IFn$_invoke$arity$4(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.label.add_label.cljs$core$IFn$_invoke$arity$3 = function($g$$, $node$$, $label$$) {
  return $g$$ != null && $g$$.loom$label$LabeledGraph$add_label$arity$3 != null ? $g$$.loom$label$LabeledGraph$add_label$arity$3($g$$, $node$$, $label$$) : loom$label$LabeledGraph$add_label$dyn_47795($g$$, $node$$, $label$$);
};
loom.label.add_label.cljs$core$IFn$_invoke$arity$4 = function($g$$, $n1$$, $n2$$, $label$$) {
  return $g$$ != null && $g$$.loom$label$LabeledGraph$add_label$arity$4 != null ? $g$$.loom$label$LabeledGraph$add_label$arity$4($g$$, $n1$$, $n2$$, $label$$) : loom$label$LabeledGraph$add_label$dyn_47795($g$$, $n1$$, $n2$$, $label$$);
};
loom.label.add_label.cljs$lang$maxFixedArity = 4;
var loom$label$LabeledGraph$remove_label$dyn_47805 = function() {
  var $G__47806$$ = null, $G__47806__2$$ = function($g$$, $node$$) {
    var $m__5372__auto__$jscomp$270_m__5374__auto__$$ = loom.label.remove_label[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
    if ($m__5372__auto__$jscomp$270_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$270_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$270_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node$$) : $m__5372__auto__$jscomp$270_m__5374__auto__$$.call(null, $g$$, $node$$);
    }
    $m__5372__auto__$jscomp$270_m__5374__auto__$$ = loom.label.remove_label._;
    if ($m__5372__auto__$jscomp$270_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$270_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$270_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node$$) : $m__5372__auto__$jscomp$270_m__5374__auto__$$.call(null, $g$$, $node$$);
    }
    throw $APP.cljs.core.missing_protocol("LabeledGraph.remove-label", $g$$);
  }, $G__47806__3$$ = function($g$$, $n1$$, $n2$$) {
    var $m__5372__auto__$jscomp$271_m__5374__auto__$$ = loom.label.remove_label[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
    if ($m__5372__auto__$jscomp$271_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$271_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$271_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($g$$, $n1$$, $n2$$) : $m__5372__auto__$jscomp$271_m__5374__auto__$$.call(null, $g$$, $n1$$, $n2$$);
    }
    $m__5372__auto__$jscomp$271_m__5374__auto__$$ = loom.label.remove_label._;
    if ($m__5372__auto__$jscomp$271_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$271_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$271_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($g$$, $n1$$, $n2$$) : $m__5372__auto__$jscomp$271_m__5374__auto__$$.call(null, $g$$, $n1$$, $n2$$);
    }
    throw $APP.cljs.core.missing_protocol("LabeledGraph.remove-label", $g$$);
  };
  $G__47806$$ = function($g$$, $n1$$, $n2$$) {
    switch(arguments.length) {
      case 2:
        return $G__47806__2$$.call(this, $g$$, $n1$$);
      case 3:
        return $G__47806__3$$.call(this, $g$$, $n1$$, $n2$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__47806$$.cljs$core$IFn$_invoke$arity$2 = $G__47806__2$$;
  $G__47806$$.cljs$core$IFn$_invoke$arity$3 = $G__47806__3$$;
  return $G__47806$$;
}();
loom.label.remove_label = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return loom.label.remove_label.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return loom.label.remove_label.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.label.remove_label.cljs$core$IFn$_invoke$arity$2 = function($g$$, $node$$) {
  return $g$$ != null && $g$$.loom$label$LabeledGraph$remove_label$arity$2 != null ? $g$$.loom$label$LabeledGraph$remove_label$arity$2($g$$, $node$$) : loom$label$LabeledGraph$remove_label$dyn_47805($g$$, $node$$);
};
loom.label.remove_label.cljs$core$IFn$_invoke$arity$3 = function($g$$, $n1$$, $n2$$) {
  return $g$$ != null && $g$$.loom$label$LabeledGraph$remove_label$arity$3 != null ? $g$$.loom$label$LabeledGraph$remove_label$arity$3($g$$, $n1$$, $n2$$) : loom$label$LabeledGraph$remove_label$dyn_47805($g$$, $n1$$, $n2$$);
};
loom.label.remove_label.cljs$lang$maxFixedArity = 3;
var loom$label$LabeledGraph$label$dyn_47812 = function() {
  var $G__47813$$ = null, $G__47813__2$$ = function($g$$, $node$$) {
    var $m__5372__auto__$jscomp$272_m__5374__auto__$$ = loom.label.label[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
    if ($m__5372__auto__$jscomp$272_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$272_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$272_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node$$) : $m__5372__auto__$jscomp$272_m__5374__auto__$$.call(null, $g$$, $node$$);
    }
    $m__5372__auto__$jscomp$272_m__5374__auto__$$ = loom.label.label._;
    if ($m__5372__auto__$jscomp$272_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$272_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2 ? $m__5372__auto__$jscomp$272_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$2($g$$, $node$$) : $m__5372__auto__$jscomp$272_m__5374__auto__$$.call(null, $g$$, $node$$);
    }
    throw $APP.cljs.core.missing_protocol("LabeledGraph.label", $g$$);
  }, $G__47813__3$$ = function($g$$, $n1$$, $n2$$) {
    var $m__5372__auto__$jscomp$273_m__5374__auto__$$ = loom.label.label[$APP.goog.typeOf($g$$ == null ? null : $g$$)];
    if ($m__5372__auto__$jscomp$273_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$273_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$273_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($g$$, $n1$$, $n2$$) : $m__5372__auto__$jscomp$273_m__5374__auto__$$.call(null, $g$$, $n1$$, $n2$$);
    }
    $m__5372__auto__$jscomp$273_m__5374__auto__$$ = loom.label.label._;
    if ($m__5372__auto__$jscomp$273_m__5374__auto__$$ != null) {
      return $m__5372__auto__$jscomp$273_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3 ? $m__5372__auto__$jscomp$273_m__5374__auto__$$.cljs$core$IFn$_invoke$arity$3($g$$, $n1$$, $n2$$) : $m__5372__auto__$jscomp$273_m__5374__auto__$$.call(null, $g$$, $n1$$, $n2$$);
    }
    throw $APP.cljs.core.missing_protocol("LabeledGraph.label", $g$$);
  };
  $G__47813$$ = function($g$$, $n1$$, $n2$$) {
    switch(arguments.length) {
      case 2:
        return $G__47813__2$$.call(this, $g$$, $n1$$);
      case 3:
        return $G__47813__3$$.call(this, $g$$, $n1$$, $n2$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__47813$$.cljs$core$IFn$_invoke$arity$2 = $G__47813__2$$;
  $G__47813$$.cljs$core$IFn$_invoke$arity$3 = $G__47813__3$$;
  return $G__47813$$;
}();
loom.label.label = function($var_args$$) {
  switch(arguments.length) {
    case 2:
      return loom.label.label.cljs$core$IFn$_invoke$arity$2(arguments[0], arguments[1]);
    case 3:
      return loom.label.label.cljs$core$IFn$_invoke$arity$3(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $APP.cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join(""));
  }
};
loom.label.label.cljs$core$IFn$_invoke$arity$2 = function($g$$, $node$$) {
  return $g$$ != null && $g$$.loom$label$LabeledGraph$label$arity$2 != null ? $g$$.loom$label$LabeledGraph$label$arity$2($g$$, $node$$) : loom$label$LabeledGraph$label$dyn_47812($g$$, $node$$);
};
loom.label.label.cljs$core$IFn$_invoke$arity$3 = function($g$$, $n1$$, $n2$$) {
  return $g$$ != null && $g$$.loom$label$LabeledGraph$label$arity$3 != null ? $g$$.loom$label$LabeledGraph$label$arity$3($g$$, $n1$$, $n2$$) : loom$label$LabeledGraph$label$dyn_47812($g$$, $n1$$, $n2$$);
};
loom.label.label.cljs$lang$maxFixedArity = 3;
loom.graph.BasicEditableGraph.prototype.loom$label$LabeledGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableGraph.prototype.loom$label$LabeledGraph$add_label$arity$3 = function($g$$, $node$$, $label$$) {
  return loom.attr.add_attr(this, $node$$, $APP.cljs$cst$2756$label, $label$$);
};
loom.graph.BasicEditableGraph.prototype.loom$label$LabeledGraph$add_label$arity$4 = function($g$$, $n1$$, $n2$$, $label$$) {
  return loom.attr.add_attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label, $label$$);
};
loom.graph.BasicEditableGraph.prototype.loom$label$LabeledGraph$remove_label$arity$2 = function($g$$, $node$$) {
  return loom.attr.remove_attr(this, $node$$, $APP.cljs$cst$2756$label);
};
loom.graph.BasicEditableGraph.prototype.loom$label$LabeledGraph$remove_label$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.attr.remove_attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label);
};
loom.graph.BasicEditableGraph.prototype.loom$label$LabeledGraph$label$arity$2 = function($g$$, $node$$) {
  return loom.attr.attr(this, $node$$, $APP.cljs$cst$2756$label);
};
loom.graph.BasicEditableGraph.prototype.loom$label$LabeledGraph$label$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.attr.attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label);
};
loom.graph.BasicEditableDigraph.prototype.loom$label$LabeledGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableDigraph.prototype.loom$label$LabeledGraph$add_label$arity$3 = function($g$$, $node$$, $label$$) {
  return loom.attr.add_attr(this, $node$$, $APP.cljs$cst$2756$label, $label$$);
};
loom.graph.BasicEditableDigraph.prototype.loom$label$LabeledGraph$add_label$arity$4 = function($g$$, $n1$$, $n2$$, $label$$) {
  return loom.attr.add_attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label, $label$$);
};
loom.graph.BasicEditableDigraph.prototype.loom$label$LabeledGraph$remove_label$arity$2 = function($g$$, $node$$) {
  return loom.attr.remove_attr(this, $node$$, $APP.cljs$cst$2756$label);
};
loom.graph.BasicEditableDigraph.prototype.loom$label$LabeledGraph$remove_label$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.attr.remove_attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label);
};
loom.graph.BasicEditableDigraph.prototype.loom$label$LabeledGraph$label$arity$2 = function($g$$, $node$$) {
  return loom.attr.attr(this, $node$$, $APP.cljs$cst$2756$label);
};
loom.graph.BasicEditableDigraph.prototype.loom$label$LabeledGraph$label$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.attr.attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label);
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$label$LabeledGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableWeightedGraph.prototype.loom$label$LabeledGraph$add_label$arity$3 = function($g$$, $node$$, $label$$) {
  return loom.attr.add_attr(this, $node$$, $APP.cljs$cst$2756$label, $label$$);
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$label$LabeledGraph$add_label$arity$4 = function($g$$, $n1$$, $n2$$, $label$$) {
  return loom.attr.add_attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label, $label$$);
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$label$LabeledGraph$remove_label$arity$2 = function($g$$, $node$$) {
  return loom.attr.remove_attr(this, $node$$, $APP.cljs$cst$2756$label);
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$label$LabeledGraph$remove_label$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.attr.remove_attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label);
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$label$LabeledGraph$label$arity$2 = function($g$$, $node$$) {
  return loom.attr.attr(this, $node$$, $APP.cljs$cst$2756$label);
};
loom.graph.BasicEditableWeightedGraph.prototype.loom$label$LabeledGraph$label$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.attr.attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label);
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$label$LabeledGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.BasicEditableWeightedDigraph.prototype.loom$label$LabeledGraph$add_label$arity$3 = function($g$$, $node$$, $label$$) {
  return loom.attr.add_attr(this, $node$$, $APP.cljs$cst$2756$label, $label$$);
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$label$LabeledGraph$add_label$arity$4 = function($g$$, $n1$$, $n2$$, $label$$) {
  return loom.attr.add_attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label, $label$$);
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$label$LabeledGraph$remove_label$arity$2 = function($g$$, $node$$) {
  return loom.attr.remove_attr(this, $node$$, $APP.cljs$cst$2756$label);
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$label$LabeledGraph$remove_label$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.attr.remove_attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label);
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$label$LabeledGraph$label$arity$2 = function($g$$, $node$$) {
  return loom.attr.attr(this, $node$$, $APP.cljs$cst$2756$label);
};
loom.graph.BasicEditableWeightedDigraph.prototype.loom$label$LabeledGraph$label$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.attr.attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label);
};
loom.graph.FlyGraph.prototype.loom$label$LabeledGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.FlyGraph.prototype.loom$label$LabeledGraph$add_label$arity$3 = function($g$$, $node$$, $label$$) {
  return loom.attr.add_attr(this, $node$$, $APP.cljs$cst$2756$label, $label$$);
};
loom.graph.FlyGraph.prototype.loom$label$LabeledGraph$add_label$arity$4 = function($g$$, $n1$$, $n2$$, $label$$) {
  return loom.attr.add_attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label, $label$$);
};
loom.graph.FlyGraph.prototype.loom$label$LabeledGraph$remove_label$arity$2 = function($g$$, $node$$) {
  return loom.attr.remove_attr(this, $node$$, $APP.cljs$cst$2756$label);
};
loom.graph.FlyGraph.prototype.loom$label$LabeledGraph$remove_label$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.attr.remove_attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label);
};
loom.graph.FlyGraph.prototype.loom$label$LabeledGraph$label$arity$2 = function($g$$, $node$$) {
  return loom.attr.attr(this, $node$$, $APP.cljs$cst$2756$label);
};
loom.graph.FlyGraph.prototype.loom$label$LabeledGraph$label$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.attr.attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label);
};
loom.graph.FlyDigraph.prototype.loom$label$LabeledGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.FlyDigraph.prototype.loom$label$LabeledGraph$add_label$arity$3 = function($g$$, $node$$, $label$$) {
  return loom.attr.add_attr(this, $node$$, $APP.cljs$cst$2756$label, $label$$);
};
loom.graph.FlyDigraph.prototype.loom$label$LabeledGraph$add_label$arity$4 = function($g$$, $n1$$, $n2$$, $label$$) {
  return loom.attr.add_attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label, $label$$);
};
loom.graph.FlyDigraph.prototype.loom$label$LabeledGraph$remove_label$arity$2 = function($g$$, $node$$) {
  return loom.attr.remove_attr(this, $node$$, $APP.cljs$cst$2756$label);
};
loom.graph.FlyDigraph.prototype.loom$label$LabeledGraph$remove_label$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.attr.remove_attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label);
};
loom.graph.FlyDigraph.prototype.loom$label$LabeledGraph$label$arity$2 = function($g$$, $node$$) {
  return loom.attr.attr(this, $node$$, $APP.cljs$cst$2756$label);
};
loom.graph.FlyDigraph.prototype.loom$label$LabeledGraph$label$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.attr.attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label);
};
loom.graph.WeightedFlyGraph.prototype.loom$label$LabeledGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.WeightedFlyGraph.prototype.loom$label$LabeledGraph$add_label$arity$3 = function($g$$, $node$$, $label$$) {
  return loom.attr.add_attr(this, $node$$, $APP.cljs$cst$2756$label, $label$$);
};
loom.graph.WeightedFlyGraph.prototype.loom$label$LabeledGraph$add_label$arity$4 = function($g$$, $n1$$, $n2$$, $label$$) {
  return loom.attr.add_attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label, $label$$);
};
loom.graph.WeightedFlyGraph.prototype.loom$label$LabeledGraph$remove_label$arity$2 = function($g$$, $node$$) {
  return loom.attr.remove_attr(this, $node$$, $APP.cljs$cst$2756$label);
};
loom.graph.WeightedFlyGraph.prototype.loom$label$LabeledGraph$remove_label$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.attr.remove_attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label);
};
loom.graph.WeightedFlyGraph.prototype.loom$label$LabeledGraph$label$arity$2 = function($g$$, $node$$) {
  return loom.attr.attr(this, $node$$, $APP.cljs$cst$2756$label);
};
loom.graph.WeightedFlyGraph.prototype.loom$label$LabeledGraph$label$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.attr.attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label);
};
loom.graph.WeightedFlyDigraph.prototype.loom$label$LabeledGraph$ = $APP.cljs.core.PROTOCOL_SENTINEL;
loom.graph.WeightedFlyDigraph.prototype.loom$label$LabeledGraph$add_label$arity$3 = function($g$$, $node$$, $label$$) {
  return loom.attr.add_attr(this, $node$$, $APP.cljs$cst$2756$label, $label$$);
};
loom.graph.WeightedFlyDigraph.prototype.loom$label$LabeledGraph$add_label$arity$4 = function($g$$, $n1$$, $n2$$, $label$$) {
  return loom.attr.add_attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label, $label$$);
};
loom.graph.WeightedFlyDigraph.prototype.loom$label$LabeledGraph$remove_label$arity$2 = function($g$$, $node$$) {
  return loom.attr.remove_attr(this, $node$$, $APP.cljs$cst$2756$label);
};
loom.graph.WeightedFlyDigraph.prototype.loom$label$LabeledGraph$remove_label$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.attr.remove_attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label);
};
loom.graph.WeightedFlyDigraph.prototype.loom$label$LabeledGraph$label$arity$2 = function($g$$, $node$$) {
  return loom.attr.attr(this, $node$$, $APP.cljs$cst$2756$label);
};
loom.graph.WeightedFlyDigraph.prototype.loom$label$LabeledGraph$label$arity$3 = function($g$$, $n1$$, $n2$$) {
  return loom.attr.attr(this, $n1$$, $n2$$, $APP.cljs$cst$2756$label);
};
loom.label.labeled_QMARK_ = function($g$$) {
  return $g$$ != null ? $APP.cljs.core.PROTOCOL_SENTINEL === $g$$.loom$label$LabeledGraph$ ? !0 : $g$$.cljs$lang$protocol_mask$partition$ ? !1 : $APP.cljs.core.native_satisfies_QMARK_(loom.label.LabeledGraph, $g$$) : $APP.cljs.core.native_satisfies_QMARK_(loom.label.LabeledGraph, $g$$);
};
loom.label.add_labeled_nodes = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$250_argseq__5756__auto__$$ = [], $len__5749__auto___47826$$ = arguments.length, $i__5750__auto___47827$$ = 0;;) {
    if ($i__5750__auto___47827$$ < $len__5749__auto___47826$$) {
      $args__5755__auto__$jscomp$250_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47827$$]), $i__5750__auto___47827$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$250_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$250_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$250_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return loom.label.add_labeled_nodes.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$250_argseq__5756__auto__$$);
};
loom.label.add_labeled_nodes.cljs$core$IFn$_invoke$arity$variadic = function($g$$, $nodes_PLUS_labels$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($g__$1$$, $label$$) {
    var $node$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($label$$, 0, null);
    $label$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($label$$, 1, null);
    return loom.label.add_label(loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic($g__$1$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$node$$], 0)), $node$$, $label$$);
  }, $g$$, $APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2, $nodes_PLUS_labels$$));
};
loom.label.add_labeled_nodes.cljs$lang$maxFixedArity = 1;
loom.label.add_labeled_nodes.cljs$lang$applyTo = function($seq47758_seq47758__$1$$) {
  var $G__47759$$ = $APP.cljs.core.first($seq47758_seq47758__$1$$);
  $seq47758_seq47758__$1$$ = $APP.cljs.core.next($seq47758_seq47758__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__47759$$, $seq47758_seq47758__$1$$);
};
loom.label.add_labeled_edges = function($var_args$$) {
  for (var $args__5755__auto__$jscomp$251_argseq__5756__auto__$$ = [], $len__5749__auto___47843$$ = arguments.length, $i__5750__auto___47844$$ = 0;;) {
    if ($i__5750__auto___47844$$ < $len__5749__auto___47843$$) {
      $args__5755__auto__$jscomp$251_argseq__5756__auto__$$.push(arguments[$i__5750__auto___47844$$]), $i__5750__auto___47844$$ += 1;
    } else {
      break;
    }
  }
  $args__5755__auto__$jscomp$251_argseq__5756__auto__$$ = 1 < $args__5755__auto__$jscomp$251_argseq__5756__auto__$$.length ? new $APP.cljs.core.IndexedSeq($args__5755__auto__$jscomp$251_argseq__5756__auto__$$.slice(1), 0, null) : null;
  return loom.label.add_labeled_edges.cljs$core$IFn$_invoke$arity$variadic(arguments[0], $args__5755__auto__$jscomp$251_argseq__5756__auto__$$);
};
loom.label.add_labeled_edges.cljs$core$IFn$_invoke$arity$variadic = function($g$$, $edges_PLUS_labels$$) {
  return $APP.cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(function($g__$1$$, $label$$) {
    var $vec__47792$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($label$$, 0, null), $n1$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__47792$$, 0, null), $n2$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($vec__47792$$, 1, null);
    $label$$ = $APP.cljs.core.nth.cljs$core$IFn$_invoke$arity$3($label$$, 1, null);
    return loom.label.add_label(loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic($g__$1$$, $APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$vec__47792$$], 0)), $n1$$, $n2$$, $label$$);
  }, $g$$, $APP.cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2, $edges_PLUS_labels$$));
};
loom.label.add_labeled_edges.cljs$lang$maxFixedArity = 1;
loom.label.add_labeled_edges.cljs$lang$applyTo = function($seq47771_seq47771__$1$$) {
  var $G__47772$$ = $APP.cljs.core.first($seq47771_seq47771__$1$$);
  $seq47771_seq47771__$1$$ = $APP.cljs.core.next($seq47771_seq47771__$1$$);
  return this.cljs$core$IFn$_invoke$arity$variadic($G__47772$$, $seq47771_seq47771__$1$$);
};
loom.derived = {};
loom.derived.mapped_by = function($f$$, $g$$) {
  return loom.graph.add_edges_STAR_(loom.graph.add_nodes_STAR_(loom.graph.directed_QMARK_($g$$) ? loom.graph.digraph() : loom.graph.graph(), $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($f$$, loom.graph.nodes($g$$))), $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__47736_SHARP_$$) {
    return $APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2($f$$, $p1__47736_SHARP_$$);
  }, loom.graph.edges($g$$)));
};
loom.derived.subgraph_reachable_from = function($g$$, $start$$) {
  return loom.graph.directed_QMARK_($g$$) ? loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$1574$start, $start$$, cljs$cst$2745$successors, function($p1__47737_SHARP_$$) {
    return loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g$$, $p1__47737_SHARP_$$);
  }, cljs$cst$2746$predecessors, function($p1__47738_SHARP_$$) {
    return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2($g$$, $p1__47738_SHARP_$$);
  }], 0)) : loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$1574$start, $start$$, cljs$cst$2745$successors, function($p1__47739_SHARP_$$) {
    return loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g$$, $p1__47739_SHARP_$$);
  }], 0));
};
loom.derived.nodes_filtered_by = function($pred$$, $g$$) {
  return loom.graph.add_edges_STAR_(loom.graph.add_nodes_STAR_(loom.graph.directed_QMARK_($g$$) ? loom.graph.digraph() : loom.graph.graph(), $APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2($pred$$, loom.graph.nodes($g$$))), $APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2(function($G__47742_p1__47740_SHARP_$$) {
    var $G__47741$jscomp$inline_5255_and__5023__auto__$$ = $APP.cljs.core.first($G__47742_p1__47740_SHARP_$$);
    $G__47741$jscomp$inline_5255_and__5023__auto__$$ = $pred$$.cljs$core$IFn$_invoke$arity$1 ? $pred$$.cljs$core$IFn$_invoke$arity$1($G__47741$jscomp$inline_5255_and__5023__auto__$$) : $pred$$.call(null, $G__47741$jscomp$inline_5255_and__5023__auto__$$);
    return $APP.cljs.core.truth_($G__47741$jscomp$inline_5255_and__5023__auto__$$) ? ($G__47742_p1__47740_SHARP_$$ = $APP.cljs.core.last($G__47742_p1__47740_SHARP_$$), $pred$$.cljs$core$IFn$_invoke$arity$1 ? $pred$$.cljs$core$IFn$_invoke$arity$1($G__47742_p1__47740_SHARP_$$) : $pred$$.call(null, $G__47742_p1__47740_SHARP_$$)) : $G__47741$jscomp$inline_5255_and__5023__auto__$$;
  }, loom.graph.edges($g$$)));
};
loom.derived.edges_filtered_by = function($pred$$, $g$$) {
  return loom.graph.add_edges_STAR_(loom.graph.add_nodes_STAR_(loom.graph.directed_QMARK_($g$$) ? loom.graph.digraph() : loom.graph.graph(), loom.graph.nodes($g$$)), $APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2($pred$$, loom.graph.edges($g$$)));
};
loom.derived.bipartite_subgraph = function($g$$, $edges$$) {
  var $subset__$1$$ = $APP.cljs.core.set($edges$$);
  $edges$$ = $APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2(function($p1__47743_SHARP_$$) {
    var $and__5023__auto__$$ = function() {
      var $G__47744$$ = $APP.cljs.core.first($p1__47743_SHARP_$$);
      return $subset__$1$$.cljs$core$IFn$_invoke$arity$1 ? $subset__$1$$.cljs$core$IFn$_invoke$arity$1($G__47744$$) : $subset__$1$$.call(null, $G__47744$$);
    }();
    return $APP.cljs.core.truth_($and__5023__auto__$$) ? $APP.cljs.core.not(function() {
      var $G__47745$$ = $APP.cljs.core.last($p1__47743_SHARP_$$);
      return $subset__$1$$.cljs$core$IFn$_invoke$arity$1 ? $subset__$1$$.cljs$core$IFn$_invoke$arity$1($G__47745$$) : $subset__$1$$.call(null, $G__47745$$);
    }()) : $and__5023__auto__$$;
  }, loom.graph.edges($g$$));
  return loom.graph.add_edges_STAR_(loom.graph.add_nodes_STAR_(loom.graph.directed_QMARK_($g$$) ? loom.graph.digraph() : loom.graph.graph(), $APP.cljs.core.flatten($edges$$)), $edges$$);
};
loom.derived.surroundings = function($g$$, $fsuccessors$jscomp$8_subset$$) {
  var $nodes_of_resulting_graph$$ = $APP.cljs.core.set($APP.cljs.core.remove.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.nil_QMARK_, $APP.clojure.set.union.cljs$core$IFn$_invoke$arity$2($APP.cljs.core.set($fsuccessors$jscomp$8_subset$$), $APP.cljs.core.flatten($APP.cljs.core.map.cljs$core$IFn$_invoke$arity$2(function($p1__47746_SHARP_$$) {
    return $APP.cljs.core.seq(loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g$$, $p1__47746_SHARP_$$));
  }, $fsuccessors$jscomp$8_subset$$)))));
  $fsuccessors$jscomp$8_subset$$ = function($n$$) {
    return $APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2(function($p1__47747_SHARP_$$) {
      return $nodes_of_resulting_graph$$.cljs$core$IFn$_invoke$arity$1 ? $nodes_of_resulting_graph$$.cljs$core$IFn$_invoke$arity$1($p1__47747_SHARP_$$) : $nodes_of_resulting_graph$$.call(null, $p1__47747_SHARP_$$);
    }, loom.graph.successors.cljs$core$IFn$_invoke$arity$2($g$$, $n$$));
  };
  return loom.graph.directed_QMARK_($g$$) ? loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$2023$nodes, $nodes_of_resulting_graph$$, cljs$cst$2745$successors, $fsuccessors$jscomp$8_subset$$, cljs$cst$2746$predecessors, function($n$$) {
    return $APP.cljs.core.filter.cljs$core$IFn$_invoke$arity$2(function($p1__47748_SHARP_$$) {
      return $nodes_of_resulting_graph$$.cljs$core$IFn$_invoke$arity$1 ? $nodes_of_resulting_graph$$.cljs$core$IFn$_invoke$arity$1($p1__47748_SHARP_$$) : $nodes_of_resulting_graph$$.call(null, $p1__47748_SHARP_$$);
    }, loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2($g$$, $n$$));
  }], 0)) : loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic($APP.cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$APP.cljs$cst$2023$nodes, $nodes_of_resulting_graph$$, cljs$cst$2745$successors, $fsuccessors$jscomp$8_subset$$], 0));
};
$APP.scittle.loom = {};
$APP.scittle.loom.init = function() {
  return $APP.scittle.core.register_plugin_BANG_(cljs$cst$2757$scittle_DOT_loom_SLASH_loom, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$398$namespaces, new $APP.cljs.core.PersistentArrayMap(null, 5, [cljs$cst$2758$loom_DOT_graph, $APP.sci.core._copy_ns($APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs.core.with_meta(cljs$cst$2759$in_edges, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$2760$loom_DOT_graph_SLASH_Digraph, $APP.cljs$cst$256$doc, 
  "Returns all the incoming edges of node", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$2762$weight, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$1242$e], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null))), $APP.cljs$cst$256$doc, "Returns the weight of edge e or edge [n1 n2]", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 
  6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$1242$e], 
  null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$1242$e], null), new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null, null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2765$__GT_FlyGraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, $APP.cljs$cst$2145$positional, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2736$fnodes, cljs$cst$2737$fedges, cljs$cst$2738$fsuccessors, $APP.cljs$cst$58$start], null))), $APP.cljs$cst$256$doc, "Positional factory function for loom.graph/FlyGraph."], null)), $APP.cljs.core.with_meta(cljs$cst$2766$has_node_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$2767$loom_DOT_graph_SLASH_Graph, $APP.cljs$cst$256$doc, "Returns true when node is in g", $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$2768$digraph, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$148$_AMPERSAND_, cljs$cst$2769$inits], null))), $APP.cljs$cst$256$doc, "Creates an unweighted, directed graph. inits can be edges, adjacency maps,\n  or graphs", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 0, $APP.cljs$cst$1379$max_fixed_arity, 0, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list(cljs$cst$2769$inits)], 
  null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, cljs$cst$2769$inits], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2770$map__GT_BasicEditableGraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, $APP.cljs$cst$202$map, $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2771$G__47024], null))), $APP.cljs$cst$256$doc, "Factory function for loom.graph/BasicEditableGraph, taking a map of keywords to field values."], null)), $APP.cljs.core.with_meta(cljs$cst$2772$predecessors, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null))), $APP.cljs$cst$256$doc, "Returns direct predecessors of node", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, 
  new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2773$weighted_graph, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, cljs$cst$2769$inits], null))), $APP.cljs$cst$256$doc, "Creates an weighted, undirected graph. inits can be edges, adjacency maps,\n  or graphs", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 0, $APP.cljs$cst$1379$max_fixed_arity, 0, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs.core.list(cljs$cst$2769$inits)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, cljs$cst$2769$inits], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2774$successors_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$2767$loom_DOT_graph_SLASH_Graph, 
  $APP.cljs$cst$256$doc, "Returns direct successors of node", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)))], null)), $APP.cljs.core.with_meta($APP.cljs$cst$77$editable_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Returns true if g satisfies the EditableGraph protocol"], null)), $APP.cljs.core.with_meta(cljs$cst$2775$EditableGraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2776$protocol_symbol, !0, $APP.cljs$cst$2777$protocol_info, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$463$methods, new $APP.cljs.core.PersistentArrayMap(null, 5, [$APP.cljs.core.with_meta(cljs$cst$2778$add_nodes_STAR_, 
  new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Add nodes to graph g. See add-nodes"], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$85$nodes], null)], null), $APP.cljs.core.with_meta(cljs$cst$2779$add_edges_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Add edges to graph g. See add-edges"], 
  null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$2780$edges], null)], null), $APP.cljs.core.with_meta(cljs$cst$2781$remove_nodes_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Remove nodes from graph g. See remove-nodes"], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$85$nodes], null)], null), $APP.cljs.core.with_meta(cljs$cst$2782$remove_edges_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Removes edges from graph g. See remove-edges"], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$2780$edges], null)], null), $APP.cljs.core.with_meta(cljs$cst$2783$remove_all, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Removes all nodes and edges from graph g"], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)], null)], null)], null), $APP.cljs$cst$465$sigs, 
  new $APP.cljs.core.PersistentArrayMap(null, 5, [cljs$cst$2784$add_nodes_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2778$add_nodes_STAR_, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$85$nodes], null)), $APP.cljs$cst$256$doc, "Add nodes to graph g. See add-nodes"], null), cljs$cst$2785$add_edges_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 
  3, [$APP.cljs$cst$272$name, cljs$cst$2779$add_edges_STAR_, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$2780$edges], null)), $APP.cljs$cst$256$doc, "Add edges to graph g. See add-edges"], null), cljs$cst$2786$remove_nodes_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2781$remove_nodes_STAR_, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$85$nodes], null)), $APP.cljs$cst$256$doc, "Remove nodes from graph g. See remove-nodes"], null), cljs$cst$2787$remove_edges_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2782$remove_edges_STAR_, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$2780$edges], 
  null)), $APP.cljs$cst$256$doc, "Removes edges from graph g. See remove-edges"], null), cljs$cst$2788$remove_all, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2783$remove_all, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Removes all nodes and edges from graph g"], null)], null), $APP.cljs$cst$2789$jsdoc, $APP.cljs.core.list("@interface")], 
  null)), $APP.cljs.core.with_meta(cljs$cst$2790$_STAR_default_weight_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$383$dynamic, !0, $APP.cljs$cst$256$doc, "Weight used when none is given for edges in weighted graphs"], null)), $APP.cljs.core.with_meta(cljs$cst$2791$__GT_BasicEditableDigraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, $APP.cljs$cst$2145$positional, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2731$nodeset, cljs$cst$2732$adj, $APP.cljs$cst$2401$in], null))), $APP.cljs$cst$256$doc, "Positional factory function for loom.graph/BasicEditableDigraph."], null)), $APP.cljs.core.with_meta(cljs$cst$2792$add_edges, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$2780$edges], null))), $APP.cljs$cst$256$doc, "Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].\n  For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the\n  latter defaulting to a weight of 1", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 
  1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2761$g, $APP.cljs$cst$2780$edges)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$2780$edges], null)), $APP.cljs$cst$1381$arglists_meta, 
  $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2793$add_nodes, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$85$nodes], null))), $APP.cljs$cst$256$doc, "Adds nodes to graph g. Nodes can be any type of object", $APP.cljs$cst$1377$top_fn, 
  new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2761$g, $APP.cljs$cst$85$nodes)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$85$nodes], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2794$weighted_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, 
  "Returns true if g satisfies the WeightedGraph protocol"], null)), $APP.cljs.core.with_meta(cljs$cst$2795$__GT_BasicEditableGraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, $APP.cljs$cst$2145$positional, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2731$nodeset, cljs$cst$2732$adj], 
  null))), $APP.cljs$cst$256$doc, "Positional factory function for loom.graph/BasicEditableGraph."], null)), $APP.cljs.core.with_meta(cljs$cst$2796$directed_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Returns true if g satisfies the Digraph protocol"], 
  null)), $APP.cljs.core.with_meta(cljs$cst$2797$weight_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$466$protocol, cljs$cst$2798$loom_DOT_graph_SLASH_WeightedGraph, $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$1242$e], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$1242$e], 
  null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$1242$e], null), new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null))), $APP.cljs$cst$256$doc, "Returns the weight of edge e or edge [n1 n2]"], null)), $APP.cljs.core.with_meta(cljs$cst$2799$map__GT_WeightedFlyGraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, $APP.cljs$cst$202$map, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2800$G__47217], null))), $APP.cljs$cst$256$doc, "Factory function for loom.graph/WeightedFlyGraph, taking a map of keywords to field values."], null)), $APP.cljs.core.with_meta($APP.cljs$cst$2780$edges, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$2767$loom_DOT_graph_SLASH_Graph, $APP.cljs$cst$256$doc, "Edges in g. May return each edge twice in an undirected graph", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$2779$add_edges_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$2801$loom_DOT_graph_SLASH_EditableGraph, $APP.cljs$cst$256$doc, "Add edges to graph g. See add-edges", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$2780$edges], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$2802$__GT_FlyDigraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, $APP.cljs$cst$2145$positional, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [cljs$cst$2736$fnodes, cljs$cst$2737$fedges, cljs$cst$2738$fsuccessors, cljs$cst$2740$fpredecessors, $APP.cljs$cst$58$start], null))), $APP.cljs$cst$256$doc, "Positional factory function for loom.graph/FlyDigraph."], null)), $APP.cljs.core.with_meta(cljs$cst$2778$add_nodes_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$2801$loom_DOT_graph_SLASH_EditableGraph, $APP.cljs$cst$256$doc, "Add nodes to graph g. See add-nodes", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$85$nodes], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$2803$__GT_BasicEditableWeightedGraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, $APP.cljs$cst$2145$positional, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2731$nodeset, cljs$cst$2732$adj], null))), $APP.cljs$cst$256$doc, "Positional factory function for loom.graph/BasicEditableWeightedGraph."], null)), $APP.cljs.core.with_meta(cljs$cst$2804$fly_graph, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, 
  new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$85$nodes, $APP.cljs$cst$2780$edges, cljs$cst$2805$successors, cljs$cst$2772$predecessors, cljs$cst$2762$weight, $APP.cljs$cst$58$start], null)], null)], null))), $APP.cljs$cst$256$doc, "Creates a read-only, ad-hoc graph which uses the provided functions\n  to return values for nodes, edges, etc. If any members are not functions,\n  they will be returned as-is. Edges can be inferred if nodes and\n  successors are provided. Nodes and edges can be inferred if successors and\n  start are provided.", 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 0, $APP.cljs$cst$1379$max_fixed_arity, 0, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list(new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$85$nodes, $APP.cljs$cst$2780$edges, cljs$cst$2805$successors, cljs$cst$2772$predecessors, cljs$cst$2762$weight, $APP.cljs$cst$58$start], null)], null))], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$85$nodes, $APP.cljs$cst$2780$edges, cljs$cst$2805$successors, cljs$cst$2772$predecessors, cljs$cst$2762$weight, $APP.cljs$cst$58$start], null)], null)], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2806$subgraph, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$6$ns], null))), $APP.cljs$cst$256$doc, "Returns a graph with only the given nodes"], null)), $APP.cljs.core.with_meta($APP.cljs$cst$85$nodes, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$2767$loom_DOT_graph_SLASH_Graph, $APP.cljs$cst$256$doc, "Returns a collection of the nodes in graph g", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$2807$add_path, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$85$nodes], null))), $APP.cljs$cst$256$doc, "Adds a path of edges connecting the given nodes in order", 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2761$g, $APP.cljs$cst$85$nodes)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$85$nodes], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2808$WeightedGraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2776$protocol_symbol, !0, $APP.cljs$cst$2777$protocol_info, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$463$methods, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs.core.with_meta(cljs$cst$2797$weight_STAR_, 
  new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Returns the weight of edge e or edge [n1 n2]"], null)), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$1242$e], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, 
  cljs$cst$2764$n2], null)], null)], null)], null), $APP.cljs$cst$465$sigs, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$2809$weight_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2797$weight_STAR_, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$1242$e], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)), $APP.cljs$cst$256$doc, "Returns the weight of edge e or edge [n1 n2]"], null)], null), $APP.cljs$cst$2789$jsdoc, $APP.cljs.core.list("@interface")], null)), $APP.cljs.core.with_meta(cljs$cst$2810$Edge, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2776$protocol_symbol, !0, $APP.cljs$cst$2777$protocol_info, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$463$methods, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs.core.with_meta($APP.cljs$cst$2811$src, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Returns the source node of the edge"], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2812$edge], null)], null), $APP.cljs.core.with_meta($APP.cljs$cst$2813$dest, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, 
  "Returns the dest node of the edge"], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2812$edge], null)], null)], null)], null), $APP.cljs$cst$465$sigs, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1398$src, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, $APP.cljs$cst$2811$src, $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2812$edge], null)), $APP.cljs$cst$256$doc, "Returns the source node of the edge"], null), cljs$cst$2728$dest, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, $APP.cljs$cst$2813$dest, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2812$edge], 
  null)), $APP.cljs$cst$256$doc, "Returns the dest node of the edge"], null)], null), $APP.cljs$cst$2789$jsdoc, $APP.cljs.core.list("@interface")], null)), $APP.cljs.core.with_meta(cljs$cst$2814$weighted_digraph, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, cljs$cst$2769$inits], null))), 
  $APP.cljs$cst$256$doc, "Creates an weighted, directed graph. inits can be edges, adjacency maps,\n  or graphs", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 0, $APP.cljs$cst$1379$max_fixed_arity, 0, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list(cljs$cst$2769$inits)], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, cljs$cst$2769$inits], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2815$graph_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Returns true if g satisfies the Graph protocol"], null)), $APP.cljs.core.with_meta(cljs$cst$2816$remove_nodes, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$85$nodes], null))), $APP.cljs$cst$256$doc, 
  "Removes nodes from graph g", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2761$g, $APP.cljs$cst$85$nodes)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$85$nodes], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2782$remove_edges_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$2801$loom_DOT_graph_SLASH_EditableGraph, $APP.cljs$cst$256$doc, "Removes edges from graph g. See remove-edges", $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$2780$edges], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$2817$map__GT_FlyDigraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, $APP.cljs$cst$202$map, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2818$G__47202], null))), $APP.cljs$cst$256$doc, "Factory function for loom.graph/FlyDigraph, taking a map of keywords to field values."], null)), $APP.cljs.core.with_meta(cljs$cst$2781$remove_nodes_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$2801$loom_DOT_graph_SLASH_EditableGraph, $APP.cljs$cst$256$doc, "Remove nodes from graph g. See remove-nodes", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$85$nodes], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$2819$predecessors_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$2760$loom_DOT_graph_SLASH_Digraph, $APP.cljs$cst$256$doc, "Returns direct predecessors of node", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$2783$remove_all, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$2801$loom_DOT_graph_SLASH_EditableGraph, $APP.cljs$cst$256$doc, "Removes all nodes and edges from graph g", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, 
  $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$2820$add_cycle, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$85$nodes], null))), $APP.cljs$cst$256$doc, "Adds a cycle of edges connecting the given nodes in order", 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2761$g, $APP.cljs$cst$85$nodes)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$85$nodes], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2821$out_degree, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$2767$loom_DOT_graph_SLASH_Graph, $APP.cljs$cst$256$doc, "Returns the number of outgoing edges of node", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$2822$in_degree, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$2760$loom_DOT_graph_SLASH_Digraph, $APP.cljs$cst$256$doc, "Returns the number of direct predecessors to node", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 
  5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)))], null)), $APP.cljs.core.with_meta($APP.cljs$cst$2813$dest, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$2823$loom_DOT_graph_SLASH_Edge, $APP.cljs$cst$256$doc, "Returns the dest node of the edge", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2812$edge], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$2824$map__GT_BasicEditableWeightedGraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, $APP.cljs$cst$202$map, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2825$G__47054], null))), $APP.cljs$cst$256$doc, 
  "Factory function for loom.graph/BasicEditableWeightedGraph, taking a map of keywords to field values."], null)), $APP.cljs.core.with_meta(cljs$cst$2826$__GT_WeightedFlyGraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, $APP.cljs$cst$2145$positional, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [cljs$cst$2736$fnodes, cljs$cst$2737$fedges, cljs$cst$2738$fsuccessors, cljs$cst$2742$fweight, $APP.cljs$cst$58$start], null))), $APP.cljs$cst$256$doc, "Positional factory function for loom.graph/WeightedFlyGraph."], null)), $APP.cljs.core.with_meta(cljs$cst$2827$Digraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2776$protocol_symbol, !0, $APP.cljs$cst$2777$protocol_info, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$463$methods, new $APP.cljs.core.PersistentArrayMap(null, 
  4, [$APP.cljs.core.with_meta(cljs$cst$2819$predecessors_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Returns direct predecessors of node"], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)], null), $APP.cljs.core.with_meta(cljs$cst$2822$in_degree, new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$256$doc, "Returns the number of direct predecessors to node"], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)], null), $APP.cljs.core.with_meta(cljs$cst$2759$in_edges, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Returns all the incoming edges of node"], 
  null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)], null), $APP.cljs.core.with_meta($APP.cljs$cst$2828$transpose, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Returns a graph with all edges reversed"], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)], null)], null)], null), $APP.cljs$cst$465$sigs, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$2829$predecessors_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2819$predecessors_STAR_, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)), $APP.cljs$cst$256$doc, "Returns direct predecessors of node"], null), cljs$cst$2830$in_degree, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2822$in_degree, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)), $APP.cljs$cst$256$doc, "Returns the number of direct predecessors to node"], 
  null), cljs$cst$2831$in_edges, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2759$in_edges, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)), $APP.cljs$cst$256$doc, "Returns all the incoming edges of node"], null), $APP.cljs$cst$2832$transpose, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, $APP.cljs$cst$2828$transpose, 
  $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns a graph with all edges reversed"], null)], null), $APP.cljs$cst$2789$jsdoc, $APP.cljs.core.list("@interface")], null)), $APP.cljs.core.with_meta(cljs$cst$2833$__GT_BasicEditableWeightedDigraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, 
  $APP.cljs$cst$2145$positional, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2731$nodeset, cljs$cst$2732$adj, $APP.cljs$cst$2401$in], null))), $APP.cljs$cst$256$doc, "Positional factory function for loom.graph/BasicEditableWeightedDigraph."], null)), $APP.cljs.core.with_meta(cljs$cst$2834$Graph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2776$protocol_symbol, 
  !0, $APP.cljs$cst$2777$protocol_info, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$463$methods, new $APP.cljs.core.PersistentArrayMap(null, 7, [$APP.cljs.core.with_meta($APP.cljs$cst$85$nodes, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Returns a collection of the nodes in graph g"], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g], null)], null), $APP.cljs.core.with_meta($APP.cljs$cst$2780$edges, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Edges in g. May return each edge twice in an undirected graph"], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)], null), $APP.cljs.core.with_meta(cljs$cst$2766$has_node_QMARK_, 
  new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Returns true when node is in g"], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)], null), $APP.cljs.core.with_meta(cljs$cst$2835$has_edge_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Returns true when edge [n1 n2] is in g"], 
  null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)], null), $APP.cljs.core.with_meta(cljs$cst$2774$successors_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Returns direct successors of node"], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)], null), $APP.cljs.core.with_meta(cljs$cst$2821$out_degree, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Returns the number of outgoing edges of node"], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)], null), $APP.cljs.core.with_meta(cljs$cst$2836$out_edges, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Returns all the outgoing edges of node"], null)), new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)], null)], null)], null), $APP.cljs$cst$465$sigs, 
  new $APP.cljs.core.PersistentArrayMap(null, 7, [$APP.cljs$cst$2023$nodes, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, $APP.cljs$cst$85$nodes, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns a collection of the nodes in graph g"], null), $APP.cljs$cst$2744$edges, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
  $APP.cljs$cst$2780$edges, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Edges in g. May return each edge twice in an undirected graph"], null), cljs$cst$2837$has_node_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2766$has_node_QMARK_, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)), $APP.cljs$cst$256$doc, "Returns true when node is in g"], null), cljs$cst$2838$has_edge_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2835$has_edge_QMARK_, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], 
  null)), $APP.cljs$cst$256$doc, "Returns true when edge [n1 n2] is in g"], null), cljs$cst$2839$successors_STAR_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2774$successors_STAR_, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)), $APP.cljs$cst$256$doc, "Returns direct successors of node"], null), cljs$cst$2840$out_degree, 
  new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2821$out_degree, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)), $APP.cljs$cst$256$doc, "Returns the number of outgoing edges of node"], null), cljs$cst$2841$out_edges, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2836$out_edges, $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)), $APP.cljs$cst$256$doc, "Returns all the outgoing edges of node"], null)], null), $APP.cljs$cst$2789$jsdoc, $APP.cljs.core.list("@interface")], null)), $APP.cljs.core.with_meta(cljs$cst$2842$map__GT_BasicEditableDigraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, 
  $APP.cljs$cst$202$map, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2843$G__47039], null))), $APP.cljs$cst$256$doc, "Factory function for loom.graph/BasicEditableDigraph, taking a map of keywords to field values."], null)), $APP.cljs.core.with_meta($APP.cljs$cst$2218$graph, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, cljs$cst$2769$inits], null))), $APP.cljs$cst$256$doc, "Creates an unweighted, undirected graph. inits can be edges, adjacency maps,\n  or graphs", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 0, $APP.cljs$cst$1379$max_fixed_arity, 
  0, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list(cljs$cst$2769$inits)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, cljs$cst$2769$inits], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2844$map__GT_BasicEditableWeightedDigraph, 
  new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, $APP.cljs$cst$202$map, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2845$G__47069], null))), $APP.cljs$cst$256$doc, "Factory function for loom.graph/BasicEditableWeightedDigraph, taking a map of keywords to field values."], null)), $APP.cljs.core.with_meta(cljs$cst$2846$__GT_WeightedFlyDigraph, 
  new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, $APP.cljs$cst$2145$positional, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2736$fnodes, cljs$cst$2737$fedges, cljs$cst$2738$fsuccessors, cljs$cst$2740$fpredecessors, cljs$cst$2742$fweight, $APP.cljs$cst$58$start], null))), $APP.cljs$cst$256$doc, 
  "Positional factory function for loom.graph/WeightedFlyDigraph."], null)), $APP.cljs.core.with_meta($APP.cljs$cst$2828$transpose, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$2760$loom_DOT_graph_SLASH_Digraph, $APP.cljs$cst$256$doc, "Returns a graph with all edges reversed", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g], null)))], null)), $APP.cljs.core.with_meta($APP.cljs$cst$2811$src, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$2823$loom_DOT_graph_SLASH_Edge, $APP.cljs$cst$256$doc, "Returns the source node of the edge", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2812$edge], null)))], null)), 
  $APP.cljs.core.with_meta(cljs$cst$2847$build_graph, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, cljs$cst$2769$inits], null))), $APP.cljs$cst$256$doc, "Builds up a graph (i.e. adds edges and nodes) from any combination of\n  other graphs, adjacency maps, edges, or nodes.", 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2761$g, cljs$cst$2769$inits)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, cljs$cst$2769$inits], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2848$remove_edges, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, 
  $APP.cljs$cst$2780$edges], null))), $APP.cljs$cst$256$doc, "Removes edges from graph g. Do not include weights", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2761$g, $APP.cljs$cst$2780$edges)], null), 
  $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$2780$edges], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2835$has_edge_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$2767$loom_DOT_graph_SLASH_Graph, $APP.cljs$cst$256$doc, 
  "Returns true when edge [n1 n2] is in g", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$2849$map__GT_WeightedFlyDigraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, $APP.cljs$cst$202$map, 
  $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2850$G__47232], null))), $APP.cljs$cst$256$doc, "Factory function for loom.graph/WeightedFlyDigraph, taking a map of keywords to field values."], null)), $APP.cljs.core.with_meta(cljs$cst$2851$map__GT_FlyGraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2138$internal_ctor, !0, $APP.cljs$cst$2139$factory, 
  $APP.cljs$cst$202$map, $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2852$G__47187], null))), $APP.cljs$cst$256$doc, "Factory function for loom.graph/FlyGraph, taking a map of keywords to field values."], null)), $APP.cljs.core.with_meta(cljs$cst$2836$out_edges, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$466$protocol, cljs$cst$2767$loom_DOT_graph_SLASH_Graph, 
  $APP.cljs$cst$256$doc, "Returns all the outgoing edges of node", $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)))], null)), $APP.cljs.core.with_meta(cljs$cst$2805$successors, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null))), $APP.cljs$cst$256$doc, "Returns direct successors of node", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, 
  new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null))], [new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2853$loom_DOT_graph_SLASH_in_edges, $APP.cljs$cst$108$val, loom.graph.in_edges, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)), $APP.cljs$cst$256$doc, "Returns all the incoming edges of node"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2854$loom_DOT_graph_SLASH_weight, $APP.cljs$cst$108$val, loom.graph.weight, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$1242$e], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)), $APP.cljs$cst$256$doc, "Returns the weight of edge e or edge [n1 n2]"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2855$loom_DOT_graph_SLASH___GT_FlyGraph, $APP.cljs$cst$108$val, loom.graph.__GT_FlyGraph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2736$fnodes, cljs$cst$2737$fedges, cljs$cst$2738$fsuccessors, $APP.cljs$cst$58$start], null)), 
  $APP.cljs$cst$256$doc, "Positional factory function for loom.graph/FlyGraph."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2856$loom_DOT_graph_SLASH_has_node_QMARK_, $APP.cljs$cst$108$val, loom.graph.has_node_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, 
  $APP.cljs$cst$64$node], null)), $APP.cljs$cst$256$doc, "Returns true when node is in g"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2857$loom_DOT_graph_SLASH_digraph, $APP.cljs$cst$108$val, loom.graph.digraph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, 
  cljs$cst$2769$inits], null)), $APP.cljs$cst$256$doc, "Creates an unweighted, directed graph. inits can be edges, adjacency maps,\n  or graphs"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2858$loom_DOT_graph_SLASH_map__GT_BasicEditableGraph, $APP.cljs$cst$108$val, loom.graph.map__GT_BasicEditableGraph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2771$G__47024], null)), $APP.cljs$cst$256$doc, "Factory function for loom.graph/BasicEditableGraph, taking a map of keywords to field values."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2859$loom_DOT_graph_SLASH_predecessors, $APP.cljs$cst$108$val, loom.graph.predecessors, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)), $APP.cljs$cst$256$doc, "Returns direct predecessors of node"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2860$loom_DOT_graph_SLASH_weighted_graph, $APP.cljs$cst$108$val, loom.graph.weighted_graph, $APP.cljs$cst$2$meta, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, cljs$cst$2769$inits], null)), $APP.cljs$cst$256$doc, "Creates an weighted, undirected graph. inits can be edges, adjacency maps,\n  or graphs"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2861$loom_DOT_graph_SLASH_successors_STAR_, 
  $APP.cljs$cst$108$val, loom.graph.successors_STAR_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)), $APP.cljs$cst$256$doc, "Returns direct successors of node"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2862$loom_DOT_graph_SLASH_editable_QMARK_, 
  $APP.cljs$cst$108$val, loom.graph.editable_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns true if g satisfies the EditableGraph protocol"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2801$loom_DOT_graph_SLASH_EditableGraph, 
  $APP.cljs$cst$108$val, loom.graph.EditableGraph, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2863$loom_DOT_graph_SLASH__STAR_default_weight_STAR_, $APP.cljs$cst$108$val, loom.graph._STAR_default_weight_STAR_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$256$doc, "Weight used when none is given for edges in weighted graphs", $APP.cljs$cst$383$dynamic, 
  !0], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2864$loom_DOT_graph_SLASH___GT_BasicEditableDigraph, $APP.cljs$cst$108$val, loom.graph.__GT_BasicEditableDigraph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2731$nodeset, cljs$cst$2732$adj, $APP.cljs$cst$2401$in], null)), 
  $APP.cljs$cst$256$doc, "Positional factory function for loom.graph/BasicEditableDigraph."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2865$loom_DOT_graph_SLASH_add_edges, $APP.cljs$cst$108$val, loom.graph.add_edges, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, 
  $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$2780$edges], null)), $APP.cljs$cst$256$doc, "Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].\n  For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the\n  latter defaulting to a weight of 1"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2866$loom_DOT_graph_SLASH_add_nodes, $APP.cljs$cst$108$val, loom.graph.add_nodes, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$85$nodes], null)), $APP.cljs$cst$256$doc, "Adds nodes to graph g. Nodes can be any type of object"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2867$loom_DOT_graph_SLASH_weighted_QMARK_, $APP.cljs$cst$108$val, loom.graph.weighted_QMARK_, 
  $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns true if g satisfies the WeightedGraph protocol"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2868$loom_DOT_graph_SLASH___GT_BasicEditableGraph, $APP.cljs$cst$108$val, loom.graph.__GT_BasicEditableGraph, 
  $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2731$nodeset, cljs$cst$2732$adj], null)), $APP.cljs$cst$256$doc, "Positional factory function for loom.graph/BasicEditableGraph."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2869$loom_DOT_graph_SLASH_directed_QMARK_, $APP.cljs$cst$108$val, 
  loom.graph.directed_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns true if g satisfies the Digraph protocol"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2870$loom_DOT_graph_SLASH_weight_STAR_, $APP.cljs$cst$108$val, 
  loom.graph.weight_STAR_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$1242$e], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)), $APP.cljs$cst$256$doc, "Returns the weight of edge e or edge [n1 n2]"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2871$loom_DOT_graph_SLASH_map__GT_WeightedFlyGraph, $APP.cljs$cst$108$val, loom.graph.map__GT_WeightedFlyGraph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2800$G__47217], null)), $APP.cljs$cst$256$doc, "Factory function for loom.graph/WeightedFlyGraph, taking a map of keywords to field values."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2872$loom_DOT_graph_SLASH_edges, $APP.cljs$cst$108$val, loom.graph.edges, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Edges in g. May return each edge twice in an undirected graph"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2873$loom_DOT_graph_SLASH_add_edges_STAR_, $APP.cljs$cst$108$val, loom.graph.add_edges_STAR_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$2780$edges], null)), $APP.cljs$cst$256$doc, "Add edges to graph g. See add-edges"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2874$loom_DOT_graph_SLASH___GT_FlyDigraph, $APP.cljs$cst$108$val, loom.graph.__GT_FlyDigraph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2736$fnodes, cljs$cst$2737$fedges, cljs$cst$2738$fsuccessors, cljs$cst$2740$fpredecessors, 
  $APP.cljs$cst$58$start], null)), $APP.cljs$cst$256$doc, "Positional factory function for loom.graph/FlyDigraph."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2875$loom_DOT_graph_SLASH_add_nodes_STAR_, $APP.cljs$cst$108$val, loom.graph.add_nodes_STAR_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$85$nodes], null)), $APP.cljs$cst$256$doc, "Add nodes to graph g. See add-nodes"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2876$loom_DOT_graph_SLASH___GT_BasicEditableWeightedGraph, $APP.cljs$cst$108$val, loom.graph.__GT_BasicEditableWeightedGraph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2731$nodeset, cljs$cst$2732$adj], null)), $APP.cljs$cst$256$doc, "Positional factory function for loom.graph/BasicEditableWeightedGraph."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2877$loom_DOT_graph_SLASH_fly_graph, $APP.cljs$cst$108$val, loom.graph.fly_graph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$85$nodes, $APP.cljs$cst$2780$edges, cljs$cst$2805$successors, cljs$cst$2772$predecessors, cljs$cst$2762$weight, $APP.cljs$cst$58$start], null)], null)], null)), $APP.cljs$cst$256$doc, "Creates a read-only, ad-hoc graph which uses the provided functions\n  to return values for nodes, edges, etc. If any members are not functions,\n  they will be returned as-is. Edges can be inferred if nodes and\n  successors are provided. Nodes and edges can be inferred if successors and\n  start are provided."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2878$loom_DOT_graph_SLASH_subgraph, $APP.cljs$cst$108$val, loom.graph.subgraph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$6$ns], null)), $APP.cljs$cst$256$doc, "Returns a graph with only the given nodes"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2879$loom_DOT_graph_SLASH_nodes, $APP.cljs$cst$108$val, loom.graph.nodes, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns a collection of the nodes in graph g"], null)], null), 
  new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2880$loom_DOT_graph_SLASH_add_path, $APP.cljs$cst$108$val, loom.graph.add_path, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$85$nodes], null)), $APP.cljs$cst$256$doc, "Adds a path of edges connecting the given nodes in order"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2798$loom_DOT_graph_SLASH_WeightedGraph, $APP.cljs$cst$108$val, loom.graph.WeightedGraph, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2823$loom_DOT_graph_SLASH_Edge, $APP.cljs$cst$108$val, loom.graph.Edge, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 
  3, [$APP.cljs$cst$272$name, cljs$cst$2881$loom_DOT_graph_SLASH_weighted_digraph, $APP.cljs$cst$108$val, loom.graph.weighted_digraph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, cljs$cst$2769$inits], null)), $APP.cljs$cst$256$doc, "Creates an weighted, directed graph. inits can be edges, adjacency maps,\n  or graphs"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2882$loom_DOT_graph_SLASH_graph_QMARK_, $APP.cljs$cst$108$val, loom.graph.graph_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns true if g satisfies the Graph protocol"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2883$loom_DOT_graph_SLASH_remove_nodes, $APP.cljs$cst$108$val, loom.graph.remove_nodes, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$85$nodes], null)), $APP.cljs$cst$256$doc, 
  "Removes nodes from graph g"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2884$loom_DOT_graph_SLASH_remove_edges_STAR_, $APP.cljs$cst$108$val, loom.graph.remove_edges_STAR_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$2780$edges], null)), $APP.cljs$cst$256$doc, 
  "Removes edges from graph g. See remove-edges"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2885$loom_DOT_graph_SLASH_map__GT_FlyDigraph, $APP.cljs$cst$108$val, loom.graph.map__GT_FlyDigraph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2818$G__47202], null)), $APP.cljs$cst$256$doc, 
  "Factory function for loom.graph/FlyDigraph, taking a map of keywords to field values."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2886$loom_DOT_graph_SLASH_remove_nodes_STAR_, $APP.cljs$cst$108$val, loom.graph.remove_nodes_STAR_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, 
  $APP.cljs$cst$85$nodes], null)), $APP.cljs$cst$256$doc, "Remove nodes from graph g. See remove-nodes"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2887$loom_DOT_graph_SLASH_predecessors_STAR_, $APP.cljs$cst$108$val, loom.graph.predecessors_STAR_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)), $APP.cljs$cst$256$doc, "Returns direct predecessors of node"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2888$loom_DOT_graph_SLASH_remove_all, $APP.cljs$cst$108$val, loom.graph.remove_all, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Removes all nodes and edges from graph g"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2889$loom_DOT_graph_SLASH_add_cycle, $APP.cljs$cst$108$val, loom.graph.add_cycle, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, 
  $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$85$nodes], null)), $APP.cljs$cst$256$doc, "Adds a cycle of edges connecting the given nodes in order"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2890$loom_DOT_graph_SLASH_out_degree, $APP.cljs$cst$108$val, loom.graph.out_degree, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)), $APP.cljs$cst$256$doc, "Returns the number of outgoing edges of node"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2891$loom_DOT_graph_SLASH_in_degree, $APP.cljs$cst$108$val, loom.graph.in_degree, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)), $APP.cljs$cst$256$doc, "Returns the number of direct predecessors to node"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2892$loom_DOT_graph_SLASH_dest, $APP.cljs$cst$108$val, loom.graph.dest, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2812$edge], null)), $APP.cljs$cst$256$doc, "Returns the dest node of the edge"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2893$loom_DOT_graph_SLASH_map__GT_BasicEditableWeightedGraph, $APP.cljs$cst$108$val, loom.graph.map__GT_BasicEditableWeightedGraph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [cljs$cst$2825$G__47054], null)), $APP.cljs$cst$256$doc, "Factory function for loom.graph/BasicEditableWeightedGraph, taking a map of keywords to field values."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2894$loom_DOT_graph_SLASH___GT_WeightedFlyGraph, $APP.cljs$cst$108$val, loom.graph.__GT_WeightedFlyGraph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2736$fnodes, cljs$cst$2737$fedges, cljs$cst$2738$fsuccessors, cljs$cst$2742$fweight, $APP.cljs$cst$58$start], null)), $APP.cljs$cst$256$doc, "Positional factory function for loom.graph/WeightedFlyGraph."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2760$loom_DOT_graph_SLASH_Digraph, $APP.cljs$cst$108$val, loom.graph.Digraph, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], 
  null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2895$loom_DOT_graph_SLASH___GT_BasicEditableWeightedDigraph, $APP.cljs$cst$108$val, loom.graph.__GT_BasicEditableWeightedDigraph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2731$nodeset, cljs$cst$2732$adj, $APP.cljs$cst$2401$in], null)), 
  $APP.cljs$cst$256$doc, "Positional factory function for loom.graph/BasicEditableWeightedDigraph."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2767$loom_DOT_graph_SLASH_Graph, $APP.cljs$cst$108$val, loom.graph.Graph, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2896$loom_DOT_graph_SLASH_map__GT_BasicEditableDigraph, $APP.cljs$cst$108$val, 
  loom.graph.map__GT_BasicEditableDigraph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2843$G__47039], null)), $APP.cljs$cst$256$doc, "Factory function for loom.graph/BasicEditableDigraph, taking a map of keywords to field values."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2897$loom_DOT_graph_SLASH_graph, 
  $APP.cljs$cst$108$val, loom.graph.graph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$148$_AMPERSAND_, cljs$cst$2769$inits], null)), $APP.cljs$cst$256$doc, "Creates an unweighted, undirected graph. inits can be edges, adjacency maps,\n  or graphs"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
  cljs$cst$2898$loom_DOT_graph_SLASH_map__GT_BasicEditableWeightedDigraph, $APP.cljs$cst$108$val, loom.graph.map__GT_BasicEditableWeightedDigraph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2845$G__47069], null)), $APP.cljs$cst$256$doc, "Factory function for loom.graph/BasicEditableWeightedDigraph, taking a map of keywords to field values."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2899$loom_DOT_graph_SLASH___GT_WeightedFlyDigraph, $APP.cljs$cst$108$val, loom.graph.__GT_WeightedFlyDigraph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2736$fnodes, cljs$cst$2737$fedges, cljs$cst$2738$fsuccessors, cljs$cst$2740$fpredecessors, 
  cljs$cst$2742$fweight, $APP.cljs$cst$58$start], null)), $APP.cljs$cst$256$doc, "Positional factory function for loom.graph/WeightedFlyDigraph."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2900$loom_DOT_graph_SLASH_transpose, $APP.cljs$cst$108$val, loom.graph.transpose, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns a graph with all edges reversed"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2901$loom_DOT_graph_SLASH_src, $APP.cljs$cst$108$val, loom.graph.src, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2812$edge], 
  null)), $APP.cljs$cst$256$doc, "Returns the source node of the edge"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2902$loom_DOT_graph_SLASH_build_graph, $APP.cljs$cst$108$val, loom.graph.build_graph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, 
  cljs$cst$2769$inits], null)), $APP.cljs$cst$256$doc, "Builds up a graph (i.e. adds edges and nodes) from any combination of\n  other graphs, adjacency maps, edges, or nodes."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2903$loom_DOT_graph_SLASH_remove_edges, $APP.cljs$cst$108$val, loom.graph.remove_edges, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$2780$edges], null)), $APP.cljs$cst$256$doc, "Removes edges from graph g. Do not include weights"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2904$loom_DOT_graph_SLASH_has_edge_QMARK_, $APP.cljs$cst$108$val, loom.graph.has_edge_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)), $APP.cljs$cst$256$doc, "Returns true when edge [n1 n2] is in g"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2905$loom_DOT_graph_SLASH_map__GT_WeightedFlyDigraph, $APP.cljs$cst$108$val, loom.graph.map__GT_WeightedFlyDigraph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2850$G__47232], null)), $APP.cljs$cst$256$doc, "Factory function for loom.graph/WeightedFlyDigraph, taking a map of keywords to field values."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2906$loom_DOT_graph_SLASH_map__GT_FlyGraph, $APP.cljs$cst$108$val, loom.graph.map__GT_FlyGraph, $APP.cljs$cst$2$meta, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2852$G__47187], null)), $APP.cljs$cst$256$doc, "Factory function for loom.graph/FlyGraph, taking a map of keywords to field values."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2907$loom_DOT_graph_SLASH_out_edges, $APP.cljs$cst$108$val, loom.graph.out_edges, 
  $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)), $APP.cljs$cst$256$doc, "Returns all the outgoing edges of node"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2908$loom_DOT_graph_SLASH_successors, $APP.cljs$cst$108$val, loom.graph.successors, 
  $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null)), $APP.cljs$cst$256$doc, "Returns direct successors of node"], null)], null)]), $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$2758$loom_DOT_graph, 
  null)), cljs$cst$2909$loom_DOT_alg, $APP.sci.core._copy_ns($APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs.core.with_meta(cljs$cst$2910$greedy_coloring, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Greedily color the vertices of a graph using the first-fit heuristic.\n  Returns a map of nodes to colors (0, 1, ...)."], 
  null)), $APP.cljs.core.with_meta(cljs$cst$2911$distinct_edges, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Returns the distinct edges of g. Only useful for undirected graphs"], null)), $APP.cljs.core.with_meta(cljs$cst$2912$bipartite_sets, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Returns two sets of nodes, one for each color of the bipartite coloring,\n  or nil if g is not bipartite"], null)), $APP.cljs.core.with_meta(cljs$cst$2913$dijkstra_traverse, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$52$f], null))), $APP.cljs$cst$256$doc, "Returns a lazy-seq of [current-node state] where state is a map in\n  the format {node [distance predecessor]}. When f is provided,\n  returns a lazy-seq of (f node state) for each node", 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$52$f], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, 
  $APP.cljs$cst$58$start], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$52$f], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null, null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2914$dag_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Returns true if g is a directed acyclic graph"], null)), $APP.cljs.core.with_meta(cljs$cst$2915$pre_traverse, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null))), $APP.cljs$cst$256$doc, "Traverses graph g depth-first from start. Returns a lazy seq of nodes.\n  When no starting node is provided, traverses the entire graph, connected\n  or not.", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, 
  new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2916$degeneracy_ordering, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Returns sequence of vertices in degeneracy order."], null)), $APP.cljs.core.with_meta(cljs$cst$2917$strongly_connected_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)))], 
  null)), $APP.cljs.core.with_meta(cljs$cst$2918$longest_shortest_path, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null))), $APP.cljs$cst$256$doc, "Finds the longest shortest path beginning at start, using Dijkstra's\n  algorithm if the graph is weighted, breadth-first search otherwise."], 
  null)), $APP.cljs.core.with_meta(cljs$cst$2919$prim_mst, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2920$wg], null))), $APP.cljs$cst$256$doc, "Minimum spanning tree of given graph. If the graph contains more than one\n   component then returns a spanning forest of minimum spanning trees."], null)), 
  $APP.cljs.core.with_meta(cljs$cst$2921$density, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [cljs$cst$2922$loops], null), $APP.cljs$cst$712$or, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$2922$loops, !1], null)], null)], null))), $APP.cljs$cst$256$doc, "Return the density of graph g", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs.core.list($APP.cljs$cst$2761$g, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2922$loops], null), $APP.cljs$cst$712$or, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$2922$loops, !1], null)], null))], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, 
  $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2922$loops], null), $APP.cljs$cst$712$or, new $APP.cljs.core.PersistentArrayMap(null, 1, [cljs$cst$2922$loops, !1], null)], null)], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2923$eql_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2924$g1, cljs$cst$2925$g2], null))), $APP.cljs$cst$256$doc, "Returns true iff g1 is a subgraph of g2 and g2 is a subgraph of g1"], null)), $APP.cljs.core.with_meta(cljs$cst$2926$bf_path, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$30$end, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null))), $APP.cljs$cst$256$doc, "Returns a path from start to end with the fewest hops (i.e. irrespective\n  of edge weights)", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 
  3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$30$end, $APP.cljs$cst$309$opts)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$30$end, 
  $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2927$post_traverse, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 
  4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null))), $APP.cljs$cst$256$doc, "Traverses graph g depth-first, post-order from start. Returns a\n  vector of the nodes.", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$148$_AMPERSAND_, 
  $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2928$connected_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Returns true if g is connected"], null)), 
  $APP.cljs.core.with_meta(cljs$cst$2929$dijkstra_span, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null))), $APP.cljs$cst$256$doc, "Finds all shortest distances from start. Returns a map in the\n  format {node {successor distance}}", 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2930$subgraph_QMARK_, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2924$g1, cljs$cst$2925$g2], null))), $APP.cljs$cst$256$doc, "Returns true iff g1 is a subgraph of g2. An undirected graph is never\n  considered as a subgraph of a directed graph and vice versa."], null)), $APP.cljs.core.with_meta(cljs$cst$2931$shortest_path, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$30$end], null))), $APP.cljs$cst$256$doc, "Finds the shortest path from start to end in graph g, using Dijkstra's\n  algorithm if the graph is weighted, breadth-first search otherwise."], null)), $APP.cljs.core.with_meta(cljs$cst$2932$dijkstra_path, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$30$end], null))), $APP.cljs$cst$256$doc, "Finds the shortest path from start to end"], null)), $APP.cljs.core.with_meta(cljs$cst$2933$coloring_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2934$coloring], null))), $APP.cljs$cst$256$doc, "Returns true if a map of nodes to colors is a proper coloring of a graph."], null)), $APP.cljs.core.with_meta(cljs$cst$2935$astar_path, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$2811$src, $APP.cljs$cst$2936$target, cljs$cst$2937$heur], null), new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$2811$src, $APP.cljs$cst$2936$target, cljs$cst$2937$heur, $APP.cljs$cst$2523$q, cljs$cst$2938$explored], null))), $APP.cljs$cst$256$doc, "Returns the shortest path using A* algorithm. Returns a map of predecessors.", $APP.cljs$cst$1377$top_fn, 
  new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 6, $APP.cljs$cst$1379$max_fixed_arity, 6, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$2811$src, $APP.cljs$cst$2936$target, cljs$cst$2937$heur], null), new $APP.cljs.core.PersistentVector(null, 
  6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$2811$src, $APP.cljs$cst$2936$target, cljs$cst$2937$heur, $APP.cljs$cst$2523$q, cljs$cst$2938$explored], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$2811$src, $APP.cljs$cst$2936$target, cljs$cst$2937$heur], null), new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$2811$src, $APP.cljs$cst$2936$target, cljs$cst$2937$heur, $APP.cljs$cst$2523$q, cljs$cst$2938$explored], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2939$bipartite_color, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Attempts a two-coloring of graph g. When successful, returns a map of\n  nodes to colors (1 or 0). Otherwise, returns nil."], null)), $APP.cljs.core.with_meta(cljs$cst$2940$bellman_ford, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, 
  $APP.cljs$cst$58$start], null))), $APP.cljs$cst$256$doc, "Given a weighted, directed graph G \x3d (V, E) with source start,\n   the Bellman-Ford algorithm produces map of single source shortest\n   paths and their costs if no negative-weight cycle that is reachable\n   from the source exists, and false otherwise, indicating that no\n   solution exists."], null)), $APP.cljs.core.with_meta(cljs$cst$2941$johnson, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Finds all-pairs shortest paths using Bellman-Ford to remove any negative edges before\n  using Dijkstra's algorithm to find the shortest paths from each vertex to every other.\n  This algorithm is efficient for sparse graphs.\n\n  If the graph is unweighted, a default weight of 1 will be used. Note that it is more efficient\n  to use breadth-first spans for a graph with a uniform edge weight rather than Dijkstra's algorithm.\n  Most callers should use shortest-paths and allow the most efficient implementation be selected\n  for the graph."], 
  null)), $APP.cljs.core.with_meta(cljs$cst$2942$dijkstra_path_dist, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$30$end], null))), $APP.cljs$cst$256$doc, "Finds the shortest path from start to end. Returns a vector:\n  [path distance]"], null)), $APP.cljs.core.with_meta(cljs$cst$2943$max_flow, 
  new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$358$source, cljs$cst$2944$sink, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1866$method], 
  null), $APP.cljs$cst$712$or, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1866$method, cljs$cst$2749$edmonds_karp], null)], null)], null))), $APP.cljs$cst$256$doc, "Returns [flow-map flow-value], where flow-map is a weighted adjacency map\n   representing the maximum flow.  The argument should be a weighted digraph,\n   where the edge weights are flow capacities.  Source and sink are the vertices\n   representing the flow source and sink vertices.  Optionally, pass in\n     :method :algorithm to use.  Currently, the only option is :edmonds-karp .", 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2761$g, $APP.cljs$cst$358$source, cljs$cst$2944$sink, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1866$method], null), $APP.cljs$cst$712$or, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1866$method, cljs$cst$2749$edmonds_karp], null)], null))], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$358$source, cljs$cst$2944$sink, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1866$method], null), $APP.cljs$cst$712$or, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1866$method, cljs$cst$2749$edmonds_karp], null)], null)], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta($APP.cljs$cst$2539$connect, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Returns graph g with all connected components connected to each other"], null)), $APP.cljs.core.with_meta(cljs$cst$2945$prim_mst_edges, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2920$wg], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2920$wg, $APP.cljs$cst$2483$n, $APP.cljs$cst$1442$h, cljs$cst$2946$visited, $APP.cljs$cst$2947$acc], null))), $APP.cljs$cst$256$doc, "An edge-list of an minimum spanning tree along with weights that\n  represents an MST of the given graph. Returns the MST edge-list\n  for un-weighted graphs.", $APP.cljs$cst$1377$top_fn, 
  new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 5, $APP.cljs$cst$1379$max_fixed_arity, 5, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2920$wg], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [cljs$cst$2920$wg, $APP.cljs$cst$2483$n, $APP.cljs$cst$1442$h, cljs$cst$2946$visited, $APP.cljs$cst$2947$acc], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2920$wg], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2920$wg, $APP.cljs$cst$2483$n, $APP.cljs$cst$1442$h, cljs$cst$2946$visited, $APP.cljs$cst$2947$acc], null)), 
  $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2948$bipartite_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Returns true if g is bipartite"], null)), $APP.cljs.core.with_meta(cljs$cst$2949$scc, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Returns the strongly-connected components of directed graph g as a vector of\n  vectors. Uses Kosaraju's algorithm."], null)), $APP.cljs.core.with_meta(cljs$cst$2950$all_pairs_shortest_paths, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Finds all-pairs shortest paths in a graph. Uses Johnson's algorithm for weighted graphs\n  which is efficient for sparse graphs. Breadth-first spans are used for unweighted graphs."], null)), $APP.cljs.core.with_meta(cljs$cst$2951$isomorphism_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2924$g1, cljs$cst$2925$g2, $APP.cljs$cst$2952$phi], null))), $APP.cljs$cst$256$doc, "Given a mapping phi between the vertices of two graphs, determine\n  if the mapping is an isomorphism, e.g., {(phi x), (phi y)} connected\n  in g2 iff {x, y} are connected in g1."], null)), $APP.cljs.core.with_meta(cljs$cst$2953$bf_path_bi, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$30$end], null))), $APP.cljs$cst$256$doc, "Using a bidirectional breadth-first search, finds a path from start to\n  end with the fewest hops (i.e. irrespective of edge weights). Can be much\n  faster than a unidirectional search on certain types of graphs"], 
  null)), $APP.cljs.core.with_meta(cljs$cst$2954$connected_components, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Returns the connected components of graph g as a vector of vectors. If g\n  is directed, returns the weakly-connected components."], null)), 
  $APP.cljs.core.with_meta(cljs$cst$2955$topsort, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null))), $APP.cljs$cst$256$doc, "Topological sort of a directed acyclic graph (DAG). Returns nil if\n  g contains any cycles.", 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2956$maximal_cliques, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Enumerate the maximal cliques using Bron-Kerbosch."], null)), $APP.cljs.core.with_meta(cljs$cst$2957$loners, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Returns nodes with no connections to other nodes (i.e., isolated nodes)"], null)), $APP.cljs.core.with_meta(cljs$cst$2958$pre_span, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null))), $APP.cljs$cst$256$doc, "Returns a depth-first spanning tree of the form {node [successors]}", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), 
  new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2959$bf_all_pairs_shortest_paths, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Uses bf-span on each node in the graph."], null)), $APP.cljs.core.with_meta(cljs$cst$2960$astar_dist, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$2811$src, $APP.cljs$cst$2936$target, cljs$cst$2937$heur], null))), $APP.cljs$cst$256$doc, 
  "Returns the length of the shortest path between src and target using\n    the A* algorithm"], null)), $APP.cljs.core.with_meta(cljs$cst$2961$bf_span, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null))), $APP.cljs$cst$256$doc, "Returns a breadth-first spanning tree of the form {node [successors]}", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$2962$bf_traverse, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 
  5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null))), $APP.cljs$cst$256$doc, "Traverses graph g breadth-first from start. When option :f is provided,\n  returns a lazy seq of (f node predecessor-map depth) for each node traversed.\n  Otherwise, returns a lazy seq of the nodes. When option :when is provided,\n  filters successors with (f neighbor predecessor depth).", 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 2, $APP.cljs$cst$1379$max_fixed_arity, 2, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, 
  $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null, null)], null)], null))], [new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2963$loom_DOT_alg_SLASH_greedy_coloring, $APP.cljs$cst$108$val, loom.alg.greedy_coloring, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Greedily color the vertices of a graph using the first-fit heuristic.\n  Returns a map of nodes to colors (0, 1, ...)."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2964$loom_DOT_alg_SLASH_distinct_edges, $APP.cljs$cst$108$val, loom.alg.distinct_edges, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns the distinct edges of g. Only useful for undirected graphs"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2965$loom_DOT_alg_SLASH_bipartite_sets, $APP.cljs$cst$108$val, loom.alg.bipartite_sets, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns two sets of nodes, one for each color of the bipartite coloring,\n  or nil if g is not bipartite"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2966$loom_DOT_alg_SLASH_dijkstra_traverse, $APP.cljs$cst$108$val, loom.alg.dijkstra_traverse, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$52$f], null)), $APP.cljs$cst$256$doc, "Returns a lazy-seq of [current-node state] where state is a map in\n  the format {node [distance predecessor]}. When f is provided,\n  returns a lazy-seq of (f node state) for each node"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2967$loom_DOT_alg_SLASH_dag_QMARK_, $APP.cljs$cst$108$val, loom.alg.dag_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns true if g is a directed acyclic graph"], null)], 
  null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2968$loom_DOT_alg_SLASH_pre_traverse, $APP.cljs$cst$108$val, loom.alg.pre_traverse, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null)), $APP.cljs$cst$256$doc, "Traverses graph g depth-first from start. Returns a lazy seq of nodes.\n  When no starting node is provided, traverses the entire graph, connected\n  or not."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2969$loom_DOT_alg_SLASH_degeneracy_ordering, $APP.cljs$cst$108$val, loom.alg.degeneracy_ordering, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns sequence of vertices in degeneracy order."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2970$loom_DOT_alg_SLASH_strongly_connected_QMARK_, $APP.cljs$cst$108$val, loom.alg.strongly_connected_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2971$loom_DOT_alg_SLASH_longest_shortest_path, $APP.cljs$cst$108$val, loom.alg.longest_shortest_path, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null)), $APP.cljs$cst$256$doc, "Finds the longest shortest path beginning at start, using Dijkstra's\n  algorithm if the graph is weighted, breadth-first search otherwise."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2972$loom_DOT_alg_SLASH_prim_mst, $APP.cljs$cst$108$val, loom.alg.prim_mst, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2920$wg], null)), $APP.cljs$cst$256$doc, "Minimum spanning tree of given graph. If the graph contains more than one\n   component then returns a spanning forest of minimum spanning trees."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2973$loom_DOT_alg_SLASH_density, $APP.cljs$cst$108$val, loom.alg.density, 
  $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2922$loops], null), $APP.cljs$cst$712$or, new $APP.cljs.core.PersistentArrayMap(null, 
  1, [cljs$cst$2922$loops, !1], null)], null)], null)), $APP.cljs$cst$256$doc, "Return the density of graph g"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2974$loom_DOT_alg_SLASH_eql_QMARK_, $APP.cljs$cst$108$val, loom.alg.eql_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2924$g1, 
  cljs$cst$2925$g2], null)), $APP.cljs$cst$256$doc, "Returns true iff g1 is a subgraph of g2 and g2 is a subgraph of g1"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2975$loom_DOT_alg_SLASH_bf_path, $APP.cljs$cst$108$val, loom.alg.bf_path, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$30$end, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$256$doc, "Returns a path from start to end with the fewest hops (i.e. irrespective\n  of edge weights)"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2976$loom_DOT_alg_SLASH_post_traverse, $APP.cljs$cst$108$val, loom.alg.post_traverse, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$256$doc, "Traverses graph g depth-first, post-order from start. Returns a\n  vector of the nodes."], null)], 
  null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2977$loom_DOT_alg_SLASH_connected_QMARK_, $APP.cljs$cst$108$val, loom.alg.connected_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns true if g is connected"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 
  3, [$APP.cljs$cst$272$name, cljs$cst$2978$loom_DOT_alg_SLASH_dijkstra_span, $APP.cljs$cst$108$val, loom.alg.dijkstra_span, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], 
  null)), $APP.cljs$cst$256$doc, "Finds all shortest distances from start. Returns a map in the\n  format {node {successor distance}}"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2979$loom_DOT_alg_SLASH_subgraph_QMARK_, $APP.cljs$cst$108$val, loom.alg.subgraph_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [cljs$cst$2924$g1, cljs$cst$2925$g2], null)), $APP.cljs$cst$256$doc, "Returns true iff g1 is a subgraph of g2. An undirected graph is never\n  considered as a subgraph of a directed graph and vice versa."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2980$loom_DOT_alg_SLASH_shortest_path, $APP.cljs$cst$108$val, loom.alg.shortest_path, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$30$end], null)), $APP.cljs$cst$256$doc, "Finds the shortest path from start to end in graph g, using Dijkstra's\n  algorithm if the graph is weighted, breadth-first search otherwise."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2981$loom_DOT_alg_SLASH_dijkstra_path, $APP.cljs$cst$108$val, loom.alg.dijkstra_path, $APP.cljs$cst$2$meta, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$30$end], null)), $APP.cljs$cst$256$doc, "Finds the shortest path from start to end"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2982$loom_DOT_alg_SLASH_coloring_QMARK_, $APP.cljs$cst$108$val, loom.alg.coloring_QMARK_, 
  $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2934$coloring], null)), $APP.cljs$cst$256$doc, "Returns true if a map of nodes to colors is a proper coloring of a graph."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2983$loom_DOT_alg_SLASH_astar_path, 
  $APP.cljs$cst$108$val, loom.alg.astar_path, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$2811$src, $APP.cljs$cst$2936$target, cljs$cst$2937$heur], null), new $APP.cljs.core.PersistentVector(null, 6, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$2811$src, $APP.cljs$cst$2936$target, 
  cljs$cst$2937$heur, $APP.cljs$cst$2523$q, cljs$cst$2938$explored], null)), $APP.cljs$cst$256$doc, "Returns the shortest path using A* algorithm. Returns a map of predecessors."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2984$loom_DOT_alg_SLASH_bipartite_color, $APP.cljs$cst$108$val, loom.alg.bipartite_color, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Attempts a two-coloring of graph g. When successful, returns a map of\n  nodes to colors (1 or 0). Otherwise, returns nil."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2985$loom_DOT_alg_SLASH_bellman_ford, $APP.cljs$cst$108$val, loom.alg.bellman_ford, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null)), $APP.cljs$cst$256$doc, "Given a weighted, directed graph G \x3d (V, E) with source start,\n   the Bellman-Ford algorithm produces map of single source shortest\n   paths and their costs if no negative-weight cycle that is reachable\n   from the source exists, and false otherwise, indicating that no\n   solution exists."], null)], 
  null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2986$loom_DOT_alg_SLASH_johnson, $APP.cljs$cst$108$val, loom.alg.johnson, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Finds all-pairs shortest paths using Bellman-Ford to remove any negative edges before\n  using Dijkstra's algorithm to find the shortest paths from each vertex to every other.\n  This algorithm is efficient for sparse graphs.\n\n  If the graph is unweighted, a default weight of 1 will be used. Note that it is more efficient\n  to use breadth-first spans for a graph with a uniform edge weight rather than Dijkstra's algorithm.\n  Most callers should use shortest-paths and allow the most efficient implementation be selected\n  for the graph."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2987$loom_DOT_alg_SLASH_dijkstra_path_dist, $APP.cljs$cst$108$val, loom.alg.dijkstra_path_dist, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$30$end], null)), $APP.cljs$cst$256$doc, 
  "Finds the shortest path from start to end. Returns a vector:\n  [path distance]"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2988$loom_DOT_alg_SLASH_max_flow, $APP.cljs$cst$108$val, loom.alg.max_flow, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$358$source, 
  cljs$cst$2944$sink, $APP.cljs$cst$148$_AMPERSAND_, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$1383$keys, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1866$method], null), $APP.cljs$cst$712$or, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$1866$method, cljs$cst$2749$edmonds_karp], null)], null)], null)), $APP.cljs$cst$256$doc, "Returns [flow-map flow-value], where flow-map is a weighted adjacency map\n   representing the maximum flow.  The argument should be a weighted digraph,\n   where the edge weights are flow capacities.  Source and sink are the vertices\n   representing the flow source and sink vertices.  Optionally, pass in\n     :method :algorithm to use.  Currently, the only option is :edmonds-karp ."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2989$loom_DOT_alg_SLASH_connect, $APP.cljs$cst$108$val, loom.alg.connect, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns graph g with all connected components connected to each other"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2990$loom_DOT_alg_SLASH_prim_mst_edges, $APP.cljs$cst$108$val, loom.alg.prim_mst_edges, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2920$wg], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [cljs$cst$2920$wg, $APP.cljs$cst$2483$n, $APP.cljs$cst$1442$h, cljs$cst$2946$visited, $APP.cljs$cst$2947$acc], null)), $APP.cljs$cst$256$doc, "An edge-list of an minimum spanning tree along with weights that\n  represents an MST of the given graph. Returns the MST edge-list\n  for un-weighted graphs."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2991$loom_DOT_alg_SLASH_bipartite_QMARK_, $APP.cljs$cst$108$val, loom.alg.bipartite_QMARK_, $APP.cljs$cst$2$meta, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns true if g is bipartite"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2992$loom_DOT_alg_SLASH_scc, $APP.cljs$cst$108$val, loom.alg.scc, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns the strongly-connected components of directed graph g as a vector of\n  vectors. Uses Kosaraju's algorithm."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2993$loom_DOT_alg_SLASH_all_pairs_shortest_paths, $APP.cljs$cst$108$val, loom.alg.all_pairs_shortest_paths, 
  $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Finds all-pairs shortest paths in a graph. Uses Johnson's algorithm for weighted graphs\n  which is efficient for sparse graphs. Breadth-first spans are used for unweighted graphs."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 
  3, [$APP.cljs$cst$272$name, cljs$cst$2994$loom_DOT_alg_SLASH_isomorphism_QMARK_, $APP.cljs$cst$108$val, loom.alg.isomorphism_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [cljs$cst$2924$g1, cljs$cst$2925$g2, $APP.cljs$cst$2952$phi], null)), $APP.cljs$cst$256$doc, "Given a mapping phi between the vertices of two graphs, determine\n  if the mapping is an isomorphism, e.g., {(phi x), (phi y)} connected\n  in g2 iff {x, y} are connected in g1."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2995$loom_DOT_alg_SLASH_bf_path_bi, $APP.cljs$cst$108$val, loom.alg.bf_path_bi, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$30$end], null)), $APP.cljs$cst$256$doc, "Using a bidirectional breadth-first search, finds a path from start to\n  end with the fewest hops (i.e. irrespective of edge weights). Can be much\n  faster than a unidirectional search on certain types of graphs"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2996$loom_DOT_alg_SLASH_connected_components, $APP.cljs$cst$108$val, loom.alg.connected_components, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns the connected components of graph g as a vector of vectors. If g\n  is directed, returns the weakly-connected components."], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2997$loom_DOT_alg_SLASH_topsort, $APP.cljs$cst$108$val, loom.alg.topsort, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null)), $APP.cljs$cst$256$doc, "Topological sort of a directed acyclic graph (DAG). Returns nil if\n  g contains any cycles."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2998$loom_DOT_alg_SLASH_maximal_cliques, $APP.cljs$cst$108$val, loom.alg.maximal_cliques, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Enumerate the maximal cliques using Bron-Kerbosch."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$2999$loom_DOT_alg_SLASH_loners, $APP.cljs$cst$108$val, loom.alg.loners, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns nodes with no connections to other nodes (i.e., isolated nodes)"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3000$loom_DOT_alg_SLASH_pre_span, $APP.cljs$cst$108$val, loom.alg.pre_span, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null)), $APP.cljs$cst$256$doc, "Returns a depth-first spanning tree of the form {node [successors]}"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3001$loom_DOT_alg_SLASH_bf_all_pairs_shortest_paths, $APP.cljs$cst$108$val, loom.alg.bf_all_pairs_shortest_paths, $APP.cljs$cst$2$meta, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Uses bf-span on each node in the graph."], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3002$loom_DOT_alg_SLASH_astar_dist, $APP.cljs$cst$108$val, loom.alg.astar_dist, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$2811$src, $APP.cljs$cst$2936$target, cljs$cst$2937$heur], null)), $APP.cljs$cst$256$doc, "Returns the length of the shortest path between src and target using\n    the A* algorithm"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3003$loom_DOT_alg_SLASH_bf_span, $APP.cljs$cst$108$val, 
  loom.alg.bf_span, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null)), $APP.cljs$cst$256$doc, "Returns a breadth-first spanning tree of the form {node [successors]}"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3004$loom_DOT_alg_SLASH_bf_traverse, $APP.cljs$cst$108$val, loom.alg.bf_traverse, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$309$opts], null)), $APP.cljs$cst$256$doc, "Traverses graph g breadth-first from start. When option :f is provided,\n  returns a lazy seq of (f node predecessor-map depth) for each node traversed.\n  Otherwise, returns a lazy seq of the nodes. When option :when is provided,\n  filters successors with (f neighbor predecessor depth)."], 
  null)], null)]), $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$2909$loom_DOT_alg, null)), cljs$cst$3005$loom_DOT_attr, $APP.sci.core._copy_ns($APP.cljs.core.PersistentHashMap.fromArrays([$APP.cljs.core.with_meta(cljs$cst$3006$remove_attr, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$466$protocol, cljs$cst$3007$loom_DOT_attr_SLASH_AttrGraph, $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 
  4, $APP.cljs$cst$1379$max_fixed_arity, 4, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge, $APP.cljs$cst$1485$k], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$1485$k], 
  null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge, $APP.cljs$cst$1485$k], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$1485$k], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge, $APP.cljs$cst$1485$k], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$1485$k], null))), $APP.cljs$cst$256$doc, "Remove an attribute from a node or edge"], null)), $APP.cljs.core.with_meta(cljs$cst$3009$attr_QMARK_, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Returns true if g satisfies AttrGraph"], null)), $APP.cljs.core.with_meta(cljs$cst$3010$add_attr_to_edges, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v, $APP.cljs$cst$2780$edges], null))), $APP.cljs$cst$256$doc, "Adds an attribute to the given edges"], null)), $APP.cljs.core.with_meta(cljs$cst$3011$add_attrs_to_all, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$2441$kvs], null))), $APP.cljs$cst$256$doc, "Adds attributes to all nodes and edges", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs.core.list($APP.cljs$cst$2761$g, $APP.cljs$cst$2441$kvs)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$2441$kvs], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), $APP.cljs.core.with_meta($APP.cljs$cst$3012$attr, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$466$protocol, 
  cljs$cst$3007$loom_DOT_attr_SLASH_AttrGraph, $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 4, $APP.cljs$cst$1379$max_fixed_arity, 4, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge, 
  $APP.cljs$cst$1485$k], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$1485$k], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge, $APP.cljs$cst$1485$k], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$1485$k], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge, $APP.cljs$cst$1485$k], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$1485$k], null))), $APP.cljs$cst$256$doc, "Return the attribute on a node or edge"], null)), $APP.cljs.core.with_meta(cljs$cst$3013$add_attr_to_nodes, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$1485$k, 
  $APP.cljs$cst$57$v, $APP.cljs$cst$85$nodes], null))), $APP.cljs$cst$256$doc, "Adds an attribute to the given nodes"], null)), $APP.cljs.core.with_meta(cljs$cst$3014$hilite_path, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$2325$path], null))), $APP.cljs$cst$256$doc, "Hilites nodes and edges along a path"], 
  null)), $APP.cljs.core.with_meta(cljs$cst$3015$AttrGraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2776$protocol_symbol, !0, $APP.cljs$cst$2777$protocol_info, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$463$methods, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs.core.with_meta($APP.cljs$cst$3016$add_attr, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Add an attribute to node or edge"], null)), new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v], null)], null), $APP.cljs.core.with_meta(cljs$cst$3006$remove_attr, 
  new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Remove an attribute from a node or edge"], null)), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge, $APP.cljs$cst$1485$k], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, 
  cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$1485$k], null)], null), $APP.cljs.core.with_meta($APP.cljs$cst$3012$attr, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Return the attribute on a node or edge"], null)), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge, $APP.cljs$cst$1485$k], 
  null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$1485$k], null)], null), $APP.cljs.core.with_meta($APP.cljs$cst$3017$attrs, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Return all attributes on a node or edge"], null)), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)], null)], null)], null), $APP.cljs$cst$465$sigs, new $APP.cljs.core.PersistentArrayMap(null, 4, [cljs$cst$3018$add_attr, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, $APP.cljs$cst$3016$add_attr, $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v], null)), $APP.cljs$cst$256$doc, "Add an attribute to node or edge"], null), cljs$cst$3019$remove_attr, 
  new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3006$remove_attr, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge, $APP.cljs$cst$1485$k], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$1485$k], null)), 
  $APP.cljs$cst$256$doc, "Remove an attribute from a node or edge"], null), $APP.cljs$cst$3020$attr, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, $APP.cljs$cst$3012$attr, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge, $APP.cljs$cst$1485$k], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$1485$k], null)), $APP.cljs$cst$256$doc, "Return the attribute on a node or edge"], null), $APP.cljs$cst$2743$attrs, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, $APP.cljs$cst$3017$attrs, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge], null), new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)), $APP.cljs$cst$256$doc, "Return all attributes on a node or edge"], null)], null), $APP.cljs$cst$2789$jsdoc, $APP.cljs.core.list("@interface")], null)), $APP.cljs.core.with_meta(cljs$cst$3021$hilite, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null))), $APP.cljs$cst$256$doc, "Adds a red :color attribute to a node or edge", $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 
  3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null)], null)), $APP.cljs.core.with_meta(cljs$cst$3022$add_attr_to_all, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v], null))), $APP.cljs$cst$256$doc, "Adds an attribute to all nodes and edges"], null)), $APP.cljs.core.with_meta($APP.cljs$cst$3016$add_attr, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$466$protocol, cljs$cst$3007$loom_DOT_attr_SLASH_AttrGraph, $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 
  6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 5, $APP.cljs$cst$1379$max_fixed_arity, 5, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, 
  $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v], null))), $APP.cljs$cst$256$doc, "Add an attribute to node or edge"], null)), $APP.cljs.core.with_meta($APP.cljs$cst$3017$attrs, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$466$protocol, cljs$cst$3007$loom_DOT_attr_SLASH_AttrGraph, $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 3, 
  $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)], null), $APP.cljs$cst$273$arglists, 
  $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null))), $APP.cljs$cst$256$doc, "Return all attributes on a node or edge"], null))], [new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3023$loom_DOT_attr_SLASH_remove_attr, $APP.cljs$cst$108$val, loom.attr.remove_attr, 
  $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge, $APP.cljs$cst$1485$k], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$1485$k], null)), $APP.cljs$cst$256$doc, "Remove an attribute from a node or edge"], 
  null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3024$loom_DOT_attr_SLASH_attr_QMARK_, $APP.cljs$cst$108$val, loom.attr.attr_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns true if g satisfies AttrGraph"], null)], null), 
  new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3025$loom_DOT_attr_SLASH_add_attr_to_edges, $APP.cljs$cst$108$val, loom.attr.add_attr_to_edges, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v, $APP.cljs$cst$2780$edges], null)), $APP.cljs$cst$256$doc, 
  "Adds an attribute to the given edges"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3026$loom_DOT_attr_SLASH_add_attrs_to_all, $APP.cljs$cst$108$val, loom.attr.add_attrs_to_all, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, $APP.cljs$cst$2441$kvs], 
  null)), $APP.cljs$cst$256$doc, "Adds attributes to all nodes and edges"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3027$loom_DOT_attr_SLASH_attr, $APP.cljs$cst$108$val, loom.attr.attr, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge, 
  $APP.cljs$cst$1485$k], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$1485$k], null)), $APP.cljs$cst$256$doc, "Return the attribute on a node or edge"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3028$loom_DOT_attr_SLASH_add_attr_to_nodes, $APP.cljs$cst$108$val, loom.attr.add_attr_to_nodes, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v, $APP.cljs$cst$85$nodes], null)), $APP.cljs$cst$256$doc, "Adds an attribute to the given nodes"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3029$loom_DOT_attr_SLASH_hilite_path, $APP.cljs$cst$108$val, loom.attr.hilite_path, $APP.cljs$cst$2$meta, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$2325$path], null)), $APP.cljs$cst$256$doc, "Hilites nodes and edges along a path"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3007$loom_DOT_attr_SLASH_AttrGraph, $APP.cljs$cst$108$val, loom.attr.AttrGraph, $APP.cljs$cst$2$meta, 
  $APP.cljs.core.PersistentArrayMap.EMPTY], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3030$loom_DOT_attr_SLASH_hilite, $APP.cljs$cst$108$val, loom.attr.hilite, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null), new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)), $APP.cljs$cst$256$doc, "Adds a red :color attribute to a node or edge"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3031$loom_DOT_attr_SLASH_add_attr_to_all, $APP.cljs$cst$108$val, loom.attr.add_attr_to_all, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v], null)), $APP.cljs$cst$256$doc, "Adds an attribute to all nodes and edges"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3032$loom_DOT_attr_SLASH_add_attr, $APP.cljs$cst$108$val, loom.attr.add_attr, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v], null), new $APP.cljs.core.PersistentVector(null, 5, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$1485$k, $APP.cljs$cst$57$v], null)), $APP.cljs$cst$256$doc, "Add an attribute to node or edge"], null)], null), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
  cljs$cst$3033$loom_DOT_attr_SLASH_attrs, $APP.cljs$cst$108$val, loom.attr.attrs, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3008$node_or_edge], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], 
  null)), $APP.cljs$cst$256$doc, "Return all attributes on a node or edge"], null)], null)]), $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$3005$loom_DOT_attr, null)), cljs$cst$3034$loom_DOT_label, $APP.sci.core._copy_ns(new $APP.cljs.core.PersistentArrayMap(null, 7, [$APP.cljs.core.with_meta(cljs$cst$3035$LabeledGraph, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$2776$protocol_symbol, !0, $APP.cljs$cst$2777$protocol_info, new $APP.cljs.core.PersistentArrayMap(null, 
  1, [$APP.cljs$cst$463$methods, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs.core.with_meta(cljs$cst$3036$add_label, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Add a label to node or edge"], null)), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node, $APP.cljs$cst$3037$label], null), 
  new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$3037$label], null)], null), $APP.cljs.core.with_meta(cljs$cst$3038$remove_label, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Remove a label from a node or edge"], null)), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)], null), $APP.cljs.core.with_meta($APP.cljs$cst$3037$label, new $APP.cljs.core.PersistentArrayMap(null, 1, [$APP.cljs$cst$256$doc, "Return the label on a node or edge"], null)), new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)], null)], null)], null), $APP.cljs$cst$465$sigs, new $APP.cljs.core.PersistentArrayMap(null, 3, [cljs$cst$3039$add_label, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
  cljs$cst$3036$add_label, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node, $APP.cljs$cst$3037$label], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$3037$label], null)), $APP.cljs$cst$256$doc, "Add a label to node or edge"], null), cljs$cst$3040$remove_label, 
  new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3038$remove_label, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)), $APP.cljs$cst$256$doc, "Remove a label from a node or edge"], 
  null), $APP.cljs$cst$2756$label, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, $APP.cljs$cst$3037$label, $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)), $APP.cljs$cst$256$doc, 
  "Return the label on a node or edge"], null)], null), $APP.cljs$cst$2789$jsdoc, $APP.cljs.core.list("@interface")], null)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3041$loom_DOT_label_SLASH_LabeledGraph, $APP.cljs$cst$108$val, loom.label.LabeledGraph, $APP.cljs$cst$2$meta, $APP.cljs.core.PersistentArrayMap.EMPTY], null), $APP.cljs.core.with_meta(cljs$cst$3036$add_label, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$466$protocol, cljs$cst$3041$loom_DOT_label_SLASH_LabeledGraph, 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 4, $APP.cljs$cst$1379$max_fixed_arity, 4, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node, $APP.cljs$cst$3037$label], null), new $APP.cljs.core.PersistentVector(null, 
  4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$3037$label], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node, $APP.cljs$cst$3037$label], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, 
  cljs$cst$2764$n2, $APP.cljs$cst$3037$label], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node, $APP.cljs$cst$3037$label], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, 
  cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$3037$label], null))), $APP.cljs$cst$256$doc, "Add a label to node or edge"], null)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3042$loom_DOT_label_SLASH_add_label, $APP.cljs$cst$108$val, loom.label.add_label, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node, $APP.cljs$cst$3037$label], null), new $APP.cljs.core.PersistentVector(null, 4, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2, $APP.cljs$cst$3037$label], null)), $APP.cljs$cst$256$doc, "Add a label to node or edge"], null)], null), $APP.cljs.core.with_meta(cljs$cst$3038$remove_label, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$466$protocol, cljs$cst$3041$loom_DOT_label_SLASH_LabeledGraph, 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null), new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)), $APP.cljs$cst$1381$arglists_meta, 
  $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null))), $APP.cljs$cst$256$doc, "Remove a label from a node or edge"], 
  null)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3043$loom_DOT_label_SLASH_remove_label, $APP.cljs$cst$108$val, loom.label.remove_label, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)), $APP.cljs$cst$256$doc, "Remove a label from a node or edge"], null)], null), $APP.cljs.core.with_meta($APP.cljs$cst$3037$label, new $APP.cljs.core.PersistentArrayMap(null, 4, [$APP.cljs$cst$466$protocol, cljs$cst$3041$loom_DOT_label_SLASH_LabeledGraph, $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !1, $APP.cljs$cst$553$fixed_arity, 3, $APP.cljs$cst$1379$max_fixed_arity, 
  3, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null, null)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null))), $APP.cljs$cst$256$doc, "Return the label on a node or edge"], null)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3044$loom_DOT_label_SLASH_label, $APP.cljs$cst$108$val, loom.label.label, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$64$node], null), new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$2763$n1, cljs$cst$2764$n2], null)), $APP.cljs$cst$256$doc, "Return the label on a node or edge"], null)], null), $APP.cljs.core.with_meta(cljs$cst$3045$labeled_QMARK_, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Returns true if g satisfies LabeledGraph"], null)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3046$loom_DOT_label_SLASH_labeled_QMARK_, $APP.cljs$cst$108$val, loom.label.labeled_QMARK_, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 
  2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns true if g satisfies LabeledGraph"], null)], null), $APP.cljs.core.with_meta(cljs$cst$3047$add_labeled_nodes, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, cljs$cst$3048$nodes_PLUS_labels], null))), $APP.cljs$cst$256$doc, 'Adds nodes and respective labels to graph g:\n  (add-labeled-nodes n1 "n1 label" n2 "n2 label")', $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 
  1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2761$g, cljs$cst$3048$nodes_PLUS_labels)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, cljs$cst$3048$nodes_PLUS_labels], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, 
  cljs$cst$3049$loom_DOT_label_SLASH_add_labeled_nodes, $APP.cljs$cst$108$val, loom.label.add_labeled_nodes, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, cljs$cst$3048$nodes_PLUS_labels], null)), $APP.cljs$cst$256$doc, 'Adds nodes and respective labels to graph g:\n  (add-labeled-nodes n1 "n1 label" n2 "n2 label")'], 
  null)], null), $APP.cljs.core.with_meta(cljs$cst$3050$add_labeled_edges, new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, cljs$cst$3051$edges_PLUS_labels], null))), $APP.cljs$cst$256$doc, 'Adds edges and respective labels to graph g:\n  (add-labeled-edges [n1 n2] "label 1" [n2 n3] "label 2")', 
  $APP.cljs$cst$1377$top_fn, new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs$cst$1378$variadic_QMARK_, !0, $APP.cljs$cst$553$fixed_arity, 1, $APP.cljs$cst$1379$max_fixed_arity, 1, $APP.cljs$cst$1380$method_params, new $APP.cljs.core.PersistentVector(null, 1, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs.core.list($APP.cljs$cst$2761$g, cljs$cst$3051$edges_PLUS_labels)], null), $APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, 
  [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, cljs$cst$3051$edges_PLUS_labels], null)), $APP.cljs$cst$1381$arglists_meta, $APP.cljs.core.list(null)], null)], null)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3052$loom_DOT_label_SLASH_add_labeled_edges, $APP.cljs$cst$108$val, loom.label.add_labeled_edges, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 
  3, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$148$_AMPERSAND_, cljs$cst$3051$edges_PLUS_labels], null)), $APP.cljs$cst$256$doc, 'Adds edges and respective labels to graph g:\n  (add-labeled-edges [n1 n2] "label 1" [n2 n3] "label 2")'], null)], null)], null), $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$3034$loom_DOT_label, null)), cljs$cst$3053$loom_DOT_derived, $APP.sci.core._copy_ns(new $APP.cljs.core.PersistentArrayMap(null, 6, [$APP.cljs.core.with_meta(cljs$cst$3054$mapped_by, 
  new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f, $APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Returns a Graph or a DiGraph which has as nodeset (set (map f (nodes g)). An\n  edge [uu, vv] is an edge in the resulting graph iff g has an edge [u, v] such\n  that [uu, vv] \x3d [(f u), (f v)]."], 
  null)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3055$loom_DOT_derived_SLASH_mapped_by, $APP.cljs$cst$108$val, loom.derived.mapped_by, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$52$f, $APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns a Graph or a DiGraph which has as nodeset (set (map f (nodes g)). An\n  edge [uu, vv] is an edge in the resulting graph iff g has an edge [u, v] such\n  that [uu, vv] \x3d [(f u), (f v)]."], 
  null)], null), $APP.cljs.core.with_meta(cljs$cst$3056$subgraph_reachable_from, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null))), $APP.cljs$cst$256$doc, "Returns a subgraph of the given graph which contains all nodes and edges that\n  can be reached from the given start node."], 
  null)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3057$loom_DOT_derived_SLASH_subgraph_reachable_from, $APP.cljs$cst$108$val, loom.derived.subgraph_reachable_from, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, $APP.cljs$cst$58$start], null)), $APP.cljs$cst$256$doc, "Returns a subgraph of the given graph which contains all nodes and edges that\n  can be reached from the given start node."], 
  null)], null), $APP.cljs.core.with_meta(cljs$cst$3058$nodes_filtered_by, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1244$pred, $APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Returns a new graph which has as nodes all nodes of g which satisfy the\n  predicate."], null)), new $APP.cljs.core.PersistentArrayMap(null, 
  3, [$APP.cljs$cst$272$name, cljs$cst$3059$loom_DOT_derived_SLASH_nodes_filtered_by, $APP.cljs$cst$108$val, loom.derived.nodes_filtered_by, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1244$pred, $APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns a new graph which has as nodes all nodes of g which satisfy the\n  predicate."], 
  null)], null), $APP.cljs.core.with_meta(cljs$cst$3060$edges_filtered_by, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1244$pred, $APP.cljs$cst$2761$g], null))), $APP.cljs$cst$256$doc, "Returns a new graph which has as nodes all nodes of g and edges which satisfy\n  the predicate."], null)), new $APP.cljs.core.PersistentArrayMap(null, 
  3, [$APP.cljs$cst$272$name, cljs$cst$3061$loom_DOT_derived_SLASH_edges_filtered_by, $APP.cljs$cst$108$val, loom.derived.edges_filtered_by, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$1244$pred, $APP.cljs$cst$2761$g], null)), $APP.cljs$cst$256$doc, "Returns a new graph which has as nodes all nodes of g and edges which satisfy\n  the predicate."], 
  null)], null), $APP.cljs.core.with_meta(cljs$cst$3062$bipartite_subgraph, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3063$subset], null))), $APP.cljs$cst$256$doc, "Returns the subgraph of g containing only the edge subset E which lead\n  outside of the given subset. The nodes of the resulting graph are the start\n  and endpoints of these edges.\n  The resulting graph is thus the bipartite graph (U,V,E) where\n  U \x3d subset, V \x3d (map last E).\n  (see https://en.wikipedia.org/wiki/Bipartite_graph)."], 
  null)), new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3064$loom_DOT_derived_SLASH_bipartite_subgraph, $APP.cljs$cst$108$val, loom.derived.bipartite_subgraph, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3063$subset], null)), $APP.cljs$cst$256$doc, "Returns the subgraph of g containing only the edge subset E which lead\n  outside of the given subset. The nodes of the resulting graph are the start\n  and endpoints of these edges.\n  The resulting graph is thus the bipartite graph (U,V,E) where\n  U \x3d subset, V \x3d (map last E).\n  (see https://en.wikipedia.org/wiki/Bipartite_graph)."], 
  null)], null), $APP.cljs.core.with_meta(cljs$cst$3065$surroundings, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list($APP.cljs$cst$167$quote, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3063$subset], null))), $APP.cljs$cst$256$doc, "Returns th subgraph of g containing nodes which belong to the given subset of g and direct\n  successors of them."], null)), 
  new $APP.cljs.core.PersistentArrayMap(null, 3, [$APP.cljs$cst$272$name, cljs$cst$3066$loom_DOT_derived_SLASH_surroundings, $APP.cljs$cst$108$val, loom.derived.surroundings, $APP.cljs$cst$2$meta, new $APP.cljs.core.PersistentArrayMap(null, 2, [$APP.cljs$cst$273$arglists, $APP.cljs.core.list(new $APP.cljs.core.PersistentVector(null, 2, 5, $APP.cljs.core.PersistentVector.EMPTY_NODE, [$APP.cljs$cst$2761$g, cljs$cst$3063$subset], null)), $APP.cljs$cst$256$doc, "Returns th subgraph of g containing nodes which belong to the given subset of g and direct\n  successors of them."], 
  null)], null)], null), $APP.sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(cljs$cst$3053$loom_DOT_derived, null))], null)], null));
};
$APP.scittle.loom.init();

}).call(this);