



// JS Object Notes 06/02/2026

//1. A function = reusable block of code
console.log(`\n 1. A function = reusable block of code : `)
function sayHello() {
    console.log("Hello Musawer");
}

console.log("sayHello() : ")
sayHello();   // call 








// 2. Return vs Console.log
console.log(`\n 2. Return vs Console.log :  `)

// return in function
function test() {
    return 10; // returns value to the function call
}

console.log(test()); // 10

// console in function
function test2() {
    console.log(10); //returns nothing 
}

console.log(test2()); // 10 then undefined, because console.log() returns nothing










//3. Parameters & Arguments
console.log(`\n 3. Parameters & Arguments : `)

function multiply(x, y) {   // x,y -> parameters
    return x * y; // returns the value to function call 
}

let Result = multiply(2, 3);  // 2,3 -> arguments
console.log("Result : ", Result);






// 4. Default Parameters
console.log(`\n 4. Default Parameters `)

function greet(name = "Musawer") {
    console.log(`Salam ${name}`);
}

greet();        // Salam Musawer
greet("Ali");   // Salam Ali






// 5. Returning String in Function
console.log(`\n5. Returning String`);

function getMessage(name) {
    return `Salam ${name}, welcome to JS Notes`; // string interpolation 
}

let msg = getMessage("Musawer"); // stores returned string
console.log(msg);









//6. Rest Operator & Spread Operator in Function
console.log(`\n6. Rest & Spread in functions`);


//REST OPERATOR (...)
function addNumbers(...nums) {
    console.log(nums); // Rest operator put all values into an array
}

addNumbers(1, 2, 3, 4, 5); // we use Rest operator when we dont know how many values will Function be getting in future 

// normal variable + Rest operator MIX
function intro(name, ...skills) { // first value will goes to name and other will be going into skills
    return `${name} knows ${skills.join("-")}`;
}

console.log(intro("Musawer", "JS", "React", "Node"));


//SPREAD OPERATOR (...)
function multiply(a, b, c) {
    return a * b * c;
}

let nums = [2, 3, 4];

console.log(multiply(...nums)); // 24, here ..nums spread all values, without spread operator we will be getting NaN

// Rest must be LAST parameter
// function test(...a, b) { } // illegal

// REST:    1,2,3,4  --->  [1,2,3,4]
// SPREAD: [1,2,3,4] --->  1,2,3,4








//7. Functions with object
console.log(`\n7. Functions with object`);
const user = {
    name: "Musawer",
    age: 20
}

// Simple
function showUser(obj) {
    console.log(`${obj.name} is ${obj.age} years old!`);
}

showUser(user);

//Destructure inside function
function showUserAgain({ name, age }) {
    console.log(`${name} is ${age} years old!`);
}

showUserAgain(user)

//Function creating Object

function createUser(name, age) {
    return {
        name: name,
        age: age
    }
}

let user1 = createUser("Ali", 24);
console.log(user1)
console.log(typeof user1)

//Objects are passed to function  by reference, so any changed made in function will reflect on Real Object






// 8. functions with Arrays
console.log(`\n8. Functions with Arrays`);

function makeArray(...arr) {
    return arr // Rest Operator
}

let newArr = makeArray(0, 2, 3, 5, 2, 6565, 234, 123)
console.log(newArr)


// Modify array inside function 
function addItem(arrA) {
    arrA.push(69) // reflect on orignal array, as array is passed by reference 
}
let arrA = [1, 2, 3, 4]
console.log(arrA); // before calling the function 
addItem(arrA);// call
console.log(arrA);// after calling the function 


// Array + Destructuring
function firstThree([a, b, c]) { // ectract first 3 elements from array
    console.log("First three Elements are : ", a, b, c);
}
let arrD = [53, 312, 23, 4135, 13, 2]
firstThree(arrD)


