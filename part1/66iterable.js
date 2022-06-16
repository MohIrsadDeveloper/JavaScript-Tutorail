/******** iterables ********/
// jispe hum for of loop laga sakein
// string, array are iterable

const name = "abdul";
for (const char of name) {
    console.log(char);
};

const array = ['apple', 'mango', 'orange'];
for (const fruit of array) {
    console.log(fruit);
}


//*******array like object */
// jiske pas length property hoti hai
// aur jisko hum index se access kar sakte hai
// example :- string

const firstName = "abdul";
console.log(firstName.length);
console.log(firstName[2]);
