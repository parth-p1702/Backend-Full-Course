# Semantic Versioning (SemVer) in Node.js

Semantic Versioning (SemVer) is a versioning system used in **Node.js** and **npm** to manage dependencies.  
It follows the format:

```
MAJOR.MINOR.PATCH
```

### 1. MAJOR
- Incremented when there are **breaking changes**.
- Example: `1.0.0` → `2.0.0`

### 2. MINOR
- Incremented when new **features** are added but remain **backward-compatible**.
- Example: `1.1.0` → `1.2.0`

### 3. PATCH
- Incremented for **bug fixes** and small changes.
- Example: `1.0.1` → `1.0.2`

---

## Symbols in Dependency Versions (package.json)

When defining dependencies in `package.json`, you often see symbols like `^`, `~`, etc.  
Here’s what they mean:

| Symbol | Example   | Meaning |
|--------|-----------|---------|
| Exact  | `1.2.3`   | Installs **exactly** version `1.2.3` |
| `^`    | `^1.2.3`  | Updates to the **latest MINOR or PATCH**, but not MAJOR.<br>Allowed: `1.x.x`, not `2.0.0` |
| `~`    | `~1.2.3`  | Updates to the **latest PATCH** only.<br>Allowed: `1.2.x`, not `1.3.0` |
| `*`    | `*`       | Matches **any version** |
| `>=`   | `>=1.2.3` | Installs `1.2.3` or higher |
| `<=`   | `<=1.2.3` | Installs `1.2.3` or lower |
| `latest` | `latest` | Installs the **latest available version** from npm |

---

## Example in package.json

```json
"dependencies": {
  "express": "^4.18.2",   // Latest 4.x.x, not 5.x
  "mongoose": "~6.12.0", // Latest 6.12.x only
  "dotenv": "16.3.1",    // Exact version only
  "cors": "*"            // Any available version
}
```

---

✅ **Key Tip**: Use `^` for most packages, `~` for stability, and exact versions when you want full control.
