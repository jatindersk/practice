let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// Output is an infinite loop because the conditional expression of while loop at line 3
// reassigns the 'counter' variable a value of 1 in each iteration.
// Therefore, the conditional expression of if statement at line 7 never becomes true.
// Hence, the loop never ends.