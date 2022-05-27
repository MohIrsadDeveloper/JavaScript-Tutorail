/******** every method *******/

// const number = [2,4,6,8,11];
const number = [2,4,6,8,10];

let ans = number.every((num) => {
    return num%2===0;
});
console.log(ans);

const userCart = [
    {productId : 1, productName : "mobile", price : 12000},
    {productId : 2, productName : "laptop", price : 80000},
    {productId : 3, productName : "fashion", price : 1200},
];

const ans2 = userCart.every((item) => {
    return item.price > 1000;
})
console.log(ans2);