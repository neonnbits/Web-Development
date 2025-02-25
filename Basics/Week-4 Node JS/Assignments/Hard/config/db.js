const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Database.");
    }
    catch(err){
        console.log("Database connection failed.", err);
        process.exit(1);
    }
}

module.exports = connectDB;