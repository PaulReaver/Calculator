//Initial array of numbers
let array = [0, null, 0];

//Initial display of 0
let displayResult = document.querySelector("#display-result");
displayResult.textContent = array[0];

//By pressing equals sign the calculator operates
document.querySelector("#equals").addEventListener("click", () => {
    if (array[1] == null) {
        return;
    }
    array[0] = operate(array[0], array[1], array[2]);
    array[1] = null;
    array[2] = 0;
    displayResult.textContent = array[0];
})

//Gets user number depending if there is an operator selected
for (let i = 0; i <= 9; i++) {
    document.querySelector(`#num${i}`).addEventListener("click", () => {
        if (array[1] == null) {
            array[0] = String(array[0]).concat(i);
            array[0] = +array[0];
            displayResult.textContent = array[0];
        } else {
            array[2] = String(array[2]).concat(i);
            array[2] = +array[2];
            displayResult.textContent = `${array[0]} ${array[1]} ${array[2]}`;
        }
    })
}

//Get an operator
for (let i = 1; i <= 4; i++) {
    document.querySelector(`#op${i}`).addEventListener("click", () => {
        if (`#op${i}` == "#op1") {
            array[1] = "+";
        } else if (`#op${i}` == "#op2") {
            array[1] = "-";
        } else if (`#op${i}` == "#op3") {
            array[1] = "*";
        } else {
            array[1] = "/";
        }
        displayResult.textContent = `${array[0]} ${array[1]}`;
    })
}

//Function that perform addition
function add(a, b) {
    return a + b;
}

//Function that performs subtraction
function subtract(a, b) {
    return a - b;
}

//Function that performs multiplication
function multiply(a, b) {
    return a * b;
}

//Function that performs division
function divide(a, b) {
    if (b == 0) {
        return 0;
    }
    return a / b;
}

//Function responsible for calling the right function to perform an operation
function operate(x, operator, y) {
    let result;
    if (operator == "+") {
        result = add(x, y);
    } else if (operator == "-") {
        result = subtract(x, y);
    } else if (operator == "*") {
        result = multiply(x, y);
    } else if (operator == "/") {
        result = divide(x, y);
    }
    return result;
}


