function func() {
    let counter = 0;
    return function () {
        if (counter < 1) {
            console.log("Hi You Called Me.");
            counter++;
        } else {
            console.log("I already Called.");
        }
    }
};

const myFunc = func();
myFunc()
myFunc()