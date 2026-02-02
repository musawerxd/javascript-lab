

// JS Dates  Notes 02/02/2026

// Creating a Date Object
console.log("\nCreating Date Objects in JavaScript");
// There are 4 ways to create a Date object:

// 1. new Date()
let date1 = new Date();
console.log(`\n1. new Date() : ${date1}`);
// This creates a Date object with the current date and time.

// 2. new Date(year, month, day, hours, minutes, seconds, milliseconds)
let date2 = new Date(2023, 0, 15, 10, 30, 0, 0);// January is month 0, 0-11
console.log(`\n2. new Date(year, month, day, hours, minutes, seconds, milliseconds) : ${date2}`);
// This creates a Date object with the specified date and time.

// 3. new Date(dateString)
let date3 = new Date("2023-01-15T10:30:00");
console.log(`\n3. new Date(dateString) : ${date3}`);
// This creates a Date object from a date string.

// 4. new Date(milliseconds)
let date4 = new Date(1673778600000);
console.log(`\n4. new Date(milliseconds) : ${date4}`);
// This creates a Date object from the number of milliseconds since January 1, 1970.




// Date Methods
console.log("\n\nDate Methods in JavaScript");
let sampleDate = new Date("2023-01-15T10:30:00");
console.log(`\nSample Date without using methods: ${sampleDate}`);
// Here are some commonly used Date methods:

// getFullYear()
console.log(`\n1. sampleDate.getFullYear(): ${sampleDate.getFullYear()}`); // 2023
// Returns the year (4 digits)

// getMonth()
console.log(`\n2. sampleDate.getMonth(): ${sampleDate.getMonth()}`); // 0 (January)
// Returns the month (0-11)

// getDate()
console.log(`\n3. sampleDate.getDate(): ${sampleDate.getDate()}`); // 15
// Returns the day of the month (1-31)

// getDay()
console.log(`\n4. sampleDate.getDay(): ${sampleDate.getDay()}`); // 0 (Sunday)
// Returns the day of the week (0-6) where 0 is Sunday

// getHours()
console.log(`\n4. sampleDate.getHours(): ${sampleDate.getHours()}`); // 10
// Returns the hour (0-23)

// getMinutes()
console.log(`\n5. sampleDate.getMinutes(): ${sampleDate.getMinutes()}`); // 30
// Returns the minutes (0-59)

// getSeconds()
console.log(`\n6. sampleDate.getSeconds(): ${sampleDate.getSeconds()}`); // 0
// Returns the seconds (0-59)

// getTime()
console.log(`\n7. sampleDate.getTime(): ${sampleDate.getTime()}`); // 1673778600000
// Returns the number of milliseconds since January 1, 1970 
// used for date calculations

// toDateString()
console.log(`\n8. sampleDate.toDateString(): ${sampleDate.toDateString()}`); // "Sun Jan 15 2023"
// Converts the date to a human-readable string

// toISOString()
console.log(`\n9. sampleDate.toISOString(): ${sampleDate.toISOString()}`); // "2023-01-15T10:30:00.000Z"
// Converts the date to ISO 8601 format, ISO 8601 is the international standard for representing dates and times set by the International Organization for Standardization (ISO)

// toLocaleDateString()
console.log(`\n10. sampleDate.toLocaleDateString(): ${sampleDate.toLocaleDateString()}`); // "1/15/2023" (format may vary based on locale), locale means a specific geographical, political, or cultural region.
// Converts the date to a string based on local conventions




// Setting Date Components
console.log("\n\nSetting Date Components in JavaScript");
let modDate = new Date("2023-01-15T10:30:00");
console.log(`\nOriginal Date: ${modDate}`);

// setFullYear()
modDate.setFullYear(2024);
console.log(`\n1. After modDate.setFullYear(2024): ${modDate}`); // Year changed to 2024

// setMonth()
modDate.setMonth(5); // June (0-11)
console.log(`\n2. After modDate.setMonth(5): ${modDate}`); // Month changed to June

// setDate()
modDate.setDate(20);
console.log(`\n3. After modDate.setDate(20): ${modDate}`); // Day changed to 20 

// setHours()
modDate.setHours(15);
console.log(`\n4. After modDate.setHours(15): ${modDate}`); // Hour changed to 15

// setMinutes()
modDate.setMinutes(45);
console.log(`\n5. After modDate.setMinutes(45): ${modDate}`); // Minutes changed to 45

// setSeconds()
modDate.setSeconds(30);
console.log(`\n6. After modDate.setSeconds(30): ${modDate}`); // Seconds changed to 30

// Note: Months are zero-indexed (0-11) in JavaScript Date objects.

console.log(`Date.now() returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC: ${Date.now()}`);
// Date.now() returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
// This is useful for measuring time intervals or timestamps. used in comparing dates.

