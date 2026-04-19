// ## Exercise 3 — `.finally()`

// **Goal:** Understand how `.finally()` runs regardless of resolve or reject.

// **Steps:**

// 1. Reuse `fetchUser` from Exercise 1.
// 2. Add `.finally()` after `.catch()`.
// 3. Inside `.finally()`, log a "cleanup done" message.
// 4. Call `fetchUser(1)` (success path) and `fetchUser(-1)` (error path).
// 5. Observe that `.finally()` runs in both cases.

function fetchUser(id: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve('User name')
            } else {
                reject(new Error('Invalid ID'))
            }
        }, 500)
    })
}


fetchUser(-1)
    .then((user) => {
        console.log('User fetched:', user)
    })
    .catch((error) => {
        console.error('Error fetching user:', error.message)
    })
    .finally(() => {
      console.log('Cleanup done')
    })

fetchUser(1)
    .then((user) => {
        console.log('User fetched:', user)
    })
    .catch((error) => {
        console.error('Error fetching user:', error.message)
    })
    .finally(() => {
      console.log('Cleanup done')
    })


// What to observe
// Unlike the then() function, the finally does not receive any parameter from the chain
// Finally always runs, like a side effect function. We can use it to clean something or finish some connection
