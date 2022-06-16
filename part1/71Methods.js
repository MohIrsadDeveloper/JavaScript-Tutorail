// methods
// functions inside objects

function personInfo() {
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
};

const person1 = {
    firstName : "abdul",
    age : 15,
    about : personInfo
};

const person2 = {
    firstName : "asma",
    age : 18,
    about : personInfo
};

const person3 = {
    firstName : "ayesha",
    age : 19,
    about : personInfo
};

person1.about();
person2.about();
person3.about();