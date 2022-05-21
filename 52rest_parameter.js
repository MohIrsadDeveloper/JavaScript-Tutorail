/***** rest parameter ****/

/* function myFunc(a,b,c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log(`d is ${d}`);
}
myFunc(2,4,4,6,0,7,9) */
// above is not good practice

// new practice
function myNewFunc(a,b,...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myNewFunc(1,3,5,6,7,9)

const addAll = (...numbers) => {
    // console.log(numbers);
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(total);
}
addAll(1,2,2);
addAll(1,2,2,3,6,5,4,7,8);