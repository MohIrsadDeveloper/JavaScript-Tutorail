/****** block scope vs function scope ******/
// block means which is inside { } bracket known as block.

// let and const are block scope
// At the time of let and const are only accessable within block
{
    let firstName = "abdul";
    console.log(firstName);
}
// console.log(firstName); // give us firstName is not defined

{
    let firstName = "asma";
    console.log(firstName);
}

// const firstName = "ayesha"
// console.log(firstName);

// var is function scope
// var can be accessable on entire or globe
{
    var firstName = "ayesha";
}
console.log(firstName);

{
    console.log(firstName);
}

function myApp() {
    if (true) {
        var firstName = "kulsum";
        console.log(firstName);
    }
    console.log(firstName);
}
myApp();
console.log(firstName);