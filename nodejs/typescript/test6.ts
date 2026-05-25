// ## Exercise 6 - Generics Fundamentals

// **Goal:** Reuse type-safe logic across many types instead of duplicating code.

// **Concepts covered:** `generic functions`, `generic constraints`, `keyof`, `type parameters`

// **Steps:**

// 1. Create generic `identity<T>`.
// 2. Create generic `firstItem<T>` for arrays.
// 3. Create constrained generic `getProp<T, K extends keyof T>`.
// 4. Test with different object shapes.

function identity<T>(value: T): T {
    return value
}

function firstItem<T>(items: T[]): T | undefined {
  return items[0]
}

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const user = {
  id: 1,
  name: "Ana",
  active: true
}

console.log(identity<string>("Hello"));
console.log(identity(123));
console.log(firstItem(["10", 20, ""]));
console.log(firstItem(["x", "y"]));
console.log(getProp(user, "name"));
console.log(getProp(user, "active"));

// What to observe
// Generics preserve exact input-output relationships, unlike loose `unknown` or `any` patterns
// Generic can be any name, but the conventional is T, K
