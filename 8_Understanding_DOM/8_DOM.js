// DOM stands for Document Object Model
// The DOM is a very important feature of JavaScript
// The DOM is another Built-in object in JS similar to JSON or localStorage
// This built in object is called the document object
// The document object represents or models the webpage and is hence called document object model

// DOM syntax
// The DOM essentially just refers to the document object
// it works similar to all other objects and has properties such as body and title that can be accessed via the dot notation
// To show working of the DOM, we will run examples in the DOM.html file in the same directory as this file
// Besides properties, the document object also has a series of methods associated with it which we will soon dicuss

// The major use of the document object is that it allows us to have HTML within our javascript code
// Thus, the DOM combines HTML and JavaScript together and gives JavaScript control of the webpage
// Below, I have pasted some common properties of the document object

/* COMMON PROPERTIES
  1. document.title	Gets or sets the title of the document (what shows in the browser tab). You can assign it a value.
  2. document.body	Returns the <body> element of the page.
  3. document.head	Returns the <head> element of the page.
  4. document.documentElement	Returns the root element (<html>) of the document.
  5. document.URL	Returns the full URL of the page.
  6. document.domain	Returns the domain name of the server.
  7. document.cookie	Gets or sets cookies associated with the page.
  8. document.readyState	Returns the loading state of the document (e.g., "loading", "complete").
  9. document.forms Returns collection of the <form> elements
  10. document.images Returns collection of the <img> elements
  11. document.links Returns collection of the <a> elements
*/

// NOTE: When a HTML element is retrieved in JavaScript via use of the document object's properties, it is in the form of a JS Object
// So, some of these HTML elements have useful properties in and of themselves in JS
/* Examples:
1. document.body.innerHTML gets or sets the HTML content inside the <body> tag of your document.
    - You can customize the body of the HTML page using this
    - E.g: document.body.innerHTML = "<h2>New Content!</h2><p>Replaced everything!</p>";
    - As seen above, you can pass html tags in the string as well

*/

// Now, we will dicuss some imprtant methods of the document object
/* SOME IMPORTANT METHODS OF THE DOM

1. querySelector(selector)	Returns the first element matching a CSS selector
  - When using a .class selector to select particular HTML elements it is often practice to start the name of the class of an element with 'js-' in the HTML code


*/

// Also note that every HTML element retireved as a property of the document objects is an object and has property innerHTML
// This property allows you to change the HTML code inside that particular element
// There exists also an innerText property that is used to get or set the visible text content of an HTML element
// — i.e., what a user can see on the page (not including hidden elements or HTML tags which the innerHTML provides us).
// This can also be accessed as a property of all HTML objects in JS code 

// The .value property is used to get or set the current value of form elements like: <input>, <textarea> and <select>
// Only form-related elements (elements that accept user input) have a .value property.

// Also note that any time you get a value from the DOM, it will be in the form of a string
// So, if it is a numerical value you desire, convert it from string type explicitly using Number()
// This is called type conversion/ type coercion
// The String() function also converts any type into a string
// Type coercion can be done IMPLICITLY by JS or EXPLICITLY as we have mentioned above
// IMPLICIT conversion can be seen when we try doing addition with a string. Here, the number will be converted into a string and concatenation will take place.
console.log('25'+5);
// When we do subtraction, the string is converted into a number
console.log('25'- 5);
// However, it is advised to not do arithmetic with strings as it results in weird behaviour as above


// Using the DOM goes hand in hand with the onclick and onkeydown attributes of html tags
// These attributes are called EVENT LISTENERS whereas click and keydown are EVENTS

// Every event listener gets an event object associated with it in JS
// The event object has a lot of properties associated with it
/*
  In JavaScript, the event object is an automatically passed argument to event handler functions that provides 
  detailed information about the event that occurred—such as the type of event (click, keydown, etc.), 
  the target element that triggered it, and additional data like mouse position or key pressed.
  It allows developers to respond intelligently to user interactions by accessing properties (like event.target, event.type, or event.key)
  and methods (such as preventDefault() to stop default browser behavior or stopPropagation() to prevent the event from bubbling up). 
  This object is essential for building interactive, responsive web applications.
*/

// .classList is another property of HTML element objects in JS
// This gives us control of the class attribute of the HTML element
// We can use class-list.add to add a class to the class list of the HTML element
// This is useful when we want to modify the css styling of an element after a particular interaction/event takes place


// THE window OBJECT
// Similar to how the document object represents the webpage, the window object represents the browser
// The document object is actually inside the window object
// So is the console object we have been using for console.log
// Pop-ups are also parts of the window
// Saying window.alert invokes the same
// However, the window object has a shortcut. we don't need to state its name explicitly
// Thats why we can access the document object or say console.log without worrying about mentioning the window object
// JS automatically adds window before these objects

// Organizing your code in different files
// Use the src attribute of script tag to link to a separate javascript file
// you can also use multiple script elements with src attributes to split your JavaScript code into different files




