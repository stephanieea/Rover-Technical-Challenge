describe('RoverController', () => {
  it('is a function', () => {
    assert.isFunction(RoverController)
  });

  it('can be instantiated', () => {
    const plateau = new Plateau(3, 3)
    const roverController = new RoverController(plateau)
    assert.isObject(roverController)
  })

  it('has a list for rovers', () => {
    const plateau = new Plateau(3, 3)
    const roverController = new RoverController(plateau)
    assert.deepEqual(roverController.list, [])
  })

  it('has a method to add rovers', () => {
    const plateau = new Plateau(3, 3)
    const roverController = new RoverController(plateau)
    assert.isFunction(roverController.addRover)
  })

  it('addRover updates list accurately', () => {
    const plateau = new Plateau(3, 3)
    const roverController = new RoverController(plateau)
    assert.deepEqual(roverController.list, [])
    roverController.addRover(1, 1, 'N')
    assert.equal(roverController.list.length, 1)
    assert.isObject(roverController.list[0])
    assert.equal(roverController.list[0].xPosition, 1)
    assert.equal(roverController.list[0].yPosition, 1)
    assert.equal(roverController.list[0].direction, 'N')
  })

  it('has a method to see if any rovers are at a given plateau position', () => {
    const plateau = new Plateau(3, 3)
    const roverController = new RoverController(plateau)
    assert.isFunction(roverController.isRoverAtPosition)
  })

  it('isRoverAtPosition returns true or false as expected', () => {
    const plateau = new Plateau(3, 3)
    const roverController = new RoverController(plateau)
    roverController.addRover(1, 1, 'N')
    assert.equal(roverController.isRoverAtPosition(1, 1), true)
    assert.equal(roverController.isRoverAtPosition(2, 1), false)
  })

  it('has a method to retrieve all rover positions', () => {
    const plateau = new Plateau(3, 3)
    const roverController = new RoverController(plateau)
    assert.isFunction(roverController.retrieveAllRoverPositions)
  })

  it('retrieveAllRoverPositions returns an array of coordinates and directions for all rovers', () => {
    const plateau = new Plateau(3, 3)
    const roverController = new RoverController(plateau)
    roverController.addRover('1 1 N')
    roverController.addRover('2 2 S')
    assert.equal(roverController.retrieveAllRoverPositions().length, 2)
    assert.include(roverController.retrieveAllRoverPositions()[0], '1 1 N')
    assert.include(roverController.retrieveAllRoverPositions()[1], '2 2 S')
  })
})
