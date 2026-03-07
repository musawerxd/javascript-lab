// ================= 4 Pillars of OOP in JavaScript =================
//
// OOP is built on four fundamental principles:
//
// 1. Encapsulation
// 2. Abstraction
// 3. Inheritance
// 4. Polymorphism
//
// These pillars help organize complex systems into manageable,
// reusable, and scalable structures.









// ======================================================
// 1. Encapsulation
// ======================================================

// Encapsulation means restricting direct access to internal data
// and exposing only controlled interfaces.

// WHY:
// Prevents external code from directly modifying internal state.

// HOW:
// Use private fields (#), getters, and setters.

class BankAccount {

    #balance = 0; // private field

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();

account.deposit(1000);
account.withdraw(300);

console.log(account.getBalance());

// Important Behavior:
//
// account.#balance, Not accessible outside the class
// Only methods inside the class can access it.












// ======================================================
// 2. Abstraction
// ======================================================

// Abstraction hides complex implementation details
// and only exposes necessary functionality.
//
// WHY:
// Users of a class should not worry about internal complexity.
//
// Example:
// A car driver only uses "drive()" without knowing how
// engine combustion works.

class Car {

    engineStarted = false;

    #fuelInjection() {
        console.log("Fuel injected");
    }

    startEngine() {
        this.#fuelInjection();
        this.engineStarted = true;
        console.log("Engine started");
    }

    drive() {
        if (!this.engineStarted) {
            this.startEngine();
        }

        console.log("Car is moving");
    }
}

const car = new Car;
car.drive();

// Internal logic is hidden from the user.









// ======================================================
// 3. Inheritance
// ======================================================

// Inheritance allows one class to reuse properties
// and methods from another class.
//
// WHY:
// Reduces code duplication and creates hierarchy.
//
// HOW:
// Using "extends".

class Animal {

    speak() {
        console.log("Animal makes a sound");
    }

}

class Dog extends Animal {

    bark() {
        console.log("Dog barks");
    }

}

const dog = new Dog();

dog.speak();
dog.bark();

// Execution:
//
// Dog inherits methods from Animal.









// ======================================================
// 4. Polymorphism
// ======================================================

// Polymorphism means "same method name, different behavior".
//
// A child class can override parent class methods.

class Shape {

    draw() {
        console.log("Drawing shape");
    }

}

class Circle extends Shape {

    draw() {
        console.log("Drawing circle");
    }

}

class Rectangle extends Shape {

    draw() {
        console.log("Drawing rectangle");
    }

}

const shape1 = new Circle();
const shape2 = new Rectangle();

shape1.draw();
shape2.draw();

// Output:
//
// Drawing circle
// Drawing rectangle
//
// Same method name → different behavior depending on object type.








// ======================================================
// Internal JavaScript Behavior
// ======================================================
//
// JavaScript achieves OOP using:
//
// - Prototypes
// - Prototype chains
// - Constructor functions
// - ES6 Classes (syntax sugar)
//
// Classes internally map to prototype-based inheritance.








// ======================================================
// Summary
// ======================================================
//
// Encapsulation → Protect internal data
// Abstraction   → Hide complexity
// Inheritance   → Reuse parent class functionality
// Polymorphism  → Same method, different behavior
