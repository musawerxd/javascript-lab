



// =================  Practice Questions (Loops & Array Methods) =================




// 1.
// Given an array of numbers, use a classic for loop to reverse the array
// WITHOUT using reverse(), and do it in-place (no extra array).

// console.log(`\n Solution 1 : `);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log("Arr : ", arr);

//METHOD 2 :
// for (let start = 0, end = arr.length - 1; start < end; start++, end--) {
//     let temp = arr[start]
//     arr[start] = arr[end]
//     arr[end] = temp
//     console.log(`..`);
// }

//METHOD 1 :
// for (let i = 0; i < arr.length / 2; i++) {
//     let temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i]
//     arr[arr.length - 1 - i] = temp
// }

// console.log("Arr after : ", arr);









// 2.
// Use do...while to repeatedly remove the last element of an array
// until the array length becomes less than 3.
// Ensure it runs at least once even if length is already < 3.
// console.log(`\n Solution 2 : `);

// let arr1 = [1, 2, 3, 4, 5]

// console.log("Arr1 : ", arr1)
// do {
//     let popped = arr1.pop()
//     console.log(`Popped ${popped}`)

// } while (arr1.length > 2)

// console.log("Arr1 : ", arr1, " Now array lenght is less than 3")




// 3.
// Using for...of, iterate over an array of strings and stop
// when you find the first string longer than 5 characters.
// Return that string.
// console.log(`\n Solution 3 : `);

// let arr2 = ["ali", "tahir", "hannan", "musawer"]

// for (let char of arr2) {
//     if (char.length > 5) {
//         console.log(` STOPPED! char "${char}" has more than 5 chahracters `)
//         break;
//     }
//     console.log(char);
// }









// 4.
// Using for...in, iterate over an object and create a new object
// that contains only keys whose values are numbers greater than 10.
// console.log(`\n Solution 4 : `);

// let obj = {
//     a: 1,
//     b: 5,
//     c: 9,
//     d: 14,
//     e: 45,
//     f: 87,
// }
// let newObj = {}
// console.log("obj : ", obj)
// console.log("newObj : ", newObj)

// for (let key in obj) {
//     if (typeof obj[key] === "number" && obj[key] > 10) { // cpmparing with string "number" cz typeof returns string
//         newObj[key] = obj[key]
//     }
// }
// console.log("newObj : ", newObj)









// 5.
// Given a nested array (2D array), use nested forEach()
// to calculate the total sum of all elements.
// console.log(`\n Solution 5 : `);

// let NestedArr = [[1, 2], [3, 4]]

// console.log(`Nested Arr : `, NestedArr)

// let sum = 0;

// NestedArr.forEach((val) => {
//     val.forEach((val) => {
//         sum += val
//     })
// })
// console.log(`Sum of `, NestedArr, ` is :  ${sum}`);









// 6.
// Given an array of numbers, use filter() to remove:
// - negative numbers
// - zero
// - numbers greater than 100
// Do it in ONE filter call.
// console.log(`\n Solution 6 : `);

// let numbers = [10, 20, 345, 0, 144, -1, -6, 50]

// let result = numbers.filter((val) => val > 0 && val <= 100)

// console.log(`Result : `, result);










// 8.
// Given an array of user objects,
// use map() to return a new array of objects
// where each object has an added property:
// isTeen: true if age between 13–19.
// console.log(`\n Solution 8 : `);

// let userObj = [
//     {
//         name: "musawer",
//         age: 19
//     },
//     {
//         name: "eman",
//         age: 20
//     },
//     {
//         name: "ilsa",
//         age: 18
//     },
//     {
//         name: "tahir",
//         age: 17
//     }
// ]

// console.log('userObj', userObj)

// let newUserObj = userObj.map((item) => ({ // ( { ... }) object literal, auto-returned
//     ...item,
//     isTeen: item.age >= 13 && item.age <= 19
// }))

// console.log('newUserObj', newUserObj)













// 9.
// Using reduce(), count how many times each letter appears
// in a given string (ignore spaces).
// console.log(`\n Solution 9 : `);

// let str = "hello world";

// console.log('str : ', str)

// let letterCount = str
//     .replace(/\s+/g, "") // remove spaces
//     .split("")           // split into letters
//     .reduce((acc, char) => {
//         acc[char] = (acc[char] || 0) + 1;
//         return acc;
//     }, {});

// console.log(letterCount);










// 10.
// Using reduce(), flatten a deeply nested array (one level only)
// without using flat().
// console.log(`\n Solution 10 : `);

// let deepNestedArr = [[1, 2], [3, 4, 5, 6], 7]
// console.log('deepNestedArr ', deepNestedArr);

// let flatArr = deepNestedArr.reduce((acc, curr) => {
//     return acc.concat(curr);
// }, [])
// console.log('flatArr : ', flatArr)










