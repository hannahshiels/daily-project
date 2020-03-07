const container = document.querySelector('#container');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const adjs = {
    nice: [
        'nice', 'calm', 'hard-working', 'brave', 'bright', 'charming', 'careful', 'gentle', 'helpful', 'kind'
    ],
    silly: [
        'wack', 'absurd', 'hilarious', 'funny', 'gassy', 'amusing', 'whimsical', 'jolly'
    ],
    unique: [
        'unique', 'tenacious', 'baleful', 'axiomatic', 'comely', 'vivacious', 'divergent', 'furtive', 'limpid', 'nefarious', 'strange', 'pervasive', 'puckish'
    ]

}


btn.addEventListener('click', greetUser);

function greetUser() {
    let name = input.value;

    if (name === '') {
        name = 'buddy';
    }

    let randomAdjType = randomObjProperty(adjs);
    let randomNum = Math.floor(Math.random() * randomAdjType.length);
    let randomAdj = randomAdjType[randomNum];

    const greeting = `Hello ${name}! You are ${randomAdj} and that's why I'm rooting for you! `;


    container.innerHTML = '';
    container.innerHTML = '<p>' + greeting + '</p>';


}

function randomObjProperty(obj) {
    let keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
}