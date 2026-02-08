



// JS If else if Notes 08/02/2026





// 1. Comparison Operators  (Most Basic Part)
console.log(`\n 1. Comparison Operators  (Most Basic Part)`)

// >  greater than
// <  less than
// >= greater than or equal
// <= less than or equal
// == loose equality (type conversion allowed)
// === strict equality (no type conversion)
// != not equal (loose)
// !== not equal (strict)

let a = 10;
let b = 20;

console.log(a > b);   // false
console.log(a < b);   // true
console.log(a >= 10); // true
console.log(b <= 15); // false







// 2. if statement
console.log(`\n 2. if statement`)
let age = 18;

if (age >= 18) {
    console.log("You can drive");
}

// Condition must be truthy to enter block




// 3. if – else
console.log(`\n 3. if - else`)

let marks = 40;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}






// 4. if – else if – else
console.log(`\n 4. if - else if - else`)

let score = 75;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 70) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}





// 5. Truthy & Falsy (very important)
console.log(`\n 5. Truthy & Falsy (very important)`)

// Falsy values:
// false, 0, "", null, undefined, NaN

if ("") {
    console.log("will not run");
}

if ("hello") {
    console.log("will run because string is truthy");
}





// 6. Logical Operators
console.log(`\n 6. Logical Operators`)

// AND (&&)
if (age > 18 && marks > 50) {
    console.log("Eligible");
}

// OR (||)
if (age > 18 || marks > 50) {
    console.log("Partially Eligible");
}

// NOT (!)
let isLogged = false;
if (!isLogged) {
    console.log("Please login");
}








