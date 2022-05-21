/****** spread operator ******/

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

// const newArray = [...array1, ...array2, 89,90,91];
// const newArray = [..."abc"];
const newArray = [..."1234567"];
console.log(newArray);


/****** spread operator in object ******/
const obj1 = {
    key1: "value1",
    key2: "value2",
};
const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4",
}
// const newObj = { ...obj1, ...obj2};
// const newObj = { ...obj2, ...obj1};
const newObj = { ...obj2, ...obj1, key5: "value5" };
console.log(newObj);

// const newObject = {..."abcd"};
const newObject = { ...["item1", "item2"] }
console.log(newObject);