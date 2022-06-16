// difference between dot and bracket notation

const key = "email";
const person = {
    name : "abdul",
    age : 15,
    "person hobbies" : ["cricket", "sleeping"]
};

// using dot
console.log(person.name);
console.log(person.age);

// using bracket
console.log(person["person hobbies"]);

// 
person[key] = "abdul@gmail.com";
console.log(person);
