const btn = document.querySelector('#btn');
const cards = document.querySelectorAll('.card');
const input = document.querySelector('#input');
btn.addEventListener('click', filterCards);

function filterCards(e) {
    e.preventDefault();
    userFilter = input.value.toLowerCase();
    for (let i = 0; i < cards.length; i++) {
        if (userFilter == cards[i].id) {
            console.log('Filtered!')
        } else {
            cards[i].classList.toggle('visible');
        }
    }

    if (btn.innerHTML === "Reset") {
        btn.innerHTML = "Filter";
        input.value = '';
    } else {
        btn.innerHTML = "Reset";
    }

}