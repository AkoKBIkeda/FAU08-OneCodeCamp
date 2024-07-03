// Operators and Expressions

// 1. Arithmetic Operators
let num1 = 10;
let num2 = 5;

console.log("Addition: ", num1 + num2);
console.log("Subtraction: ", num1 - num2);
console.log("Subtraction: ", num2 - num1);
console.log("Multiplication: ", num1 * num2);
console.log("Division: ", num1 / num2);
console.log("Division: ", num1 / 0);
console.log("Exponent: ", num1 ** num2);
console.log("Remainder(Modulus): ", num1 % 6);

// Order of Operations
// PEMDAS / BODMAS
// PEMDAS --> (), **, MD = left to rigth
let answer = 3 + 4 * (5-2) ** 2/2;
console.log("Answer: ", answer);

// 2. String Expression or Concatenation
console.log("Hello"+" "+"World");

let firstName = "John";
let greeting = "Hello";
console.log(greeting + " " + firstName);

// 3. Comparison Operators
// ==: Check if the two values are the same with type coercion (looser)
console.log("Equal to == : ", 5 == 5);
console.log("Equal to == (with type coercion): ", 5 == '5');

// !=: Check if the two values are not equal
console.log("Equal to != : ", 5 != 5);
console.log("Equal to != (with type coercion): ", 5 != '5');

// ===: Check if the two values and data type are the same
console.log("Strict Equal to === : ", 5 === 5);
console.log("Strict Equal to === (with type coercion): ", 5 === '5');

// !==: Check if the two values are not equal
console.log("Equal to !== : ", 5 !== 5);
console.log("Equal to !== (with type coercion): ", 5 !== '5');

// VSC tip: Alt + (selection), will allow us to work on the multiple areas at the same time!!! (add '=' to 5 places etc.)

console.log("Greater than: ", 5 > 3);
console.log("Less then: ", 5 < 3);
console.log("Greater than or equal to: ", 5 >= 6);
console.log("Less than or equal to: ", 5 <= 3);

// 4. Logical Operators
// AND && : Amphersand
// OR || : Pipes
// NOT ! 
/*
| A     | B     | NOT A | A AND B | A OR B |

|-------|-------|-------|---------|--------|

| true  | true  | false | true    | true   |

| true  | false | false | false   | true   |

| false | true  | true  | false   | true   |

| false | false | true  | false   | false  |
*/ 

let sunny = true;
let warm = true;

("sunny = true, warm = true");
console.log("Is it sunny AND warm?", sunny && warm);
console.log("Is it sunny OR warm?", sunny || warm);
console.log("Is it NOT sunny?", !sunny);

// 5. Assignment Expression

let num3 = 10;
let num4 = 5;

// Addition Assignment (+=)
num3 += num4;
console.log("The value of num3 is: ", num3);
// Computation: 10 + 5 = 15

// Subtraction Assignment (-=)
num3 -= num4;
console.log("The value of num3 is: ", num3);
// Computation: 15 - 5 = 10

// Multiplication Assignment (*=)
num3 *= num4;
console.log("The value of num3 is: ", num3);
// Computation: 10 * 5 = 50

// Division Assignment (/=)
num3 /= num4;
console.log("The value of num3 is: ", num3);
// Computation: 50 / 5 = 10
