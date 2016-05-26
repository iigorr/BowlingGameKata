import Game from '../lib/game';
import { expect } from 'chai';

describe('Bowling Game', function() {
  beforeEach(function() {
    this.game = new Game()
  })

  function rollMany(n, pins) {
    for (let i=0; i < n; i++) {
      this.game.roll(pins)
    }
  }

  it("scores a gutter game", function() {
    rollMany.call(this, 20, 0)
    expect(this.game.score()).to.eq(0)
  })

  it("scores a game of all ones", function() {
    rollMany.call(this, 20, 1)
    expect(this.game.score()).to.eq(20)
  })

})
