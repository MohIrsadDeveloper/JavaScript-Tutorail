// synchronous programming vs asynchronous programming

// synchronous programming
// synchronous programming single thread

// console.log("script start");

// for(let i =1; i<1000; i++) {
//     console.log("inside for loop");
// }

// console.log("script end");

console.log("script start");

setTimeout(() => {
    console.log("inside setTimeOut");
}, 1000);

console.log("script end");