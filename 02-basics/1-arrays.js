

// JS Array  Notes 04/02/2026



// Creating Arrays
console.log("\nCreating Arrays in JavaScript");
// There are several ways to create an array in JavaScript:

// 1. Using Array Literal
let arr1 = [1, 2, 3, 4, 5];
console.log(`\n1. Using Array Literal : ${arr1}`);
console.log(typeof arr1);//
// This creates an array with the specified elements.

// 2. Using Array Constructor
let arr2 = new Array(6, 7, 8, 9, 10);
console.log(`\n2. Using Array Constructor : ${arr2}`);
// This creates an array with the specified elements.

// 3. Using Array.of()
let arr3 = Array.of(11, 12, 13, 14, 15);
console.log(`\n3. Using Array.of() : ${arr3}`);
// This creates an array with the specified elements. 

// 4. Using Array.from()
let str = "Hello";
let arr4 = Array.from(str);
console.log(`\n4. Using Array.from() : ${arr4}`);
// This creates an array from an iterable object (like a string).
//Difference Between Array.of and Array.from is that Array.of creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments, while Array.from creates a new Array instance from an array-like or iterable object.


// Difference Between them is that Array Literal and Array.of() create arrays with the provided elements directly, while Array Constructor can also create arrays of a specified length if a single numeric argument is provided. Array.from() creates an array from an iterable or array-like object.
// mostly used is Array Literal [] and in production mostly used is Array.of() and Array.from() rarely used.





// Array Methods
console.log("\n\nArray Methods in JavaScript");
let sampleArray = [10, 20, 30, 40, 50];
console.log(`\nSample Array without using methods: ${sampleArray}`);
// Here are some commonly used Array methods:

// push()
sampleArray.push(60); // reflects in original array, need to provide value to add
console.log(`\n1. After sampleArray.push(60): ${sampleArray}`);
// Adds one or more elements to the end of an array
// one more point that is 
let arr01 = ["musawer", "abdullah", "tahir"]
let arr02 = ["musawer", "abdullah", "tahir"]
arr01.push(arr02) // reflects on orignal array that will be arr01
console.log(arr01); //it will put one array into another array and returns new arry and also reflect on orignal array
// to prevent this from happening, we can use two diff method that are:
// first
let arr03 = ["musawer", "abdullah", "tahir"]
let arr04 = ["musawer", "abdullah", "tahir"]
let arr05 = arr03.concat(arr04) // storing on new variable because it does not reflect on orignal array, just returns
console.log("arr05", arr05)
//second (spread operator)
let arr06 = ["musawer", "abdullah", "tahir"]
let arr07 = ["musawer", "abdullah", "tahir"]
let arr08 = [...arr06, ...arr07] // storing on new variable because it does not reflect on orignal array, just returns new arary, oe benefit of this is that we can manipulate as many we want in method. 
console.log("arr08", arr08)

// pop()
let poppedValue = sampleArray.pop(); // reflects in original array, no need to provide value to remove
console.log(`\n2. After sampleArray.pop(): ${sampleArray}, Popped Value: ${poppedValue}`);
// Removes the last element from an array and returns that element

// unshift()
sampleArray.unshift(5)
console.log(`\n3. After sampleArray.unShift(5): ${sampleArray}`);
// Adds one or more elements to the Start of an array

// shift()
console.log(`\n4. Before sampleArray.Shift(): ${sampleArray}`)
sampleArray.shift()
console.log(` After sampleArray.Shift(): ${sampleArray}`);
// Remove one element from the Start of an array

// slice()
let newSampleArr = sampleArray.slice(0, 2)
console.log(`\n5. After sampleArray.slice(0,2): \n SampleArray: ${sampleArray} \n newSampleArr: ${newSampleArr}`); // does not reflect on orignal array, only return new array
// return new array of specified indexes , end is Exclusive 

// slice()
let newSampleArrAgain = sampleArray.splice(0, 2)
console.log(`\n6. After sampleArray.splice(0,2): \n SampleArray: ${sampleArray} \n newSampleArr: ${newSampleArrAgain}`); // reflects on orignal array,and return the poped out elements
//  INTERVIEW TRICKY QUESTION
// Change the orignal array! pop the specified indexes and return new array as well

// indexOf()
let indexArr = [10, 40, 20, 100]
console.log(`\n7. After indexArr.indexOf(20): ${indexArr.indexOf(40)}`) // returns 1
console.log(` After indexArr.indexOf(20): ${indexArr.indexOf(60)}`) // returns -1, when value not found
//Returns the Index of specfied element

//includes()
let includeArr = [1, 2, 3, 4, 5]
console.log(`\n7. After includeArr.includes(20): ${includeArr.includes(1)}`) // returns true
console.log(` After includeArr.includes(20): ${includeArr.includes(60)}`) // returns false, when value not found
//Returns the Boolean True/False after checking if the asked element exists in the array


// join()
let joinArr1 = ["musawer", "is", "learning", "JS"];// arry can take any data 
//eg:
// let anyArr = ["musawer", 1, false , "hehe"]
console.log("\n8. joinArr1 without .join() : ", joinArr1); // still array 
console.log("joinArr1 with .join() : ", joinArr1.join());// returns string from array, does not reflect on orignal array
console.log("joinArr1 with .join(\" \") : ", joinArr1.join(" ")); // removes comma and add spaces
console.log("joinArr1 with .join(\"-\") : ", joinArr1.join("-")); // removes comma and add dash
console.log("joinArr1 with .join(\"-\") : ", joinArr1.join("-")); // removes comma and add dash
//join() internally calls .toString() on each element, and return string as whole from array 

let arrF = [1, 2, 3, [4, 5, 6], 8, [11, 213, 3]] // arrays within an array
console.log("arrF = ", arrF);
// to to make this as one array we use method flat()
let arrFlat = arrF.flat(Infinity) // we need to provide depth to this method as i provided infinity here 
console.log("arrFlat = ", arrFlat);

console.log("Array.isArray(\"Musawer\") : ", Array.isArray("Musawer")) // false 
console.log("Array.isArray([1, 2, 3, 4, 5]) : ", Array.isArray([1, 2, 3, 4, 5])) // true
// this method tells if the data is Array or not 









