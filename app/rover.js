class Rover {
  constructor(xPosition, yPosition, direction) {
    this.xPosition = xPosition
    this.yPosition = yPosition
    this.direction = direction
  }

  adjust(directions) {
    const steps = directions.split('')
    for(let i = 0; i < steps.length; i++) {
      if (this.direction === 'N' && steps[i] === 'L') {
        this.direction = 'W'
      }
      else if (this.direction === 'W' && steps[i] === 'L') {
        this.direction = 'S'
      }
      else if (this.direction === 'S' && steps[i] === 'L') {
        this.direction = 'E'
      }
      else if (this.direction === 'E' && steps[i] === 'L') {
        this.direction = 'N'
      }
      else if (this.direction === 'N' && steps[i] === 'R') {
        this.direction = 'E'
      }
      else if (this.direction === 'E' && steps[i] === 'R') {
        this.direction = 'S'
      }
      else if (this.direction === 'S' && steps[i] === 'R') {
        this.direction = 'W'
      }
      else if (this.direction === 'W' && steps[i] === 'R') {
        this.direction = 'N'
      }
      else if (this.direction === 'N' && steps[i] === 'M') {
        this.yPosition++
      }
      else if (this.direction === 'E' && steps[i] === 'M') {
        this.xPosition++
      }
      else if (this.direction === 'S' && steps[i] === 'M') {
        this.yPosition--
      }
      else if (this.direction === 'W' && steps[i] === 'M') {
        this.xPosition--
      }
    }
  }

  retrievePosition() {
    return `${this.xPosition} ${this.yPosition} ${this.direction}`
  }
}
