# Canni command parser

A command parser and other utilities shared by the bots of Galacon, so that they get identical message parsing behaviour among other things. **Currently containing minimal logic and not actually used for what the name may imply.**

## Building

You need rust installed on your system. The best way to do so is using `https://rustup.rs`, and the correct languageg version will be fetched for you if needed when you build.

To build in debug mode (faster build/rebuild, good for developing, but not optimised), run `pnpm run build:debug`

To build in release mode (slower build/rebuild, but fully optimised, good for deployment), run `pnpm run build:release`
