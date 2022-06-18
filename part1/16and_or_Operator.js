/***** and(&)  or(||) operator *****/

let firstName = "abdul";
let age = 22;

// if (firstName[0] === "a") {
//     console.log("name start with a");
// }

// if (age > 18) {
//     console.log("You are above 18");
// }

// all condition must be fulfilled or true;
if (firstName[0] === "a" && age> 18) {
    console.log("Name start with a and age is above 18");
}

// atleast one condition be fulfilled or true;
if (firstName[0]=== 'a' && age > 18) {
    console.log("Name or age fulfilled.");
}

/************/
/* 
Name start with a age is above 18
Name or age fulfilled.
*/