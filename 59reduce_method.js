/******* reduce method *****/
// reduce method take 3 parameter (first : accumulator, second: current Value, third : )


// aim : sum of all the numbers in array;
const numbers = [1, 2, 3, 4, 5, 10];

let sum = numbers.reduce((accumulator, currentValue) => {
    // console.log(accumulator, currentValue);
    return accumulator + currentValue;
}, 100);
console.log(sum);

//  accumulator   ,  current value ,   return 
/*      1                 2              3
        3                 3              6
        6                 4             10
        10                5             15
       15                10             25
*/

const userCart = [
    {productId : 1, productName : "mobile", price : 12000},
    {productId : 2, productName : "laptop", price : 72000},
    {productId : 3, productName : "shoes", price : 1200},
];

const totalCartPrice = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price
}, 0)  // 0 is initial value
console.log(totalCartPrice);