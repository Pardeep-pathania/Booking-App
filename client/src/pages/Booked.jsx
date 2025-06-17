import React, { useContext, useState } from 'react'
import { GiConfirmed } from "react-icons/gi";
import {FaStar} from "react-icons/fa";
import { bookingDataContext } from '../context/BookingContext';
import { Link, useNavigate } from 'react-router-dom';
import Star from '../components/Star';
import { authDataContext } from '../context/AuthContext';
import { userDataContext } from '../context/UserContext';
import { listingDataContext } from '../context/ListingContext';
import axios from 'axios';
import { toast } from 'react-toastify';


const Booked = () => {
    let {bookingData} = useContext(bookingDataContext)
    const [star,setStar] = useState(null)
    let {serverUrl}= useContext(authDataContext)
    let {getCurrentUser} = useContext(userDataContext)
    let {getListing} = useContext(listingDataContext)
    let {cardDetails} = useContext(listingDataContext)

    let navigate = useNavigate()


    const handleRating = async(id)=>{
        try {
            let result = await axios.post(serverUrl + `api/listing/ratings/${id}`,{
                ratings:star
            },{withCredentials:true})

            toast.success("Thankyou for rating",{position: 'top-center',
                      autoClose: 700
                     })

            await getListing()
            await getCurrentUser()
            
            navigate('/')
        } catch (error) {
            toast.error("error.response.data.message",{position: 'top-center',
                      autoClose: 700
                     })
        }
    }


    const handleStar = async(value)=>{
        setStar(value)
        console.log("you rated", value)
    }

  return (
    <div className='w-[100vw] min-h-[100vh] flex items-center justify-center gap-[30px] bg-slate-200 flex-col '>

        <div className='w-[95%] max-w-[500px] h-[400px] bg-white flex items-center justify-center border-1 border-slate-300 flex-col gap-5 p-6 md:w-[80%] rounded-lg '>

    <div className='w-[100%] h-[50%] text-xl flex items-center justify-center flex-col gap-6 font-semibold '><GiConfirmed className="w-[100px] h-[100px] text-green-700 "/> 
    Booking Confirmed
    </div>
    <div className='w-[100%] text-xl flex items-center justify-between  '>
    <span>Booking Id:   <span>  {bookingData.booking?._id}</span></span>
    </div>
    <div className='w-[100%] text-xl flex items-center justify-between  '>
    <span>Owner Details:  <span>  {bookingData.booking?.host?.email}</span></span>
    </div>
    <div className='w-[100%] text-xl flex items-center justify-between  '>
    <span>Total Rent:  <span>  {bookingData.booking?.totalRent}</span></span>
    </div>
        </div>

        <div className='w-[95%] max-w-[600px] h-[200px] bg-white flex items-center justify-center border-1 border-slate-400 flex-col gap-5 p-4 md:w-[80%] rounded-lg '>
            <h1>{star} out of 5 Rating</h1>
    <Star onRate={handleStar}/>
    <button
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
         onClick={()=>handleRating(cardDetails._id)} >
            Submit
          </button>
    <Link to={'/'}
            className="w-auto py-2 px-16 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  absolute top-[10px] right-[20px] "
          >
            Back to Home
          </Link>
        </div>
      
    </div>
  )
}

export default Booked