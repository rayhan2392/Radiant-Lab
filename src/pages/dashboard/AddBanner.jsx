import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddBanner = () => {
    const navigate = useNavigate();
    const axiosSecure =useAxiosSecure();
    const {register,handleSubmit} = useForm();
    const onSubmit=(data)=>{
        const bannerInfo ={
            name:data.name,
            image:data.image,
            title:data.title,
            description:data.description,
            coupon:data.coupon,
            rate:data.rate,
            isActive:false
        }
       axiosSecure.post('/banners',bannerInfo)
       .then(res=>{
        if(res.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Banner has been added successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/allBanner')
        }
       })
    }
    return (
        <div>
        <div className="bg-[#E7D9EA] md:p-10 p-3  mx-auto rounded-xl">
          <h1 className="text-3xl text-center font-bold">Add a Banner</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label>
                  {" "}
                  Name* <br />
                  <input
                    placeholder="Name"
                    type="text"
                    className="input w-full"
                    {...register("name")}
                  />
                </label>
              </div>
              <div>
                <label>
                  {" "}
                  Image URL* <br />
                  <input
                    type="text"
                    placeholder="image url"
                    className="input w-full"
                    {...register("image")}
                  />
                </label>
              </div>
              <div>
                <label>
                  {" "}
                  Title* <br />
                  <input
                    placeholder="title"
                    type="text"
                    className="input w-full"
                    {...register("title")}
                  />
                </label>
              </div>
              <div>
                <label>
                 Description* <br />
                  <input
                    placeholder="description"
                    type="text"
                    className="input w-full"
                    {...register("description")}
                  />
                </label>
              </div>
              <div>
                <label>
                 Coupon Code * <br />
                  <input
                   placeholder="Coupon Code"
                    type="text"
                    className="input w-full"
                    {...register("coupon")}
                  />
                </label>
              </div>
              <div>
                <label>
                 Coupon Rate * <br />
                  <input
                    type="text"
                    placeholder="coupon rate"
                    className="input w-full"
                    {...register("rate")}
                  />
                </label>
              </div>
            </div>
            <button className="btn btn-block bg-[#19456B] text-white mt-4">
             Add Banner
            </button>
          </form>
        </div>
      </div>
    );
};

export default AddBanner;