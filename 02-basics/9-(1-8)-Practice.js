





// JS  02-basics Practice 02/12/2026






//1. Create an array using all 4 methods ([], Array(), Array.of(), Array.from()) and log them.
console.log(`\n Q-1: `)
let arr1 = [1, 2, 3, 4]
let arr2 = new Array(1, 2, 3, 4)
let arr3 = Array.of(1, 2, 3, 4)
let arr4 = Array.from("1234", Number)
console.log(arr1, typeof arr1)
console.log(arr2, typeof arr2)
console.log(arr3, typeof arr3)
console.log(arr4, typeof arr4)







//2. Push an array inside another array and prevent the original array from changing using concat and spread operator.
console.log(`\n Q-2: `)

let arrOne = [1, 2, 3, 4]
let arrTwo = [5, 6, 7, 8]
console.log("arrOne: ", arrOne)
console.log("arrTwo: ", arrTwo)

// arrOne.push(arrTwo) // dont use, it will push whole array into another orignal array

//  Method 1 : using concat (does NOT mutate arr1)
let resultArr1 = arrOne.concat([arrTwo]);
console.log("\n resultArr1: ", resultArr1)
console.log("arrOne: ", arrOne)
console.log("arrTwo: ", arrTwo)

//  Method 2 : using spread (does NOT mutate arr1)
let resultArr2 = [...arrOne, ...arrTwo]
console.log("\n resultArr2: ", resultArr2)
console.log("arrOne: ", arrOne)
console.log("arrTwo: ", arrTwo)







//3. Slice and splice the same array; log original and new arrays to show the difference.
console.log(`\n Q-3: `)

let arrS = [1, 2, 3, 4];
console.log("Original arrS:", arrS);

// SLICE -> does NOT mutate original array, returns a new array
let newArr = arrS.slice(0, 1); // extracts elements from index 0 to 1 (1 not included)
console.log("After slice(0,1), Original arrS:", arrS); // [1,2,3,4] unchanged
console.log("Returned from slice(0,1):", newArr); // [1]

// SPLICE -> DOES mutate original array, returns removed elements
let newArr2 = arrS.splice(0, 1); // removes 1 element at index 0
console.log("After splice(0,1), Original arrS:", arrS); // [2,3,4] mutated
console.log("Returned from splice(0,1):", newArr2); // [1]






//4. Flatten a nested array with depth 2 and Infinity.
console.log(`\n Q-4: `)

let nestedArr = [1, 2, 3, 4, [5, 6, 7, 8, [9, [10]]]]
console.log("Orignal Nested Array : ", nestedArr)

// Flatten with depth 2
let flatDepth2 = nestedArr.flat(2);
console.log("Flattened with depth 2:", flatDepth2);
// Output: [1, 2, 3, 4, 5, 6, [7]]

// Flatten completely (Infinity)
let flatInfinity = nestedArr.flat(Infinity);
console.log("Flattened with Infinity:", flatInfinity);
// Output: [1, 2, 3, 4, 5, 6, 7]









//5. Convert an array to string with .join() using comma, space, and dash.
console.log(`\n Q-5: `)

let arrJ = [1, 2, 3, 4]
console.log(arrJ)


console.log(arrJ.join(","))
console.log(arrJ.join(" "))
console.log(arrJ.join("-"))







//6. Check if variable is an array using Array.isArray() and try Array.from() on string and object.
console.log(`\n Q-6: `)

let RandomVariable = 1;
console.log(Array.isArray(RandomVariable))
let RandomArr = [1, 2, 3];
console.log(Array.isArray(RandomArr))
let RandomObj = { a: 1, b: 2 };
console.log(Array.isArray(RandomObj))

let str = "musawer";
let strArr = Array.from(str)
console.log(strArr)

let myobj = {
    name: "musawer"
}
let myobjArr = Array.from(myobj); // Using Array.from() on object (fails unless object is iterable)
console.log(myobjArr)






