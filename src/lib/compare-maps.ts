import { DeepEqualsFn } from './deep-equal'

function compareMaps(
  mapA: Map<any, any>,
  mapB: Map<any, any>,
  deepEquals: DeepEqualsFn
): boolean {
  if (mapA.size !== mapB.size) {
    return false
  }

  const arrA = []
  mapA.forEach((value, key) => {
    arrA.push(key)
  })

  return arrA.every(key => {
    const valA = mapA.get(key)
    const valB = mapB.get(key)

    return deepEquals(valA, valB)
  })
}

export { compareMaps }
