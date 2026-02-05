/**
 * You're required to implement a type-level partly parser to parse JSON string into a object literal type.
 *
 * Requirements:
 *  - `Numbers` and `Unicode escape (\uxxxx)` in JSON can be ignored. You needn't to parse them.
 */

type Pure<T> = {
  [P in keyof T]: T[P] extends object ? Pure<T[P]> : T[P]
}

type SetProperty<T, K extends PropertyKey, V> = {
  [P in (keyof T) | K]: P extends K ? V : P extends keyof T ? T[P] : never
}

type Token = any
type ParseResult<T, K extends Token[]> = [T, K]
type Tokenize<T extends string, S extends Token[] = []> = Token[]
type ParseLiteral<T extends Token[]> = ParseResult<any, T>

type Parse<T extends string> = Pure<ParseLiteral<Tokenize<T>>[0]>
