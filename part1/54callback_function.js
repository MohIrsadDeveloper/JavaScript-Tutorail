/****** callback function *******/


function myFunc2(name) {
    console.log("Inside myFunc2 ");
    console.log("your name is " + name);
}

function myFunc(callback) {
    // fetch data from server
    fetch(url, () => {
        
    }).then((data) => {
        console.log(data);
    })
    console.log("hello there I am a func and I can...");
    // put data to callback
    callback(data)
    // callback("abdul");
}
// myFunc([1,2,3]);
// myFunc("abc");
// myFunc({name: "abdul"});
myFunc(myFunc2)