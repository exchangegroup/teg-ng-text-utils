(function() {
  'use strict';

  describe('TegNgTextUtils helper', function() {
    var obj;

    beforeEach(module('TegNgTextUtils'));

    beforeEach(inject(function(tegNgTextUtils) {
      obj= tegNgTextUtils;
    }));

    it('escapes regular expression', function() {
      expect(obj.escapeRegexp('.?*[]')).toEqual('\\.\\?\\*\\[\\]');
    });

    describe('escape HTML', function() {
      it('escapes', function() {
        var result = obj.escapeHtml('<span>"Cats" & \'Cucumbers\'</span>');
        expect(result).toBe('&lt;span&gt;&quot;Cats&quot; &amp; &#039;Cucumbers&#039;&lt;/span&gt;');
      });

      it('handle empty arg', function() {
        var result = obj.escapeHtml();
        expect(result).toBe('');
      });
    });

    it('checks if text is present', function() {
      expect(obj.textPresent('hello')).toEqual(true);
      expect(obj.textPresent('   ')).toEqual(false);
      expect(obj.textPresent()).toEqual(false);
      expect(obj.textPresent(123)).toEqual(false);
    });
  });

})();