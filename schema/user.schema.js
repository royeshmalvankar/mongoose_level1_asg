const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true, min:6, max:12}
})

const User = mongoose.model("User", userschema)

module.exports = User