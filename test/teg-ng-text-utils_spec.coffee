describe 'TegNgTextUtils helper', ->
  beforeEach -> module('TegNgTextUtils')
  beforeEach(inject((@tegNgTextUtils) ->))

  it 'escapes regular expression', ->
    expect(@tegNgTextUtils.escapeRegexp('.?*[]')).toEqual '\\.\\?\\*\\[\\]'