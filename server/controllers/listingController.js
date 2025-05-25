const {uploadOnCloudinary} = require('../config/cloudinary.js');
const Listing = require('../models/listingModel.js');
const Users = require('../models/userModel.js');

const addListing = async(req,res) =>{
    try {
        let host = req.userId;
        let data = req.body;
        let image1 = await uploadOnCloudinary(req.files.image1[0].path);
        let image2 = await uploadOnCloudinary(req.files.image2[0].path);
        let image3 = await uploadOnCloudinary(req.files.image3[0].path);


        let listing = await Listing.create({
            ...data,
            host,
            image1: image1,
            image2: image2,
            image3: image3
        })

        let user = await Users.findByIdAndUpdate(host, {$push:{listing:listing._id}}, {new:true})
        if(!user){
            return res.status(400).json({message:"User not found"})
        }

         res.status(201).json({message:"Listing added successfully", listing})


    } catch (error) {
        res.status(500).json({message:`AddListing error ${error}`})
    }
}

module.exports = {addListing}