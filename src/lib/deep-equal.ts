import { compareArrays } from './compare-arrays'
import { compareMaps } from './compare-maps'
import { compareObjects } from './compare-objects'
import { compareSets } from './compare-sets'

export type DeepEqualsFn = (a: any, b: any) => boolean

function deepEquals(a: any, b: any): boolean {
  if (a === b) {
    return true
  }

  if (typeof a !== typeof b) {
    return false
  }

  if (typeof a === 'object') {
    if (Array.isArray(a)) {
      if (Array.isArray(b)) {
        return compareArrays(a, b, deepEquals)
      }
      return false
    }

    if (a instanceof Map) {
      if (b instanceof Map) {
        return compareMaps(a, b, deepEquals)
      }
      return false
    }

    if (a instanceof Set) {
      if (b instanceof Set) {
        return compareSets(a, b)
      }
      return false
    }

    return compareObjects(a, b, deepEquals)
  }
  return a === b
}

export { deepEquals }
