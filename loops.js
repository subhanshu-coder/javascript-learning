for (let i =1; i<= 10; i++ ){
    console.log("hello dunia");
}

// for convert into while loop

let d =1
while( d<=10) {
    console.log("prince");
    d++;
}

for (let a =5; a>=1 ; a--){
    console.log(a);
}

//while loop
let e =5;
while( e>=1 ){
    console.log(e);
    e--;
}

// for (let b = 1; b<=6; b++) {
//     if(b ==4){
//         break;
// }   else {
//     console.log(b)
// }
// }

// do-while loops
let b = 1;
do{
    console.log(b)
    b++;
} while(b<4);

let f =1;
while(f<6) {
     if(f==3){
    break;
     } else 
        console.log(f)
    f++;
}

// for (let c =1; c<=4; c++){
//     if (c==3)
//         continue;
//     else
//         console.log(c)
    
// }

let c =1
  while(c <5){
    if(c==3)
        continue;
    else 
        console.log("hii");
    c++;
  }


//   problems
let sum = 0;
for (let g = 1; g <= 5; g++) {
    sum += g;
}
console.log(sum);

let h = 0;
while (h < 3) {
    console.log(i);
    h++;
}

for (let j = 1; j <= 20; j++) {
    if (j % 2 === 0) {
        console.log(j);
    }
}

for (let k = 1; k <= 15; k++) {
    if (k % 2 !== 0) {
        console.log(k);
    }
}

let num = 7;

for (let l = 1; l <= 10; l++) {
    console.log(num * l);
}

let str = "javascript";
let count = 0;

for (let m = 0; m < str.length; m++) {
    if (
        str[m] === "a" ||
        str[m] === "e" ||
        str[m] === "i" ||
        str[m] === "o" ||
        str[m] === "u"
    ) {
        count++;
    }
}

console.log(count);

let arr = [5, 12, 9, 25, 18];
let largest = arr[0];

for (let n = 1; n < arr.length; n++) {
    if (arr[n] > largest) {
        largest = arr[n];
    }
}

console.log(largest);

let arr = [1, 2, 3, 4, 5];
let reversed = [];

for (let o = arr.length - 1; o >= 0; o--) {
    reversed.push(arr[o]);
}

console.log(reversed);