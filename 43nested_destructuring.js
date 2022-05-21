/****** nested destructuring ******/

const users = [
    { userId: 1, firstName: "Abdul", age: 15 },
    { userId: 2, firstName: "Asma", age: 18 },
    { userId: 3, firstName: "Ayesha", age: 19 },
];

// const [user1, user2, user3] = users;
const [{firstName}, , {age}] = users;
console.log(firstName);
console.log(age);