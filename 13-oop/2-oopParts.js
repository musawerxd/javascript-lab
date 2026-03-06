// ================= OOP Parts in JavaScript =================
//
// OOP is built on several core components that allow programs to be structured
// around objects instead of simple procedural logic.
//
// The main parts of OOP in JavaScript:
//
// 1. Object
// 2. Class / Blueprint
// 3. Properties
// 4. Methods
// 5. Constructor
// 6. Instance
//
// These parts work together to create reusable and structured code.






// ======================================================
// 1. Object
// ======================================================


// An object is a collection of properties and methods.

// Objects represent real-world entities.

const user = {
    name: "Musawer",
    age: 22,
    greet() {
        console.log(`Hello ${this.name}`);
    }
};

user.greet();

// Notes:
// - Objects store data (properties)
// - Objects also store behavior (methods)







// ======================================================
// 2. Class (Blueprint)
// ======================================================


// A class is a blueprint used to create objects.

// Instead of manually creating multiple objects,
// we create a template.

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    showInfo() {
        console.log(`${this.model} - ${this.year}`);
    }
}

const car1 = new Car("Tesla", 2023);
car1.showInfo();

// Notes:
// - Classes define structure
// - Objects are created from classes








// ======================================================
// 3. Properties
// ======================================================

// Properties are variables inside an object.

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
}

const student1 = new Student("Ali", 90);

console.log(student1.name);
console.log(student1.marks);

// Notes:
// - Properties store object state/data
// - Accessed using dot notation







// ======================================================
// 4. Methods
// ======================================================

// Methods are functions inside objects or classes.

class Calculator {
    add(a, b) {
        return a + b;
    }
}

const calc = new Calculator();

console.log(calc.add(5, 3));

// Notes:
// - Methods define object behavior
// - They operate on object properties







// ======================================================
// 5. Constructor
// ======================================================

// A constructor initializes object properties when the object is created. (that runs imediately whrn obj is created)

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

const u1 = new User("Musawer", "musawer@email.com");

console.log(u1.name);

// Notes:
// - Automatically runs when new object is created
// - Used for initialization










// ======================================================
// 6. Instance
// ======================================================

// An instance is an object created from a class.

class Animal {
    constructor(type) {
        this.type = type;
    }
}

const dog = new Animal("Dog");
const cat = new Animal("Cat");

console.log(dog.type);
console.log(cat.type);

// Notes:
// - Each instance has its own data
// - But shares class structure







// ======================================================
// Summary
// ======================================================
//
// Object        → Real entity with data + behavior
// Class         → Blueprint for objects
// Properties    → Object data
// Methods       → Object behavior
// Constructor   → Initializes objects
// Instance      → Object created from class
