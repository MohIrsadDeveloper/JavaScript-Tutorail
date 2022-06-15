
// function (that function create object)
// 2.) add key value pair
// 3.) object ko return karega

// let user = {};
// user.name = 'abdul';
// console.log(user);
 /* with the above code we put the key, value pair in empty object */


function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    user.about = function() {
        return `${this.firstName} is ${this.age} years old.`
    };
    user.is18 = function () {
        return this.age >= 18;
    };
    return user;

}

const user1 = createUser("abdul","idrisi", 'abdul@gmail.com', 15, 'malad');
console.log(user1);
console.log(user1.about());
console.log(user1.is18());