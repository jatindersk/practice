let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

let evenArray = [];
myArray.forEach(arr => {
  evenArray.push(arr.filter(el => el % 2 === 0));
});

console.log(evenArray);