
// variables
let a = 0;
let b = 0;
let operator = '';


// calculator main operation
const operate = function (operator, a, b) {
    result = 0;
    switch (operator) {
        case ('+') :
            result = add(a, b);
            break;
        case ('-') :
            result = subtract(a, b);
            break;
        case ('*') :
            result = multiply(a, b);
            break;
        case ('/') :
            result = divide(a, b);
            break;
        default :
            break;
    }
    return result;
}


// calculator helper functions
const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}


let displayValue = '';
let operation = '';

const handleBtnPress = document.querySelector('.buttons');
handleBtnPress.addEventListener('click', event => {
    if (event.target.classList.contains('number')) {
        displayValue += event.target.textContent;
    } else if (event.target.classList.contains('operator')) {
        console.log(displayValue);
        displayValue = '';
        operation = event.target.textContent;
    }
    
})