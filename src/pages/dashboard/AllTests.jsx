import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AiFillDelete } from "react-icons/ai";

const AllTests = () => {
    const axiosPublic = useAxiosPublic();
  const {data:tests=[],isPending}=useQuery({
    queryKey:['tests'],
    queryFn:async()=>{
     const res =await axiosPublic.get('/allTests')
     return res.data;
     
    }
  })
 
  return (
    <div>
      <h1 className="text-3xl text-center">All Tests</h1>
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
                <td>{test.slots} </td>
                <td>
                   <button className="btn  bg-[#80B9AD] text-white"> Update</button>
                </td>
                <td>
                   <button className="btn "> <AiFillDelete className="text-xl text-red-500"></AiFillDelete> </button>
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
