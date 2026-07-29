// function changetext () {
//     let fpara = document.querySelector(".content");
//     fpara.textContent = "hello i am changed"
// }
//     let fpara = document.querySelector(".content");

// fpara.addEventListener("click", changetext);

// ques 1
let modeBtn = document.querySelector("#mode");
let currmode = "light"; //dark 

modeBtn.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
       document.body.style.backgroundColor = "black";
    } else {
        currmode = "light";
        document.body.style.backgroundColor = "white";
    }
    console.log(currmode);
})