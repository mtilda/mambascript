// Generated by KofuScript 0.1.0-beta4 
var present = console.log; 
// Generated by KofuScript 0.1.0-beta4 
var a, b, Guy, name, Person, Point, Region, region;
Person = function () {
  0;
  0;
  0;
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  return Person;
}();
a = new Person('arthur', 32);
name = a.name;
Guy = function (super$) {
  extends$(Guy, super$);
  function Guy() {
    super$.apply(this, arguments);
  }
  ;
  return Guy;
}(Person);
b = new Guy('paul', 29);
present(a instanceof Person);
present(b instanceof Person);
present(name);
Point = function () {
  function Point() {
  }
  0;
  0;
  return Point;
}();
0;
Region = function (super$1) {
  extends$(Region, super$1);
  function Region() {
    super$1.apply(this, arguments);
  }
  ;
  return Region;
}(Point);
region = new Region;
present(region);
function isOwn$(o, p) {
  return {}.hasOwnProperty.call(o, p);
}
function extends$(child, parent) {
  for (var key in parent)
    if (isOwn$(parent, key))
      child[key] = parent[key];
  function ctor() {
    this.constructor = child;
  }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
}