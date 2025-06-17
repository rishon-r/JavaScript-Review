/* Javascript is a programming language used to build websites
There are chiefly three technologies used to create websites: HTML, CSS, Javascript
HTML creates the content of the website
CSS helps change the appearance of the website (i.e used for styling the website)
JavaScript makes the website interactive
*/

/* A Web Browser is an important tool for web development.
It allows us to view websites. 
Google Chrome is the most commonly used one.
You can view the HTML markup for any webpage by right clicking on any part of the website and clicking inspect.
By switching to the console tab after clicking inspect, you gain access to a JS console.
Here, if you type alert('Hello World'); 
it will return a pop-up with the words hello world
*/

/* JS also allows us to do math
It will evaluate mathematical expressions and return the result similar to what Python does
*/

/*
JS is CASE-SENSITIVE.
Statements are terminated with a semi-colon.
Semi-colons are automatically added whenever a newline character is encountered.
 However, it is better practice to add them in order to avoid abnormal behaviour
*/

// NUMBERS AND MATH

7 + 2 + 5; // Addition
7 - 2; // Subtraction
7 / 2; // Division
7 * 2; // Multiplication

// JS can also handle decimal numbers
7.3 + 5;
// You can combine multiple operations in a single expression
7.3 * 5 +4;

// ORDER OF OPERATIONS:
/* Addition, Multiplication, Subraction and Division are all operations in JS
+, - , * and / are called operators.
Order of operations refers to the order in which operations are evaluated in an expression.
In JS, Multiplication and Division are done first (have same priority) and then Addition and Subtraction are done next (they have same priority)
In JS, this is also called operator precedence.
Note however that expressions are also evaluated from left to right if perator have the same precedence.
Brackets or Parentheses have the highest priority of all
Whenever there is an open bracket (, remember that it must be followed by a closed bracket, ).
If there are multiple nested sets of parentheses, JS evaluates thhe ineer parentheses first
*/

// A common anomally noted is the result after adding (or any operation really) two decimal numbers. 
20.94 + 45.86;
// You will end up with a decimal number with a long list of trailing numbers after the decimal point.
// This is a common problem encountered across languages (often called floating point precision)
// This is due to the fact that computers only understand binary 
// Conversion of a decimal into the binary system sometimes produces abnormal behaviour
// To combat this we can simply round the number
Math.round(20.94 + 45.86);
// Above code rounds the number to the nearest integer
// However when calculating important floating point values such as prices in dollars and sents
// It is better to convert the amount to cents completely and convert back to dollars after addition in order to avoid any semblance of inaccuracy

