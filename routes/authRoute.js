const express = require("express");
const router = express.Router();
const passport = require("passport");

///Login routes
router.get("/login", (req, res) => {
  res.render("login")
    //req.flash()*/});
});

router.post("/login", (req, res, next) => {
  //next moves the request to the next middleware in the stack.
  passport.authenticate("local", (err, user, info) => {
    if (err) {
     // req.flash("error", "Login Failed");
      return res.redirect("/login");
    }

    if (!user) {
     // req.flash("error", info.message);
      return res.redirect("/login");
    }
    req.login(user, (err) => {
      if (err) {
        //req.flash("error", "session error");
        return res.redirect("/login");
      }
      //set a remember me cookie if they check it
      if (req.body.rememberMe) {
        req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; //30 days
      } else {
        req.session.cookie.expires = false; //session cookie
      }

      //role-based redirection.
      switch (user.role) {
        case "salesAgent":
          return res.redirect("/inventory");
        case "manager":
          return res.redirect("/managerDashboard");
        case "director":
          return res.redirect("/managerDashboard");
        default:
          //req.flash("error", "Unauthorized User");
          return res.redirect("/login");
      }
    });
  })(req, res, next); //here to inject express objects in to passport for authentication.(pass the batom from express to passport)
});

module.exports = router;
