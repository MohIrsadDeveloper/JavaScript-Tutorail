/****** some method ******/

const array = [1, 3, 5, 6];
const ans1 = array.some((num) => num % 2 === 0);
console.log(ans1);


const cartItem = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "laptop", price: 80000 },
    { productId: 3, productName: "fashion", price: 1000 }
];

const ans2 = cartItem.some((item) => item.price > 50000)
console.log(ans2);