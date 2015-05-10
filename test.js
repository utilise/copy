var expect = require('chai').expect
  , copy = require('./')

describe('copy', function() {

  it('should return value of simple key', function() {
    var to = {}, from = { 'a' : 'b' }
    expect(copy(from, to)('a')).to.equal('a')
    expect(to).to.eql(from)
  })

})