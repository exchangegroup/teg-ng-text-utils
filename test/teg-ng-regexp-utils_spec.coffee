describe 'TegNgRegexpUtils helper', ->
  beforeEach -> module('TegNgRegexpUtils')
  beforeEach(inject((@tegNgRegexpUtils) ->))

  it 'escapes regular expression', ->
    expect(@tegNgRegexpUtils.escape('.?*[]')).toEqual '\\.\\?\\*\\[\\]'