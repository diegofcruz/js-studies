// ## Exercise 3

// **Concepts covered:** `structural typing`, `excess property checking`, `assignability`, `duck typing`

interface Point {
  x: number;
  y: number;
}

function plot(p: Point): void {
  console.log(`Point (${p.x}, ${p.y})`);
}

// By a variable, the z is ignored
const obj = { x: 10, y: 20, z: 30 }
plot(obj)

// With literal, excess property check is executed
// plot({ x: 10, y: 20, z: 30 }); // ERR: 'z' doesn't exist

interface CoordScreen {
  x: number;
  y: number;
}

const point: Point = { x: 1, y: 2 }
const screen: CoordScreen = point // TS checks just the shape
plot(screen)

// Above we have different names, but the same structure, so we can do it

console.log(`Object with z property: ${obj.z}`) // the z property still inside in the object

// What to observe
// The both types have the same shape, so TS accepts them

// Key insight
// TS uses structural types, a value is compatible with the required properties. Excess property check in literals is just a special protection against typos
