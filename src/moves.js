import React, { useContext } from "react";
import styled from "styled-components";
import { HandleSetStep, HandleSetNextPlayer } from "./context";

const StyledNestedListButton = styled.li`
  &.current button {
    font-weight: 900;
  }
`;

function Moves(props) {
  const { history, stepNumber, sortAscend } = props;

  const setStep = useContext(HandleSetStep);
  const setNextPlayer = useContext(HandleSetNextPlayer);

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

  let arr = history.map((step, move) => {
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

  return sortAscend ? arr : arr.reverse();
}

export default Moves;
