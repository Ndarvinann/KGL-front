
const express = require("express");
const router = express.Router();

router.get("/addProduce", (req, res) => {
  res.render("procurement");
});

router.post("/addProduce", (req, res) => {
  console.log(req.body);
  //res.redirect("/addProduce");
});

module.exports = router;
