Array.prototype.myEvery = function (cb) {
  if (typeof cb !== "function")
    throw new TypeError(`${cb} is not a function passed to myEvery`);

  let canElementPass = true;
  let i = 0;

  while (canElementPass && i < this.length) {
    canElementPass = !!cb(this[i], i, this);
    i++;
  }

  return canElementPass;
};

const arr = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }].every((item) => {
  return item.x < 1;
});

const myArr = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }].myEvery(
  (item) => item.x < 1
);

console.log(arr, myArr);
