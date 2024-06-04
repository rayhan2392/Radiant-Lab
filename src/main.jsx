import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider";
// import {
//   QueryClient,
//   QueryClientProvider
// } from "@tanstack/react-query";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-screen-lg mx-auto">
    <React.StrictMode>
      <AuthProvider>
        
         <RouterProvider router={router} />
       
      </AuthProvider>
    </React.StrictMode>
  </div>
);
