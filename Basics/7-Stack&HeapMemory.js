

// Stack and Heap Memory in JS Notes 1/30/2026



// Stack Memory
// Stack Memory(all primitive data types stored here)

let variableA = 10; // number
let variableB = variableA; // copy of value 10

console.log("variableA = ", variableA); // 10
console.log("variableB = ", variableB); // 10

variableB = 20; // change variableB to 20
console.log("variableA = ", variableA); // 10 (remains unchanged)
console.log("variableB = ", variableB); // 20 (changed)
// in stack memory, primitive values are copied by value.




// Heap Memory
// Heap Memory(all non-primitive data types stored here)
let objectA = {
    email: "my@gmail.com",
    password: "mypassword"
}
let objectB = objectA; // pointer/reference to the same object in heap memory because objects are non-primitive data types.

console.log("Before Assignment:");
console.log("objectA : ", objectA);
console.log("objectb : ", objectB);

// just changing properties of objectB, let's see the effect on objectA
objectB.email = "newEmail@gmail.com"; //changing email property via objectB
objectB.password = "newpassword"; //changing password property via objectB

console.log("After Assignment:");

console.log("objectA : ", objectA); // reflects changes made via objectB
console.log("objectB : ", objectB); // reflects changes made via objectB
// in heap memory, non-primitive values are copied by reference. so both objectA and objectB point to the same memory location.




// Summary:
// Primitive data types (number, string, boolean, null, undefined, symbol, bigint) are stored in stack memory and are copied by value.
// Non-primitive data types (objects, arrays, functions) are stored in heap memory and are copied by reference.