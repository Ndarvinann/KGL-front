const express = require('express');
const router = express.Router();

router.get("/report", (req,res)=>{
    res.render('report')
});
module.exports = router;

