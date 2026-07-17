// Object Constructor Functions
// Sometimes we need to create many objects of the same type.

// To create an object type we use an object constructor function.

// It is considered good practice to name constructor functions with an upper-case first letter.

// In the constructor function, this has no value.
function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eye;
}
// The value of this will become the new object when a new object is created.
const myFather = new person("john", "doe", 15, "blue");

// Now we can use new Person() to create many new Person objects:
const myMOTHER = new person ( "jane", "doe", 45, "green");
const mySISTER = new person ( "jane", "doe", 45, "green");
const myBROTHER = new person ( "jane", "doe", 45, "green");


// To add a new property, you must add it to the constructor function prototype:
person.prototype.nationality = "English";


console.log("my father name is " + myFather.firstName + " , his age is " + myFather.age + " and his eye color is " + myFather.eyecolor);
console.log("The nationality of my father is " + myFather.nationality);