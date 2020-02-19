const h2 = document.querySelector('#output');
const btn = document.querySelector('#btn');
btn.addEventListener('click', scrambleWord);

function scrambleWord() {
    h2.classList.remove('visible');
    const input = document.querySelector('#userInput').value;
    let wordArr = input.split('');
    let newArr = [];
    let newStr = '';
    let randomNum;
    let checkArr = input.split(' ');
    if (checkArr.length === 1) {
        wordArr.forEach(element => {
            randomNum = Math.floor(Math.random() * 2);
            if (randomNum === 1) {
                newArr.unshift(element);
            } else {
                newArr.push(element);
            }
        });
        newStr = newArr.join('');
        if (newStr === input) {
            scrambleWord();
        } else {
            h2.textContent = newStr;
        }
    } else if (checkArr > 1) {
        checkArr.pop();
    }

}