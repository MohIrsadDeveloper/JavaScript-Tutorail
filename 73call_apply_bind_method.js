// call apply and bind methods

function personInfo() {
    console.log(`${this.firstName} and age is ${this.age}, ${this.hobby} , ${this.favSpeech}`);
}

const user1 = {
    firstName: 'abdul',
    age: 15,
    // personInfo: function(hobby, favSpeech) {
    //     console.log(`${this.firstName} and age is ${this.age}, ${hobby} , ${favSpeech}`);
    // }
};

const user2 = {
    firstName: 'asma',
    age: 18
};

// console.log(user1);
// console.log(user2);
// user1.personInfo("game", "islamic speech");
// user1.personInfo.call(user1, "game1", "speech1");
// user1.personInfo.call(user2, "game2", "speech2");

// using call  methodn
personInfo.call(user1, "game1", "speech1");
personInfo.call(user2, "game2", "speech3");

// using apply method
