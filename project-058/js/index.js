const container = document.querySelector('.box');
const input = document.createElement('input');
const msg = document.querySelector('#msg');
let arr = [];

const randomWords = ['pink', 'blue', 'yellow', 'lion', 'elephant', 'piano', 'cat']

const str = randomWords[Math.floor(Math.random() * randomWords.length)];
input.setAttribute('type', 'text');
input.setAttribute('maxlength', "1");

function createGame(str) {
    for (let i = 0; i < str.length; i++) {
        input.id = i;
        arr.push('');
        container.appendChild(input.cloneNode());
    }
    const inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.addEventListener('input', getInput);
    });

}

function getInput(e) {
    let value = e.target.value;
    arr[this.id] = value;
    checkLength(arr);
}

function checkLength(arr) {
    let word = arr.join('').toLowerCase();
    let i = 0;

    arr.forEach(function(element) {
        if (element === '') {
            i++;
        }
    });

    if (i === 0) {
        if (word === str) {
            msg.textContent = 'Correct!';
        } else {
            msg.textContent = 'Incorrect!';
        }
    }
}


createGame(str);