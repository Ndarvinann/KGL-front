const express = require("express");
const router = express.Router();
//const passport = require("passport");

//import models;
const SignUp = require("../model/signupSchema");
//routing
//SignUp routes
router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.post("/signup", async(req, res) => {
  try {
    const user = new SignUp(req.body);
    await user.save();
    console.log('user saved:' , user);
    res.redirect("/login");//continue and log in
  } catch (error) {
    console.log(error);
   return res.redirect('/signup')//take the form back to signup
  }
});
module.exports = router;
