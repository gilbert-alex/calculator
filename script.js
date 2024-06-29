
const btns = document.querySelector('.buttons');
const display = document.querySelector('.main');

btns.addEventListener('click', event => {
    handleBtnPress(event);
});

let displayValue = '';
let ifn = []; // Infix Notation of Expression
let rpn = []; // Reverse Polish Notation of Expression


const handleBtnPress = function (event) {
    //
    const classList = event.target.classList;
    const value = event.target.textContent;

    if (classList.contains('number')) {
        // build number on display
        if (display.textContent.length === 1 
            && display.textContent === '0') {
                display.textContent = value;
        } else {
            display.textContent += value;
        }
    }

    if (classList.contains('operator')) {
        // store number and operator in memory
        // reset display for another number
        ifn.push(display.textContent);
        ifn.push(value);
        display.textContent = '0';
    }

    if (classList.contains('equal')) {
        // store final number and run computation
        ifn.push(display.textContent);
        result = operate(ifn[1], ifn[0], ifn[2]);
        display.textContent = result
        ifn = [];
    }

    if (event.target.id === 'clear') {
        ifn = [];
        display.textContent = '0';
    }
}

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