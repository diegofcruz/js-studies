// Infer vs Generic - side by side examples
// Run with:
// npx ts-node nodejs/typescript/test9-infer-vs-generic.ts

/*
Mental model:
- Generic (T): you pass/carry a type.
- infer (U/R/...): TypeScript extracts a type from a structure.
*/

// ------------------------------------------------------------
// 1) ARRAY
// ------------------------------------------------------------

// Generic only: just carries T, no extraction.
type KeepGeneric<T> = T

// infer: extracts the item type from an array type.
type ItemOf<T> = T extends (infer U)[] ? U : never

type Arr1 = KeepGeneric<string[]>   // string[]
type Arr2 = ItemOf<string[]>        // string

const genericArrayValue: Arr1 = ["a", "b"]
const inferredItemValue: Arr2 = "a"

console.log("[Array] generic keeps full type:", genericArrayValue)
console.log("[Array] infer extracts item type:", inferredItemValue)

// ------------------------------------------------------------
// 2) PROMISE
// ------------------------------------------------------------

// Generic only: still the full Promise<T> if T is Promise<...>.
type KeepPromiseType<T> = T

// infer: unwraps one Promise layer.
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T

type P1 = KeepPromiseType<Promise<number>> // Promise<number>
type P2 = UnwrapPromise<Promise<number>>   // number

const genericPromiseValue: P1 = Promise.resolve(42)
const inferredPromiseValue: P2 = 42

console.log("[Promise] generic keeps Promise:", genericPromiseValue)
console.log("[Promise] infer unwraps Promise value type:", inferredPromiseValue)

// ------------------------------------------------------------
// 3) FUNCTION
// ------------------------------------------------------------

type Service = (id: string, retry: number) => Promise<{ ok: boolean }>

// Generic only: keeps whole function type.
type KeepFunction<T> = T

// infer: extracts return type from function.
type ReturnOf<T> = T extends (...args: any[]) => infer R ? R : never

// infer: extracts parameter tuple from function.
type ParamsOf<T> = T extends (...args: infer P) => any ? P : never

type F1 = KeepFunction<Service>            // (id: string, retry: number) => Promise<{ ok: boolean }>
type F2 = ReturnOf<Service>                // Promise<{ ok: boolean }>
type F3 = ParamsOf<Service>                // [string, number]
type F4 = UnwrapPromise<ReturnOf<Service>> // { ok: boolean }

const fn: F1 = async (id, retry) => ({ ok: id.length > 0 && retry >= 0 })
const params: F3 = ["abc", 2]

fn(...params).then((result: F4) => {
  console.log("[Function] params extracted via infer:", params)
  console.log("[Function] return extracted + unwrapped via infer:", result)
})

/*
Practical difference summary:
- Generic alone is great to pass a type through APIs.
- infer is needed when you must derive a sub-type from a complex type.
- Utility types like ReturnType and Parameters are built on this idea.
*/
