import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { HandleSquareClick } from "./context";
import Board from "./board";
import Info from "./info";

const StyledGame = styled.div`
  display: flex;
  flex-direction: row;
  font: 14px "Century Gothic", Futura, sans-serif;
  margin: 20px 10px;
`;

function Game() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      squareChanged: null
    }
  ]);
  const [stepNumber, setStep] = useState(0);
  const [xIsNext, setNextPlayer] = useState(true);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diag top left to bottom right
      [2, 4, 6] // diag top right to bottom left
    ];

    // if no additional empty squares, exit and show 'draw' text in game info
    if (squares.indexOf(null) === -1)
      return { draw: "Game ends in a draw, better luck next time!" };

    // for each of possible winning combos listed above...
    for (let i = 0; i < lines.length; i++) {
      // destructure the combo into individual square indexes; 'a', 'b', and 'c', respectively.
      const [a, b, c] = lines[i];

      // if first square in combo exists, compare it with the second and third to make sure they match (ie. all X or all O), if true return winner and winning combo data.
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return { winner: squares[a], combo: lines[i] };
    }

    // if we get here then no winner exists, return null and keep playing
    return null;
  }

  function handleClick(i) {
    // slice allows us to maintain immutablity, which makes "time travel" possible later
    const clickHistory = history.slice(0, stepNumber + 1);
    const current = clickHistory[clickHistory.length - 1];
    const squares = current.squares.slice();

    // if winning combo is found OR if you click on a square that's already occupied, exit
    if (calculateWinner(squares) || squares[i]) return;

    // set square's content to X or O
    squares[i] = xIsNext ? "X" : "O";

    setHistory(clickHistory.concat([{ squares: squares, squareChanged: i }]));
    setStep(clickHistory.length);
    setNextPlayer(!xIsNext);
  }

  let winner, combo, draw;

  const current = history[stepNumber];
  const calculation = calculateWinner(current.squares);

  if (calculation) {
    winner = calculation.winner || null;
    combo = calculation.combo || null;
    draw = calculation.draw || null;
  }

  const status = winner
    ? "Winner: " + winner
    : draw
    ? draw
    : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <StyledGame>
      <HandleSquareClick.Provider value={handleClick}>
        <Board combo={combo} squares={current.squares} />

        <Info
          status={status}
          history={history}
          stepNumber={stepNumber}
          setStep={setStep}
          setNextPlayer={setNextPlayer}
        />
      </HandleSquareClick.Provider>
    </StyledGame>
  );
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

// DONE: display the location for each move in the format (col, row) in the move history list
// DONE: bold the currently selected item in the move list
// DONE: rewrite board to use two loops to make the squares instead of hardcoding them
// DONE: add a toggle button that lets you sort the moves in either ascending or descending order
// DONE: when someone wins, highlight the three squares that caused the win
// DONE: when no one wins, display a message about the result being a draw
// DONE: refactor as many class-defined components into function-defined components as possible
// DONE: incorporate hooks in order to turn remaining class-defined components into function-defined comps
// DONE: refactor all the styles from index.css to styled components
