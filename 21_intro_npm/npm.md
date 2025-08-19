# 📦 Introduction to NPM (Node Package Manager)

## ✅ What is NPM?
- **NPM** stands for **Node Package Manager**.
- It comes bundled with **Node.js installation**.
- It is used to **install, manage, and share** packages (libraries, tools, frameworks).
- Helps in managing **dependencies** in backend and frontend projects.
- Uses **`package.json`** file to track dependencies and project metadata.

---

## 🚀 Why Use NPM in Backend?
- Reuse code instead of writing everything from scratch.
- Manage versions of libraries easily.
- Install **dev tools** (like `nodemon`) for better development experience.
- Share your own packages with others.

---

## 🔑 Some Useful NPM Commands for Backend

### 📂 Initialize a Project
```bash
npm init -y
```
- Creates a `package.json` file with default values.

---

### 📥 Install a Package
```bash
npm install <package-name>
```
- Installs package locally inside `node_modules`.

Example:
```bash
npm install express
```

---

### 🌍 Install a Package Globally
```bash
npm install -g <package-name>
```
- Installs package globally (usable across projects).

Example:
```bash
npm install -g nodemon
```

---

### 📤 Install Dev Dependency
```bash
npm install <package-name> --save-dev
```
- Installs package for **development only** (not required in production).

Example:
```bash
npm install nodemon --save-dev
```

---

### 🗑️ Uninstall a Package
```bash
npm uninstall <package-name>
```

---

### 🔄 Update a Package
```bash
npm update <package-name>
```

---

### 📜 List Installed Packages
```bash
npm list --depth=0
```
- Shows top-level installed packages.

---

### ▶️ Run a Script
```bash
npm run <script-name>
```
- Runs custom scripts defined in `package.json`.

Example (`package.json`):
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

Then run:
```bash
npm run dev
```

---

## ⚡ Commonly Used Backend Packages
- **express** → Fast web framework
- **mongoose** → MongoDB ODM
- **cors** → Handle cross-origin requests
- **dotenv** → Manage environment variables
- **nodemon** → Auto-restart server on changes
- **bcrypt** → Password hashing
- **jsonwebtoken (JWT)** → Authentication

---

