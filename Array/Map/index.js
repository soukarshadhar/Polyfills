Array.prototype.myMap = function (cb) {
  if (typeof cb !== "function")
    throw new Error(`${cb} is not a function passed to myMap`);

  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }
  return arr;
};

const a = [1, 2, 3, 4];

const arr = [1, 2, 3, 4].map((item) => item * 2);
const myArr = [1, 2, 3, 4].myMap((item) => item * 2);
console.log(arr, myArr);
