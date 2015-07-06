var greet = require('../greet');
var expect = require('chai').expect;

describe('greet.js Command Line', function(){
  it('should return Hello, Nick when passed command: node greet.js Nick', function(){
    var commandInput = ['node', 'greet.js', 'Nick'];
    expect(greet.name(commandInput[2])).to.equal('Hello, Nick');
  });
});
