// change text 
// textContent and innerText

// textContent => return all text visible and non visible
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent);
// mainHeading.textContent = 'This is something else';
console.log(mainHeading.textContent);

// innerText => only return visible text;
console.log(mainHeading.innerText);