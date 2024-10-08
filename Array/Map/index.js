Array.prototype.myMap = function (cb) {
  if (typeof cb !== "function")
    throw new Error("Callback is not passed to myMap method");

  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }
  return arr;
};

console.log([1, 2, 3, 4].myMap((item) => item * 2));
