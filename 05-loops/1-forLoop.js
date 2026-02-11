




//JS for loop notes 02/11/2026





// for loop is used when we know
// how many times code should run

// Syntax:
// for (initialization; condition; increment) {
//     code
// }






// 1. Basic for loop
console.log(`\n 1. Basic for loop`)

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0 1 2 3 4






// 2. Reverse loop
console.log(`\n 2. Reverse loop`)

for (let i = 5; i >= 1; i--) {
    console.log(i);
}
// 5 4 3 2 1






// 3. Loop through array
console.log(`\n 3. Loop through array`)

let arr = ["JS", "Python", "C++"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}






// 4. break statement
console.log(`\n 4. break statement`)

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;   // stops loop completely
    }
    console.log(i);
}






// 5. continue statement
console.log(`\n 5. continue statement`)

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;  // skip this iteration
    }
    console.log(i);
}






// 6. Nested for loop
console.log(`\n 6. Nested for loop`)

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(i, j);
    }
}






// 7. Common Patterns
console.log(`\n 7. Common Patterns`)

// Sum of numbers
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum); // 15






// 8. Important Notes
console.log(`\n 8. Important Notes`)

// - use for when count is known
// - avoid infinite loop
// - i++ is same as i = i + 1
// - break exits loop
// - continue skips iteration
