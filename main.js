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
        this.currentNumber = this.currentNumber.toString().slice(0, -1);

        this.updateDisplay();
    }

    updateDigit(number) {
        this.currentNumber = this.currentNumber.toString() + number.toString();

    }

    chooseOperand(operand) {
        if(this.currentNumber === '') return
        if(this.previousNumber !== '') {
            this.compute();
        }

        this.operand = operand;
        this.previousNumber = this.currentNumber;
        this.currentNumber = '';
    }

    compute() {

        let total;
        const previous = parseFloat(this.previousNumber);
        const current = parseFloat(this.currentNumber);

        switch(this.operand) {
            case '+':
                total = previous + current;
                break;
            case '-':
                total = previous - current;
                break;
            case 'x':
                total = previous * current;
                break;
            case '÷':
                total = previous / current;
                break;
            default: return;
        }

        this.currentNumber = total;
        this.previousNumber = '';
        this.operand = undefined;

        this.updateDisplay();
    }

    updateDisplay() {
        this.currentNumberText.innerHTML = this.currentNumber;

        if(this.operand != null) {
            this.previousNumberText.innerHTML = `${this.previousNumber} ${this.operand}`;
        }   else {
            this.previousNumberText.innerHTML = '';
        }

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

operationButtons.forEach((operand) => {
    operand.addEventListener('click', () => {
        calculator.chooseOperand(operand.innerHTML);
    })
})

equalButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})

