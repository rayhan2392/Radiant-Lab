import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllTest from "../pages/AllTest";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../pages/dashboard/UserHome";
import MyProfile from "../pages/dashboard/MyProfile";
import PrivateRoute from "./PrivateRoute";
import TestDetails from "../pages/TestDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/allTests',
            element:<AllTest></AllTest>
        },
        {
          path:'/testDetails',
          element:<TestDetails></TestDetails>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        //user routes
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'userProfile',
          element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
          loader:()=>fetch('http://localhost:5000/users')
        }
      ]
    }
  ]);