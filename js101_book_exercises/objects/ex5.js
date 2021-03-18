let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.hierarchy = 'child object';

console.log(myObj);
console.log(myProtoObj);
// below is for understanding the prototyping logic
for (let keys in myObj) {
  console.log(keys);
}