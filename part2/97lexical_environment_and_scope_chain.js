// lexical environment and scope chain

const lastName = "idrisi";

const printName = function () {
    const firstName = "abdul";
    function myFunction() {
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();
}
printName();

// abdul
// idrisi