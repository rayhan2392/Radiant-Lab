import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const UpcomingAppointments = () => {
    const {user}=useAuth()
    const axiosSecure = useAxiosSecure();
    const {data:bookings=[],refetch}=useQuery({
        queryKey:['bookings'],
        queryFn:async()=>{
          const res= await  axiosSecure.get('bookings')
          return res.data;
        }
    })
  const myBookings = bookings.filter(data=>data.email===user.email)

  const handleCancelBooking=(booking)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You want to cancel your Appointment",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,cancel!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`bookings/${booking._id}`)
            .then(res=>{
                if(res.data.deletedCount>0){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your appointment has been cancelled",
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
    <div>
      <div className="overflow-x-auto">
        <h1 className="text-3xl font-bold text-center">Upcoming Appointments {myBookings.length} </h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
            myBookings.map(booking=> <tr key={booking._id} className="bg-base-200">
                <th> {booking.name} </th>
                <td> {booking.date} </td>
                <td>
                    <button onClick={()=>handleCancelBooking(booking)} className="btn bg-red-700 text-white">Cancel</button>
                </td>
              </tr>)
           }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
