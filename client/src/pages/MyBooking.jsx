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

         {
                            userData.booking.map((list)=>(
                                <Card title={list.title} landmark={list.landmark} city={list.city} image1={list.image1} image2={list.image2} image3={list.image3} rent={list.rent} id={list._id}  isBooked={list.isBooked} ratings={list.ratings} host={list.host}/>
                            ))
                        }
       
      </div>
    </div>
  );
};

export default MyBooking;
