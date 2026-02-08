



// JS Logical Operator notes 02/08/2026

// Logical operators combine multiple conditions
// Result is true or false (sometimes actual value)


// 1. AND  (&&)
console.log(`\n 1. AND  (&&)`)
// All conditions must be true

console.log(true && true);   // true
console.log(true && false);  // false

let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("Allowed to enter");
}


// 2. OR  (||)
console.log(`\n 2. OR  (||)`)

// At least one condition must be true

console.log(true || false);  // true
console.log(false || false); // false

let isAdmin = false;
let isOwner = true;

if (isAdmin || isOwner) {
    console.log("Access granted");
}


// 3. NOT  (!)
console.log(`\n 3. NOT  (!)`)

// Reverses boolean value

let logged = false;

if (!logged) {
    console.log("Please login");
}


// 4. Real Examples
console.log(`\n  4. Real Examples`)

let username = "";
let displayName = username || "Anonymous";
console.log(displayName);  // Anonymous

let isPaid = true;
let isVerified = true;

isPaid && isVerified && console.log("Premium Access");



// 5. Important Rules
console.log(`\n 5. Important Rules`)

// - && needs all true
// - || needs one true
// - ! flips boolean
// - used heavily in real projects
