import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { userDataContext } from "../context/UserContext";
import Card from "../components/Card";
const MyBooking = () => {
  let { userData } = useContext(userDataContext);
  const navigate = useNavigate();
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col gap-6 items-center justify-start relative ">
      <div
        className="w-[50px] h-[50px] cursor-pointer bg-red-600 absolute top-[5%] left-[20px] rounded-full flex items-center justify-center"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft className="text-white" />
      </div>

      <div className="w-[50%] h-[10%] border-1 border-[#908c8c] p-[15px] flex items-center justify-center text-[30px] rounded-md text-[#613b3b] font-semibold mt-[20px] md:w-[600px] ">
        MY BOOKING
      </div>

      <div className="w-[100%] h-[90%] flex items-center justify-center gap-[25px] flex-wrap mt-[30px] ">
        {userData?.booking && userData.booking.length > 0 ? (
          userData.booking.map((list) =>
            list.listing ? (
              <Card
                key={list._id}
                title={list.listing.title}
                landmark={list.listing.landmark}
                city={list.listing.city}
                image1={list.listing.image1}
                image2={list.listing.image2}
                image3={list.listing.image3}
                rent={list.listing.rent}
                id={list.listing._id}
                isBooked={list.listing.isBooked}
                ratings={list.listing.ratings}
                host={list.listing.host}
              />
            ) : null
          )
        ) : (
          <div className="text-lg text-gray-500">No bookings found.</div>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
