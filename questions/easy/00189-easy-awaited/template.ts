/**
 * If we have a type which is a wrapped type like Promise, how can we get the type which is inside the wrapped type?
 *
 * For example: if we have `Promise<ExampleType>` how to get ExampleType?
 *
 * ```ts
 * type ExampleType = Promise<string>
 *
 * type Result = MyAwaited<ExampleType> // string
 * ```
 *
 * > This question is ported from the [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4) by [@maciejsikora](https://github.com/maciejsikora)
 */

type MyAwaited<T> = any
