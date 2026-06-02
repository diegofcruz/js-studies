// ## Exercise 7 — WeakSet: What Changes and Why

// **Goal:** Understand `WeakSet` and how it differs from `Set` in terms of memory semantics.

// **Concepts covered:** `WeakSet`, weak references, GC behaviour, limitations (no iteration, no size)

// **Steps:**

// 1. Create a `WeakSet`.
// 2. Add two objects to it.
// 3. Try to log `.size` — observe it is `undefined`.
// 4. Try to iterate with `for...of` — observe the TypeError.
// 5. Use `.has()` and `.delete()` — the only safe operations.

const ws = new WeakSet<object>()

const objA = { name: `A` }
const objB = { name: `b` }

ws.add(objA)
ws.add(objB)

console.log(ws.has(objA))
console.log(ws.has({}))

ws.delete(objA)
console.log(ws.has(objA))

// These would throw at runtime:
// console.log(ws.size)       // undefined — not supported
// for (const v of ws) {}     // TypeError: ws is not iterable

// What to observe
// WeakSet dont have iteration
