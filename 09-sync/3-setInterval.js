// ================= JavaScript: setInterval =================


// setInterval schedules a function to run repeatedly at a fixed interval (in milliseconds).
// It is asynchronous: JS schedules callbacks without blocking execution.

// Syntax:
// setInterval(callback, delay, ...args)

// Parameters:
// - callback → function to execute repeatedly
// - delay → time in milliseconds between executions
// - args → optional arguments passed to the callback

// Internal Behavior:
// 1. JS registers the callback with browser/Node timer API
// 2. Continues executing synchronous code
// 3. After delay, callback is queued in Event Loop repeatedly
// 4. Executes only when call stack is empty





// ======================================================
// 1. Basic setInterval
// ======================================================

// console.log("Start Interval");

// let intervalId = setInterval(() => {
//     console.log("Execute every 1 sec");
// }, 1000);

// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("Interval Cleared");
// }, 5000)


// Execution Flow:
// Start Interval → 1s → Executed every 1 second → 2s → Executed every 1 second ... → 5s → Interval cleared
// Note: Each callback waits until call stack is empty before execution, so exact timing may vary




// ======================================================
// 2. Passing Arguments
// ======================================================


// console.log("Start Interval");


// let counter = 1;
// function repeatMessage(msg) {
//     console.log(`${counter++} : ${msg}`);
// }


// let intervalId = setInterval(repeatMessage, 1000, "wassssup");

// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("Interval Cleared!");
// }, 5000)
// Notes:
// Arguments after delay are passed directly to callback
// Be careful: if counter++ is outside callback, it won’t update properly each interval






// ======================================================
// 3. Nested setInterval Control (Professional Pattern)
// ======================================================

console.log("Start Interval");

let executionCount = 0;

const controlledInterval = setInterval(() => {
    console.log("Controlled Interval Execution : ", executionCount);
    executionCount++;
    if (executionCount >= 4) {
        clearInterval(controlledInterval);
        console.log("Controlled Interval stopped after 4 executions");
    }
}, 1000)

// Notes:
// Important practice:
// - Always clearInterval to avoid memory leaks
// - Use counters or conditions to stop intervals
// - Avoid setInterval for heavy tasks; prefer recursive setTimeout for precision




// ======================================================
// 4. Important Notes & Common Mistakes
// ======================================================
//
// - setInterval does not guarantee precise timing; delays can accumulate if callback takes long
// - If callback duration > interval, execution may be delayed (callbacks queue up)
// - clearInterval is mandatory when you want to stop repeating tasks
// - Prefer setTimeout recursion if precise control over timing is required
//
// Real-world usage:
// - Clock updates
// - Polling APIs
// - Animations or game loops (with caution)
// - Repeating reminders or notifications