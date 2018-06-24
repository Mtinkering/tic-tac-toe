/* global describe it */
/* eslint-disable import/no-extraneous-dependencies */
const sinon = require('sinon');
const { expect } = require('chai');
const robot = require('robotjs');
const ticTacToe = require('../tic-tac-toe');

describe('tic-tac-toe', () => {
  let stub;
  beforeEach(() => {
    stub = sinon.stub(process, 'exit');
  });
  afterEach(() => {
    process.exit.restore();
  });

  it('should end the game and exit where there is a win', function callback(done) {
    // Increase the timeout of the current test
    this.timeout(5000);

    // Size of 3
    robot.typeString('3');
    robot.keyTap('enter');

    // Players
    robot.typeString('Steven');
    robot.keyTap('enter');
    robot.typeString('The lord');
    robot.keyTap('enter');

    // Moves
    robot.typeString('1');
    robot.keyTap('enter');
    robot.typeString('2');
    robot.keyTap('enter');
    robot.typeString('4');
    robot.keyTap('enter');
    robot.typeString('5');
    robot.keyTap('enter');
    robot.typeString('7');
    robot.keyTap('enter');

    // 'x' wins. Ask if continue
    robot.typeString('no');
    robot.keyTap('enter');

    // Start game
    ticTacToe();

    setTimeout(() => {
      // The process.exit is called
      expect(stub.calledWith(0)).to.be.equal(true);
      done();
    }, 500);
  });

  it('should end the game and exit when there is a draw', function callback(done) {
    // Increase the timeout of the current test
    this.timeout(5000);

    // Size of 3
    robot.typeString('3');
    robot.keyTap('enter');

    // Players
    robot.typeString('Steven');
    robot.keyTap('enter');
    robot.typeString('The lord');
    robot.keyTap('enter');

    // Moves
    robot.typeString('1');
    robot.keyTap('enter');
    robot.typeString('5');
    robot.keyTap('enter');
    robot.typeString('4');
    robot.keyTap('enter');
    robot.typeString('7');
    robot.keyTap('enter');
    robot.typeString('8');
    robot.keyTap('enter');
    robot.typeString('9');
    robot.keyTap('enter');
    robot.typeString('3');
    robot.keyTap('enter');
    robot.typeString('2');
    robot.keyTap('enter');
    robot.typeString('6');
    robot.keyTap('enter');

    // Exit the game
    robot.typeString('no');
    robot.keyTap('enter');

    // Start game
    ticTacToe();

    setTimeout(() => {
      // The process.exit is called
      expect(stub.calledWith(0)).to.be.equal(true);
      done();
    }, 500);
  });

  it('should work with board of size 5', function callback(done) {
    // Increase the timeout of the current test
    this.timeout(5000);

    // Size of 3
    robot.typeString('5');
    robot.keyTap('enter');

    // Players
    robot.typeString('Steven');
    robot.keyTap('enter');
    robot.typeString('The lord');
    robot.keyTap('enter');

    // Moves
    robot.typeString('1');
    robot.keyTap('enter');
    robot.typeString('5');
    robot.keyTap('enter');
    robot.typeString('4');
    robot.keyTap('enter');
    robot.typeString('7');
    robot.keyTap('enter');
    robot.typeString('11');
    robot.keyTap('enter');
    robot.typeString('9');
    robot.keyTap('enter');
    robot.typeString('3');
    robot.keyTap('enter');
    robot.typeString('2');
    robot.keyTap('enter');
    robot.typeString('6');
    robot.keyTap('enter');

    // Exit the game
    robot.typeString('no');
    robot.keyTap('enter');

    // Start game
    ticTacToe();

    setTimeout(() => {
      // The process.exit is called
      expect(stub.calledWith(0)).to.be.equal(true);
      done();
    }, 500);
  });
});
