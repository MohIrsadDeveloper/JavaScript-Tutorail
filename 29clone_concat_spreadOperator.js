// how to clone array
let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0); // old method to clone
let array2 = [].concat(array1); // concat method to clone
let array3 = [...array1] // spread operator to clone
array1.push("item3")

console.log(array1 === array2);
console.log(array1, array2, array3);


// how to concatenate two arrays
let arr1 = ["item1", "item2"];
// let arr2 = [].concat(arr1, ["item3", "item4"]);
let arr2 = [...arr1, "item3", "item4"];

console.log(arr1,arr2);