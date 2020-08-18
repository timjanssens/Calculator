//functions

// function add(num1, num2){
//     return num1 + num2;
// }

const textUpEl = document.querySelector('#textUp');
const textDownEl = document.querySelector('#textDown')
let outputUp;
let outputDown; 
let number1 = '';
let number2 = '';
let number1ForCalc = '';
let firstNum = true;

const sum = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return sum(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default:
            break;
    }
}

const clickBtn = (e) => {
    if (!isNaN(e.srcElement.id) && firstNum) {
        number1 += e.srcElement.id;
        outputDown = number1;
        textDownEl.textContent = outputDown;
    }
    else if (!isNaN(e.srcElement.id) && !firstNum) {
        number2 += e.srcElement.id;
        outputDown = number2;
        textDownEl.textContent = outputDown;
    }
    else{
        textUpEl.textContent = number1;
        textDownEl.textContent = '';
        number1ForCalc = number1;
        number1 = '';
        
    }

};

let inputBtn = document.querySelectorAll('.inputBtn');

inputBtn.forEach(() => {
    addEventListener('click', clickBtn);
})