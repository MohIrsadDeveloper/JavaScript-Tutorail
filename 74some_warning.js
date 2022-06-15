
const user1 = {
    firstName : "abdul",
    age : 15,
    about : function () {
        console.log(this.firstName, this.age);
    }
}


// don't do this mistake

user1.about();
const myFunc = user1.about; // give us undefined undefined
// const myFunc = user1.about.bind(user1);
myFunc();