


// JS Object Notes 07/02/2026

// Scope defines the accessibility or visibility of variables, functions, and objects in a particular part of your code



// 1. Global Scope in JS
console.log(`\n1. Global Scope in JS`);

let a = 10;

function test() {
    console.log(a); // 10
}

test();







// 2. Local / Function Scope
console.log(`\n2. Local / Function Scope`);

function demo() {
    let b = 20;
}

// console.log(b); // ERROR , b is undefined and will through error.






// 3. Local / Function Scope
console.log(`\n3. Local / Function Scope`);
if (true) {
    let x = 30;
    const y = 40;
    var z = 50;
}

console.log(z); // 50  (var = global), var is always global, not used much nowadays
// console.log(x); // error






// 4. Local / Function Scope
console.log(`\n4. Local / Function Scope`);

let outer = "I am outside";

function parent() {
    let inner = "I am inside";

    function child() {
        console.log(outer); // can be accessed
        console.log(inner); // can be accessed
    }

    child();
}
// console.log(inner) //error

parent();







// 5. Shadowing
console.log(`\n5. Shadowing`);
let name = "Global";

function test() {
    let name = "Local";
    console.log(name); // Local
}
test()
console.log(name) // global 