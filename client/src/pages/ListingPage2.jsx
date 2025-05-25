import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { MdWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import { listingDataContext } from '../context/ListingContext';

const ListingPage2 = () => {

const navigate = useNavigate()

let {category, setCategory} = useContext(listingDataContext)

  return (
  
         
         <div className="w-[100%] h-[100vh] bg-white flex items-center justify-center relative overflow-auto">
           
           
               <div
           className="w-[50px] h-[50px] cursor-pointer bg-red-600 absolute top-[5%] left-[20px] rounded-full flex items-center justify-center"
           onClick={() => navigate('/listingpage1')}
         >
           <FaArrowLeft className="text-white" />
         </div>
         <div className='w-[200px] h-[50px] cursor-pointer bg-red-600 absolute top-[5%] right-[10px] rounded-2xl flex items-center justify-center '>
           Setup your Category
         </div>

    <div className='max-w-[900px] w-[100%] h-[550px] flex flex-col justify-start items-center gap-[40px] overflow-auto bg-white mt-[30px] '>
         <h1 className='text-[18px] text-black md:text-[30px] px-2 mt-6'> Which of these best describes your place?</h1>

         <div className='max-w-[900px] w-[100%] h-[100%] flex flex-wrap items-center justify-center gap-[15px] md:w-[70%] md:h-[70%]'>

            <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[1px] border-slate-300 hover:border-slate-600 text-lg rounded-lg ${category == "villa" ? "border-4 border-slate-700 shadow-md":""}`} onClick={()=>setCategory("villa")}>
                <GiFamilyHouse className='w-[30px] h-[30px] text-black  '/> 
                <h3>Villa</h3>
            </div>

            <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[1px] border-slate-300 hover:border-slate-600 text-lg rounded-lg ${category == "farmhouse" ? "border-4 border-slate-700 shadow-md":""}`} onClick={()=>setCategory("farmhouse")}>
                <FaTreeCity className='w-[30px] h-[30px] text-black  '/> 
                <h3>Farm House</h3>
            </div>

            <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[1px] border-slate-300 hover:border-slate-600 text-lg rounded-lg ${category == "poolhouse" ? "border-4 border-slate-700 shadow-md":""}`} onClick={()=>setCategory('poolhouse')}>
                <MdOutlinePool className='w-[30px] h-[30px] text-black  '/> 
                <h3>Pool House</h3>
            </div>

            <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[1px] border-slate-300 hover:border-slate-600 text-lg rounded-lg ${category == "rooms" ? "border-4 border-slate-700 shadow-md":""}`}  onClick={()=>setCategory('rooms')}>
                <MdBedroomParent className='w-[30px] h-[30px] text-black  '/> 
                <h3>Rooms</h3>
            </div>

            <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[1px] border-slate-300 hover:border-slate-600 text-lg rounded-lg ${category == "flat" ? "border-4 border-slate-700 shadow-md":""}`}  onClick={()=>setCategory('flat')}>
                <BiBuildingHouse className='w-[30px] h-[30px] text-black  '/> 
                <h3>Flat</h3>
            </div> 

            <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[1px] border-slate-300 hover:border-slate-600 text-lg rounded-lg ${category == "pg" ? "border-4 border-slate-700 shadow-md":""}`}  onClick={()=>setCategory('pg')}>
                <IoBedOutline className='w-[30px] h-[30px] text-black  '/> 
                <h3>PG</h3>
            </div>

            <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[1px] border-slate-300 hover:border-slate-600 text-lg rounded-lg ${category == "cabin" ? "border-4 border-slate-700 shadow-md":""}`}  onClick={()=>setCategory('cabin')}>
                <GiWoodCabin className='w-[30px] h-[30px] text-black  '/> 
                <h3>Cabin</h3>
            </div>

            <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[1px] border-slate-300 hover:border-slate-600 text-lg rounded-lg ${category == "shops" ? "border-4 border-slate-700 shadow-md":""}`}  onClick={()=>setCategory('shops')}>
                <SiHomeassistantcommunitystore className='w-[30px] h-[30px] text-black  '/> 
                <h3>Shops</h3>
            </div>

         </div>
         <button className='px-[50px] py-[10px] bg-red-600 text-white text-[18px] md:px-[100px] rounded-lg absolute right-[10%] bottom-[4%] ' disabled = {!category} onClick={()=> navigate('/listingpage3')}>Next</button>
            </div>  
        
         </div>    
      
  )
}

export default ListingPage2
