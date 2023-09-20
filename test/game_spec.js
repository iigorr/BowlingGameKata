import Game from '../lib/game';
import { expect } from 'chai';

describe('Bowling Game', function() {
  beforeEach(function() {
    this.game = new Game()
  })

  it("scores a game with one strike", function() {
    rollStrike.call(this)
    this.game.roll(3)
    this.game.roll(4)
    rollMany.call(this, 16, 0)
    expect(this.game.score()).to.eq(24)
  })

  it("scores a perfect game", function() {
    // TODO
  })

})

function rollMany(n, pins) {
  for (let i=0; i < n; i++) {
    this.game.roll(pins)
  }
}

function rollStrike() {
  this.game.roll(10)
}

function rollSpare() {
  rollMany.call(this, 2, 5)
}
