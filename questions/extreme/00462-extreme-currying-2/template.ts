/**
 * [Currying](https://en.wikipedia.org/wiki/Currying) is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.
 *
 * But in our daily life, currying dynamic arguments is also commonly used, for example, the `Function.bind(this, [...params])` API.
 *
 * ```ts
 * const func = (a: number, b: number, c: number) => {
 *   return a + b + c
 * }
 *
 * const bindFunc = func(null, 1, 2)
 *
 * const result = bindFunc(3) // result: 6
 * ```
 *
 * Thus, based on `Currying 1`, we would need to have the dynamic argument version:
 *
 * ```ts
 * const add = (a: number, b: number, c: number) => a + b + c
 * const three = add(1, 1, 1) 
 *
 * const curriedAdd = DynamicParamsCurrying(add)
 * const six = curriedAdd(1, 2, 3)
 * const seven = curriedAdd(1, 2)(4)
 * const nine = curriedAdd(2)(3)(4)
 * ```
 *
 * In this challenge, `DynamicParamsCurrying` may take a function with zero to multiple arguments, you need to correctly type it. The returned function may accept at least one argument. When all the arguments as satisfied, it should yield the return type of the original function correctly.
 */

declare function DynamicParamsCurrying(fn: any): any
