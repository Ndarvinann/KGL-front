const express = require('express');
const router = express.Router();

//import models
const cashSaleSchema = require('../model/cashSaleSchema');
const creditsaleSchema = require('../model/creditsaleSchema')


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
    try {
        const cashSale = new cashSaleSchema(req.body);
        cashSale.save();
        console.log(cashSale)
        res.redirect('/addCreditPayment')
    } catch (error) {
        res.status(400).render('payments')
    }
        
});

 router.get('/addCreditPayment', (req,res)=>{
    res.render('payments',{
    currentDateTime: formattedDateTime,
    agentName: 'Makanga Joe'
  });
});

 router.post('/addCreditPayment', (req, res)=>{
    try {
        const creditSale = new creditsaleSchema(req.body);
        creditSale.save();
        console.log(creditSale)
        res.redirect('/addCashPayment')
    } catch (error) {
        res.status(400).render('payments')
        console.log(req.body)
    }
 });

module.exports = router;

