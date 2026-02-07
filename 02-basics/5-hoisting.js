


// JS hoisting Notes 07/02/2026

// JavaScript registers function declarations in memory during the creation phase before execution. This behavior is called hoisting.

// 1. Function Hoisting
console.log(`\n 1. Function Hoisting`)
sayHi();

function sayHi() {
    console.log("It works before the line 😎");
}
// It works because JavaScript hoists function declarations, meaning they are registered in memory before the code executes.






// 2. var Hoisting
console.log(`\n 2. var Hoisting`)

console.log(a);   // undefined 
var a = 10;

//becasue JS Reads it as:
// var a;
// console.log(a);
// a = 10;






// 3. let & const
console.log(`\n 3. let & const`)
// console.log(b); // ERROR 
let b = 20;
// let/const are hoisted BUT locked in Temporal Dead Zone.





// 4. Function Expression Trap
console.log(`\n 4. Function Expression Trap`)
// hello(); // ERROR

const hello = function () {
    // console.log("not hoisted"); //error 
};






// Hoisting isn’t “moving code.”
// JS creates a memory phase first:

// Reserve space

// Then execute line by line

// That’s why behavior looks weird.