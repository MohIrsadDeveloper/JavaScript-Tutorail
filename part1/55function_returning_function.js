/******** function returning function ********/
// In this function we return another function and call that function.

function myFunc() {
    // return "a";
    // return [1,3];
    // return {name : 'abdul'};
    function hello() {
        console.log("hello");
    }
    return hello;
}

let ans = myFunc();
ans();