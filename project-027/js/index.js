const container = document.querySelector('.container');
const colors = ['red', 'blue', 'yellow', 'green'];

// create a balloon
const balloon = document.createElement('div');
balloon.classList.add('item');


function randomColor() {
    return Math.floor(Math.random() * colors.length);
}

// insert balloons into container
for (let i = 0; i < 42; i++) {
    container.appendChild(balloon.cloneNode());
}

const items = document.querySelectorAll('.item');
// make balloons disappear on mouseover
for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = colors[randomColor()];
    items[i].addEventListener('mouseover', function() {
        items[i].classList.add('invisible');
    })
}