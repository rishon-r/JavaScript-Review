// OOP- Object Oriented Programming
// A different method of programming that involves organizing your code into objects
// So far, we have used PROCEDURAL PROGRAMMING
// A procedure refers to a set of step-by-step instructions
// in PROCEDURAL PROGRAMMING we organize our code into functions

// In OOP, we group our data and functions into objects
// Why do we use OOP?
// OOP tries to represent the real world
// E.g in real life, a cart can have properties inside it and we can perform actions to modify a cart
// Some developers feel that this makes the code more intuitive

// Another important reason to use objects is that it is easy to create multiple objects
// We can either copy paste the code of an object, which is laborious and not the standard practice
// or create a function that generates objects
// another way of generating objects is through the help of a class

// CLASS
// A class is basically an object generator
// They are cleaner and have more features than using functions
// We say that an object is an instance of a class
// Benefits of using CLASSES:
// A class actually looks like the object it creates
// It is cleaner than using a function
// Classes also have some extra features for OOP
// View cart-class.js in data for syntax on how to create classes and use of other important class features suchas as instanceof

// THE this KEYWORD
// refers to that particular instance of a class

// CONSTRUCTORS
// A constructor is an extra feature that classes possess for OOP
// It allows us to run some setup code after creating an object
// A constructor lets us put this set up code inside a class
// It ca be viewed as a specialmethod for setting up instances that is called automatically when you set up a new object using a class
// Some rules: The constructor method should be named constructor, it cannot return any value

// SYNTAX:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
  }
}

const p1 = new Person("Alice", 30);
p1.greet(); // Hi, I'm Alice, and I'm 30 years old.

// PRIVATE PROPERTIES AND METHODS
// Classes allow us to make a particular method or property private- i.e it is only available for acess within that class
// You add a # symbol before naming property or method in order to make it private
// A method or property in a class that can be acessed from outside that class is called a PUBLIC METHOD/PROPERTY
// NOTE: field and property refer to the same thing and can be used interchangeably