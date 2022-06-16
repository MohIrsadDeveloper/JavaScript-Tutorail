/***** Objects ****/
// array are good but not sufficient
// for real world data
// object store key value pairs
// object don't have index

// how to create objects
const person = { name : "abdul", age : 15};
console.log(person);
console.log(person["name"]);

// how to access data from objects
console.log(person.name);
console.log(person.age);

// how to add key value pair to objects
person.gender = "male";
console.log(person);