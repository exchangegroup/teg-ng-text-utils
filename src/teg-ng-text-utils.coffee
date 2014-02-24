"use strict";

angular.module('TegNgTextUtils', []).
factory('tegNgTextUtils', ->
  escapeRegexp: (text) -> text.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
)