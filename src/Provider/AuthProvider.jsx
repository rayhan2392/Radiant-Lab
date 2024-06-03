/* eslint-disable react/prop-types */
import { createContext } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
// create a new user


  const AuthInfo ={

  }  
return(
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
);
};

export default AuthProvider;