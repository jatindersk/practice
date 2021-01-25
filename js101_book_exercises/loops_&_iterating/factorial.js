let factorial = num => {
  let factorial = 1;
  for (num ; num > 1 ; num -= 1) {
    factorial *= num;
  }
  return factorial;
};

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320