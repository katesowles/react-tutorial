import React from "react";

import Row from "./row";

export default function Board(props) {
  const { combo, squares } = props;

  let arr = [];

  for (let row = 0; row < 3; row++) {
    arr.push(<Row key={row} rowIndex={row} combo={combo} squares={squares} />);
  }

  return <div>{arr}</div>;
}
