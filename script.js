//your JS code here. If requile
let student = { name:"",age:24 , job:"as"}

Object.prototype.getKeys = function() {
  return Object.keys(this);
};
console.log(student.getKeys());