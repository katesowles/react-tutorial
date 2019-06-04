import React from "react";
import styled from "styled-components";

import Column from "./column.js";

const StyledRow = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
    background-color: red !important;
  }
`;

function Row(props) {
  const { combo, squares, onClick } = props;

  let arr = [];

  for (let r = 0; r < 3; r++) {
    arr.push(
      <StyledRow key={r}>
        <Column rowIndex={r} combo={combo} square={squares} onClick={onClick} />
      </StyledRow>
    );
  }

  return arr;
}

export default Row;
