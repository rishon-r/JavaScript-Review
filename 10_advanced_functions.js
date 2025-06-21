// FUNCTIONS ARE VALUES
// As such, they can be stored in variables

function greet(){
  console.log('Hello World');
}

let a = greet;
console.log(typeof a); // This will return that it is of function type


// ANONYMOUS FUNCTIONS
// An anonymous function is a function without a name.
// Example in comments below:
/*
Instead of this:

function greet() {
  console.log("Hello");
}
We can do this:

const greet = function() {
  console.log("Hello");
};

*/

// HOISTING
// Hoisting is a special JS feature that we will discuss in detail a little bit later
// For now, undewrstand it as follows:
// Hoisting is a mechanism by which a function can be called in a line previous to where it has been defined.
// Note however, that this happens only when functions are declared in the standard way and not stored in a variable

// Since functions are values, we can store them inside objects
// We can call them using dot notation
// We have discussed this before in our section on objects
// Functions inside objects are called METHODS

// Since functions are values, we can also pass them as parameters to other functions
// The function we are passing in as a parameter is called a CALLBACK or CALLBACK FUNCTION
// Example:

function add (){
  return 5+7;
}

function runFunc(func) {
  func();
}

console.log(runFunc(add));

// BUILT IN FUNCTION: setTimeout()
// setTimeout() is a built-in JavaScript function that executes a piece of code after a specified delay (in milliseconds).
// It runs the code once, after the delay.
// BASIC SYNTAX:  setTimeout(function, delayInMilliseconds);
// Very useful when writing ASYNCHRONOUS CODE

// ASYNCHRONOUS CODE
// Synchronous code refers to the process by which code is executed line by line
// In synchronous code, the interpreter waits for a line of code to finish before proceeeding to the next one
// Asynchronous code refers to code where the interpreter does not necessarily wait for a line of code to finish before moving on to the next one
// setTimeout is an asynchronous piece of code for example
// Example:
// The greet() function is scheduled to run *after* 4000ms, but JS keeps running the next lines in the meantime.
setTimeout(greet, 10000);
console.log('Prints before hello world, though that is done the line before');

// BUILT IN FUNCTION: setInterval())
// setInterval() is a built-in JavaScript function that repeatedly executes a function every N milliseconds, until you stop it
// It runs the code over and over, unlike setTimeout() which runs it only once.

function sayHi() {
  console.log("Hello!");
}

// Below commented code will execute the sayHi() function once every 2000 milliseconds over and over
// setInterval(sayHi, 2000); 
// NOTE: setInterval() is also asynchronous
// setInterval actually returns an id
// We can use this to stop execution
// This can be stopped using the clearInterval function
// clearInterval() is a built-in JavaScript function that stops an interval timer that was started using setInterval()
// It takes the interval ID returned by setInterval() and cancels the repeating behavior.

// THE  .forEach() ARRAY METHOD
// .forEach() is an array method that executes a callback function once for each element in the array, in order.
// It is used to iterate (loop) through arrays without using a traditional for loop.
/* SYNTAX
array.forEach(function(element, index, array) {
  // code to run for each element
});
*/
// HERE:
// element → the current item
// index → (optional) the index of the current item
// array → (optional) the entire array itself
// Example: 

let names=["Jim", "Michael", "Dwight", "Pam", "Kevin", "Creed"];

names.forEach(function(value, i, array){
  console.log("Name", i, "in array:", array, "is", value);
})

// In forEach note that the key disadvantage is that break and continue cannot be used
// however, continue can be mimicked in the function body passed to forEach in the form of a return statement
// however, no such analogue for break exists and if we are implementing a feature that needs break it is better to stick to a standard for loop

// ARROW FUNCTIONS
// An arrow function is a shorthand way to write a function using the => syntax.
// Traditional function
function addNums(a, b) {
  return a + b;
}
console.log(addNums(1,3));
// Arrow function
const addNewNums = (a, b) => {
  return a + b;
}
console.log(addNewNums(1,3));
// If your function has just one expression, you can omit the return and {}:

const addThreeNums = (a,b,c) => a+b+c;
console.log(addThreeNums(3,2,1));

// The parentheses also become optional if there is only one parameter that the function is taking
const square = x => x * x;
console.log(square(4)); // 16

// When passing a function as a parameter to another fnction (i.e a callback function), it iss advised to use arrow functions
// Example
names.forEach((value, i, array) => {
  console.log("Name", i, "in array:", array, "is", value);
})

// USEFUL ARRAY METHODS: .map() AND .filter()

// .map() creates a new array by applying a function to each element of the original array.
// It transforms each item but does not change the original array.

/* SYNTAX:
const newArray = originalArray.map(function(element, index, array) {
  // return transformed value
});
*/
// element: current element being processed
// index (optional): index of the current element
// array (optional): the original array
// returns: a new array with transformed values
// Example:
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]

// .filter() creates a new array that only includes the elements that pass a condition (i.e., for which the callback returns true).
/*
SYNTAX:

const newArray = originalArray.filter(function(element, index, array) {
  // return true to keep the element
});

// returns: a new array with only the elements that match the condition
*/

// EXAMPLE:

const nums = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]

 
// 