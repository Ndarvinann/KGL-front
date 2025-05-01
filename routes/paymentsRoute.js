const express = require('express');
const router = express.Router();

//import models
const procurementShema = require('../model/procurementShema');
const cashSaleSchema = require('../model/cashSaleSchema');
const creditsaleSchema = require('../model/creditsaleSchema');


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

router.post('/addCashPayment', async (req, res)=>{
    try {
        const { cashSale, cashTonnage, cashAmount } = req.body;
        const produce = cashSale.toLowerCase();
        //find all procurements sorted oldest to newest
        const procurements = await procurementShema.find({ produce })
      .sort({ dateAndTime: 1 });

      //calculate the total stock available
      const totalStock = procurements.reduce((sum, p) => sum + p.kilos, 0);
      const saleQty = parseFloat(cashTonnage);

      //validate stock
      if (saleQty > totalStock) {
        return res.status(400).render('payments', {
          error: `Only ${totalStock} kg left in stock!`,
          currentDateTime: formattedDateTime,
          agentName: 'makanga Joe'
        }); 
        }

        //deduct stock using first in first out method.
        let remainingQty = saleQty;
        let totalCostDeducted = 0;
    procurements.forEach(procurement =>{
        if (remainingQty <= 0) return;
        const deductQty = Math.min(procurement.kilos, remainingQty);
        const costDeducted = (deductQty / proc.kilos) * proc.totalCost;

        procurement.kilos -= deductQty;
        remainingQty -= deductQty;
        proc.totalCost -= costDeducted;
        totalCostDeducted += costDeducted;
        updates.push(proc.save()); // Save each updated procurement 
    });
    await Promise.all(updates);
    
    //record new sale
     await new cashSaleSchema({
     ...req.body,
     cashCost: totalCostDeducted,
     cashProfit: parseFloat(cashAmount) - totalCostDeducted
     })
     .save();
          res.redirect('/salesDash');

    } catch (error) {
        console.error("Sale failed:", error);
    res.status(500).render('payments', {
      error: "Sale processing failed",
      currentDateTime: formattedDateTime,
      agentName: req.session.user 
    });
  }
});
 //for the creditPayments
 router.get('/addCreditPayment', (req,res)=>{
    res.render('payments',{
    currentDateTime: formattedDateTime,
    agentName: 'makanga joe'
  });
});

 router.post('/addCreditPayment', async (req, res)=>{
    try {
        const { creditProduct, creditTonnage, creditAmount } = req.body;
        const produce = creditProduct.toLowerCase();
        //stock Management
        const procurements = await procurementShema.find({ produce })
        .sort({ dateAndTime: 1 });
        const totalStock = procurements.reduce((sum, p) => sum + p.kilos, 0);
        const saleQty = parseFloat(creditTonnage);

        if (saleQty > totalStock) {
            return res.status(400).render('payments', {
                error: `Only ${totalStock} kg available!`,
                currentDateTime: formattedDateTime,
                agentName: 'makanga joe'
            });
        }
         //deduct Stock
         let remainingQty = saleQty;
         let totalCostDeducted = 0;
          const updates = [];

        procurements.forEach(procurement => {
            if (remainingQty <= 0) return;
            const deductQty = Math.min(proc.kilos, remainingQty);
            const costDeducted = (deductQty / proc.kilos) * proc.totalCost;
            proc.kilos -= deductQty;
            proc.totalCost -= costDeducted;
            totalCostDeducted += costDeducted;
            remainingQty -= deductQty;
            updates.push(proc.save());
        });
        //save all the updates at once
        await Promise.all(procurements.map(procurement=> proc.save()));
        //record this sale
        // 2. Record sale (your simple version - improved)
        const creditSale = new creditsaleSchema({
            ...req.body,
            creditAgent: 'makanga joe' // Auto-add agent
        });
        await creditSale.save();
        res.redirect('/salesDash');

    } catch (error) {
        console.error("Credit sale failed:", error);
        res.status(500).render('payments', {
            error: "Failed to process credit sale",
            currentDateTime: formattedDateTime,
            agentName: 'Makanga Joe'
        });
    }
});

module.exports = router;

