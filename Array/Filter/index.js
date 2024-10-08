Array.prototype.myFilter = function (cb) {
  if (typeof cb !== "function")
    throw new Error("Callback is not passed to myFind method");

  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const a = [{ x: 0 }, { x: 1 }, { x: "" }, { x: 3 }, { x: 4 }];
const b = a.myFilter((item) => item.x);
console.log(a, b);
