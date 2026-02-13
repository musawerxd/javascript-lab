


//JS Difference: for...in vs for...of notes 02/12/2026

// for...in = loops over OBJECT KEYS (property names)
// for...of = loops over VALUES of ITERABLES (Array, String, Map, Set, etc.)






// 1. Arrays Example
console.log(`\n 1. Arrays Example`)

let arr = ["a", "b", "c"];

console.log("\t for...in (keys/indexes):");
for (let index in arr) {
    console.log(index);       // "0", "1", "2"  (indexes as strings)
}

console.log("\t for...of (values):");
for (let value of arr) {
    console.log(value);       // "a", "b", "c"
}


// ================================================================
// 2. Strings Example
console.log(`\n 2. Strings Example`)


let str = "JS";

console.log("for...in (indexes):");
for (let i in str) {
    console.log(i);         // 0 1 (indexes as strings)
}

console.log("for...of (values):");
for (let char of str) {
    console.log(char);      // "J" "S"
}


// ================================================================
// 3. Map Example
console.log(`\n 3. Map Example`)


let map = new Map([
    ["name", "Musawer"],
    ["age", 20]
]);

// for...in ❌ doesn't work, Map is iterable but not an object
// for (let x in map) { } // Error

console.log("for...of Map:");
for (let [key, value] of map) {
    console.log(key, value);
}


// ================================================================
// 4. Set Example
console.log(`\n 4. Set Example)`)


let set = new Set([1, 2, 3]);

// for...in ❌ doesn't work, Set is iterable but not an object
// for (let x in set) { } // Error

console.log("for...of Set:");
for (let value of set) {
    console.log(value);
}


// ================================================================
// 5. Key Points / Professional Notes
console.log(`\n 5. Key Points / Professional Notes`)


// 1. for...in
console.log(`\n\t1. for...in`)
//    - Works on objects (also works on arrays, but gives indexes)
//    - Returns KEYS (property names / indexes as strings)
//    - Use mainly for OBJECTS

// 2. for...of
console.log(`\t2. for...of`)
//    - Works on ITERABLES (arrays, strings, maps, sets, NodeLists)
//    - Returns VALUES
//    - Can use break/continue easily
//    - Use mainly for ARRAYS or iterables

// 3. Arrays
console.log(`\t3. Arrays`)
//    - for...in -> indexes
//    - for...of -> values (preferred)

// 4. Strings
console.log(`\t4. Strings`)
//    - for...in -> index
//    - for...of -> character

// 5. Maps & Sets
console.log(`\t5. Maps & Sets`)
//    - Only for...of works (for...in does not)

// 6. Summary Rule
console.log(`\t6. Summary Rule`)
//    - Need KEYS? -> for...in
//    - Need VALUES? -> for...of

