/**
 * LOOPS:
 * 
 * 0: Loops are used to iterate over data. A loop executes a block of code over and over as many times
 *    as needed. Loops are useful to access collections of data. 
 * 
 * 1: We can loop over arrays with a "for" loop. A "for" loop accessess the elements at each index in 
 *    the array. It has a start, stop, and update.
 * 
 * 2: We can loop over objects using a "for-in" loop, which accesses the object's properties (key/value)
 *    pairs. 
 * 
 * 3: We can use "while" loops to execute a block of code oover and over again while a certain condition
 *    is true. A "while" loop has a start, stop, and update. 
 * 
 */

//"for" loop
//to print something to the console a certain number of times
//start at 0, stop when it's not < 3 anymore, update by adding one at each iteration
for (i = 0; i < 3; i++){
    //print i to the console
    console.log(i);
}
/* prints:
            0
            1
            2
*/
//"for" loop to print counting down
//start at 4, stop at 0, count down by 1 at each iteration
for (let i = 4; i >= 0; i--){
    console.log(i);
}
/* prints:
            4
            3
            2
            1
            0
*/

//loop over array
let array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++){
    //add 1 to each value in array
    array[i] += 1;
}
console.log(array); // [2, 3, 4, 5]

//loop backwards over array
//start at last index value, stop at 0, count down 
for (let i = array.length-1; i >= 0; i--){
    //subtract 1 from each index value
    array[i] -= 1;
}
console.log(array); // [1, 2, 3, 4]


//loop over an object with "for-in" loo
let myObj = {
    name: "Karlie",
    age: 28,
    city: "New Orleans"
};

for (let key in myObj){
    //print every key value to the console
    console.log(myObj[key]); 
}
/* prints:
            "Karlie"
            28
            "New Orleans"
*/

//while loop
let number = 6;
//while number is less than 10
while (number < 10){ // <-- condition
    //print it to the console
    console.log(number);
    //add 1 to number at evert iteration
    number++; // <-- update
}
/* prints:
            6
            7
            8
            9
*/