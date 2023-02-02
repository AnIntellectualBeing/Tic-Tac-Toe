const cells = document.querySelectorAll('.cell');
let currentPlayer = "X";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function(event) {
    if (event.target.textContent === "") {
      event.target.textContent = currentPlayer;
      if (checkForWin()) {
        alert(currentPlayer + " wins!");
        resetBoard();
      } else if (checkForDraw()) {
        alert("Draw!");
        resetBoard();
      } else {
        switchPlayer();
      }
    }
  });
}

function checkForWin() {
  // Check rows
  for (let i = 0; i < 9; i += 3) {
    if (cells[i].textContent === currentPlayer && cells[i + 1].textContent === currentPlayer && cells[i + 2].textContent === currentPlayer) {
      return true;
    }
  }
  // Check columns
  for (let i = 0; i < 3; i++) {
    if (cells[i].textContent === currentPlayer && cells[i + 3].textContent === currentPlayer && cells[i + 6].textContent === currentPlayer) {
      return true;
    }
  }
  // Check diagonals
  if (cells[0].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
    return true;
  }
  if (cells[2].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[6].textContent === currentPlayer) {
    return true;
  }
  return false;
}

function checkForDraw() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      return false;
    }
  }
  return true;
}

function switchPlayer() {
  currentPlayer = (currentPlayer === "X") ? "O" : "X";
}

function resetBoard() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
  currentPlayer = "X";
}
