# Promises — Final Questions

Use these questions to test your understanding after completing all exercises. Answer each one without looking at the exercises first, then verify your answer by writing runnable code.

---

## Conceptual Questions

**1.** What are the three possible states of a Promise? Can a Promise transition from `fulfilled` back to `pending`?

**2.** What is the difference between these two `.catch()` placements? Does the second `.catch()` catch errors thrown inside `onSuccess`?

```ts
promise.then(onSuccess).catch(onError);
promise.then(onSuccess, onError);
```

**3.** If you call `resolve()` and then `reject()` inside the same Promise constructor, what happens? Why?

**4.** What does `.finally()` receive as its argument? Can it change the resolved value or swallow a rejection?

**5.** Explain in your own words the difference between `Promise.all()` and `Promise.allSettled()`. When would you choose one over the other?

**6.** `Promise.race()` and `Promise.any()` both react to the first settled Promise. What is the key distinction between them?

**7.** What happens to the other Promises passed to `Promise.race()` after the first one settles?

**8.** When an error is thrown inside a `.then()` callback, what happens to the Promise chain? Where does the error surface?

**9.** Consider this code. Does the `await` on line 2 actually run `a` and `b` concurrently or sequentially?

```ts
const a = await fetchA();
const b = await fetchB();
```

How would you rewrite it to run them concurrently?

**10.** What is the "forgotten `return`" mistake in Promise chains? What symptom does it produce at runtime?

---

## Code Prediction Questions

**11.** What is the output order of the following snippet? Explain why.

```ts
console.log("A");

Promise.resolve().then(() => console.log("B"));

console.log("C");
```

**12.** What does `result` contain after this resolves?

```ts
const result = await Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]);
```

**13.** What does `results` contain after this settles?

```ts
const results = await Promise.allSettled([
  Promise.resolve("ok"),
  Promise.reject(new Error("fail")),
]);
```

**14.** What is logged? Does the chain reach the second `.then()`?

```ts
Promise.resolve("start")
  .then((val) => {
    throw new Error("boom");
    return val + "-chained";
  })
  .then((val) => console.log("then:", val))
  .catch((err) => console.log("catch:", err.message));
```

**15.** What is the difference in behaviour between these two `async` functions when `riskyOp()` throws?

```ts
// A
async function a() {
  return riskyOp();
}

// B
async function b() {
  return await riskyOp();
}
```

---

## Implementation Challenges

**16.** Implement a `timeout(ms: number)` utility that returns a Promise which rejects after `ms` milliseconds with the message `"Timed out"`.

**17.** Implement `retry<T>(fn: () => Promise<T>, times: number): Promise<T>` — a function that retries a failing Promise-returning function up to `times` attempts before propagating the error.

**18.** Implement `sequential<T>(tasks: Array<() => Promise<T>>): Promise<T[]>` — runs each task one after the other (not concurrently) and returns all results in order.

**19.** Given a list of user IDs, fetch all of them concurrently with `Promise.all()`, but if any individual fetch fails, continue and record the error instead of short-circuiting the whole batch. Return an array where each element is either the user data or the error.

**20.** Explain the difference between these two error-handling patterns and when each is appropriate:

```ts
// Pattern A
async function fetchData() {
  try {
    const data = await getData();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

// Pattern B
async function fetchData() {
  const data = await getData().catch((err) => {
    console.error(err);
    return null;
  });
  return data;
}
```
