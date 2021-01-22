function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

// The code logs Product2 to the console. This is because the argument '113' passed to the function
// matches the respective case clause in the switch statement. Hence, the code under the matching case clause
// at line 6 gets executed.