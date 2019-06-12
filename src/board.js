import React from "react";

import Row from "./row.js";

export default function Board(props) {
  const { combo, squares, onClick } = props;

  let arr = [];

  for (let row = 0; row < 3; row++) {
    arr.push(
      <Row
        key={row}
        rowIndex={row}
        combo={combo}
        squares={squares}
        onClick={onClick}
      />
    );
  }

  return <div>{arr}</div>;
}
