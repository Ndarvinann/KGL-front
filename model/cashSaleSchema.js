const mongoose = require("mongoose");

const cashSaleSchema = new mongoose.Schema({
  cashSale: {
    type: String,
    required: true,
    enum: ["beans", "maize", "peas", "soyBeans", "gnuts"],
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
  CashAgent: {
    type: String,
    required: true,
    trim: true,
  },
  cashDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("cashSale", cashSaleSchema);
