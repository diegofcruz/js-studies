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
type ProductComplete = Required<Product>
type ProductPreview = Pick<Product, | "id" | "title" | "price">
type ProductWithoutMeta = Omit<Product, "createdAt">
type StockMap = Record<string, number>

const required: ProductComplete = {
  id: "p2",
  title: "Monitor",
  price: 199.9,
  description: "4K display",
  createdAt: new Date(),
}

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



// --- Extra: practical variants (Create, Update, Persisted) ---

// Create payload: client sends product data without server-managed fields.
type CreateProductInput = Omit<Product, "id" | "createdAt">;

// Update payload: patch semantics (send only changed fields), but never id/createdAt.
type UpdateProductInput = Partial<Omit<Product, "id" | "createdAt">>;

// Persisted entity: every field must exist after saving.
type PersistedProduct = Required<Product>;

// Same shape as Product, but demonstrates transforming in steps.
type PersistedProductFromPipeline = Required<Partial<Product>>;

// Same as Product, but description can be null when source data is incomplete.
type ProductNullableDesc = Omit<Product, "description"> & {
  description: string | null;
};

const createInput: CreateProductInput = {
  title: "Headset",
  price: 59.9,
  description: "Wireless headset",
};

const updateInput: UpdateProductInput = {
  price: 49.9,
};

const persisted: PersistedProduct = {
  id: "p4",
  title: "Chair",
  price: 89.9,
  description: "Ergonomic chair",
  createdAt: new Date(),
};

const persistedFromPipeline: PersistedProductFromPipeline = {
  id: "p5",
  title: "Lamp",
  price: 19.9,
  description: "Desk lamp",
  createdAt: new Date(),
};

const productWithNullableDesc: ProductNullableDesc = {
  id: "p6",
  title: "Cable",
  price: 9.9,
  description: null,
  createdAt: new Date(),
};

console.log(createInput);
console.log(updateInput);
console.log(persisted.title);
console.log(persistedFromPipeline.title);
console.log(productWithNullableDesc.description);
