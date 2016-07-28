#Piro

[![Build Status](https://travis-ci.org/piro-inc/piro.svg?branch=master)](http://travis-ci.org/piro-inc/piro.git)

A basic layout using node to create an es6 React/Webpack setup. Server is not provided (besides ```webpack-dev-server```), a suggestion would be to make your own server folder using whatever tools you like.

```npm test``` to run the Tape/Enzyme tests, that also uses ```babel-tape-runner``` for es6.

```npm run build``` to build the bundle.js that lies in /public, using webpack.

```npm run build:watch``` to watch and rebuild on file changes.

```npm run dev``` to serve a hot-reloading webpack dev server on port 8080.
