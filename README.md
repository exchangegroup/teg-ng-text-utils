# Overview

Collection of utilility functions to work with text.

## Install

    bower install <path to github repo>

Include the JS script:

    <script src="/bower_components/<path to file name>.js"></script>

If you need to support browsers that do not understand ECMAScript 5 (like IE8) please also include:

    bower install es5-shim
    <script src="/bower_components/es5-shim/es5-shim.min.js"></script>

Add module to your app's dependencies:

    angular.module('YourApp', ['TegNgTextUtils'])

## Usage

    var escaped = tegNgTextUtils.escapeRegexp('some text');

## Functions

  * **escapeRegexp(text)**: Escapes the text so it can be passed to JavaScript regular expression object, like `new RegExp(escaped_text)`

  * **escapeHtml(text)**: Escapes special characters in HTML: < > & " '

  * **textPresent(text)**: Checks if text is present. A string containing only blanks is considered blank.

## Development

After cloning the github repo into a dir:

    npm install
    bower install
    npm install -g gulp

Test:

    gulp test

Build:

    gulp

Finally, bump bower version number:

    git tag v0.1.[patch number]
    git push origin v0.1.[patch number]



