String.prototype.myReplace = function (pattern, replacement) {
  let newString = "";
  const index = this.indexOf(pattern);

  if (index !== -1) {
    const charBeforePattern = this.slice(0, index);
    const charsAfterPattern = this.slice(index + pattern.length);
    newString = charBeforePattern.concat(replacement, charsAfterPattern);
  }
  return newString;
};

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("", "my"));

console.log(paragraph.myReplace("", "my"));
