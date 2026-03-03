
let display = document.getElementById('result');


function appendToDisplay(value) {
    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}


function clearDisplay() {
    display.innerText = "0";
}


function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}


function calculateRoot() {
    let value = parseFloat(display.innerText);
    if (value >= 0) {
        display.innerText = Math.sqrt(value);
    } else {
        display.innerText = "Error";
    }
}


function calculateResult() {
    try {
        
        let expression = display.innerText.replace(/%/g, '/100');
        let result = eval(expression);
        display.innerText = result;
    } catch (error) {
        display.innerText = "Error";
    }
}