// getter and setters

// getter (get) => Is use to call method without invoke (without round bracess)
// setter (set) => Is use to call method without invoke (without round bracess) with parameter and modify method.



class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    };

    // fullName(){
    //     return `${this.firstName} ${this.lastName}`
    // }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

const Person1 = new Person("abdul", "idrsi", 15);
console.log(Person1);
// console.log(Person1.fullName()); // without setter
console.log(Person1.fullName); // with getter

// setter
const Person2 = new Person("asma", "idrisi", 18);
console.log(Person2);
Person2.fullName = 'Ayesha Idrisi'
console.log(Person2);
console.log(Person2.fullName); // with setter