const btn = document.querySelector('.btn');
const icon = document.querySelector('.icon');
btn.addEventListener('click', like);

function like(){
    icon.classList.toggle('fas');
    icon.classList.toggle('heart-full');
}