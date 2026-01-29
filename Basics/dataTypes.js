// JS Variables Notes 1/29/2026
alert("this will pop up an alert box! in the browser");
// cant run in node.js environment, only in browser console.

let myName = "Musawer";
let number = 5;
let addmitted = true;
let value = null;
let undef = undefined;

console.log(typeof myName); // string
console.log(typeof number); // number
console.log(typeof addmitted); // boolean
console.log(typeof value); // object (this is a known JS bug; null is not actually an object)
console.log(typeof undef); // undefined


// JS Data Types (Name + Functionality)

// string      -> text / sequence of characters
// number      -> numeric values (integers or floats)
// boolean     -> true / false
// null        -> intentional absence of value
// undefined   -> variable declared but not assigned
// bigint      -> really big integers beyond Number limit
// symbol      -> unique identifiers, mostly for object properties
// object      -> key-value collections
// array       -> ordered list of values (special type of object)
// function    -> reusable blocks of code
// date        -> date and time values (special type of object)
// map         -> key-value pairs with any data type as key (special type of object)
// set         -> collection of unique values (special type of object) 
