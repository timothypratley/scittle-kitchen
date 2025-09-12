# Design

## Development

For local development:

1. Check out the latest Scittle code (the GitHub Action does this automatically):
  ```bash
  git submodule update --init --remote
  ```
2. Build:
  ```bash
  bb build
  ```
  Or build a single plugin (faster for development):
  ```bash
  bb build <plugin-name>
  ```
  Or build multiple plugins:
  ```bash
  bb build <plugin1> <plugin2> ...
  ```

## Deploying

Deployments are automated via GitHub Actions with two different workflows:

**Development Builds (push to main):**
- Automatically builds and publishes to GitHub Pages for preview/testing
- Does NOT publish to NPM
- Useful for testing changes before making an official release

**Release Builds (push version tag):**
- Automatically builds and publishes to both GitHub Pages and NPM
- Triggered by creating and pushing a version tag: `bb tag`
- Creates an official NPM release

See [.github/workflows/ci.yml](.github/workflows/ci.yml) for the complete workflow configuration.

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
  Solution: the [`build.clj`](src/scittle_kitchen/build.clj) script generates plugins from a concise data description in [`plugin-templates.edn`](plugin-templates.edn).
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
  Solution: [`build.clj`](src/scittle_kitchen/build.clj) can generate multiple build directories with different sets of plugins.
  Each build directory has its own `deps.edn` and `bb.edn`.
  Note that both are required. scittle/build is babashka only, so it needs to be in `bb.edn`.
  `deps.edn` is required when scittle/build launches Clojure to do the shadow-cljs build.
  The default build is `all`, which includes all plugins.
  Inside that directory, `bb release` will produce a build with all plugins. This enables easy experimentation and custom builds.

- **Intelligent Dependency Resolution:**
  Problem: plugins often depend on other plugins (e.g., Re-frame depends on Reagent, which depends on React).
  Solution: the build system automatically extracts dependency information from multiple authoritative sources:
  - Standard plugin dependencies from `scittle/shadow-cljs.edn`
  - Official and community plugin dependencies from individual `scittle_plugin.edn` files
  - External dependencies like React are handled as special cases
  The interactive landing page uses this dependency graph to automatically include required plugins in the correct loading order,
  and handles external CDN resources (like React) appropriately. This uses topological sorting to ensure dependencies load before dependents.

- **Pin React**
  Problem: plugins have varying and conflicting dependencies on React.
  Solution: Scittle Kitchen pins React to 18.3.1 by generating a package.json when preparing the build.

- **Versioning Scheme:**
  Each `scittle-kitchen` build is assigned a version of the form: MAJOR.MINOR.PATCH-BUILD
  - `MAJOR.MINOR.PATCH` is taken from the latest Scittle tag (e.g., 0.7.27)
  - `BUILD` is the git commit count of the scittle-kitchen repository at build time
  For example, if the latest Scittle tag is `0.7.27` and the current commit count is `1234`, the version will be `0.7.27-1234`

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
