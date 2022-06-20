// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll
// array like object ==> indexing, length property;

let navItems = document.getElementsByTagName('a');
console.log(navItems);

// we can't use forEach method to iterate through HTMLCollection
// simple for loop
// for of loop
// forEach

// for(let i = 0; i< navItems.length; i++) {
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));

// navItems.forEach((navItem) => {
//     // console.log(navItem);
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })

console.log(Array.isArray(navItems));
const navItems2 = document.querySelectorAll(".nav-item");
console.log(navItems2[1]);

let navItems3 = document.querySelectorAll("a");
navItems = Array.from(navItems3);
console.log(navItems);
// simple for loop
// for of loop
// forEach 

// for(let i=0; i<navItems3.length; i++) {
//     // console.log(navItems3[i]);
//     const navItem = navItems3[i];
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }


// for(let navItem of navItems3) {
//     // console.log(navItem);
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// };

navItems3.forEach((navItem)=> {
    // console.log(navItem);
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
})

console.log(navItems);