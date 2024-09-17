const express = require("express")
const User = require("../schema/user.schema")


const userRoutes = express.Router()


userRoutes.post("/", async(req, res) => {
    try {
       let UserAuth = await User.find({email:req.body.email}) 
       if(UserAuth.length!=0){
        res.send({"message":"user already exists"})
        return
       }
      let user = new User(req.body)
      await user.save()
      res.send("user added successfully")
    } catch (error) {
     res.send(`The data is not valid "${error}" or some error occured`)
    }
 })

 userRoutes.get("/", async (req, res) => {
    try {
        let data = await User.find()
        res.json({"message":"success data fetched successfully","data":data})
    } catch (error) {
        res.send(`The data is not valid "${error}" or some error occured`)
    }
})

userRoutes.put("/:id", async (req, res) => {
    try {
        let data = await User.findByIdAndUpdate({ _id:req.params.id},req.body)
        res.json({"message":"success data updated successfully","data":data})
    } catch (error) {
        res.send(`The data is not valid "${error}" or some error occured`)
    }
})

userRoutes.delete("/:id", async (req, res) => {
    try {   
        let data = await User.findByIdAndDelete({ _id:req.params.id})
        res.json({"message":"success data deleted successfully","data":data})
    } catch (error) {
        res.send(`The data is not valid "${error}" or some error occured`)
    }
})

userRoutes.get("/:id", async (req, res) => {
    try {
        let data = await User.findById({ _id:req.params.id})
        res.json({"message":"success data fetched successfully","data":data})
    } catch (error) {
        res.send(`The data is not valid "${error}" or some error occured or user not found`)
    }
})

module.exports = userRoutes