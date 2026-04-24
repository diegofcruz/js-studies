// ## Exercise 7 — `Promise.any()`

// **Goal:** Resolve with the FIRST fulfilled promise (ignores rejections unless ALL reject).

// **Steps:**

// 1. Create three promises: two reject, one resolves at 400ms.
// 2. Use `Promise.any([...])` and log the result.
// 3. Then make ALL of them reject and observe the `AggregateError`.

import { delay, rejectAfter } from './utils.ts'

console.log('Init ', Date.now())

Promise.any([rejectAfter(100, 'Reject A'), delay(1000, 'Ok B'), rejectAfter(800, 'Reject C')])
  .then((result) => console.log('Success result ', result))
  .catch((err) => err.errors.map((e: string) => console.log('Error ', e)))



Promise.any([rejectAfter(100, 'Reject A'), rejectAfter(1000, 'Reject B'), rejectAfter(800, 'Reject C')])
  .then((result) => console.log('Success result ', result))
  .catch((err) => err.errors.map((e: string) => console.log('Error ', e)))

  // What to observe
  // the function any(), expect for all the results, trying to get one that works
  // If all fails, the catch is triggered, but if only one works, the result is it
