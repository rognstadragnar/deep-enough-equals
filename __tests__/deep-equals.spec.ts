import * as chai from 'chai'
import * as mocha from 'mocha'

import { deepEnoughEquals } from '../src/lib/deep-enough-equals'

const expect = chai.expect
describe('Deep equals', () => {
  // string, number, boolean or undefined
  it('Should handle strings', () => {
    expect(deepEnoughEquals('hello', 'world')).to.equal(false)
    expect(deepEnoughEquals('hello', 'hello')).to.equal(true)
  })
  it('Should handle numbers', () => {
    expect(deepEnoughEquals(1, -1)).to.equal(false)
    expect(deepEnoughEquals(1, 1)).to.equal(true)
  })
  it('Should handle booleans', () => {
    expect(deepEnoughEquals(true, false)).to.equal(false)
    expect(deepEnoughEquals(true, true)).to.equal(true)
  })
  it('Should handle undefined', () => {
    expect(deepEnoughEquals(undefined, false)).to.equal(false)
    expect(deepEnoughEquals(undefined, undefined)).to.equal(true)
  })

  it('Should handle objects', () => {
    expect(deepEnoughEquals({}, { hello: 'world' })).to.equal(false)
    expect(
      deepEnoughEquals({ hello: 'world' }, { hello: 'universe' })
    ).to.equal(false)
    expect(
      deepEnoughEquals({ hello: { world: true } }, { hello: { world: false } })
    ).to.equal(false)
    expect(
      deepEnoughEquals(
        { hello: { world: true } },
        { hello: { world: false }, something: {} }
      )
    ).to.equal(false)

    expect(deepEnoughEquals({}, {})).to.equal(true)
    expect(deepEnoughEquals({ hello: 'world' }, { hello: 'world' })).to.equal(
      true
    )
    expect(
      deepEnoughEquals({ hello: { world: true } }, { hello: { world: true } })
    ).to.equal(true)
  })
  it('Should handle arrays', () => {
    expect(deepEnoughEquals([1], [])).to.equal(false)
    expect(deepEnoughEquals([1], [2])).to.equal(false)
    expect(deepEnoughEquals([1, 2, [], [3]], [1, 2, [], []])).to.equal(false)
    expect(
      deepEnoughEquals(
        [true, 'string', [], { key: 'value' }],
        [true, 'string', [], { anotherKey: 'value' }]
      )
    ).to.equal(false)

    expect(deepEnoughEquals([], [])).to.equal(true)
    expect(deepEnoughEquals([1], [1])).to.equal(true)
  })
})
