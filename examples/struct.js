// Generated by KofuScript 0.1.0-beta4 
var present = console.log; 
// Generated by KofuScript 0.1.0-beta4 
var user, users;
0;
user = { name: 'hello' };
0;
users = {
  users: [
    user,
    user
  ],
  id: 'group1'
};
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