import React from 'react';

export default function Square (props) {
  return (
    <button
    // adds 'winningCombo' class to a square if it is part of a winning combo, allows for highlighting those squares
    className={ "square " + (props.winningCombo ? 'winningCombo' : '') }
    onClick={ props.onClick }>
      { props.value }
    </button>
  );
}