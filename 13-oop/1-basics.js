
// ================= JavaScript: OOP Basics =================

// Object-Oriented Programming (OOP) in JS lets you model real-world objects
// using properties (data) and methods (behavior).

// Why Matter:
// - Modular code
// - Reusable objects
// - Encapsulated behavior
// - Easier to maintain than procedural code




// ======================================================
// 1. Object Literals
// ======================================================

// Simple way to create objects
// const user = {
//     username: "musawer",
//     age: 25,
//     greet: function () {
//         console.log(`Hi, I am ${this.username}`)
//     }
// }
// console.log(user);
// user.greet(); // hi, I am musawer

// Notes:
// - 'this' refers to the object calling the method
// - Objects can hold properties and functions









// ======================================================
// 2. Constructor Functions
// ======================================================

function Person(name, age) { // parameterized 
    this.name = name;
    this.age = age;
    this.sayHi = function () {
        console.log(`Hi, i am ${this.name}`);
    }
}

const personOne = new Person("Musawer", 22);
console.log(personOne);
personOne.sayHi() //Hi, I am musawer

// Notes:
// - 'new' creates an instance
// - 'this' inside constructor refers to the instance
// - Each instance has its own copy of methods








// ======================================================
// 3. Prototypes (Basic)
// ======================================================

Person.prototype.introduce = function () {
    console.log(`My name is ${this.name} and i am ${this.age} years old`);
}

personOne.introduce()
// Notes:
// - Methods on prototype are shared by all instances
// - Memory-efficient for large number of objects







// ======================================================
// 4. Classes (ES6 Syntax)
// ======================================================

class Animal {
    constructor(type, sound) {
        this.type = type;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.type} says ${this.sound}`);
    }
}

const dog = new Animal("dog", "woof");
dog.makeSound()  // dog says woof 

// Notes:
// - Class is syntactic sugar over constructor + prototype
// - Methods defined in class automatically go to prototype
// - Constructor function initializes the object








// ======================================================
// 5. Instances
// ======================================================

const cat = new Animal("cat", "meow");
cat.makeSound();

// Notes:
// - Each instance has its own properties
// - Prototype methods are shared
// - Instances are objects created from constructor/class








// ======================================================
// 6. 'this' Keyword
// ======================================================

class Car {
    constructor(model) {
        this.model = model;
    }
    showModel() {
        console.log(this.model);
    }
}
const toyota = new Car(2025);
toyota.showModel();


// Notes:
// - 'this' refers to the object that calls the method
// - Inside constructor, 'this' refers to the instance being created







// ======================================================
// 7. Summary
// ======================================================
//
// - Object literals → quick, simple objects
// - Constructor functions → blueprint for multiple objects
// - Prototype → shared methods for instances
// - Classes → modern syntax for constructors + prototype
// - Instances → actual objects from constructor/class
// - 'this' → context reference for object behavior