/****** primitive vs reference data types *******/
// In case of primitive datatype
let num1 = 6;
let num2 = num1;
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);
num1++;
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);


// In case of reference datatype
let array1 = [1,2,3];
let array2 = array1;
console.log(array1);
console.log(array2);
array1.push(4);
console.log(array1);
console.log(array2);