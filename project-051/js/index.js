const input1 = document.querySelector('#firstNumber');
const input2 = document.querySelector('#secondNumber');
const input3 = document.querySelector('#result');
const correct = document.querySelector('#correct');
const btn = document.querySelector('#btn');
const sumError = document.querySelector('#sumError');
const noInputError = document.querySelector('#noInputError');

btn.addEventListener('click', calculate);

function calculate(e) {
    e.preventDefault();
    let firstNumber = Number(input1.value);
    let secondNumber = Number(input2.value);
    let result = Number(input3.value);
    let sum = firstNumber + secondNumber;
    if (input1.value === '' || input2.value === '' || input3.value === '') {
        errorMessage(noInputError);
        clearMessage(correct);
        clearMessage(sumError);
    } else if (sum === result) {
        successMessage(correct);
        clearMessage(noInputError);
        clearMessage(sumError);
    } else {
        clearMessage(noInputError);
        errorMessage(sumError);
        clearMessage(correct);
    };
}

function successMessage(msg) {
    msg.textContent = 'Correct!';
}

function errorMessage(msg) {
    if (msg.id == sumError.id) {
        msg.textContent = "That's not correct! Try again!";
    } else if (msg.id == noInputError.id) {
        msg.textContent = 'Enter all values!';
    } else {
        console.log(msg.id);
    }
}

function clearMessage(msg) {
    console.log(msg);
    msg.textContent = '';
}