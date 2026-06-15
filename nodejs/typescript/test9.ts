// ## Exercise 9 - Conditional Types and Infer

// **Goal:** Understand type-level logic and extraction from existing function types.

// **Concepts covered:** `conditional types`, `infer`, `ReturnType`, `Parameters`

// **Steps:**

// 1. Create type `ElementType<T>` that extracts array element type.
// 2. Create type `AsyncValue<T>` that extracts resolved type from `Promise<T>`.
// 3. Use `ReturnType` and `Parameters` on a sample function.
// 4. Log runtime values while validating compile-time assignments.

type ElementType<T> = T extends (infer U)[] ? U : never
type AsyncValue<T> = T extends Promise<infer U> ? U : T

type A = ElementType<string[]>
type B = ElementType<number[]>
type C = AsyncValue<Promise<boolean>>

type Handler = (id: string, retries: number) => Promise<{ ok: boolean }>

type HandlerParams = Parameters<Handler>
type HandlerResult = ReturnType<Handler>
type ResolvedHandlerResult = AsyncValue<HandlerResult>

const params: HandlerParams = ["abc", 3]
const resolved: ResolvedHandlerResult = { ok: true}

console.log(params)
console.log(resolved)

// **What to observe:** TypeScript can compute new types from existing types, enabling powerful DRY type systems.

// **Key insight:** Advanced type tools let you encode invariants once and propagate them everywhere.
