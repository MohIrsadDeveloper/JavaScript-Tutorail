/****** fill method *****/
// fill is used to fill or repeat any number or string on given time
// fill method effect original array
//  fill method take 3 things (element(which we want), startIndex, endIndex)
// value, start, end

const myArray = new Array(10).fill(0);
console.log(myArray);


const array = [1,2,3,4,5,6,7,8];
array.fill(0, 2, 5);
console.log(array);