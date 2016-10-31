# Mixer


[![Build Status](https://img.shields.io/travis/drinkingvideogames/mixer.svg?style=flat-square)](https://travis-ci.org/drinkingvideogames/mixer)
[![Code Climate](https://img.shields.io/codeclimate/github/drinkingvideogames/mixer.svg?style=flat-square)](https://codeclimate.com/github/drinkingvideogames/mixer)

## Setup
1. Clone the project with `git clone https://github.com/drinkingvideogames/mixer.git`
2. Check node version is 6.0.0+. If not swap node version.
3. Check npm version is 2+. 3 can be a bit slow. (TODO: Yarn?)
4. `npm install`

You should now be able to run `npm start` and see *Main Application* at `http://localhost:4242/` in your browser.

## Included npm scripts
- `npm start` - Start the server and webpack dev server if in development.
- `npm run lint` - Lint the code with snazzy (a pretty standard linter).
- `npm run build` - Generate the development webpack bundle.
- `npm run build-prod` - Generate the production webpack bundle and source map.
- `npm run clean` - Remove any webpack bundle and source maps.
