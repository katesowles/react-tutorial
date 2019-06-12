import React from "react";

import Square from "./square";

function Column(props) {
  const { rowIndex, columnIndex, combo, squares } = props;

  const i = 3 * rowIndex + columnIndex;

  return <Square index={i} value={squares[i]} combo={combo} />;
}

export default Column;
