


// ++++++++++++++++++++++++++++++++++++++++++++++++ 1 ++++++++++++++++++++++++++++++++++++++++++++++

//  Create a variable x = "5" and do:
//    x + 2
//    x - 2
//    x * 2
//    Explain why one gives string and others give numbers.


console.log("\n Solution 1: ")
let x = "5";
console.log(`x+2 = ${x + 2} "${typeof (x + 2)}"`); // "52" (string concatenation)
console.log(`x-2 = ${x - 2} "${typeof (x - 2)}"`); // 3 (string converted to number)
console.log(`x*2 = ${x * 2} "${typeof (x * 2)}"`); // 10 (string converted to number)
// Explanation:
// In the first case, the + operator with a string operand results in string concatenation.
// In the other two cases, the - and * operators convert the string to a number for arithmetic operations.






/// ++++++++++++++++++++++++++++++++++++++++++++++++ 2 ++++++++++++++++++++++++++++++++++++++++++++++

//  Convert undefined → number → string → boolean step by step
//    Log each type during conversion.
//    Explain why the final boolean is what it is.


console.log("\n Solution 2: ")
let y;
console.log(`typeof y : ${typeof y} & y = ${y}`); // undefined 
console.log(`typeof Number(y) : ${typeof Number(y)} & Number(y) = ${Number(y)}`);// number  NaN, type of NaN is number
console.log(`typeof String(y) : ${typeof String(y)} & String(y) = ${String(y)}`);// string "undefined"
console.log(`typeof Boolean(y) : ${typeof Boolean(y)} & Boolean(y) = ${Boolean(y)}`);// boolean false
// Explanation:
// undefined converts to NaN when converted to a number.
// NaN converts to the string "undefined" when converted to a string.
// undefined is falsy, so when converted to a boolean, it results in false.
// falsy list: false, 0, "", null, undefined, NaN
// Everything else → truthy.




/// ++++++++++++++++++++++++++++++++++++++++++++++++ 3 ++++++++++++++++++++++++++++++++++++++++++++++

//  Compare these and explain EACH result:
//    null > 0
//    null == 0
//    null >= 0
//    Why same null behaving in three different ways?

console.log("\n Solution 3: ")
console.log(`null > 0 : ${null > 0}`); // false
console.log(`null == 0 : ${null == 0}`); // false
console.log(`null >= 0 : ${null >= 0}`); // true 
// Explanation:
// In the first case, null is converted to 0 for comparison, so 0 > 0 is false.
// In the second case, null is only equal to undefined, so null == 0 is false.
// In the third case, null is converted to 0 for comparison, so 0 >= 0 is true.
// null has special rules in comparisons: it only equals undefined and converts to 0 in relational comparisons. 



/// ++++++++++++++++++++++++++++++++++++++++++++++++ 4 ++++++++++++++++++++++++++++++++++++++++++++++

//  Take "  42px  " and convert using:
//    Number()
//    parseInt()
//    parseFloat()
//    Explain why results are different.


console.log("\n Solution 4: ")
let a = "  42px  "
console.log(`Number("${a}") : ${Number(a)}`); // NaN
console.log(`parseInt("${a}") : ${parseInt(a)}`); // 42
console.log(`parseFloat("${a}") : ${parseFloat(a)}`); // 42
// Explanation:
// Number() tries to convert the entire string to a number and fails due to the "px" suffix, resulting in NaN.
// parseInt() reads the string until it encounters a non-numeric character, successfully extracting 42.
// parseFloat() behaves similarly to parseInt(), extracting 42 as a floating-point number.
// Thus, Number() is strict, while parseInt() and parseFloat() are more lenient in parsing numbers from strings.




/// ++++++++++++++++++++++++++++++++++++++++++++++++ 5 ++++++++++++++++++++++++++++++++++++++++++++++

//  Create:
//    let a = [];
//    let b = [];
//    console.log(a == b);
//    console.log(a === b);
//    Explain why arrays with same content are NOT equal.


console.log("\n Solution 5: ")
let q = [1, 2];
let w = [1, 2];
console.log("q == w:", q == w);
console.log("q === w:", q === w);
// Explanation:
// In JavaScript, arrays are reference types. 
// When comparing two arrays with == or ===, it checks if they reference the same object in memory.
// Since q and w are two different array objects, even though they contain the same elements, the comparison returns false.





