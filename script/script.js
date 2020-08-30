

const textUpEl = document.querySelector('#textUp');
const textDownEl = document.querySelector('#textDown')
let outputUp;
let outputDown;
let number1 = '';
let number2 = '';
let keyNotNumber = '';
let firstNum = true;
let result = '';


// functions

const sum = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return sum(+num1, +num2);
            break;
        case '-':
            return subtract(+num1, +num2);
            break;
        case '*':
            return multiply(+num1, +num2);
            break;
        case '/':
            return divide(+num1, +num2);
            break;
        default:
            break;
    }
}

const operator = (keyNotNumber) => {
    while (keyNotNumber) {

    }
}

const calculate = function (number1ForCalc, number2, keyNotNumber) {
    switch (keyNotNumber) {
        case 'ac':

            break;
        case 'a':

            break;
        case 'ChangeSymbol':

            break;
        case 'divide':
            return operate(number1ForCalc, number2, '/')
            break;
        case 'multiply':
            return operate(number1ForCalc, number2, '*')
            break;
        case 'minus':
            return operate(number1ForCalc, number2, '-')
            break;
        case 'sum':
            return operate(number1ForCalc, number2, '+')
            break;
        case 'equal':

            break;


        default:
            break;
    }
}

const reset = () => {
    textUpEl.textContent = '';
    number1 = '';
    number2 = ''
    firstNum = true;
}

const returnSymbol = (idEl) => {
    switch (idEl) {
        case 'sum':
            return ' + ';
            break;
        case 'minus':
            return ' - ';
            break;
        case 'multiply':
            return ' x ';
            break;
        case 'divide':
            return ' : ';
            break;

        default:
            break;
    }
}

const clickBtn = (e) => {
    if (!isNaN(e.srcElement.id) && firstNum || (e.srcElement.id == '.')) {
        number1 += e.srcElement.id;
        console.log('een');
        console.log(number1);
        textDownEl.textContent = number1;
    } else if (!isNaN(e.srcElement.id) || (e.srcElement.id == '.')) {
        textUpEl.textContent = `${number1} ${returnSymbol(keyNotNumber)}`;
        number2 += e.srcElement.id;
        console.log('twee');
        console.log(number2);
        textDownEl.textContent = number2;
    } else if (e.srcElement.id == 'equal') {
        result = calculate(number1, number2, keyNotNumber);
        textDownEl.textContent = result;
        if (textDownEl.textContent == 'Infinity'){
        textUpEl.textContent = 'You cant divide';
        textDownEl.textContent = 'by 0';
        }
        reset();
    } else if (e.srcElement.id == 'ac') {
        textDownEl.textContent = '';
        reset();
    }     else if (e.srcElement.id == 'c'){
        if (number2 != '') {
            number2 = (number2).toString().slice(0,-1);
            textDownEl.textContent = number2;
        } else if (textUpEl.innerHTML == ''){
            number1 = (number1).toString().slice(0,-1);
            textDownEl.textContent = number1;
        }
    } else if (e.srcElement.id == 'changeSymbol'){
        if (number2 != '') {
            number2 = Math.abs(number2) * -1;
            textDownEl.textContent = number2;
        } else if (textUpEl.innerHTML == ''){
            number1 = Math.abs(number1) * -1;
            textDownEl.textContent = number1;
        }
    }
    else if (isNaN(e.srcElement.id) && firstNum && number1 != '') {
        keyNotNumber = e.srcElement.id;
        textUpEl.textContent = `${number1} ${returnSymbol(keyNotNumber)}`;
        textDownEl.textContent = '';
        console.log('drie');
        firstNum = false;
    } else if (isNaN(e.srcElement.id) && !firstNum && number1 != '') {
        result = calculate(number1, number2, keyNotNumber);
        keyNotNumber = e.srcElement.id;
        number1 = result;
        console.log('vier');
        console.log(keyNotNumber);
        console.log(result);
        number2 = '';
        textUpEl.textContent = `${result} ${returnSymbol(keyNotNumber)}`;
        textDownEl.textContent = '';
    }

};


let inputBtn = document.querySelectorAll('.inputBtn');



// Eventlisteners
inputBtn.forEach(() => {
    addEventListener('click', clickBtn);
})