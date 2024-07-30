const express = require("express")
const Product = require("../schema/product.schema")

const productRoutes = express.Router()

productRoutes.post("/", (req, res) => {
    try {
            let product = new Product(req.body)
            product.save()
            res.send("product added successfully")
    } catch (error) {
        res.send(`The data is not valid "${error}" or some error occured`) 
    }
    })
    
    productRoutes.get("/", async (req, res) => {
        try {
            let data = await Product.find()
            res.json({"message":"success data fetched successfully","data":data})
        } catch (error) {
            res.send(`The data is not valid "${error}" or some error occured`)
        }
    })
    
    productRoutes.put("/:id", async (req, res) => {
        try {
            let data = await Product.findByIdAndUpdate({ _id:req.params.id},req.body)
            res.json({"message":"success data updated successfully","data":data})
        } catch (error) {
            res.send(`The data is not valid "${error}" or some error occured`)
        }
    })
    
    productRoutes.delete("/:id", async (req, res) => {
        try {
            let data = await Product.findByIdAndDelete({ _id:req.params.id})
            res.json({"message":"success data deleted successfully","data":data})
        } catch (error) {
            res.send(`The data is not valid "${error}" or some error occured`)
        }
    })
    
    productRoutes.get("/:id", async (req, res) => {
        try {
            let data = await Product.findById({ _id:req.params.id})
            res.json({"message":"success data fetched successfully","data":data})
        } catch (error) {
            res.send(`The data is not valid "${error}" or some error occured or product not found`)
        }
    })


module.exports = productRoutes