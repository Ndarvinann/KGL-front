const mongoose = require("mongoose");

const creditSaleSchema = new mongoose.Schema({
    creditBuyer:{
        type: String,
        required: true,
        trim:true,
    },
    creditNIN:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    creditLocation:{
        type: String,
        required:true,
        trim:true,
    },
    creditContact:{
        type:String,
        trim: true,
        required: true,
        unique: true,
    },
    creditAmount:{
        type: Number,
        required: true,
        min: 0,
    },
    creditDueDate:{
        type: Date,
        default: Date.now
    },
    creditProduct:{
        type: String,
        required: true,
        enum:['Beans','Maize', 'Peas', 'soyBeans', 'Gnuts'],
    },
    creditTonnage:{
        type:Number,
        trim: true,
        required:true, 
    },
    dispatchDate:{
        type: Date,
        default: Date.now 
    },
    creditAgent:{
        type: String,
        required: true,
        trim: true, 
    },
});
module.exports = mongoose.model('creditSale', creditSaleSchema);
