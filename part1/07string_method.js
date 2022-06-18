// trim()
// trim use to remove spaces from varible;
// trim metod cannot effect original variable create new variable;
/* let firstName = "     abdul        ";
console.log(firstName.length);  // 18

let trim_firstName = firstName.trim();   // "abdul"
console.log(trim_firstName.length);  // 5
 */
// toUpperCase()
// use to convert all character in UpperCase;
// this method cannot effect original variable create new variable;
/* let firstName = "abdul";
let toUpperCase_firstName = firstName.toUpperCase();
console.log(firstName);
console.log(toUpperCase_firstName); */

// toLowerCase()
// use to convert all character in lowerCase;
// toLowerCase method cannot effect original variable create new variable;
/* let firstName = "ABDUl";
let toUpperCase_firstName = firstName.toLowerCase();
console.log(firstName);
console.log(toUpperCase_firstName);
 */

// slice()
// use to slice the varible according to use case
// this method also create new variable
let firstName = 'Abdul Idrisi'
let slice_firstName = firstName.slice(0,4) // firstName.slice(startIndex, lastIndex)
console.log(slice_firstName);

// If we want till end then only give start index
let slice_firstName2 = firstName.slice(4);
console.log(slice_firstName2);

/**********/
/* 
Abdu
l idrisi
*/