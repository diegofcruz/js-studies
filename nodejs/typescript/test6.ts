// ## Exercise 6 - Generics Fundamentals

// **Goal:** Reuse type-safe logic across many types instead of duplicating code.

// **Concepts covered:** `generic functions`, `generic constraints`, `keyof`, `type parameters`

// **Steps:**

// 1. Create generic `identity<T>`.
// 2. Create generic `firstItem<T>` for arrays.
// 3. Create constrained generic `getProp<T, K extends keyof T>`.
// 4. Test with different object shapes.

function identity<T>(value: T): T { // Generic function; T is inferred or explicitly provided.
    return value // Returns exactly the same value with type T.
}

function firstItem<T>(items: T[]): T | undefined { // Generic array helper; may return undefined for empty arrays.
  return items[0] // Accesses and returns the first array element.
}

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] { // K is constrained to valid keys of T.
  return obj[key] // Returns the property value preserving its original type.
}

function getPropAsString<T, K extends keyof T>(obj: T, key: K): string { // Same key-safe access, but normalized to string.
  return String(obj[key]) // Converts the selected property value to string.
}

function getPropAsLabel<T, K extends keyof T>(obj: T, key: K): string { // Produces a human-readable label for a property.
  return `Valor da propriedade ${String(key)}: ${String(obj[key])}` // Interpolates key and value as strings.
}

const user = { // Example object used to test generic property access.
  id: 1, // Numeric field.
  name: "Ana", // String field.
  active: true // Boolean field.
}

console.log(identity<string>("Hello")); // Explicitly sets T = string and logs "Hello".
console.log(identity(123)); // Infers T = number and logs 123.
console.log(firstItem(["10", 20, ""])); // Inferred element type: string | number; logs first item.
console.log(firstItem(["x", "y"])); // Inferred element type: string; logs "x".
console.log(getProp(user, "name")); // Safely reads user.name (string).
console.log(getProp(user, "active")); // Safely reads user.active (boolean).
console.log(getPropAsString(user, "name")); // Reads name and returns it as string.
console.log(getPropAsString(user, "active")); // Reads boolean and converts it to "true"/"false".
console.log(getPropAsLabel(user, "id")); // Reads id and logs a formatted label.

// What to observe
// getProp returns the original property type: string, boolean, number...
// getPropAsString always returns string because it converts the value.
// Generic can be any name, but the conventional is T, K.
