// ## Exercise 5 - Discriminated Unions and Exhaustiveness

// **Goal:** Represent state machines safely and force handling of every state.

// **Concepts covered:** `discriminated unions`, `switch narrowing`, `never`, `exhaustive checks`

// **Steps:**

// 1. Create a union `RequestState` with tags: `idle`, `loading`, `success`, `error`.
// 2. Write `renderState` with a `switch` on `state.status`.
// 3. Add `assertNever` for exhaustiveness checking.
// 4. Test all states.

type RequestState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: string[] }
  | { status: "error"; message: string } // discriminator union, with the status field working as the discriminator

function assertNever(value: never): never {
  throw new Error(`Unhandled state: ${JSON.stringify(value)}`)
}

// Version 1: no exhaustiveness check.
// If a new state appears in the union, this function can silently return fallback text.
function renderStateWithoutExhaustive(state: RequestState): string {
  switch (state.status) {
    case "idle":
      return "Nothing started"
    case "loading":
      return "Loading..."
    case "success":
      return `Loaded ${state.data.length} items.`
    default:
      return "Unknown state"
  }
}

// Version 2: with exhaustiveness check.
// The default branch only accepts `never`, so missing a case becomes a compile-time error.
function renderStateWithExhaustive(state: RequestState): string {
  switch (state.status) {
    case "idle":
      return "Nothing started"
    case "loading":
      return "Loading..."
    case "success":
      return `Loaded ${state.data.length} items.`
    case "error":
      return `Failed ${state.message}`
    default:
      return assertNever(state)
  }
}

const states: RequestState[] = [
  { status: "idle" },
  { status: "loading" },
  { status: "success", data: ["A", "B"] },
  { status: "error", message: "Network down" }
]

for (const state of states) {
  console.log("without exhaustive:", renderStateWithoutExhaustive(state))
  console.log("with exhaustive:   ", renderStateWithExhaustive(state))
}

// Playground to see the `never` protection:
type RequestStateV2 = RequestState | { status: "cancelled" }

// Uncomment this function to see compile-time safety from `never`:

// function renderStateWithExhaustiveV2(state: RequestStateV2): string {
//   switch (state.status) {
//     case "idle":
//       return "Nothing started"
//     case "loading":
//       return "Loading..."
//     case "success":
//       return `Loaded ${state.data.length} items.`
//     case "error":
//       return `Failed ${state.message}`
//     default:
//       // Error here: `state` is not `never` because "cancelled" was not handled.
//       return assertNever(state)
//   }
// }

// What to observe
// We can use discriminated unions to keep our types with a more strong typing
// never is something that should not exist
