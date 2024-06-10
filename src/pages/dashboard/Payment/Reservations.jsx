import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Reservations = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const axiosSecure = useAxiosSecure();
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get("bookings");
      return res.data;
    },
  });
  const test1 = bookings.filter(
    (data) => data.name === "Thyroid Function Test"
  );
  const test2 = bookings.filter((data) => data.name === "Complete Blood Count (CBC)" && data.status==='pending');

  const handleCancelReservation = (data) => {
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
            axiosSecure.delete(`bookings/${data._id}`)
            .then(res=>{
                if(res.data.deletedCount>0){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Reservation has been cancelled",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    refetch();
                }
               
            })
        
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">All reservations</h1>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Thyroid Function Test</Tab>
          <Tab>Complete Blood Count (CBC)</Tab>
        </TabList>

        <TabPanel>
          <h1 className="text-xl text-center font-bold">
            Total reservation under this category {test1.length}{" "}
          </h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Cancel</th>
                  <th>Submit result</th>
                </tr>
              </thead>
              <tbody>
                {test1.map((test) => (
                  <tr key={test._key}>
                    <th> {test.email} </th>
                    <td>{test.date} </td>
                    <td>
                      <button
                        onClick={() => handleCancelReservation(test)}
                        className="btn  bg-red-700 text-white"
                      >
                        Cancel
                      </button>
                    </td>
                   <Link to={`/dashboard/submitTest/${test._id}`}>
                      <td>
                        <button className="btn ">Submit test</button>
                      </td>
                   </Link>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          <h1 className="text-xl text-center font-bold"> Total reservation under this category {test2.length} </h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Cancel</th>
                  <th>Submit result</th>
                </tr>
              </thead>
              <tbody>
                {test2.map((test) => (
                  <tr key={test._key}>
                    <th> {test.email} </th>
                    <td>{test.date} </td>
                    <td>
                      <button
                        onClick={() => handleCancelReservation(test)}
                        className="btn  bg-red-700 text-white"
                      >
                        Cancel
                      </button>
                    </td>
                    <Link to={`/dashboard/submitTest/${test._id}`}>
                      <td>
                        <button className="btn ">Submit test</button>
                      </td>
                   </Link>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Reservations;
