import { DeepEqualsFn } from './deep-equal'

function compareArrays(
  arrayA: any[],
  arrayB: any[],
  deepEquals: DeepEqualsFn
): boolean {
  if (arrayA.length !== arrayB.length) {
    return false
  }

  const everyItemEqual = arrayA.every((aItem, idx) => {
    return deepEquals(aItem, arrayB[idx])
  })
  return everyItemEqual
}

export { compareArrays }
