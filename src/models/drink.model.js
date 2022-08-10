const mongoose = require("mongoose");




const drinkSchema = new mongoose.Schema({
    drink_name: {
        type: String,
        required: true,
    },
    manufacturer_company: {
        type: String,
        required: true,
    },
    expiry_date: {
        type: String,
        required: true,
    },
    quantity_available: {
        type: Number,
        required: true,
    
    },
    

},
{
    timestamps: true,
},


);



module.exports = mongoose.model("Drink", drinkSchema)




