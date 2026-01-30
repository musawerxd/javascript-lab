

// JS DataType Notes 1/30/2026

// Primitive Data Types
let num = 42; // Number
console.log("Type of ", num, "is : ", typeof num, "it is primitive"); // "number"

let floatNum = 3.14; // Floating-point Number, also of type Number
console.log("Type of ", floatNum, "is : ", typeof floatNum, "it is primitive"); // "number"

let str = "Hello, World!"; // String
console.log("Type of ", str, "is : ", typeof str, "it is primitive"); // "string"  

let bool = true; // Boolean
console.log("Type of ", bool, "is : ", typeof bool, "it is primitive"); // "boolean"

let n = null; // Null
console.log("Type of ", n, "is : ", typeof n, "it is primitive"); // "object" (this is a known quirk in JavaScript)

let undef; // Undefined
console.log("Type of ", undef, "is : ", typeof undef, "it is primitive"); // "undefined"

let sym = Symbol("unique"); // Symbol
let anotherId = Symbol("id");
console.log("sym === anotherId : ", sym === anotherId); // false // Each Symbol is unique, despite having the same description
console.log("Type of ", sym, "is : ", typeof sym, "it is primitive"); // "symbol"

let bigInt = 9007199254741991n; // BigInt, note the 'n' at the end is required for BigInt literals
console.log("Type of ", bigInt, "is : ", typeof bigInt, "it is primitive"); // "bigint"





// Reference Data Types (non-primitive)
let arr = [1, 2, 3]; // Array
console.log("\nType of ", arr, "is : ", typeof arr, "it is non-primitive"); // "object"

let obj = { name: "Alice", age: 30 }; // Object
console.log("Type of ", obj, "is : ", typeof obj, "it is non-primitive"); // "object"

let func = function () { return "I am a function"; }; // Function,  can be stored in a variable
console.log("Type of ", func, "is : ", typeof func, "it is non-primitive"); // "function"









// Note: JavaScript (JS) is a dynamically typed language. This means that the type of a variable is determined at runtime based on the value it holds, rather than being explicitly declared during compilation. This allows for greater flexibility in coding, as variables can hold values of different types at different times during execution.

// Example of dynamic typing
let dynamicVar = 10; // Initially a number
console.log("\nType of dynamicVar is : ", typeof dynamicVar, " dynamic example"); // Output: "number"

dynamicVar = "Now I'm a string"; // Now a string
console.log(" Type of dynamicVar is : ", typeof dynamicVar, " dynamic example"); // Output: "string"

dynamicVar = true; // Now a boolean
console.log("Type of dynamicVar is : ", typeof dynamicVar, " dynamic example"); // Output: "boolean"