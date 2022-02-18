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

            return true
        }
        //If = is pressed... 
        //
        if (button.innerText == '=') {
            secondNum = currentNum;
            // currentNum = ''
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
            result = result.toString()
            display.innerText = result;
            currentNum = result;
            firstNum = ''
            secondNum = ''
            operator = ''
            return true;
        }
        if (button.innerText == 'DEL') {
            //Do something only if the display's content is different from 0
            if (display.innerText !== '0') {
                //Is there an operator? is the op different from zero?
                if (operator) {
                    //if there is an operator, is It the last digit on the display??    
                    if (display.innerText.slice(-1) == operator) {
                        //So Delete the operator and de firstNum
                        operator = ''
                        display.innerText = display.innerText.slice(0, -1);
                        currentNum = display.innerText;
                        firstNum = ''
                        return true;
                        //end of 4th if stmnt
                    } else {
                        //otherwise, if the operator is not the last digit
                        // Will keep and subtract the last digt from our variables
                        display.innerText = display.innerText.slice(0, -1);
                        currentNum = currentNum.slice(0, -1);
                        firstNum = firstNum.slice(0, -1)

                        return true;
                        //end of else statement
                    }


                    //end of operator test(3rd if)    
                }
                //if theres no operator...It means there is no firstNum
                display.innerText = display.innerText.slice(0, -1);
                currentNum = display.innerText
                //if current num has become an empty string, then set the display content
                //and the current number to '0'... 
                if (currentNum == '') {
                    currentNum = '0'
                    display.innerText = '0'
                    return true;
                    //end of fith if stmnt. the one that tests if the current num is an empty strng     
                }

                //end of second if stmnt    
            }
            //the end of the DELS first if statement
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
