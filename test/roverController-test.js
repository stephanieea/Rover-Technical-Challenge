describe('RoverController', () => {
  it('is a function', () => {
    assert.isFunction(RoverController)
  });

  it('can be instantiated', () => {
    var plateau = new Plateau(3, 3)
    var roverController = new RoverController(plateau)
    assert.isObject(roverController)
  })
})
