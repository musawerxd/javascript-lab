



//JS for of loop notes 02/12/2026


// for...in is used to iterate over OBJECT PROPERTY KEYS
// It loops through ENUMERABLE properties (including inherited ones)

// Syntax:
// for (let key in object) {
//     code
// }




// 1. Basic Example (Object)
console.log(`\n 1. Basic Example (Object)`)

let user = {
    name: "musawer",
    age: 20
}

// for keys only
console.log(`\tKeys only`)
for (let key in user) {
    console.log(`Key: ${key}`)
}

// for Values only
console.log(`\tValues only`)
for (let key in user) {
    console.log(`Values: ${user[key]}`)
}

//both 
console.log(`\tBoth`)
for (const key in user) {
    console.log(`${key} : ${user[key]}`)
}







// 2. Why bracket notation is required
console.log(`\n 2. Why bracket notation is required`)

// Wrong:
// user.key  -> looks for literal property "key"

for (let key in user) {
    console.log(user.key); // undefined undefined
}

// Correct:
for (let key in user) {
    console.log(user[key]);
}






// 3. for...in with Arrays (NOT recommended)
console.log(`\n 3. for...in with Arrays (NOT recommended)`)

let arr = [1, 2, 3, 4, 5]

// ONLY INDEX
console.log(`\tONLY INDEX`)
for (let index in arr) {
    console.log(index) // string "0", "1" ....
}

// ONLY VALUES                          
console.log(`\tONLY VALUES`)
for (let val in arr) {
    console.log(arr[val])  // 
}

//  BOTH
console.log(`\t BOTH`)
for (let index in arr) {
    console.log(`${index} : ${arr[index]}`)
}

// Important:
// - index is STRING, not number
// - includes custom properties if added







// 4. Includes Inherited Properties
console.log(`\n 4. Includes Inherited Properties`)

let obj1 = { a: "hehe" }
let obj2 = { ...obj1 }
obj2.b = "haha"

for (let key in obj2) {
    console.log(key)
}
// Output: a,b   (includes parents "a")








// 5. Order of Iteration
console.log(`\n 5. Order of Iteration`)

// - Based on Keys 
// - Integer-like keys in ascending order
// - Then string keys in insertion order

let obj3 = {
    100: "a",
    2: "b",
    7: "c",
    name: "JS"
}
for (let key in obj3) {
    console.log(obj3[key])
}







// 6. With break and continue
console.log(`\n 6. With break and continue`)

let data = { a: 1, b: 2, c: 3 };

for (let key in data) {

    if (key === "b") continue;
    if (key === "c") break;

    console.log(key);
}








// 10. Important Rules
console.log(`\n 7. Important Rules`)

// - Used mainly for OBJECTS
// - Returns KEYS (not values)
// - Includes inherited enumerable properties
// - Index in arrays is string
// - Avoid for arrays (use for...of instead)
// // - Respects property order rules (numeric first)