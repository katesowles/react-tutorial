import React from "react";

import Square from "./square.js";

function Column(props) {
  const { rowIndex, columnIndex, combo, onClick, squares } = props;

  const i = 3 * rowIndex + columnIndex;

  return (
    <Square index={i} value={squares[i]} combo={combo} onClick={onClick} />
  );
}

export default Column;
