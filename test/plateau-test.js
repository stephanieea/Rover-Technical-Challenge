const assert = chai.assert

describe('Plateau', () => {
  it('is a function', () => {
    assert.isFunction(Plateau)
  })

  it('can be instantiated', () => {
    const plateau = new Plateau(5, 5)
    assert.isObject(plateau)
  })
})
