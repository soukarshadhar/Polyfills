Array.prototype.myFlat = function (depth = 1) {
  const arr = [];

  function flatten(array, newDepth) {
    array.forEach((element) => {
      if (Array.isArray(element) && newDepth === Infinity) {
        flatten(element, newDepth);
      } else if (Array.isArray(element) && newDepth > 0) {
        flatten(element, newDepth - 1);
      } else {
        arr.push(element);
      }
    });
  }

  flatten(this, depth);

  return arr;
};

const arr = [
  1,
  ,
  3,
  undefined,
  ["a", , ["d", , "e"], [4, [5, [6]]]],
  null,
].flat(3);

const myArr = [
  1,
  ,
  3,
  undefined,
  ["a", , ["d", , "e"], [4, [5, [6]]]],
  null,
].myFlat(3);

console.log(arr, myArr);
