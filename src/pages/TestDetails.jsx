import { useLoaderData } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Payment from "./dashboard/Payment/Payment";

const TestDetails = () => {
  const { user } = useAuth();
  const test = useLoaderData();
  const axiosSecure = useAxiosSecure();

  const handleBookTest = () => {
    const testInfo = {
      name: test.test_name,
      date: test.date,
      details: test.details,
      status: "pending",
      image: test.image,
      price: test.price,
      email: user.email,
    };
    console.log(testInfo);
    //post booking data to the server
    axiosSecure
      .post("/bookings", testInfo)
      .then((res) => console.log(res.data));
  };
  console.log(test);
  return (
    <div className="md:flex justify-evenly items-center mt-8 bg-[#6A8CAF] md:p-12">
      <div className="flex-1">
        <img className=" w-[400px] rounded-xl" src={test.image} alt="" />
      </div>
      <div className="text-white space-y-5 flex-1">
        <h1 className="text-3xl font-bold"> {test.test_name} </h1>
        <p className="text-2xl font-bold ">Date : {test.date} </p>
        <p className="text-2xl font-bold ">Price : ${test.price} </p>
        <p className="text-xl font-bold">Available Slots : {test.slots} </p>
        <p className="text-xl"> {test.details} </p>
        {/* <Link to='/dashboard/payment'>
                   <button onClick={handleBookTest} className="btn btn-block">Book Now</button>
                </Link> */}
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
         Book Now
        </button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box h-1/2 w-8/12 max-w-5xl">
              <Payment test={test} ></Payment>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default TestDetails;
