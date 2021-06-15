class Calculator {
    constructor(previousNumberText, currentNumberText) {
        this.previousNumberText = previousNumberText;
        this.currentNumberText = currentNumberText;

        this.clear();
    }
    
    clear() {
        this.previousNumber = '';
        this.currentNumber = '';
        this.operand  = undefined;
        this.updateDisplay();
    }

    delete() {
        this.previousNumber = this.currentNumber.toString();
        this.currentNumber = this.previousNumber.slice(0, -1);
        this.updateDisplay();
    }

    updateDigit(number) {
        this.currentNumber = this.currentNumber.toString() + number.toString();

    }

    chooseOperand() {
        

    }

    compute() {

    }

    updateDisplay() {
        this.currentNumberText.innerHTML = this.currentNumber;
        // this.previousNumberText.innerHTML = 'hey';

    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousNumberText = document.querySelector('[data-previous-digit]');
const currentNumberText = document.querySelector('[data-current-digit]');

// call the new instance of calculator method with its parameters 
const calculator = new Calculator(previousNumberText, currentNumberText);

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {

        calculator.updateDigit(button.innerHTML);
        calculator.updateDisplay();

    })
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
})

clearButton.addEventListener('click', () => {
    calculator.clear();
})
