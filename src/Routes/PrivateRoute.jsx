/* eslint-disable react/prop-types */
import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const user= useAuth();
    if(user){
        return <div> {children} </div>
    }
   return <Navigate to='/login' ></Navigate>
};

export default PrivateRoute;