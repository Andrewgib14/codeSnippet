const express = require("express");
const User = require("../models/User");
userRoutes = express.Router();

userRoutes.get("/snippetView", (req, res) => {
    res.render("snippetView", { users: req.session.user });
});


userRoutes.get("/update", (req, res) => {
    res.render("update", { users: req.session.user });
});

///////////////// TO UPDATE ENTRY //////////////////////////
// userRoutes.post("/updateprofile/:id", function (req, res) {
//     User.findByIdAndUpdate(req.params.id, req.body)
//         .then(function (updatedUser) {
//             res.redirect(`/snippetView/${req.params.id}`);
//         })
//         .catch(function (err) {
//             res.status(500).send(err);
//         });
// });


// ///////////////// TO DELETE AN ENTRY ////////////////////////
// userRoutes.get("/deleteUser/:id", function (req, res) {
//     User.findByIdAndRemove(req.params.id)
//         .then(function (message) {
//             return res.redirect("/");
//         })
//         .catch(function (err) {
//             res.status(500).send(err);
//         });
// });

module.exports = userRoutes;