const express = require("express");
const indexRoutes = express.Router();
const User = require("../models/User");
// const Snippet = require("../models/Snippet");

indexRoutes.get("/", (req, res) => {
    User.find().then(foundUsers => {
        console.log(foundUsers);
        if (!foundUsers) {
            res.status(500).send(err);
        }
        res.render("index", { users: foundUsers });//sets what the first page is
    });
});

module.exports = indexRoutes;  