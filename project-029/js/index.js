const btn = document.querySelector('.btn');
const searchBar = document.querySelector('.search-bar');
btn.addEventListener('click', showNav)
document.addEventListener('keypress', function(e) {
    if (e.keyCode == 119) {
        showNav();
    }
})

function showNav() {
    searchBar.classList.toggle('visible');
}