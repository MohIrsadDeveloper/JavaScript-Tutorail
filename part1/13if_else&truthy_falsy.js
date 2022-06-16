/****** truthy and falsy value******/
// 1. falsy value 
// false
// ""
// null
// undefined
// 0

// let firstName = false;
// let firstName = "";
// let firstName = null;
// let firstName = undefined;
let firstName = 0;
if (firstName) {
    console.log(firstName);
} else {
    console.log("firstName is kind a empty");
}

// 2. truthy value;
// "abc"
// 1, -1;
// let firstName2 = "abc";
// let firstName2 = 1;
let firstName2 = -1;
if (firstName2) {
    console.log(firstName2);
} else {
    console.log("firstName is kind a empty");
}


/***** if else condition*****/
// let age = 14;
// let age = 18;
let age = 20;
if (age >= 18) {
    console.log("You are Eligible");
} else {
    console.log("You are not Eligible");
}

// let num = 14;
let num = 13;
if (num%2===0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}