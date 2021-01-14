const readline = require('readline-sync');
let firstName = readline.question('What is your first name? ');
let lastName = readline.question('What is your last name? ');

console.log(`Hello, ${firstName} ${lastName}!`);