// ## Exercise 4 — interface vs type: Practical diferences

// INTERFACE: Two declarations with the same name, we have a combination
interface User {
  id: string;
  name: string;
}

interface User {
  email?: string
}

const user: User = { id: "1", name: "Diego", email: "d@d.com" };
console.log(user);


// TYPE: Two declarations with the same name, we have an error
type Product = { id: string }
// type Product = { name: string } // on types, we don't have combination. Two types with the same name, we have duplicate declarations

type Direction = "up" | "down" | "left" | "right" // on type, we have the union
type Part<T> = [T, T] // tuple
type Tree<T> = { value: T; child: Tree<T>[] } // recursion

// EXTENDS vs & - similar but different
interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark(): void
}
// inheritance: Dog have name and bark

type AnimalType = { name: string };
type DogType = AnimalType & { bark(): void }
// insertion: the same effect

const dog: Dog = { name: "Rex", bark: () => console.log('Au!') };
const dogT: DogType = dog // the both approach have the same shape

dog.bark()

type A = { x: string }
type B = { x: number }
type AB = A & B // x became never - we'll have an error when try to use

// interface B2 extends A { // Error - we have conflict here
//   x: number
// }

// const typeAB: AB = { x: 25 } // We can't do it, because the x became never

// What to observe
// interface and type have different uses and different behaviors
// when we define two types with the same properties and different types and try make a new type, with intersection, TS allows it, but change the property to never
// Key insight
// We need to use interface when the type can be extendable ofr other modules
// We need to use type when we want to make conditional types, unions, or other thing that interface doesn't support


