# Overview

Collection of utilility functions to work with text.

## Install

    bower install <path to github repo>

Include the JS script:

    <script src="/bower_components/<path to file name>.js"></script>

Add module to your app's dependencies:

    angular.module('YourApp', ['TegNgTextUtils'])

## Usage

    var escaped = tegNgTextUtils.escapeRegexp('some text');

## Functions

  * **escapeRegexp(text)**: Escapes the text so it can be passed to JavaScript regular expression object, like `new RegExp(escaped_text)`

  * **escapeHtml(text)**: Escapes special characters in HTML: < > & " '

## Development

After cloning the github repo into a dir:

    npm install
    bower install

Test:

    gulp test

Build:

    gulp

Finally, bump bower version number:

    git tag v0.1.[patch number]
    git push origin v0.1.[patch number]



