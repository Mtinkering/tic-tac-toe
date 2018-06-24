/*
* Build the board of size n*n.
*
* @method buildBoard
* @param {Number} n The size of the board
* @return {Array<Array<String>>} The board
*/
function buildBoard(n) {
  let number = 1;
  const board = [];

  // Board of size n*n
  for (let i = 0; i < n; i += 1) {
    const row = [];
    for (let j = 0; j < n; j += 1) {
      row.push(number.toString());
      number += 1;
    }
    board.push(row);
  }
  return board;
}

/*
* Print the board of size n * n to the output.
*
* @method displayGameBoard
* @param {Array<Array<String>>} board The board to print
* @return {Void}
*/
function displayGameBoard(board) {
  process.stdout.write('\n');
  board.forEach((row, index) => {
    const rowData = ` ${row.join(' | ')}\n`;
    process.stdout.write(rowData);

    if (index < board.length - 1) {
      let s = '';
      for (let i = 0; i < rowData.length; i += 1) {
        s += '-';
      }
      process.stdout.write(`${s}\n`);
    }
  });
  process.stdout.write('\n');
}

/*
* Return the coordinates based on the selection and size of the game board.
*
* @method displayGameBoard
* @param {Number} boxNumber The selection number
* @param {Number} size The size of the board
* @return {Array<Number, Number>}
*/
function toCoodinates(boxNumber, size) {
  const i = Math.floor((boxNumber - 1) / size);
  const j = (boxNumber - 1) % size;
  return [i, j];
}

module.exports = {
  buildBoard,
  displayGameBoard,
  toCoodinates
};
