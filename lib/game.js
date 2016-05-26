export default class Game {
  constructor() {
    this._rolls = []
    this._currentRoll = 0
  }

  roll(pins) {
    this._rolls[this._currentRoll++] = pins
  }

  score() {
    let score = 0, i = 0
    for (let frame = 0; frame < 10; frame++) {
      if (this._rolls[i] + this._rolls[i+1] == 10) { // spare
        score += 10 + this._rolls[i+2]
        i += 2
      } else {
        score += this._rolls[i] + this._rolls[i+1]
        i += 2
      }
    }
    return score
  }
}
