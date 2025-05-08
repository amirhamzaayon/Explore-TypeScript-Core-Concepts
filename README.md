# TypeScript Basics

## 📘 What Is Type Inference in TypeScript — and Why It’s Helpful

In TypeScript, **type inference** is the compiler’s built-in ability to automatically determine the type of a variable or expression without you explicitly stating it. This is one of the features that makes TypeScript powerful yet ergonomic.

### 🔍 Example:

```ts
let username = "Amir"; // inferred as string
let isLoggedIn = true; // inferred as boolean
```

Here, TypeScript looks at the assigned value and infers the type for you. You didn’t have to write `: string` or `: boolean` — TypeScript did the work.

### ✅ Why It’s Helpful

- **Reduces boilerplate**: You don’t need to repeat yourself by declaring types that are obvious from the context.
- **Enhances readability**: Your code stays clean and concise.
- **Improves safety**: TypeScript still enforces types behind the scenes, so you catch mistakes at compile time.
- **Better editor support**: Inferred types enable intelligent code completion and inline documentation in modern editors like VSCode.

Type inference is particularly useful in local variables, return values, and destructured parameters. However, for APIs or complex logic, adding explicit types still makes your code easier to maintain.

---

## 📘 Interfaces vs. Types in TypeScript — What’s the Difference?

In TypeScript, both `interface` and `type` are used to describe the shape of data — such as objects, function signatures, or class contracts. However, they’re not exactly the same.

### 🔄 Key Differences

#### 1. **Declaration Merging**

- `interface` can be declared multiple times and will be merged.

  ```ts
  interface User {
    name: string;
  }

  interface User {
    age: number;
  }
  // User now has both `name` and `age`
  ```

- `type` cannot be merged. You must define it once or use intersections:

  ```ts
  type User = { name: string };
  // Can't redefine `User` again
  ```

#### 2. **Extending**

- Both can be extended, but the syntax differs:

  ```ts
  interface Admin extends User {
    role: string;
  }

  type Admin = User & { role: string };
  ```

#### 3. **Flexibility**

- `type` is more flexible — it can represent unions, intersections, tuples, and primitives.

  ```ts
  type ID = string | number;
  ```

- `interface` is designed strictly for object-like structures and class contracts.

### 🧠 When to Use What?

- Use `interface` when defining object shapes or working with classes.
- Use `type` when you need unions, intersections, or more advanced compositions.

In short: **`interface` is great for structure**, while **`type` is better for flexibility**. You can even mix them when needed — TypeScript allows it!
