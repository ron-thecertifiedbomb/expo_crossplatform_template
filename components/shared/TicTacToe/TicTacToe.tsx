import React, { useState } from "react";

type Box = "" | "X" | "O"; // Each box can be empty, "X", or "O"
type Board = Box[][]; // A 2D array of Box elements

const TicTacToe: React.FC = () => {
  const emptyBoard: Board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const [board, setBoard] = useState<Board>(emptyBoard);
  const [currentTurn, setCurrentTurn] = useState<Box>("X");
  const [winner, setWinner] = useState<Box | "Draw" | null>(null);

  const checkWinner = (updatedBoard: Board): boolean => {
    const winPatterns = [
      // Rows
      [updatedBoard[0][0], updatedBoard[0][1], updatedBoard[0][2]],
      [updatedBoard[1][0], updatedBoard[1][1], updatedBoard[1][2]],
      [updatedBoard[2][0], updatedBoard[2][1], updatedBoard[2][2]],
      // Columns
      [updatedBoard[0][0], updatedBoard[1][0], updatedBoard[2][0]],
      [updatedBoard[0][1], updatedBoard[1][1], updatedBoard[2][1]],
      [updatedBoard[0][2], updatedBoard[1][2], updatedBoard[2][2]],
      // Diagonals
      [updatedBoard[0][0], updatedBoard[1][1], updatedBoard[2][2]],
      [updatedBoard[0][2], updatedBoard[1][1], updatedBoard[2][0]],
    ];

    return winPatterns.some((pattern) => pattern.every((cell) => cell === currentTurn));
  };

  const handleClick = (row: number, col: number): void => {
    if (board[row][col] !== "" || winner) return; // Prevent overwriting or moves after a win

    console.log(`Box clicked: Row ${row}, Col ${col}`); // Logs the clicked box index

    const newBoard = board.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? currentTurn : cell))
    );

    setBoard(newBoard);

    if (checkWinner(newBoard)) {
      setWinner(currentTurn);
    } else if (newBoard.flat().every((cell) => cell !== "")) {
      setWinner("Draw");
    } else {
      setCurrentTurn(currentTurn === "X" ? "O" : "X");
    }
  };

  const resetGame = (): void => {
    setBoard(emptyBoard);
    setCurrentTurn("X");
    setWinner(null);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tic Tac Toe</h1>
      <h2>{winner ? (winner === "Draw" ? "It's a Draw!" : `${winner} Wins!`) : `Turn: ${currentTurn}`}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)", gap: "5px", justifyContent: "center" }}>
        {board.map((row, i) =>
          row.map((cell, j) => (
            <button
              key={`${i}-${j}`}
              onClick={() => handleClick(i, j)}
              style={{
                width: "100px",
                height: "100px",
                fontSize: "24px",
                fontWeight: "bold",
                cursor: "pointer",
                background: cell ? (cell === "X" ? "#ff7675" : "#74b9ff") : "#dfe6e9",
                color: "white",
                border: "2px solid black",
              }}
            >
              {cell}
            </button>
          ))
        )}
      </div>
      {winner && <button onClick={resetGame} style={{ marginTop: "20px", padding: "10px", fontSize: "16px" }}>Restart Game</button>}
    </div>
  );
};

export default TicTacToe;
