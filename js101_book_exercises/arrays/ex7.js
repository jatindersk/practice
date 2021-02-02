let array = [3, 5, 7];
let sumOfSquares = array => array.reduce((accumulator, el) => accumulator + (el * el), 0);
console.log(sumOfSquares(array)); // => 83