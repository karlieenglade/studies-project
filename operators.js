/**
 * OPERATORS:
 * 
 * 0: Operators act on data by assignging or comparing data. Operators are also used when performing
 *    arithmetic operations or as logical operators. 
 * 
 * 1: Operators are classified by what they do and how many operands they require. Unary operators work
 *    with only 1 operand, binary with 2, and ternary with 3.
 * 
 */

//types of operators
// assignment (=) assigns value to a variable
let light = "on";
console.log(light); // "on"

    //assignment operators can also be used to assign and add another value simultaneously
let x = 5;
x += 6; // <-- re-assigning and adding to at the same time; x = x + 6
console.log(x); // 11
    //assigning and subtracting
x -= 10; // <-- same as x = x - 10 
console.log(x); // 1
    //assigning and multiplying
x *= 20; // x = x * 20 
console.log(x); // 20 <-- 1 * 20 = 20
    //assigning and dividing
x /= 2; // x = x / 2 
console.log(x); // 10 <-- 20/2 = 10

    //assiging with remainder operator %
    //divides and returns the remainder
x %= 3; // x = x % 3   <--  x = 10 % 3  
console.log(x); // 1


//arithmetic operators
//binary because they require 2 operands
//adding 
console.log(2 + 10); // 12
let a = 4;
let b = 7;
console.log(a + b); // 11
    //can add string values
    console.log("hi " + "world"); // "hi world"
//subtracting 
console.log(10 - 5); // 5
let c = 18;
let d = 9;
console.log(c - d); // 9
//multiply
console.log(10 * 5); // 50
let e = 10; 
let f = 3;
console.log(e * f); // 30
//divide
console.log(50 / 5); // 10
let g = 20;
let h = 4;
console.log(g / h); // 5
//check for remainders
console.log(20 % 6); // 2
let i = 30;
let j = 8;
console.log(i % j); // 6

//incrementing ++
//unary (one operand)
// "++" after a variable adds 1 to its value
let k = 5;
k++; // <-- adds 1
console.log(k); // 6

//decrementing --
//unary (one operand)
// "--" before or after a variable adds 1 to its value
let l = 10;
l--; // <-- subtracts 1
console.log(l); // 9

//comparison operators  
    //return boolean
//binary (2 operands)
//greater than >
console.log(10 > 5); //true
//less than <
console.log(10 < 5); // false
//greater than or equal to >=
console.log(10 >= 10); // true
//less than or equal to <=
console.log(10 <= 11); // true

//not strictly equal (==) compares data but does not compare type
console.log(3 == "3"); // true
//strictly equal (===) compares data and type
console.log(3 === "3"); // false
console.log("hi" === "hi"); // true

//loosely not equal (!=) not strict comparison
console.log(5 != "5"); // false
console.log(5 != 5); // false
console.log(2 != "3"); // true

//strictly unequal (!==) compares data and type
console.log(3 !== "3"); // true
console.log(6 !== 6); // false

//logical operators
// and (&&) determines if both values are true
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log( 5 > 1 && 5 < 6); // true
console.log( 5 > 1 && 10 < 6); // false

//or (||) determines if one value is true
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log( 5 > 1 || 5 < 6); // true
console.log( 5 > 1 || 10 < 6); // true

//bang/"not" (!) flips truthiness value of a value
//unary (1 operand)
console.log(!true); // false
console.log(!false); // true
console.log(!(1 < 2)); // false

//typeof determines the data type of a value
//unary (1 operand)
let string = "stringy";
let num = 9;
let bool = true;
let myObj = {age: 50, name: "Grace"};
let myArr = [1, 2, 3];
let func = function(x){return x};

console.log(typeof string); // "string"
console.log(typeof num); // "number"
console.log(typeof bool); // "boolean"
console.log(typeof myObj); // "object"
console.log(typeof myArr); // "object" 
console.log(typeof func); // "function"

/* since arrays are technically objects, we check if a value is an array using Array.isArray(___) */
console.log(Array.isArray(myArr)); // true

//negation (-) returns the negative value of value
let z = 4;
console.log(-z); // -4
let u = -7;
console.log(-u); // 7

//conditional operator (condition ? action if true : action if false)
//ternary (3 operands)
//similar to a if-else statement
let number = 50;
//if number is less than 60 <-- the condition
    //then (action if true)
        // else (action if false)
(number < 60 ? console.log("less than 60") : console.log("not")); // "less than 60"


