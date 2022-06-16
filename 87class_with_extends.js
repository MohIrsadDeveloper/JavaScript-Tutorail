class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating.`
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal {

}

// Animal class
const animal1 = new Animal("tommy", 2);
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isSuperCute());
console.log(animal1.isCute());

// Dog class
const dog1 = new Dog("dog1", 3);
console.log(dog1);
console.log(dog1.eat());