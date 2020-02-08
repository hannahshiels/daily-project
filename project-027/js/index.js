const container = document.querySelector('.container');
const balloon = document.createElement('div');
balloon.classList.add('item');
const colors = ['red', 'blue', 'yellow', 'green'];
balloon.style.backgroundColor = colors[randomColor()];

function randomColor() {
    return Math.floor(Math.random() * colors.length);
}

for (let i = 0; i < 42; i++) {
    container.appendChild(balloon.cloneNode());
    balloon.style.backgroundColor = colors[randomColor()];
}

const items = document.querySelectorAll('.item');

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {
        items[i].remove();
    })
}