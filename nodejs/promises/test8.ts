// ## Exercise 8 — Error propagation in chains

// **Goal:** Understand how errors bubble through a chain and where to catch them.

// **Steps:**

// 1. Build a chain of 4 `.then()` calls.
// 2. Throw an error inside the second `.then()`.
// 3. Place `.catch()` at the end.
// 4. Then move the `.catch()` between step 2 and step 3 and observe the difference.

Promise.resolve(1)
  .then((result: number) => {
    console.log(`Step 1 ${result}`)
    return result+1
  }).then((result) => {
    console.log(`Step 2 ${result}`)
    throw new Error('Catch done')
    return result+1
  }).then((result) => {
    console.log(`Step 3 ${result}`)
    return result+1
  }).then((result) => {
    console.log(`Step 4 ${result}`)
    return result+1
  }).catch((err) => {
    console.log(`Errors `, err)
    return 0
  })

Promise.resolve(1)
  .then((result: number) => {
    console.log(`Step 1 ${result}`)
    return result+1
  }).then((result) => {
    console.log(`Step 2 ${result}`)
    throw new Error('Catch done')
    return result+1
  }).then((result) => {
    console.log(`Step 3 ${result}`)
    return result+1
  }).catch((err) => {
    console.log(`Errors `, err)
    return 0
  }).then((result) => {
    console.log(`Step 4 ${result}`)
    return result+1
  })

// What to observe
// the catch() function, catch de errors, but can return something too
// We can deal with the error and keep the chain executing
