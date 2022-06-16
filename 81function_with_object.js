function hello() {
    console.log("hello world");
};

// javascript function ===> function + object

console.log(hello.name);

// you can add your own properties
hello.myOwnProperty = 'very unique value';
console.log(hello.myOwnProperty);

// name property ---> tells function name

// function provides more useful properties. 

console.log(hello.prototype); // {}

// only functions provide prototype property

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.listen = function () {
    return 'speech'
};
console.log(hello.prototype);
console.log(hello.prototype.listen());