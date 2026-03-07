// =============================
// super Keyword  in JavaScript
// =============================


// ======================================================
// 1. super Keyword
// ======================================================
//
// Definition:
// The "super" keyword is used to access the parent class
// constructor or methods inside a child class.
//
// WHY:
// When a class extends another class, we often want to
// reuse the parent functionality instead of rewriting it.
//
// super allows the child class to:
//
// • call the parent constructor
// • access parent methods



// ------------------------------------------------------
// super() in Constructor
// ------------------------------------------------------
//
// When using inheritance, the child constructor MUST call
// super() before using "this".

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        // calls Animal constructor

        this.breed = breed;
    }
}

const dogOne = new Dog("tommy", "German")

console.log(dogOne);

// Explanation:
//
// Dog extends Animal
//
// super(name)
// runs Animal constructor
//
// Animal constructor sets:
// this.name = name
//
// Then Dog adds:
// this.breed


// Prototype Chain:
//
// dog1
//   ↓
// Dog.prototype
//   ↓
// Animal.prototype
//   ↓
// Object.prototype
//   ↓
// null











// ------------------------------------------------------
// super for Parent Methods
// ------------------------------------------------------


class Vehical {
    start() {
        console.log("Vehical Started!");
    }
}

class Car extends Vehical {
    start() {
        super.start();

        console.log("Car engine is running");
    }
}

const vehicalOne = new Car();

vehicalOne.start()

// Output:
//
// Vehicle started
// Car engine running


// Explanation:
//
// super.start()
// executes the parent method
//
// Then the child method continues execution.


// Notes about super:
//
// • Only used inside classes
// • Used in subclasses
// • Must call super() before using "this"
// • Accesses parent constructor or methods