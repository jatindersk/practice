let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// This code will log 1 to the console.
// This is because the variable 'bar' available at the global scope has the value of 1
// The 'bar' variable inside the function block at line 3 is a different variable even though
// it has the same name. It will not affect the 'bar' variable defined at line 1.