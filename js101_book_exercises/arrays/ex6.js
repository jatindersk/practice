let oddLengths = arr => {
  let strlength = arr.map(el => el.length);
  return strlength.filter(el => el % 2 !== 0);
};

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]