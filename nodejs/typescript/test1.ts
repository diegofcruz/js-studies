// ## Exercise 1 — Literal Types e Type Widening

// **Goal:** Understand `const` e `let` create different types.
// **Concepts covered:** `literal types`, `type widening`, `as const`, `type inference`

const greeting = "hello" // infer type: "hello" - just this value
let message = "hello" // infer type: string - whatever string

function log(direction: "up" | "down") {
  console.log("Direction:", direction)
}

const constDir = "up" // TS knows this never will change
log(constDir) // It works, because the constante up is acceptable for up or down

let letDir = "up" // TS assume it can change for any other string
// log(letDir) // error because the acceptable types are just "up" | "down", not any string

let annotatedDir: "up" | "down" = "up" // set an annotate for the types
log(annotatedDir)

let frozenDir = "up" as const // froze the type on the literal value
log(frozenDir)

const config = {
  theme: "dark",
  fontSize: 14
} as const

// config.theme: "dark"  // with as const, each property value became the literal type
// config.fontSize: 14

const mutableConfig = {
  theme: "dark",
  fontSize: 14,
};
// mutableConfig.theme: string // the properties can change

console.log("greeting:", greeting, "| message:", message);
console.log("config.theme:", config.theme);
console.log("mutableConfig.theme:", mutableConfig.theme);


// What to observe: config.theme and mutableConfig.theme show the same value in runtime, the diference is what the TS knows about the type of each one
// Complexity: All the actions are O(1), the checking by TS or the runtime
// Key insight: TS widens the type to the generic primitive for let variables. For const variables TS keeps the type as the literal value
