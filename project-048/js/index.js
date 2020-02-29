const box = document.querySelector('.box');
const icon = document.querySelector('.icon');

let iconPositionTop = 150;
let iconPositionRight = 150;
let iconPositionBottom = 150;
let iconPositionLeft = 150;

let minPosition = 0;
let maxPosition = 280;

document.addEventListener('keydown', getKey);

function errorMessage() {
    console.log('You can not go that way.');
}

function getKey(e) {
    switch (e.keyCode) {
        case 37:
            moveLeft();
            break;
        case 38:
            moveUp();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveDown();
            break;
    }
}

function moveLeft() {
    if (iconPositionLeft !== maxPosition && iconPositionLeft >= minPosition) {
        iconPositionLeft -= 10;
        icon.style.left = iconPositionLeft.toString() + 'px';

    } else {
        errorMessage();
        iconPositionLeft = minPosition;
        icon.style.left = iconPositionLeft.toString() + 'px';

    }
}

function moveUp() {
    if (iconPositionTop !== maxPosition && iconPositionTop >= minPosition) {
        iconPositionTop -= 10;
        icon.style.top = iconPositionTop.toString() + 'px';

    } else {
        errorMessage();
        iconPositionTop = minPosition;
        icon.style.top = iconPositionTop.toString() + 'px';

    }
}

function moveRight() {
    if (iconPositionLeft !== maxPosition && iconPositionLeft >= minPosition) {
        iconPositionLeft += 10;
        icon.style.left = iconPositionLeft.toString() + 'px';
    } else {
        errorMessage();
        iconPositionLeft = maxPosition;
        icon.style.left = iconPositionLeft.toString() + 'px';

    }
}

function moveDown() {
    if (iconPositionTop !== maxPosition && iconPositionTop >= minPosition) {
        iconPositionTop += 10;
        icon.style.top = iconPositionTop.toString() + 'px';
    } else {
        errorMessage();
        iconPositionTop = maxPosition;
        icon.style.top = iconPositionTop.toString() + 'px';
    }
}