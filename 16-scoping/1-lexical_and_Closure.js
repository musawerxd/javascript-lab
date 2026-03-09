// ======================================================
// LEXICAL SCOPING AND CLOSURES IN JAVASCRIPT
// ======================================================

// These two concepts are fundamental to understanding
// how JavaScript handles variables and functions.










// ======================================================
// 1. Scope
// ======================================================

// Scope determines where variables are accessible.
//
// Types of scope:
//
// • Global scope
// • Function scope
// • Block scope


// let golbalVar = "I am global";

// function test() {
//     let localVar = "I am Local"

//     console.log(golbalVar);  //accessible
// }

// console.log(localVar); // inaccessible --> direct error


// globalVar → accessible everywhere
// localVar → only inside test()







// ======================================================
// 2. Lexical Scoping
// ======================================================


// Lexical means:
// "determined by where code is written".
//
// Lexical scoping means:
//
// A function can access variables from its outer scope
// based on where it was defined in the code.


// function outer() {
//     let outerVariable = " I am outer variable";

//     function inner() {
//         console.log(outerVariable);
//     }

//     inner();
// }

// outer();

// Explanation:
//
// inner() is defined inside outer()
// so it can access variables of outer().
//
// Scope chain:
//
// inner → outer → global

// Example

// let a = 10;

// function first() {
//     let b = 20;

//     function second() {
//         let c = 30;
//         console.log(`${a}  ${b}  ${c}`);
//     }
//     second();
// }

// first()

// Scope chain:
//
// second()
//   ↓
// first()
//   ↓
// global







// ======================================================
// 3. Closure
// ======================================================


// A closure is created when a function remembers
// variables from its lexical scope even after
// the outer function has finished executing.

// In simple terms:
//
// A closure = function + its remembered environment


// function createCounter() {
//     let count = 0;
//     return function () {
//         count++;
//         console.log(count);
//     }
// }

// const counter = createCounter();

// counter()
// counter()
// counter()


// Explanation:
//
// createCounter() runs once.
//
// It creates variable count.
//
// The returned function remembers count.
//
// Even though createCounter() finished,
// count still exists because of closure.





// ======================================================
// 4. Closure Internals
// ======================================================

// When a function is created:
//
// JavaScript stores:
//
// 1. Function code
// 2. Lexical environment reference
//
// Example:

// function outerFunc() {
//     let x = 5;
//     function innerFunc() {
//         console.log(x);
//     }


//     return innerFunc;
// }

// const fn = outerFunc();

// fn();

// Execution:
//
// outerFunc() finishes
//
// but innerFunc remembers x
//
// This preserved environment = Closure







// ======================================================
// 5. Practical Uses of Closures
// ======================================================


// ------------------------------------------------------
// Data Privacy
// ------------------------------------------------------

// function createBank() {

//     let balance = 0;;

//     return {
//         deposit(val) {
//             balance += val;
//         },

//         getBlanace() {
//             return balance;
//         }
//     }
// }


// const newBank = createBank()

// newBank.deposit(1000)
// console.log(newBank.getBlanace()); // 1000
// console.log(newBank.balance); // undefined

// balance cannot be accessed directly
// only through methods



// ------------------------------------------------------
// Function Factories
// ------------------------------------------------------

// function mulitiplier(x) {
//     return function (y) {
//         return x * y
//     }
// }

// const double = mulitiplier(2);
// const triple = mulitiplier(3);

// console.log(double(2))
// console.log(triple(2))





// ------------------------------------------------------
// Memoization
// ------------------------------------------------------

function memoize(fn) {
    const cache = {};

    return function (n) {
        if (cache[n]) {
            return cache[n]
        }
        const result = fn(n);
        cache[n] = result;
        return result;
    }

}









// ======================================================
// 6. Loop Closure Problem
// ======================================================


// for (var i = 0; i < 4; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)
// }

// Output:
//
// 4
// 4
// 4
//
// Because var is function scoped.

// Fix using let

// for (let i = 0; i < 4; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)
// }

// or even old school  (before es6) using IIFE

// for (var i = 0; i < 4; i++) {
//     (function (i) {
//         setTimeout(() => {
//             console.log(i);
//         }, 1000)
//     })(i);
// }








// ======================================================
// 7. Key Notes
// ======================================================
//
// Lexical Scope
// -------------
// Scope determined by where functions are defined.
//
// Closure
// -------
// Function that remembers variables from its lexical scope.
//
// Closure happens when:
//
// • Inner function accesses outer variables
// • Outer function finishes
// • Variables remain preserved
//
//
// Scope chain example:
//
// inner()
//   ↓
// outer()
//   ↓
// global
//
//
// Closures are used for:
//
// • data hiding
// • private variables
// • function factories
// • callbacks
// • event handlers
// • async programming


