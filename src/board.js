import React from 'react';
import Square from './square.js';

export default function Board (props) {
  const { combo, squares, onClick } = props;

  function renderSquare (rowIndex, colIndex) {
    const i = (3 * colIndex) + rowIndex;

    return (
      <Square
      key={ i }
      value={ squares[i] }
      onClick={ () => onClick(i) }
      // if current move matches any of winning combo indexes, pass winningCombo boolean to square for highlighting
      winningCombo={ combo && (i === combo[0] || i === combo[1] || i === combo[2]) } />
    )
  };

  function renderColumns (rowIndex) {
    let arr = [];
    
    for(let c = 0; c < 3; c++) {
      arr.push( renderSquare(c, rowIndex) );
    }

    return (
      <div
      key={ rowIndex }
      className="board-row">
        {arr}
      </div>
    );
  }

  function renderRows () {
    let arr = [];

    for(let r = 0; r < 3; r++) {
      arr.push( renderColumns(r) );
    }

    return arr;
  }

  return (
    <div>
      { renderRows() }
    </div>
  );
} 