/// ++++++++++++++++++++++++++++++++++++++++++++++++ 6 ++++++++++++++++++++++++++++++++++++++++++++++


//  Do this crime and explain left-to-right evaluation:
//    console.log("5" + 2 + 3);
//    console.log(5 + 2 + "3");


console.log("\n Solution 6: ")
console.log(`"5" + 2 + 3 = "${"5" + 2 + 3}`); // "523"
console.log(`5 + 2 + "3" = ${5 + 2 + "3"}`); // "73"

// Explanation:
// JavaScript evaluates expressions from left to right.
// In the first case, "5" is a string, so concatenation happens: "5" + 2 = "52", then "52" + 3 = "523".
// In the second case, 5 + 2 = 7 (numbers), then 7 is added to the string "3", resulting in "73".




/// ++++++++++++++++++++++++++++++++++++++++++++++++ 7 ++++++++++++++++++++++++++++++++++++++++++++++
// 7) Make a variable with value "false" (STRING)
//    Convert to Boolean and explain why it becomes true.

console.log("\n Solution 7: ")
let bol = "false";
console.log(`Boolean("${bol}") : ${Boolean(bol)}`); // true
// Explanation:
// In JavaScript, any non-empty string is considered truthy.
// Therefore, when converting the string "false" to a boolean, it results in true because the string is not empty.



/// ++++++++++++++++++++++++++++++++++++++++++++++++ 8 ++++++++++++++++++++++++++++++++++++++++++++++

//  Use isNaN() on:
//    "abc"
//    "123"
//    NaN
//    Explain hidden logic of isNaN.


console.log("\n Solution 8: ")
console.log(`isNaN("abc") : ${isNaN("abc")}`); // true
console.log(`isNaN("123") : ${isNaN("123")}`); // false
console.log(`isNaN(NaN) : ${isNaN(NaN)}`); // true
// Explanation:
// isNaN() first tries to convert the input to a number. Number("abc") results in NaN, so isNaN("abc") returns true.
// Number("123") successfully converts to 123, so isNaN("123") returns false.
// NaN is not a number, so isNaN(NaN) returns true.
// Thus, isNaN() checks if the value is NaN after conversion to a number.




/// ++++++++++++++++++++++++++++++++++++++++++++++++ 9 ++++++++++++++++++++++++++++++++++++++++++++++

//  Create two objects A and B where:
//    B = A
//    change B.email
//    Show why A also changes (heap reference concept).


console.log("\n Solution 9: ")
let objA = {
    email: "emailone"
}
let objB = objA;
console.log(`Before change in objB.email:`)
console.log(`objA : ${objA.email}`) // emailone
console.log(`objB : ${objB.email}`) // emailone
objB.email = "emailtwo";
console.log(`After change in objB.email:`)
console.log(`objA : ${objA.email}`) // emailtwo
console.log(`objB : ${objB.email}`) // emailtwo
// Explanation:
// In JavaScript, objects are reference types. 
// When we assign objB = objA, both objA and objB reference the same object in memory(Heap).
// Therefore, when we change a property of objB, it also affects objA since they point to the same object.





/// ++++++++++++++++++++++++++++++++++++++++++++++++ 10 ++++++++++++++++++++++++++++++++++++++++++++++

//  Prefix vs postfix war:
//     let x = 5;
//     console.log(x++);
//     console.log(++x);
//     Explain execution order.


console.log("\n Solution 10: ")
let p = 5;
console.log(`p++ : ${p++}`); // 5 (postfix: returns value before incrementing)
console.log(`++p : ${++p}`); // 7 (prefix: increments first, then returns value)
// Explanation:
// In the first case (x++), the current value of x (5) is returned, and then x is incremented to 6.
// In the second case (++x), x is first incremented from 6 to 7, and then the new value (7) is returned.



/// ++++++++++++++++++++++++++++++++++++++++++++++++ 11 ++++++++++++++++++++++++++++++++++++++++++++++

//  Convert these to Boolean and explain traps:
//     ""
//     " "
//     "0"
//     []
//     {}


