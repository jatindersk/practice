let uppercased = str => {
  if (str.length > 10) {
    return str.toUpperCase();
  } else return str;
};

console.log(uppercased('hello world'));
console.log(uppercased('goodbye'));
console.log(uppercased('I like apples, oranges and bananas.'));