

// JS Strings Notes 1/30/2026

let str = "Musawer"; // string intialization
let age = 20;

console.log(str + age + " hehe"); // normal concatenation, not recomended, a bit outdated 
console.log(`My name is ${str}, age is ${age} hehe`); //template literals 


//Another way to initialize strings
let str2 = new String("Musawer");
// not recommended, why? because it creates a string object, not a primitive string
// string objects are slower and take more memory

console.log(`Value of str2 is ${str2}`); //returns [String: 'Musawer'] which is a string object
console.log(`Type of str2 is ${typeof str2}`); //returns object

console.log(`Length of str2 is ${str2.length}`); // returns length of string, .length is a property of string object

// Methods of string
console.log(`\nString Methods:`);
console.log(`str2 in uppercase is ${str2.toLocaleUpperCase()}`); // returns MUSAWER 
console.log(`str2 in lowercase is ${str2.toLocaleLowerCase()}`); // returns musawer
console.log(`Character at index 2 is ${str2.charAt(2)}`); // returns s
console.log(`Index of 'a' is ${str2.indexOf('a')}`); // returns 3
console.log(`Index of 'z' is ${str2.indexOf('z')}`); // returns -1 (not found)
console.log(`Substring from index 1 to 4 is ${str2.substring(1, 4)}`); // returns usa
console.log(`Slice from index 1 to 4 is ${str2.slice(1, 4)}`); // returns usa
console.log(`Slice from index -4 to end is ${str2.slice(-4)}`); // returns awer because negative index counts from end
console.log(`Includes 'saw' ? ${str2.includes('saw')}`); // returns true
console.log(`Includes 'xyz' ? ${str2.includes('xyz')}`); // returns false   
console.log(`Replace 'wer' with '123' : ${str2.replace('wer', '123')}`); // returns Musa123
console.log(`Original str2 remains unchanged: ${str2}`); // Original string remains unchanged
let str3 = "   hello   ";
console.log(`Trimmed string of ${str3} is '${str3.trim()}'`); // returns 'hello' it removes whitespace from both ends
console.log(`Split str2 by 's': ${str2.split('s')}`); // returns [ 'Mu', 'awer' ] it splits the string into an array

// all these methods return new strings or values, they do not modify the original string


