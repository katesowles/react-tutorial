import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledStatus = styled.div`
  margin-bottom: 10px;
`;

const StyledGameInfo = styled.div`
  margin-left: 20px;
`;

const StyledOrderedList = styled.ol`
  padding-left: 30px;
`;

const StyledNestedListButton = styled.li`
  &.current button {
    font-weight: 900;
  }
`;

function Info(props) {
  const { status, stepNumber, history, setStep, setNextPlayer } = props;

  const [sortAscend, setSortDirection] = useState(true);

  function flipSort() {
    setSortDirection(!sortAscend);
  }

  function sortButtonText() {
    return sortAscend ? "Sort Descending" : "Sort Ascending";
  }

  function sortButton() {
    return <button onClick={() => flipSort()}>{sortButtonText()}</button>;
  }

  const locationText = sqChanged => {
    switch (sqChanged) {
      case 0:
        return "(column 1, row 1)";
      case 1:
        return "(column 2, row 1)";
      case 2:
        return "(column 3, row 1)";
      case 3:
        return "(column 1, row 2)";
      case 4:
        return "(column 2, row 2)";
      case 5:
        return "(column 3, row 2)";
      case 6:
        return "(column 1, row 3)";
      case 7:
        return "(column 2, row 3)";
      case 8:
        return "(column 3, row 3)";
      default:
        return "";
    }
  };

  function jumpTo(step) {
    console.log("jumpTo", step);
    setStep(step);
    setNextPlayer(step % 2 === 0);
  }

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    const location = locationText(history[move].squareChanged);

    return (
      <StyledNestedListButton
        key={move}
        className={stepNumber === move ? "current" : ""}
      >
        <button onClick={() => jumpTo(move)}>
          {desc} {location}
        </button>
      </StyledNestedListButton>
    );
  });

  return (
    <StyledGameInfo>
      <StyledStatus> {status} </StyledStatus>

      <StyledOrderedList>
        {sortAscend ? moves : moves.reverse()}
      </StyledOrderedList>

      {sortButton()}
    </StyledGameInfo>
  );
}

export default Info;
