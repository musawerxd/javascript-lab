




// JS IIFE (Imediately Invoked Function Expression) Notes 07/02/2026



// 1. Syntax
console.log(`\n Syntax`);
(function () {
    console.log("Imediately Invoked! no call is needed");
})();





// 2. With Parameters
console.log(`\n 2. With Parameters`);
(function (name) {
    console.log(`Hello ${name}`)
})("Ali");





// 3. Arrow IIFE
console.log(`\n 3. Arrow IIFE`);
(() => {
    console.log("Arrow IIFE!");
})();





// 4. can be Named
console.log(`\n4. can be Named`);
(function greet() {
    console.log("salam");
})();

// greet(); // error , because IIFE cannot be called, runs just for once 





// Interesting
console.log(`\n Interesting`);
function imediate() { console.log("i ran imediate") }
imediate() //then why IIFE
//Because IIFE runs instantly like a normal call,
// but unlike a normal function it doesn’t stay in memory or pollute global scope.