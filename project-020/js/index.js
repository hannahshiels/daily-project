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
    if (!validate) {
        failMsg(email);
    } else {
        successMsg(email);
    }
}

function failMsg(input) {
    input.style.borderColor = 'hsl(0, 100%, 74%)';
    input.style.backgroundImage = 'url(./images/icon-error.svg)';
    input.style.backgroundPosition = '98% 50%';
    input.style.backgroundRepeat = 'no-repeat';
    label.textContent = 'Enter your ' + input;
}

function successMsg(input) {
    input.style.borderColor = 'hsl(154, 59%, 51%)';

}