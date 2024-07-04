//Array and Array Methods
// Array - allows us to store multiple values in a single variable

// Create an Array
let fruits = ["Apple", "Banana", "Orange", "Mango"]
console.log(fruits);

/* Result in Console
Array(4)
0: "Apple"
1: "Banana"
2: "Orange"
3: "Manog"
length: 4
*/
// Array's index starts from 0 = 0 distance from the starting point (Zero-based indexing)

console.log("First fruit: ", fruits[0]);
console.log("Second fruit: ", fruits[1]);
console.log("Third fruit: ", fruits[2]);
console.log("Fourth fruit: ", fruits[3]);
console.log("Fifth fruit: ", fruits[4]);

// Getting the last element of the array (length -1)
console.log("Last fruit: ", fruits[fruits.length - 1]);

// Modifying/Updating Array Indexes
fruits[1] = "Grapes";
console.log(fruits);

// Add another element (push())
fruits.push("Kiwi", "Strawberry");
console.log(fruits);

// Remove the last element (pop())
console.log(fruits.pop());
console.log(fruits);

// Remove the specific element (splice())
// splice (index, count)
fruits.splice(2, 1); // (index2, 1 element) 
console.log(fruits);

// For loops with arrays
let numbers = [1,2,3,4,5]

for (let i=0; i < numbers.length; i++){
    console.log("Number "+ (i+1) + ": ", numbers[i]);
}

for (let i=0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// foreach loop
let colours = ["red", "green", "blue"]
colours.forEach(function (color){
    console.log(color);
})

fruits.forEach(function (fruit){
    console.log(fruit);
})

// indexof() - gets the index of the specific value
// return -1 if the value is not found in the array
console.log("Index of 3: ", numbers.indexOf(3));
console.log("Index of 6: ", numbers.indexOf(6));

// includes() - true if value is in array, and false if not
console.log("Include 4: ", numbers.includes(4)); // true
console.log("Include 4: ", numbers.includes(7)); // false

// join() - convert the array values into a string
console.log("Joined array:", colours.join(","));

// .slice() - extract a portion of an array to make a new array
// slice(a, b) a is inclusive, b is exclusive
let slicedArray = numbers.slice(undefined, 2); 
slicedArray = numbers.slice(1,3);
console.log(slicedArray);