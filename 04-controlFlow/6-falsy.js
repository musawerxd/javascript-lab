



// JS Falsy values in Conditions  notes 02/09/2026



// Falsy = values that become false in boolean context
// JavaScript has ONLY these falsy values

// 1. Official Falsy List
console.log(`\n 1. Official Falsy List `)

// false
// 0
// -0
// 0n (BigInt zero)
// ""  (empty string)
// null
// undefined
// NaN







// 2. Examples
console.log(`\n 2. Examples `)

console.log("Boolean(false) : ", Boolean(false));      // false
console.log("Boolean(0) : ", Boolean(0));          // false
console.log("Boolean(\"\") : ", Boolean(""));         // false
console.log("Boolean(null) : ", Boolean(null));       // false
console.log("Boolean(undefined) : ", Boolean(undefined));  // false
console.log("Boolean(NaN) : ", Boolean(NaN));        // false






// 3. Practical Behavior
console.log(`\n 3. Practical Behavior `)

let value = 0;

if (value) {
    console.log("will not run");
} else {
    console.log("0 is falsy");
}







// 4. Tricky Cases (NOT falsy)
console.log(`\n 4. Tricky Cases (NOT falsy) `)

console.log("Boolean(\"0\") : ", Boolean("0"));     // true
console.log("Boolean(\"false\") : ", Boolean("false")); // true
console.log("Boolean([]) : ", Boolean([]));      // true
console.log("Boolean({}) : ", Boolean({}));      // true







// 5. Real World Use
console.log(`\n 5. Real World Use `)

let username = "";

let display = username || "Guest";
// empty string is falsy -> Guest is used






// 6. Important Rule
console.log(`\n 6. Important Rule `)

// ONLY the above 8 values are falsy
// Everything else in JavaScript is truthy