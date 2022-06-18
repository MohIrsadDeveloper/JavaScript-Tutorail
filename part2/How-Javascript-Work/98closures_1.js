// closures
// closure : 30-40%
// analyse : 70-80%
// real example : 100%


// function can return function

function outerFunction() {
    function innerFunction() {
        console.log("Hello World");
    }
    return innerFunction;
};

const ans = outerFunction();
console.log(ans); // return entire function
ans(); // return hello world


function fullName(firstName, lastName) {
    function printName() {
        console.log(firstName, lastName);
    }
    return printName;
}
let Name = fullName("abdul", "idrisi")
Name();