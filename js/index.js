const card = document.querySelector('.card');
card.addEventListener('click', cardFlip);

function cardFlip() {
    card.classList.toggle('active');

}