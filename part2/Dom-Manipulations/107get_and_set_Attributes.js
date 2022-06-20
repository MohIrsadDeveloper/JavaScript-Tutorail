// get and set attributes

const link = document.querySelector('a');
console.log(link.getAttribute("href").slice(1));

link.setAttribute("href", "http://www.ahlesunnat.net");

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));