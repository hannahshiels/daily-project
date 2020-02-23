const icon = document.querySelector('#icon');
const btn = document.querySelector('#btn');
const classInitial = 'fa-dice-';
btn.addEventListener('click', rollDice);

function rollDice() {
    let randomNum = Math.floor(Math.random() * 6 + 1);
    icon.className = '';
    icon.classList.add('fas');
    console.log(icon.classList);
    console.log(randomNum);

    switch (randomNum) {
        case 1:
            icon.classList.add(classInitial + 'one');
            break;
        case 2:
            icon.classList.add(classInitial + 'two');
            break;

        case 3:
            icon.classList.add(classInitial + 'three');
            break;

        case 4:
            icon.classList.add(classInitial + 'four');
            break;

        case 5:
            icon.classList.add(classInitial + 'five');
            break;

        case 6:
            icon.classList.add(classInitial + 'six');
            break;

        default:
            console.log(randomNum);
    }
}