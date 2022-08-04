const adminSchema = require("../models/adminSchema");


exports.createInput = async (req, res) => {
    try {
        const { 
            drink_name,
            manufacturer_company,
            expiry_date,
            quantity_available,
            } = req.body


        const newUser = new adminSchema ({
            drink_name,
            manufacturer_company,
            expiry_date,
            quantity_available,
          
        });
        const save_newUser = await newUser.save();         

        return res.status(201).json({message:"Successfully Registered New Drink", save_newUser})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
};




exports.getInput = async (req, res) => {
    try {
        const users = await adminSchema.find();
        return res.status(200).json({
             registered_input: users.length,
             users
            })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "data not available" });
    }
};




exports.getInputById = async (req, res) => {
    try {
        const users = await adminSchema.findOne({ InputById: req.param.id });
        return res.status(200).json( users );
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "data not available" });
    }
};




exports.deleteInputById = async (req, res) => {
    try {
        const user = await adminSchema.findOneAndDelete({ InputById: req.params.id });
        return res.status(200).json({ 
            message: "Successfully deleted, thank You",
            user: user  
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "data not available"});
    }
};




exports.updateInputById = async (req, res) => {
    try {
        const { product_name, quantity_available, company_name } = req.body
        const user = await adminSchema.findOneAndUpdate({ InputById: req.params.id },
            {product_name, quantity_available, company_name },
            { new: true }
            );
        
        return res.status(200).json({ message:"Your data updated successfully", user});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "data not available" });
    }
};