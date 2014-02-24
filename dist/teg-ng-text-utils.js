(function() {
  "use strict";
  angular.module('TegNgTextUtils', []).factory('tegNgTextUtils', function() {
    return {
      escapeRegexp: function(text) {
        return text.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
      }
    };
  });

}).call(this);
