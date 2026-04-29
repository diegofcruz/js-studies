// ## Exercise 9 — `async/await` vs Promise chains

// **Goal:** Rewrite a promise chain using `async/await` to see they are equivalent.

// **Steps:**

// 1. Take the order chain from Exercise 2.
// 2. Rewrite the consumer using `async/await` inside an `async` function.
// 3. Use `try/catch` for error handling.
// 4. Observe that the behavior is identical.

import { crash, getOrderDetails, getOrderId, getShipping } from "./utils.ts";

async function initTest() {

  try {
    const orderId = await getOrderId()
    console.log(`Order id ${orderId}`)

    const orderDetails = await getOrderDetails(orderId)
    console.log(`Order details ${orderDetails}`)

    const shipping = await getShipping(orderDetails.product)
    console.log(shipping)

    crash()

  } catch (err) {
    if (err instanceof Error) {
      console.error("Error:", (err as Error).message);
    } else {
      console.error("Error:", err);
    }
  }
}

initTest()

// What to observe
// await pauses the execution inside the async function, but node keep running normally
// async / await is just a sugar syntax, other approach to have the same result as then() function
