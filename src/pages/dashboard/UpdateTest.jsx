import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router";
const UpdateTest = () => {
    const navigate =useNavigate()
    const axiosSecure = useAxiosSecure();
    const currentTest = useLoaderData();
    const {register,handleSubmit} = useForm();
    const onSubmit=(data)=>{
       const updatedTest = {
        test_name:data.test_name,
        date:data.date,
        price:data.price,
        slots:data.slots,
        details:data.details,
        image:data.image
    }
    axiosSecure.put(`/allTests/${currentTest._id}`,updatedTest)
    .then(res=>{
        if(res.data.modifiedCount>0){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Test information has been updated!",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/allTest')
        }
    })
    }
    return (
        <div>
            <div className="bg-[#E7D9EA] md:p-10 p-3  mx-auto rounded-xl">
        <h1 className="text-3xl text-center font-bold">Update Test item</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>
                {" "}
                Test Name* <br />
                <input
                 defaultValue={currentTest.test_name}
                  type="text"
                  className="input w-full"
                  {...register("test_name")}
                />
              </label>
            </div>
            <div>
              <label>
                {" "}
                image* <br />
                <input
                  type="test"
                  defaultValue={currentTest.image}
                  className="input w-full"
                  {...register("image")}
                />
              </label>
            </div>
            <div>
              <label>
                {" "}
                Price* <br />
                <input
                  defaultValue={currentTest.price}
                  type="number"
                  className="input w-full"
                  {...register("price")}
                />
              </label>
            </div>
            <div>
              <label>
                Available Slots* <br />
                <input
                 defaultValue={currentTest.slots}
                  type="number"
                  className="input w-full"
                  {...register("slots")}
                />
              </label>
            </div>
            <div>
              <label>
                Date* <br />
                <input
                defaultValue={currentTest.date}
                  type="date"
                  className="input w-full"
                  {...register("date")}
                />
              </label>
            </div>
          </div>

          <div>
            <label>
              Details* <br />
              <input
                defaultValue={currentTest.details}
                type="text"
                className="textarea textarea-lg w-full"
                {...register("details")}
              />
            </label>
          </div>

          <button className="btn btn-block bg-[#19456B] text-white mt-4">
          Update Test
          </button>
        </form>
      </div>
        </div>
    );
};

export default UpdateTest;