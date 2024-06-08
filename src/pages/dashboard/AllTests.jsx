import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AiFillDelete } from "react-icons/ai";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllTests = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
  const {data:tests=[],isPending,refetch}=useQuery({
    queryKey:['tests'],
    queryFn:async()=>{
     const res =await axiosPublic.get('/allTests')
     return res.data;
     
    }
  })

  if(isPending){
    return(
        <div><span className="loading loading-spinner loading-lg"></span></div>
    )
  }

  const handleDeleteTest = (test)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You want to delete?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/allTests/${test._id}`)
            .then(res=>{
                if(res.data.deletedCount>0){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Test deleted successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                refetch();
                }
               
            })
        }
      });
   
  }
 
  return (
    <div className="mt-5">
      <h1 className="text-3xl text-center font-bold">All Tests: {tests.length} </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Slots</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
            tests.map(test=> <tr key={test._id}>
                <th>{test.test_name} </th>
                <td className="text-xl font-bold">{test.slots} </td>
                <td>
                   <Link to={`/dashboard/updateTest/${test._id}`}>
                     <button className="btn  bg-[#80B9AD] text-white"> Update</button>
                   </Link>
                </td>
                <td>
                   <button onClick={()=>handleDeleteTest(test)} className="btn"> <AiFillDelete className="text-xl text-red-500"></AiFillDelete> </button>
                </td>
              </tr>)
           }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTests;
