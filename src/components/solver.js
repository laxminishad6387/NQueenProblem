export function isSafe(board, row, col) {
      let n = board.length;
    
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
    export function solveNQueens(board, row, animations) {
      let n = board.length;
      if (row === n) return true;
    
      for (let col = 0; col < n; col++) {
        if (isSafe(board, row, col)) {
          board[row][col] = true;
          animations.push({ row, col, status: "placing" });
    
          if (solveNQueens(board, row + 1, animations)) return true;
    
          board[row][col] = false;
          animations.push({ row, col, status: "removing" });
        }
      }
      return false;
    }
        