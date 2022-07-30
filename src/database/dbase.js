const mongoose = require("mongoose");


const mongoDb = async () => {
    await mongoose.connect(process.env.MONGODB_URL, () =>{
        console.log("Connected to MongoDB");
    });
};


module.exports = mongoDb;