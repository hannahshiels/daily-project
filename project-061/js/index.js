document.addEventListener('mousemove', changeBg);

function changeBg(e) {
    let x = e.offsetX;
    let y = e.offsetY;

    let body = document.querySelector('body');
    body.style.backgroundColor = 'rgb(' + x + ', ' + y + ',' + 255 + ')';

}