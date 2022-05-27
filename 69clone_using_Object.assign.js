/****** clone using Object.assign ******/

// memory 

const obj = {
    key1 : "value1",
    key2 : "value2"
};

console.log(obj);
// obove assign obj2 will effect on change of obj

// const obj2 = {'key69': "value69", ...obj}
// using Object.assign() method
const obj2 = Object.assign({"key69" : "value69"}, obj);
console.log(obj2);

obj.key3 = "value3";
console.log(obj);
console.log(obj2);