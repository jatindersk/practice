function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

// It will not log anything to the console.
// This is because return statement at line 3 ends the execution of code within the function.