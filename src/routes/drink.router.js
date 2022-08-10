const express = require("express");



const {
    addDrink,
    getAllDrinks,
    getDrinkById,
    deleteDrinkById,
    updateDrinkById,


} = require("../controllers/drink.controller");
const router = express.Router();


router.post('/create', addDrink);
router.get('/', getAllDrinks);
router.get("/:id", getDrinkById);
router.delete("/:id", deleteDrinkById);
router.put("/:id", updateDrinkById);




module.exports = router;