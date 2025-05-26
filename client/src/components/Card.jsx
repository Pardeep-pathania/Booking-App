import React, { useContext, useState } from "react";
import {FaStar} from "react-icons/fa";
import {FcCancel} from "react-icons/fc"
import { userDataContext } from "../context/UserContext";
import { listingDataContext } from "../context/ListingContext";
import { useNavigate } from "react-router-dom";
import { GiConfirmed } from "react-icons/gi";
import { bookingDataContext } from "../context/BookingContext";

const Card = ({ title, landmark, image1, image2, image3, rent, city, id,ratings,isBooked, host }) => {
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false)
  let { userData } = useContext(userDataContext);
  let {cancelBooking}= useContext(bookingDataContext)
  let { handleViewCard } = useContext(listingDataContext);

  const handleClick = () => {
    if (userData) {
      handleViewCard(id);
    }
    navigate("/login");
  };

  return (
    <div
      className="w-[330px] max-w-[85%] h-[460px] flex items-start justify-start flex-col rounded-lg cursor-pointer relative"
      onClick={()=>!isBooked?handleClick():null}
    >

    {isBooked && <div className="text-green-700 bg-white rounded-lg absolute flex items-center justify-center right-1 top-1 gap-2 p-2 "><GiConfirmed className="w-[20px] h-[20px] text-green "/> Booked</div>}

   {isBooked && host ==userData?._id && <div className="text-red-600 bg-white rounded-lg absolute flex items-center justify-center right-1 top-[50px] gap-2 p-2" onClick={()=>setPopUp(prev=>!prev)}><FcCancel className="w-[20px] h-[20px] text-green "/>Cancel Booked</div>}

 
    {popUp && <div className="w-[300px]  bg-[#ffffffdf] absolute top-[85px] left-[13px] p-3 rounded-xl shadow-xl h-auto">
      <h2 className="text-xl font-semibold mb-4 text-red-600">Booking Cancel!</h2>
      <p className="text-gray-700 mb-2">Are you sure you want to cancel the booking?</p>
      <div className="flex justify-center gap-4">
        <button
          
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
         onClick={()=>{cancelBooking(id);
          setPopUp(false)
         }}>
          Yes
          
        </button>
        <button
      
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition"
        onClick={()=>setPopUp(false)} >
          No
        </button>
      </div>
    </div>}
  

      <div className="w-[100%] h-[67%] bg-[#2e2d2d] rounded-lg overflow-auto flex ">
        <img src={image1} alt="" className="w-[100%] flex-shrink-0" />
        <img src={image2} alt="" className="w-[100%] flex-shrink-0" />
        <img src={image3} alt="" className="w-[100%] flex-shrink-0" />
      </div>
      <div className="w-[100%] h-[33%] py-[20px] flex flex-col gap-1 ">
        <div className="flex items-center justify-between text-[18px]">
        <span className="w-[80%] text-ellipsis overflow-hidden font-semibold text-nowrap text-[#4a3434] ">
          In {landmark.toUpperCase()}, {city.toUpperCase()}{" "}
        </span>
        <span className="flex items-center justify-center gap-1"><FaStar className="text-[#eb6262]"/>{ratings}</span>
        </div>
        <span className="text-[15px] w-[80%] text-ellipsis overflow-hidden text-nowrap ">
          {title.toUpperCase()}
        </span>
        <span className="text-[16px] font-semibold text-[#986b6b] ">
          Rs.{rent}/day
        </span>
      </div>
    </div>
  );
};

export default Card;
