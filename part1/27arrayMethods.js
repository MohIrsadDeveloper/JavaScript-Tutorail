// array push pop

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);

// push
let pushFruits = fruits.push("banana");
console.log(pushFruits); // 4 (length)
console.log(fruits);

// pop
let popFruit = fruits.pop();
console.log(popFruit); // banana
console.log(fruits);



// array shift unshit
// unshift
let unshiftFruits = fruits.unshift("orange");
console.log(fruits);
console.log(unshiftFruits); // 4 (length)

// shift
let shiftFruits = fruits.shift("orange");
console.log(fruits);
console.log(shiftFruits); // orange