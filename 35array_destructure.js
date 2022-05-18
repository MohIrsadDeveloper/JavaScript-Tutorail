// Array destructureing (Es6)

const myArray = ["value1", "value2", "value3", "value4"];
let var1 = myArray[0];
let var2 = myArray[1];

console.log('value of var1', var1);
console.log('value of var2', var2);

/* let [myvar1, myvar2] = myArray;
console.log('value of myvar1', myvar1);
console.log('value of myvar2', myvar2);
 */


/* let [myvar1, myvar2, myvar3] = myArray;
console.log('value of myvar1', myvar1);
console.log('value of myvar2', myvar2);
console.log('value of myvar3', myvar3); */

/* let [myvar1, myvar2, , myvar3] = myArray;
console.log('value of myvar1', myvar1);
console.log('value of myvar2', myvar2);
console.log('value of myvar3', myvar3); */


let [myvar1, myvar2, ...myvar3] = myArray;

console.log('value of myvar1', myvar1);
console.log('value of myvar2', myvar2);
console.log('value of myvar3', myvar3);
