/******* splice method ******/
// start, delete, insert

const myArray = ['item1', 'item2', 'item3'];

// delete
const deletedItem = myArray.splice(1,2);
console.log("deleted Item ", deletedItem);

// insert
const insertItem = myArray.splice(1,0,"inserted Item");
console.log(insertItem);

// insert and delete
const deleteItem = myArray.splice(1,2,"insertItem", "insertItem2")


console.log(myArray);