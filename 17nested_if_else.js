/**** nested if else ****/

// winning number 19

// 19 your guess is right;
// 17 too loo
// 20 too high

let winningNumber = 19;
let userGuess = +prompt("Guess a Number");
// console.log(typeof userGuess, userGuess);
if (userGuess === winningNumber) {
    console.log("Your guess is right");
}
else { // nested if else
    if (userGuess < winningNumber) 
    console.log("to Loo...");
    else {
        console.log("to High...");
    }
}