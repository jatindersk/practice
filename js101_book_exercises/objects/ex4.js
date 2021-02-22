let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keysArr = Object.keys(obj);

console.log(keysArr.map(el => el.toUpperCase()));