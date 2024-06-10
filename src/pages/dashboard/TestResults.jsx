/* eslint-disable react/no-unknown-property */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const TestResults = () => {
    const {user}=useAuth()
    const axiosSecure = useAxiosSecure();
    const {data:bookings=[]}=useQuery({
        queryKey:['bookings'],
        queryFn:async()=>{
          const res= await  axiosSecure.get('bookings')
          return res.data;
        }
    })
  const myBookings = bookings.filter(data=>data?.email===user?.email && data?.status==='delivered')

  return (
    <div>
      <h1 className="text-3xl">This is test result section</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Report</th>
              <th>Download</th>
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                myBookings.map(booking=><tr key={booking._id}>
                    <th> {booking.name} </th>
                    <td>
                      <a target="blank" href={`${booking.report}`}>View report</a>
                    </td>
                    <td>Download</td>
                  </tr>)
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestResults;
