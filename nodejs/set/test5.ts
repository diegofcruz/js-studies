// ## Exercise 5 — Set as a Deduplication Tool

// **Goal:** Apply `Set` to a real-world problem: removing duplicate entries from data.

// **Concepts covered:** deduplication pattern, primitive vs reference equality

// **Steps:**

// 1. Deduplicate an array of numbers using `Set`.
// 2. Deduplicate an array of strings.
// 3. Try to deduplicate an array of objects — observe it does NOT work and explain why.

const rawNumbers = [1, 2, 3, 1, 4]
const uniqueNumbers = [...new Set(rawNumbers)]
console.log(uniqueNumbers) // unique items

const rawTags = ["js", "ts", "js", "node", "ts"]
const uniqueTags = [...new Set(rawTags)]
console.log(uniqueTags) // ['js', 'ts', 'node']

const users = [{ id: 1 }, { id: 1 }, { id: 2 }]
const uniqueUsers = [...new Set(users)]
console.log(uniqueUsers.length) // 3 — all three are different references
console.log(uniqueUsers)

// What to observe
// primitive values, are compared by values, object are compared by the reference of the object
