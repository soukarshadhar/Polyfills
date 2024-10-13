Function.prototype.myBind = function (thisArg, ...bindArgs) {
  return (...args) => {
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
    const result = thisArg.fn(...bindArgs.concat(args));
    delete thisArg.fn;
    return result;
  };
};

function A(a, b, c, d) {
  console.log(this, a, b, c, d);
}

const B = A.myBind(null, 2, 3);
const C = B.myBind(true, 4);
C(5);

// const B = A.bind(null, 2, 3);
// const C = B.bind(true, 4);
// C(5);
