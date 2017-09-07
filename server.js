const express = require("express");
const bcrypt = require("bcryptjs");
const logger = require("morgan");
const bluebird = require("bluebird");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const mustacheExpress = require("mustache-express");

const checkAuth = require("./middlewares/checkAuth");
const indexRoutes = require("./routes/indexRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const Snippet = require("./models/Snippet");
const User = require("./models/User");
const sessionConfig = require("./sessionConfig.js")

const path = require("path");

const dbUrl = "mongodb://localhost:27017/codeSnippetOrganizer";
mongoose.Promise = bluebird;
let db = mongoose.connect(dbUrl);
const port = process.env.PORT || 8008

const app = express();

//templating engine
app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

//middleware
app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

//routes
app.use("/", indexRoutes);
app.use("/auth", authRoutes);
app.use("/login", authRoutes);
app.use("/signup", authRoutes);
app.use("/user", userRoutes);

app.listen(port, function () {
    console.log(`server is running on port ${port}!`);
});
