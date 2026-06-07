// ## Exercise 9 — Edge Cases: SameValueZero Equality

// **Goal:** Understand exactly which values `Set` considers equal (SameValueZero algorithm).

// **Concepts covered:** `NaN`, `-0` vs `+0`, reference equality for objects

// **Steps:**

// 1. Add `NaN` twice — observe only one entry exists (`NaN === NaN` is false in JS, but Set treats them as equal).
// 2. Add `+0` and `-0` — observe they are treated as the same value.
// 3. Add two identical-looking objects — observe both are kept.

const edge = new Set()

edge.add(NaN)
edge.add(NaN)

console.log(NaN === NaN)

console.log(edge.size)
console.log(edge.has(NaN))

edge.add(+0)
edge.add(-0)

console.log(+0 === -0)

console.log(edge.size)

edge.add({ x: 1 });
edge.add({ x: 1 });
console.log(edge.size); // 4 — two distinct object references

// What to observe
// Set uses SameValueZero, which differs from `===` only for 'NaN'. Treats +0 and -1 as equal
// NaN deduplication works correctly with Set, even though NaN never is equal to NaN by default in JS
