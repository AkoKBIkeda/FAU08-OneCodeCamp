console.log("Hello World!");
// Single line comment
/* 
Multi-line 
comment 
*/

/*
let: mutable/changeable variables (block-scope)
var: mutable/changeable variables (blobal-scope)
const: unmutable/unchangeable
*/

let firstName = "Ako";
console.log("First name: ", firstName);
firstName = "Jane";
console.log("First name: ", firstName);

var lastName = "Doe";
console.log("Last name: ", lastName);
lastName = "Smith";
console.log("Last name: ", lastName);

const birthday = "01-04-1999";
console.log("Birthday: ", birthday);
//birthday = "02-04-2000";

if (true){
    // Group of statements
    var email = "janesmith@example.com";
    let username = "janesmith30";

    console.log("Email: ", email);
    console.log("Username: ", username);
}

// var variable (email) will be printed but not the let variable (username)
console.log("Email: ", email);
// console.log("Username: ", username);