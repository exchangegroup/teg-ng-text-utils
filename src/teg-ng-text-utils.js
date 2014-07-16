(function() {
  "use strict";

  angular.module('TegNgTextUtils', []).factory('tegNgTextUtils', function() {
    return {
      escapeRegexp: function(text) {
        return text.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
      },

      escapeHtml: function(unsafe) {
        if (unsafe === null || unsafe === undefined) { unsafe = ''; }

        return unsafe.
          replace(/&/g, "&amp;").
          replace(/</g, "&lt;").
          replace(/>/g, "&gt;").
          replace(/"/g, "&quot;").
          replace(/'/g, "&#039;");
      },

      // Check if text is present and it is not empty.
      // Text containing blanks is considered empty.
      textPresent: function(text) {
        return (typeof text === 'string') && text.trim() !== '';
      }
    };
  });

})();