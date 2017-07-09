describe('Rover', () => {
  it('is a function', () => {
    assert.isFunction(Rover);
  });

  it('can be instantiated', () => {
    const rover = new Rover(5, 5, 'E')
    assert.isObject(rover)
  })

  it('accepts a starting x coordinate', () => {
    const rover = new Rover(5, 5, 'E')
    assert.equal(rover.xPosition, 5)
  })

  it('accepts a starting y coordinate', () => {
    const rover = new Rover(5, 5, 'E')
    assert.equal(rover.yPosition, 5)
  })

  it('accepts a starting direction', () => {
    const rover = new Rover(5, 5, 'E')
    assert.equal(rover.direction, 'E')
  })

  it('should have a method to adjust', () => {
    const rover = new Rover(5, 5, 'E')
    assert.isFunction(rover.adjust)
  })

  it('adjust should interpret L correctly according to direction', () => {
    const rover = new Rover(1, 2, 'N')
    rover.adjust('L')
    assert.equal(rover.direction, 'W')
    rover.adjust('L')
    assert.equal(rover.direction, 'S')
    rover.adjust('L')
    assert.equal(rover.direction, 'E')
    rover.adjust('L')
    assert.equal(rover.direction, 'N')
  })

  it('adjust should interpret R correctly according to direction', () => {
    const rover = new Rover(1, 2, 'N')
    rover.adjust('R')
    assert.equal(rover.direction, 'E')
    rover.adjust('R')
    assert.equal(rover.direction, 'S')
    rover.adjust('R')
    assert.equal(rover.direction, 'W')
    rover.adjust('R')
    assert.equal(rover.direction, 'N')
  })

  it('adjust should interpret M correctly according to direction', () => {
    const plateau = new Plateau(5, 5)
    const roverController = new RoverController(plateau)
    roverController.addRover(1, 2, 'N', roverController)
    const rover = roverController.list[0]
    rover.adjust('M')
    assert.equal(rover.yPosition, 3)
    rover.direction = 'E'
    rover.adjust('M')
    assert.equal(rover.xPosition, 2)
    rover.direction = 'S'
    rover.adjust('M')
    assert.equal(rover.yPosition, 2)
    rover.direction = 'W'
    rover.adjust('M')
    assert.equal(rover.xPosition, 1)
  })

  it('adjust should throw an error if there is rover in it\'s directed position', () => {
    const plateau = new Plateau(5, 5)
    const roverController = new RoverController(plateau)
    roverController.addRover(1, 2, 'N', roverController)
    roverController.addRover(1, 1, 'N', roverController)
    assert.throws(() => roverController.list[1].adjust('M'), Error, 'Space Unavailable')
  })

  it('adjust should throw an error if the directed position is out of bounds', () => {
    const plateau = new Plateau(3,3)
    const roverController = new RoverController(plateau)
    roverController.addRover(3, 3, 'N', roverController)
    assert.throws(() => roverController.list[0].adjust('M'), Error, 'Out of Bounds')
  })

  it('should have a method to retrievePosition', () => {
    const plateau = new Plateau(3,3)
    const roverController = new RoverController(plateau)
    roverController.addRover(3, 3, 'N', roverController)
    const rover = roverController.list[0]
    assert.isFunction(rover.retrievePosition);
  })

  it('retrievePosition should retrieve an updated position', () => {
    const plateau = new Plateau(3,3)
    const roverController = new RoverController(plateau)
    roverController.addRover(1, 2, 'N', roverController)
    const rover = roverController.list[0]
    assert.equal(rover.retrievePosition(), '1 2 N')
    rover.adjust('LMLMLMLMM')
    assert.equal(rover.retrievePosition(), '1 3 N')
  })
})
