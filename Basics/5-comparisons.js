

// JS Operations Notes 1/20/2026

// Simple Comparisons
console.log("2 > 1 =", 2 > 1);          // true
console.log("2 == 1 =", 2 == 1);        // false
console.log("2 != 1 =", 2 != 1);        // true 
console.log("2 >= 1 =", 2 >= 1);       // true
console.log("2 <= 1 =", 2 <= 1);       // false   



//problem appears when comparing different datatypes
console.log("\nComparisons with different datatypes:");
console.log("\'2\' > 1 = ", '2' > 1);       // true, string '2' is converted to number 2
console.log("\'02\' > 1 = ", '02' > 1);       // true, string '02' is converted to number 2


console.log("\n");
console.log("\'null\' > 0 = ", null > 0);      // false, null is converted to 0
console.log("null == 0 = ", null == 0);     // false, null only equals undefined
console.log("null >= 0 = ", null >= 0);     // true, null is converted to 0, its because of comparison rules

console.log("\n");
console.log("undefined < 0 = ", undefined < 0); // false, undefined is converted to NaN
console.log("\'undefined\' > 0 = ", undefined > 0); // false, undefined is converted to NaN
console.log("undefined == 0 = ", undefined == 0); // false, undefined only equals null
console.log("undefined == undefined = ", undefined == undefined); // true, undefined equals itself


console.log("\nThese comparisons can put you in confusion! becasue we don't know when it will convert to number and when it won't.");

// Equality vs. Comparison
console.log("\n === and == comparisons:");
console.log("\"2\" === 2 =", "2" === 2); // false, different types
console.log("\"2\" == 2 =", "2" == 2);   // true, string '2' is converted to number 2

// JavaScript uses TWO different systems:
//
// 1. Comparison (<, >, <=, >=):
//    - Converts values to numbers
//    - Used for range and size checks
//    - Example: null >= 0  -> true (null becomes 0)
//
// 2. Equality (==, ===):
//    - Used to check if values are equal
//    - ==  applies special equality rules
//    - === checks value and type (no conversion)
//
// Key difference:
// - Comparison converts to numbers
// - Equality follows separate equality rules
//
// Rule of thumb:
// - Use ===
// - Avoid comparing null with numbers
