// ## Exercise 8 - Utility Types in Real Scenarios

// **Goal:** Use built-in utility types to transform models safely.

// **Concepts covered:** `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`

// **Steps:**

// 1. Create a base `Product` type.
// 2. Create `ProductDraft` with `Partial<Product>`.
// 3. Create `ProductPreview` with `Pick`.
// 4. Create `ProductWithoutMeta` with `Omit`.
// 5. Use `Record` to map product IDs to stock.

type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  createdAt: Date;
}

type ProductDraft = Partial<Product>
type ProductPreview = Pick<Product, | "id" | "title" | "price">
type ProductWithoutMeta = Omit<Product, "createdAt">
type StockMap = Record<string, number>

const draft: ProductDraft = { title: "Keyboard" }
const preview: ProductPreview = { id: "p1", title: "Mouse", price: 29.9 }
const fullProduct: Product = {
  id: "p2",
  title: "Monitor",
  price: 199.9,
  description: "4K display",
  createdAt: new Date(),
};

const productNoMeta: ProductWithoutMeta = {
  id: "p3",
  title: "Desk",
  price: 99.9,
  description: "Wood desk",
};
const stock: StockMap = {
  p1: 5,
  p2: 2,
  p3: 0,
};

console.log(draft);
console.log(preview);
console.log(fullProduct.title);
console.log(productNoMeta);
console.log(stock);



// **What to observe:** Utility types let you derive consistent variants of models without copying and drifting definitions.

// **Key insight:** Derive types from source-of-truth models instead of redefining shape manually.
