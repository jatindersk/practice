// let uppercased = str => {
//   if (str.length > 10) {
//     return str.toUpperCase();
//   } else return str;
// };

// using ternary operator

let uppercased = str => {
  return (str.length > 10) ? str.toUpperCase() : str;
};

console.log(uppercased('hello world'));
console.log(uppercased('goodbye'));
console.log(uppercased('I like apples, oranges and bananas.'));