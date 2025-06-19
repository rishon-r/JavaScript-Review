// There exist two boolean values in JS
// They are true and false
console.log(typeof true);
console.log(typeof true);
// A boolean value represents whether something is true or false
// Below two code examples will return boolean values
console.log(3 < 5);
console.log(3 > 5 );
// ASIDE: The > operator is called a comparison operator in JS
// there exist many other comparison operators in JS such as <, >, >=, <=, ==. !==
// They all have the same meanings as their mostly similar analogues in Python where they are called relational operators
// JS also support triple equals as an operator ===
// The difference between == and === is that == tries to convert objects into the same type before comparing
// Examples:
console.log('5'==5);
console.log('5'===5);
// As seen from above, the first line of code returns true
// Since this is may produce abnormal behaviour in certain applications, we stick to using ===

// ORDER OF OPERATIONS in JAVASCRIPT
// 1. Parentheses: () 
// 2. Multiplication and Division: / * 
// 3. Addition and Subtraction: + -
// 4. Compariosn Operators: <, >, >=, <=, ==. !==, ===
// Now, consider how an expression like below is evaluated
console.log(7 > 3 + 5); // This will return false as 3 + 5 is evaluated first according to operator precedence and becomes 8

// IF- STATEMENTS in JS allow us to write multiple blocks of code and decide which to run
if (3 > 7){
  console.log('Hey');
}
else{
  console.log('Bye');
}
// if works based on evaluation of expression in brackets. If the expression is true the code will run
// if it is not true, the code under else will run
// having an else block however is not mandatory
// It will basically just do nothing if the expression inside if is not true
// Example:
let age=17;

if (age>=16){
  console.log('You can drive');
}
else{
  console.log('You cannot drive');
}
// You can also have intermediate conditions similar to elif blocks in Python
// Here, we use else if instead of elif
// Example:
let num1= 40;
let num2= 17;

if (num1>num2){
  console.log('First number is greater');
}
else if (num1===num2){
  console.log('The numbers are equal to each other');
}
else{
  console.log('The second number is greater');
}

// LOGICAL OPERATORS IN JS
// Logical operators in JavaScript allow us to combine two boolean values
// The logical operators are AND, OR and NOT represented as &&, || and ! respectively
// They wrok similar to Python and are also short circuit evaluation operators
// These are especcialy useful when combining two boolean expressions in the condition of an if or else if clause

// IF STATEMENTS also do another interesting thing
// They create something known as scope
// A scope essentially defines/limits where a variable lives
// Any variables created within the curly braces of an if statement exist only within the curly braces of said if, else or else if clause
// That is, they cannot be accessed outside that part of the program by referring to them
// Scopes are an essential feature of most programming languages and help avoid naming conflicts
// This is why using var is not advised as it exhibits some weird behaviour in terms of scope
// If we name a variable outside the curly braces and use var to create a variable of the same name inside curly braces, then it will result in a naming conflict
// Whereas using let or const respects the scope rules better

// TRUTHY AND FALSY VALUES
// if statements not only work with true or false expresssions but also other values such as numbers and strings
// Values that behave like tru are called truthy values
// Values that behave like false are called falsey values
// These are used as a sort of shortcut in our code
// List of Falsy values: 0, -0, NaN, "", 0n, null, undefined
// List of Truthy values: none-zero numbers, non-empty strings, empty arrays and objects, Infinity, -Infinity, any function
// Note that these truthy and falsy values work not only with if statements but also with logical operators

// Notes on some common values:
// NaN stands for not a number, it is returned if we do some invalid math
// undefined represents something that does not have a value
// null - we will look at this in the future

// SOME SHORTCUTS FOR IF STATEMENTS

// TERNARY OPERATOR
// Absolutely! The ternary operator in JavaScript is a shorthand way to write an if...else statement.
// It’s called "ternary" because it takes three parts.
// Syntax: condition ? expression_if_true : expression_if_false;
// condition refers to the expression that evaluates to either true or false
// ? is a symbol that represents then
// expression_if_true is the expresssion to be evaluated if the condition is true
// expression_if_false is the expresssion to be evaluated if the condition is false
// Ternary operator has an advantage over the if statement as its value can be stored in a variable
// Example:
let years= 18;
let result = (years >= 18) ? "Adult" : "Minor";
console.log(result); // "Adult";

// GUARD OPERATOR &&
// Guard operator is not an operator in and of itself but is a way of using the and operator
// It's not an official operator, but a pattern where you use && to guard against something being falsy before accessing or executing.
// Syntax: condition && doSomething();
// If the condition is truthy, the function is executed
// Otherwise, short circuit evaluation prevents the function from being executed andnothing happens
// It is a shortcut for an if statement of the form:
/*
if (condition){
  doSomething()
}
*/
// Just like the ternary operator, we can save the result of the guard operator in a variable

// DEFAULT OPERATOR ||
// Works similar to the guard operator but uses the or operator instead of the and operator
// Syntax: let value = userInput || "default";
// If userInput is truthy, value becomes userInput due to short circuit evaluation
// If userInput is falsy, value becomes "default".
// It is a shortcut for an if statement of the form:
/*
let value;
if (!value){
  value= default_value;
}
*/

