const h2 = document.querySelector('#output');
const btn = document.querySelector('#btn');
let newArr = [];
let newStr = '';

btn.addEventListener('click', scrambleWord);

function scrambleWord() {
    h2.classList.remove('visible');
    const input = document.querySelector('#userInput').value;
    let arrCheck = input.split(' ');
    let result = checkArr(arrCheck);
    let wordArr = result[0].split('');
    let text = randomizeLetters(wordArr);
    if (newStr === input) {
        text = randomizeLetters(wordArr);
    } else {
        h2.textContent = text;
    }
}


function randomizeLetters(arr) {
    let randomNum;
    newArr = [];
    newStr = '';
    arr.forEach(element => {
        randomNum = Math.floor(Math.random() * 2);
        if (randomNum == 1) {
            newArr.unshift(element);
        } else {
            newArr.push(element);
        }
    });
    console.log(newArr.join(''));
    return newStr = newArr.join('');
}

function checkArr(arr) {
    if (arr.length === 1) {
        return arr;
    } else {
        return arr.splice(0, 1);
    }
}