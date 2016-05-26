import Game from '../lib/game';
import { expect } from 'chai';

describe('Bowling Game', function() {

  it("scores a gutter game", () => {
    let game = new Game()

    for (let i=0; i < 20; i++) {
      game.roll(0)
    }

    expect(game.score()).to.eq(0)
  })

})
