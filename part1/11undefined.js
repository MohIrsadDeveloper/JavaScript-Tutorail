// 1.undefinded

// var and let can be undefinde but not in case of const
// var firstName;
let firstName;
// const firstName; // throw error
console.log(typeof firstName);
firstName = "abdul";
console.log(typeof firstName, firstName);

// 2. null

let myVariable = null;
console.log(myVariable);
console.log(typeof myVariable); // object => bug, error;
myVariable = "abdul";
console.log(typeof myVariable, myVariable);

// 3. BigInt (2020)
// JavaScript give us maximum Integer (9007199254740991)
// If we want more than above value (9007199254740991) then use BigInt(value);
// BigInt can not add other datatype like number 
// must be both variable as BigInt
let myNumber = 123;
console.log(myNumber);
let maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber); // 9007199254740991

let a = BigInt(123) // first syntax to write
let b = 12n;  // second syntax to write
console.log(a+b);
console.log(myNumber+a); // throw error cannot mix BigInt and other type


/************/
/* 
undefined
string, abdul
null
object
string, abdul
123
9007199254740991
135n
*/