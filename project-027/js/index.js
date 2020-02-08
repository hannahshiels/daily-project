const container = document.querySelector('.container');
const colors = ['red', 'blue', 'yellow', 'green'];
const h1 = document.querySelector('h1');
let numberofItems = 42;
let j = 0;
// create a balloon
const balloon = document.createElement('div');
balloon.classList.add('item');


function randomColor() {
    return Math.floor(Math.random() * colors.length);
}

// insert balloons into container
for (let i = 0; i < numberofItems; i++) {
    container.appendChild(balloon.cloneNode());
}

const items = document.querySelectorAll('.item');
// make balloons disappear on mouseover
for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = colors[randomColor()];
    items[i].addEventListener('mouseover', function() {
        items[i].classList.add('invisible');
        j++;
        checkPopped(j);
    })
}

function checkPopped(j) {
    if (j == numberofItems) {
        h1.textContent = 'You popped them all! Reload to play again!'
    }

}