function changetext () {
    let fpara = document.querySelector(".content");
    fpara.textContent = "hello i am changed"
}
    let fpara = document.querySelector(".content");

fpara.addEventListener("click", changetext);