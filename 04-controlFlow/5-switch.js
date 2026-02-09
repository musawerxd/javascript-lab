



// JS switch notes 02/08/2026


// switch is used when we have many exact value matches
// better than long if–else chains for equality checks



// 1. Basic switch 
console.log(`\n 1. Basic switch `)

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input!");
}

// break stops execution after match
// without break -> all will be executed after exact value







// 2. without break example
console.log(`\n 2. without break example`)

let day2 = 2;

switch (day2) {
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thursday");
    case 5:
        console.log("Friday");
    case 6:
        console.log("Saturday");
    case 7:
        console.log("Sunday");
    default:
        console.log("Invalid input!");
}
//except defualt , everything will be executed








// 3. switch with expressions
console.log(`\n 3. switch with expressions`)

let marks = 75;

switch (true) {
    case marks >= 80:
        console.log("Grade A");
        break;

    case marks >= 70:
        console.log("Grade B");
        break;

    default:
        console.log("Grade C");
}





// 4. Important Rules
console.log(`\n 4. Important Rules`)

// - switch uses strict comparison (===)
// - break is required to stop next cases
// - default is optional but recommended
// - good for exact value matching
// - not good for complex ranges