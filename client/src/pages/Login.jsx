import React, { useContext, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { authDataContext } from '../context/AuthContext'
import { userDataContext } from '../context/UserContext'

const Login = () => {

const navigate = useNavigate()
const {serverUrl} = useContext(authDataContext)
const {userData, setUserData}= useContext(userDataContext)
      const [formdata, setFormdata] = useState({
        email: '',
        password: ''    
    })

    let {loading, setLoading} = useContext(authDataContext)

    async function handleSubmit(e){

      setLoading(true)
      try {

        e.preventDefault()
       let result = await axios.post( serverUrl + "/auth/login", formdata,{withCredentials:true})

       setUserData(result.data)

         alert("User Logged In successfully")
         setLoading(false)
            console.log(result.data)
            navigate('/')
        
      } catch (error) {
        alert(error.response)
        setLoading(false)
            console.log(error)
      }
    }

  return (

    
   
      <div className='max-h-screen h-screen flex-grow flex items-center mt-2 justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 overflow-hidden'>
         <div className='w-[50px] h-[50px] cursor-pointer bg-red-600 absolute top-[10%] left-[20px] rounded-full flex items-center justify-center'
                onClick={()=>navigate('/')}><FaArrowLeft /></div>
        
        <div className='bg-white rounded-lg shadow-lg w-full max-w-md p-8'>
          <h1 className='text-4xl font-bold text-center text-gray-800 mb-8'>Login</h1>
          <form
            onSubmit={handleSubmit}
           className='flex flex-col gap-6'>
            <input
              type="email"
              value={formdata.email}
              onChange={((e)=>setFormdata({...formdata, email:e.target.value}))}
              placeholder='your@gmail.com'
              className='px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition'
            />
            <input
              type="password"
              value={formdata.password}
              onChange={((e)=>setFormdata({...formdata, password:e.target.value}))}
              placeholder='password'
              className='px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition'
            />
            <button
              type="submit"
              className='bg-purple-600 text-white font-semibold py-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition' disabled = {loading}
            >
              {loading?"Submitting":"Login"}
            </button>
            <div className='text-center py-1 text-gray-500'>
                Dont have an account? <Link to={'/register'} className='text-purple-600 hover:underline'>Register</Link>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Login
