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

app.use("/api/users", router);

const fakeAuth = (req, res, next) => {
    const authStatus = true;
    if (authStatus) {
        console.log("User authStatus : ", authStatus);
        next();
    } else {
        res.status(401);
        throw new Error("Users is not authorized!");
    }
};

const getUsers = (req, res) => {
    res.json({ message: "Get all user"});
};

const createUser = (req, res) => {
    res.json({ message: "Create new user"});
};
router.use(fakeAuth);
router.route("/").get(getUsers).post(createUser);
// Built-in middleware
// error-handling middleware

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});