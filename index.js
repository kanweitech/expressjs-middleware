const express = require("express");

const app = express();

const port = 5000;

const router = express.Router()

// Application-level middleware
const loggerMiddleware = (req, res, next) => {
    console.log(`${new Date()} === Request [${req.method}] [${req.url}]`);
    next();
};

app.use(loggerMiddleware);
// Third party middleware
// Router-level middleware

app.use("/api/users/", router);
const getUsers = (req, res) => {
    res.json({ message: "Get all user"});
};

const createUser = (req, res) => {
    res.json({ message: "Create new user"});
};

router.route("/").get(getUsers).post(createUser);
// Built-in middleware
// error-handling middleware

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});