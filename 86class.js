// 2015/ es6
// class keyword
// class are fake

class CreateUser {
    constructor(firstName, lastName, email, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about() {
        return `${this.firstName} is ${this.age} years old.`
    };
    is18(){
        return this.age >= 18; 
    };
    isListen(){
        return 'english speech'
    }
}


const user1 = new CreateUser("abdul", "idrisi", 'abdul@gmail.com', 15, 'malad');
console.log(user1);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.isListen());