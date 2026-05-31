// ## Exercise 4 — Iterating a Set

// **Goal:** Learn the three ways to iterate a `Set` and understand their order guarantees.

// **Concepts covered:** `for...of`, `.forEach()`, `.values()`, `.keys()`, `.entries()`

// **Steps:**

// 1. Create `new Set<string>(['x', 'y', 'z'])`.
// 2. Iterate with `for...of`.
// 3. Iterate with `.forEach()`.
// 4. Iterate with `.values()` using a `for...of`.
// 5. Log `.entries()` — observe the `[value, value]` pairs (quirk for Map compatibility).

const set = new Set<string>(["x", "y", "z"])

for (const val of set) {
  console.log(`for...of ${val}`)
}

set.forEach((val) => {
  console.log(`forEach ${val}`)
})

for (const val of set.values()) {
  console.log(`values(): ${val}`)
}

for (const entry of set.entries()) {
  console.log(`entries(): ${entry}`)
}

// What to observe
// The iteration methods always respects the isnertion order
// The return [x,x] and others duplicated is to keep the sync with the map function
// Set is iterable and respects the insertion order
