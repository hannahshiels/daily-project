const input = document.querySelector('#text');
const output = document.querySelector('#word-counter-output')
document.addEventListener('load', getText);
input.addEventListener('keyup', getText);

function getText() {
    let str = input.value;
    let arr = str.split(' ');
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        output.textContent = 'Word count: ' + i;
    };
}