





//JS for loop notes 02/11/2026





// while loop runs as long as condition is true
// used when number of iterations is NOT known

// Syntax:
// while (condition) {
//     code
//     increment / update
// }






// 1. Basic while loop
console.log(`\n 1. Basic while loop`)

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
// Output: 1 2 3 4 5






// 2. Important: update is manual
console.log(`\n 2. Important: update is manual`)
let x = 0;

while (x < 3) {
    console.log("Hello");
    x++;            // without this -> infinite loop
}






// 3. Infinite loop example (danger)
console.log(`\n 3. Infinite loop example (danger)`)
// while (true) {
//     console.log("runs forever");
// }






// 4. Using break in while
console.log(`\n 4. Using break in while`)
let n = 1;

while (n <= 10) {
    if (n === 5) {
        break;      // stop loop completely
    }
    console.log(n);
    n++;
}






// 5. Using continue
console.log(`\n 5. Using continue`)
let m = 0;

while (m < 5) {
    m++;

    if (m === 3) {
        continue;   // skip iteration 3
    }

    console.log(m);
}






// 6. Real use cases
console.log(`\n 6. Real use cases`)
// Reading data until condition met
let password = "";

while (password !== "123") {
    console.log("ask user again");
    password = "123";   // example
}






// 7. Loop through array
console.log(`\n 7. Loop through array`)
let arr = [10, 20, 30];
let index = 0;

while (index < arr.length) {
    console.log(arr[index]);
    index++;
}






// 8. Nested while 
console.log(`\n 8. Nested while `)
let ind = 1;

while (ind <= 3) {

    let j = 1;

    while (j <= 2) {
        console.log("i =", ind, "j =", j);
        j++;
    }

    ind++;
}






// 9. Difference from for loop
console.log(`\n 9. Difference from for loop`)
// for  -> when count is known
// while -> when condition based






// 10. Important Rules
console.log(`\n 10. Important Rules`)
// - always ensure condition becomes false
// - update variable inside loop
// - prefer for loop when iteration count known
// - use while for event / condition based logic
// - avoid while(true) unless break exists



