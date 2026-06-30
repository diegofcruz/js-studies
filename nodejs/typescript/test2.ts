// ## Exercise 2 — Functions: Signatures, Overloads, API contracts

// **Goal:** Understand overloads existis to improve who calls the function.
// **Concepts covered:** `function overloads`, `optional parameters`, `default parameters`, `return type precision`

function formatPrice(value: number, currency: string = 'USD'): string {
  return `${currency} ${value.toFixed(2)}`
}

console.log(formatPrice(15))
console.log(formatPrice(15, "EUR"))


// Without overload
function parseRaw(value: string | number): string[] | number[] {
  if (typeof value === "string") {
    return value.split(',').map((s) => s.trim())
  }

  return Array.from({ length: value }, ( _, i) => i + 1);
}

const rawResult = parseRaw("a,b")
// rawResult[0].toUpperCase() // This value can be number, TS doesn't know

function parse(value: string): string[]
function parse(value: number): number[]
function parse(value: string | number): string[] | number[] {
  if (typeof value === "string") {
    return value.split(',').map((s) => s.trim())
  }

  return Array.from({ length: value }, ( _, i) => i + 1);
}

const strResult = parse("a,b,c") // With the overload, we have the result with precision
const numResult = parse(3)

strResult[0].toUpperCase() // Without errors, TS knows the type with the overload
numResult[0].toFixed(2) // Without errors, TS knows the type with the overload

console.log("raw:", rawResult);
console.log("str:", strResult);
console.log("num:", numResult);

// What to observe: The 3 last functions have the same data in runtime. The diference is what TS allows to do with them.

// Complexity
// Runtime parse("a,b,c"): O(N) - N = length of the string — `split` check the entire string
// Runtime parse(3): O(N) - N = 3 — Array.from create N elements
// Runtime formatPrice: O(1) — arithmetics operations and fixed length concatenation

// Key insight: Overloads are the contract with who calls the function, it are not with the implementation.
