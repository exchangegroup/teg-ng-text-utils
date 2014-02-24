(function() {
  "use strict";
  angular.module('TegNgRegexpUtils', []).factory('tegNgRegexpUtils', function() {
    return {
      escape: function(text) {
        return text.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
      }
    };
  });

}).call(this);
