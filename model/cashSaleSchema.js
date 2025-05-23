const mongoose = require("mongoose");

const cashSaleSchema = new mongoose.Schema({
  cashSale: {
    type: String,
    required: true,
    enum:['Beans','Maize', 'Peas', 'SoyBeans', 'Gnuts'],
  },
  cashTonnage: {
    type: Number,
    trim: true,
    required: true,
  },
  cashAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  cashBuyer: {
    type: String,
    required: true,
    trim: true,
  },
  cashAgent: {
    type: String,
    trim: true,
  },
  cashDate: {
    type: Date,
    default: Date.now,
  },
  cashCost: { 
    type: Number, 
    required: true 
  }, 
cashProfit: { 
  type: Number, 
  required: true 
} ,
});

module.exports = mongoose.model("cashSale", cashSaleSchema);
