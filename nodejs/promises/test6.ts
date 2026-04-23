// ## Exercise 6 — `Promise.race()`

// **Goal:** Resolve or reject with whichever promise settles FIRST.

// **Steps:**

// 1. Create three promises with delays: 300ms, 100ms, 500ms.
// 2. Pass them to `Promise.race([...])`.
// 3. Log which one wins.
// 4. Then test the reject case: make the 100ms promise reject.

const delay = (ms: number, value: string) => new Promise<string>(resolve => setTimeout(() => resolve(value), ms))


console.log('Init ', Date.now())

Promise.race([delay(1000, 'A'), delay(2000, 'B'), delay(3000, 'C')])
  .then((result) => { console.log('Winner of the first race: ', result) })
  .catch((error) => { console.log('Error: ', error) })

const rejectAfter = (ms: number, error: string) => new Promise<string>((_, reject) => { setTimeout(() => reject(error), ms) })

console.log('Middle ', Date.now())

Promise.race([delay(2000, 'A'), rejectAfter(999, 'B'), delay(3000, 'C')])
  .then((result) => { console.log('Winner of the second race: ', result) })
  .catch((error) => { console.log('First to reject: ', error) })

console.log('End ', Date.now())

// What to observe
// Resolve or reject the first promise that settles, and ignore the others
// Always the more fast one wins, even if it's a reject
