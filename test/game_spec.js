import Game from '../lib/game';
import { expect } from 'chai';

describe('Bowling Game', function() {
  beforeEach(function() {
    this.game = new Game()
  })

  it("scores a gutter game", function() {
    rollMany.call(this, 20, 0)
    expect(this.game.score()).to.eq(0)
  })

  it("scores a game of all ones", function() {
    rollMany.call(this, 20, 1)
    expect(this.game.score()).to.eq(20)
  })

  it("scores a game with one spare", function() {
    rollSpare.call(this)
    this.game.roll(3)
    rollMany.call(this, 17, 0)
    expect(this.game.score()).to.eq(16)
  })

})

function rollMany(n, pins) {
  for (let i=0; i < n; i++) {
    this.game.roll(pins)
  }
}

function rollSpare() {
  rollMany.call(this, 2, 5)
}
