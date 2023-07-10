import { calculator } from "./calculator.js"

let display = document.querySelector('.display')
display.innerText = '0'


let buttons = document.querySelectorAll('.btn')

let operatorText = ''
let operatorMethod = ''
let firstOperand = ''
let secondOperand = ''



buttons.forEach( button=> {
    button.addEventListener('click', event=>{
         console.dir(event.target)  //test  
        if(event.target.textContent.trim() == 'C' ){
            resetCalculator()
            return
        }
        if(event.target.classList.contains('number')){
            operatorText?
            secondOperand  += event.target.textContent.trim():
            firstOperand += firstOperand + event.target.textContent.trim()
           
            updateDisplay()
            return
        }
        if(event.target.classList.contains('operator')){
           if(!operatorText){
            setCalculatorMethod(event.target.value)
            operatorText = event.target.value
           }
            
           

           if(secondOperand){
            
            firstOperand =  operatorMethod(+firstOperand,+secondOperand)
            secondOperand = ''
            setCalculatorMethod(event.target.value)
            operatorText = event.target.value
            updateDisplay()  
          }
         else{
          operatorText = event.target.value

          updateDisplay()
         } 
         
        }
            
           
          if(event.target.textContent.trim()=='DEL'){

            if(operatorText){
                if(secondOperand.length<1){
                    secondOperand = '';
                    operatorText=''
                    operatorMethod =''
                    updateDisplay()
                    return
                }
                secondOperand = secondOperand.slice(0,-1)
                updateDisplay()
            }else{

                if(firstOperand.length<=1){
                    resetCalculator()
                }else{
                    
                    firstOperand = firstOperand.toString().slice(0,-1)
                    updateDisplay()
                    return
                }
            }
            
            

          }  
            
            
            
         
    })
})
    

const resetCalculator = ()=>{
    firstOperand = ''
    secondOperand = ''
    operatorText = ''
    operatorMethod = ''
    display.innerText = '0'

}

const updateDisplay = ()=>  display.innerText = `${firstOperand} ${operatorText?operatorText:''} ${secondOperand?secondOperand:''}`

const setCalculatorMethod = (operator)=>  {
    switch(operator){
    case '*':
        operatorMethod = calculator.mul
        break;
    case '-':
        operatorMethod = calculator.sub
        break;
    case '+':
        operatorMethod = calculator.add
        break;
    case '/':
        operatorMethod = calculator.div   
        break;         
}}