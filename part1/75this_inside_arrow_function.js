// arrow functions

const user1 = {
    firstName : "abdul",
    age : 15,
    about : () => {
        console.log(this);
        console.log(this.firstName, this.age);
    }
}

user1.about();