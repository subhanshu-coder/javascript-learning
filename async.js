
// synchronous explaination
// it means that the code is executed line by line and the next line will be executed only after the previous line is executed completely
console.log("hello i am printed first");
console.log("hello i am printed second");
console.log("hello i am printed third");


// asynchronous explaination
// it means that the code is executed line by line but the next line will be executed without waiting for the previous line to be executed completely

console.log("hello i am printed first");

setTimeout(() => {
     console.log("hello i am printed after 6 sec");
}, 6000);

console.log("hello i am printed second");