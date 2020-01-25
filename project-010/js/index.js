const btn = document.querySelector('.btn');
btn.addEventListener('click', openMenu);
const sidebar = document.querySelector('.sidebar');
const icon = document.querySelector('.icon');
const content = document.querySelector('.content-container')

function openMenu() {
    sidebar.classList.toggle('active');
    content.classList.toggle('active');
    icon.classList.toggle('fa-times');
}