/**
 * DATATYPES:
 * 
 * 0: Different types of values are stored into different types of data. Data is categorized by its type. There are
 *    two main datatypes: simple/primitive and complex. 
 * 
 * 1. Simple/primitive data types are: numbers, strings, Booleans, NaN (number), undefined, and null. These data types
 *    are immutable, or unchanging, and do not collect other values.
 * 
 * 2. Complex data types are: arrays, objects, and functions. These data types collect other values.
 *    
 * 3: When passed into a function, simple and complex data types are copied differently. Simple data types are copied 
 *    by value, but complex data types are copied by reference. Copy by value means that the original value remains 
 *    unchanged when acted upon. Copy by reference means that the original value is changed when acted on. 
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

//string are textual data wrapped in single or double quotes
//strings have a length property 
let color = "green";
console.log(color.length); // 5
//can access individual characters in a string with bracket notaion
console.log(color[0]); // "g"
//can split a string into an array
console.log (color.split()); // ["green"]
console.log (color.split("")); // ["g","r","e","e","n"]

//can concatenate strings 
let beginning = "My favorite color is ";
let sentence = beginning + color;
console.log(sentence); // "My favorite color is green"

//booleans are true or false values based on logic and are used in conditional statements
console.log((10 < 20)); // true
console.log(5 > 6); // false
console.log("hi" === "hello");// false

//a variable is "undefined" if it has no value
let chair; // <-- has no value
console.log(chair); // undefined

///null means "nothing" but its data type is an object
console.log(typeof null); // "object"

//Infinity and -Infinity
//a positive number multiplied by Infinity equals Infinity
console.log(2 * Infinity); // Infinity
//a negative number multiplied by Infinity equals -Infinity
console.log(-3 * Infinity); // -Infinity
//a negative number multiplied by -Infinity equals Infinity 
console.log(-6 * -Infinity); // Infinity
//a number divided by Infinity equals 0
console.log(10 / Infinity); // 0
//a number greater than 0 divided by 0 equals Infinity
console.log(1 / 0); // Infinity
//a negative number divided by Infinity equals -Infinity
console.log(-5 / Infinity); // -Infinity

//NaN means not a number and is returned when non-numeric values are treated as numbers
console.log("fish" * 3); // NaN
console.log("hi" - "hello"); // NaN
//0/0 is NaN
console.log(0/0); // NaN

// complex data types 
    // collect other values
//arrays: ordered lists, can hold any data types
let array = [1, "hello", true, [3, 5], {name: "Bob"}];
//arrays have a length property
console.log(array.length); // 5
//adding to array 
    //to end
array.push("light"); 
console.log(array); // [1, "hello", true, [3, 5], {name: "Bob"}, "light"]
    //to end
array[array.length] = "haha"; 
console.log(array); // [1, "hello", true, [3, 5], {name: "Bob"}, "light", "haha"]
    //to beginning
array.unshift("marker"); 
console.log(array); // ["marker", 1, "hello", true, [3, 5], {name: "Bob"}, "light", "haha"]
//removing from array
    //last
array.pop();
console.log(array); // ["marker", 1, "hello", true, [3, 5], {name: "Bob"}, "light"]
    //first 
array.shift(); 
console.log(array); // [1, "hello", true, [3, 5], {name: "Bob"}, "light"]
//replacing array values
array[0] = 5;
console.log(array); //[5, "hello", true, [3, 5], {name: "Bob"}, "light"]
//accessing array values 
console.log(array[1]); // "hello"
console.log(array(array.length-1)); // "light"  
    //access array value in array 
console.log(array[3][1]); // 5
    //access object value in array
console.log(array[4].name);// "Bob"


//objects: unordered collections of key-value pairs
    //keys are strings or numbers
    //values can be any data type
let object = {name: "Mark", age: 93, mood: "excited"};
//objects do not have a length property
//adding to object
    //dot notation
object.color = "orange";
console.log(object); // {name: "Mark", age: 93, mood: "excited", color: "orange"}
    //bracket notation
object["big"] = true;
console.log(object); // {name: "Mark", age: 93, mood: "excited", color: "orange", big: true}
//changing object values
object.color = "purple";
console.log(object); // {name: "Mark", age: 93, mood: "excited", color: "purple", big: true}
object["color"] = "blue"; // {name: "Mark", age: 93, mood: "excited", color: "blue", big: true}
//accessing object key value
console.log(object.age); // 93
console.log(object["name"]); // "Mark"
    /*bracket notation can be used to access key value without quotation marks if the key name 
    is being references by a variable, such as in a function */
//removing from object
delete object.age; 
console.log(object); //{name: "Mark", mood: "excited", color: "blue", big: true}
delete object["big"]; 
console.log(object); // {name: "Mark", mood: "excited", color: "blue"}



//complex data types are copied by reference when assigning or passing
    /*this means the values they hold can be changed because the variable 
    references the entire original data type */
//changing first index of array to 5
array[0] = 5;
console.log(array); // [5, "hello", true, [3, 5], {name: "Bob"}, "light"]
//adding a property to object
object.city = "New Orleans";
console.log(object); // {name: "Mark", mood: "excited", color: "blue" city: "New Orleans"}

//array2 is referencing the entire original array
    //it is not referencing a copy of array
    //so when array2 values are changes, so are array values 
let array2 = array; 
console.log(array2); // [5, "hello", true, [3, 5], {name: "Bob"}, "light"]
//removing last value of array2
array2.pop(); 
//last value of array is also removed, since it array2 references the same array
console.log(array); // [5, "hello", true, [3, 5], {name: "Bob"}]

