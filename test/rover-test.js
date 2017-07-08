describe('Rover', () => {
  it('is a function', () => {
    assert.isFunction(Rover);
  });

  it('can be instantiated', () => {
    const rover = new Rover(5, 5, 'E')
    assert.isObject(rover)
  })
})
