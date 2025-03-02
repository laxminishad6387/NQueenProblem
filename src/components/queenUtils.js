export function isSafe(board, row, col) {
  let n = board.length;
  // check  row
  for(let i=0; i<n; i++)
  {
    if(board[row][i])return false;
  }

  // Check Column
  for (let i = 0; i < row; i++) {
    if (board[i][col]) return false;
  }

  // Check Left Diagonal
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j]) return false;
  }

  // Check Right Diagonal
  for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
    if (board[i][j]) return false;
  }

  return true;
}
