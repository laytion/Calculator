// const subtractBtn = document.querySelector('#subtract');
// const multiplyBtn = document.querySelector('#multiply');
// const divideBtn = document.querySelector('#divide');
const numbersContainer = document.querySelector('#numbersContainer');
const screen = document.querySelector('#numberScreen');

function makeNumberBoard() {

    //top bar
    addButton('/', 'division');
    addButton('%', 'percentage');
    addButton('+/-', 'negativeSign');
    addButton('AC', 'clear');

    for (let i = 9; i >= 0; i--) {
        if (i == 9) {
            addButton('*', 'multiplication');
        }
        else if (i == 6) {
            addButton('-', 'subtraction');
        }
        else if (i == 3) {
            addButton('+', 'addition');
        }
        else if (i == 0) {
            addButton('=', 'equals');
            addButton('.', 'decimal');
        }
        let number = document.createElement('div');
        number.textContent = `${i}`;
        number.classList.add(`number`);
        if (i == 0) {
            number.classList.add(`zero`)
        }
        numbersContainer.appendChild(number);
    }
}

function addButton(name, cssClass) {
    let button = document.createElement('div');
    button.textContent = name;
    button.classList.add('block', cssClass);
    numbersContainer.appendChild(button);
}


function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
}

function operate(operator, a, b) {
    if (operator == 'add') {
        return add(a, b);
    }
    else if (operator == 'subtract') {
        return subtract(a, b);
    }
    else if (operator == 'multiply') {
        return multiply(a, b);
    }
    else if (operator == 'divide') {
        return divide(a, b);
    }
}

let a = 0;
let b = '';
let operator = 'add';

function numbersClicked() {
    document.querySelectorAll('.number').forEach(number => {
        number.addEventListener('click', () => {
            b += number.textContent;
            screen.textContent = b;
        })
    });
}

function operatorsClicked() {
    let addition = document.querySelector('.addition');
    let subtraction = document.querySelector('.subtraction');
    let multiplication = document.querySelector('.multiplication');
    let division = document.querySelector('.division');
    let equals = document.querySelector('.equals');

    addition.addEventListener('click', () => {
        a = operate(operator, a, parseFloat(b));
        operator = 'add';
        b = '';
        screen.textContent = a;
    })

    subtraction.addEventListener('click', () => {
        a = operate(operator, a, parseFloat(b));
        operator = 'subtract';
        b = '';
        screen.textContent = a;
    })

    multiplication.addEventListener('click', () => {
        a = operate(operator, a, parseFloat(b));
        operator = 'multiply';
        b = '';
        screen.textContent = a;
    })

    division.addEventListener('click', () => {
        a = operate(operator, a, parseFloat(b));
        operator = 'divide';
        b = '';
        screen.textContent = b;
    })

    equals.addEventListener('click', () => {
        a = operate(operator, a, parseFloat(b));
        operator = 'add';
        screen.textContent = a;
        b = 0;
    })

    let clear = document.querySelector('.clear');
    clear.addEventListener('click', () => {
        b = '';
        screen.textContent = b;
        a = 0;
        operator = 'add';

    })

    let negativeSign = document.querySelector('.negativeSign');
    negativeSign.addEventListener('click', () => {
        if (parseFloat(screen.textContent) == a) {
            a = -a;
            screen.textContent = a;
        }
        else if (screen.textContent == b) {
            b = -b;
            screen.textContent = b;
        }
    })

    let percentage = document.querySelector('.percentage');
    percentage.addEventListener('click', () => {
        if (parseFloat(screen.textContent) == a) {
            a = a * 0.01;
            screen.textContent = a;
        }
        else if (screen.textContent == b) {
            b = parseFloat(b) * 0.01;
            screen.textContent = b;
        }
    })

    let decimal = document.querySelector('.decimal');
    decimal.addEventListener('click', () => {
        if (parseFloat(screen.textContent) == a) {
            a = a.toString() + '.';
            screen.textContent = a;
        }
        else if (screen.textContent == b) {
            b = b + '.';
            screen.textContent = b;
        }
    })
}



makeNumberBoard();
numbersClicked();
operatorsClicked();





































// let screenValue = '';



// function clear() {
//     document.querySelector('.clear').addEventListener('click', () => {
//         console.log('clear has been clicked');
//         screen.textContent = '';
//         screenValue = '';
//     })
// }

// function addClicked() {
//     const addBtn = document.querySelector('.addition');
//     addBtn.addEventListener('click', () => {
//         let value1 = screenValue;
//         console.log(`value1 is ${value1}`);
//         screen.textContent = '';
//         screenValue = '';

//         let equals = document.querySelector('.equals');
//         equals.addEventListener('click', () => {
//             let value2 = screenValue;
//             console.log(`value2 is ${value2}`);
//             let result = operate('add', value1, value2);
//             screen.textContent = result;
//             screenValue = result;
//             console.log(`screenValue is ${screenValue}`)
//         })
//     })
// }

// function subtractClicked() {
//     const subtractBtn = document.querySelector('.subtraction');
//     subtractBtn.addEventListener('click', () => {
//         let value1 = screenValue;
//         screen.textContent = '';
//         screenValue = '';

//         let equals = document.querySelector('.equals');
//         equals.addEventListener('click', () => {
//             let value2 = screenValue;
//             let result = operate('subtract', value1, value2);
//             screen.textContent = result;
//         })
//     })
// }


// clear();
// addClicked();
// subtractClicked();
// maybe refactor code later
// function calculate(operator) {
//     let equals = document.querySelector('.equals');
//     equals.addEventListener('click', () => {
//         let result = operate(operator, value1, value2);
//         screen.textContent = result;
//     })
// }
