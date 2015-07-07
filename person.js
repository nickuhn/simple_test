var Person = function() {};

Person.prototype.greet = function(name) {
  return 'Hello, ' + name;
};

module.exports = new Person();


