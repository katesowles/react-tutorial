import React from "react";

function SortButton(props) {
  const { sortAscend, setSortDirection } = props;

  const flipSort = () => {
    setSortDirection(!sortAscend);
  };

  return (
    <button onClick={() => flipSort()}>
      {sortAscend ? "Sort Descending" : "Sort Ascending"}
    </button>
  );
}

export default SortButton;
