import React, { useState } from "react";
import "../styles/ChessBoard.css";
import { isSafe } from "./queenUtils"; 

// Import sound files
import successSound from "../assets/success.mp3";
import errorSound from "../assets/error.mp3";

const Chessboard = () => {
  const [board, setBoard] = useState(
    Array.from({ length: 8 }, () => Array(8).fill(false))
  );

  const handleCellClick = (row, col) => {
    const successAudio = new Audio(successSound);
    const errorAudio = new Audio(errorSound);

    if (isSafe(board, row, col)) {
      successAudio.play();
      const newBoard = board.map((r) => [...r]); // Create a copy
      newBoard[row][col] = true; // Place queen
      setBoard(newBoard);
    } else {
      errorAudio.play();
      setTimeout(() => {
        alert("Queen cannot be placed here!");
      }, 2000); // 5-second delay before alert
    }
  };

  return (
    <div className="chessboard-container">
      {board.map((rowArr, row) => (
        <div key={row} className="row">
          {rowArr.map((hasQueen, col) => {
            const isBlack = (row + col) % 2 === 1;

            return (
              <div
                key={col}
                className={`cell ${isBlack ? "black" : "white"}`}
                onClick={() => handleCellClick(row, col)}
              >
                {hasQueen && "♛"} {/* Show Queen if present */}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Chessboard;
