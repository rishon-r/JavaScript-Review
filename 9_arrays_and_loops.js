// ARRAYS
// Arrays are another type of value in JavaScript
// they represent a list of values enclosed in square brackets and separated by commas
// example:
const myArray=[13, 9, 22, 21, 11];
console.log(myArray);

// We can use indexing to obtain values from an array
console.log(myArray[0]);
console.log(myArray[2]);
console.log(myArray[1]);
// We can also use indexing to change values in an array
myArray[1]=27;
console.log(myArray[1]);
/// We cannot use negative indexing in JS like we did in Python
// JS also does not support the string slicing methods that Python does
// An array in JS can hold values of multiple types
// However, this is considered a bad practice when it comes to clean code
const yourArray= [1, 'hello', true, {name: 'James', children: ['martha', 'virginia']}];
console.log(yourArray);
// An Array itself is a type of value. This means we can save an Array in a variable and also have it as a value in another array
// Storing an Array in another Array creats something known as a NESTED ARRAY
const tryArray= [[1,2], [3,4], 5,6,7];
console.log(tryArray);
// Since an Array is a type of value, we can use typeOf alongside an Array to find a value
console.log(typeof tryArray); // You see however that this returns object as the type
// This is because an array is actually an object, just a special type of object
// We can find if something is actually an array using the following code below
console.log(Array.isArray(tryArray)); // This will return a boolean value based on whether or not the argument passed is an array

// Since we now know that an Array is an object, we see that there exist properties and methods that can be run on arrays
// Some examples are given below
a= tryArray.length; // will return length of array
console.log(a);

console.log(tryArray);
tryArray.push(15); // Helps us add an element toi the back of an array
console.log(tryArray);
tryArray.splice(0,2); // Helps us remove a number of elements from an array starting at an index. First parameter is index, second parameter is the number of elements to be removed
console.log(tryArray)

// LOOPS

// FOR LOOP
// For loop is a countable loop in JS
// It is implemented in a manner very similar to for loops in C
// Syntax:
/*
for (initialization; condition; increment) {
  // code block to run
}
*/
// Example:
// for loop to print numbers from 1 to 10
for (let i=1; i <= 10; i++){
  console.log(i);
}

// WHILE LOOP
// While loop in JS is a conditional loop
// It runs as long as some condition remains true
// Syntax:
/*
for (initialization; condition; increment) {
  // code block to run
}
*/
// Example:
// while loop to print numbers from 1 to 10
let x=1;
while (x<=10){
  console.log(x);
  x++;
}

// ACCUMULATOR PATTERN
// The accumulator pattern is a common programming pattern where you use a variable to keep a running total or result while looping through data (like arrays or strings).
/* HOW IT WORKS
1. Initialize an accumulator variable (like sum, total, result, etc.)
2. Loop through a data structure
3. Update the accumulator on each iteration
4. Use the final value after the loop ends
*/

// Example: (Calculating sum of elements in an array)
let numbers = [10, 20, 30, 40];
let total = 0; // Step 1: accumulator

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i]; // Step 3: update accumulator
}

console.log("Total is:", total); // Output: 10



