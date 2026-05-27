// ## Exercise 2 — Initialising from an Array

// **Goal:** Learn to construct a `Set` from an existing iterable and convert back to an Array.

// **Concepts covered:** `new Set(iterable)`, `Array.from()`, spread `[...set]`

// **Steps:**

// 1. Create a `Set<string>` by passing `['a', 'b', 'a', 'c', 'b']` to the constructor.
// 2. Convert it back to an array using `Array.from()`.
// 3. Convert it again using the spread operator.

const letters = new Set<string>(["a", "b", "c", "b"])

console.log(letters.size)
console.log(Array.from(letters))
console.log([...letters])

// What to observe
// The both conversion methods produce the same result, The order always is the insertion order
// new Set(array) is the idiomatic way to deduplicate an array
