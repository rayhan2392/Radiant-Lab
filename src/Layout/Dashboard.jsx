import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true
    return (
        <div className="flex">
            <div className="md:w-64 w-10 bg-[#80B9AD] min-h-screen p-6">
                <h1 className="font-bold text-3xl">Radiant Lab</h1>

                {/*this portion will be executed if the users rule is admin  */}
               {
                isAdmin?
                <>
                <ul className="menu space-y-2">
                   <li>
                     <NavLink to='/dashboard/allUser' > All users </NavLink>
                   </li>
                   <li>
                     <NavLink to='/dashboard/addTest' > Add New Test </NavLink>
                   </li>
                   <li>
                     <NavLink to='/dashboard/allTest' > All Tests </NavLink>
                   </li>
                   <li>
                     <NavLink to='/dashboard/addBanner' > Add Banner </NavLink>
                   </li>
                   <li>
                     <NavLink to='/dashboard/allBanner' > All Banner </NavLink>
                   </li>
                </ul>
                </>:
                <>
                 <ul className="menu space-y-5">
                  <li>
                    <NavLink to='/dashboard/userHome'> User Home </NavLink>
                  </li>
                  <li>
                    <NavLink to='/dashboard/userProfile' > My Profile </NavLink>
                  </li>
                  <li>
                    <NavLink to='/dashboard/upcomingAppointments' > Upcoming Appointments </NavLink>
                  </li>
                  <li>
                    <NavLink> Test Results </NavLink>
                  </li>
                </ul>
                </>
               }



                {/* Have access both user and admin */}
                <hr />
                <ul className="menu space-y-5">
                  <NavLink className='text-xl font-bold' to='/'>Home</NavLink>
                </ul>
            </div>
           <div className="flex-1 ml-10 p-8">
             <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Dashboard;