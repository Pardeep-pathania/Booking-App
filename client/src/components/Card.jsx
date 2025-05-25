import React, { useContext } from "react";
import {FaStar} from "react-icons/fa";
import { userDataContext } from "../context/UserContext";
import { listingDataContext } from "../context/ListingContext";
import { useNavigate } from "react-router-dom";

const Card = ({ title, landmark, image1, image2, image3, rent, city, id,ratings }) => {
  const navigate = useNavigate();
  let { userData } = useContext(userDataContext);
  let { handleViewCard } = useContext(listingDataContext);

  const handleClick = () => {
    if (userData) {
      handleViewCard(id);
    }
    navigate("/login");
  };

  return (
    <div
      className="w-[330px] max-w-[85%] h-[460px] flex items-start justify-start flex-col rounded-lg cursor-pointer"
      onClick={handleClick}
    >
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
