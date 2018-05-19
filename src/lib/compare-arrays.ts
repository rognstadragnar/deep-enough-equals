import { DeepEnoughEqualsFn } from './deep-enough-equals'

function compareArrays(
  arrayA: any[],
  arrayB: any[],
  compare: DeepEnoughEqualsFn
): boolean {
  if (arrayA.length !== arrayB.length) {
    return false
  }

  const everyItemEqual = arrayA.every((aItem, idx) => {
    return compare(aItem, arrayB[idx])
  })
  return everyItemEqual
}

export { compareArrays }
