const h2 = document.querySelector('h2');
const btn = document.querySelector('#btn');
btn.addEventListener('click', calculateBMI);

function calculateBMI(e) {
    e.preventDefault();
    let height = document.querySelector('#height').value;
    height = parseFloat(height);
    let weight = document.querySelector('#weight').value;
    weight = parseFloat(weight);
    let bmi = weight / Math.pow(height, 2);
    bmi = bmi.toFixed(2);
    h2.textContent = `Your BMI is ${ bmi }`;
}