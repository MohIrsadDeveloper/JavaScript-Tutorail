// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll

const navItems = document.getElementsByClassName("nav-item");
console.log(navItems);
console.log(Array.isArray(navItems));


const navItems1= document.querySelectorAll('.nav-item');
console.log(navItems1[1]);