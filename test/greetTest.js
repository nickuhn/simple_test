var person = require('../person.js');
var expect = require('chai').expect;

describe('greet.js', function(){
  it('should return Hello, Nick when passed Nick', function(){
    expect(person.greet('Nick')).to.equal('Hello, Nick');
  });
});
