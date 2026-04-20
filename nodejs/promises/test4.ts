// ## Exercise 4 — `Promise.all()`

// **Goal:** Run multiple promises in parallel and wait for ALL of them.

// **Steps:**

// 1. Create three functions: `getA()`, `getB()`, `getC()`, each resolving after different delays (200ms, 400ms, 600ms).
// 2. Pass all three to `Promise.all([...])`.
// 3. Log the total time it takes (use `Date.now()` before and after).
// 4. Then, change `getB` to reject. Observe what happens to the whole `Promise.all`.


function getA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('A')
    }, 2000)
  })
}

function getB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('B')
    }, 4000)
  })
}

function getC() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('C')
    }, 6000)
  })
}


console.log('Init ', Date.now())

Promise.all([getA(), getB(), getC()])
  .then((results) => {
    console.log('All resolved ', results)
    console.log('Time ', Date.now())
  })
  .catch( (err) => { console.log('Error', err) })

console.log('End ', Date.now())

// What to observe
// The all() function, wait for all the promises to finish
// If one of the promises fail, the all() function stop and the catch is called with the error
// Pay attention, the promises keep running, but the results are discarded
