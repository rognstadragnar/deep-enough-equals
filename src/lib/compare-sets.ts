import { DeepEqualsFn } from './deep-equal'

function compareSets(setA: Set<any>, setB: Set<any>): boolean {
  if (setA.size !== setB.size) {
    return false
  }
  const arrA = []
  setA.forEach(value => {
    arrA.push(value)
  })

  return arrA.every(value => {
    return setB.has(value)
  })
}

export { compareSets }
