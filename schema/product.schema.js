const mongoose = require("mongoose")

const productchema = new mongoose.Schema({
    year: {type:Number, required:true},
    brand: {type:String, required:true},
    model: {type:String, required:true},
    price: {type:Number, required:true},
    description:{type:String}
})


const Product = mongoose.model("Product", productchema)

module.exports = Product