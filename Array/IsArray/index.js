Array.myIsArray = function (arg) {
  return Object.getPrototypeOf(arg) === Array.prototype;
};

console.log(Array.myIsArray([]));
