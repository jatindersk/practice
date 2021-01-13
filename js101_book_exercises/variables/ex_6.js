const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// This program will not produce an error and will output bar.
// Although, line 3 declares a variable with same name yet it is declaring a new variable
// FOO declared at line 3 will not modify the FOO variable declared at line 1.