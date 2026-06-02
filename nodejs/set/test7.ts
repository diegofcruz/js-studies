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

// -------------------------------------------------------
// Extra: practical example - potential leak with Set vs WeakSet
// -------------------------------------------------------

type Session = {
	userId: number
	payload: string
}

const processedWithSet = new Set<Session>()
const processedWithWeakSet = new WeakSet<Session>()

function simulateSetLeak(rounds: number): void {
	for (let i = 0; i < rounds; i += 1) {
		const session: Session = {
			userId: i,
			payload: `x`.repeat(1000),
		}

		processedWithSet.add(session)
		// After this loop iteration ends, `session` loses local references,
		// but Set keeps a strong reference, so entries accumulate.
	}

	console.log(`Set retained sessions:`, processedWithSet.size)
}

function simulateWeakSet(rounds: number): void {
	for (let i = 0; i < rounds; i += 1) {
		const session: Session = {
			userId: i,
			payload: `x`.repeat(1000),
		}

		processedWithWeakSet.add(session)
		// WeakSet does not keep objects alive by itself.
	}

	// WeakSet has no size/iteration APIs exactly because entries can disappear
	// at any GC cycle when nothing else references those objects.
	console.log(`WeakSet has no .size and is not iterable (by design).`)
}

simulateSetLeak(10_000)
simulateWeakSet(10_000)

// Rule of thumb:
// - Set: use when you need iteration/size and explicit lifecycle control.
// - WeakSet: use to mark object identity without risking retention leaks.
