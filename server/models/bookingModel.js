 const mongoose = require(mongoose);

 const bookingSchema = new mongoose.Schema({
    host:{
        ref:'User',
        required:true
    },
    guest:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        
        },
    listing:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Listing',
            required:true       
        },
        status:{
            type:String,
            enum:["booked", "cancel"],
            default: "booked"
        },
        checkIn:{
            type:Date,
            required:true
        },
        checkOut:{
            type:Date,
            required:true
        },
        totalRent:{
            type:Number,
            required:true
        }
 },{timestamps:true})

 const Booking = mongoose.model("Booking", bookingSchema)