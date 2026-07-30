// let promise = new Promise((resolve, reject) => {
//     console.log("hii i am good");
//     resolve()
// });

function getdata(dataId, getNextData){
    return new Promise ((resolve , reject) => {
        setTimeout(() => {
            console.log(`data is fetched for ${dataId}`);
            resolve("success");
            if (getNextData){
                getNextData();

            }

        }, 5000);
    });
}