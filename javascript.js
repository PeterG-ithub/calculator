const screenText = document.querySelector('.screen-text');
const buttons = document.querySelectorAll('btn');


buttons.forEach(btn => {
    btn.addEventListener('click', event => {
        screenText.textContent = event.target.id;
        console.log(event.target.id);
    });
});