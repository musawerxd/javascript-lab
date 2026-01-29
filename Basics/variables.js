

// JS Variables Notes 1/29/2026
"use strict"; ///treatss all code as newer version of JS
//e.g:
// anything = 5; 
// // This will throw an error in "use strict"; mode 
// if "use strict"; is not used then it will create a global variable.

// Constants: never change
const accountPassword = "mypassword123";

// Let: can change, block scoped
let accountEmail = "mygmail@gmail.com";
let accountState; // empty for now
let accountCity = "Burewala"; // proper declaration

// Var: old-school, function scoped, avoid if possible
var accountName = "Musawer";

// Updating stuff
accountEmail = "hc@hc.com";
accountCity = "Bengaluru";

// Logging
console.log(accountName);
console.table([accountName, accountEmail, accountPassword, accountCity, accountState]);
// It displays data in a tabular format.

/* Notes:
- Prefer let/const, avoid var
- const = never change, let = can change
- No accidental globals!
*/
