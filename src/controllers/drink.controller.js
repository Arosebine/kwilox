const Drink = require("../models/drink.model");

exports.addDrink = async (req, res) => {
  try {
    const {
      drink_name,
      manufacturer_company,
      expiry_date,
      quantity_available,
    } = req.body;

    if(!(drink_name && manufacturer_company && expiry_date && quantity_available)){
        return res.status(400).json({message:"Please fill all fields"})
    }
    const newUser = new Drink({
      drink_name,
      manufacturer_company,
      expiry_date,
      quantity_available,
    });
    const save_newUser = await newUser.save();

    return res
      .status(201)
      .json({ message: "You have successfully saved New Drink", save_newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

exports.getAllDrinks = async (req, res) => {
  try {
    const users = await Drink.find();
    return res.status(200).json({
      registered_input: users.length,
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

exports.getDrinkById = async (req, res) => {
  try {
    const users = await Drink.findOne({ InputById: req.param.id });
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

exports.deleteDrinkById = async (req, res) => {
  try {
    const user = await Drink.findOneAndDelete({
      InputById: req.params.id,
    });
    return res.status(200).json({
      message: "Successfully deleted, thank You",
      user: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

exports.updateDrinkById = async (req, res) => {
  try {
    const { product_name, quantity_available, company_name } = req.body;
    const user = await Drink.findOneAndUpdate(
      { InputById: req.params.id },
      { product_name, quantity_available, company_name },
      { new: true }
    );

    return res
      .status(200)
      .json({ message: "Your data updated successfully", user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
