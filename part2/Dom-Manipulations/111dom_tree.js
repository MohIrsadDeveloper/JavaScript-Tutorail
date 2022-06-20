const rootNode = document.getRootNode();
console.log(rootNode);
console.log(rootNode.childNodes);

const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode);
console.log(htmlElementNode.childNodes); //NodeList(3) [head, text, body]
const headElementNode = htmlElementNode.childNodes[0];
const textElementNode = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(headElementNode, textElementNode, bodyElementNode);

// parenet relation
console.log(headElementNode.parentNode);

// sibling relation
console.log(headElementNode.nextSibling);
console.log(headElementNode.nextSibling.textContent);
const h1 = document.querySelector("h1");
const body = h1.parentNode.parentNode
body.style.color = "#efefef";
body.style.backgroundColor = "#333";
const head = document.querySelector("head");
// console.log(head);
const title = head.querySelector("title");
console.log(title.childNodes);
const container = document.querySelector(".container");
console.log(container.children);