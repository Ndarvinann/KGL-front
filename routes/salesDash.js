const express = require('express');
const router = express.Router();

router.get("/salesDash", (req,res)=>{
    res.render('salesDash')
});
module.exports = router;
