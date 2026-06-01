// ## Exercise 6 — Set Operations (Union, Intersection, Difference)

// **Goal:** Implement classic set math operations using JavaScript `Set`.

// **Concepts covered:** union, intersection, difference, spread + filter patterns

// **Steps:**

// 1. Create `setA = new Set([1, 2, 3, 4])` and `setB = new Set([3, 4, 5, 6])`.
// 2. Compute **union** — all values from both sets.
// 3. Compute **intersection** — only values in both sets.
// 4. Compute **difference** — values in A but not in B.

const setA = new Set<number>([1, 2, 3, 4])
const setB = new Set<number>([3, 4, 5, 6])

const union = new Set<number>([...setA, ...setB])
console.log([...union])

const intersection = new Set<number>([...setA].filter((v) => setB.has(v)))
console.log([...intersection])

const diference = new Set<number>([...setA].filter((v) => !setB.has(v)))
console.log([...diference])

// What to observe
// .has() runs in O(1) time, so filtering with it is efficient even for large sets
