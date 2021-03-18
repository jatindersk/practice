// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// let keysArr = Object.keys(obj);
// console.log(keysArr.map(el => el.toUpperCase()));

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let arr = Object.keys(obj).map(el => el.toUpperCase());
console.log(arr);