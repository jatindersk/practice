let evenOrOdd = num => {
  if (typeof(num) === 'number') {
    (num % 2 === 0) ? console.log('even') : console.log('odd');
  } else return console.log('error: num is not an integer.');  
};

evenOrOdd(46);
evenOrOdd(77);
evenOrOdd('jatin');