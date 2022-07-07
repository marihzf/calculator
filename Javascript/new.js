let displayBox = document.querySelector(".display");

function showDisplay(event) {
    const x = event.target.innerText;
    if (displayBox.innerHTML == 0) {
        return displayBox.innerHTML = x;
    }
    return displayBox.innerHTML += x;
}

function clearAll() {
    displayBox.innerHTML = 0;
}

function clear() {
    let text = displayBox.innerText;
    if (text.length === 1) {
        displayBox.innerText = 0;
    } else {
        displayBox.innerText = text.substring(0, text.length - 1);
    }
}

function calculate() {
    const result = displayBox.innerText;
    displayBox.innerText = eval(result)
}

function keyHandeler(event) {
    showDisplay(event.key);

}
document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".clear-last").addEventListener("click", clear);
document.querySelector(".all-clear").addEventListener("click", clearAll);
window.addEventListener("keydown", keyHandeler);
let btnList = document.querySelectorAll(".show-display");
btnList.forEach(item => {
    item.addEventListener("click", showDisplay);
    window.addEventListener("keydown", keyHandeler);
})