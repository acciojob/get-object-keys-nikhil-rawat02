//your JS code here. If requile
let student = { name:""}

Object.prototype.getKeys = function() {
  return Object.keys(this);
};
console.log(student.getKeys());