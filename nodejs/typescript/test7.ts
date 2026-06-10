// ## Exercise 7 - Generic Data Structures and Classes

// **Goal:** Apply generics to classes and build reusable, strongly typed containers.

// **Concepts covered:** `generic classes`, `encapsulation`, `type-safe collections`

// **Steps:**

// 1. Create `class Queue<T>` with private storage.
// 2. Add methods `enqueue`, `dequeue`, `peek`, `size`.
// 3. Create one `Queue<number>` and one `Queue<string>`.
// 4. Attempt to push wrong types and observe compiler errors.

class Queue<T> {
  private items: T[] = []

  enqueue(item: T): void {
    this.items.push(item)
  }

  dequeue(): T | undefined {
    return this.items.shift()
  }

  peek(): T | undefined {
    return this.items[0]
  }

  size(): number {
    return this.items.length
  }
}

const numberQueue = new Queue<number>()

numberQueue.enqueue(10)
numberQueue.enqueue(20)
console.log(numberQueue.peek())
console.log(numberQueue.dequeue())
console.log(numberQueue.size())

const stringQueue = new Queue<string>();
stringQueue.enqueue("first");
stringQueue.enqueue("second");
console.log(stringQueue.peek());

// stringQueue.enqueue(123);
console.log(stringQueue.size());

// What to observe
// The same runtime class, enforces diferente compile time contracts based on the type argument
// When we use generic class, we have a template for type-safe architecture components
