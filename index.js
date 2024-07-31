const express = require("express")
const mongoose = require("mongoose")
const userRoutes = require("./routes/user.routes")
const productRoutes = require("./routes/products.routes")


const app = express()
const ltserver = 3001

app.use(express.json())
app.use("/user",userRoutes)
app.use("/product",productRoutes)


app.listen(ltserver,()=>{
    connet_to_db()
    console.log(`The server has started ${ltserver}`)
})

connet_to_db = async() => {
    await mongoose.connect("mongodb://localhost:27017/user&product")
    console.log("connected to db")
}