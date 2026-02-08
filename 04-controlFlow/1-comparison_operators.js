



// JS Comparison Operator notes 02/08/2026




// Comparison operators compare two values and return true or false

// 1. Basic Numeric Comparisons
console.log(`\n 1. Basic Numeric Comparisons`)

console.log(10 > 5);   // true   -> greater than
console.log(10 < 5);   // false  -> less than
console.log(10 >= 10); // true   -> greater than or equal
console.log(8 <= 10);  // true   -> less than or equal


// 2. Equality Operators
console.log(`\n 2. Equality Operators`)


// Loose Equality (==) -> allows type conversion
console.log(5 == "5");    // true  (string converted to number)
console.log(true == 1);   // true

// Strict Equality (===) -> no type conversion
console.log(5 === "5");   // false
console.log(5 === 5);     // true


// 3. Not Equal Operators
console.log(`\n 3. Not Equal Operators`)


console.log(5 != "5");   // false (loose not equal)
console.log(5 !== "5");  // true  (strict not equal)


// 4. Comparison with Different Types
console.log(`\n 4. Comparison with Different Types`)

console.log("10" > 5);   // true  (string converted to number)
console.log("a" > "b");  // false (alphabet comparison by ASCII)






// 5. Important Rules

// - >  <  >=  <= work mainly with numbers
// - == and != allow type conversion (avoid in real projects)
// - always prefer === and !==
// - string comparison happens alphabetically
// - comparing null and undefined gives special results 