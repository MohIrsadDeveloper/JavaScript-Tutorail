// hoisting

console.log(this);
console.log(window);
console.log(myFunction);

console.log(fullName);

function myFunction() {
    console.log("This is my function");
};

var firstName = "abdul";
var lastName = "idrisi";
var fullName = firstName + " " + lastName;
console.log(fullName);