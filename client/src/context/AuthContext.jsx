import React, { createContext, useState } from 'react'

export const authDataContext = createContext()

const AuthContext = ({children}) => {

    let serverUrl = "http://localhost:5000/api"

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
