/****** Map in Javascript *****/
// map is an iterable

// store data in ordered fashion
// store key value pair (live object)
// duplicate keys are not allowed like objects

// different between maps and objects
// objects can only have string or symbol
// as key

// in maps you can use anything as key
// like array, number, string

// Object literal
// key => string
// key => symbol

/* const person = {
    firstName : "abdul",
    age : 15,
    1 : "one"
};
console.log(person.firstName);
console.log(person["firstName"]);
console.log(person['age']);
console.log(person['1']);
console.log(person[1]);

// get key of an object
for (const key in person) {
    console.log(key);
} */

// key value pair
const person = new Map();
person.set('firstName', 'Abdul');
person.set('age', 15);
person.set(1, 'one');
person.set([1,2,3], 'onetwothree');
person.set({1 : 'one'},'onetwothree')
console.log(person);
console.log(person.get('age')); // get value of given key

for (const key of person.keys()) {
    console.log(key, typeof key); // get key of all person object
}

// get key and value using data destructure
for (const [key, value] of person) {
    console.log(Array.isArray(key));
    console.log(key,value);
}

const person1 = {
    id : 1,
    firstName : "abdul"
};
const person2 = {
    id : 2,
    firstName : "asma"
};

const extraInfo = new Map();
extraInfo.set(person1, {age : 15, gender : "male"})
extraInfo.set(person2, {age : 18, gender : "female"})
console.log(extraInfo);

console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);