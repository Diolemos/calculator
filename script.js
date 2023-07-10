import { calculator } from "./calculator.js"

let display = document.querySelector('.display')
display.innerText = '0'


let buttons = document.querySelectorAll('.btn')

let operator = ''
let firstOperand = ''
let secondOperand = ''
let currentNumber = ''


buttons.forEach( button=> {
    button.addEventListener('click', event=>{
         console.dir(event.target)  //test  
        if(event.target.textContent.trim() == 'C' ){
            resetCalculator()
            return
        }
        if(event.target.classList.contains('number')){
            currentNumber = currentNumber + event.target.textContent.trim()
            display.innerText = `${currentNumber} ${operator?operator:''} ${secondOperand?secondOperand:''}`
        }
    })
})
    

const resetCalculator = ()=>{
    firstOperand = ''
    secondOperand = ''
    operator = ''
    currentNumber = ''
    display.innerText = '0'

}