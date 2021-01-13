let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// This code will program 'bar' to the console.
// This is because, variable foo defined at line 1 and console method at line 6 are
// within the same scope. This foo variable is different from the one defined at line 3
// even though they both have the same name.