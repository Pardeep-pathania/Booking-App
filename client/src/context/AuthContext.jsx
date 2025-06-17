import axios from 'axios';
import React, { createContext, useState } from 'react'

export const authDataContext = createContext()

const AuthContext = ({children}) => {
  axios.defaults.withCredentials = true;

    let serverUrl = 'https://bookly-server-c470.onrender.com/'

    const [loading, setLoading] = useState(false)

    let value = {
        serverUrl,
        loading, setLoading
    }

  return (
    <div>

        <authDataContext.Provider value={value}>
            {children}
        </authDataContext.Provider>
      
    </div>
  )
}

export default AuthContext
