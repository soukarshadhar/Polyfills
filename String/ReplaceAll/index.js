String.prototype.myReplaceAll = function (pattern, replacement) {
  let str = this.valueOf();
  if (pattern.length === 0) return str;

  let index = str.indexOf(pattern);

  while (index !== -1) {
    const charsBefore = str.slice(0, index);
    const charsAfter = str.slice(index + pattern.length);
    str = charsBefore.concat(replacement, charsAfter);
    index = str.indexOf(pattern);
  }

  return str;
};

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll("dog", "."));

console.log(paragraph.myReplaceAll("dog", "."));
