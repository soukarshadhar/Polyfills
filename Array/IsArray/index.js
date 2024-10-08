Array.myIsArray = function (arg) {
  return Object.getPrototypeOf(arg) === Array.prototype;
};

console.log(Array.myIsArray([]));

function A() {
  this.type = "Function constructor";
}
A.prototype.getType = function () {
  console.log(this);
};

const C = new A();
console.log(C);
