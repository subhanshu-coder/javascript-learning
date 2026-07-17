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
console.log("my father name is " + myFather.firstName + " , his age is " + myFather.age + " and his eye color is " + myFather.eyecolor);