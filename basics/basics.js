// **** INTRODUCTION ****
/*
dynamically typed language - it means this language assign variable's type at runtime based on its value
single threaded language -  a language that can execute one task at a time
interpreted language - it means that the code in read line by line and doesn't need a compiler
                         to convert the code into machine code before execution
*/


// ECMAScript or ES is the standardized scripting language specification on which js is based
// ES6 is the most famous edition because it contained significant improvements

/*
Common features introduced in ES6
    - arrow functions
    - classes
    - default parameters
    - modules
    - promises
    - let and const keywords, etc
*/


// **** VARIABLES ****
/*
3 ways to create variables
    - var (do not use since re declaration of variable is allowed)
    - let
    - const
*/

var a = 10;
var a = 20;         // re declaration is allowed
console.log(a);

/* OUTPUT
arkadas@Arkas-MacBook-Pro Learn JS % node ./basics/basics.js
10
20
*/

let b = 10;
// let b = 20;      re declaration is not allowed when using let
b = 20;             // re assignment is allowed


const c = 10;
// c = 14;          re assignment is not allowed



// **** DATA TYPES ****

// primitives - number, string, boolean, undefined, null, etc
// undefined signifies a variable which has been declared but not initialized
// variable that has been intentionally left absent.

let aa;             // undefined
let bb = null;      // null


// non primitives - object, array and functions (will cover separately later)