const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const numbersContainer = document.querySelector('#numbersContainer');

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
        numbersContainer.appendChild(number);
    }
}

function addButton(name, cssClass) {
    let button = document.createElement('div');
    button.textContent = name;
    button.classList.add('number', cssClass);
    numbersContainer.appendChild(button);
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator == 'add') {
        add(a, b);
    }
    else if (operator == 'subtract') {
        subtract(a, b);
    }
    else if (operator == 'multiply') {
        multiply(a, b);
    }
    else if (operator == 'divide') {
        divide(a, b);
    }
}

makeNumberBoard();