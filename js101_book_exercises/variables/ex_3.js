let f; // self created modification
{
  let foo = 'bar';
  //f = [1];
}

console.log(f);
console.log(foo);

// Output will be undefined.
// This is because variable foo's is block scoped or is a local variable i.e it isn't accessible outside of the curly braces.

// LS solution:
// The program outputs an error since foo is out of scope: the let statement creates variables with block scope, which limits the visibility of the variable to the block.
// Even though console.log(foo) comes after the declaration and initialization of foo, we still get an error since we declared foo inside the block. Outside the block, foo doesn't exist.