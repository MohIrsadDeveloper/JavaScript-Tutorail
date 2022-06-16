/******* find method *******/

const myArray = ["Hello", "cat", "dog", "lion"];

function isLength(string) {
    return string.length === 4;
}

console.log(isLength(myArray));

const ans = myArray.find((string) => {
    return string.length === 3
})
console.log(ans);


const users = [
    {userId : 1, userName : "Abdul"},
    {userId : 2, userName : "Asma"},
    {userId : 3, userName : "Ayesha"},
    {userId : 4, userName : "Kulsum"},
    {userId : 5, userName : "Afzal"},
];

const ans2 = users.find((user) =>
    user.userId === 4
)
console.log(ans2);