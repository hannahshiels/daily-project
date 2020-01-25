// tried to recreate Brad Traversy's weight converter
// https://www.youtube.com/watch?v=7l-ZAuU8TXc&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=9&t=0s


const input = document.querySelector('#input');
input.addEventListener('input', convert);

function convert(e) {
    let lbs = e.target.value;
    document.querySelector('#kilo').textContent = (lbs / 2.2046).toFixed(2);
    document.querySelector('#grams').textContent = (lbs / 0.0022046).toFixed(2);
    document.querySelector('#ounces').textContent = (lbs * 16).toFixed(2);
}