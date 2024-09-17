const express = require("express")
const mongoose = require("mongoose")
const userRoutes = require("./routes/user.routes")
const productRoutes = require("./routes/products.routes")
const connect_to_db = require("./dbs/db")

const app = express()
const ltserver = 3001

app.use(express.json())
app.use("/user",userRoutes)
app.use("/product",productRoutes)


app.listen(ltserver,()=>{
    connect_to_db()
    console.log(`The server has started ${ltserver}`)
})
