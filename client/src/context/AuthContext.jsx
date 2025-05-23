import React, { createContext } from 'react'

export const authDataContext = createContext()

const AuthContext = ({children}) => {

    let serverUrl = "http://localhost:5000/api"

    let value = {
        serverUrl
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
