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
        //If = is pressed... 
        //
        if (button.innerText == '=') {
            secondNum = currentNum;
            currentNum = ''
            //Depending on the operator, the variable result will be equal to firstNum computed with the secondNum. 
            switch (operator) {
                case '/':
                    result = +firstNum / +secondNum
                    break;
                //this x has to be lower case since I used .toLowerCase previously 
                case 'x':
                    result = +firstNum * +secondNum
                    break;
                case '-':
                    result = +firstNum - +secondNum
                    break;
                case '+':
                    result = +firstNum + +secondNum
                    break;

            }
            display.innerText = result;
            return true
        }
        if (button.innerText == 'DEL') {
            if (display.innerText != '0') {
                currentNum = currentNum.slice(0, -1)
                display.innerText = display.innerText.slice(0, -1)
                if (currentNum == '' && firstNum == '') {
                    currentNum = '0';
                    display.innerText = '0';
                }
                return true;
            }
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
