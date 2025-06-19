// OBJECTS

// Objects are another type of value in JavaScript
// As such it can be stored in a variable
// Objects are used to group values together
// They are one of the most important and powerful features in JavaScript

// An object in JS is a collection of key value pairs similar to a dictionary in Python
// Here, the keys are called properties and the values are called values
// Together they are called property-value pairs

// the values can be anything: strings, numbers, arrays, functions, other objects...
// They can be created as follows:

let Student= {name: "Bezdommy",
  age: 17,
  currentlyRegistered: false
};

// You can access values belonging to a property of an object either using dot notation or brackets
// Dot notation however serves as the preferred way

// Example of dot notation
console.log(Student.name); 

// Example of bracket notation
console.log(Student["name"]);

// Bracket notation however still has some particular use cases where using it is advantageous
// It is used whenever a property name has spaces or special characters as we access them in the form of a string

// We can also print out the object in and of itself
console.log(Student);

// If we try accessing a property that does not exist, the value returned will be undefined
// Example:
console.log(Student.grade); 

// To change a value corresponding to a particular property in an object, we can use the dot notation
Student.currentlyRegistered= true;
console.log(Student.currentlyRegistered);

// We can also use this same type of notation to add a property to an object
Student.grade='A';
console.log(Student);
console.log(Student.grade);

// DELETING A PROPERTY
// We can use the delete statement to delete a property and a value associated with it from an object
delete Student.grade;
console.log(Student);
console.log(Student.grade); 

// We can use the typof keyword alongside an object as well
console.log(typeof Student);

// the key purpose of using an object is that it helps make the code more organized
// It allows us to group property-value pairs together rather than relying on various variables that are not grouped

// Using an objects as a value for a particular property creates something known as a nested object
// Example:
book= {name: 'BookXYZ',
  genre: 'Literature',
  reviews: {
    rating: 4.7,
    number: 33
  }
};

// We can access values of this nested object via using dot notation multiple times
console.log(book.reviews.number);
// We can also simply just print out the nested object
console.log(book.reviews);

// Objects can also have function stored as values
// When you save a function inside an object, it is called a method
// Example:
product= {
  name: "Frying Pan",
  price: 17.99,
  manufacturer: "The Pan Man!",
  listProduct: function listProduct (){
    console.log(product.name);
    console.log(product.price);
    console.log(product.manufacturer);
  }
};
product.listProduct();

// An example of a method is the console.log() function wherein the log method is a property of the console object

// BUILT IN OBJECTS
// Built in objects are essentially just objects provided by the language
// So far, we have learned two such objects: The Math objects and the console object
// Now, we will look at two more: JSON and localStorage

// JSON
// The Built in JSON object helps us work with JSON
// JSON stands for Java Script Object Notation and is essentially a particular way of representing data
// Its syntax is similar to that of an obect in JavaScript (hence the name)
// JSON is a commonly used standard of representing data when transmitting it between computers
// hence, it is very important

// JSON syntax
// While the JSON syntax is mostly similar to that of a JavaScript object, it differs in a few ways
// The rules of JSON syntax are listed below
/*
JSON (JavaScript Object Notation) is a lightweight text format used for storing and exchanging data, commonly between a server and a client.
It is structured as key-value pairs, similar to JavaScript objects, but with stricter rules: all keys must be in double quotes, strings must use double quotes, and trailing commas are not allowed.
JSON supports values such as strings, numbers, booleans, arrays, objects, and null, but it does not allow functions, comments, or undefined. 
Though it resembles JavaScript syntax, JSON is actually just a string and must be parsed using JSON.parse() to be used as an object, or converted back to a string with JSON.stringify().
 JSON is widely used because it is simple, readable, and language-independent.
*/

// The built in JSON object has two useful methods which we will learn
// First, the JSON.stringify() method will convert a JavaScript object into a JSON string
// To do this the object must be placed within parentheses
let bookJSON= JSON.stringify(book);
console.log(book);
console.log(bookJSON);
// We also know that JSON is a string
console.log(typeof bookJSON);

// We also know that the JSON syntax doesn't support functions
// See what happens when we stringify an object iwth a function
let productJSON= JSON.stringify(product);
console.log(product);
console.log(productJSON); // The function will not be printed here

// The second important method is the JSON.parse()
// When provided with a JSON string, this will return a JavaScript Object
parsedBook= JSON.parse(bookJSON);
console.log(parsedBook);

// THE localStorage BUILT-IN OBJECT
// This object helps us save values more permanently
// So far, we have been saving our values in variables
// The thing about variables is that they are temporary 
// and when one restarts a program or refreshes an interactive webpage, their values get deleted
// In other words, localStorage is a built-in JavaScript feature that allows you to store key-value pairs in a web browser — persistently and without expiration.
// persistence refers to data that continues to exist even after the program that created it ends
// This means the data you save in localStorage stays even after the user closes or reloads the browser tab or shuts down their computer.

// Example of common use:
// Save data
localStorage.setItem("username", "Rishon");

// Read data
let name = localStorage.getItem("username");  // "Rishon"
// If no key value pair with above mentioned key exists, loscalStorage.getItem() will return null

// Remove a key
localStorage.removeItem("username");

// Clear all keys
localStorage.clear();

// Note here that stored data is string-based i.e localStorage can only store strings
// This however means that it can store JSON as JSON data is of string type


