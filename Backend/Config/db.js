const mongoose = require("mongoose");
require("dotenv").config()

const mongodbConnection = async (req, res) => {
    try {

        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected");

    } catch (error) {
        console.log("DB Connection Error : ", err);
    }

}



module.exports = { mongodbConnection };