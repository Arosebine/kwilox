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
    const newDrink = new Drink({
      drink_name,
      manufacturer_company,
      expiry_date,
      quantity_available,
    });
    const save_newDrink = await newDrink.save();

    return res
      .status(201)
      .json({ message: "You have successfully saved New Drink", save_newDrink });
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
    const _id = req.params.id
    const users = await Drink.findOne({ _id:_id });
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

exports.deleteDrinkById = async (req, res) => {
  try {
    const user = await Drink.findOneAndDelete({
      _id: req.params.id,
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
    const { drink_name, quantity_available, manufacturer_company } = req.body;
    const user = await Drink.findOneAndUpdate(
      { _id: req.params.id },
      { drink_name, quantity_available, manufacturer_company },
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


