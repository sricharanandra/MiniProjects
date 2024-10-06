const board = document.getElementById("board");
const cells = Array.from({ length: 9 }, (_, i) => {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.index = i;
  cell.textContent = "";
  board.appendChild(cell);
  return cell;
});

let currentPlayer = "X";

function handleCellClick(event) {
  const index = parseInt(event.target.dataset.index);
  if (cells[index].textContent === "") {
    cells[index].textContent = currentPlayer;
    if (checkWin(currentPlayer)) {
      alert(`Player ${currentPlayer} wins!`);
      resetGame();
    } else if (cells.every((cell) => cell.textContent !== "")) {
      alert("It's a tie!");
      resetGame();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin(player) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];
  return winningCombinations.some((combination) => {
    return combination.every((index) => cells[index].textContent === player);
  });
}

function resetGame() {
  cells.forEach((cell) => (cell.textContent = ""));
  currentPlayer = "X";
}

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
