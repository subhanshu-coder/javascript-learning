// operations 

/*
let a =10;
let b = 20
a +=10;
console.log(a);
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
console.log(a/b); 
*/

console.log(10>20);

//loose equality operator
// the loose equality the operatoe (==) allows type conversion and only checks for value quuality. So, strict is exact,and loose is more flexible, allowing for type coercion and value comparison.
console.log(10 == "10"); // true

//strict equality operator
// this is going to be false because the data type is different

// strickt equality operator (===) checks both the value and the type, ensuring they're exactly the same
console.log(10 === '10'); // false

//ternary operator
// the ternary operator is a concise way to write conditional statements. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. The syntax is: condition ? expressionIfTrue : expressionIfFalse
let age = 19;
let driving = (age <18 ) ?"not eligible" : "eligible";
console. log (driving);

// concept clear of operators in javascript 