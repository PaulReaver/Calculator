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
    return a / b;
}

//Function responsible for calling the right function to perform an operation
function operate(x, y, operator) {
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
    console.log(result);
}

operate(5, 2, "/");


