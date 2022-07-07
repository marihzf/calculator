let displayBox = document.querySelector(".display");

function showDisplay(event) {
    const x = event.target.innerText;
    if (displayBox.innerHTML == 0) {
        return displayBox.innerHTML = x;
    }
    return displayBox.innerHTML += x;
}

function calculate() {
    const result = displayBox.innerText;
    displayBox.innerText = eval(result);
}

function allClear() {
    displayBox.innerText = 0;
}

function Clear() {
    let text = displayBox.innerText;
    if (text.length === 1) {
        displayBox.innerText = 0;
    } else {
        displayBox.innerText = text.substring(0, text.length - 1);
    }
}


document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-clear").addEventListener("click", allClear);
document.querySelector(".clear-last").addEventListener("click", Clear);
let btnList = document.querySelectorAll(".show-display");
btnList.forEach(item => {
    item.addEventListener("click", showDisplay)
})