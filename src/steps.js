import React, { Fragment, useState } from "react";
import styled from "styled-components";

import SortButton from "./sort";

const StyledOrderedList = styled.ol`
  padding-left: 30px;
`;

const StyledNestedListButton = styled.li`
  &.current button {
    font-weight: 900;
  }
`;

function Steps(props) {
  const { history, stepNumber, setStep, setNextPlayer } = props;

  const [sortAscend, setSortDirection] = useState(true);

  function locationText(sqChanged) {
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
  }

  function jumpTo(step) {
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

  const arr = sortAscend ? moves : moves.reverse();

  return (
    <Fragment>
      <StyledOrderedList>{arr}</StyledOrderedList>

      <SortButton sortAscend={sortAscend} setSortDirection={setSortDirection} />
    </Fragment>
  );
}

export default Steps;
