let oddLengths = arr => {
  return arr.reduce((accumulator, el) => {
    if ((el.length) % 2 !== 0) {  
      accumulator.push(el.length);
    }
    return accumulator;
  }, [])
};

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]