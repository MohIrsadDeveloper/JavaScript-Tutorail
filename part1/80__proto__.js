// __proto__

// official ecmascript documentation
// [[prototype]]

// __proto__ === [[prototype]]

// prototype is different from __proto__;

const obj1 = {
    key1 : "value1",
    key2 : "value2"
};

const obj2 = {
    key3 : "value3"
};
obj2.key3 = 'unique value'

// there is one more way to create empty object
const obj3 = Object.create(obj1); // create {}

console.log(obj1.key1);
console.log(obj1.key2);

console.log(obj2.key3);

console.log(obj3); // {}
console.log(obj3.key2);


console.log(obj3.__proto__);