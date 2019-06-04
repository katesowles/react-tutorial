import React from "react";

import Square from "./square.js";

function Column(props) {
  const { rowIndex, combo, squares, onClick } = props;

  let arr = [];

  for (let c = 0; c < 3; c++) {
    arr.push(
      <Square
        key={c}
        columnIndex={c}
        rowIndex={rowIndex}
        combo={combo}
        onClick={onClick}
        squares={squares}
      />
    );
  }

  return arr;
}

export default Column;

// return (
//   <Square
//     key={i}
//     value={squares[i]}
//     onClick={() => onClick(i)}
//     // if current move matches any of winning combo indexes, pass winningCombo boolean to square for highlighting
//     winningCombo={
//       combo && (i === combo[0] || i === combo[1] || i === combo[2])
//     }
//   />
// );
