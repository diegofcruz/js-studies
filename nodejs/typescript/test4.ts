// ## Exercise 4 - Unions, Narrowing, and Type Guards

// **Goal:** Learn how TypeScript narrows union types through control flow.

// **Concepts covered:** `union types`, `narrowing`, `typeof`, `in`, `custom type guards`

// **Steps:**

// 1. Create `type ApiResponse = string | { message: string; code: number }`.
// 2. Write `normalizeResponse` that narrows and always returns a string.
// 3. Create `Cat` and `Dog` types and a custom type guard `isDog`.
// 4. Write `printAnimalSound` using the guard.

type ApiResponse = string | { message: string; code: number } // a union type, with a primitive and a specific object

// Function to normalize the union type and return a string
function normalizeResponse(response: ApiResponse): string {
  if (typeof response === 'string') { // narrowing happens, we check what is the type of the union type
    return response
  }

  return `Error ${response.code}: ${response.message}` // if not is a string, the other option is the object

  // other approach to use narrowing
  // if ("message" in response) {
  //   return `Error ${response.code}: ${response.message}`
  // }

  // return response
}

type Cat = { kind: "cat"; meow: () => string }
type Dog = { kind: "dog"; bark: () => string }
type Animal = Cat | Dog // other union type

function isDog(animal: Animal): animal is Dog { // custom type guard applied, when the function returns true, the type is Dog
  return animal.kind === "dog"
}

function printAnimalSound(animal: Animal): void {
  // we can use our custom type guard function to verify the type
  // if (isDog(animal)) {
  //   console.log(animal.bark());
  //   return;
  // }

  // or use in, to check if there is a item "bark" inside the object
  if ("bark" in animal) {
    console.log(animal.bark());
    return;
  }

  console.log(animal.meow());
}

console.log(normalizeResponse("ok"));
console.log(normalizeResponse({ message: "Not found", code: 404 }));

printAnimalSound({ kind: "cat", meow: () => "meow" });
printAnimalSound({ kind: "dog", bark: () => "woof" });

// What to observe
// Using union type, we can set more then one possible for a type
// with the custom type guard, we say to TS when the function returns true, we consider the item is Dog
// The concept of Narrowing we apply using the "in" or using our function "isDog" - we make a runtime check more the security in compile time
// The narrowing is the bridge between runtime checks and compile-time safety
