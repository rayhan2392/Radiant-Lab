import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const image_hosting_api =`https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddTest = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
  const {register,handleSubmit} = useForm();
  const onSubmit = (data) => {
    //send image to img bb
    const imageFile = {image:data.image[0]}
    axiosPublic.post(image_hosting_api,imageFile,{
        headers:{
            'content-type':'multipart/form-data'
        }
    })
    .then(res=>{
        if(res.data.success){
            const newTest = {
                test_name:data.test_name,
                date:data.date,
                price:data.price,
                slots:data.slots,
                details:data.details,
                image:res.data.data.display_url
            }
             axiosSecure.post('/allTests',newTest)
             .then(res=>{
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "New test has been added successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
             })
        }
    })
    

    

}
  return (
    <div>
      <div className="bg-[#E7D9EA] md:p-10 p-3  mx-auto rounded-xl">
        <h1 className="text-3xl text-center font-bold">Add a Test item</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>
                {" "}
                Test Name* <br />
                <input
                  placeholder="Test Name"
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
                  type="file"
                  className="file-input w-full"
                  {...register("image")}
                />
              </label>
            </div>
            <div>
              <label>
                {" "}
                Price* <br />
                <input
                  placeholder="price"
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
                  placeholder="available slots"
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
                placeholder="details"
                type="text"
                className="textarea textarea-lg w-full"
                {...register("details")}
              />
            </label>
          </div>

          <button className="btn btn-block bg-[#19456B] text-white mt-4">
           Add Test
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTest;
