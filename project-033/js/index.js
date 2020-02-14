const btns = document.querySelectorAll('.btn');
const cardContainer = document.querySelector('.card-container');
const container = document.querySelector('.container');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        this.parentElement.parentElement.remove();
        checkChildren();
    });
}

function checkChildren() {
    console.log(cardContainer.childElementCount);
    if (cardContainer.childElementCount === 0) {
        cardContainer.remove();
        let el = document.createElement('div');
        el.innerHTML = '<h1> Happy Valentines Day! </h1>';
        el.classList.add('surprise-div', 'flex-row', 'center');
        container.appendChild(el);
        container.style.backgroundColor = '#f592b3';
    } else {
        console.log('Has child nodes');
    };
}