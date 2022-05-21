/******* default parameter ********/

// old practice
function add(a,b) {
    if (typeof b === "undefined") {
        b = 0;
    }
    return a+b;
}
console.log(add(5,5));
console.log(add(5));

// new practice
function addNew(a,b=0) {
    return a+b;
}
console.log(addNew(6,5));
console.log(addNew(6));