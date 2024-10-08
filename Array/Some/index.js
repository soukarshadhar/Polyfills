Array.prototype.mySome = function (cb) {
  if (typeof cb !== "function")
    throw new TypeError(`${cb} is not a function passed to mySome`);

  let canElementPass = false;
  let i = 0;

  while (!canElementPass && i < this.length) {
    canElementPass = !!cb(this[i], i, this);
    i++;
  }

  return canElementPass;
};

const arr = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }].some(
  (item) => item.x < 2
);

const myArr = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }].mySome(
  (item) => item.x < 2
);
console.log(arr, myArr);
