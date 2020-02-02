const form = document.querySelector('form');
const formContainer = document.querySelector('.form');
const btn = document.querySelector('button');
const inputs = document.querySelectorAll('input');

btn.addEventListener('click', validateForm);

function validateForm(e) {
    e.preventDefault();
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            failMsg(inputs[i]);
        } else {
            successMsg(inputs[i]);
        }
    }
}

function failMsg(input) {
    input.style.borderColor = '#be325a';
}

function successMsg(input) {
    input.style.borderColor = '#70d548';
}