//7. Find index of a number that exists and one that doesn’t. Use .includes() to verify.
console.log(`\n Q-7: `)

let arr = [1, 2, 3, 4, 5]
let indexExist = arr.indexOf(4)
console.log("arr.indexOf(4): ", indexExist) //3

let indexNotExist = arr.indexOf(30)
console.log("arr.indexOf(30): ", indexNotExist)//-1

console.log("arr.includes(indexExist) : ", arr.includes(indexExist))
console.log("arr.includes(indexNotExist) : ", arr.includes(indexNotExist))
// Important
// .indexOf() uses strict equality(===), so indexOf('30') won’t match 30..includes() behaves the same way.






//8. Create a function that accepts any number of numbers and returns sum (rest operator).
console.log(`\n Q-8: `)

// Rest parameter collects all arguments into an array
function sum(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num
    }
    return sum
}


console.log(sum(1, 2, 3))






//9. Create an object with nested object and array inside object; log nested values.
console.log(`\n Q-9: `)


let obj = {
    name: "Musawer",
    age: 20,
    address: {
        city: "Burewala",
        country: "Pakistan"
    },
    skills: ["javascipt", "c++", "react"],
    education: {
        university: "UAF",
        Semesters: [
            {
                sem: 1,
                gpa: 3.55
            },
            {
                sem: 2,
                gpa: 3.76
            },
            {
                sem: 3,
                gpa: 4
            }
        ]
    }
}
console.log("Whole Object : ", obj)

// Access nested object values
console.log("City : ", obj.address.city)
console.log("University : ", obj.education.university)

// Access array inside object
console.log("skill 1 : ", obj.skills[0])

// Access nested object inside array inside object (deep access)
console.log("Sem 1 GPA : ", obj.education.Semesters[0].gpa)










//10. Add, modify, and delete properties dynamically in an object.
console.log(`\n Q-10: `)


let dynamicObj = {
    name: "Musawer"
}
console.log("dynamicObj : ", dynamicObj)

//Add
dynamicObj.age = 20
console.log("After Add age: ")
console.log("dynamicObj : ", dynamicObj)

//modify
dynamicObj.name = "ali"
console.log("After Modifying name: ")
console.log("dynamicObj : ", dynamicObj)

//delete
delete dynamicObj.name;
console.log("After deleting name : ")
console.log("dynamicObj : ", dynamicObj)


// Add property dynamically (using bracket notation)
let dynamicKey = "profession";
dynamicObj[dynamicKey] = "Student";
console.log("After dynamic key add:", dynamicObj);










//11. Add a function inside object and access this to print object properties.
console.log(`\n Q-11: `)

let objWithFunction = {
    name: "Musawer",
    age: 20,
    userStatus: "Single",

    Introduce: function greet() {
        console.log("NAME : ", this.name)
        console.log("AGE : ", this.age)
        console.log("Status : ", this.userStatus)
    }
}
objWithFunction.Introduce()
// `this` refers to the object that calls the method.
// Here → `this` === objWithFunction
// If you use arrow function:
// introduce: () => { console.log(this.name) }
// It will NOT work as expected,
// because arrow functions do NOT have their own `this`.










//12. Copy an object using spread operator and Object.assign(), then modify copy to show original is untouched.
console.log(`\n Q-12: `)

let orignalObj = {
    name: "Musawer"
}
console.log("orignalObj : ", orignalObj)

//Method 1 Spread Operator
let copyObj1 = { ...orignalObj }
console.log("Copied using Spred Mehthod, copyObj1 : ", copyObj1)

//Method 2 Object.assign()
let copyObj2 = Object.assign({}, orignalObj)
console.log("Copied using Spred Mehthod, copyObj1 : ", copyObj2)

// modifying 
copyObj1.name = "Ali"
copyObj2.name = "Hannan"

console.log("\tAfter Modifying : ")

