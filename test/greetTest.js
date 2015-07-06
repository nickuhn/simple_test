var greet = require('../greet.js');
var expect = require('chai').expect;

describe('greet.js', function(){
  it('should return Hello, Nick when passed Nick', function(){
    expect(greet(Nick)).to.equal('Hello, Nick');
  });
});
