import React from "react";
import styled from "styled-components";

import Column from "./column";

const StyledRow = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

function Row(props) {
  const { rowIndex, combo, squares } = props;

  let arr = [];

  for (let col = 0; col < 3; col++) {
    arr.push(
      <Column
        key={col}
        columnIndex={col}
        rowIndex={rowIndex}
        combo={combo}
        squares={squares}
      />
    );
  }

  return <StyledRow>{arr}</StyledRow>;
}

export default Row;
