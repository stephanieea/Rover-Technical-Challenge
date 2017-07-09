const assert = chai.assert

describe('Plateau', () => {
  it('is a function', () => {
    assert.isFunction(Plateau)
  })

  it('can be instantiated', () => {
    const plateau = new Plateau(5, 5)
    assert.isObject(plateau)
  })

  it('accepts an upperXLimit', () => {
    const plateau = new Plateau(5, 5)
    assert.equal(plateau.upperXLimit, 5)
  })

  it('accepts an upperYLimit', () => {
    const plateau = new Plateau(5, 5)
    assert.equal(plateau.upperYLimit, 5)
  })
})
