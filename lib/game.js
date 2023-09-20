export default class Game {
  constructor() {
    this._rolls = []
    this._currentRoll = 0
  }

  roll(pins) {
    this._rolls[this._currentRoll++] = pins
  }

  score() {
    let score = 0, frameIndex = 0

    // TODO
    return score
  }
}