console.log("\n Solution 11: ")
console.log(`Boolean("") : ${Boolean("")}`); // false
console.log(`Boolean(" ") : ${Boolean(" ")}`); // true
console.log(`Boolean("0") : ${Boolean("0")}`); // true
console.log(`Boolean([]) : ${Boolean([])}`); // true
console.log(`Boolean({}) : ${Boolean({})}`); // true
// Explanation:
// An empty string "" is falsy.
// In JavaScript, any non-empty string is considered truthy.
// A string with a space " " is truthy because it's not empty.
// The string "0" is truthy because it's not an empty string.
// An empty array [] is truthy because it's an object (non-empty container).
// An empty object {} is also truthy for the same reason.





/// ++++++++++++++++++++++++++++++++++++++++++++++++ 12 ++++++++++++++++++++++++++++++++++++++++++++++

// 12) Use:
//     Number(" ")
//     Boolean(" ")
//     Explain why space acts like a double agent.

console.log("\n Solution 12: ")
console.log(`Number(" ") : ${Number(" ")}`); // 0
console.log(`Boolean(" ") : ${Boolean(" ")}`); // true
// Explanation:
// When converting a string with only spaces to a number, JavaScript trims the spaces and treats it as an empty string, which converts to 0.
// However, when converting the same string to a boolean, it is considered a non-empty string (since it contains spaces), which is truthy.
// Thus, the space character acts like a double agent by converting to 0 in numeric context and true in boolean context.





/// ++++++++++++++++++++++++++++++++++++++++++++++++ 13 ++++++++++++++++++++++++++++++++++++++++++++++

//  Compare and explain:
//     "02" > 1
//     "2" > "12"
//     Numeric vs lexicographic comparison.


console.log("\n Solution 13: ")
console.log(`"02" > 1 : ${"02" > 1}`); // true
console.log(`"2" > "12" : ${"2" > "12"}`); // true
// Explanation:
// In the first case, "02" is converted to the number 2 for comparison, so 2 > 1 is true.
// In the second case, both operands are strings, so a lexicographic (dictionary) comparison is performed.
// The first character '2' is greater than '1', so "2" > "12" is true.
// Thus, numeric comparisons convert strings to numbers, while string comparisons compare character by character.




/// ++++++++++++++++++++++++++++++++++++++++++++++++ 14 ++++++++++++++++++++++++++++++++++++++++++++++

//  Generate random 1–10 inclusive using your function.
//     Explain:
//     - why +1 is needed
//     - why floor instead of round.

console.log("\n Solution 14: ")
let getRandomNumber = function () {
    return Math.floor(Math.random() * 10 + 1);
}
console.log(`Random number between 1 and 10: ${getRandomNumber()}`);
// Explanation:
// Math.random() generates a number between 0 (inclusive) and 1 (exclusive).
// Multiplying by 10 gives a range of 0 to 10 (exclusive).
// Adding 1 shifts the range to 1 to 11 (exclusive), ensuring the minimum value is 1.
// Using Math.floor() rounds down to the nearest whole number, giving us an integer between 1 and 10 inclusive.
// If we used Math.round(), it could round up to 11 when the random number is close to 1, which is outside our desired range.



/// +++++++++++++++++++++++++++++++++++++++++++++++++ 15 ++++++++++++++++++++++++++++++++++++++++++++++

//  Create string with new String("JS") and normal "JS".
//     Compare with === and explain object vs primitive identity.
console.log("\n Solution 15: ")
let str01 = new String("JS");
let str02 = "JS";
console.log(`str01 === str02 : ${str01 === str02}`); // false
console.log(`str01 == str02 : ${str01 == str02}`); // true
// Explanation:
// str01 is a String object, while str02 is a primitive string.
// In JavaScript, objects and primitives are different types, so even though they contain the same characters, they are not strictly equal (===).
// The strict equality operator checks for both value and type, and since one is an object and the other is a primitive, the comparison returns false.
// However, with the loose equality operator (==), JavaScript performs type coercion, converting the String object to a primitive string before comparison, resulting in true.


// ++++++++++++++++++++++++++++++++++++++++++++++++ End ++++++++++++++++++++++++++++++++++++++++++++++

