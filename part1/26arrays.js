// intro to arrays
// order collection on items
// syntax : => let variable = ["item1", "item2", so on];
// reference datatype
// arrays content hetrogenous items means string, number, null, undefined
// array is muteable means change index value;
// we access the array value using index number;

// how to create arrays
let fruits = ['apple', 'mango', 'grapes'];
let numbers = [1,2,3,4,5];
let mix = [1,3,4,"abdul", null, undefined];
console.log(fruits);
console.log(numbers);
console.log(mix);

fruits[1] = "banana"
console.log(fruits);
console.log(typeof fruits);
let checkArray = Array.isArray(fruits)
console.log(checkArray);

// array indexing;