// ## Exercise 8 — WeakSet in Practice: Tracking Processed Objects

// **Goal:** Use `WeakSet` to track which objects have been processed, without preventing their garbage collection.

// **Concepts covered:** WeakSet as visited/processed marker, lifecycle-safe tracking

// **Steps:**

// 1. Create a `WeakSet` called `processed`.
// 2. Write a function `process(obj)` that skips already-processed objects.
// 3. Call it twice with the same object — observe it only runs once.

const processed = new WeakSet<object>()

function process(obj: { id: number}): void {
  if (processed.has(obj)) {
    console.log(`Skipping ${obj.id} - already processed`)
    return
  }

  processed.add(obj)
  console.log(`Processing ${obj.id}`)
}

const task = { id: 42 }

process(task)
process(task)

// What to observe
// We should not use weakset for real persistence
// When the references are closed, the weakset will lose the items
