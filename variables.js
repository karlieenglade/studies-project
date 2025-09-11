/**
 * VARIABLES:
 * 
 * 0: Variables have unique names and store values of all data types. 
 * 
 * 1. Declaration and assignment: a variable declaration lets us know it exists, but it does not hold value until 
 *    it is assigned. To declare a variable we use a keyword (var, let, or const) followed by the variable's unique
 *    name using camelCase. To assign the variable to a value, we follow the variable name by "=" and the value. Variables can be 
 *    reassigned.
 *    
 * 2. Var, let, const 
 * 
 * 3. Hoisting
 * 
 */

//variable declaration
var cat;
//variable assignment
cat = "Lenore";
//declaration and assignment can happen all at once
var dog = "Doodle";
//a variable that is declared without being initialized is recognized but returns undefined
var pig;
console.log(pig); // undefined
//variable names are made using camelCase for easy readability
var thisIsCamelCase; 
var thisisnotcamelcase;

//var variables 
    // global or function-scoped
var name = "Ruby";
if (name === "Max"){
  console.log("Max is here");
} else if (name === "Ruby"){
  console.log("Ruby is here");
} 
// prints "Ruby is here" because var variable is global-scoped and can be accessed from within code blocks and functions 

function addSound(animal){
    var catSays = "meow";
    return catSays + ", hiss";
  }
console.log(catSays); // ReferenceError: catSays is not defined <-- because var catSays is function-scoped

    // can be redeclared and reassigned
//declaring once
var table; 
//declaring twice and assigning
var table = "brown";
console.log(table); // "brown" <-- no error because re-declaring is ok
//reassigning table to "green"
table = "green";
console.log(table); // "green" 


    // hoisted but undefined
//we can access a var variable before it is initialized or assigned 
console.log(horse); // undefined
var horse = 5; 


//let variables
    //block-scoped
if (true){
    let color = "blue";
} else {
    let color = "red";
}
console.log(color); // ReferenceError: color if not defined

    //cannot be redeclared but can be reassigned
    //declaring once
let shape;
    //declaring twice and assigning
let shape = "square";
console.log(shape); // "SyntaxError": Identifier "shape" has already been defined

    //declaring and assigning
let x = 5;
console.log(x); // 5
    //reassigning
x = 20; 
console.log(x); // 20 <-- no issue reassigning let variable 

    //hoisted but not initialized 
console.log(c); // ReferenceError: Cannot access "c" before initialization
let c = 10;


//const variables
    //block-scoped
if (true){
    const horn = "honk";
  } else {
    const horn = "beep";
  }
console.log(horn); //ReferenceError: horn is not defined <-- cannot access const in block from outside the block

    //cannot be reassigned, but if value is complex data type, its contents can be modified
    //assigning once
const dino = "rawr";
    //reassigning
dino = "grr"; 
console.log(dino); //TypeError: Assignment to a constant variable

//const variable of complex data type
const myArray = [1, 2, 3];
//modifying the array
myArray.unshift(0);
console.log(myArray); // [0, 1, 2, 3] <-- const complex data types can be modified

    //hoisted but not initialized
console.log(lion); // ReferenceError: cannot access "lion" before initialization
const lion = "rawr";

    //must be initialized upon declaration 
const tiger; 
console.log(tiger); //SyntaxError: Missing initializer in const declaration



// hoisting (continued)
    // function declarations and their bodies are hoisted
    //this means functions can be called and used before they are reached in the code
console.log(add5(1)); // 6 <-- no issue
function add5(x){
  return x + 5;
}

    //however, this does not apply when function is assigned to a variable 
console.log(add10(30)); // TypeError: add10 is not a function
var add10 = function(x){
  return x + 10;
}

