Array.prototype.myReduce = function (cb, initialValue) {
  if (typeof cb !== "function")
    throw new TypeError(`${cb} is not a function passed to myFilter`);

  let accumulator = initialValue ? initialValue : this[0];
  let i = initialValue ? 0 : 1;

  while (i < this.length) {
    accumulator = cb(accumulator, this[i]);
    i++;
  }

  return accumulator;
};

const numArr = [15, 16, 17, 18, 19];

console.log(numArr.reduce((acc, val) => acc + val, null));
console.log(numArr.myReduce((acc, val) => acc + val));
