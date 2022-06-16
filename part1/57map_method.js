/******* map method ******/
// map method mendatory to return something, if not retrun anything then its take undefinde as default;
// map method return an array but forEach cannot return array;
// map method create new array


const numbers = [3,4,6,1,8];

const square = function (number) {
    return number*number;
};
let squareNumber = numbers.map(square)
console.log(squareNumber);

// realistic example
const users = [
    {firstName : "abdul", age : 15},
    {firstName : "asma", age : 18},
    {firstName : "ayesha", age : 19},
    {firstName : "kulsum", age : 25},
];

let userName = users.map((userName, index) => {
    return userName.firstName
})
console.log(userName);

/* let sn = numbers.forEach((number) => {
    // console.log(number*number); // return square value not an array;
    return number*number; // return undefined
})
console.log(sn); */