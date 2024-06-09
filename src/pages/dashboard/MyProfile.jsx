import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router";

const MyProfile = () => {       
  const {user}=useAuth();
  const users = useLoaderData();
  
 const currentUser = users.find(data=>data.email===user.email);
   
  return (
    <div className=" ">
      <h1 className="text-3xl font-bold text-center ">
        Welcome <span className="text-pink-600"></span>
      </h1>
    <div className="bg-[#59B4C3] p-4 md:p-8 md:w-2/3 mx-auto md:mt-10 rounded-xl">
          <div className="md:flex items-center  justify-between ">
        <img
          className="h-[100px] w-[100px] rounded-full"
          src="https://i.ibb.co/zZChys7/empty-Profile.png"
          alt=""
        />
        <h1 className="text-2xl font-bold"> {currentUser.name} </h1>
      </div>
      <div className="grid grid-cols-1 mt-5 space-y-4">
        <h1 className="text-xl font-bold">District: {currentUser.district} </h1>
        <h1 className="text-xl font-bold">Upazilla: {currentUser.upazilla} </h1>
        <h1 className="text-xl font-bold">Blood Group: {currentUser.bloodGroup} </h1>
        <h1 className="text-xl font-bold">Email: {currentUser.email} </h1>
        <button className="btn bg-[#0C356A] border-none text-white">Edit</button>
      </div>
    </div>
    </div>
  );
};

export default MyProfile;
