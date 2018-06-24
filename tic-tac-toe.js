const readline = require('readline');
const isWinning = require('./is-winning');
const isValidUserChoice = require('./is-valid-user-choice');
const { buildBoard, displayGameBoard, toCoodinates } = require('./game-board-util');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
* Prompt for the move selection.
*
* @method promptForMove
* @param {Object} player The current player being prompted
* @param {Function} callback The callback function
* @return {Void}
*/
function promptForMove(player, callback) {
  rl.question(
    `${player.name}, choose a box to place an '${player.symbol}' into:
>> `,
    answer => {
      callback(answer);
    }
  );
}

/*
* Prompt for restarting game.
* 'yes' to start over.
* Else, exit the program.
*
* @method promptToContinuePlaying
* @return {Void}
*/
function promptToContinuePlaying() {
  rl.question(
    `
Restart Game? Type 'yes' to create new game:
>> `,
    answer => {
      if (answer.trim() === 'yes') {
        process.stdout.write('\nNew game has started!\n\n');
        /* eslint-disable no-use-before-define */
        ticTacToe();
      } else {
        process.stdout.write('\nGood bye!\n');
        process.exit(0);
      }
    }
  );
}

/*
* Main logic of one turn of the game.
*
* It inclues prompting for the move, validating that, checking if the game can continue.
*
* @method playTheCurrentTurn
* @param {Object<Array, Number, Array>} {players, numberOfMoves, gameBoard} The players array of object, current total moves and the game board matrix
* @return {Void}
*/
function playTheCurrentTurn({ players, numberOfMoves, gameBoard }) {
  displayGameBoard(gameBoard);
  const currentPlayer = players[numberOfMoves % 2];

  // Prompt the for the moves
  promptForMove(currentPlayer, selection => {
    // If the selection is valid, mark the board and validate if the game can still continue
    // Else prompt error and ask for selection again
    if (isValidUserChoice(selection, gameBoard)) {
      const size = gameBoard.length;
      const coordinates = toCoodinates(Number.parseInt(selection, 10), size);
      const [i, j] = coordinates;

      // Mark as a valid move
      const currentNumberOfMoves = numberOfMoves + 1;

      // Mark the current position with the player's symbol
      // NOTE: This modifies the board directly
      /* eslint-disable no-param-reassign */
      gameBoard[i][j] = currentPlayer.symbol;

      // Check if it is a winning move
      // If it is, prompt the user who wins
      // Else check if game is over due to no more moves
      // Else continue with the other player's turn
      if (isWinning(gameBoard, coordinates)) {
        displayGameBoard(gameBoard);
        process.stdout.write(`\nCongratulations ${currentPlayer.name}! You have won.\n`);
        promptToContinuePlaying();
      } else if (currentNumberOfMoves === size * size) {
        displayGameBoard(gameBoard);
        process.stdout.write('\nGame Draw!\n');
        promptToContinuePlaying();
      } else {
        playTheCurrentTurn({ players, numberOfMoves: currentNumberOfMoves, gameBoard });
      }
    } else {
      process.stdout.write(`Invalid choice of box!\n`);
      playTheCurrentTurn({ players, numberOfMoves, gameBoard });
    }
  });
}

/*
* Prompt for information about the player.
*
* @method promptForMove
* @param {String} playerId The player id
* @param {Function} callback The callback function
* @return {Void}
*/
function promptForPlayer(playerId, callback) {
  rl.question(
    `
Enter name for Player ${playerId}:
>> `,
    answer => {
      // Ignore whitespace, tab and newline
      if (answer.trim()) {
        callback(answer);
      } else {
        process.stdout.write(`Invalid name for player ${playerId}!\n`);
        promptForPlayer(playerId, callback);
      }
    }
  );
}

/*
* Prompt for information about the board size.
*
* @method promptForBoardSize
* @param {Function} callback The callback function
* @return {Void}
*/
function promptForBoardSize(callback) {
  rl.question(
    `Enter the size for the tic tac toe game:
>> `,
    answer => {
      // Check if digits
      // Else prompt again
      if (/^\d+$/.test(answer.trim())) {
        const size = Number.parseInt(answer, 10);

        // Can't play with size less than 3
        if (size < 3) {
          process.stdout.write('Size must be at least 3!\n\n');
          promptForBoardSize(callback);
        } else {
          callback(size);
        }
      } else {
        process.stdout.write('Size must be a number!\n\n');
        promptForBoardSize(callback);
      }
    }
  );
}

/*
* Prompt for initial information such as players' name and size of the board. Then start the turn
* between 2 players.
*
* @method ticTacToe
* @return {Void}
*/
function ticTacToe() {
  // Prompt size of the board
  promptForBoardSize(size => {
    // Prompt for player 1
    promptForPlayer('1', player1Name => {
      // Prompt for player 2
      promptForPlayer('2', player2Name => {
        const players = [{ name: player1Name, symbol: 'x' }, { name: player2Name, symbol: 'o' }];

        // Build Game board
        const gameBoard = buildBoard(size);

        // Start the game with 2 players, zero total of move and the game board itself
        playTheCurrentTurn({ players, numberOfMoves: 0, gameBoard });
      });
    });
  });
}

module.exports = ticTacToe;
