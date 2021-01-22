function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

// This code outputs Not Empty to the console.
// This is because even though the array is empty, it gets evaluated
// to be true within the conditional expression of if statement at line 2.