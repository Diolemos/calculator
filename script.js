function add() { }

function subtract() { }

function multiply() { }

function devide() { }

function operate(num1, num2, op) {


}
// display 
let display = document.querySelector('.display')
display.innerText = '0'
// buttons nodelist
let btns = document.querySelectorAll('.btn')
//variable 
let operator = ""
let currentNum = ""
let firstNum = ""
let secondNum = ""
let result = ""

// event listener for the buttons
btns.forEach(function (button) {
    button.addEventListener('click', (event) => {
        //This replaces the zero on the calculator
        if (display.innerText === '0') {
            display.innerText = ''
        }

        if (button.innerText == '/' || button.innerText.toLowerCase() == 'x' || button.innerText == '-' || button.innerText == '+') {
            firstNum = currentNum;
            currentNum = ''
            operator = button.innerText.trim()
            console.log('test')
            return true
        }

        let num = button.innerText.trim();
        currentNum += num;
        display.innerText += num;

        if (button.innerText == 'C') {
            displayText = '';
            display.innerText = displayText;
            return true
        }
        if (button.innerText == '+') {

            return true
        }
    })

})
