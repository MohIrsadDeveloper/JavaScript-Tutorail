/****** Sets (it is iterable) ******/
// store data
// set also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicate allowed)

const items = ['item1', 'item2', 'item3'];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(items);
// console.log(items);
// console.log(numbers);
if (numbers.has(1)) {
    console.log("1 is present");
}else {
    console.log("1 is not present");
}

const myArray = [1,2,3,4,5,6,4,5,6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);

let length = 0;
for (const element of uniqueElements) {
    console.log(element);
    length++;
};
console.log("total length is ", length);