Array.prototype.myFind = function (cb) {
  if (typeof cb !== "function")
    throw new Error("Callback is not passed to myFind method");

  let element;
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      element = this[i];
      break;
    }
  }
  return element;
};

const a = [{ x: 0 }, { x: 1, no: 2 }, { x: 1, no: 1 }, { x: 3 }, { x: 4 }];
const b = a.find((item) => item.x === 1);
console.log(a, b);
