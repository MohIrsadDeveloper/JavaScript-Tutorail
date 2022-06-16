function CreateUser(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old.`
};
CreateUser.prototype.is18 = function () {
    return this.age >= 18;
};
CreateUser.prototype.isListen = function () {
    return 'english speech'
};


const user1 = new CreateUser("abdul", "idrisi", 'abdul@gmail.com', 15, 'malad');
console.log(user1);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.isListen());

for(let key in user1) {
    // console.log(key);
    if (user1.hasOwnProperty(key)) {
        console.log(key);
    }
}