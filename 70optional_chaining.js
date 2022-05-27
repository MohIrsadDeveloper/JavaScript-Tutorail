/******* optional chaining ******/
//  use ? (question mark) for getting undefined value

const user = {
    firstName : "abdul",
    // address : {houseNumber : '1234'}
}
console.log(user.firstName);
console.log(user.address);
console.log(user?.address?.houseNumber);