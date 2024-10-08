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

const result = [1, , 3, undefined, ["a", , ["d", , "e"]], null].flat("a");
const a = [1, , 3, undefined, ["a", , ["d", , "e"]], null].myFlat(null);
console.log(result, a);
