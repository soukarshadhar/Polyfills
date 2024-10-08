Array.prototype.myFind = function (cb) {
  if (typeof cb !== "function")
    throw new TypeError(`${cb} is not a function passed to myFind`);

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

const arr = a.find((item) => item.x === 1);
const myArr = a.find((item) => item.x === 1);
console.log(arr, myArr);
