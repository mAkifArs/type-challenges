/**
 * Given an `union of types` and `array of type pairs` to replace (`[[string, number], [Date, null]]`), return a new union replaced with the `type pairs`.
 */

type UnionReplace<T, U extends [any, any][]> = any
