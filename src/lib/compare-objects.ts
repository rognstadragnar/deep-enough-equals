import { DeepEnoughEqualsFn } from './deep-enough-equals'

function compareObjects(
  objectA: object,
  objectB: object,
  compare: DeepEnoughEqualsFn
): boolean {
  const keysA = Object.keys(objectA)
  const keysB = Object.keys(objectB)

  if (keysA.length !== keysB.length) {
    return false
  }

  const bHasOwnProperty = {}.hasOwnProperty.bind(objectB)

  return keysA.every((key, idx) => {
    return bHasOwnProperty(key) && compare(objectA[key], objectB[key])
  })
}

export { compareObjects }
