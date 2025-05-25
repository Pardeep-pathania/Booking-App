const {uploadOnCloudinary} = require('../config/cloudinary.js');
const Listing = require('../models/listingModel.js');
const Users = require('../models/userModel.js');

const addListing = async(req,res) =>{
    try {
        let image1;
        let image2;
        let image3;
        let host = req.userId;
        let data = req.body;
        if(req.files.image1) {image1 = await uploadOnCloudinary(req.files.image1[0].path)};
        if(req.files.image2){image2 = await uploadOnCloudinary(req.files.image2[0].path)};
        if(req.files.image3){image3 = await uploadOnCloudinary(req.files.image3[0].path)};


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

const getListing = async(req,res)=>{
    try {

        let listing = await Listing.find().sort({createdAt:-1})
        
        res.status(200).json(listing)
        
    } catch (error) {
        res.status(500).json({message:`getListing error ${error}`})
    }
}

const findListing = async(req,res)=>{
    try {
        let {id} = req.params
        let listing = await Listing.findById(id)
        if(!listing){
           return res.status(404).json({message:"Listing not found"})
        }

        res.status(200).json(listing)
    } catch (error) {
       return res.status(400).json({message:`findListing Error ${error}`}) 
    }
}

const updateListing = async(req,res)=>{
    try {
         const { id } = req.params; 
         let host = req.userId;
        let data = req.body;
        let image1 = await uploadOnCloudinary(req.files.image1[0].path);
        let image2 = await uploadOnCloudinary(req.files.image2[0].path);
        let image3 = await uploadOnCloudinary(req.files.image3[0].path);


        let listing = await Listing.findByIdAndUpdate(id,{
            ...data,
            host,
            image1: image1,
            image2: image2,
            image3: image3
        },{new:true})
         res.status(201).json({message:"Data update successfully", listing})

    } catch (error) {
        res.status(500).json({error})
}
}

const deleteListing =async(req,res)=>{
    try {let {id} = req.params
    let listing = await Listing.findByIdAndDelete(id)
       let user = await Users.findByIdAndUpdate(listing.host,{$pull:{listing:listing._id}},{new:true})

    if(!user){
        return res.status(401).json({message:"User not found"})
    }
    return res.status(201).json({message:"Listing deleted"})

    } catch (error) {
        
    }
}

module.exports = {addListing, getListing,findListing, updateListing, deleteListing}