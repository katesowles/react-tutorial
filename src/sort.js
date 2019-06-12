import React from "react";

function SortButton(props) {
  const { sortAscend, setSortDirection } = props;
  const buttonLabel = sortAscend ? "Sort Descending" : "Sort Ascending";

  function flipSort() {
    setSortDirection(!sortAscend);
  }

  return <button onClick={() => flipSort()}>{buttonLabel}</button>;
}

export default SortButton;
