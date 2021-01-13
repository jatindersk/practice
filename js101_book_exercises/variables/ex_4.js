const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// It will output the text with NAME as Victor for all cases.
// This is because variables declared with keyword const cannot be assigned a new value.

// LS solution:
// The program first greets Victor 3 times. It then encounters an error on line 6,
// which prevents it from greeting Joe. The problem is that constants are, well, constant.
// You can't reassign a constant after defining it. You must use regular variables instead: