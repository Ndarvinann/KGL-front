const express = require('express');
const router = express.Router();

//import models
const cashSaleSchema = require('../model/cashSaleSchema');
const creditsaleSchema = require('../model/creditsaleSchema');
const procurementShema = require('../model/procurementShema');

//get the dashBoard
router.get("/salesDash",  async (req,res)=>{
    try{
         //get all the cash sales from the db
    const cashSales = await cashSaleSchema.find().sort({cashDate:-1}); //newest first
    console.log("Cash Sales:", cashSales);
    //get all the creditsales
    const creditSales = await creditsaleSchema.find().sort({creditDueDate:-1});
    console.log("Credit Sales:", creditSales);
    // get the producce data
    const procurements = await procurementShema.find();
    console.log("Procurements:", procurements);
//process the procurement Data to get stock infomation
const products= procurements.map(item=>({
    name:item.produce,
    stock:item.kilos,
    price:item.priceToSell,
    lastRestockDate:item.dateAndTime,
}));
//generate recent sales(last 5 cash/credit sales)
const recentSales= [
    ...cashSales.map(sale=>({
        ...sale._doc, 
        type:'cash', 
        date: sale.cashDate
    })),
    ...creditSales.map(sale=>({
        ...sale._doc, 
        type:'credit',
        date: sale.creditDueDate
    })) //(...spread opertor combines both arrays.)
]
//sorting to neweat 1st.
.sort((a,b)=>new Date(b.date)- new Date(a.date))//sort data, newest 1st.
.slice(0,5); //keep only the most recent 5 sales.

     //pass it on to the dashboard.
    res.render('salesDash', {
        products,
        cashSales,
        creditSales,
        recentSales
    });
    } catch(error){
        console.error('Error fetching sales data:', error);
        res.status(500).send(`Error Loading page:, ${error.message}`); 
    }
   
});
module.exports = router;
