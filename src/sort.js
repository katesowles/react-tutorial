import React from "react";

function SortButton(props) {
  const { sortAscend, setSortDirection } = props;

  const flipSort = () => {
    setSortDirection(!sortAscend);
  };

  const sortButtonText = () => {
    return sortAscend ? "Sort Descending" : "Sort Ascending";
  };

  return <button onClick={() => flipSort()}>{sortButtonText()}</button>;
}

export default SortButton;
