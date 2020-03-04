const inputs = document.querySelectorAll('input');
const box = document.querySelector('.box');
const topLeft = document.querySelector('#top-left')
const topRight = document.querySelector('#top-right')
const bottomLeft = document.querySelector('#bottom-left')
const bottomRight = document.querySelector('#bottom-right')

inputs.forEach(function(input) {
    input.addEventListener('input', updateStyle);
});

function updateStyle(e) {
    let value = e.target.value.toString() + 'px';
    let elId = this.id;
    box.style[elId] = value;
    switch (
        this.id
    ) {
        case 'borderTopLeftRadius':
            topLeft.textContent = value;
            break;
        case 'borderTopRightRadius':
            topRight.textContent = value;
            break;
        case 'borderBottomLeftRadius':
            bottomLeft.textContent = value;
            break;
        case 'borderBottomRightRadius':
            bottomRight.textContent = value;
            break;
        default:
            break;
    }
}