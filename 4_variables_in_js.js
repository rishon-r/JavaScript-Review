// In JS, variables are containers that store values so that they can be reused later
// Think of a variable in JS as a named storage location

// Variables in JS can be created using the let keyword
let x=40;
let word="hello";
console.log(word, x);

// We can also store expressions in a variable
let addr= 67 + 45;
let subr= addr - 5; // we can also use a variable in an expression
// Note that in JS, you can use a variable wherever you use a value
console.log(subr*5);

// VARIABLE NAMING RULES
// 1. Keywords such as let cannot be used in the variable name
// 2. A variable name may include a number although it may not start with a number
// 3. Most special characters cannot be used in a variable name. The only permitted ones are: $ and _
// 4. The above mentioned special characters may also be used to start a variable name

// CHANGING VALUE OF A VARIABLE (RE-ASSIGNING A VARIABLE)
let name="Mike";
console.log(name);
name="Tyson";
// We changing the value of a variable, we don't use the let keyword as it is used to create a new variable
// We simply mention the name of the variable and reassign a value to it
// This is done above and the effect it has can be displayed below
console.log(name);

// We can also reassign an expression to a variable that uses the varaible in said expression
// Example:
let num =5;
console.log(num);
num = num+2;
console.log(num);

// SOME SHORTCUTS FOR REASSIGNING VARIABLES
// The same result as above can be obtained as follows
let newNum= 5;
console.log(newNum);
newNum+=2;
console.log(newNum);
// Instead of += 1 we can also use ++
let newerNum=17;
console.log(newerNum);
newerNum++;
console.log(newerNum);
// These shortcuts exist for operations other than addition as well
// Example: -- stands for -=1 and -=, *=, /= are used in the exact same way that += is used

// VARIABLE NAMING CONVENTIONS
// The JS naming convention is using camel case as we have used above
// Camel case is a naming convention where each word in a compound word starts with a capital letter, except the first word, e.g., myVariableName

// OTHER WAYS OF CREATING VARIABLES
// We can also create variables using the const keyword
// However, the values of these variables cannot be changed and will result in an error
// This keyword is used to create "constants"
// basically, it does not allow reassignment
const newestNum=88;
console.log(newestNum);

// The last way of creating variables is using the var keyword
// These variables can be reassigned
// It was the original way of creating variables in JavaScript
// However, it is now considered legacy and using it in new JS code is ill-advised
var age=27;
console.log(age);

// Finally, note that we can use typeof alongside variables to determine the type of the value they store
// Example:
console.log(typeof newerNum);
let phrase="Hello";
console.log(typeof phrase);




