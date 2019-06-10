import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Board from "./board.js";
import Info from "./info.js";
import calculateWinner from "./calculate.js";

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

  useEffect(() => {
    // console.log("useEffect", sortAscend);
  });

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
      <Board
        combo={combo}
        squares={current.squares}
        onClick={i => handleClick(i)}
      />

      <Info
        status={status}
        history={history}
        stepNumber={stepNumber}
        setStep={setStep}
        setNextPlayer={setNextPlayer}
      />
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
// TODO: incorporate hooks in order to turn remaining class-defined components into function-defined comps
// DONE: refactor all the styles from index.css to styled components
