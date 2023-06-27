const screenInput = document.querySelector('.screen-input');
const screenAnswer = document.querySelector('.screen-answer');
const buttons = document.querySelectorAll('btn');


buttons.forEach(btn => {
    btn.addEventListener('click', event => {
        mainControl(event.target.id);
        console.log(event.target.id);
    });
});

function mainControl(btnInput) {
    switch(btnInput) {
        case 'one':
            generateNumber(1);
            break;
        case 'two':
            generateNumber(2);
            break;
        case 'three':
            generateNumber(3);
            break;
        case 'four':
            generateNumber(4);
            break;
        case 'five':
            generateNumber(5);
            break;
        case 'six':
            generateNumber(6);
            break;
        case 'seven':
            generateNumber(7);
            break;
        case 'eight':
            generateNumber(8);
            break;
        case 'nine':
            generateNumber(9);
            break;
        case 'zero':
            generateNumber(0);
            break;
        case 'AC':
            resetCalculator();
            break;
        case 'C':
            deletePrevChar();
            break;
        case 'add':
            generateOperator('+');
            break;
        case 'subtract':
            generateOperator('-');
            break;
        case 'multiply':
            generateOperator('*');
            break;
        case 'divide':
            generateOperator('/');
            break;
        case 'dot':
            generateOperator('.');
            break;
        case 'equals':
            operate();
            break;
    }

}

function generateNumber(number) {
    if(screenInput.textContent == '0') {
        screenInput.textContent = number;
    } else {
        screenInput.textContent += number;
    }
}

function generateOperator(operator) {
    let operators = ['+', '-', '*', '/'];
    let lastChar = screenInput.textContent.slice(-1)
    console.log(lastChar);
    if(operators.includes(lastChar) ) { //check if last character in textContent 
                                        //is operator
        deletePrevChar();       
        screenInput.textContent += operator;
    } else if(screenAnswer.textContent != '') {//check if theres already answer
        const strArr = screenAnswer.textContent.split(' ');
        screenInput.textContent = strArr[2]; 
        screenInput.textContent += operator;
        screenAnswer.textContent = '';
    } else {
        screenInput.textContent += operator;
    }
}

function resetCalculator() {
    screenInput.textContent = '0';
}

function deletePrevChar() {
    if (screenInput.textContent.length < 2) {
        resetCalculator();
    } else {
        screenInput.textContent = screenInput.textContent.slice(0,-1);
    }
}

function operate() {
    let result = '';
    if (readInput().search(/\+/) > 0) {
        const numbers = readInput().split('+');
        result = add(numbers[0], numbers[1]);
    } else if (readInput().search(/\-/) > 0) {
        const numbers = readInput().split('-');
        result = subtract(numbers[0], numbers[1]);
    } else if (readInput().search(/\*/) > 0) {
        const numbers = readInput().split('*');
        result = multiply(numbers[0], numbers[1]);
    } else if (readInput().search(/\//) > 0) {
        const numbers = readInput().split('/');
        result = divide(numbers[0], numbers[1]);
    }
    screenAnswer.textContent = 'ans = ' + result;
    screenInput.textContent = '';
}

function readInput() { //return the text in the screen-input
    return screenInput.textContent;
}

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2)
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2)
}

function divide(num1, num2) {
    return Number(num1) / Number(num2)
}