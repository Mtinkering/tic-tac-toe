/* global describe it */
/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');

const isWinning = require('../is-winning');

describe('isWinning', () => {
  it('should return winning state for board of size 3', () => {
    // Current state of the board
    // x | x | x
    // -----------
    // 4 | o | o
    // -----------
    // 7 | 8 | 9
    const gameBoard = [['x', 'x', 'x'], ['4', 'o', 'o'], ['7', '8', '9']];
    const lastMove = [0, 0];

    expect(isWinning(gameBoard, lastMove)).to.be.equal(true);
  });

  it('should return not winning state for board of size 3', () => {
    // Current state of the board
    // 1 | x | x
    // -----------
    // 4 | o | o
    // -----------
    // 7 | 8 | 9
    const gameBoard = [['1', 'x', 'x'], ['4', 'o', 'o'], ['7', '8', '9']];
    const lastMove = [0, 1];

    expect(isWinning(gameBoard, lastMove)).to.be.equal(false);
  });

  it('should return winning state by vertical combination for board of size 3', () => {
    // Current state of the board
    // x | o | 3
    // -----------
    // x | o | o
    // -----------
    // x | x | 9
    const gameBoard = [['x', 'o', '3'], ['x', 'o', 'o'], ['x', 'x', '9']];
    const lastMove = [2, 0];

    expect(isWinning(gameBoard, lastMove)).to.be.equal(true);
  });

  it('should return winning state by diagonal combination for board of size 3', () => {
    // Current state of the board
    // 1 | o | x
    // -----------
    // o | x | o
    // -----------
    // x | x | 9
    const gameBoard = [['1', 'o', 'x'], ['o', 'x', 'o'], ['x', 'x', '9']];
    const lastMove = [1, 1];

    expect(isWinning(gameBoard, lastMove)).to.be.equal(true);
  });
});

describe('isWinning', () => {
  it('should return winning state for board of size 5', () => {
    // Current state of the board
    //  1 | 2 | 3 | 4 | 5
    // -------------------
    //  6 | 7 | o | o | 10
    // --------------------
    //  11 | x | x | x | 15
    // ------------------------
    //  16 | 17 | 18 | 19 | 20
    // ------------------------
    //  21 | 22 | 23 | 24 | 25
    const gameBoard = [
      ['1', '2', '3', '4', '5'],
      ['6', '7', 'o', 'o', '10'],
      ['11', 'x', 'x', 'x', '15'],
      ['16', '17', '18', '19', '20'],
      ['21', '22', '23', '24', '25']
    ];
    const lastMove = [2, 1];

    expect(isWinning(gameBoard, lastMove)).to.be.equal(true);
  });

  it('should return not winning state for board of size 5', () => {
    // Current state of the board
    //  1 | 2 | 3 | 4 | 5
    // -------------------
    //  6 | 7 | o | o | 10
    // --------------------
    //  11 | 12 | x | x | 15
    // ------------------------
    //  16 | 17 | 18 | 19 | 20
    // ------------------------
    //  21 | 22 | 23 | 24 | 25
    const gameBoard = [
      ['1', '2', '3', '4', '5'],
      ['6', '7', 'o', 'o', '10'],
      ['11', '12', 'x', 'x', '15'],
      ['16', '17', '18', '19', '20'],
      ['21', '22', '23', '24', '25']
    ];
    const lastMove = [2, 2];

    expect(isWinning(gameBoard, lastMove)).to.be.equal(false);
  });

  it('should return winning state by vertical combination for board of size 5', () => {
    // Current state of the board
    //  o | 2 | 3 | 4 | 5
    // -------------------
    //  6 | 7 | o | o | 10
    // --------------------
    //  11 | 12 | x | x | 15
    // ------------------------
    //  16 | 17 | x | 19 | 20
    // ------------------------
    //  21 | 22 | x | 24 | 25
    const gameBoard = [
      ['o', '2', '3', '4', '5'],
      ['6', '7', 'o', 'o', '10'],
      ['11', '12', 'x', 'x', '15'],
      ['16', '17', 'x', '19', '20'],
      ['21', '22', 'x', '24', '25']
    ];
    const lastMove = [2, 2];

    expect(isWinning(gameBoard, lastMove)).to.be.equal(true);
  });

  it('should return winning state by diagonal combination for board of size 5', () => {
    // Current state of the board
    //  o | 2 | 3 | 4 | 5
    // -------------------
    //  6 | o | 8 | o | 10
    // --------------------
    //  11 | 12 | o | x | 15
    // ------------------------
    //  16 | 17 | x | 19 | 20
    // ------------------------
    //  21 | 22 | x | 24 | 25
    const gameBoard = [
      ['o', '2', '3', '4', '5'],
      ['6', 'o', '8', 'o', '10'],
      ['11', '12', 'o', 'x', '15'],
      ['16', '17', 'x', '19', '20'],
      ['21', '22', 'x', '24', '25']
    ];
    const lastMove = [0, 0];

    expect(isWinning(gameBoard, lastMove)).to.be.equal(true);
  });
});
