const btn = document.querySelector('.btn');
const menu = document.querySelector('.hidden-menu');
btn.addEventListener('click', showMenu);

function showMenu() {
    menu.classList.toggle('visible');
}