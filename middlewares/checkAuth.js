// if !sesssion.user
// reroute to loginpage. 
module.exports = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        return res.redirect("/auth/login");
    }
}