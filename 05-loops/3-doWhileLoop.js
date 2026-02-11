




//JS Do While loop notes 02/11/2026


// ================= do–while Loop in JavaScript =================

// do–while runs the code AT LEAST once
// even if condition is false

// Syntax:
// do {
//     code
// } while (condition);








// 1. Basic Example
console.log(`\n 1. Basic Example`)

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

// Output: 1 2 3 4 5








// 2. Difference from while
console.log(`\n 2. Difference from while`)

let x = 10;

do {
    console.log("Runs once even if false");
} while (x < 5);

// while would not run at all
// do–while runs first then checks








// 3. With break
console.log(`\n 3. With break`)

let n = 1;

do {
    if (n === 3) {
        break;       // stop loop
    }

    console.log(n);
    n++;

} while (n <= 5);








// 4. With continue
console.log(`\n 4. With continue`)

let m = 0;

do {
    m++;

    if (m === 2) {
        continue;    // skip iteration
    }

    console.log(m);

} while (m < 4);








// 5. Real Use Case
console.log(`\n 5. Real Use Case`)

let password;

do {
    console.log("Ask user for password");
    password = "123";   // example input
} while (password !== "123");








// 6. Basic Nested do–while
console.log(`\n 6. Basic Nested do–while`)

let a = 1;

do {

    let b = 1;

    do {
        console.log("a =", a, "b =", b);
        b++;
    } while (b <= 3);

    a++;

} while (a <= 2);









// 7. Table Style Example
console.log(`\n 7. Table Style Example`)

let row = 1;

do {

    let col = 1;

    do {
        console.log(row + " x " + col + " = " + row * col);
        col++;
    } while (col <= 5);

    console.log("------------");
    row++;

} while (row <= 3);









// 8. Important Notes
console.log(`\n 8. Important Notes`)

// - outer loop controls main iterations
// - inner loop completes fully for each outer round
// - break affects nearest do–while only
// - must update BOTH variables manually
// - easy to create infinite loops if counters missed
