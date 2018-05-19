import { DeepEnoughEqualsFn } from './deep-enough-equals'

function compareMaps(
  mapA: Map<any, any>,
  mapB: Map<any, any>,
  compare: DeepEnoughEqualsFn
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

    return compare(valA, valB)
  })
}

export { compareMaps }
