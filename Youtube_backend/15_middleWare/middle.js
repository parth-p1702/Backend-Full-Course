// MiddleWare in nodejs:-
// Middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
// It can perform various tasks such as logging, authentication, and modifying the request or response objects.
// Syntax
const middleware = (req, res, next) => {
  // Middleware logic
  next();
};