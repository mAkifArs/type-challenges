/**
 * 1. Combine multiple modifier keys, but the same modifier key combination cannot appear.
 * 2. In the `ModifierKeys` provided, the priority of the previous value is higher than the latter value; that is, `cmd ctrl` is OK, but `ctrl cmd` is not allowed.
 */

// 实现 Combs
type Combs<T extends any[]> = any
