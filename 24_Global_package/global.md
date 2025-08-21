# NPM Packages Explained: Manage, Update, and Remove Easily!

NPM (**Node Package Manager**) is used to manage external libraries, tools, and frameworks in Node.js projects.  
With NPM, you can install, update, and remove packages very easily.

---

## 📦 1. Install Packages  
Install new dependencies in your project.

### Local Installation
npm install <package-name>

text
➡ Installs the package locally in `node_modules`.

### Global Installation
npm install -g <package-name>

text
➡ Installs the package globally (can be used anywhere on your system).

**Example**
npm install express

text

---

## 🔄 2. Update Packages  
Keep your project dependencies up to date.

### Update a Single Package
npm update <package-name>

text
➡ Updates the specific package to the latest allowed version (based on `package.json`).

### Update All Packages
npm update

text

### Check Outdated Packages
npm outdated

text
➡ Shows which packages are outdated and what versions are available.

---

## ❌ 3. Remove Packages  
Remove unused or unwanted dependencies.

### Remove a Single Package
npm uninstall <package-name>

text
➡ Removes the package from `node_modules` and updates `package.json`.

**Example**
npm uninstall express

text

---

## 📋 4. View Installed Packages  
To see a list of installed dependencies:

npm list --depth=0

text
➡ Shows only top-level packages.

---

## ✅ Summary
- **Install** → `npm install <package>`  
- **Update** → `npm update <package>`  
- **Remove** → `npm uninstall <package>`  
- **Check outdated** → `npm outdated`  
- **List installed** → `npm list --depth=0` 