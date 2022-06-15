const createMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years old.`
    },
    is18: function () {
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    user.about = createMethods.about;
    user.is18 = createMethods.is18;
    
    return user;

}

const user1 = createUser("abdul", "idrisi", 'abdul@gmail.com', 15, 'malad');
console.log(user1);
console.log(user1.about());
console.log(user1.is18());