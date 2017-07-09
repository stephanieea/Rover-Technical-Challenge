class RoverController {
  constructor(plateau) {
    this.plateau = plateau
    this.list = []
  }

  addRover(xPosition, yPosition, direction) {
    this.list.push(new Rover(xPosition, yPosition, direction))
  }

  isRoverAtPosition(xCoordinate, yCoordinate) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].xPosition === xCoordinate && this.list[i].yPosition === yCoordinate) {
        return true
      } else {
        return false
      }
    }
  }

  retrieveAllRoverPositions(){
    return this.list.map(rover => `${rover.xPosition} ${rover.yPosition} ${rover.direction}`)
  }
}
