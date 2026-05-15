// ## Exercise 4 - Unions, Narrowing, and Type Guards

// **Goal:** Learn how TypeScript narrows union types through control flow.

// **Concepts covered:** `union types`, `narrowing`, `typeof`, `in`, `custom type guards`

// **Steps:**

// 1. Create `type ApiResponse = string | { message: string; code: number }`.
// 2. Write `normalizeResponse` that narrows and always returns a string.
// 3. Create `Cat` and `Dog` types and a custom type guard `isDog`.
// 4. Write `printAnimalSound` using the guard.

type ApiResponse = string | { message: string; code: number }

function normalizeResponse(response: ApiResponse): string {
  if (typeof response === 'string') {
    return response
  }

  return `Error ${response.code}: ${response.message}`
}

type Cat = { kind: "cat"; meow: () => string }
type Dog = { kind: "dog"; bark: () => string }
type Animal = Cat | Dog

function isDog(animal: Animal): animal is Dog {
  return animal.kind === "dog"
}

function printAnimalSound(animal: Animal): void {
  if (isDog(animal)) {
    console.log(animal.bark());
    return;
  }

  console.log(animal.meow());
}

console.log(normalizeResponse("ok"));
console.log(normalizeResponse({ message: "Not found", code: 404 }));

printAnimalSound({ kind: "cat", meow: () => "meow" });
printAnimalSound({ kind: "dog", bark: () => "woof" });



// **What to observe:** As conditions refine runtime checks, TypeScript refines static types in each branch.

// **Key insight:** Narrowing is the bridge between runtime checks and compile-time safety.
