let btns = document.querySelectorAll('.btn');
let answers = document.querySelectorAll('.answer');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(e) {
        e.preventDefault();
        let parent = btns[i].parentElement;
        let sibling = parent.nextElementSibling;
        sibling.classList.toggle('active');
    })
}