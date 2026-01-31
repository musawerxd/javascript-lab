



// JS Maths  Notes 1/31/2026

// Math is a built-in object that has properties and methods for mathematical constants and functions.
// Math is not a function object.

// Math has the following properties:

// These are predefined constants in the Math object that can be used in mathematical calculations.
console.log("Math.E : ", Math.E);        // Euler's number

console.log("Math.PI : ", Math.PI);       // Pi

console.log("Math.SQRT2 : ", Math.SQRT2);    // Square root of 2

console.log("Math.SQRT1_2 : ", Math.SQRT1_2);  // Square root of 1/2

console.log("Math.LN2 : ", Math.LN2);      // Natural logarithm of 2

console.log("Math.LN10 : ", Math.LN10);     // Natural logarithm of 10

console.log("Math.LOG2E : ", Math.LOG2E);    // Base 2 logarithm of E

console.log("Math.LOG10E : ", Math.LOG10E);   // Base 10 logarithm of E



// Math has the following methods:
// These methods perform various mathematical operations.

console.log("\nMath.abs(-4) : ", Math.abs(-4));        // Absolute value, it converts -ve values to +ve values
console.log("Math.abs(4) : ", Math.abs(4));        // Absolute value, it converts -ve values to +ve values

console.log("Math.round(4.6) : ", Math.round(4.6));      // Rounds to the nearest integer
console.log("Math.round(4.4) : ", Math.round(4.4));      // Rounds to the nearest integer
// Round is mostly used in genral 

console.log("Math.ceil(4.1) : ", Math.ceil(4.1));       // Rounds up to the next largest integer
console.log("Math.ceil(4.9) : ", Math.ceil(4.9));       // Rounds up to the next largest integer
// remember ceil always rounds up

console.log("Math.floor(4.9) : ", Math.floor(4.9));      // Rounds down to the next smallest integer
console.log("Math.floor(4.1) : ", Math.floor(4.1));      // Rounds down to the next smallest integer
// remember floor always rounds down    

console.log("Math.max(1, 3, 2, 5, 4) : ", Math.max(1, 3, 2, 5, 4));   // Returns the largest of zero or more numbers
console.log("Math.min(1, 3, 2, 5, 4) : ", Math.min(1, 3, 2, 5, 4));   // Returns the smallest of zero or more numbers

console.log("\nMath.pow(2, 3) : ", Math.pow(2, 3));        // Returns the base to the exponent power, that is, base^exponent
console.log("Math.sqrt(16) : ", Math.sqrt(16));       // Returns the square root of a number


// most used Math methods is Math.random()
console.log("\nMath.random() : ", Math.random());      // Returns a random number between 0 (inclusive) and 1 (exclusive), inclusive meaning it can return 0 but will never return 1

console.log("Math.`random() * 10 : ", Math.random() * 10);  // Returns a random number between 0 and 10 (exclusive)

//to make 10 inclusive
console.log("Math,random() * 10 : ", (Math.random() * 10) + 1);  // Returns a random number between 1 and 10 (inclusive)

//to get random integer between 1 and 10 inclusive
console.log("Math.floor(Math.random() * 10) + 1 : ", Math.floor(Math.random() * 10) + 1); // Returns a random integer between 1 and 10 (inclusive)

//to get random integer between min and max inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
console.log("getRandomIntInclusive(5, 15) : ", getRandomIntInclusive(5, 15)); // Returns a random integer between 5 and 15 (inclusive)

// so these are some of the most used Math methods in JavaScript.