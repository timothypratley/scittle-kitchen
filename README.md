# scittle-kitchen

More plugin builds for [scittle](https://github.com/babashka/scittle).

## Usage

Include the desired plugin build in your HTML page:

```html
<script src="https://timothypratley.github.io/scittle-kitchen/js/scittle.js"></script>
<script src="https://timothypratley.github.io/scittle-kitchen/js/scittle.dataspex.js"></script>
```

See [the demo page](https://timothypratley.github.io/scittle-kitchen/) for the full list of published plugins.

> [!NOTE]
> You must use this `scittle.js` rather than the official `scittle.js` to load the plugins.

## Rationale

You can load `.cljs` files directly in Scittle as scripts.
But many ClojureScript libraries have multiple namespaces and may depend on npm packages.
Scittle plugins are compiled JavaScript from the ClojureScript library, ready to use in Scittle.
Only a few plugins are included in the official Scittle distribution.
Other plugins need to be built in a special way to be usable in Scittle,
which is a barrier for users and plugin authors.

`scittle-kitchen` provides a shared build and release process for precompiled Scittle plugins.
It uses a git submodule to always build against the latest Scittle code,
and automatically discovers plugins in the community contributed `plugins/` directory and official `scittle/plugins/`.

By publishing precompiled plugins, we lower the entry barrier to try ClojureScript libraries.
My main hope is that having more precompiled plugins available will help people experiment.
That's what I really love about Scittle, being able to just try things without using a build tool.

Building and releasing plugins can make the ClojureScript ecosystem more accessible from Scittle,
leading to greater adoption.

## Goals

- Publish precompiled plugins ready for immediate use
- Encourage and support community-contributed plugins
- Stay up-to-date with upstream Scittle releases
- Avoid interfering with Scittle’s normal build and release process
- **Endorsement to help with plugin adoption and visibility**
  - Under the babashka organization
  - Linked from Scittle's README
- Minimize maintenance burden on @borkdude
- Automate the release process
- Keep up with latest Scittle releases
- Keep up with latest plugin dependencies
- Support multiple scittle.js builds with different plugin sets

## Contributing

Pull requests are invited.
Add new plugins in [`plugin-templates.edn`](plugin-templates.edn) or create a new directory in `plugins/`.
For most libraries, just add an entry to [`plugin-templates.edn`](plugin-templates.edn).

## Development

Releases are done as a github Action, which pushes to the `gh-pages` branch, which is published by GitHub Pages.
See [.github/workflows/release.yml](.github/workflows/release.yml).
While developing, you can run the build locally by checking out the latest Scittle code (the GitHub Action does this automatically) `git submodule update --init --remote`,
running `bb -f generate_plugins.clj` to generate the plugins and `deps.edn` in `all/`,
then running `bb -d all -f build.clj release`.

## Build Process Design

To build Scittle (and plugins), ensure that scittle and all the plugins you want are on the classpath,
and invoke the scittle build function: `(build/build)`.
Scittle discovers plugins by scanning the classpath for plugin descriptors,
and produces javascript files in `resources/public/js`.

Below details how `scittle-kitchen` achieves this situation by preparing the deps for a build.

- **Local Scittle Dependency:**
  Problem: we want to use the latest version of Scittle and be able to run `build/build` and find `scittle/plugins`.
  Solution: use a git submodule and a `:local/root "scittle"` dependency.
  Note that `:local/root "scittle/build"` is also required as a dependency as that is not included in just scittle.
  When run as a GitHub Action, the workflow always checks out the latest Scittle code from your repository,
  so builds and plugins are always up-to-date with the most recent changes.

- **SCI Version Synchronization:**
  Problem: there is a conflict between the SCI Maven version and the Scittle git dependency of SCI.
  Solution: the build script copies the version of `org.babashka/sci` from `scittle/deps.edn` to ensure compatibility. Without this, the build will fail.

- **Automatic Plugin Generation:**
  Problem: we want to avoid boilerplate and make it easy to add new plugins.
  Solution: the [`build.clj`](build.clj) script generates plugins from a concise data description in [`plugin-templates.edn`](plugin-templates.edn).
  This works for simple plugins.
  For most libraries, just to `plugin-templates.edn`.
  If your plugin requires more complex setup, you can create a full plugin directory in `plugins/` rather than generating it,
  or we can add optional fields to the template in the future.

- **Automatic Plugin Discovery:**
  Problem: in order to add plugins to the classpath, we need to find them and create a `deps.edn`.
  Solution: directories in `plugins/` and `scittle/plugins/` (excluding `demo`) are detected as dependencies.
  New plugins are included in the build without changes to the build process.

- **Separate build directories:**
  Problem: we want to be able to build different versions of Scittle with different plugin sets.
  Solution: [`build.clj`](build.clj) can generate multiple build directories with different sets of plugins.
  Each build directory has its own `deps.edn` and `bb.edn`.
  Note that both are required. scittle/build is babashka only, so it needs to be in `bb.edn`.
  `deps.edn` is required when scittle/build launches Clojure to do the shadow-cljs build.
  The default build is `all`, which includes all plugins.
  Inside that directory, `bb release` will produce a build with all plugins. This enables easy experimentation and custom builds.

- **Future Improvements:**
  - It might be better to have the build process checkout the latest Scittle code itself,
    rather than relying on the GitHub Action to do so.
  - Support versioned builds, e.g. `all-0.4.0`, `official-0.4.0`, etc.
  - Think about using latest versions of the libraries that plugins depend on.
    Right now, they are pinned in `plugin-templates.edn`.
  - Publish to NPM or a CDN

## Alternatives considered

- Could be part of the scittle repo itself, as a different build task.
  NO: adds too much maintenance burden on @borkdude
- [https://github.com/scicloj/scittle](https://github.com/scicloj/scittle) is a fork instead of using submodule.
  NO: harder to keep up with latest Scittle changes, not clear how to add plugins.
- Publishing to NPM or CDN. YES (soon): could be done in addition to GitHub Pages.
- How to update plugin dependencies? TBD for now they are pinned in `plugin-templates.edn`.
  Could be done automatically by checking for new versions on Clojars.
- Should plugin builds be versioned? TBD for now there will just be a global version I think.
- Shouldn't all plugins have their own directory/edn file? YES to enable standalone building.
  But we can make it more convenient by generating from a template.
- Should it produce scittle-kitchen.js or just scittle.js or several flavors (is there an advantage to excluding plugins)? TBD. I think it should have a different name to avoid confusion with the official scittle.js, but it's easier to just leave it alone.
