const btn = document.querySelector('.btn');
const searchBar = document.querySelector('.search-bar');
btn.addEventListener('click', function() {
    searchBar.classList.toggle('visible');
})