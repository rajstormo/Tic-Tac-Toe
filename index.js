
let firstPlayerTurn = true;
let grid = [0,1,2,3,4,5,6,7,8];
let clicks = 0;
let playerWon = document.getElementById("who-won");

let boxes = document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", () => {
    if (firstPlayerTurn && grid[i] != 'X' && grid[i] != 'O' ) {
      boxes[i].textContent = "X"
      firstPlayerTurn = false;
      grid[i] = 'X';
      clicks++;
    }
    else if(!firstPlayerTurn && grid[i] != 'X' && grid[i] != 'O') {
      boxes[i].textContent = "O";
      firstPlayerTurn = true;
      grid[i] = 'O';
      clicks++;
    }
    
    if (isGameOver() & !firstPlayerTurn) 
      playerWon.textContent = "Game Over!! Player X Wins";
 
    else if (isGameOver() && firstPlayerTurn) 
      playerWon.textContent = "Game Over!! Player O Wins";

    else if (clicks == 9)
      playerWon.textContent = "Game resulted in a Draw!!";
  });
}



let isGameOver = () => {
  return isRowsFilled()  || isColsFilled() || isDiagonalsFilled(); 
}
  

let isRowsFilled = () => {
  if (grid[0] === grid[1]  && grid[1] === grid[2])
    return true;
  if (grid[3] === grid[4]  && grid[4] === grid[5])
    return true;
  if (grid[6] === grid[7] && grid[7] === grid[8])
    return true;
}

let isColsFilled = () => {
  if (grid[0] === grid[3] && grid[3] === grid[6])
    return true;
  else if (grid[1] === grid[4] && grid[4] === grid[7])
    return true;
  else if (grid[2] === grid[5] && grid[5] === grid[8])
    return true;
}

let isDiagonalsFilled = () => {
  if (grid[0] === grid[4] && grid[4] === grid[8])
    return true;
  else if (grid[2] === grid[4]  && grid[4] === grid[6])
    return true;
}
