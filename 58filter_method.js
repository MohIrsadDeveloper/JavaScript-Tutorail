/******* filter method *****/
// filter method always return true or false means boolean;

const numbers = [1,3,2,6,4,8];

const isEven = (number) => {
    return number%2 === 0;
}
const evenNumber = numbers.filter(isEven);
console.log(evenNumber);