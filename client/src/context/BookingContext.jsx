import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'
import { authDataContext } from './AuthContext'
import { userDataContext } from './UserContext'
import { listingDataContext } from './ListingContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const bookingDataContext = createContext()

const BookingContext = ({children}) => {

    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [total,setTotal] = useState(0)
    const [night,setNight] = useState(0)

    let {serverUrl} = useContext(authDataContext)
    let {getCurrentUser} = useContext(userDataContext)
    let {getListing} = useContext(listingDataContext)
    const [bookingData,setBookingData] = useState([])
    const [booking,setBooking] = useState(false)

    const navigate = useNavigate()

    
    const handleBooking = async(id) =>{
            setBooking(true)
        try {
            let result = await axios.post(serverUrl + `api/booking/create/${id}`,{
                checkIn, checkOut, totalRent:total
            },{withCredentials:true})

            toast.success("Booking completed",{position: 'top-center',
                      autoClose: 700
                     })

            await getCurrentUser()
            await getListing()
            setBooking(false)
            setBookingData(result.data)
            navigate('/booked')

            console.log(result.data)
            
        } catch (error) {
            toast.success(error.response.data.message,{position: 'top-center',
                      autoClose: 700
                     })
            setBooking(false)
            console.log(error)
            setBookingData(null)
            
        }

    }


    const cancelBooking = async(id) =>{

        try {
            let result = await axios.delete(serverUrl + `api/booking/cancel/${id}`,{withCredentials:true})

            toast.success("Booking Cancelled",{position: 'top-center',
                      autoClose: 700
                     })

            await getCurrentUser()
            await getListing()
            
        } catch (error) {

            toast.success(error.response.data.message,{position: 'top-center',
                      autoClose: 700
                     })

            
        }

    }

    let value = {
        checkIn, setCheckIn,
        checkOut, setCheckOut,
        total,setTotal,
        night,setNight,bookingData,setBookingData,
        handleBooking,cancelBooking, booking,setBooking
    }


  return (
    <div>
       <bookingDataContext.Provider value={value}>
    {children}
  </bookingDataContext.Provider>
    </div>
  )
}

export default BookingContext
