"use strict";

angular.module('TegNgTextUtils', []).
factory('tegNgTextUtils', ->
  escapeRegexp: (text) -> text.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")

  escapeHtml: (unsafe) ->
    unsafe = '' unless unsafe?
    unsafe
     .replace(/&/g, "&amp;")
     .replace(/</g, "&lt;")
     .replace(/>/g, "&gt;")
     .replace(/"/g, "&quot;")
     .replace(/'/g, "&#039;");
)