# scittle-kitchen

Produces plugin builds for [scittle](https://github.com/babashka/scittle) plugins.

## Rationale

Scittle plugins are powerful, but building them from source can be a barrier for new users and plugin authors.
By providing precompiled plugins and a shared build/release process, we lower the entry barrier for adoption and contribution.
This central place for building and releasing plugins can make the ClojureScript ecosystem more accessible from Scittle.

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

## Design

- Git submodule of scittle repo because there is no maven artifact for scittle builds and plugins
- Publishing to GitHub pages for simplicity

## Alternatives to consider

- Could be part of the scittle repo itself, as a different build task
- [https://github.com/scicloj/scittle](https://github.com/scicloj/scittle) is a fork instead of using submodule
- Publishing to NPM or CDN.
- How to update plugin dependencies? Git submodules? Pinned versions in deps.edn? LATEST in deps.edn?
- Should plugin builds be versioned?
- Shouldn't all plugins have their own directory/edn file? Here? or in scittle/plugins???
- Should it produce scittle-kitchen.js or just scittle.js or several flavors (is there an advantage to excluding plugins)?

## Development

Releases are done as a github Action, which publishes `resources/public` to `gh-pages` branch.

To produce release `.js` files, run: `bb release`, which puts files in `resources/public/js`

This build is adapted from the `scittle/plugins/demo` build.

See:

- `bb.edn`:
  - `:deps` includes:
    - a dependency on the `scittle.build` project to build Scittle with custom features
    - plugin dependencies
    - helpers like a static file server
  - development `:tasks`: Run `bb dev` for development and `bb release` to produce release artifacts.

Official plugins are in the `plugins` directory inside the Scittle repo. Community plugins can be added here as well—please see CONTRIBUTING.md for guidelines (if available).
