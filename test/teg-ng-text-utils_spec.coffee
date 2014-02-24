describe 'TegNgTextUtils helper', ->
  beforeEach -> module('TegNgTextUtils')
  beforeEach(inject((@tegNgTextUtils) ->))

  it 'escapes regular expression', ->
    expect(@tegNgTextUtils.escapeRegexp('.?*[]')).toEqual '\\.\\?\\*\\[\\]'

  describe 'escape HTML', ->
    it 'escapes', ->
      result = @tegNgTextUtils.escapeHtml('<span>"Cats" & \'Cucumbers\'</span>')
      expect(result).toBe '&lt;span&gt;&quot;Cats&quot; &amp; &#039;Cucumbers&#039;&lt;/span&gt;'

    it 'handle empty arg', ->
      result = @tegNgTextUtils.escapeHtml()
      expect(result).toBe ''