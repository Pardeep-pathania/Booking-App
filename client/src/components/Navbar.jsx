import React, { useContext, useEffect, useState } from "react";

import { IoSearch } from "react-icons/io5";
import { PiPaperPlaneBold } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { MdWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import { userDataContext } from "../context/UserContext";
import { listingDataContext } from "../context/ListingContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate()

  const{serverUrl} = useContext(authDataContext)
  const { userData, setUserData } = useContext(userDataContext);
  const [showpopup, setShowpopup] = useState(false);
  const [cate, setCate] = useState("")
  const [input, setInput] = useState("")
  

  let {listingData,setListingData, newListData, setNewListData, handleSearch,searchData,handleViewCard} = useContext(listingDataContext)

  const handleLogout = async()=>{
    try {

      let result = await axios.post(serverUrl + "api/auth/logout",{},{withCredentials:true})
      setUserData(null)
      console.log(result.data)
      toast.success("Logout Successfully",{
        autoClose:700,
        position:'top-center'
      })
    } catch (error) {
      toast.error(error.response.data.message,{
        autoClose:700,
        position:'top-center'
      })
    }
  }

  const handleClick = (id) => {
    if (userData) {
      handleViewCard(id);
    }
    navigate("/login");
  };


  const handleCategory = (category)=>{
    setCate(category)
    if(category == "trending"){
      setNewListData(listingData)
    }
    else{    setNewListData(listingData.filter((list)=>list.category == category))
    }
  }

  useEffect(()=>{
    handleSearch(input)
  },[input])

  return (
    <div className="fixed top-0 bg-white z-[20] ">
      <div className=" px-8 w-[100vw] min-h-[80px] border-b-[1px] border-[#dcdcdc] flex items-center justify-between ">
        <Link to={'/'} className="flex items-center gap-1 text-[#F5385D]">
          <PiPaperPlaneBold className="text-3xl" />
          <span className="text-2xl font-bold">bookly</span>
        </Link>

        <div className="w-[35%] relative md:block hidden">
          <input
            type="text"
            className="w-[100%] px-[30px] py-[8px] border-[2px] border-[#bdbaba] outline-none overflow-auto rounded-xl text-lg"
            placeholder="Any Where  |  Any Location  | 
           Any City" onChange={(e)=>{setInput(e.target.value)}} value={input}
          />
          <button className="absolute bg-[#F5385D] rounded-full p-2 right-[2%] top-[4px]">
            <IoSearch className="w-[22px] h-[22px] text-white " />
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 ">
          <span className="text-lg cursor-pointer rounded-full hover:bg-[#ded9d9] px-4 py-2"
          onClick={()=>navigate('/listingpage1')}>
            List your home
          </span>
          <button
          onClick={()=>setShowpopup(!showpopup)} className="flex items-center justify-center border-1 border-[#8d8c8c] gap-2 rounded-full hover:shadow-lg px-4 py-2">
            <span>
              <FaBars className="text-lg" />
            </span>
            {userData == null && <span>
              <FaRegUserCircle className="text-lg" />
            </span>}
            {userData && userData.name && (
  <span className="w-[30px] h-[30px] bg-[#080808] text-white rounded-full flex items-center justify-center ">
    {userData.name.slice(0, 1).toUpperCase()}
  </span>
)}
          </button>

         {showpopup && <div className="w-[220px] h-[240px] absolute bg-white top-[12%] right-[5%] border border-gray-300 shadow-lg z-10 rounded-lg p-4">
  <ul className="flex flex-col gap-3 text-gray-700">
    {!userData ? <li onClick={()=>{navigate('/login');
    setShowpopup(false)

    }} className="px-3 py-2 rounded-md cursor-pointer hover:bg-indigo-100 hover:text-indigo-700 transition font-medium">
      Login
    </li>:
    <li
    onClick={()=>{handleLogout();
      setShowpopup(false)
    }} className="px-3 py-2 rounded-md cursor-pointer hover:bg-indigo-100 hover:text-indigo-700 transition font-medium">
      Logout
    </li>}
    <li className="px-3 py-2 rounded-md cursor-pointer hover:bg-indigo-100 hover:text-indigo-700 transition font-medium" onClick={()=>{navigate('/listingpage1');
      setShowpopup(false)
    }}>
      List your home
    </li>
    <li className="px-3 py-2 rounded-md cursor-pointer hover:bg-indigo-100 hover:text-indigo-700 transition font-medium"  onClick={()=>{navigate('/mylisting');
      setShowpopup(false)
    }} >
      My Listing
    </li>
    <li className="px-3 py-2 rounded-md cursor-pointer hover:bg-indigo-100 hover:text-indigo-700 transition font-medium" onClick={()=>{navigate('/mybooking');
      setShowpopup(false)
    }} >
      Check Booking
    </li>
  </ul>
</div>
}
        </div>

 {searchData?.length>0 && <div className="w-[100vw] h-[450px] flex flex-col gap-5 absolute top-[40%] bg-white overflow-auto left-0 justify-start items-center ">
  <div className="max-w-[700px] w-[100vw] h-[300px] overflow-hidden flex flex-col bg-[##fefdfd] p-5 rounded-lg border-1 border-slate-400 cursor-pointer ">
{
  searchData.map((search)=>(
    <div className="border-b border-black p-2" onClick={()=>handleClick(search._id)} key={search._id}>
      {search.title} in {search.landmark}, {search.city}
    </div>
  ))
}

  </div>
  </div>}


      </div>

      <div className="w-[100%] relative md:hidden block">
          <input
            type="text"
            className="w-[100%] px-[30px] py-[8px] border-[2px] border-[#bdbaba] outline-none overflow-auto rounded-xl text-lg"
            placeholder="Any Where  |  Any Location  | 
           Any City"
          />
          <button className="absolute bg-[#F5385D] rounded-full p-2 right-[2%] top-[4px]">
            <IoSearch className="w-[22px] h-[22px] text-white " />
          </button>
        </div>

      <div className="w-[100vw] h-[85px] bg-white flex items-center justify-start md:justify-center px-[15px] cursor-pointer gap-6 overflow-auto">
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-md text-nowrap" onClick={()=>{handleCategory("trending"); setCate("")}}>
          <MdWhatshot className="w-6 h-6 text-black" />
          <h3>Trending</h3>
        </div>

        <div className= {`flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-md text-nowrap ${cate =="vila"?"border-b-1":""}`} onClick={()=>handleCategory("villa")}>
          <GiFamilyHouse className="w-6 h-6 text-black" />
          <h3>Villa</h3>
        </div>
        <div className= {`flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-md text-nowrap ${cate =="rooms"?"border-b-1":""}`} onClick={()=>handleCategory("rooms")}>
          <MdBedroomParent className="w-6 h-6 text-black" />
          <h3>Rooms</h3>
        </div>
        <div className= {`flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-md text-nowrap ${cate =="poolhouse"?"border-b-1":""}`} onClick={()=>handleCategory("poolhouse")}>
          <MdOutlinePool className="w-6 h-6 text-black" />
          <h3>Pool House</h3>
        </div>
        <div className= {`flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-md text-nowrap ${cate =="cabins"?"border-b-1":""}`} onClick={()=>handleCategory("cabins")}>
          <GiWoodCabin  className="w-6 h-6 text-black" />
          <h3>Cabins</h3>
        </div>
        <div className= {`flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-md text-nowrap ${cate =="shops"?"border-b-1":""}`} onClick={()=>handleCategory("shops")}>
          <SiHomeassistantcommunitystore  className="w-6 h-6 text-black" />
          <h3>Shops</h3>
        </div>
        <div className= {`flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-md text-nowrap ${cate =="pg"?"border-b-1":""}`} onClick={()=>handleCategory("pg")}>
          <IoBedOutline  className="w-6 h-6 text-black" />
          <h3>PG</h3>
        </div>
        <div className= {`flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-md text-nowrap ${cate =="farmhouse"?"border-b-1":""}`} onClick={()=>handleCategory("farmhouse")}>
          <FaTreeCity  className="w-6 h-6 text-black" />
          <h3>Farm House</h3>
        </div>
        <div className= {`flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-md text-nowrap ${cate =="flat"?"border-b-1":""}`} onClick={()=>handleCategory("flat")}>
          <BiBuildingHouse  className="w-6 h-6 text-black" />
          <h3>Flat</h3>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
