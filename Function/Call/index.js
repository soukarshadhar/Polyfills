Function.prototype.myCall = function (thisArg, ...args) {
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

function A(...args) {
  console.log(this, ...args);
}

A.call("hi", 2, 3, 4, 5);
A.myCall("hi", 2, 3, 4, 5);
