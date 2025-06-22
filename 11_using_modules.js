// MODULES IN JS
// Using multiple script tags within a HTML page referencing different javascript files may result in a naming conflict
// This is because once a variable is created in a particular file referred to in a script tag,
// creating a variable of the same name in another file referenced by another script tag will result in a naming conflict
// to combat this, in JS, we use modules

// To use variables from another file in a particular file, we have to add a type attribute to the script tag referring to that file
// To this type attribute we will assign the value "module"
// This will basically enable the file being referenced to import variables from other files
// In the file we want to import from, we need to add an export keyword before let or const when initializing the variables we wish to export
// Finally, to import said variables in our original file we will use the following code:
// import {variableName1, variableName2, etc..} from 'filepath/of/js/file'

// SIMPLY PUT: THIS IS A 3 STEP PROCESS 
// 1. ADD type="module" ATTRIBUTE
// 2. EXPORT
// 3. IMPORT

// SOME THEORY:
// Modules are reusable chunks of code that encapsulate logic and data, promoting code organization, reusability, and encapsulation.
// Think of modules as individual .js files with specific responsibilities.
// Benefits of using modules: Maintainability, Reusability, Namespacing (no large set of global variables) and Easy Testing

// Let us illustrate an exaple in 3 files
/*
Filename: math.js

export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

Filename: main.js

import { add, multiply } from './math.js';

console.log(add(2, 3));       // 5
console.log(multiply(2, 3));  // 6

HTML:

<script type="module" src="main.js"></script>
*/ 

// ANOTHER THING TO NOTE:
// Alway import names at the top of a file
// For modules to work, we must use live server

// USING THE as KEYWORD
// E.g: import {name as newName} from 'filepath'

// ANOTHER WAY OF USIG IMPORT:
// import * as objName from 'filepath'
// This will import everything from a file as an object

// Benefits of using modules: Maintainability, Reusability, Namespacing (no large set of global variables) and Easy Testing
// We also don't have to worry about the order in which we place our script tags if we are using modules
// It is of best practice to have only one script tag in your HTML file that starts everything up and where everything is imported
// This file is called our ENTRY POINT

// BEST PRACTICES:
// 1. It is not advised to have very large long functions. So split them up into samller functions
// 2. SEPARATION OF CONCERNS: Group related code together in its own file

