function add() { }

function subtract() { }

function multiply() { }

function devide() {

}

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
        //return true was commented so if the user presses Clear a second time
        //The Clear statement can be run and the display will not be empty
        if (display.innerText === '0') {
            display.innerText = ''
            currentNum = '';
            firstNum = '';
            // return true
        }

        if (button.innerText == '/' || button.innerText.toLowerCase() == 'x' || button.innerText == '-' || button.innerText == '+') {
            firstNum = currentNum;
            currentNum = ''
            operator = button.innerText.trim()
            display.innerText += " " + button.innerText + " ";
            console.log('test')
            return true
        }
        if (button.innerText == '=') {
            secondNum = currentNum;
            currentNum = ''

            switch (operator) {
                case '/':
                    result = +firstNum / +secondNum
                    break;
            }
            display.innerText = result;
            return true
        }

        let num = button.innerText;
        currentNum += num;
        display.innerText += num;

        if (button.innerText == 'C') {
            display.innerText = '0';
            currentNum = '';
            firstNum = '';

            return true
        }

    })

})
