let playerInput = window.prompt("Rock, Paper, Scissors, Shoot!");
const inputArray = ['rock', 'paper', 'scissors']
let computerSelection = ""
function getComputerChoice() {
    computerSelection = inputArray[Math.floor(Math.random()*inputArray.length)]
    console.log(computerSelection);
}
getComputerChoice();

if (playerInput.toLocaleLowerCase() === 'rock'||'paper'||'scissors') {
    console.log(playerInput.toLocaleLowerCase());
} else {
    alert("Invalid input, try again!")
    playerInput = window.prompt("Rock, Paper, Scissors, Shoot!")
}

function playRound (computerSelection, playerInput) {
    if (computerSelection === playerInput.toLocaleLowerCase()) {
        console.log('Tie!')
        //make return when adding css and html
    } else if ((playerInput.toLocaleLowerCase() === 'rock' && computerSelection === 'scissors') || 
    (playerInput.toLocaleLowerCase() === 'paper' && computerSelection === 'rock') || 
    (playerInput.toLocaleLowerCase() === 'scissors' && computerSelection === 'paper')) {
        console.log('You Win!')
        //make return when adding css and html
    } else {
        console.log('Computer Wins!')
        //make return when adding css and html
    }
}
playRound(computerSelection, playerInput);