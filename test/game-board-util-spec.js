/* global describe it */
/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');

const { buildBoard, toCoodinates } = require('../game-board-util');

describe('toCoodinates', () => {
  it('should return correct indices for board of 3', () => {
    expect(toCoodinates(9, 3)).to.deep.equal([2, 2]);
    expect(toCoodinates(1, 3)).to.deep.equal([0, 0]);
    expect(toCoodinates(2, 3)).to.deep.equal([0, 1]);
    expect(toCoodinates(7, 3)).to.deep.equal([2, 0]);
  });

  it('should return correct indices for board of 9', () => {
    expect(toCoodinates(9, 9)).to.deep.equal([0, 8]);
    expect(toCoodinates(1, 9)).to.deep.equal([0, 0]);
    expect(toCoodinates(12, 9)).to.deep.equal([1, 2]);
    expect(toCoodinates(17, 9)).to.deep.equal([1, 7]);
  });
});

describe('buildBoard', () => {
  it('should build the board of 3', () => {
    const board = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];

    expect(buildBoard(3)).to.deep.equal(board);
  });

  it('should build the board of 5', () => {
    const board = [
      ['1', '2', '3', '4', '5'],
      ['6', '7', '8', '9', '10'],
      ['11', '12', '13', '14', '15'],
      ['16', '17', '18', '19', '20'],
      ['21', '22', '23', '24', '25']
    ];
    expect(buildBoard(5)).to.deep.equal(board);
  });
});
