import { DeepEqualsFn } from './deep-equal'

function compareObjects(
  objectA: object,
  objectB: object,
  deepEquals: DeepEqualsFn
): boolean {
  const keysA = Object.keys(objectA)
  const keysB = Object.keys(objectB)

  if (keysA.length !== keysB.length) {
    return false
  }

  const bHasOwnProperty = {}.hasOwnProperty.bind(objectB)

  return keysA.every((key, idx) => {
    return bHasOwnProperty(key) && deepEquals(objectA[key], objectB[key])
  })
}

export { compareObjects }
