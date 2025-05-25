import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { listingDataContext } from "../context/ListingContext";

const ListingPage3 = () => {
  const navigate = useNavigate();

  let {
    title,
    setTitle,
    description,
    setDescription,
    rent,
    setRent,
    city,
    setCity,
    landmark,
    setLandmark,
    category,
    setCategory,
    frontEndImage1,
    setFrontEndImage1,
    frontEndImage2,
    setFrontEndImage2,
    frontEndImage3,
    setFrontEndImage3,
    backEndImage1,
    setBackEndImage1,
    backEndImage2,
    setBackEndImage2,
    backEndImage3,
    setBackEndImage3,
    handleAddListing,
    adding, setAdding
  } = useContext(listingDataContext);

  return (
    <div className="w-[100%] h-[100vh] bg-white flex flex-col gap-2 items-center justify-center relative overflow-auto">
      <div
        className="w-[50px] h-[50px] cursor-pointer bg-red-600 absolute top-[5%] left-[20px] rounded-full flex items-center justify-center"
        onClick={() => navigate("/listingpage2")}
      >
        <FaArrowLeft className="text-white" />
      </div>

      <div className="w-[95%] flex items-center justify-start text-xl md:w-[80%] mb-[10px] ">
        <h1
          className="text-[20px] text-slate-800 md:text-[30px] 
text-ellipsis text-nowrap overflow-hidden "
        >
          {`In ${landmark.toUpperCase()}, ${city.toUpperCase()}`}
        </h1>
      </div>

      <div className="w-[95%] h-[400px] flex items-center justify-center flex-col md:[80%] md:flex-row ">

        <div className="w-[100%] h-[65%] md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-1 border-amber-200 bg-red ">
            <img src={frontEndImage1} alt="first pic" className="w-[100%] " />
        </div>
        <div className="w-[100%] h-[30%] flex items-center justify-center md:w-[30%] md:h-[100%] md:flex-col bg-black ">
            <div className="w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-1 border-amber-200 ">
                <img src={frontEndImage2} alt="first pic" className="w-[100%] " />
            </div>
            <div className="w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-1 border-amber-200 ">
                <img src={frontEndImage3} alt="first pic" className="w-[100%] " />
            </div>
        </div>

      </div>
       <div className="w-[95%] flex items-center justify-start text-[18px] md:text-[25px] md:w-[80%] ">
    {`${title.toUpperCase()} ${category.toUpperCase()}, ${landmark.toUpperCase()} `}
        </div>
       <div className="w-[95%] flex items-center justify-start text-[18px] md:text-[25px] md:w-[80%] ">
    {` ${description.toUpperCase()} `}
        </div>
       <div className="w-[95%] flex items-center justify-start text-[18px] md:text-[25px] md:w-[80%] ">
    {`Rs. ${rent}/day `}
        </div>
       <div className="w-[95%] h-[50px] flex items-center justify-start px-[110px] ">
         <button className='px-[50px] py-[10px] bg-red-600 text-white text-[18px] md:px-[100px] rounded-lg ' onClick={handleAddListing} >Add Listing</button>
       </div>
    </div>
  );
};

export default ListingPage3;
