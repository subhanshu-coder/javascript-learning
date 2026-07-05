// function defitions
// Functions are reusable code blocks designed for particular tasks
// You call a function by adding parentheses to its name: name()

// () is carrying parameter
function greet (){
     console.log("Hello");
}

// without function call it will not execute or not print anything
greet(); // function call

function pass (){
    for (let i =1; i<=100; i++){
        console.log(i);
    }
}
pass(); // function call

// parameter function or argument
// a,b is parameter and 10,20 is arguments

function sum (a,b){
    console.log("this is the sum of a and b:", a+b);

}
sum(10,20); // function call with arguments declare


// return function
function add (x,y){
    return x+y;
    // unreachable statements 
    // let a =10;
    // let b = 15;
}
let result = add(2,5);
console.log ("this is result" + " " + result);

/* The most useful functions work like this:

Parameters - some values are sent to the function
Arguments - some values are received by the function
Function Code - some work is done inside the function
Return Output - some value is returned from the function

*/

// create in variable 
const old = function(a,b){
    return a * b;
}

let ans = old(1,2);
console.log(ans);


function sold (a,b) {
    return a * b;
}
let value = sold(12, 12);
console.log(value);

// start with the variable 

let oldgreed = function (a,b){
    let ans1 = (a * b);
    return ans1;
}
let valua  = oldgreed (12, 12);
console.log(valua);

