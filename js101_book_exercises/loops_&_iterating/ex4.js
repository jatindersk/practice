for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// Output will be 1.
// It does not produce an error because expression inside the log method
// gets executed. Further, the loop stops iterating after the first iteration
// as increment operation hasn't been specified.