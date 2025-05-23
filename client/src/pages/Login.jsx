import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { authDataContext } from '../context/AuthContext'

const Login = () => {

const navigate = useNavigate()
const {serverUrl} = useContext(authDataContext)

      const [formdata, setFormdata] = useState({
        email: '',
        password: ''    
    })

    function handleSubmit(e){
        e.preventDefault()
        axios.post( serverUrl + "/users/login", formdata)
        .then((res)=>{
            alert("User Logged In successfully")
            console.log(res.data)
            navigate('/')
        })
        .catch((err)=>{
            alert(err.response.data)
            console.log(err)
        })
    }

  return (

    
   
      <div className='max-h-screen flex-grow flex items-center mt-2 justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4'>
        
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
              className='bg-purple-600 text-white font-semibold py-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition'
            >
              Login
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
