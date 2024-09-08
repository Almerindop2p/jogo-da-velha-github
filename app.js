 const cells = document.querySelectorAll('.cell');
const playerTurn = document.getElementById('player-turn');
const gameStatus = document.getElementById('game-status');
const resetButton = document.getElementById('reset-button');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Funções para verificar as condições de vitória
function checkWin() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6]            // Diagonais
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;
      gameStatus.textContent = `${board[a]} venceu!`;
      return;
    }
  }

  // Verificar empate
  if (!board.includes('')) {
    gameActive = false;
    gameStatus.textContent = 'Empate!';
  }
}

// Função para alternar o jogador
function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  playerTurn.textContent = currentPlayer;
}

// Função para lidar com o clique nas células
function handleCellClick(index) {
  if (board[index] === '' && gameActive) {
    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    cells[index].classList.add(currentPlayer.toLowerCase());
    checkWin();
    switchPlayer();
  }
}

// Função para reiniciar o jogo
function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  playerTurn.textContent = currentPlayer;
  gameStatus.textContent = '';
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('x', 'o');
  });
}

// Adicionar eventos de clique às células
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    handleCellClick(parseInt(cell.dataset.index));
  });
});

// Adicionar evento de clique ao botão "Reiniciar"
resetButton.addEventListener('click', resetGame);

// Inicializar o jogo
resetGame();


 const colors = [
  "#0c192c", 
  "#1A1A1A", // Preto quase puro
  "#282C34", // Cinza escuro com um toque de azul
  "#000000"
]; // Array de cores
    let currentColorIndex = 0;

    function changeBackgroundColor() {
      currentColorIndex = (currentColorIndex + 1) % colors.length; // Troca para a próxima cor no array

      // Aplica a transição com um delay
      setTimeout(() => {
        document.body.style.backgroundColor = colors[currentColorIndex];
      }, 1000); // Aguarda 1 segundo antes de aplicar a cor
    }

    setInterval(changeBackgroundColor, 5000); // Chama a função a cada 30 segundos