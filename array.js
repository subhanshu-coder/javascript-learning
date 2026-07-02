/* declare an array named 'cities' containing 
the names of 4 cities as strings. Then,
london, pairis, new york, tokyo'. and access
    the third element of the array and store it in a variable named 'favoritecity' or print it to the console.
*/
let cities = ['london', 'paris', 'new york', 'tokyo'];
let favoriteCity = cities[2];
console.log(cities[2]);

//object testing

let obj = {
    name: "john",
    age : 21,
    "full name" : "john Lock",  // reminder: if the key has a space in it, you need to use quotes
    greet: function () {
        console.log("hello dunia");
    }
}

console.log(obj) // remember if you want to print something particular then you have to write obj.name in my case i justwant to print obj.name then name data print 
obj.greet() // this is how you call a function inside an object

console.log(typeof obj) // this is how you check the type of an object

// creation of array

let arr =[1, "john", true, null, undefined] // this is how you create an array with different data types
//  array constructor
let brr =new Array (1,2,3,4)

brr.push('prince'); // this is how you add an element to the end of an array
brr.pop(); // this is how you remove the last element of an array
brr.shift(); // this is how you remove the first element of an array
brr.unshift('prince'); // this is how you add an element to the beginning of an array
console.log(brr.slice(1,3)); // this is how you get a portion of an array
brr.splice(1,2, 'prince'); // this is how you remove elements from an array

console.log(brr) // this is how you print an array
console.log(typeof arr) // this is how you check the type of an array
console.log(arr[1]) // this is how you access an element of an array

// array Map
// array map

let crr = [1,2,3,4,5];
crr.map((number,index) => {
    console.log(number);
    console.log(index);
})

// filter check

let arr1 = [1,2,3, 'john', 'jack',undefined, null];
let arr2 = arr1.filter ((value) => {
    if(typeof (value) == 'string') {
        return true;

    }  else {
        return false;
    }

});

console.log(arr2);

// sorting method

/*

✅ arr.sort() → works fine for strings (alphabetical).
⚠️ For numbers, always use:
Ascending: arr.sort((a, b) => a - b)
Descending: arr.sort((a, b) => b - a)

*/

let arr3 = [1,10,5,7,2,4,9];
arr3.sort((a,b) => a-b);
console.log(arr3);

//decending string order

let city = ['mumbai', 'delhi', 'up', 'bhopal', 'bengaluru', 'chennai', 'kolkata', 'pune', 'hyderabad'];
city.sort().reverse();
console.log(city);

let arr4 = [1,2,3,5];
arr4.push(4);
arr4.pop();
console.log(arr4);