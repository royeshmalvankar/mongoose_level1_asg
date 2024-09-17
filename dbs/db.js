const mongoose = require("mongoose")
require("dotenv").config()

connet_to_db = async() => {
    // await mongoose.connect(`mongodb+srv://royeshmalvankar:${process.env.MONGO_PASSWORD}@cluster0.n7mz3.mongodb.net/user&product?retryWrites=true&w=majority&appName=Cluster0`)
    await mongoose.connect(`mongodb://localhost:27017/user&product`)
    console.log("connected to db")
}

module.exports = connet_to_db