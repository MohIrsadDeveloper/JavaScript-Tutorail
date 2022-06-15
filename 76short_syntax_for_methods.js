// const user1 =  {
//     firstName : "abdul",
//     age : 15,
//     about : function () {
//         console.log(this.firstName, this.age);
//     }
// };
// user1.about();


// sorthand method
const user1 =  {
    firstName : "abdul",
    age : 15,
    about() {
        console.log(this.firstName, this.age);
    }
};
user1.about();

