// ## Exercise 3 - Object Types, Interfaces, and Type Aliases

// **Goal:** Understand how to model object shapes and when to use `interface` vs `type`.

// **Concepts covered:** `object types`, `interface`, `type alias`, `readonly`, `optional properties`

// **Steps:**

// 1. Create an `interface User` with `readonly id`, `name`, and optional `email`.
// 2. Create a `type Role` union and combine it into a `type Account`.
// 3. Write `printAccount` that accepts `Account`.
// 4. Create two valid accounts (with and without email).
// 5. Try mutating `id` and observe the compile-time error.

interface User {
  readonly id: string;
  name: string;
  email?: string;
}

type Role = "admin" | "editor" | "viewer"

type Account = User & {
  role: Role;
  createdAt: Date;
}

function printAccount(account: Account): void {
  console.log(`${account.name} (${account.role}) - created ${account.createdAt.toISOString()}`)

  if (account.email) {
    console.log(`Email: ${account.email}`)
  }
}

const accountA: Account = {
  id: "u1",
  name: "Lin",
  role: "admin",
  createdAt: new Date(),
};

const accountB: Account = {
  id: "u2",
  name: "Rafa",
  email: "rafa@example.com",
  role: "viewer",
  createdAt: new Date(),
};

// Uncomment to see a TS error
// accountA.id = "u3"

printAccount(accountA)
printAccount(accountB)

// What to observe
// readonly or optional express real constraints
// types we can use primitive types, make union of values and make a intersection with &
// interfaces we can use to complete entities
