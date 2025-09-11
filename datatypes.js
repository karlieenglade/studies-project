/**
 * DATATYPES:
 * 
 * 0: Different types of values are stored into different types of data. Data is categorized by its type. There are
 *    two main datatypes: simple/primitive and complex. 
 * 1. Simple/primitive data types are: numbers, strings, Booleans, NaN (number), undefined, and null. These data types
 *    are immutable, or unchanging, and do not collect other values.
 * 
 * 2. Complex data types are: arrays, objects, and functions. These data types collect other values.
 *    
 * 3: When passed into a function, simple and complex data types are copied differently. Simple data types are copied 
 *    by value, but complex data types are copied by reference.
 * 
 */

// simple data types
    // immutable, unchangeable, do not collect values
let num = 4; 
let str = "hi";
let bool = true;
let nana = NaN;
let hmm = undefined;
let nothing = null;

//operations on simple data types return new values and do not change original vlaue
let num2 = num + 10;
console.log(num); // 4 <-- unchanged
console.log(num2); // 14 <-- new value

//simple data types are copied by value when assigining or passing
    //this means the value they represent remains unchanged 
let a = 20; 
//assigning variable b to the value of variable a
let b = a; 
console.log(b); // 20
//now if we change the value of b 
b = 50; 
//b is now equal to 50, while a remains unchanged
console.log(b); // 50
console.log(a); // 20



// complex data types
    // collect other values
let array = [1, "hello", true, [3, 5], {name: "Bob"}];
let object = {name: "Mark", age: 93, mood: "excited"};

//complex data types are copied by reference when assigning or passing
    //this means the values they hold can be changed
//changing first index of array to 5
array[0] = 5;
//printing the array shows that the original array was modified 
console.log(array); // [5, "hello", true, [3, 5], {name: "Bob"}]
//adding a property to object
object.city = "New Orleans";
//printing the object shows that the original object was modified
console.log(object); // {name: "Mark", age: 93, mood: "excited", city: "New Orleans"}