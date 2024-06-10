/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({children}) => {
    const location = useLocation();
   const [isAdmin]=useAdmin();
   const {user}=useAuth();
   console.log(isAdmin,user)
   if(isAdmin && user ){
    return children;
   }
   return <Navigate to='/' state={{form:location}} > </Navigate>
};

export default AdminRoute;