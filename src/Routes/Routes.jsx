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
import AllUsers from "../pages/dashboard/AllUsers";
import AddTest from "../pages/dashboard/AddTest";
import AllTests from "../pages/dashboard/AllTests";
import UpdateTest from "../pages/dashboard/UpdateTest";
import AddBanner from "../pages/dashboard/AddBanner";
import AllBanner from "../pages/dashboard/AllBanner";

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
          path:'/testDetails/:id',
          element:<TestDetails></TestDetails>,
          loader:({params})=>fetch(`http://localhost:5000/allTests/${params.id}`)
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
        },

        //admin only routes
        {
          path:'allUser',
          element:<AllUsers></AllUsers>
        },
        {
          path:'addTest',
          element:<AddTest></AddTest>
        },
        {
          path:'allTest',
          element:<AllTests></AllTests>
        },
        {
          path:'updateTest/:id',
          element:<UpdateTest></UpdateTest>,
          loader:({params})=>fetch(`http://localhost:5000/allTests/${params.id}`)
        },
        {
          path:'addBanner',
          element:<AddBanner></AddBanner>
        },
        {
          path:'allBanner',
          element:<AllBanner></AllBanner>
        }
      ]
    }
  ]);