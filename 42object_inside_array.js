/****** Object inside array *****/
// very useful in real world application

const users = [
    { userId: 1, firstName: "Abdul", age: 15 },
    { userId: 2, firstName: "Asma", age: 18 },
    { userId: 3, firstName: "Ayesha", age: 19 },
];

for (let user of users) {
    console.log(user);
    console.log(user.userId);
    console.log(user.firstName);
    console.log(user.age);
}
