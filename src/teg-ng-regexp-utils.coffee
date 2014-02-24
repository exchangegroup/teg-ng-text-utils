"use strict";

angular.module('TegNgRegexpUtils', []).
factory('tegNgRegexpUtils', ->
  escape: (text) -> text.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
)