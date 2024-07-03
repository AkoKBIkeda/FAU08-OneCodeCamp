// Control Flow Structures

// 1. Conditional Statement (if, else if, else)
let temp = 10;

if (temp < 0){
    // less than 0
    console.log("It's freezing.");
} else if (temp >= 0 && temp < 20) {
    // 0 to 19
    console.log("It's cool outside.")
} else if (temp >= 20 && temp < 30){
    // 20 to 29
    console.log("It's warm outside.");
} else {
    console.log("It's hot outside.");
}

// 2. Conditional Statement (switch-case statement)
let day = "Sunday";

switch(day){
    case "Monday":
        console.log("It's the start of the week!");
        break; // if this is forgot, the next statement will be run, too!
    case "Friday":
        console.log("Happy Friday! :)");
        break;
    default:
        console.log("It's a regular happy day :)");
}

// 3. Looping Statements
// for loop
// 1: Variable Initialization, 2: Condition Expression, 3: Increment/Decrement
for (let i = 1; i <=5; i++){
    console.log("For loop count: ", i);
}

// while loop
let count = 1;
while (count <=5){
    console.log("Whilte loop count: ", count);
    count++;
}

// do-while loop
let counter = 1;
do {
    console.log("Do-While loop count: ", counter);
    counter++;
} while (counter <= 5);
