import React from 'react';
import Square from './square.js';

export default class Board extends React.Component {
  renderSquare (rowIndex, colIndex) {
    const i = (3 * colIndex) + rowIndex;

    return (
      <Square
      key={ i }
      value={ this.props.squares[i] }
      onClick={ () => this.props.onClick(i) }/>
    );
  }

  renderColumns (rowIndex) {
    let arr = [];
    for (let c = 0; c < 3; c++) {
      arr.push( this.renderSquare(c, rowIndex) );
    }

    return (
      <div
      key={ rowIndex }
      className="board-row">
        {arr}
      </div>
    );
  }

  renderRows () {
    let arr = [];
    for (let r = 0; r < 3; r++) {
      arr.push( this.renderColumns(r) );
    }

    return arr;
  }

  render () {
    return (
      <div>
        { this.renderRows() }
      </div>
    );
  }
}