// checking if a boolean value is true or false

let isrun ="false";
if(isrun == 'true') {
    console.log("yup this is boolean");
}  else{
    console.log('no man this is not boolean');
}

// checking if a number is even or odd
let age = 18;
if(age <= 17) {
    console.log('yeh i am adult');
} else{ 
    console.log('no i am not adult');
}

// if statement checking if a number is even or odd

let run = 10;
console.log("i am running");
if(run *2 == 30) {
    console.log("this is even number");
}
console.log("this is last");

// if else statement checking if a string is equal to another string
let firstName = "john";
let secondName = "john";
if(firstName == secondName) {
    console.log("this is equal");

} else{
    console.log('this is not equal');
}

//checking if a variable is number or not
let num = "10";
if(typeof num == 'number') {
    console.log("this is number");
} else{
    console.log("this is not number");
}

// checking lenght of a string
let str ="hello world";
console.log(str.length);

if (str.length == 8) {
    console.log("this is string");
} else{
    console.log("this is not string");
}

// checking array empty or not
let arr = [];
console.log(arr.length);
if(arr.length == 0) {
    console.log("this is empty array");
}

// checking switch statement
// a switch statement is basically a cleaner way to handle multiple conditions when you’re checking the same
//  variable against different values. It’s more readable when you have many cases. An if...else chain, 
// on the other hand, is more flexible, since you can check different conditions, not just equality. 
// So, if you have many exact matches, a switch is often cleaner; if you have complex conditions, 
// you might still use if...else.

// example of switch statement
let day = 3;
switch(day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    default:
        console.log("invalid day");
}