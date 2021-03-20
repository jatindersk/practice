let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
}); // qux

for (let key in myObj) {
  console.log(key);
} // foo, bar, qux

// These two code snippets won't produce the same output because Object.keys is a static
// method which iterates over the properties explicitly defined by the object.
// Whereas, the for in method iterates over the properties of object's prototypes as well.