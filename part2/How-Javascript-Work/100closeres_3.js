function Power(power) {
    return function (number) {
        return number**power;
    }
}
const PowerNumber = Power(2);
const NumberDigit = PowerNumber(10);
console.log(NumberDigit);