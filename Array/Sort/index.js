Array.prototype.mySort = function (compareFn) {
  if (typeof compareFn !== "function" && compareFn !== undefined)
    throw new Error("compareFn callback must be a function");

  const merge = (leftArr, rightArr) => {
    const mergedArr = [];
    let i = 0;
    let j = 0;

    const internalCompare = (isLessThan, isGreaterThan, item1, item2) => {
      if (isLessThan()) {
        mergedArr.push(item1);
        i++;
      } else if (isGreaterThan()) {
        mergedArr.push(item2);
        j++;
      } else {
        mergedArr.push(item1, item2);
        i++;
        j++;
      }
    };

    while (i < leftArr.length && j < rightArr.length) {
      const element1 = leftArr[i];
      const element2 = rightArr[j];

      if (element1 !== undefined && element2 !== undefined && compareFn) {
        const result = compareFn(element1, element2);
        internalCompare(
          () => result < 0,
          () => result > 0,
          element1,
          element2
        );
      } else if (
        element1 !== undefined &&
        element2 !== undefined &&
        !compareFn
      ) {
        internalCompare(
          () => `${element1}` < `${element2}`,
          () => `${element1}` > `${element2}`,
          element1,
          element2
        );
      } else {
        internalCompare(
          () => element1 !== undefined && element2 === undefined,
          () => element1 === undefined && element2 !== undefined,
          element1,
          element2
        );
      }
    }

    while (i < leftArr.length) {
      mergedArr.push(leftArr[i]);
      i++;
    }

    while (j < rightArr.length) {
      mergedArr.push(rightArr[j]);
      j++;
    }
    return mergedArr;
  };

  const mergeSort = (array) => {
    if (array.length === 1) return array;

    const midIndex = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, midIndex));
    const right = mergeSort(array.slice(midIndex));

    return merge(left, right);
  };

  return mergeSort(this);
};

const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [4, 7, 1, 9, 3, 0, 3, 12];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];
const mixedDataTypeArray = [
  undefined,
  true,
  80,
  null,
  0,
  "1",
  undefined,
  9,
  "100",
];
const arrayOfObjects = [
  { name: "Alex", grade: 15 },
  10,
  { name: "Devlin", grade: 15 },
  { name: "Eagle", grade: 13 },
  1,
  { name: "Sam", grade: 14 },
];

const arrayOfArrays = [[3, 4], 10, 9];

// const myArr = mixedDataTypeArray.mySort();
// const arr = mixedDataTypeArray.sort();

// const myArr = numberArray.mySort((a, b) => a - b);
// const arr = numberArray.sort((a, b) => a - b);

// const myArr = numberArray.mySort((a, b) => b - a);
// const arr = numberArray.sort((a, b) => b - a);

// const myArr = mixedNumericArray.mySort();
// const arr = mixedNumericArray.sort();

// const myArr = stringArray.mySort();
// const arr = stringArray.sort();

// const myArr = arrayOfObjects.mySort((a, b) => a.grade - b.grade);
// const arr = arrayOfObjects.sort((a, b) => a.grade - b.grade);

const myArr = arrayOfObjects.mySort();
const arr = arrayOfObjects.sort();

// const myArr = arrayOfArrays.mySort();
// const arr = arrayOfArrays.sort();

console.log(arr, myArr);
