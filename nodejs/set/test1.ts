// ## Exercise 1 — What is a Set?

// **Goal:** Understand that a `Set` is a collection of **unique values** — duplicates are silently ignored.

// **Concepts covered:** `Set`, `new Set()`, `.add()`, `.size`, `.has()`

// **Steps:**

// 1. Create a `Set<number>` and add the values `1, 2, 3, 2, 1`.
// 2. Log `.size` — observe it is `3`, not `5`.
// 3. Use `.has()` to check if `2` and `99` are in the set.

const numbers = new Set<number>()

numbers.add(1)
numbers.add(2)
numbers.add(3)
numbers.add(4)
numbers.add(2)
numbers.add(1)


console.log(`Count of the items ${numbers.size}`)
console.log(`Has item ${numbers.has(2)}`)
console.log(`Has no item ${numbers.has(99)}`)

// What to observe
// We have unique values always
// The size() property reflect the unique values
