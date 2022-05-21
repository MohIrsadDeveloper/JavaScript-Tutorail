const person = {
    name : "abdul",
    age  : 15,
    "person hobbies" : ["cricket", "sleeping", "talking"]
};

// for loop
// Object.keys()
console.log(Object.keys(person));

for(let key in person) {
    // console.log(`${key} : ${person[key]}`);
    console.log(key, " : ",person[key]);
}

console.log(typeof (Object.keys(person)));
const val = Array.isArray((Object.keys(person)));
console.log(val);

for (const key of Object.keys(person)) {
    console.log(person[key]);
}