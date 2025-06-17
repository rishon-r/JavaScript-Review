// A string in JS and most programming languages is a sequence of character used to represent text
// In JS, strings consist of a series of letters, numbers or symbols enclosed in quotes
// In JS, strings can be enclosed in single-quotes, double-quotes or backticks
// However, single quotes is the default that JS uses
// Strings created with backticks like `hello` are referred to as template strings
// E.g
'hello';
"YOooOOO777@";
// Strings can also be added together. This process is known as concatenation
'hello' + "world";
// Result of above operation is the string "helloworld"
// When you add a string to a number, JS automatically converts said number to a string and facilitates the concatenation operation.
// This feature is called Type Coercion
//E.g
'hello'+6;
// Result of above expression is the string 'hello6'

// We can find what type a value is using typeof
typeof 'hello';
typeof 6;
// Result of first expression above is 'string' and second is 'number'

// Remeber that string operations follow the same order of operations as numbers do. Parentheses are always computed first.
// This is especially useful in combination expressions of multiple strings and numbers.

// ESCAPE CHARACTERS in JS
// Escape characters are a special set of characters that can be used in a string besides the usual numbers, letters and symbols
// Escape characters start with a backslash
// They are used to embed characters which cause abnormal behaviour if listed normally in string, within the string.
// The backslash is followed by the character to be embedded 
// Examples: \n is supposed to represent the newline character, \' and \" are used to embed the quotes character within the string
// E.g
'I\'m happy';

// TEMPLATE STRINGS
// Template strings have some special uses
// The first such use is INTERPOLATION
// Interpolation means that you cannsert a value directly into a string