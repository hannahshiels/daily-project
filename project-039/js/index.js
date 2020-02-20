let btns = document.querySelectorAll('button');
let items = document.querySelectorAll('.items');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(e) {
        e.preventDefault();
        let parent = btns[i].parentElement;
        let sibling = parent.children[1];
        sibling.classList.toggle('active');
    })
}