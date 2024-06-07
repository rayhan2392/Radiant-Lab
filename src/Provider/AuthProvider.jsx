/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
// create a new user
const createUser = (email,password)=>{
    
   return createUserWithEmailAndPassword(auth,email,password);
}
//log in an existing user
const logInUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
//log out and user
const logOutUser = ()=>{
    return signOut(auth);
}

 //track current users state
 useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
       setUser(currentUser)
       setLoading(false)
    })
   return() =>{
      return unSubscribe();
   }
    
},[]);

  const AuthInfo ={
  createUser,
  logInUser,
  logOutUser,
  user,
  loading
  }  
return(
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
);
};

export default AuthProvider;