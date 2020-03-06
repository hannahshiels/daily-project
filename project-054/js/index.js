const input = document.querySelector('#input');
const output = document.querySelector('#output');
const btn = document.querySelector('#btn');
const randomNum = Math.floor(Math.random() * 100 + 1);

btn.addEventListener('click', guessNumber);

function guessNumber() {
    let value = Number(input.value);
    if (value === randomNum) {
        output.textContent = 'Correct! You win a cookie!';
    } else if (value < 1 || value > 100) {
        output.textContent = 'That is NOT WITHIN range sir!';
    } else {
        output.textContent = "WRONG! You DON'T win a cookie!";
    }
}