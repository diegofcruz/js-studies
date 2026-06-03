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

// **What to observe:**

// 1. First execution:
//    - Call process(task) once → "Processing 42"
//    - The object is now marked in the WeakSet
//
// 2. Second execution:
//    - Call process(task) again → "Skipping 42 - already processed"
//    - The WeakSet remembers, even though you didn't manually track it
//
// 3. The key difference from Set:
//    - processed.has(task) returns true while task variable holds the reference
//    - If task goes out of scope OR is reassigned to null, WeakSet will
//      eventually forget it (when garbage collector runs)
//    - A regular Set would keep the object alive forever (memory leak)
//
// 4. Practical takeaway:
//    - Use WeakSet ONLY when:
//      ✅ Objects have strong references elsewhere (array, Map, etc)
//      ✅ You're marking/flagging, not storing primary data
//      ✅ Objects can be destroyed at any time without breaking your app
//    - DO NOT use WeakSet if:
//      ❌ This is your only reference to the object
//      ❌ You need the data to persist after object is no longer referenced
//      ❌ You need to iterate or count items
