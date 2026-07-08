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
// type Product = { name: string }

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

