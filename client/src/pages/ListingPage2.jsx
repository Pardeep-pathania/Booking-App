import React from 'react'
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

const ListingPage2 = () => {

const navigate = useNavigate()

  return (
  
         
         <div className="w-[100%] h-[100vh] bg-white flex items-center justify-center relative overflow-auto">
           
           
               <div
           className="w-[50px] h-[50px] cursor-pointer bg-red-600 absolute top-[5%] left-[20px] rounded-full flex items-center justify-center"
           onClick={() => navigate('/')}
         >
           <FaArrowLeft className="text-white" />
         </div>
         <div className='w-[200px] h-[50px] cursor-pointer bg-red-600 absolute top-[5%] right-[10px] rounded-2xl flex items-center justify-center'>
           Setup your Category
         </div>

    <div className='max-w-[900px] w-[100%] h-[550px] flex flex-col justify-start items-center gap-[40px] overflow-auto bg-white mt-[30px] '>
         <h1 className='text-[18px] text-black md:text-[30px] '> Which of these best describes your place?</h1>

         <div className='max-w-[900px] w-[100%] h-[100%] flex flex-wrap items-center justify-center gap-[15px] md:w-[70%] '>

            <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[1px] border-slate-300 hover:border-slate-600 text-lg rounded-lg '>
                <GiFamilyHouse className='w-[30px] h-[30px] text-black  '/> 
                <h3>Villa</h3>
            </div>

            <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[1px] border-slate-300 hover:border-slate-600 text-lg rounded-lg '>
                <GiFamilyHouse className='w-[30px] h-[30px] text-black  '/> 
                <h3>Villa</h3>
            </div>

            <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[1px] border-slate-300 hover:border-slate-600 text-lg rounded-lg '>
                <GiFamilyHouse className='w-[30px] h-[30px] text-black  '/> 
                <h3>Villa</h3>
            </div>

            <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[1px] border-slate-300 hover:border-slate-600 text-lg rounded-lg '>
                <GiFamilyHouse className='w-[30px] h-[30px] text-black  '/> 
                <h3>Villa</h3>
            </div>

            <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[1px] border-slate-300 hover:border-slate-600 text-lg rounded-lg '>
                <GiFamilyHouse className='w-[30px] h-[30px] text-black  '/> 
                <h3>Villa</h3>
            </div>

            <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[1px] border-slate-300 hover:border-slate-600 text-lg rounded-lg '>
                <GiFamilyHouse className='w-[30px] h-[30px] text-black  '/> 
                <h3>Villa</h3>
            </div>

            <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[1px] border-slate-300 hover:border-slate-600 text-lg rounded-lg '>
                <GiFamilyHouse className='w-[30px] h-[30px] text-black  '/> 
                <h3>Villa</h3>
            </div>

            <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[1px] border-slate-300 hover:border-slate-600 text-lg rounded-lg '>
                <GiFamilyHouse className='w-[30px] h-[30px] text-black  '/> 
                <h3>Villa</h3>
            </div>

            <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[1px] border-slate-300 hover:border-slate-600 text-lg rounded-lg '>
                <GiFamilyHouse className='w-[30px] h-[30px] text-black  '/> 
                <h3>Villa</h3>
            </div>

            <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[1px] border-slate-300 hover:border-slate-600 text-lg rounded-lg '>
                <GiFamilyHouse className='w-[30px] h-[30px] text-black  '/> 
                <h3>Villa</h3>
            </div>

         </div>
            </div>  
        
         </div>    
      
  )
}

export default ListingPage2
