/***** laxical Scope ******/
//  A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.

const myVar = "value1";
function myApp() {
    function myfunc() {
        // let myVar = "value59";
        console.log("inside myfunc", myVar);
     }
    const myfunc2 = function(){}
    const myfunc3 = () => {}
    console.log(myVar);                                                                                                                                                                                                                                                        
    myfunc();
}

myApp();