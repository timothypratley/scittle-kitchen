# scittle-kitchen

[![npm version](https://img.shields.io/npm/v/scittle-kitchen.svg)](https://www.jsdelivr.com/package/npm/scittle-kitchen)

More plugins for [scittle](https://github.com/babashka/scittle).
Plugins are compiled ClojureScript libraries you can include as scripts.

Community Plugins:
asami, clara-rules, cljs-bean,
emmy, eql, geom,
instaparse,  kixi-stats, loom,
mathbox, tmdjs

Official Plugins:
datascript, dataspex,  hoplon, javelin,

Standard Plugins:
cljs-ajax, cljs-devtools, js-interop, nrepl,
pprint, promesa, re-fram, reagent, replicant

## Usage

Include `scittle.js` and the desired plugin(s) in your HTML page:

```html
<script src="https://cdn.jsdelivr.net/npm/scittle-kitchen/dist/scittle.js"></script>
<script src="https://cdn.jsdelivr.net/npm/scittle-kitchen/dist/scittle.geom.js"></script>
```

While developing, you may prefer to use

```html
<script src="https://cdn.jsdelivr.net/npm/scittle-kitchen/dist/dev/scittle.js"></script>
<script src="https://cdn.jsdelivr.net/npm/scittle-kitchen/dist/dev/scittle.cljs-devtools.js"></script>
<script src="https://cdn.jsdelivr.net/npm/scittle-kitchen/dist/dev/scittle.geom.js"></script>
```

See [the custom snippet page](https://timothypratley.github.io/scittle-kitchen/) for the full list of published plugins.

> [!NOTE]
> Only scittle-kitchen can load these plugins.

## Rationale

We can lower the entry barrier to trying ClojureScript libraries by publishing compiled plugins.
My main hope is that more plugins leads to more experiments.
That's what I really love about Scittle, being able to just try things without using a build tool.

The interactive [landing page](https://timothypratley.github.io/scittle-kitchen/) automatically resolves plugin dependencies,
ensuring you load plugins in the correct order.
For example, selecting Re-frame automatically includes Reagent and React.

### Problem

While you can load `.cljs` files in Scittle as scripts,
many ClojureScript libraries have multiple namespaces and dependencies which prevent loading from source in Scittle.
Plugins are compiled JavaScript from the ClojureScript library, ready to use in Scittle.
But only a few plugins are included in the Scittle distribution.
Other libraries need to be compiled to be usable in Scittle.
This is a barrier for users, and plugin authors.

### Solution

`scittle-kitchen` is a build and release process that publishes plugins in a publically accessible location.

Kitchen always build against the latest Scittle,
and automatically discovers plugins in the community contributed [`plugin-templates.edn`](plugin-templates.edn),
`plugins/` directory, and official `scittle/plugins/`.
The plugin template avoids boilerplate to add a new plugin.
All you need to specify are the dependencies and namespaces.

Here's how easy it was to add [Emmy](https://github.com/mentat-collective/emmy):

```edn
 :emmy {:namespaces [emmy.env]
        :deps {org.mentat/emmy {:mvn/version "0.32.0"}}}
```

> [!NOTE]
> More plugins, more fun, and wider adoption.

## Contributing

Pull requests are invited.
Add new plugins in [`plugin-templates.edn`](plugin-templates.edn) or create a new directory in `plugins/`.
For most libraries, just add an entry to [`plugin-templates.edn`](plugin-templates.edn).

[DESIGN.md](DESIGN.md) has more detailed information about the development and build process.

## Credits

Scittle by Michiel Borkent [borkdude](https://github.com/borkdude).
Idea by Arne Brasseur a.k.a [plexus](https://github.com/plexus).

## Goals

- Publish precompiled plugins ready for immediate use DONE
- Encourage and support community-contributed plugins ONGOING
- Stay up-to-date with upstream Scittle releases YES
- Integrate with Clay NOT YET
- Avoid interfering with Scittle’s normal build and release process YES
- **Endorsement to help with plugin adoption and visibility** NOT YET
  - Move repo to the Babashka organization NOT YET
  - Linked from Scittle's Readme NOT YET
- Minimize maintenance burden on @borkdude SUCCESS
- Automate the release process DONE
- Keep up with latest plugin dependencies MANUAL
- Support multiple scittle.js builds with different plugin sets DONE

## License

Distributed under the EPL License. See LICENSE.
