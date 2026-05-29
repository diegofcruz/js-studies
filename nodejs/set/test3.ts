// ## Exercise 3 — Deleting and Clearing

// **Goal:** Understand how to remove individual values and empty a Set entirely.

// **Concepts covered:** `.delete()`, `.clear()`

// **Steps:**

// 1. Create a `Set<number>` with values `10, 20, 30`.
// 2. Delete `20` and log the result of `.delete()` (returns `boolean`).
// 3. Try to delete `99` (not in set) and log the result.
// 4. Clear the entire set and log `.size`.

const nums = new Set<number>([10, 20, 30, NaN, null, null])

console.log(nums.delete(20))
console.log(nums.delete(99))
console.log(nums.delete(NaN))

console.log(`Has null ${nums.has(null)}`)

console.log(nums.delete(null))
console.log(nums.delete(null))

console.log([...nums])

nums.clear()
console.log(nums.size)

// What to observe
// delete just returns true, when some item is removed
// the delete is by value, not by position
