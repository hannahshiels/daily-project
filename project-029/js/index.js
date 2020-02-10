const btn = document.querySelector('.btn');
const searchBar = document.querySelector('.search-bar');
document.addEventListener('keypress', function(e) {
    if (e.keyCode == 87) {
        showNav();
    } else {
        console.log(e.keyCode)
    }
})
btn.addEventListener('click', showNav)

function showNav() {
    searchBar.classList.toggle('visible');

}