var Greet = function() {};

Greet.prototype.name = function(name) {
  return 'Hello, ' + name;
};

module.exports = new Greet();


