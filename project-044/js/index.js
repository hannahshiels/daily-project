const btn = document.querySelector('.btn');
const icon = document.querySelector('.icon');
const menu = document.querySelector('.sidebar');
btn.addEventListener('click', menuExpand);

function menuExpand() {
    menu.classList.toggle('active');
    icon.classList.toggle('fa-times');

}