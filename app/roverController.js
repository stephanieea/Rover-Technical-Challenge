class RoverController {
  constructor(plateau) {
    this.plateau = plateau
    this.list = []
  }

  addRover(xPosition, yPosition, direction, self) {
    this.list.push(new Rover(xPosition, yPosition, direction, self))
  }

  isRoverAtPosition(xCoordinate, yCoordinate) {
    let check = false
    console.log(this)
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].xPosition === Number(xCoordinate) && this.list[i].yPosition === Number(yCoordinate)) {
        check = true
      }
    }
    return check
  }

  isOutOfBounds(xCoordinate, yCoordinate){
    if (this.plateau.lowerXLimit > xCoordinate || xCoordinate > this.plateau.upperXLimit) {
      return true
    }
    else if (this.plateau.lowerYLimit > yCoordinate || yCoordinate > this.plateau.upperYLimit) {
      return true
    } else {
      return false
    }
  }

  retrieveAllRoverPositions(){
    return this.list.map(rover => `${rover.xPosition} ${rover.yPosition} ${rover.direction} <br/>`)
  }
}
