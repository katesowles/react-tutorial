export default function calculateWinner(squares) {
  console.log(squares);

  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diag top left to bottom right
    [2, 4, 6] // diag top right to bottom left
  ];

  // if no additional empty squares, exit and show 'draw' text in game info
  if (squares.indexOf(null) === -1)
    return { draw: "Game ends in a draw, better luck next time!" };

  // for each of possible winning combos listed above...
  for (let i = 0; i < lines.length; i++) {
    // destructure the combo into individual square indexes; 'a', 'b', and 'c', respectively.
    const [a, b, c] = lines[i];

    // if first square in combo exists, compare it with the second and third to make sure they match (ie. all X or all O), if true return winner and winning combo data.
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return { winner: squares[a], combo: lines[i] };
  }

  // if we get here then no winner exists, return null and keep playing
  return null;
}
