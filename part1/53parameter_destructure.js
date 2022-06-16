/****** param destructuring *****/

// object
// react

const person = {
    firstName : "abdul",
    gender : "male",
}

// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age); // undefinded
// }

function printDetails({firstName,gender}) {
    console.log(firstName);
    console.log(gender);
}

printDetails(person);