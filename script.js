//Initializes array with numbers and operator
let array = ["0", null, "0"];

//Displays 0 at the beginning
let displayResult = document.querySelector("#display-result");
displayResult.textContent = array[0];

//Resets the calculator values when the user presses the clear button
document.querySelector("#clear").addEventListener("click", () => {
    array[0] = "0";
    array[1] = null;
    array[2] = "0";
    displayResult.textContent = array[0];
});

//Deletes a digit when the user presses the backspace button
document.querySelector("#backspace").addEventListener("click", () => {
    if (array[1] == null) {
        array[0] = array[0].slice(0, -1);
        displayResult.textContent = array[0];
    } else {
        array[2] = array[2].slice(0, -1);
        displayResult.textContent = `${array[0]} ${array[1]} ${array[2]}`;
    }
})

//Adds a decimal point when the user presses the decimal button
document.querySelector("#decimal").addEventListener("click", () => {
    if (array[1] == null) {
        if (array[0].includes(".") == false) {
            array[0] = array[0].concat(".");
            displayResult.textContent = array[0];
        }

    } else if (array[1] != null) {
        if (array[2].includes(".") == false) {
            array[2] = array[2].concat(".");
            displayResult.textContent = `${array[0]} ${array[1]} ${array[2]}`;
        }
    }
})

//Operates when the user presses the equals button
document.querySelector("#equals").addEventListener("click", () => {
    //Checks if there is an operator already selected so it can skip the function
    if (array[1] == null) {
        return;
    }
    //Operates and resets values of the array
    array[2] = +array[2];
    array[0] = operate(array[0], array[1], array[2]);
    array[0] = String(array[0]);
    array[1] = null;
    array[2] = "0";
    displayResult.textContent = array[0];
    //Resets the first number to 0 if there is an error
    if (array[0] == "error") {
        array[0] = "0";
    }
})

//Gets user number depending whether there is an operator selected
for (let i = 0; i <= 9; i++) {
    document.querySelector(`#num${i}`).addEventListener("click", () => {
        if (array[1] == null) {
            array[0] = array[0].concat(i);
            displayResult.textContent = array[0];
        } else {
            array[2] = array[2].concat(i);
            displayResult.textContent = `${array[0]} ${array[1]} ${array[2]}`;
        }
    })
}

//Gets an operator
for (let i = 1; i <= 4; i++) {
    document.querySelector(`#op${i}`).addEventListener("click", () => {
        if (array[1] != null) {
            array[2] = +array[2]; 
            array[0] = operate(array[0], array[1], array[2]);
            array[2] = "0";
        }
        array[0] = +array[0];
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
        return "error";
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