console.log("copyObj1 : ", copyObj1)
console.log("copyObj2 : ", copyObj2)

console.log("OringalObj : ", orignalObj)

// Both spread and Object.assign() create SHALLOW copies.
// Nested objects will still share reference.










//13. Use symbols as keys in an object and log them.
console.log(`\n Q-13: `)

let sym = Symbol("id")

let objWithSymbol = {
    [sym]: 21,
    name: "Musawer"
}
console.log(objWithSymbol)
console.log(objWithSymbol[sym])







// 14. Freeze an object and try modifying a property; log the result.
console.log(`\n Q-14: `)

let Obj = {
    name: "Musawer"
}
console.log("Obj : ", Obj)

//modifying before freeze
console.log("modifying before freeze")
Obj.name = "Ali"
console.log("Obj : ", Obj)

Object.freeze(Obj)

//modifying after  freeze
console.log("modifying After freeze")
Obj.name = "Hanan"
console.log("Obj : ", Obj)









// 15. Access object keys, values, and entries using Object.keys(), Object.values(), Object.entries().
console.log(`\n Q-15: `)

let Obj1 = {
    name: "Musawer",
    age: 20,
    Smester: 4
}
console.log("Obj1 : ", Obj1)
console.log("Object.keys(Obj1) : ", Object.keys(Obj1)) // returns only keys 
console.log("Object.values(Obj1) : ", Object.values(Obj1)) // returns only Values 
console.log("Object.entries(Obj1) : ", Object.entries(Obj1)) // returns key value pair 








// 16. Destructure an object with renaming, nested destructuring, and arrays inside object.
console.log(`\n Q-16: `)

let Obj2 = {
    name: "Musawer",
    age: 20,
    skills: ["JS", "C++", "C"],
    address: {
        city: "Multan",
        country: "Pakistan"
    }
}
console.log("Obj2 : ", Obj2)

// destructuring 
let { name: username, age: old, skills: [first, second, third], address: { city: hisCity, country: hisCountry } } = Obj2

console.log("Name is : ", username)
console.log("Age is : ", old)
console.log("First Skill is : ", first)
console.log("Second Skill is : ", second)
console.log("Third Skill is : ", third)
console.log("City is : ", hisCity)
console.log("Country is : ", hisCountry)

//  IMPORTANT NOTES:
// 1. Renaming syntax → oldKey: newVariable
// 2. Nested destructuring works level by level
// 3. Array destructuring works by index position
// 4. This does NOT modify original object









// Functions

//17.  Write a function with default parameters and test calling it without arguments.
console.log(`\n Q-17: `)

function defaultParameters(name = "Guest", age) {
    console.log("Name : ", name)
    console.log("Age : ", age)
}
console.log("Without Parameters")
defaultParameters()
console.log("With Name parameter")
defaultParameters("Musawer")
console.log("With One parameter")
defaultParameters(19) // now name is 19 because parameters are evaluated left to right IMP!
console.log("With Both parameters")
defaultParameters("Ali", 23)




// 18. Create a function that takes an object as parameter and destructures it inside the function.
console.log(`\n Q-18: `)

function DestructureObj(obj) {
    console.log("Recieved : ", obj)
    console.log("De-Structuring...")
    let { name, age } = obj
    console.log("Name : ", name)
    console.log("Age : ", age)
}

let Obj3 = {
    name: "Musawer",
    age: 20,
}

DestructureObj(Obj3)







//19.  Write a function that returns vs console.log and log results to see the difference.
console.log(`\n Q-19: `)

function consolefunc(num1, num2) {
    console.log("Sum inside Function : ", num1 + num2)
}


let resultConsoleFunc = consolefunc(10, 2)
console.log("ResultConssoleFunc", resultConsoleFunc)
// console.log() → just prints, returns undefined


function returnfunc(num1, num2) {
    return num1 + num2
}

let resultReturnFunc = returnfunc(10, 2)
console.log("ResultReturnFunc", resultReturnFunc)
// return → sends value back to caller
// After return, function stops executing








