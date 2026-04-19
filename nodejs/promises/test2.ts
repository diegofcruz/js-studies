// ## Exercise 2 — Promise chaining with `.then()`

// **Goal:** Understand how `.then()` returns a new Promise and how values flow down the chain.

// **Steps:**

// 1. Create a function `getOrderId` that resolves with a number after 300ms.
// 2. Create a function `getOrderDetails(orderId: number)` that resolves with an object `{ id, product }` after 300ms.
// 3. Create a function `getShipping(product: string)` that resolves with a shipping estimate string after 300ms.
// 4. Chain all three using `.then()`. Each `.then()` receives the result of the previous one.
// 5. Add a single `.catch()` at the end of the chain.


function getOrderId(): Promise<number> {
	return new Promise((resolve, reject) => setTimeout(() => resolve(40), 300))
}

function getOrderDetails(orderId: number): Promise<{ id: number, product: string }> {
	return new Promise((resolve, reject) => setTimeout(() => resolve({ id: 40, product: 'Enlatados' }), 300))
}

function getShipping(product: string): Promise<string> {
	return new Promise((resolve, reject) => setTimeout(() => resolve(`${product} will be shipped in two days.`), 300))
}

const crash = (): Error => { throw new Error("Do not") }

getOrderId()
	.then((orderId) => {
		console.log('Order id', orderId)
		return getOrderDetails(orderId)
	})
	.then((order) => {
		console.log('Order details', order)
		return getShipping(order.product)
	})
	.then((shipping) => {
		console.log(shipping)
		return crash()
	})
	.then(() => {
		console.log(`We shouldn't see it`)
	})
	.catch((err) => console.log('Some error ', err))

// What to observe
// We have a chain of the then(), one starts when the other finish.
// The outputs of the previous then(), is the input in the next.
// When something crash, they jump to the crash event