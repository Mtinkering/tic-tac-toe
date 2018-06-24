// Possible wins by horizontal combinations from the move
const horizontal = [
  [[0, -2], [0, -1], [0, 0]],
  [[0, -1], [0, 0], [0, 1]],
  [[0, 0], [0, 1], [0, 2]]
];

// Possible wins by vertical combinations from the move
const vertical = [[[-2, 0], [-1, 0], [0, 0]], [[-1, 0], [0, 0], [1, 0]], [[0, 0], [1, 0], [2, 0]]];

// Possible wins by diagonal combinations from the move: 3 top left to bottom right, and 3 top right to bottom left
const diagonal = [
  [[-2, -2], [-1, -1], [0, 0]],
  [[-1, -1], [0, 0], [1, 1]],
  [[0, 0], [1, 1], [2, 2]],
  [[-2, 2], [-1, 1], [0, 0]],
  [[-1, 1], [0, 0], [1, -1]],
  [[0, 0], [1, -1], [2, -2]]
];

// Possible win is any of the 12 combinations for all numbers in the grid
const combinations = [...horizontal, ...vertical, ...diagonal];

/*
* Determine if the game board size n*n is in a winning state, after placing a valid move = [i, j].
*
* This method validates the current state of the gameboard, does not modify the board.
*
* @method isWinning
* @param {Array<Array<String>>} The game board to check the win
* @param {Array<Number, Number>} The move coordinates
* @return {Boolean}
*/
function isWinning(gameBoard, move) {
  const size = gameBoard.length;
  const [x, y] = move;

  // Check if any combination, an array of 3 cells, passes the conditions to win the game:
  // 1. Indices must be inside the grid
  // 2. Their values must be the same
  return combinations.some(combination => {
    // Store values of the cells if valid
    const values = [];

    // One combination is an array of 3 cells
    // Check if all cell indices are valid
    const isInBound = combination.every(cell => {
      const [dx, dy] = cell;
      const i = x + dx;
      const j = y + dy;

      // Must be inside the boundary
      if (i >= 0 && i < size && j >= 0 && j < size) {
        values.push(gameBoard[i][j]);
        return true;
      }
      return false;
    });

    // Inbound and the same value
    return isInBound && values[0] === values[1] && values[1] === values[2];
  });
}

module.exports = isWinning;
