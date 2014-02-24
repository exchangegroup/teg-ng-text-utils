# Overview

Collection of regular expressions utilility functions.

## Install

    bower install <path to github repo>

Include the JS script:

    <script src="/bower_components/<path to file name>.js"></script>

Add module to your app's dependencies:

    angular.module('YourApp', ['TegNgRegexpUtils'])

## Usage

    tegNgRegexpUtils.escape('some text')

## Functions

  * **escape(text)**: Escapes the text so it can be passed to JavaScript regular expression object, like `new RegExp(escaped_text)`


## Development

Setup:

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



