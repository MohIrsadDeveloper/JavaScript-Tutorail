// This keyword and window object

"use strict"
console.log(window); // give us entire window
function windowFunction() {
    console.log(this); // give us window but not good, so we put "use strict" at the top;
};
windowFunction();