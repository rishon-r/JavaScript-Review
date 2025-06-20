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



