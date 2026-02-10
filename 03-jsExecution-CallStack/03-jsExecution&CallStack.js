// ================= JavaScript Execution & Call Stack =================

// 1. How JavaScript Executes Code
// JavaScript executes code in two main phases:
//
// A. Creation Phase (Memory Phase)
// - Global Execution Context is created
// - Variables declared with var -> initialized as undefined
// - let/const -> hoisted but kept in Temporal Dead Zone (TDZ)
// - Function declarations -> fully hoisted with body
//
// B. Execution Phase
// - Code runs line by line
// - Values are assigned to variables
// - Functions are invoked and added to Call Stack


// 2. What is Call Stack
// - Call stack is a mechanism to track function execution
// - Works on LIFO principle (Last In First Out)
// - Every function call creates a new Execution Context
// - When function ends, its context is removed from stack


// ---------------- Example 1: Basic Call Stack ----------------

function first() {
    console.log("first");
}

function second() {
    console.log("second");
}

console.log("start");
first();
second();
console.log("end");

// Execution Order:
// 1. Global context created
// 2. "start" printed
// 3. first() pushed to stack -> executed -> popped
// 4. second() pushed to stack -> executed -> popped
// 5. "end" printed
// 6. Global context removed


// ---------------- Example 2: Nested Functions ----------------

function a() {
    console.log("Inside a");
    b();
}

function b() {
    console.log("Inside b");
    c();
}

function c() {
    console.log("Inside c");
}

a();

// Call Stack Flow:
// Global -> a() -> b() -> c()
// After c finishes -> b -> a -> global


// ---------------- Example 3: Hoisting Behavior ----------------

sayHi();

function sayHi() {
    console.log("Hello World");
}

// Works because function declaration is fully hoisted
// During creation phase engine already knows about sayHi


// ---------------- Example 4: TDZ with let ----------------

// console.log(x); // ReferenceError - TDZ
let x = 10;

// let/const are hoisted but inaccessible until initialized


// 3. Execution Context Contains:
//
// - Variable Environment (variables & functions)
// - Scope Chain (lexical lookup rules)
// - this Binding (context of execution)


// 4. Core Rules to Remember
//
// - JavaScript is single-threaded
// - One function executes at a time
// - Each function gets its own execution context
// - Call stack tracks active functions
// - Hoisting happens before execution
// - var -> undefined, let/const -> TDZ
// - Function declarations -> fully hoisted
// - Function expressions -> not hoisted


// 5. Professional Summary
//
// JavaScript first prepares memory for code (creation phase),
// then executes line by line (execution phase). Every function
// call creates a new execution context that is managed through
// the call stack using LIFO order. When a function completes,
// its context is removed and control returns to previous context.
