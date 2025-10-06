/**
 * FUNCTIONS:
 * 
 * 0: Functions are reusable blocks of code that accept inputs and return new data values based on 
 *    what the function does with those inputs. There are 2 steps to creating an using function: 
 *    first, a function is declared and defined, and then it is called/invoked. If a function is
 *    never invoked, it never becomes active or does anything.
 * 
 * 1: To declare a funcition, we use the function keyword, followed by the function name, its 
 *    parameters (optional sometimes), and the function body, which includes the return statement 
 *    (also optional sometimes). The function name and its parameter names can be anything, and parameters can represent any
 *    data type. The function body is where the action takes place, but this action does not occur
 *    until the function is invoked.
 * 
 * 2: Parameters: once a function is defined, it is invoked by calling the function. Arguments take
 *    the place of its parameters, and we do not include the keyword function in the invokation.
 *    Because functions are reusable, we can use different arguments (input) on a function to return 
 *    different output. 
 * 
 * 3: Function expression: functions can be assigned to variables, which can then be invoked. When 
 *    using a function expression, the function does not need a name.
 * 
 * 4: Function declarations are hoisted. Function expressions are not hoisted. A function's name can
 *    be referenced before its declaration, but if the funcition is assigned to a variable, then that
 *    variable's value (the function) is inaccessible. 
 * 
 * 5: Functions have their own scope, but can access variables from their parent or global scope.
 * 
 * 6: Nested functions: a function within a function. Nested functions have access to variables in
 *    their parent function, even after it returns. When this happens, the nested function is a 
 *    "closure". The parent function, however, does not have access to the inner function's variables.
 * 
 */

// function declaration
//function keyword, function name "funky", 2 parameters
function funky(parameter1, parameter2){
    //function body
    //functions can do many things
    //this function adds the 2 parameters together and returns this
    return parameter1 + parameter2;
}


//calling/invoking the function using numbers are arguments
funky(2,3);
console.log(funky(2,3)); // 5
//can also add strings using this function
funky("hi ", "world");
console.log(funky("hi ", "world")); //"hi world"

//function expression
//assigning funky function to a variable
let myFunction = funky;
//can call funky using the variable with arguments
console.log(funky(5,6)); // 11

//function declarations are hoisted, but not function expressions
//calling a function before its declaration - works
simpleFunc("hello"); 
console.log(simpleFunc("hello")); // "hello"
function simpleFunc(value){
    return value;
}

//function expressions are not hoisted
//calling a function expression before its declaration - does not work
funkyExp("hmm");
console.log(funkyExp("hmm")); // ReferenceError: Cannot access 'funkyExp' before initialization
let funkyExp = function(value){
    return value;
}

//functions have their own scope
    // functions can access variables in parent/global scope
let monkey = "bananas"; // <-- global variable
let horse = "hay"; // <-- global variable
//making a function that accesses thoses global variables
function action(an1, an2){
    return "I eat " + an1 + " and " + an2;
}
//calling function with monkey and horse as arguments
action(monkey, horse);
console.log(action(monkey, horse)); // "I eat bananas and hay"

//variables (including parameters) declared within a function cannot be accessed outside of the function

function veryFunky(value){
    let person = "Harry ";
    return person + value;
}
//calling function with string as value
veryFunky("Darla");
console.log(veryFunky("Darla")); // "Harry Darla"
//trying to access person variable defined in veryFunky - does not work 
console.log(person); // ReferenceError: person is not defined


//nested functions and closure
//closure happens when the nested function accesses and returns the parent function's variables
function parent(parentParam){
    //creating/returning a nested function (has access to parent scope variables and parameters)
    return function(nestedParam){
        return parentParam + nestedParam;
    }
}
//calling and passing arguments to parent
parent(3)(4);
console.log(parent(3)(4)); // 7 

//parent function cannot access variables or parameters in nested function
function parent2(outer){
    return function(inner){
        //declaring a variable in nested function
        let innerVariable = "inside";
    }
    //trying to return variable defined in nested function in outer function
        // (trying to return the inner function's parameter does the same thing)
    return innerVariable; // <-- does not work
}
//calling the function with argument for inner and outer
parent2(("hi")("hmm")); 
console.log(parent2("hi")("hmm")); // undefined (because innerVariable is inaccessible to parent2)




