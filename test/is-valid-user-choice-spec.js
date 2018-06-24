/* global describe it */
/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');

const isValidUserChoice = require('../is-valid-user-choice');

describe('isValidUserChoice for board of size 3', () => {
  it('should return false for out of bound choices', () => {
    // Current state of the board
    // 1 | 2 | 3
    // -----------
    // 4 | 5 | 6
    // -----------
    // 7 | 8 | 9
    const gameBoard = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];

    expect(isValidUserChoice('hello world', gameBoard)).to.be.equal(false);
    expect(isValidUserChoice('0', gameBoard)).to.be.equal(false);
    expect(isValidUserChoice('10', gameBoard)).to.be.equal(false);
    expect(isValidUserChoice('-3', gameBoard)).to.be.equal(false);
    expect(isValidUserChoice('3.0', gameBoard)).to.be.equal(false);
    expect(isValidUserChoice('10000', gameBoard)).to.be.equal(false);
  });

  it('should return true for inbound choices', () => {
    // Current state of the board
    // 1 | 2 | 3
    // -----------
    // 4 | 5 | 6
    // -----------
    // 7 | 8 | 9
    const gameBoard = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];

    expect(isValidUserChoice('1', gameBoard)).to.be.equal(true);
    expect(isValidUserChoice('9', gameBoard)).to.be.equal(true);
    expect(isValidUserChoice('03', gameBoard)).to.be.equal(true);
    expect(isValidUserChoice('003', gameBoard)).to.be.equal(true);
    expect(isValidUserChoice('5', gameBoard)).to.be.equal(true);
  });

  it('should return false for already selected choices', () => {
    // Current state of the board
    // 1 | x | x
    // -----------
    // 4 | o | o
    // -----------
    // 7 | 8 | 9
    const gameBoard = [['1', 'x', 'x'], ['4', 'o', 'o'], ['7', '8', '9']];

    expect(isValidUserChoice('2', gameBoard)).to.be.equal(false);
    expect(isValidUserChoice('3', gameBoard)).to.be.equal(false);
    expect(isValidUserChoice('5', gameBoard)).to.be.equal(false);
    expect(isValidUserChoice('6', gameBoard)).to.be.equal(false);
    expect(isValidUserChoice('06', gameBoard)).to.be.equal(false);
  });
});

describe('isValidUserChoice for board of size 5', () => {
  it('should return false for out of bound choices', () => {
    // Current state of the board
    //  1 | 2 | 3 | 4 | 5
    // -------------------
    //  6 | 7 | 8 | 9 | 10
    // --------------------
    //  11 | 12 | 13 | 14 | 15
    // ------------------------
    //  16 | 17 | 18 | 19 | 20
    // ------------------------
    //  21 | 22 | 23 | 24 | 25
    const gameBoard = [
      ['1', '2', '3', '4', '5'],
      ['6', '7', '8', '9', '10'],
      ['11', '12', '13', '14', '15'],
      ['16', '17', '18', '19', '20'],
      ['21', '22', '23', '24', '25']
    ];

    expect(isValidUserChoice('hello world', gameBoard)).to.be.equal(false);
    expect(isValidUserChoice('0', gameBoard)).to.be.equal(false);
    expect(isValidUserChoice('26', gameBoard)).to.be.equal(false);
    expect(isValidUserChoice('-3', gameBoard)).to.be.equal(false);
    expect(isValidUserChoice('3.0', gameBoard)).to.be.equal(false);
    expect(isValidUserChoice('10000', gameBoard)).to.be.equal(false);
  });

  it('should return true for inbound choices', () => {
    // Current state of the board
    //  1 | 2 | 3 | 4 | 5
    // -------------------
    //  6 | 7 | 8 | 9 | 10
    // --------------------
    //  11 | 12 | 13 | 14 | 15
    // ------------------------
    //  16 | 17 | 18 | 19 | 20
    // ------------------------
    //  21 | 22 | 23 | 24 | 25
    const gameBoard = [
      ['1', '2', '3', '4', '5'],
      ['6', '7', '8', '9', '10'],
      ['11', '12', '13', '14', '15'],
      ['16', '17', '18', '19', '20'],
      ['21', '22', '23', '24', '25']
    ];

    expect(isValidUserChoice('1', gameBoard)).to.be.equal(true);
    expect(isValidUserChoice('9', gameBoard)).to.be.equal(true);
    expect(isValidUserChoice('03', gameBoard)).to.be.equal(true);
    expect(isValidUserChoice('003', gameBoard)).to.be.equal(true);
    expect(isValidUserChoice('25', gameBoard)).to.be.equal(true);
  });

  it('should return false for already selected choices', () => {
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

    expect(isValidUserChoice('1', gameBoard)).to.be.equal(false);
    expect(isValidUserChoice('8', gameBoard)).to.be.equal(false);
    expect(isValidUserChoice('9', gameBoard)).to.be.equal(false);
    expect(isValidUserChoice('13', gameBoard)).to.be.equal(false);
    expect(isValidUserChoice('23', gameBoard)).to.be.equal(false);
  });
});
