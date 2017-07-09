class Rover {
  constructor(xPosition, yPosition, direction, roverController) {
    this.xPosition = xPosition
    this.yPosition = yPosition
    this.direction = direction
    this.roverController = roverController
  }

  adjust(instructions) {
    const command = instructions.split('')
    for(let i = 0; i < command.length; i++) {
      let tentativeXPosition
      let tentativeYPosition
      switch (command[i]) {
      case 'L':
        if (this.direction === 'N') {
          this.direction = 'W'
        } else if (this.direction === 'W') {
          this.direction = 'S'
        } else if (this.direction === 'S') {
          this.direction = 'E'
        } else if (this.direction === 'E') {
          this.direction = 'N'
        }
        break
      case 'R':
        if (this.direction === 'N') {
          this.direction = 'E'
        } else if (this.direction === 'E') {
          this.direction = 'S'
        } else if (this.direction === 'S') {
          this.direction = 'W'
        } else if (this.direction === 'W') {
          this.direction = 'N'
        }
        break
      case 'M':
        if (this.direction === 'N') {
          tentativeXPosition = this.xPosition
          tentativeYPosition = this.yPosition + 1
        }  else if (this.direction === 'E') {
          tentativeXPosition = this.xPosition + 1
          tentativeYPosition = this.yPosition
        } else if (this.direction === 'S') {
          tentativeXPosition = this.xPosition
          tentativeYPosition = this.yPosition - 1
        } else if (this.direction === 'W') {
          tentativeXPosition = this.xPosition - 1
          tentativeYPosition = this.yPosition
        }
        try {
          if (this.roverController.isRoverAtPosition(tentativeXPosition, tentativeYPosition)) {
            throw new Error('Space Unavailable')
          }
          if(this.roverController.isOutOfBounds(tentativeXPosition, tentativeYPosition)) {
            throw new Error('Out of Bounds')
          }
        }
        catch(e) {
          alert(e)
          throw e
        }
        this.xPosition = tentativeXPosition
        this.yPosition = tentativeYPosition
        break
      }
    }
  }

  retrievePosition() {
    return `${this.xPosition} ${this.yPosition} ${this.direction}`
  }
}
