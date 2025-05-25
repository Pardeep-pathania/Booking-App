const Listing = require("../models/listingModel");
const Users = require ("../models/userModel");

const createBooking = async(req,res)=>{
    try {
        let {id} = req.params;
        let {checkIn,checkOut,totalRent} = req.body
        let listing = await Listing.findById(id)
        if(!listing){
            return res.status(404).json({message:"Listing is not found"})
        }

        if(new Date(checkIn)>= new Date(checkOut)){
            return res.status(400).json({message:"Invalid checkIn/CheckOut date"})
        }
        if(listing.isBooked){
            return res.status(400).json({message:"Listing is already Booked"})
        }

        let booking = await Booking.create({
            checkIn,checkOut,totalRent,
            host:listing.host,
            guest:res.userId,
            listing:listing._id
        })

        let user = await Users.findByIdAndUpdate(res.userId, {$push:{booking:listing}},{new:true})

        if(!user){
            return res.status(404).json({message:"User is not found"})
        }

        listing.guest = res.userId
        listing.isBooked = true
        await listing.save()

        return res.status(201).json({message:"Booking created", booking})

    } catch (error) {
        return res.status(500).json({message:`Booking error ${error}`})
    }
}

module.exports = {createBooking}