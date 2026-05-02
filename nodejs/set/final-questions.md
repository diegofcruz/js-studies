# Set & WeakSet — Final Questions

Use these questions to test your understanding after completing all exercises. Answer each one without looking at the exercises first, then verify your answer by writing runnable code.

---

## Conceptual Questions

**1.** What equality algorithm does `Set` use to determine uniqueness? How does it differ from `===` for the value `NaN`?

**2.** You add the number `0` and the value `-0` to the same `Set`. How many entries does the `Set` have? Why?

**3.** You create a `Set<object>` and add the same object literal `{ id: 1 }` twice — each as a separate `const`. How many entries does the `Set` have? Why?

**4.** What is the difference between `Set.prototype.delete()` and `Set.prototype.clear()`? What does `delete()` return?

**5.** In what order does a `Set` iterate its values? Is the iteration order guaranteed by the spec?

**6.** What are the three constraints that `WeakSet` has compared to `Set`?

- What types can be stored in a `WeakSet`?
- What iteration methods does it expose?
- What happens to an entry when the stored object has no other references?

**7.** Why can't `WeakSet` be enumerable or iterable? What would break if it were?

**8.** What is the time complexity of `.has()` on a `Set` vs `.includes()` on an `Array`? When does this matter in practice?

---

## Code Prediction Questions

**9.** What does the `Set` contain after this code runs?

```ts
const s = new Set([1, 2, 3, 2, 1, NaN, NaN]);
console.log(s.size);
```

**10.** What is logged?

```ts
const s = new Set<string>(["a", "b", "c"]);
s.delete("b");
console.log([...s]);
```

**11.** What is the output?

```ts
const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];

const intersection = new Set(a.filter((x) => new Set(b).has(x)));
console.log([...intersection]);
```

**12.** Will this throw a TypeScript (or runtime) error? Why?

```ts
const ws = new WeakSet();
ws.add(42);
```

**13.** What is logged? Does mutating an object already in a `Set` change the `Set`'s behaviour?

```ts
const obj = { name: "Alice" };
const s = new Set([obj]);

obj.name = "Bob";
console.log(s.has(obj));
console.log([...s][0].name);
```

---

## Implementation Challenges

**14.** Write a function `unique<T>(arr: T[]): T[]` that removes duplicates from an array using a `Set`. It must preserve the original order of first appearances.

**15.** Write a function `union<T>(a: Set<T>, b: Set<T>): Set<T>` that returns a new `Set` containing all elements from both sets.

**16.** Write a function `intersection<T>(a: Set<T>, b: Set<T>): Set<T>` that returns only elements present in both sets.

**17.** Write a function `difference<T>(a: Set<T>, b: Set<T>): Set<T>` that returns elements in `a` that are **not** in `b`.

**18.** Implement a `processOnce` utility using `WeakSet` that ensures a given object is only processed one time. Calling it on the same object reference a second time should be a no-op.

```ts
function processOnce(obj: object, handler: (o: object) => void): void {
  // your implementation
}
```

**19.** You have an array of user objects and want to find users who appear in both `activeUsers` and `premiumUsers` arrays (matched by `id`). Implement this efficiently using `Set`.

**20.** Explain when you would reach for a `Set` over an `Array`, and when an `Array` is still the better choice. Give a concrete example for each.
