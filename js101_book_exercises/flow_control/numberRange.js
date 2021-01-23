let numberRange = num => {
  if (num > 0 && num <= 50) {
    return `${num} is between 0 and 50`;
  }
  else if (num > 50 && num < 100) {
    return `${num} is between 51 and 100`;
  }
  else if (num > 100) {
    return `${num} is greater than 100`;
  }
  else return `${num} is less than 0`;
  // switch (num) {
  //   case num > 0 && num <= 51:
  //     return `${num} is between 0 and 50`;
  //   case (51 < num <= 100):
  //     return `${num} is between 51 and 100`;
  //   case (num > 100):
  //     return `${num} is greater than 100`;
  //   case (num < 0):
  //     return `${num} is less than 0`;
  // }
};

console.log(numberRange(25));
console.log(numberRange(75));
console.log(numberRange(125));
console.log(numberRange(-25));