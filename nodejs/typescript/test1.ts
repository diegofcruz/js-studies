const explicitName: string = "Diego";
const explicitAge: number = 31;
const explicitActive: boolean = true;

const inferredCity = "Lisbon"; // inferred as string
const inferredScore = 97; // inferred as number

function describeUser(name: string, age: number, active: boolean): string {
  return `${name} is ${age} years old and is ${active ? "active" : "inactive"}.`;
}

// Uncomment to see a TypeScript error:
// const brokenAge: number = "31";

console.log({
  explicitName,
  explicitAge,
  explicitActive,
  inferredCity,
  inferredScore,
});
console.log(describeUser(explicitName, explicitAge, explicitActive));

// What to observe
// TS works as a static analysis layer over javascript
