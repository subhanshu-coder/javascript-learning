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
