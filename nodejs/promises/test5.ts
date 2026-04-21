// ## Exercise 5 — `Promise.allSettled()`

// **Goal:** Run multiple promises and get the result of EACH, regardless of success or failure.

// **Steps:**

// 1. Use the same `getA`, `getB` (failing), `getC` from the end of Exercise 4.
// 2. Replace `Promise.all` with `Promise.allSettled`.
// 3. Iterate over the results and check the `.status` field (`"fulfilled"` or `"rejected"`).


const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

function getA() {
  return new Promise((resolve, reject) => delay(2000).then(() => resolve('Result A')))
}

function getB() {
  return new Promise((resolve, reject) => delay(4000).then(() => reject('Result B')))
}

function getC() {
  return new Promise((resolve, reject) => delay(6000).then(() => resolve('Result C')))
}


console.log('Init ', Date.now())

Promise.allSettled([getA(), getB(), getC()])
  .then((results) => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Promise returns fulfilled ${result.value}`)
      } else {
        console.log(`Promise returns rejected ${result.reason}`)
      }
    })
  })

//  What to observe
// The allSettled() function, inline the all() function never fails or reject
// I return an array of objects, with the status of each promise
// Great choice for moments when some failures are acceptable
