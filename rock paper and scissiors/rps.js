const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

const buttons = document.querySelectorAll('#choices button');
const result = document.querySelector('#result');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);

    result.textContent = roundResult;
    result.classList.add(roundResult === 'You win!' ? 'win' : 'lose');
    result.style.display = 'block';
  });
});
