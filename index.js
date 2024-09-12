const express = require("express");

const app = express();

const port = 5000;

// Application-level middleware
const loggerMiddleware = (req, res, next) => {
    console.log(`${new Date()} === Request [${req.method}] [${req.url}]`);
    next();
};

app.use(loggerMiddleware);
// Third party middleware
// Router-level middleware
// Built-in middleware
// error-handling middleware

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});