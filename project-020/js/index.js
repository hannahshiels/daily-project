const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const password = document.querySelector('#password');
const inputs = document.querySelectorAll('input')
const btn = document.querySelector('#btn');
const label = document.createElement('label');
btn.addEventListener('click', validateForm);

function validateForm(e) {
    e.preventDefault();
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            failMsg(inputs[i]);
        } else if (inputs[i].id == 'email') {
            validateEmail(inputs[i]);
        } else {
            successMsg(inputs[i]);
        }
    }
}

function validateEmail(email) {
    const validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    console.log(validate);
    if (!validate) {
        failMsg(email);
    } else {
        successMsg(email);
    }
}

function failMsg(input) {
    input.style.borderColor = 'hsl(0, 100%, 74%)';
}

function successMsg(input) {
    input.style.borderColor = 'hsl(154, 59%, 51%)';

}