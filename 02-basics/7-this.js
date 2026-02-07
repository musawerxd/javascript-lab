






// JS Arrow Function Notes 07/02/2026

// this = who called the function






// 1. In Normal Object Method
console.log(`\n 1. In Normal Object Method`)

const user1 = {
    username: "musawerxd",
    mail: "musaawer@google.com",
    introduce: function () {
        console.log(`username: ${this.username} email: ${this.mail}`)
    }
}

user1.introduce(); //this = object before the dot, which is user1






// 2. In Regular Function
console.log(`\n 2. In Regular Function`)

function test() {
    console.log(this)
}
test()
// Browser → window
// Node → global
// Strict mode → undefined

function test2(name) {
    console.log(this.name) //undefined
}
test2("Musawer")






// 3. Arrow Function & this
console.log(`\n 3. Arrow Function & this`)
const userN = {
    name: "ali",
    normal: function () {
        console.log(this.name)
    },
    arrow: () => {
        console.log(this.name)
    }
}
userN.normal() // ali
userN.arrow() // undefined 


// this works normal normal function , objects etc 
//  this does NOT work in arrow functions
