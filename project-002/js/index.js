const btn = document.querySelector('.btn');
const container = document.querySelector('.bg-changer');
const h2 = document.querySelector('h2');
const arrColors = ['DeepPink', 'OrangeRed', 'MediumBlue', 'CornflowerBlue', 'Yellow', 'SpringGreen', 'Coral', 'Indigo', 'MidnightBlue', 'Cyan', 'Tomato'];
btn.addEventListener('click', changeBg);

function changeBg() {
    let randomNum = Math.floor(Math.random() * arrColors.length);
    let randomColor = arrColors[randomNum];
    container.style.backgroundColor = randomColor;
    h2.style.backgroundColor = '#fffafb';
    h2.style.color = randomColor;
    h2.innerText = 'This color is called ' + randomColor;
}