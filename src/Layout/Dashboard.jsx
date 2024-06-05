import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="md:w-64 w-10 bg-[#80B9AD] min-h-screen p-6">
                <h1 className="font-bold text-3xl">Radiant Lab</h1>
                {/*this portion will be executed if the user is regular  */}
                <ul className="menu space-y-5">
                  <li>
                    <NavLink to='/dashboard/userHome'> User Home </NavLink>
                  </li>
                  <li>
                    <NavLink> My Profile </NavLink>
                  </li>
                  <li>
                    <NavLink> Upcoming Appointments </NavLink>
                  </li>
                  <li>
                    <NavLink> Test Results </NavLink>
                  </li>
                </ul>
            </div>
           <div className="flex-1 ml-10 p-8">
             <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Dashboard;