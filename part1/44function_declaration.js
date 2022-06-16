/******* functions declaration *******/

/* // syntax : 
function functionName(parameter) {
    return statement
}
functionName(argument) // callfunction
 */
function helloWorld() {
    console.log("Hello World");
};

helloWorld();

function twoPlusFour() {
    console.log(2+4);
}
// above code is not good practice.

function sumOfTwoNumber(num1,num2) {
    return num1+num2;
}
console.log(sumOfTwoNumber(4,5));
console.log(sumOfTwoNumber(22,5));

// Odd Even function
function check_Odd_Even(number) {
    if (number%2===0) {
        return "Even Number"
    } else {
        return "Odd Number"
    }
};
console.log(check_Odd_Even(55));
console.log(check_Odd_Even(25));
console.log(check_Odd_Even(252));

// return first character
function firstCharacter(string) {
    let str = string[0];
    return str;
}
console.log(firstCharacter("abdul"));

// 
function target(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
        return -1;
    }
}
console.log(target([1,2,3,5,6,7,4], 4));
console.log(target([1,2,3,5,6,7,4], 42));