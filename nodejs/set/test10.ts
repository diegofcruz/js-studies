// ## Exercise 10 — Set vs Array: When to Choose Which

// **Goal:** Build intuition for when `Set` is the right data structure over `Array`.

// **Concepts covered:** lookup performance, uniqueness semantics, ordered vs unordered access

// **Steps:**

// 1. Benchmark `.has()` on a `Set` vs `.includes()` on an `Array` with 100,000 entries.
// 2. Observe the time difference and reason about why.

const SIZE = 100_000
const arr: number[] = Array.from({ length: SIZE }, (_, i) => i) // the _ is to ignore the parameter
const set = new Set<number>(arr)

const target = 99_999

console.time("Array.includes")
for (let i = 0; i < 1000; i++) arr.includes(target) // The cost here is O(n), because we check all the items
console.timeEnd("Array.includes")

console.time("Set.has")
for (let i = 0; i < 1000; i++) set.has(target) // The cost here is O(1) in general, because internally JS get the potential position
console.timeEnd("Set.has")

// Example where Set.has does not necessarily win:
// For a tiny collection and a single lookup, creating the Set can cost more than using includes directly.
const tinyArr = [1, 2, 3]
const tinyTarget = 1

console.time("Tiny Array.includes total")
tinyArr.includes(tinyTarget)
console.timeEnd("Tiny Array.includes total")

console.time("Tiny Set creation + has")
const tinySet = new Set<number>(tinyArr)
tinySet.has(tinyTarget)
console.timeEnd("Tiny Set creation + has")

// What to observe
// Set.has will be faster then array.includes - usually by 100x or more for large collections
// We need to use array, when we need duplication or positional indexes
// We need to use set, when need faster checking
