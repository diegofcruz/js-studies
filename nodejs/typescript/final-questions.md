# TypeScript — Final Questions

Use these questions to test your understanding after completing all exercises. Answer each one without looking at the exercises first, then verify your answer by writing runnable code.

---

## Conceptual Questions

**1.** What is the difference between a `type` alias and an `interface`? Name one thing each can do that the other cannot.

**2.** What does TypeScript's structural type system mean in practice? Will this code compile? Why?

```ts
interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(p.x, p.y);
}

const obj = { x: 10, y: 20, z: 30 };
printPoint(obj);
```

**3.** What is type narrowing? List three different ways to narrow a union type.

**4.** What is a discriminated union? What property makes one work correctly?

**5.** What does the `never` type represent? Give two practical uses for it.

**6.** What is the difference between `unknown` and `any`? When should you use `unknown` instead of `any`?

**7.** What does a generic constraint (`T extends SomeType`) do? How does it differ from using `SomeType` directly as the parameter type?

**8.** Explain `infer` in conditional types. What problem does it solve?

**9.** What is the difference between `Partial<T>`, `Required<T>`, `Readonly<T>`, and `Pick<T, K>`? Give a real-world use case for each.

**10.** What are access modifiers in TypeScript classes? What is the difference between `private` and `#` (native private fields)?

**11.** What does `abstract` mean on a class? What does it mean on a method inside that class?

**12.** What is declaration merging? Give one practical use case for it.

**13.** What does `import type` do differently from a regular `import`? Why does it matter for builds?

**14.** What does the `experimentalDecorators` flag enable? At a high level, what can a class decorator do?

**15.** What does enabling `strict` mode actually turn on? Name at least three sub-flags it activates.

---

## Code Prediction Questions

**16.** Does this compile? If not, what is the error?

```ts
function identity<T>(value: T): T {
  return value;
}

const result: number = identity("hello");
```

**17.** What is the inferred type of `value` inside the `if` block?

```ts
function process(value: string | number) {
  if (typeof value === "string") {
    // what is the type of value here?
    console.log(value.toUpperCase());
  }
}
```

**18.** Does this satisfy the exhaustiveness check? What happens when a new variant is added to the union?

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    default:
      const _exhaustive: never = shape;
      return _exhaustive;
  }
}
```

**19.** What is the type of `name` after this conditional type resolves?

```ts
type ExtractName<T> = T extends { name: infer N } ? N : never;
type User = { name: string; age: number };
type Name = ExtractName<User>;
```

**20.** Will this compile with `strictNullChecks` enabled? If not, how do you fix it?

```ts
function greet(name: string | null): string {
  return "Hello, " + name.toUpperCase();
}
```

---

## Implementation Challenges

**21.** Write a generic function `first<T>(arr: T[]): T | undefined` that returns the first element of an array, or `undefined` if the array is empty. Add a constraint so that calling it with a non-array argument is a compile error.

**22.** Implement a type `DeepReadonly<T>` that recursively marks all properties of an object type as `readonly`.

**23.** Write a function `pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>` that returns a new object containing only the specified keys.

**24.** Create a discriminated union `Result<T>` with two variants — `Success<T>` and `Failure` — and a type guard function `isSuccess<T>(result: Result<T>): result is Success<T>`.

**25.** Implement a class `EventEmitter<Events extends Record<string, unknown>>` that is fully typed: calling `.emit("eventName", payload)` and `.on("eventName", handler)` should only accept event names that exist in `Events`, with the correct payload type inferred automatically.

**26.** Write a decorator `@log` that, when applied to a class method, logs the method name and arguments every time the method is called.

**27.** You have a third-party module `"analytics"` that exports `function track(event: string): void`. Augment its types so that `track` only accepts `"page_view" | "click" | "purchase"` instead of any string, without modifying the library's source.

**28.** You have a large JavaScript codebase to migrate to TypeScript. Describe the step-by-step strategy you would follow, referencing specific `tsconfig` settings and TypeScript features that make the migration gradual and safe.
