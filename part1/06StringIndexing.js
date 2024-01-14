// String Indexing

let firstName = "Abdul";
// A  b  d  u  l
// 0  1  2  3  4

// Know the character using in index value
console.log(firstName[0]);
console.log(firstName[1]);
console.log(firstName[2]);
console.log(firstName[3]);
console.log(firstName[4]);

// know the length of string (firstName.length)
// Length must always 1 more than last index
// Above case length is 5 and last index is 4;
console.log(firstName.length);

// Know the last index (length -1)
console.log(firstName.length -1);

// know the last character without index number
console.log(firstName[firstName.length -1]);

/**********/
/* 
A
b
d
u
l
5
4
l
*/


// CharAt(); /* Index as a parameter*/
console.log(firstName.charAt())
console.log(firstName.charAt(2))