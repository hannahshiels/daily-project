const btn = document.querySelector('#btn');
const profile = document.querySelector('.profile-card');
btn.addEventListener('click', showProfile)

function showProfile() {
    profile.classList.toggle('visible');
}