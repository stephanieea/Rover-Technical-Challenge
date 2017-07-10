class Rover {
  constructor(xPosition, yPosition, direction, roverController) {
    this.xPosition = Number(xPosition)
    this.yPosition = Number(yPosition)
    this.direction = direction.toUpperCase()
    this.roverController = roverController
  }

  adjust(instructions) {
    const command = instructions.split('')
    for(let i = 0; i < command.length; i++) {
      let tentativeXPosition
      let tentativeYPosition
      switch (command[i].toUpperCase()) {
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
          tentativeXPosition = Number(this.xPosition)
          tentativeYPosition = Number(this.yPosition) + 1
        }  else if (this.direction === 'E') {
          tentativeXPosition = Number(this.xPosition) + 1
          tentativeYPosition = this.yPosition
        } else if (this.direction === 'S') {
          tentativeXPosition = Number(this.xPosition)
          tentativeYPosition = Number(this.yPosition) - 1
        } else if (this.direction === 'W') {
          tentativeXPosition = Number(this.xPosition) - 1
          tentativeYPosition = Number(this.yPosition)
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
      default:
        try {
          throw new Error('Invalid instructions')
        }
        catch(e) {
          alert(e)
          throw e
        }
      }
    }
  }

  retrievePosition() {
    return `${this.xPosition} ${this.yPosition} ${this.direction}`
  }
}
