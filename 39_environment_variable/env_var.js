// Environment Variables:-
// These are variables that are defined outside of your application and can be used to configure it.
// They are often used to store sensitive information like API keys, database URLs, etc.
// In Node.js, you can access environment variables using process.env.VARIABLE_NAME

// import express from 'express';

// const app = express();

// app.get('/', (req, res) => res.send('<h1>Hello Good Morning!</h1>'));

// const PORT = process.env.PORT;
// app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

// Above process of setting environments variable is good for small project but insted of we work on large level project that time used .env file concept let's see:-
// .env file for development:-
// Steps to create and use .env file in your project:

// 1. Create a file named `.env` in the root directory of your project.
// 2. Add your environment variables to the `.env` file in the format `KEY=VALUE`.
//    For example:
//    PORT=3000

import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('<h1>Hello Good Morning!</h1>'));
app.get('/about', (req, res) => res.send('<h1>This is about page</h1>'));
const PORT = process.env.PORT || 3000; // Fallback to 3000 if PORT is not defined in .env
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
