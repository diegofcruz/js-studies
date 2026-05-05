// ## Exercise 2 - Functions, Optional Parameters, and Overloads

// **Goal:** Model real-world function APIs safely with optional args, defaults, and overload signatures.

// **Concepts covered:** `function types`, `optional parameters`, `default parameters`, `function overloads`

// **Steps:**

// 1. Create a function `formatPrice` with a default currency.
// 2. Create a function `buildName` with an optional last name.
// 3. Implement overloaded `parseInput` for `string` and `number`.
// 4. Use each function with multiple inputs.


function formatPrice(value: number, currency: string = 'USD'): string {
  return `${currency} ${value.toFixed(2)}`
}

function buildName(firstName: string, lastName?: string): string {
  return lastName ? `${firstName} ${lastName}` : firstName;
}

function parseInput(value: string): string[];
function parseInput(value: number): number[];
function parseInput(value: string | number): string[] | number[] {
  if (typeof value === "string") {
    return value.split(",").map((part) => part.trim());
  }

  return Array.from({ length: value }, (_, index) => index + 1);
}

console.log(formatPrice(15));
console.log(formatPrice(15, "EUR"));
console.log(buildName("Ada"));
console.log(buildName("Ada", "Lovelace"));
console.log(parseInput("a, b, c"));
console.log(parseInput(5));

// What to observe
// With overloads, we have precise return types, the implementation still handles a union, but we can define the return
// The runtime behavior, we have the same, but for the dev experience, we have more consistent types
