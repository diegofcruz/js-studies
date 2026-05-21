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
  | { status: "error"; message: string }

  function assertNever(value: never): never {
    throw new Error(`Unhandled state: ${JSON.stringify(value)}`)
  }

function renderState(state: RequestState): string {
  switch (state.status) {
    case "idle":
      return "Nothing started";
    case "loading":
      return "Loading...";
    case "success":
      return `Loaded ${state.data.length} items.`;
    case "error":
      return `Failed ${state.message}`;
    default:
      return assertNever(state)
  }
}

const states: RequestState[] = [
  { status: "idle" },
  { status: "loading" },
  { status: "success", data: ["A", "B"] },
  { status: "error", message: "Network down" },
  // { status: "a" }
]

for (const state of states) {
  console.log(renderState(state))
}

// What to observe
// We can use discriminated unions to keep our types with a more strong typing
// never is something that should not exist
