const buttons = document.querySelectorAll('[data-choice]');
const resultDiv = document.getElementById('result');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');

// Inicializar los puntajes
let playerScore = 0;
let computerScore = 0;

playerScoreSpan.textContent = playerScore;
computerScoreSpan.textContent = computerScore;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.getAttribute('data-choice');
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    updateScores(result);
    displayResult(playerChoice, computerChoice, result);
  });
});

function getComputerChoice() {
  const choices = ['piedra', 'papel', 'tijeras'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) return 'empate';

  if (
    (player === 'piedra' && computer === 'tijeras') ||
    (player === 'papel' && computer === 'piedra') ||
    (player === 'tijeras' && computer === 'papel')
  ) {
    return 'jugador';
  }

  return 'computadora';
}

function updateScores(winner) {
  if (winner === 'jugador') {
    playerScore++;
    playerScoreSpan.textContent = playerScore;
  } else if (winner === 'computadora') {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
  }
}

function displayResult(player, computer, winner) {
  let message = `Elegiste ${player}, la computadora eligió ${computer}. `;
  if (winner === 'empate') {
    message += '¡Es un empate!🏴';
  } else if (winner === 'jugador') {
    message += '¡Ganaste!🎉';
  } else {
    message += 'Perdiste.😥';
  }
  resultDiv.textContent = message;
}
