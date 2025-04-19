const express = require('express');
const router = express.Router();

//utility date format
const formattedDateTime = ()=>{
    const now = new Date();
    return now.toISOString().slice(0,16);
};

router.get("/addCashPayment", (req,res)=>{
    res.render('payments',{
         currentDateTime: formattedDateTime,
    agentName: 'Makanga Joe'
    });
});

router.post('/addCashPayment', (req, res)=>{
    console.log(req.body)
});
 router.get('/addCreditPayment', (req,res)=>{
    const formattedDateTime = getFormattedDateTime();
res.render('payments',{
    currentDateTime: formattedDateTime,
    agentName: 'Makanga Joe'
  });
});
 router.post('/addCreditPayment', (req, res)=>{
 
    console.log(req.body)
 });

module.exports = router;

