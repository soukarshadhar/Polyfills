Array.prototype.mySome = function (cb) {
  if (typeof cb !== "function") throw new Error("Callback is not a function");

  let canElementPass = false;
  let i = 0;

  while (!canElementPass && i < this.length) {
    canElementPass = !!cb(this[i], i, this);
    i++;
  }

  return canElementPass;
};

const b = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }].mySome((item) => {
  return item.x < 2;
});
console.log(b);
