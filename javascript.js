const screenText = document.querySelector('.screen-text');
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
    }
}

function generateNumber(number) {
    if(screenText.textContent == '0') {
        screenText.textContent = number;
    } else {
        screenText.textContent += number;
    }
}