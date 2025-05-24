const Users = require("../models/userModel")

const getCurrentUser = async(req,res)=>{
    try {
        let user = await Users.findById(req.userId).select("-password")
        if(!user){
           return res.status(400).json({message:"User not found"})
        }
        res.status(200).json(user)
    } 
    
    catch (error) {
      return res.status(500).json({message:`getCurrentUser error ${error}`})
    }
}

module.exports = {getCurrentUser}