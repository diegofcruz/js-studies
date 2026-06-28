// ## Exercise 1 — Literal Types e Type Widening

// **Goal:** Entender que `const` e `let` produzem tipos diferentes para o mesmo valor — e por que isso muda tudo que vem depois.

// **Concepts covered:** `literal types`, `type widening`, `as const`, `type inference`

// **Por que isso importa antes de começar:**
// Em JavaScript, `const x = "up"` e `let x = "up"` se comportam diferente quanto a reatribuição. TypeScript vai além: eles também têm **tipos diferentes**. `const` produz o tipo literal `"up"`. `let` produz o tipo genérico `string`. Essa diferença é o que torna discriminated unions (exercício 6) possíveis — sem literal types, TypeScript não consegue distinguir estados.

// **Steps:**

// 1. Declare a mesma string com `const` e com `let`. Passe o mouse sobre cada uma no editor e observe os tipos inferidos.
// 2. Escreva uma função que aceita apenas `"up" | "down"` — não `string` qualquer.
// 3. Tente passar a variável `let` para a função e observe o erro.
// 4. Corrija usando anotação de tipo explícita e, depois, usando `as const`.
// 5. Aplique `as const` a um objeto inteiro e compare os tipos com e sem ele.

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
