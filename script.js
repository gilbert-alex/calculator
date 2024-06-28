
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
    return Number(a) + Number(b);
}

const subtract = function (a, b) {
    return Number(a) - Number(b);
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

// to do: implement a shunting yard algo to handle multi operator expressions
// may have to refactor helper functions
let displayValue = '';
let expression = [];

const handleBtnPress = document.querySelector('.buttons');
const display = document.querySelector('.main');


// make this a switch for readability and to leverage cascade. 
// to do: add check for NaN and undefined 
handleBtnPress.addEventListener('click', event => {
    if (event.target.classList.contains('number')) {
        displayValue += event.target.textContent;
    } else if (event.target.classList.contains('operator')) {
        expression.push(displayValue);
        expression.push(event.target.textContent);
        displayValue = '';
    } else if (event.target.classList.contains('equal')) {
        expression.push(displayValue);
        display.textContent = operate(expression[1], expression[0], expression[2]);
        displayValue = '';
        expression = [];
    } else if (event.target.id === 'clear') {
        console.log('clear');
    } else {
        console.log(`${event.target.textContent} has no function`);
    }
    
})