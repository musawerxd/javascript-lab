// ================= JavaScript: async / await =================


// async/await is syntactic sugar built on top of Promises.
// It allows writing asynchronous code in a synchronous-looking style.

// Important:
// async/await DOES NOT make code synchronous.
// It only pauses execution inside the async function.

// Internally:
// - async function ALWAYS returns a Promise.
// - await pauses execution of that async function.
// - await works only with Promises.
// - After await, execution continues via microtask queue.




// ======================================================
// 1. async Function Basics
// ======================================================


// async function greet() {
//     return "hello";
// }

// const func = greet();
// console.log(func); // returns a Promise { 'hello' }

// Output:
// Promise { "Hello" }
//
// Explanation:
// Even though we returned a string,
// async automatically wraps it inside Promise.resolve("Hello").
//
// Internally:
// async function → returns Promise.resolve(returnValue)





// ======================================================
// 2. await with a Promise
// ======================================================

// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data Fetched!")
//         }, 2000)
//     })
// }

// async function loadData() {
//     console.log("Start");

//     const data = await fetchData();
//     console.log(data);

//     console.log("End");
// }

// loadData();
// console.log("Calling after loadData()");

// Execution Flow:
// Start
// Calling after loadData()
// (2 seconds delay)
// Data received
// End
//
// Explanation:
// await pauses only loadData() function.
// It does NOT block the entire JavaScript thread.





// ======================================================
// 3. How await Works Internally
// ======================================================

// 1. Waits for Promise to settle.
// 2. If fulfilled → returns resolved value.
// 3. If rejected → throws error.
// 4. Execution resumes in microtask queue.

// Important:
// await always yields control back to event loop.
// It splits function execution into two phases.





// ======================================================
// 4. Error Handling with try/catch
// ======================================================

// function fetchDataWithError() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Something went wrong")
//         }, 2000)
//     })
// }

// async function loadDataWithError() {
//     console.log("start");
//     try {
//         const data = await fetchDataWithError();
//         console.log(data);
//     }
//     catch (err) {
//         console.log("Error : ", err);
//     }
//     console.log("End");
// }

// loadDataWithError();
// console.log("Called After loadDataWithError");

// Explanation:
// await converts rejected Promise into thrown error.
// try/catch handles it like synchronous error.






// ======================================================
// 5. Multiple await Calls (Sequential)
// ======================================================

// async function multipleAwait() {
//     const a = await Promise.resolve(2)
//     const b = await Promise.resolve(6)

//     console.log(a + b);
// }

// multipleAwait();


// Note:
// Second await waits for first to complete.
// This is sequential execution.







// ======================================================
// 6. Parallel Execution with Promise.all (Professional Pattern)
// ======================================================

// async function parallelExecution() {
//     const promiseA = Promise.resolve(10)
//     const promiseB = Promise.resolve(30)

//     const [a, b] = await Promise.all([
//         promiseA, promiseB
//     ])
//     console.log(a + b);
// }

// parallelExecution()

// Important:
// If tasks are independent, start them first,
// then await together using Promise.all().
//
// This improves performance.









// ======================================================
// 7. await with Non-Promise Values
// ======================================================


console.log("start");
async function awaitWithNonPromise() {
    const data = await 100;
    console.log(data);
}
awaitWithNonPromise()

console.log("End");

// start
// End
// 100

// Explanation:
// await automatically wraps non-promise values
// into Promise.resolve(value).





// ======================================================
// 8. Common Mistakes
// ======================================================

// 1. Using await outside async function → SyntaxError.
//
// 2. Forgetting try/catch → unhandled rejection.
//
// 3. Sequential awaits when tasks could run in parallel.
//
// 4. Forgetting async keyword.
//
// Wrong:
// function test() {
//     await fetchData(); // Error
// }
//
// Correct:
// async function test() {
//     await fetchData();
// }







// ======================================================
// 9. Top-Level await (Modern ES Modules)
// ======================================================
//
// In ES modules (type="module"), you can use await at top level.
//
// Example:
//
// const response = await fetch("/api");
// const data = await response.json();
//
// Note:
// Works only inside ES modules, not classic scripts.





// ======================================================
// 10.  Summary
// ======================================================
//
// async:
// - Makes function return Promise.
// - Automatically wraps return values.
//
// await:
// - Pauses async function until Promise settles.
// - Returns resolved value.
// - Throws if rejected.
//
// Execution Model:
//
// Call async function
// ↓
// Runs until first await
// ↓
// Returns Promise immediately
// ↓
// When awaited Promise resolves
// ↓
// Resumes function via microtask queue
//
// Key Understanding:
//
// async/await is built on Promises.
// It improves readability.
// It does not change JavaScript's single-threaded model.