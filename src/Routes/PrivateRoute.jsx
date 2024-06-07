/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const user= useAuth();
    if(user){
        return <div> {children} </div>
    }
   return <Navigate to='/login'  state={location.pathname || '/'} ></Navigate>
};

export default PrivateRoute;