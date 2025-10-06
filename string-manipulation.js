/**
 * STRING MANIPULATION:
 * 
 * 0: Strings can be manipulated and reassigned, although the original strings remain unchanged. Strings
 *    Strings are manipulated using built-in functions or operators.
 * 
 * 1: String methods are functions that act on strings. 
 * 
 * 2: Strings can be manipulated by using operators.
 * 
 */


//string methods
//declaring and assiging a string
let string = "i love lizards";

//string length
console.log(string.length); // 14

//string index access
console.log(string[4]); // "v"
console.log(string.charAt(4)); // "v"

//split string into an array of strings 
    //by each index
console.log(string.split("")); //["i"," ","l","o","v","e"," ","l","i","z","a","r","d","s"]
    //by each space
console.log(string.split(" ")); // ["i", "love", "lizards"]
    //by a character 
console.log(string.split("l")); // ["i ","ove ","izards"]

// capitalize all letters in a string
console.log(string.toUpperCase()); // "I LOVE LIZARDS"

let string2 = "i LiKe OrANgEs aNd GrApES";
// make all letters in a string lowercase
console.log(string2.toLowerCase()); // "i like oranges and grapes"

// extracting from a string
    //slicing --> from start index to end index --> .slice(start, end)
        //start index is included. end index is not included
console.log(string.slice(0, 5)); // "i lov"
    //can also slice at a negative index, which counts from the end of the string  
    //for example, slice(-4) returns the last 4 characters in a string
console.log(string.slice(-4)); // "ards"

    // substring (startIndex, lengthToExtract) <-- similar to slice, but can't take negative index
console.log(string.substring(0, 5)); // "i lov"

//note that the original string remains unchanged throughout
console.log(string); // "i love lizards"
/*if we want to contain the result of using a certain string method on a string, 
    we can assign the use of that method on the string to a variable */
let example = "cats and dogs";
let exampleCapitalized = example.toUpperCase();
console.log(example); // "cats and dogs"
console.log(exampleCapitalized); //"CATS AND DOGS"


//operators
    //strings can be concatenated
let pet = " cat";
let quantity = 1;
console.log("I have " + quantity + pet); // "I have 1 cat"

//we can assign the value of concatenated strings to a variable
let dog = "bark";
let cow = "moo";
let together = "I say " + dog + ", not " + cow;
console.log(together); // "I say bark, not moo"
