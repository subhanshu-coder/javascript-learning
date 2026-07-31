function asyncfunc1() {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("data is fetched");
            resolve("success");
        }, 5000);
    })
}

function asyncfunc2 () {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("data is fetched");
            resolve("success");
        }, 5000);
    })
}

console.log("data loading...");
asyncfunc1().then((res) => {
    console.log("fetching data 2...")
    asyncfunc2().then((res) => {
        // console.log("all data fetched");
    })
})

async function getAllData() {
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
 console.log("getting data3...");
    await getData(3);
     console.log("getting data4...");
    await getData(4);
     console.log("getting data5...");
    await getData(5);
}

// let result = getAllData();






// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("hii i am good");
//         // resolve("success");
//         reject("error");
//     });
// };

// let promise = getPromise (); //calling the function or saving in promise variable
// promise.then((res) => {  //then block will be executed when promise is resolved
//     console.log("i am in then block");
// });

// promise.catch((err) => {  //promise catch block will be executed when promise is rejected
//     console.log("i am in catch block"); 
// })




// function getdata(dataId, getNextData){
//     return new Promise ((resolve , reject) => {
//         setTimeout(() => {
//             console.log(`data is fetched for ${dataId}`);
//             resolve("success");
//             if (getNextData){
//                 getNextData();

//             }

//         }, 5000);
//     });
// }