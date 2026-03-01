// ================= JavaScript: setTimeout  =================


// setTimeout schedules a function to execute after a specified delay (in milliseconds).
// It is asynchronous: JS does NOT block execution while waiting.

// Syntax:
// setTimeout(callback, delay, ...args)

// Parameters:
// - callback → function to execute
// - delay → time in milliseconds to wait before execution
// - args → optional arguments passed to the callback


// Internal Behavior:
// 1. JS registers the callback with browser/Node timer API
// 2. Continues executing synchronous code
// 3. After delay, callback is queued in the Event Loop
// 4. Executes when call stack is empty



// ======================================================
// 1. Basic setTimeout
// ======================================================

// console.log("start ");

// setTimeout(() => {
//     console.log("Executed after 2 sec");
// }, 2000)

// console.log("End");

// Execution Flow:
// Start → End → (after 2s) Executed after 2 seconds
// Note: JS does not wait for setTimeout, it schedules the callback asynchronously




// ======================================================
// 2. Passing Arguments
// ======================================================

// console.log("start ");

// function greet(name) {
//     console.log(`Hello ${name}`);
// }
// setTimeout(greet, 2000, "Musawer")

// console.log("End");

// Output after 1s:
// Hello, Musawer

// Notes:
// Arguments after delay are passed directly to the callback






// ======================================================
// 3. Clearing Timeout
// ======================================================

// console.log("start ");

// let timeoutId = setTimeout((name) => {
//     console.log(`Hello ${name}`);
// }, 2000, "Musawer")

// console.log("End");

// clearTimeout(timeoutId);

// Notes:
// clearTimeout cancels scheduled timeout using the ID returned by setTimeout
// Professional use: cancel timers in dynamic UI updates or component unmounting







// ======================================================
// 4. Nested setTimeout (Recursive / Interval Alternative)
// ======================================================


console.log("Start");
let count = 0;
function repeatTask() {
    if (count < 3) {
        console.log("Repeat : ", count);
        count++;
    }
    setTimeout(repeatTask, 1000)
}
repeatTask()

// Output every 1s:
// Start
// Repeat: 0
// Repeat: 1
// Repeat: 2
// Notes:
// Recursive setTimeout is preferred over setInterval for better control and avoiding overlapping execution







// ======================================================
// 5. Important Notes & Common Mistakes
// ======================================================


// - Delay is minimum, actual execution may be longer if call stack is busy
// - Do not pass string to setTimeout (e.g., setTimeout("alert('Hi')", 1000)) → bad practice
// - Prefer arrow functions or named functions for readability
// - Always save ID if you may need to cancel timeout (clearTimeout)
// - Avoid using setTimeout for precise timing; it is approximate due to event loop
//
// Real-world usage:
// - Debouncing user input
// - Delayed notifications or messages
// - Simulated loading or animations

