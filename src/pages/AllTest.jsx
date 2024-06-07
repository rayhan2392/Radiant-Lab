import { useQuery } from "@tanstack/react-query";
import img1 from "../assets/images/BloodCount.jpg";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllTest = () => {
  const [allTests,setAllTests]=useState([]);
  const axiosPublic = useAxiosPublic();
  const {data:tests=[],isPending,refetch}=useQuery({
    queryKey:['tests'],
    queryFn:async()=>{
     const res = axiosPublic.get('/allTests')
     return res.data;
     
    }
  })

  console.log(tests)

  useEffect(()=>{
    axiosPublic.get('/allTests')
    .then(res=>{
      setAllTests(res.data)
    })
  },[axiosPublic])
  console.log(allTests)
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

     {
      allTests.map(test=> <div key={test._id} className="md:p-5 p-2 rounded-xl bg-[#6A8CAF] ">
      <div>
        <img className="rounded-xl w-[300px] h-[200px] " src={test.image} alt="" />
      </div>
      <div className="text-[#E7D9EA]">
        <h1 className="font-bold text-2xl text-center">Complete Blood Count (CBC)</h1>
        <p> <span className="font-bold text-xl">Slots</span>: <span className="text-white text-xl">30</span> </p>
        <p><span className="font-bold text-xl ">Date</span> : <span className="text-white text-xl">24-11-2024</span></p>
        <p>
          A comprehensive test to analyze the components of your
          blood and detect various disorders.{" "}
        </p>
       <Link to='/testDetails'>
       <button className="btn mt-3 text-xl w-full">Details</button>
       </Link>
      </div>
    </div>)
     }
    </div>
  );
};

export default AllTest;
