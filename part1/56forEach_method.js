/******* Important array method ******/
/******* forEach method ******/

const numbers = [5,2,5,8];

function myFunc(number, index) {
    console.log(`Index is ${index} and number is ${number}`);
}
// myFunc(numbers[1],3);

// iterate for all using for loop
/* for(let i=0; i<numbers.length; i++) {
    myFunc(numbers[i], i)
} */

// iterate for all using forEach loop
numbers.forEach(myFunc); // or below code
numbers.forEach(function (number, index) {
    let multiple = number*2;
    console.log("Multiple is ", multiple, index);
})


const users = [
    {firstName : "abdul", age : 15},
    {firstName : "asma", age : 18},
    {firstName : "ayesha", age : 19},
    {firstName : "kulsum", age : 25},
];

users.forEach((user,index) => {
    console.log(user.firstName, index);
})