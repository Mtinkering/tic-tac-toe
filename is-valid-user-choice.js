const { toCoodinates } = require('./game-board-util');

/*
* Validate the selection based on the state of the board.
*
* Valid choices should be:
* - A valid number within the grid
* - Not selected before (not 'x' or 'o')
*
* @method isValidUserChoice
* @param {String} selection The selection string
* @param {Array<Array<String>>} board The game board
*
* @return {Boolean}
*/
function isValidUserChoice(selection, board) {
  const digitsRegex = /^\d+$/;
  const size = board.length;

  // Only care about digits
  if (digitsRegex.test(selection)) {
    const number = Number.parseInt(selection, 10);

    // Check if within boundary
    // If yes, check if it is selected before
    if (number >= 1 && number <= size * size) {
      const [i, j] = toCoodinates(number, size);
      return board[i][j] !== 'x' && board[i][j] !== 'o';
    }
    return false;
  }
  return false;
}

module.exports = isValidUserChoice;
