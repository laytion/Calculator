const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const numbersContainer = document.querySelector('#numbersContainer');

function makeNumberBoard() {
    for (let i = 9; i >= 0; i--) {
        let number = document.createElement('div');
        number.textContent = `${i}`;
        number.classList.add('number');
        numbersContainer.appendChild(number);
    }

    let dot = document.createElement('div');
    dot.textContent = '.';
    dot.classList.add('number');
    numbersContainer.appendChild(dot);
    let equals = document.createElement('div');
    equals.textContent = '=';
    equals.classList.add('number', 'equals');
    numbersContainer.appendChild(equals);

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