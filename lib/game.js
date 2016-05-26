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

    for (let frame = 0; frame < 10; frame++) {
      if (this._rolls[frameIndex] == 10) { // strike
        score += 10 +
              this._rolls[frameIndex+1] +
              this._rolls[frameIndex+2]
        frameIndex++
      } else if (isSpare.call(this, frameIndex)) {
        score += 10 + this._rolls[frameIndex+2]
        frameIndex += 2
      } else {
        score += this._rolls[frameIndex] + this._rolls[frameIndex+1]
        frameIndex += 2
      }
    }

    return score
  }

}

function isSpare(frameIndex) {
  return this._rolls[frameIndex] + this._rolls[frameIndex+1] == 10
}
