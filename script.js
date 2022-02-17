function add() { }

function subtract() { }

function multiply() { }

function devide() { }

function operate(num1, num2, op) {


}
// display 
let display = document.querySelector('.display')
// buttons nodelist
let btns = document.querySelectorAll('.btn')
let displayText = '';

// event listener for the buttons
btns.forEach(function (button) {
    button.addEventListener('click', (event) => {
        let num = button.innerText.trim();
        displayText += num;
        display.innerText = displayText;

        if (button.innerText == 'C') {
            displayText = '';
            display.innerText = displayText;
            return true
        }
    })
})


