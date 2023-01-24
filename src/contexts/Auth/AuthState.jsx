import React, { useState} from "react";
import AuthContext from "./AuthContext"

  const AuthState = ({ children }) => {
   const [accessToken,setAccessToken]=useState(window.localStorage.getItem('accessToken') ? window.localStorage.getItem('accessToken') : "")
   console.log(accessToken,"accessToken")
      window.localStorage.setItem('accessToken', accessToken)
 
        return (
          <AuthContext.Provider value={{accessToken,setAccessToken}}>
            { children }
            </AuthContext.Provider>
        );
    }


export default AuthState;
