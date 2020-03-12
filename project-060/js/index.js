const input = document.querySelector('#input');
const output = document.querySelector('#output');
const btns = document.querySelectorAll('.btn');
const options = document.querySelectorAll('option');
let fontInitial = 16;
let increase = 4;
let decrease = 4;

input.addEventListener('input', showInput);
btns.forEach(function(btn) {
    btn.addEventListener('click', updateFont);
});

options.forEach(function(option) {
    option.addEventListener('click', fontFamily);
})

function fontFamily() {
    let parent = this.parentElement;
    let id = parent.id;
    output.style[id] = this.id;
}

function updateFont() {
    let style = this.id;
    let value = this.innerText;
    let styleRule;
    if (this.id === 'increase' || this.id === 'decrease') {
        fontSize(this.id);
    } else {
        styleRule = output.style[style];
    }

    if (styleRule === value) {
        output.style[style] = '';
    } else {
        output.style[style] = value;
    }
}

function fontSize(increment) {
    if (increment === 'increase') {
        if (fontInitial + increase >= 44) {
            fontInitial = 44;
            output.style.fontSize = fontInitial.toString() + 'px'
        } else {
            fontInitial = (fontInitial + increase);
            output.style.fontSize = fontInitial.toString() + 'px'
        }
    } else {
        if (fontInitial - decrease === 0) {
            fontInitial = 4;
            output.style.fontSize = fontInitial.toString() + 'px'
        } else {
            fontInitial = (fontInitial - decrease);
            output.style.fontSize = fontInitial.toString() + 'px'
        }
    }
}


function showInput(e) {
    output.textContent = e.target.value.substring(0, 50);

}