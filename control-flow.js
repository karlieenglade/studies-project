/**
 * CONTROL FLOW:
 * 
 * 0: Control flow refers to the order in which the computer executes statements in script (the code).
 *    Code is read from top to bottom, left to right, unless there are structures in the code that 
 *    disrupt this flow. Conditional statements change the control flow.
 * 
 * 1: Conditionals change control flow since the code that executes is dependend on the truthiness of 
 *    conditoinals. Conditionals consist of "if", "else if", and (sometimes) "else" statements.
 * 
 * 2: Switch statements are also conditionals that perform in a similar way to "if" statements, but 
 *    switch statements have a "break" to stop the code from executing, unlike "if" statements. If no 
 *    no conditions are met, then the switch statement "defaults".
 * 
 * 
 */

//if, else if, else 
/*
if (condition){
    then do this
} else if (different condition){
    then do this instead
} else {     <-- if none of the conditions are true
    then do this instead
}
*/

//if statements can have as many "else-if" statements as needed
//if statements can only have 1 "else" statement
if (1 === 2){
    console.log("1 is 2");
} else if (3 === 3){
    console.log("3 is 3");
} else {
    console.log("IDK");
}
// "3 is 3"

//can have a an if-else (no else-if statement between them)
if (1 > 3){
    console.log("amazing");
} else {
    console.log("ok");
}
// "ok"

//can have no "else" statement 
if ("green" == 7){
    console.log("green is 7");
} else if ("green" === "red"){
    console.log("green is red");
} else if ("green" === "green"){
    console.log("green is green");
}
// "green is green"

//once a condition is met, code stops executing, even if there is a another true condition after it
if (false){
    console.log("frog");
} else if (false){
    console.log("hop");
} else if (true){
    console.log("first always wins");
} else if (true){
    console.log("oh well");
}
// "first always wins"


//switch statements
/*
switch(expression){    <--expression is what each case is comparing to
    case a:             <-- is expression === a 
    // code block          <-- then do this
    break;                  <-- and break
    case b:             <-- else if expression === b
    // code block
    break;
    default:           <-- else
    // code block
}

*/

let dog = {
    name: "Scruffy",
    age: 7,
    color: "black",
    barks: true 
};

switch(dog.name){
    //if dog.name is "Bob"
   case "Bob":
    // print "name is Bob"
    console.log("name is Bob");
    // break (stop)
    break;
    //if dog.name is "Spot"
    case "Spot":
        //print "name is Spot"
        console.log("name is Spot");
        //break (stop)
        break;
        //if dog.name is "Scruffy"
        case "Scruffy":
            //print "name is Scruffy"
            console.log("name is Scruffy");
            //break (stop)
            break;
            //default (else) (if no cases are true)
            default:
                //print "no name found"
                console.log("no name found");
}

// "name is Scruffy"