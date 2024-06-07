import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const AllTest = () => {
  const axiosPublic = useAxiosPublic();
  const {data:tests=[],isPending,refetch}=useQuery({
    queryKey:['tests'],
    queryFn:async()=>{
     const res =await axiosPublic.get('/allTests')
     return res.data;
     
    }
  })
  refetch();

 if(isPending){
  return <div><span className="loading loading-spinner loading-lg"></span></div>
 }

  
  
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

     {
      tests.map(test=> <div key={test._id} className="md:p-5 p-2 rounded-xl bg-[#6A8CAF] ">
      <div>
        <img className="rounded-xl w-[300px] h-[200px] " src={test.image} alt="" />
      </div>
      <div className="text-[#E7D9EA]">
        <h1 className="font-bold text-2xl text-center">{test.name} </h1>
        <p> <span className="font-bold text-xl">Slots</span>: <span className="text-white text-xl"> {test.slots} </span> </p>
        <p><span className="font-bold text-xl ">Date</span> : <span className="text-white text-xl"> {test.date} </span></p>
        {/* <p>
          A comprehensive test to analyze the components of your
          blood and detect various disorders.{" "}
        </p> */}
       <Link to={`/testDetails/${test._id}`}>
       <button className="btn mt-3 text-xl w-full">Details</button>
       </Link>
      </div>
    </div>)
     }
    </div>
  );
};

export default AllTest;
