const express = require("express");



const {
    createInput,
    getInput,
    getInputById,
    deleteInputById,
    updateInputById,


} = require("../controllers/adminUser");
const router = express.Router();


router.post('/create', createInput);
router.get('/drinks', getInput);
router.get("/drink/:id", getInputById);
router.delete("/delete/:id", deleteInputById);
router.put("/update/:id", updateInputById);




module.exports = router;