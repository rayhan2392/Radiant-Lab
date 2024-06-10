/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user}= useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await axiosSecure.get("/users");
        return res.data;
      },
    });
  console.log(users)
  const currentUser = users.find(data=>data?.email===user?.email);

   console.log(currentUser)
    console.log(user)
    if(currentUser?.status==='active'){
        return children;
    }
   return <Navigate to='/login' state={{form:location}}  ></Navigate>
};

export default PrivateRoute;