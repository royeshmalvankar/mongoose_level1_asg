const mongoose = require("mongoose")

const productchema = new mongoose.Schema({
    year: Number,
    brand: String,
    model: String,
    price: Number,
    description: String
})


const Product = mongoose.model("Product", productchema)

module.exports = Product