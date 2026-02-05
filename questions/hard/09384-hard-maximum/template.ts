/**
 * ### Description
 * 
 * Implement the type `Maximum`, which takes an input type `T`, and returns the maximum value in `T`.
 * 
 * If `T` is an empty array, it returns `never`. **Negative numbers** are not considered.
 * 
 * For example:
 * 
 * ```ts
 * Maximum<[]> // never
 * Maximum<[0, 2, 1]> // 2
 * Maximum<[1, 20, 200, 150]> // 200
 * ```
 * 
 * ### Advanced
 * 
 * Can you implement type `Minimum` inspired by `Maximum`?
 */

type Maximum<T extends any[]> = any
