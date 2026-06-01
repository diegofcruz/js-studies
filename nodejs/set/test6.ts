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

const runWithTiming = <T>(label: string, action: () => T): T => {
	const start = performance.now()
	const result = action()
	const elapsed = performance.now() - start
	console.log(`${label}: ${elapsed.toFixed(3)}ms`)
	return result
}

const union = runWithTiming('union', () => new Set<number>([...setA, ...setB]))
console.log([...union])

const intersection = runWithTiming('intersection', () => new Set<number>([...setA].filter((v) => setB.has(v))))
console.log([...intersection])

const diference = runWithTiming('difference', () => new Set<number>([...setA].filter((v) => !setB.has(v))))
console.log([...diference])

// What to observe
// .has() runs in O(1) time, so filtering with it is efficient even for large sets

// Difference between Array.includes() and Set.has()
//
// Array.includes() answers: "is this value somewhere in this ordered list?"
// It usually checks items one by one until it finds a match.
// That means the work grows with the size of the array.
//
// Set.has() answers the same question, but a Set is designed specifically for membership checks.
// The engine stores values in a structure optimized for lookup, so it can usually answer
// "do I have this value?" without scanning everything.
//
// In practice:
// - use Array.includes() when you already have an array and the list is small, ordered, or duplicates matter
// - use Set.has() when you care about fast repeated existence checks and unique values
//
// Example 1: checking a single value
const allowedRoles = ['admin', 'editor', 'viewer']
console.log(runWithTiming('array.includes', () => allowedRoles.includes('editor')))

const allowedRoleSet = new Set(allowedRoles)
console.log(runWithTiming('set.has', () => allowedRoleSet.has('editor')))

// Example 2: repeated checks in a loop
const searchTerms = ['node', 'set', 'array', 'promise']
const documentWords = ['set', 'map', 'object', 'function', 'array', 'node']

const repeatedArrayChecks = runWithTiming('array.includes repeated', () => documentWords.filter((word) => searchTerms.includes(word)))
console.log(repeatedArrayChecks)

const searchTermSet = new Set(searchTerms)
const repeatedSetChecks = runWithTiming('set.has repeated', () => documentWords.filter((word) => searchTermSet.has(word)))
console.log(repeatedSetChecks)

// Example 3: duplicates vs uniqueness
const repeatedValues = [1, 1, 2, 2, 3]
console.log(runWithTiming('array.includes duplicates', () => repeatedValues.includes(2)))
console.log(runWithTiming('set.has duplicates', () => new Set(repeatedValues).has(2)))
console.log(runWithTiming('dedupe with set', () => [...new Set(repeatedValues)]))
