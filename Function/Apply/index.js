Function.prototype.myApply = function (thisArg, args) {
  if (thisArg === null || thisArg === undefined) {
    thisArg = globalThis;
  }

  if (typeof thisArg === "string") {
    thisArg = new String(thisArg);
  }

  if (typeof thisArg === "number") {
    thisArg = new Number(thisArg);
  }

  if (typeof thisArg === "boolean") {
    thisArg = new Boolean(thisArg);
  }

  thisArg.fn = this;
  const result = thisArg.fn(...args);
  delete thisArg.fn;
  return result;
};

function A(a, b) {
  console.log(this, a, b);
}

A.apply("test", [2, 3]);
A.myApply("test", [2, 3]);