// 11.
// Using chaining (filter → map → reduce):
// From an array of numbers,
// keep only even numbers,
// square them,
// then return the total sum.
// console.log(`\n Solution 11 : `);

// let NumbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let result = NumbersArr.filter((val) => { return val % 2 == 0 })
//     .map((val) => { return val * val })
//     .reduce((acc, curr) => { return acc + curr });

// console.log('result', result)










// 12.
// Given an array of transactions:
// { amount: number, type: "credit" | "debit" }
// Use reduce() to calculate final balance.
// console.log(`\n Solution 12 : `);

// let transactions = [
//     {
//         amount: 10000,
//         type: "credit"
//     },
//     {
//         amount: 20000,
//         type: "credit"
//     },
//     {
//         amount: 15000,
//         type: "debit"
//     },
//     {
//         amount: 700,
//         type: "debit"
//     },
// ]

// let totalAmount = transactions.reduce((acc, item) => {
//     if (item.type == "credit") {
//         return acc + item.amount
//     }
//     else if (item.type == "debit") {
//         return acc - item.amount
//     }
//     else {
//         return acc
//     }
// }, 0)

// console.log(`totalAmount : `, totalAmount);













// 13.
// Using for...of, iterate over a Map object
// and return an array of keys whose values are strings.
// console.log(`\n Solution 13 : `);

// let map = new Map([
//     ["a", 1],
//     ["b", "banana"],
//     ["c", 4],
//     ["d", 12],
// ])

// console.log(map);

// let newArr = [];

// // for (let val of map) {
// //     if (typeof val[1] === "string")
// //         newArr.push(val[0])
// // }
// for (let [key, val] of map) {
//     if (typeof val === "string")
//         newArr.push(key)
// }
// console.log('newArr', newArr)












// 14.
// Using forEach(), modify an array so that:
// - every even index value is multiplied by 2
// - every odd index value is multiplied by 3
// Do it without creating a new array.
// console.log(`\n Solution 14 : `);

// let arr = [1, 2, 3, 4, 5]

// console.log('arr : ', arr)

// arr.forEach((val, ind, arr) => {
//     arr[ind] = arr[ind] % 2 == 0 ? val * 2 : val * 3;
// })

// console.log('arr : ', arr)












// 15.
// Given an array with duplicate numbers,
// use reduce() to return an array of unique values
// (without using Set).
// console.log(`\n Solution 15 : `);


// let duplicatedArr = [1, 2, 3, 4, 5, 1, 2, 3, 1, 2]

// console.log('duplicatedArr : ', duplicatedArr)

// let Uniquearr = duplicatedArr.reduce((acc, curr) => {
//     if (!acc.includes(curr)) {
//         acc.push(curr)
//     }
//     return acc

// }, [])

// console.log(Uniquearr);











// 16.
// Using while loop,
// generate Fibonacci sequence up to 10 elements.
// Store results in an array.
// console.log(`\n Solution 16 : `);

// let fib = [0, 1]
// let i = 2;
// let n = 10;

// while (i < n) {
//     fib[i] = fib[i - 1] + fib[i - 2]
//     i++;
// }
// console.log("Fib : ", fib);









// 17.
// Using classic for loop,
// iterate backward through an array
// and remove all odd numbers safely
// without skipping elements.
// console.log(`\n Solution 9 : `);


// let num = [1, 2, 3, 4, 5]
// console.log('num', num)

// for (let i = num.length - 1; i >= 0; i--) {
//     if (num[i] % 2 != 0) {
//         num.splice(i, 1)
//     }
// }
// console.log('num', num)












// 18.
// Given an object containing nested objects,
// use for...in to calculate total sum
// of all numeric values at first level only.
// console.log(`\n Solution 9 : `);

// let NestedObj = {
//     a: 20,
//     b: 10,
//     c: {
//         d: 20,
//         e: 30
//     },
//     f: 20
// }

// let sum = 0;

// for (let key in NestedObj) {
//     if (typeof NestedObj[key] === "number") {
//         sum += NestedObj[key]
//     }
// }
// console.log('sum', sum)






// 19.
// Using chaining,
// from an array of strings:
// - remove empty strings
// - convert remaining to uppercase
// - sort alphabetically
// - return first 3 results
// console.log(`\n Solution 19 : `);

// let arr = ["Hello", "my", "", "name", "is", "Musawer"]

// console.log('arr : ', arr)

// let result = arr.filter((val) => val != "")
//     .map((val) => val.toUpperCase())
//     .sort()
//     .slice(0, 3)
// console.log(result);














// 20.
// Given an array of numbers,
// use reduce() to determine
// whether ALL numbers are positive
// without using every().
console.log(`\n Solution 20 : `);

let arr = [1, 2, 3, 4, 5]

let result = arr.reduce((acc, curr) => {

    return acc && curr > 0

}, true)

console.log('result : ', result)
