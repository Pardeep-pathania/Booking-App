import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { authDataContext } from './AuthContext'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export const userDataContext = createContext()

const UserContext = ({children}) => {

    let {serverUrl} = useContext(authDataContext);
    const [userData, setUserData] = useState(null);

    const getCurrentUser = async()=>{
        try {

            let result = await axios.get(serverUrl + "/user/currentuser", {withCredentials: true})

            setUserData(result.data)
            
        } catch (error) {
            setUserData(null)
            console.log(error)
        }
    }

    useEffect(()=>{
        getCurrentUser()
    },[])

    let value = {
        userData,
        setUserData,getCurrentUser
    }

  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