//20. Pass an array to a function, modify it inside, and show how the original array changes.
console.log(`\n Q-20: `)
function Modifyarr(arr) {
    arr.push(100);        // mutating method
    arr[0] = 999;         // direct modification
}

let numbers = [1, 2, 3, 4, 5]
console.log("ORGINAL ARRAY IS (Before Calling) : ", numbers)

Modifyarr(numbers)
console.log("ORGINAL ARRAY IS (After Calling) : ", numbers);









//21.  Extract first 3 elements of an array using destructuring inside a function.
console.log(`\n Q-21: `)

function destructArr(arr) {
    console.log("Array Recieved in Function : ", arr);
    console.log("destructuring array...");
    let [first, second, third] = arr
    console.log("First Element : ", first);
    console.log("Second Element : ", second);
    console.log("Third Element : ", third);
}

let numberarr = [123, 223, 323, 423]
destructArr(numberarr)








// Use rest and spread operators in a function that multiplies all numbers passed.
console.log(`\n Q-22: `)

// rest operator → collects arguments into array
function multiplyAll(...nums) {
    console.log("Numbers Recieved in Function : ", nums)
    let res = 1
    for (const val of nums) {
        res *= val
    }
    console.log("Muliple of All is : ", res)
}

let arrSR = [1, 2, 3, 4]
// spread operator → spreads array into individual arguments, otherwise it will become nested array 
multiplyAll(...arrSR)

// Important
// 1. Rest (...) → gathers multiple values into array.
// 2. Spread (...) → expands array into individual values.






// 25. Create a global variable and a local variable with same name; log them inside and outside function (shadowing).
console.log(`\n Q-25: `)
let same = 10;

function inner() {
    let same = 20 // local variable shadows global
    console.log("Inside Function : ", same)

}

inner()
console.log("Outside Function : ", same)

// Imp
// 1. Local variable "same" inside function shadows global "same".
// 2. Changing local variable does NOT affect global variable.
// 3. This is called variable shadowing.






//26.  Log var, let, const variables before declaration to show hoisting/TDZ.
console.log(`\n Q-26: `)

console.log("Before declartion : ")
console.log("varVariable : ", varVariable) //undefined 
// console.log("letVariable : ", letVariable) // ReferenceError → Temporal Dead Zone (TDZ)
// console.log("constVariable : ", constVariable)// ReferenceError → Temporal Dead Zone (TDZ)


var varVariable = 10
let letVariable = 20
const constVariable = 30










//27. Write a function expression and try calling it before declaration to see the trap.
console.log(`\n Q-27: `)

// greet() // Error, Cannot access 'greet' before initialization 

let greet = function () {
    console.log("hello! from function expression")
}








//28.  Convert a normal function to an arrow function with implicit return.
console.log(`\n Q-28: `)

function sumfunction(a, b) {
    return a + b
}

console.log("sumfunction(10, 20) : ", sumfunction(10, 20));


const sumArrowFunction = (a, b) => a + b // This implicitly returns the result of a + b
console.log("sumArrowFunction(20, 30) : ", sumArrowFunction(20, 30));
//Imp

// 1. Implicit return → no curly braces {}, value returned automatically
// 2. If you use {} → must use explicit return
// 3. Arrow functions do NOT have their own `this`






// 29. Write a simple IIFE and log something.
console.log(`\n Q-29: `);
(() => console.log("Hello from IIFE"))()








//30. Write an IIFE with parameters and try naming it; see what happens if you call it later
console.log(`\n Q-30: `);
(function greetIIFE(name) {
    console.log(`Hello! ${name}`)
})("Musawer")

greetIIFE("Ali") // ERROR

// IMP
// 1. IIFE executes immediately after definition.
// 2. The function name inside IIFE is not accessible outside (function expression scope).
// 3. Parameters can be passed directly in parentheses.