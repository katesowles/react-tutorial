import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'; 

import Board from './board.js';
import calculateWinner from './calculate.js';

const StyledGame = styled.div`
	display: flex;
	flex-direction: row;
	font: 14px "Century Gothic", Futura, sans-serif;
	margin: 20px 10px;
`;

const StyledStatus = styled.div`
	margin-bottom: 10px;
`;

const StyledGameInfo = styled.div`
	margin-left: 20px;
`;

const StyledOrderedList = styled.ol`
	padding-left: 30px;
`;

const StyledNestedListButton = styled.li`
	&.current button {
		font-weight: 900;
	}
`;

class Game extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      history: [{ squares: Array(9).fill(null), squareChanged: null }],
      stepNumber: 0,
      xIsNext: true,
      sortAscend: true,
    };
	}
	
  handleClick (i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice(); // slice allows us to maintain immutablity, which makes "time travel" possible later

    // if winning combo is found OR if you click on a square that's already occupied, exit
    if (calculateWinner(squares) || squares[i]) return;

    // set square's content to X or O
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{ squares: squares, squareChanged: i }]), // concat, like slice, allows us to maintain immutability!
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo (step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  flipSort () {
    this.setState({
      sortAscend: !this.state.sortAscend
    })
  }

  render () {
    let winner, combo, draw;
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const calculation = calculateWinner(current.squares);

    if (calculation) {
      winner = calculation.winner || null;
      combo = calculation.combo || null;
      draw = calculation.draw || null;
    };
    
    const status = winner ? 'Winner: ' + winner :
          draw ? draw : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    const locationText = (sqChanged) => {
      switch (sqChanged) {
        case 0: return '(column 1, row 1)';
        case 1: return '(column 2, row 1)';
        case 2: return '(column 3, row 1)';
        case 3: return '(column 1, row 2)';
        case 4: return '(column 2, row 2)';
        case 5: return '(column 3, row 2)';
        case 6: return '(column 1, row 3)';
        case 7: return '(column 2, row 3)';
        case 8: return '(column 3, row 3)';
        default: return '';
      }
    }

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      const location = locationText(history[move].squareChanged);

      return (
        <StyledNestedListButton
        key={ move } 
        className={(this.state.stepNumber === move ? 'current' : '')}>
          <button
          onClick={ () => this.jumpTo(move) }>
            { desc } { location }
          </button>
        </StyledNestedListButton>
      )
    })

    return (
			<StyledGame>
				<Board
					combo={ combo }
					squares={ current.squares }
					onClick={ (i) => this.handleClick(i) }
				/>
        
        <StyledGameInfo>
          <StyledStatus> { status } </StyledStatus>

					<StyledOrderedList>
						{ this.state.sortAscend ? moves : moves.reverse() }
					</StyledOrderedList>

          <button onClick={ () => this.flipSort() }>
            { this.state.sortAscend ? 'Sort Descending' : 'Sort Ascending' }
          </button>
        </StyledGameInfo>
			</StyledGame>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);

// DONE: display the location for each move in the format (col, row) in the move history list
// DONE: bold the currently selected item in the move list
// DONE: rewrite board to use two loops to make the squares instead of hardcoding them
// DONE: add a toggle button that lets you sort the moves in either ascending or descending order
// DONE: when someone wins, highlight the three squares that caused the win
// DONE: when no one wins, display a message about the result being a draw
// DONE: refactor as many class-defined components into function-defined components as possible
// TODO: incorporate hooks in order to turn remaining class-defined components into function-defined comps
// DONE: refactor all the styles from index.css to styled components