/*
📦 package.json in Node.js

1. What is it?
   - It’s the main configuration file for any Node.js project.
   - Acts like a "manifest file" that contains metadata about the project.

2. Why is it important?
   - Manages project dependencies (libraries you install using npm or yarn).
   - Defines scripts to run tasks (like "start", "test", "build").
   - Stores project information (name, version, author, license).
   - Ensures reproducibility across different environments.

3. Common Fields:
   - name: Project name.
   - version: Current version of your project.
   - description: Short info about your project.
   - main: Entry point file (e.g., index.js, app.js).
   - scripts: Custom commands (e.g., "npm start").
   - dependencies: External libraries needed for production.
   - devDependencies: Libraries used only for development/testing.
   - keywords, author, license: Additional metadata.

4. Example package.json:
   {
     "name": "my-app",
     "version": "1.0.0",
     "description": "A sample Node.js app",
     "main": "index.js",
     "scripts": {
       "start": "node index.js",
       "test": "echo \"No test specified\" && exit 1"
     },
     "dependencies": {
       "express": "^4.18.2"
     },
     "devDependencies": {
       "nodemon": "^3.0.1"
     }
   }

*/


/*After Understading package.json file*/
// Download:- npm i nodemon(used automatically restrats your nodejs app whenever you make changes)
// And run this one when used it:- npx nodemon fileName.js 