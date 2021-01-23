let readline = require('readline-sync');
let age = Number(readline.question(`How old are you? `));

console.log(`You are ${age} years old.`);

for (let incr = 10; incr <= 40; incr += 10) {
  console.log(`In ${incr} years, you will be ${age + incr} years old.`);
}