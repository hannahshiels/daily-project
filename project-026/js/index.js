const h2 = document.querySelector('h2');
const btn = document.querySelector('#btn');
btn.addEventListener('click', calculateBMI);

function calculateBMI(e) {
    e.preventDefault();
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    let bmi = weight / Math.pow(height, 2);
    bmi = bmi.toFixed(2);
    h2.textContent = `Your BMI is ${ bmi }`;
}