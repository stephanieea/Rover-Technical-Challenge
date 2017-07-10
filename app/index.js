const upperXLimit = $('.upperXLimit')
const upperYLimit = $('.upperYLimit')
const createPlateau = $('.createPlateau')
const roverXPosition = $('.roverXPosition')
const roverYPosition = $('.roverYPosition')
const roverDirection = $('.roverDirection')
const addRover = $('.addRover')
const roverInstructions = $('.roverInstructions')
const sendInstructions = $('.sendInstructions')
const printRoverPositions = $('.printRoverPositions')
const output = $('.output')
const reload = $('.reload')

let plateau
let roverController

createPlateau.click(() => {
  plateauUpperX = Number(upperXLimit.val())
  plateauUpperY = Number(upperYLimit.val())
  plateau = new Plateau(plateauUpperX, plateauUpperY)
  roverController = new RoverController(plateau)
  output.append(`${plateauUpperX} X ${plateauUpperY} Plateau created<br/>`)
  upperXLimit.val('')
  upperYLimit.val('')
})

const validateRover = (xPosition, yPosition, direction) => {
  try {
    if(!plateau){
      throw new Error('Create plateau first')
    }
    if(roverController.isRoverAtPosition(xPosition, yPosition)) {
      throw new Error('Rover already there')
    }
    if(roverController.isOutOfBounds(xPosition, yPosition)) {
      throw new Error('Out of bounds')
    }
    if(!/^[nesw]$/i.test(direction)) {
      throw new Error('Invalid direction')
    }
  } catch(e) {
    alert(e)
    throw e
  }
  return
}

addRover.click(()=> {
  const potentialRoverXPosition = Number(roverXPosition.val())
  const potentialRoverYPosition = Number(roverYPosition.val())
  const potentialRoverDirection = roverDirection.val().toUpperCase()
  validateRover(potentialRoverXPosition, potentialRoverYPosition, potentialRoverDirection)
  roverController.addRover(potentialRoverXPosition, potentialRoverYPosition, potentialRoverDirection, roverController)
  output.append(`Rover added at (${potentialRoverXPosition} ${potentialRoverYPosition} ${potentialRoverDirection})<br/>`)
  roverXPosition.val('')
  roverYPosition.val('')
  roverDirection.val('')
})

sendInstructions.click(() => {
  roverController.list[roverController.list.length - 1].adjust(roverInstructions.val())
  output.append(`Rover instructed to move to ${roverController.list[roverController.list.length - 1].xPosition}
    ${roverController.list[roverController.list.length - 1].yPosition}
    ${roverController.list[roverController.list.length - 1].direction}<br/>`)
})

printRoverPositions.click(() => {
  output.append(roverController.retrieveAllRoverPositions())
})

reload.click(() => {
  location.reload()
})
