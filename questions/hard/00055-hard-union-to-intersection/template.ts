/**
 * Implement the advanced util type `UnionToIntersection<U>`
 *
 * For example
 *
 * ```ts
 * type I = UnionToIntersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
 * ```
 */

type UnionToIntersection<U> = any
