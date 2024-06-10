import { useLoaderData, useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SubmitTest = () => {
    const axiosSecure = useAxiosSecure();
    const test = useLoaderData();
    const navigate = useNavigate()
    const handleSubmitTest=(e)=>{
        e.preventDefault();
        const reportInfo={
            report:e.target.report.value,
            status:'delivered'
        }
        axiosSecure.patch(`/bookings/${test._id}`,reportInfo)
        .then(res=>{
            if(res.data.modifiedCount>0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Test report successfully submitted",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/dashboard/reservation');
            }
        })

         console.log(reportInfo)
    }
  return (
    <div className="mt:10 md:mt-20">
      <div className="bg-[#E7D9EA] md:p-10 p-3  mx-auto rounded-xl">
        <h1 className="text-2xl text-center font-bold">
          Submit essentials docs here{" "}
        </h1>
        <form onSubmit={handleSubmitTest}>
          <label>Test result Doc*
          <input
            type="text"
            name="report"
            placeholder="Paste your doc link here"
            className="input input-bordered w-full "
          />
          </label>
          <input className="btn btn-block mt-4 bg-[#19456B] text-white" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SubmitTest;
