/***** functions inside function *****/

function outerFunction() {
    let firstInnerFunction = () => {
        console.log("First Inner Function");
    };
    let secondInnerFunction = function () {
        console.log("Second Inner Function");
    }
    function thirdInnerFunction() {
        console.log("Third Inner Function");
    }
    console.log("Outer Function");
    
    // Inner function must call inside Outer function
    firstInnerFunction();
    secondInnerFunction();
    thirdInnerFunction();
}

outerFunction();