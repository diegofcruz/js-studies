// ## Exercise 2 — Promise chaining with `.then()`

// **Goal:** Understand how `.then()` returns a new Promise and how values flow down the chain.

// **Steps:**

// 1. Create a function `getOrderId` that resolves with a number after 300ms.
// 2. Create a function `getOrderDetails(orderId: number)` that resolves with an object `{ id, product }` after 300ms.
// 3. Create a function `getShipping(product: string)` that resolves with a shipping estimate string after 300ms.
// 4. Chain all three using `.then()`. Each `.then()` receives the result of the previous one.
// 5. Add a single `.catch()` at the end of the chain.


