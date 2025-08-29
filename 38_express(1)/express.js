// Express:-
// is a web application framework for Node.js, designed for building web applications and APIs.
// It simplifies the development process by providing a robust set of features for web and mobile applications.
// Alternatives to Express include Koa, Hapi, and Fastify.

// Cretae first time using server using express.js
import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

app.get('/about', (req, res) => res.send('<h1>About Page</h1>'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));