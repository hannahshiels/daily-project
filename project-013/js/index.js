const buttons = document.querySelectorAll('.btn');
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');
const playerWins = document.querySelector('#win-count-player')
const computerWins = document.querySelector('#win-count-computer')
let computerResult = 0;
let playerResult = 0;


const roundResult = document.querySelector('#result')
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        let playerSelection = this.id;
        playRound(playerSelection);
        playerWins.textContent = 'Wins: ' + playerResult;
        computerWins.textContent = 'Wins: ' + computerResult;
    });
});

function computerPlay() {
    let num = Math.floor(Math.random() * 3 + 1);
    if (num === 1) {
        return 'rock';
    } else if (num === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


function playRound(playerSelection) {

    let computerSelection = computerPlay();
    computerChoice.textContent = 'The computer played ' + computerSelection + '!';
    playerChoice.textContent = 'Player played ' + playerSelection + '!';

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        roundResult.textContent = 'You lose! Paper beats rock!';
        computerResult++
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        roundResult.textContent = 'You win! Rock beats scissors! ';
        playerResult++

    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        roundResult.textContent = 'You win! Paper beats rock! ';
        playerResult++

    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        roundResult.textContent = 'You lose! Scissors beats paper! ';
        computerResult++

    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        roundResult.textContent = 'You lose! Rock beats scissors! ';
        computerResult++

    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        roundResult.textContent = 'You win! Scissors beats paper! ';
        playerResult++
    } else {
        roundResult.textContent = 'Its a draw!';
    }



}