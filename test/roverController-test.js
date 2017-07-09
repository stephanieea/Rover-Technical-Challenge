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
    assert.equal(roverController.list, [])
  })

  it('has a method to add rovers', () => {
    const plateau = new Plateau(3, 3)
    const roverController = new RoverController(plateau)
    assert.isFunction(roverController.addRover)
  })

  it('addRover updates list accurately', () => {
    const plateau = new Plateau(3, 3)
    const roverController = new RoverController(plateau)
    assert.equal(roverController.list, [])
    roverController.addRover('1 1 N')
    assert.equal(roverController.list.length, 1)
    assert.isObject(roverController.list[0])
    assert.equal(roverController.list[0].xPosition, 1)
    assert.equal(roverController.list[0].yPosition, 1)
    assert.equal(roverController.list[0].direction, 'N')
  })

  it('has a method to see if any rovers are at a given plateau position', () => {
    assert.isFunction(roverController.isRoverAtPosition)
  })

  it('isRoverAtPosition returns true if there is one', () => {
    const plateau = new Plateau(3, 3)
    const roverController = new RoverController(plateau)
    roverController.addRover('1 1 N')
    assert.equal(roverController.isRoverAtPosition('1 1'), true)
  })

  it('has a method to retrieve all rover positions', () => {
    assert.isFunction(roverController.retrieveAllRoverPositions)
  })

  it('retrieveAllRoverPositions returns an array of coordinates and directions for all rovers', () => {
    const plateau = new Plateau(3, 3)
    const roverController = new RoverController(plateau)
    roverController.addRover('1 1 N')
    roverController.addRover('2 2 S')
    assert.equal(roverController.retrieveAllRoverPositions(), ['1 1 N', '2 2 S'])
  })
})
