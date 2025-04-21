const mongoose = require("mongoose");

const procurementShema = new mongoose.Schema({
    produce:{
        type:String,
        trim:true,
        required:true,
        enum:['gnuts', 'maize', 'beans','cow-peas','Soybeans'],
    },
    kilos:{
        type:Number,
        trim: true,
        required:true,    
    },
    dealerName:{
        type: String,
        trim:true,
        required: true,
        unique:true,
    },
    branchname:{
        type:String,
        required:true,
        enum:['maganjo','matuga'],
    },
    dateAndTime:{
        type: Date,
    default: Date.now
    },
    cost: {
        type: Number,
        required: true,
        min: 0,
    },
    contact:{
        type:String,
        trim: true,
        required: true,
        unique: true,
    },
    priceToSell:{
        type: Number,
        required: true,
        min: 0,
    },
});
module.exports = mongoose.model('procurement', procurementShema);