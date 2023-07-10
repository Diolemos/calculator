import { calculator } from "./calculator.js"

let display = document.querySelector('.display')
display.innerText = '0'


let buttons = document.querySelectorAll('.btn')

let operator = ''
let firstOperand = ''
let secondOperand = ''


buttons.forEach( button=> {
    button.addEventListener('click', event=>{
         console.dir(event.target)    
        if(event.target.textContent.trim() == 'C' ){
            resetCalculator()
            return
        }
        if (display.innerText === '0') {
            display.innerText = ''
            firstOperand = '';
            
        }
    })
})
    

const resetCalculator = ()=>{
    firstOperand = ''
    secondOperand = ''
    operator = ''
    display.innerText = '0'

}