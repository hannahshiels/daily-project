const btn = document.querySelector('.btn');
btn.addEventListener('click', menuExpand);

const links = document.querySelectorAll('.link');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', menuExpand);
}

function menuExpand() {
    const body = document.querySelector('body');
    const icon = document.querySelector('i');
    icon.classList.toggle('fa-times');
    body.classList.toggle('active');
}