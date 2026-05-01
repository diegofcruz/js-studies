// ## Exercise 10 — Common mistake: the forgotten `return`

// **Goal:** Understand why forgetting `return` in a `.then()` breaks the chain.

// **Steps:**

// 1. Write a chain where the second `.then()` calls another async function but forgets to `return` it.
// 2. Log timestamps to observe the broken sequencing.
// 3. Add the `return` and observe it being fixed.

const delay = (ms: number, label: string) =>
  new Promise<string>((res) => {
    console.log(`Starting: ${label}`);
    setTimeout(() => {
      console.log(`Done: ${label}`);
      res(label);
    }, ms);
  });


console.log("--- BROKEN (no return) ---");
delay(200, "Step 1")
  .then((val) => {
    delay(200, "Step 2"); // BUG: no return! Chain doesn't wait for this
  })
  .then(() => {
    console.log("Step 3 — ran too early!");
  });


delay(200, "Step 1")
  .then((val) => {
    return delay(200, "Step 2"); // Correct: chain waits for this promise
  })
  .then(() => {
    console.log("Step 3 — runs at the right time");
  });

// What to observe
// Without the return, the then() function resolve immediately with undefined
// When we set the return, the chain waits for the promise
