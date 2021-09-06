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
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    return parseInt(a) / parseInt(b);
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

function populateScreen() {
    document.querySelectorAll('.number').forEach(number => {
        number.addEventListener('click', () => {
            screen.textContent += number.textContent;
            console.log(screen.textContent);
        })
    });
}



makeNumberBoard();
populateScreen();


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
