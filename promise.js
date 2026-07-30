const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("hii i am good");
        // resolve("success");
        reject("error");
    });
};

let promise = getPromise (); //calling the function or saving in promise variable
promise.then(() => {  //then block will be executed when promise is resolved
    console.log("i am in then block");
});

promise.catch(() => {
    console.log("i am in catch block");
})




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