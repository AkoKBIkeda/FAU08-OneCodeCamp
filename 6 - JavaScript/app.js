// Functions:
// Reusable block of code that we can run whenever we need it.

// set a function
function greet(){
    console.log("Hello and welcome to World of Functions!");
    console.log("Let's gooooooo :)");
}

// call the function
greet();
greet();
greet();

// Functions with paremeters
// Arguments: values that we pass to a function's parameter(s)
function sum (num1, num2){
    num1 + num2;
    console.log("...");
    return num1 + num2;
}

console.log("Calling Sum: ", sum(7, 9)); // 7 & 9 are the arguments
console.log("Calling Sum: ", sum(7, 14));
