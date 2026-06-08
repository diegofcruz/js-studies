// ## Exercise 10 — Set vs Array: When to Choose Which

// **Goal:** Build intuition for when `Set` is the right data structure over `Array`.

// **Concepts covered:** lookup performance, uniqueness semantics, ordered vs unordered access

// **Steps:**

// 1. Benchmark `.has()` on a `Set` vs `.includes()` on an `Array` with 100,000 entries.
// 2. Observe the time difference and reason about why.

const SIZE = 100_000
const arr: number[] = Array.from({ length: SIZE }, (_, i) => i)
const set = new Set<number>(arr)

const target = 99_999

console.time("Array.includes")
for (let i = 0; i < 1000; i++) arr.includes(target)
console.timeEnd("Array.includes")

console.time("Set.has")
for (let i = 0; i < 1000; i++) set.has(target)
console.timeEnd("Set.has")

// What to observe
// Set.has will be faster then array.includes - usually by 100x or more for large collections
// We need to use array, when we need duplication or positional indexes
// We need to use set, when need faster checking
