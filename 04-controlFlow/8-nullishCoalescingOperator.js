




// JS  Nullish Coalescing Operator notes 02/10/2026


// ?? returns the right side ONLY when left side is
// null or undefined – not for other falsy values


// 1. Basic Example
console.log(`\n 1. Basic Example`)

let value = null;

let result = value ?? "Default";
console.log(result);   // "Default"







// 2. Difference between || and ??
console.log(`\n 2. Difference between || and ??`)

// OR (||) checks all falsy values
console.log(0 || 10);       // 10
console.log("" || "Hi");    // Hi

// Nullish (??) checks only null/undefined
console.log(0 ?? 10);       // 0
console.log("" ?? "Hi");    // ""







// 3. Real Use Case
console.log(`\n 3. Real Use Case`)

let userInput = 0;

let display = userInput ?? 100;
console.log(display);  // 0  (not replaced)







// 4. With undefined
console.log(`\n 4. With undefined`)

let name;

let finalName = name ?? "Guest";
console.log(finalName); // Guest







// 5. Chaining
console.log(`\n 5. Chaining`)

let a = null;
let b = undefined;
let c = "Hello";

console.log(a ?? b ?? c); // Hello



// 6. with 3 values
console.log(`\n 6. with 3 values`)

let x = null;
let y = 8;
let z = 10;

console.log(x ?? y ?? z); // 8 , becasue in these cases, first value to be recieved will be returned 







// 7. Important Rules
console.log(`\n 7. Important Rules`)

// - ?? ignores: 0, "", false, NaN
// - works only for: null and undefined
// - safer than || for default values
// - cannot mix directly with && or || without ( )


