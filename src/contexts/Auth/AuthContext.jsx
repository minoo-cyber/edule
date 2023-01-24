import { createContext } from 'react'

const AuthContext = createContext({
  setAccessToken: () => null ,
  accessToken:undefined,

})

export default AuthContext;

