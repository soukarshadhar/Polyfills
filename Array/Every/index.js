Array.prototype.myEvery = function (cb) {
  if (typeof cb !== "function")
    throw new Error("Callback is not passed to myFind method");

  let canElementPass = true;
  let i = 0;

  while (canElementPass && i < this.length) {
    canElementPass = !!cb(this[i], i, this);
    i++;
  }

  return canElementPass;
};

const b = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }].myEvery((item) => {
  return item.x < 1;
});
console.log(b);
