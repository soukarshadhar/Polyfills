Array.prototype.myConcat = function (...args) {
  const arr = [...this];

  if (args.length === 0) return arr;

  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      arr.push(...args[i]);
    } else {
      arr.push(args[i]);
    }
  }

  return arr;
};

const firstArr = [1, 2, 3];

const arr = firstArr.concat(
  4,
  [5, 6],
  [7, [8, 9]],
  [10, 11],
  null,
  "",
  undefined,
  [12, [13, 14, [15]]]
);

const myArr = firstArr.myConcat(
  4,
  [5, 6],
  [7, [8, 9]],
  [10, 11],
  null,
  "",
  undefined,
  [12, [13, 14, [15]]]
);

console.log(arr, myArr);
