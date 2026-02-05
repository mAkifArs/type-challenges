/**
 * With type ``CountElementNumberToObject``, get the number of occurrences of every item from an array and return them in an object. For example:
 *
 * ~~~ts
 * type Simple1 = CountElementNumberToObject<[]> // return {}
 * type Simple2 = CountElementNumberToObject<[1,2,3,4,5]> 
 * // return {
 * //   1: 1,
 * //   2: 1,
 * //   3: 1,
 * //   4: 1,
 * //   5: 1
 * // }
 *
 * type Simple3 = CountElementNumberToObject<[1,2,3,4,5,[1,2,3]]> 
 * // return {
 * //   1: 2,
 * //   2: 2,
 * //   3: 2,
 * //   4: 1,
 * //   5: 1
 * // }
 * ~~~
 */

type CountElementNumberToObject<T> = any
