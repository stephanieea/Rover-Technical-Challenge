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

  it('adjust should interpret directions correctly', () => {
    const rover = new Rover(1, 2, 'N')
    rover.adjust('LMLMLMLMM')
    assert.equal(rover.xPosition, 1)
    assert.equal(rover.yPosition, 3)
    assert.equal(rover.direction, 'N')
  })

  it('should have a method to retrievePosition', () => {
    const rover = new Rover(5, 5, 'E')
    assert.isFunction(rover.retrievePosition);
  })

  it('retrievePosition should retrieve an updated position', () => {
    const rover = new Rover(1, 2, 'N')
    assert.equal(rover.retrievePosition(), '1 2 N')
    rover.adjust('LMLMLMLMM')
    assert.equal(rover.retrievePosition(), '1 3 N')
  })

})
