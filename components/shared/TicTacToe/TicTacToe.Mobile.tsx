import { useThemeColor } from "@/components/hooks/useThemeColor";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Box = "" | "X" | "O";
type Board = Box[][];

const TicTacToe: React.FC = () => {
  const { colors } = useThemeColor();
  const createEmptyBoard = (): Board => [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const [board, setBoard] = useState<Board>(createEmptyBoard);
  const [currentTurn, setCurrentTurn] = useState<Box>("X");
  const [winner, setWinner] = useState<Box | "Draw" | null>(null);

  const checkWinner = (updatedBoard: Board): Box | null => {
    const winPatterns = [
      [updatedBoard[0][0], updatedBoard[0][1], updatedBoard[0][2]],
      [updatedBoard[1][0], updatedBoard[1][1], updatedBoard[1][2]],
      [updatedBoard[2][0], updatedBoard[2][1], updatedBoard[2][2]],
      [updatedBoard[0][0], updatedBoard[1][0], updatedBoard[2][0]],
      [updatedBoard[0][1], updatedBoard[1][1], updatedBoard[2][1]],
      [updatedBoard[0][2], updatedBoard[1][2], updatedBoard[2][2]],
      [updatedBoard[0][0], updatedBoard[1][1], updatedBoard[2][2]],
      [updatedBoard[0][2], updatedBoard[1][1], updatedBoard[2][0]],
    ];

    for (const pattern of winPatterns) {
      if (pattern.every((cell) => cell === "X")) return "X";
      if (pattern.every((cell) => cell === "O")) return "O";
    }

    return null;
  };

  const handlePress = (row: number, col: number): void => {
    if (board[row][col] !== "" || winner) return;

    const updatedBoard = board.map((rowArr) => [...rowArr]);
    updatedBoard[row][col] = currentTurn;

    const winnerFound = checkWinner(updatedBoard);

    if (winnerFound) {
      setWinner(winnerFound);
    } else if (updatedBoard.flat().every((cell) => cell !== "")) {
      setWinner("Draw");
    } else {
      setCurrentTurn(currentTurn === "X" ? "O" : "X");
    }

    setBoard(updatedBoard);
  };

  const resetGame = (): void => {
    setBoard(createEmptyBoard());
    setCurrentTurn("X");
    setWinner(null);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} text="Tic Tac Toe" />
      <ThemedText
        style={styles.subtitle}
        text={winner ? (winner === "Draw" ? "It's a Draw!" : `${winner} Wins!`) : `Turn: ${currentTurn}`}
      />
      <ThemedView style={styles.board}>
        {board.map((row, i) =>
          row.map((cell, j) => (
            <ThemedButton
              key={`${i}-${j}`}
              onPress={() => handlePress(i, j)}
              style={[styles.cell, { backgroundColor: cell ? (cell === "X" ? "#ff7675" : "#74b9ff") : colors.background }]}
              textStyle={styles.cellText}
              title={cell}
            />
          ))
        )}
      </ThemedView>
      <ThemedView style={styles.resetButtonContainer}>
        {winner && (
          <ThemedButton
            onPress={resetGame}
            style={styles.resetButton}
            textStyle={styles.resetButtonText}
            title="Restart Game"
          />
        )}
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 310,
    marginBottom: 10,

  },
  cell: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
    margin: 1,
  },
  cellText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
  resetButtonContainer: {
    borderRadius: 5,
    height: 50,
  },
  resetButton: {
    borderRadius: 5,
  },
  resetButtonText: {
    fontSize: 18,
  },
});

export default TicTacToe;
