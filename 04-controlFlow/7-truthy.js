


// JS Truthy values in Conditions notes 02/09/2026






// Truthy = any value that becomes true in boolean context
// except the specific falsy values


// 1. Basic Idea
console.log(`\n 1. Basic Idea`)

if ("hello") {
    console.log("This runs because string is truthy");
}

if (123) {
    console.log("Numbers other than 0 are truthy");
}







// 2. Common Truthy Values
console.log(`\n 2. Common Truthy Values`)


// - non-empty string      "abc"
// - any number except 0   1, -1, 3.14
// - arrays                []
// - objects               {}
// - functions             function(){}
// - true
// - "0"  (string zero)
// - "false" (string false)
// - function(){} 







// 3. Examples
console.log(`\n 3. Examples`)


console.log("Boolean(\"Musawer\") : ", Boolean("Musawer"));  // true
console.log("Boolean(10) : ", Boolean(10));         // true
console.log("Boolean([]) : ", Boolean([]));         // true
console.log("Boolean({}) : ", Boolean({}));         // true
console.log("Boolean(function () { }) : ", Boolean(function () { })); // true







// 4. Important Tricky Cases
console.log(`\n 4. Important Tricky Cases`)

if ([]) {
    console.log("empty array is truthy");
}

if ({}) {
    console.log("empty object is truthy");
}

if ("0") {
    console.log("string zero is truthy");
}






// 5. Real Usage
console.log(`\n 5. Real Usage`)

let username = "";

let nameToShow = username || "Guest";
// if username is empty -> Guest is used


// 6. Rule to Remember

// Everything is truthy
// EXCEPT the official falsy list