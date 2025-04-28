
const express = require("express");
const router = express.Router();
const procurement=require('../model/procurementShema')

router.get("/addProduce", (req, res) => {
  res.render("procurement");
});

router.post("/addProduce", async(req, res) => {
  console.log("Form Data:", req.body);
  try{
    const newProduce = new procurement(req.body);
    await newProduce.save();
    res.redirect("/addProduce");
  }catch(err){
    console.error("Error saving Produce", err.message);
    res.status(400).send("Failed to save produce: " + err.message);
  }
});

module.exports = router;
